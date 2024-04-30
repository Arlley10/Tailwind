/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'seminare': "url('/images/seminare_800x800.jpg')",
        'fachhandler': "url('/images/fachhaendler_800x800.jpg')",
      }
    },
  },
  plugins: [],
}