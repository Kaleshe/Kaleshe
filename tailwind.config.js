/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', ...defaultTheme.fontFamily.sans],
      },

      colors: {
        "warm-gray": {
          DEFAULT: "#F7F4F0",
          10: "#DEDCD7",
          60: "#636260",
          70: "#4A4948",
        },
      },
    },
  },
  plugins: [],
};
