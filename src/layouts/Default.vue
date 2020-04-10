<template>
  <div v-bind:class="{ 'mode-dark': darkMode, 'mode-large-font': largeFont }">
    <transition name="fade" appear>
      <div class="bg-white dark:bg-black">
        <ClientOnly>
          <aside class="button-group">
            <button @click="toggleDarkMode()" title="Modo oscuro/claro">
              <icon :name="darkMode ? 'sun' : 'moon'" />
            </button>
            <button @click="toggleLargeFont()" title="Aumentar/achicar el tamaño del texto">
              <icon :name="largeFont ? 'zoom-out' : 'zoom-in'" />
            </button>
          </aside>
        </ClientOnly>
        <slot/>
      </div>
    </transition>
  </div>
</template>

<style>
.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}
</style>

<script>
import config from '~/.temp/config.js';
import Icon from "vue-icon/lib/vue-feather.esm";

const read = (flag) => {
  return Boolean(Number(window.sessionStorage.getItem(flag)));
}

const write = (flag, value) => {
  window.sessionStorage.setItem(flag, Number(value));
}

export default {
  components: {
    Icon
  },
  data: () => ({
    darkMode: read("darkMode"),
    largeFont: read("largeFont")
  }),
  computed: {
    config () {
      return config
    }
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      write("darkMode", this.darkMode);
    },
    toggleLargeFont() {
      this.largeFont = !this.largeFont;
      write("largeFont", this.largeFont);
    }
  }
}
</script>

<style src="~/assets/css/main.css"></style>
<style scoped>
  .button-group {
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 20;
  }

  button {
    padding: 1rem;
  }

  .icon {
    width: 24px;
    stroke: #000;
    filter: drop-shadow(0px 0px 2px #fff) drop-shadow(0px 0px 2px #fff);
  }

  .mode-dark .icon {
    stroke: #fff;
    filter: drop-shadow(0px 0px 2px #000) drop-shadow(0px 0px 2px #000);
  }

  @media screen and (max-width: 640px) {
    .button-group {
      display: flex;
      flex-direction: column;
    }
  }
</style>
