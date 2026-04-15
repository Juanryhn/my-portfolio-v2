"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Github, Linkedin, Mail, ArrowRight } from "lucide-react"
import Image from "next/image"

// Components & Design System
import { ProjectCard } from "@/components/ProjectCard"
import { BentoGrid, BentoGridItem } from "@/components/BentoGrid"
import { TechnicalDeepDive } from "@/components/TechnicalDeepDive"
import { ANIMATION_PRESETS, DEEP_NORD } from "@/lib/design-system"
import { GLASS_UTILITIES, BORDER_GLOW } from "@/lib/glass-effects"
import { EXPERIENCE, PROJECTS_FEATURED, SKILLS_CATEGORIZED, CERTIFICATIONS, DEEP_DIVES } from "@/lib/portfolio-content"

const NAVIGATION = ["about", "experience", "projects", "deep-dives", "skills", "contact"]

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = [...NAVIGATION, "hero"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-nord-dark text-nord-slate">
      {/* Background gradient effect */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-nord-sky/5 via-nord-dark to-nord-navy/5" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-nord-sky/10 rounded-full blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-nord-navy/10 rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: "1s" }} />
      </div>

      {/* Header */}
      <motion.header
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          isScrolled ? `${GLASS_UTILITIES.premium} shadow-elevation-2` : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <nav className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center relative z-50">
          {/* Logo */}
          <motion.a href="#hero" className="text-2xl font-bold bg-gradient-to-r from-nord-sky to-nord-navy bg-clip-text text-transparent" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Juan Rayhan
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAVIGATION.map((item) => (
              <motion.a
                key={item}
                href={`#${item}`}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item ? "text-nord-sky" : "text-nord-slate-light hover:text-nord-sky"
                }`}
                whileHover={{ y: -2 }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-nord-sky"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className={`md:hidden ${GLASS_UTILITIES.premium} border-t border-nord-border`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="px-4 py-4 space-y-2">
                {NAVIGATION.map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item}`}
                    className="block px-4 py-2 text-nord-slate-light hover:text-nord-sky rounded transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ x: 4 }}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <main className="relative z-10">
        {/* HERO SECTION */}
        <motion.section
          id="hero"
          className="min-h-screen flex flex-col justify-center items-center px-4 md:px-8 pt-20"
          initial={ANIMATION_PRESETS.hiddenVariants?.hidden}
          animate={ANIMATION_PRESETS.hiddenVariants?.visible}
        >
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-nord-sky via-nord-sky-light to-nord-navy bg-clip-text text-transparent leading-tight">
                Senior Frontend Developer
              </h1>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-nord-slate-light leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Crafting premium SaaS experiences with React, Next.js, and TypeScript. Specializing in scalable architectures, face recognition integration, and performance optimization.
            </motion.p>

            <motion.div
              className="flex gap-4 justify-center pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-nord-sky to-nord-navy text-nord-dark font-semibold rounded-lg shadow-glow-sky hover:shadow-glow-sky-lg transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="#contact"
                className={`px-8 py-3 ${GLASS_UTILITIES.premium} rounded-lg ${BORDER_GLOW.skyHover} font-semibold transition-all`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-nord-sky rounded-full flex justify-center p-2">
              <div className="w-1 h-2 bg-nord-sky rounded-full" />
            </div>
          </motion.div>
        </motion.section>

        {/* ABOUT SECTION */}
        <motion.section
          id="about"
          className="py-20 md:py-32 px-4 md:px-8 max-w-6xl mx-auto"
          initial={ANIMATION_PRESETS.slideInLeftVariants.hidden}
          whileInView={ANIMATION_PRESETS.slideInLeftVariants.visible}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bold text-nord-sky mb-4">About Me</h2>
              <div className="h-1 w-12 bg-gradient-to-r from-nord-sky to-transparent rounded-full" />
            </div>

            <div className={`${GLASS_UTILITIES.premium} rounded-lg-glass p-8 space-y-4`}>
              <p className="text-nord-slate-light leading-relaxed">
                I'm a Senior Frontend Developer specializing in building scalable SaaS applications with React and Next.js. With extensive experience across full-stack development, I've contributed to products serving 257K+ active users and processing 2.3M+ monthly transactions.
              </p>
              <p className="text-nord-slate-light leading-relaxed">
                My expertise spans modern frontend architecture, performance optimization, and emerging technologies like face recognition and OCR integration. I'm passionate about creating intuitive, accessible, and performant digital experiences.
              </p>
            </div>
          </div>
        </motion.section>

        {/* EXPERIENCE SECTION */}
        <motion.section
          id="experience"
          className="py-20 md:py-32 px-4 md:px-8 max-w-6xl mx-auto"
          initial={ANIMATION_PRESETS.slideInRightVariants.hidden}
          whileInView={ANIMATION_PRESETS.slideInRightVariants.visible}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bold text-nord-sky mb-4">Experience</h2>
              <div className="h-1 w-12 bg-gradient-to-r from-nord-sky to-transparent rounded-full" />
            </div>

            <div className="space-y-6">
              {EXPERIENCE.map((exp, idx) => (
                <motion.div
                  key={exp.id}
                  className={`${GLASS_UTILITIES.premium} rounded-lg-glass p-6 md:p-8 ${BORDER_GLOW.insetHover} relative`}
                  initial={ANIMATION_PRESETS.scaleInVariants.hidden}
                  whileInView={ANIMATION_PRESETS.scaleInVariants.visible}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  {exp.isCurrentRole && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-nord-sky/20 border border-nord-sky text-nord-sky text-xs font-semibold rounded-full">
                      Current
                    </div>
                  )}

                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-nord-sky">{exp.company}</h3>
                      <p className="text-nord-sky-light">{exp.position}</p>
                    </div>
                    <span className="text-nord-slate text-sm">{exp.period}</span>
                  </div>

                  <p className="text-nord-slate-light mb-4">{exp.description}</p>

                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-nord-slate font-medium">Highlights:</p>
                    <ul className="space-y-1">
                      {exp.highlights.map((highlight, hidx) => (
                        <li key={hidx} className="text-nord-slate-light text-sm flex gap-2">
                          <span className="text-nord-sky">▸</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 bg-nord-border/50 text-nord-sky-light text-xs rounded border border-nord-border/50 hover:border-nord-sky/50 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* PROJECTS SECTION - BENTO GRID */}
        <motion.section
          id="projects"
          className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto"
          initial={ANIMATION_PRESETS.slideInLeftVariants.hidden}
          whileInView={ANIMATION_PRESETS.slideInLeftVariants.visible}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bold text-nord-sky mb-4">Featured Projects</h2>
              <div className="h-1 w-12 bg-gradient-to-r from-nord-sky to-transparent rounded-full" />
            </div>

            <BentoGrid gap="md">
              {PROJECTS_FEATURED.map((project, idx) => {
                const bentoProps: any = {
                  colSpan: project.colSpan === 2 ? 2 : 1,
                }

                return (
                  <BentoGridItem key={project.id} {...bentoProps} index={idx}>
                    <ProjectCard {...project} />
                  </BentoGridItem>
                )
              })}
            </BentoGrid>
          </div>
        </motion.section>

        {/* DEEP DIVES SECTION */}
        <motion.section
          id="deep-dives"
          className="py-20 md:py-32 px-4 md:px-8 max-w-6xl mx-auto"
          initial={ANIMATION_PRESETS.slideInRightVariants.hidden}
          whileInView={ANIMATION_PRESETS.slideInRightVariants.visible}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bold text-nord-sky mb-4">Technical Deep Dives</h2>
              <div className="h-1 w-12 bg-gradient-to-r from-nord-sky to-transparent rounded-full" />
              <p className="text-nord-slate-light mt-4">Advanced implementations featuring face recognition and OCR integration</p>
            </div>

            <div className="space-y-8">
              {DEEP_DIVES.map((dive, idx) => (
                <motion.div
                  key={dive.id}
                  initial={ANIMATION_PRESETS.scaleInVariants.hidden}
                  whileInView={ANIMATION_PRESETS.scaleInVariants.visible}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                >
                  <TechnicalDeepDive {...dive} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* SKILLS SECTION */}
        <motion.section
          id="skills"
          className="py-20 md:py-32 px-4 md:px-8 max-w-6xl mx-auto"
          initial={ANIMATION_PRESETS.slideInLeftVariants.hidden}
          whileInView={ANIMATION_PRESETS.slideInLeftVariants.visible}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bold text-nord-sky mb-4">Skills & Expertise</h2>
              <div className="h-1 w-12 bg-gradient-to-r from-nord-sky to-transparent rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(SKILLS_CATEGORIZED).map(([key, category]: any, idx) => (
                <motion.div
                  key={key}
                  className={`${GLASS_UTILITIES.premium} rounded-lg-glass p-6 space-y-4`}
                  initial={ANIMATION_PRESETS.scaleInVariants.hidden}
                  whileInView={ANIMATION_PRESETS.scaleInVariants.visible}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <h3 className="text-xl font-bold text-nord-sky">{category.name}</h3>

                  <div className="space-y-3">
                    {category.skills.map((skill: any) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-nord-slate-light text-sm">{skill.name}</span>
                          <span className="text-nord-sky text-xs font-semibold">{skill.proficiency}%</span>
                        </div>
                        <div className="h-2 bg-nord-border rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-nord-sky to-nord-navy rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.proficiency}%` }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CERTIFICATIONS SECTION */}
        <motion.section
          id="certifications"
          className="py-20 md:py-32 px-4 md:px-8 max-w-6xl mx-auto"
          initial={ANIMATION_PRESETS.slideInRightVariants.hidden}
          whileInView={ANIMATION_PRESETS.slideInRightVariants.visible}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bold text-nord-sky mb-4">Certifications</h2>
              <div className="h-1 w-12 bg-gradient-to-r from-nord-sky to-transparent rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <motion.div
                  key={idx}
                  className={`${GLASS_UTILITIES.soft} rounded p-4 ${BORDER_GLOW.insetHover} flex items-start gap-3`}
                  initial={ANIMATION_PRESETS.scaleInVariants.hidden}
                  whileInView={ANIMATION_PRESETS.scaleInVariants.visible}
                  transition={{ delay: idx * 0.05 }}
                >
                  <div className="text-nord-sky text-lg flex-shrink-0">✓</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-nord-sky-light">{cert.name}</h4>
                    <p className="text-nord-slate text-sm">{cert.issuer}</p>
                    <p className="text-nord-slate text-xs mt-1">{cert.year}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* CONTACT SECTION */}
        <motion.section
          id="contact"
          className="py-20 md:py-32 px-4 md:px-8 max-w-4xl mx-auto mb-20"
          initial={ANIMATION_PRESETS.slideInLeftVariants.hidden}
          whileInView={ANIMATION_PRESETS.slideInLeftVariants.visible}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-nord-sky mb-4">Let's Connect</h2>
              <p className="text-nord-slate-light">Feel free to reach out for collaborations or just a friendly hello!</p>
            </div>

            <div className={`${GLASS_UTILITIES.premium} rounded-lg-glass p-8 md:p-12 space-y-8`}>
              <div className="flex justify-center flex-wrap gap-6">
                {[
                  { name: "GitHub", icon: Github, url: "https://github.com/juanryhn" },
                  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/juanrayhan" },
                  { name: "Email", icon: Mail, url: "mailto:contact@juanrayhan.dev" },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 px-6 py-3 rounded-lg ${GLASS_UTILITIES.soft} ${BORDER_GLOW.insetHover}`}
                    whileHover={{ scale: 1.05, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={20} className="text-nord-sky" />
                    <span className="font-medium text-nord-sky-light">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <motion.footer
        className={`${GLASS_UTILITIES.premium} border-t border-nord-border mt-20 py-8 px-4`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto text-center text-nord-slate">
          <p>© 2026 Juan Rayhan. All rights reserved. Built with React, Next.js & Tailwind CSS.</p>
          <p className="text-nord-slate text-sm mt-2">Deep Nord Color Palette | SaaS Premium Design</p>
        </div>
      </motion.footer>
    </div>
  )
}
