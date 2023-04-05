/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./Pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#4592fe",
      primaryError: "#f7754d",
      primarySuccess: "#88f988",
    },
    extend: {},
  },
  plugins: [],
};
