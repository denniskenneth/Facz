export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // router: {
    // base: '/Facz/'
  // },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Facz',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  generate: {
    routes: []
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/firebase'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',

    // '@nuxtjs/firebase',
    // {
    //   config: {
    //     apiKey: 'AIzaSyCqoXIwxCQJOuFJL_SbDJy9ajRxjyZ0hNk',
    //     authDomain: 'facz-f5e6b.firebaseapp.com',
    //     projectId: 'facz-f5e6b',
    //     storageBucket: 'facz-f5e6b.appspot.com',
    //     messagingSenderId: '237557740465',
    //     appId: '1:237557740465:web:7bcfc1888d1c308eed0390',
    //     measurementId: 'G-8P7VPMEXZ7'
    //   },
    //   services: {
    //     auth: true, // Just as example. Can be any other service.
    //     firestore: true,
    //     functions: true,
    //     storage: true,
    //     database: true,
    //     messaging: true,
    //     performance: true,
    //     analytics: true,
    //     remoteConfig: true
    //   }
    // }

  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
