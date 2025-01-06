<script setup lang="ts"></script>

<template>
  <div
    class="layout-default scrollbar before:lg:max-w-[calc(100%-1280px) bg-[url(/images/SequoiaLight.webp)] bg-cover bg-fixed bg-top bg-no-repeat before:fixed before:z-0 before:block before:h-dvh before:w-dvw before:bg-gray-100/30 before:backdrop-blur-sm before:content-[''] before:md:max-w-[calc(100%-1024px)] before:xl:max-w-[calc(100%-1536px)] before:2xl:max-w-[calc(100%-1600px)]"
  >
    <HeaderDefault></HeaderDefault>
    <slot />
    <FooterDefault></FooterDefault>
  </div>
</template>

<style scoped></style>
