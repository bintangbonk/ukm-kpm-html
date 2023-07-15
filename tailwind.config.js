/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    container:{
      center: true,
      padding: "16px",
    },
    extend: {
      color:{
        "batik": "#ea580c",
        "almet": "#1d4ed8"
      },
      screens:{
        "2xl" : "1320px"
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require("tw-elements/dist/plugin.cjs")
  ],
}