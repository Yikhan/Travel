module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'styles': '@/assets/styles',
        'images': '@/assets/images'
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/api': '/mock'
        }
      }
    }
  }
}