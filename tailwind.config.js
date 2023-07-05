/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#91A126',
        'secondary': '#BFDE42',
        'tertiary': '#F2F2F2',
        'quaternary': '#F2F2F2'
      }
    },
  },
  plugins: [],
}