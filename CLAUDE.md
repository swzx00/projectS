# CLAUDE.md

ProjectS 作品集網站的前台（Nuxt 4 + Vue 3 + TypeScript，SSR），部署在 Vercel。作品集文章透過後端 API（`../projectS_backend`）的 `/public/*` 讀取；`/preview/[id]` 是後台（`../projectS_admin`）的文章預覽頁，token 由後台以 `postMessage` 傳入。

## 常用指令

```bash
npm run dev       # 本機開發（http://localhost:3000）
npm run build     # 正式建置（nuxt.config.ts 開啟 typeCheck，會一併做型別檢查）
npm run preview   # 預覽 build 結果
npm run generate  # 靜態輸出（目前部署未使用）
npm run lint      # ESLint 8（.eslintrc.cjs，含 Prettier 規則）
```

改完程式後至少要跑 `npm run lint` 和 `npm run build`，兩者都必須通過（`no-console` 的 warning 是既有狀況）。只想做型別檢查時用 `npx nuxi typecheck`。

Node.js 版本須符合 Nuxt 4 的要求：`^22.21.0 || ^24.11.0`，版本不符時 `nuxt dev` 會出現 unsupported 警告。

## 架構

Nuxt 預設目錄結構（未使用 `app/` 目錄），`components/`、`composables/`、`stores/` 會自動匯入。

| 目錄 / 檔案      | 內容                                                                                                   |
| ---------------- | ------------------------------------------------------------------------------------------------------ |
| `app.vue`        | 根元件：Loading、Vercel Analytics / Speed Insights，以及 token 驗證                                    |
| `pages/`         | 頁面路由（見下表）                                                                                     |
| `layouts/`       | `default`、`design`、`frontend`、`preview`                                                             |
| `components/`    | 依區塊分資料夾：`Card`、`Header`、`Footer`、`Side`、`Pagination`、`Portfolio` 等                       |
| `composables/`   | API 呼叫、分頁、標籤、GSAP 動畫；型別定義集中在 `interface.ts`                                         |
| `stores/`        | Pinia：`authStore`（預覽用 token，persist 到 sessionStorage）、`loadingStore`、`hoverStore`            |
| `middleware/`    | `loading`：換頁時顯示 Loading 畫面（見下方說明）                                                       |
| `plugins/`       | `pinia-plugin-persistedstate`、`clear-legacy-token`（清除舊版留在 localStorage 的 token），皆僅 client |
| `server/api/`    | `dataResume`：回傳 `server/data/dataResume.json`（履歷資料，不經過後端）                               |
| `nuxt.config.ts` | 模組、Google Fonts、全站 SEO meta                                                                      |

### 路由

| 路徑                  | Layout     | 資料來源                                     |
| --------------------- | ---------- | -------------------------------------------- |
| `/`                   | 無         | —                                            |
| `/about`              | `default`  | —                                            |
| `/resume`             | `default`  | `/api/dataResume`（Nuxt server）             |
| `/portfolio`          | `default`  | 後端 `/public/dataCard?page=`                |
| `/portfolio/frontend` | `frontend` | 後端 `/public/dataCard?tag=...&page=`        |
| `/portfolio/design`   | `design`   | 後端 `/public/dataCard?tag=...&page=`        |
| `/portfolio/[id]`     | `default`  | 後端 `/public/dataCard/:id`                  |
| `/preview/[id]`       | `preview`  | 後端 `/admin/preview/:id`（需要 Bearer JWT） |
| `/error404`、其他路徑 | 無         | —                                            |

列表頁的資料請求在 `composables/useDataFetch.ts`，以 `useAsyncData` 在 SSR 時抓取並輸出列表（SEO），hydration 沿用 payload 不重複請求；頁碼與 tag 從 URL query（`?page=`、`?tag=`）讀取，改變時重新抓取；分頁元件透過 `usePagination` 以 `router.push` 更新 query。同一頁面不要重複呼叫 `useDataFetch`（每次呼叫都會各自送出請求）；設計作品側欄的 hover 預覽由 `CardDesign` 把卡片寫入 `hoverStore.hoveredCard`，側欄直接讀取。

### Loading 畫面

- `middleware/loading.ts` 換頁時開啟 `AppLoading`，預設 350ms 後關閉。server 端也要開啟（SSR 時 `isLoading` 會傳到 client，client 在 hydration 前也會執行 middleware，兩邊不一致會造成 hydration mismatch），關閉的計時器只在 client 執行。
- 會抓資料的頁面設定 `definePageMeta({ middleware: ['loading'], waitForData: true })` 並呼叫 `usePageLoading(pending)`，等 `pending` 變為 `false` 才關閉。目前套用在 `/portfolio`、`/portfolio/[id]`、`/resume`。
- 新增會抓資料的頁面時，`waitForData` 與 `usePageLoading` 要一起加，只加其中一個會讓 Loading 不關閉或提早關閉。
- 同一頁面只改 query / hash（例如換頁碼）時 middleware 不開啟 Loading，由頁面自己顯示「載入中」。判斷時必須排除 hydration 期間（`useNuxtApp().isHydrating`）：Nuxt 會在 `app:created` 以 `router.replace({ force: true })` 讓 client 再跑一次 middleware，這次 `from` 與 `to` 是同一頁，若略過，server 開啟的 Loading 就不會關閉。
- 資料還沒載入完就離開時，`usePageLoading` 會在卸載時關閉 Loading（新頁面沒有 `waitForData` 時）。

