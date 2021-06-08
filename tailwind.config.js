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
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
