const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: JSON.stringify(true), // Включение API опций
        __VUE_PROD_DEVTOOLS__: JSON.stringify(false), // Отключение devtools в продакшн-сборке
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false) // Отключение отладочной информации по гидрации
      })
    ]
  }
})
