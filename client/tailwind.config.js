
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        naranja: "#F18A00",
        verde: "#70D44B",
        azul: "#4AC1E0",
        rojo: "#FD495C",
        morado: "#9b50c0",
        gris: "#7C858C" 
      },

      fontFamily: {
        'Foco-Corp': ['Foco-Corp', 'sans-serif'],
        'Foco-Corp-Bold': ['Foco-Corp-Bold', 'sans-serif'],
        'Foco-Corp-Light': ['Foco-Corp-Light', 'sans-serif'],
        'Foco-Corp-Black': ['Foco-Corp-Black', 'sans-serif'],
        'Foco-Corp-Italic': ['Foco-Corp-Italic', 'sans-serif'],
        'Foco-Corp-Bold-Italic': ['Foco-Corp-Bold-Italic', 'sans-serif'],
        'Foco-Corp-Light-Italic': ['Foco-Corp-Light-Italic', 'sans-serif'],
        'Foco-Corp-Black-Italic': ['Foco-Corp-Black-Italic', 'sans-serif'],
        
      }

    },
  },
  plugins: [],
}

