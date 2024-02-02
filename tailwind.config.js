/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'Inter' : ['Inter',  'sans-serif']
      },
      boxShadow:{
        'box-shadow': ['0px 11px 44px -10px rgba(0, 0, 0, 0.25)']
      }
    },
  },
  plugins: [],
}