<script setup lang="ts">
import { useSingleDataFetch } from '~/composables/useSingleDataFetch'

const route = useRoute()
const { id } = route.params
// 確保 id 是 string
const safeId = Array.isArray(id) ? id[0] : id || ''

// 定義 ResponseData 類型 (根據你的實際數據結構)
interface ResponseData {
  dataCard:
    | {
        id: string
        title: string
        tag: string[]
        date: string
        image: string[]
        content: string
      }
    | null
    | undefined // dataCard 可以是 null 或 undefined
}

// 使用整合後的 useSingleDataFetch
// const { data, pending, error } = await useSingleDataFetch(safeId)

// 用 onMounted 包裹異步請求
const dataLoaded = ref(false)
const data = ref<ResponseData | null>(null) // 指定為 ResponseData 或 null
const pending = ref(true)
const error = ref<Error | null>(null) // error 類型可以是 Error 或 null
const items = ref<ResponseData['dataCard'] | null>(null) // 指定為 dataCard 或 null

onMounted(async () => {
  try {
    const response = await useSingleDataFetch(safeId)
    data.value = response.data
    pending.value = false

    // 確保 dataCard 的資料結構符合型別定義
    items.value = data.value?.dataCard ?? null
  } catch (err) {
    error.value = err as Error
    pending.value = false
  }
  dataLoaded.value = true
})

definePageMeta({
  middleware: ['loading'], // 啟用 loading 中介層
})

const imageSizes = ref<{ [key: number]: { width: number; height: number } }>({})

const updateImageSize = (index: number, event: Event) => {
  const img = event.target as HTMLImageElement
  imageSizes.value[index] = {
    width: img.naturalWidth,
    height: img.naturalHeight,
  }
}
</script>

<template>
  <div class="h-auto overflow-hidden">
    <div class="w-full bg-gray-200">
      <p v-if="dataLoaded && pending" class="flex items-center justify-start gap-2 text-lg text-black">
        <Icon class="text-lg" name="line-md:loading-twotone-loop" size="20" title="Loading" alt="Loading" />
        資料載入中...
      </p>
      <p v-if="dataLoaded && error" class="flex items-center justify-start gap-2 text-lg text-black">
        <Icon class="text-lg" name="material-symbols:error" size="20" title="Error" alt="Error" />
        載入資料時出現錯誤：<span class="text-red-600">{{ error }}</span>
      </p>
      <div
        v-if="dataLoaded && data && items"
        class="flex w-full flex-col items-start justify-start gap-0 !px-0 pt-4 md:container md:max-w-full lg:max-w-[992px] xl:max-w-[1200px] 2xl:max-w-[1400px]"
      >
        <BreadCrumb :card-id="items.id" :title="items.title"></BreadCrumb>
        <div class="flex w-full max-w-full flex-row items-end justify-between gap-0 px-4 lg:px-0">
          <h1 class="inline-block w-fit max-w-[calc(100%-6rem)] break-words text-2xl font-bold text-black">
            {{ items.title }}
          </h1>
          <span class="inline-block w-24 max-w-full text-end text-sm font-light text-gray-900">{{ items.date }}</span>
        </div>
        <div class="mt-4 flex w-full max-w-full flex-wrap items-start justify-start gap-x-3 gap-y-2 px-4 lg:px-0">
          <span
            v-for="(item, index) in items.tag"
            :key="index"
            class="cursor-default text-start text-base font-light capitalize leading-none tracking-normal text-blue-500"
            >#{{ item }}</span
          >
        </div>
        <main
          class="mb-0 mt-8 w-full max-w-full border-x-0 border-y border-solid border-white bg-white shadow-lg lg:mb-12 lg:border"
        >
          <picture
            v-for="(item, index) in items.image"
            :key="index"
            class="block w-full max-w-full border-x-0 border-y border-solid border-white lg:border-x lg:border-y-2"
          >
            <img
              class="object-contain"
              :src="item"
              :title="`${items.title}-${index + 1}`"
              :alt="`${items.title}-${index + 1}`"
              :width="imageSizes[index]?.width || ''"
              :height="imageSizes[index]?.height || ''"
              loading="lazy"
              decoding="async"
              @load="updateImageSize(index, $event)"
            />
          </picture>
          <article
            class="article flx-col mb-12 mt-8 px-4 text-start text-base font-normal leading-normal lg:my-12 lg:px-8"
          >
            <p
              v-for="(line, index) in items.content.split('\n')"
              :key="index"
              class="my-2 block w-fit max-w-full first:mt-0 last:mb-0"
            >
              {{ line }}
            </p>
          </article>
        </main>
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
