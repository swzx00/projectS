import dataResume from '~/server/data/dataResume.json' // 直接引入 JSON 檔案

export default defineEventHandler(async () => {
  // 模擬延遲 (例如延遲 0 秒)
  await new Promise((resolve) => setTimeout(resolve, 0))

  try {
    // 如果資料存在就返回
    if (dataResume) {
      return {
        dataResume,
        error: null,
      }
    }

    // 如果資料不存在返回錯誤
    return {
      dataResume: null,
      error: '資料未找到',
    }
  } catch (error) {
    console.error('API 錯誤:', error)
    return {
      dataResume: null,
      error: '資料處理失敗',
    }
  }
})
