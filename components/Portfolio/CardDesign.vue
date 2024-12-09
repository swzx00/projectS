<script setup lang="ts">
import { defineModel } from 'vue'

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
  type: String,
  required: true,
})

defineModel('more', {
  type: String,
  default: '', // 設定預設值
  required: false,
})

defineModel('link', {
  type: String,
  default: '', // 設定預設值
  required: false,
})

defineModel('date', {
  type: String,
  required: true,
})

// 在 setup 函數內部，使用 `props` 存取 `tags` 變數
const { tags } = defineProps<{ tags: string[] }>() // 使用 `defineProps` 來定義 props

const getIconTitle = (tag: string) => {
  switch (tag.toLowerCase().replace(/['\s]/g, '')) {
    case 'product':
      return 'Product'
    case 'media':
      return 'Media'
    case 'graphic':
      return 'Graphic'
    case 'publication':
      return 'Publication'
    case 'interface':
      return 'Interface'
    case 'edm':
      return 'Edm Design'
    case 'web':
      return 'Web Design'
    case 'design':
      return 'Design'
    default:
      return ''
  }
}
</script>

<template>
  <div
    class="group flex w-full max-w-full flex-col flex-nowrap items-start justify-start overflow-hidden rounded bg-transparent transition-all duration-300 ease-linear"
  >
    <div
      class="relative flex aspect-square size-full h-full max-h-max min-h-fit w-full max-w-full items-center justify-center overflow-hidden rounded bg-zinc-700/80 p-3 group-hover:bg-zinc-700/100"
    >
      <img
        class="z-10 h-fit max-h-full w-fit max-w-full object-cover transition-all duration-300 ease-linear group-hover:scale-105"
        :src="image"
        :title="title"
        :alt="title"
        width="400"
        height="400"
        loading="lazy"
        decoding="async"
      />
      <Icon
        class="absolute z-0 text-lg text-white"
        name="line-md:loading-twotone-loop"
        size="20"
        title="Loading"
        alt="Loading"
      />
    </div>
    <div
      class="card-body flex size-full max-h-full max-w-full flex-col flex-nowrap items-start justify-start gap-1.5 py-2"
    >
      <h3
        class="m-0 inline-block w-fit max-w-full truncate p-0 text-start text-base font-bold text-zinc-50/80 group-hover:text-zinc-50/100"
      >
        {{ title }}
      </h3>
      <div class="flex h-6 items-center gap-1 overflow-hidden text-ellipsis whitespace-nowrap">
        <span
          v-for="tag in tags"
          :key="tag"
          class="flex h-full w-fit cursor-default items-center justify-center rounded-full border border-solid border-blue-600 bg-blue-600 px-1 py-px text-xs leading-none text-white opacity-80 group-hover:opacity-100"
          :title="getIconTitle(tag)"
        >
          {{ title }}
        </span>
      </div>
      <div class="mb-0 mt-auto flex w-full items-center justify-between gap-2 pt-1">
        <time class="text-start font-Fira text-xs font-light text-white/80" :datetime="date"> {{ date }}</time>
        <NuxtLink
          to="/"
          class="text-end font-Fira text-xs font-light text-white/80 underline underline-offset-2 transition-all hover:font-normal hover:text-white/100 hover:underline-offset-4 group-hover:text-white/90"
        >
          &lt;More&gt;
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
