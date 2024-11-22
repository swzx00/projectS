// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', '@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      // 指定您想要的字體
      'Noto Sans': [100, 200, 300, 400, 500, 600, 700, 800, 900], // 指定需要的字體粗細
    },
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
})
