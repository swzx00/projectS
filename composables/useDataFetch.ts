import type { ResponseData } from './interface'

// 後端只接受大於 0 的頁碼（否則回 400），非正整數一律視為第 1 頁
const parsePage = (page: unknown): number => {
  const parsed = Math.floor(Number(page))
  return Number.isFinite(parsed) && parsed >= 1 ? parsed : 1
}

// 頁碼超出範圍時後端回 200 與空列表；仍有資料時回傳應導向的最後一頁，否則回傳 null
const getOutOfRangeLastPage = (result: ResponseData | null | undefined, page: number): number | null => {
  if (!result || result.dataCard?.length !== 0 || !(result.totalCount > 0) || !(result.perPage > 0)) return null
  const lastPage = Math.ceil(result.totalCount / result.perPage)
  return page > lastPage ? lastPage : null
}

export function useDataFetch(defaultTag: string) {
  const route = useRoute()
  const router = useRouter()

  // 頁數狀態（從 URL 取得）
  const currentPage = computed(() => parsePage(route.query.page))

  // 動態 tag 參數，從 URL 取得或者給定預設值（只有 frontend / design 頁面使用 tag）
  const currentTag = computed(() => {
    if ((defaultTag === 'frontend' || defaultTag === 'design') && route.query.tag !== undefined) {
      return String(route.query.tag)
    }
    return defaultTag
  })

  const buildApiPath = (page: number, tag: string) => {
    // 使用 Vite 環境變數
    const baseUrl = import.meta.env.VITE_API_BASE_URL || ''

    if (defaultTag === 'frontend') {
      if (tag === 'frontend') {
        return `${baseUrl}/public/dataCard?tag=nuxt,vue,tailwind,bootstrap,html,css,typescript,javascript,edm&page=${page}`
      }
      return `${baseUrl}/public/dataCard?tag=${encodeURIComponent(tag)}&page=${page}`
    }
    if (defaultTag === 'design') {
      if (tag === 'design') {
        return `${baseUrl}/public/dataCard?tag=web,edm,banner,video%20card,printed&page=${page}`
      }
      return `${baseUrl}/public/dataCard?tag=${encodeURIComponent(tag)}&page=${page}`
    }
    return `${baseUrl}/public/dataCard?page=${page}`
  }

  // 定義 async 函數來使用 await 獲取資料
  const fetchData = async (page: number, tag: string): Promise<ResponseData> => {
    try {
      // 加入 fetch 選項
      const response = await fetch(buildApiPath(page, tag), {
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

  // useAsyncData：SSR 時在 server 抓資料並輸出列表（SEO），client hydration 直接沿用，不會重複請求
  // 頁數或 tag 改變時重新抓取；dedupe 預設為 cancel，舊請求的回應不會覆蓋新資料
  const { data, pending, error } = useAsyncData(
    `dataCard-list:${defaultTag || 'all'}`,
    async () => {
      const page = currentPage.value
      const result = await fetchData(page, currentTag.value)

      // client 換頁時頁碼超出範圍，導向最後一頁（導向後會重新抓取，這次的結果作廢）
      const lastPage = import.meta.client ? getOutOfRangeLastPage(result, page) : null
      if (lastPage) {
        await router.replace({ query: { ...route.query, page: String(lastPage) } })
      }
      return result
    },
    { watch: [currentPage, currentTag] },
  )

  // SSR 輸出的頁碼超出範圍時（直接開啟 ?page=999），hydration 後在 client 導向最後一頁
  if (import.meta.client) {
    onMounted(() => {
      const lastPage = getOutOfRangeLastPage(data.value, currentPage.value)
      if (lastPage) router.replace({ query: { ...route.query, page: String(lastPage) } })
    })
  }

  // 當資料加載完成後，提供 totalCount 和 perPage 給分頁元件
  const totalCount = computed(() => data.value?.totalCount ?? null)
  const perPage = computed(() => data.value?.perPage ?? null)

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
