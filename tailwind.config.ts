import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink:       "#1C1814",
        parchment: "#F5F0E8",
        saffron:   "#C97820",
        navy:      "#0A2540",
        stone:     "#8C8277",
        dust:      "#D8D1C4",
        linen:     "#EDE8DF",
      },
      fontFamily: {
        syne:     ["Syne", "sans-serif"],
        caveat:   ["Caveat", "cursive"],
        epilogue: ["Epilogue", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
