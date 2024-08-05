import { screenSizeHelper } from '@/composables/isMobile'

const scrollToTag = (tagName: string): void => {
  const elementToScrollTo = document.querySelector(tagName)
  if (elementToScrollTo) {
    elementToScrollTo.scrollIntoView({ behavior: 'smooth' })
  } else {
    console.log(`there was an error scrolling to element: ${tagName}}`)
  }
}

export const scrollToProjects = () => {
  const { isMobile } = screenSizeHelper()
  if (isMobile.value) {
    scrollToTag('#projects-mobile')
  } else {
    scrollToTag('#project-page')
  }
}
