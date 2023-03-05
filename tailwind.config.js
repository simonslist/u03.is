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
    themes: [
      {
        mytheme: {
          primary: "#ff0000",

          secondary: "#9fb5e0",

          accent: "#6e63bf",

          neutral: "#18161D",

          "base-100": "#fff",

          info: "#6FB4EC",

          success: "#158A76",

          warning: "#975B0C",

          error: "#F06678",
        },
      },
    ],
  },
};
