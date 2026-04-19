/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6D4AFF",
          50: "#F0ECFF",
          100: "#DDD6FF",
          200: "#BDB0FF",
          300: "#9D8AFF",
          400: "#7D63FF",
          500: "#6D4AFF",
          600: "#5535E6",
          700: "#3E23B3",
          800: "#281580",
          900: "#150A4D",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'DM Sans'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
