import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Scan EVERYTHING in src
  ],
  theme: {
    extend: {
      colors: {
        crescere: {
          green: "#2A4438",
          gold: "#C6A868",
          cream: "#F5F2EA",
          brown: "#5C4936",
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        display: ['var(--font-playfair)', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
