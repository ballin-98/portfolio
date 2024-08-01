import { computed, ref } from 'vue'

// composable function that detects if the users screen is mobile size
export const screenSizeHelper = () => {
  const screenWidth = ref(window.innerWidth)
  const handleResize = () => {
    screenWidth.value = window.innerWidth
  }

  window.addEventListener('resize', handleResize)

  const isMobile = computed(() => {
    console.log('resizing: ', 500 > screenWidth.value)
    return 500 > screenWidth.value
  })

  return { isMobile }
}
