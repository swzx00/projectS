<script setup lang="ts">
const route = useRoute()
const isActive = ref('')

const adminUrl = import.meta.env.VITE_ADMIN_BASE_URL

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
  } else if (value.includes('/portfolio')) {
    isActive.value = 'portfolio'
  } else {
    isActive.value = ''
  }
}

// 初始化時檢查螢幕大小
onMounted(() => {
  isRoute(route.path)
})

// 判斷 active 的變化
watch(route, (newValue) => {
  const path = newValue.path
  isRoute(path)
})
</script>

<template>
  <nav
    class="fixed left-10 top-0 z-30 flex h-full min-w-[calc(100dvw-40px)] flex-col items-start justify-start gap-y-2 border-l border-r border-solid px-2 py-5 font-Fira text-xl font-normal text-white/50 shadow-lg *:rounded xs:min-w-[calc(66dvw-40px)] sm:relative sm:left-0 sm:w-full sm:min-w-0 sm:flex-row sm:items-center sm:gap-y-0 sm:border-l-0 sm:border-r-0 sm:bg-transparent sm:px-0 sm:py-0 sm:text-base sm:shadow-none"
  >
    <NuxtLink
      class="flex h-fit w-full items-center px-2 transition-all duration-300 sm:h-full sm:w-fit"
      to="/"
      :class="isActive === 'home' ? 'text-white hover:bg-transparent' : 'hover:bg-white/10 hover:text-white'"
      >Home</NuxtLink
    >
    <NuxtLink
      class="flex h-fit w-full items-center px-2 transition-all duration-300 sm:h-full sm:w-fit"
      to="/about"
      :class="isActive === 'about' ? 'text-white hover:bg-transparent' : 'hover:bg-white/10 hover:text-white'"
      >About</NuxtLink
    >
    <NuxtLink
      class="flex h-fit w-full items-center px-2 transition-all duration-300 sm:h-full sm:w-fit"
      to="/portfolio"
      :class="isActive === 'portfolio' ? 'text-white hover:bg-transparent' : 'hover:bg-white/10 hover:text-white'"
      >Portfolio</NuxtLink
    >
    <NuxtLink
      class="flex h-fit w-full items-center px-2 transition-all duration-300 sm:h-full sm:w-fit"
      to="/portfolio/frontend"
      :class="isActive === 'frontend' ? 'text-white hover:bg-transparent' : 'hover:bg-white/10 hover:text-white'"
      >Frontend</NuxtLink
    >
    <NuxtLink
      class="flex h-fit w-full items-center px-2 transition-all duration-300 sm:h-full sm:w-fit"
      :class="isActive === 'design' ? 'text-white hover:bg-transparent' : 'hover:bg-white/10 hover:text-white'"
      to="/portfolio/design"
      >Design</NuxtLink
    >
    <a
      class="ml-auto mr-auto mt-auto flex h-fit w-full items-center justify-center gap-2 px-2 text-center text-base text-white/30 transition-all duration-300 hover:bg-white/10 hover:text-white sm:mr-0 sm:mt-0 sm:h-full sm:w-fit sm:justify-start sm:text-sm"
      :href="`${adminUrl}/login`"
      target="_blank"
    >
      <Icon class="text-lg" name="dashicons:admin-generic" size="20" title="Admin" alt="Admin" />
      <span class="inline sm:hidden">Admin</span>
    </a>
  </nav>
</template>

<style scoped></style>
