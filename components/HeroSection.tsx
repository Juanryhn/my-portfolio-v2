"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface HeroSectionProps {
  title: string
  subtitle: string
  description: string
  ctaText?: string
  ctaHref?: string
  secondaryCTAText?: string
  secondaryCTAHref?: string
  imageUrl?: string
  showScrollIndicator?: boolean
}

export default function HeroSection({
  title,
  subtitle,
  description,
  ctaText = "Get Started",
  ctaHref = "#contact",
  secondaryCTAText = "Learn More",
  secondaryCTAHref = "#about",
  imageUrl,
  showScrollIndicator = true,
}: HeroSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const scrollIndicatorVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.2,
        duration: 0.6,
      },
    },
    animate: {
      y: [0, 8, 0],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section className="relative min-h-screen bg-parchment-50 overflow-hidden pt-20 md:pt-32">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top right accent circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-b from-emerald-200 to-emerald-50 blur-3xl"
        />

        {/* Bottom left accent circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-gradient-to-t from-emerald-100 to-emerald-50 blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          >
            {/* Left Column - Content */}
            <div className="flex flex-col justify-center space-y-8">
              {/* Subtitle */}
              <motion.div variants={itemVariants}>
                <p className="text-emerald-600 font-serif font-semibold text-lg tracking-wide">
                  {subtitle}
                </p>
              </motion.div>

              {/* Main Title */}
              <motion.div variants={itemVariants}>
                <h1 className="display-lg font-serif font-light text-navy-800 leading-tight">
                  {title}
                </h1>
              </motion.div>

              {/* Description */}
              <motion.div variants={itemVariants}>
                <p className="body-lg text-navy-700 max-w-lg leading-relaxed">
                  {description}
                </p>
              </motion.div>

              {/* CTAs */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
                {/* Primary CTA */}
                <Link href={ctaHref}>
                  <motion.button
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition-colors group"
                  >
                    {ctaText}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>

                {/* Secondary CTA */}
                <Link href={secondaryCTAHref}>
                  <motion.button
                    whileHover={{ x: 2 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-8 py-4 border-2 border-navy-800 text-navy-800 rounded-lg font-semibold hover:bg-navy-50 transition-colors"
                  >
                    {secondaryCTAText}
                  </motion.button>
                </Link>
              </motion.div>

              {/* Trust indicators or stats */}
              <motion.div
                variants={itemVariants}
                className="pt-8 border-t border-parchment-300 grid grid-cols-2 sm:grid-cols-3 gap-6"
              >
                <div>
                  <p className="text-2xl font-serif font-semibold text-emerald-600">10+</p>
                  <p className="text-sm text-navy-700">Years Experience</p>
                </div>
                <div>
                  <p className="text-2xl font-serif font-semibold text-emerald-600">50+</p>
                  <p className="text-sm text-navy-700">Projects Delivered</p>
                </div>
                <div>
                  <p className="text-2xl font-serif font-semibold text-emerald-600">30+</p>
                  <p className="text-sm text-navy-700">Happy Clients</p>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Visual Element */}
            {imageUrl && (
              <motion.div
                variants={itemVariants}
                className="relative hidden lg:flex items-center justify-center"
              >
                <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
                  {/* Decorative border frame */}
                  <div className="absolute inset-0 border-2 border-emerald-200 rounded-lg pointer-events-none" />

                  {/* Image with gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/20 to-transparent" />

                  <motion.img
                    src={imageUrl}
                    alt="Hero"
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>

                {/* Floating accent card */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl border border-parchment-200 max-w-xs"
                >
                  <p className="text-navy-800 font-serif font-semibold mb-2">
                    Crafted with Precision
                  </p>
                  <p className="text-sm text-navy-700">
                    Beautiful, functional, and user-centered design solutions.
                  </p>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <motion.div
          variants={scrollIndicatorVariants}
          initial="hidden"
          animate={["visible", "animate"]}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-navy-600 text-sm font-medium">Scroll to Explore</span>
          <div className="w-6 h-10 border-2 border-navy-600 rounded-full flex items-start justify-center pt-2">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1 h-2 bg-navy-600 rounded-full"
            />
          </div>
        </motion.div>
      )}
    </section>
  )
}

/**
 * USAGE EXAMPLE:
 *
 * import HeroSection from "@/components/HeroSection"
 *
 * export default function Home() {
 *   return (
 *     <HeroSection
 *       title="Editorial Design Meets Code"
 *       subtitle="Welcome"
 *       description="Crafting beautiful digital experiences through thoughtful design and clean architecture. Specializing in Next.js, modern design systems, and interactive interfaces."
 *       ctaText="View My Work"
 *       ctaHref="#projects"
 *       secondaryCTAText="Get In Touch"
 *       secondaryCTAHref="#contact"
 *       imageUrl="/assets/hero/your-image.jpg"
 *       showScrollIndicator={true}
 *     />
 *   )
 * }
 */