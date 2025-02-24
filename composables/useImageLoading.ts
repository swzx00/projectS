export function useImageLoading() {
  // 定義圖片加載狀態
  const isImageLoaded = ref(false)

  // 定義圖片的 DOM 參考
  const imageRef = ref<HTMLImageElement | null>(null)

  // 當圖片完成載入後觸發
  const handleImageLoad = () => {
    isImageLoaded.value = true
  }

  return {
    isImageLoaded,
    imageRef,
    handleImageLoad,
  }
}
