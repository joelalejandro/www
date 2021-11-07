<template>
  <Layout>
    <main>
      <header class="max-w-xl md:max-w-2xl xl:max-w-3xl mx-auto text-center px-6 pt-24">
                <div
          class="max-w-xl md:max-w-3xl xl:max-w-4xl mx-auto text-center px-6 py-10 md:py-32"
        >
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-sans font-bold mb-1">
            <g-link to="/">
              <img class="h-64 mx-auto filter-invert" src="./images/logo.svg" />
            </g-link>
          </h1>
        </div>
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-caption font-bold mb-1 dark:text-gray-300">Charlas</h1>
        <p class="text-grey-dark text-lg sm:text-3xl dark:text-gray-600">Una lista de las charlas que he dado en diferentes espacios.</p>
        <p class="text-grey-dark text-md dark-text-gray-600">Podés ver cada charla haciendo click en su título. En algunos casos son videos, en otros sólo presentaciones.</p>
      </header>
      <nav class="absolute top-0 left-0 z-20 mt-6 ml-6">
        <g-link to="/" class="text-gray-900 dark:text-gray-400 border-gray-400 text-sm border opacity-75 hover:opacity-100 rounded-full px-4 py-2 transition-opacity duration-300">&larr; Volver a la portada</g-link>
      </nav>
      <article class="max-w-xl md:max-w-2xl xl:max-w-3xl mx-auto px-6 sm:px-12 pt-16 border-b border-gray-300 pb-10 mb-16">
        <div class="relative wrap overflow-hidden md:p-10 h-full">
            <div class="absolute z-index-2 text-2xl text-gray-700 left-timeline-arrow md:centered-timeline-arrow">▲</div>
            <div class="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-timeline-border md:centered-timeline-border"></div>

            <section v-for="(year, yearIndex) in Object.keys(talks).reverse()" :key="year">
              <section v-for="(talk, index) in talks[year]" :key="talk.title">
                <div :class="`mb-8 flex md:justify-between w-full ${yearIndex === 0 && index === 0 ? 'pt-8' : ''} ${index % 2 ? 'md:flex-row-reverse left-timeline' : 'right-timeline'}`">
                  <div class="order-1 md:w-5/12"></div>
                  <div class="z-20 flex items-center order-1 bg-gray-800 dark:bg-gray-600 shadow-xl w-16 h-8 rounded-full mt-4">
                    <h1 class="mx-auto text-white font-semibold text-md">{{talk.date.substr(0, 5)}}</h1>
                  </div>
                  <div :class="`dark-hover:bg-gray-700 hover:bg-gray-300 rounded-lg order-1 w-full md:w-5/12 p-4 cursor-pointer ${index % 2 ? 'md:text-right' : 'text-left'}`" @click.prevent="open(talk)">
                    <h3 class="mb-3 font-bold dark:text-white text-sm md:text-xl"><a :href="talk.link" target="_blank">{{talk.title}}</a></h3>
                    <p class="text-sm font-medium leading-snug dark:text-gray-500 tracking-wide text-opacity-100">{{talk.venue}}</p>
                  </div>
                </div>
              </section>

              <div :class="`${yearIndex + 1 === Object.keys(talks).length ? 'md:-mb-10' : 'mb-8'} flex justify-between items-center w-full right-timeline`">
                <div class="md:order-1 md:w-5/12"></div>
                <div class="z-20 flex items-center order-1 bg-teal-800 shadow-xl w-full h-16 md:w-48 md:h-24 rounded-full">
                  <h1 class="mx-auto font-semibold text-xl md:text-4xl text-white">{{year}}</h1>
                </div>
                <div class="md:order-1 md:w-5/12 md:px-6 md:py-4">
                </div>
              </div>
            </section>
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
    SiteFooter,
  },
  methods: {
    open({ link }) {
      window.open(link);
    },
  },
  metaInfo () {
    return {
      title: 'Charlas',
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.ogDescription
        },

        { property: "og:type", content: 'article' },
        { property: "og:title", content: 'Charlas' },
        { property: "og:description", content: this.ogDescription },
        { property: "og:url", content: `${this.config.siteUrl}/talks/` },
        { property: "og:image", content: this.ogImageUrl },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: 'Charlas' },
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
      return 'Una lista de las charlas que he dado en diferentes espacios.'
    },
    ogImageUrl () {
      return `${this.config.siteUrl}/android-chrome-512x512.png`;
    },
    talks () {
      return {
        2021: [
          {
            link: 'https://youtu.be/RWbvsLUKLLY?t=12179',
            title: 'JavaScript, Calabozos y Dragones',
            venue: '5Stars Conf',
            date: '06/11/2021'
          },
          {
            link: 'https://www.youtube.com/watch?v=j4hJbsCePrQ',
            title: 'Shape Detection API: Códigos de barra sin librerías',
            venue: 'BeerJS Córdoba',
            date: '21/10/2021'
          },
          {
            link: 'https://www.youtube.com/watch?v=SmfSS0idKTU',
            title: 'Buenas prácticas con código SOLID',
            venue: 'GDG Formosa',
            date: '25/06/2021'
          },
          {
            link: 'https://youtu.be/B5KE56yvpTc?t=932',
            title: 'Git-as-a-DB: Data Storage con JavaScript y Git',
            venue: 'BeerJS Córdoba',
            date: '20/05/2021'
          },
          {
            link: 'https://www.youtube.com/watch?v=PDn19o_5rs0',
            title: 'APIs basadas en configuación con Koa y Knex',
            venue: 'DevTeam504',
            date: '03/02/2021'
          }
        ],
        2020: [
          {
            link: 'https://www.youtube.com/watch?v=_KQQCozGk2o',
            title: 'useReact(\'better\'): El hook de las buenas prácticas',
            venue: 'vOpen Tech',
            date: '01/12/2020'
          },
          {
            link: 'https://youtu.be/G7VllJTbjqY?t=6269',
            title: 'Tres actos en la industria del software: una historia de diversidad e inclusión',
            venue: 'CPI Conf',
            date: '26/09/2020'
          },
          {
            link: 'https://youtu.be/Np0pxPUbSFk?t=5375',
            title: 'Diseño gráfico con JavaScript',
            venue: 'BeerJS Córdoba',
            date: '17/09/2020',
          },
          {
            link: 'https://www.youtube.com/watch?v=e1yOI4PxNPs',
            title: 'Programación defensiva con TypeScript',
            venue: 'Encuentros CoDeAr',
            date: '13/07/2020'
          },
          {
            link: 'https://youtu.be/Sk0dh_Uz31o?t=9294',
            title: 'Trayendo orden al caos: ¡Hola, expresiones regulares!',
            venue: 'freeCodeCampBA Conf',
            date: '13/06/2020'
          },
          {
            link: 'https://www.youtube.com/watch?v=_sBxwws_xR8',
            title: 'Buenas prácticas con código SOLIDo',
            venue: 'Encuentros CoDeAr',
            date: '01/06/2020'
          },
        ],
        2019: [
          {
            link: 'https://www.youtube.com/watch?v=hU29LN7xyPk',
            title: 'Robots felices y productivos: Diseñando herramientas para tests de automatización',
            venue: 'BeerJS Córdoba',
            date: '21/09/2019'
          },
          {
            link: 'https://www.youtube.com/watch?v=19q337eXg-A',
            title: 'Crecer con la Web',
            venue: 'Córdoba WebConf',
            date: '11/05/2019'
          },
          {
            link: 'https://www.youtube.com/watch?v=CQArxKXW6u4',
            title: 'Web Components con Stencil',
            venue: 'BeerJS Córdoba',
            date: '21/02/2019'
          },
        ],
        2018: [
          {
            link: 'https://slides.com/joelalejandrovillarrealbertoldi/js-fundamentals-async',
            title: 'Espera un poco, un poquito más: Una introducción de telenovela a la programación asincrónica en JavaScript',
            venue: 'BeerJS Córdoba',
            date: '16/08/2018'
          }
        ],
        2017: [
          {
            link: 'https://slides.com/joelalejandrovillarrealbertoldi/emberallthethings-frontend-backend-deploy-strategies',
            title: '#EmberAllTheThings: Frontend + Backend + Deploy Strategies',
            venue: 'BeerJS Córdoba',
            date: '20/10/2017'
          },
          {
            link: 'https://slides.com/joelalejandrovillarrealbertoldi/dragones-naves-js',
            title: 'Sobre dragones, naves espaciales y JavaScript: una historia épica',
            venue: 'BeerJS Córdoba',
            date: '31/03/2017'
          },
        ],
        2016: [
          {
            link: 'https://slides.com/joelalejandrovillarrealbertoldi/frontend-unit-testing',
            title: 'Todo lo que querés saber sobre Unit Testing en 60 minutos',
            venue: 'Mercado Libre',
            date: '03/10/2016'
          },
          {
            link: "https://slides.com/joelalejandrovillarrealbertoldi/progressive-web-apps-pub",
            title: 'Progressive Web Apps: Uniendo dos mundos',
            venue: 'Mercado Libre',
            date: '12/07/2016'
          }
        ],
      }
    }
  },
}
</script>
