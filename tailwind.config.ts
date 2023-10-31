import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        '2p': '2%',
        '5p': '5%',
        '7p': '7%',
        '10p': '10%',
      },
      height: {
        '9/10': '90%',
      }
    },
  },
  plugins: [],
};

export default config;
