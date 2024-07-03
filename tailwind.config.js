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
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    colors: {
      porcelian: "#EDF1F6",
      moon: "#F7F2EB",
      white: {
        100: "#FFFFFF",
        200: "#EEf0FF",
      },
      grey: "#ACACAC",
      sky: "#BAD6EB",
      royal: "#334EAC",
      china: "#7096D1",
      blue: "#081F5C",
      green: {
        100: "000",
        200: "#D3F4F0",
      },
      transparent: "transparent",
    },
    borderRadius: {
      xl: `calc(var(--radius) + 4px)`,
      lg: `var(--radius)`,
      md: `calc(var(--radius) - 2px)`,
      sm: `calc(var(--radius) - 4px)`,
      full: "9999px",
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
