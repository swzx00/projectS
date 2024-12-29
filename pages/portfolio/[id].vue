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
        v-if="dataLoaded && data && item"
        class="flex w-full flex-col items-start justify-start gap-0 !px-0 pt-4 md:container md:max-w-full lg:max-w-[992px] xl:max-w-[1200px] 2xl:max-w-[1400px]"
      >
        <BreadCrumb :card-id="item.id" :title="item.title"></BreadCrumb>
        <div class="flex w-full max-w-full flex-row items-end justify-between gap-0 px-4 lg:px-0">
          <h1 class="inline-block w-fit max-w-[calc(100%-6rem)] break-words text-2xl font-bold text-black">
            {{ item.title }}
          </h1>
          <span class="inline-block w-24 max-w-full text-end text-sm font-light text-gray-900">{{ item.date }}</span>
        </div>
        <div class="mt-4 flex w-full max-w-full flex-wrap items-start justify-start gap-x-3 gap-y-2 px-4 lg:px-0">
          <span
            v-for="(tag, index) in item.tag"
            :key="index"
            class="cursor-default text-start text-base font-light capitalize leading-none tracking-normal text-blue-500"
            >#{{ tag }}</span
          >
        </div>
        <main
          class="mb-0 mt-8 w-full max-w-full border-x-0 border-y border-solid border-white bg-white shadow-lg lg:mb-12 lg:border"
        >
          <picture
            v-for="(image, index) in item.image"
            :key="index"
            class="block w-full max-w-full border-x-0 border-y border-solid border-white lg:border-x lg:border-y-2"
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
              class="object-contain"
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
              v-if="item.link"
              class="mt-12 inline-block text-sm font-normal text-blue-400 underline underline-offset-2 transition-all hover:font-bold hover:text-blue-600 hover:underline-offset-4"
              :to="item.link"
              target="_blank"
              :title="item.title"
            >
              &lt;Demo&gt;
            </NuxtLink>
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
