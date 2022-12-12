const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    extend: {
      colors: {
        'primaryColor': '#F9D564',
        'secondaryColor': {
          DEFAULT: '#e0e0e0',
          text: '#e0e0e0',
          textDark: '#959595',
          light: '#282c34',
          dark: '#1c2025'
        }
      },
      fontFamily: {
        roboto: ['var(--roboto-font)', ...fontFamily.sans]
      }
    }
  }
}
