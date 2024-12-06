<script setup lang="ts">
// 設定初始顯示狀態
const showDivMenu = ref(false)
const showDivProject = ref(false)
const isMobile = ref(false) // 控制是否為手機尺寸

// 切換顯示狀態
const toggleNav = (type: 'menu' | 'project') => {
  if (isMobile.value) {
    if (type === 'menu') {
      showDivMenu.value = !showDivMenu.value
      showDivProject.value = false // 關閉 Project
    } else if (type === 'project') {
      showDivProject.value = !showDivProject.value
      showDivMenu.value = false // 關閉 Menu
    }
  }
}

// 監聽螢幕大小變化
const handleResize = () => {
  const currentWidth = window.innerWidth
  isMobile.value = currentWidth < 640 // 如果寬度小於 640，則為手機尺寸
  if (!isMobile.value) {
    showDivMenu.value = false // 如果是桌面模式，隱藏 Nav
    showDivProject.value = false // 隱藏 Project
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
  <aside class="side-menu relative z-40 h-full w-[60px] overflow-y-auto overflow-x-hidden bg-slate-800 p-0">
    <button
      class="flex size-10 items-center justify-center p-1 text-3xl font-bold text-white"
      @click="toggleNav('menu')"
    >
      <Icon
        :name="showDivMenu ? 'material-symbols-light:menu-open-rounded' : 'material-symbols-light:menu-rounded'"
        size="20"
        title="Menu"
        alt="Menu"
      />
    </button>
    <Teleport to="body">
      <Transition
        name="menu-header"
        enter-active-class="transition-all duration-300 ease-in-out overflow-hidden"
        enter-from-class="opacity-0 -translate-x-1/2"
        enter-to-class="opacity-100 translate-x-0"
        leave-active-class="transition-all duration-300 ease-in-out overflow-hidden"
        leave-from-class="opacity-100 translate-x-0"
        leave-to-class="opacity-0 -translate-x-1/2"
      >
        <HeaderContent v-if="showDivMenu && isMobile" class="sm:hidden"></HeaderContent>
      </Transition>
    </Teleport>
    <button
      class="flex size-10 items-center justify-center p-1 text-3xl font-bold text-white"
      @click="toggleNav('project')"
    >
      <Icon
        :name="showDivProject ? 'material-symbols:file-copy-rounded' : 'material-symbols:file-copy-outline-rounded'"
        size="20"
        title="Menu"
        alt="Menu"
      />
    </button>
    <Teleport to="body">
      <Transition
        name="menu-side"
        enter-active-class="transition-all duration-300 ease-in-out overflow-hidden"
        enter-from-class="opacity-0 -translate-x-1/2"
        enter-to-class="opacity-100 translate-x-0"
        leave-active-class="transition-all duration-300 ease-in-out overflow-hidden"
        leave-from-class="opacity-100 translate-x-0"
        leave-to-class="opacity-0 -translate-x-1/2"
      >
        <SideContentFrontend
          v-if="showDivProject && isMobile"
          v-model:show-div-project="showDivProject"
          class="sm:hidden"
        ></SideContentFrontend>
      </Transition>
    </Teleport>
  </aside>
</template>

<style scoped></style>
