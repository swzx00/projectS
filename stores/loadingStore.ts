import { defineStore } from 'pinia'

export const useLoadingStore = defineStore('loading', () => {
  // 定義 state
  const isLoading = ref(false)

  // 定義 actions
  const showLoading = () => {
    isLoading.value = true
  }

  const hideLoading = () => {
    isLoading.value = false
  }

  return {
    isLoading,
    showLoading,
    hideLoading,
  }
})
