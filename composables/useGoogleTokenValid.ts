export async function useGoogleTokenValid(idToken: string): Promise<{ valid: boolean; error?: string }> {
  try {
    // 如果 idToken 為空或未定義，直接返回無效，不發送 API 請求
    if (!idToken) {
      return { valid: false, error: 'No token provided' }
    }

    // 加入完整的 URL 路徑檢查
    const url = `${import.meta.env.VITE_API_BASE_URL}/auth/verify`

    // 加入 fetch 選項
    const response = await fetch(url, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: idToken }),
    })

    // 檢查回應狀態
    if (!response.ok) {
      // 如果是 401 (Token 過期/無效)，直接回傳 false，不拋出錯誤以免洗版 Console
      if (response.status === 401) {
        return { valid: false, error: '憑證已過期或無效' }
      }
      throw new Error(`API 請求失敗: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()

    // 檢查回傳的資料結構
    if (!data.valid && !data.error) {
      throw new Error('無效的資料格式')
    }

    if (response.ok && data.valid) {
      return { valid: true }
    } else {
      return { valid: false, error: data.error || '認證失敗' }
    }
  } catch (err) {
    console.error('資料獲取錯誤:', err)
    return {
      valid: false,
      error: err instanceof Error ? err.message : '資料獲取失敗',
    }
  }
}
