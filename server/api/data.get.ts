import { promises as fs } from 'fs'
import { join } from 'path'
import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
  const filePath = join(process.cwd(), 'server/data/data.json')

  try {
    const fileData = await fs.readFile(filePath, 'utf-8')
    const jsonData = JSON.parse(fileData)
    return jsonData
  } catch (error) {
    console.error('Error:', error)
    return { message: 'Failed to read data', error }
  }
})
