<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useLoadingStore } from '~/stores/loadingStore'

// 監控 Loading 狀態
const { isLoading } = storeToRefs(useLoadingStore())
</script>

<template>
  <div
    v-if="isLoading"
    class="max-w-dvw pointer-events-auto fixed bottom-0 left-0 right-0 top-0 z-[9999] flex h-dvh max-h-dvh w-dvw cursor-progress items-center justify-center bg-gray-50/80"
  >
    <div
      class="spinner size-[40px] animate-spin rounded-full border-4 border-solid border-black/10 border-s-red-600"
    ></div>
  </div>
</template>

<style scoped></style>
