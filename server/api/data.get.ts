import fs from 'fs/promises'
import { join } from 'path'
import { defineEventHandler, readBody } from 'h3'
import data from '~/server/data/data.json' // 直接引入 JSON 檔案

export default defineEventHandler(async (event) => {
  // 模擬延遲 (例如延遲 0 秒)
  await new Promise((resolve) => setTimeout(resolve, 0))

  if (event.req.method === 'GET') {
    try {
      return data
    } catch (error) {
      console.error('API 錯誤:', error)
      return { message: 'Failed to read data', error }
    }
  } else if (event.req.method === 'POST') {
    const body = await readBody(event)

    try {
      const index = data.findIndex((item: { title: string }) => item.title === body.title)
      if (index !== -1) {
        // 更新現有數據
        data[index] = body
      } else {
        // 新增數據
        data.push(body)
      }
      // 寫入文件
      const filePath = join(process.cwd(), 'server/data/data.json')
      await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8')
      return { message: 'Data saved successfully' }
    } catch (error) {
      console.error('API 錯誤:', error)
      return { message: 'Failed to save data', error }
    }
  }
})
