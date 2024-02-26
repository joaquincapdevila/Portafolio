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
      black: {
        50: "565656",
        100: "232323",
        200: "#37465B",
        300: "#1a1a1a",
        600: "#020202",
      },
      white: "#e4e4e4",
      gris: "#6e7073",

      "regal-blue": "#1c3659",
      "dark-blue": "#171b26",
      purple: "#3f3cbb",
      viol: "#726EFF",
      vrac: "#5AFFE7",
      baige: "#08C6AB",
      transparent: "transparent",
      current: "currentColor",
      midnight: "#121063",
      metal: "#565584",
      slate: {
        100: "#f1f5f9",
        200: "#e2e8f0",
        300: "#cbd5e1",
        400: "#94a3b8",
        500: "#64748b",
        600: "#475569",
        700: "#334155",
        800: "#1e293b",
        900: "#0f172a",
      },
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
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
      fadeToRight: {
        "0%": { transform: "translateX(7.125rem)", opacity: "0" },
        "100%": { transform: "translateX(0)" },
      },
    },
    animation: {
      fade: "fade 0.3s ease-in-out",
      fade1: "fade 2s ease-in-out",
      fade2: "fade 3s ease-in-out",
      fadeToRight: "fadeToRight 1.3s ease-in-out",
    },
    boxShadow: {
      "3xl": " -5px -6px -1px rgba(0, 0, 0, 1)",
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-none::-webkit-scrollbar": {
          display: "none",
        },
        ".scrollbar-none": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
