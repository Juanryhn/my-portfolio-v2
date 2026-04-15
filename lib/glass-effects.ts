/**
 * Tailwind CSS class utilities for glassmorphism and glow effects
 * Use in JSX: className="glass-card border-glow"
 */

export const GLASS_UTILITIES = {
  // Base glass container
  container:
    "backdrop-blur-glass backdrop-saturate-150 bg-white/10 dark:bg-noir-darker/60 border border-white/20 dark:border-nord-border",

  // Premium variants
  premium: "bg-gradient-to-br from-nord-surface/80 to-nord-darker/60 backdrop-blur-glass border border-nord-border",
  premiumHover: "hover:border-nord-sky hover:shadow-glow-border-hover transition-all duration-300",

  // Light variant for light elements
  light: "bg-white/20 dark:bg-nord-surface/40 backdrop-blur-glass border border-white/30 dark:border-nord-border",

  // Dark variant for high contrast
  dark: "bg-black/30 dark:bg-nord-darker/80 backdrop-blur-glass border border-black/20 dark:border-nord-border",

  // Soft variant
  soft: "bg-gradient-to-br from-white/5 to-white/0 dark:from-nord-surface/40 dark:to-nord-darker/30 backdrop-blur-glass border border-white/10 dark:border-nord-border/50",
} as const;

/**
 * Border Glow Effects using Tailwind CSS classes
 * Apply to elements for a premium glowing border effect
 */
export const BORDER_GLOW = {
  // Static glow
  sky: "border border-nord-sky shadow-glow-sky",
  skyHover: "border border-nord-border hover:border-nord-sky hover:shadow-glow-border-hover transition-all duration-300",
  
  // Animated glow
  skyAnimate: "border border-nord-sky shadow-glow-sky animate-border-glow",
  
  // Inset glow
  inset: "border border-nord-border shadow-glow-border",
  insetHover: "border border-nord-border shadow-glow-border hover:shadow-glow-border-hover transition-shadow duration-300",

  // Pulse effect
  pulse: "border border-nord-sky shadow-glow-sky animate-glow-pulse",
} as const;

/**
 * Text Glow Effects
 * Apply to text elements for glowing text effect
 */
export const TEXT_GLOW = {
  sky: "text-nord-sky drop-shadow-glow-sky",
  skyHover: "hover:text-nord-sky-light hover:drop-shadow-glow-sky transition-all duration-300",
  subtitle: "text-nord-slate-light drop-shadow-sm",
} as const;

/**
 * Shadow Elevation System
 * Based on Material Design but with Deep Nord colors
 */
export const ELEVATION = {
  surface: "shadow-elevation-1",
  raised: "shadow-elevation-2",
  overlay: "shadow-elevation-3",
} as const;

/**
 * CSS-in-JS approach for dynamic glassmorphism
 * Usage: const glassStyle = createGlassStyle({ blur: 10, opacity: 0.8 })
 */
export interface GlassStyleConfig {
  blur?: number
  opacity?: number
  borderOpacity?: number
  backgroundColor?: "dark" | "light" | "custom"
}

export function createGlassStyle(config: GlassStyleConfig = {}) {
  const { blur = 10, opacity = 0.8, borderOpacity = 0.1, backgroundColor = "dark" } = config

  const bgColor =
    backgroundColor === "dark"
      ? `rgba(26, 31, 46, ${opacity})`
      : backgroundColor === "light"
        ? `rgba(255, 255, 255, ${opacity})`
        : `rgba(35, 45, 63, ${opacity})`

  return {
    backdropFilter: `blur(${blur}px)`,
    backgroundColor: bgColor,
    border: `1px solid rgba(96, 212, 255, ${borderOpacity})`,
    borderRadius: "12px",
  }
}

/**
 * Framer Motion variants for glass card animations
 * Usage with motion.div:
 * <motion.div variants={glassCardVariants.container}>
 */
export const glassCardVariants = {
  container: {
    hidden: { opacity: 0, backdropFilter: "blur(0px)" },
    visible: {
      opacity: 1,
      backdropFilter: "blur(10px)",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  },
  borderGlow: {
    initial: {
      boxShadow: "inset 0 0 20px rgba(96, 212, 255, 0.1), 0 0 20px rgba(96, 212, 255, 0.15)",
    },
    hover: {
      boxShadow: "inset 0 0 20px rgba(96, 212, 255, 0.2), 0 0 30px rgba(96, 212, 255, 0.25)",
      transition: { duration: 0.2 },
    },
  },
} as const;

/**
 * Responsive glass container component styles
 * These can be used with Tailwind CSS or extracted as CSS modules
 */
export const GLASS_RESPONSIVE = {
  container: "w-full p-4 md:p-6 lg:p-8",
  containerSmall: "w-full p-3 md:p-4",
  containerLarge: "w-full p-6 md:p-8 lg:p-10",
} as const;

/**
 * Gradient backgrounds with glassmorphism
 * Combine with glass-card classes
 */
export const GLASS_GRADIENTS = {
  nordLight: "bg-gradient-to-br from-nord-surface/80 to-nord-darker/60",
  nordDark: "bg-gradient-to-br from-nord-dark/95 to-nord-darker/80",
  nordAccent: "bg-gradient-to-r from-nord-sky/10 to-nord-navy/10",
  nordGlow: "bg-gradient-to-br from-nord-sky/5 via-transparent to-nord-navy/5",
} as const;

export default {
  GLASS_UTILITIES,
  BORDER_GLOW,
  TEXT_GLOW,
  ELEVATION,
  createGlassStyle,
  glassCardVariants,
  GLASS_RESPONSIVE,
  GLASS_GRADIENTS,
}
