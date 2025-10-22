<script setup lang="ts">
import { ref } from 'vue'
import { useImageLoading } from '~/composables/useImageLoading'

const props = defineProps<{
  item: any
  dataLoaded: boolean
  pending: boolean
  error: Error | null
}>()

const { isImageLoaded, imageRef, handleImageLoad } = useImageLoading()
const imageSizes = ref<{ [key: number]: { width: number; height: number } }>({})

const updateImageSize = (index: number, event: Event) => {
  const img = event.target as HTMLImageElement
  imageSizes.value[index] = {
    width: img.naturalWidth,
    height: img.naturalHeight,
  }
}

function handleImageLoadCombined(index: number, event: Event) {
  updateImageSize(index, event)
  handleImageLoad()
}
</script>

<template>
  <div
    v-if="props.dataLoaded && props.item"
    class="flex w-full max-w-full flex-col items-start justify-start gap-0 !px-0 pt-4 sm:container sm:max-w-[calc(100%-2rem)] xl:max-w-[1024px] 2xl:max-w-[1280px]"
  >
    <BreadCrumb :card-id="props.item.id" :title="props.item.title" :status="props.item.status"></BreadCrumb>
    <div class="flex w-full max-w-full flex-row items-end justify-between gap-0 px-4 sm:px-0">
      <h1 class="inline-block w-fit max-w-[calc(100%-6rem)] break-words text-2xl font-bold text-black">
        {{ props.item.title }}
      </h1>
      <span class="inline-block w-24 max-w-full text-end text-sm font-light text-gray-900">{{ props.item.date }}</span>
    </div>
    <div class="mt-4 flex w-full max-w-full flex-wrap items-start justify-start gap-x-3 gap-y-2 px-4 sm:px-0">
      <span
        v-for="(tag, index) in props.item.tag"
        :key="index"
        class="cursor-default text-start text-base font-light capitalize leading-none tracking-normal text-blue-500"
        >#{{ tag }}</span
      >
    </div>
    <main
      class="mb-0 mt-8 w-full max-w-full border-x-0 border-y-2 border-solid border-white bg-white shadow-lg sm:mb-12 sm:border-4"
    >
      <picture
        v-for="(images, index) in props.item.images"
        :key="index"
        class="block w-full max-w-full border-x-0 border-y-4 border-solid border-white first:border-t-2 last:border-b-2 sm:border-x sm:border-y-2 first:sm:border-t-0 last:sm:border-b-0"
      >
        <Icon
          v-if="!isImageLoaded"
          class="absolute z-0 text-lg text-black"
          name="line-md:loading-twotone-loop"
          size="20"
          title="Loading"
          alt="Loading"
        />
        <img
          ref="imageRef"
          class="border-x-0 border-y border-solid border-gray-300 object-contain lg:border-2"
          :src="images"
          :title="`${item.title}-${index + 1}`"
          :alt="`${item.title}-${index + 1}`"
          :width="imageSizes[index]?.width || ''"
          :height="imageSizes[index]?.height || ''"
          loading="lazy"
          decoding="async"
          @load="handleImageLoadCombined(index, $event)"
        />
      </picture>
      <article class="article flx-col mb-12 mt-8 px-4 text-start text-base font-normal leading-normal lg:my-12 lg:px-8">
        <p
          v-for="(line, index) in props.item.content.split('\n')"
          :key="index"
          class="my-2 block w-fit max-w-full first:mt-0 last:mb-0"
        >
          {{ line }}
        </p>
        <NuxtLink
          v-if="item.demo"
          class="mt-12 inline-flex items-center justify-start gap-1 text-sm font-normal text-blue-400 underline underline-offset-2 transition-all hover:font-bold hover:text-blue-600 hover:underline-offset-4"
          :to="props.item.demo"
          target="_blank"
          :title="props.item.title"
        >
          <Icon class="inline-block" name="uil:link" size="14" title="Demo Link" alt="Demo Link" />
          &lt;Demo&gt;
        </NuxtLink>
      </article>
    </main>
  </div>
</template>

<style scoped>
.article br {
  display: block;
  height: 1rem;
  margin-bottom: 1rem;
}
</style>
