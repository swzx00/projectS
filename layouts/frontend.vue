<script setup lang="ts">
// 設定初始顯示狀態
const isMobile = ref(false) // 控制是否為手機尺寸
const showDivMobile = ref(false)
const showDivPc = ref(true)

// 監聽螢幕大小變化
const handleResize = () => {
  const currentWidth = window.innerWidth
  isMobile.value = currentWidth < 640 // 如果寬度小於 640，則為手機尺寸

  // 如果不是手機模式，隱藏 Nav
  if (isMobile.value) {
    showDivMobile.value = true
    showDivPc.value = false
  } else {
    showDivMobile.value = false
    showDivPc.value = true
  }
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
  <div
    class="layout-frontend static flex h-dvh max-h-full w-dvw max-w-full flex-row items-start justify-start overflow-hidden bg-slate-900 sm:fixed sm:flex-col"
  >
    <HeaderFrontendLayout class="hidden sm:block"></HeaderFrontendLayout>
    <SideMenu v-if="showDivMobile && isMobile" class="block sm:hidden"></SideMenu>
    <div class="flex h-full max-h-full w-[calc(100%-40px)] flex-1 flex-row sm:max-h-[calc(100%-56px)] sm:w-full">
      <SideLayoutFrontend v-if="showDivPc && !isMobile" class="hidden sm:block"></SideLayoutFrontend>
      <slot />
    </div>
    <div
      class="pointer-events-none relative box-border hidden h-6 max-h-6 w-full max-w-full cursor-default select-none items-center justify-between border border-solid border-transparent bg-white/10 px-4 text-xs leading-none text-white/50 *:opacity-50 sm:flex"
    >
      <div class="flex items-center justify-start gap-2">
        <span class="flex items-center justify-start gap-1">
          <Icon name="iconoir:git-fork" size="14" title="Git" alt="Git" />
          main
        </span>
        <span class="flex items-center justify-start gap-1">
          <Icon name="line-md:close-circle" size="14" title="Error" alt="Error" />
          0
        </span>
        <span class="flex items-center justify-start gap-1">
          <Icon name="line-md:alert" size="14" title="Warn" alt="Warn" />
          0
        </span>
      </div>
      <div class="flex items-center justify-start gap-2">
        <span class="flex items-center justify-start gap-1">Line 1, Col 1</span>
        <span class="flex items-center justify-start gap-1">Spaces: 2</span>
        <span class="flex items-center justify-start gap-1">UTF-8</span>
        <span class="flex items-center justify-start gap-1">LF</span>
        <span class="flex items-center justify-start gap-1">{}&nbsp;HTML</span>
        <span class="flex items-center justify-start gap-1">
          <Icon name="line-md:bell-loop" size="14" title="Bell" alt="Bell" />
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
