import type { ResponseData, FetchResult } from './interface'

export async function useSingleDataFetch(providedId?: string): Promise<FetchResult> {
  const route = useRoute()
  const router = useRouter()

  // 使用 Vite 環境變數
  const baseUrl = import.meta.env.VITE_API_BASE_URL || ''

  // 使用提供的 ID 或從路由中獲取 ID 參數
  const id = providedId || route.params.id
  const safeId = Array.isArray(id) ? id[0] : id || ''

  try {
    // 加入完整的 URL 路徑檢查
    const url = `${baseUrl}/public/dataCard/${safeId}`

    // 加入 fetch 選項
    const response = await fetch(url, {
      method: 'GET',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })

    // 檢查回應狀態
    if (!response.ok) {
      // 錯誤回應的 body 不一定是 JSON（例如代理伺服器的 HTML 錯誤頁）
      const errorData: ResponseData | null = await response.json().catch(() => null)

      // 400（無效的 ID）、404（找不到）導向 404 頁；500 等伺服器錯誤留在原頁顯示錯誤訊息
      if (response.status === 400 || response.status === 404) {
        router.push('/error404') // 跳轉到對應的頁面
      }
      throw new Error(errorData?.error || `API 請求失敗: ${response.status} ${response.statusText}`)
    }

    const data: ResponseData = await response.json()

    // 處理 dataCard 為 null 的情況
    if (data.dataCard === null) {
      router.push('/error404') // 跳轉到對應的頁面
    }

    return {
      data,
      pending: false,
      error: '',
    }
  } catch (err) {
    // 更詳細的錯誤記錄
    console.error('資料獲取錯誤:', err)
    return {
      data: null,
      pending: false,
      error: err instanceof Error ? err.message : '資料獲取失敗',
    }
  }
}
