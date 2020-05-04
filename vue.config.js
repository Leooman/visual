const path = require('path')
const { name } = require('./package')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const port = 8081

module.exports = {
  publicPath: process.env.NODE_ENV === 'development' ? '/' : '/micro-frontends/vue/',
  outputDir: '../main-nuxt/dist/vue',
  assetsDir: 'static',
  filenameHashing: true,
  devServer: {
    // host: '0.0.0.0',
    hot: true,
    disableHostCheck: true,
    port,
    overlay: {
      warnings: false,
      errors: true,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  // 自定义webpack配置
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      jsonpFunction: `webpackJsonp_${name}`,
    },
  },
}