import { defineStore } from 'pinia'
import type { DataCard } from '~/composables/interface'

// 側欄預覽只需要這幾個欄位，由卡片直接提供，側欄不必再自行請求列表資料
export type HoveredCard = Pick<DataCard, 'id' | 'title' | 'images'>

export const useHoverStore = defineStore('hover', () => {
  const hoveredCard = ref<HoveredCard | null>(null)
  const hoveredId = computed(() => hoveredCard.value?.id ?? null)

  function setHoveredCard(card: HoveredCard | null) {
    hoveredCard.value = card
  }

  return { hoveredCard, hoveredId, setHoveredCard }
})
