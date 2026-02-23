<script setup lang="ts">
import { useSinglePreviewFetch } from '~/composables/useSinglePreviewFetch'
import type { ResponseData, TokenCheckResult, FetchResult } from '~/composables/interface'

const route = useRoute()
const router = useRouter()
const auth = useAuthStore()

const pending = ref(true)
const error = ref<Error | null>(null)
const data = ref<ResponseData | null>(null)
const dataLoaded = ref(false)
const item = ref<any>(null)
const token = ref<string | null>(null)

const adminUrl = import.meta.env.VITE_ADMIN_BASE_URL
const safeId = route.params.id as string

onMounted(async () => {
  let tokenReceived = false

  // 主動通知後台已準備好
  if (window.opener) {
    // console.log('📤 預覽模式開啟')
    window.opener.postMessage({ type: 'ready' }, adminUrl)
  }

  // 處理訊息事件（token or logout）
  const handleMessage = async (event: MessageEvent) => {
    if (event.origin !== adminUrl || event.source !== window.opener) return

    if (event.data?.type === 'logout') {
      auth.removeToken()
      token.value = null
      error.value = new Error('已從後台登出，請重新登入後再預覽')
      resetData()
      redirectWithDelay('/error404')
      return
    }

    if (tokenReceived) return
    const receivedToken = event.data?.token
    if (!receivedToken) return

    tokenReceived = true
    auth.setToken(receivedToken)
    token.value = receivedToken

    const response = await useSinglePreviewFetch(safeId)
    await handleFetchResult(response)
  }

  window.addEventListener('message', handleMessage)

  await performAuthCheck()

  // SEO 標題設定
  watch(
    () => item.value,
    (newItem) => {
      useHead(() => ({
        title: newItem ? `(預覽)-${newItem.title}` : '林家丞 作品集 | Portfolio WebSite Chia-Cheng, Lin',
      }))
    },
    { immediate: true },
  )
})

// 認證檢查流程
async function performAuthCheck() {
  try {
    const { hasToken, storedToken, timedOut } = await waitForTokenReady()

    if (!hasToken) {
      error.value = new Error('未授權預覽，請從後台登入後使用預覽功能')
      pending.value = false
      dataLoaded.value = true
      if (timedOut) console.warn('Token 等待超時')
      redirectWithDelay('/error404')
      return
    }

    // 這裡同步 Pinia
    if (storedToken && !auth.idToken) {
      auth.setToken(storedToken)
    }

    const response = await useSinglePreviewFetch(safeId)
    await handleFetchResult(response)
  } catch (err) {
    console.error('認證檢查出錯:', err)
    const errorMessage = err instanceof Error ? err.message : '認證檢查失敗'
    error.value = new Error(errorMessage)
    pending.value = false
    dataLoaded.value = true
  }
}

// 等待 token 初始化
function waitForTokenReady(maxWaitTime = 6000, checkInterval = 100): Promise<TokenCheckResult> {
  const startTime = Date.now()

  return new Promise((resolve) => {
    const checkToken = () => {
      let storedToken: string | null = null
      try {
        const raw = localStorage.getItem('google_id_token')
        if (raw) {
          const parsed = JSON.parse(raw)
          storedToken = parsed.idToken || null
        }
      } catch {}

      const elapsed = Date.now() - startTime
      pending.value = true
      dataLoaded.value = true

      // 判斷 Pinia 的 token
      if (auth.idToken || storedToken || elapsed >= maxWaitTime) {
        resolve({
          hasToken: !!(auth.idToken || storedToken),
          currentToken: auth.idToken,
          storedToken,
          timedOut: elapsed >= maxWaitTime,
        })
        pending.value = false
        dataLoaded.value = false
        return
      }

      setTimeout(checkToken, checkInterval)
    }

    checkToken()
  })
}

// 統一處理 fetch 結果
function handleFetchResult(response: FetchResult) {
  if (response.status === 403 && response.error.includes('已上線')) {
    console.warn('文章已上線，導向正式頁面')
    return router.push(`/portfolio/${safeId}`)
  }

  if (response.error) {
    error.value = new Error(response.error)
    resetData()
    redirectWithDelay('/error404')
    return
  }

  data.value = response.data
  item.value = data.value?.dataCard ?? null
  pending.value = false
  dataLoaded.value = true
}

// 清除資料
function resetData() {
  data.value = null
  item.value = null
  pending.value = false
  dataLoaded.value = true
}

// 延遲跳轉
function redirectWithDelay(path: string, delay = 3000) {
  setTimeout(() => router.push(path), delay)
}

definePageMeta({
  layout: 'preview',
  middleware: ['loading'],
})
</script>

<template>
  <div
    class="h-full max-h-full w-full max-w-full before:fixed before:left-0 before:top-0 before:block before:h-full before:bg-white/30 before:backdrop-blur-sm before:content-[''] before:lg:w-[150px] before:xl:w-[175px] before:2xl:w-[200px]"
  >
    <div
      class="relative z-0 ml-auto mr-0 h-auto min-h-[calc(100dvh-8rem)] w-full max-w-full overflow-hidden lg:max-w-[calc(100%-150px)] xl:max-w-[calc(100%-175px)] 2xl:max-w-[calc(100%-200px)]"
    >
      <div class="h-full min-h-[calc(100dvh-8rem)] w-full bg-gray-200">
        <p
          v-if="dataLoaded && pending"
          class="my-auto flex h-full min-h-[calc(100dvh-8rem)] flex-wrap content-center items-center justify-center gap-2 px-4 text-lg text-black sm:flex-nowrap"
        >
          <Icon class="text-lg" name="line-md:loading-twotone-loop" size="20" title="Loading" alt="Loading" />
          資料載入中...
        </p>
        <p
          v-if="dataLoaded && error"
          class="my-auto flex h-full min-h-[calc(100dvh-8rem)] flex-wrap content-center items-center justify-center gap-2 px-4 text-lg text-black sm:flex-nowrap"
        >
          <Icon class="text-lg" name="material-symbols:error" size="20" title="Error" alt="Error" />
          載入資料時出現錯誤：<span class="inline text-red-600 sm:block">{{ error }}</span>
        </p>
        <PortfolioDetail :item="item" :data-loaded="dataLoaded" :pending="pending" :error="error"></PortfolioDetail>
      </div>
    </div>
  </div>
</template>

<style scoped>
.article br {
  display: block;
  height: 1rem;
  margin-bottom: 1rem;
}
</style>
