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
        offwhite: "var(--color-offwhite)",
        warmwhite: "var(--color-warmwhite)",
        textmuted: "var(--color-textmuted)",
        greenlight: "var(--color-greenlight)",
        camellight: "var(--color-camellight)",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Jost"', "system-ui", "sans-serif"],
        script: ['"Dancing Script"', "cursive"],
        redondo: ['"Redondo"', "Georgia", "serif"],
        "redondo-bold": ['"Redondo Bold"', "Georgia", "serif"],
      },
      animation: {
        "marquee-mobile": "marqueeScroll 12s linear infinite",
        "marquee-tablet": "marqueeScroll 20s linear infinite",
        "marquee-desktop": "marqueeScroll 30s linear infinite",
      },
      keyframes: {
        marqueeScroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
