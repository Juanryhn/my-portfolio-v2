"use client"

import React from "react"
import { motion } from "framer-motion"

interface TimelinePoint {
  year: string | number
  title: string
  company: string
  description: string
  highlights: string[]
  isActive?: boolean
}

interface CareerTimelineProps {
  items: TimelinePoint[]
}

const timelineVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  },
  item: {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  },
}

const dotVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
  active: {
    scale: 1.5,
    boxShadow: "0 0 20px rgba(74, 157, 111, 0.6)",
  },
}

export default function CareerTimeline({ items }: CareerTimelineProps) {
  const [activeIndex, setActiveIndex] = React.useState(0)

  return (
    <section className="relative py-16 md:py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="display-md font-serif font-light text-navy-800 mb-4">
            From ISH to Code ID
          </h2>
          <p className="body-lg text-navy-700 max-w-2xl">
            A journey of continuous growth through leadership, innovation, and technical excellence.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-emerald-300 md:w-1 md:left-12"></div>

          {/* Timeline Items */}
          <motion.div
            variants={timelineVariants.container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            {items.map((item, index) => (
              <motion.div
                key={`${item.year}-${index}`}
                variants={timelineVariants.item}
                className="relative pl-16 md:pl-28 cursor-pointer group"
                onClick={() => setActiveIndex(index)}
                onMouseEnter={() => setActiveIndex(index)}
              >
                {/* Dot on timeline */}
                <motion.div
                  variants={dotVariants}
                  initial="hidden"
                  whileInView="visible"
                  animate={activeIndex === index ? "active" : "visible"}
                  viewport={{ once: true }}
                  className="absolute -left-2.5 md:-left-5 top-2 w-5 h-5 md:w-6 md:h-6 rounded-full bg-emerald-500 border-4 border-parchment-50"
                />

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: activeIndex === index ? 1 : 0.7 }}
                  className="p-6 bg-white rounded-lg border border-parchment-200 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-4 mb-3">
                    <div>
                      <h3 className="text-xl md:text-2xl font-serif font-semibold text-navy-800 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-emerald-600 font-medium">{item.company}</p>
                    </div>
                    <span className="text-sm md:text-base font-semibold text-navy-600 whitespace-nowrap">
                      {item.year}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-navy-700 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  {item.highlights.length > 0 && (
                    <ul className="space-y-2">
                      {item.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-sm text-navy-600"
                        >
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 h-1 bg-gradient-to-r from-emerald-500 via-emerald-400 to-transparent max-w-xs"
        />
      </div>
    </section>
  )
}
