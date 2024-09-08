<template>
  <div class="container" :class="darkMode ? 'dark-theme' : 'light-theme'" id="about-page">
    <div class="left-container">
      <img src="/assets/alex.jpeg" alt="Your Image" />
    </div>
    <div class="right-container">
      <div class="top-container">
        <div v-if="!darkMode" class="button-container light-mode" @click="toggleDarkMode">
          <img src="/assets/light_mode.svg" alt="" />
        </div>
        <div v-else class="button-container dark-mode" @click="toggleDarkMode">
          <img src="/assets/dark_mode.svg" alt="" />
        </div>
      </div>
      <div class="header">ABOUT</div>
      <div class="description">{{ description }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { darkMode, toggleDarkMode } from '@/composables/isDarkMode'
const description = `Hi, I'm Alex, a passionate problem-solver with a knack for optimizing processes and simplifying complex challenges. 
                      As a software developer with over 4 years of professional experience, 
                      I thrive on breaking down large-scale problems into manageable solutions, driving efficiency and innovation in everything I do.
                      When I'm not staring at my laptop I'm usually in the gym, on a hike, or doing something fun outdoors!`
</script>

<style scoped>
.container {
  display: flex;
  height: 90vh; /* 100% of the viewport height */
  font-family: 'Roboto Mono', monospace;
  flex-direction: row;
}

.left-container {
  flex: 1; /* Take up the remaining space */
  overflow: hidden; /* Ensure child elements don't overflow */
}

.left-container img {
  width: 100%; /* Make the image fill the entire width of the container */
  height: 100%; /* Make the image fill the entire height of the container */
  object-fit: cover; /* Ensure the image covers the entire container without stretching */
}

.right-container {
  display: flex;
  flex: 1; /* Take up the remaining space */
  /* background-color: #889eb3; Placeholder background color for the right container */
  background-color: var(--background-color);
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}

.top-container {
  /* border: 2px solid white; */
  display: flex;
  height: 25vh;
  width: 100%;
  display: flex;
  color: var(--background-color);
  justify-content: flex-end;
}

.button-container {
  height: 50px;
  width: 70px;
  margin: 10px;
  /* border: 2px solid white; */
  display: flex;
  /* justify-content: flex-start; */
  align-items: center;
  background-color: var(--dark-mode-container);
  border-radius: 10%;
  cursor: pointer;
}

.light-mode {
  justify-content: flex-end;
}

.dark-mode {
  justify-content: flex-start;
}

.button-container img {
  height: 35px;
  width: 35px;
}

.header {
  display: flex;
  align-items: center; /* Center the content vertically */

  color: var(--text-color); /* White text color */
  width: calc(100% - 30px); /* Corrected syntax */
  font-size: 40px;
  height: 80px; /* Set a fixed height for the header */
  padding-left: 10px;
}

.description {
  display: flex;
  justify-content: center; /* Center the content horizontally */
  align-items: center; /* Center the content vertically */
  border: 2px solid #1c978f;
  border-radius: 5px;
  background-color: var(--background-color); /* Red background color */
  color: #1d8881; /* White text color */
  width: calc(100% - 60px);
  padding: 10px; /* Add padding for better visual appearance */
  margin: 10px;
  font-size: 20px;
  font-weight: 1000;
}

@media screen and (max-width: 1000px) {
  .container {
    flex-direction: column;
  }
  .left-container {
    /* height: 45vh; Set a fixed height for the left container on smaller screens */
    overflow: hidden; /* Ensure child elements don't overflow */
  }

  .right-container {
    /* height: 45vh; */
    justify-content: center;
  }
  .top-container {
    height: 60px;
  }

  .button-container {
    height: 50px;
    width: 70px;
    margin: 5px 10px;
  }

  .header {
    display: flex;
    align-items: center; /* Center the content vertically */
    color: var(--text-color); /* White text color */
    width: calc(100% - 40px); /* Corrected syntax */
    font-size: 48px;
    padding: 5px;
    height: 50px;
  }

  .description {
    display: flex;
    justify-content: center; /* Center the content horizontally */
    align-items: center; /* Center the content vertically */
    border: 2px solid #1c978f;
    border-radius: 5px;
    background-color: var(--background-color); /* Red background color */
    color: #1d8881; /* White text color */
    width: calc(100% - 40px);
    padding: 5px; /* Add padding for better visual appearance */
    font-size: 18px;
    font-weight: 1000;
  }

  @media screen and (max-width: 700px) {
    .description {
      display: flex;
      justify-content: center; /* Center the content horizontally */
      align-items: center; /* Center the content vertically */
      border: 2px solid #1c978f;
      border-radius: 5px;
      background-color: var(--background-color); /* Red background color */
      color: #1d8881; /* White text color */
      width: calc(100% - 40px);
      padding: 5px; /* Add padding for better visual appearance */
      font-size: 14px;
      font-weight: 1000;
    }

    .header {
      display: flex;
      align-items: center; /* Center the content vertically */
      color: var(--text-color); /* White text color */
      width: calc(100% - 40px); /* Corrected syntax */
      font-size: 40px;
      padding: 5px;
      height: 50px;
    }
  }
}
</style>
