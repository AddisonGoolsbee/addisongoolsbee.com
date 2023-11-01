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
      },
      height: {
        "9/10": "90%",
      },
      width: {
        "11/20": "55%",
      },
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(50%)" },
          "100%": { transform: "translateY(0)" },
        },
        popIn: {
          "0%": {transform: "scale(0.5)" },
          "100%": {transform: "scale(1)" },
        }
      },
      animation: {
        "slide-up": "slideUp 1s ease-out forwards",
        "pop-in": "popIn 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
