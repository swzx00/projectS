<script setup lang="ts">
definePageMeta({
  middleware: ['loading'], // 啟用 loading 中介層
})
</script>
<template>
  <div class="relative">
    <main
      class="relative z-0 ml-auto mr-0 h-full min-h-[calc(100dvh-8rem)] w-full max-w-full bg-gray-200 py-6 md:max-w-[calc(100%-125px)] lg:max-w-[calc(100%-150px)] xl:max-w-[calc(100%-200px)] 2xl:max-w-[calc(100%-400px)]"
    >
      Page: about
      <NuxtLink to="/resume">Resume</NuxtLink>
    </main>
  </div>
</template>

<style scoped></style>
