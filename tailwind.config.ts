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
        olive: {
          50: "#F5F8F2",
          100: "#E9EFE2",
          200: "#D0DEC0",
          300: "#A6BF8E",
          400: "#7E9D60",
          500: "#5F7E42",
          600: "#496233",
          700: "#364A25",
          800: "#27361A",
          900: "#1C2713",
          950: "#11180B",
        },
        ivory: {
          50: "#FDFBF7",
          100: "#F7F3EA",
          200: "#ECE4D5",
          300: "#DFD2BE",
          400: "#CDBAA0",
        },
        champagne: {
          300: "#E2CFB4",
          400: "#D4BC9B",
          500: "#C5A880",
          600: "#A7895E",
          700: "#8A6D44",
        },
        sage: {
          50: "#F4F6F2",
          100: "#E5EBE1",
          200: "#CDD9C6",
          500: "#6F8562",
          700: "#4B5B42",
        },
        charcoal: {
          50: "#F6F7F5",
          100: "#E8EAE6",
          200: "#CFD3CB",
          300: "#A8AEA1",
          500: "#676D61",
          700: "#3A3F36",
          800: "#232720",
          900: "#141712",
          950: "#0B0D0A",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      boxShadow: {
        diffusion: "0 20px 40px -15px rgba(28, 39, 19, 0.07)",
        "diffusion-lg": "0 30px 60px -20px rgba(28, 39, 19, 0.12)",
        "inner-glow": "inset 0 1px 1px 0 rgba(255, 255, 255, 0.4)",
        "inner-soft": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.04)",
      },
      borderRadius: {
        "2rem": "2rem",
        "2.5rem": "2.5rem",
        "3rem": "3rem",
      },
    },
  },
  plugins: [],
};

export default config;
