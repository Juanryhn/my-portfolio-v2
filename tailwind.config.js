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
      // DEEP NORD Color Palette - SaaS Premium Dark Mode
      colors: {
        // Primary - Deep Slate/Navy
        "nord-dark": "#0f1419", // Deepest background
        "nord-darker": "#1a1f2e", // Secondary background
        "nord-surface": "#232d3f", // Card/Surface
        "nord-border": "#2d3a52", // Border/Divider

        // Secondary - cool slate tones
        "nord-slate": "#8896a7", // Muted text
        "nord-slate-light": "#a8b8c8", // Secondary text

        // Accent - Sky Blue (premium accent)
        "nord-sky": "#60d4ff", // Primary accent - vibrant sky blue
        "nord-sky-dark": "#3ba8d4", // Darker sky blue
        "nord-sky-light": "#88e8ff", // Light sky blue

        // Tertiary - Navy Blue (secondary accent)
        "nord-navy": "#5b6fa1", // Navy accent
        "nord-navy-light": "#7a8bc8", // Light navy

        // Success/Positive
        "nord-success": "#90ee90", // Soft green

        // Warning/Alert
        "nord-warning": "#ffa500", // Orange

        // Error/Danger
        "nord-error": "#ff6b6b", // Soft red

        // Semantic colors
        border: "#2d3a52",
        input: "#232d3f",
        ring: "#60d4ff",
        background: "#0f1419",
        foreground: "#e8ecf1",
        primary: {
          DEFAULT: "#60d4ff",
          foreground: "#0f1419",
        },
        secondary: {
          DEFAULT: "#5b6fa1",
          foreground: "#e8ecf1",
        },
        destructive: {
          DEFAULT: "#ff6b6b",
          foreground: "#e8ecf1",
        },
        muted: {
          DEFAULT: "#2d3a52",
          foreground: "#8896a7",
        },
        accent: {
          DEFAULT: "#60d4ff",
          foreground: "#0f1419",
        },
        popover: {
          DEFAULT: "#232d3f",
          foreground: "#e8ecf1",
        },
        card: {
          DEFAULT: "#1a1f2e",
          foreground: "#e8ecf1",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        // Glassmorphism gradients
        "glass-dark": "linear-gradient(135deg, rgba(35, 45, 63, 0.8), rgba(26, 31, 46, 0.6))",
        "glass-light": "linear-gradient(135deg, rgba(35, 45, 63, 0.95), rgba(26, 31, 46, 0.85))",
        // Deep Nord gradients
        "nord-gradient-primary": "linear-gradient(135deg, #5b6fa1 0%, #60d4ff 100%)",
        "nord-gradient-subtle": "linear-gradient(135deg, #232d3f 0%, #1a1f2e 100%)",
        "nord-gradient-glow": "radial-gradient(circle at 50% 50%, rgba(96, 212, 255, 0.2) 0%, rgba(91, 111, 161, 0.1) 100%)",
      },
      boxShadow: {
        // Glow effects
        "glow-sky": "0 0 20px rgba(96, 212, 255, 0.3), 0 0 40px rgba(96, 212, 255, 0.15)",
        "glow-sky-lg": "0 0 30px rgba(96, 212, 255, 0.4), 0 0 60px rgba(96, 212, 255, 0.2)",
        "glow-navy": "0 0 20px rgba(91, 111, 161, 0.3), 0 0 40px rgba(91, 111, 161, 0.15)",
        "glow-border": "inset 0 0 20px rgba(96, 212, 255, 0.1), 0 0 20px rgba(96, 212, 255, 0.15)",
        "glow-border-hover": "inset 0 0 20px rgba(96, 212, 255, 0.2), 0 0 30px rgba(96, 212, 255, 0.25)",

        // Elevated shadows
        "elevation-1": "0 2px 8px rgba(0, 0, 0, 0.3)",
        "elevation-2": "0 4px 16px rgba(0, 0, 0, 0.4)",
        "elevation-3": "0 8px 32px rgba(0, 0, 0, 0.5)",
      },
      backdropBlur: {
        glass: "10px",
      },
      borderRadius: {
        "glass": "12px",
        "lg-glass": "16px",
      },
      animation: {
        "border-glow": "border-glow 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
      },
      keyframes: {
        "border-glow": {
          "0%, 100%": {
            boxShadow: "inset 0 0 20px rgba(96, 212, 255, 0.1), 0 0 20px rgba(96, 212, 255, 0.15)",
          },
          "50%": {
            boxShadow: "inset 0 0 30px rgba(96, 212, 255, 0.2), 0 0 30px rgba(96, 212, 255, 0.25)",
          },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.6" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

