import type { ResponseData, FetchResult } from './interface'

export async function useSingleDataFetch(providedId?: string): Promise<FetchResult> {
  const route = useRoute()
  const router = useRouter()

  // 使用提供的 ID 或從路由中獲取 ID 參數
  const id = providedId || route.params.id
  const safeId = Array.isArray(id) ? id[0] : id || ''

  try {
    // 加入完整的 URL 路徑檢查
    const url = `/api/dataSingleCard?id=${safeId}`

    // 加入 fetch 選項
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })

    // 檢查回應狀態
    if (!response.ok) {
      throw new Error(`API 請求失敗: ${response.status} ${response.statusText}`)
    }

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
    // 更詳細的錯誤記錄
    console.error('資料獲取錯誤:', err)
    return {
      data: null,
      pending: false,
      error: err instanceof Error ? err.message : '資料獲取失敗',
    }
  }
}
