import type { ResponseDataResume } from './interface'

export async function useDataResumeFetch() {
  try {
    // 加入完整的 URL 路徑檢查
    const url = '/api/dataResume'

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

    const data = await response.json()

    // 檢查回傳的資料結構
    if (!data.dataResume && !data.error) {
      throw new Error('無效的資料格式')
    }

    return {
      data: data.dataResume as ResponseDataResume,
      pending: false,
      error: data.error,
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
