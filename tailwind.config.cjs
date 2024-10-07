/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'Spectral': ['Spectral', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
