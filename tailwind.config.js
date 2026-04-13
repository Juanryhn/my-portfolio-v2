/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Soft Minimalist Palette
        parchment: {
          50: "#faf9f7",
          100: "#f5f3f0",
          150: "#f0ede9",
          200: "#ebe8e3",
          300: "#d9d4cc",
          400: "#c7bfb5",
        },
        navy: {
          800: "#1a1f2e",
          700: "#2d3548",
          600: "#3d4560",
        },
        emerald: {
          500: "#4a9d6f",
          600: "#3d8b5c",
          700: "#2d6a47",
          400: "#5fb383",
        },
        // Keep existing design system
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      spacing: {
        "gutter-xs": "0.75rem",
        "gutter-sm": "1.25rem",
        "gutter-md": "2rem",
        "gutter-lg": "3rem",
        "gutter-xl": "4.5rem",
        "gutter-2xl": "6rem",
      },
      fontSize: {
        "display-lg": ["4rem", { lineHeight: "1.1", fontWeight: "300" }],
        "display-md": ["3rem", { lineHeight: "1.1", fontWeight: "300" }],
        "display-sm": ["2rem", { lineHeight: "1.2", fontWeight: "400" }],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        "body-md": ["1rem", { lineHeight: "1.6" }],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

