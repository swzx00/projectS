import type { ResponseDataResume } from './interface'

export async function useDataResumeFetch() {
  try {
    // 使用 fetch 發送請求並等待回應
    const response = await fetch(`/api/dataResume`)
    const data: ResponseDataResume = await response.json()

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
