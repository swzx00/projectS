export async function useGoogleTokenValid(idToken: string): Promise<{ valid: boolean; error?: string }> {
  try {
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
