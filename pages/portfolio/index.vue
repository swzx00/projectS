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
  <main class="relative z-0 bg-gray-200 py-6">
    <h1 class="hidden">Portfolio</h1>

    <div
      class="mx-auto mb-8 flex w-full max-w-full flex-col flex-wrap items-center justify-center gap-y-2 px-4 xs:flex-row xs:gap-x-4 md:gap-x-6 md:gap-y-0 lg:max-w-[960px] lg:gap-x-4"
    >
      <h2
        class="mx-auto block w-full max-w-full px-0 text-base font-semibold leading-loose text-black sm:mx-0 sm:w-full md:mx-auto md:w-[calc((100%/3*2)+2rem)] md:px-4 lg:mx-[calc((100%-(3*1rem))/4)] lg:w-[calc((100%/2)+2rem)]"
      >
        項目分類:
      </h2>
      <NuxtLink
        class="group block h-fit w-full cursor-pointer rounded-lg border border-solid border-slate-300 bg-slate-100 px-4 py-2 hover:border-blue-200 hover:bg-blue-100 xs:w-[calc((100%-(1*1rem))/2)] md:w-[calc((100%-(2*1rem))/3)] lg:w-[calc((100%-(3*1rem))/4)]"
        to="/portfolio/frontend?tag=frontend"
        target="_self"
      >
        <figure class="flex h-fit w-full flex-row items-center justify-start gap-2">
          <div
            class="aspect-square size-8 overflow-hidden rounded-lg border border-solid border-slate-300 transition-all sm:size-10 md:size-12 lg:size-16"
          >
            <img
              src="/images/icon-app-vscode.svg"
              title="Frontend"
              alt="Frontend"
              width="24"
              height="24"
              loading="lazy"
              decoding="async"
            />
          </div>
          <figcaption
            class="mg:text-xl relative text-base font-bold leading-none tracking-normal text-gray-600 group-hover:text-blue-400 sm:text-lg lg:text-2xl"
          >
            Frontend
          </figcaption>
        </figure>
      </NuxtLink>
      <NuxtLink
        class="group block h-fit w-full cursor-pointer rounded-lg border border-solid border-slate-300 bg-slate-100 px-4 py-2 hover:border-blue-200 hover:bg-blue-100 xs:w-[calc((100%-(1*1rem))/2)] md:w-[calc((100%-(2*1rem))/3)] lg:w-[calc((100%-(3*1rem))/4)]"
        to="/portfolio/frontend?tag=frontend"
        target="_self"
      >
        <figure class="flex h-fit w-full flex-row items-center justify-start gap-2">
          <div
            class="aspect-square size-8 overflow-hidden rounded-lg border border-solid border-slate-300 transition-all sm:size-10 md:size-12 lg:size-16"
          >
            <img
              src="/images/icon-app-photoshop.svg"
              title="Design"
              alt="Design"
              width="24"
              height="24"
              loading="lazy"
              decoding="async"
            />
          </div>
          <figcaption
            class="mg:text-xl relative text-base font-bold leading-none tracking-normal text-gray-600 group-hover:text-blue-400 sm:text-lg"
          >
            Design
          </figcaption>
        </figure>
      </NuxtLink>
    </div>
    <!-- 載入中狀態 -->
    <div v-if="pending">載入中...</div>
    <!-- 錯誤處理 -->
    <div v-else-if="error">載入資料時出現錯誤：{{ error.message }}</div>
    <!-- 資料渲染 -->
    <div
      v-else-if="data?.dataCard && data?.dataCard.length"
      class="mx-auto flex w-full max-w-full flex-row flex-wrap items-stretch justify-start gap-x-4 gap-y-8 px-4 *:sm:max-w-[calc((100%-(1*1rem))/2)] *:md:max-w-[calc((100%-(2*1rem))/3)] lg:max-w-[960px] *:lg:max-w-[calc((100%-(3*1rem))/4)]"
    >
      <PortfolioCardItem
        v-for="card in data?.dataCard"
        :key="card.id"
        :card-id="card.id"
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
