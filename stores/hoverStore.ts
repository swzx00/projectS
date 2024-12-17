import { defineStore } from 'pinia'

export const useHoverStore = defineStore('hover', {
  state: () => ({
    hoveredId: null as string | null,
  }),
  actions: {
    setHoveredId(id: string | null) {
      this.hoveredId = id
    },
  },
})
