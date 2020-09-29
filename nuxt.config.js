const path = require('path')

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: "Ioan Biticu\'s dev page",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,800' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/tailwind.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{
    src: '~/plugins/vue-cookie-law',
    ssr: false
  }],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/google-analytics', {
      id: 'UA-168991378-1'
    }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'nuxt-material-design-icons',
    '@nuxtjs/robots',
  ],

  // https://dev.to/siliconmachine/how-to-implement-a-robots-txt-file-in-a-nuxt-project-nuxt-2-10-4a9m
  robots: [
    {
      UserAgent: '*',
      Disallow: '/apply'
    }
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */

  /*
  purgeCSS: {
    whitelist: ["html", "body"],
    whitelistPatternsChildren: [/^token/, /^pre/, /^code/, /^toolbar/, /^iframe/],
  },
*/
  build: {
    transpile: [
      "gsap"
    ],
    /*
    ** You can extend webpack config here
    */
   extend(config, ctx) {

   }

   /*
    extend(config, ctx) {
      // to transform link with <nuxt-link> for the htmlSerializer
      config.resolve.alias['vue'] = 'vue/dist/vue.common'
      if (ctx.isDev) {
        config.optimization.minimize = false;
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    },

    "html.minify": {
      preserveLineBreaks: true,
      minifyCSS: false,
      minifyJS: false,
    },

    postcss: {
      plugins: {
        'postcss-import': {},
        tailwindcss: path.resolve(__dirname, './tailwind.config.js'),
        'postcss-nested': {}
      }
    },
    preset: {
      stage: 1 // see https://tailwindcss.com/docs/using-with-preprocessors#future-css-featuress
    }
    */
  },

  router: {
    trailingSlash: false
  },

  /*
  optimization: {
    minimize: true,
  },
  */
}
