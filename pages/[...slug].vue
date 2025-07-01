<script setup lang="ts">
definePageMeta({
  layout: false,
  middleware: ['loading'], // 啟用 loading 中介層
})

navigateTo('/error404', { replace: true })
</script>

<template>
  <div>跳轉中...</div>
</template>

<style scoped></style>
