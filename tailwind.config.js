module.exports = {
  mode: 'jit',
  content: [
    './src/**/**/*.{js,ts,jsx,tsx,html,mdx,css}',
    './src/**/*.{js,ts,jsx,tsx,html,mdx,css}'
  ],
  darkMode: 'class',
  theme: {
    screens: { md: { max: '1050px' }, sm: { max: '550px' } },
    extend: {
      colors: {
        orange: {
          A700_bf: '#ff5c0abf',
          A700_4c: '#ff5c0a4c',
          A700: '#ff5c0a',
          A700_d8: '#ff5c0ad8'
        },
        deep_orange: { A200: '#ec6a33' },
        blue_gray: {
          600: '#60637b',
          700: '#4a4c5f',
          800: '#3d3f54',
          '800_3f': '#3d3f543f',
          '800_99': '#3d3f5499',
          '800_33': '#3d3f5433',
          '800_54': '#3d3f5454',
          '800_7f': '#3d3f547f',
          '800_e5': '#3d3f54e5'
        },
        gray2: {
          100: '#f7f0f0',
          '900_cc': '#171717cc',
          '100_99': '#f7f0f099',
          '100_90': '#f7f0f090'
        },
        red: { 400: '#b35454', A700: '#ff0000', A200: '#ff6154' },
        amber: {
          100: '#fff2b5',
          500: '#f0cd0a',
          600: '#d2b309',
          A400: '#e3c101'
        },
        black: { 900: '#000000', '900_56': '#00000056' },
        yellow: { 900: '#de7818' },
        darkslategray: {
          100: '#3d3f54',
          200: 'rgba(61, 63, 84, 0.5)',
          300: 'rgba(61, 63, 84, 0.2)'
        },
        whitesmoke: {
          100: '#f7f0f0',
          200: 'rgba(247, 240, 240, 0.6)'
        },
        white: '#ffffff',
        dimgray: '#4a4c5f',
        gray: 'rgba(0, 0, 0, 0.05)',
        slategray: '#60637b',
        orangered: '#ff5c0a',
        tomato: '#ff6154'
      },
      fontFamily: { dmsans: 'DM Sans', fraunces: 'Fraunces', inter: 'Inter' },
      backgroundImage: {
        gradient: 'radial-gradient(#ff5c0a,#f7f0f0,#f7f0f0)',
        gradient1: 'linear-gradient(26deg ,#ff5c0abf,#ff5c0a,#ff5c0ad8)',
        gradient2: 'linear-gradient(26deg ,#ec6a33,#ff5c0a,#ff5c0ad8)',
        gradient3: 'linear-gradient(41deg ,#3d3f54e5,#3d3f54)'
      },
      boxShadow: {
        bs3: '0px 2px  8px -4px #3d3f543f',
        bs1: '0px 1px  16px -6px #3d3f5454',
        bs2: '0px 2px  16px 0px #3d3f5433',
        bs: '0px 2px  16px -6px #3d3f5499',
        bs4: '0px 1.81px  14px -5.42px #3d3f5499'
      },
      borderRadius: {
        mini: '15px'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
