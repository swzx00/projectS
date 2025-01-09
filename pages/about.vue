<script setup lang="ts">
definePageMeta({
  // middleware: ['loading'], // 啟用 loading 中介層
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
        <section
          class="section-01 mx-auto h-[calc(100dvh-4rem)] w-full max-w-full flex-row flex-wrap px-4 py-6"
          style="border: 1px solid red"
        >
          <div
            class="mx-auto flex h-full w-full max-w-[calc(100%/3*2)] flex-col flex-nowrap items-center justify-center gap-8"
          >
            <div class="flex w-full flex-row flex-nowrap items-center justify-start gap-4">
              <picture
                class="m-0 flex aspect-square size-32 max-h-32 max-w-32 overflow-hidden rounded-full border border-solid border-white shadow-md"
              >
                <img
                  class="m-0 h-auto max-h-fit w-full max-w-full translate-x-[40%] translate-y-[60%] scale-[400%] object-cover object-center"
                  src="/images/about.webp"
                  title="大頭照"
                  alt="大頭照"
                  width="504"
                  height="672"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <h1
                class="m-0 inline-flex flex-col items-start justify-center gap-2 text-4xl font-black leading-none text-gray-800"
              >
                林家丞
                <span class="inline-block align-baseline font-Fira text-base font-bold leading-none text-gray-700">
                  Chia-Cheng, Lin
                </span>
              </h1>
            </div>
            <p class="m-0 w-full text-justify text-base font-normal text-gray-600">
              我是個前端，同時也是個設計。目前任職於1111人力銀行的前端設計，主要負責網站前端的開發與維護。在我成為前端前，我是個設計師，所以對於UI/UX相關領域也是相當瞭解。熟悉Html、Css、Javascript等網頁相關技術，同時也有在接觸Vue、Nuxt等框架。能結合前端技術與設計經驗，打造高效且美觀的網站，為使用者提供最佳體驗。
            </p>
            <div
              class="m-0 flex w-full flex-row flex-nowrap items-center justify-start gap-8 text-start text-base font-normal text-gray-600"
            >
              <p class="flex flex-row items-center justify-start gap-2" title="連絡電話">
                <Icon class="text-gray-600" name="uil:phone" size="20" title="連絡電話" alt="連絡電話" />
                <a
                  href="tel:8860921702528"
                  target="_self"
                  class="group flex flex-row items-center justify-start gap-0 underline-offset-2 transition-all hover:text-blue-600 hover:underline hover:underline-offset-4"
                >
                  <span class="text-sm text-gray-500 group-hover:text-blue-600">(+886)</span>&nbsp;0921-702-528
                </a>
              </p>
              <p class="flex flex-row items-center justify-start gap-2" title="電子信箱">
                <Icon class="text-gray-600" name="uil:envelope" size="20" title="電子信箱" alt="電子信箱" />
                <a
                  href="mailto:swzx00@gmail.com"
                  target="_self"
                  class="group flex flex-row items-center justify-start gap-0 underline underline-offset-2 transition-all hover:text-blue-600 hover:underline hover:underline-offset-4"
                >
                  swzx00@gmail.com
                </a>
              </p>

              <div class="relative ml-auto mr-0 h-12 w-fit">
                <NuxtLink
                  class="inline-flex h-fit w-fit items-center justify-center gap-2 break-keep rounded-md bg-blue-600 px-3 py-2 text-lg font-bold text-white hover:bg-blue-800"
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
          </div>
        </section>
        <section
          class="section-01 mx-auto h-[calc(100dvh-4rem)] w-full max-w-full flex-row flex-wrap px-4 py-6"
          style="border: 1px solid green"
        >
          <div
            class="mx-auto flex h-full w-full max-w-[calc(100%/3*2)] flex-col flex-nowrap items-center justify-center gap-8"
          >
            <div class="flex w-full flex-row flex-nowrap items-center justify-start gap-4">
              <picture
                class="m-0 flex aspect-square size-32 max-h-32 max-w-32 overflow-hidden rounded-full border border-solid border-white shadow-md"
              >
                <img
                  class="m-0 h-auto max-h-fit w-full max-w-full translate-x-[40%] translate-y-[60%] scale-[400%] object-cover object-center"
                  src="/images/about.webp"
                  title="大頭照"
                  alt="大頭照"
                  width="504"
                  height="672"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <h1
                class="m-0 inline-flex flex-col items-start justify-center gap-2 text-4xl font-black leading-none text-gray-800"
              >
                LALALA
                <span class="inline-block align-baseline font-Fira text-base font-bold leading-none text-gray-700">
                  Chia-Cheng, Lin
                </span>
              </h1>
            </div>
            <p class="m-0 w-full text-justify text-base font-normal text-gray-600">
              我是個前端，同時也是個設計。目前任職於1111人力銀行的前端設計，主要負責網站前端的開發與維護。在我成為前端前，我是個設計師，所以對於UI/UX相關領域也是相當瞭解。熟悉Html、Css、Javascript等網頁相關技術，同時也有在接觸Vue、Nuxt等框架。能結合前端技術與設計經驗，打造高效且美觀的網站，為使用者提供最佳體驗。
            </p>
            <div
              class="m-0 flex w-full flex-row flex-nowrap items-center justify-start gap-8 text-start text-base font-normal text-gray-600"
            >
              <p class="flex flex-row items-center justify-start gap-2" title="連絡電話">
                <Icon class="text-gray-600" name="uil:phone" size="20" title="連絡電話" alt="連絡電話" />
                <a
                  href="tel:8860921702528"
                  target="_self"
                  class="group flex flex-row items-center justify-start gap-0 underline-offset-2 transition-all hover:text-blue-600 hover:underline hover:underline-offset-4"
                >
                  <span class="text-sm text-gray-500 group-hover:text-blue-600">(+886)</span>&nbsp;0921-702-528
                </a>
              </p>
              <p class="flex flex-row items-center justify-start gap-2" title="電子信箱">
                <Icon class="text-gray-600" name="uil:envelope" size="20" title="電子信箱" alt="電子信箱" />
                <a
                  href="mailto:swzx00@gmail.com"
                  target="_self"
                  class="group flex flex-row items-center justify-start gap-0 underline underline-offset-2 transition-all hover:text-blue-600 hover:underline hover:underline-offset-4"
                >
                  swzx00@gmail.com
                </a>
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
/* .about-pic {
  transition: all 0.1s ease-out;
}
.about-pic.scroll-start {
  transform: scale(calc((1 - var(--animation-progress, 0.5)) * 2));
} */
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
