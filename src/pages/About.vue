<template>
  <Layout>
    <main>
      <header class="max-w-xl md:max-w-2xl xl:max-w-3xl mx-auto text-center px-6 pt-24">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-caption font-bold mb-1 dark:text-teal-300">¡Qué bueno verte por aquí!</h1>
        <p class="text-grey-dark text-lg sm:text-3xl dark:text-teal-600">Permitime presentarme.</p>
      </header>
      <nav class="absolute top-0 left-0 z-20 mt-6 ml-6">
        <g-link to="/" class="text-gray-900 dark:text-gray-400 border-gray-400 text-sm border opacity-75 hover:opacity-100 rounded-full px-4 py-2 transition-opacity duration-300">&larr; Volver a la portada</g-link>
      </nav>
      <article class="max-w-xl md:max-w-2xl xl:max-w-3xl mx-auto px-6 sm:px-12 pt-16 border-b border-gray-300 pb-10 mb-16">
        <div class="markdown text-lg leading-normal text-gray-700 dark:text-gray-300">
          <img src="https://pbs.twimg.com/profile_images/1241472305966002176/uBegkBbl_400x400.jpg">
          <p>Mi nombre es Joel Alejandro Villarreal Bertoldi (sí, mi nombre es ideal para romper maquetado de formularios con sus portentosos 34 caracteres con espacios).</p>
          <p>Nací el 15 de enero de 1990, tan capricorniano que arruiné los planes de mis padres de nacer en Acuario. Al momento que leés esta pantalla, debería tener unos {{ new Date().getFullYear() - 1990 }} años, dadas ciertas condiciones (como por ejemplo, estar vivo).</p>
          <p>Me tocó vivir la infancia y adolescencia de la web. Programo desde mediados del año 2000, y el único lenguaje que me acompañó incansablemente durante casi dos décadas fue y es JavaScript. Mientras tanto, jugué con BASIC, QBASIC y QuickBASIC, Visual Basic, DHTML (cuando el único navegador que gobernaba Internet era Internet Explorer 5.5), ASP (antes de .NET), PHP, C#, SQL, PL/SQL y más recientemente JavaScript y su primo estricto, TypeScript, CSS y su prima superpoderosa, SCSS.</p>
        </div>
      </article>
      <site-footer class="pb-8 sm:pb-10" />
    </main>
  </Layout>
</template>

<script>
import config from '~/.temp/config.js'
import SiteFooter from '@/components/Footer'

export default {
  components: {
    SiteFooter
  },
  metaInfo () {
    return {
      title: 'About',
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
      return 'Introduction to the Bleda blog starter for Gridsome.'
    },
    ogImageUrl () {
      return `${this.config.siteUrl}/images/bleda-card.png`
    }
  },
}
</script>
