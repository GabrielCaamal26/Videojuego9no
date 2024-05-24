/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      title: ['Barlow Condensed', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

