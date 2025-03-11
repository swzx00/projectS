<script setup lang="ts">
import { useHoverStore } from '~/stores/hoverStore'
import { getIconTitle } from '~/composables/useTag'
import { useImageLoading } from '~/composables/useImageLoading'

const hoverStore = useHoverStore()

// 使用 defineModel 定義傳遞資料
const cardId = defineModel('cardId', {
  type: String,
  required: true,
})
defineModel('title', {
  type: String,
  required: true,
})

defineModel('tags', {
  type: Array as PropType<string[]>, // 定義 tags 的型別
  required: true,
})

defineModel('content', {
  type: String,
  required: true,
})

defineModel('image', {
  type: Array as PropType<string[]>, // 定義 tags 的型別
  required: true,
})

defineModel('date', {
  type: String,
  required: true,
})

defineModel('demo', {
  type: String,
  default: '', // 設定預設值
  required: false,
})

// 圖片Loading
const { isImageLoaded, imageRef, handleImageLoad } = useImageLoading()

// 在 setup 函數內部，使用 `props` 存取 `tags` 變數
const { tags, image } = defineProps<{
  tags: string[]
  image: string[]
}>()

// 獲取當前路由的查詢參數
const route = useRoute()
const queryTag = route.query.tag ? String(route.query.tag).toLowerCase() : null

// 原始的 tags
const originalTags = tags

// 標準化和去重複
const uniqueTags = computed(() => {
  // 去除重複的標準化結果
  const uniqueTagsSet = [...new Set(originalTags)]

  // 如果有 queryTag，將其排到第一個
  if (queryTag && uniqueTagsSet.includes(queryTag)) {
    uniqueTagsSet.splice(uniqueTagsSet.indexOf(queryTag), 1)
    uniqueTagsSet.unshift(queryTag)
  }

  return uniqueTagsSet
})

// 新增 hover 事件處理函數
const onHover = () => {
  hoverStore.setHoveredId(cardId.value)
}

const onLeave = () => {
  hoverStore.setHoveredId(null)
}
</script>

<template>
  <div
    class="group flex w-full max-w-full flex-col flex-nowrap items-start justify-between overflow-hidden rounded bg-transparent transition-all duration-300 ease-linear"
    style="border: 3px solid cyan"
    @mouseenter="onHover"
    @mouseleave="onLeave"
  >
    <NuxtLink
      class="flex aspect-square size-full max-h-max max-w-full shrink grow-0 items-center justify-center rounded bg-zinc-700/80 p-4"
      :to="`/portfolio/${cardId}?from=design`"
      target="_blank"
      style="border: 3px solid pink"
    >
      <div
        class="flex aspect-square size-full max-h-fit max-w-fit items-center justify-center overflow-hidden rounded-sm bg-white/80 p-0 group-hover:bg-white/100"
        style="border: 3px solid red"
      >
        <Icon
          v-if="!isImageLoaded"
          class="absolute z-0 text-lg text-white"
          name="line-md:loading-twotone-loop"
          size="20"
          title="Loading"
          alt="Loading"
        />
        <img
          ref="imageRef"
          class="z-10 h-full max-h-full w-full max-w-full object-contain transition-all duration-300 ease-linear group-hover:scale-105"
          :src="image[0]"
          :title="title"
          :alt="title"
          width="400"
          height="400"
          loading="lazy"
          decoding="async"
          style="border: 3px solid blue"
          @load="handleImageLoad"
        />
      </div>
    </NuxtLink>
    <div
      class="card-body flex size-full max-h-full max-w-full shrink grow flex-col flex-nowrap items-start justify-start gap-1.5 overflow-hidden py-2"
      style="border: 3px solid red"
    >
      <h3
        class="m-0 inline-block w-fit max-w-full cursor-default truncate p-0 text-start text-base font-bold text-zinc-50/80 group-hover:text-zinc-50/100"
      >
        {{ title }}
      </h3>
      <div
        class="inline-block h-6 w-full max-w-full flex-wrap items-center gap-1 overflow-hidden text-ellipsis whitespace-nowrap py-0 leading-none text-white/80 group-hover:text-white/100"
      >
        <template v-for="tag in uniqueTags">
          <span
            v-if="getIconTitle('design', tag)"
            :key="tag"
            class="mx-1 inline-flex h-full w-fit max-w-full flex-shrink-0 flex-grow-0 cursor-default items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap rounded-full border border-solid border-blue-600 bg-blue-600 px-1 text-xs capitalize leading-none text-white opacity-80 first:ml-0 last:mr-0 group-hover:opacity-100"
            :title="getIconTitle('design', tag)"
          >
            {{ tag }}
          </span>
        </template>
      </div>
      <div class="mb-0 mt-auto flex w-full items-center justify-between gap-2 pt-1">
        <time class="text-start font-Fira text-xs font-light text-white/80" :datetime="date"> {{ date }}</time>
        <NuxtLink
          :to="`/portfolio/${cardId}?from=design`"
          target="_blank"
          class="cursor-pointer text-end font-Fira text-xs font-light text-white/80 underline underline-offset-2 transition-all hover:font-normal hover:text-white/100 hover:underline-offset-4 group-hover:text-white/90"
        >
          &lt;More&gt;
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
