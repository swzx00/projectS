<script setup lang="ts">
import { useDataResumeFetch } from '~/composables/useDataResumeFetch'
import { useImageLoading } from '~/composables/useImageLoading'

definePageMeta({
  middleware: ['loading'], // 啟用 loading 中介層
})

// meta設定
const metaTitle: string = '林家丞 Chia-Cheng, Lin'
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

const pending = ref(true)
const error = ref<Error | null>(null)
const data = ref<DataResume | null>(null)
const introductionLines = ref<string[]>([])
const autobiographyLines = ref<string[]>([])

onMounted(async () => {
  try {
    const response = await useDataResumeFetch()

    if (!response.data) {
      throw new Error('找不到資料')
    }

    // 檢查 response.data 是否為陣列
    if (Array.isArray(response.data)) {
      data.value = response.data[0] as DataResume
    } else {
      // 如果不是陣列，直接賦值
      data.value = response.data as unknown as DataResume
    }

    // 確保資料存在且有必要的欄位
    if (!data.value) {
      throw new Error('找不到履歷資料')
    }

    // 處理資料
    if (data.value.introduction) {
      introductionLines.value = data.value.introduction.split('\n')
    }

    if (data.value.autobiography) {
      autobiographyLines.value = data.value.autobiography.split('\n')
    }

    if (data.value.experience) {
      data.value.experience = data.value.experience.map((exp) => ({
        ...exp,
        end: exp.end === 'now' ? '至今' : exp.end,
      }))
    }
  } catch (err) {
    console.error('詳細錯誤資訊:', err)
    error.value = err instanceof Error ? err : new Error('載入資料時發生未知錯誤')
  } finally {
    pending.value = false
  }
})

// 圖片Loading
const { isImageLoaded, imageRef, handleImageLoad } = useImageLoading()

