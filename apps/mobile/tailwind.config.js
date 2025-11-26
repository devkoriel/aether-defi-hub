/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        primary: "#8b5cf6",
        secondary: "#06b6d4",
      }
    },
  },
  plugins: [],
}
