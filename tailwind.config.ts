import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        space: {
          "50": "#AFCDEF",
          "100": "#90AED6",
          "200": "#7490BE",
          "300": "#5C74A5",
          "400": "#44588C",
          "500": "#2F3F74",
          "600": "#1E295B",
          "700": "#0F1642",
          "800": "#070A32",
          "900": "#000028",
          "950": "#000012",
        },
      },
    },
  },
  plugins: [],
};
export default config;
