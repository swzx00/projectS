const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'server/data/data.json')

if (!fs.existsSync(filePath)) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true })
  fs.writeFileSync(filePath, '[]', 'utf-8')
  console.log('data.json file created')
} else {
  console.log('data.json file already exists')
}
