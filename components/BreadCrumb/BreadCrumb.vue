<script setup lang="ts">
defineModel('cardId', {
  type: Number,
  required: true,
})
defineModel('title', {
  type: String,
  required: true,
})
defineModel('status', {
  type: Number,
  required: true,
})

const route = useRoute()

const showTestLink = computed(() => {
  const fromPath = route.query.from as string
  return fromPath === 'frontend' ? 'frontend' : fromPath === 'design' ? 'design' : ''
})

const homeRoute = computed(() => {
  return route.path.startsWith('/preview')
})
</script>

<template>
  <nav class="mb-8 w-full max-w-full px-4 font-Fira sm:px-0">
    <ol
      class="flex flex-row flex-wrap items-center justify-start text-sm font-normal text-gray-600 *:after:mx-1 *:after:inline-block *:after:font-light *:after:text-gray-400 *:after:content-['/']"
    >
      <li v-if="status !== 1" class="w-fit max-w-fit">(預覽)</li>
      <li class="w-fit max-w-fit">
        <NuxtLink
          class="hover:text-blue-600 hover:underline"
          :to="homeRoute ? '#' : '/'"
          target="_self"
          title="Home"
          alt="Home"
          >Home</NuxtLink
        >
      </li>
      <li class="w-fit max-w-fit">
        <NuxtLink
          class="hover:text-blue-600 hover:underline"
          :to="homeRoute ? '#' : '/portfolio'"
          target="_self"
          title="Portfolio"
          alt="Portfolio"
          >Portfolio</NuxtLink
        >
      </li>
      <li v-if="showTestLink" class="w-fit max-w-fit">
        <NuxtLink
          class="hover:text-blue-600 hover:underline"
          :to="homeRoute ? '#' : showTestLink === 'frontend' ? '/portfolio/frontend' : '/portfolio/design'"
          target="_self"
          :title="showTestLink === 'frontend' ? 'Frontend' : 'Design'"
          :alt="showTestLink === 'frontend' ? 'Frontend' : 'Design'"
        >
          {{ showTestLink === 'frontend' ? 'Frontend' : 'Design' }}
        </NuxtLink>
      </li>
      <li class="pointer-events-none w-fit max-w-fit font-medium text-gray-500 last:after:hidden">
        <NuxtLink
          class="hover:font-medium hover:text-blue-400 hover:underline"
          :to="homeRoute ? '#' : `/portfolio/${cardId}`"
          target="_self"
          :title="title"
          :alt="title"
        >
          {{ title }}
        </NuxtLink>
      </li>
    </ol>
  </nav>
</template>

<style scoped></style>
