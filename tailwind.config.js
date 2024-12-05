/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [
  //   './components/**/*.{vue,js,ts}',
  //   './layouts/**/*.vue',
  //   './pages/**/*.vue',
  //   './composables/**/*.{js,ts}',
  //   './plugins/**/*.{js,ts}',
  //   './app.{html,js,ts,vue}',
  // ],
  theme: {
    extend: {
      fontFamily: {
        JhengHei: ['"Microsoft JhengHei"', 'sans-serif', 'Arial'],
        Noto: ['"Noto Sans"', '"Microsoft JhengHei"', 'sans-serif', 'Arial'],
        Fira: ['"Fira Code"', '"Noto Sans"', '"Microsoft JhengHei"', 'sans-serif', 'Arial'],
      },
    },
  },
  plugins: [],
}
