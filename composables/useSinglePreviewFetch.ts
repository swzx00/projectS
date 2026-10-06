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

  if (!isValidDataCardId(safeId)) {
    return { data: null, pending: false, error: '無效的 ID', status: 400 }
  }

  try {
    // 加入完整的 URL 路徑檢查
    // route param 已被解碼，需重新編碼，避免 `..%2F` 變成 `../` 造成路徑穿越（此請求帶有 Bearer token）
    const url = `${baseUrl}/admin/preview/${encodeURIComponent(safeId)}`

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
      // 只有 401 代表 token 失效；403 是「此內容已上線，無法預覽」，token 仍有效
      // 等待回應期間 token 可能已被換成後台送來的新 token，只移除這次請求使用的 token
      if (response.status === 401 && auth.idToken === token) {
        auth.removeToken() // 用 Pinia 的方法移除 token
      }

      // 錯誤回應的 body 不一定是 JSON（例如代理伺服器的 HTML 錯誤頁）
      const errorData: ResponseData | null = await response.json().catch(() => null)

      return {
        data: errorData,
        pending: false,
        error: errorData?.error || `API 請求失敗: ${response.status}`,
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
