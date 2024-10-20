/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'grotesk': ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        primary: '#FF6363',
        secondary: '#03DAC6',
        tertiary: '#1F1F1F',

      }
    },
  },
  plugins: [],
}