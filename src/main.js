import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout)

  head.htmlAttrs = { lang: 'es', class: 'h-full' }
  head.bodyAttrs = { class: 'antialiased font-serif' }

  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.typekit.net/bgs4por.css'
  })
}
