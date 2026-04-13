"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Skill {
  name: string
  proficiency: number // 0-100
  category: "frontend" | "backend" | "devops"
}

interface SkillProgressProps {
  skill: Skill
  delay?: number
}

export function SkillProgress({ skill, delay = 0 }: SkillProgressProps) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    let startValue = 0
    const increment = skill.proficiency / 60
    const interval = setInterval(() => {
      startValue += increment
      if (startValue >= skill.proficiency) {
        setDisplayValue(skill.proficiency)
        clearInterval(interval)
      } else {
        setDisplayValue(Math.floor(startValue))
      }
    }, 16)

    return () => clearInterval(interval)
  }, [skill.proficiency])

  // Creative Amber effect: Glowing gradient segments
  const segments = 12
  const filledSegments = Math.round((skill.proficiency / 100) * segments)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      className="group"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="font-semibold text-white group-hover:text-amber-400 transition-colors">
            {skill.name}
          </h3>
          <p className="text-xs text-slate-600">{skill.category}</p>
        </div>
        <div className="text-right">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: delay + 0.3 }}
            className="text-lg font-bold text-amber-400"
          >
            {displayValue}%
          </motion.span>
        </div>
      </div>

      {/* Segmented Progress Bar with Amber glow */}
      <div className="flex gap-1.5">
        {Array.from({ length: segments }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: delay + (index * 0.02), duration: 0.3 }}
            viewport={{ once: true }}
            className={`h-2 rounded-full flex-1 transition-all duration-500 ${
              index < filledSegments
                ? "bg-gradient-to-r from-amber-400 to-amber-500 shadow-[0_0_12px_rgba(251,191,36,0.6)] hover:shadow-[0_0_20px_rgba(251,191,36,0.8)]"
                : "bg-slate-700 hover:bg-slate-600"
            }`}
          />
        ))}
      </div>

      {/* Underline glow effect on hover */}
      <motion.div
        whileHover={{ scaleX: 1.02 }}
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400/0 via-amber-400 to-amber-400/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-full mt-2"
      />
    </motion.div>
  )
}

// Container component for all skills
export function SkillProgressGrid({ skills }: { skills: Skill[] }) {
  const categories = ["frontend", "backend", "devops"] as const

  return (
    <div className="space-y-8">
      {categories.map((category) => {
        const categorySkills = skills.filter((s) => s.category === category)
        if (categorySkills.length === 0) return null

        return (
          <motion.div
            key={category}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-1 h-6 bg-gradient-to-b from-amber-400 to-amber-600 rounded-full" />
              <h2 className="text-xl font-bold text-white capitalize tracking-tight">
                {category} Mastery
              </h2>
            </div>

            <div className="grid gap-6">
              {categorySkills.map((skill, idx) => (
                <SkillProgress key={skill.name} skill={skill} delay={idx * 0.1} />
              ))}
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
