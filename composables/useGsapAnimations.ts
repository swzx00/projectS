import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useGsapAnimations() {
  const isAnimating = ref(false)

  const initAnimations = () => {
    // 清除所有 ScrollTrigger（避免多次初始化）
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill())

    // 判斷螢幕寬度
    const isMobile = window.matchMedia('(max-width: 640px)').matches
    // <!-- #btn-resume -->
    // 初始狀態
    gsap.set('#btn-resume', {
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
          invalidateOnRefresh: true,
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
      visibility: 'visible',
      opacity: 1,
      pointerEvents: 'auto',
    })
    // 動畫
    ScrollTrigger.create({
      trigger: '#section-container',
      start: 'top top-=64',
      end: 'top top-=200',
      scrub: true,
      toggleActions: 'play reverse play reverse',
      invalidateOnRefresh: true,
      onEnter: () => {
        gsap.to('#screen01-container', {
          display: 'none',
          visibility: 'hidden',
          opacity: 0,
          pointerEvents: 'none',
        })
      },
      onLeaveBack: () => {
        gsap.to('#screen01-container', {
          display: 'flex',
          visibility: 'visible',
          opacity: 1,
          pointerEvents: 'auto',
        })
      },
    })
    // <!-- 第一屏 大頭照 -->
    // 初始狀態
    gsap.set('#screen01-headshot', {
      display: 'flex',
      visibility: 'visible',
      opacity: 1,
      pointerEvents: 'auto',
    })
    // 動畫
    gsap.fromTo(
      '#screen01-headshot',
      {
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
          invalidateOnRefresh: true,
        },
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
      visibility: 'visible',
      opacity: 1,
      pointerEvents: 'auto',
    })
    // 動畫
    gsap.fromTo(
      '#screen01-text',
      {
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
          invalidateOnRefresh: true,
        },
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
      backgroundColor: 'rgb(96 165 250 / 0)',
      pointerEvents: 'none',
    })
    // 動畫
    gsap.fromTo(
      '#screen02-container',
      {
        display: 'none',
        backgroundColor: 'rgb(96 165 250 / 0)',
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=0',
          end: 'top top-=0',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        display: 'block',
        backgroundColor: 'rgb(96 165 250 / 0)',
        pointerEvents: 'none',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 動畫
    gsap.fromTo(
      '#screen02-container',
      {
        display: 'block',
        backgroundColor: 'rgb(96 165 250 / 0)',
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=200',
          end: 'top top-=400',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
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
          invalidateOnRefresh: true,
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
          invalidateOnRefresh: true,
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
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=200',
          end: 'top top-=400',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        display: 'flex',
        bottom: 0,
        opacity: 1,
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
          invalidateOnRefresh: true,
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
          invalidateOnRefresh: true,
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
          invalidateOnRefresh: true,
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
          invalidateOnRefresh: true,
        },
        display: 'inline-block',
        y: 0,
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // 動畫
    gsap.fromTo(
      '#screen02-container',
      {
        display: 'none',
        backgroundColor: 'rgb(96 165 250 / 0.0)',
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1000',
          end: 'top top-=1001',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        display: 'none',
        backgroundColor: 'rgb(96 165 250 / 0)',
        pointerEvents: 'none',
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
          end: 'top top-=1000',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
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
          invalidateOnRefresh: true,
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
        x: 0,
        y: 0,
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
          invalidateOnRefresh: true,
        },
        display: 'block',
        x: 0,
        y: 0,
        scaleX: 1,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-outside
    // 初始狀態
    gsap.set('#screen03-outside', {
      display: 'none',
      opacity: 0,
      x: '-50%',
      y: 0,
      pointerEvents: 'none',
    })
    // #screen03-outside (show)
    gsap.fromTo(
      '#screen03-outside',
      {
        display: 'none',
        opacity: 0,
        x: '-50%',
        y: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1200',
          end: 'top top-=1200',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        display: 'flex',
        opacity: 1,
        x: '-50%',
        y: 0,
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
          invalidateOnRefresh: true,
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
        display: 'flex',
        opacity: 1,
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
        // display: 'none',
        // opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1200',
          end: 'top top-=1200',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        // display: 'flex',
        // opacity: 1,
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
          invalidateOnRefresh: true,
        },
        y: 0,
        scale: 1,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-01-main .timeline-line 背後線
    gsap.fromTo(
      '#screen03-timeline-01-main .timeline-line',
      {
        x: '-50%',
        y: '-50%',
        scaleY: 0,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1200',
          end: 'top top-=1300',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        x: '-50%',
        y: '-50%',
        scaleY: 1,
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
          invalidateOnRefresh: true,
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
          invalidateOnRefresh: true,
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
        x: '-50%',
        y: '-50%',
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
          invalidateOnRefresh: true,
        },
        x: '-50%',
        y: '-50%',
        scaleY: 0.5,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-00 .timeline-line
    gsap.fromTo(
      '#screen03-timeline-00 .timeline-line',
      {
        x: '-50%',
        y: '-50%',
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
          invalidateOnRefresh: true,
        },
        x: '-50%',
        y: '-50%',
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
          invalidateOnRefresh: true,
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
          invalidateOnRefresh: true,
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
          invalidateOnRefresh: true,
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
        x: '-50%',
        y: '-50%',
        scaleY: 0.5,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1650',
          end: 'top top-=1675',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        x: '-50%',
        y: '-50%',
        scaleY: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-01-secondary02 .timeline-line(前半)
    gsap.fromTo(
      '#screen03-timeline-01-secondary02 .timeline-line',
      {
        x: '-50%',
        y: '-50%',
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
          invalidateOnRefresh: true,
        },
        x: '-50%',
        y: '-50%',
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
          invalidateOnRefresh: true,
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
          invalidateOnRefresh: true,
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
        x: '-50%',
        y: '-50%',
        scaleY: 0.5,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1850',
          end: 'top top-=1900',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        x: '-50%',
        y: '-50%',
        scaleY: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )

    // #screen03-outside (位移)
    gsap.fromTo(
      '#screen03-outside',
      {
        x: '-50%',
        y: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1850',
          end: 'top top-=1900',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        x: '-50%',
        y: isMobile ? '-20dvh' : '-10rem', // 根據螢幕寬度決定 Y 位移
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-corner-top-left, #screen03-corner-bottom-right (位移)
    gsap.fromTo(
      '#screen03-corner-top-left',
      {
        x: 0,
        y: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1850',
          end: 'top top-=1900',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        x: 0,
        y: '-10%',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    gsap.fromTo(
      '#screen03-corner-bottom-right',
      {
        x: 0,
        y: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1850',
          end: 'top top-=1900',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        x: 0,
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
          invalidateOnRefresh: true,
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
          invalidateOnRefresh: true,
        },
        y: 0,
        scale: 1,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-02-main .timeline-line 背後線
    gsap.fromTo(
      '#screen03-timeline-02-main .timeline-line',
      {
        x: '-50%',
        y: '-50%',
        scaleY: 0,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=1900',
          end: 'top top-=2000',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        x: '-50%',
        y: '-50%',
        scaleY: 1,
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
          invalidateOnRefresh: true,
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
          invalidateOnRefresh: true,
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
        x: '-50%',
        y: '-50%',
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
          invalidateOnRefresh: true,
        },
        x: '-50%',
        y: '-50%',
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
          invalidateOnRefresh: true,
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
          invalidateOnRefresh: true,
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
        x: '-50%',
        y: '-50%',
        scaleY: 0.5,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2350',
          end: 'top top-=2400',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        x: '-50%',
        y: '-50%',
        scaleY: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )

    // #screen03-outside (位移)
    gsap.fromTo(
      '#screen03-outside',
      {
        x: '-50%',
        y: isMobile ? '-20dvh' : '-10rem', // 根據螢幕寬度決定 Y 位移
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2350',
          end: 'top top-=2400',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        x: '-50%',
        y: isMobile ? '-40dvh' : '-20rem', // 根據螢幕寬度決定 Y 位移
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-corner-top-left, #screen03-corner-bottom-right (位移)
    gsap.fromTo(
      '#screen03-corner-top-left',
      {
        x: 0,
        y: '-10%',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2350',
          end: 'top top-=2400',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        x: 0,
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
          invalidateOnRefresh: true,
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
          invalidateOnRefresh: true,
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
          invalidateOnRefresh: true,
        },
        y: 0,
        scale: 1,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-03-main .timeline-line 背後線
    gsap.fromTo(
      '#screen03-timeline-03-main .timeline-line',
      {
        x: '-50%',
        y: '-50%',
        scaleY: 0,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2350',
          end: 'top top-=2450',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        x: '-50%',
        y: '-50%',
        scaleY: 1,
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
          invalidateOnRefresh: true,
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
          invalidateOnRefresh: true,
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
        x: '-50%',
        y: '-50%',
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
          invalidateOnRefresh: true,
        },
        x: '-50%',
        y: '-50%',
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
          invalidateOnRefresh: true,
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
          invalidateOnRefresh: true,
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
        x: '-50%',
        y: '-50%',
        scaleY: 0.5,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2800',
          end: 'top top-=2825',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        x: '-50%',
        y: '-50%',
        scaleY: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )

    // #screen03-outside (位移)
    gsap.fromTo(
      '#screen03-outside',
      {
        x: '-50%',
        y: isMobile ? '-40dvh' : '-20rem', // 根據螢幕寬度決定 Y 位移
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2800',
          end: 'top top-=2850',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        x: '-50%',
        y: isMobile ? '-50dvh' : '-25rem', // 根據螢幕寬度決定 Y 位移
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-corner-top-left, #screen03-corner-bottom-right (位移)
    gsap.fromTo(
      '#screen03-corner-top-left',
      {
        x: 0,
        y: '-20%',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=2800',
          end: 'top top-=2850',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        x: 0,
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
          invalidateOnRefresh: true,
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
          invalidateOnRefresh: true,
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
        x: '-50%',
        y: '-50%',
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
          invalidateOnRefresh: true,
        },
        x: '-50%',
        y: '-50%',
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
          invalidateOnRefresh: true,
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
          invalidateOnRefresh: true,
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
          invalidateOnRefresh: true,
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
        x: '-50%',
        y: '-50%',
        scaleY: 0.5,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3050',
          end: 'top top-=3100',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        x: '-50%',
        y: '-50%',
        scaleY: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )

    // #screen03-outside (位移)
    gsap.fromTo(
      '#screen03-outside',
      {
        x: '-50%',
        y: isMobile ? '-50dvh' : '-25rem', // 根據螢幕寬度決定 Y 位移
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3050',
          end: 'top top-=3100',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        x: '-50%',
        y: isMobile ? '-60dvh' : '-30rem', // 根據螢幕寬度決定 Y 位移
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-corner-top-left, #screen03-corner-bottom-right (位移)
    gsap.fromTo(
      '#screen03-corner-top-left',
      {
        x: 0,
        y: '-30%',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3050',
          end: 'top top-=3100',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        x: 0,
        y: '-45%',
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
          invalidateOnRefresh: true,
        },
        y: '45%',
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
          invalidateOnRefresh: true,
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
          invalidateOnRefresh: true,
        },
        y: 0,
        scale: 1,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-timeline-05-main .timeline-line 背後線
    gsap.fromTo(
      '#screen03-timeline-05-main .timeline-line',
      {
        x: '-50%',
        y: '-50%',
        scaleY: 0,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3100',
          end: 'top top-=3200',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        x: '-50%',
        y: '-50%',
        scaleY: 1,
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
          invalidateOnRefresh: true,
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
        x: '-50%',
        y: '-50%',
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
          invalidateOnRefresh: true,
        },
        x: '-50%',
        y: '-50%',
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
          invalidateOnRefresh: true,
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
          invalidateOnRefresh: true,
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
        x: '-50%',
        y: '-50%',
        scaleY: 0.5,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3500',
          end: 'top top-=3550',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        x: '-50%',
        y: '-50%',
        scaleY: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )

    // #screen03-outside (位移)
    gsap.fromTo(
      '#screen03-outside',
      {
        x: '-50%',
        y: isMobile ? '-60dvh' : '-30rem', // 根據螢幕寬度決定 Y 位移
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3500',
          end: 'top top-=3550',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        x: '-50%',
        y: isMobile ? '-90dvh' : '-40rem', // 根據螢幕寬度決定 Y 位移
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-corner-top-left, #screen03-corner-bottom-right (位移)
    gsap.fromTo(
      '#screen03-corner-top-left',
      {
        x: 0,
        y: '-45%',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3500',
          end: 'top top-=3550',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        x: 0,
        y: '-100%',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    gsap.fromTo(
      '#screen03-corner-bottom-right',
      {
        x: 0,
        y: '45%',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=3500',
          end: 'top top-=3550',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        x: 0,
        y: '100%',
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
          invalidateOnRefresh: true,
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
        x: '-50%',
        y: '0',
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
          invalidateOnRefresh: true,
        },
        x: '-50%',
        y: '0',
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
          invalidateOnRefresh: true,
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
          invalidateOnRefresh: true,
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
          invalidateOnRefresh: true,
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
          invalidateOnRefresh: true,
        },
        y: 0,
        opacity: 1,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )

    // #screen03-outside (位移)
    gsap.fromTo(
      '#screen03-outside',
      {
        x: '-50%',
        y: isMobile ? '-90dvh' : '-40rem', // 根據螢幕寬度決定 Y 位移
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=4000',
          end: 'top top-=4500',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        x: '-50%',
        y: isMobile ? '-100dvh' : '-60rem', // 根據螢幕寬度決定 Y 位移
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen03-outside (fadeout)
    gsap.fromTo(
      '#screen03-outside',
      {
        display: 'flex',
        opacity: 1,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=4300',
          end: 'top top-=4500',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        display: 'none',
        opacity: 0,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )

    // #screen03-container (fadeout)
    gsap.fromTo(
      '#screen03-container',
      {
        visibility: 'visible',
        opacity: 1,
        pointerEvents: 'auto',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=4500',
          end: 'top top-=4500',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        visibility: 'hidden',
        opacity: 0,
        pointerEvents: 'none',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )

    // #screen04-container
    gsap.set('#screen04-container', {
      display: 'none',
      x: '-50%',
      y: 0,
      opacity: 0,
      pointerEvents: 'none',
    })

    // #screen04-container
    gsap.fromTo(
      '#screen04-container',
      {
        display: 'none',
        top: '-11rem',
        x: '-50%',
        y: '-100%',
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=4300',
          end: 'top top-=4400',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        display: 'flex',
        top: '5.5rem',
        x: '-50%',
        y: 0,
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen04-skill01
    gsap.fromTo(
      '#screen04-skill01',
      {
        y: '-100%',
        opacity: 0,
        visibility: 'hidden',
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=4400',
          end: 'top top-=4500',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        y: '0%',
        opacity: 1,
        visibility: 'visible',
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen04-skill02
    gsap.fromTo(
      '#screen04-skill02',
      {
        y: '-100%',
        opacity: 0,
        visibility: 'hidden',
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=4500',
          end: 'top top-=4600',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        y: '0%',
        opacity: 1,
        visibility: 'visible',
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen04-skill03
    gsap.fromTo(
      '#screen04-skill03',
      {
        y: '-100%',
        opacity: 0,
        visibility: 'hidden',
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=4600',
          end: 'top top-=4700',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        y: '0%',
        opacity: 1,
        visibility: 'visible',
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen04-skill04
    gsap.fromTo(
      '#screen04-skill04',
      {
        y: '-100%',
        opacity: 0,
        visibility: 'hidden',
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=4700',
          end: 'top top-=4800',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        y: '0%',
        opacity: 1,
        visibility: 'visible',
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen04-container 縮小
    gsap.fromTo(
      '#screen04-container',
      {
        display: 'flex',
        scale: 1,
        opacity: 1,
        filter: 'blur(0px) brightness(1) contrast(1) grayscale(0%) saturate(1)',
        pointerEvents: 'auto',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=5000',
          end: 'top top-=5200',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        display: 'none',
        scale: 0,
        opacity: 0,
        filter: 'blur(5px) brightness(2) contrast(0) grayscale(100%) saturate(0)',
        pointerEvents: 'none',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )

    // #screen05-container
    gsap.set('#screen05-container', {
      display: 'none',
      x: '-50%',
      scale: 0,
      opacity: 0,
      pointerEvents: 'none',
    })
    gsap.fromTo(
      '#screen05-container',
      {
        x: '-50%',
        scale: 0,
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=5200',
          end: 'top top-=5400',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
          onEnter: () => gsap.set('#screen05-container', { display: 'flex' }), // 顯示
          onLeaveBack: () => gsap.set('#screen05-container', { display: 'none' }), // 隱藏
        },
        x: '-50%',
        scale: 1,
        opacity: 1,
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )

    // #screen05-container .cmd-name
    gsap.fromTo(
      '#screen05-container .cmd-name',
      {
        display: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=5400',
          end: 'top top-=5500',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        display: 'flex',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    const text00 = '林家丞 Chia-Cheng, Lin' // 文字內容
    const textCmdName = document.querySelector('#screen05-container .cmd-name')
    // 設定 GSAP Timeline
    const tl00 = gsap.timeline({
      scrollTrigger: {
        trigger: '#section-container',
        start: 'top top-=5400',
        end: 'top top-=5500',
        scrub: true,
        toggleActions: 'play reverse play reverse',
        invalidateOnRefresh: true,
      },
    })

    // GSAP 打字動畫
    tl00.to('#section-container', {
      width: 'auto', // 擴展寬度
      duration: 0.5, // 初始打字速度
    })

    text00.split('').forEach((_value, index) => {
      tl00.to(textCmdName, {
        textContent: text00.slice(0, index + 1), // 顯示逐字內容
        duration: 0.1, // 單字速度
        ease: 'none',
      })
    })

    // 當滾回時重置動畫
    tl00.to('#section-container', {
      width: '0',
      duration: 0.5,
    })
    gsap.fromTo(
      '#screen05-container .cmd-name ~ .animate-blink',
      {
        display: 'inline-block',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=5500',
          end: 'top top-=5500',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        display: 'none',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )

    // #screen05-container .p01
    gsap.fromTo(
      '#screen05-container .p01 .animate-blink',
      {
        display: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=5500',
          end: 'top top-=5500',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        display: 'inline-block',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    gsap.fromTo(
      '#screen05-container .p01 p',
      {
        display: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=5500',
          end: 'top top-=5800',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        display: 'inline-block',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    const text01 =
      '我是一位擁有9年工作經驗的網頁開發者，曾擔任過前端設計、網頁設計師以及市場行銷人員等職務。我的經歷使我能夠同時站在工程師、設計師以及行銷企劃的不同角度來看待專案。這能讓團隊間的溝通更加的無礙。' // 文字內容
    const textP01 = document.querySelector('#screen05-container .p01 p')
    // 設定 GSAP Timeline
    const tl01 = gsap.timeline({
      scrollTrigger: {
        trigger: '#section-container',
        start: 'top top-=5500',
        end: 'top top-=5800',
        scrub: true,
        toggleActions: 'play reverse play reverse',
        invalidateOnRefresh: true,
      },
    })

    // GSAP 打字動畫
    tl01.to('#section-container', {
      width: 'auto', // 擴展寬度
      duration: 0.5, // 初始打字速度
    })

    text01.split('').forEach((_value, index) => {
      tl01.to(textP01, {
        textContent: text01.slice(0, index + 1), // 顯示逐字內容
        duration: 0.1, // 單字速度
        ease: 'none',
      })
    })

    gsap.fromTo(
      '#screen05-container .p01 .animate-blink',
      {
        display: 'inline',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=5800',
          end: 'top top-=5800',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        display: 'none',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )

    // #screen05-container .p02
    gsap.fromTo(
      '#screen05-container .p02 .animate-blink',
      {
        display: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=5800',
          end: 'top top-=5800',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        display: 'inline-block',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    gsap.fromTo(
      '#screen05-container .p02 p',
      {
        display: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=5800',
          end: 'top top-=6100',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        display: 'inline-block',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    const text02 =
      '在我的職涯中，我積累了豐富的網頁設計和前端開發經驗，能夠熟練運用Html、Css、JavaScript等前端基礎技術，同時也曾運用過Bootstrap、Tailwind、Vue、Nuxt等框架技術，來因應各式不同的專案環境。透過不同的工具以及方式，設計出具有視覺吸引力和良好使用者體驗的網頁。' // 文字內容
    const textP02 = document.querySelector('#screen05-container .p02 p')
    // 設定 GSAP Timeline
    const tl02 = gsap.timeline({
      scrollTrigger: {
        trigger: '#section-container',
        start: 'top top-=5800',
        end: 'top top-=6100',
        scrub: true,
        toggleActions: 'play reverse play reverse',
        invalidateOnRefresh: true,
      },
    })

    // GSAP 打字動畫
    tl02.to('#section-container', {
      width: 'auto', // 擴展寬度
      duration: 0.5, // 初始打字速度
    })

    text02.split('').forEach((_value, index) => {
      tl02.to(textP02, {
        textContent: text02.slice(0, index + 1), // 顯示逐字內容
        duration: 0.1, // 單字速度
        ease: 'none',
      })
    })

    gsap.fromTo(
      '#screen05-container .p02 .animate-blink',
      {
        display: 'inline',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=6100',
          end: 'top top-=6100',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        display: 'none',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )

    // #screen05-container .p03
    gsap.fromTo(
      '#screen05-container .p03 .animate-blink',
      {
        display: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=6100',
          end: 'top top-=6100',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        display: 'inline-block',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    gsap.fromTo(
      '#screen05-container .p03 p',
      {
        display: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=6100',
          end: 'top top-=6400',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        display: 'inline-block',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    const text03 =
      '未來，我期望能夠在前端工程師的職務上持續精進自己的專業技能，並且將所學應用於實際專案中，為客戶創造價值和成就。我對於前端開發充滿熱情，希望能夠不斷學習和成長，成為一位專業且具影響力的前端工程師。' // 文字內容
    const textP03 = document.querySelector('#screen05-container .p03 p')
    // 設定 GSAP Timeline
    const tl03 = gsap.timeline({
      scrollTrigger: {
        trigger: '#section-container',
        start: 'top top-=6100',
        end: 'top top-=6400',
        scrub: true,
        toggleActions: 'play reverse play reverse',
        invalidateOnRefresh: true,
      },
    })

    // GSAP 打字動畫
    tl03.to('#section-container', {
      width: 'auto', // 擴展寬度
      duration: 0.5, // 初始打字速度
    })

    text03.split('').forEach((_value, index) => {
      tl03.to(textP03, {
        textContent: text03.slice(0, index + 1), // 顯示逐字內容
        duration: 0.1, // 單字速度
        ease: 'none',
      })
    })

    gsap.fromTo(
      '#screen05-container .p03 .animate-blink',
      {
        display: 'inline',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=6400',
          end: 'top top-=6400',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        display: 'none',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )

    // #screen05-container .p04
    gsap.fromTo(
      '#screen05-container .p04 .animate-blink',
      {
        display: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=6400',
          end: 'top top-=6400',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        display: 'inline-block',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    gsap.fromTo(
      '#screen05-container .p04 p',
      {
        display: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=6400',
          end: 'top top-=6700',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        display: 'inline-block',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    const text04 =
      '我相信自己的豐富經驗和專業技能，將能夠在未來的職涯中取得更大的成就，並且為貴公司帶來價值和創新。我期待能夠在這個充滿挑戰和機遇的領域中，不斷挑戰自我，實現職業目標。' // 文字內容
    const textP04 = document.querySelector('#screen05-container .p04 p')
    // 設定 GSAP Timeline
    const tl04 = gsap.timeline({
      scrollTrigger: {
        trigger: '#section-container',
        start: 'top top-=6400',
        end: 'top top-=6700',
        scrub: true,
        toggleActions: 'play reverse play reverse',
        invalidateOnRefresh: true,
      },
    })

    // GSAP 打字動畫
    tl04.to('#section-container', {
      width: 'auto', // 擴展寬度
      duration: 0.5, // 初始打字速度
    })

    text04.split('').forEach((_value, index) => {
      tl04.to(textP04, {
        textContent: text04.slice(0, index + 1), // 顯示逐字內容
        duration: 0.1, // 單字速度
        ease: 'none',
      })
    })

    gsap.fromTo(
      '#screen05-container .p04 .animate-blink',
      {
        display: 'inline',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=6700',
          end: 'top top-=6700',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        display: 'none',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )

    // #screen05-container 縮小
    gsap.fromTo(
      '#screen05-container',
      {
        x: '-50%',
        scale: 1,
        opacity: 1,
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=7000',
          end: 'top top-=7200',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        x: '-50%',
        scale: 0,
        opacity: 0,
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // #screen05-container 縮小
    gsap.fromTo(
      '#screen05-container',
      {
        x: '-50%',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=7200',
          end: 'top top-=7200',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
          onEnter: () => gsap.set('#screen05-container', { display: 'none' }), // 隱藏
          onLeaveBack: () => gsap.set('#screen05-container', { display: 'flex' }), // 顯示
        },
        x: '-50%',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )

    // #screen01-container 顯示
    ScrollTrigger.create({
      trigger: '#section-container',
      start: 'top top-=7000',
      end: 'top top-=7200',
      scrub: true,
      toggleActions: 'play reverse play reverse',
      invalidateOnRefresh: true,
      onEnter: () => {
        gsap.to('#screen01-container', {
          display: 'flex',
          visibility: 'visible',
          opacity: 1,
          pointerEvents: 'auto',
        })
      },
      onLeaveBack: () => {
        gsap.to('#screen01-container', {
          display: 'none',
          visibility: 'hidden',
          opacity: 0,
          pointerEvents: 'none',
        })
      },
    })
    // 動畫 #screen01-headshot 圖片回歸
    gsap.fromTo(
      '#screen01-headshot',
      {
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
          start: 'top top-=7000',
          end: 'top top-=7000',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        left: '0',
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        blur: 0,
        filter: 'blur(0px)',
        webkitFilter: 'blur(0px)',
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
    // <!-- 第一屏 文字區域 -->
    // 動畫
    gsap.fromTo(
      '#screen01-text',
      {
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
          start: 'top top-=7000',
          end: 'top top-=7000',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        y: 0,
        scale: 1,
        opacity: 1,
        blur: 0,
        filter: 'blur(0px)',
        webkitFilter: 'blur(0px)',
        pointerEvents: 'auto',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )

    // 動畫 按鈕隱藏
    gsap.fromTo(
      '#btn-resume',
      {
        top: '4rem',
        opacity: 1,
        pointerEvents: 'auto',
      },
      {
        scrollTrigger: {
          trigger: '#section-container',
          start: 'top top-=7000',
          end: 'top top-=7200',
          scrub: true,
          toggleActions: 'play reverse play reverse',
          invalidateOnRefresh: true,
        },
        top: '2rem',
        opacity: 0,
        pointerEvents: 'none',
        immediateRender: false, // 避免初始值在載入時被套用
      },
    )
  }

  const clearAnimations = () => {
    // 清除所有 GSAP 動畫和 ScrollTrigger
    ScrollTrigger.getAll().forEach((st) => st.kill())
    gsap.killTweensOf('*')
  }

  onMounted(() => {
    // 初始化動畫
    initAnimations()

    // 監聽視窗縮放事件
    const handleResize = () => {
      if (isAnimating.value) return
      isAnimating.value = true

      // 清除現有動畫
      clearAnimations()

      // 使用 RAF 來確保在下一幀執行初始化
      requestAnimationFrame(() => {
        // 重新初始化動畫
        initAnimations()

        // 刷新所有 ScrollTrigger 實例
        ScrollTrigger.refresh()

        isAnimating.value = false
      })
    }
    window.addEventListener('resize', handleResize)

    // 在組件卸載時移除監聽事件
    onBeforeUnmount(() => {
      window.removeEventListener('resize', handleResize)
    })
  })
}
