<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useSingleDataFetch } from '~/composables/useSingleDataFetch'
import type { ResponseData } from '~/composables/interface'
import { useImageLoading } from '~/composables/useImageLoading'

const route = useRoute()
const pending = ref(false)
const error = ref<Error | null>(null)
const data = ref<ResponseData | null>(null)
const dataLoaded = ref(false)
const item = ref<any>(null) // 指定為 any 或 null

onMounted(async () => {
  const safeId = route.params.id as string
  try {
    const response = await useSingleDataFetch(safeId)
    data.value = response.data
    pending.value = false

    item.value = data.value?.dataCard ?? null
  } catch (err) {
    error.value = err as Error
    pending.value = false
  }
  dataLoaded.value = true
})

definePageMeta({
  middleware: ['loading'], // 啟用 loading 中介層
})

// 圖片Loading
const { isImageLoaded, imageRef, handleImageLoad } = useImageLoading()

const imageSizes = ref<{ [key: number]: { width: number; height: number } }>({})

const updateImageSize = (index: number, event: Event) => {
  const img = event.target as HTMLImageElement
  imageSizes.value[index] = {
    width: img.naturalWidth,
    height: img.naturalHeight,
  }
}

function handleImageLoadCombined(index: number, event: Event) {
  updateImageSize(index, event)
  handleImageLoad()
}
</script>

<template>
  <div
    class="h-full max-h-full w-full max-w-full before:fixed before:left-0 before:top-0 before:block before:h-full before:bg-white/30 before:backdrop-blur-sm before:content-[''] before:lg:w-[150px] before:xl:w-[175px] before:2xl:w-[200px]"
  >
    <div
      class="relative z-0 ml-auto mr-0 h-auto min-h-[calc(100dvh-8rem)] w-full max-w-full overflow-hidden lg:max-w-[calc(100%-150px)] xl:max-w-[calc(100%-175px)] 2xl:max-w-[calc(100%-200px)]"
    >
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
          v-if="dataLoaded && data && item"
          class="flex w-full max-w-full flex-col items-start justify-start gap-0 !px-0 pt-4 sm:container sm:max-w-[calc(100%-2rem)] xl:max-w-[1024px] 2xl:max-w-[1280px]"
        >
          <BreadCrumb :card-id="item.id" :title="item.title"></BreadCrumb>
          <div class="flex w-full max-w-full flex-row items-end justify-between gap-0 px-4 sm:px-0">
            <h1 class="inline-block w-fit max-w-[calc(100%-6rem)] break-words text-2xl font-bold text-black">
              {{ item.title }}
            </h1>
            <span class="inline-block w-24 max-w-full text-end text-sm font-light text-gray-900">{{ item.date }}</span>
          </div>
          <div class="mt-4 flex w-full max-w-full flex-wrap items-start justify-start gap-x-3 gap-y-2 px-4 sm:px-0">
            <span
              v-for="(tag, index) in item.tag"
              :key="index"
              class="cursor-default text-start text-base font-light capitalize leading-none tracking-normal text-blue-500"
              >#{{ tag }}</span
            >
          </div>
          <main
            class="mb-0 mt-8 w-full max-w-full border-x-0 border-y-2 border-solid border-white bg-white shadow-lg sm:mb-12 sm:border-4"
          >
            <picture
              v-for="(image, index) in item.image"
              :key="index"
              class="block w-full max-w-full border-x-0 border-y-4 border-solid border-white first:border-t-2 last:border-b-2 sm:border-x sm:border-y-2 first:sm:border-t-0 last:sm:border-b-0"
            >
              <Icon
                v-if="!isImageLoaded"
                class="absolute z-0 text-lg text-black"
                name="line-md:loading-twotone-loop"
                size="20"
                title="Loading"
                alt="Loading"
              />
              <img
                ref="imageRef"
                class="border-x-0 border-y border-solid border-gray-300 object-contain lg:border-2"
                :src="image"
                :title="`${item.title}-${index + 1}`"
                :alt="`${item.title}-${index + 1}`"
                :width="imageSizes[index]?.width || ''"
                :height="imageSizes[index]?.height || ''"
                loading="lazy"
                decoding="async"
                @load="handleImageLoadCombined(index, $event)"
              />
            </picture>
            <article
              class="article flx-col mb-12 mt-8 px-4 text-start text-base font-normal leading-normal lg:my-12 lg:px-8"
            >
              <p
                v-for="(line, index) in item.content.split('\n')"
                :key="index"
                class="my-2 block w-fit max-w-full first:mt-0 last:mb-0"
              >
                {{ line }}
              </p>
              <NuxtLink
                v-if="item.demo"
                class="mt-12 inline-flex items-center justify-start gap-1 text-sm font-normal text-blue-400 underline underline-offset-2 transition-all hover:font-bold hover:text-blue-600 hover:underline-offset-4"
                :to="item.demo"
                target="_blank"
                :title="item.title"
              >
                <Icon class="inline-block" name="uil:link" size="14" title="Demo Link" alt="Demo Link" />
                &lt;Demo&gt;
              </NuxtLink>
            </article>
          </main>
        </div>
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
