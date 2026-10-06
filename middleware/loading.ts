// 上一次導頁排程的關閉計時器，連續導頁時要先清掉，避免舊計時器提早關閉新頁面的 Loading
let hideTimer: ReturnType<typeof setTimeout> | null = null

export default defineNuxtRouteMiddleware((to, from) => {
  // 同一頁面只改 query / hash（換頁碼等）時不開啟，頁面本身會顯示載入中；
  // 若開啟，頁碼解析後沒變就不會重新抓資料，waitForData 頁面的 Loading 會關不掉
  // from.matched 為空代表首次載入（server 已開啟 Loading），仍要繼續處理
  if (import.meta.client && from.matched.length > 0 && to.path === from.path) return

  const loadingStore = useLoadingStore()

  // 開啟 Loading 畫面（server 與 client 都要開啟，hydration 時兩邊的 isLoading 才會一致）
  loadingStore.showLoading()

  // 關閉 Loading 的排程只在 client 執行
  if (import.meta.server) return

  if (hideTimer) {
    clearTimeout(hideTimer)
    hideTimer = null
  }

  // 會抓資料的頁面由頁面自己在資料載入完成後關閉（usePageLoading）
  if (to.meta.waitForData) return

  // 模擬頁面加載完成，關閉 Loading 畫面
  hideTimer = setTimeout(() => {
    hideTimer = null
    loadingStore.hideLoading()
  }, 350) // 350ms 後關閉，根據需求調整
})
