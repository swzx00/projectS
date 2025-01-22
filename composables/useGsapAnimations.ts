import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useGsapAnimations() {
  onMounted(() => {
    // <!-- #btn-resume -->
    // 初始狀態
    gsap.set('#screen01-container', {
      display: 'none',
      opacity: 0,
      pointerEvents: 'none',
    })
    // 動畫
    gsap.fromTo(
      '#btn-resume',
      {
        top: '2rem',
        display: 'none',
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=100',
          end: 'top top-=200',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        top: '4rem',
        display: 'inline-flex',
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )

    // <!-- 第一屏 區域 -->
    // 初始狀態
    gsap.set('#screen01-container', {
      display: 'flex',
      opacity: 1,
      pointerEvents: 'auto',
    })
    // 動畫
    gsap.fromTo(
      '#screen01-container',
      {
        display: 'flex',
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
        display: 'none',
        opacity: 0,
        pointerEvents: 'none',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // <!-- 第一屏 大頭照 -->
    // 初始狀態
    gsap.set('#screen01-headshot', {
      display: 'flex',
      opacity: 1,
      pointerEvents: 'auto',
    })
    // 動畫
    gsap.fromTo(
      '#screen01-headshot',
      {
        display: 'flex',
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
    // 初始狀態
    gsap.set('#screen01-text', {
      display: 'block',
      opacity: 1,
      pointerEvents: 'auto',
    })
    // 動畫
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
      display: 'none',
      backgroundColor: 'transparent',
      pointerEvents: 'none',
    })
    // 動畫 (顯示)
    gsap.to('#screen02-container', {
      scrollTrigger: {
        trigger: '#section-container',
        start: 'top top-=0',
        scrub: true,
        toggleActions: 'play reverse play reverse',
      },
      display: 'block',
      pointerEvents: 'auto',
      immediateRender: false, // 避免初始值在載入時被套用
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
    // 動畫(p03)
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
    // TODO
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
          end: 'top top-=1000',
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
    // 隱藏 第二屏
    gsap.fromTo(
      '#screen02-container',
      {
        display: 'block',
        opacity: 1,
        backgroundColor: 'rgb(96 165 250 / 0.2)',
        pointerEvents: 'auto',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1200',
          end: 'top top-=1200',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'none',
        opacity: 0,
        backgroundColor: 'transparent',
        pointerEvents: 'none',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-outside
    // 初始狀態
    gsap.set('#screen03-outside', {
      display: 'none',
      opacity: 0,
      pointerEvents: 'none',
    })
    // #screen03-outside (show)
    gsap.fromTo(
      '#screen03-outside',
      {
        display: 'none',
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1200',
          end: 'top top-=1200',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'flex',
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #section-02-pic-matting 形象照 (位移)
    gsap.fromTo(
      '#section-02-pic-matting',
      {
        display: 'flex',
        x: 0,
        opacity: 1,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1200',
          end: 'top top-=1900',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'none',
        x: '100%',
        opacity: 0,
        pointerEvents: 'none',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline
    // 初始狀態
    gsap.set(
      [
        '#screen03-timeline-00',
        '#screen03-timeline-01-main',
        '#screen03-timeline-01-secondary01',
        '#screen03-timeline-01-secondary02',
        '#screen03-timeline-02-main',
        '#screen03-timeline-02-secondary',
        '#screen03-timeline-03-main',
        '#screen03-timeline-03-secondary',
        '#screen03-timeline-04-main',
        '#screen03-timeline-05-main',
        '#screen03-timeline-05-secondary',
        '#screen03-timeline-06-main',
        '#screen03-timeline-06-secondary',
      ],
      {
        display: 'none',
        opacity: 0,
        pointerEvents: 'none',
      },
    )
    // #screen03-timeline-01 (show)
    gsap.fromTo(
      [
        '#screen03-timeline-00',
        '#screen03-timeline-01-main',
        '#screen03-timeline-01-secondary01',
        '#screen03-timeline-01-secondary02',
      ],
      {
        display: 'none',
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1200',
          end: 'top top-=1200',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'flex',
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-01-main .timeline-img
    gsap.fromTo(
      '#screen03-timeline-01-main .timeline-img',
      {
        y: '-50%',
        scale: 0,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1200',
          end: 'top top-=1300',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        y: 0,
        scale: 1,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-01-main .timeline-title
    gsap.fromTo(
      '#screen03-timeline-01-main .timeline-title',
      {
        y: '-50%',
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
        y: 0,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-01-main .timeline-subtitle
    gsap.fromTo(
      '#screen03-timeline-01-main .timeline-subtitle',
      {
        y: '-50%',
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1300',
          end: 'top top-=1400',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        y: 0,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-01-secondary01 .timeline-line(前半)
    gsap.fromTo(
      '#screen03-timeline-01-secondary01 .timeline-line',
      {
        scaleY: 0,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1400',
          end: 'top top-=1450',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        scaleY: 0.5,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-00 .timeline-line
    gsap.fromTo(
      '#screen03-timeline-00 .timeline-line',
      {
        scaleY: 0,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1400',
          end: 'top top-=1450',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        scaleY: 1,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-00 .timeline-topLine
    gsap.fromTo(
      '#screen03-timeline-00 .timeline-topLine',
      {
        scaleY: 0,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1450',
          end: 'top top-=1500',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        scaleY: 1,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-01-secondary01 .timeline-dot
    gsap.fromTo(
      '#screen03-timeline-01-secondary01 .timeline-dot',
      {
        scale: 0,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1450',
          end: 'top top-=1550',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        scale: 1,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-01-secondary01 .job-chat
    gsap.fromTo(
      '#screen03-timeline-01-secondary01 .job-chat',
      {
        x: '-5rem',
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
        x: 0,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-01-secondary01 .timeline-line(後半)
    gsap.fromTo(
      '#screen03-timeline-01-secondary01 .timeline-line',
      {
        scaleY: 0.5,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1650',
          end: 'top top-=1675',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        scaleY: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-01-secondary02 .timeline-line(前半)
    gsap.fromTo(
      '#screen03-timeline-01-secondary02 .timeline-line',
      {
        scaleY: 0,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1675',
          end: 'top top-=1700',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        scaleY: 0.5,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-01-secondary02 .timeline-dot
    gsap.fromTo(
      '#screen03-timeline-01-secondary02 .timeline-dot',
      {
        scale: 0,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1700',
          end: 'top top-=1800',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        scale: 1,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-01-secondary02 .job-chat
    gsap.fromTo(
      '#screen03-timeline-01-secondary02 .job-chat',
      {
        x: '-5rem',
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
        x: 0,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-01-secondary02 .timeline-line(後半)
    gsap.fromTo(
      '#screen03-timeline-01-secondary02 .timeline-line',
      {
        scaleY: 0.5,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1850',
          end: 'top top-=1900',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        scaleY: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )

    // #screen03-outside (位移)
    gsap.fromTo(
      '#screen03-outside',
      {
        y: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1850',
          end: 'top top-=1900',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        y: '-10rem',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-corner-top-left, #screen03-corner-bottom-right (位移)
    gsap.fromTo(
      '#screen03-corner-top-left',
      {
        y: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1850',
          end: 'top top-=1900',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        y: '-10%',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    gsap.fromTo(
      '#screen03-corner-bottom-right',
      {
        y: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1850',
          end: 'top top-=1900',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        y: '10%',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-02 (show)
    gsap.fromTo(
      ['#screen03-timeline-02-main', '#screen03-timeline-02-secondary'],
      {
        display: 'none',
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1900',
          end: 'top top-=1900',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'flex',
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-02-main .timeline-img
    gsap.fromTo(
      '#screen03-timeline-02-main .timeline-img',
      {
        y: '-50%',
        scale: 0,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1900',
          end: 'top top-=2000',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        y: 0,
        scale: 1,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-02-main .timeline-title
    gsap.fromTo(
      '#screen03-timeline-02-main .timeline-title',
      {
        y: '-50%',
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
        y: 0,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-02-main .timeline-subtitle
    gsap.fromTo(
      '#screen03-timeline-02-main .timeline-subtitle',
      {
        y: '-50%',
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
        y: 0,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-02-secondary .timeline-line(前半)
    gsap.fromTo(
      '#screen03-timeline-02-secondary .timeline-line',
      {
        scaleY: 0,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2100',
          end: 'top top-=2150',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        scaleY: 0.5,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-02-secondary .timeline-dot
    gsap.fromTo(
      '#screen03-timeline-02-secondary .timeline-dot',
      {
        scale: 0,
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
        scale: 1,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-02-secondary .job-chat
    gsap.fromTo(
      '#screen03-timeline-02-secondary .job-chat',
      {
        x: '-5rem',
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2250',
          end: 'top top-=2350',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        x: 0,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-01-secondary .timeline-line(後半)
    gsap.fromTo(
      '#screen03-timeline-02-secondary .timeline-line',
      {
        scaleY: 0.5,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2350',
          end: 'top top-=2400',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        scaleY: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )

    // #screen03-outside (位移)
    gsap.fromTo(
      '#screen03-outside',
      {
        y: '-10rem',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2350',
          end: 'top top-=2400',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        y: '-20rem',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-corner-top-left, #screen03-corner-bottom-right (位移)
    gsap.fromTo(
      '#screen03-corner-top-left',
      {
        y: '-10%',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2350',
          end: 'top top-=2400',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        y: '-20%',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    gsap.fromTo(
      '#screen03-corner-bottom-right',
      {
        y: '10%',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2350',
          end: 'top top-=2400',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        y: '20%',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-03 (show)
    gsap.fromTo(
      ['#screen03-timeline-03-main', '#screen03-timeline-03-secondary'],
      {
        display: 'none',
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2350',
          end: 'top top-=2350',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'flex',
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-03-main .timeline-img
    gsap.fromTo(
      '#screen03-timeline-03-main .timeline-img',
      {
        y: '-50%',
        scale: 0,
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
        y: 0,
        scale: 1,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-03-main .timeline-title
    gsap.fromTo(
      '#screen03-timeline-03-main .timeline-title',
      {
        y: '-50%',
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
        y: 0,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-03-main .timeline-subtitle
    gsap.fromTo(
      '#screen03-timeline-03-main .timeline-subtitle',
      {
        y: '-50%',
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2450',
          end: 'top top-=2550',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        y: 0,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-03-secondary .timeline-line(前半)
    gsap.fromTo(
      '#screen03-timeline-03-secondary .timeline-line',
      {
        scaleY: 0,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2550',
          end: 'top top-=2600',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        scaleY: 0.5,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-03-secondary .timeline-dot
    gsap.fromTo(
      '#screen03-timeline-03-secondary .timeline-dot',
      {
        scale: 0,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2600',
          end: 'top top-=2700',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        scale: 1,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-03-secondary .job-chat
    gsap.fromTo(
      '#screen03-timeline-03-secondary .job-chat',
      {
        x: '-5rem',
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2700',
          end: 'top top-=2800',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        x: 0,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-03-secondary .timeline-line(後半)
    gsap.fromTo(
      '#screen03-timeline-03-secondary .timeline-line',
      {
        scaleY: 0.5,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2800',
          end: 'top top-=2825',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        scaleY: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )

    // #screen03-outside (位移)
    gsap.fromTo(
      '#screen03-outside',
      {
        y: '-20rem',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2800',
          end: 'top top-=2850',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        y: '-25rem',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-corner-top-left, #screen03-corner-bottom-right (位移)
    gsap.fromTo(
      '#screen03-corner-top-left',
      {
        y: '-20%',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2800',
          end: 'top top-=2850',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        y: '-30%',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    gsap.fromTo(
      '#screen03-corner-bottom-right',
      {
        y: '20%',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2800',
          end: 'top top-=2850',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        y: '30%',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-04 (show)
    gsap.fromTo(
      '#screen03-timeline-04-main',
      {
        display: 'none',
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2825',
          end: 'top top-=2825',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'flex',
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-04-main .timeline-line(前半)
    gsap.fromTo(
      '#screen03-timeline-04-main .timeline-line',
      {
        scaleY: 0,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2825',
          end: 'top top-=2850',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        scaleY: 0.5,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-04-main .timeline-dot
    gsap.fromTo(
      '#screen03-timeline-04-main .timeline-dot',
      {
        scale: 0,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2850',
          end: 'top top-=2950',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        scale: 1,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-04-main .timeline-title
    gsap.fromTo(
      '#screen03-timeline-04-main .timeline-title',
      {
        y: '-50%',
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2900',
          end: 'top top-=3000',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        y: 0,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-04-main .timeline-subtitle
    gsap.fromTo(
      '#screen03-timeline-04-main .timeline-subtitle',
      {
        y: '-50%',
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2950',
          end: 'top top-=3050',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        y: 0,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-04-main .timeline-line(後半)
    gsap.fromTo(
      '#screen03-timeline-04-main .timeline-line',
      {
        scaleY: 0.5,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3050',
          end: 'top top-=3100',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        scaleY: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )

    // #screen03-outside (位移)
    gsap.fromTo(
      '#screen03-outside',
      {
        y: '-25rem',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3050',
          end: 'top top-=3100',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        y: '-30rem',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-corner-top-left, #screen03-corner-bottom-right (位移)
    gsap.fromTo(
      '#screen03-corner-top-left',
      {
        y: '-30%',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3050',
          end: 'top top-=3100',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        y: '-40%',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    gsap.fromTo(
      '#screen03-corner-bottom-right',
      {
        y: '30%',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3050',
          end: 'top top-=3100',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        y: '40%',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-05 (show)
    gsap.fromTo(
      ['#screen03-timeline-05-main', '#screen03-timeline-05-secondary'],
      {
        display: 'none',
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3100',
          end: 'top top-=3100',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'flex',
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-05-main .timeline-img
    gsap.fromTo(
      '#screen03-timeline-05-main .timeline-img',
      {
        y: '-50%',
        scale: 0,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3100',
          end: 'top top-=3200',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        y: 0,
        scale: 1,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-05-main .timeline-title / .timeline-subtitle
    gsap.fromTo(
      ['#screen03-timeline-05-main .timeline-title', '#screen03-timeline-05-main .timeline-subtitle'],
      {
        y: '-50%',
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3150',
          end: 'top top-=3250',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        y: 0,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-05-secondary .timeline-line(前半)
    gsap.fromTo(
      '#screen03-timeline-05-secondary .timeline-line',
      {
        scaleY: 0,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3250',
          end: 'top top-=3300',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        scaleY: 0.5,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-05-secondary .timeline-dot
    gsap.fromTo(
      '#screen03-timeline-05-secondary .timeline-dot',
      {
        scale: 0,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3300',
          end: 'top top-=3400',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        scale: 1,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-05-secondary .job-chat
    gsap.fromTo(
      '#screen03-timeline-05-secondary .job-chat',
      {
        x: '-5rem',
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3400',
          end: 'top top-=3500',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        x: 0,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-05-secondary .timeline-line(後半)
    gsap.fromTo(
      '#screen03-timeline-05-secondary .timeline-line',
      {
        scaleY: 0.5,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3500',
          end: 'top top-=3550',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        scaleY: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )

    // #screen03-outside (位移)
    gsap.fromTo(
      '#screen03-outside',
      {
        y: '-30rem',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3500',
          end: 'top top-=3550',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        y: '-40rem',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-corner-top-left, #screen03-corner-bottom-right (位移)
    gsap.fromTo(
      '#screen03-corner-top-left',
      {
        y: '-40%',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3500',
          end: 'top top-=3550',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        y: '-50%',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    gsap.fromTo(
      '#screen03-corner-bottom-right',
      {
        y: '40%',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3500',
          end: 'top top-=3550',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        y: '50%',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-06 (show)
    gsap.fromTo(
      ['#screen03-timeline-06-main', '#screen03-timeline-06-secondary'],
      {
        display: 'none',
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3550',
          end: 'top top-=3550',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        display: 'flex',
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-06-main .timeline-line
    gsap.fromTo(
      '#screen03-timeline-06-main .timeline-line',
      {
        scaleY: 0,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3550',
          end: 'top top-=3600',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        scaleY: 1,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-06-main .timeline-dot
    gsap.fromTo(
      '#screen03-timeline-06-main .timeline-dot',
      {
        scale: 0,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3600',
          end: 'top top-=3700',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        scale: 1,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-06-main .timeline-title
    gsap.fromTo(
      '#screen03-timeline-06-main .timeline-title',
      {
        y: '-50%',
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3650',
          end: 'top top-=3750',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        y: 0,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-06-main .timeline-subtitle
    gsap.fromTo(
      '#screen03-timeline-06-main .timeline-subtitle',
      {
        y: '-50%',
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3700',
          end: 'top top-=3800',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        y: 0,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-06-secondary .timeline-subtitle
    gsap.fromTo(
      '#screen03-timeline-06-secondary .timeline-subtitle',
      {
        y: '-50%',
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3700',
          end: 'top top-=3800',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        y: 0,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
  })
}
