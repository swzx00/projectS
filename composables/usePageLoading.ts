import { useLoadingStore } from '~/stores/loadingStore'

// 頁面資料載入完成（pending 變為 false）時關閉 Loading 畫面
// 搭配 definePageMeta({ waitForData: true })，loading middleware 就不會用計時器關閉
// 頁面卸載後 watch 會自動停止，不會關閉下一個頁面的 Loading
export function usePageLoading(pending: Ref<boolean>) {
  if (import.meta.server) return

  const loadingStore = useLoadingStore()

  watch(
    pending,
    (isPending) => {
      if (!isPending) loadingStore.hideLoading()
    },
    { immediate: true },
  )
}
