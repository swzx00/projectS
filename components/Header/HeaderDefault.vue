<script setup lang="ts">
const route = useRoute()

// 設定初始顯示狀態
const showDivHeader = ref(false)
const isMobile = ref(false) // 控制是否為手機尺寸
const isActive = ref('')

// 切換顯示狀態
const toggleNav = (type: 'header') => {
  if (isMobile.value) {
    if (type === 'header') {
      showDivHeader.value = !showDivHeader.value
    } else {
      showDivHeader.value = false
    }
  }
}

// 監聽螢幕大小變化
const handleResize = () => {
  const currentWidth = window.innerWidth
  isMobile.value = currentWidth < 640 // 如果寬度小於 640，則為手機尺寸
  if (!isMobile.value) {
    showDivHeader.value = true // 如果是桌面模式，顯示 Nav
  } else {
    showDivHeader.value = false
  }
}

// 判斷 active 的變化
const isRoute = (value: string) => {
  if (value === '/') {
    isActive.value = 'home'
  } else if (value === '/about') {
    isActive.value = 'about'
  } else if (value.includes('/portfolio/frontend')) {
    isActive.value = 'frontend'
  } else if (value.includes('/portfolio/design')) {
    isActive.value = 'design'
  } else if (value.includes('/portfolio/')) {
    isActive.value = 'portfolioItem'
  } else if (value.includes('/portfolio')) {
    isActive.value = 'portfolio'
  } else {
    isActive.value = ''
  }
}

// 初始化時檢查螢幕大小
onMounted(() => {
  handleResize() // 初始檢查螢幕尺寸
  window.addEventListener('resize', handleResize) // 監聽螢幕大小變化
  isRoute(route.path)
})

// 清理監聽器
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

// 判斷 active 的變化
watch(route, (newValue) => {
  const path = newValue.path
  isRoute(path)
})

// 監聽 showDivHeader 的變化
watch(showDivHeader, (newValue) => {
  if (newValue && isMobile.value === true) {
    document.body.classList.add('no-scroll')
  } else {
    document.body.classList.remove('no-scroll')
  }
})
</script>

<template>
  <header
    class="sticky top-0 z-20 mx-auto h-16 min-h-16 w-full max-w-full bg-gray-100/80 px-4 shadow-sm backdrop-blur-md print:!hidden"
  >
    <nav class="header-nav relative flex h-full flex-row flex-nowrap items-stretch justify-between *:items-center">
      <NuxtLink class="block h-full p-1 text-3xl font-bold" to="/">
        <img src="/images/logo-01.svg" title="Logo" alt="logo" width="48" height="48" loading="eager" decoding="sync" />
      </NuxtLink>
      <button
        v-if="isMobile"
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
      <Teleport to="body" :disabled="!isMobile">
        <Transition name="menu-default">
          <div
            v-if="showDivHeader"
            class="nav-header fixed bottom-0 left-auto right-0 top-[4rem] z-20 flex h-[calc(100dvh-4rem)] w-dvw flex-col items-end justify-start gap-6 py-4 font-Fira text-2xl font-bold text-gray-800 shadow-md backdrop-blur-md *:z-50 before:fixed before:bottom-0 before:left-auto before:right-0 before:top-auto before:z-40 before:block before:h-[calc(100dvh-4rem)] before:w-full before:bg-slate-50 after:fixed after:bottom-0 after:left-auto after:right-0 after:top-auto after:z-30 after:block after:h-[calc(100dvh-4rem)] after:w-dvw after:bg-black/50 after:content-[''] before:xs:w-[66dvw] sm:static sm:flex sm:h-full sm:w-fit sm:flex-row sm:items-center sm:justify-end sm:gap-2 sm:bg-transparent sm:py-0 sm:text-base sm:shadow-none sm:backdrop-blur-none before:sm:hidden after:sm:hidden"
          >
            <NuxtLink
              class="flex h-fit w-full items-center justify-center px-2 text-center transition-all duration-300 xs:w-[66dvw] xs:justify-end xs:text-end sm:h-full sm:w-fit sm:justify-center sm:text-center"
              to="/"
              :class="isActive === 'home' ? 'text-blue-900 hover:text-blue-900' : 'hover:text-blue-500'"
              @click="toggleNav"
              >Home</NuxtLink
            >
            <NuxtLink
              class="flex h-fit w-full items-center justify-center px-2 text-center transition-all duration-300 xs:w-[66dvw] xs:justify-end xs:text-end sm:h-full sm:w-fit sm:justify-center sm:text-center"
              to="/about"
              :class="isActive === 'about' ? 'text-blue-900 hover:text-blue-900' : 'hover:text-blue-500'"
              @click="toggleNav"
              >About</NuxtLink
            >
            <NuxtLink
              class="flex h-fit w-full items-center justify-center px-2 text-center transition-all duration-300 xs:w-[66dvw] xs:justify-end xs:text-end sm:h-full sm:w-fit sm:justify-center sm:text-center"
              :class="
                isActive === 'portfolioItem'
                  ? 'text-blue-900 hover:text-blue-500'
                  : isActive === 'portfolio'
                    ? 'text-blue-900 hover:text-blue-900'
                    : 'hover:text-blue-500'
              "
              to="/portfolio"
              @click="toggleNav"
              >Portfolio</NuxtLink
            >
            <NuxtLink
              class="flex h-fit w-full items-center justify-center px-2 text-center transition-all duration-300 xs:w-[66dvw] xs:justify-end xs:text-end sm:h-full sm:w-fit sm:justify-center sm:text-center"
              to="/portfolio/frontend"
              :class="isActive === 'frontend' ? 'text-blue-900 hover:text-blue-900' : 'hover:text-blue-500'"
              @click="toggleNav"
              >Frontend</NuxtLink
            >
            <NuxtLink
              class="flex h-fit w-full items-center justify-center px-2 text-center transition-all duration-300 xs:w-[66dvw] xs:justify-end xs:text-end sm:h-full sm:w-fit sm:justify-center sm:text-center"
              to="/portfolio/design"
              :class="isActive === 'design' ? 'text-blue-900 hover:text-blue-900' : 'hover:text-blue-500'"
              @click="toggleNav"
              >Design</NuxtLink
            >
          </div>
        </Transition>
      </Teleport>
    </nav>
  </header>
</template>

<style scoped>
.menu-default-enter-active,
.menu-default-enter-active::before,
.menu-default-enter-active::after,
.menu-default-enter-active *,
.menu-default-leave-active,
.menu-default-leave-active::before,
.menu-default-leave-active::after,
.menu-default-leave-active * {
  overflow: hidden;
  transition: all 0.3s linear;
}

.menu-default-enter-from::before,
.menu-default-enter-from * {
  transform: translateX(100%);
  opacity: 0;
}
.menu-default-enter-from::after {
  opacity: 0;
}

.menu-default-enter-to::before,
.menu-default-enter-to * {
  transform: translateX(0%);
  opacity: 1;
}
.menu-default-enter-to::after {
  opacity: 1;
}

.menu-default-leave-from::before,
.menu-default-leave-from * {
  transform: translateX(0%);
  opacity: 1;
}
.menu-default-leave-from::after {
  opacity: 1;
}

.menu-default-leave-to::before,
.menu-default-leave-to * {
  transform: translateX(100%);
  opacity: 0;
}
.menu-default-leave-to::after {
  opacity: 0;
}
</style>
