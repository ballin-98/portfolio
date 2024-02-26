import { ref } from "vue";

export const darkMode = ref(false);

export const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
};
