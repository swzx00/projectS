<script setup lang="ts">
definePageMeta({
  layout: false,
  middleware: ['loading'], // 啟用 loading 中介層
})

setResponseStatus(404)
</script>

<template>
  <div class="bg-white py-24">
    <div class="flex flex-col items-center">
      <h1 class="text-8xl font-semibold text-red-500">404</h1>
      <p class="my-8 text-3xl text-gray-800">Not Found</p>
      <p class="my-8 text-xl text-gray-800">唉喲! 沒有這個頁面喲!</p>
      <NuxtLink class="flex h-full items-center px-2 transition-all duration-300 hover:text-blue-500" to="/"
        >Back to Index</NuxtLink
      >
    </div>
  </div>
</template>

<style scoped></style>
