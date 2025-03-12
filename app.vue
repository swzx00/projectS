<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt'
import { SpeedInsights } from '@vercel/speed-insights/nuxt'
</script>

<template>
  <div class="background-container bg-gray-100">
    <!-- Loading 畫面 -->
    <AppLoading></AppLoading>
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
    <Analytics />
    <SpeedInsights />
  </div>
</template>

<style scoped></style>
