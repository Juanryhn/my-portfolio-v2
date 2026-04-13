// lib/colors.ts
// Slate & Amber Color System Reference

export const ColorSystem = {
  // Primary Dark Backgrounds
  slate: {
    950: "#09090b",  // Deepest, main background
    900: "#18181b",  // Card backgrounds, secondary surfaces
    800: "#27272a",  // Tertiary backgrounds, subtle
    700: "#3f3f46",  // Borders, dividers
    600: "#52525b",  // Muted text, disabled states
    500: "#71717a",  // Medium-muted text
  },

  // Warm Amber Accents
  amber: {
    400: "#fbbf24",  // Bright CTAs, highlights (PRIMARY)
    500: "#f59e0b",  // Standard accent (SECONDARY)
    600: "#d97706",  // Hover states, interactive
    950: "#78350f",  // Dark amber, backgrounds
  },

  // Semantic Colors
  semantic: {
    success: "#10b981",   // Emerald for success states
    error: "#ef4444",     // Red for errors
    warning: "#f97316",   // Orange for warnings
    info: "#3b82f6",      // Blue for info
  },

  // Text Colors
  text: {
    white: "#ffffff",     // Primary text
    muted: "#a1a1aa",     // Secondary text (not slate-600)
  },
} as const

// Tailwind Config Integration
export const tailwindConfig = {
  colors: {
    slate: {
      950: "#09090b",
      900: "#18181b",
      800: "#27272a",
      700: "#3f3f46",
      600: "#52525b",
    },
    amber: {
      400: "#fbbf24",
      500: "#f59e0b",
      600: "#d97706",
      950: "#78350f",
    },
  },
}

// CSS Variables (for use in globals.css)
export const cssVariables = `
:root {
  --color-slate-950: #09090b;
  --color-slate-900: #18181b;
  --color-slate-800: #27272a;
  --color-slate-700: #3f3f46;
  --color-slate-600: #52525b;
  
  --color-amber-400: #fbbf24;
  --color-amber-500: #f59e0b;
  --color-amber-600: #d97706;
  --color-amber-950: #78350f;
}
`

// Glow Effects Map
export const glowEffects = {
  amberSoft: "0 0 12px rgba(251, 191, 36, 0.6)",
  amberMedium: "0 0 20px rgba(251, 191, 36, 0.8)",
  amberStrong: "0 0 30px rgba(251, 191, 36, 1)",
  amberBG: "radial-gradient(500px at 50% 50%, rgba(251,191,36,0.15) 0%, transparent 80%)",
}

// Usage Examples
export const usageExamples = {
  // Hero Title
  heroTitle: "text-6xl font-bold bg-gradient-to-r from-white via-amber-400 to-amber-300 bg-clip-text text-transparent",

  // Primary CTA Button
  primaryButton: "px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-semibold rounded-lg hover:shadow-lg",

  // Secondary Button
  secondaryButton: "px-8 py-4 border border-amber-500/50 text-amber-400 font-semibold rounded-lg hover:bg-amber-500/10",

  // Card Hover
  cardHover: "border border-slate-700 hover:border-amber-500/50 transition-colors",

  // Metric Highlight
  metricHighlight: "border border-amber-500/50 bg-amber-500/10 hover:bg-amber-500/15",

  // Progress Bar (Filled)
  progressBarFilled: "bg-gradient-to-r from-amber-400 to-amber-500 shadow-[0_0_12px_rgba(251,191,36,0.6)] hover:shadow-[0_0_20px_rgba(251,191,36,0.8)]",

  // Background with Glow
  bgWithGlow: "min-h-screen bg-slate-950 relative",
  ambientGlow: "fixed inset-0 pointer-events-none radial-gradient(800px at 0% 0%, rgba(251,191,36,0.15) 0%, transparent 80%)",
}

// Quick Reference
export const quickRef = {
  "Main Background": { hex: "#09090b", tailwind: "bg-slate-950" },
  "Card Background": { hex: "#18181b", tailwind: "bg-slate-900" },
  "Card Tertiary": { hex: "#27272a", tailwind: "bg-slate-800" },
  "Borders": { hex: "#3f3f46", tailwind: "border-slate-700" },
  "Primary Accent": { hex: "#f59e0b", tailwind: "text-amber-500" },
  "Bright CTA": { hex: "#fbbf24", tailwind: "bg-amber-400" },
  "Hover State": { hex: "#d97706", tailwind: "hover:bg-amber-600" },
}
