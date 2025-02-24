<script setup lang="ts">
defineModel('cardId', {
  type: String,
  required: true,
})
defineModel('title', {
  type: String,
  required: true,
})

const route = useRoute()

const showTestLink = computed(() => {
  const fromPath = route.query.from as string
  return fromPath === 'frontend' ? 'frontend' : fromPath === 'design' ? 'design' : ''
})
</script>

<template>
  <nav class="mb-8 w-full max-w-full px-4 font-Fira sm:px-0">
    <ol
      class="flex flex-row flex-wrap items-center justify-start text-sm font-normal text-gray-600 *:after:mx-1 *:after:inline-block *:after:font-light *:after:text-gray-400 *:after:content-['/']"
    >
      <li class="w-fit max-w-fit">
        <NuxtLink class="hover:text-blue-600 hover:underline" to="/" target="_self" title="Home" alt="Home"
          >Home</NuxtLink
        >
      </li>
      <li class="w-fit max-w-fit">
        <NuxtLink
          class="hover:text-blue-600 hover:underline"
          to="/Portfolio"
          target="_self"
          title="Portfolio"
          alt="Portfolio"
          >Portfolio</NuxtLink
        >
      </li>
      <li v-if="showTestLink" class="w-fit max-w-fit">
        <NuxtLink
          class="hover:text-blue-600 hover:underline"
          :to="showTestLink === 'frontend' ? '/portfolio/frontend' : '/portfolio/design'"
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
          :to="`/Portfolio/${cardId}`"
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
