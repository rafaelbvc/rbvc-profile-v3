/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xxxs: ["0.46rem", "0.34rem"],
        xxs: ["0.55rem", "0.39rem"],
        xms: ["0.7rem", "1.2rem"],
        sms: ["0.9rem", "1.6rem"],
      },
      borderWidth: {
        border1: "1px",
      },
      screens: {
        "3xl": { min: "1800px" },
      },
    },
    colors: {
      lightGray: "#FCFCFF",
      mediumGray: "#b6b6b6",
      black: "#000",
      blackAlpha: "rgb(0,0,0, 0.5)",
      blackMoreAlpha: "rgb(0,0,0, 0.1)",
      white: "#FFFFFF",
      lightGrayAlpha: "RGB(252,252,255, 0.4)",
      lightGrayMoreAlpha: "RGB(252,252,255, 0.25)",
      lightBGray: "#D9E2E5",
      golden: "#CAAA6C",
      goldenAlpha: "rgb(202,170,108, 0.4)",
      green: "#00FF00",
      red: "#FF0000",
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
