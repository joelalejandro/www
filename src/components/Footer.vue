<template>
  <footer
    class="text-gray-700 dark:text-gray-600 text-sm leading-normal flex flex-wrap justify-between mx-auto max-w-3xl px-6 sm:px-12"
  >
    <div class="w-full flex justify-around mb-12">
      <a title="Seguime en Twitter" href="https://twitter.com/joelalejandro" target="_blank" rel="noopener noreferrer"><icon name="twitter" /></a>
      <a title="Seguime en GitHub" href="https://github.com/joelalejandro" target="_blank" rel="noopener noreferrer"><icon name="github" /></a>
      <a title="Seguime en LinkedIn" href="https://linkedin.com/in/joelvillarrealbertoldi" target="_blank" rel="noopener noreferrer"><icon name="linkedin" /></a>
    </div>
    <div class="w-full sm:w-1/3 mb-4 sm:mb-0">
      <p>
        Basado en el tema
        <a
          href="https://github.com/cossssmin/gridsome-starter-bleda"
          class="border-b border-transparent hover:border-gray-400 transition-colors duration-300"
        >Bleda</a> de
        <a
          href="https://twitter.com/cossssmin"
          class="border-b border-transparent hover:border-gray-400 transition-colors duration-300"
        >@cossssmin</a>
      </p>
      <p>
        Construido con
        <a
          href="https://gridsome.org"
          class="border-b border-transparent hover:border-gray-400 transition-colors duration-300"
        >Gridsome</a> &amp;
        <a
          href="https://tailwindcss.com/"
          class="border-b border-transparent hover:border-gray-400 transition-colors duration-300"
        >Tailwind CSS</a>.
      </p>
    </div>
    <div class="w-full sm:w-2/3">
      <nav>
        <ul class="flex sm:justify-end -mx-2">
          <li class="px-2">
            <g-link
              to="/"
              class="border-b border-transparent hover:border-gray-400 transition-colors duration-300"
            >Portada</g-link>
          </li>
          <li class="px-2">
            <g-link
              to="/about/"
              class="border-b border-transparent hover:border-gray-400 transition-colors duration-300"
            >Acerca de</g-link>
          </li>
          <li class="px-2">
            <g-link
              to="/ask-me-anything/"
              class="border-b border-transparent hover:border-gray-400 transition-colors duration-300"
            >Preguntame</g-link>
          </li>
          <li class="px-2">
            RSS: <a
              href="/feed.xml?v=1"
              class="border-b border-transparent hover:border-gray-400 transition-colors duration-300"
            >breve</a> | <a
              href="/feed-full.xml?v=1"
              class="border-b border-transparent hover:border-gray-400 transition-colors duration-300"
            >completo</a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
  .icon {
    width: 24px;
    height: 24px;
    transition: stroke 100ms linear;
  }

  .icon:hover {
    stroke: teal;
  }

  .mode-dark {
    .icon:hover {
      stroke: #fff;
    }
  }
</style>

<script>
import Icon from "vue-icon/lib/vue-feather.esm";

export default {
  name: "Footer",
  components: {
    Icon
  }
};
</script>
