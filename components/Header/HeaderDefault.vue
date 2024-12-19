<script setup lang="ts"></script>

<template>
  <header class="sticky top-0 mx-auto h-16 min-h-16 w-full max-w-full bg-gray-100/80 px-4 shadow-sm backdrop-blur-md">
    <h1 class="hidden">Title</h1>
    <nav class="flex h-full flex-row flex-nowrap items-stretch justify-between *:flex *:h-full *:items-center">
      <NuxtLink class="block p-1 text-3xl font-bold" to="/">
        <img src="/images/logo-01.svg" title="Logo" alt="logo" width="48" height="48" loading="eager" decoding="sync" />
      </NuxtLink>
      <div class="flex h-full items-center justify-end font-Fira font-bold text-gray-800">
        <NuxtLink class="flex h-full items-center px-2 transition-all duration-300 hover:text-blue-500" to="/"
          >Home</NuxtLink
        >
        <NuxtLink class="flex h-full items-center px-2 transition-all duration-300 hover:text-blue-500" to="/about"
          >About</NuxtLink
        >
        <NuxtLink class="flex h-full items-center px-2 transition-all duration-300 hover:text-blue-500" to="/portfolio"
          >Portfolio</NuxtLink
        >
        <NuxtLink
          class="flex h-full items-center px-2 transition-all duration-300 hover:text-blue-500"
          to="/frontend?tag=frontend"
          >Frontend</NuxtLink
        >
        <NuxtLink
          class="flex h-full items-center px-2 transition-all duration-300 hover:text-blue-500"
          to="/design?tag=design"
          >Design</NuxtLink
        >
      </div>
    </nav>
  </header>
</template>

<style scoped></style>
