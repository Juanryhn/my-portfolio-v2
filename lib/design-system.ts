/**
 * DEEP NORD Design System
 * SaaS-Premium Dark Mode Color Palette
 * Navy/Slate/Sky Blue for enhanced visual hierarchy
 */

export const DEEP_NORD = {
  // ===== PRIMARY COLORS - Deep Slate/Navy =====
  darkBg: "#0f1419",        // Page background
  darkerBg: "#1a1f2e",      // Cards, secondary surfaces
  surface: "#232d3f",       // Elevated surfaces, hover states
  border: "#2d3a52",        // Borders, dividers, subtle accents

  // ===== SECONDARY COLORS - Cool Slate Tones =====
  slate: "#8896a7",         // Muted text
  slateLight: "#a8b8c8",    // Secondary text
  textPrimary: "#e8ecf1",   // Primary text

  // ===== ACCENT COLORS - Sky Blue (Primary Branding) =====
  skyBlue: "#60d4ff",       // Primary action color - vibrant
  skyBlueDark: "#3ba8d4",   // Darker state
  skyBlueLight: "#88e8ff",  // Light/hover state

  // ===== SECONDARY ACCENT - Navy Blue =====
  navy: "#5b6fa1",          // Secondary accent
  navyLight: "#7a8bc8",     // Navy hover/active

  // ===== SEMANTIC COLORS =====
  success: "#90ee90",       // Success states
  warning: "#ffa500",       // Warnings
  error: "#ff6b6b",         // Errors
} as const;

export const SHADOW_CONFIG = {
  // Glow effects for premium aesthetic
  glowSky: "0 0 20px rgba(96, 212, 255, 0.3), 0 0 40px rgba(96, 212, 255, 0.15)",
  glowSkyLg: "0 0 30px rgba(96, 212, 255, 0.4), 0 0 60px rgba(96, 212, 255, 0.2)",
  glowNavy: "0 0 20px rgba(91, 111, 161, 0.3), 0 0 40px rgba(91, 111, 161, 0.15)",
  glowBorder: "inset 0 0 20px rgba(96, 212, 255, 0.1), 0 0 20px rgba(96, 212, 255, 0.15)",
  glowBorderHover: "inset 0 0 20px rgba(96, 212, 255, 0.2), 0 0 30px rgba(96, 212, 255, 0.25)",

  // Elevation system
  elevation1: "0 2px 8px rgba(0, 0, 0, 0.3)",
  elevation2: "0 4px 16px rgba(0, 0, 0, 0.4)",
  elevation3: "0 8px 32px rgba(0, 0, 0, 0.5)",
} as const;

export const GLASS_CONFIG = {
  // Glassmorphism effect configuration
  backdropBlur: "10px",
  lightTransparency: 0.8,  // 80%
  darkTransparency: 0.6,   // 60%
  borderColor: "rgba(96, 212, 255, 0.1)",
  borderColorHover: "rgba(96, 212, 255, 0.2)",
} as const;

export const ANIMATION_PRESETS = {
  // Framer Motion animation configurations
  snappyVariants: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  },

  smoothFadeVariants: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  },

  slideInLeftVariants: {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  },

  slideInRightVariants: {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  },

  scaleInVariants: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  },

  glowPulseVariants: {
    animate: {
      boxShadow: [
        "0 0 20px rgba(96, 212, 255, 0.3), 0 0 40px rgba(96, 212, 255, 0.15)",
        "0 0 30px rgba(96, 212, 255, 0.4), 0 0 60px rgba(96, 212, 255, 0.2)",
        "0 0 20px rgba(96, 212, 255, 0.3), 0 0 40px rgba(96, 212, 255, 0.15)",
      ],
      transition: { duration: 3, repeat: Infinity },
    },
  },

  floatVariants: {
    animate: {
      y: [0, -10, 0],
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  },

  containerVariants: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },

  itemVariants: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  },
} as const;

export const HOVER_EFFECTS = {
  // Tailwind CSS classes for hover effects
  borderGlow: "hover:shadow-glow-border-hover hover:border-nord-sky transition-all duration-300",
  cardLift: "hover:shadow-elevation-3 hover:-translate-y-1 transition-all duration-300",
  scaleGrow: "hover:scale-105 transition-transform duration-300",
  textGlow: "hover:text-nord-sky hover:drop-shadow-glow-sky transition-all duration-300",
} as const;

export const RESPONSIVE_BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

/**
 * Utility function to create consistent CSS variables
 * Usage in CSS: var(--nord-sky-blue) = rgb(96, 212, 255)
 */
export function getCSSVariables() {
  return `
    --nord-dark: ${DEEP_NORD.darkBg};
    --nord-darker: ${DEEP_NORD.darkerBg};
    --nord-surface: ${DEEP_NORD.surface};
    --nord-border: ${DEEP_NORD.border};
    --nord-slate: ${DEEP_NORD.slate};
    --nord-slate-light: ${DEEP_NORD.slateLight};
    --nord-text-primary: ${DEEP_NORD.textPrimary};
    --nord-sky-blue: ${DEEP_NORD.skyBlue};
    --nord-sky-blue-dark: ${DEEP_NORD.skyBlueDark};
    --nord-sky-blue-light: ${DEEP_NORD.skyBlueLight};
    --nord-navy: ${DEEP_NORD.navy};
    --nord-navy-light: ${DEEP_NORD.navyLight};
  `;
}
