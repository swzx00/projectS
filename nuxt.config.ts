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
  // app: {
  //   baseURL: '/projectS/',
  // },
})
