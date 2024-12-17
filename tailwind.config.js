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
    screens: {
      xs: '320px',
      // => @media (min-width: 320px) { ... }
      sm: '640px',
      // => @media (min-width: 640px) { ... }
      md: '768px',
      // => @media (min-width: 768px) { ... }
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
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
