module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'primary': ['"IM Fell DW Pica"', 'Times', '"Times Roman"', '"Times New Roman"', 'serif']
      },
      backgroundImage: {
        "hero-mb": "url('/images/NewWorld_MaskedHelm_HiRes_NoEmbers.jpg')",
        "hero": "url('/images/NW_The Ancients_5760x2160.jpg')",
        "page-not-found": "url('/images/RepurposedShipwreck.jpeg')",
        "section-one": "url('/images/NW_Town Life_8000x4500.jpg')",
        "companies-section": "url('/images/Bosses Day Solo Take 2 18.jpg')"
      },
      backgroundColor: {
        "primary": "#272624",
        "secondary": "#232220"
      },
      textColor: {
        "primary": "#272624",
        "secondary": "#232220"
      },
      height: {
        "hero-mb": "700px",
        "hero": "600px",
        "primary": "600px",
        "secondary": "500px",
        "medium": "300px"
      },
      borderColor: {
        "primary": "#272624",
        "secondary": "#232220"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
