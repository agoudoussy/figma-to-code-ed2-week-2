/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        chillax: ["Chillax", "sans-serif"],
      },
    },
  },
  plugins: [],
};
