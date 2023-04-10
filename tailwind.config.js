/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        libre: ['"Libre Baskerville"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}