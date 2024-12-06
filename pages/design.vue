<script setup lang="ts">
import { useDataFetch } from '~/composables/useDataFetch'

// 使用整合後的 useDataFetch
const { currentPage, data, pending, error, totalCount, perPage } = useDataFetch('design')

definePageMeta({
  layout: 'design',
  middleware: ['loading'], // 啟用 loading 中介層
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
