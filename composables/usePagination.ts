import { computed } from 'vue'
import { useRouter } from 'vue-router'

export function usePagination(totalCount: number | null, perPage: number | null, initialPage: number, maxPages = 5) {
  const router = useRouter()

  // 將 currentPage 定義為 ref
  const currentPage = ref(initialPage || 1)

  // 計算總頁數
  const totalPages = computed(() => {
    if (totalCount && perPage) {
      return Math.ceil(totalCount / perPage)
    }
    return 0
  })

  // 計算顯示的頁碼陣列
  const pagesArray = computed(() => {
    const current = currentPage.value || 1
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
    return totalPages.value - currentPage.value
  })

  const gotoPage = (page: number | string) => {
    const current = currentPage.value || 1
    const route = useRoute() // 獲取目前的路由
    const query = { ...route.query } // 複製現有的查詢參數

    if (typeof page === 'number') {
      // 如果是數字，直接更新頁碼
      currentPage.value = page
    } else if (page === 'next') {
      // 下一頁
      currentPage.value = Math.min(current + 1, totalPages.value)
    } else if (page === 'prev') {
      // 前一頁
      currentPage.value = Math.max(current - 1, 1)
    } else if (page === 'first') {
      // 第一頁
      currentPage.value = 1
      query.page = '1'
    } else if (page === 'last') {
      // 最後一頁
      currentPage.value = totalPages.value
    } else if (page === 'more') {
      // 更多頁
      currentPage.value = Math.min(current + maxPages, totalPages.value)
    } else {
      console.warn('未知的頁面參數:', page)
      return
    }

    // 更新 query 並導航
    query.page = String(currentPage.value)
    router.push({ query }) // 使用修改後的查詢參數進行導航
  }

  return {
    totalPages,
    pagesArray,
    gapPage,
    currentPage,
    gotoPage,
  }
}
