<script setup lang="ts">
definePageMeta({
  middleware: ['loading'], // 啟用 loading 中介層
})
</script>
<template>
  <div>
    Page: about
    <NuxtLink to="/resume">Resume</NuxtLink>
  </div>
</template>

<style scoped></style>
