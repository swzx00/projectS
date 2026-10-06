# projectS

林家丞（swzx00）的作品集網站前台，展示前端與設計作品、履歷與個人介紹。

| 環境     | 網址                          |
| -------- | ----------------------------- |
| 正式環境 | https://swzx00.vercel.app     |
| 開發環境 | https://swzx00-dev.vercel.app |

## 技術架構

- **框架**：Nuxt 4（SSR）+ Vue 3（`<script setup>`）+ TypeScript
- **狀態管理**：Pinia + pinia-plugin-persistedstate
- **樣式**：Tailwind CSS（@nuxtjs/tailwindcss）+ Sass
- **動畫**：GSAP
- **圖示 / 字型**：@nuxt/icon、@nuxtjs/google-fonts
- **分析**：Vercel Analytics、Vercel Speed Insights
- **部署**：Vercel

## 相關專案

| 專案               | 說明                                            |
| ------------------ | ----------------------------------------------- |
| `projectS`         | 本專案，作品集前台，也提供後台的文章預覽頁      |
| `projectS_backend` | 後端 API（Express），負責資料庫、圖片與登入驗證 |
| `projectS_admin`   | 後台管理系統（Vue），新增、編輯與上線文章       |

## 快速開始

### 1. 環境需求

- Node.js `^22.21.0` 或 `^24.11.0`（Nuxt 4 的支援範圍）
- npm

### 2. 安裝套件

```bash
npm install
```

### 3. 設定環境變數

在專案根目錄建立 `.env.development.local`（本機開發）：

```bash
# 環境標示
VITE_ENV_MODE=local

# 後端 API 網址
VITE_API_BASE_URL=http://localhost:4000

# 後台網址（文章預覽時檢查 postMessage 來源）
VITE_ADMIN_BASE_URL=http://localhost:5173

# 前台網址
VITE_FRONTEND_BASE_URL=http://localhost:3000
```

`.env.*` 都不會進版控。只看已上線的文章時，`VITE_API_BASE_URL` 也可以指向開發環境的後端。

### 4. 啟動開發伺服器

```bash
npm run dev
```

開啟 http://localhost:3000。

## 指令

| 指令               | 說明                     |
| ------------------ | ------------------------ |
| `npm run dev`      | 啟動本機開發伺服器       |
| `npm run build`    | 正式建置（包含型別檢查） |
| `npm run preview`  | 在本機預覽 build 結果    |
| `npm run generate` | 靜態輸出                 |
| `npm run lint`     | ESLint 檢查              |

## 頁面

| 路徑                  | 說明                                         |
| --------------------- | -------------------------------------------- |
| `/`                   | 首頁                                         |
| `/about`              | 關於我                                       |
| `/resume`             | 履歷（資料在 `server/data/dataResume.json`） |
| `/portfolio`          | 全部作品                                     |
| `/portfolio/frontend` | 前端作品，可用 `?tag=` 篩選                  |
| `/portfolio/design`   | 設計作品，可用 `?tag=` 篩選                  |
| `/portfolio/[id]`     | 作品內容                                     |
| `/preview/[id]`       | 後台文章預覽（只能從後台開啟）               |

## 專案結構

```text
projectS/
├── app.vue              # 根元件
├── assets/css/          # Tailwind 進入點
├── components/          # 元件（Card、Header、Footer、Side、Pagination、Portfolio…）
├── composables/         # API 呼叫、分頁、標籤、動畫；型別在 interface.ts
├── layouts/             # default、design、frontend、preview
├── middleware/          # loading
├── pages/               # 頁面路由
├── plugins/             # pinia-plugin-persistedstate
├── public/              # 靜態檔（OG 圖片、履歷 PDF、robots.txt）
├── server/              # Nuxt server API（履歷資料）
├── stores/              # Pinia store
├── nuxt.config.ts
└── tailwind.config.js
```

`components/`、`composables/` 與 `stores/` 會自動匯入。

## 部署

push 到 GitHub 後，Vercel 會自動部署：

- `dev` 分支 → 開發環境
- `main` 分支 → 正式環境

Vercel 的環境變數要在 Project Settings 設定（上方 4 個 `VITE_*`），正式環境要指向正式的後端與後台。Node.js Version 請設定為 24.x。

## 開發流程

- 從 `dev` 建立 `feat/*`、`fix/*`、`docs/*`、`chore/*` 分支，完成後合併回 `dev`。
- 發版時建立 `release-x.y.z` 分支合併到 `main`，並加上 `vX.Y.Z` tag，再把 `main` 合併回 `dev`。
- Commit 訊息格式：`<分支名稱>: <摘要>`，**一律使用英文**，例如 `fix/tag-video-card: fix 'video card' tag never matching`。

## 開發環境建議

使用 [VS Code](https://code.visualstudio.com/)，並安裝：

- [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
