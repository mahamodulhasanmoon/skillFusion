/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#39ac31",
        shade: "#E7F1FF",
        shade_deep: "#C4DDFF",
        text: "#0B2445",
        bgSecondary:"#DEFFC4",
        redtype:"#EF1617"
    },
    },
  },
  plugins: [],
}
