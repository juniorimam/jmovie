/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: {
          min: "320px",
          max: "475px",
        },
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
