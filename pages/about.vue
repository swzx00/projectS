<script setup lang="ts">
import { useGsapAnimations } from '../composables/useGsapAnimations'

definePageMeta({
  middleware: ['loading'], // 啟用 loading 中介層
})

// meta設定
const metaTitle: string = 'About | 關於林家丞'
const metaDescription: string =
  '我是個前端，同時也是個設計。目前任職於1111人力銀行的前端設計，主要負責網站前端的開發與維護。在我成為前端前，我是個設計師，所以對於UI/UX相關領域也是相當瞭解。熟悉Html、Css、Javascript等網頁相關技術，同時也有在接觸Vue、Nuxt等框架。能結合前端技術與設計經驗，打造高效且美觀的網站，為使用者提供最佳體驗。'

useHead({
  title: `${metaTitle}`,
  meta: [
    { name: 'title', content: `${metaTitle}` },
    { name: 'description', content: `${metaDescription}` },
    { property: 'og:title', content: `${metaTitle}` },
    { property: 'og:description', content: `${metaDescription}` },
  ],
})

useGsapAnimations()

const isVisible = ref(true)
let scrollTimeout: number | null = null

const handleScroll = () => {
  isVisible.value = false

  // 清除之前的計時器
  if (scrollTimeout !== null) {
    clearTimeout(scrollTimeout)
  }

  // 設定新的計時器
  scrollTimeout = window.setTimeout(() => {
    if (window.scrollY + window.innerHeight < document.documentElement.scrollHeight) {
      isVisible.value = true
    }
  }, 3000)
}

const checkScrollEnd = () => {
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
    isVisible.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('scroll', checkScrollEnd)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('scroll', checkScrollEnd)

  // 確保在離開元件時清除計時器
  if (scrollTimeout !== null) {
    clearTimeout(scrollTimeout)
  }
})
</script>

