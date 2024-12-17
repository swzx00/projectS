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

defineModel('date', {
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

// 在 setup 函數內部，使用 `props` 存取 `tags` 變數
const { tags } = defineProps<{ tags: string[] }>() // 使用 `defineProps` 來定義 props

const getIconName = (tag: string) => {
  switch (tag.toLowerCase().replace(/['\s]/g, '')) {
    case 'edm':
      return 'vscode-icons:file-type-templ'
    case 'javascript':
      return 'vscode-icons:file-type-js-official'
    case 'typescript':
      return 'vscode-icons:file-type-typescript-official'
    case 'css':
      return 'vscode-icons:file-type-css'
    case 'html':
      return 'vscode-icons:file-type-html'
    case 'bootstrap':
      return 'devicon:bootstrap'
    case 'tailwind':
      return 'vscode-icons:file-type-tailwind'
    case 'vue':
      return 'vscode-icons:file-type-vue'
    case 'nuxt':
      return 'vscode-icons:file-type-nuxt'
    case 'frontend':
      return 'vscode-icons:file-type-vscode'
    case 'design':
      return 'logos:adobe-photoshop'
    default:
      return ''
  }
}

const getIconTitle = (tag: string) => {
  switch (tag.toLowerCase().replace(/['\s]/g, '')) {
    case 'edm':
      return 'Edm'
    case 'javascript':
      return 'Javascript'
    case 'typescript':
      return 'Typescript'
    case 'css':
      return 'Css'
    case 'html':
      return 'Html'
    case 'bootstrap':
      return 'Bootstrap'
    case 'tailwind':
      return 'Tailwind'
    case 'vue':
      return 'Vue'
    case 'nuxt':
      return 'Nuxt'
    case 'frontend':
      return 'Frontend'
    case 'design':
      return 'Design'
    default:
      return ''
  }
}
</script>

<template>
  <div
    class="group flex w-full max-w-full flex-col flex-nowrap items-start justify-start overflow-hidden rounded-md border border-solid border-slate-800 bg-slate-800 transition-all duration-300 ease-linear first:*:rounded-t-md last:*:rounded-b-md hover:border-white hover:bg-white"
  >
    <NuxtLink
      class="relative flex aspect-video size-full h-full max-h-max min-h-fit w-full max-w-full items-center justify-center overflow-hidden bg-black/30"
      :to="more"
      target="_blank"
    >
      <img
        class="z-10 size-full max-h-full max-w-full object-cover transition-all duration-300 ease-linear group-hover:scale-105"
        :src="image"
        :title="title"
        :alt="title"
        width="300"
        height="168"
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
        <span v-for="tag in tags" :key="tag" class="flex size-5 items-center justify-center" :title="getIconTitle(tag)">
          <Icon :name="getIconName(tag)" :title="getIconTitle(tag)" :alt="getIconTitle(tag)" size="16" />
        </span>
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
          :to="more"
          class="text-end font-Fira text-sm font-light text-slate-200 underline underline-offset-2 transition-all hover:font-normal hover:text-gray-800 hover:underline-offset-4 group-hover:text-gray-800"
        >
          &lt;More&gt;
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
