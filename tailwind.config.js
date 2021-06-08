module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'im-fell-dw-pica': ['"IM Fell DW Pica"', 'Times', '"Times Roman"', '"Times New Roman"', 'serif']
      },
      backgroundImage: theme => ({
        'page-not-found': "url('/images/RepurposedShipwreck.jpeg')"
      }),
      backgroundColor: theme => ({
        'primary': "#272624",
        'secondary': '#232220'
      }),
      textColor: {
        'primary': "#272624",
        'secondary': '#232220'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
