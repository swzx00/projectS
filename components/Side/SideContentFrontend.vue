<script setup lang="ts">
import { useRoute } from 'vue-router'

// 使用 defineModel 接收父元件的狀態
const showDivProject = defineModel<boolean>('showDivProject')

// 切換顯示狀態
const clickLink = () => {
  showDivProject.value = !showDivProject.value // 改變父元件的狀態
}

const route = useRoute()
const isActive = (tag: string) => route.query.tag === tag
</script>

<template>
  <div
    class="fixed left-10 top-0 z-30 h-full w-full max-w-[calc(600dvw-40px)] border-l border-r border-solid border-white/50 bg-slate-800 shadow-lg xs:max-w-[calc(66dvw-40px)] sm:relative sm:left-0 sm:w-full sm:max-w-none sm:border-l-0 sm:border-r-0 sm:bg-transparent sm:shadow-none"
  >
    <p class="flex items-center justify-start gap-2 px-2 pb-1 pt-2 text-sm font-normal text-white/80">Hello World!</p>
    <NuxtLink
      class="group mt-1 flex w-full cursor-pointer items-center justify-start gap-2 px-3 pb-1 pt-2 text-lg font-normal hover:bg-black/20 hover:font-semibold"
      :class="
        isActive('frontend')
          ? 'text-amber-200 after:ml-auto after:mr-0 after:aspect-square after:size-2 after:rounded-full after:bg-amber-200 after:content-[\'\'] hover:text-amber-400 hover:after:bg-amber-400'
          : 'text-white/80 hover:text-white'
      "
      to="/frontend?tag=frontend"
      @click="clickLink"
      ><Icon class="text-white/80" name="uil:angle-down" size="18" />
      <Icon name="vscode-icons:folder-type-vscode" size="16" title="Frontend" alt="Frontend" />
      Frontend
      <!-- <span class="ml-auto mr-0 aspect-square size-2 rounded-full bg-amber-200 group-hover:bg-amber-400"></span> -->
    </NuxtLink>
    <ul class="flex flex-col items-start justify-start p-0 text-lg font-normal text-white/90 *:flex *:w-full">
      <li class="group">
        <NuxtLink
          class="flex w-full cursor-pointer items-center justify-start gap-2 before:ml-12 before:mr-2 before:block before:h-full before:w-[1px] before:bg-white/20 before:content-[''] after:content-['M'] hover:font-semibold group-hover:bg-black/20"
          :class="
            isActive('nuxt')
              ? 'text-amber-200 after:ml-auto after:mr-2 after:inline-block after:h-4 after:w-4 after:text-sm after:font-bold hover:text-amber-400'
              : 'text-white/80 after:hidden hover:text-white'
          "
          to="/frontend?tag=nuxt"
          @click="clickLink"
        >
          <Icon name="vscode-icons:file-type-nuxt" size="16" title="Nuxt" alt="Nuxt" />
          Nuxt
        </NuxtLink>
      </li>
      <li class="group">
        <NuxtLink
          class="flex w-full cursor-pointer items-center justify-start gap-2 before:ml-12 before:mr-2 before:block before:h-full before:w-[1px] before:bg-white/20 before:content-[''] after:content-['M'] hover:font-semibold group-hover:bg-black/20"
          :class="
            isActive('vue')
              ? 'text-amber-200 after:ml-auto after:mr-2 after:inline-block after:h-4 after:w-4 after:text-sm after:font-bold hover:text-amber-400'
              : 'text-white/80 after:hidden hover:text-white'
          "
          to="/frontend?tag=vue"
          @click="clickLink"
        >
          <Icon name="vscode-icons:file-type-vue" size="16" title="Vue" alt="Vue" />
          Vue
        </NuxtLink>
      </li>
      <li class="group">
        <NuxtLink
          class="flex w-full cursor-pointer items-center justify-start gap-2 before:ml-12 before:mr-2 before:block before:h-full before:w-[1px] before:bg-white/20 before:content-[''] after:content-['M'] hover:font-semibold group-hover:bg-black/20"
          :class="
            isActive('tailwind')
              ? 'text-amber-200 after:ml-auto after:mr-2 after:inline-block after:h-4 after:w-4 after:text-sm after:font-bold hover:text-amber-400'
              : 'text-white/80 after:hidden hover:text-white'
          "
          to="/frontend?tag=tailwind"
          @click="clickLink"
        >
          <Icon name="vscode-icons:file-type-tailwind" size="16" title="Tailwind" alt="Tailwind" />
          Tailwind
        </NuxtLink>
      </li>
      <li class="group">
        <NuxtLink
          class="flex w-full cursor-pointer items-center justify-start gap-2 before:ml-12 before:mr-2 before:block before:h-full before:w-[1px] before:bg-white/20 before:content-[''] after:content-['M'] hover:font-semibold group-hover:bg-black/20"
          :class="
            isActive('bootstrap')
              ? 'text-amber-200 after:ml-auto after:mr-2 after:inline-block after:h-4 after:w-4 after:text-sm after:font-bold hover:text-amber-400'
              : 'text-white/80 after:hidden hover:text-white'
          "
          to="/frontend?tag=bootstrap"
          @click="clickLink"
        >
          <Icon name="devicon:bootstrap" size="16" title="Bootstrap" alt="Bootstrap" />
          Bootstrap
        </NuxtLink>
      </li>
      <li class="group">
        <NuxtLink
          class="flex w-full cursor-pointer items-center justify-start gap-2 before:ml-12 before:mr-2 before:block before:h-full before:w-[1px] before:bg-white/20 before:content-[''] after:content-['M'] hover:font-semibold group-hover:bg-black/20"
          :class="
            isActive('html')
              ? 'text-amber-200 after:ml-auto after:mr-2 after:inline-block after:h-4 after:w-4 after:text-sm after:font-bold hover:text-amber-400'
              : 'text-white/80 after:hidden hover:text-white'
          "
          to="/frontend?tag=html"
          @click="clickLink"
        >
          <Icon name="vscode-icons:file-type-html" size="16" title="Html" alt="Html" />
          Html
        </NuxtLink>
      </li>
      <li class="group">
        <NuxtLink
          class="flex w-full cursor-pointer items-center justify-start gap-2 before:ml-12 before:mr-2 before:block before:h-full before:w-[1px] before:bg-white/20 before:content-[''] after:content-['M'] hover:font-semibold group-hover:bg-black/20"
          :class="
            isActive('css')
              ? 'text-amber-200 after:ml-auto after:mr-2 after:inline-block after:h-4 after:w-4 after:text-sm after:font-bold hover:text-amber-400'
              : 'text-white/80 after:hidden hover:text-white'
          "
          to="/frontend?tag=css"
          @click="clickLink"
        >
          <Icon name="vscode-icons:file-type-css" size="16" title="Css" alt="Css" />
          Css
        </NuxtLink>
      </li>
      <li class="group">
        <NuxtLink
          class="flex w-full cursor-pointer items-center justify-start gap-2 before:ml-12 before:mr-2 before:block before:h-full before:w-[1px] before:bg-white/20 before:content-[''] after:content-['M'] hover:font-semibold group-hover:bg-black/20"
          :class="
            isActive('typescript')
              ? 'text-amber-200 after:ml-auto after:mr-2 after:inline-block after:h-4 after:w-4 after:text-sm after:font-bold hover:text-amber-400'
              : 'text-white/80 after:hidden hover:text-white'
          "
          to="/frontend?tag=typescript"
          @click="clickLink"
        >
          <Icon name="vscode-icons:file-type-typescript-official" size="16" title="Typescript" alt="Typescript" />
          Typescript
        </NuxtLink>
      </li>
      <li class="group">
        <NuxtLink
          class="flex w-full cursor-pointer items-center justify-start gap-2 before:ml-12 before:mr-2 before:block before:h-full before:w-[1px] before:bg-white/20 before:content-[''] after:content-['M'] hover:font-semibold group-hover:bg-black/20"
          :class="
            isActive('javascript')
              ? 'text-amber-200 after:ml-auto after:mr-2 after:inline-block after:h-4 after:w-4 after:text-sm after:font-bold hover:text-amber-400'
              : 'text-white/80 after:hidden hover:text-white'
          "
          to="/frontend?tag=javascript"
          @click="clickLink"
        >
          <Icon name="vscode-icons:file-type-js-official" size="16" title="Javascript" alt="Javascript" />
          Javascript
        </NuxtLink>
      </li>
      <li class="group">
        <NuxtLink
          class="flex w-full cursor-pointer items-center justify-start gap-2 before:ml-12 before:mr-2 before:block before:h-full before:w-[1px] before:bg-white/20 before:content-[''] after:content-['M'] hover:font-semibold group-hover:bg-black/20"
          :class="
            isActive('edm')
              ? 'text-amber-200 after:ml-auto after:mr-2 after:inline-block after:h-4 after:w-4 after:text-sm after:font-bold hover:text-amber-400'
              : 'text-white/80 after:hidden hover:text-white'
          "
          to="/frontend?tag=edm"
          @click="clickLink"
        >
          <Icon name="vscode-icons:file-type-templ" size="16" title="Edm" alt="Edm" />
          Edm
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
