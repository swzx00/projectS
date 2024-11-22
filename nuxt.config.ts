// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],
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
