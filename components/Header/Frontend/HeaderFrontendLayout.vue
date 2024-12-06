<script setup lang="ts"></script>

<template>
  <header class="relative mx-0 h-8 min-h-8 w-full max-w-full border-b border-solid border-white bg-white/10 px-4">
    <h1 class="hidden">Title</h1>
    <div class="flex h-full flex-row flex-nowrap items-stretch justify-start *:flex *:h-full *:items-center">
      <Icon name="vscode-icons:file-type-vscode" size="18" title="Frontend" alt="Frontend" />
      <HeaderFrontendContent class="hidden sm:flex"></HeaderFrontendContent>
    </div>
  </header>
</template>

<style scoped></style>
