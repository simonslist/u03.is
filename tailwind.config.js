/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./theme.config.tsx",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          1000: "#ff0000",
        },
      },
    },
  },
  plugins: [require("daisyui")],
  darkMode: "class",
  daisyui: {
    themes: [],
  },
};
