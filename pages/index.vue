<script setup lang="ts">
definePageMeta({
  layout: false,
  middleware: ['loading'], // 啟用 loading 中介層
})
</script>

<template>
  <div>
    <h1>Page: index</h1>
    <NuxtLink class="flex h-full items-center px-2 transition-all duration-300 hover:text-blue-500" to="/"
      >Index</NuxtLink
    >
    <NuxtLink class="flex h-full items-center px-2 transition-all duration-300 hover:text-blue-500" to="/about"
      >About</NuxtLink
    >
    <NuxtLink class="flex h-full items-center px-2 transition-all duration-300 hover:text-blue-500" to="/portfolio"
      >Portfolio</NuxtLink
    >
    <NuxtLink
      class="flex h-full items-center px-2 transition-all duration-300 hover:text-blue-500"
      to="/frontend?tag=frontend"
      >Frontend</NuxtLink
    >
    <NuxtLink
      class="flex h-full items-center px-2 transition-all duration-300 hover:text-blue-500"
      to="/design?tag=design"
      >Design</NuxtLink
    >
  </div>
</template>

<style scoped></style>
