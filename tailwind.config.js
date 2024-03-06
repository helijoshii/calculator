/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    container: {
    },
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
      },
    },
  },
  plugins: [],
};
