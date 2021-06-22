module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'primary': ['"IM Fell DW Pica"', 'Times', '"Times Roman"', '"Times New Roman"', 'serif'],
        'secondary': ['"Poppins"', 'sans-serif']

      },
      backgroundImage: {
        "hero-mb": "url('/images/NewWorld_MaskedHelm_HiRes_NoEmbers.jpg')",
        "hero": "url('/images/NW_The Ancients_5760x2160.jpg')",
        "page-not-found": "url('/images/RepurposedShipwreck.jpeg')",
        "section-one": "url('/images/NW_Town Life_8000x4500.jpg')",
        "companies-section": "url('/images/Bosses Day Solo Take 2 18.jpg')",
        "news-section": "url('/images/NW_Ship Fort_1920x1080.jpg')",
        "category-section": "url('/images/Reekwater 1.jpg')",
        "category-search": "url('/images/NW_Ancient Ruins_1920x974.jpg')",
        "login-section": "url('/images/keyartmask-3840.jpg')",
        "register-section": "url('/images/baaaa.jpg')"

      },
      backgroundColor: {
        "primary": "#272624",
        "secondary": "#232220"
      },
      textColor: {
        "primary": "#272624",
        "secondary": "#232220",
        "syndicate": "#644464",
        "mauraders": "#444c34",
        "covenant": "#977234"

      },
      height: {
        "hero-mb": "700px",
        "hero": "600px",
        "primary": "600px",
        "secondary": "500px",
        "medium": "300px",
        "small": "200px"
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
