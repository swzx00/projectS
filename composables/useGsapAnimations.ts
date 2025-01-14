import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useGsapAnimations() {
  onMounted(() => {
    // #btn-resume顯示
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
    // #section-01 opacity變化
    gsap.fromTo(
      '#section-01',
      {
        display: 'block',
        opacity: 1,
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
        opacity: 0,
        pointerEvents: 'none',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #section-01-pic (圓形照片) translate變化
    gsap.fromTo(
      '#section-01-pic',
      {
        left: '0',
        scale: 1,
        x: '0',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top+=64',
          end: 'top top-=200',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        left: '50%',
        scale: 5,
        x: '-50%',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #section-01-pic (圓形照片) blur變化
    gsap.fromTo(
      '#section-01-pic',
      {
        blur: 0,
        filter: 'blur(0px)',
        webkitFilter: 'blur(0px)',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=100',
          end: 'top top-=200',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        blur: 10,
        filter: 'blur(10px)',
        webkitFilter: 'blur(10px)',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #section-translate-01>* 文字變化
    gsap.fromTo(
      '#section-translate-01>*:not(#section-01-pic)',
      {
        scale: 1,
        blur: 0,
        filter: 'blur(0px)',
        webkitFilter: 'blur(0px)',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top+=64',
          end: 'top top-=200',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        scale: 0.5,
        blur: 10,
        filter: 'blur(10px)',
        webkitFilter: 'blur(10px)',
      },
    )
    // #section-01 復原
    gsap.to('#section-01', {
      scrollTrigger: {
        trigger: '#section-container',
        start: 'top top-=200',
        scrub: true,
        toggleActions: 'play reverse play reverse',
      },
      display: 'none',
      pointerEvents: 'none',
      immediateRender: false, // 避免初始值在載入時被套用
    })
    gsap.to('#section-01-pic', {
      scrollTrigger: {
        trigger: '#section-container',
        start: 'top top-=200',
        scrub: true,
        toggleActions: 'play reverse play reverse',
      },
      left: '0',
      scale: 1,
      x: '0',
      blur: 0,
      filter: 'blur(0px)',
      webkitFilter: 'blur(0px)',
      immediateRender: false, // 避免初始值在載入時被套用
    })
    gsap.to('#section-translate-01>*:not(#section-01-pic)', {
      scrollTrigger: {
        trigger: '#section-container',
        start: 'top top-=200',
        scrub: true,
        toggleActions: 'play reverse play reverse',
      },
      scale: 1,
      blur: 0,
      filter: 'blur(0px)',
      webkitFilter: 'blur(0px)',
      immediateRender: false, // 避免初始值在載入時被套用
    })

    // #section-02-pic 照片變化
    gsap.fromTo(
      '#section-02-pic',
      {
        left: '-50%',
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=200',
          end: 'top top-=400',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        left: '4rem',
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #section-02-pic-matting 照片變化
    gsap.fromTo(
      '#section-02-pic-matting',
      {
        left: '-50%',
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=200',
          end: 'top top-=400',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        left: '4rem',
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )

    // #section-02-text 文字變化
    gsap.fromTo(
      '#section-02-text',
      {
        right: '50%',
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=200',
          end: 'top top-=400',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        right: '4rem',
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #section-02-p01 文字變化
    gsap.fromTo(
      '#section-02-p01',
      {
        y: '-50%',
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=400',
          end: 'top top-=500',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        y: 0,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #section-02-p02 文字變化
    gsap.fromTo(
      '#section-02-p02',
      {
        y: '-50%',
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=500',
          end: 'top top-=600',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        y: 0,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )

    // #section-02-pic 照片變化
    gsap.fromTo(
      '#section-02-pic',
      {
        height: 'calc(100dvh - 6rem)',
        left: '4rem',
        bottom: '1rem',
        x: 0,
        opacity: 1,
        borderWidth: 1,
        borderColor: '#ffffff',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=600',
          end: 'top top-=800',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        height: '100%',
        left: 'calc(100% - 4rem)',
        bottom: 0,
        x: '-100%',
        opacity: 0,
        borderWidth: 0,
        borderColor: 'transparent',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )

    // #section-02-pic-matting 照片變化
    gsap.fromTo(
      '#section-02-pic-matting',
      {
        display: 'flex',
        height: 'calc(100dvh - 6rem)',
        left: '4rem',
        bottom: '1rem',
        x: 0,
        opacity: 1,
        borderWidth: 1,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=600',
          end: 'top top-=800',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'flex',
        height: '100%',
        left: 'calc(100% - 4rem)',
        bottom: 0,
        x: '-100%',
        opacity: 1,
        borderWidth: 0,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )

    // #section-02-text 文字變化
    gsap.fromTo(
      '#section-02-text',
      {
        alignItems: 'flex-end',
        right: '4rem',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=700',
          end: 'top top-=800',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        alignItems: 'flex-start',
        right: 'calc(100% - 12rem)',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    gsap.fromTo(
      '#section-02-text h2',
      {
        alignItems: 'flex-end',
        fontSize: '3.75rem',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=700',
          end: 'top top-=800',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        alignItems: 'flex-start',
        fontSize: '2rem',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    gsap.fromTo(
      '#section-02-text hr',
      {
        width: '100%',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=700',
          end: 'top top-=800',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        width: '150%',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    gsap.fromTo(
      ['#section-02-p01', '#section-02-p02'],
      {
        display: 'none',
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=700',
          end: 'top top-=800',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'none',
        opacity: 0,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
  })
}
