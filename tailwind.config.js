/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    keyframes: {
      expand: {
        "0%": {
          transform: "scale(100%)",
        },
        "100%": {
          transform: "scale(500%)",
        },
      },
      shrink: {
        "0%": {
          transform: "scale(500%)",
        },
        "100%": {
          transform: "scale(100%)",
        },
      },
    },
    animation: {
      expand: "expand 2s forwards",
      shrink: "shrink 2s forwards",
    },
  },
  plugins: [],
};
