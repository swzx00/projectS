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
      autobiographyLines.value = data.value.introduction.split('\n')

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
  <div class="relative size-full max-h-full max-w-full bg-gray-200" style="border: 1px solid red">
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
      class="mx-auto my-10 w-full max-w-full bg-white px-12 py-24 shadow-lg md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl"
    >
      <section
        class="flex w-full max-w-full flex-row flex-nowrap items-start justify-between gap-4 border-b border-solid border-gray-100 pb-6"
      >
        <picture class="order-2 w-full max-w-[150px] border-2 border-solid border-slate-100">
          <Icon
            v-if="!isImageLoaded"
            class="absolute z-0 text-lg text-gray-200"
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
        <div class="order-1 w-full max-w-[calc(100%-(150px+1rem))]">
          <h1 class="mb-3 text-2xl font-black text-black">
            {{ data.name }}
            <span
              v-if="data.nameEng"
              class="ml-2 inline-block font-Fira text-xl font-semibold text-gray-800 opacity-70"
            >
              {{ data.nameEng }}
            </span>
          </h1>
          <p class="text-justify text-base font-normal leading-relaxed text-gray-800">
            <template v-for="(line, index) in introductionLines" :key="index">
              {{ line }}
              <br v-if="index < introductionLines.length - 1" />
            </template>
          </p>
        </div>
      </section>
      <section
        class="flex w-full max-w-full flex-col flex-wrap items-start justify-between gap-4 border-b border-solid border-gray-100 py-6"
      >
        <h2 class="inline-block w-full max-w-full text-xl font-black leading-relaxed text-gray-900">
          工作經歷
          <span class="ml-2 inline-block text-lg font-extrabold text-gray-800">Work Experience</span>
        </h2>
        <ul class="ml-4 flex w-full max-w-[calc(100%-1rem)] flex-col gap-2 px-4 text-base text-gray-900">
          <li
            v-for="(exp, index) in data.experience"
            :key="index"
            class="relative text-lg font-bold leading-relaxed text-blue-950 before:absolute before:-left-4 before:top-[.85rem] before:block before:size-2 before:origin-center before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-blue-900 before:content-[''] after:absolute after:-left-4 after:top-[.85rem] after:block after:h-[calc(100%+.5rem)] after:w-0.5 after:-translate-x-1/2 after:bg-blue-900 after:content-[''] last:after:hidden"
          >
            <p class="text-lg font-bold leading-relaxed text-blue-950">{{ exp.title }}</p>
            <p class="mt-1 text-base font-semibold leading-none text-gray-950">
              {{ exp.company }}
              <span class="ml-1 inline-block text-sm font-medium text-gray-700">({{ exp.start }} - {{ exp.end }})</span>
            </p>
            <p class="mt-0 text-justify text-base font-semibold leading-normal text-gray-500">{{ exp.description }}</p>
          </li>
        </ul>
      </section>
      <section
        class="flex w-full max-w-full flex-col flex-wrap items-start justify-between gap-4 border-b border-solid border-gray-100 py-6"
      >
        <h2 class="inline-block w-full max-w-full text-xl font-black leading-relaxed text-gray-900">
          教育背景
          <span class="ml-2 inline-block text-lg font-extrabold text-gray-800">Education</span>
        </h2>
        <ul class="ml-4 flex w-full max-w-[calc(100%-1rem)] flex-col gap-2 px-4 text-base text-gray-900">
          <li
            v-for="(edu, index) in data.education"
            :key="index"
            class="relative text-lg font-bold leading-relaxed text-blue-950 before:absolute before:-left-4 before:top-[.85rem] before:block before:size-2 before:origin-center before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-blue-900 before:content-[''] after:absolute after:-left-4 after:top-[.85rem] after:block after:h-[calc(100%+.5rem)] after:w-0.5 after:-translate-x-1/2 after:bg-blue-900 after:content-[''] last:after:hidden"
          >
            <p class="text-lg font-bold leading-relaxed text-blue-950">{{ edu.school }}</p>
            <p class="mt-1 text-base font-semibold leading-none text-gray-950">
              {{ edu.department }}
              <span class="ml-1 inline-block text-sm font-medium text-gray-700">
                / {{ edu.degree }} {{ edu.graduation }}</span
              >
              <span class="ml-1 inline-block text-sm font-medium text-gray-700">({{ edu.start }} - {{ edu.end }})</span>
            </p>
          </li>
        </ul>
      </section>
      <section
        class="flex w-full max-w-full flex-col flex-wrap items-start justify-between gap-4 border-b border-solid border-gray-100 py-6"
      >
        <h2 class="inline-block w-full max-w-full text-xl font-black leading-relaxed text-gray-900">
          工作技能
          <span class="ml-2 inline-block text-lg font-extrabold text-gray-800">Skills</span>
        </h2>
        <ul class="flex w-full max-w-full flex-col gap-2 px-2 text-base text-gray-900">
          <li
            v-for="(skill, index) in data.skills"
            :key="index"
            class="relative flex flex-row flex-wrap items-start justify-start gap-0 text-lg font-bold leading-relaxed text-blue-950"
          >
            <p class="inline-block w-full text-lg font-bold leading-relaxed text-blue-950">
              {{ skill['skills-type'] }}
            </p>
            <ul class="flex flex-row flex-wrap items-start justify-start gap-0">
              <li
                v-for="(content, indexContent) in skill['skills-content']"
                :key="indexContent"
                class="relative flex flex-col items-center justify-center text-sm font-normal text-gray-950"
                :class="typeof content !== 'string' ? 'my-1 px-1' : ''"
              >
                <template v-if="typeof content === 'string'">{{ content }}</template>
                <!-- <template v-else>
                  {{ content['skills-content-title'] }} - {{ content['skills-content-proficiency'] }}%
                </template> -->
                <template v-else>
                  <div
                    class="relative aspect-square size-[6.5rem] rounded-full bg-blue-600 before:z-0 before:ml-[50%] before:block before:h-full before:origin-left before:rotate-[--rotate-turn] before:rounded-[0_100%_100%_0/50%] before:bg-blue-600 before:content-[''] after:absolute after:left-1/2 after:top-1/2 after:z-10 after:block after:size-[5.5rem] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-white after:content-['']"
                    :style="{
                      '--rotate-turn': `${Number(content['skills-content-proficiency']) / 100}turn`,
                      'background-image': 'linear-gradient(to right, transparent 50%, rgba(229, 231,235, 1) 0%)',
                    }"
                  >
                    <p
                      class="tracking-none absolute left-1/2 top-[30%] z-20 mt-2 flex w-fit -translate-x-1/2 items-center justify-center bg-white text-center text-lg font-normal leading-none tracking-tighter"
                    >
                      {{ content['skills-content-title'] }}
                    </p>
                    <p
                      class="absolute left-1/2 top-[57.5%] z-20 -translate-x-1/2 text-center text-base font-semibold after:text-xs after:font-light after:content-['%']"
                    >
                      {{ content['skills-content-proficiency'] }}
                    </p>
                  </div>
                </template>
                <template v-if="indexContent < skill['skills-content'].length - 1 && typeof content === 'string'"
                  >、</template
                >
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <!-- <section
        class="flex w-full max-w-full flex-row flex-nowrap items-start justify-between gap-4 border-b border-solid border-gray-100 py-6"
      >
        <div class="flex flex-row gap-2 text-base text-gray-900">
          <p class="font-semibold">出生日期</p>
          <p class="font-normal">{{ data.birthday }}</p>
        </div>
        <div class="flex flex-row gap-2 text-base text-gray-900">
          <p class="font-semibold">居住地</p>
          <p class="font-normal">{{ data.residence }}</p>
        </div>
        <div class="flex flex-row gap-2 text-base text-gray-900">
          <p class="font-semibold">婚姻狀況</p>
          <p class="font-normal">{{ data.marital }}</p>
        </div>
        <div class="flex flex-row gap-2 text-base text-gray-900">
          <p class="font-semibold">兵役狀況</p>
          <p class="font-normal">{{ data.military['military-type'] }} ({{ data.military['military-discharge'] }})</p>
        </div>
      </section> -->
    </div>
  </div>
</template>

<style scoped></style>
