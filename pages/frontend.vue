<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useDataFetch } from '~/composables/useDataFetch'

// 使用整合後的 useDataFetch
const { currentPage, data, pending, error, totalCount, perPage } = useDataFetch('frontend')

definePageMeta({
  layout: 'frontend',
  // middleware: ['loading'], // 啟用 loading 中介層
})
const route = useRoute()

const iconName = ref('vscode-icons:file-type-vscode')
const title = ref('Frontend')

watch(
  () => route.query.tag,
  (newTag) => {
    // 先去除引號和空格，然後轉換為小寫
    const cleanTag = (newTag as string).replace(/['\s]/g, '').toLowerCase()
    switch (cleanTag) {
      case 'edm':
        iconName.value = 'vscode-icons:file-type-templ'
        title.value = 'Edm'
        break
      case 'javascript':
        iconName.value = 'vscode-icons:file-type-js-official'
        title.value = 'Javascript'
        break
      case 'typescript':
        iconName.value = 'vscode-icons:file-type-typescript-official'
        title.value = 'Typescript'
        break
      case 'css':
        iconName.value = 'vscode-icons:file-type-css'
        title.value = 'Css'
        break
      case 'html':
        iconName.value = 'vscode-icons:file-type-html'
        title.value = 'Html'
        break
      case 'bootstrap':
        iconName.value = 'devicon:bootstrap'
        title.value = 'Bootstrap'
        break
      case 'tailwind':
        iconName.value = 'vscode-icons:file-type-tailwind'
        title.value = 'Tailwind'
        break
      case 'vue':
        iconName.value = 'vscode-icons:file-type-vue'
        title.value = 'Vue'
        break
      case 'nuxt':
        iconName.value = 'vscode-icons:file-type-nuxt'
        title.value = 'Nuxt'
        break
      case 'frontend':
        iconName.value = 'vscode-icons:file-type-vscode'
        title.value = 'Frontend'
        break
      default:
        // 如果沒有匹配的 tag，使用默認值
        iconName.value = 'vscode-icons:file-type-vscode'
        title.value = 'Frontend'
        break
    }
  },
  { immediate: true },
)
</script>

<template>
  <main
    class="relative flex h-full max-h-full w-full flex-col sm:w-[calc(100%-250px)] md:w-[calc(100%-200px)] lg:w-[calc(100%-250px)] xl:w-[calc(100%-300px)]"
  >
    <h2
      class="flex h-10 w-full max-w-full flex-row items-center justify-center gap-2 border-t-0 border-solid border-blue-500 bg-slate-700 px-2 py-1 text-xl font-bold text-white sm:w-fit sm:max-w-fit sm:justify-start sm:border-t-2 sm:bg-slate-600"
    >
      <Icon :name="iconName" size="16" :title="title" :alt="title" />
      {{ title }}
    </h2>
    <div class="scrollbar h-full max-h-[calc(100%)] overflow-x-hidden overflow-y-scroll bg-slate-600 px-4 py-6">
      <Transition
        name="zoom-in"
        mode="out-in"
        enter-active-class="transition-all duration-200 ease-in-out overflow-hidden"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-all duration-200 ease-in-out overflow-hidden"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <!-- 載入中狀態 -->
        <div v-if="pending" class="mx-auto w-full max-w-full px-4">
          <p class="flex items-center justify-start gap-2 text-lg text-white">
            <Icon class="text-lg" name="line-md:loading-twotone-loop" size="20" title="Loading" alt="Loading" />
            資料載入中...
          </p>
        </div>
        <!-- 錯誤處理 -->
        <div v-else-if="error" class="mx-auto w-full max-w-full px-4">
          <p class="flex items-center justify-start gap-2 text-lg text-white">
            <Icon class="text-lg" name="material-symbols:error" size="20" title="Error" alt="Error" />
            載入資料時出現錯誤：<span class="text-yellow-400">{{ error.message }}</span>
          </p>
        </div>
        <div v-else-if="data?.dataCard.length === 0" class="mx-auto w-full max-w-full px-4">
          <p class="flex items-center justify-start gap-2 text-lg text-white">
            <Icon class="text-lg" name="material-symbols:amp-error" size="20" title="Warning" alt="Warning" />
            唉呦！好像沒有這方面的作品喲.....
          </p>
        </div>
        <!-- 資料渲染 -->
        <div
          v-else-if="Array.isArray(data?.dataCard) && data?.dataCard.length"
          class="mx-auto flex h-fit w-full max-w-full flex-col flex-wrap items-start justify-start"
        >
          <div
            class="mx-auto flex h-fit w-full max-w-full flex-row flex-wrap items-stretch justify-start gap-x-3 gap-y-6 *:max-w-full *:sm:max-w-full *:md:max-w-[calc((100%-(1*.75rem))/2)] *:lg:max-w-[calc((100%-(2*.75rem))/3)] *:xl:max-w-[calc((100%-(3*.75rem))/4)]"
          >
            <PortfolioCardFrontend
              v-for="card in data?.dataCard"
              :key="card.id"
              :title="card.title"
              :tags="card.tag"
              :content="card.content"
              :image="card.image"
              :date="card.date"
              :more="card.more || ''"
              :link="card.link || ''"
            ></PortfolioCardFrontend>
          </div>
          <PaginationFrontend
            v-if="data?.perPage && data?.totalCount > data?.perPage"
            :total-count="totalCount"
            :per-page="perPage"
            :current-page="currentPage"
          ></PaginationFrontend>
        </div>
      </Transition>
    </div>
  </main>
</template>

<style scoped></style>
