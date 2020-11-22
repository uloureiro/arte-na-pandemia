const PrerenderSpaPlugin = require('prerender-spa-plugin')
const path = require('path')

const productionPlugins = [
  new PrerenderSpaPlugin({
    staticDir: path.resolve(__dirname, 'dist'),
    routes: ['/'],
    postProcess (context) {
      const title = 'Arte na Pandemia'
      context.html = context.html.replace(
        /<title>[^<]*<\/title>/i,
        `<title>${title}</title>`
      )
      return context
    }
  })
]

module.exports = {
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(...productionPlugins)
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
