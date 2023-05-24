/** @type {import('tailwindcss').Config} **/

module.exports = {
  content: [
    "./src/**/*.{tsx, jsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'landingIntroBG': "url('/src/assets/Images/01_LandingPageImages/Intro/LandingIntroBG.jpg')",
        'contactBG': "url('/src/assets/Images/03_ContactPageImages/Contact_BG.png')"
      }
    },
  },
  plugins: [],
}
