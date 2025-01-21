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
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1000',
          end: 'top top-=1001',
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
        display: 'flex',
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
        display: 'block',
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

    // 動畫
    gsap.fromTo(
      '#screen02-container',
      {
        display: 'block',
        opacity: 1,
        pointerEvents: 'auto',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1200',
          end: 'top top-=1201',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'none',
        opacity: 0,
        pointerEvents: 'none',
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
    // <!-- 第三屏 timeline -->
    // 初始狀態
    gsap.set(
      [
        '#screen03-timeline-01-company',
        '#screen03-timeline-01-job01',
        '#screen03-timeline-01-job02',
        '#screen03-timeline-02-company',
        '#screen03-timeline-02-job',
        '#screen03-timeline-03-company',
        '#screen03-timeline-03-job',
        '#screen03-timeline-04-company',
        '#screen03-timeline-05-company',
        '#screen03-timeline-05-job',
        '#screen03-timeline-06-company',
        '#screen03-timeline-06-job',
      ],
      {
        display: 'none',
        opacity: 0,
        pointerEvents: 'none',
      },
    )
    // 動畫(#screen-timeline-01)
    gsap.fromTo(
      '#screen03-timeline-01-company',
      {
        display: 'none',
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1300',
          end: 'top top-=1301',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'flex',
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 動畫(#screen-timeline-01 .timeline-img)
    gsap.fromTo(
      '#screen03-timeline-01-company .timeline-img',
      {
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1300',
          end: 'top top-=1400',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 動畫(#screen-timeline-01 .timeline-title)
    gsap.fromTo(
      '#screen03-timeline-01-company .timeline-title',
      {
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1400',
          end: 'top top-=1500',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 動畫(#screen-timeline-01 .timeline-subtitle)
    gsap.fromTo(
      '#screen03-timeline-01-company .timeline-subtitle',
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

    // 動畫(#screen-timeline-01)
    gsap.fromTo(
      '#screen03-timeline-01-job01',
      {
        display: 'none',
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1550',
          end: 'top top-=1551',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'flex',
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 動畫(#screen-timeline-01 .line 前半)
    gsap.fromTo(
      '#screen03-timeline-01-job01 .line',
      {
        scaleY: 0,
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1550',
          end: 'top top-=1600',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        scaleY: 0.5,
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 動畫(#screen-timeline-01 .dot)
    gsap.fromTo(
      '#screen03-timeline-01-job01 .dot',
      {
        scale: 0,
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1600',
          end: 'top top-=1700',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        scale: 1,
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 動畫(#screen-timeline-01 .job-chat)
    gsap.fromTo(
      '#screen03-timeline-01-job01 .job-chat',
      {
        left: '-5rem',
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1600',
          end: 'top top-=1700',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        left: 'calc(40% + 5rem)',
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 動畫(#screen-timeline-01 .line 後半)
    gsap.fromTo(
      '#screen03-timeline-01-job01 .line',
      {
        scaleY: 0.5,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1700',
          end: 'top top-=1750',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        scaleY: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )

    // 動畫(#screen-timeline-01)
    gsap.fromTo(
      '#screen03-timeline-01-job02',
      {
        display: 'none',
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1750',
          end: 'top top-=1751',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'flex',
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 動畫(#screen-timeline-01 .line 前半)
    gsap.fromTo(
      '#screen03-timeline-01-job02 .line',
      {
        scaleY: 0,
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1750',
          end: 'top top-=1800',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        scaleY: 0.5,
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 動畫(#screen-timeline-01 .dot)
    gsap.fromTo(
      '#screen03-timeline-01-job02 .dot',
      {
        scale: 0,
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1800',
          end: 'top top-=1900',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        scale: 1,
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 動畫(#screen-timeline-01 .job-chat)
    gsap.fromTo(
      '#screen03-timeline-01-job02 .job-chat',
      {
        left: '-5rem',
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1800',
          end: 'top top-=1900',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        left: 'calc(40% + 5rem)',
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 動畫(#screen-timeline-01 .line 後半)
    gsap.fromTo(
      '#screen03-timeline-01-job02 .line',
      {
        scaleY: 0.5,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1900',
          end: 'top top-=1950',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        scaleY: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )

    // 動畫(#screen-timeline-02)
    gsap.fromTo(
      '#screen03-timeline-02-company',
      {
        display: 'none',
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1950',
          end: 'top top-=1951',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'flex',
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 向上位移
    gsap.fromTo(
      '#screen03-title',
      {
        top: '10rem',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1950',
          end: 'top top-=2400',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        top: 'calc(10rem - 25dvh)',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    gsap.fromTo(
      '#screen03-content',
      {
        top: 0,
        borderColor: 'red',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1950',
          end: 'top top-=2400',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        top: 'calc(15rem - 25dvh)',

        borderColor: 'green',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )

    // 動畫(#screen03-timeline-02-company  .timeline-img)
    gsap.fromTo(
      '#screen03-timeline-02-company .timeline-img',
      {
        opacity: 0,
        pointerEvents: 'none',
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
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 動畫(#screen03-timeline-02-company  .timeline-title)
    gsap.fromTo(
      '#screen03-timeline-02-company .timeline-title',
      {
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2050',
          end: 'top top-=2150',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 動畫(#screen03-timeline-02-company  .timeline-subtitle)
    gsap.fromTo(
      '#screen03-timeline-02-company .timeline-subtitle',
      {
        opacity: 0,
        pointerEvents: 'none',
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
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )

    // 動畫(#screen-timeline-02)
    gsap.fromTo(
      '#screen03-timeline-02-job',
      {
        display: 'none',
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2250',
          end: 'top top-=2251',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'flex',
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 動畫(#screen03-timeline-02 .line 前半)
    gsap.fromTo(
      '#screen03-timeline-02-job .line',
      {
        scaleY: 0,
        opacity: 1,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2250',
          end: 'top top-=2300',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        scaleY: 0.5,
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    gsap.fromTo(
      '#screen03-timeline-02-job .dot',
      {
        scale: 0,
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
        scale: 1,
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    gsap.fromTo(
      '#screen03-timeline-02-job .job-chat',
      {
        left: '-5rem',
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
        left: 'calc(40% + 5rem)',
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 動畫(#screen03-timeline-02 .line 後半)
    gsap.fromTo(
      '#screen03-timeline-02-job .line',
      {
        scaleY: 0.5,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2400',
          end: 'top top-=2450',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        scaleY: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )

    // 動畫(#screen03-timeline-03)
    gsap.fromTo(
      '#screen03-timeline-03-company',
      {
        display: 'end',
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2450',
          end: 'top top-=2451',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'flex',
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 向上位移
    gsap.fromTo(
      '#screen03-title',
      {
        top: 'calc(10rem - 25dvh)',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2450',
          end: 'top top-=2900',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        top: 'calc(10rem - 50dvh)',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    gsap.fromTo(
      '#screen03-content',
      {
        top: 'calc(15rem - 25dvh)',
        borderColor: 'green',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2450',
          end: 'top top-=2900',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        borderColor: 'blue',
        top: 'calc(15rem - 50dvh)',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 動畫(#screen03-timeline-03-company .timeline-img)
    gsap.fromTo(
      '#screen03-timeline-03-company .timeline-img',
      {
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2450',
          end: 'top top-=2550',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 動畫(#screen03-timeline-03-company .timeline-title)
    gsap.fromTo(
      '#screen03-timeline-03-company .timeline-title',
      {
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2550',
          end: 'top top-=2650',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 動畫(#screen03-timeline-03-company .timeline-subtitle)
    gsap.fromTo(
      '#screen03-timeline-03-company .timeline-subtitle',
      {
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2650',
          end: 'top top-=2750',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 動畫(#screen-timeline-03)
    gsap.fromTo(
      '#screen03-timeline-03-job',
      {
        display: 'none',
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2750',
          end: 'top top-=2751',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'flex',
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 動畫(#screen03-timeline-03 .line 前半)
    gsap.fromTo(
      '#screen03-timeline-03-job .line',
      {
        scaleY: 0,
        opacity: 1,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2750',
          end: 'top top-=2800',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        scaleY: 0.5,
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    gsap.fromTo(
      '#screen03-timeline-03-job .dot',
      {
        scale: 0,
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2800',
          end: 'top top-=2900',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        scale: 1,
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    gsap.fromTo(
      '#screen03-timeline-03-job .job-chat',
      {
        left: '-5rem',
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2800',
          end: 'top top-=2900',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        left: 'calc(40% + 5rem)',
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 動畫(#screen03-timeline-03 .line 後半)
    gsap.fromTo(
      '#screen03-timeline-03-job .line',
      {
        scaleY: 0.5,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2900',
          end: 'top top-=2950',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        scaleY: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )

    // 動畫(#screen03-timeline-04)
    gsap.fromTo(
      '#screen03-timeline-04-company',
      {
        display: 'none',
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2950',
          end: 'top top-=2951',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'flex',
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 向上位移
    gsap.fromTo(
      '#screen03-title',
      {
        top: 'calc(10rem - 50dvh)',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2900',
          end: 'top top-=3200',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        top: 'calc(10rem - 75dvh)',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    gsap.fromTo(
      '#screen03-content',
      {
        top: 'calc(15rem - 50dvh)',
        borderColor: 'blue',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2900',
          end: 'top top-=3200',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        top: 'calc(15rem - 75dvh)',
        borderColor: 'red',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 動畫(#screen03-timeline-04-company .line前半)
    gsap.fromTo(
      '#screen03-timeline-04-company .line',
      {
        scaleY: 0,
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2950',
          end: 'top top-=3000',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        scaleY: 0.5,
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 動畫(#screen03-timeline-04-company .dot)
    gsap.fromTo(
      '#screen03-timeline-04-company .dot',
      {
        scale: 0,
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3000',
          end: 'top top-=3100',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        scale: 1,
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 動畫(#screen03-timeline-04-company .timeline-title)
    gsap.fromTo(
      '#screen03-timeline-04-company .timeline-title',
      {
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3000',
          end: 'top top-=3100',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 動畫(#screen-timeline-04)
    gsap.fromTo(
      '#screen03-timeline-04-company .timeline-subtitle',
      {
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3100',
          end: 'top top-=3200',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 動畫(#screen03-timeline-04-company .line後半)
    gsap.fromTo(
      '#screen03-timeline-04-company .line',
      {
        scaleY: 0.5,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3200',
          end: 'top top-=3250',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        scaleY: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )

    // 動畫(#screen03-timeline-05)
    gsap.fromTo(
      '#screen03-timeline-05-company',
      {
        display: 'none',
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3250',
          end: 'top top-=3251',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'flex',
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 向上位移
    gsap.fromTo(
      '#screen03-title',
      {
        top: 'calc(10rem - 75dvh)',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3250',
          end: 'top top-=3600',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        top: 'calc(10rem - 100dvh)',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    gsap.fromTo(
      '#screen03-content',
      {
        top: 'calc(15rem - 75dvh)',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3250',
          end: 'top top-=3600',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        top: 'calc(15rem - 100dvh)',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 動畫(#screen03-timeline-05-company .timeline-img)
    gsap.fromTo(
      '#screen03-timeline-05-company .timeline-img',
      {
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3250',
          end: 'top top-=3350',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 動畫(#screen03-timeline-05-company .timeline-title)
    gsap.fromTo(
      '#screen03-timeline-05-company .timeline-title',
      {
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3350',
          end: 'top top-=3450',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 動畫(#screen-timeline-05)
    gsap.fromTo(
      '#screen03-timeline-05-job',
      {
        display: 'none',
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3450',
          end: 'top top-=3451',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'flex',
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 動畫(#screen03-timeline-05 .line 前半)
    gsap.fromTo(
      '#screen03-timeline-05-job .line',
      {
        scaleY: 0,
        opacity: 1,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3450',
          end: 'top top-=3500',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        scaleY: 0.5,
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    gsap.fromTo(
      '#screen03-timeline-05-job .dot',
      {
        scale: 0,
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3500',
          end: 'top top-=3600',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        scale: 1,
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    gsap.fromTo(
      '#screen03-timeline-05-job .job-chat',
      {
        left: '-5rem',
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3500',
          end: 'top top-=3600',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        left: 'calc(40% + 5rem)',
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 動畫(#screen03-timeline-05 .line 後半)
    gsap.fromTo(
      '#screen03-timeline-05-job .line',
      {
        scaleY: 0.5,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3600',
          end: 'top top-=3650',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        scaleY: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )

    // 動畫(#screen03-timeline-06)
    gsap.fromTo(
      '#screen03-timeline-06-company',
      {
        display: 'none',
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3650',
          end: 'top top-=3651',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'flex',
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 向上位移
    gsap.fromTo(
      '#screen03-title',
      {
        top: 'calc(10rem - 100dvh)',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3650',
          end: 'top top-=3900',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        top: 'calc(10rem - 125dvh)',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    gsap.fromTo(
      '#screen03-content',
      {
        top: 'calc(15rem - 100dvh)',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3650',
          end: 'top top-=3900',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        top: 'calc(15rem - 125dvh)',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 動畫(#screen03-timeline-06 .line)
    gsap.fromTo(
      '#screen03-timeline-06-company .line',
      {
        scaleY: 0,
        opacity: 1,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3650',
          end: 'top top-=3700',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        scaleY: 1,
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 動畫(#screen03-timeline-06-company .dot)
    gsap.fromTo(
      '#screen03-timeline-06-company .dot',
      {
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3700',
          end: 'top top-=3800',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 動畫(#screen03-timeline-06-company .timeline-title)
    gsap.fromTo(
      '#screen03-timeline-06-company .timeline-title',
      {
        left: '100%',
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3700',
          end: 'top top-=3800',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        left: 0,
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 動畫(#screen03-timeline-06-company .timeline-subtitle)
    gsap.fromTo(
      '#screen03-timeline-06-company .timeline-subtitle',
      {
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3800',
          end: 'top top-=3900',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 動畫(#screen03-timeline-06-job)
    gsap.fromTo(
      '#screen03-timeline-06-job',
      {
        display: 'none',
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3900',
          end: 'top top-=3901',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'flex',
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 動畫(#screen03-timeline-06-job)
    gsap.fromTo(
      '#screen03-timeline-06-job .timeline-subtitle',
      {
        opacity: 0,
        pointerEvents: 'auto',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3900',
          end: 'top top-=4000',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )

    // 向上位移
    gsap.fromTo(
      '#screen03-title',
      {
        display: 'inline-flex',
        top: 'calc(10rem - 125dvh)',
        opacity: 1,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=4100',
          end: 'top top-=4300',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'none',
        top: 'calc(15rem - 150dvh)',
        opacity: 0,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    gsap.fromTo(
      '#screen03-content',
      {
        display: 'inline-flex',
        top: 'calc(15rem - 125dvh)',
        opacity: 1,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=4100',
          end: 'top top-=4300',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'none',
        top: 'calc(15rem - 150dvh)',
        opacity: 0,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    gsap.fromTo(
      '#screen03-container',
      {
        display: 'flex',
        opacity: 1,
        pointerEvents: 'auto',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=4100',
          end: 'top top-=4300',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'none',
        opacity: 0,
        pointerEvents: 'none',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // gsap.fromTo(
    //   '#screen03-container',
    //   {
    //     display: 'none',
    //     opacity: 0,
    //     pointerEvents: 'none',
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container',
    //       start: 'top top-=4300',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     display: 'none',
    //     opacity: 0,
    //     pointerEvents: 'none',
    //     immediateRender: false, // 避免初始值在載入時被套用
    //   },
    // )

    //
  })
}
