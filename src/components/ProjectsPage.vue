<template>
  <div
    class="projects-page-container"
    :class="darkMode ? 'dark-theme' : 'light-theme'"
    id="project-page"
  >
    <div class="project-tag-container" v-if="!isMobile">
      <Tag
        v-for="tag in computedTagsToDisplay"
        :key="tag.title"
        :title="tag.title"
        :show-tag="tag.showTag"
        @click="handleTagVisibility(tag.title)"
      ></Tag>
    </div>
    <div class="mobile-project-container" v-if="isMobile">
      <div class="title-container">
        <div class="projects-title" id="projects-mobile">Projects</div>
        <div class="help-instructions">Tap an image to view more details</div>
      </div>
      <ProjectCard
        v-for="project in projectList"
        :key="project.title"
        :title="project.title"
        :description="project.description"
        :image="project.image"
      ></ProjectCard>
    </div>
    <div class="projects-container" v-else>
      <div class="active-projects" v-if="cardsAreVisible">
        <div class="arrow-button" @click="getPreviousCards" :class="{ hidden: !canScroll }">
          <img src="/assets/chevron_left.svg" alt="" />
        </div>
        <transition name="fade" mode="out-in"></transition>
        <ProjectCard
          v-for="project in visibleCards"
          :key="project.title"
          :title="project.title"
          :description="project.description"
          :image="project.image"
        ></ProjectCard>
        <transition />
        <div class="arrow-button" @click="getNextCards" :class="{ hidden: !canScroll }">
          <img src="/assets/chevron_right.svg" alt="" />
        </div>
      </div>
      <div v-else class="projects-fallback">Click on a tag to view some projects</div>
    </div>
  </div>
</template>

<script setup lang="ts">
// imports
import ProjectCard from '@/components/ProjectCard.vue'
import { projectList, type projectCardData, type TagDto } from '@/data/projectData'
import { type Ref, computed, ref } from 'vue'
import Tag from '@/components/Tag.vue'
import { allTags } from '@/data/tagData'
import { CircularArray } from '@/helpers/dataStructures'
import { darkMode } from '@/composables/isDarkMode'
import { screenSizeHelper } from '@/composables/isMobile'

const { isMobile } = screenSizeHelper()

// refs
const tagsToDisplay: Ref<TagDto[]> = ref(allTags)
const computedTagsToDisplay = computed(() => tagsToDisplay.value)

// we start with this
const visibleCards: Ref<projectCardData[]> = ref(projectList.slice(0, 3))

const cardsAreVisible = computed(() => visibleCards.value.length !== 0)

const circularArrayProjects = new CircularArray<projectCardData>(projectList.length)

// computed values
const tagClicked = computed(() => {
  return tagsToDisplay.value
    .slice(1, tagsToDisplay.value.length)
    .some((tag) => tag.showTag === false)
})

const canScroll = ref(true)

const initalizeCircularArray = () => {
  projectList.forEach((project) => {
    circularArrayProjects.push(project)
  })
}

initalizeCircularArray()

const getNextNthCard = (n: number): projectCardData => {
  for (let i = 0; i < n; i++) {
    circularArrayProjects.moveNext()
  }
  return circularArrayProjects.getCurrent() as projectCardData
}

const getPrevNthCard = (n: number): projectCardData => {
  for (let i = 0; i < n; i++) {
    circularArrayProjects.movePrevious()
  }
  return circularArrayProjects.getCurrent() as projectCardData
}

const getNextCards = () => {
  let projects: projectCardData[] = []
  const current = circularArrayProjects.getCurrent() as projectCardData
  const previous = getPrevNthCard(1)
  const next = getNextNthCard(2)
  projects = [previous, current, next]
  // we're at next
  visibleCards.value = projects
  getPrevNthCard(2)
}

const getPreviousCards = () => {
  let projects: projectCardData[] = []
  const first = getNextNthCard(1)
  const second = getNextNthCard(1)
  const third = getNextNthCard(1)
  projects = [first, second, third]
  // Update displayedProjects with the new set of projects
  visibleCards.value = projects
  getPrevNthCard(2)
}

// function to update tag visibility
const handleTagVisibility = (tagTitle: string) => {
  const tagIndex = tagsToDisplay.value.findIndex((tag) => tag.title === tagTitle)
  if (tagIndex === 0) {
    updateEveryTag()
  } else {
    tagsToDisplay.value[tagIndex].showTag = !tagsToDisplay.value[tagIndex].showTag
    handleAllTagVisibility()
  }
  const someCards = filterCardsByTag()
  circularArrayProjects.reset(someCards)
  if (circularArrayProjects.array.length <= 3) {
    canScroll.value = false
  } else {
    canScroll.value = true
  }
  visibleCards.value = someCards.slice(0, 3)
}

// function to determine if the tag "All" should be displayed
const handleAllTagVisibility = () => {
  if (tagClicked.value) {
    tagsToDisplay.value[0].showTag = false
  } else {
    tagsToDisplay.value[0].showTag = true
  }
}

// function to update every tag if "All" tag was clicked
const updateEveryTag = () => {
  // we just need to know if it's visible or not and update based on that
  if (tagClicked.value) {
    // we know that all tags here is not active
    tagsToDisplay.value.forEach((tag) => {
      tag.showTag = true
    })
  } else {
    tagsToDisplay.value.forEach((tag) => {
      tag.showTag = false
    })
  }
}

const filterCardsByTag = () => {
  const filteredProjects = projectList.filter((project) => {
    const overlap = checkForOverlap(project.tags)
    return overlap.length !== 0
  })
  return filteredProjects
}

const checkForOverlap = (tags: TagDto[]) => {
  const overlap = tags.filter((tag) => {
    return tagsToDisplay.value.some(
      (displayTag) => tag.title === displayTag.title && displayTag.showTag
    )
  })
  return overlap
}
</script>

<style scoped>
.projects-page-container {
  height: 90vh;
  background-color: var(--background-color);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* border: 4px solid black; */
}

.project-tag-container {
  width: calc(100% - 140px);
  height: 100px;
  display: flex;
  justify-content: flex-start; /* Align content to the end (right side) */
  align-items: center;
  flex-wrap: wrap;
  /* border: 2px solid red; */
}

.arrow-button {
  width: 100px;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  padding: 0px 5px;
}

.arrow-button img {
  height: 40px;
}

.arrow-button img {
  height: 40px;
  transition: box-shadow 0.1s ease;
}

.arrow-button img:hover {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}

.projects-container {
  height: 50%;
  width: (100%-40px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* border: 2px solid purple; */
  margin: 20px;
  /* gap: 20px; */
}

.active-projects {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.hidden {
  pointer-events: none;
  opacity: 0.2;
}

.mobile-project-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: scroll;
  gap: 10px;
}

.title-container {
  display: flex;
  align-items: flex-start;
  width: calc(100% - 30px);
  flex-direction: column;
}

.projects-title {
  font-size: 32px;
  color: var(--text-color);
  text-transform: uppercase;
  text-align: left;
  padding: 20px 5px 5px 5px;
  font-family: 'Roboto Mono', monospace;
}

.help-instructions {
  padding-left: 5px;
  color: var(--navigation-text-color);
  font-weight: bold;
  font-style: italic;
}

@media only screen and (max-width: 800px) {
  .project-tag-container {
    display: none;
  }

  .projects-container {
    height: 80vh;
    width: (100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .active-projects {
    height: 80vh;
    width: (100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .arrow-button {
    transform: rotate(90deg);
  }
}

@media only screen and (max-width: 500px) {
  .projects-page-container {
    height: inherit;
  }
}
</style>
