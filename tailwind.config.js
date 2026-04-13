/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // High-Performance Dashboard: Slate & Amber
        slate: {
          950: "#09090b",  // Dark zinc background
          900: "#18181b",  // Secondary background
          800: "#27272a",  // Card backgrounds
          700: "#3f3f46",  // Borders
          600: "#52525b",  // Muted text
        },
        amber: {
          400: "#fbbf24",  // Bright highlights (CTAs)
          500: "#f59e0b",  // Primary accent
          600: "#d97706",  // Hover state
          950: "#78350f",  // Dark amber (accent supports)
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "#f59e0b",  // Amber 500
          foreground: "#09090b",  // Slate 950 text on amber
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "#18181b",  // Zinc 900
          foreground: "#fafafa",  // Off-white text
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

