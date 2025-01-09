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
          trigger: '#section-container-01',
          start: 'center top+=25%',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        top: '5rem',
        opacity: 1,
      },
    )

    // #section-01 fade-out
    gsap.to('#section-01', {
      scrollTrigger: {
        trigger: '#section-container-01',
        start: 'top top+=64px',
        end: 'center top',
        scrub: true,
        toggleActions: 'play reverse play reverse',
      },
      opacity: 0,
      pointerEvents: 'none',
    })
    // #section-01 translate變化
    gsap.to('#section-translate-01', {
      scrollTrigger: {
        trigger: '#section-container-01',
        start: 'top top+=64px',
        end: 'center top',
        scrub: true,
        toggleActions: 'play reverse play reverse',
      },
      y: '50%',
    })
    // #section-01 translate復原
    gsap.to('#section-translate-01', {
      scrollTrigger: {
        trigger: '#section-container-01',
        start: 'center top',
        end: 'bottom top',
        scrub: true,
        toggleActions: 'play reverse play reverse',
      },
      y: 0,
    })

    // #section-02 fade-out
    gsap.fromTo(
      '#section-02',
      {
        opacity: 0,
        pointerEvents: 'none',
      },
      {
        scrollTrigger: {
          trigger: '#section-container-02',
          start: 'top top+=25%',
          end: 'center top+=64px',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        opacity: 1,
        pointerEvents: 'auto',
      },
    )
    // #section-02 translate變化
    gsap.fromTo(
      '#section-translate-02',
      {
        y: '-50%',
      },
      {
        scrollTrigger: {
          trigger: '#section-container-02',
          start: 'top top+=25%',
          end: 'center top+=64px',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        y: '0%',
      },
    )

    // // #section-02 translate變化
    // gsap.to('#section-translate-02', {
    //   scrollTrigger: {
    //     trigger: '#section-container-02',
    //     start: 'top top+=64px',
    //     end: 'center top',
    //     scrub: true,
    //     toggleActions: 'play reverse play reverse',
    //   },
    //   y: '50%',
    // })
    // // #section-02 translate復原
    // gsap.to('#section-translate-02', {
    //   scrollTrigger: {
    //     trigger: '#section-container-02',
    //     start: 'center top',
    //     end: 'bottom top',
    //     scrub: true,
    //     toggleActions: 'play reverse play reverse',
    //   },
    //   y: 0,
    // })
    // gsap.fromTo(
    //   '.btn-resume',
    //   {
    //     opacity: 0,
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container-01',
    //       start: 'center top',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     opacity: 1,
    //   },
    // )
    // gsap.fromTo(
    //   '#section-02',
    //   {
    //     y: '-50%',
    //     opacity: 0,
    //     pointerEvents: 'none',
    //   },
    //   {
    //     scrollTrigger: {
    //       trigger: '#section-container-01',
    //       start: 'center top',
    //       end: 'bottom top',
    //       scrub: true,
    //       toggleActions: 'play reverse play reverse',
    //     },
    //     y: '0%',
    //     opacity: 1,
    //     pointerEvents: 'auto',
    //   },
    // )
    // gsap.to('.section-01 *:not(.btn-resume)', {
    //   scrollTrigger: {
    //     trigger: '.section-01',
    //     start: 'top top+=64px',
    //     end: 'center top',
    //     scrub: true,
    //   },
    //   opacity: 0,
    //   borderColor: 'blue',
    // })
    // gsap.to('.btn-resume', {
    //   scrollTrigger: {
    //     trigger: '.section-01',
    //     start: 'center top',
    //     toggleActions: 'play reverse play reverse',
    //     toggleClass: { targets: '.btn-resume', className: 'scroll-after' }, // 切換固定位置的樣式
    //     onEnter: () => document.querySelector('.btn-resume')?.classList.remove('scroll-before'), // 移除 .scroll class
    //     onLeaveBack: () => document.querySelector('.btn-resume')?.classList.add('scroll-before'), // 滾回去時添加 .scroll class
    //   },
    //   opacity: 1,
    // })
    /* .section-01 END */
  })
}
