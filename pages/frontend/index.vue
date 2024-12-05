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
      class="flex h-10 w-fit max-w-fit flex-row items-center justify-start gap-2 border-t-2 border-solid border-blue-500 bg-white/20 px-2 py-1 text-xl font-bold text-white"
    >
      <Icon :name="iconName" size="16" :title="title" :alt="title" />
      {{ title }}
    </h2>
    <div class="scrollbar h-full max-h-[calc(100%)] overflow-x-hidden overflow-y-scroll bg-white/20 px-4 py-6">
      <!-- 載入中狀態 -->
      <div v-if="pending" class="mx-auto flex w-full max-w-full px-4 text-white">載入中...</div>
      <!-- 錯誤處理 -->
      <div v-else-if="error" class="mx-auto flex w-full max-w-full px-4 text-white">
        載入資料時出現錯誤：{{ error.message }}
      </div>
      <div v-else-if="data?.dataCard.length === 0" class="mx-auto flex w-full max-w-full px-4 text-white">
        什麼!? 竟然沒有?!
      </div>
      <!-- 資料渲染 -->
      <div
        v-else-if="data?.dataCard && data?.dataCard.length"
        class="mx-auto flex h-fit w-full max-w-full flex-row flex-wrap items-stretch justify-start gap-x-3 gap-y-6 *:max-w-full *:sm:max-w-full *:md:max-w-[calc((100%-(1*1rem))/2)] *:lg:max-w-[calc((100%-(2*1rem))/3)] *:xl:max-w-[calc((100%-(3*1rem))/4)]"
      >
        <PortfolioCardItem
          v-for="card in data?.dataCard"
          :key="card.id"
          :title="card.title"
          :tags="card.tag"
          :content="card.content"
          :image="card.image"
        ></PortfolioCardItem>
      </div>
      <PortfolioPagination
        v-if="data?.perPage && data?.totalCount > data?.perPage"
        :total-count="totalCount"
        :per-page="perPage"
        :current-page="currentPage"
      ></PortfolioPagination>
    </div>
  </main>
</template>

<style scoped></style>
