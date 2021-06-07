module.exports = {
  // purge: ['./src/**/*.html', './src/**/*.js'],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#00923F',
        primaryDark: '#035326',
        secondary: '#131B20',
      },
      transitionProperty: {
        height: 'height',
      },
      backgroundImage: {
        hakkimizdaImage:
          "linear-gradient(to right top, rgba(167, 243, 208, 0.9), rgba(0, 146, 63, 0.9)), url('/images/prismap.jpg')",
      },
      screens: {
        custombp: { raw: '(max-width:360px)' },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
