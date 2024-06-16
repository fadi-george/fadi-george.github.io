import plugin from "tailwindcss/plugin";

const stripVar = (value) => (value.includes("var") ? value.substring(4, value.length - 1) : value);

const extraClasses = plugin(({ matchUtilities }) => {
  matchUtilities({
    adur: (value) => ({
      "animation-duration": value,
    }),
    ancname: (value) => ({
      "anchor-name": stripVar(value),
    }),
    aps: (value) => ({
      "animation-play-state": value,
    }),
    arange: (value) => ({
      "animation-range": value,
    }),
    atime: (value) => ({
      "animation-timeline": stripVar(value),
    }),
    bgi: (value) => ({
      "background-image": value,
    }),
    color: (value) => {
      console.log({ value });
      return {
        color: value,
      };
    },
    garea: (value) => ({
      "grid-area": `${value}`,
    }),
    posanc: (value) => ({
      "position-anchor": stripVar(value),
    }),
    stime: (value) => ({
      "scroll-timeline-name": stripVar(value),
    }),
    vtn: (value) => ({
      "view-transition-name": `${value}`,
    }),
  });
});

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      keyframes: {
        wiggle: {
          "0%": { rotate: "0deg" },
          "25%": { rotate: "-30deg" },
          "50%": { rotate: "0deg" },
          "75%": { rotate: "-30deg" },
          "100%": { rotate: "0deg" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-out": {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
        grow: {
          from: { transform: "scale(0)" },
          to: { transform: "scale(1)" },
        },
        shrink: {
          from: { transform: "scale(1)" },
          to: { transform: "scale(0)" },
        },
        "slide-down-in": {
          from: { transform: "translateY(-100%)" },
          to: { transform: "translateY(0)" },
        },
        "slide-down-out": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(100%)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out",
        "fade-in": "fade-in 1s ease-in-out",
        "fade-out": "fade-out 1s ease-in-out forwards",
        grow: "grow 0.5s ease-in-out",
        shrink: "shrink 0.5s ease-in-out",
        "slide-down-in": "slide-down-in 0.5s ease-in-out",
        "slide-down-out": "slide-down-out 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [extraClasses],
};
