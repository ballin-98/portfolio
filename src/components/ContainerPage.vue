<template>
  <div class="page-container">
    <div class="page-container-fixed">
      <NavigationBar></NavigationBar>
    </div>
    <div class="page-container-pages">
      <AboutPage></AboutPage>
      <ProjectsPage></ProjectsPage>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProjectsPage from "@/components/ProjectsPage.vue";
import AboutPage from "@/components/AboutPage.vue";
import NavigationBar from "@/components/NavigationBar.vue";
</script>

<style>
.page-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.page-container-fixed {
  position: sticky;
  top: 0;
  z-index: 100;
  height: 10vh;
}

.page-container-pages {
  flex: 1;
}
</style>
