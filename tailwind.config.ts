import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mayin: {
          purple: "#4A2D6F",
          gold: "#D9A441",
          night: "#0F172A",
          mist: "#F8F5FF",
        },
      },
      fontFamily: {
        display: ["var(--font-poppins)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 20px 60px -20px rgba(74, 45, 111, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
