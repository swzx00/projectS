<script setup lang="ts">
import { useImageLoading } from '~/composables/useImageLoading'

definePageMeta({
  // middleware: ['loading'], // 啟用 loading 中介層
})

const { isImageLoaded, imageRef, handleImageLoad } = useImageLoading()

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
