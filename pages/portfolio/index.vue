<script setup lang="ts">
import { useDataFetch } from '~/composables/useDataFetch'

// 使用整合後的 useDataFetch
const { currentPage, data, pending, error, totalCount, perPage } = useDataFetch('')

definePageMeta({
  middleware: ['loading'], // 啟用 loading 中介層
})
</script>

<template>
  <main class="relative z-0 bg-gray-200 py-6">
    <h1 class="hidden">Portfolio</h1>

    <div
      class="mx-auto mb-8 flex w-full max-w-full flex-col flex-wrap items-center justify-start gap-y-2 px-4 xs:flex-row xs:gap-x-4 md:gap-y-0 lg:max-w-[960px]"
    >
      <h2 class="mx-auto block w-full max-w-full px-0 text-base font-semibold leading-loose text-black">項目分類:</h2>
      <NuxtLink
        class="group block h-fit w-full cursor-pointer rounded-lg border border-solid border-slate-300 bg-slate-100 px-4 py-2 hover:border-blue-200 hover:bg-blue-100 xs:w-[calc((100%-(1*1rem))/2)] md:w-[calc((100%-(2*1rem))/3)] lg:w-[calc((100%-(3*1rem))/4)]"
        to="/portfolio/frontend?tag=frontend"
        title="Frontend"
        alt="Frontend"
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
        to="/portfolio/design?tag=design"
        title="Design"
        alt="Design"
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
    <PaginationDefault
      v-if="data?.perPage && data?.totalCount > data?.perPage"
      :total-count="totalCount"
      :per-page="perPage"
      :current-page="currentPage"
    ></PaginationDefault>
  </main>
</template>

<style scoped></style>
