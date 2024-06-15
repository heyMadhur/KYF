/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#9c84b9",
        secondary: {
          DEFAULT: "#FF9C01",
          100: "#FF9001",
          200: "#FF8E01",
        },
        purple: {
          DEFAULT: "#8e5cbf",
          100: "#ac91c6",
        },
        black: {
          DEFAULT: "#000",
          100: "#1E1E2D",
          200: "#232533",
        },
        white: {
          DEFAULT: "#FFFFFF",
          100: "#d9d9d9",
        },
        gray: {
          100: "#CDCDE0",
        },
        red: "#850909",
        orange: "#e16c35",
        yellow: "#e6b52d",

      },
      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
        flight: ["Fredoka-Light", "sans-serif"],
        fregular: ["Fredoka-Regular", "sans-serif"],
        fmedium: ["Fredoka-Medium", "sans-serif"],
        fsemibold: ["Fredoka-SemiBold", "sans-serif"],
        fbold: ["Fredoka-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
}

