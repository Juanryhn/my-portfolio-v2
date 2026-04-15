"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronRight, Code2, Zap } from "lucide-react"
import { ANIMATION_PRESETS, DEEP_NORD } from "@/lib/design-system"

interface ProjectCardProps {
  id: string
  title: string
  description: string
  heroUrl?: string
  tags?: string[]
  techStack?: string[]
  metrics?: Array<{ label: string; value: string }>
  deepDive?: {
    title: string
    description: string
    highlights: string[]
  }
  isHighlighted?: boolean
  colSpan?: "1" | "2"
  rowSpan?: "1" | "2"
  cta?: {
    text: string
    href: string
  }
}

/**
 * Premium Project Card Component
 * Features:
 * - Glassmorphism with border glow
 * - Hover effects with elevation
 * - Sky Blue accent with deep Nord colors
 * - Responsive sizing via Bento Grid
 * - Optional Deep Dive technical details
 */
export const ProjectCard = React.forwardRef<HTMLDivElement, ProjectCardProps>(
  (
    {
      id,
      title,
      description,
      heroUrl,
      tags = [],
      techStack = [],
      metrics,
      deepDive,
      isHighlighted = false,
      colSpan = "1",
      cta,
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
      <motion.div
        ref={ref}
        className={`
          group relative overflow-hidden rounded-lg-glass
          bg-gradient-to-br from-nord-surface/80 to-nord-darker/60
          backdrop-blur-glass backdrop-saturate-150
          border border-nord-border hover:border-nord-sky
          shadow-elevation-2 hover:shadow-glow-border-hover
          transition-all duration-300 ease-out
          ${colSpan === "2" ? "col-span-1 md:col-span-2" : "col-span-1"}
          ${isHighlighted ? "ring-2 ring-nord-sky ring-opacity-50" : ""}
        `}
        initial={ANIMATION_PRESETS.scaleInVariants.hidden}
        whileInView={ANIMATION_PRESETS.scaleInVariants.visible}
        whileHover={{ y: -4, boxShadow: "0 0 30px rgba(96, 212, 255, 0.4), 0 0 60px rgba(96, 212, 255, 0.2)" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Animated background gradient on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-nord-sky/5 via-transparent to-nord-navy/5" />
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-nord-sky/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Hero Image Section */}
        {heroUrl && (
          <div className="relative w-full h-40 md:h-48 overflow-hidden brightness-90 group-hover:brightness-100 transition-all duration-300">
            <Image
              src={heroUrl}
              alt={title}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-nord-darker via-transparent to-transparent" />

            {/* Badge */}
            {isHighlighted && (
              <motion.div
                className="absolute top-3 right-3 bg-nord-sky/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-nord-dark flex items-center gap-1"
                animate={{ y: isHovered ? -2 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Zap className="w-3 h-3" /> Featured
              </motion.div>
            )}
          </div>
        )}

        {/* Content Section */}
        <div className="relative p-5 md:p-6 space-y-4 z-10">
          {/* Title */}
          <div>
            <h3 className="text-lg md:text-xl font-bold text-nord-sky group-hover:text-nord-sky-light transition-colors duration-300 line-clamp-2">
              {title}
            </h3>
            <div className="h-0.5 w-0 group-hover:w-12 bg-gradient-to-r from-nord-sky to-nord-navy transition-all duration-500 mt-2" />
          </div>

          {/* Description */}
          <p className="text-sm md:text-base text-nord-slate-light leading-relaxed line-clamp-2 md:line-clamp-3">
            {description}
          </p>

          {/* Metrics Grid (if provided) */}
          {metrics && metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-3 py-3 border-y border-nord-border/50">
              {metrics.map((metric, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <span className="text-xs text-nord-slate uppercase tracking-wider font-medium">{metric.label}</span>
                  <span className="text-base md:text-lg font-bold text-nord-sky mt-1">{metric.value}</span>
                </motion.div>
              ))}
            </div>
          )}

          {/* Tech Stack Tags */}
          {techStack.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {techStack.slice(0, 3).map((tech, idx) => (
                <motion.span
                  key={tech}
                  className="inline-block px-2.5 py-1 bg-nord-border/50 hover:bg-nord-sky/10 text-nord-sky-light hover:text-nord-sky text-xs font-medium rounded border border-nord-border/50 hover:border-nord-sky/50 transition-all duration-300 cursor-default"
                  whileHover={{ scale: 1.05, x: 2 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  {tech}
                </motion.span>
              ))}
              {techStack.length > 3 && (
                <span className="text-xs text-nord-slate px-2.5 py-1">+{techStack.length - 3}</span>
              )}
            </div>
          )}

          {/* Deep Dive Section (Technical Details) */}
          {deepDive && (
            <motion.div
              className="pt-3 border-t border-nord-border/50 space-y-2 bg-nord-darker/30 p-3 rounded"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? "auto" : 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start gap-2">
                <Code2 className="w-4 h-4 text-nord-sky mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-nord-sky-light">{deepDive.title}</h4>
                  <p className="text-xs text-nord-slate mt-1">{deepDive.description}</p>
                  {deepDive.highlights.length > 0 && (
                    <ul className="text-xs text-nord-slate-light mt-2 space-y-1">
                      {deepDive.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-nord-sky flex-shrink-0">▸</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* CTA Button */}
          {cta && (
            <motion.a
              href={cta.href}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-nord-sky to-nord-navy hover:from-nord-sky-light hover:to-nord-navy-light text-nord-dark font-medium rounded text-sm shadow-glow-sky hover:shadow-glow-sky-lg transition-all duration-300 group/btn"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.96 }}
            >
              {cta.text}
              <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </motion.a>
          )}

          {/* Hover indicator */}
          {!cta && !deepDive && (
            <motion.div
              className="flex items-center gap-2 text-nord-sky text-sm font-medium pt-2 opacity-0 group-hover:opacity-100 transition-opacity"
              animate={{ x: isHovered ? 4 : 0 }}
            >
              View Details <ChevronRight className="w-4 h-4" />
            </motion.div>
          )}
        </div>

        {/* Corner accent glow effect */}
        <div className="absolute top-0 right-0 w-px h-px bg-nord-sky shadow-[0_0_20px_rgba(96,212,255,0.5)] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.div>
    )
  }
)

ProjectCard.displayName = "ProjectCard"

export default ProjectCard
