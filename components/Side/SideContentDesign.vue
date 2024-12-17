<script setup lang="ts">
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useDataFetch } from '~/composables/useDataFetch'
import { useHoverStore } from '~/stores/hoverStore'

// 使用 defineModel 接收父元件的狀態
const showDivProject = defineModel<boolean>('showDivProject')

// 切換顯示狀態
const clickLink = () => {
  showDivProject.value = !showDivProject.value // 改變父元件的狀態
}

const route = useRoute()
const isActive = (tag: string) => route.query.tag === tag

// 使用整合後的 useDataFetch
const { data } = useDataFetch('design')

// 使用 Pinia store
const hoverStore = useHoverStore()
const { hoveredId } = storeToRefs(hoverStore)

const hoveredData = computed(() => {
  if (!hoveredId.value || !data?.value?.dataCard) return null
  return data.value.dataCard.find((item: any) => item.id === hoveredId.value) || null
})
</script>

<template>
  <div
    class="fixed left-10 top-0 z-30 h-full w-full max-w-[calc(100dvw-40px)] border-l border-r border-solid border-zinc-800 bg-zinc-600 shadow-lg xs:max-w-[calc(66dvw-40px)] sm:relative sm:left-0 sm:w-full sm:max-w-none sm:border-l-0 sm:border-r-0 sm:bg-transparent sm:shadow-none"
  >
    <div class="hidden h-fit max-h-fit w-full max-w-full items-center justify-start gap-2 bg-zinc-700 sm:flex">
      <p class="flex h-8 w-fit items-center justify-center bg-zinc-600 px-2 py-1 text-sm font-normal text-white/80">
        Preview
      </p>
    </div>
    <div class="hidden h-fit max-h-fit w-full max-w-full items-center justify-center p-4 sm:flex">
      <div
        :class="[
          'relative flex aspect-[4/3] h-fit max-h-fit w-full max-w-full items-center justify-center overflow-hidden border-4 border-solid bg-[length:12px_12px] bg-center bg-repeat',
          hoveredId
            ? 'border-red-600 bg-gray-100 bg-none'
            : 'border-white bg-gray-400 bg-[url(/images/bg-transparent.svg)]',
        ]"
      >
        <Transition
          name="zoomIn-img"
          mode="out-in"
          enter-active-class="transition-all duration-1000 delay-200 ease-linear overflow-hidden"
          enter-from-class="opacity-0 scale-125 blur"
          enter-to-class="opacity-100 scale-100 blur-none"
          leave-active-class="transition-all duration-300 delay-0 ease-linear overflow-hidden"
          leave-from-class="opacity-50 scale-100 blur-none"
          leave-to-class="opacity-0 scale-100 blur-sm"
        >
          <img
            v-if="hoveredData?.image"
            class="absolute z-10 aspect-[4/3] size-full max-h-full max-w-full object-cover"
            :src="hoveredData.image"
            :title="hoveredData.title"
            :alt="hoveredData.title"
            width="400"
            height="300"
            loading="lazy"
            decoding="async"
          />
        </Transition>
      </div>
    </div>
    <div class="h-fit max-h-fit w-full max-w-full border-t border-solid border-zinc-700 bg-zinc-700">
      <p
        class="flex h-8 w-fit cursor-default items-center justify-center bg-zinc-600 px-2 py-1 text-sm font-normal text-white/80"
      >
        Layers
      </p>
      <div
        class="hidden h-fit w-full items-center justify-start gap-3 border-b border-solid border-zinc-700 bg-zinc-600 px-2 py-1 text-xs font-normal text-white/80 *:pointer-events-none *:select-none *:opacity-50 sm:flex"
      >
        <div
          class="flex w-[60px] items-center justify-start border border-solid border-zinc-400 bg-zinc-500 p-0.5 leading-none"
        >
          <Icon
            class="mr-1 flex aspect-square size-[14px] items-center justify-center leading-none text-zinc-400"
            name="uil:search"
            size="12"
            title="Fill"
            alt="Fill"
          />
          <span class="flex h-[18px] w-fit items-center justify-center text-[12px] leading-none text-zinc-400">
            Kind</span
          >
          <Icon
            class="ml-auto mr-0 flex aspect-square size-[18px] items-center justify-center leading-none text-zinc-400"
            name="uil:angle-down"
            size="16"
            title="Fill"
            alt="Fill"
          />
        </div>
        <Icon name="mingcute:pic-line" size="16" title="Picture" alt="Picture" />
        <Icon class="rotate-45" name="carbon:contrast" size="16" title="Contras" alt="Contras" />
        <Icon name="mdi:format-text" size="16" title="Text" alt="Text" />
        <Icon name="iconoir:frame-simple" size="16" title="Frame" alt="Frame" />
        <Icon name="mdi:file-multiple-outline" size="16" title="Copy" alt="Copy" />
        <div
          class="relative flex h-[20px] w-[9px] items-start justify-center rounded-full border border-solid border-zinc-400"
        >
          <span class="absolute -top-[1px] block aspect-square size-[12px] rounded-full bg-zinc-400"></span>
        </div>
      </div>
      <div
        class="hidden h-fit w-full items-center justify-start gap-1 border-b border-solid border-zinc-700 bg-zinc-600 px-2 py-1 text-xs font-normal text-white/80 *:pointer-events-none *:select-none *:opacity-50 sm:flex"
      >
        <div
          class="flex w-[112px] items-center justify-between border border-solid border-zinc-400 bg-zinc-500 p-0.5 leading-none"
        >
          <span class="flex h-[18px] w-fit items-center justify-center text-[12px] leading-none text-zinc-400"
            >Normal</span
          >
          <Icon
            class="flex aspect-square size-[18px] items-center justify-center leading-none text-zinc-400"
            name="uil:angle-down"
            size="16"
            title="Fill"
            alt="Fill"
          />
        </div>
        <div class="ml-1 flex items-center justify-start">
          <p class="mr-1">Opacity:</p>
          <span
            class="flex h-[18px] w-fit items-center justify-center border border-r-0 border-solid border-zinc-400 bg-zinc-700 p-0.5 text-[12px] leading-none text-zinc-400"
            >100%</span
          >
          <Icon
            class="flex aspect-square size-[18px] items-center justify-center border border-solid border-zinc-400 bg-zinc-600 p-0.5 leading-none text-zinc-400"
            name="uil:angle-down"
            size="16"
            title="Fill"
            alt="Fill"
          />
        </div>
      </div>
      <div
        class="flex h-fit w-full items-center justify-start gap-1 border-b border-solid border-zinc-700 bg-zinc-600 px-2 py-1 text-xs font-normal text-white/80 *:pointer-events-none *:select-none *:opacity-50"
      >
        <p>Lock:</p>
        <Icon name="bx:bxs-chess" size="16" title="Transparency" alt="Transparency" />
        <Icon name="material-symbols:brush" size="16" title="Brush" alt="Brush" />
        <Icon name="mdi:arrow-all" size="16" title="Move" alt="Move" />
        <Icon name="mingcute:frame-line" size="16" title="Cut" alt="Cut" />
        <Icon name="material-symbols-light:lock" size="16" title="Lock" alt="Lock" />
        <div class="ml-4 flex items-center justify-start">
          <p class="mr-1">Fill:</p>
          <span
            class="flex h-[18px] w-fit items-center justify-center border border-r-0 border-solid border-zinc-400 bg-zinc-700 p-0.5 text-[12px] leading-none text-zinc-400"
            >100%</span
          >
          <Icon
            class="flex aspect-square size-[18px] items-center justify-center border border-solid border-zinc-400 bg-zinc-600 p-0.5 leading-none text-zinc-400"
            name="uil:angle-down"
            size="16"
            title="Fill"
            alt="Fill"
          />
        </div>
      </div>
      <div class="overflow-x-hidden overflow-y-hidden">
        <NuxtLink
          class="group flex w-full cursor-pointer items-center justify-start gap-0 border-b border-solid border-zinc-700 bg-zinc-600 text-sm text-white"
          to="/design?tag=design"
          @click="clickLink"
        >
          <div
            class="aspect-squares flex size-8 items-center justify-center border-l-0 border-r border-solid border-zinc-700 sm:size-10"
          >
            <div
              class="border-solid border-b-white/30 border-l-black/30 border-r-white/30 border-t-black/30 bg-zinc-600 shadow-inner"
              :class="isActive('design') ? '*:border-0 *:opacity-100' : 'border *:opacity-0'"
            >
              <Icon name="mdi:eye" size="16" title="Show" alt="Show" />
            </div>
          </div>
          <div
            class="flex h-full w-full max-w-[calc(100%-2rem)] cursor-pointer items-center justify-start gap-0 px-0.5 py-1 group-hover:bg-slate-500 sm:max-w-[calc(100%-2.5rem)] sm:py-2 lg:px-2"
          >
            <Icon
              class="mr-0.5 size-fit lg:mr-1"
              name="akar-icons:triangle-down-fill"
              size="16"
              title="Folder Open"
              alt="Folder Open"
            />
            <Icon class="mr-0.5 size-fit lg:mr-2" name="bx:bxs-folder-open" size="18" title="Folder" alt="Folder" />
            Design
          </div>
        </NuxtLink>
        <ul
          class="flex flex-col items-start justify-start bg-zinc-600 p-0 text-lg font-normal text-white/90 *:flex *:w-full"
        >
          <li class="group">
            <NuxtLink
              class="flex w-full cursor-pointer items-center justify-start gap-0 border-b border-solid border-zinc-700 text-sm lg:text-base"
              to="/design?tag=web"
              @click="clickLink"
            >
              <div
                class="flex h-10 w-8 items-center justify-center border-r border-solid border-zinc-700 sm:h-12 sm:w-10"
              >
                <div
                  class="border-solid border-b-white/30 border-l-black/30 border-r-white/30 border-t-black/30 bg-zinc-600 shadow-inner"
                  :class="isActive('web') ? '*:border-0 *:opacity-100' : 'border *:opacity-0'"
                >
                  <Icon name="mdi:eye" size="16" title="Show" alt="Show" />
                </div>
              </div>
              <div
                class="flex h-full w-full max-w-[calc(100%-2rem)] cursor-pointer items-center justify-start gap-1 px-1 py-2 group-hover:bg-slate-500 sm:max-w-[calc(100%-2.5rem)] lg:gap-2 lg:px-2"
              >
                <div
                  class="ml-4 flex aspect-square size-6 items-center justify-center border border-solid border-gray-800 bg-white lg:ml-6 lg:size-8"
                >
                  <Icon class="size-fit" name="vscode-icons:file-type-vscode" size="18" title="Web" alt="Web" />
                </div>
                Web
              </div>
            </NuxtLink>
          </li>
          <li class="group">
            <NuxtLink
              class="flex w-full cursor-pointer items-center justify-start gap-0 border-b border-solid border-zinc-700 text-sm lg:text-base"
              to="/design?tag=edm"
              @click="clickLink"
            >
              <div
                class="flex h-10 w-8 items-center justify-center border-r border-solid border-zinc-700 sm:h-12 sm:w-10"
              >
                <div
                  class="border-solid border-b-white/30 border-l-black/30 border-r-white/30 border-t-black/30 bg-zinc-600 shadow-inner"
                  :class="isActive('edm') ? '*:border-0 *:opacity-100' : 'border *:opacity-0'"
                >
                  <Icon name="mdi:eye" size="16" title="Show" alt="Show" />
                </div>
              </div>
              <div
                class="flex h-full w-full max-w-[calc(100%-2rem)] cursor-pointer items-center justify-start gap-1 px-1 py-2 group-hover:bg-slate-500 sm:max-w-[calc(100%-2.5rem)] lg:gap-2 lg:px-2"
              >
                <div
                  class="ml-4 flex aspect-square size-6 items-center justify-center border border-solid border-gray-800 bg-white lg:ml-6 lg:size-8"
                >
                  <Icon class="size-fit" name="logos:adobe-dreamweaver" size="18" title="Edm" alt="Edm" />
                </div>
                Edm
              </div>
            </NuxtLink>
          </li>
          <li class="group">
            <NuxtLink
              class="flex w-full cursor-pointer items-center justify-start gap-0 border-b border-solid border-zinc-700 text-sm lg:text-base"
              to="/design?tag=interface"
              @click="clickLink"
            >
              <div
                class="flex h-10 w-8 items-center justify-center border-r border-solid border-zinc-700 sm:h-12 sm:w-10"
              >
                <div
                  class="border-solid border-b-white/30 border-l-black/30 border-r-white/30 border-t-black/30 bg-zinc-600 shadow-inner"
                  :class="isActive('interface') ? '*:border-0 *:opacity-100' : 'border *:opacity-0'"
                >
                  <Icon name="mdi:eye" size="16" title="Show" alt="Show" />
                </div>
              </div>
              <div
                class="flex h-full w-full max-w-[calc(100%-2rem)] cursor-pointer items-center justify-start gap-1 px-1 py-2 group-hover:bg-slate-500 sm:max-w-[calc(100%-2.5rem)] lg:gap-2 lg:px-2"
              >
                <div
                  class="ml-4 flex aspect-square size-6 items-center justify-center border border-solid border-gray-800 bg-white lg:ml-6 lg:size-8"
                >
                  <Icon class="size-fit" name="skill-icons:figma-dark" size="18" title="Interface" alt="Interface" />
                </div>
                Interface
              </div>
            </NuxtLink>
          </li>
          <li class="group">
            <NuxtLink
              class="flex w-full cursor-pointer items-center justify-start gap-0 border-b border-solid border-zinc-700 text-sm lg:text-base"
              to="/design?tag=publication"
              @click="clickLink"
            >
              <div
                class="flex h-10 w-8 items-center justify-center border-r border-solid border-zinc-700 sm:h-12 sm:w-10"
              >
                <div
                  class="border-solid border-b-white/30 border-l-black/30 border-r-white/30 border-t-black/30 bg-zinc-600 shadow-inner"
                  :class="isActive('publication') ? '*:border-0 *:opacity-100' : 'border *:opacity-0'"
                >
                  <Icon name="mdi:eye" size="16" title="Show" alt="Show" />
                </div>
              </div>
              <div
                class="flex h-full w-full max-w-[calc(100%-2rem)] cursor-pointer items-center justify-start gap-1 text-ellipsis px-1 py-2 group-hover:bg-slate-500 sm:max-w-[calc(100%-2.5rem)] lg:gap-2 lg:px-2"
              >
                <div
                  class="ml-4 flex aspect-square size-6 items-center justify-center border border-solid border-gray-800 bg-white lg:ml-6 lg:size-8"
                >
                  <Icon class="size-fit" name="logos:adobe-indesign" size="18" title="Publication" alt="Publication" />
                </div>
                Publication
              </div>
            </NuxtLink>
          </li>
          <li class="group">
            <NuxtLink
              class="flex w-full cursor-pointer items-center justify-start gap-0 border-b border-solid border-zinc-700 text-sm lg:text-base"
              to="/design?tag=graphic"
              @click="clickLink"
            >
              <div
                class="flex h-10 w-8 items-center justify-center border-r border-solid border-zinc-700 sm:h-12 sm:w-10"
              >
                <div
                  class="border-solid border-b-white/30 border-l-black/30 border-r-white/30 border-t-black/30 bg-zinc-600 shadow-inner"
                  :class="isActive('graphic') ? '*:border-0 *:opacity-100' : 'border *:opacity-0'"
                >
                  <Icon name="mdi:eye" size="16" title="Show" alt="Show" />
                </div>
              </div>
              <div
                class="flex h-full w-full max-w-[calc(100%-2rem)] cursor-pointer items-center justify-start gap-1 px-1 py-2 group-hover:bg-slate-500 sm:max-w-[calc(100%-2.5rem)] lg:gap-2 lg:px-2"
              >
                <div
                  class="ml-4 flex aspect-square size-6 items-center justify-center border border-solid border-gray-800 bg-white lg:ml-6 lg:size-8"
                >
                  <Icon class="size-fit" name="logos:adobe-photoshop" size="18" title="Graphic" alt="Graphic" />
                </div>
                Graphic
              </div>
            </NuxtLink>
          </li>
          <li class="group">
            <NuxtLink
              class="flex w-full cursor-pointer items-center justify-start gap-0 border-b border-solid border-zinc-700 text-sm lg:text-base"
              to="/design?tag=media"
              @click="clickLink"
            >
              <div
                class="flex h-10 w-8 items-center justify-center border-r border-solid border-zinc-700 sm:h-12 sm:w-10"
              >
                <div
                  class="border-solid border-b-white/30 border-l-black/30 border-r-white/30 border-t-black/30 bg-zinc-600 shadow-inner"
                  :class="isActive('media') ? '*:border-0 *:opacity-100' : 'border *:opacity-0'"
                >
                  <Icon name="mdi:eye" size="16" title="Show" alt="Show" />
                </div>
              </div>
              <div
                class="flex h-full w-full max-w-[calc(100%-2rem)] cursor-pointer items-center justify-start gap-1 px-1 py-2 group-hover:bg-slate-500 sm:max-w-[calc(100%-2.5rem)] lg:gap-2 lg:px-2"
              >
                <div
                  class="ml-4 flex aspect-square size-6 items-center justify-center border border-solid border-gray-800 bg-white lg:ml-6 lg:size-8"
                >
                  <Icon class="size-fit" name="logos:adobe-after-effects" size="18" title="Media" alt="Media" />
                </div>
                Media
              </div>
            </NuxtLink>
          </li>
          <li class="group">
            <NuxtLink
              class="flex w-full cursor-pointer items-center justify-start gap-0 border-b border-solid border-zinc-700 text-sm lg:text-base"
              to="/design?tag=product"
              @click="clickLink"
            >
              <div
                class="flex h-10 w-8 items-center justify-center border-r border-solid border-zinc-700 sm:h-12 sm:w-10"
              >
                <div
                  class="border-solid border-b-white/30 border-l-black/30 border-r-white/30 border-t-black/30 bg-zinc-600 shadow-inner"
                  :class="isActive('product') ? '*:border-0 *:opacity-100' : 'border *:opacity-0'"
                >
                  <Icon name="mdi:eye" size="16" title="Show" alt="Show" />
                </div>
              </div>
              <div
                class="flex h-full w-full max-w-[calc(100%-2rem)] cursor-pointer items-center justify-start gap-1 px-1 py-2 group-hover:bg-slate-500 sm:max-w-[calc(100%-2.5rem)] lg:gap-2 lg:px-2"
              >
                <div
                  class="ml-4 flex aspect-square size-6 items-center justify-center border border-solid border-gray-800 bg-white lg:ml-6 lg:size-8"
                >
                  <Icon class="size-fit" name="logos:adobe-illustrator" size="18" title="Product" alt="Product" />
                </div>
                Product
              </div>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
