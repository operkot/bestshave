const path = require('path')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.config.base')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const postcssDevConfig = path.resolve(__dirname, 'postcss.config.dev.js')

module.exports = merge(baseConfig, {
  mode: 'development',
  target: 'web',
  devServer: {
    // host: '0.0.0.0',
    port: 7777,
    disableHostCheck: true,
    overlay: true,
    contentBase: path.join(__dirname, '/dist'),
    watchContentBase: true,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: { config: postcssDevConfig },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/main.css',
    }),
  ],
})
