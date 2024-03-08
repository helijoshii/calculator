/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./src/*.{html,js}"],
  theme: {
    container: {},
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },
      colors: {
        white: "#fff",
        gray: {
          100: "#fffdf9",
          200: "rgba(255, 255, 255, 0.7)",
          300: "rgba(255, 253, 249, 0.7)",
          400: "rgba(255, 253, 249, 0.3)",
          500: "rgba(255, 253, 249, 0.6)",
          600: "rgba(255, 255, 255, 0.3)",
        },
        light: {
          DEFAULT: "#ffffff", // Light mode background color
          text: "#000000", // Light mode text color
          color: "#ffffff",
        },
        dark: {
          DEFAULT: "#1f2937", // Dark mode background color
          text: "#ffffff", // Dark mode text color
        },
      },
    },
  },
  plugins: [],
};
