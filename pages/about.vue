<script setup lang="ts">
import { useGsapAnimations } from '../composables/useGsapAnimations'

definePageMeta({
  // middleware: ['loading'], // 啟用 loading 中介層
})

useGsapAnimations()
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
        <div
          id="section-container"
          class="relative h-[calc(1200dvh-4rem)] max-h-[calc(1200dvh-4rem)] w-full max-w-full"
        >
          <!-- #btn-resume -->
          <NuxtLink
            id="btn-resume"
            class="fixed right-4 z-10 inline-flex h-fit w-fit items-center justify-center gap-2 break-keep rounded-md bg-blue-600 px-3 py-2 text-lg font-bold text-white opacity-0 hover:bg-blue-800 sm:right-10"
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
          <!-- 第一屏  -->
          <div
            id="screen01-container"
            class="fixed left-[calc(100dvw/2)] top-[calc((100dvh+4rem)/2)] flex h-fit w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-3/4 flex-row flex-wrap items-start justify-start sm:max-w-[calc(100%-4rem)] lg:left-[calc((100dvw+150px)/2)] lg:max-w-[calc(100%/4*3)] xl:left-[calc((100dvw+175px)/2)] xl:max-w-[calc(100%/3*2)] 2xl:left-[calc((100dvw+200px)/2)] 2xl:max-w-[calc(100%/3)]"
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
                    class="group flex flex-row items-center justify-start gap-0 break-keep underline-offset-2 transition-all hover:text-blue-600 hover:underline hover:underline-offset-4"
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
                    class="group flex flex-row items-center justify-start gap-0 break-keep underline underline-offset-2 transition-all hover:text-blue-600 hover:underline hover:underline-offset-4"
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
            class="fixed bottom-0 right-0 z-20 hidden aspect-3/4 h-full max-h-full w-auto max-w-full items-end overflow-hidden lg:right-20 xl:right-24 2xl:right-32"
          >
            <img
              class="mx-0 mb-0 mt-auto aspect-3/4 h-auto max-h-fit w-full max-w-full origin-bottom-right scale-[1] object-cover object-center lg:scale-[1.1] xl:scale-[1.2] 2xl:scale-[1.3]"
              src="https://fakeimg.pl/300x200/200"
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
              class="absolute left-8 hidden h-fit -translate-y-[150%] flex-col gap-0 lg:left-12 lg:-translate-y-full xl:left-24 xl:-translate-y-2/3 2xl:left-36 2xl:-translate-y-1/2"
            >
              <h2
                class="m-0 inline-flex flex-col items-start justify-start gap-2 p-0 text-6xl font-black leading-none text-blue-950"
              >
                林家丞
                <span class="ml-1 inline-flex align-baseline font-Fira text-2xl font-bold leading-none text-gray-800">
                  Chia-Cheng, Lin
                </span>
              </h2>
              <p
                id="screen02-text-p01"
                class="mt-3 hidden align-baseline text-sm font-medium leading-none text-gray-600"
              >
                <span class="text-lg font-semibold text-gray-700">淡江大學</span> 資訊傳播學系 畢業(2009-09 - 2013-06)
              </p>
              <p id="screen02-text-p02" class="hidden align-baseline text-sm font-medium leading-none text-gray-600">
                現職 <span class="text-lg font-semibold text-gray-700">1111人力銀行</span> 前端設計
              </p>
              <p
                id="screen02-text-p03"
                class="mt-2 hidden align-baseline text-sm font-medium leading-none text-gray-600"
              >
                新北新莊 / 1991.05.23 / 未婚 / 役畢
              </p>
            </div>
          </div>
          <!-- 第三屏 -->
          <div
            id="screen03-container"
            class="fixed left-0 top-16 box-border flex h-full max-h-[calc(100dvh-4rem)] w-full max-w-[100dvw] flex-col flex-wrap items-start justify-center gap-4 overflow-hidden bg-transparent px-40 lg:left-[150px] lg:max-w-[calc(100dvw-150px)] xl:left-[175px] xl:max-w-[calc(100dvw-175px)] 2xl:left-[200px] 2xl:max-w-[calc(100dvw-200px)]"
            style="border: 3px solid black"
          >
            <!-- 第三屏 bg -->
            <div id="screen03-bg" class="absolute left-0 top-0 z-0 h-full w-full bg-transparent"></div>
            <!-- 第三屏 角落 -->
            <div
              id="screen03-corner-top-left"
              class="absolute right-[calc(100%-480px)] top-0 hidden h-[250px] w-[500px] origin-top-right -rotate-[15deg] scale-y-[-1] bg-blue-800"
            ></div>
            <div
              id="screen03-corner-bottom-right"
              class="absolute bottom-[125px] right-[0] hidden h-[250px] w-[500px] origin-bottom-right -rotate-[15deg] scale-y-[-1] bg-blue-800"
            ></div>
            <!-- 第三屏 Title -->
            <h2
              id="screen03-title"
              class="z-10 inline-flex h-14 w-fit flex-col items-start justify-start gap-2 p-0 text-3xl font-black leading-none text-gray-100 drop-shadow-2xl transition-all before:absolute before:z-[-1] before:block before:h-full before:w-full before:-rotate-[5deg] before:-skew-x-12 before:scale-125 before:bg-blue-600"
            >
              經歷
              <span class="ml-1 inline-flex align-baseline font-Fira text-base font-bold leading-none text-gray-200">
                Experience
              </span>
            </h2>
            <!-- 第三屏 Content -->
            <div
              id="screen03-content"
              class="ms:max-w-[calc(100%/7*6)] relative inline-flex h-fit max-h-[calc(90%-4.5rem)] w-full max-w-[calc(100%)] flex-col items-center justify-start gap-0 transition-all sm:max-w-[calc(100%/7*6)] md:max-w-[calc(100%/6*5)] lg:max-w-[calc(100%/5*4)] xl:max-w-[calc(100%/4*3)] 2xl:max-w-[calc(100%/3*2)]"
              style="border: 1px solid red"
            >
              <div
                id="screen03-timeline-00"
                class="relative flex h-full max-h-[3%] w-full max-w-full origin-bottom flex-col flex-wrap items-start justify-start gap-0 opacity-0 transition-all"
              >
                <div
                  class="absolute bottom-0 left-20 block h-full w-0.5 -translate-x-1/2 bg-red-600 before:absolute before:block before:h-3 before:w-0.5 before:origin-top before:rotate-45 before:rounded-full before:bg-blue-950 after:absolute after:block after:h-3 after:w-0.5 after:origin-top after:-rotate-45 after:rounded-full after:bg-blue-950"
                ></div>
              </div>
              <!-- timeline 01 -->
              <div
                id="screen03-timeline-01"
                class="relative flex h-fit min-h-20 w-full max-w-full origin-bottom flex-col flex-nowrap items-start justify-start gap-0 py-4 opacity-0 transition-all"
              >
                <div
                  class="absolute top-0 aspect-square h-16 max-h-full w-auto max-w-full origin-bottom overflow-hidden rounded-full border border-solid border-red-300 bg-white p-2"
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
                  class="dot absolute left-20 top-8 block size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-950 opacity-0"
                ></div>
                <div
                  class="line absolute bottom-0 left-20 block h-full w-0.5 origin-bottom -translate-x-1/2 bg-blue-950 opacity-0"
                ></div>
                <p class="ml-24 inline-block w-fit text-2xl font-black leading-8 text-gray-950">
                  1111人力銀行1
                  <span class="text-xl font-bold leading-6 text-gray-700">網路相關、人力派遣 / 人力供應業</span>
                </p>
                <p class="describe-txt ml-24 inline-block w-fit text-base font-normal leading-5 text-gray-800">
                  台灣知名的人力仲介公司，提供企業與求職者的媒合服務。
                </p>

                <div id="screen03-timeline-01-contents" class="relative hidden h-fit w-full max-w-full pb-4">
                  <div
                    class="line absolute bottom-0 left-20 block h-full w-0.5 origin-bottom -translate-x-1/2 bg-blue-950"
                  ></div>
                  <p class="mb-2 ml-24 align-baseline font-Fira text-base font-normal leading-7 text-gray-600">
                    <span
                      class="mr-1 inline-block w-fit rounded-md bg-gray-600 px-2 py-1 font-Noto text-xl font-bold text-gray-100"
                      >前端設計
                    </span>
                    (2023/02 - Now)
                  </p>
                  <p class="mb-2 ml-24 text-lg font-normal leading-normal text-gray-800">
                    負責公司網站的前端開發、切版以及維護，以及支援活動專區的網站相關開發。
                  </p>
                  <p class="ml-24 align-baseline font-Fira text-base font-normal leading-7 text-gray-600">
                    <span
                      class="mr-1 inline-block w-fit rounded-md bg-gray-600 px-2 py-1 font-Noto text-xl font-bold text-gray-100"
                      >設計師
                    </span>
                    (2020/01 - 2023/02)
                  </p>
                  <p class="ml-24 text-lg font-normal leading-normal text-gray-800">
                    負責公司的網頁設計、EDM設計、DM設計 等相關設計。以及各類活動相關輸出物設計。
                  </p>
                </div>
              </div>
              <!-- timeline 02 -->
              <div
                id="screen03-timeline-02"
                class="relative flex h-fit min-h-20 w-full max-w-full origin-bottom flex-col flex-nowrap items-start justify-start gap-0 py-4 opacity-0 transition-all"
              >
                <div
                  class="absolute top-0 aspect-square h-16 max-h-full w-auto max-w-full origin-bottom overflow-hidden rounded-full border border-solid border-red-300 bg-white p-2"
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
                  class="dot absolute left-20 top-8 block size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-950 opacity-0"
                ></div>
                <div
                  class="line absolute bottom-0 left-20 block h-full w-0.5 origin-bottom -translate-x-1/2 bg-blue-950 opacity-0"
                ></div>
                <p class="ml-24 inline-block w-fit text-2xl font-black leading-8 text-gray-950">
                  晏晟科技
                  <span class="text-xl font-bold leading-6 text-gray-700">電腦軟體服務業</span>
                </p>
                <p class="describe-txt ml-24 inline-block w-fit text-base font-normal leading-5 text-gray-800">
                  從事GIS資訊軟體開發，主要承接政府機關資訊軟體開發案。
                </p>
              </div>
              <div id="screen03-timeline-02-content" class="relative hidden h-fit max-h-[25%] w-full max-w-full pb-4">
                <div
                  class="line absolute bottom-0 left-20 block h-full w-0.5 origin-bottom -translate-x-1/2 bg-blue-950 opacity-0"
                ></div>
                <p class="mb-2 ml-24 align-baseline font-Fira text-base font-normal leading-7 text-gray-600">
                  <span
                    class="mr-1 inline-block w-fit rounded-md bg-gray-600 px-2 py-1 font-Noto text-xl font-bold text-gray-100"
                    >網頁設計師
                  </span>
                  (2019/04 - 2019/11)
                </p>
                <p class="mb-2 ml-24 text-lg font-normal leading-normal text-gray-800">
                  負責公司的網頁設計、UI/UX設計、廣告DM設計、海報設計及展場規劃設計。
                </p>
              </div>
              <!-- timeline 03 -->
              <div
                id="screen03-timeline-03"
                class="relative flex h-fit min-h-20 w-full max-w-full origin-bottom flex-col flex-nowrap items-start justify-start gap-0 py-4 opacity-0 transition-all"
              >
                <div
                  class="absolute top-0 aspect-square h-16 max-h-full w-auto max-w-full origin-bottom overflow-hidden rounded-full border border-solid border-red-300 bg-white p-2"
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
                  class="dot absolute left-20 top-8 block size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-950 opacity-0"
                ></div>
                <div
                  class="line absolute bottom-0 left-20 block h-full w-0.5 origin-bottom -translate-x-1/2 bg-blue-950 opacity-0"
                ></div>
                <p class="ml-24 inline-block w-fit text-2xl font-black leading-8 text-gray-950">
                  Fluke 美國福祿克
                  <span class="text-xl font-bold leading-6 text-gray-700">精密儀器相關製造業</span>
                </p>
                <p class="describe-txt ml-24 inline-block w-fit text-base font-normal leading-5 text-gray-800">
                  提供各種工業領域測試和檢測故障的優質電子儀器儀表。
                </p>
              </div>
              <div id="screen03-timeline-03-content" class="relative hidden h-fit max-h-[25%] w-full max-w-full pb-4">
                <div
                  class="line absolute bottom-0 left-20 block h-full w-0.5 origin-bottom -translate-x-1/2 bg-blue-950 opacity-0"
                ></div>
                <p class="mb-2 ml-24 align-baseline font-Fira text-base font-normal leading-7 text-gray-600">
                  <span
                    class="mr-1 inline-block w-fit rounded-md bg-gray-600 px-2 py-1 font-Noto text-xl font-bold text-gray-100"
                    >市場行銷
                  </span>
                  (2015/05 - 2018/06)
                </p>
                <p class="mb-2 ml-24 text-lg font-normal leading-normal text-gray-800">
                  型錄設計、廣告DM設計、E-DM製作及發送、網站修改以及新產品上市後的相關行銷活動企劃。另外也負責開設及管理臉書粉絲專頁。
                </p>
              </div>
              <!-- timeline 04 -->
              <div
                id="screen03-timeline-04"
                class="relative flex h-fit min-h-20 w-full max-w-full origin-bottom flex-col flex-nowrap items-start justify-start gap-0 py-4 opacity-0 transition-all"
              >
                <div
                  class="absolute top-0 aspect-square h-16 max-h-full w-auto max-w-full origin-bottom overflow-hidden rounded-full border border-solid border-red-300 bg-white p-2"
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
                  class="dot absolute left-20 top-8 block size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-950 opacity-0"
                ></div>
                <div
                  class="line absolute bottom-0 left-20 block h-full w-0.5 origin-bottom -translate-x-1/2 bg-blue-950 opacity-0"
                ></div>
                <p class="ml-24 inline-block w-fit text-2xl font-black leading-8 text-gray-950">
                  兵役
                  <span class="text-xl font-bold leading-6 text-gray-700">網路相關、人力派遣 / 人力供應業</span>
                </p>
              </div>
              <div id="screen03-timeline-04-content" class="relative hidden h-fit max-h-[25%] w-full max-w-full pb-4">
                <div
                  class="line absolute bottom-0 left-20 block h-full w-0.5 origin-bottom -translate-x-1/2 bg-blue-950 opacity-0"
                ></div>
                <p class="mb-2 ml-24 align-baseline font-Fira text-base font-normal leading-7 text-gray-600">
                  <span
                    class="mr-1 inline-block w-fit rounded-md bg-gray-600 px-2 py-1 font-Noto text-xl font-bold text-gray-100"
                    >一般常備役
                  </span>
                  (2013/12 - 2014/11)
                </p>
              </div>
              <!-- timeline 05 -->
              <div
                id="screen03-timeline-05"
                class="relative flex h-fit min-h-20 w-full max-w-full origin-bottom flex-col flex-nowrap items-start justify-start gap-0 py-4 opacity-0 transition-all"
              >
                <div
                  class="absolute top-0 aspect-square h-16 max-h-full w-auto max-w-full origin-bottom overflow-hidden rounded-full border border-solid border-red-300 bg-white p-2"
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
                  class="dot absolute left-20 top-8 block size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-950 opacity-0"
                ></div>
                <div
                  class="line absolute bottom-0 left-20 block h-full w-0.5 origin-bottom -translate-x-1/2 bg-blue-950 opacity-0"
                ></div>
                <p class="ml-24 inline-block w-fit text-2xl font-black leading-8 text-gray-950">
                  淡江大學
                  <span class="text-xl font-bold leading-6 text-gray-700">網路相關、人力派遣 / 人力供應業</span>
                </p>
              </div>
              <div id="screen03-timeline-05-content" class="relative hidden h-fit max-h-[25%] w-full max-w-full pb-4">
                <div
                  class="line absolute bottom-0 left-20 block h-full w-0.5 origin-bottom -translate-x-1/2 bg-blue-950 opacity-0"
                ></div>
                <p class="mb-2 ml-24 align-baseline font-Fira text-base font-normal leading-7 text-gray-600">
                  <span
                    class="mr-1 inline-block w-fit rounded-md bg-gray-600 px-2 py-1 font-Noto text-xl font-bold text-gray-100"
                    >資訊傳播學系
                  </span>
                  (2009/09 - 2013/06)
                </p>
                <p class="mb-2 ml-24 text-lg font-normal leading-normal text-gray-800">
                  跨學門、跨領域的系所。在學期間，學習到了網頁設計、電腦繪圖、影像編輯、影片剪輯及電腦動畫等多媒體製作的能力。另外還有關於行銷學、電子商務及資訊傳播實務的相關課程。
                </p>
              </div>
              <!-- timeline 06 -->
              <div
                id="screen03-timeline-06"
                class="relative flex h-fit min-h-20 w-full max-w-full origin-bottom flex-col flex-nowrap items-start justify-start gap-0 py-4 opacity-0 transition-all"
              >
                <div
                  class="timeline-title absolute top-0 aspect-square h-16 max-h-full w-auto max-w-full origin-bottom overflow-hidden rounded-full border border-solid border-red-300 bg-white p-2"
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
                  class="dot absolute left-20 top-8 block size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-950 opacity-0"
                ></div>
                <div
                  class="line absolute left-20 top-0 block h-8 w-0.5 origin-bottom -translate-x-1/2 bg-blue-950 opacity-0"
                ></div>
                <p class="timeline-title ml-24 inline-block w-fit text-2xl font-black leading-8 text-gray-950">
                  一切的起點
                  <span class="text-xl font-bold leading-6 text-gray-700">網路相關、人力派遣 / 人力供應業</span>
                </p>
              </div>
              <div id="screen03-timeline-06-content" class="relative hidden h-fit max-h-[25%] w-full max-w-full pb-4">
                <div
                  class="line absolute bottom-0 left-20 block h-full w-0.5 origin-bottom -translate-x-1/2 bg-blue-950 opacity-0"
                ></div>
                <p class="mb-2 ml-24 align-baseline font-Fira text-base font-normal leading-7 text-gray-600">
                  <span
                    class="mr-1 inline-block w-fit rounded-md bg-gray-600 px-2 py-1 font-Noto text-xl font-bold text-gray-100"
                    >雙子座 / 羊
                  </span>
                  (1991/05/23)
                </p>
                <p class="mb-2 ml-24 text-lg font-normal leading-normal text-gray-800">
                  懵懵懂懂的我，從台北縣新莊市<span class="text-sm"> (現 新北市新莊區) </span>，爽颯登場!<br />
                  從未知 到探索 的旅程，從這開始啟程。
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- #section-01 -->
        <!-- <section
          id="section-01"
          class="fixed left-[calc(100dvw/2)] top-[calc((100dvh+4rem)/2)] h-fit max-h-[calc(100dvh-4rem)] w-full max-w-[calc((100%-4rem))] -translate-x-1/2 -translate-y-1/2 lg:left-[calc((100dvw+150px)/2)] lg:max-w-[calc(100%/4*3)] xl:left-[calc((100dvw+175px)/2)] 2xl:left-[calc((100dvw+200px)/2)] 2xl:max-w-[calc(100%/3*2)]"
        >
          <div id="section-translate-01" class="flex size-fit max-h-full max-w-full flex-wrap gap-4">
            <picture
              id="section-01-pic"
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
            <h1
              class="m-0 ml-36 inline-flex min-h-32 flex-col items-start justify-center gap-2 text-4xl font-black leading-none text-gray-800"
            >
              林家丞
              <span class="inline-block align-baseline font-Fira text-base font-bold leading-none text-gray-700">
                Chia-Cheng, Lin
              </span>
            </h1>
            <p class="m-0 w-full text-justify text-base font-normal text-gray-600">
              我是個前端，同時也是個設計。目前任職於1111人力銀行的前端設計，主要負責網站前端的開發與維護。在我成為前端前，我是個設計師，所以對於UI/UX相關領域也是相當瞭解。熟悉Html、Css、Javascript等網頁相關技術，同時也有在接觸Vue、Nuxt等框架。能結合前端技術與設計經驗，打造高效且美觀的網站，為使用者提供最佳體驗。
            </p>
            <div
              class="m-0 flex w-full flex-row flex-wrap items-center justify-start gap-4 break-keep text-start text-base font-normal text-gray-600"
            >
              <p class="flex flex-row items-center justify-start gap-2" title="連絡電話">
                <Icon class="text-gray-600" name="uil:phone" size="20" title="連絡電話" alt="連絡電話" />
                <a
                  href="tel:8860921702528"
                  target="_self"
                  class="group flex flex-row items-center justify-start gap-0 break-keep underline-offset-2 transition-all hover:text-blue-600 hover:underline hover:underline-offset-4"
                >
                  <span class="break-keep text-sm text-gray-500 group-hover:text-blue-600">(+886)</span
                  >&nbsp;0921-702-528
                </a>
              </p>
              <p class="flex flex-row items-center justify-start gap-2" title="電子信箱">
                <Icon class="text-gray-600" name="uil:envelope" size="20" title="電子信箱" alt="電子信箱" />
                <a
                  href="mailto:swzx00@gmail.com"
                  target="_self"
                  class="group flex flex-row items-center justify-start gap-0 break-keep underline underline-offset-2 transition-all hover:text-blue-600 hover:underline hover:underline-offset-4"
                >
                  swzx00@gmail.com
                </a>
              </p>
              <NuxtLink
                class="ml-0 mr-0 inline-flex h-fit w-full items-center justify-center gap-2 break-keep rounded-md bg-blue-600 px-3 py-2 text-lg font-bold text-white hover:bg-blue-800 sm:w-fit md:ml-auto"
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
            <span class="mx-auto inline-block text-center text-sm text-gray-400">向下滑動查看更多</span>
          </div>
        </section> -->
        <!-- #section-02 -->
        <!-- <section
          id="section-02"
          class="fixed left-[calc(100dvw/2)] top-[calc((100dvh+4rem)/2)] h-fit max-h-[calc(100dvh-4rem)] w-full max-w-[calc(100dvw)] -translate-x-1/2 -translate-y-1/2 lg:left-[calc((100dvw+150px)/2)] lg:max-w-[calc(100dvw-150px)] xl:left-[calc((100dvw+175px)/2)] xl:max-w-[calc(100dvw-175px)] 2xl:left-[calc((100dvw+200px)/2)] 2xl:max-w-[calc(100dvw-200px)]"
        >
          <div
            class="relative flex h-[calc(100dvh-4rem)] max-h-[calc(100dvh-4rem)] w-full max-w-full flex-row flex-nowrap items-center justify-start gap-8"
          >
            <picture
              id="section-02-pic"
              class="absolute bottom-4 left-16 m-0 flex aspect-3/4 h-[calc(100%-2rem)] w-auto overflow-hidden border border-solid border-white opacity-0"
            >
              <img
                class="m-0 h-auto max-h-fit w-full max-w-full object-cover object-center"
                src="/images/about-picture.webp"
                title="大頭照"
                alt="大頭照"
                width="888"
                height="1185"
                loading="lazy"
                decoding="async"
              />
            </picture>
            <picture
              id="section-02-pic-matting"
              class="absolute bottom-4 left-16 m-0 hidden aspect-3/4 h-[calc(100%-2rem)] w-auto overflow-hidden border border-solid border-white opacity-0"
            >
              <img
                class="m-0 h-auto max-h-fit w-full max-w-full object-cover object-center"
                src="/images/about-picture-matting.webp"
                title="大頭照"
                alt="大頭照"
                width="888"
                height="1185"
                loading="lazy"
                decoding="async"
              />
            </picture>
            <div id="section-02-text" class="absolute right-16 top-32 flex flex-col items-end gap-2 opacity-0">
              <h2
                class="m-0 inline-flex w-full flex-col items-end justify-center gap-2 text-6xl font-black leading-none text-gray-800"
              >
                林家丞
                <span class="inline-block align-baseline font-Fira text-sm font-bold leading-none text-gray-700">
                  Chia-Cheng, Lin
                </span>
                <hr class="my-2 w-full border border-solid border-blue-600" />
              </h2>
              <p id="section-02-p01" class="text-sm leading-none text-gray-700 opacity-0">
                <span class="text-base font-bold">淡江大學 資訊傳播學系</span> 畢業 (2009-2013)
              </p>
              <p id="section-02-p02" class="text-sm leading-none text-gray-700 opacity-0">
                現職 <span class="text-base font-bold">1111人力銀行</span> 前端設計
              </p>
            </div>
          </div>
        </section> -->
      </div>
    </main>
    <p class="fixed bottom-[5rem] left-[50dvw] z-50 flex -translate-x-1/2 flex-col items-center justify-center gap-2">
      <span class="mx-auto inline-block text-center text-sm text-gray-400">向下滑動查看更多</span>
      <Icon
        class="animate-pulse text-lg text-gray-800"
        name="lineicons:scroll-down-2"
        size="36"
        title="Scroll Down"
        alt="Scroll Down"
      />
    </p>
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
#screen03-title {
  /* text-shadow: #e5e7eb 0 0 20px; */
}
</style>
