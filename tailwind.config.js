/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "var(--color-charcoal)",
        cream: "var(--color-cream)",
        camel: "var(--color-camel)",
        forest: "var(--color-forest)",
        periwinkle: "var(--color-periwinkle)",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Jost"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
