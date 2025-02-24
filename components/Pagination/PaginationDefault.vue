<script setup lang="ts">
import { defineModel } from 'vue'
import { usePagination } from '~/composables/usePagination'

// 取得 defineModel 的數據
const totalCount = defineModel<number | null>('totalCount', { default: null })
const perPage = defineModel<number | null>('perPage', { default: null })
const currentPage = defineModel<number>('currentPage', { default: 1 })

const { totalPages, pagesArray, gapPage, gotoPage } = usePagination(totalCount, perPage, currentPage)
</script>

<template>
  <div
    class="container mt-3 flex h-fit max-h-fit w-full flex-row flex-nowrap items-center justify-center gap-1 px-4 font-Fira text-base font-normal text-slate-500 transition-all *:border-2 *:border-solid *:duration-500"
  >
    <button
      class="flex size-9 items-center justify-center rounded-lg hover:border-slate-400 hover:bg-slate-300 hover:font-bold hover:text-slate-500"
      title="第一頁"
      :class="currentPage === 1 ? 'pointer-events-none border-transparent opacity-50' : 'border-slate-300'"
      :disabled="currentPage === 1"
      @click="gotoPage('first')"
    >
      <Icon name="uil:angle-double-left" size="24" title="第一頁" alt="第一頁" />
    </button>
    <button
      class="flex size-9 items-center justify-center rounded-lg border-slate-200/0 bg-slate-200/0 hover:border-slate-200/100 hover:text-slate-200/100"
      title="前一頁"
      :class="currentPage === 1 ? 'pointer-events-none border-transparent opacity-50' : 'border-slate-300'"
      :disabled="currentPage === 1"
      @click="gotoPage('prev')"
    >
      <Icon name="uil:angle-left" size="24" title="前一頁" alt="前一頁" />
    </button>
    <template v-if="pagesArray.length && pagesArray.length > 1">
      <button
        v-for="item in pagesArray"
        :key="item"
        class="flex size-9 items-center justify-center rounded-lg hover:border-slate-400 hover:bg-slate-300 hover:font-bold hover:text-slate-500"
        :class="
          item === currentPage
            ? 'pointer-events-none border-slate-500 bg-slate-500 font-bold text-white'
            : 'border-slate-300'
        "
        :disabled="item === currentPage"
        :title="'第' + item + '頁'"
        @click="gotoPage(item)"
      >
        {{ item }}
      </button>
    </template>
    <button
      v-if="totalPages && totalPages > 5 && gapPage >= 3"
      class="flex size-9 items-center justify-center rounded-lg border-slate-300 hover:border-slate-400 hover:bg-slate-300 hover:font-bold hover:text-slate-500"
      title="更多"
      @click="gotoPage('more')"
    >
      <Icon name="uil:ellipsis-h" size="24" title="更多" alt="更多" />
    </button>
    <button
      class="flex size-9 items-center justify-center rounded-lg border-slate-200/0 bg-slate-200/0 hover:border-slate-200/100 hover:text-slate-200/100"
      title="下一頁"
      :class="currentPage === totalPages ? 'pointer-events-none border-transparent opacity-50' : 'border-slate-300'"
      :disabled="currentPage === totalPages"
      @click="gotoPage('next')"
    >
      <Icon name="uil:angle-right" size="24" title="下一頁" alt="下一頁" />
    </button>
    <button
      class="flex size-9 items-center justify-center rounded-lg hover:border-slate-400 hover:bg-slate-300 hover:font-bold hover:text-slate-500"
      title="最後一頁"
      :class="currentPage === totalPages ? 'pointer-events-none border-transparent opacity-50' : 'border-slate-300'"
      :disabled="currentPage === totalPages"
      @click="gotoPage('last')"
    >
      <Icon name="uil:angle-double-right" size="24" title="最後一頁" alt="最後一頁" />
    </button>
  </div>
</template>

<style scoped></style>
