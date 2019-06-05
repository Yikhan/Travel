module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'styles': '@/assets/styles',
        'images': '@/assets/images',
        'common': '@/components/common'
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