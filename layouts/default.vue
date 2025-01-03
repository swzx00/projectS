<script setup lang="ts"></script>

<template>
  <div
    class="layout-default scrollbar bg-[url(/images/SequoiaLight.webp)] bg-cover bg-fixed bg-top bg-no-repeat before:fixed before:z-0 before:block before:h-dvh before:w-dvw before:bg-gray-100/30 before:backdrop-blur-sm before:content-['']"
  >
    <HeaderDefault></HeaderDefault>
    <slot />
    <FooterDefault></FooterDefault>
  </div>
</template>

<style scoped></style>
