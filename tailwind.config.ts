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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#6621BA",
        secondary: "#29FFAF",
        purpleots: "#5B67FF",
        brightpurple:"#F0F2FF",
      },
    },
  },
  plugins: [],
};
export default config;
