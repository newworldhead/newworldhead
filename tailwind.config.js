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
        "hero": "url('/images/backgroundImages/NW_The Ancients_5760x2160.jpg')",
        "page-not-found": "url('/images/backgroundImages/RepurposedShipwreck.jpeg')",
        "section-one": "url('/images/backgroundImages/NW_Town Life_8000x4500.jpg')",
        "companies-section": "url('/images/backgroundImages/Bosses Day Solo Take 2 18.jpg')",
        "news-section": "url('/images/backgroundImages/NW_Ship Fort_1920x1080.jpg')",
        "category-section": "url('/images/backgroundImages/Reekwater 1.jpg')",
        "category-search": "url('/images/backgroundImages/NW_Ancient Ruins_1920x974.jpg')",
        "login-section": "url('/images/backgroundImages/keyartmask-3840.jpg')",
        "register-section": "url('/images/backgroundImages/NW_Forest Archer_8000x3840.jpg')",
        "profile-section": "url('/images/backgroundImages/Shipping Dock.jpeg')",
        "home-second-section": "url('/images/backgroundImages/new_world_new_screen_02.jpg')",
        "home-third-section": "url('/images/backgroundImages/WOR_0120_v005_FINAL2.jpg')",
        "under-construction-section": "url('/images/backgroundImages/Cursed_TypeC_01.jpg')",
        "under-construction-builds-section": "url('/images/backgroundImages/Combat_PVP_4.jpg')"

      },
      backgroundColor: {
        "primary": "#272624",
        "secondary": "#232220"
      },
      textColor: {
        "primary": "#272624",
        "secondary": "#232220",
        "undecided": "#b44141",
        "syndicate": "#644464",
        "marauders": "#8eb441",
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
    extend: {
      borderColor: ['last']
    },
  },
  plugins: [],
}
