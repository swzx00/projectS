export function useActive(defaultTag = 'design') {
  const route = useRoute()
  const routeTag = ref(route.query.tag || defaultTag)

  const isActive = (tag: string) => routeTag.value === tag

  watch(
    () => route.query.tag,
    (newTag) => {
      if (!newTag) {
        routeTag.value = defaultTag
      } else {
        routeTag.value = newTag
      }
    },
    { immediate: true },
  )

  return {
    isActive,
  }
}
