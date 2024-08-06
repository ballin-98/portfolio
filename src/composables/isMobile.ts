import { computed, ref } from 'vue'

// composable function that detects if the users screen is mobile size
export const screenSizeHelper = () => {
  const screenWidth = ref(window.innerWidth)
  const handleResize = () => {
    screenWidth.value = window.innerWidth
  }

  window.addEventListener('resize', handleResize)

  const isMobile = computed(() => {
    return 1000 > screenWidth.value
  })

  return { isMobile }
}
