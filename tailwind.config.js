/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        "pop": ["Poppins", "sans-serif"],
        "roboto": ["Roboto", "sans-serif"],
        "playfair": ["Playfair Display", "serif"]
      }
    },
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: ['light', 'dim']
  },
  darkMode: ['class', '[data-theme="dim"]']
}

