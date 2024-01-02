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
      sm: '670px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
      // => @media (min-width: 640px) { ... }

    },
  },
  plugins: [],
}