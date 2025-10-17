<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useSingleDataFetch } from '~/composables/useSingleDataFetch'
import type { ResponseData } from '~/composables/interface'

const route = useRoute()
const pending = ref(true)
const error = ref<Error | null>(null)
const data = ref<ResponseData | null>(null)
const dataLoaded = ref(false)
const item = ref<any>(null)

onMounted(async () => {
  const safeId = route.params.id as string
  try {
    const response = await useSingleDataFetch(safeId)
    data.value = response.data
    item.value = data.value?.dataCard ?? null
  } catch (err) {
    error.value = err as Error
  } finally {
    pending.value = false
    dataLoaded.value = true
  }
})

definePageMeta({
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
      <div class="min-h-[calc(100dvh-8rem)] w-full bg-gray-200">
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
