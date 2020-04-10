<template>
  <footer
    class="text-gray-700 dark:text-gray-600 text-sm leading-normal flex flex-wrap justify-between mx-auto max-w-3xl px-6 sm:px-12"
  >
    <div class="w-full flex justify-center mb-12">

    </div>
    <div class="w-full sm:w-1/2 mb-4 sm:mb-0">
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
    <div class="w-full sm:w-1/2">
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
            <a
              href="/sitemap.xml"
              class="border-b border-transparent hover:border-gray-400 transition-colors duration-300"
            >Mapa del sitio</a>
          </li>
          <li class="px-2">
            <a
              href="/feed.xml"
              class="border-b border-transparent hover:border-gray-400 transition-colors duration-300"
            >Leé el blog en RSS</a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>
