<script setup lang="ts">
definePageMeta({
  // middleware: ['loading'], // 啟用 loading 中介層
})

// 定義圖片加載狀態
const isImageLoaded = ref(false)

// 定義圖片的 DOM 參考
const imageRef = ref<HTMLImageElement | null>(null)

onMounted(() => {
  // 確認圖片是否已經載入
  if (imageRef.value && imageRef.value.complete) {
    isImageLoaded.value = true
  }
})

// 當圖片完成載入後觸發
const handleImageLoad = () => {
  isImageLoaded.value = true
}

// 圖片來源
const imageSrc = 'https://drive.google.com/thumbnail?id=1nlmGy8w1Ut5G_s51I5dnA7EUcAU76kp2'
</script>
<template>
  <div class="relative h-40 w-20" style="border: 1px solid red">
    <!-- Icon -->
    <Icon
      v-if="!isImageLoaded"
      class="absolute z-0 text-lg text-red-600"
      name="line-md:loading-twotone-loop"
      size="20"
      title="Loading"
      alt="Loading"
    />
    <!-- 圖片 -->
    <img
      ref="imageRef"
      class="h-fit w-20"
      :src="imageSrc"
      title="Logo"
      alt="logo"
      width="48"
      height="48"
      loading="lazy"
      decoding="async"
      @load="handleImageLoad"
    />
  </div>
</template>

<style scoped></style>
