module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['src/**/*.html', 'src/**/*.pug', 'src/**/*.js'],
    safelist: [],
  },
  theme: {
    screens: {
      xs: '375px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px',
    },
    fontFamily: {
      primary: ['Montserrat', 'sans-serif'],
    },
    colors: {
      'base-0': '#000',
      'base-10': '#2e3538',
      'base-20': '#fbfbfb', // base-15
      'base-30': '#fff', // base-20
      'primary-0': '#e74c3c',
      'primary-10': '#c0392b',
      success: '#27ae60',
    },
    extend: {},
  },
  corePlugins: {
    container: false,
  },
}
