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
        primary: '#03DAC6',
        secondary: '#1F1F1F',
        tertiary: '#BB86FC',
        light: '#F5F5F5',
        dark: '#121212',
      }
    },
  },
  plugins: [],
}