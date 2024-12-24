import type { ResponseData } from './interface'

export function useDataFetch(defaultTag: string) {
  const route = useRoute()

  // 頁數狀態
  const currentPage = ref(Number(route.query.page) || 1)

  // 動態 tag 參數，從 URL 取得或者給定預設值
  const currentTag = ref<string>(route.query.tag ? String(route.query.tag) : defaultTag)

  const apiPath = ref<string | null>(null)

  if (defaultTag === 'frontend' || defaultTag === 'design') {
    // 當頁數或 tag 改變時，重新抓取資料
    watch(
      () => [route.query.page, route.query.tag],
      () => {
        currentPage.value = Number(route.query.page) || 1
        currentTag.value = String(route.query.tag) || defaultTag
      },
    )
  } else {
    // 當頁數改變時，重新抓取資料
    watch(
      () => route.query.page,
      (newPage) => {
        currentPage.value = Number(newPage) || 1
      },
    )
  }

  // 定義 async 函數來使用 await 獲取資料
  const fetchData = async () => {
    try {
      if (defaultTag === 'frontend' || defaultTag === 'design') {
        apiPath.value = `/api/dataCard?tag=${currentTag.value}&page=${currentPage.value}`
      } else {
        apiPath.value = `/api/dataCard?page=${currentPage.value}`
      }
      const response = await fetch(apiPath.value)
      const responseData: ResponseData = await response.json()

      // 當資料加載完成後，將 totalCount 和 perPage 賦值
      totalCount.value = responseData.totalCount
      perPage.value = responseData.perPage
      return responseData
    } catch (err) {
      console.error('Error fetching data:', err)
      throw err
    }
  }

  // 使用 ref 和 watchEffect 來儲存狀態
  const data = ref<ResponseData | null>(null)
  const pending = ref<boolean>(false)
  const error = ref<any>(null)

  const totalCount = ref<number | null>(null)
  const perPage = ref<number | null>(null)

  // 使用 watchEffect 來觸發資料請求
  watchEffect(async () => {
    pending.value = true
    error.value = null

    try {
      const result = await fetchData()
      data.value = result
    } catch (err) {
      error.value = err
    } finally {
      pending.value = false
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
