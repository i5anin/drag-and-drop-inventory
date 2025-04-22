// vue.config.js
const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: 'src/app/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },
})
