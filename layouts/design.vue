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
    class="layout-design static flex h-dvh max-h-full w-dvw max-w-full flex-row items-start justify-start overflow-hidden bg-zinc-600 sm:fixed sm:flex-col"
  >
    <HeaderDesignLayout class="hidden sm:block"></HeaderDesignLayout>
    <!-- <SideMenu v-if="showDivMobile && isMobile" class="block sm:hidden"></SideMenu> -->
    <div class="flex h-full max-h-[calc(100%-32px)] w-[calc(100%-40px)] flex-1 flex-row sm:w-full">
      <slot />
      <SideLayoutDesign v-if="showDivPc && !isMobile" class="hidden sm:block"></SideLayoutDesign>
    </div>
  </div>
</template>

<style scoped></style>
