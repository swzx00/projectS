import { readFileSync } from 'fs'
import { resolve } from 'path'

export default defineEventHandler(async () => {
  // 模擬延遲 (例如延遲 0 秒)
  await new Promise((resolve) => setTimeout(resolve, 0))

  // 找到 JSON 檔案的絕對路徑
  const filePath = resolve('server/data/dataResume.json')

  // 讀取 JSON 檔案
  const rawData = readFileSync(filePath, 'utf-8')

  // 解析 JSON 資料
  const dataResume = JSON.parse(rawData)

  // 如果找到資料，返回該資料
  if (dataResume) {
    return { dataResume }
  } else {
    return { dataResume: null, error: '資料未找到' } // 沒有找到資料
  }
})