### 預覽頁與 token

- `authStore.idToken` 存的是**後端簽發的 JWT**（名稱 `google_id_token` 是沿用舊名），persist 在 **sessionStorage**（key `google_id_token`），關閉分頁即清除。不要改回 localStorage：token 會長期留在公開前台的網域。
- `/preview/[id]` 開啟後會對 `window.opener` 送出 `{ type: 'ready' }`，後台回傳 `{ token }`；後台登出時送出 `{ type: 'logout' }`。收訊息時必須檢查 `event.origin === VITE_ADMIN_BASE_URL` 且 `event.source === window.opener`。
- `app.vue` 會呼叫後端 `/auth/verify` 驗證 token，後端回 401 時移除 token。
- 預覽頁的載入一律經過 `loadPreview()`，只採用最新一次請求的結果；收到 401 時只移除該次請求使用的 token（等待回應期間 token 可能已被後台送來的新 token 取代）。
- 後端 `/admin/preview/:id` 只允許預覽草稿（`status = 0`）；已上線的文章回 403，前台會導向 `/portfolio/[id]`。
- 修改預覽或登入流程時，要一併確認後端與後台的對應實作。

### API 錯誤處理

後端錯誤回應的格式為 `{ error: string }`，前台顯示錯誤時優先使用 `error`（body 不一定是 JSON，解析要 `.catch(() => null)`）。

| API                    | 狀態碼處理                                                                                    |
| ---------------------- | --------------------------------------------------------------------------------------------- |
| `/public/dataCard`     | 400（page、tag 不合法）/ 500：顯示錯誤訊息。頁碼超出範圍回 200 + 空列表，有資料時導向最後一頁 |
| `/public/dataCard/:id` | 400（無效 ID）/ 404：導向 `/error404`；500：留在原頁顯示錯誤訊息                              |
| `/admin/preview/:id`   | **只有 401 移除 token**；403 代表文章已上線（不是驗證失敗），其他錯誤顯示訊息後導向 404       |
| `/auth/verify`         | 只有 401 移除 token；400 / 500 / 網路錯誤保留                                                 |

前台送出前會先避免 400：頁碼非正整數一律視為 1（`useDataFetch` 的 `parsePage`），tag 以 `encodeURIComponent` 編碼。

文章 ID 送出前以 `isValidDataCardId`（`composables/dataCardId.ts`，與後端同規則：1～18 位數字）檢查，並以 `encodeURIComponent` 編碼。route param 是已解碼的值，直接拼進 API 路徑會造成路徑穿越（預覽請求帶有 Bearer token）。

## 環境變數

使用 Vite 的 `.env.[mode]`（`.env.*` 都在 `.gitignore` 內，不會進版控），以 `import.meta.env.VITE_*` 讀取：

| 變數                     | 用途                                               |
| ------------------------ | -------------------------------------------------- |
| `VITE_ENV_MODE`          | 環境標示（`local` / `development` / `production`） |
| `VITE_API_BASE_URL`      | 後端 API 網址                                      |
| `VITE_ADMIN_BASE_URL`    | 後台網址（預覽頁 `postMessage` 的 origin 檢查）    |
| `VITE_FRONTEND_BASE_URL` | 前台網址                                           |

Vercel 上的環境變數要在 Project Settings 分別設定，不會讀取本機的 `.env` 檔。

## 程式風格

- 排版依照 `.editorconfig` 與 `.prettierrc.cjs`：2 空格、LF、不加分號、單引號、`trailingComma: 'all'`、每行 120 字元。
- Tailwind class 排序由 `prettier-plugin-tailwindcss` 處理。
- `tsconfig.json` 為 `strict: false`。

## Git 流程

- 從 `dev` 建立分支，依類型命名：`feat/*`（新功能）、`fix/*`（修 bug）、`docs/*`（文件）、`chore/*`（設定、套件更新），完成後合併回 `dev`。
- 發版時從 `dev` 建立 `release-x.y.z`，更新 `package.json` 版本號（`chore(release): vX.Y.Z`），合併到 `main` 並加上 `vX.Y.Z` tag，再把 `main` 合併回 `dev`。
- `main` 分支會由 Vercel 部署到正式環境。
- Commit 訊息格式：`<分支名稱>: <摘要>`，**一律使用英文**，例如 `fix/tag-video-card: fix 'video card' tag never matching`。
- `npm audit` 的建議若是 `npm audit fix --force`，會把 `nuxt` 降版，不要執行。

## 相關專案

| 專案                  | 說明                                               |
| --------------------- | -------------------------------------------------- |
| `../projectS_backend` | 後端 API（Express + Supabase + Cloudinary）        |
| `../projectS_admin`   | 後台管理系統（Vue 3 + Vite），文章預覽會開啟本專案 |
