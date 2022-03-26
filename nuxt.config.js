export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'elearn',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/main.css', 'node_modules/vue-multiselect/dist/vue-multiselect.min.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/vee-validate', '~/plugins/vue-multiselect'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // new modules
  toast: {
    draggable: false,
  },
  proxy: {
    '/turkcell/rest/v11_1/': {
      target: 'https://demo.format14crmcloud.com',
      //pathRewrite: { '^/turkcell/rest/v11_1/': '' },
    },
    changeOrigin: true,
  },
  axios: {
    proxy: true,
    //baseURL: 'https://demo.format14crmcloud.com/turkcell/rest/v11_1',
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['vue-toastification/nuxt', '@nuxtjs/axios', '@nuxtjs/proxy'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
