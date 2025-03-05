import fs from 'fs'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import express from 'express'
import cors from 'cors'

const app = express()
const port = 3000

// 獲取當前模組的目錄名
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Middleware to parse JSON bodies
app.use(express.json())

// 啟用 CORS
app.use(cors())

// Route to get data from JSON file
app.get('/data', (req, res) => {
  const dataPath = path.join(__dirname, 'data', 'data.json')
  fs.readFile(dataPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading data')
    }
    res.send(JSON.parse(data))
  })
})

// Route to save data to JSON file
app.post('/data', (req, res) => {
  const dataPath = path.join(__dirname, 'data', 'data.json')
  const newData = req.body
  fs.writeFile(dataPath, JSON.stringify(newData, null, 2), 'utf8', (err) => {
    if (err) {
      return res.status(500).send('Error writing data')
    }
    res.send('Data saved successfully')
  })
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
