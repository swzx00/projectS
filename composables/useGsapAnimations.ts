import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useGsapAnimations() {
  onMounted(() => {
    // <!-- #btn-resume -->
    gsap.fromTo(
      '#btn-resume',
      {
        top: '2.5rem',
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=100',
          end: 'top top-=200',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        top: '5rem',
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )

    // <!-- 第一屏 區域 -->
    // 初始狀態
    gsap.set('#screen01-container', {
      opacity: 1,
      pointerEvents: 'auto',
    })
    // 動畫
    gsap.fromTo(
      '#screen01-container',
      {
        opacity: 1,
        pointerEvents: 'auto',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=200',
          end: 'top top-=200',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        opacity: 0,
        pointerEvents: 'none',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // <!-- 第一屏 大頭照 -->
    gsap.fromTo(
      '#screen01-headshot',
      {
        display: 'block',
        left: '0',
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        blur: 0,
        filter: 'blur(0px)',
        webkitFilter: 'blur(0px)',
        pointerEvents: 'auto',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top+=64',
          end: 'top top-=200',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'none',
        left: '50%',
        x: '-50%',
        y: '175%',
        scale: 5,
        opacity: 0,
        blur: 10,
        filter: 'blur(10px)',
        webkitFilter: 'blur(10px)',
        pointerEvents: 'none',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // <!-- 第一屏 文字區域 -->
    gsap.fromTo(
      '#screen01-text',
      {
        display: 'block',
        y: 0,
        scale: 1,
        opacity: 1,
        blur: 0,
        filter: 'blur(0px)',
        webkitFilter: 'blur(0px)',
        pointerEvents: 'auto',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top+=64',
          end: 'top top-=200',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'none',
        y: '50%',
        scale: 0.5,
        opacity: 0,
        blur: 5,
        filter: 'blur(5px)',
        webkitFilter: 'blur(5px)',
        pointerEvents: 'none',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )

    // <!-- 第二屏 -->
    // 初始狀態
    gsap.set('#screen02-container', {
      display: 'block',
      backgroundColor: 'transparent',
      pointerEvents: 'none',
    })
    // 動畫
    gsap.fromTo(
      '#screen02-container',
      {
        display: 'block',
        backgroundColor: 'transparent',
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=200',
          end: 'top top-=400',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'block',
        backgroundColor: 'rgb(96 165 250 / 0.2)',
        pointerEvents: 'none',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )

    // <!-- 第二屏 框框 -->
    // 初始狀態
    gsap.set(
      [
        '#screen02-container-top',
        '#screen02-container-right',
        '#screen02-container-bottom',
        '#screen02-container-left',
      ],
      {
        display: 'none',
        scaleX: 0,
        scaleY: 0,
        opacity: 0,
        pointerEvents: 'none',
      },
    )
    // 動畫(左右)
    gsap.fromTo(
      ['#screen02-container-left', '#screen02-container-right'],
      {
        display: 'block',
        scaleX: 1,
        scaleY: 0,
        opacity: 1,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=0',
          end: 'top top-=100',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'block',
        scaleX: 1,
        scaleY: 1,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 動畫(上下)
    gsap.fromTo(
      ['#screen02-container-top', '#screen02-container-bottom'],
      {
        display: 'block',
        scaleX: 0,
        scaleY: 1,
        opacity: 1,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=100',
          end: 'top top-=200',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'block',
        scaleX: 1,
        scaleY: 1,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // <!-- 第二屏 形象照(去背) -->
    // 初始狀態
    gsap.set('#section-02-pic-matting', {
      display: 'none',
      opacity: 0,
      pointerEvents: 'none',
    })
    // 動畫
    gsap.fromTo(
      '#section-02-pic-matting',
      {
        display: 'none',
        bottom: '-100%',
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=200',
          end: 'top top-=400',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'flex',
        bottom: 0,
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // <!-- 第二屏 文字區域 -->
    // 初始狀態
    gsap.set('#screen02-text', {
      display: 'none',
      opacity: 0,
      pointerEvents: 'none',
    })
    // 動畫
    gsap.fromTo(
      '#screen02-text',
      {
        display: 'none',
        top: '200%',
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=200',
          end: 'top top-=400',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'flex',
        top: '50%',
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // <!-- 第二屏 文字區域 p01, p02 -->
    // 初始狀態
    gsap.set(['#screen02-text-p01', '#screen02-text-p02', '#screen02-text-p03'], {
      display: 'inline-block',
      opacity: 0,
      pointerEvents: 'none',
    })
    // 動畫(p01)
    gsap.fromTo(
      '#screen02-text-p01',
      {
        display: 'inline-block',
        y: '-100%',
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=400',
          end: 'top top-=600',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'inline-block',
        y: 0,
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 動畫(p02)
    gsap.fromTo(
      '#screen02-text-p02',
      {
        display: 'inline-block',
        y: '-100%',
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=600',
          end: 'top top-=800',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'inline-block',
        y: 0,
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 動畫(p02)
    gsap.fromTo(
      '#screen02-text-p03',
      {
        display: 'inline-block',
        y: '-100%',
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=800',
          end: 'top top-=1000',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'inline-block',
        y: 0,
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )

    // #section-01 opacity變化
    // gsap.fromTo(
    //   '#section-01',
    //   {
    //     display: 'block',
    //     opacity: 1,
    //     pointerEvents: 'auto',
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top+=64',
    //       end: 'top top-=200',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     display: 'none',
    //     opacity: 0,
    //     pointerEvents: 'none',
    //     immediateRender: false, // 避免初始值在載入時被套用
    //   },
    // )
    // // #section-01-pic (圓形照片) translate變化
    // gsap.fromTo(
    //   '#section-01-pic',
    //   {
    //     left: '0',
    //     scale: 1,
    //     x: '0',
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top+=64',
    //       end: 'top top-=200',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     left: '50%',
    //     scale: 5,
    //     x: '-50%',
    //     immediateRender: false, // 避免初始值在載入時被套用
    //   },
    // )
    // // #section-01-pic (圓形照片) blur變化
    // gsap.fromTo(
    //   '#section-01-pic',
    //   {
    //     blur: 0,
    //     filter: 'blur(0px)',
    //     webkitFilter: 'blur(0px)',
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top-=100',
    //       end: 'top top-=200',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     blur: 10,
    //     filter: 'blur(10px)',
    //     webkitFilter: 'blur(10px)',
    //     immediateRender: false, // 避免初始值在載入時被套用
    //   },
    // )
    // // #section-translate-01>* 文字變化
    // gsap.fromTo(
    //   '#section-translate-01>*:not(#section-01-pic)',
    //   {
    //     scale: 1,
    //     blur: 0,
    //     filter: 'blur(0px)',
    //     webkitFilter: 'blur(0px)',
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top+=64',
    //       end: 'top top-=200',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     scale: 0.5,
    //     blur: 10,
    //     filter: 'blur(10px)',
    //     webkitFilter: 'blur(10px)',
    //   },
    // )
    // // #section-01 復原
    // gsap.to('#section-01', {
    //   scrollTrigger: {
    //     trigger: '#section-container',
    //     start: 'top top-=200',
    //     scrub: true,
    //     toggleActions: 'play reverse play reverse',
    //   },
    //   display: 'none',
    //   pointerEvents: 'none',
    //   immediateRender: false, // 避免初始值在載入時被套用
    // })
    // gsap.to('#section-01-pic', {
    //   scrollTrigger: {
    //     trigger: '#section-container',
    //     start: 'top top-=200',
    //     scrub: true,
    //     toggleActions: 'play reverse play reverse',
    //   },
    //   left: '0',
    //   scale: 1,
    //   x: '0',
    //   blur: 0,
    //   filter: 'blur(0px)',
    //   webkitFilter: 'blur(0px)',
    //   immediateRender: false, // 避免初始值在載入時被套用
    // })
    // gsap.to('#section-translate-01>*:not(#section-01-pic)', {
    //   scrollTrigger: {
    //     trigger: '#section-container',
    //     start: 'top top-=200',
    //     scrub: true,
    //     toggleActions: 'play reverse play reverse',
    //   },
    //   scale: 1,
    //   blur: 0,
    //   filter: 'blur(0px)',
    //   webkitFilter: 'blur(0px)',
    //   immediateRender: false, // 避免初始值在載入時被套用
    // })

    // // #section-02-pic 照片變化
    // gsap.fromTo(
    //   '#section-02-pic',
    //   {
    //     left: '-50%',
    //     opacity: 0,
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top-=200',
    //       end: 'top top-=400',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     left: '4rem',
    //     opacity: 1,
    //     immediateRender: false, // 避免初始值在載入時被套用
    //   },
    // )
    // // #section-02-pic-matting 照片變化
    // gsap.fromTo(
    //   '#section-02-pic-matting',
    //   {
    //     left: '-50%',
    //     opacity: 0,
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top-=200',
    //       end: 'top top-=400',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     left: '4rem',
    //     opacity: 1,
    //     immediateRender: false, // 避免初始值在載入時被套用
    //   },
    // )

    // // #section-02-text 文字變化
    // gsap.fromTo(
    //   '#section-02-text',
    //   {
    //     right: '50%',
    //     opacity: 0,
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top-=200',
    //       end: 'top top-=400',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     right: '4rem',
    //     opacity: 1,
    //     immediateRender: false, // 避免初始值在載入時被套用
    //   },
    // )
    // // #section-02-p01 文字變化
    // gsap.fromTo(
    //   '#section-02-p01',
    //   {
    //     y: '-50%',
    //     opacity: 0,
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top-=400',
    //       end: 'top top-=500',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     y: 0,
    //     opacity: 1,
    //     immediateRender: false, // 避免初始值在載入時被套用
    //   },
    // )
    // // #section-02-p02 文字變化
    // gsap.fromTo(
    //   '#section-02-p02',
    //   {
    //     y: '-50%',
    //     opacity: 0,
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top-=500',
    //       end: 'top top-=600',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     y: 0,
    //     opacity: 1,
    //     immediateRender: false, // 避免初始值在載入時被套用
    //   },
    // )

    // // #section-02-pic 照片變化
    // gsap.fromTo(
    //   '#section-02-pic',
    //   {
    //     height: 'calc(100dvh - 6rem)',
    //     left: '4rem',
    //     bottom: '1rem',
    //     x: 0,
    //     opacity: 1,
    //     borderWidth: 1,
    //     borderColor: '#ffffff',
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top-=600',
    //       end: 'top top-=800',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     height: '100%',
    //     left: 'calc(100% - 4rem)',
    //     bottom: 0,
    //     x: '-100%',
    //     opacity: 0,
    //     borderWidth: 0,
    //     borderColor: 'transparent',
    //     immediateRender: false, // 避免初始值在載入時被套用
    //   },
    // )

    // // #section-02-pic-matting 照片變化
    // gsap.fromTo(
    //   '#section-02-pic-matting',
    //   {
    //     display: 'flex',
    //     height: 'calc(100dvh - 6rem)',
    //     left: '4rem',
    //     bottom: '1rem',
    //     x: 0,
    //     opacity: 1,
    //     borderWidth: 1,
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top-=600',
    //       end: 'top top-=800',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     display: 'flex',
    //     height: '100%',
    //     left: 'calc(100% - 4rem)',
    //     bottom: 0,
    //     x: '-100%',
    //     opacity: 1,
    //     borderWidth: 0,
    //     immediateRender: false, // 避免初始值在載入時被套用
    //   },
    // )

    // // #section-02-text 文字變化
    // gsap.fromTo(
    //   '#section-02-text',
    //   {
    //     alignItems: 'flex-end',
    //     right: '4rem',
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top-=700',
    //       end: 'top top-=800',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     alignItems: 'flex-start',
    //     right: 'calc(100% - 12rem)',
    //     immediateRender: false, // 避免初始值在載入時被套用
    //   },
    // )
    // gsap.fromTo(
    //   '#section-02-text h2',
    //   {
    //     alignItems: 'flex-end',
    //     fontSize: '3.75rem',
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top-=700',
    //       end: 'top top-=800',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     alignItems: 'flex-start',
    //     fontSize: '2rem',
    //     immediateRender: false, // 避免初始值在載入時被套用
    //   },
    // )
    // gsap.fromTo(
    //   '#section-02-text hr',
    //   {
    //     width: '100%',
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top-=700',
    //       end: 'top top-=800',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     width: '150%',
    //     immediateRender: false, // 避免初始值在載入時被套用
    //   },
    // )
    // gsap.fromTo(
    //   ['#section-02-p01', '#section-02-p02'],
    //   {
    //     display: 'none',
    //     opacity: 0,
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top-=700',
    //       end: 'top top-=800',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     display: 'none',
    //     opacity: 0,
    //     immediateRender: false, // 避免初始值在載入時被套用
    //   },
    // )
  })
}
