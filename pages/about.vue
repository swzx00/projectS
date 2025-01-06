<script setup lang="ts">
definePageMeta({
  middleware: ['loading'], // 啟用 loading 中介層
})
</script>
<template>
  <div
    class="relative before:fixed before:left-0 before:top-0 before:block before:h-full before:bg-white/30 before:backdrop-blur-sm before:content-[''] before:lg:w-[150px] before:xl:w-[175px] before:2xl:w-[200px]"
  >
    <main
      class="relative z-0 ml-auto mr-0 h-full min-h-[calc(100dvh-8rem)] w-full max-w-full bg-gray-200 py-6 lg:max-w-[calc(100%-150px)] xl:max-w-[calc(100%-175px)] 2xl:max-w-[calc(100%-200px)]"
    >
      <div
        class="flex w-full max-w-full flex-col items-start justify-start gap-2 sm:container sm:max-w-[calc(100%-2rem)] xl:max-w-[1024px] 2xl:max-w-[1280px]"
      >
        <NuxtLink class="ml-auto mr-0 rounded-md bg-blue-600 px-2 py-1 text-white hover:bg-blue-800" to="/resume"
          >Resume</NuxtLink
        >
        <section class="flex w-full max-w-full flex-row items-start justify-start gap-4">
          <picture class="flex size-32 overflow-hidden rounded-[50%] border border-solid border-white shadow-md">
            <img
              class="h-full max-h-full w-full max-w-full translate-y-[50%] scale-[400%] object-cover"
              src="https://drive.google.com/thumbnail?id=1kMVUG36YVx_KLeHIAmsi5k3UEkQPVZys"
              title="About"
              alt="About"
              width="400"
              height="400"
              loading="lazy"
              decoding="async"
            />
          </picture>
          <div>
            <h1 class="my-1 inline-block text-4xl font-black leading-9 text-gray-800">
              林家丞<span class="ml-2 inline-block align-baseline font-Fira text-3xl font-bold leading-9 text-gray-600"
                >Chia-Cheng, Lin</span
              >
            </h1>
            <p class="mt-2 block h-fit w-full max-w-full bg-gray-700 px-4 py-2">
              <span
                class="inline-flex items-baseline text-sm font-medium leading-normal text-yellow-200 after:ml-2 after:inline-block after:h-3 after:w-0.5 after:animate-pulse after:bg-yellow-100 after:content-['']"
                >Hello World!</span
              ><br />
              <span class="text-base font-semibold leading-normal text-slate-50">我是個前端，同時也是個設計。</span>
            </p>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<style scoped></style>
