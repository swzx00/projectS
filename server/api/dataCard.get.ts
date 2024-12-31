import { readFileSync } from 'fs'
import { resolve } from 'path'
import { defineEventHandler, getQuery } from 'h3'

export default defineEventHandler(async (event) => {
  // 模擬延遲 (例如延遲 0 秒)
  await new Promise((resolve) => setTimeout(resolve, 0))

  // 取得查詢參數
  const { page = 1, tag }: { page: string | number; tag?: string } = getQuery(event)

  // 如果 tag 存在，去除引號並清除空格，並轉換為小寫
  const processedTags = tag ? tag.split(',').map((t) => t.replace(/['"]+/g, '').trim().toLowerCase()) : undefined

  // 每頁固定顯示 12 筆
  const perPage = 12

  // 找到 JSON 檔案的絕對路徑
  const filePath = resolve('server/data/dataCard.json')

  // 讀取 JSON 檔案
  const rawData = readFileSync(filePath, 'utf-8')

  // 解析 JSON 資料
  const dataCard = JSON.parse(rawData)

  // 根據 id 反向排序，再根據日期反向排序 資料
  const sortedData = dataCard
    .sort((a: any, b: any) => b.id - a.id) // 反向排序 id
    .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime()) // 反向排序 date

  // 如果有 tag 參數，過濾資料並將 tag 陣列中的值統一轉為小寫
  const filteredData = processedTags
    ? sortedData.filter((item: any) =>
        processedTags.some((tag) => item.tag.some((t: string) => t.toLowerCase() === tag)),
      ) // 檢查 tag 陣列中是否有小寫的 tag
    : sortedData

  // 計算總筆數
  const totalCount = filteredData.length

  // 計算分頁的起始和結束索引
  const startIndex = (Number(page) - 1) * perPage
  const endIndex = startIndex + perPage

  // 切割分頁資料
  const paginatedData = filteredData.slice(startIndex, endIndex)

  return {
    totalCount, // 總筆數
    page: Number(page), // 目前第幾頁
    perPage, // 每頁筆數
    dataCard: paginatedData, // 當前頁的資料
  }
})
