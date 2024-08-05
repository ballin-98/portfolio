import { screenSizeHelper } from '@/composables/isMobile'

const scrollToTag = (tagName: string, offset: number = 0): void => {
  const elementToScrollTo = document.querySelector(tagName)

  if (elementToScrollTo) {
    const elementPosition = elementToScrollTo.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.scrollY - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  } else {
    console.log(`There was an error scrolling to element: ${tagName}`)
  }
}

export const scrollToProjects = () => {
  const { isMobile } = screenSizeHelper()
  if (isMobile.value) {
    const element = document.querySelector('.page-container-fixed')
    let offset = 80
    if (element instanceof HTMLElement) {
      offset = element.offsetHeight
    }
    scrollToTag('#projects-mobile', offset)
  } else {
    scrollToTag('#project-page')
  }
}
