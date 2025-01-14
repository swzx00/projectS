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
          style="border: 5px solid red"
        ></div>
        <!-- #btn-resume -->
        <NuxtLink
          id="btn-resume"
          class="fixed right-4 z-10 inline-flex h-fit w-fit items-center justify-center gap-2 break-keep rounded-md bg-blue-600 px-3 py-2 text-lg font-bold text-white opacity-0 hover:bg-blue-800 sm:right-10"
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
        <!-- #section-01 -->
        <section
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
        </section>
        <!-- #section-02 -->
        <section
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
        </section>
      </div>
    </main>
    <Icon
      class="fixed bottom-[5rem] left-[50dvw] z-50 -translate-x-1/2 animate-pulse text-lg text-gray-800"
      name="lineicons:scroll-down-2"
      size="36"
      title="Scroll Down"
      alt="Scroll Down"
    />
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
</style>
