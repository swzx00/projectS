export interface DataCard {
  id: string
  title: string
  tag: string[]
  content: string
  image: string[]
  date: string
  demo?: string // 可選屬性
}

export interface ResponseData {
  totalCount: number
  page: number
  perPage: number
  dataCard: DataCard[]
  error?: string
}

export interface FetchResult {
  data: ResponseData | null
  pending: boolean
  error: string
}

export interface Pagination {
  totalPages: ComputedRef<number>
  pagesArray: ComputedRef<number[]>
  gapPage: ComputedRef<number>
  currentPage: Ref<number>
  gotoPage: (page: number | string) => void
}
