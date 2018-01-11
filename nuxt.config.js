module.exports = {
  css: ['~/assets/styles/main.scss',
    '~/node_modules/material-components-web/dist/material-components-web.css',
    {src: '~/assets/css/app.styl'}
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: 'AppPet',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'AppPet es una aplicación para la adopción de mascotas y para la búsqueda de estas en caso de pérdida ' },
      { hid: 'keywords', name: 'keywords', content: 'AppPet, pet, pets, animals, animales, adopcion' },
      { hid: 'image', property: 'og:image', name: 'og:image', content: 'https://firebasestorage.googleapis.com/v0/b/profitoro-ad0f0.appspot.com/o/assets%2Fsharing.png?alt=media&token=d8687d98-24a7-4a8a-b0c4-06a39b127443' },
      { hid: 'url', property: 'og:url', name: 'og:url', content: 'https://www.profitorolife.com' },
      { hid: 'title', property: 'og:title', name: 'og:title', content: 'ProFitOro' },
      { hid: 'ogdescription', property: 'og:description', name: 'og:description', content: 'ProFitOro is a Pomodoro timer implementation combined with office workouts. Take breaks during work. Exercise during breaks ' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icono.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Josefin+Sans' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Acme' }
    ],
    script: [
      { type: 'text/javascript', src: '/jquery.js' },
      { type: 'text/javascript', src: '/tether.js' },
      { type: 'text/javascript', src: '/bootstrap.js' }
    ]
  },
  plugins: ['~plugins/vuetify.js'],
  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: 'aqua',
    height: '1.5px'
  },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['vuetify'],
    /*
    ** Run ESLINT on save
    */
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    },
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
