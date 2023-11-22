/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Mooli", "ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Bebas Neue", "Oswald"],
      body: ['"Open Sans"'],
    },
    colors: {
      "dark-blue": "#171b26",
      "regal-blue": "#1c3659",
      purple: "#3f3cbb",
      viol: "#726EFF",
      vrac: "#5AFFE7",
      baige: "#08C6AB",
      transparent: "transparent",
      current: "currentColor",
      white: "#cfcfaf",
      black: { 100: "232323", 200: "#37465B", 300: "#212B38" },
      midnight: "#121063",
      metal: "#565584",
      tahiti: {
        100: "#cffafe",
        200: "#a5f3fc",
        300: "#67e8f9",
        400: "#22d3ee",
        500: "#06b6d4",
        600: "#0891b2",
        700: "#0e7490",
        800: "#155e75",
        900: "#164e63",
      },
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
    },
    keyframes: {
      fade: {
        "0%": { transform: "translateX(-7.125rem)", opacity: "0" },
        "100%": { transform: "translateX(0)" },
      },
    },
    animation: {
      fade: "fade 1.3s ease-in-out",
      fade1: "fade 1.5s ease-in-out",
      fade2: "fade 1.7s ease-in-out",
    },
    boxShadow: {
      "3xl": " -5px -6px -1px rgba(0, 0, 0, 1)",
    },
  },
  plugins: [],
};
