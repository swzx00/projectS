import { computed } from 'vue'
import { useRouter } from 'vue-router'

export function usePagination(totalCount: number | null, perPage: number | null, currentPage: number, maxPages = 5) {
  const router = useRouter()

  // 計算總頁數
  const totalPages = computed(() => {
    if (totalCount && perPage) {
      return Math.ceil(totalCount / perPage)
    }
    return 0
  })

  // 計算顯示的頁碼陣列
  const pagesArray = computed(() => {
    const current = currentPage || 1
    const total = totalPages.value

    if (total <= maxPages) {
      return Array.from({ length: total }, (_, i) => i + 1)
    }

    if (current >= 3 && current <= total - 3) {
      return [current - 2, current - 1, current, current + 1, current + 2]
    }

    if (current < 3) {
      return Array.from({ length: maxPages }, (_, i) => i + 1)
    }

    return Array.from({ length: maxPages }, (_, i) => total - maxPages + 1 + i)
  })

  // 計算距離最後一頁的頁數
  const gapPage = computed(() => {
    return totalPages.value - currentPage
  })

  // 頁面跳轉邏輯
  // const gotoPage = (page: number | string) => {
  //   const current = currentPage || 1
  //   if (typeof page === 'number') {
  //     router.push({ query: { page: String(page) } })
  //   } else if (page === 'next') {
  //     const nextPage = Math.min(current + 1, totalPages.value)
  //     router.push({ query: { page: String(nextPage) } })
  //   } else if (page === 'prev') {
  //     const prevPage = Math.max(current - 1, 1)
  //     router.push({ query: { page: String(prevPage) } })
  //   } else if (page === 'first') {
  //     router.push({ query: { page: '1' } })
  //   } else if (page === 'last') {
  //     router.push({ query: { page: String(totalPages.value) } })
  //   } else if (page === 'more') {
  //     const morePage = Math.min(current + maxPages, totalPages.value)
  //     router.push({ query: { page: String(morePage) } })
  //   } else {
  //     console.warn('未知的頁面參數:', page)
  //   }
  // }

  const gotoPage = (page: number | string) => {
    const current = currentPage || 1
    const route = useRoute() // 獲取目前的路由
    const query = { ...route.query } // 複製現有的查詢參數

    if (typeof page === 'number') {
      // 如果是數字，直接更新頁碼
      query.page = String(page)
    } else if (page === 'next') {
      // 下一頁
      const nextPage = Math.min(current + 1, totalPages.value)
      query.page = String(nextPage)
    } else if (page === 'prev') {
      // 前一頁
      const prevPage = Math.max(current - 1, 1)
      query.page = String(prevPage)
    } else if (page === 'first') {
      // 第一頁
      query.page = '1'
    } else if (page === 'last') {
      // 最後一頁
      query.page = String(totalPages.value)
    } else if (page === 'more') {
      // 更多頁
      const morePage = Math.min(current + maxPages, totalPages.value)
      query.page = String(morePage)
    } else {
      console.warn('未知的頁面參數:', page)
      return
    }

    router.push({ query }) // 使用修改後的查詢參數進行導航
  }

  return {
    totalPages,
    pagesArray,
    gapPage,
    gotoPage,
  }
}
