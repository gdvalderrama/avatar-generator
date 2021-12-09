module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/avatar-generator/'
    : '/',

  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },

  transpileDependencies: [
    'quasar'
  ]
}
