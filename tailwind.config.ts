import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      spacing: {
        "2p": "2%",
        "5p": "5%",
        "7p": "7%",
        "10p": "10%",
        "8vp": "8vh",
        "7vp": "7vh",
        "22p": "22%",
      },
      height: {
        "9/10": "90%",
      },
      width: {
        "11/20": "55%",
      },
      scale: {
        "200": "2",
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(50%)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        popIn: {
          "0%": { transform: "scale(0.5)" },
          "100%": { transform: "scale(1)" },
        },
        logo: {
          "0%": { transform: "translateY(-150%)" },
          "100%": { transform: "translateX(0)" },
        },
        changelog: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        navBar: {
          "0%": { transform: "translateY(-150%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideDownOut: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(100vh)", opacity: "0" },
        },
        popBlurb: {
          "0%": { backgroundColor: "rgba(255, 255, 255, 0.4)" },
          "100%": { backgroundColor: "transparent" },
        }
      },
      animation: {
        "slide-up": "slideUp 1s ease-out forwards",
        "slide-down": "slideDown 0.5s ease-out forwards",
        "pop-in": "popIn 1s ease-out forwards",
        logo: "logo 1s ease-out both",
        changelog: "changelog 0.5s ease-out both",
        "changelog-close": "changelog 0.5s ease-in reverse both",
        "fade-in": "fadeIn 0.5s ease-out both",
        "fade-out": "fadeIn 0.5s reverse both",
        "slide-down-out": "slideDownOut 0.8s ease-in-out forwards",
        navBar: "navBar 0.9s ease-out backwards",
        "pop-blurb": "popBlurb 1s ease-out forwards",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

export default config;
