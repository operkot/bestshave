module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['src/**/*.html', 'src/**/*.pug', 'src/**/*.js'],
    safelist: [
      'mb-6',
      'mb-8',
      'pt-6',
      'pb-20',
      'px-8',
      'text-center',
      'text-sm',
      'md:w-auto',
    ],
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
      'base-20': '#aeaeae',
      'base-30': '#fbfbfb', // base-15
      'base-40': '#fff', // base-20
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
