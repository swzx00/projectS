<script setup lang="ts">
import { getIconName, getIconTitle } from '~/composables/useTag'
import { useImageLoading } from '~/composables/useImageLoading'

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

defineModel('link', {
  type: String,
  default: '', // 設定預設值
  required: false,
})

// 圖片Loading
const { isImageLoaded, imageRef, handleImageLoad } = useImageLoading()

// 在 setup 函數內部，使用 `props` 存取 `tags`, `image` 變數
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
  const standardizedTags = originalTags.map((tag) => {
    if (['web', 'interface', 'publication', 'graphic', 'media', 'product'].includes(tag.toLowerCase())) {
      return 'design'
    }
    return tag
  })

  // 去除重複的標準化結果
  const uniqueTagsSet = [...new Set(standardizedTags)]

  // 如果有 queryTag，將其排到第一個
  if (queryTag && uniqueTagsSet.includes(queryTag)) {
    uniqueTagsSet.splice(uniqueTagsSet.indexOf(queryTag), 1)
    uniqueTagsSet.unshift(queryTag)
  }

  return uniqueTagsSet
})
</script>

<template>
  <div
    class="group flex w-full max-w-full flex-col flex-nowrap items-start justify-start overflow-hidden rounded-md border border-solid border-slate-800 bg-slate-800 transition-all duration-300 ease-linear first:*:rounded-t-md last:*:rounded-b-md hover:border-white hover:bg-white"
  >
    <NuxtLink
      class="relative flex aspect-video size-full h-full max-h-max min-h-fit w-full max-w-full items-center justify-center overflow-hidden bg-black/30"
      :to="`/portfolio/${cardId}?from=frontend`"
      target="_blank"
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
        class="z-10 size-full max-h-full max-w-full object-cover transition-all duration-300 ease-linear group-hover:scale-105"
        :src="image[0]"
        :title="title"
        :alt="title"
        width="300"
        height="168"
        loading="lazy"
        decoding="async"
        @load="handleImageLoad"
      />
    </NuxtLink>
    <div
      class="card-body flex size-full max-h-full max-w-full flex-col flex-nowrap items-start justify-start gap-1.5 px-3 py-2"
    >
      <h3
        class="m-0 inline-block w-fit max-w-full cursor-default truncate p-0 text-start text-lg font-bold text-amber-200 group-hover:text-black"
      >
        {{ title }}
      </h3>
      <div class="flex h-6 items-center gap-1 overflow-hidden text-ellipsis whitespace-nowrap">
        <template v-for="tag in uniqueTags">
          <span
            v-if="getIconName('frontend', tag) && getIconTitle('frontend', tag)"
            :key="tag"
            class="flex size-5 items-center justify-center"
            :title="getIconTitle('frontend', tag)"
          >
            <Icon
              :name="getIconName('frontend', tag)"
              :title="getIconTitle('frontend', tag)"
              :alt="getIconTitle('frontend', tag)"
              size="16"
            />
          </span>
        </template>
      </div>
      <p
        class="text-normal line-clamp-2 justify-items-end text-justify font-normal text-slate-400 group-hover:text-gray-600"
      >
        {{ content }}
      </p>
      <div class="mb-0 mt-auto flex w-full items-center justify-end gap-2">
        <time class="ml-0 mr-auto text-start font-Fira text-xs font-light text-white/80" :datetime="date">
          {{ date }}</time
        >
        <NuxtLink
          v-if="link"
          :to="link"
          class="text-end font-Fira text-sm font-light text-slate-200 underline underline-offset-2 transition-all hover:font-normal hover:text-gray-800 hover:underline-offset-4 group-hover:text-gray-800"
        >
          &lt;Link&gt;
        </NuxtLink>
        <NuxtLink
          :to="`/portfolio/${cardId}?from=frontend`"
          target="_blank"
          class="text-end font-Fira text-sm font-light text-slate-200 underline underline-offset-2 transition-all hover:font-normal hover:text-gray-800 hover:underline-offset-4 group-hover:text-gray-800"
        >
          &lt;More&gt;
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