// 列印功能
const handlePrint = () => {
  window.print()
}
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
      class="mx-auto my-5 flex w-full max-w-full flex-wrap items-center justify-start gap-x-4 gap-y-0 px-4 py-0 after:order-2 after:my-2 after:block after:h-0 after:w-full after:content-[''] xs:justify-end xs:gap-4 after:xs:hidden md:max-w-screen-sm md:px-0 lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl print:hidden"
    >
      <NuxtLink
        to="/about"
        target="_self"
        class="order-1 ml-0 mr-0 flex w-fit max-w-full items-center justify-start gap-1 p-0 text-base font-normal text-blue-500 transition-all hover:text-blue-700 xs:mr-auto xs:w-fit xs:max-w-fit xs:justify-center"
        download
      >
        <Icon class="text-base" name="uil:angle-left" size="18" title="返回" alt="返回" />
        返回 About
      </NuxtLink>
      <a
        href="/resume-林家丞_0921702528.pdf"
        target="_blank"
        class="order-3 flex w-fit max-w-fit items-center justify-center gap-1 rounded-md bg-blue-500 px-4 py-2 text-base font-normal text-slate-200 shadow transition-all hover:bg-blue-700 hover:text-white hover:shadow-md"
        download
      >
        <Icon class="text-base" name="uil:file-download" size="18" title="下載" alt="下載" />
        下載
      </a>
      <button
        class="order-4 flex w-fit max-w-fit items-center justify-center gap-1 rounded-md bg-blue-500 px-4 py-2 text-base font-normal text-slate-200 shadow transition-all hover:bg-blue-700 hover:text-white hover:shadow-md"
        @click="handlePrint"
      >
        <Icon class="text-base" name="uil:print" size="18" title="列印" alt="列印" />
        列印
      </button>
    </div>
    <article
      v-if="data"
      class="mx-auto mb-10 mt-0 w-full max-w-full bg-white px-4 py-8 shadow-lg sm:px-8 sm:py-16 md:max-w-screen-sm md:px-12 md:py-24 lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl print:my-0 print:p-10pt print:shadow-none"
    >
      <section
        class="grid w-full max-w-full grid-flow-row-dense grid-cols-[1fr] grid-rows-[auto_200px_1fr] gap-4 border-b border-solid border-gray-100 pb-6 sm:grid-cols-[1fr_150px] sm:grid-rows-[2rem_1fr] print:pb-10pt"
      >
        <h1
          class="col-span-2 col-start-1 col-end-2 row-span-1 row-start-1 row-end-2 mb-0 inline-flex flex-col text-2xl font-black text-black xs:inline sm:col-span-1 sm:col-start-1 sm:col-end-2 sm:row-span-1 sm:row-start-1 sm:row-end-1 print:mb-4pt print:text-14pt"
        >
          {{ data.name }}
          <span
            v-if="data.nameEng"
            class="ml-0 inline-block font-Fira text-xl font-semibold text-gray-800 opacity-70 xs:ml-2 print:text-12pt"
          >
            {{ data.nameEng }}
          </span>
        </h1>
        <picture
          class="col-span-2 col-start-1 col-end-2 row-span-1 row-start-2 row-end-3 mx-auto flex aspect-3/4 h-auto max-h-max w-full max-w-[150px] items-center justify-center border-2 border-solid border-slate-100 sm:col-span-1 sm:col-start-2 sm:col-end-3 sm:row-span-2 sm:row-start-1 sm:row-end-3 sm:mx-0 print:max-w-[80pt]"
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

        <p
          class="col-span-2 col-start-1 col-end-2 row-span-1 row-start-3 row-end-4 text-justify text-base font-normal leading-none text-gray-800 xs:leading-relaxed sm:col-span-1 sm:col-start-1 sm:col-end-2 sm:row-span-1 sm:row-start-2 sm:row-end-3 print:text-10pt"
        >
          <template v-for="(line, index) in introductionLines" :key="index">
            {{ line }}
            <br v-if="index < introductionLines.length - 1" />
          </template>
        </p>
      </section>
      <section
        class="flex w-full max-w-full flex-col flex-wrap items-start justify-between gap-4 border-b border-solid border-gray-100 py-6"
      >
        <h2
          class="inline-block inline-flex w-full max-w-full flex-col text-xl font-black leading-none text-gray-900 xs:inline xs:leading-relaxed"
        >
          基本資料
          <span class="ml-0 inline-block text-lg font-extrabold text-gray-800 xs:ml-2">Information</span>
        </h2>
        <div class="flex w-full max-w-full flex-col flex-wrap items-start justify-start gap-2 sm:flex-row sm:gap-0">
          <p
            class="mb-0 inline-flex w-full flex-nowrap text-start text-base font-normal leading-normal text-gray-800 sm:w-1/2 xl:w-1/4"
          >
            <span
              class="mr-2 inline-flex w-20 justify-between gap-0 text-justify font-medium after:inline after:content-['：'] xl:mr-0 xl:w-fit"
              >出生日期</span
            >
            <span class="text-gray-800 no-underline hover:text-gray-800">{{ data.birthday }}</span>
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
          <p
            class="mb-0 inline-flex w-full flex-nowrap text-start text-base font-normal leading-normal text-gray-800 sm:w-1/2 xl:w-1/4"
          >
            <span
              class="mr-2 inline-flex w-20 justify-between gap-0 text-justify font-medium after:inline after:content-['：'] xl:mr-0 xl:w-fit"
              >婚姻狀況</span
            >
            <span class="text-gray-800 no-underline hover:text-gray-800">{{ data.marital }}</span>
          </p>
          <p
            class="mb-0 inline-flex w-full flex-nowrap text-start text-base font-normal leading-normal text-gray-800 sm:w-1/2 xl:w-1/4"
          >
            <span
              class="mr-2 inline-flex w-20 justify-between gap-0 text-justify font-medium after:inline after:content-['：'] xl:mr-0 xl:w-fit"
              >兵役狀況</span
            >
            <span class="text-gray-800 no-underline hover:text-gray-800"
              >{{ data.military.militaryType }}({{ data.military.militaryDischarge }})</span
            >
          </p>
        </div>
      </section>
      <section
        class="flex w-full max-w-full flex-col flex-wrap items-start justify-between gap-4 border-b border-solid border-gray-100 py-6 print:gap-2 print:py-10pt"
      >
        <h2
          class="inline-block inline-flex w-full max-w-full flex-col text-xl font-black leading-none text-gray-900 xs:inline xs:leading-relaxed print:text-14pt"
        >
          工作經歷
          <span class="ml-0 inline-block text-lg font-extrabold text-gray-800 xs:ml-2 print:text-12pt"
            >Work Experience</span
          >
        </h2>
        <ul class="ml-4 flex w-full max-w-[calc(100%-1rem)] flex-col gap-2 px-4 text-base text-gray-900">
          <li
            v-for="(exp, index) in data.experience"
            :key="index"
            class="relative text-lg font-bold leading-relaxed text-blue-950 before:absolute before:-left-4 before:top-[.85rem] before:block before:size-2 before:origin-center before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-blue-900 before:content-[''] after:absolute after:-left-4 after:top-[.85rem] after:block after:h-[calc(100%+.5rem)] after:w-0.5 after:-translate-x-1/2 after:bg-blue-900 after:content-[''] last:after:hidden print:before:top-[.5rem] print:after:top-[.5rem]"
          >
            <p class="text-lg font-bold leading-relaxed text-blue-950 print:text-12pt print:leading-none">
              {{ exp.title }}
            </p>
            <p class="mt-1 text-base font-semibold leading-none text-gray-950 print:text-10pt">
              {{ exp.company }}
              <span class="ml-1 inline-block text-sm font-medium text-gray-700 print:text-10pt"
                >({{ exp.start }} - {{ exp.end }})</span
              >
            </p>
            <p class="mt-0 text-justify text-base font-semibold leading-normal text-gray-500 print:text-10pt">
              {{ exp.description }}
            </p>
          </li>
        </ul>
      </section>
      <section
        class="flex w-full max-w-full flex-col flex-wrap items-start justify-between gap-4 border-b border-solid border-gray-100 py-6 print:gap-2 print:py-10pt"
      >
        <h2
          class="inline-flex w-full max-w-full flex-col text-xl font-black leading-none text-gray-900 xs:inline-block xs:leading-relaxed print:text-14pt"
        >
          教育背景
          <span class="ml-0 inline-block text-lg font-extrabold text-gray-800 xs:ml-2 print:text-12pt">Education</span>
        </h2>
        <ul class="ml-4 flex w-full max-w-[calc(100%-1rem)] flex-col gap-2 px-4 text-base text-gray-900">
          <li
            v-for="(edu, index) in data.education"
            :key="index"
            class="relative text-lg font-bold leading-relaxed text-blue-950 before:absolute before:-left-4 before:top-[.85rem] before:block before:size-2 before:origin-center before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-blue-900 before:content-[''] after:absolute after:-left-4 after:top-[.85rem] after:block after:h-[calc(100%+.5rem)] after:w-0.5 after:-translate-x-1/2 after:bg-blue-900 after:content-[''] last:after:hidden print:before:top-[.5rem] print:after:top-[.5rem]"
          >
            <p class="text-lg font-bold leading-relaxed text-blue-950 print:text-12pt print:leading-none">
              {{ edu.school }}
            </p>
            <p class="mt-1 text-base font-semibold leading-none text-gray-950 print:text-10pt">
              {{ edu.department }}
              <span class="ml-1 inline-block text-sm font-medium text-gray-700 print:text-10pt">
                / {{ edu.degree }} {{ edu.graduation }}</span
              >
              <span class="ml-1 inline-block text-sm font-medium text-gray-700 print:text-10pt"
                >({{ edu.start }} - {{ edu.end }})</span
              >
            </p>
          </li>
        </ul>
      </section>
      <section
        class="flex w-full max-w-full flex-col flex-wrap items-start justify-between gap-4 border-b border-solid border-gray-100 py-6 print:gap-2 print:py-10pt"
      >
        <h2
          class="inline-flex w-full max-w-full flex-col text-xl font-black leading-none text-gray-900 xs:inline-block xs:leading-relaxed print:text-14pt"
        >
          工作技能
          <span class="ml-0 inline-block text-lg font-extrabold text-gray-800 xs:ml-2 print:text-12pt">Skills</span>
        </h2>
        <ul class="flex w-full max-w-full flex-col gap-2 px-2 text-base text-gray-900">
          <li
            v-for="(skill, index) in data.skills"
            :key="index"
            class="relative flex flex-row flex-wrap items-start justify-start gap-0 text-lg font-bold leading-relaxed text-blue-950"
          >
            <p class="inline-block w-full text-lg font-bold leading-relaxed text-blue-950 print:text-12pt">
              {{ skill.skillsType }}
            </p>
            <ul class="flex flex-row flex-wrap items-start justify-start gap-0">
              <li
                v-for="(content, idx) in skill.skillsContent"
                :key="idx"
                class="relative flex flex-col items-center justify-center text-sm font-normal text-gray-950 print:text-10pt"
              >
                {{ content }}
                <template v-if="idx < skill.skillsContent.length - 1">、</template>
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <section
        class="flex w-full max-w-full flex-col flex-wrap items-start justify-between gap-4 border-b border-solid border-gray-100 py-6 print:break-inside-avoid print:gap-2 print:border-t print:py-10pt"
      >
        <h2
          class="inline-flex w-full max-w-full flex-col text-xl font-black leading-none text-gray-900 xs:inline-block xs:leading-relaxed print:text-14pt"
        >
          語言能力
          <span class="ml-0 inline-block text-lg font-extrabold text-gray-800 xs:ml-2 print:text-12pt">Language</span>
        </h2>
        <ul class="flex w-full max-w-full flex-row flex-wrap gap-2 px-2 text-base text-gray-900">
          <li
            v-for="(language, index) in data.languages"
            :key="index"
            class="relative flex w-full flex-row flex-wrap items-start justify-start gap-0 xs:w-[calc((100%-1.5rem)/2)] sm:w-[calc((100%-2.5rem)/4)]"
          >
            <p class="inline-block w-full text-base font-normal text-gray-800 print:text-12pt">
              <span class="text-base font-bold text-blue-950">{{ language.languagesType }}</span> -
              <span class="text-sm font-normal print:text-12pt">{{ language.languagesLevel }}</span>
            </p>
          </li>
        </ul>
      </section>
      <section
        class="flex w-full max-w-full flex-col flex-wrap items-start justify-between gap-4 border-b border-solid border-gray-100 py-6 print:gap-2 print:py-10pt"
      >
        <h2
          class="inline-flex w-full max-w-full flex-col text-xl font-black leading-none text-gray-900 xs:inline-block xs:leading-relaxed print:text-14pt"
        >
          自傳
          <span class="ml-0 inline-block text-lg font-extrabold text-gray-800 xs:ml-2 print:text-12pt"
            >Autobiography</span
          >
        </h2>
        <div class="block">
          <p
            v-for="(line, index) in autobiographyLines"
            :key="index"
            class="mb-3 text-start text-base font-normal leading-normal text-gray-800 last:mb-0 print:text-10pt"
          >
            {{ line }}
          </p>
        </div>
      </section>
      <section
        class="flex w-full max-w-full flex-col flex-wrap items-start justify-between gap-4 border-b border-solid border-gray-100 py-6 print:relative print:py-10pt"
      >
        <h2
          class="inline-flex w-full max-w-full flex-col text-xl font-black leading-none text-gray-900 xs:inline-block xs:leading-relaxed"
        >
          作品集
          <span class="ml-0 inline-block text-lg font-extrabold text-gray-800 xs:ml-2">Portfolio</span>
        </h2>
        <p
          class="mb-3 inline-flex items-center text-start text-base font-normal leading-normal text-gray-800 print:text-10pt"
        >
          <span
            class="mr-2 inline-flex items-center justify-start font-medium after:inline after:content-['：'] xl:mr-0"
            >線上作品集</span
          >
          <a
            class="break-all text-blue-600 underline underline-offset-2 transition-all duration-300 hover:text-blue-800 hover:underline-offset-4"
            :href="data.portfolios[0].url"
            title="線上作品集"
            alt="線上作品集"
            target="_blank"
            >{{ data.portfolios[0].url }}</a
          >
        </p>
        <p
          class="mb-3 inline-flex items-center text-start text-base font-normal leading-normal text-gray-800 print:text-10pt"
        >
          <Icon class="mr-1 inline-block size-5" name="logos:github-icon" size="24" title="Github" alt="Github" />
          <span
            class="mr-2 inline-flex items-center justify-start font-medium after:inline after:content-['：'] xl:mr-0"
            >Github</span
          >
          <a
            class="break-all text-blue-600 underline underline-offset-2 transition-all duration-300 hover:text-blue-800 hover:underline-offset-4"
            :href="data.portfolios[0].github"
            title="Github"
            alt="Github"
            target="_blank"
            >{{ data.portfolios[0].github }}</a
          >
        </p>

        <div class="absolute left-auto right-[10pt] top-[5pt] hidden w-fit print:inline-block">
          <picture class="block">
            <figure class="flex w-fit flex-col items-center justify-center">
              <img
                class="size-[50pt]"
                :src="data.portfolios[0].qrcode"
                title="線上作品集"
                alt="線上作品集"
                width="80"
                height="80"
                loading="lazy"
                decoding="async"
              />
              <figcaption class="w-fit max-w-fit break-keep text-10pt">掃描QR Code</figcaption>
            </figure>
          </picture>
        </div>
      </section>
      <section class="flex w-full max-w-full flex-col flex-wrap items-start justify-between gap-4 py-6">
        <h2
          class="inline-flex w-full max-w-full flex-col text-xl font-black leading-none text-gray-900 xs:inline-block xs:leading-relaxed"
        >
          聯絡方式
          <span class="ml-0 inline-block text-lg font-extrabold text-gray-800 xs:ml-2">Contact</span>
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
              >E-mail</span
            >
            <a
              class="break-all text-blue-600 underline underline-offset-2 transition-all duration-300 hover:text-blue-800 hover:underline-offset-4"
              :href="`mailto:${data.email}`"
              title="E-mail"
              alt="E-mail"
              target="_self"
              >{{ data.email }}</a
            >
          </p>
        </div>
      </section>
    </article>
  </div>
</template>

<style>
@media print {
  body,
  * {
    print-color-adjust: exact;
    -webkit-print-color-adjust: exact; /* for Chrome, Edge, Opera */
  }
  .layout-default {
    background: none;
  }
}

@page {
  size: A4 portrait;
  margin: 0.5cm;
  orphans: 4;
  widows: 2;
}
</style>
