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
      },
      backgroundImage:{
        'pie': "url('/src/assets/9496304.png')",
        'adminBG': "url('https://i.pinimg.com/564x/9f/ea/32/9fea324bfb299f4937f839ff1bb68cb4.jpg')",
      }
    },
  },
  plugins: [require('daisyui'),],
  daisyui: {
    themes: ['light', 'dim']
  },
  darkMode: ['class', '[data-theme="dim"]']
}

