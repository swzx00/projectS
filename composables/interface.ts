export interface DataCard {
  id: number
  title: string
  tag: string[]
  content?: string
  images: string[]
  date: string
  demo?: string // 可選屬性
  status: number
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
  status?: number
}

export interface Pagination {
  totalPages: ComputedRef<number>
  pagesArray: ComputedRef<number[]>
  gapPage: ComputedRef<number>
  currentPage: Ref<number>
  gotoPage: (page: number | string) => void
}

export interface Military {
  militaryType: string
  militaryDischarge: string
}

export interface Experience {
  company: string
  title: string
  description: string
  start: string
  end: string
}

export interface Education {
  school: string
  department: string
  degree: string
  graduation: string
  start: string
  end: string
}

export interface skillsContent {
  skillsContentTitle: string
  skillsContentProficiency: string
}
export interface Skills {
  skillsType: string
  skillsContent: (string | skillsContent)[]
}

export interface Languages {
  languagesType: string
  languagesLevel: string
}

export interface Portfolios {
  url: string
  qrcode: string
  github: string | null
}

export interface DataResume {
  id: string
  name: string
  nameEng?: string
  introduction: string
  picture: string
  birthday: string
  residence: string
  marital: string
  military: Military
  email: string
  phone: string
  contactTime: string
  experience: Experience[]
  education: Education[]
  skills: Skills[]
  languages: Languages[]
  autobiography: string
  portfolios: Portfolios[]
}
export interface ResponseDataResume {
  dataResume: DataResume[]
  error?: string
}

export interface TokenCheckResult {
  hasToken: boolean
  currentToken: string | null
  storedToken: string | null
  timedOut: boolean
}
