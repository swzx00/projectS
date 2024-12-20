import { useRoute } from 'vue-router'

// 定義資料型別
interface DataCard {
  id: string
  title: string
  tag: string[]
  content: string
  image: string
  date: string
  link?: string // 可選屬性
}

interface ResponseData {
  dataCard: DataCard | null
  error?: string
}

// 設定泛型參數 T 為 ResponseData，並在其中包含所需的欄位
export async function useSingleDataFetch<T extends ResponseData>(defaultTag: string) {
  const route = useRoute()
  const router = useRouter()

  // 從路由中獲取 ID 參數
  const { id } = route.params
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
    console.error(err)
    return {
      data: null,
      pending: false,
      error: err instanceof Error ? err.message : 'Unknown error', // 檢查錯誤是否為 Error 類型
    }
  }
}
