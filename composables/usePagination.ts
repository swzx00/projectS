import type { Pagination } from './interface'

export function usePagination(
  totalCount: Ref<number | null>,
  perPage: Ref<number | null>,
  initialPage: Ref<number>,
): Pagination {
  const route = useRoute()
  const router = useRouter()
  const currentPage = ref(initialPage.value)
  const maxPages = 5

  // 計算總頁數
  const totalPages = computed(() => {
    if (totalCount.value !== null && perPage.value !== null) {
      return Math.ceil(totalCount.value / perPage.value)
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

  const gapPage = computed(() => {
    return totalPages.value - currentPage.value
  })

  const gotoPage = (page: number | string) => {
    const query = { ...route.query }

    if (typeof page === 'number') {
      currentPage.value = page
    } else if (page === 'next') {
      currentPage.value = Math.min(currentPage.value + 1, totalPages.value)
    } else if (page === 'prev') {
      currentPage.value = Math.max(currentPage.value - 1, 1)
    } else if (page === 'first') {
      currentPage.value = 1
    } else if (page === 'last') {
      currentPage.value = totalPages.value
    } else if (page === 'more') {
      currentPage.value = Math.min(currentPage.value + maxPages, totalPages.value)
    } else {
      console.warn('未知的頁面參數:', page)
      return
    }

    // 確保在導航前，抓取最新的頁碼陣列
    // const updatedPages = pagesArray.value

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
