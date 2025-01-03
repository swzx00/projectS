<script setup lang="ts">
import { useDataResumeFetch } from '~/composables/useDataResumeFetch'
import { useImageLoading } from '~/composables/useImageLoading'

definePageMeta({
  // middleware: ['loading'], // 啟用 loading 中介層
})

const pending = ref(false)
const error = ref<Error | null>(null)
const data = ref<DataResume | null>(null)
const introductionLines = ref<string[]>([])
const autobiographyLines = ref<string[]>([])

onMounted(async () => {
  try {
    const response = await useDataResumeFetch()
    if (response.data) {
      data.value = response.data.dataResume[0]
      introductionLines.value = data.value.introduction.split('\n')
      autobiographyLines.value = data.value.autobiography.split('\n')

      // 處理 experience 的 end 字段
      data.value.experience = data.value.experience.map((exp) => {
        if (exp.end === 'now') {
          exp.end = '至今'
        }
        return exp
      })

      pending.value = false
    } else {
      throw new Error('No data returned')
    }
  } catch (err) {
    error.value = err as Error
    pending.value = false
  }
})

// 圖片Loading
const { isImageLoaded, imageRef, handleImageLoad } = useImageLoading()
</script>
<template>
  <div
    class="relative box-border size-full max-h-full max-w-full border border-solid border-gray-200 bg-gray-200 print:border-0 print:bg-transparent"
  >
    <p
      v-if="pending"
      class="mx-auto my-10 flex w-full max-w-full items-center justify-start gap-2 text-lg text-gray-600 md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl"
    >
      <Icon class="text-lg" name="line-md:loading-twotone-loop" size="20" title="Loading" alt="Loading" />
      資料載入中...
    </p>
    <p
      v-if="error"
      class="mx-auto my-10 flex w-full max-w-full items-center justify-start gap-2 text-lg text-gray-600 md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl"
    >
      <Icon class="text-lg" name="material-symbols:error" size="20" title="Error" alt="Error" />
      載入資料時出現錯誤：<span class="text-red-400">{{ error }}</span>
    </p>
    <div
      v-if="data"
      class="print:p-10pt mx-auto my-10 w-full max-w-full bg-white px-12 py-24 shadow-lg md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl print:my-0 print:shadow-none"
    >
      <section
        class="print:pb-10pt flex w-full max-w-full flex-row flex-nowrap items-start justify-between gap-4 border-b border-solid border-gray-100 pb-6"
      >
        <picture
          class="aspect-3/4 order-2 flex h-auto max-h-max w-full max-w-[150px] items-center justify-center border-2 border-solid border-slate-100 print:max-w-[80pt]"
        >
          <Icon
            v-if="!isImageLoaded"
            class="absolute z-0 text-lg text-gray-400"
            name="line-md:loading-twotone-loop"
            size="20"
            title="Loading"
            alt="Loading"
          />
          <img
            ref="imageRef"
            class="h-fit max-h-max w-full max-w-full"
            :src="data.picture"
            :title="data.name"
            :alt="data.name"
            width="960"
            height="1280"
            loading="lazy"
            decoding="async"
            @load="handleImageLoad"
          />
        </picture>
        <div class="order-1 w-full max-w-[calc(100%-(150px+1rem))] print:max-w-[calc(100%-100pt)]">
          <h1 class="print:text-14pt print:mb-4pt mb-3 text-2xl font-black text-black">
            {{ data.name }}
            <span
              v-if="data.nameEng"
              class="print:text-12pt ml-2 inline-block font-Fira text-xl font-semibold text-gray-800 opacity-70"
            >
              {{ data.nameEng }}
            </span>
          </h1>
          <p class="print:text-10pt text-justify text-base font-normal leading-relaxed text-gray-800">
            <template v-for="(line, index) in introductionLines" :key="index">
              {{ line }}
              <br v-if="index < introductionLines.length - 1" />
            </template>
          </p>
        </div>
      </section>
      <section
        class="print:py-10pt flex w-full max-w-full flex-col flex-wrap items-start justify-between gap-4 border-b border-solid border-gray-100 py-6 print:gap-2"
      >
        <h2 class="print:text-14pt inline-block w-full max-w-full text-xl font-black leading-relaxed text-gray-900">
          工作經歷
          <span class="print:text-12pt ml-2 inline-block text-lg font-extrabold text-gray-800">Work Experience</span>
        </h2>
        <ul class="ml-4 flex w-full max-w-[calc(100%-1rem)] flex-col gap-2 px-4 text-base text-gray-900">
          <li
            v-for="(exp, index) in data.experience"
            :key="index"
            class="relative text-lg font-bold leading-relaxed text-blue-950 before:absolute before:-left-4 before:top-[.85rem] before:block before:size-2 before:origin-center before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-blue-900 before:content-[''] after:absolute after:-left-4 after:top-[.85rem] after:block after:h-[calc(100%+.5rem)] after:w-0.5 after:-translate-x-1/2 after:bg-blue-900 after:content-[''] last:after:hidden print:before:top-[.5rem] print:after:top-[.5rem]"
          >
            <p class="print:text-12pt text-lg font-bold leading-relaxed text-blue-950 print:leading-none">
              {{ exp.title }}
            </p>
            <p class="print:text-10pt mt-1 text-base font-semibold leading-none text-gray-950">
              {{ exp.company }}
              <span class="print:text-10pt ml-1 inline-block text-sm font-medium text-gray-700"
                >({{ exp.start }} - {{ exp.end }})</span
              >
            </p>
            <p class="print:text-10pt mt-0 text-justify text-base font-semibold leading-normal text-gray-500">
              {{ exp.description }}
            </p>
          </li>
        </ul>
      </section>
      <section
        class="print:py-10pt flex w-full max-w-full flex-col flex-wrap items-start justify-between gap-4 border-b border-solid border-gray-100 py-6 print:gap-2"
      >
        <h2 class="print:text-14pt inline-block w-full max-w-full text-xl font-black leading-relaxed text-gray-900">
          教育背景
          <span class="print:text-12pt ml-2 inline-block text-lg font-extrabold text-gray-800">Education</span>
        </h2>
        <ul class="ml-4 flex w-full max-w-[calc(100%-1rem)] flex-col gap-2 px-4 text-base text-gray-900">
          <li
            v-for="(edu, index) in data.education"
            :key="index"
            class="relative text-lg font-bold leading-relaxed text-blue-950 before:absolute before:-left-4 before:top-[.85rem] before:block before:size-2 before:origin-center before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-blue-900 before:content-[''] after:absolute after:-left-4 after:top-[.85rem] after:block after:h-[calc(100%+.5rem)] after:w-0.5 after:-translate-x-1/2 after:bg-blue-900 after:content-[''] last:after:hidden print:before:top-[.5rem] print:after:top-[.5rem]"
          >
            <p class="print:text-12pt text-lg font-bold leading-relaxed text-blue-950 print:leading-none">
              {{ edu.school }}
            </p>
            <p class="print:text-10pt mt-1 text-base font-semibold leading-none text-gray-950">
              {{ edu.department }}
              <span class="print:text-10pt ml-1 inline-block text-sm font-medium text-gray-700">
                / {{ edu.degree }} {{ edu.graduation }}</span
              >
              <span class="print:text-10pt ml-1 inline-block text-sm font-medium text-gray-700"
                >({{ edu.start }} - {{ edu.end }})</span
              >
            </p>
          </li>
        </ul>
      </section>
      <section
        class="print:py-10pt flex w-full max-w-full flex-col flex-wrap items-start justify-between gap-4 border-b border-solid border-gray-100 py-6 print:gap-2"
      >
        <h2 class="print:text-14pt inline-block w-full max-w-full text-xl font-black leading-relaxed text-gray-900">
          工作技能
          <span class="print:text-12pt ml-2 inline-block text-lg font-extrabold text-gray-800">Skills</span>
        </h2>
        <ul class="flex w-full max-w-full flex-col gap-2 px-2 text-base text-gray-900">
          <li
            v-for="(skill, index) in data.skills"
            :key="index"
            class="relative flex flex-row flex-wrap items-start justify-start gap-0 text-lg font-bold leading-relaxed text-blue-950"
          >
            <p class="print:text-12pt inline-block w-full text-lg font-bold leading-relaxed text-blue-950">
              {{ skill.skillsType }}
            </p>
            <ul class="flex flex-row flex-wrap items-start justify-start gap-0">
              <li
                v-for="(content, idx) in skill.skillsContent"
                :key="idx"
                class="print:text-10pt relative flex flex-col items-center justify-center text-sm font-normal text-gray-950"
                :class="typeof content !== 'string' ? 'print:mb-24pt print:mt-12mt my-1 px-1' : ''"
              >
                <template v-if="typeof content === 'string'">{{ content }}</template>
                <template v-else>
                  <div
                    class="aos before:bg-blue-600"
                    data-aos="aos-rotate"
                    data-aos-delay="500"
                    :style="{
                      '--size': '6.5rem',
                      '--rotate-deg': `${(Number(content.skillsContentProficiency) / 100) * 360}deg`,
                    }"
                  ></div>
                  <div
                    class="aos-font absolute z-[3] aspect-square size-[5.5rem] rounded-full bg-white print:size-[37.5pt]"
                    data-aos="aos-font"
                    data-aos-delay="1000"
                  >
                    <p
                      class="print:text-10pt absolute left-1/2 top-[22.5%] z-20 mt-2 flex w-fit -translate-x-1/2 items-center justify-center text-center text-lg font-normal leading-none tracking-tighter print:top-[calc(100%+5pt)]"
                    >
                      {{ content.skillsContentTitle }}
                    </p>
                    <p
                      class="print:text-12pt absolute left-1/2 top-[50%] z-20 -translate-x-1/2 text-center text-base font-semibold after:text-xs after:font-light after:content-['%'] print:-translate-y-1/2"
                    >
                      {{ content.skillsContentProficiency }}
                    </p>
                  </div>
                </template>
                <template v-if="idx < skill.skillsContent.length - 1 && typeof content === 'string'">、</template>
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <section
        class="print:py-10pt flex w-full max-w-full flex-col flex-wrap items-start justify-between gap-4 border-b border-solid border-gray-100 py-6 print:gap-2"
      >
        <h2 class="print:text-14pt inline-block w-full max-w-full text-xl font-black leading-relaxed text-gray-900">
          語言能力
          <span class="print:text-12pt ml-2 inline-block text-lg font-extrabold text-gray-800">Language</span>
        </h2>
        <ul class="flex w-full max-w-full flex-row flex-wrap gap-2 px-2 text-base text-gray-900">
          <li
            v-for="(language, index) in data.languages"
            :key="index"
            class="relative flex w-[calc((100%-1.5rem)/2)] flex-row flex-wrap items-start justify-start gap-0 sm:w-[calc((100%-2.5rem)/4)]"
          >
            <p class="print:text-12pt inline-block w-full text-base font-normal text-gray-800">
              <span class="text-base font-bold text-blue-950">{{ language.languagesType }}</span> -
              <span class="print:text-12pt text-sm font-normal">{{ language.languagesLevel }}</span>
            </p>
          </li>
        </ul>
      </section>
      <section
        class="print:py-10pt flex w-full max-w-full flex-col flex-wrap items-start justify-between gap-4 border-b border-solid border-gray-100 py-6 print:break-inside-avoid print:gap-2 print:border-t"
      >
        <h2 class="print:text-14pt inline-block w-full max-w-full text-xl font-black leading-relaxed text-gray-900">
          自傳
          <span class="print:text-12pt ml-2 inline-block text-lg font-extrabold text-gray-800">Autobiography</span>
        </h2>
        <div class="block">
          <p
            v-for="(line, index) in autobiographyLines"
            :key="index"
            class="print:text-10pt mb-3 text-start text-base font-normal leading-normal text-gray-800 last:mb-0"
          >
            {{ line }}
          </p>
        </div>
      </section>
      <section
        class="print:py-10pt flex w-full max-w-full flex-col flex-wrap items-start justify-between gap-4 border-b border-solid border-gray-100 py-6 print:relative"
      >
        <h2 class="inline-block w-full max-w-full text-xl font-black leading-relaxed text-gray-900">
          作品集
          <span class="ml-2 inline-block text-lg font-extrabold text-gray-800">Portfolio</span>
        </h2>
        <p class="print:text-10pt mb-3 text-start text-base font-normal leading-normal text-gray-800">
          <span
            class="mr-2 inline-flex items-center justify-start font-medium after:inline after:content-['：'] xl:mr-0"
            >線上作品集</span
          >
          <a
            class="text-blue-600 underline underline-offset-2 transition-all duration-300 hover:text-blue-800 hover:underline-offset-4"
            :href="data.portfolios[0].url"
            title="線上作品集"
            alt="線上作品集"
            target="_blank"
            >{{ data.portfolios[0].url }}</a
          >
        </p>

        <div class="absolute left-auto right-[10pt] top-[5pt] hidden w-fit print:inline-block">
          <picture class="block">
            <figure class="flex w-fit flex-col items-center justify-center">
              <img
                class="size-[50pt]"
                src="/images/qrcode-portfolioS.svg"
                title="線上作品集"
                alt="線上作品集"
                width="80"
                height="80"
                loading="lazy"
                decoding="async"
              />
              <figcaption class="text-10pt w-fit max-w-fit break-keep">掃描QR Code</figcaption>
            </figure>
          </picture>
        </div>
      </section>
      <section class="flex w-full max-w-full flex-col flex-wrap items-start justify-between gap-4 py-6">
        <h2 class="inline-block w-full max-w-full text-xl font-black leading-relaxed text-gray-900">
          聯絡方式
          <span class="ml-2 inline-block text-lg font-extrabold text-gray-800">Information</span>
        </h2>
        <div class="flex w-full max-w-full flex-col flex-wrap items-start justify-start gap-2 sm:flex-row sm:gap-0">
          <p
            class="mb-0 inline-flex w-full flex-nowrap text-start text-base font-normal leading-normal text-gray-800 sm:w-1/2 xl:w-1/4"
          >
            <span
              class="mr-2 inline-flex w-20 justify-between gap-0 text-justify font-medium after:inline after:content-['：'] xl:mr-0 xl:w-fit"
              >聯繫時間</span
            >
            <span class="text-gray-800 no-underline hover:text-gray-800">{{ data.contactTime }}</span>
          </p>
          <p
            class="mb-0 inline-flex w-full flex-nowrap text-start text-base font-normal leading-normal text-gray-800 sm:w-1/2 xl:w-1/4"
          >
            <span
              class="mr-2 inline-flex w-20 justify-between gap-0 text-justify font-medium after:inline after:content-['：'] xl:mr-0 xl:w-fit"
              >聯繫電話</span
            >
            <a
              class="text-gray-800 no-underline hover:text-gray-800"
              :href="`tel:${data.phone}`"
              title="聯繫電話"
              alt="聯繫電話"
              target="_self"
              >{{ data.phone }}</a
            >
          </p>
          <p
            class="mb-0 inline-flex w-full flex-nowrap text-start text-base font-normal leading-normal text-gray-800 sm:w-1/2 xl:w-1/4"
          >
            <span
              class="mr-2 inline-flex w-20 justify-between gap-0 text-justify font-medium after:inline after:content-['：'] xl:mr-0 xl:w-fit"
              >E-mai</span
            >
            <a
              class="text-blue-600 underline underline-offset-2 transition-all duration-300 hover:text-blue-800 hover:underline-offset-4"
              :href="`mailto:${data.email}`"
              title="E-mail"
              alt="E-mail"
              target="_self"
              >{{ data.email }}</a
            >
          </p>
          <p
            class="mb-0 inline-flex w-full flex-nowrap text-start text-base font-normal leading-normal text-gray-800 sm:w-1/2 xl:w-1/4"
          >
            <span
              class="mr-2 inline-flex w-20 justify-between gap-0 text-justify font-medium after:inline after:content-['：'] xl:mr-0 xl:w-fit"
              >居住地</span
            >
            <span class="text-gray-800 hover:text-gray-800">{{ data.residence }}</span>
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.aos {
  position: relative;
  left: 0;
  top: 0;
  height: var(--size);
  width: var(--size);
  overflow: hidden;
  border-radius: 999px;
  background-color: transparent;
}
.aos:before,
.aos:after {
  content: '';
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: calc(var(--size) / 2);
  width: calc(var(--size) / 2);
  height: var(--size);
  border-radius: calc(var(--size) / 2) 0 0 calc(var(--size) / 2);
  transform-origin: calc(var(--size) / 2) calc(var(--size) / 2);
  opacity: 0;
}
.aos:before {
  z-index: 1;
  transform: rotate(0deg);
}
.aos:after {
  z-index: 2;
  transform: rotate(0deg);
}
.aos[data-aos='aos-rotate'].aos-animate {
  animation: aos-bg 500ms 1 linear forwards;
}
.aos[data-aos='aos-rotate'].aos-animate::before {
  animation: aos-before 500ms 1 linear forwards;
}
.aos[data-aos='aos-rotate'].aos-animate::after {
  animation: aos-after 500ms 1 step-start forwards;
}
.aos[data-aos='aos-rotate'][data-aos-delay='500'].aos-animate::before {
  animation-delay: 500ms;
}
.aos[data-aos='aos-rotate'][data-aos-delay='500'].aos-animate::after {
  animation-delay: 500ms;
}
.aos-font[data-aos='aos-font'] * {
  opacity: 0;
}
.aos-font[data-aos='aos-font'].aos-animate * {
  animation: aos-font 500ms 1 linear forwards;
}
.aos-font[data-aos='aos-font'][data-aos-delay='1000'].aos-animate * {
  animation-delay: 1000ms;
}
@keyframes aos-bg {
  0% {
    opacity: 0;
    background-color: #ffffff;
  }
  100% {
    opacity: 1;
    background-color: #e5e7eb;
  }
}
@keyframes aos-before {
  0% {
    opacity: 1;
    transform: rotate(0deg);
  }
  50% {
    opacity: 1;
    transform: rotate(180deg);
  }
  100% {
    opacity: 1;
    transform: rotate(var(--rotate-deg));
  }
}
@keyframes aos-after {
  0% {
    opacity: 1;
    background-color: #e5e7eb;
    transform: rotate(0deg);
  }
  49.99% {
    opacity: 1;
    background-color: #e5e7eb;
    transform: rotate(0deg);
  }
  50% {
    opacity: 1;
    background-color: #2563eb;
    transform: rotate(180deg);
  }
  100% {
    opacity: 1;
    background-color: #2563eb;
    transform: rotate(180deg);
  }
}
@keyframes aos-font {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@media print {
  body,
  * {
    print-color-adjust: exact;
    -webkit-print-color-adjust: exact; /* for Chrome, Edge, Opera */
  }
  .aos {
    height: 47.5pt;
    width: 47.5pt;
    background-color: #e5e7eb !important;
    opacity: 100 !important;
  }
  .aos:before,
  .aos:after {
    right: 25pt;
    width: 25pt;
    height: 50pt;
    border-radius: 25pt 0 0 25pt;
    transform-origin: 25pt 25pt;
    opacity: 1;
  }
  .aos:before {
    transform: rotate(var(--rotate-deg)) !important;
  }
  .aos:after {
    z-index: 2;
    transform: rotate(180deg);
    opacity: 100 !important;
    background-color: #2563eb;
  }
  .aos[data-aos='aos-rotate'].aos-animate {
    animation: none;
  }
  .aos[data-aos='aos-rotate'].aos-animate::before {
    animation: none;
  }
  .aos[data-aos='aos-rotate'].aos-animate::after {
    animation: none;
  }
  .aos-font[data-aos='aos-font'] * {
    opacity: 1;
  }
  .aos-font[data-aos='aos-font'].aos-animate * {
    animation: none;
  }
}

@page {
  size: A4 portrait;
  margin: 0.5cm;
  orphans: 4;
  widows: 2;
}
</style>
