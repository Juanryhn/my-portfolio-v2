"use client"

import React, { ReactNode } from "react"
import { motion } from "framer-motion"
import { ANIMATION_PRESETS } from "@/lib/design-system"

interface BentoGridProps {
  children: ReactNode
  className?: string
  gap?: "sm" | "md" | "lg"
}

interface BentoGridItemProps {
  children: ReactNode
  className?: string
  colSpan?: 1 | 2 | 3
  rowSpan?: 1 | 2 | 3
  index?: number
}

/**
 * BentoGrid - Responsive masonry-like grid layout
 * Perfect for SaaS premium portfolio showcasing projects
 */
export const BentoGrid = React.forwardRef<HTMLDivElement, BentoGridProps>(
  ({ children, className = "", gap = "md" }, ref) => {
    const gapMap = {
      sm: "gap-3 md:gap-4",
      md: "gap-4 md:gap-6",
      lg: "gap-6 md:gap-8",
    }

    return (
      <motion.div
        ref={ref}
        className={`
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 
          auto-rows-auto
          ${gapMap[gap]}
          w-full
          ${className}
        `}
        initial={ANIMATION_PRESETS.containerVariants.hidden}
        whileInView={ANIMATION_PRESETS.containerVariants.visible}
        viewport={{ once: true, margin: "-100px" }}
      >
        {children}
      </motion.div>
    )
  }
)

BentoGrid.displayName = "BentoGrid"

/**
 * BentoGridItem - Individual grid item with responsive sizing
 * Supports custom spanning on desktop breakpoints
 */
export const BentoGridItem = React.forwardRef<HTMLDivElement, BentoGridItemProps>(
  ({ children, className = "", colSpan = 1, rowSpan = 1, index = 0 }, ref) => {
    const colSpanClass = {
      1: "md:col-span-1 lg:col-span-1",
      2: "md:col-span-2 lg:col-span-2",
      3: "md:col-span-2 lg:col-span-3",
    }

    const rowSpanClass = {
      1: "row-span-1",
      2: "row-span-2 md:row-span-1 lg:row-span-2",
      3: "row-span-3",
    }

    return (
      <motion.div
        ref={ref}
        className={`
          col-span-1
          ${colSpanClass[colSpan]}
          ${rowSpanClass[rowSpan]}
          ${className}
        `}
        variants={ANIMATION_PRESETS.itemVariants}
      >
        {children}
      </motion.div>
    )
  }
)

BentoGridItem.displayName = "BentoGridItem"

/**
 * Example layout patterns:
 * 
 * Pattern A - Featured + 3 Standard (2-1-1-1)
 * <BentoGrid>
 *   <BentoGridItem colSpan={2} rowSpan={2}> Large Featured </BentoGridItem>
 *   <BentoGridItem colSpan={1}> Standard </BentoGridItem>
 *   <BentoGridItem colSpan={1}> Standard </BentoGridItem>
 *   <BentoGridItem colSpan={1}> Standard </BentoGridItem>
 * </BentoGrid>
 * 
 * Pattern B - Balanced Mix
 * <BentoGrid>
 *   <BentoGridItem colSpan={2}> Wide </BentoGridItem>
 *   <BentoGridItem colSpan={1}> Compact </BentoGridItem>
 *   <BentoGridItem colSpan={1}> Compact </BentoGridItem>
 *   <BentoGridItem colSpan={2}> Wide </BentoGridItem>
 * </BentoGrid>
 */

export default BentoGrid
