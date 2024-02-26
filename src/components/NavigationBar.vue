<template>
  <div class="nav-bar-container" :class="darkMode ? 'dark-theme' : 'light-theme'">
    <div class="left-container">
      <a @click="scrollToTop">
        <div class="left-container-link">ABOUT</div>
      </a>
      <a href="#project-page">
        <div class="left-container-link">PROJECTS</div>
      </a>
    </div>
    <div class="center-container">
      <div class="logo">Alex Bali</div>
    </div>
    <div class="right-container">
      <div class="image-container">
        <a target="_blank" href="https://www.linkedin.com/in/alex-bali/">
          <img src="/assets/linkedin.svg" alt="" />
        </a>
      </div>
      <div class="image-container">
        <a target="_blank" href="https://github.com/ballin-98">
          <img src="/assets/github.svg" alt="" />
        </a>
      </div>
      <div class="image-container">
        <a href="mailto:your-alexbali189@gmail.com">
          <img src="/assets/mail.svg" alt="" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { darkMode } from '@/composables/isDarkMode'
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>
<style scoped>
.nav-bar-container {
  background-color: #051622;
  height: inherit;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: 'Roboto Mono', monospace;
}

.left-container {
  display: flex;
  flex-direction: row;
  width: 300px;
  align-items: center;
}
.left-container a {
  text-decoration: none;
}

.left-container-link {
  font-size: 24px;
  color: var(--navigation-text-color);
  padding: 10px;
  margin: 0px 5px;
}

.left-container-link:hover {
  box-shadow: 0 0 10px #1ba098; /* Add a subtle box-shadow effect */
  cursor: pointer;
}

.center-container {
  display: flex;
  flex-direction: row;
  flex: 1;
  margin: auto;
  border: 1px solid var(--navigation-text-color);
  color: var(--navigation-text-color);
}

.logo {
  margin: auto;
  font-size: 28px;
  font-weight: 600;
}

.right-container {
  display: flex;
  flex-direction: row;
  width: 300px;
  align-items: center; /* Center vertically */
  justify-content: flex-end;
  color: var(--navigation-text-color);
}

.image-container {
  height: 50%;
  display: flex;
  align-items: center; /* Center vertically */
  padding: 10px;
  margin: 0px 5px;
  background-color: var(--navigation-text-color);
}

.image-container img {
  height: 32px;
}
.image-container a {
  font-style: none;
}

.image-container:hover {
  box-shadow: 0 0 15px #1ba098; /* Add a subtle box-shadow effect */
}

/* Styles for small screens */
@media only screen and (max-width: 800px) {
  .center-container {
    display: none;
  }
  .left-container {
    display: flex;
    flex-direction: row;
    width: 200px;
    align-items: center;
  }

  .left-container-link {
    font-size: 20px;
    color: var(--text-color);
  }

  .left-container-link:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4); /* Add a subtle box-shadow effect */
    cursor: pointer;
  }
  .right-container {
    display: flex;
    flex-direction: row;
    width: 200px;
    align-items: center; /* Center vertically */
    justify-content: flex-end;
  }

  .image-container {
    height: 50%;
    display: flex;
    align-items: center; /* Center vertically */
    background-color: var(--navigation-text-color);
  }
  @media only screen and (max-width: 400px) {
    .center-container {
      display: none;
    }
    .left-container {
      display: flex;
      flex-direction: row;
      width: 100px;
      align-items: center;
    }

    .left-container-link {
      font-size: 14px;
      color: var(--text-color);
    }
    .right-container {
      display: flex;
      flex-direction: row;
      width: 100px;
      align-items: center; /* Center vertically */
      justify-content: flex-end;
    }

    .image-container {
      height: 50%;
      display: flex;
      align-items: center; /* Center vertically */
    }
    .image-container img {
      height: 24px;
    }
  }
}
</style>
