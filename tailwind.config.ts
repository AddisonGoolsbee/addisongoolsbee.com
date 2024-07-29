import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}"],
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
        '22p': '22%',
      },
      height: {
        "9/10": "90%",
      },
      width: {
        "11/20": "55%",
      },
      scale: {
        '200': '2', // This sets the scale to 200%
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(50%)" },
          "100%": { transform: "translateY(0)" },
        },
        popIn: {
          "0%": {transform: "scale(0.5)" },
          "100%": {transform: "scale(1)" },
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
          "0%": { opacity: '0' },
          "100%": { opacit: '100' },
        },
        navBar: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        }
      },
      animation: {
        "slide-up": "slideUp 1s ease-out forwards",
        "pop-in": "popIn 1s ease-out forwards",
        "logo": "logo 1s ease-out both",
        "changelog": "changelog 0.5s ease-out both",
        "changelog-close": "changelog 0.5s ease-in reverse both",
        "fade-in": "fadeIn 0.5s ease-out both",
        "fade-out": "fadeIn 0.5s reverse both",
        "navBar": "navBar 1s ease-in-out 1.5s backwards"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};

export default config;
