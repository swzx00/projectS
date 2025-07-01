<script setup lang="ts">
import { getIconTitle } from '~/composables/useTag'
import { useImageLoading } from '~/composables/useImageLoading'

// 使用 defineModel 定義傳遞資料
const cardId = defineModel('cardId', {
  type: String,
  required: true,
})
// 使用 defineModel 定義傳遞資料
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

// 在 setup 函數內部，使用 `props` 存取 `tags`, `image` 變數
const { tags, image } = defineProps<{
  tags: string[]
  image: string[]
}>()
</script>

<template>
  <div
    class="group z-0 flex w-full max-w-full flex-col flex-nowrap items-start justify-start overflow-hidden rounded-md transition-all duration-300 ease-linear first:*:rounded-b-md first:*:rounded-tl-md first:*:rounded-tr-sm last:*:rounded-b-md"
  >
    <NuxtLink
      class="relative z-0 flex size-full h-full max-h-max min-h-fit w-full max-w-full items-center justify-center overflow-hidden border border-solid border-slate-300 bg-white p-2"
      :to="`/portfolio/${cardId}`"
      target="_blank"
    >
      <span
        class="absolute right-0 top-0 z-10 rounded-bl-sm bg-gray-800/80 px-2 py-1 font-Fira text-xs font-light text-white backdrop-blur-sm"
        >{{ date }}</span
      >
      <div class="z-0 flex size-full items-center justify-center overflow-hidden rounded">
        <Icon
          v-if="!isImageLoaded"
          class="absolute z-0 text-lg text-black/50"
          name="line-md:loading-twotone-loop"
          size="20"
          title="Loading"
          alt="Loading"
        />
        <img
          ref="imageRef"
          class="relative z-10 aspect-4/3 size-full max-h-full max-w-full object-cover transition-all duration-300 ease-linear group-hover:scale-105"
          :src="image[0]"
          :title="title"
          :alt="title"
          width="400"
          height="300"
          loading="lazy"
          decoding="async"
          @load="handleImageLoad"
        />
      </div>
    </NuxtLink>
    <div
      class="card-body flex size-full max-h-full max-w-full flex-col flex-nowrap items-start justify-start gap-1.5 px-2 py-2"
    >
      <h3
        class="m-0 inline-block w-fit max-w-full truncate p-0 text-start text-lg font-bold text-gray-900 group-hover:text-black"
      >
        {{ title }}
      </h3>
      <div
        class="inline-block h-6 w-full max-w-full flex-wrap items-center gap-1 overflow-hidden text-ellipsis whitespace-nowrap py-0 leading-none text-gray-400"
      >
        <span
          v-for="tag in tags"
          :key="tag"
          class="mx-1 inline-flex h-full w-fit max-w-full flex-shrink-0 flex-grow-0 cursor-default items-center justify-center overflow-hidden text-ellipsis whitespace-nowrap text-xs capitalize leading-none text-blue-400 opacity-80 first:ml-0 last:mr-0"
          :title="getIconTitle('', tag)"
        >
          #{{ tag }}
        </span>
      </div>
      <p
        class="text-normal line-clamp-2 justify-items-end text-justify font-normal text-gray-600 group-hover:text-gray-800"
      >
        {{ content }}
      </p>
      <div class="mb-0 mt-auto flex w-full items-center justify-start gap-2">
        <NuxtLink
          :to="`/portfolio/${cardId}`"
          target="_blank"
          class="text-end font-Fira text-sm font-light text-gray-600 underline underline-offset-2 transition-all hover:font-normal hover:text-gray-800 hover:underline-offset-4 group-hover:text-gray-800"
        >
          &lt;More&gt;
        </NuxtLink>
        <NuxtLink
          v-if="demo"
          :to="demo"
          target="_blank"
          class="text-end font-Fira text-sm font-light text-gray-600 underline underline-offset-2 transition-all hover:font-normal hover:text-gray-800 hover:underline-offset-4 group-hover:text-gray-800"
        >
          &lt;Demo&gt;
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
