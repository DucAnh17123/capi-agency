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
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '1rem',
          md: '1.5rem',
          lg: '1rem',
          xl: '0rem',
          '2xl': '0rem',
        },
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "100%": {
            transform: "translate(-150%, 0)",
          },
        },
        scaleGrow: {
          "0%": { transform: "translateX(-100%)", paddingLeft: "0" },
          "100%": { transform: "translateX(0%)", paddingLeft: "10px" },
        },
        paddingLeft: {
          "0%": { paddingLeft: "0" },
          "100%": { paddingLeft: "10px" },
        },
      },
      animation: {
        fadeIn: "fadeIn 2s ease-in-out forwards",
        marquee: "marquee 60s linear infinite",
        scaleGrow: "scaleGrow 0.9s ease-in-out",
        paddingLeft: "paddingLeft 0.9s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
