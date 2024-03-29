import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#673981",
        secondaryColor: "#f6f6f6",
        thirdColor: "#1E293B"
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
          '100%': { transform: 'rotate(-2deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 10s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
export default config;
