<script setup lang="ts">
// 設定初始顯示狀態
const showDivHeader = ref(false)
const isMobile = ref(false) // 控制是否為手機尺寸

// 切換顯示狀態
const toggleNav = (type: 'header') => {
  if (isMobile.value) {
    if (type === 'header') {
      showDivHeader.value = !showDivHeader.value
    }
  }
}

// 監聽螢幕大小變化
const handleResize = () => {
  const currentWidth = window.innerWidth
  isMobile.value = currentWidth < 640 // 如果寬度小於 640，則為手機尺寸
  if (!isMobile.value) {
    showDivHeader.value = true // 如果是桌面模式，顯示 Nav
  }
  // 根據螢幕模式更新 `showDivHeader`
  showDivHeader.value = !isMobile.value
}

// 初始化時檢查螢幕大小
onMounted(() => {
  handleResize() // 初始檢查螢幕尺寸
  window.addEventListener('resize', handleResize) // 監聽螢幕大小變化
})

// 清理監聽器
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <header class="sticky top-0 mx-auto h-16 min-h-16 w-full max-w-full bg-gray-100/80 px-4 shadow-sm backdrop-blur-md">
    <nav class="header-nav relative flex h-full flex-row flex-nowrap items-stretch justify-between *:items-center">
      <NuxtLink class="block h-full p-1 text-3xl font-bold" to="/">
        <img src="/images/logo-01.svg" title="Logo" alt="logo" width="48" height="48" loading="eager" decoding="sync" />
      </NuxtLink>
      <button
        class="flex size-10 h-full items-center justify-center p-1 text-3xl font-bold text-black"
        @click="toggleNav('header')"
      >
        <Icon
          :name="showDivHeader ? 'material-symbols-light:menu-open-rounded' : 'material-symbols-light:menu-rounded'"
          size="20"
          title="Menu"
          alt="Menu"
        />
      </button>
      <Teleport :to="isMobile ? 'body' : '.header-nav'">
        <Transition
          name="menu-header-default"
          enter-active-class="transition-all duration-300 ease-in-out overflow-hidden sm:transition-none"
          enter-from-class="sm:opacity-100 translate-x-1/2 opacity-0 sm:translate-x-0"
          enter-to-class="opacity-100 translate-x-0"
          leave-active-class="transition-all duration-300 ease-in-out overflow-hidden sm:transition-none"
          leave-from-class="opacity-100 translate-x-0"
          leave-to-class="sm:opacity-100 translate-x-1/2 opacity-0 sm:translate-x-0"
        >
          <div
            v-if="showDivHeader"
            class="fixed bottom-0 left-auto right-0 top-[4rem] h-[calc(100dvh-4rem)] w-dvw flex-col items-center justify-start gap-4 bg-slate-50 py-4 font-Fira font-bold text-gray-800 shadow-md backdrop-blur-xl *:z-10 xs:w-[calc(66dvw)] sm:static sm:flex sm:h-full sm:w-fit sm:flex-row sm:justify-end sm:gap-2 sm:bg-transparent sm:py-0 sm:shadow-none sm:backdrop-blur-none"
          >
            <NuxtLink
              class="flex h-fit items-center px-2 transition-all duration-300 hover:text-blue-500 sm:h-full"
              to="/"
              >Home</NuxtLink
            >
            <NuxtLink
              class="flex h-fit items-center px-2 transition-all duration-300 hover:text-blue-500 sm:h-full"
              to="/about"
              >About</NuxtLink
            >
            <NuxtLink
              class="flex h-fit items-center px-2 transition-all duration-300 hover:text-blue-500 sm:h-full"
              to="/portfolio"
              >Portfolio</NuxtLink
            >
            <NuxtLink
              class="flex h-fit items-center px-2 transition-all duration-300 hover:text-blue-500 sm:h-full"
              to="/portfolio/frontend?tag=frontend"
              >Frontend</NuxtLink
            >
            <NuxtLink
              class="flex h-fit items-center px-2 transition-all duration-300 hover:text-blue-500 sm:h-full"
              to="/portfolio/design?tag=design"
              >Design</NuxtLink
            >
          </div>
        </Transition>
      </Teleport>
    </nav>
  </header>
</template>

<style scoped></style>
