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
          end: 'top top-=550',
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
          start: 'top top-=550',
          end: 'top top-=700',
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
          start: 'top top-=700',
          end: 'top top-=850',
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

    // <!-- 第三屏 -->
    // 初始狀態
    gsap.set('#screen03-container', {
      display: 'none',
      opacity: 0,
      pointerEvents: 'none',
    })
    // 動畫
    gsap.fromTo(
      '#screen03-container',
      {
        display: 'none',
        opacity: 1,
        pointerEvents: 'auto',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1000',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'flex',
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // <!-- 第三屏 bg -->
    // 初始狀態
    gsap.set('#screen03-bg', {
      display: 'none',
      opacity: 0,
      blur: 0,
      filter: 'blur(0px)',
      webkitFilter: 'blur(0px)',
      pointerEvents: 'none',
    })
    // 動畫bg
    gsap.fromTo(
      '#screen03-bg',
      {
        display: 'none',
        opacity: 1,
        background: 'linear-gradient(75deg, transparent 100%, #e5e7eb 100%, #e5e7eb 100%)',
        pointerEvents: '',
        blur: 0,
        filter: 'blur(0px)',
        webkitFilter: 'blur(0px)',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1000',
          end: 'top top-=1200',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'flex',
        opacity: 1,
        background: 'linear-gradient(75deg, transparent 0%, #e5e7eb 0%, #e5e7eb 100%)',
        pointerEvents: 'none',
        blur: 10,
        filter: 'blur(10px)',
        webkitFilter: 'blur(10px)',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // <!-- 第三屏 角落 -->
    // 初始狀態
    gsap.set(['#screen03-corner-top-left', '#screen03-corner-bottom-right'], {
      display: 'none',
      opacity: 0,
      pointerEvents: 'none',
    })
    // 動畫(corner-top-left / corner-bottom-right)
    gsap.fromTo(
      ['#screen03-corner-top-left', '#screen03-corner-bottom-right'],
      {
        display: 'none',
        scaleX: 0,
        opacity: 1,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1000',
          end: 'top top-=1200',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'block',
        scaleX: 1,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // <!-- 第三屏 Title -->
    // 初始狀態
    gsap.set('#screen03-title', {
      display: 'none',
      opacity: 0,
      pointerEvents: 'none',
    })
    // 動畫(corner-top-left / corner-bottom-right)
    gsap.fromTo(
      '#screen03-title',
      {
        display: 'none',
        y: '-100%',
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1200',
          end: 'top top-=1300',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'inline-flex',
        y: '0%',
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // <!-- 第三屏 Content -->
    // 初始狀態
    gsap.set('#screen03-content', {
      display: 'none',
      y: '-100%',
      opacity: 0,
      pointerEvents: 'none',
    })
    // 動畫(corner-top-left / corner-bottom-right)
    gsap.fromTo(
      '#screen03-content',
      {
        display: 'none',
        y: '-100%',
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1200',
          end: 'top top-=1300',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'inline-flex',
        y: '0%',
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // <!-- 第三屏 Timeline Item -->
    // 初始狀態
    gsap.set(
      [
        '#screen03-timeline-00',
        '#screen03-timeline-01',
        '#screen03-timeline-02',
        '#screen03-timeline-03',
        '#screen03-timeline-04',
        '#screen03-timeline-05',
        '#screen03-timeline-06',
        '#screen03-timeline-01-content',
        '#screen03-timeline-02-content',
        '#screen03-timeline-03-content',
        '#screen03-timeline-04-content',
        '#screen03-timeline-05-content',
        '#screen03-timeline-06-content',
      ],
      {
        display: 'none',

        scaleY: 0,
        opacity: 0,
        borderLeftColor: 'transparent',
        pointerEvents: 'none',
      },
    )
    // 動畫(#screen03-timeline-06)
    gsap.fromTo(
      '#screen03-timeline-06',
      {
        display: 'none',
        maxHeight: 'calc(97%/6)',
        scaleY: 1,
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1200',
          end: 'top top-=1300',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'flex',
        maxHeight: 'calc(97%/6)',
        scaleY: 1,
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    gsap.fromTo(
      '#screen03-timeline-06 .dot',
      {
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1200',
          end: 'top top-=1300',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    gsap.fromTo(
      '#screen03-timeline-06 .timeline-title',
      {
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1250',
          end: 'top top-=1350',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    gsap.fromTo(
      '#screen03-timeline-06 .line',
      {
        scaleY: 0,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1400',
          end: 'top top-=1500',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        scaleY: 1,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 動畫(#screen03-timeline-05)
    gsap.fromTo(
      '#screen03-timeline-05',
      {
        display: 'none',
        maxHeight: 'calc(97%/6)',
        scaleY: 1,
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1500',
          end: 'top top-=1600',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'flex',
        maxHeight: 'calc(97%/6)',
        scaleY: 1,
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    gsap.fromTo(
      '#screen03-timeline-05 .dot',
      {
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1500',
          end: 'top top-=1600',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    gsap.fromTo(
      '#screen03-timeline-05 .timeline-title',
      {
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1550',
          end: 'top top-=1650',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    gsap.fromTo(
      '#screen03-timeline-05 .line',
      {
        scaleY: 0,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1600',
          end: 'top top-=1700',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        scaleY: 1,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 動畫(#screen03-timeline-04)
    gsap.fromTo(
      '#screen03-timeline-04',
      {
        display: 'none',
        maxHeight: 'calc(97%/6)',
        scaleY: 1,
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1700',
          end: 'top top-=1800',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'flex',
        maxHeight: 'calc(97%/6)',
        scaleY: 1,
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    gsap.fromTo(
      '#screen03-timeline-04 .dot',
      {
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1700',
          end: 'top top-=1800',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    gsap.fromTo(
      '#screen03-timeline-04 .timeline-title',
      {
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1750',
          end: 'top top-=1850',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    gsap.fromTo(
      '#screen03-timeline-04 .line',
      {
        scaleY: 0,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1800',
          end: 'top top-=1900',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        scaleY: 1,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 動畫(#screen03-timeline-03)
    gsap.fromTo(
      '#screen03-timeline-03',
      {
        display: 'none',
        maxHeight: 'calc(97%/6)',
        scaleY: 1,
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1900',
          end: 'top top-=2000',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'flex',
        maxHeight: 'calc(97%/6)',
        scaleY: 1,
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    gsap.fromTo(
      '#screen03-timeline-03 .dot',
      {
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1900',
          end: 'top top-=2000',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    gsap.fromTo(
      '#screen03-timeline-03 .timeline-title',
      {
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1950',
          end: 'top top-=2050',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    gsap.fromTo(
      '#screen03-timeline-03 .line',
      {
        scaleY: 0,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2000',
          end: 'top top-=2100',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        scaleY: 1,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 動畫(#screen03-timeline-02)
    gsap.fromTo(
      '#screen03-timeline-02',
      {
        display: 'none',
        maxHeight: 'calc(97%/6)',
        scaleY: 1,
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2100',
          end: 'top top-=2200',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'flex',
        maxHeight: 'calc(97%/6)',
        scaleY: 1,
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    gsap.fromTo(
      '#screen03-timeline-02 .dot',
      {
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2100',
          end: 'top top-=2200',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    gsap.fromTo(
      '#screen03-timeline-02 .timeline-title',
      {
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2150',
          end: 'top top-=2250',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    gsap.fromTo(
      '#screen03-timeline-02 .line',
      {
        scaleY: 0,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2200',
          end: 'top top-=2300',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        scaleY: 1,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 動畫(#screen03-timeline-01)
    gsap.fromTo(
      '#screen03-timeline-01',
      {
        display: 'none',
        maxHeight: 'calc(97%/6)',
        scaleY: 1,
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2300',
          end: 'top top-=2400',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'flex',
        maxHeight: 'calc(97%/6)',
        scaleY: 1,
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    gsap.fromTo(
      '#screen03-timeline-01 .dot',
      {
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2300',
          end: 'top top-=2400',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    gsap.fromTo(
      '#screen03-timeline-01 .timeline-title',
      {
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2350',
          end: 'top top-=2450',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    gsap.fromTo(
      '#screen03-timeline-01 .line',
      {
        scaleY: 0,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2400',
          end: 'top top-=2500',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        scaleY: 1,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 動畫(#screen03-timeline-00)
    gsap.fromTo(
      '#screen03-timeline-00',
      {
        display: 'none',

        scaleY: 1,
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2500',
          end: 'top top-=2600',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'flex',
        scaleY: 1,
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    gsap.fromTo(
      '#screen03-timeline-00 .line',
      {
        scaleY: 0,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2500',
          end: 'top top-=2600',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        scaleY: 1,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 動畫(#screen03-timeline-01-content)
    gsap.fromTo(
      '#screen03-timeline-01',
      {
        maxHeight: 'calc(97%/6)',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2800',
          end: 'top top-=2900',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        maxHeight: 'calc((100% - (97%/6*5)) + (97%/6))',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    gsap.fromTo(
      '#screen03-timeline-01-content',
      {
        display: 'none',
        scaleY: 0,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2800',
          end: 'top top-=2900',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'block',
        scaleY: 1,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    gsap.fromTo(
      [
        '#screen03-timeline-02 .describe-txt',
        '#screen03-timeline-03 .describe-txt',
        '#screen03-timeline-04 .describe-txt',
        '#screen03-timeline-05 .describe-txt',
        '#screen03-timeline-06 .describe-txt',
      ],
      {
        scaleY: 1,
        opacity: 1,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2800',
          end: 'top top-=2900',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'block',
        scaleY: 0,
        opacity: 0,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // // 動畫(#screen03-timeline-05)
    // gsap.fromTo(
    //   '#screen03-timeline-05',
    //   {
    //     display: 'none',

    //     scaleY: 0,
    //     opacity: 0,
    //     pointerEvents: 'none',
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top-=1500',
    //       end: 'top top-=1600',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     display: 'flex',
    //     scaleY: 1,
    //     opacity: 1,
    //     pointerEvents: 'auto',
    //     immediateRender: false, // 避免初始值在載入時被套用
    //   },
    // )
    // gsap.fromTo(
    //   '#screen03-timeline-05 .dot',
    //   {
    //     opacity: 0,
    //     pointerEvents: 'none',
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top-=1500',
    //       end: 'top top-=1600',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     opacity: 1,
    //     pointerEvents: 'auto',
    //     immediateRender: false, // 避免初始值在載入時被套用
    //   },
    // )
    // gsap.fromTo(
    //   '#screen03-timeline-05 .timeline-title',
    //   {
    //     opacity: 0,
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top-=1550',
    //       end: 'top top-=1650',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     opacity: 1,
    //     immediateRender: false, // 避免初始值在載入時被套用
    //   },
    // )
    // gsap.fromTo(
    //   '#screen03-timeline-05 .line',
    //   {
    //     scaleY: 0,
    //     opacity: 0,
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top-=1600',
    //       end: 'top top-=1700',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     scaleY: 1,
    //     opacity: 1,
    //     immediateRender: false, // 避免初始值在載入時被套用
    //   },
    // )
    // // 動畫(#screen03-timeline-04)
    // gsap.fromTo(
    //   '#screen03-timeline-04',
    //   {
    //     display: 'none',

    //     scaleY: 0,
    //     opacity: 0,
    //     pointerEvents: 'none',
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top-=1700',
    //       end: 'top top-=1800',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     display: 'flex',
    //     scaleY: 1,
    //     opacity: 1,
    //     pointerEvents: 'auto',
    //     immediateRender: false, // 避免初始值在載入時被套用
    //   },
    // )
    // gsap.fromTo(
    //   '#screen03-timeline-04 .dot',
    //   {
    //     opacity: 0,
    //     pointerEvents: 'none',
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top-=1700',
    //       end: 'top top-=1800',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     opacity: 1,
    //     pointerEvents: 'auto',
    //     immediateRender: false, // 避免初始值在載入時被套用
    //   },
    // )
    // gsap.fromTo(
    //   '#screen03-timeline-04 .timeline-title',
    //   {
    //     opacity: 0,
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top-=1750',
    //       end: 'top top-=1850',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     opacity: 1,
    //     immediateRender: false, // 避免初始值在載入時被套用
    //   },
    // )
    // gsap.fromTo(
    //   '#screen03-timeline-04 .line',
    //   {
    //     scaleY: 0,
    //     opacity: 0,
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top-=1800',
    //       end: 'top top-=1900',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     scaleY: 1,
    //     opacity: 1,
    //     immediateRender: false, // 避免初始值在載入時被套用
    //   },
    // )
    // // 動畫(#screen03-timeline-03)
    // gsap.fromTo(
    //   '#screen03-timeline-03',
    //   {
    //     display: 'none',

    //     scaleY: 0,
    //     opacity: 0,
    //     pointerEvents: 'none',
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top-=1800',
    //       end: 'top top-=1900',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     display: 'flex',
    //     scaleY: 1,
    //     opacity: 1,
    //     pointerEvents: 'auto',
    //     immediateRender: false, // 避免初始值在載入時被套用
    //   },
    // )
    // gsap.fromTo(
    //   '#screen03-timeline-03 .dot',
    //   {
    //     opacity: 0,
    //     pointerEvents: 'none',
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top-=1800',
    //       end: 'top top-=1900',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     opacity: 1,
    //     pointerEvents: 'auto',
    //     immediateRender: false, // 避免初始值在載入時被套用
    //   },
    // )
    // gsap.fromTo(
    //   '#screen03-timeline-03 .timeline-title',
    //   {
    //     opacity: 0,
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top-=1950',
    //       end: 'top top-=2050',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     opacity: 1,
    //     immediateRender: false, // 避免初始值在載入時被套用
    //   },
    // )
    // gsap.fromTo(
    //   '#screen03-timeline-03 .line',
    //   {
    //     scaleY: 0,
    //     opacity: 0,
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top-=2000',
    //       end: 'top top-=2100',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     scaleY: 1,
    //     opacity: 1,
    //     immediateRender: false, // 避免初始值在載入時被套用
    //   },
    // )
    // // 動畫(#screen03-timeline-02)
    // gsap.fromTo(
    //   '#screen03-timeline-02',
    //   {
    //     display: 'none',

    //     scaleY: 0,
    //     opacity: 0,
    //     pointerEvents: 'none',
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top-=2100',
    //       end: 'top top-=2200',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     display: 'flex',
    //     scaleY: 1,
    //     opacity: 1,
    //     pointerEvents: 'auto',
    //     immediateRender: false, // 避免初始值在載入時被套用
    //   },
    // )
    // gsap.fromTo(
    //   '#screen03-timeline-02 .dot',
    //   {
    //     opacity: 0,
    //     pointerEvents: 'none',
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top-=2100',
    //       end: 'top top-=2200',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     opacity: 1,
    //     pointerEvents: 'auto',
    //     immediateRender: false, // 避免初始值在載入時被套用
    //   },
    // )
    // gsap.fromTo(
    //   '#screen03-timeline-02 .timeline-title',
    //   {
    //     opacity: 0,
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top-=2150',
    //       end: 'top top-=2250',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     opacity: 1,
    //     immediateRender: false, // 避免初始值在載入時被套用
    //   },
    // )
    // gsap.fromTo(
    //   '#screen03-timeline-02 .line',
    //   {
    //     scaleY: 0,
    //     opacity: 0,
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top-=2200',
    //       end: 'top top-=2300',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     scaleY: 1,
    //     opacity: 1,
    //     immediateRender: false, // 避免初始值在載入時被套用
    //   },
    // )
    // // 動畫(#screen03-timeline-01)
    // gsap.fromTo(
    //   '#screen03-timeline-01',
    //   {
    //     display: 'none',

    //     scaleY: 0,
    //     opacity: 0,
    //     pointerEvents: 'none',
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top-=2300',
    //       end: 'top top-=2400',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     display: 'flex',
    //     scaleY: 1,
    //     opacity: 1,
    //     pointerEvents: 'auto',
    //     immediateRender: false, // 避免初始值在載入時被套用
    //   },
    // )
    // gsap.fromTo(
    //   '#screen03-timeline-01 .dot',
    //   {
    //     opacity: 0,
    //     pointerEvents: 'none',
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top-=2300',
    //       end: 'top top-=2400',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     opacity: 1,
    //     pointerEvents: 'auto',
    //     immediateRender: false, // 避免初始值在載入時被套用
    //   },
    // )
    // gsap.fromTo(
    //   '#screen03-timeline-01 .timeline-title',
    //   {
    //     opacity: 0,
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top-=2350',
    //       end: 'top top-=2450',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     opacity: 1,
    //     immediateRender: false, // 避免初始值在載入時被套用
    //   },
    // )
    // gsap.fromTo(
    //   '#screen03-timeline-01 .line',
    //   {
    //     scaleY: 0,
    //     opacity: 0,
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top-=2400',
    //       end: 'top top-=2500',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     scaleY: 1,
    //     opacity: 1,
    //     immediateRender: false, // 避免初始值在載入時被套用
    //   },
    // )
    // // 動畫(#screen03-timeline-00)
    // gsap.fromTo(
    //   '#screen03-timeline-00',
    //   {
    //     display: 'none',

    //     scaleY: 0,
    //     opacity: 0,
    //     pointerEvents: 'none',
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top-=2500',
    //       end: 'top top-=2600',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     display: 'flex',
    //     scaleY: 1,
    //     opacity: 1,
    //     pointerEvents: 'auto',
    //     immediateRender: false, // 避免初始值在載入時被套用
    //   },
    // )
    // gsap.fromTo(
    //   '#screen03-timeline-00 .line',
    //   {
    //     scaleY: 0,
    //     opacity: 0,
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top-=2500',
    //       end: 'top top-=2600',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     scaleY: 1,
    //     opacity: 1,
    //     immediateRender: false, // 避免初始值在載入時被套用
    //   },
    // )
    // // 動畫(#screen03-timeline-01 展開)
    // gsap.fromTo(
    //   '#screen03-timeline-01 .job-txt:nth-of-type(2)',
    //   {
    //     display: 'none',
    //     y: '-100%',
    //     opacity: 0,
    //     pointerEvents: 'none',
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top-=2700',
    //       end: 'top top-=2800',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     display: 'block',
    //     y: '0%',
    //     opacity: 1,
    //     pointerEvents: 'auto',
    //     immediateRender: false, // 避免初始值在載入時被套用
    //   },
    // )
    // gsap.fromTo(
    //   '#screen03-timeline-01 .job-txt:nth-of-type(3)',
    //   {
    //     display: 'none',
    //     y: '-100%',
    //     opacity: 0,
    //     pointerEvents: 'none',
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top-=2800',
    //       end: 'top top-=2900',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     display: 'block',
    //     y: '0%',
    //     opacity: 1,
    //     pointerEvents: 'auto',
    //     immediateRender: false, // 避免初始值在載入時被套用
    //   },
    // )
    // // 動畫(#screen03-timeline-01 收合)
    // gsap.fromTo(
    //   '#screen03-timeline-01 .job-txt',
    //   {
    //     display: 'block',
    //     y: '0%',
    //     opacity: 1,
    //     pointerEvents: 'auto',
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top-=3100',
    //       end: 'top top-=3300',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     display: 'none',
    //     y: '-100%',
    //     opacity: 0,
    //     pointerEvents: 'none',
    //     immediateRender: false, // 避免初始值在載入時被套用
    //   },
    // )
    // // 動畫(#screen03-timeline-02 展開)
    // gsap.fromTo(
    //   '#screen03-timeline-02 .job-txt',
    //   {
    //     display: 'none',
    //     y: '-100%',
    //     opacity: 0,
    //     pointerEvents: 'none',
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top-=3300',
    //       end: 'top top-=3500',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     display: 'block',
    //     y: '0%',
    //     opacity: 1,
    //     pointerEvents: 'auto',
    //     immediateRender: false, // 避免初始值在載入時被套用
    //   },
    // )
    // // 動畫(#screen03-timeline-02 收合)
    // gsap.fromTo(
    //   '#screen03-timeline-02 .job-txt',
    //   {
    //     display: 'block',
    //     y: '0%',
    //     opacity: 1,
    //     pointerEvents: 'auto',
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top-=3700',
    //       end: 'top top-=3900',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     display: 'none',
    //     y: '-100%',
    //     opacity: 0,
    //     pointerEvents: 'none',
    //     immediateRender: false, // 避免初始值在載入時被套用
    //   },
    // )
    // // 動畫(#screen03-timeline-03 展開)
    // gsap.fromTo(
    //   '#screen03-timeline-03 .job-txt',
    //   {
    //     display: 'none',
    //     y: '-100%',
    //     opacity: 0,
    //     pointerEvents: 'none',
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top-=3900',
    //       end: 'top top-=4100',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     display: 'block',
    //     y: '0%',
    //     opacity: 1,
    //     pointerEvents: 'auto',
    //     immediateRender: false, // 避免初始值在載入時被套用
    //   },
    // )
    // // 動畫(#screen03-timeline-03 收合)
    // gsap.fromTo(
    //   '#screen03-timeline-03 .job-txt',
    //   {
    //     display: 'block',
    //     y: '0%',
    //     opacity: 1,
    //     pointerEvents: 'auto',
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top-=4300',
    //       end: 'top top-=4500',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     display: 'none',
    //     y: '-100%',
    //     opacity: 0,
    //     pointerEvents: 'none',
    //     immediateRender: false, // 避免初始值在載入時被套用
    //   },
    // )
    // // 動畫(#screen03-timeline-04 展開)
    // gsap.fromTo(
    //   '#screen03-timeline-04 .job-txt',
    //   {
    //     display: 'none',
    //     y: '-100%',
    //     opacity: 0,
    //     pointerEvents: 'none',
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top-=4500',
    //       end: 'top top-=4700',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     display: 'block',
    //     y: '0%',
    //     opacity: 1,
    //     pointerEvents: 'auto',
    //     immediateRender: false, // 避免初始值在載入時被套用
    //   },
    // )
    // // 動畫(#screen03-timeline-04 收合)
    // gsap.fromTo(
    //   '#screen03-timeline-04 .job-txt',
    //   {
    //     display: 'block',
    //     y: '0%',
    //     opacity: 1,
    //     pointerEvents: 'auto',
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top-=4900',
    //       end: 'top top-=5100',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     display: 'none',
    //     y: '-100%',
    //     opacity: 0,
    //     pointerEvents: 'none',
    //     immediateRender: false, // 避免初始值在載入時被套用
    //   },
    // )

    // // 動畫(#screen03-timeline-05 展開)
    // gsap.fromTo(
    //   '#screen03-timeline-05 .job-txt',
    //   {
    //     display: 'none',
    //     y: '-100%',
    //     opacity: 0,
    //     pointerEvents: 'none',
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top-=5100',
    //       end: 'top top-=5300',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     display: 'block',
    //     y: '0%',
    //     opacity: 1,
    //     pointerEvents: 'auto',
    //     immediateRender: false, // 避免初始值在載入時被套用
    //   },
    // )
    // // 動畫(#screen03-timeline-05 收合)
    // gsap.fromTo(
    //   '#screen03-timeline-05 .job-txt',
    //   {
    //     display: 'block',
    //     y: '0%',
    //     opacity: 1,
    //     pointerEvents: 'auto',
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top-=5500',
    //       end: 'top top-=5700',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     display: 'none',
    //     y: '-100%',
    //     opacity: 0,
    //     pointerEvents: 'none',
    //     immediateRender: false, // 避免初始值在載入時被套用
    //   },
    // )
    // // 動畫(#screen03-timeline-06 展開)
    // gsap.fromTo(
    //   '#screen03-timeline-06 .job-txt',
    //   {
    //     display: 'none',
    //     y: '-100%',
    //     opacity: 0,
    //     pointerEvents: 'none',
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top-=5700',
    //       end: 'top top-=5900',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     display: 'block',
    //     y: '0%',
    //     opacity: 1,
    //     pointerEvents: 'auto',
    //     immediateRender: false, // 避免初始值在載入時被套用
    //   },
    // )
    // // 動畫(#screen03-timeline-06 收合)
    // gsap.fromTo(
    //   '#screen03-timeline-06 .job-txt',
    //   {
    //     display: 'block',
    //     y: '0%',
    //     opacity: 1,
    //     pointerEvents: 'auto',
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top-=6100',
    //       end: 'top top-=6300',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     display: 'none',
    //     y: '-100%',
    //     opacity: 0,
    //     pointerEvents: 'none',
    //     immediateRender: false, // 避免初始值在載入時被套用
    //   },
    // )

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
