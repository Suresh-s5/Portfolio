/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,js}"]
,
  darkMode:"class",
  theme: {
    extend: {

      fontFamily: {
        gowun: ['"Gowun Batang"', 'serif'], 
        robotoMono: ['"Roboto Mono"', 'monospace'],
      },

    },
  },
  plugins: [],
}

