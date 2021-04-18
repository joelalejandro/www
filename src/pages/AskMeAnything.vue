<template>
  <Layout>
    <main>
      <header class="max-w-xl md:max-w-2xl xl:max-w-3xl mx-auto text-center px-6 pt-24">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-caption font-bold mb-1 dark:text-teal-300">¿Charlamos?</h1>
        <p class="text-grey-dark text-lg sm:text-3xl dark:text-teal-600">Este espacio es para debatir.</p>
      </header>
      <nav class="absolute top-0 left-0 z-20 mt-6 ml-6">
        <g-link to="/" class="text-gray-900 dark:text-gray-400 border-gray-400 text-sm border opacity-75 hover:opacity-100 rounded-full px-4 py-2 transition-opacity duration-300">&larr; Volver a la portada</g-link>
      </nav>
      <article class="max-w-xl md:max-w-2xl xl:max-w-3xl mx-auto px-6 sm:px-12 pt-16 border-b border-gray-300 pb-10 mb-16">
        <div class="markdown text-lg leading-normal text-gray-700 dark:text-gray-300">
          Creé este espacio en mi blog para poder conversar y discutir. Acá podrás hacerme preguntas a las que yo pueda responder para contarte un poco
          de mi experiencia en el rubro.
        </div>
        <div class="markdown text-lg leading-normal text-gray-700 dark:text-gray-300">
          ¿Qué podés preguntar? Cualquier pregunta de índole profesional es bienvenida. Si es una pregunta que no me podrías hacer cara a cara,
          es una pregunta que probablemente tampoco vaya a responder por medios digitales.
        </div>

        <comments />
      </article>

      <site-footer class="pb-8 sm:pb-10" />
    </main>
  </Layout>
</template>

<script>
import config from '~/.temp/config.js'
import SiteFooter from '@/components/Footer'
import Comments from "@/components/Comments"

const injectCommento = () => {
  return { src: "https://cdn.commento.io/js/commento.js", defer: true };
};

export default {
  components: {
    SiteFooter,
    Comments
  },
  metaInfo () {
    return {
      title: 'Preguntas',
      script: [injectCommento()],
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.ogDescription
        },

        { property: "og:type", content: 'article' },
        { property: "og:title", content:'¿Y este blog?' },
        { property: "og:description", content: this.ogDescription },
        { property: "og:url", content: `${this.config.siteUrl}/about/` },
        { property: "og:image", content: this.ogImageUrl },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: '¿Y este blog?' },
        { name: "twitter:description", content: this.ogDescription },
        { name: "twitter:site", content: "@joelalejandro" },
        { name: "twitter:creator", content: "@joelalejandro" },
        { name: "twitter:image", content: this.ogImageUrl },
      ],
    }
  },
  computed: {
    config () {
      return config
    },
    ogDescription () {
      return 'Un espacio para que me preguntes lo que quieras.'
    },
    ogImageUrl () {
      return `${this.config.siteUrl}/android-chrome-512x512.png`;
    }
  },
}
</script>
