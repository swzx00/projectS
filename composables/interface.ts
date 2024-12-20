export interface DataCard {
  id: string
  title: string
  tag: string[]
  content: string
  image: string[]
  date: string
  link?: string // 可選屬性
}

export interface ResponseData {
  totalCount: number
  page: number
  perPage: number
  dataCard: DataCard[]
  error?: string
}
