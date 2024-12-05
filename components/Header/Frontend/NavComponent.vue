<script setup lang="ts"></script>

<template>
  <nav
    class="fixed left-10 top-0 z-30 flex h-full min-w-[calc(66dvw-40px)] flex-col items-start justify-start gap-y-2 border-l border-r border-solid border-white/50 bg-black/80 bg-slate-800 py-5 font-Fira text-xl font-normal text-white/50 shadow-lg backdrop-blur *:rounded sm:relative sm:left-0 sm:min-w-0 sm:flex-row sm:items-center sm:gap-y-0 sm:border-l-0 sm:border-r-0 sm:bg-transparent sm:py-0 sm:text-base sm:shadow-none sm:backdrop-blur-none"
  >
    <NuxtLink
      class="flex h-fit w-full items-center px-2 transition-all duration-300 hover:bg-white/10 hover:text-white sm:h-full sm:w-fit"
      to="/"
      >Index</NuxtLink
    >
    <NuxtLink
      class="flex h-fit w-full items-center px-2 transition-all duration-300 hover:bg-white/10 hover:text-white sm:h-full sm:w-fit"
      to="/about"
      >About</NuxtLink
    >
    <NuxtLink
      class="flex h-fit w-full items-center px-2 transition-all duration-300 hover:bg-white/10 hover:text-white sm:h-full sm:w-fit"
      to="/portfolio"
      >Portfolio</NuxtLink
    >
    <NuxtLink
      class="flex h-fit w-full items-center px-2 transition-all duration-300 hover:bg-white/10 hover:text-white sm:h-full sm:w-fit"
      to="/frontend?tag=frontend"
      >Frontend</NuxtLink
    >
    <NuxtLink
      class="flex h-fit w-full items-center px-2 transition-all duration-300 hover:bg-white/10 hover:text-white sm:h-full sm:w-fit"
      to="/design?tag=design"
      >Design</NuxtLink
    >
  </nav>
</template>

<style scoped></style>
