<script setup lang="ts">
import { useRoute } from 'vue-router'
definePageMeta({
  middleware: ['loading'], // 啟用 loading 中介層
})

// 定義資料型別
interface DataCard {
  id: string
  title: string
  tag: string[]
  content: string
  image: string
}

interface ResponseData {
  totalCount: number
  page: number
  perPage: number
  dataCard: DataCard[]
}

// 使用 useRoute 來取得 URL 參數
const route = useRoute()

// 頁數狀態
const currentPage = ref(Number(route.query.page) || 1)

// 當頁數改變時，重新抓取資料
watch(
  () => route.query.page,
  (newPage) => {
    currentPage.value = Number(newPage) || 1
  },
)

// 使用 useFetch 並監聽 currentPage 的變化
const { data, pending, error } = useFetch<ResponseData>(() => {
  return `/api/dataCard?page=${currentPage.value}`
})

// 當資料加載完成後，將 totalCount 傳遞給子組件
const totalCount = ref<number | null>(null)
const perPage = ref<number | null>(null)

// 當資料加載完成後，將 totalCount 和 perPage 賦值
watchEffect(() => {
  if (data.value) {
    totalCount.value = data.value.totalCount
    perPage.value = data.value.perPage
  }
})
</script>

<template>
  <main class="py-6">
    <h2 class="hidden">Portfolio</h2>
    <!-- 載入中狀態 -->
    <div v-if="pending">載入中...</div>
    <!-- 錯誤處理 -->
    <div v-else-if="error">載入資料時出現錯誤：{{ error.message }}</div>
    <!-- 資料渲染 -->
    <div
      v-else-if="data?.dataCard && data?.dataCard.length"
      class="mx-auto flex w-full max-w-full flex-row flex-wrap items-stretch justify-start gap-x-3 gap-y-6 px-4 *:max-w-[calc((100%-(2*1rem))/3)] lg:max-w-[960px]"
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
  </main>
</template>

<style scoped></style>
