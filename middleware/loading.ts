// 上一次導頁排程的關閉計時器，連續導頁時要先清掉，避免舊計時器提早關閉新頁面的 Loading
let hideTimer: ReturnType<typeof setTimeout> | null = null

export default defineNuxtRouteMiddleware((to) => {
  // Loading 畫面只在 client 顯示，server 端不需要排程
  if (import.meta.server) return

  const loadingStore = useLoadingStore()

  // 開啟 Loading 畫面
  loadingStore.showLoading()

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
