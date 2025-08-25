<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt'
import { SpeedInsights } from '@vercel/speed-insights/nuxt'
import { useGoogleTokenValid } from '~/composables/useGoogleTokenValid'

const auth = useAuthStore()
const { idToken } = storeToRefs(auth)

onMounted(() => {
  auth.syncFromLocalStorage()
  window.addEventListener('storage', (e) => {
    if (e.key === 'google_id_token') {
      auth.syncFromLocalStorage()
    }
  })
})

// 監聽 idToken 變化
watch(idToken, async (newToken, oldToken) => {
  if (newToken !== oldToken) {
    const { valid } = await useGoogleTokenValid(newToken)
    if (!valid) {
      console.warn('未通過驗證! 請登入系統!')
    }
  }
})
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
