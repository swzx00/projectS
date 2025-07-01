import type { ResponseData, FetchResult } from './interface'

export async function useSinglePreviewFetch(providedId?: string): Promise<FetchResult> {
  const route = useRoute()
  // const router = useRouter()

  // 使用 Vite 環境變數
  const baseUrl = import.meta.env.VITE_API_BASE_URL || ''

  // 使用提供的 ID 或從路由中獲取 ID 參數
  const id = providedId || route.params.id
  const safeId = Array.isArray(id) ? id[0] : id || ''

  // 從 localStorage 抓 token
  const token = localStorage.getItem('google_id_token') || ''

  try {
    // 加入完整的 URL 路徑檢查
    const url = `${baseUrl}/admin/preview/${safeId}`

    // 加入 fetch 選項
    const response = await fetch(url, {
      method: 'GET',
      credentials: 'include',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })

    // 檢查回應狀態
    if (!response.ok) {
      const errorData: ResponseData = await response.json()
      if (response.status === 401 || response.status === 403) {
        localStorage.removeItem('google_id_token')
      }

      return {
        data: errorData,
        pending: false,
        error: errorData?.error || 'API 請求失敗',
        status: response.status,
      }
    }

    const data: ResponseData = await response.json()

    // 處理 dataCard 為 null 的情況
    if (data.dataCard === null) {
      // router.push('/error404') // 跳轉到對應的頁面
    }

    return {
      data,
      pending: false,
      error: '',
      status: response.status,
    }
  } catch (err) {
    // 更詳細的錯誤記錄
    console.error('資料獲取錯誤:', err)
    return {
      data: null,
      pending: false,
      error: err instanceof Error ? err.message : '資料獲取失敗',
      status: undefined,
    }
  }
}
