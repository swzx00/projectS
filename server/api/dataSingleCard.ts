import { defineEventHandler, getQuery } from 'h3'
import dataCard from '~/server/data/dataCard.json' // 直接引入 JSON 檔案

export default defineEventHandler(async (event) => {
  // 模擬延遲 (例如延遲 0 秒)
  await new Promise((resolve) => setTimeout(resolve, 0))

  try {
    // 取得查詢參數
    const { id }: { id?: string } = getQuery(event)

    // 根據 id 查找單一資料
    const selectedData = id
      ? dataCard.find((item: any) => item.id === id) // 根據 id 查找資料
      : null

    // 如果找到資料，返回該資料
    if (selectedData) {
      return { dataCard: selectedData }
    } else {
      return { dataCard: null, error: '資料未找到' } // 沒有找到資料
    }
  } catch (error) {
    console.error('API 錯誤:', error)
    return {
      dataCard: null,
      error: '資料處理失敗',
    }
  }
})
