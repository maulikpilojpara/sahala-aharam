const webpack = require('webpack')

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Sahaja Aharam',
    __dangerouslyDisableSanitizers: ['script'],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com', crossorigin: 'anonymous' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
      {
        rel: "preload",
        as: "font",
        crossorigin: 'crossorigin',
        type: "font/woff2",
        href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700;900&display=swap",
      }
    ],
    script: [
      { hid: 'jquery', src: 'js/jquery-2.2.4.min.js', defer: true, body: true },
      { hid: 'bootstrap', src: 'js/bootstrap.bundle.min.js', defer: true, body: true },
      { hid: 'owlcarousel', src: 'js/owl.carousel.min.js', defer: true, body: true },
      { hid: 'aos', src: 'js/aos.js', defer: true, body: true },
      { hid: 'smoothscrollbar', src: 'js/smooth-scrollbar.js', defer: true, body: true },
      { hid: 'kursor', src: 'js/kursor.js', defer: true, body: true },
      { hid: 'custom', src: 'js/custom.js', defer: true, body: true },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/owl.carousel.min.css',
    '~/assets/css/bootstrap.min.css',
    '~/assets/css/aos.css',
    '~/assets/css/smooth-scrollbar.css',
    '~/assets/scss/styles.scss',
    '~/assets/scss/responsive.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
