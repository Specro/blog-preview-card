/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Figtree', 'sans-serif']
      },
      colors: {
        yellow: '#f4d04e',
        'gray-950': '#111111',
        'gray-500': '#6b6b6b'
      },
      borderRadius: {
        'xl': '10px',
        '2xl': '20px'
      },
      boxShadow: {
        card: '8px 8px 0 0 rgba(0, 0, 0, 1)'
      }
    },
  },
  plugins: [],
}

