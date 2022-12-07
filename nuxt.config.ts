import pkg from './package.json'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
  ],
  modules: [
  ],
  build: {
    transpile: [],
  },
  typescript: {
    shim: false,
    strict: true,
    typeCheck: true,
  },
  vite: {
    optimizeDeps: {
      include: [
        'vue',
      ],
    },
  },
  runtimeConfig: {
    apiSecret: '',
    public: {
      apiBase: '/api'
    }
  }, 
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: {
        lang: "en", 
      },
      title: pkg.name,
        titleTemplate: '%s - v.' + pkg.version,
      bodyAttrs: {
        class: ''
      },
      meta: [
        { property: 'og:site_name', content: pkg.name},
        { property: 'og:type', content: 'website'},
        { property: 'og:image', content: 'public/img/logo640.jpg'},
        { property: 'og:locale', content: 'en_US'},
        { property: 'og:title', content: pkg.name},
        { name: 'title' , content: pkg.name},
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: pkg.name, name: 'description', content: pkg.description },
        { name: 'keywords', content: pkg.keywords }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    }
  },
})
