import { defineStore } from 'pinia'

export const useHoverStore = defineStore('hover', {
  state: () => ({
    hoveredId: null as number | null,
  }),
  actions: {
    setHoveredId(id: number | null) {
      this.hoveredId = id
    },
  },
})
