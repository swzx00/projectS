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
      '2xs': '280px',
      // => @media (min-width: 320px) { ... }
      xs: '375px',
      // => @media (min-width: 375px) { ... }
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
      padding: {
        '10pt': '10pt',
        '12pt': '12pt',
        '14pt': '14pt',
        '16pt': '16pt',
        '18pt': '18pt',
        '20pt': '20pt',
      },
      margin: {
        '4pt': '4pt',
        '6pt': '6pt',
        '8pt': '8pt',
        '10pt': '10pt',
        '12pt': '12pt',
        '14pt': '14pt',
        '16pt': '16pt',
        '18pt': '18pt',
        '20pt': '20pt',
        '22pt': '22pt',
        '24pt': '24pt',
        '32pt': '32pt',
      },
      fontFamily: {
        JhengHei: ['"Microsoft JhengHei"', 'sans-serif', 'Arial'],
        Noto: ['"Noto Sans"', '"Microsoft JhengHei"', 'sans-serif', 'Arial'],
        Fira: ['"Fira Code"', '"Noto Sans"', '"Microsoft JhengHei"', 'sans-serif', 'Arial'],
        NotoSerif: ['"Noto Serif"', 'serif'],
      },
      fontSize: {
        '10pt': '10pt',
        '12pt': '12pt',
        '14pt': '14pt',
        '16pt': '16pt',
        '18pt': '18pt',
        '20pt': '20pt',
      },
      dropShadow: {
        'black-000': ['0 0 0 rgba(0, 0, 0, 0)', '0 0 0 rgba(0, 0, 0, 0)'],
        'black-100': ['1px 1px 2px rgba(0, 0, 0, .1)', '-1px -1px 2px rgba(0, 0, 0, .1)'],
        'black-200': ['1px 1px 2px rgba(0, 0, 0, .4)', '-1px -1px 2px rgba(0, 0, 0, .4)'],
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/4': '3 / 4',
      },
      // maxWidth: {
      //   A4: '210mm',
      // },
    },
  },
  plugins: [],
}