<template>
  <div
    class="relative before:fixed before:left-0 before:top-0 before:block before:h-full before:bg-white/30 before:backdrop-blur-sm before:content-[''] before:lg:w-[150px] before:xl:w-[175px] before:2xl:w-[200px]"
  >
    <main
      class="relative z-0 ml-auto mr-0 h-full min-h-[calc(100dvh-8rem)] w-full max-w-full bg-gray-200 lg:max-w-[calc(100%-150px)] xl:max-w-[calc(100%-175px)] 2xl:max-w-[calc(100%-200px)]"
    >
      <div class="flex w-full max-w-full flex-col items-start justify-start gap-0">
        <!-- .section-container -->
        <div id="section-container" class="relative h-[calc(8500px)] max-h-[calc(8500px)] w-full max-w-full">
          <!-- #btn-resume -->
          <div
            id="btn-resume"
            class="pointer-events-none fixed right-0 z-50 hidden h-20 w-full bg-gradient-to-b from-gray-200 to-transparent opacity-0 lg:right-10 lg:h-fit lg:w-fit lg:bg-transparent lg:from-transparent lg:to-transparent"
          >
            <NuxtLink
              class="pointer-events-auto z-10 ml-auto mr-4 mt-4 inline-flex h-fit w-fit items-center justify-center gap-2 break-keep rounded-md bg-blue-600 px-3 py-2 text-lg font-bold text-white hover:bg-blue-800 sm:mr-4 lg:mr-0"
              to="/resume"
              target="_blank"
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
          <!-- 第一屏  -->
          <div
            id="screen01-container"
            class="fixed left-[calc(100dvw/2)] top-[calc((100dvh+4rem)/2)] flex h-fit w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 flex-row flex-wrap items-start justify-start opacity-0 sm:max-w-[calc(100%-4rem)] sm:-translate-y-3/4 lg:left-[calc((100dvw+150px)/2)] lg:max-w-[calc(100%/4*3)] xl:left-[calc((100dvw+175px)/2)] xl:max-w-[calc(100%/3*2)] 2xl:left-[calc((100dvw+200px)/2)] 2xl:max-w-[40%]"
          >
            <!-- 第一屏 大頭照 -->
            <picture
              id="screen01-headshot"
              class="absolute left-0 top-0 z-10 m-0 flex aspect-square size-32 overflow-hidden rounded-full border border-solid border-white shadow-md transition-all"
            >
              <img
                class="m-0 aspect-auto h-auto max-h-fit w-full max-w-full translate-x-[0%] translate-y-[0%] scale-[100%] object-cover object-center"
                src="/images/about-circle.webp"
                title="大頭照"
                alt="大頭照"
                width="1109"
                height="1479"
                loading="lazy"
                decoding="async"
              />
            </picture>
            <!-- 第一屏 文字區域 -->
            <div id="screen01-text" class="flex w-full max-w-full flex-col flex-nowrap items-start justify-start gap-0">
              <h1
                class="mb-4 ml-36 inline-flex h-fit min-h-32 flex-col items-start justify-center gap-2 text-4xl font-black leading-none text-gray-800"
              >
                林家丞
                <span class="inline-block align-baseline font-Fira text-base font-bold leading-none text-gray-700">
                  Chia-Cheng, Lin
                </span>
              </h1>
              <p class="w-full text-justify text-base font-normal text-gray-600">
                我是個前端，同時也是個設計。目前任職於1111人力銀行的前端設計，主要負責網站前端的開發與維護。在我成為前端前，我是個設計師，所以對於UI/UX相關領域也是相當瞭解。熟悉Html、Css、Javascript等網頁相關技術，同時也有在接觸Vue、Nuxt等框架。能結合前端技術與設計經驗，打造高效且美觀的網站，為使用者提供最佳體驗。
              </p>
              <div class="mt-4 flex w-full max-w-full flex-row flex-wrap items-center justify-start gap-x-6 gap-y-3">
                <p
                  class="flex w-fit max-w-full flex-row items-center justify-start gap-2 self-center break-keep"
                  title="連絡電話"
                >
                  <Icon class="text-gray-600" name="uil:phone" size="20" title="連絡電話" alt="連絡電話" />
                  <a
                    href="tel:8860921702528"
                    target="_self"
                    class="-row group flex items-center justify-start gap-0 break-keep underline-offset-2 transition-all hover:text-blue-600 hover:underline hover:underline-offset-4"
                  >
                    <span class="break-keep text-sm text-gray-500 group-hover:text-blue-600">(+886)</span
                    >&nbsp;0921-702-528
                  </a>
                </p>
                <p
                  class="flex w-fit max-w-full flex-row items-center justify-start gap-2 self-center break-keep"
                  title="電子信箱"
                >
                  <Icon class="text-gray-600" name="uil:envelope" size="20" title="電子信箱" alt="電子信箱" />
                  <a
                    href="mailto:swzx00@gmail.com"
                    target="_self"
                    class="-row group flex items-center justify-start gap-0 break-keep underline underline-offset-2 transition-all hover:text-blue-600 hover:underline hover:underline-offset-4"
                  >
                    swzx00@gmail.com
                  </a>
                </p>
                <NuxtLink
                  class="inline-flex h-fit w-full max-w-full items-center justify-center gap-2 self-center break-keep rounded-md bg-blue-600 px-3 py-2 text-lg font-bold text-white hover:bg-blue-800 sm:w-fit"
                  to="/resume"
                  target="_blank"
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
                <!-- <span class="mx-auto inline-block text-center text-sm text-gray-400">向下滑動查看更多</span> -->
              </div>
            </div>
          </div>

          <!-- 第二屏 形象照(去背) -->
          <picture
            id="section-02-pic-matting"
            class="fixed bottom-0 right-0 z-20 hidden aspect-3/4 h-full max-h-full w-auto max-w-full items-end overflow-hidden lg:right-6 xl:right-12 2xl:right-32"
          >
            <img
              class="mx-0 mb-0 mt-auto aspect-3/4 h-auto max-h-fit w-full max-w-full origin-bottom-right scale-[1] object-cover object-center lg:scale-[1.1] xl:scale-[1.2] 2xl:scale-[1.3]"
              src="/images/about-picture-matting.webp"
              title="形象照(去背)"
              alt="形象照(去背)"
              width="1109"
              height="1479"
              loading="lazy"
              decoding="async"
            />
          </picture>
          <!-- 第二屏  -->
          <div
            id="screen02-container"
            class="fixed left-[2rem] top-[10rem] box-border hidden h-full max-h-[calc(100dvh-14rem)] w-full max-w-[calc(100dvw-5.25rem)] flex-row flex-nowrap items-center justify-start gap-8 bg-transparent lg:left-[calc(150px+2rem+2.5%)] lg:max-w-[calc(100dvw-150px-5.25rem-5%)] xl:left-[calc(175px+2rem+3.75%)] xl:max-w-[calc(100dvw-175px-5.25rem-7.5%)] 2xl:left-[calc(200px+2rem+5%)] 2xl:max-w-[calc(100dvw-200px-5.25rem-10%)]"
          >
            <!-- 第二屏 框框 -->
            <div
              id="screen02-container-top"
              class="pointer-events-none absolute right-0 top-0 h-2 w-full origin-top-right bg-blue-400"
            ></div>
            <div
              id="screen02-container-right"
              class="pointer-events-none absolute right-0 top-0 h-full w-2 origin-bottom-right bg-blue-400"
            ></div>
            <div
              id="screen02-container-bottom"
              class="pointer-events-none absolute bottom-0 left-0 h-2 w-full origin-bottom-left bg-blue-400"
            ></div>
            <div
              id="screen02-container-left"
              class="pointer-events-none absolute bottom-0 left-0 h-full w-2 origin-top-left bg-blue-400"
            ></div>
            <!-- 第二屏 文字區域 -->
            <div
              id="screen02-text"
              class="absolute left-8 hidden h-fit w-fit max-w-[calc(100%-4rem)] -translate-y-[125%] translate-x-0 flex-col gap-0 sm:left-8 sm:-translate-y-1/2 lg:left-12 xl:left-24 2xl:left-36"
            >
              <h2
                class="m-0 inline-flex flex-col items-start justify-start gap-2 p-0 text-3xl font-black leading-none text-blue-950 sm:text-6xl"
              >
                林家丞
                <span
                  class="ml-1 inline-flex align-baseline font-Fira text-xl font-bold leading-none text-gray-800 sm:text-2xl"
                >
                  Chia-Cheng, Lin
                </span>
              </h2>
              <p
                id="screen02-text-p01"
                class="mt-3 hidden align-baseline text-xs font-medium leading-none text-gray-600 sm:text-sm"
              >
                <span class="text-base font-semibold text-gray-700 sm:text-lg">淡江大學</span> 資訊傳播學系 畢業(2009-09
                - 2013-06)
              </p>
              <p
                id="screen02-text-p02"
                class="hidden align-baseline text-xs font-medium leading-none text-gray-600 sm:text-sm"
              >
                現職 <span class="text-base font-semibold text-gray-700 sm:text-lg">1111人力銀行</span> 前端設計
              </p>
              <p
                id="screen02-text-p03"
                class="mt-2 hidden align-baseline text-xs font-medium leading-none text-gray-600 sm:text-sm"
              >
                新北新莊 / 1991.05.23 / 未婚 / 役畢
              </p>
            </div>
          </div>
          <!-- 第三屏 -->
          <div
            id="screen03-container"
            class="fixed left-0 top-16 box-border hidden h-full max-h-[calc(100dvh-4rem)] w-full max-w-[100dvw] flex-col flex-nowrap items-start justify-center gap-4 overflow-hidden bg-transparent opacity-0 lg:left-[150px] lg:max-w-[calc(100dvw-150px)] xl:left-[175px] xl:max-w-[calc(100dvw-175px)] 2xl:left-[200px] 2xl:max-w-[calc(100dvw-200px)]"
          >
            <!-- 第三屏 bg -->
            <div id="screen03-bg" class="absolute left-0 top-0 z-0 h-full w-full bg-transparent"></div>
            <!-- 第三屏 角落 -->
            <div
              id="screen03-corner-top-left"
              class="absolute right-[calc(100%-95px)] top-0 hidden h-[250px] w-[500px] origin-top-right -rotate-[15deg] scale-y-[-1] bg-blue-800 lg:h-[50px] lg:w-[100px] xl:right-[calc(100%-250px)] xl:h-[150px] xl:w-[300px] 2xl:right-[calc(100%-480px)] 2xl:h-[250px] 2xl:w-[500px]"
            ></div>
            <div
              id="screen03-corner-bottom-right"
              class="absolute bottom-[25px] right-0 hidden h-[250px] w-[500px] origin-bottom-right -rotate-[15deg] scale-y-[-1] bg-blue-800 lg:h-[50px] lg:w-[100px] xl:bottom-[75px] xl:h-[150px] xl:w-[300px] 2xl:bottom-[125px] 2xl:h-[250px] 2xl:w-[500px]"
            ></div>

            <div
              id="screen03-outside"
              class="absolute left-1/2 hidden w-[calc(100%-2rem)] -translate-x-1/2 flex-col justify-end gap-4 lg:w-4/5 xl:w-3/4 2xl:w-2/3"
            >
              <!-- 第三屏 Title -->
              <h2
                id="screen03-title"
                class="relative z-10 mx-4 my-4 flex h-14 w-fit flex-col items-start justify-start gap-2 p-0 text-3xl font-black leading-none text-gray-100 transition-all before:absolute before:z-[-1] before:block before:h-full before:w-full before:-rotate-[5deg] before:-skew-x-12 before:scale-125 before:bg-blue-600"
              >
                經歷
                <span class="ml-1 inline-flex align-baseline font-Fira text-base font-bold leading-none text-gray-200">
                  Experience
                </span>
              </h2>
              <!-- 第三屏 Content -->
              <div
                id="screen03-content"
                class="relative flex h-fit max-h-max w-full flex-col items-center justify-start gap-0 transition-all"
              >
                <div
                  id="screen03-timeline-00"
                  class="max-w-ful relative flex w-full flex-row flex-nowrap items-center justify-start gap-0 opacity-0"
                >
                  <div class="relative left-0 h-5 max-h-full w-20 max-w-full flex-shrink-0 flex-grow-0 sm:left-[40%]">
                    <div
                      class="timeline-topLine absolute left-1/2 top-0 h-0.5 w-4 origin-bottom -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-950 opacity-0"
                    ></div>
                    <div
                      class="timeline-line opacity-1 absolute left-1/2 top-1/2 h-full w-px origin-bottom -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-950"
                    ></div>
                  </div>
                </div>
                <div
                  id="screen03-timeline-01-main"
                  class="max-w-ful relative flex w-full flex-row flex-wrap items-center justify-start gap-0 opacity-0"
                >
                  <div
                    class="timeline-line absolute left-10 top-0 z-0 h-full w-px origin-top -translate-x-1/2 rounded-full bg-blue-950 opacity-0 sm:hidden"
                  ></div>
                  <div
                    class="timeline-title hidden w-full max-w-[40%] flex-col items-end justify-end pr-4 opacity-0 sm:flex"
                  >
                    <p class="hidden text-xl font-black leading-relaxed text-gray-950 sm:block lg:text-2xl">
                      1111人力銀行
                    </p>
                    <span class="hidden text-base font-bold leading-normal text-gray-700 sm:inline-block lg:text-lg"
                      >網路相關、人力派遣 / 人力供應業</span
                    >
                  </div>
                  <div
                    class="timeline-img relative aspect-square size-20 max-h-full max-w-full flex-shrink-0 flex-grow-0 overflow-hidden rounded-full border border-solid border-gray-300 bg-white p-2 opacity-0"
                  >
                    <img
                      class="size-full max-h-full max-w-full object-contain"
                      src="/images/logo-1111.svg"
                      title="1111人力銀行(全球華人股份有限公司)"
                      alt="1111人力銀行(全球華人股份有限公司)"
                      width="107"
                      height="27"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div
                    class="timeline-subtitle flex w-full max-w-[calc(100%-5rem)] flex-col items-start justify-start opacity-0 sm:max-w-[calc(60%-5rem)] sm:flex-row sm:items-center"
                  >
                    <p class="block pl-4 text-xl font-black leading-relaxed text-gray-950 sm:hidden lg:text-2xl">
                      1111人力銀行
                    </p>
                    <span
                      class="inline-block pl-4 text-base font-bold leading-normal text-gray-700 sm:hidden lg:text-lg"
                      >網路相關、人力派遣 / 人力供應業</span
                    >
                    <p
                      class="describe-txt mt-1 pl-4 text-sm font-normal leading-tight text-gray-800 sm:mt-0 lg:text-base"
                    >
                      台灣知名的人力仲介公司，提供企業與求職者的媒合服務。
                    </p>
                  </div>
                </div>
                <div
                  id="screen03-timeline-01-secondary01"
                  class="max-w-ful relative flex w-full flex-row flex-nowrap items-center justify-start gap-0 opacity-0"
                >
                  <div
                    class="absolute left-0 h-full max-h-full w-20 max-w-full flex-shrink-0 flex-grow-0 sm:left-[40%]"
                  >
                    <div
                      class="timeline-dot absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-950 opacity-0"
                    ></div>
                    <div
                      class="timeline-line absolute left-1/2 top-1/2 h-full w-px origin-top -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-950 opacity-0"
                    ></div>
                  </div>
                  <div
                    class="job-chat relative left-20 my-2 w-full max-w-[calc(100%-5rem)] rounded-md bg-gray-100 px-6 py-4 opacity-0 drop-shadow sm:left-[calc(40%+5rem)] sm:max-w-[calc(60%-5rem)]"
                  >
                    <p
                      class="mb-2 inline-flex flex-col items-baseline justify-start gap-y-1 align-baseline font-Fira text-sm font-normal leading-5 text-gray-600 xs:flex-row lg:text-base lg:leading-7"
                    >
                      <span
                        class="mr-1 inline-block w-fit gap-x-2 break-keep rounded-md bg-gray-600 px-2 py-1 font-Noto text-lg font-bold text-gray-100 lg:text-xl"
                        >前端設計
                      </span>
                      (2023/02 - Now)
                    </p>
                    <p class="ml-2 text-base font-normal leading-normal text-gray-800 lg:text-lg">
                      負責公司網站的前端開發、切版以及維護，以及支援活動專區的網站相關開發。
                    </p>
                  </div>
                </div>
                <div
                  id="screen03-timeline-01-secondary02"
                  class="relative flex w-full max-w-full flex-row flex-nowrap items-center justify-start gap-0 opacity-0"
                >
                  <div
                    class="absolute left-0 h-full max-h-full w-20 max-w-full flex-shrink-0 flex-grow-0 sm:left-[40%]"
                  >
                    <div
                      class="timeline-dot absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-950 opacity-0"
                    ></div>
                    <div
                      class="timeline-line absolute left-1/2 top-1/2 h-full w-px origin-top -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-950 opacity-0"
                    ></div>
                  </div>
                  <div
                    class="job-chat relative left-20 my-2 w-full max-w-[calc(100%-5rem)] rounded-md bg-gray-100 px-6 py-4 opacity-0 drop-shadow sm:left-[calc(40%+5rem)] sm:max-w-[calc(60%-5rem)]"
                  >
                    <p
                      class="mb-2 inline-flex flex-col items-baseline justify-start gap-y-1 align-baseline font-Fira text-sm font-normal leading-5 text-gray-600 xs:flex-row lg:text-base lg:leading-7"
                    >
                      <span
                        class="mr-1 inline-block w-fit gap-x-2 break-keep rounded-md bg-gray-600 px-2 py-1 font-Noto text-lg font-bold text-gray-100 lg:text-xl"
                        >設計師
                      </span>
                      (2020/01 - 2023/02)
                    </p>
                    <p class="ml-2 text-base font-normal leading-normal text-gray-800 lg:text-lg">
                      負責公司的網頁設計、EDM設計、DM設計 等相關設計。以及各類活動相關輸出物設計。
                    </p>
                  </div>
                </div>
                <div
                  id="screen03-timeline-02-main"
                  class="max-w-ful relative flex w-full flex-row flex-wrap items-center justify-start gap-0 opacity-0"
                >
                  <div
                    class="timeline-line absolute left-10 top-0 z-0 h-full w-px origin-top -translate-x-1/2 rounded-full bg-blue-950 opacity-0 sm:hidden"
                  ></div>
                  <div
                    class="timeline-title hidden w-full max-w-[40%] flex-col items-end justify-end pr-4 opacity-0 sm:flex"
                  >
                    <p class="hidden text-xl font-black leading-relaxed text-gray-950 sm:block lg:text-2xl">晏晟科技</p>
                    <span class="hidden text-base font-bold leading-normal text-gray-700 sm:inline-block lg:text-lg"
                      >電腦軟體服務業</span
                    >
                  </div>
                  <div
                    class="timeline-img relative aspect-square size-20 max-h-full max-w-full flex-shrink-0 flex-grow-0 overflow-hidden rounded-full border border-solid border-gray-300 bg-white p-2 opacity-0"
                  >
                    <img
                      class="size-full max-h-full max-w-full object-contain"
                      src="/images/logo-ycgis.webp"
                      title="晏晟科技股份有限公司"
                      alt="晏晟科技股份有限公司"
                      width="232"
                      height="55"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div
                    class="timeline-subtitle flex w-full max-w-[calc(100%-5rem)] flex-col items-start justify-start opacity-0 sm:max-w-[calc(60%-5rem)] sm:flex-row sm:items-center"
                  >
                    <p class="block pl-4 text-xl font-black leading-relaxed text-gray-950 sm:hidden lg:text-2xl">
                      晏晟科技
                    </p>
                    <span
                      class="inline-block pl-4 text-base font-bold leading-normal text-gray-700 sm:hidden lg:text-lg"
                      >電腦軟體服務業</span
                    >
                    <p
                      class="describe-txt mt-1 pl-4 text-sm font-normal leading-tight text-gray-800 sm:mt-0 lg:text-base"
                    >
                      從事GIS資訊軟體開發，主要承接政府機關資訊軟體開發案。
                    </p>
                  </div>
                </div>
                <div
                  id="screen03-timeline-02-secondary"
                  class="max-w-ful relative flex w-full flex-row flex-nowrap items-center justify-start gap-0 opacity-0"
                >
                  <div
                    class="absolute left-0 h-full max-h-full w-20 max-w-full flex-shrink-0 flex-grow-0 sm:left-[40%]"
                  >
                    <div
                      class="timeline-dot absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-950 opacity-0"
                    ></div>
                    <div
                      class="timeline-line absolute left-1/2 top-1/2 h-full w-px origin-top -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-950 opacity-0"
                    ></div>
                  </div>
                  <div
                    class="job-chat relative left-20 my-2 w-full max-w-[calc(100%-5rem)] rounded-md bg-gray-100 px-6 py-4 opacity-0 drop-shadow sm:left-[calc(40%+5rem)] sm:max-w-[calc(60%-5rem)]"
                  >
                    <p
                      class="mb-2 inline-flex flex-col items-baseline justify-start gap-y-1 align-baseline font-Fira text-sm font-normal leading-5 text-gray-600 xs:flex-row lg:text-base lg:leading-7"
                    >
                      <span
                        class="mr-1 inline-block w-fit gap-x-2 break-keep rounded-md bg-gray-600 px-2 py-1 font-Noto text-lg font-bold text-gray-100 lg:text-xl"
                        >網頁設計師
                      </span>
                      (2019/04 - 2019/11)
                    </p>
                    <p class="ml-2 text-base font-normal leading-normal text-gray-800 lg:text-lg">
                      負責公司的網頁設計、UI/UX設計、廣告DM設計、海報設計及展場規劃設計。
                    </p>
                  </div>
                </div>
                <div
                  id="screen03-timeline-03-main"
                  class="max-w-ful relative flex w-full flex-row flex-wrap items-center justify-start gap-0 opacity-0"
                >
                  <div
                    class="timeline-line absolute left-10 top-0 z-0 h-full w-px origin-top -translate-x-1/2 rounded-full bg-blue-950 opacity-0 sm:hidden"
                  ></div>
                  <div
                    class="timeline-title hidden w-full max-w-[40%] flex-col items-end justify-end pr-4 opacity-0 sm:flex"
                  >
                    <p class="hidden text-xl font-black leading-relaxed text-gray-950 sm:block lg:text-2xl">
                      Fluke 美國福祿克
                    </p>
                    <span class="hidden text-base font-bold leading-normal text-gray-700 sm:inline-block lg:text-lg"
                      >精密儀器相關製造業</span
                    >
                  </div>
                  <div
                    class="timeline-img relative aspect-square size-20 max-h-full max-w-full flex-shrink-0 flex-grow-0 overflow-hidden rounded-full border border-solid border-gray-300 bg-white p-2 opacity-0"
                  >
                    <img
                      class="size-full max-h-full max-w-full object-contain"
                      src="/images/logo-fluke.svg"
                      title="Fluke 美國福祿克股份有限公司"
                      alt="Fluke 美國福祿克股份有限公司"
                      width="166"
                      height="50"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div
                    class="timeline-subtitle flex w-full max-w-[calc(100%-5rem)] flex-col items-start justify-start opacity-0 sm:max-w-[calc(60%-5rem)] sm:flex-row sm:items-center"
                  >
                    <p class="block pl-4 text-xl font-black leading-relaxed text-gray-950 sm:hidden lg:text-2xl">
                      Fluke 美國福祿克
                    </p>
                    <span class="inlineblock pl-4 text-base font-bold leading-normal text-gray-700 sm:hidden lg:text-lg"
                      >精密儀器相關製造業</span
                    >
                    <p
                      class="describe-txt mt-1 pl-4 text-sm font-normal leading-tight text-gray-800 sm:mt-0 lg:text-base"
                    >
                      提供各種工業領域測試和檢測故障的優質電子儀器儀表。
                    </p>
                  </div>
                </div>
                <div
                  id="screen03-timeline-03-secondary"
                  class="max-w-ful relative flex w-full flex-row flex-nowrap items-center justify-start gap-0 opacity-0"
                >
                  <div
                    class="absolute left-0 h-full max-h-full w-20 max-w-full flex-shrink-0 flex-grow-0 sm:left-[40%]"
                  >
                    <div
                      class="timeline-dot absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-950 opacity-0"
                    ></div>
                    <div
                      class="timeline-line absolute left-1/2 top-1/2 h-full w-px origin-top -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-950 opacity-0"
                    ></div>
                  </div>
                  <div
                    class="job-chat relative left-20 my-2 w-full max-w-[calc(100%-5rem)] rounded-md bg-gray-100 px-6 py-4 opacity-0 drop-shadow sm:left-[calc(40%+5rem)] sm:max-w-[calc(60%-5rem)]"
                  >
                    <p
                      class="mb-2 inline-flex flex-col items-baseline justify-start gap-y-1 align-baseline font-Fira text-sm font-normal leading-5 text-gray-600 xs:flex-row lg:text-base lg:leading-7"
                    >
                      <span
                        class="mr-1 inline-block w-fit gap-x-2 break-keep rounded-md bg-gray-600 px-2 py-1 font-Noto text-lg font-bold text-gray-100 lg:text-xl"
                        >市場行銷
                      </span>
                      (2015/05 - 2018/06)
                    </p>
                    <p class="ml-2 text-base font-normal leading-normal text-gray-800 lg:text-lg">
                      型錄設計、廣告DM設計、E-DM製作及發送、網站修改以及新產品上市後的相關行銷活動企劃。另外也負責開設及管理臉書粉絲專頁。
                    </p>
                  </div>
                </div>
                <div
                  id="screen03-timeline-04-main"
                  class="max-w-ful relative flex w-full flex-row flex-nowrap items-center justify-start gap-0 opacity-0"
                >
                  <div
                    class="timeline-title hidden w-full max-w-[40%] flex-col items-end justify-end pr-4 opacity-0 sm:flex"
                  >
                    <p class="hidden text-xl font-black leading-relaxed text-gray-950 sm:block lg:text-2xl">兵役</p>
                  </div>
                  <div
                    class="absolute left-0 h-full max-h-full w-20 max-w-full flex-shrink-0 flex-grow-0 sm:left-[40%]"
                  >
                    <div
                      class="timeline-dot absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-950 opacity-0"
                    ></div>
                    <div
                      class="timeline-line absolute left-1/2 top-1/2 h-full w-px origin-top -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-950 opacity-0"
                    ></div>
                  </div>
                  <div
                    class="timeline-subtitle relative left-20 my-2 w-full max-w-[calc(100%-5rem)] opacity-0 sm:max-w-[calc(60%-5rem)]"
                  >
                    <p class="block pl-4 text-xl font-black leading-relaxed text-gray-950 sm:hidden lg:text-2xl">
                      兵役
                    </p>
                    <p
                      class="mb-2 inline-flex flex-row items-baseline justify-start pl-4 align-baseline font-Fira text-sm font-normal leading-5 text-gray-600 sm:pl-0 lg:text-base lg:leading-7"
                    >
                      <span
                        class="mr-1 inline-block w-fit gap-x-2 break-keep rounded-md bg-gray-600 px-2 py-1 font-Noto text-lg font-bold text-gray-100 lg:text-xl"
                        >一般常備役
                      </span>
                      (2013/12 - 2014/11)
                    </p>
                  </div>
                </div>
                <div
                  id="screen03-timeline-05-main"
                  class="max-w-ful relative flex w-full flex-row flex-wrap items-center justify-start gap-0 opacity-0"
                >
                  <div
                    class="timeline-line absolute left-10 top-0 z-0 h-full w-px origin-top -translate-x-1/2 rounded-full bg-blue-950 opacity-0 sm:hidden"
                  ></div>
                  <div
                    class="timeline-title hidden w-full max-w-[40%] flex-col items-end justify-end pr-4 opacity-0 sm:flex"
                  >
                    <p class="text-xl font-black leading-relaxed text-gray-950 lg:text-2xl">淡江大學</p>
                  </div>
                  <div
                    class="timeline-img relative aspect-square size-20 max-h-full max-w-full flex-shrink-0 flex-grow-0 overflow-hidden rounded-full border border-solid border-gray-300 bg-white p-2 opacity-0"
                  >
                    <img
                      class="size-full max-h-full max-w-full object-contain"
                      src="/images/logo-Tamkang.svg"
                      title="淡江大學 Tamkang University"
                      alt="淡江大學 Tamkang University"
                      width="50"
                      height="50"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div
                    class="timeline-subtitle relative left-0 my-2 block w-full max-w-[calc(100%-5rem)] opacity-0 sm:hidden"
                  >
                    <p class="block pl-4 text-xl font-black leading-relaxed text-gray-950 sm:hidden lg:text-2xl">
                      淡江大學
                    </p>
                  </div>
                </div>
                <div
                  id="screen03-timeline-05-secondary"
                  class="max-w-ful relative flex w-full flex-row flex-nowrap items-center justify-start gap-0 opacity-0"
                >
                  <div
                    class="absolute left-0 aspect-square h-full max-h-full w-20 max-w-full flex-shrink-0 flex-grow-0 sm:left-[40%]"
                  >
                    <div
                      class="timeline-dot absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-950 opacity-0"
                    ></div>
                    <div
                      class="timeline-line absolute left-1/2 top-1/2 h-full w-px origin-top -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-950 opacity-0"
                    ></div>
                  </div>
                  <div
                    class="job-chat relative left-20 my-2 w-full max-w-[calc(100%-5rem)] rounded-md bg-gray-100 px-6 py-4 opacity-0 drop-shadow sm:left-[calc(40%+5rem)] sm:max-w-[calc(60%-5rem)]"
                  >
                    <p
                      class="mb-2 inline-flex flex-col items-baseline justify-start gap-y-1 align-baseline font-Fira text-sm font-normal leading-5 text-gray-600 xs:flex-row lg:text-base lg:leading-7"
                    >
                      <span
                        class="mr-1 inline-block w-fit gap-x-2 break-keep rounded-md bg-gray-600 px-2 py-1 font-Noto text-lg font-bold text-gray-100 lg:text-xl"
                        >資訊傳播學系
                      </span>
                      (2009/09 - 2013/06)
                    </p>
                    <p class="ml-2 text-base font-normal leading-normal text-gray-800 lg:text-lg">
                      跨學門、跨領域的系所。在學期間，學習到了網頁設計、電腦繪圖、影像編輯、影片剪輯及電腦動畫等多媒體製作的能力。另外還有關於行銷學、電子商務及資訊傳播實務的相關課程。
                    </p>
                  </div>
                </div>
                <div
                  id="screen03-timeline-06-main"
                  class="max-w-ful relative flex w-full flex-row flex-nowrap items-center justify-start gap-0 opacity-0"
                >
                  <div
                    class="timeline-title my-2 hidden w-full max-w-[40%] flex-col items-end justify-end pr-4 opacity-0 sm:flex"
                  >
                    <p class="hidden text-xl font-black leading-relaxed text-gray-950 sm:block lg:text-2xl">
                      一切的起點
                    </p>
                  </div>
                  <div
                    class="absolute left-0 h-full max-h-full w-20 max-w-full flex-shrink-0 flex-grow-0 sm:left-[40%]"
                  >
                    <div
                      class="timeline-dot absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-950 opacity-0"
                    ></div>
                    <div
                      class="timeline-line absolute left-1/2 top-0 h-1/2 w-px origin-top -translate-x-1/2 translate-y-0 rounded-full bg-blue-950 opacity-0"
                    ></div>
                  </div>
                  <div
                    class="timeline-subtitle relative left-20 my-2 w-full max-w-[calc(100%-5rem)] opacity-0 sm:left-20 sm:max-w-[calc(60%-5rem)]"
                  >
                    <p class="block pl-4 text-xl font-black leading-relaxed text-gray-950 sm:hidden lg:text-2xl">
                      一切的起點
                    </p>
                    <p
                      class="inline-flex flex-col items-baseline justify-start gap-y-2 pl-4 align-baseline font-Fira text-sm font-normal leading-5 text-gray-600 sm:flex-row sm:pl-0 lg:text-base lg:leading-7"
                    >
                      <span
                        class="mr-1 inline-block w-fit gap-x-2 break-keep rounded-md bg-gray-600 px-2 py-1 font-Noto text-lg font-bold text-gray-100 lg:text-xl"
                        >雙子座 / 羊
                      </span>
                      (1991/05/23)
                    </p>
                  </div>
                </div>
                <div
                  id="screen03-timeline-06-secondary"
                  class="max-w-ful flex w-full flex-row flex-nowrap items-center justify-start gap-0 opacity-0"
                >
                  <div
                    class="timeline-subtitle relative left-20 w-full max-w-[calc(100%-5rem)] opacity-0 sm:left-[calc(40%+5rem)] sm:max-w-[calc(60%-5rem)]"
                  >
                    <p class="ml-0 pl-4 text-base font-normal leading-normal text-gray-800 sm:pl-0 lg:text-lg">
                      懵懵懂懂的我，從台北縣新莊市<span class="text-sm"> (現 新北市新莊區) </span
                      >，爽颯登場!<br />從未知 到探索 的旅程，從這開始啟程。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 第四屏 -->
          <div
            id="screen04-container"
            class="fixed left-1/2 mx-auto hidden h-full max-h-[calc(100dvh-6rem)] w-[calc(100%-2rem)] max-w-[100dvw] origin-bottom -translate-x-1/2 flex-col items-start justify-center gap-y-2 opacity-0 lg:left-[calc((100dvw+150px)/2)] lg:max-w-[768px] xl:left-[calc((100dvw+175px)/2)] xl:max-w-[1024px] 2xl:left-[calc((100dvw+200px)/2)] 2xl:max-w-[1280px]"
          >
            <p class="block h-9 w-full max-w-full text-2xl font-bold leading-normal text-gray-800">
              技能樹 <span class="inline text-lg text-gray-600">Skill Tree</span>
            </p>
            <div class="relative flex h-full max-h-[calc(100%-2.25rem)] w-full max-w-full flex-col gap-2 lg:gap-4">
              <div
                id="screen04-skill01"
                class="flex h-full max-h-[calc((100%-1.5rem)/5*2)] w-full max-w-full flex-col items-start justify-start rounded-md border-2 border-solid border-[#3590F3] bg-gradient-to-b from-[#78B5F7] to-[#0D77E7] p-2 sm:max-h-[calc((100%-1.5rem)/4)] sm:p-4 lg:max-h-[calc((100%-3rem)/4)]"
              >
                <p
                  class="text-stroke text-stroke-01 mb-2 block w-fit max-w-full text-base font-semibold text-slate-100"
                  data-stroke="前端技能"
                >
                  前端技能
                </p>
                <div
                  class="relative m-auto flex h-[calc(100%-2rem)] max-h-full w-full max-w-full flex-wrap items-start justify-start gap-x-2 gap-y-0 lg:gap-x-4"
                >
                  <div
                    class="group relative flex aspect-square h-[calc((100%-0.5rem)/2)] max-h-full w-auto max-w-[calc((100%-2rem)/5)] cursor-auto flex-col items-center justify-center sm:h-full sm:max-w-[calc((100%-4.5rem)/10)] lg:max-w-[calc((100%-9rem)/10)]"
                  >
                    <img
                      class="absolute aspect-square size-full max-h-full max-w-full object-contain object-bottom opacity-100 transition-all duration-500 group-hover:opacity-0 sm:object-center"
                      src="/images/skills-html-b.svg"
                      title="Html"
                      alt="Html"
                      width="40"
                      height="40"
                      decoding="async"
                      loading="lazy"
                    />
                    <img
                      class="absolute aspect-square size-full max-h-full max-w-full object-contain object-bottom opacity-0 transition-all duration-500 group-hover:opacity-100 sm:object-center"
                      src="/images/skills-html-c.svg"
                      title="Html"
                      alt="Html"
                      width="40"
                      height="40"
                      decoding="async"
                      loading="lazy"
                    />
                  </div>
                  <div
                    class="group relative flex aspect-square h-[calc((100%-0.5rem)/2)] max-h-full w-auto max-w-[calc((100%-2rem)/5)] cursor-auto flex-col items-center justify-center sm:h-full sm:max-w-[calc((100%-4.5rem)/10)] lg:max-w-[calc((100%-9rem)/10)]"
                  >
                    <img
                      class="absolute aspect-square size-full max-h-full max-w-full object-contain object-bottom opacity-100 transition-all duration-500 group-hover:opacity-0 sm:object-center"
                      src="/images/skills-css-b.svg"
                      title="Css"
                      alt="Css"
                      width="40"
                      height="40"
                      decoding="async"
                      loading="lazy"
                    />
                    <img
                      class="absolute aspect-square size-full max-h-full max-w-full object-contain object-bottom opacity-0 transition-all duration-500 group-hover:opacity-100 sm:object-center"
                      src="/images/skills-css-c.svg"
                      title="Css"
                      alt="Css"
                      width="40"
                      height="40"
                      decoding="async"
                      loading="lazy"
                    />
                  </div>
                  <div
                    class="group relative flex aspect-square h-[calc((100%-0.5rem)/2)] max-h-full w-auto max-w-[calc((100%-2rem)/5)] cursor-auto flex-col items-center justify-center sm:h-full sm:max-w-[calc((100%-4.5rem)/10)] lg:max-w-[calc((100%-9rem)/10)]"
                  >
                    <img
                      class="absolute aspect-square size-full max-h-full max-w-full object-contain object-bottom opacity-100 transition-all duration-500 group-hover:opacity-0 sm:object-center"
                      src="/images/skills-javascript-b.svg"
                      title="Javascript"
                      alt="Javascript"
                      width="40"
                      height="40"
                      decoding="async"
                      loading="lazy"
                    />
                    <img
                      class="absolute aspect-square size-full max-h-full max-w-full object-contain object-bottom opacity-0 transition-all duration-500 group-hover:opacity-100 sm:object-center"
                      src="/images/skills-javascript-c.svg"
                      title="Javascript"
                      alt="Javascript"
                      width="40"
                      height="40"
                      decoding="async"
                      loading="lazy"
                    />
                  </div>
                  <div
                    class="group relative flex aspect-square h-[calc((100%-0.5rem)/2)] max-h-full w-auto max-w-[calc((100%-2rem)/5)] cursor-auto flex-col items-center justify-center sm:h-full sm:max-w-[calc((100%-4.5rem)/10)] lg:max-w-[calc((100%-9rem)/10)]"
                  >
                    <img
                      class="absolute aspect-square size-full max-h-full max-w-full object-contain object-bottom opacity-100 transition-all duration-500 group-hover:opacity-0 sm:object-center"
                      src="/images/skills-sass_scss-b.svg"
                      title="Sass / Scss"
                      alt="Sass / Scss"
                      width="40"
                      height="40"
                      decoding="async"
                      loading="lazy"
                    />
                    <img
                      class="absolute aspect-square size-full max-h-full max-w-full object-contain object-bottom opacity-0 transition-all duration-500 group-hover:opacity-100 sm:object-center"
                      src="/images/skills-sass_scss-c.svg"
                      title="Sass / Scss"
                      alt="Sass / Scss"
                      width="40"
                      height="40"
                      decoding="async"
                      loading="lazy"
                    />
                  </div>
                  <div
                    class="group relative flex aspect-square h-[calc((100%-0.5rem)/2)] max-h-full w-auto max-w-[calc((100%-2rem)/5)] cursor-auto flex-col items-center justify-center sm:h-full sm:max-w-[calc((100%-4.5rem)/10)] lg:max-w-[calc((100%-9rem)/10)]"
                  >
                    <img
                      class="absolute aspect-square size-full max-h-full max-w-full object-contain object-bottom opacity-100 transition-all duration-500 group-hover:opacity-0 sm:object-center"
                      src="/images/skills-git-b.svg"
                      title="Git"
                      alt="Git"
                      width="40"
                      height="40"
                      decoding="async"
                      loading="lazy"
                    />
                    <img
                      class="absolute aspect-square size-full max-h-full max-w-full object-contain object-bottom opacity-0 transition-all duration-500 group-hover:opacity-100 sm:object-center"
                      src="/images/skills-git-c.svg"
                      title="Git"
                      alt="Git"
                      width="40"
                      height="40"
                      decoding="async"
                      loading="lazy"
                    />
                  </div>
                  <div class="block h-2 w-full max-w-full sm:hidden"></div>
                  <div
                    class="group relative flex aspect-square h-[calc((100%-0.5rem)/2)] max-h-full w-auto max-w-[calc((100%-2rem)/5)] cursor-auto flex-col items-center justify-center sm:h-full sm:max-w-[calc((100%-4.5rem)/10)] lg:max-w-[calc((100%-9rem)/10)]"
                  >
                    <img
                      class="absolute aspect-square size-full max-h-full max-w-full object-contain object-top opacity-100 transition-all duration-500 group-hover:opacity-0 sm:object-center"
                      src="/images/skills-typescript-b.svg"
                      title="Typescript"
                      alt="Typescript"
                      width="40"
                      height="40"
                      decoding="async"
                      loading="lazy"
                    />
                    <img
                      class="absolute aspect-square size-full max-h-full max-w-full object-contain object-top opacity-0 transition-all duration-500 group-hover:opacity-100 sm:object-center"
                      src="/images/skills-typescript-c.svg"
                      title="Typescript"
                      alt="Typescript"
                      width="40"
                      height="40"
                      decoding="async"
                      loading="lazy"
                    />
                  </div>
                  <div
                    class="group relative flex aspect-square h-[calc((100%-0.5rem)/2)] max-h-full w-auto max-w-[calc((100%-2rem)/5)] cursor-auto flex-col items-center justify-center sm:h-full sm:max-w-[calc((100%-4.5rem)/10)] lg:max-w-[calc((100%-9rem)/10)]"
                  >
                    <img
                      class="absolute aspect-square size-full max-h-full max-w-full object-contain object-top opacity-100 transition-all duration-500 group-hover:opacity-0 sm:object-center"
                      src="/images/skills-bootstrap-b.svg"
                      title="Bootstrap"
                      alt="Bootstrap"
                      width="40"
                      height="40"
                      decoding="async"
                      loading="lazy"
                    />
                    <img
                      class="absolute aspect-square size-full max-h-full max-w-full object-contain object-top opacity-0 transition-all duration-500 group-hover:opacity-100 sm:object-center"
                      src="/images/skills-bootstrap-c.svg"
                      title="Bootstrap"
                      alt="Bootstrap"
                      width="40"
                      height="40"
                      decoding="async"
                      loading="lazy"
                    />
                  </div>
                  <div
                    class="group relative flex aspect-square h-[calc((100%-0.5rem)/2)] max-h-full w-auto max-w-[calc((100%-2rem)/5)] cursor-auto flex-col items-center justify-center sm:h-full sm:max-w-[calc((100%-4.5rem)/10)] lg:max-w-[calc((100%-9rem)/10)]"
                  >
                    <img
                      class="absolute aspect-square size-full max-h-full max-w-full object-contain object-top opacity-100 transition-all duration-500 group-hover:opacity-0 sm:object-center"
                      src="/images/skills-tailwind-b.svg"
                      title="Tailwind"
                      alt="Tailwind"
                      width="40"
                      height="40"
                      decoding="async"
                      loading="lazy"
                    />
                    <img
                      class="absolute aspect-square size-full max-h-full max-w-full object-contain object-top opacity-0 transition-all duration-500 group-hover:opacity-100 sm:object-center"
                      src="/images/skills-tailwind-c.svg"
                      title="Tailwind"
                      alt="Tailwind"
                      width="40"
                      height="40"
                      decoding="async"
                      loading="lazy"
                    />
                  </div>
                  <div
                    class="group relative flex aspect-square h-[calc((100%-0.5rem)/2)] max-h-full w-auto max-w-[calc((100%-2rem)/5)] cursor-auto flex-col items-center justify-center sm:h-full sm:max-w-[calc((100%-4.5rem)/10)] lg:max-w-[calc((100%-9rem)/10)]"
                  >
                    <img
                      class="absolute aspect-square size-full max-h-full max-w-full object-contain object-top opacity-100 transition-all duration-500 group-hover:opacity-0 sm:object-center"
                      src="/images/skills-vue-b.svg"
                      title="Vue"
                      alt="Vue"
                      width="40"
                      height="40"
                      decoding="async"
                      loading="lazy"
                    />
                    <img
                      class="absolute aspect-square size-full max-h-full max-w-full object-contain object-top opacity-0 transition-all duration-500 group-hover:opacity-100 sm:object-center"
                      src="/images/skills-vue-c.svg"
                      title="Vue"
                      alt="Vue"
                      width="40"
                      height="40"
                      decoding="async"
                      loading="lazy"
                    />
                  </div>
                  <div
                    class="group relative flex aspect-square h-[calc((100%-0.5rem)/2)] max-h-full w-auto max-w-[calc((100%-2rem)/5)] cursor-auto flex-col items-center justify-center sm:h-full sm:max-w-[calc((100%-4.5rem)/10)] lg:max-w-[calc((100%-9rem)/10)]"
                  >
                    <img
                      class="absolute aspect-square size-full max-h-full max-w-full object-contain object-top opacity-100 transition-all duration-500 group-hover:opacity-0 sm:object-center"
                      src="/images/skills-nuxt-b.svg"
                      title="Nuxt"
                      alt="Nuxt"
                      width="40"
                      height="40"
                      decoding="async"
                      loading="lazy"
                    />
                    <img
                      class="absolute aspect-square size-full max-h-full max-w-full object-contain object-top opacity-0 transition-all duration-500 group-hover:opacity-100 sm:object-center"
                      src="/images/skills-nuxt-c.svg"
                      title="Nuxt"
                      alt="Nuxt"
                      width="40"
                      height="40"
                      decoding="async"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div
                id="screen04-skill02"
                class="flex h-full max-h-[calc((100%-1.5rem)/5)] w-full max-w-full flex-col items-start justify-start rounded-md border-2 border-solid border-[#1B998B] bg-gradient-to-b from-[#25D0BC] to-[#12685E] p-2 sm:max-h-[calc((100%-1.5rem)/4)] sm:p-4 lg:max-h-[calc((100%-3rem)/4)]"
              >
                <p
                  class="text-stroke text-stroke-02 mb-2 block w-fit max-w-full text-base font-semibold text-slate-100"
                  data-stroke="設計技能"
                >
                  設計技能
                </p>
                <div
                  class="relative m-auto flex h-[calc(100%-2rem)] max-h-full w-full max-w-full flex-wrap items-start justify-start gap-2 lg:gap-4"
                >
                  <div
                    class="group relative flex aspect-square h-full max-h-full w-auto max-w-[calc((100%-2.5rem)/6)] cursor-auto flex-col items-center justify-center sm:max-w-[calc((100%-4.5rem)/10)] lg:max-w-[calc((100%-9rem)/10)]"
                  >
                    <img
                      class="absolute aspect-square size-full max-h-full max-w-full object-contain opacity-100 transition-all duration-500 group-hover:opacity-0"
                      src="/images/skills-photoshop-b.svg"
                      title="Photoshop"
                      alt="Photoshop"
                      width="40"
                      height="40"
                      decoding="async"
                      loading="lazy"
                    />
                    <img
                      class="absolute aspect-square size-full max-h-full max-w-full object-contain opacity-0 transition-all duration-500 group-hover:opacity-100"
                      src="/images/skills-photoshop-c.svg"
                      title="Photoshop"
                      alt="Photoshop"
                      width="40"
                      height="40"
                      decoding="async"
                      loading="lazy"
                    />
                  </div>
                  <div
                    class="group relative flex aspect-square h-full max-h-full w-auto max-w-[calc((100%-2.5rem)/6)] cursor-auto flex-col items-center justify-center sm:max-w-[calc((100%-4.5rem)/10)] lg:max-w-[calc((100%-9rem)/10)]"
                  >
                    <img
                      class="absolute aspect-square size-full max-h-full max-w-full object-contain opacity-100 transition-all duration-500 group-hover:opacity-0"
                      src="/images/skills-illustrator-b.svg"
                      title="Illustrator"
                      alt="Illustrator"
                      width="40"
                      height="40"
                      decoding="async"
                      loading="lazy"
                    />
                    <img
                      class="absolute aspect-square size-full max-h-full max-w-full object-contain opacity-0 transition-all duration-500 group-hover:opacity-100"
                      src="/images/skills-illustrator-c.svg"
                      title="Illustrator"
                      alt="Illustrator"
                      width="40"
                      height="40"
                      decoding="async"
                      loading="lazy"
                    />
                  </div>
                  <div
                    class="group relative flex aspect-square h-full max-h-full w-auto max-w-[calc((100%-2.5rem)/6)] cursor-auto flex-col items-center justify-center sm:max-w-[calc((100%-4.5rem)/10)] lg:max-w-[calc((100%-9rem)/10)]"
                  >
                    <img
                      class="absolute aspect-square size-full max-h-full max-w-full object-contain opacity-100 transition-all duration-500 group-hover:opacity-0"
                      src="/images/skills-figma-b.svg"
                      title="Figma"
                      alt="Figma"
                      width="40"
                      height="40"
                      decoding="async"
                      loading="lazy"
                    />
                    <img
                      class="absolute aspect-square size-full max-h-full max-w-full object-contain opacity-0 transition-all duration-500 group-hover:opacity-100"
                      src="/images/skills-figma-c.svg"
                      title="Figma"
                      alt="Figma"
                      width="40"
                      height="40"
                      decoding="async"
                      loading="lazy"
                    />
                  </div>
                  <div
                    class="group relative flex aspect-square h-full max-h-full w-auto max-w-[calc((100%-2.5rem)/6)] cursor-auto flex-col items-center justify-center sm:max-w-[calc((100%-4.5rem)/10)] lg:max-w-[calc((100%-9rem)/10)]"
                  >
                    <img
                      class="absolute aspect-square size-full max-h-full max-w-full object-contain opacity-100 transition-all duration-500 group-hover:opacity-0"
                      src="/images/skills-indesign-b.svg"
                      title="InDesign"
                      alt="InDesign"
                      width="40"
                      height="40"
                      decoding="async"
                      loading="lazy"
                    />
                    <img
                      class="absolute aspect-square size-full max-h-full max-w-full object-contain opacity-0 transition-all duration-500 group-hover:opacity-100"
                      src="/images/skills-indesign-c.svg"
                      title="InDesign"
                      alt="InDesign"
                      width="40"
                      height="40"
                      decoding="async"
                      loading="lazy"
                    />
                  </div>
                  <div
                    class="group relative flex aspect-square h-full max-h-full w-auto max-w-[calc((100%-2.5rem)/6)] cursor-auto flex-col items-center justify-center sm:max-w-[calc((100%-4.5rem)/10)] lg:max-w-[calc((100%-9rem)/10)]"
                  >
                    <img
                      class="absolute aspect-square size-full max-h-full max-w-full object-contain opacity-100 transition-all duration-500 group-hover:opacity-0"
                      src="/images/skills-premiere_pro-b.svg"
                      title="Premiere Pro"
                      alt="Premiere Pro"
                      width="40"
                      height="40"
                      decoding="async"
                      loading="lazy"
                    />
                    <img
                      class="absolute aspect-square size-full max-h-full max-w-full object-contain opacity-0 transition-all duration-500 group-hover:opacity-100"
                      src="/images/skills-premiere_pro-c.svg"
                      title="Premiere Pro"
                      alt="Premiere Pro"
                      width="40"
                      height="40"
                      decoding="async"
                      loading="lazy"
                    />
                  </div>
                  <div
                    class="group relative flex aspect-square h-full max-h-full w-auto max-w-[calc((100%-2.5rem)/6)] cursor-auto flex-col items-center justify-center sm:max-w-[calc((100%-4.5rem)/10)] lg:max-w-[calc((100%-9rem)/10)]"
                  >
                    <img
                      class="absolute aspect-square size-full max-h-full max-w-full object-contain opacity-100 transition-all duration-500 group-hover:opacity-0"
                      src="/images/skills-after_effects-b.svg"
                      title="After Effects"
                      alt="After Effects"
                      width="40"
                      height="40"
                      decoding="async"
                      loading="lazy"
                    />
                    <img
                      class="absolute aspect-square size-full max-h-full max-w-full object-contain opacity-0 transition-all duration-500 group-hover:opacity-100"
                      src="/images/skills-after_effects-c.svg"
                      title="After Effects"
                      alt="After Effects"
                      width="40"
                      height="40"
                      decoding="async"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div
                id="screen04-skill03"
                class="flex h-full max-h-[calc((100%-1.5rem)/5)] w-full max-w-full flex-col items-start justify-start rounded-md border-2 border-solid border-[#BB4430] bg-gradient-to-b from-[#D56F5D] to-[#923626] p-2 sm:max-h-[calc((100%-1.5rem)/4)] sm:p-4 lg:max-h-[calc((100%-3rem)/4)]"
              >
                <p
                  class="text-stroke text-stroke-03 mb-2 block w-fit max-w-full text-base font-semibold text-slate-100"
                  data-stroke="辦公室技能"
                >
                  辦公室技能
                </p>
                <div
                  class="relative m-auto flex h-[calc(100%-2rem)] max-h-full w-full max-w-full flex-wrap items-start justify-start gap-2 lg:gap-4"
                >
                  <div
                    class="group relative flex aspect-square h-full max-h-full w-auto max-w-[calc((100%-1rem)/3)] cursor-auto flex-col items-center justify-center sm:max-w-[calc((100%-4.5rem)/10)] lg:max-w-[calc((100%-9rem)/10)]"
                  >
                    <img
                      class="absolute aspect-square size-full max-h-full max-w-full object-contain opacity-100 transition-all duration-500 group-hover:opacity-0"
                      src="/images/skills-word-b.svg"
                      title="Word"
                      alt="Word"
                      width="40"
                      height="40"
                      decoding="async"
                      loading="lazy"
                    />
                    <img
                      class="absolute aspect-square size-full max-h-full max-w-full object-contain opacity-0 transition-all duration-500 group-hover:opacity-100"
                      src="/images/skills-word-c.svg"
                      title="Word"
                      alt="Word"
                      width="40"
                      height="40"
                      decoding="async"
                      loading="lazy"
                    />
                  </div>
                  <div
                    class="group relative flex aspect-square h-full max-h-full w-auto max-w-[calc((100%-1rem)/3)] cursor-auto flex-col items-center justify-center sm:max-w-[calc((100%-4.5rem)/10)] lg:max-w-[calc((100%-9rem)/10)]"
                  >
                    <img
                      class="absolute aspect-square size-full max-h-full max-w-full object-contain opacity-100 transition-all duration-500 group-hover:opacity-0"
                      src="/images/skills-excel-b.svg"
                      title="Excel"
                      alt="Excel"
                      width="40"
                      height="40"
                      decoding="async"
                      loading="lazy"
                    />
                    <img
                      class="absolute aspect-square size-full max-h-full max-w-full object-contain opacity-0 transition-all duration-500 group-hover:opacity-100"
                      src="/images/skills-excel-c.svg"
                      title="Excel"
                      alt="Excel"
                      width="40"
                      height="40"
                      decoding="async"
                      loading="lazy"
                    />
                  </div>
                  <div
                    class="group relative flex aspect-square h-full max-h-full w-auto max-w-[calc((100%-1rem)/3)] cursor-auto flex-col items-center justify-center sm:max-w-[calc((100%-4.5rem)/10)] lg:max-w-[calc((100%-9rem)/10)]"
                  >
                    <img
                      class="absolute aspect-square size-full max-h-full max-w-full object-contain opacity-100 transition-all duration-500 group-hover:opacity-0"
                      src="/images/skills-powerpoint-b.svg"
                      title="Powerpoint"
                      alt="Powerpoint"
                      width="40"
                      height="40"
                      decoding="async"
                      loading="lazy"
                    />
                    <img
                      class="absolute aspect-square size-full max-h-full max-w-full object-contain opacity-0 transition-all duration-500 group-hover:opacity-100"
                      src="/images/skills-powerpoint-c.svg"
                      title="Powerpoint"
                      alt="Powerpoint"
                      width="40"
                      height="40"
                      decoding="async"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div
                id="screen04-skill04"
                class="flex h-full max-h-[calc((100%-1.5rem)/5)] w-full max-w-full flex-col items-start justify-start rounded-md border-2 border-solid border-[#231F20] bg-gradient-to-b from-[#4C4345] to-[#0B0A0A] p-2 sm:max-h-[calc((100%-1.5rem)/4)] sm:p-4 lg:max-h-[calc((100%-3rem)/4)]"
              >
                <p
                  class="text-stroke text-stroke-04 mb-2 block w-fit max-w-full text-base font-semibold text-slate-100"
                  data-stroke="語言能力"
                >
                  語言能力
                </p>
                <div
                  class="relative m-auto my-auto flex h-fit max-h-[calc(100%-2rem)] w-full max-w-full flex-wrap items-start justify-start gap-x-2 gap-y-0 lg:gap-x-4"
                >
                  <div
                    class="relative m-auto my-auto flex h-6 max-h-full w-full max-w-[calc((100%-0.5rem)/2)] flex-wrap items-start justify-start gap-0 lg:max-w-[calc((100%-3rem)/4)]"
                  >
                    <span
                      class="absolute left-0 block h-3 translate-x-0 break-keep text-xs font-thin leading-none tracking-tighter text-slate-100 after:absolute after:left-0 after:block after:h-1 after:w-0.5 after:translate-x-0 after:bg-white"
                      >不懂</span
                    >
                    <span
                      class="absolute left-1/3 block h-3 -translate-x-1/2 break-keep text-xs font-thin leading-none tracking-tighter text-slate-100 after:absolute after:left-1/2 after:block after:h-1 after:w-0.5 after:-translate-x-1/2 after:bg-white"
                      >略懂</span
                    >
                    <span
                      class="absolute left-2/3 block h-3 -translate-x-1/2 break-keep text-xs font-thin leading-none tracking-tighter text-slate-100 after:absolute after:left-1/2 after:block after:h-1 after:w-0.5 after:-translate-x-1/2 after:bg-white"
                      >中等</span
                    >
                    <span
                      class="absolute left-full block h-3 -translate-x-full break-keep text-xs font-thin leading-none tracking-tighter text-slate-100 after:absolute after:left-full after:block after:h-1 after:w-0.5 after:-translate-x-full after:bg-white"
                      >精通</span
                    >
                  </div>
                  <div
                    class="relative m-auto my-auto flex h-6 max-h-full w-full max-w-[calc((100%-0.5rem)/2)] flex-wrap items-start justify-start gap-0 lg:max-w-[calc((100%-3rem)/4)]"
                  >
                    <span
                      class="absolute left-0 block h-3 translate-x-0 break-keep text-xs font-thin leading-none tracking-tighter text-slate-100 after:absolute after:left-0 after:block after:h-1 after:w-0.5 after:translate-x-0 after:bg-white"
                      >不懂</span
                    >
                    <span
                      class="absolute left-1/3 block h-3 -translate-x-1/2 break-keep text-xs font-thin leading-none tracking-tighter text-slate-100 after:absolute after:left-1/2 after:block after:h-1 after:w-0.5 after:-translate-x-1/2 after:bg-white"
                      >略懂</span
                    >
                    <span
                      class="absolute left-2/3 block h-3 -translate-x-1/2 break-keep text-xs font-thin leading-none tracking-tighter text-slate-100 after:absolute after:left-1/2 after:block after:h-1 after:w-0.5 after:-translate-x-1/2 after:bg-white"
                      >中等</span
                    >
                    <span
                      class="absolute left-full block h-3 -translate-x-full break-keep text-xs font-thin leading-none tracking-tighter text-slate-100 after:absolute after:left-full after:block after:h-1 after:w-0.5 after:-translate-x-full after:bg-white"
                      >精通</span
                    >
                  </div>
                  <div
                    class="relative m-auto my-auto hidden h-6 max-h-full w-full max-w-[calc((100%-3rem)/4)] flex-wrap items-start justify-start gap-0 lg:flex"
                  >
                    <span
                      class="absolute left-0 block h-3 translate-x-0 break-keep text-xs font-thin leading-none tracking-tighter text-slate-100 after:absolute after:left-0 after:block after:h-1 after:w-0.5 after:translate-x-0 after:bg-white"
                      >不懂</span
                    >
                    <span
                      class="absolute left-1/3 block h-3 -translate-x-1/2 break-keep text-xs font-thin leading-none tracking-tighter text-slate-100 after:absolute after:left-1/2 after:block after:h-1 after:w-0.5 after:-translate-x-1/2 after:bg-white"
                      >略懂</span
                    >
                    <span
                      class="absolute left-2/3 block h-3 -translate-x-1/2 break-keep text-xs font-thin leading-none tracking-tighter text-slate-100 after:absolute after:left-1/2 after:block after:h-1 after:w-0.5 after:-translate-x-1/2 after:bg-white"
                      >中等</span
                    >
                    <span
                      class="absolute left-full block h-3 -translate-x-full break-keep text-xs font-thin leading-none tracking-tighter text-slate-100 after:absolute after:left-full after:block after:h-1 after:w-0.5 after:-translate-x-full after:bg-white"
                      >精通</span
                    >
                  </div>
                  <div
                    class="relative m-auto my-auto hidden h-6 max-h-full w-full max-w-[calc((100%-3rem)/4)] flex-wrap items-start justify-start gap-0 lg:flex"
                  >
                    <span
                      class="absolute left-0 block h-3 translate-x-0 break-keep text-xs font-thin leading-none tracking-tighter text-slate-100 after:absolute after:left-0 after:block after:h-1 after:w-0.5 after:translate-x-0 after:bg-white"
                      >不懂</span
                    >
                    <span
                      class="absolute left-1/3 block h-3 -translate-x-1/2 break-keep text-xs font-thin leading-none tracking-tighter text-slate-100 after:absolute after:left-1/2 after:block after:h-1 after:w-0.5 after:-translate-x-1/2 after:bg-white"
                      >略懂</span
                    >
                    <span
                      class="absolute left-2/3 block h-3 -translate-x-1/2 break-keep text-xs font-thin leading-none tracking-tighter text-slate-100 after:absolute after:left-1/2 after:block after:h-1 after:w-0.5 after:-translate-x-1/2 after:bg-white"
                      >中等</span
                    >
                    <span
                      class="absolute left-full block h-3 -translate-x-full break-keep text-xs font-thin leading-none tracking-tighter text-slate-100 after:absolute after:left-full after:block after:h-1 after:w-0.5 after:-translate-x-full after:bg-white"
                      >精通</span
                    >
                  </div>
                  <div
                    class="relative m-auto my-auto flex h-fit max-h-[calc((100%-1.5rem))] w-full max-w-full flex-wrap items-start justify-start gap-x-2 gap-y-1 lg:gap-x-4"
                  >
                    <div
                      class="relative flex h-fit max-h-full w-full max-w-[calc((100%-0.5rem)/2)] items-center border border-solid border-white bg-gradient-to-r from-[#4C4345]/20 to-[#0B0A0A]/20 transition-all duration-500 before:absolute before:left-0 before:top-0 before:z-0 before:h-full before:max-h-full before:w-full before:bg-gradient-to-r before:from-[#ffffff] before:to-[#f1f5f9] hover:from-[#4C4345]/80 hover:to-[#0B0A0A]/80 hover:before:from-[#f9fafb] hover:before:to-[#e5e7eb] lg:max-w-[calc((100%-3rem)/4)]"
                    >
                      <span class="z-10 m-1 inline-block text-xs font-bold leading-none text-gray-600">中文</span>
                    </div>
                    <div
                      class="relative flex h-fit max-h-full w-full max-w-[calc((100%-0.5rem)/2)] items-center border border-solid border-white bg-gradient-to-r from-[#4C4345]/20 to-[#0B0A0A]/20 transition-all duration-500 before:absolute before:left-0 before:top-0 before:z-0 before:h-full before:max-h-full before:w-2/3 before:bg-gradient-to-r before:from-[#ffffff] before:to-[#f1f5f9] hover:from-[#4C4345]/80 hover:to-[#0B0A0A]/80 hover:before:from-[#f9fafb] hover:before:to-[#e5e7eb] lg:max-w-[calc((100%-3rem)/4)]"
                    >
                      <span class="z-10 m-1 inline-block text-xs font-bold leading-none text-gray-600">英文</span>
                    </div>
                    <div
                      class="relative flex h-fit max-h-full w-full max-w-[calc((100%-0.5rem)/2)] items-center border border-solid border-white bg-gradient-to-r from-[#4C4345]/20 to-[#0B0A0A]/20 transition-all duration-500 before:absolute before:left-0 before:top-0 before:z-0 before:h-full before:max-h-full before:w-2/3 before:bg-gradient-to-r before:from-[#ffffff] before:to-[#f1f5f9] hover:from-[#4C4345]/80 hover:to-[#0B0A0A]/80 hover:before:from-[#f9fafb] hover:before:to-[#e5e7eb] lg:max-w-[calc((100%-3rem)/4)]"
                    >
                      <span class="z-10 m-1 inline-block text-xs font-bold leading-none text-gray-600">台語</span>
                    </div>
                    <div
                      class="relative flex h-fit max-h-full w-full max-w-[calc((100%-0.5rem)/2)] items-center border border-solid border-white bg-gradient-to-r from-[#4C4345]/20 to-[#0B0A0A]/20 transition-all duration-500 before:absolute before:left-0 before:top-0 before:z-0 before:h-full before:max-h-full before:w-1/3 before:bg-gradient-to-r before:from-[#ffffff] before:to-[#f1f5f9] hover:from-[#4C4345]/80 hover:to-[#0B0A0A]/80 hover:before:from-[#f9fafb] hover:before:to-[#e5e7eb] lg:max-w-[calc((100%-3rem)/4)]"
                    >
                      <span class="z-10 m-1 inline-block text-xs font-bold leading-none text-gray-600">客語</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 第五屏 -->
          <div
            id="screen05-container"
            class="fixed left-1/2 top-1/2 mx-auto my-auto hidden h-fit max-h-[calc(100dvh-8rem)] w-[calc(100dvw-2rem)] max-w-[874px] origin-bottom-right -translate-x-1/2 -translate-y-[calc((100%-4rem)/2)] flex-col items-start justify-start gap-0 overflow-hidden rounded-md opacity-0 shadow-md lg:left-[calc((100%+150px)/2)] lg:w-[calc(100dvw-150px-2rem)] xl:left-[calc((100%+175px)/2)] xl:w-[calc(100dvw-175px-2rem)] xl:max-w-[992px] 2xl:left-[calc((100%+200px)/2)] 2xl:w-[calc(100dvw-200px-2rem)]"
          >
            <p
              class="mb-0 mt-0 block w-full max-w-full rounded-t-md border border-solid border-gray-300 bg-gray-100 py-2 text-center text-xl font-bold text-gray-900"
            >
              About Me
            </p>
            <div
              class="my-0 flex h-auto min-h-[500px] w-full flex-col items-start justify-start gap-8 rounded-b-md bg-gray-800 px-4 py-6 text-lg font-normal leading-relaxed text-slate-200"
            >
              <p class="inline-flex h-6 items-center justify-start p-0">
                <span class="inline-block h-full bg-slate-200 px-1 text-gray-800">Who aim I ?</span>
                <span
                  class="flex h-full w-fit items-center justify-start bg-slate-600 text-gray-200 before:inline-block before:size-0 before:border-[0.75rem] before:border-solid before:border-[transparent_transparent_transparent_#e2e8f0] before:bg-slate-600 after:inline-block after:size-0 after:border-[0.75rem] after:border-solid after:border-[transparent_transparent_transparent_#475569] after:bg-gray-800"
                  >&nbsp;~&nbsp;</span
                >
                <span class="cmd-name hidden bg-gray-800 text-slate-200"></span>
                <span class="inline-block h-6 w-2 animate-blink bg-slate-200" style="display: none"></span>
              </p>
              <div class="p01 w-full">
                <p class="hidden w-fit max-w-full"></p>
                <span class="inline-block h-6 w-2 animate-blink bg-slate-200" style="display: none"></span>
              </div>
              <div class="p02 w-full">
                <p class="hidden w-fit max-w-full"></p>

                <span class="inline-block h-6 w-2 animate-blink bg-slate-200" style="display: none"></span>
              </div>
              <div class="p03 w-full">
                <p class="hidden w-fit max-w-full"></p>

                <span class="inline-block h-6 w-2 animate-blink bg-slate-200" style="display: none"></span>
              </div>
              <div class="p04 w-full">
                <p class="hidden w-fit max-w-full"></p>
                <span class="inline-block h-6 w-2 animate-blink bg-slate-200" style="display: none"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Transition
      name="scroll-fade"
      mode="out-in"
      enter-active-class="transition-all duration-300 ease-linear"
      enter-from-class="opacity-0 translate-y-full"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-300 ease-linear"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-full"
    >
      <p
        v-show="isVisible"
        class="fixed bottom-4 left-[50dvw] z-50 flex -translate-x-1/2 flex-col items-center justify-center gap-2"
      >
        <span class="mx-auto inline-block text-center text-sm text-gray-500">向下滑動查看更多</span>
        <Icon
          class="animate-pulse text-lg text-gray-600"
          name="lineicons:scroll-down-2"
          size="36"
          title="Scroll Down"
          alt="Scroll Down"
        />
      </p>
    </Transition>
  </div>
</template>

<style scoped>
.icon-resume {
  transform-origin: center;
  animation: icon-resume 2000ms infinite linear forwards alternate;
}
@keyframes icon-resume {
  0% {
    transform: scaleX(100%);
  }
  100% {
    transform: scaleX(200%);
  }
}
.job-chat:after {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(-100%, -50%);
  display: block;
  width: 0;
  height: 0;
  border: 0.875rem solid;
  border-color: transparent #f3f4f6 transparent transparent;
}
.text-stroke::before {
  content: attr(data-stroke);
  position: absolute;
  z-index: -1;
}
.text-stroke.text-stroke-01::before {
  -webkit-text-stroke: 3px #3590f3;
  text-stroke: 3px #3590f3;
}
.text-stroke.text-stroke-02::before {
  -webkit-text-stroke: 3px #1b998b;
  text-stroke: 3px #1b998b;
}
.text-stroke.text-stroke-03::before {
  -webkit-text-stroke: 3px #bb4430;
  text-stroke: 3px #bb4430;
}
.text-stroke.text-stroke-04::before {
  -webkit-text-stroke: 3px #231f20;
  text-stroke: 3px #231f20;
}
</style>
