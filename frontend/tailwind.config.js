/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "btn-yellow": "#FFF5B0",
        "btn-yellow-hover": "#fce965",
        "btn-blue": "#1E2852",
      }
    },
  },
  plugins: [],
}

