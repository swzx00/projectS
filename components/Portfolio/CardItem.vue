<script setup lang="ts">
// 使用 defineModel 來傳遞資料
defineModel('title', {
  type: String,
  required: true,
})

defineModel('tags', {
  type: Array as PropType<string[]>,
  required: true,
})

defineModel('content', {
  type: String,
  required: true,
})

defineModel('image', {
  type: String,
  required: true,
})
</script>

<template>
  <div
    class="group flex w-full max-w-full flex-col flex-nowrap items-start justify-start overflow-hidden rounded-md border border-solid border-slate-800 bg-slate-800 transition-all duration-300 ease-linear first:*:rounded-t-md last:*:rounded-b-md hover:border-white hover:bg-white"
  >
    <div
      class="relative flex aspect-[3/2] size-full h-full max-h-full w-full max-w-full items-center justify-center overflow-hidden"
    >
      <img
        class="z-10 size-full max-h-full max-w-full object-cover transition-all duration-300 ease-linear group-hover:scale-105"
        :src="image"
        :title="title"
        :alt="title"
        width="300"
        height="200"
        loading="lazy"
        decoding="async"
      />
      <Icon
        class="absolute z-0 text-lg text-white"
        name="line-md:loading-twotone-loop"
        size="20"
        title="Loading"
        alt="Loading"
      />
    </div>
    <div
      class="card-body flex aspect-[7/3] size-full max-h-full max-w-full flex-col flex-nowrap items-start justify-between gap-1.5 px-3 py-2"
    >
      <h3
        class="m-0 inline-block w-fit max-w-full truncate p-0 text-start text-lg font-bold text-amber-200 group-hover:text-black"
      >
        {{ title }}
      </h3>
      <div class="flex h-6 items-center gap-1 overflow-hidden text-ellipsis whitespace-nowrap">
        <span
          v-for="tag in tags"
          :key="tag"
          class="box-border inline h-6 rounded-full border border-solid border-red-500 px-1.5 py-0.5 text-center align-middle font-Fira text-xs font-normal uppercase text-red-500 group-hover:border-blue-500 group-hover:text-blue-500"
        >
          {{ tag }}
        </span>
      </div>
      <p
        class="text-normal line-clamp-2 justify-items-end text-justify font-normal text-slate-400 group-hover:text-gray-600"
      >
        {{ content }}
      </p>
      <NuxtLink
        to="/"
        class="mb-0 ml-auto mr-0 mt-auto text-end font-Fira text-sm font-light text-slate-600 underline underline-offset-2 transition-all hover:font-normal hover:text-gray-800 hover:underline-offset-4 group-hover:text-gray-800"
      >
        &lt;More&gt;
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
