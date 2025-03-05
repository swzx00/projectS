import { promises as fs } from 'fs'
import { join } from 'path'
import { defineEventHandler, readBody } from 'h3'

export default defineEventHandler(async (event) => {
  const filePath = join(process.cwd(), process.env.DATA_FILE_PATH || '~/server/data/data.json')

  const body = await readBody(event)

  try {
    const fileData = await fs.readFile(filePath, 'utf-8')
    let jsonData = JSON.parse(fileData) // 使用 let 而不是 const
    if (Array.isArray(jsonData)) {
      const index = jsonData.findIndex((item: { title: string }) => item.title === body.title)
      if (index !== -1) {
        // 更新現有數據
        jsonData[index] = body
      } else {
        // 新增數據
        jsonData.push(body)
      }
    } else {
      jsonData = [body]
    }
    await fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), 'utf-8')
    return { message: 'Data saved successfully' }
  } catch (error) {
    console.error('Error:', error)
    return { message: 'Failed to save data', error }
  }
})
