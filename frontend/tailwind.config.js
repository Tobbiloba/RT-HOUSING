/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'tablet': '999px',
      // => @media (min-width: 640px) { ... }

    },
  },
  plugins: [],
}