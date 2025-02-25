// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: true, // 確保 SSR 模式開啟
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
  ],
  googleFonts: {
    families: {
      // 指定您想要的字體
      'Noto Sans': '100..900', // 指定需要的字體粗細
      'Fira Code': '300..700',
      'Noto Serif': '100..900',
    },
  },
  icon: {
    mode: 'svg', // default <Icon> mode applied
  },
  // dir: { // 自訂目錄名稱
  //   layouts: 'layouts',
  //   middleware: 'middleware',
  //   pages: 'pages',
  //   public: 'public',
  // },
  // imports: {  // 關閉自動導入的元件
  //   autoImport: false,
  // },
  app: {
    // baseURL: '/projectS/',
    head: {
      htmlAttrs: {
        lang: 'zh-Hant-TW', // 設定 <html> 標籤的 lang 屬性
      },
      title: '林家丞 作品集 | Portfolio WebSite Chia-Cheng, Lin',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' },
        { name: 'title', content: '林家丞 作品集 | Portfolio WebSite Chia-Cheng, Lin [swzx00]' },
        {
          name: 'description',
          content:
            '這是林家丞的作品集網站，This WebSite is Portfolio of Chia-Cheng, Lin (swzx00)，集結林家丞相關之作品。',
        },
        {
          name: 'keywords',
          content:
            '林家丞, swzx00, 皇家聖, Chia-Cheng, ChiaCheng, Chia-Cheng-Lin, 作品集, Portfolio, Project, ProjectS, 前端開發, 前端設計, 前端工程, 設計, 網頁設計, 平面設計, frontend,design, web',
        },
        { name: 'author', content: 'swzx00' },
        { name: 'copyright', content: '林家丞@swzx00' },
        { property: 'og:url', content: 'https://swzx00.vercel.app/' },
        { property: 'og:locale', content: 'zh-Hant-TW' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: '林家丞 作品集 | Portfolio WebSite Chia-Cheng, Lin [swzx00]' },
        {
          property: 'og:description',
          content:
            '這是林家丞的作品集網站，This WebSite is Portfolio of Chia-Cheng, Lin (swzx00)，集結林家丞相關之作品。',
        },
        { property: 'og:image', content: 'https://swzx00.vercel.app/og-img.jpg' },
        { property: 'og:image:alt', content: '林家丞 作品集' },
        { property: 'og:image:type', content: 'image/jpg' },
      ],
    },
  },
})
