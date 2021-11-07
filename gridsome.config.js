const showdown = require("showdown");
const converter = new showdown.Converter();

const rssOptions = {
  contentTypeName: 'Post',
  feedOptions: {
    title: 'joey.works | Trabajos e ideas de Joel A. Villarreal Bertoldi',
    description: '¡Hola! Soy Joey, un emprendedor de Córdoba, Argentina. Me dedico al diseño gráfico y al desarrollo de software. En este espacio comparto algunas ideas y trabajos que voy haciendo.',
    feed_url: 'https://joey.ar/feed.xml',
    site_url: 'https://joey.ar',
    image_url: 'https://joey.ar/android-chrome-512x512.png',
    language: 'es',
    custom_namespaces: {
      'webfeeds': 'http://webfeeds.org/rss/1.0'
    },
    managingEditor: 'Joel A. Villarreal Bertoldi',
    webMaster: 'Joel A. Villarreal Bertoldi',
    copyright: '2020-hoy, Joel A. Villarreal Bertoldi',
    ttl: 60,
    custom_elements: [
      { 'webfeeds:logo': 'https://joey.ar/favicon-32x32.png' },
      { 'webfeeds:icon': 'https://joey.ar/android-chrome-512x512.png' },
      { 'webfeeds:related': { _attr: { layout: 'card', target: 'browser' } } },
      { 'webfeeds:analytics': { _attr: { id: 'UA-163336812-1', engine: 'GoogleAnalytics' } } },
    ],
  },
  feedItemOptions: node => ({
    title: node.title,
    description: node.description,
    url: 'https:/joey.ar' + node.path,
    author: node.author,
    date: node.date,
    categories: node.tags,
  }),
  output: {
    dir: './static',
    name: 'feed.xml',
  },
}

module.exports = {
  siteName: 'joey.works | Trabajos e ideas de Joel A. Villarreal Bertoldi',
  siteDescription: "¡Hola! Soy Joey, un emprendedor de Córdoba, Argentina. Me dedico al diseño gráfico y al desarrollo de software. En este espacio comparto algunas ideas y trabajos que voy haciendo.",
  siteUrl: 'https://joey.ar',
  titleTemplate: `%s`,
  icon: 'src/favicon.png',

  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      plugins: [
        ['gridsome-plugin-remark-shiki', {
          theme: 'min-light'
        }]
      ]
    }
  },

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/**/*.md',
        typeName: 'Post',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true,
          },
          author: {
            typeName: 'Author',
            create: true,
          },
        },
      },
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-163336812-1',
      },
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
        siteUrl: 'https://joey.ar'
      },
    },
    {
      use: 'gridsome-plugin-rss',
      options: rssOptions
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        ...rssOptions,
        contentTypeName: 'Post',
        feedItemOptions: node => ({
          title: node.title,
          description: converter.makeHtml(node.content.replace(/\/images/g, "https://joey.ar/images")),
          url: 'https:/joey.ar' + node.path,
          guid: 'https:/joey.ar' + node.path,
          author: node.author,
          date: node.date,
          categories: node.tags,
        }),
        output: {
          dir: './static',
          name: 'feed-full.xml',
        },
      },
    },
  ],

  templates: {
    Post: '/:title',
    Tag: '/tag/:id',
    Author: '/author/:id',
  },

  chainWebpack: config => {
    config.module
      .rule('css')
      .oneOf('normal')
      .use('postcss-loader')
      .tap(options => {
        options.plugins.unshift(...[
          require('postcss-import'),
          require('postcss-nested'),
          require('tailwindcss'),
        ])

        if (process.env.NODE_ENV === 'production') {
          options.plugins.push(...[
            require('@fullhuman/postcss-purgecss')({
              content: [
                'src/assets/**/*.css',
                'src/**/*.vue',
                'src/**/*.js'
              ],
              defaultExtractor: content => content.match(/[\w-/:%]+(?<!:)/g) || [],
              whitelistPatterns: [/shiki/]
            }),
          ])
        }

        return options
      })
  },
}
