module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-media-minmax'),
    require('tailwindcss'),
    require('autoprefixer'),
    require('cssnano')({ preset: 'default' }),
  ],
}
