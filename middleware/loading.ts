export default defineNuxtRouteMiddleware(() => {
  const loadingStore = useLoadingStore()

  // 開啟 Loading 畫面
  loadingStore.showLoading()

  // 模擬頁面加載完成，關閉 Loading 畫面
  setTimeout(() => {
    loadingStore.hideLoading()
  }, 350) // 模擬 1 秒後關閉，根據需求調整
})
