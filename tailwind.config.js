/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#FF204E',
        secondary: '#A0153E',
        tertiary: '#5D0E41',
        dark: '#00224D'
      },
      keyframes: {
        zoom: {
          '0%, 100%': { transform: 'scale(1.2)' },
          '50%, 80%': { transform: 'scale(1)' },
        }
      },
    },
  },
  plugins: [],
}

