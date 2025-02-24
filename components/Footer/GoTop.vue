<script setup lang="ts">
const isVisible = ref(false)

const handleScroll = () => {
  isVisible.value = window.scrollY > 0
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <Transition
    name="fade"
    mode="out-in"
    enter-active-class="transition-all duration-300 ease-linear"
    enter-from-class="opacity-0 translate-y-1/2"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-300 ease-linear"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 -translate-y-1/2"
  >
    <button
      v-if="isVisible"
      class="hover:bg-shadow-none fixed bottom-4 right-4 z-10 flex size-10 items-center justify-center rounded-md bg-white/50 text-gray-800 shadow-md transition-all duration-300 hover:rounded-[50%] hover:bg-white/100 hover:text-black lg:bottom-8 lg:right-8"
      @click="scrollToTop"
    >
      <Icon class="text-lg" name="uil:angle-up" size="24" title="GoTop" alt="GoTop" />
    </button>
  </Transition>
</template>

<style scoped></style>
