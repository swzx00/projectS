import { useRoute } from 'vue-router'

// 定義資料型別
interface DataCard {
  id: string
  title: string
  tag: string[]
  content: string
  image: string[]
  date: string
  link?: string // 可選屬性
}

interface ResponseData {
  dataCard: DataCard | null
  error?: string
}

interface FetchResult {
  data: ResponseData | null
  pending: boolean
  error: string
}

export async function useSingleDataFetch(providedId?: string): Promise<FetchResult> {
  const route = useRoute()
  const router = useRouter()

  // 使用提供的 ID 或從路由中獲取 ID 參數
  const id = providedId || route.params.id
  const safeId = Array.isArray(id) ? id[0] : id || ''

  try {
    // 使用 fetch 發送請求並等待回應
    const response = await fetch(`/api/dataSingleCard?id=${safeId}`)
    const data: ResponseData = await response.json()

    // 處理 dataCard 為 null 的情況
    if (data.dataCard === null) {
      router.push('/not-found') // 跳轉到對應的頁面
    }

    return {
      data,
      pending: false,
      error: '',
    }
  } catch (err) {
    // 使用 console.warn 替代 console.error
    console.warn('Error fetching data:', err)
    return {
      data: null,
      pending: false,
      error: err instanceof Error ? err.message : 'Unknown error',
    }
  }
}
