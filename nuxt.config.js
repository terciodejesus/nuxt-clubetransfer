export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Clube Transfer Receptivo',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'facebook-domain-verification', content: 'axhe40326wqv2bv00hw5hfw0xfejbz' },
      { hid: 'description', name: 'description', content: 'Promovendo viagens com qualidade do aeroporto até os hotéis e eventos' },
      { hid: 'og:title', property: 'og:title', content: 'Clube Transfer Receptivo' },
      { hid: 'og:description', property: 'og:description', content: 'Promovendo viagens com qualidade do aeroporto até os hotéis e eventos' },
      { hid: 'og:image', property: 'og:image', content: 'https://www.clubetransfer.com.br/logo_og.png' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://www.clubetransfer.com.br' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap",
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/base.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: './plugins/GoogleAnalytics.js',
      mode: 'client'
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/composition-api/module',
    [
      'nuxt-fontawesome', {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          },
          {
            set: '@fortawesome/free-regular-svg-icons',
            icons: ['far']
          }
        ]
      }
    ]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    'nuxt-facebook-pixel-module',
    '@nuxtjs/sitemap'
  ],

  sitemap: {
    hostname: 'https://www.clubetransfer.com.br',
    gzip: true
  },

  facebook: {
    /* module options */
    track: 'PageView',
    pixelId: '1995213760653850',
    autoPageView: true,
    disabled: false
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["emailjs"],
    extractCSS: true,
  }
}
