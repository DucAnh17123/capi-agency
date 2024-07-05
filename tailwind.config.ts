import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // container: {
      //   padding: {
      //     DEFAULT: '1rem',
      //     sm: '2rem',
      //     lg: '4rem',
      //     xl: '5rem',
      //     '2xl': '6rem',
      //   },
      // },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "100%": {
            transform: "translate(-100%, 0)"
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in-out forwards",
        marquee: "marquee 60s linear infinite"
      },
    },
  },
  plugins: [],
};
export default config;
