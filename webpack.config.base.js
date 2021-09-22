const fs = require('fs')
const path = require('path')
const { compose, endsWith, filter } = require('ramda')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const PATHS = {
  src: path.join(__dirname, '/src'),
  dist: path.join(__dirname, '/dist'),
}

const getOnlyPugFiles = compose(filter(endsWith('.pug')), fs.readdirSync)
const PAGES = getOnlyPugFiles(`${PATHS.src}/markup/`)

const markup = PAGES.map(
  (page) =>
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/markup/${page}`,
      filename: `./${page.replace(/\.pug/, '.html')}`,
    })
)

const assetsPaths = [
  {
    from: `${PATHS.src}/fonts`,
    to: `${PATHS.dist}/fonts`,
    noErrorOnMissing: true,
  },
  {
    from: `${PATHS.src}/images`,
    to: `${PATHS.dist}/img`,
    noErrorOnMissing: true,
  },
  {
    from: `${PATHS.src}/favicon`,
    to: `${PATHS.dist}/favicon`,
    noErrorOnMissing: true,
  },
]

module.exports = {
  entry: `${PATHS.src}/scripts/index.js`,
  output: {
    path: PATHS.dist,
    filename: 'js/app.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({ patterns: assetsPaths }),
    ...markup,
  ],
}
