import type { ResponseData } from './interface'

// 後端只接受大於 0 的頁碼（否則回 400），非正整數一律視為第 1 頁
const parsePage = (page: unknown): number => {
  const parsed = Math.floor(Number(page))
  return Number.isFinite(parsed) && parsed >= 1 ? parsed : 1
}

export function useDataFetch(defaultTag: string) {
  const route = useRoute()
  const router = useRouter()

  // 頁數狀態
  const currentPage = ref(parsePage(route.query.page))

  // 動態 tag 參數，從 URL 取得或者給定預設值
  const currentTag = ref<string>(route.query.tag ? String(route.query.tag) : defaultTag)

  const apiPath = ref<string | null>(null)

  if (defaultTag === 'frontend' || defaultTag === 'design') {
    // 當頁數或 tag 改變時，重新抓取資料
    watch(
      () => [route.query.page, route.query.tag],
      () => {
        currentPage.value = parsePage(route.query.page)
        if (route.query.tag === undefined) {
          currentTag.value = defaultTag
        } else {
          currentTag.value = String(route.query.tag)
        }
      },
    )
  } else {
    // 當頁數改變時，重新抓取資料
    watch(
      () => route.query.page,
      (newPage) => {
        currentPage.value = parsePage(newPage)
      },
    )
  }

  // 定義 async 函數來使用 await 獲取資料
  const fetchData = async () => {
    // 使用 Vite 環境變數
    const baseUrl = import.meta.env.VITE_API_BASE_URL || ''

    try {
      if (defaultTag === 'frontend') {
        if (currentTag.value === 'frontend' || currentTag.value === undefined) {
          apiPath.value = `${baseUrl}/public/dataCard?tag=nuxt,vue,tailwind,bootstrap,html,css,typescript,javascript,edm&page=${currentPage.value}`
        } else {
          apiPath.value = `${baseUrl}/public/dataCard?tag=${encodeURIComponent(currentTag.value)}&page=${currentPage.value}`
        }
      } else if (defaultTag === 'design') {
        if (currentTag.value === 'design' || currentTag.value === undefined) {
          apiPath.value = `${baseUrl}/public/dataCard?tag=web,edm,banner,video%20card,printed&page=${currentPage.value}`
        } else {
          apiPath.value = `${baseUrl}/public/dataCard?tag=${encodeURIComponent(currentTag.value)}&page=${currentPage.value}`
        }
      } else {
        apiPath.value = `${baseUrl}/public/dataCard?page=${currentPage.value}`
      }

      // 加入 fetch 選項
      const response = await fetch(apiPath.value, {
        method: 'GET',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })

      // 檢查回應狀態
      if (!response.ok) {
        // 優先使用後端回傳的錯誤訊息（例如 400「無效的 tag」）；body 不一定是 JSON
        const errorData: ResponseData | null = await response.json().catch(() => null)
        throw new Error(errorData?.error || `API 請求失敗: ${response.status} ${response.statusText}`)
      }

      const responseData: ResponseData = await response.json()
      return responseData
    } catch (err) {
      console.error('Error fetching data:', err)
      throw err
    }
  }

  // 使用 ref 和 watchEffect 來儲存狀態
  const data = ref<ResponseData | null>(null)
  const pending = ref<boolean>(true)
  const error = ref<any>(null)

  const totalCount = ref<number | null>(null)
  const perPage = ref<number | null>(null)

  // 使用 watchEffect 來觸發資料請求
  watchEffect(async (onCleanup) => {
    // 頁數或 tag 再次改變時，舊請求的回應作廢，避免較晚回來的舊資料覆蓋新資料
    let isStale = false
    onCleanup(() => {
      isStale = true
    })
    // 導向最後一頁期間維持 pending，避免先閃過「沒有作品」
    let isRedirecting = false

    pending.value = true
    error.value = null

    try {
      const result = await fetchData()
      if (isStale) return

      // 頁碼超出範圍時後端回 200 與空列表；仍有資料時導向最後一頁
      if (import.meta.client && result.dataCard?.length === 0 && result.totalCount > 0 && result.perPage > 0) {
        const lastPage = Math.ceil(result.totalCount / result.perPage)
        if (currentPage.value > lastPage) {
          isRedirecting = true
          router.replace({ query: { ...route.query, page: String(lastPage) } })
          return
        }
      }

      data.value = result
      // 當資料加載完成後，將 totalCount 和 perPage 賦值
      totalCount.value = result.totalCount
      perPage.value = result.perPage
    } catch (err) {
      if (isStale) return
      error.value = err
    } finally {
      if (!isStale && !isRedirecting) pending.value = false
    }
  })

  return {
    currentPage,
    currentTag,
    data,
    pending,
    error,
    totalCount,
    perPage,
  }
}
