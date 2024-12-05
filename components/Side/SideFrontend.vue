<script setup lang="ts"></script>

<template>
  <div
    class="bo fixed left-10 top-0 z-30 h-full w-full max-w-[calc(66dvw-40px)] border-l border-r border-solid border-white/50 bg-slate-800 shadow-lg sm:relative sm:left-0 sm:w-full sm:max-w-none sm:border-l-0 sm:border-r-0 sm:bg-transparent sm:shadow-none"
  >
    <p class="flex items-center justify-start gap-2 px-2 pb-1 pt-2 text-sm font-normal text-white/80">
      Portfolio Frontend
    </p>
    <p class="mt-1 flex items-center justify-start gap-2 px-3 py-1 text-base font-semibold text-white">
      <Icon name="uil:angle-down" size="18" />
      Coding Type
    </p>
    <ul class="flex flex-col items-start justify-start p-0 text-lg font-normal text-white/90 *:flex *:w-full">
      <li class="group">
        <NuxtLink
          class="flex w-full cursor-pointer items-center justify-start gap-2 before:ml-5 before:mr-2 before:block before:h-full before:w-[1px] before:bg-white/20 before:content-[''] hover:font-semibold hover:text-white group-hover:bg-black/20"
          to="/frontend?tag='frontend'"
        >
          <Icon name="vscode-icons:file-type-vscode" size="16" title="Frontend" alt="Frontend" />
          Frontend
        </NuxtLink>
      </li>
      <li class="group">
        <NuxtLink
          class="flex w-full cursor-pointer items-center justify-start gap-2 before:ml-5 before:mr-2 before:block before:h-full before:w-[1px] before:bg-white/20 before:content-[''] hover:font-semibold hover:text-white group-hover:bg-black/20"
          to="/frontend?tag='nuxt'"
        >
          <Icon name="vscode-icons:file-type-nuxt" size="16" title="Nuxt" alt="Nuxt" />
          Nuxt
        </NuxtLink>
      </li>
      <li class="group">
        <NuxtLink
          class="flex w-full cursor-pointer items-center justify-start gap-2 before:ml-5 before:mr-2 before:block before:h-full before:w-[1px] before:bg-white/20 before:content-[''] hover:font-semibold hover:text-white group-hover:bg-black/20"
          to="/frontend?tag='vue'"
        >
          <Icon name="vscode-icons:file-type-vue" size="16" title="Vue" alt="Vue" />
          Vue
        </NuxtLink>
      </li>
      <li class="group">
        <NuxtLink
          class="flex w-full cursor-pointer items-center justify-start gap-2 before:ml-5 before:mr-2 before:block before:h-full before:w-[1px] before:bg-white/20 before:content-[''] hover:font-semibold hover:text-white group-hover:bg-black/20"
          to="/frontend?tag='tailwind'"
        >
          <Icon name="vscode-icons:file-type-tailwind" size="16" title="Tailwind" alt="Tailwind" />
          Tailwind
        </NuxtLink>
      </li>
      <li class="group">
        <NuxtLink
          class="flex w-full cursor-pointer items-center justify-start gap-2 before:ml-5 before:mr-2 before:block before:h-full before:w-[1px] before:bg-white/20 before:content-[''] hover:font-semibold hover:text-white group-hover:bg-black/20"
          to="/frontend?tag='bootstrap'"
        >
          <Icon name="devicon:bootstrap" size="16" title="Bootstrap" alt="Bootstrap" />
          Bootstrap
        </NuxtLink>
      </li>
      <li class="group">
        <NuxtLink
          class="flex w-full cursor-pointer items-center justify-start gap-2 before:ml-5 before:mr-2 before:block before:h-full before:w-[1px] before:bg-white/20 before:content-[''] hover:font-semibold hover:text-white group-hover:bg-black/20"
          to="/frontend?tag='html'"
        >
          <Icon name="vscode-icons:file-type-html" size="16" title="Html" alt="Html" />
          Html
        </NuxtLink>
      </li>
      <li class="group">
        <NuxtLink
          class="flex w-full cursor-pointer items-center justify-start gap-2 before:ml-5 before:mr-2 before:block before:h-full before:w-[1px] before:bg-white/20 before:content-[''] hover:font-semibold hover:text-white group-hover:bg-black/20"
          to="/frontend?tag='css'"
        >
          <Icon name="vscode-icons:file-type-css" size="16" title="Css" alt="Css" />
          Css
        </NuxtLink>
      </li>
      <li class="group">
        <NuxtLink
          class="flex w-full cursor-pointer items-center justify-start gap-2 before:ml-5 before:mr-2 before:block before:h-full before:w-[1px] before:bg-white/20 before:content-[''] hover:font-semibold hover:text-white group-hover:bg-black/20"
          to="/frontend?tag='javascript'"
        >
          <Icon name="vscode-icons:file-type-js-official" size="16" title="Javascript" alt="Javascript" />
          Javascript
        </NuxtLink>
      </li>
      <li class="group">
        <NuxtLink
          class="flex w-full cursor-pointer items-center justify-start gap-2 before:ml-5 before:mr-2 before:block before:h-full before:w-[1px] before:bg-white/20 before:content-[''] hover:font-semibold hover:text-white group-hover:bg-black/20"
          to="/frontend?tag='edm'"
        >
          <Icon name="vscode-icons:file-type-templ" size="16" title="Edm" alt="Edm" />
          Edm
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
