<<<<<<< HEAD
const { Container } = require("postcss");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      Container: {
        center: true,
        padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",

        },
      },
  },
},
  plugins: [],
=======
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate")], // remove this if not installed
>>>>>>> c05d59a596023de88749dcedfd0c5f094aec2be9
};
