// const webpack = require('webpack')

export default {
  // target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  server: {
    port: 10000,
    host: process.env.NODE_ENV === 'production' ? '0.0.0.0' : 'localhost',
  },
  env: {
    APP_URL_LOCAL: process.env.APP_URL_LOCAL || '',
    APP_URL_PROD: process.env.APP_URL_PROD || '',
    NODE_ENV: process.env.NODE_ENV || '',
    ERP_DOMAIN: process.env.ERP_DOMAIN || '',
  },
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
      { hid: 'jquery', src: `${process.env.NODE_ENV === 'production' ? process.env.APP_URL_PROD : process.env.APP_URL_LOCAL}/js/jquery-2.2.4.min.js`, defer: true, body: true },
      { hid: 'bootstrap', src: `${process.env.NODE_ENV === 'production' ? process.env.APP_URL_PROD : process.env.APP_URL_LOCAL}/js/bootstrap.bundle.min.js`, defer: true, body: true },
      { hid: 'owlcarousel', src: `${process.env.NODE_ENV === 'production' ? process.env.APP_URL_PROD : process.env.APP_URL_LOCAL}/js/owl.carousel.min.js`, defer: true, body: true },
      { hid: 'aos', src: `${process.env.NODE_ENV === 'production' ? process.env.APP_URL_PROD : process.env.APP_URL_LOCAL}/js/aos.js`, defer: true, body: true },
      { hid: 'smoothscrollbar', src: `${process.env.NODE_ENV === 'production' ? process.env.APP_URL_PROD : process.env.APP_URL_LOCAL}/js/smooth-scrollbar.js`, defer: true, body: true },
      { hid: 'fancybox', src: `${process.env.NODE_ENV === 'production' ? process.env.APP_URL_PROD : process.env.APP_URL_LOCAL}/js/fancybox.umd.js`, defer: true, body: true },
      { hid: 'custom', src: `${process.env.NODE_ENV === 'production' ? process.env.APP_URL_PROD : process.env.APP_URL_LOCAL}/js/custom.js`, defer: true, body: true },
    ]
  },
  serverMiddleware: [
    { path: "/rest", handler: "~/server-middleware/rest.js" },
  ],
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/owl.carousel.min.css',
    '~/assets/css/bootstrap.min.css',
    '~/assets/css/aos.css',
    '~/assets/css/smooth-scrollbar.css',
    '~/assets/css/fancybox.css',
    '~/assets/scss/styles.scss',
    '~/assets/scss/responsive.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/vue-js-modal.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/device'
  ],

  device: {
    refreshOnResize: true
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'cookie-universal-nuxt'
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
  build: {},
  router: {
    scrollBehavior: async (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition;
      }

      const smoothscrollPolyfillScript =
        "//unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js";

      if (process.client && (!("scrollBehavior" in document.documentElement.style))) {
        if (
          document.querySelectorAll(
            `script[src="${smoothscrollPolyfillScript}"]`
          ).length === 0
        ) {
          const ele = document.createElement("script");
          ele.src = smoothscrollPolyfillScript;
          ele.defer = true;
          document.body.appendChild(ele);
        }
      }

      const findEl = async (hash, x) => {
        return (
          document.querySelector(hash) ||
          new Promise((resolve, reject) => {
            if (x > 50) {
              return resolve();
            }
            setTimeout(() => {
              resolve(findEl(hash, ++x || 1));
            }, 100);
          })
        );
      };

      if (to.hash) {
        setTimeout(async () => {
          let el = await findEl(to.hash);
          return window.scrollTo({
            top: el.offsetTop,
            behavior: "smooth"
          });
        }, 2000);
      }

      return {
        x: 0,
        y: 0
      };
    },
  },
}
