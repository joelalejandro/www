<template>
  <div v-bind:class="{ 'mode-dark': darkMode }">
    <div class="bg-white dark:bg-black">
      <button @click="toggleDarkMode()" title="Modo oscuro/claro">
        <span v-if="!darkMode">🌙</span>
        <span v-if="darkMode">🌞</span>
      </button>
      <slot/>
    </div>
  </div>
</template>

<script>
import config from '~/.temp/config.js';

export default {
  data: () => ({
    darkMode: Boolean(Number(window.sessionStorage.getItem("darkMode")))
  }),
  computed: {
    config () {
      return config
    }
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      window.sessionStorage.setItem("darkMode", Number(this.darkMode));
    }
  }
}
</script>

<style src="~/assets/css/main.css"></style>
<style scoped>
  button {
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 1;
  }
</style>
