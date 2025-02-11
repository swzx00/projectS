<script setup lang="ts">
definePageMeta({
  layout: false,
  middleware: ['loading'], // 啟用 loading 中介層
})

setResponseStatus(404)
</script>

<template>
  <div
    class="fixed left-0 top-0 h-full w-full overflow-hidden bg-[url(/images/SequoiaLight.webp)] bg-cover bg-top bg-no-repeat"
  >
    <div class="flex h-full max-h-full w-full max-w-full items-center justify-center bg-white/40 px-4 backdrop-blur">
      <div
        class="flex h-fit max-h-full w-full flex-col items-center justify-center gap-4 rounded-md bg-gray-100 pt-4 shadow-lg sm:max-w-[640px] sm:px-6 sm:pb-4"
      >
        <h1 class="text-8xl font-semibold text-red-500">404</h1>
        <p class="text-xl text-gray-800">Not Found</p>
        <p class="text-xl text-gray-800">唉喲! 沒有這個頁面喲!</p>
        <NuxtLink
          class="flex h-fit w-full items-center justify-center rounded-b-md border-0 border-t border-solid border-gray-300 p-2 px-2 text-center text-gray-700 transition-all duration-300 hover:border-gray-200 hover:bg-gray-50 hover:text-blue-500 sm:w-fit sm:self-end sm:rounded-md sm:border sm:border-gray-400"
          to="/"
          >Back to Index</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<style scoped></style>
