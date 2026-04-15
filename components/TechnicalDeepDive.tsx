"use client"

import React from "react"
import { motion } from "framer-motion"
import { Code2, Zap, Users, BarChart3, Brain, Lock } from "lucide-react"
import { ANIMATION_PRESETS, DEEP_NORD } from "@/lib/design-system"
import { GLASS_UTILITIES, BORDER_GLOW } from "@/lib/glass-effects"

interface DeepDiveFeature {
  icon: React.ReactNode
  title: string
  description: string
  metrics?: string[]
}

interface TechnicalDeepDiveProps {
  projectName: string
  challenge: string
  solution: string
  features: DeepDiveFeature[]
  impact: {
    users: string
    performance: string
    reliability: string
  }
  techHighlights: string[]
}

/**
 * Technical Deep Dive Component
 * Showcases technical achievements and integrations for projects
 * Perfect for Subsidi Tepat LPG: Face Recognition & OCR integration
 */
export const TechnicalDeepDive: React.FC<TechnicalDeepDiveProps> = ({
  projectName,
  challenge,
  solution,
  features,
  impact,
  techHighlights,
}) => {
  return (
    <motion.div
      className={`${GLASS_UTILITIES.premium} rounded-lg-glass p-6 md:p-8 space-y-8`}
      initial={ANIMATION_PRESETS.slideInLeftVariants.hidden}
      whileInView={ANIMATION_PRESETS.slideInLeftVariants.visible}
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Header */}
      <div className="space-y-2">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="w-1 h-6 bg-gradient-to-b from-nord-sky to-nord-navy rounded-full" />
          <h2 className="text-2xl md:text-3xl font-bold text-nord-sky">{projectName}</h2>
        </motion.div>
        <motion.div
          className="h-1 w-12 bg-gradient-to-r from-nord-sky to-transparent rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 48 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        />
      </div>

      {/* Challenge & Solution */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Challenge */}
        <motion.div
          className={`${GLASS_UTILITIES.soft} rounded p-4 md:p-5 border-l-2 border-nord-sky/50`}
          whileHover={{ x: 4, borderColor: "#60d4ff" }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-sm font-semibold text-nord-slate-light uppercase tracking-wider mb-2">Challenge</h3>
          <p className="text-nord-slate-light leading-relaxed">{challenge}</p>
        </motion.div>

        {/* Solution */}
        <motion.div
          className={`${GLASS_UTILITIES.soft} rounded p-4 md:p-5 border-l-2 border-nord-navy/50`}
          whileHover={{ x: 4, borderColor: "#7a8bc8" }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-sm font-semibold text-nord-slate-light uppercase tracking-wider mb-2">Solution</h3>
          <p className="text-nord-slate-light leading-relaxed">{solution}</p>
        </motion.div>
      </div>

      {/* Features Grid */}
      <div>
        <h3 className="text-sm font-semibold text-nord-slate-light uppercase tracking-wider mb-4">
          Technical Highlights
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className={`${GLASS_UTILITIES.soft} rounded p-4 ${BORDER_GLOW.insetHover} group`}
              initial={ANIMATION_PRESETS.scaleInVariants.hidden}
              whileInView={ANIMATION_PRESETS.scaleInVariants.visible}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -2 }}
            >
              <div className="flex gap-3">
                <div className="text-nord-sky flex-shrink-0 mt-1 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-nord-sky-light mb-1">{feature.title}</h4>
                  <p className="text-sm text-nord-slate leading-relaxed">{feature.description}</p>
                  {feature.metrics && feature.metrics.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {feature.metrics.map((metric, midx) => (
                        <span
                          key={midx}
                          className="inline-block px-2 py-1 text-xs bg-nord-border/30 text-nord-sky rounded"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Impact Metrics */}
      <motion.div
        className={`${GLASS_UTILITIES.soft} rounded p-6 md:p-8 border-b-2 border-nord-sky/50`}
        initial={ANIMATION_PRESETS.containerVariants.hidden}
        whileInView={ANIMATION_PRESETS.containerVariants.visible}
        viewport={{ once: true }}
      >
        <h3 className="text-sm font-semibold text-nord-slate-light uppercase tracking-wider mb-6">Impact & Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {[
            { icon: Users, label: "Active Users", value: impact.users },
            { icon: Zap, label: "Performance", value: impact.performance },
            { icon: Lock, label: "Reliability", value: impact.reliability },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-start gap-2"
              variants={ANIMATION_PRESETS.itemVariants}
            >
              <item.icon className="w-6 h-6 text-nord-sky" />
              <span className="text-xs font-medium text-nord-slate uppercase tracking-wider">{item.label}</span>
              <span className="text-2xl md:text-3xl font-bold text-nord-sky-light">{item.value}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Tech Stack */}
      <div>
        <h3 className="text-sm font-semibold text-nord-slate-light uppercase tracking-wider mb-3">Tech Stack</h3>
        <motion.div
          className="flex flex-wrap gap-2"
          initial={ANIMATION_PRESETS.containerVariants.hidden}
          whileInView={ANIMATION_PRESETS.containerVariants.visible}
          viewport={{ once: true }}
        >
          {techHighlights.map((tech, idx) => (
            <motion.span
              key={tech}
              className="px-3 py-2 bg-gradient-to-r from-nord-sky/20 to-nord-navy/20 border border-nord-border hover:border-nord-sky text-nord-sky-light hover:text-nord-sky-light rounded text-sm font-medium transition-all duration-300 cursor-default"
              variants={ANIMATION_PRESETS.itemVariants}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(96, 212, 255, 0.3)" }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default TechnicalDeepDive
