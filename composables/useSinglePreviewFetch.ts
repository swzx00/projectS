import type { ResponseData, FetchResult } from './interface'

export async function useSinglePreviewFetch(providedId?: string): Promise<FetchResult> {
  const route = useRoute()
  // const router = useRouter()

  // 使用 Vite 環境變數
  const baseUrl = import.meta.env.VITE_API_BASE_URL || ''

  // 使用提供的 ID 或從路由中獲取 ID 參數
  const id = providedId || route.params.id
  const safeId = Array.isArray(id) ? id[0] : id || ''

  // 用 Pinia 取得 token
  const auth = useAuthStore()
  const token = auth.idToken // Pinia 的 token

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
        auth.removeToken() // 用 Pinia 的方法移除 token
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
    let errorMessage = err instanceof Error ? err.message : '資料獲取失敗'
    const isNetworkError = err instanceof TypeError && err.message === 'Failed to fetch'

    // 針對 fetch 失敗 (通常是網路問題) 提供更友善的訊息
    if (isNetworkError) {
      errorMessage = '無法連接至伺服器，請確認後端服務是否已啟動'
      console.warn('連線失敗:', errorMessage)
    } else {
      // 其他未預期的錯誤才使用 error
      console.error('資料獲取錯誤:', err)
    }

    return {
      data: null,
      pending: false,
      error: errorMessage,
      status: undefined,
    }
  }
}
