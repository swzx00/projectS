// server/api/dataCard.get.ts

import { readFileSync } from 'fs'
import { resolve } from 'path'
import { defineEventHandler, getQuery } from 'h3'

export default defineEventHandler(async (event) => {
  // 模擬延遲 (例如延遲 0.3 秒)
  await new Promise((resolve) => setTimeout(resolve, 300))

  // 取得查詢參數
  const { id }: { id?: string } = getQuery(event)

  // 找到 JSON 檔案的絕對路徑
  const filePath = resolve('server/data/dataCard.json')

  // 讀取 JSON 檔案
  const rawData = readFileSync(filePath, 'utf-8')

  // 解析 JSON 資料
  const dataCard = JSON.parse(rawData)

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
})
