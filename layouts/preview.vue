<script setup lang="ts">
const route = useRoute()

const router = useRouter()

const homeRoute = computed(() => {
  return route.path.startsWith('/preview')
})

function closeWindow() {
  // 嘗試關閉視窗
  window.close()

  // 延遲一點再導回首頁（讓 browser 有時間關閉）
  setTimeout(() => {
    // 如果視窗沒被關閉，就導回首頁
    if (!window.closed) {
      router.push('/')
    }
  }, 200)
}
</script>

<template>
  <div
    class="layout-default scrollbar bg-[url(/images/SequoiaLight.webp)] bg-cover bg-fixed bg-top bg-no-repeat"
    :class="homeRoute ? 'pb-8' : ''"
  >
    <div
      class="font-lg fixed left-0 top-0 z-30 flex h-8 w-full items-center justify-center border border-solid border-gray-400 bg-white text-center font-bold leading-normal text-black shadow"
    >
      預覽畫面
      <button
        class="absolute right-0 ml-auto mr-4 rounded bg-red-500 px-2 py-0.5 font-normal text-white hover:bg-red-700"
        @click="closeWindow"
      >
        關閉
      </button>
    </div>
    <HeaderDefault class="top-8 mt-8"></HeaderDefault>
    <slot />
    <FooterDefault></FooterDefault>
    <div
      class="font-lg fixed bottom-0 left-0 z-30 flex h-8 w-full items-center justify-center border border-solid border-gray-400 bg-white text-center font-bold leading-normal text-black shadow"
    >
      預覽畫面
    </div>
  </div>
</template>

<style scoped></style>
