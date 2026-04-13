"use client"

import React, { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"

interface Skill {
  name: string
  category: "frontend" | "backend" | "tools" | "languages"
  icon: string // Emoji or Lucide icon name
  description: string
  proficiency: number // 0-100
}

interface InteractiveStackProps {
  skills: Skill[]
}

const categoryColors = {
  frontend: "from-blue-400 to-blue-600",
  backend: "from-emerald-400 to-emerald-600",
  tools: "from-purple-400 to-purple-600",
  languages: "from-amber-400 to-amber-600",
}

const categoryLabels = {
  frontend: "Frontend",
  backend: "Backend",
  tools: "Development Tools",
  languages: "Languages",
}

export default function InteractiveStack({ skills }: InteractiveStackProps) {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const canvasRef = useRef<HTMLDivElement>(null)

  // Group skills by category
  const skillsByCategory = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = []
      acc[skill.category].push(skill)
      return acc
    },
    {} as Record<string, Skill[]>
  )

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  return (
    <section className="section-padding bg-parchment-50">
      <div className="editorial-container">
        {/* Header */}
        <div className="mb-20">
          <h2 className="display-md font-serif font-light text-navy-800 mb-4">
            Technical Canvas
          </h2>
          <p className="body-lg text-navy-700 max-w-2xl">
            An organized collection of technologies and tools I use to bring ideas to life—explore each category or hover over individual skills for more details.
          </p>
        </div>

        {/* Skills Canvas */}
        <div ref={canvasRef} className="space-y-16">
          {(Object.entries(skillsByCategory) as [string, Skill[]][]).map(
            ([category, categorySkills]) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                {/* Category Header */}
                <div className="mb-8">
                  <h3 className="text-xl font-serif font-semibold text-navy-800 mb-2">
                    {categoryLabels[category as keyof typeof categoryLabels]}
                  </h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-emerald-500 to-emerald-300 rounded-full" />
                </div>

                {/* Skills Grid - Organic layout */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                >
                  {categorySkills.map((skill, idx) => (
                    <motion.div
                      key={`${skill.name}-${idx}`}
                      variants={itemVariants}
                      whileHover={{ y: -8 }}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      onClick={() => setSelectedSkill(skill)}
                      className="group cursor-pointer"
                    >
                      <div className="relative h-full">
                        {/* Card */}
                        <motion.div
                          animate={{
                            boxShadow:
                              hoveredSkill === skill.name
                                ? "0 20px 40px rgba(74, 157, 111, 0.15)"
                                : "0 4px 12px rgba(0, 0, 0, 0.05)",
                          }}
                          className="h-full p-6 rounded-lg bg-white border border-parchment-200 transition-all duration-300"
                        >
                          {/* Icon */}
                          <div className="mb-4 text-4xl">
                            {skill.icon}
                          </div>

                          {/* Name */}
                          <h4 className="text-base font-semibold text-navy-800 mb-2 line-clamp-2">
                            {skill.name}
                          </h4>

                          {/* Proficiency Bar */}
                          <div className="mb-3">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-xs text-navy-600 font-medium">
                                Proficiency
                              </span>
                              <span className="text-xs font-semibold text-emerald-600">
                                {skill.proficiency}%
                              </span>
                            </div>
                            <div className="w-full h-2 bg-parchment-200 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{
                                  width: `${skill.proficiency}%`,
                                }}
                                viewport={{ once: true }}
                                transition={{
                                  duration: 0.8,
                                  delay: idx * 0.05,
                                  ease: "easeOut",
                                }}
                                className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full"
                              />
                            </div>
                          </div>

                          {/* Hover description preview */}
                          {hoveredSkill === skill.name && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="text-xs text-navy-600 line-clamp-2"
                            >
                              {skill.description}
                            </motion.p>
                          )}
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )
          )}
        </div>

        {/* Detail Modal */}
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSkill(null)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg p-8 max-w-sm shadow-xl border border-parchment-200"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-5xl">{selectedSkill.icon}</span>
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-navy-800">
                    {selectedSkill.name}
                  </h3>
                  <p className="text-emerald-600 font-medium text-sm">
                    {categoryLabels[selectedSkill.category]}
                  </p>
                </div>
              </div>

              <p className="text-navy-700 mb-6">
                {selectedSkill.description}
              </p>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-navy-800">
                      Proficiency Level
                    </span>
                    <span className="text-lg font-bold text-emerald-600">
                      {selectedSkill.proficiency}%
                    </span>
                  </div>
                  <div className="w-full h-3 bg-parchment-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${selectedSkill.proficiency}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600"
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedSkill(null)}
                className="mt-6 w-full py-2 px-4 bg-parchment-200 text-navy-800 rounded-lg font-medium hover:bg-parchment-300 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
