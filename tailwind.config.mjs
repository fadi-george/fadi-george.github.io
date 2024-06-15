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
        bgWave: {
          "0%": { backgroundPosition: "50% 50%" },
          "16%": { backgroundPosition: "55% 55%" },
          "32%": { backgroundPosition: "55% 45%" },
          "50%": { backgroundPosition: "50% 50%" },
          "66%": { backgroundPosition: "45% 55%" },
          "82%": { backgroundPosition: "45% 45%" },
          "100%": { backgroundPosition: "50% 50%" },
        },
        wiggle: {
          "0%": { rotate: "0deg" },
          "25%": { rotate: "-30deg" },
          "50%": { rotate: "0deg" },
          "75%": { rotate: "-30deg" },
          "100%": { rotate: "0deg" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        grow: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
        shrink: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0)" },
        },
        "slide-down-in": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-down-out": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100%)" },
        },
        "slide-up-in": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
        "slide-up-out": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out",
        fadeIn: "fadeIn 1s ease-in-out",
        fadeOut: "fadeOut 1s ease-in-out forwards",
        grow: "grow 0.5s ease-in-out",
        shrink: "shrink 0.5s ease-in-out",
        "slide-down-in": "slide-down-in 0.5s ease-in-out",
        "slide-down-out": "slide-down-out 0.5s ease-in-out forwards",
        "slide-up-in": "slide-up-in 0.5s ease-in-out",
        "slide-up-out": "slide-up-out 0.5s ease-in-out forwards",
        bgWave: "bgWave 10s infinite linear",
      },
    },
  },
  plugins: [extraClasses],
};
