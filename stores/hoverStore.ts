import { defineStore } from 'pinia'

export const useHoverStore = defineStore('hover', () => {
  const hoveredId = ref<number | null>(null)

  function setHoveredId(id: number | null) {
    hoveredId.value = id
  }

  return { hoveredId, setHoveredId }
})
