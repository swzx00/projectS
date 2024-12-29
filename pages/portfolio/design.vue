<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useDataFetch } from '~/composables/useDataFetch'

// 使用整合後的 useDataFetch
const { currentPage, data, pending, error, totalCount, perPage } = useDataFetch('design')

definePageMeta({
  layout: 'design',
  // middleware: ['loading'], // 啟用 loading 中介層
})
const route = useRoute()

const title = ref('design')

watch(
  () => route.query.tag,
  (newTag) => {
    if (!newTag) {
      const cleanTag = 'Design'
      switch (cleanTag) {
        default:
          // 如果沒有匹配的 tag，使用默認值
          title.value = 'Design'
          break
      }
    } else {
      // 先去除引號和空格，然後轉換為小寫
      const cleanTag = (newTag as string).replace(/['\s]/g, '').toLowerCase()
      switch (cleanTag) {
        case 'product':
          title.value = 'Product Create'
          break
        case 'media':
          title.value = 'Media Create'
          break
        case 'graphic':
          title.value = 'Graphic Design'
          break
        case 'publication':
          title.value = 'Publication Design'
          break
        case 'interface':
          title.value = 'Interface Design'
          break
        case 'edm':
          title.value = 'Edm Design'
          break
        case 'web':
          title.value = 'Web Design'
          break
        case 'design':
          title.value = 'Design'
          break
        default:
          // 如果沒有匹配的 tag，使用默認值
          title.value = 'Design'
          break
      }
    }
  },
  { immediate: true },
)

// 設定範圍與間距
const maxX = 1920 // 最大值
const maxY = 1080 // 最大值
const step = 50 // 間距

// 動態生成數字陣列
const generateNumbers = (max: number, step: number) => {
  const result = []
  for (let i = 0; i <= max; i += step) {
    result.push(i)
  }
  return result
}

const numbersX = computed(() => generateNumbers(maxX, step))
const numbersY = computed(() => generateNumbers(maxY, step))
</script>

<template>
  <main
    class="relative flex h-full max-h-full w-full flex-col bg-zinc-700 sm:w-[calc(100%-250px)] md:w-[calc(100%-200px)] lg:w-[calc(100%-250px)] xl:w-[calc(100%-300px)]"
  >
    <h2
      class="flex h-8 w-full max-w-full flex-row items-center justify-center gap-2 bg-zinc-600 py-1 pl-2 pr-4 text-base font-medium text-white sm:w-fit sm:max-w-fit sm:justify-start"
    >
      <!-- <Icon :name="iconName" size="12" :title="title" :alt="title" /> -->
      {{ title }}<span class="text-xs font-thin">@&nbsp;100%&nbsp;(RGB/8)</span>
    </h2>
    <div
      class="flex h-full max-h-full grid-cols-[1.25rem_auto] grid-rows-[1.25rem_auto] gap-0 overflow-hidden bg-zinc-800 sm:grid sm:max-h-[calc(100%-1.25rem)]"
    >
      <div
        class="relative hidden size-5 bg-zinc-600 before:absolute before:bottom-1/3 before:block before:h-px before:w-full before:bg-zinc-500 before:content-[''] after:absolute after:right-1/3 after:h-full after:w-px after:bg-zinc-500 after:content-[''] sm:block"
      ></div>
      <div
        class="scrollbar col-span-full col-start-2 col-end-3 row-start-1 row-end-3 h-full overflow-x-hidden overflow-y-scroll"
      >
        <div
          class="sticky top-0 z-10 hidden h-5 w-full flex-row flex-nowrap items-end justify-start gap-0 overflow-hidden bg-zinc-700 bg-[url(/images/bg-rulersX.svg)] bg-auto bg-[bottom_left_1rem] bg-repeat-x *:pointer-events-none *:mb-1 *:block *:h-full *:w-10 *:flex-shrink-0 *:flex-grow-0 *:select-none *:pl-1 *:text-[11px] *:font-thin *:text-zinc-300 first:*:ml-4 sm:flex"
        >
          <span v-for="num in numbersX" :key="num">{{ num }}</span>
        </div>
        <div class="relative z-0 h-full px-4 py-6">
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
                class="mx-auto flex h-fit w-full max-w-full flex-row flex-wrap items-stretch justify-start gap-x-5 gap-y-12 *:max-w-full *:sm:max-w-full *:md:max-w-[calc((100%-(1*1.25rem))/2)] *:lg:max-w-[calc((100%-(2*1.25rem))/3)] *:xl:max-w-[calc((100%-(3*1.25rem))/4)]"
              >
                <CardDesign
                  v-for="card in data?.dataCard"
                  :key="card.id"
                  :card-id="card.id"
                  :title="card.title"
                  :tags="card.tag"
                  :content="card.content"
                  :image="card.image"
                  :date="card.date"
                  :link="card.link || ''"
                ></CardDesign>
              </div>
              <PaginationDesign
                v-if="data && data?.perPage && data?.totalCount > data?.perPage"
                :total-count="totalCount"
                :per-page="perPage"
                :current-page="currentPage"
              ></PaginationDesign>
            </div>
          </Transition>
        </div>
      </div>
      <div
        class="hidden h-full w-5 flex-col flex-nowrap items-end justify-start overflow-hidden bg-zinc-700 bg-[url(/images/bg-rulersY.svg)] bg-auto bg-[right_top_1.5rem] bg-repeat-y *:pointer-events-none *:mr-1 *:block *:h-10 *:w-3 *:flex-shrink-0 *:flex-grow-0 *:select-none *:break-all *:pt-1 *:text-center *:text-[11px] *:font-thin *:leading-none *:text-zinc-300 first:*:mt-6 sm:flex"
      >
        <span v-for="num in numbersY" :key="num">{{ num }}</span>
      </div>
    </div>
    <div
      class="pointer-events-none relative box-border hidden h-5 max-h-5 w-full max-w-full cursor-default select-none items-center justify-between border-0 border-solid border-transparent bg-black/10 px-5 text-xs leading-none text-white/80 before:absolute before:left-0 before:block before:aspect-square before:size-5 before:bg-white/10 before:content-[''] after:absolute after:right-0 after:block after:aspect-square after:size-5 after:bg-white/10 after:content-[''] sm:flex"
    >
      <div class="flex h-full items-center justify-start gap-2">
        <span class="flex h-full items-center justify-start gap-1 bg-zinc-700 px-4 opacity-100">100%</span>
        <span class="flex items-center justify-start gap-1"> 1920&nbsp;px&nbsp;×&nbsp;1080&nbsp;px(300ppi) </span>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
