<script setup lang="ts">
definePageMeta({
  // middleware: ['loading'], // 啟用 loading 中介層
})

// .btn-resume滾動
const btnResume = ref<HTMLElement | null>(null)
let initialOffsetTop = 0

const handleScroll = () => {
  if (btnResume.value) {
    const scrollPosition = window.scrollY
    const divBottomPosition = initialOffsetTop + btnResume.value.offsetHeight

    if (scrollPosition >= divBottomPosition) {
      btnResume.value.querySelector('a')?.classList.add('original-scroll')
      btnResume.value.querySelector('a')?.classList.remove('original')
    } else {
      btnResume.value.querySelector('a')?.classList.add('original')
      btnResume.value.querySelector('a')?.classList.remove('original-scroll')
    }
  }
}

onMounted(() => {
  if (btnResume.value) {
    initialOffsetTop = btnResume.value.offsetTop
  }
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

/* hidden .icon-scroll */
const isVisible = ref(false)

const handleIconScroll = () => {
  isVisible.value = window.scrollY > 0
}

onMounted(() => {
  window.addEventListener('scroll', handleIconScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleIconScroll)
})

/* Scroll Animations */ // TODO: implement
const aboutPic = ref<HTMLElement | null>(null)

const addScrollClass = () => {
  if (aboutPic.value) {
    const scrollPosition = window.scrollY

    if (scrollPosition > 0) {
      aboutPic.value.classList.add('scroll-start')
    } else {
      aboutPic.value.classList.remove('scroll-start')
    }
  }
}
let observer: IntersectionObserver

if (typeof window !== 'undefined') {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && aboutPic.value) {
        const progress = entry.intersectionRatio // 取得滾動百分比
        aboutPic.value.style.setProperty('--animation-progress', progress.toString())
        console.log(progress)
      }
    },
    {
      root: null,
      threshold: Array.from({ length: 101 }, (_, i) => i / 100), // 0%, 1%, ..., 100%
    },
  )

  onMounted(() => {
    if (aboutPic.value) {
      observer.observe(aboutPic.value)
    }
    window.addEventListener('scroll', addScrollClass)
  })

  onUnmounted(() => {
    if (aboutPic.value) {
      observer.unobserve(aboutPic.value)
    }
    window.removeEventListener('scroll', addScrollClass)
  })
}
</script>
<template>
  <div
    class="relative before:fixed before:left-0 before:top-0 before:block before:h-full before:bg-white/30 before:backdrop-blur-sm before:content-[''] before:lg:w-[150px] before:xl:w-[175px] before:2xl:w-[200px]"
  >
    <main
      class="relative z-0 ml-auto mr-0 h-full min-h-[calc(100dvh-8rem)] w-full max-w-full bg-gray-200 py-6 lg:max-w-[calc(100%-150px)] xl:max-w-[calc(100%-175px)] 2xl:max-w-[calc(100%-200px)]"
    >
      <div class="flex w-full max-w-full flex-col items-start justify-start gap-0 px-4">
        <!-- <NuxtLink class="ml-auto mr-0 rounded-md bg-blue-600 px-2 py-1 text-white hover:bg-blue-800" to="/resume"
          >Resume</NuxtLink
        > -->
        <section
          class="section-01 mx-auto flex h-[calc(100dvh-12rem)] w-full max-w-[960px] flex-row flex-wrap items-stretch justify-start gap-4 lg:max-w-[1280px]"
          style="border: 1px solid green"
        >
          <picture
            ref="aboutPic"
            class="about-pic flex aspect-3/4 h-full w-auto rounded-md"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <img
              class="h-auto max-h-fit w-full max-w-full object-cover"
              src="/images/about.webp"
              title="About"
              alt="About"
              width="504"
              height="672"
              loading="lazy"
              decoding="async"
            />
          </picture>
          <div class="relative ml-auto mr-0 inline-flex h-full grow flex-col items-start justify-start gap-2">
            <h1
              class="ml-auto mr-0 mt-5 inline-flex flex-col items-end gap-2 text-7xl font-black leading-none text-gray-800 after:mt-8 after:block after:h-2 after:w-[125%] after:rounded-full after:bg-blue-600"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              林家丞
              <span class="ml-2 inline-block align-baseline font-Fira text-xl font-bold leading-none text-gray-600">
                Chia-Cheng, Lin
              </span>
            </h1>
            <h2
              class="ml-auto mr-0 mt-5 inline-flex w-fit items-baseline justify-start text-end text-lg font-semibold leading-none text-blue-900"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              現職 1111人力銀行 前端設計
            </h2>
            <h2
              class="ml-auto mr-0 inline-flex w-fit items-baseline justify-start text-end text-lg font-semibold leading-none text-blue-900"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              淡江大學 資訊傳播學系 學士
            </h2>

            <div
              class="triple-circle relative mx-auto mb-24 mt-auto flex size-80 items-center justify-center"
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              <div
                class="circle-red absolute flex size-48 -translate-y-1/3 items-center justify-center rounded-full border-4 border-solid border-red-400"
              >
                <p
                  class="absolute top-[35%] inline-flex flex-col items-center justify-center text-center text-lg font-bold leading-none text-red-500"
                  data-aos="flip-up"
                  data-aos-delay="600"
                  data-aos-duration="400"
                >
                  前端開發<span>Frontend</span>
                </p>
              </div>
              <div
                class="circle-green absolute flex size-48 -translate-x-1/3 translate-y-1/3 items-center justify-center rounded-full border-4 border-solid border-green-400"
              >
                <p
                  class="absolute bottom-[30%] left-[20%] inline-flex flex-col items-start justify-center text-start text-lg font-bold leading-none text-green-500"
                  data-aos="flip-up"
                  data-aos-delay="600"
                  data-aos-duration="400"
                >
                  設計<span>Design</span>
                </p>
              </div>
              <div
                class="circle-blue absolute flex size-48 translate-x-1/3 translate-y-1/3 items-center justify-center rounded-full border-4 border-solid border-blue-400"
              >
                <p
                  class="absolute bottom-[30%] right-[10%] inline-flex flex-col items-end justify-center text-end text-lg font-bold leading-none text-blue-500"
                  data-aos="flip-up"
                  data-aos-delay="600"
                  data-aos-duration="400"
                >
                  市場行銷<span>Marketing</span>
                </p>
              </div>
            </div>
            <div ref="btnResume" class="relative h-12 w-full">
              <NuxtLink
                class="btn-resume original inline-flex h-fit w-fit items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-lg font-bold text-white hover:bg-blue-800"
                to="/resume"
                target="_self"
              >
                <Icon
                  class="icon-resume text-lg"
                  name="material-symbols:arrow-right-alt-rounded"
                  size="16"
                  title="View Resume"
                  alt="View Resume"
                />
                View Resume
              </NuxtLink>
            </div>
          </div>
        </section>
        <section
          class="section-02 mx-auto flex h-[calc(100dvh-12rem)] w-full max-w-[960px] flex-row flex-wrap items-stretch justify-start gap-4 lg:max-w-[1280px]"
          style="border: 1px solid blue"
        >
          <picture class="flex h-full w-auto overflow-hidden rounded-md">
            <img
              class="h-full max-h-full w-full max-w-full object-cover"
              src="/images/about.webp"
              title="About"
              alt="About"
              width="504"
              height="672"
              loading="lazy"
              decoding="async"
            />
          </picture>
          <div class="ml-auto mr-0 inline-flex grow flex-col items-start justify-start gap-2">
            <h1
              class="ml-auto mr-0 mt-5 inline-flex flex-col items-end gap-2 text-7xl font-black leading-none text-gray-800 after:mt-8 after:block after:h-2 after:w-[125%] after:rounded-full after:bg-blue-600"
            >
              林家丞
              <span class="ml-2 inline-block align-baseline font-Fira text-xl font-bold leading-none text-gray-600">
                Chia-Cheng, Lin
              </span>
            </h1>
            <h2
              class="ml-auto mr-0 mt-5 inline-flex w-fit items-baseline justify-start text-end text-lg font-semibold leading-none text-blue-900"
            >
              現職 1111人力銀行 前端設計
            </h2>
            <h2
              class="ml-auto mr-0 inline-flex w-fit items-baseline justify-start text-end text-lg font-semibold leading-none text-blue-900"
            >
              淡江大學 資訊傳播學系 學士
            </h2>

            <div class="relative mx-auto mb-10 mt-auto flex size-80 items-center justify-center">
              <div
                class="absolute flex size-48 -translate-y-1/3 items-center justify-center rounded-full border-4 border-solid border-red-400"
              >
                <p
                  class="inline-flex -translate-y-1/3 flex-col items-center justify-center text-center text-lg font-bold leading-none text-red-500"
                >
                  前端開發<span>Frontend</span>
                </p>
              </div>
              <div
                class="absolute flex size-48 -translate-x-1/3 translate-y-1/3 items-center justify-center rounded-full border-4 border-solid border-green-400"
              >
                <p
                  class="inline-flex -translate-x-1/4 translate-y-1/2 flex-col items-start justify-center text-start text-lg font-bold leading-none text-green-500"
                >
                  設計<span>Design</span>
                </p>
              </div>
              <div
                class="absolute flex size-48 translate-x-1/3 translate-y-1/3 items-center justify-center rounded-full border-4 border-solid border-blue-400"
              >
                <p
                  class="inline-flex translate-x-1/4 translate-y-1/2 flex-col items-end justify-center text-end text-lg font-bold leading-none text-blue-500"
                >
                  市場行銷<span>Marketing</span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          class="section-03 mx-auto flex h-[calc(100dvh-12rem)] w-full max-w-[960px] flex-row flex-wrap items-stretch justify-start gap-4 opacity-0 lg:max-w-[1280px]"
          style="border: 1px solid blue"
        >
          <picture class="flex h-full w-auto overflow-hidden rounded-md">
            <img
              class="h-full max-h-full w-full max-w-full object-cover"
              src="/images/about.webp"
              title="About"
              alt="About"
              width="504"
              height="672"
              loading="lazy"
              decoding="async"
            />
          </picture>
          <div class="ml-auto mr-0 inline-flex grow flex-col items-start justify-start gap-2">
            <h1
              class="ml-auto mr-0 mt-5 inline-flex flex-col items-end gap-2 text-7xl font-black leading-none text-gray-800 after:mt-8 after:block after:h-2 after:w-[125%] after:rounded-full after:bg-blue-600"
            >
              林家丞
              <span class="ml-2 inline-block align-baseline font-Fira text-xl font-bold leading-none text-gray-600">
                Chia-Cheng, Lin
              </span>
            </h1>
            <h2
              class="ml-auto mr-0 mt-5 inline-flex w-fit items-baseline justify-start text-end text-lg font-semibold leading-none text-blue-900"
            >
              現職 1111人力銀行 前端設計
            </h2>
            <h2
              class="ml-auto mr-0 inline-flex w-fit items-baseline justify-start text-end text-lg font-semibold leading-none text-blue-900"
            >
              淡江大學 資訊傳播學系 學士
            </h2>

            <div class="relative mx-auto mb-10 mt-auto flex size-80 items-center justify-center">
              <div
                class="absolute flex size-48 -translate-y-1/3 items-center justify-center rounded-full border-4 border-solid border-red-400"
              >
                <p
                  class="inline-flex -translate-y-1/3 flex-col items-center justify-center text-center text-lg font-bold leading-none text-red-500"
                >
                  前端開發<span>Frontend</span>
                </p>
              </div>
              <div
                class="absolute flex size-48 -translate-x-1/3 translate-y-1/3 items-center justify-center rounded-full border-4 border-solid border-green-400"
              >
                <p
                  class="inline-flex -translate-x-1/4 translate-y-1/2 flex-col items-start justify-center text-start text-lg font-bold leading-none text-green-500"
                >
                  設計<span>Design</span>
                </p>
              </div>
              <div
                class="absolute flex size-48 translate-x-1/3 translate-y-1/3 items-center justify-center rounded-full border-4 border-solid border-blue-400"
              >
                <p
                  class="inline-flex translate-x-1/4 translate-y-1/2 flex-col items-end justify-center text-end text-lg font-bold leading-none text-blue-500"
                >
                  市場行銷<span>Marketing</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
    <Transition
      name="icon-scroll"
      mode="out-in"
      enter-active-class="transition-all duration-300 ease-linear"
      enter-from-class="opacity-100 translate-y-0"
      enter-to-class="opacity-0 translate-y-1/2"
      leave-active-class="transition-all duration-300 ease-linear"
      leave-from-class="opacity-0 translate-y-1/2"
      leave-to-class="opacity-100 translate-y-0"
    >
      <Icon
        v-if="!isVisible"
        id="icon-scroll"
        class="icon-scroll fixed bottom-[10dvh] left-[50dvw] z-50 -translate-x-1/2 animate-pulse text-lg text-gray-800"
        name="lineicons:scroll-down-2"
        size="36"
        title="Scroll Down"
        alt="Scroll Down"
      />
    </Transition>
  </div>
</template>

<style scoped>
/* .about-pic {
  transition: all 0.1s ease-out;
}
.about-pic.scroll-start {
  transform: scale(calc((1 - var(--animation-progress, 0.5)) * 2));
} */
.btn-resume {
  opacity: 1;
  animation: btn-resume 1000ms 1 1000ms linear backwards;
}
.btn-resume.original {
  position: absolute;
  bottom: 0;
  right: 0;
}
.btn-resume.original-scroll {
  position: fixed;
  top: 5rem;
  right: 1rem;
}
@media (min-width: 1536px) {
  .btn-resume.original-scroll {
    right: 50%;
    transform: translateX(50%);
    margin-right: -640px;
  }
}
.icon-resume {
  transform-origin: right;
  animation: icon-resume 2000ms infinite linear forwards alternate;
}
.icon-scroll[data-aos='opacity-out'] {
  /* animation: icon-scroll 1000ms 1 linear backwards; */
}

@keyframes btn-resume {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes icon-resume {
  0% {
    transform: scaleX(100%);
  }
  100% {
    transform: scaleX(150%);
  }
}
@keyframes icon-scroll {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
