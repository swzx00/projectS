<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt'
</script>

<template>
  <div class="background-container bg-gray-100">
    <!-- Loading 畫面 -->
    <AppLoading></AppLoading>
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
    <Analytics />
  </div>
</template>

<style scoped></style>
