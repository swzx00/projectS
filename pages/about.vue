<script setup lang="ts">
definePageMeta({
  middleware: ['loading'], // 啟用 loading 中介層
})
</script>
<template>
  <div
    class="relative before:fixed before:left-0 before:top-0 before:block before:h-full before:bg-white/30 before:backdrop-blur-sm before:content-[''] before:lg:w-[150px] before:xl:w-[175px] before:2xl:w-[200px]"
  >
    <main
      class="relative z-0 ml-auto mr-0 h-full min-h-[calc(100dvh-8rem)] w-full max-w-full bg-gray-200 py-6 lg:max-w-[calc(100%-150px)] xl:max-w-[calc(100%-175px)] 2xl:max-w-[calc(100%-200px)]"
    >
      Page: about
      <NuxtLink to="/resume">Resume</NuxtLink>
    </main>
  </div>
</template>

<style scoped></style>
