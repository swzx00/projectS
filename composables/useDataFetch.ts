import { useRoute } from 'vue-router'

// 定義資料型別
interface DataCard {
  id: string
  title: string
  tag: string[]
  content: string
  image: string
}

interface ResponseData {
  totalCount: number
  page: number
  perPage: number
  dataCard: DataCard[]
}

// 設定泛型參數 T 為 ResponseData，並在其中包含所需的欄位
export function useDataFetch<T extends ResponseData>(defaultTag: string) {
  const route = useRoute()

  // 頁數狀態
  const currentPage = ref(Number(route.query.page) || 1)

  // 動態 tag 參數，從 URL 取得或者給定預設值
  const currentTag = ref<string>(route.query.tag ? String(route.query.tag) : defaultTag)

  // 當頁數或 tag 改變時，重新抓取資料
  watch(
    () => [route.query.page, route.query.tag],
    () => {
      currentPage.value = Number(route.query.page) || 1
      currentTag.value = String(route.query.tag) || defaultTag
    },
  )

  // 使用 useFetch 抓取資料
  const { data, pending, error } = useFetch<T>(() => {
    return `/api/dataCard?tag=${currentTag.value}&page=${currentPage.value}`
  })

  // 當資料加載完成後，將 totalCount 和 perPage 賦值
  const totalCount = ref<number | null>(null)
  const perPage = ref<number | null>(null)

  watchEffect(() => {
    if (data.value) {
      const responseData = data.value as ResponseData // 強制轉型成 ResponseData
      totalCount.value = responseData.totalCount
      perPage.value = responseData.perPage
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
