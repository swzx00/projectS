<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt'
import { SpeedInsights } from '@vercel/speed-insights/nuxt'
import { useGoogleTokenValid } from '~/composables/useGoogleTokenValid'

const auth = useAuthStore()
const { idToken } = storeToRefs(auth)

onMounted(() => {
  window.addEventListener('storage', (e) => {
    if (e.key === 'google_id_token') {
      auth.syncFromLocalStorage()
    }
  })
})

// 監聽 idToken 變化（immediate：驗證從 localStorage 還原的 token）
watch(
  idToken,
  async (newToken, oldToken) => {
    if (newToken && newToken !== oldToken) {
      const { valid, status } = await useGoogleTokenValid(newToken)
      if (!valid) {
        console.warn('未通過驗證! 請登入系統!')
        // 只有後端明確回 401（過期、無效、已登出）才移除；網路或伺服器錯誤時保留
        if (status === 401 && auth.idToken === newToken) {
          auth.removeToken()
        }
      }
    }
  },
  { immediate: true },
)
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
