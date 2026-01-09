/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0f766e",
        secondary: "#0f172a",
        light: "#ecfeff"
      }
    }
  },
  plugins: []
};


