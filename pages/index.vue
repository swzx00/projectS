<script setup lang="ts">
definePageMeta({
  layout: false,
  middleware: ['loading'], // 啟用 loading 中介層
})

// 定義狀態變數 isHover
const isHover = ref(false)
</script>

<template>
  <div
    class="relative h-dvh max-h-full w-dvw max-w-full overflow-hidden bg-[url(/images/SequoiaLight.webp)] bg-cover bg-top bg-no-repeat"
  >
    <div
      class="translate-none relative flex w-full flex-col items-center justify-start gap-48 px-4 xs:absolute xs:left-1/2 xs:top-1/2 xs:w-fit xs:-translate-x-1/2 xs:-translate-y-1/2 xs:px-0"
    >
      <div
        class="group fixed top-1/2 mx-auto flex w-full -translate-y-3/4 flex-col items-start justify-center gap-6 *:transition-all *:duration-300 *:ease-linear xs:static xs:top-0 xs:w-fit xs:translate-y-0"
        @mouseenter="isHover = true"
        @mouseleave="isHover = false"
      >
        <div
          class="relative mx-auto size-36 rounded-full bg-slate-50 p-7 drop-shadow-black-100 *:absolute *:left-1/2 *:top-1/2 *:size-20 *:-translate-x-1/2 *:-translate-y-1/2 group-hover:bg-white group-hover:drop-shadow-black-000"
        >
          <Transition
            name="zoomIn-logo"
            enter-active-class="transition-all duration-700 ease-linear overflow-hidden"
            enter-from-class="opacity-100 pixelated"
            enter-to-class="opacity-100 pixelated-none"
            leave-active-class="transition-all duration-700 ease-linear overflow-hidden"
            leave-from-class="opacity-100 pixelated-none"
            leave-to-class="opacity-100 pixelated"
          >
            <!-- Hover變換圖片 -->
            <img
              v-if="isHover"
              src="/images/logo-02.svg"
              title="林家丞 作品集"
              alt="林家丞 作品集"
              width="88"
              height="88"
              loading="eager"
              decoding="sync"
            />
            <!-- 預設圖片 -->
            <img
              v-else
              src="/images/logo-01.svg"
              title="林家丞 作品集"
              alt="林家丞 作品集"
              width="88"
              height="88"
              loading="lazy"
              decoding="async"
            />
          </Transition>
        </div>
        <h1
          class="mx-auto w-fit cursor-default text-center align-baseline text-xl font-medium leading-loose tracking-wide text-gray-50 drop-shadow-black-200 group-hover:text-white group-hover:drop-shadow-black-100"
        >
          <span class="text-2xl font-semibold text-white group-hover:text-white">林家丞&nbsp;</span>作品集
        </h1>
        <h2
          class="mx-auto mt-12 w-fit cursor-default text-center align-baseline font-NotoSerif text-base font-medium leading-normal tracking-tight text-gray-100 drop-shadow-black-200 group-hover:text-white group-hover:drop-shadow-black-100"
        >
          Portfolio WebSite&nbsp;<span class="text-sm font-normal text-gray-200 group-hover:text-white"
            >Chia-Cheng, Lin</span
          >
        </h2>
      </div>
      <div
        class="fixed bottom-2 top-auto mx-auto my-auto flex h-fit max-h-full w-[calc(100%-(.5rem*2))] max-w-full flex-row flex-nowrap items-start justify-center gap-4 rounded-full bg-white/30 px-8 py-3 backdrop-blur xs:relative xs:w-fit xs:gap-8 xs:rounded-none xs:bg-transparent xs:p-0 xs:backdrop-blur-none"
      >
        <NuxtLink
          class="group block h-fit w-[calc((100%-(1rem*3))/3)] cursor-pointer xs:w-fit"
          to="/about"
          target="_self"
        >
          <figure class="flex h-fit w-full flex-col items-center justify-start gap-1 xs:w-fit">
            <div
              class="aspect-square size-full overflow-hidden rounded-lg shadow-md transition-all group-hover:shadow-none xs:size-16"
            >
              <img
                src="/images/icon-app-contacts.svg"
                title="About"
                alt="About"
                width="48"
                height="48"
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption
              class="absolute -mt-12 hidden rounded-full bg-black/50 p-2 text-base font-medium leading-none tracking-normal text-gray-50 drop-shadow-black-100 group-hover:inline group-hover:text-white group-hover:drop-shadow-black-000 xs:relative xs:mt-0 xs:inline xs:bg-transparent xs:p-0 xs:text-sm xs:leading-loose"
            >
              About
            </figcaption>
          </figure>
        </NuxtLink>
        <NuxtLink
          class="group block h-fit w-[calc((100%-(1rem*3))/3)] cursor-pointer xs:w-fit"
          to="/portfolio"
          target="_self"
        >
          <figure class="flex h-fit w-full flex-col items-center justify-start gap-1 xs:w-fit">
            <div class="aspect-square size-full overflow-hidden rounded-lg xs:size-16">
              <img
                class="drop-shadow-md transition-all group-hover:drop-shadow-none"
                src="/images/icon-app-folder.svg"
                title="Portfolio"
                alt="Portfolio"
                width="48"
                height="48"
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption
              class="absolute -mt-12 hidden rounded-full bg-black/50 p-2 text-base font-medium leading-none tracking-normal text-gray-50 drop-shadow-black-100 group-hover:inline group-hover:text-white group-hover:drop-shadow-black-000 xs:relative xs:mt-0 xs:inline xs:bg-transparent xs:p-0 xs:text-sm xs:leading-loose"
            >
              Portfolio
            </figcaption>
          </figure>
        </NuxtLink>
        <NuxtLink
          class="group block h-fit w-[calc((100%-(1rem*3))/3)] cursor-pointer xs:w-fit"
          to="/portfolio/frontend?tag=frontend"
          target="_self"
        >
          <figure class="flex h-fit w-full flex-col items-center justify-start gap-1 xs:w-fit">
            <div
              class="aspect-square size-full overflow-hidden rounded-lg shadow-md transition-all group-hover:shadow-none xs:size-16"
            >
              <img
                src="/images/icon-app-vscode.svg"
                title="Frontend"
                alt="Frontend"
                width="48"
                height="48"
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption
              class="absolute -mt-12 hidden rounded-full bg-black/50 p-2 text-base font-medium leading-none tracking-normal text-gray-50 drop-shadow-black-100 group-hover:inline group-hover:text-white group-hover:drop-shadow-black-000 xs:relative xs:mt-0 xs:inline xs:bg-transparent xs:p-0 xs:text-sm xs:leading-loose"
            >
              Frontend
            </figcaption>
          </figure>
        </NuxtLink>
        <NuxtLink
          class="group block h-fit w-[calc((100%-(1rem*3))/3)] cursor-pointer xs:w-fit"
          to="/portfolio/design?tag=design"
          target="_self"
        >
          <figure class="flex h-fit w-full flex-col items-center justify-start gap-1 xs:w-fit">
            <div
              class="aspect-square size-full overflow-hidden rounded-lg shadow-md transition-all group-hover:shadow-none xs:size-16"
            >
              <img
                src="/images/icon-app-photoshop.svg"
                title="Design"
                alt="Design"
                width="48"
                height="48"
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption
              class="absolute -mt-12 hidden rounded-full bg-black/50 p-2 text-base font-medium leading-none tracking-normal text-gray-50 drop-shadow-black-100 group-hover:inline group-hover:text-white group-hover:drop-shadow-black-000 xs:relative xs:mt-0 xs:inline xs:bg-transparent xs:p-0 xs:text-sm xs:leading-loose"
            >
              Design
            </figcaption>
          </figure>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pixelated {
  filter: blur(1.5px) brightness(50%) contrast(500%) saturate(200%) opacity(0%);
}
.pixelated-none {
  filter: none;
}
</style>
