"use client"

import { Suspense } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useTheme } from "./contexts/ThemeContext"
import { Moon, Sun, Menu, X, ArrowRight } from "lucide-react"
import SplashScreen from "./components/SplashScreen"
import { CommandPalette } from "@/components/CommandPalette"
import { CustomCursor } from "@/components/CustomCursor"
import { LPGProjectMetrics } from "@/components/KeyMetrics"
import { ProjectsSection } from "./components/ProjectsSection"
import { SkillsSection } from "./components/SkillsSection"
import { useState, useEffect } from "react"

export default function Home() {
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "certifications", "skills", "contact"]
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>{isLoading && <SplashScreen />}</AnimatePresence>
      <CustomCursor />
      <CommandPalette />

      <motion.div
        className="min-h-screen bg-slate-950 text-white transition-colors duration-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Ambient background glow */}
        <motion.div
          animate={{ 
            background: [
              "radial-gradient(800px at 0% 0%, rgba(251,191,36,0.15) 0%, transparent 80%)",
              "radial-gradient(800px at 100% 100%, rgba(251,191,36,0.1) 0%, transparent 80%)",
              "radial-gradient(800px at 0% 0%, rgba(251,191,36,0.15) 0%, transparent 80%)",
            ]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="fixed inset-0 pointer-events-none z-0"
        />

        {/* Header */}
        <motion.header
          className="sticky top-0 z-40 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800 shadow-lg"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <nav className="relative container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <motion.h1
                className="text-2xl font-bold bg-gradient-to-r from-white via-amber-400 to-white bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                Juan Rayhan
              </motion.h1>

              <div className="hidden md:flex items-center space-x-1">
                {["about", "projects", "skills", "contact"].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item}`}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      activeSection === item
                        ? "text-amber-400 bg-amber-400/10 border border-amber-500/50"
                        : "text-slate-400 hover:text-amber-400 hover:bg-amber-400/5"
                    }`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </motion.a>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <motion.button
                  onClick={toggleTheme}
                  whileHover={{ scale: 1.1 }}
                  className="p-2 rounded-lg hover:bg-slate-800 transition-colors"
                >
                  {theme === "light" ? (
                    <Moon className="w-5 h-5 text-slate-400" />
                  ) : (
                    <Sun className="w-5 h-5 text-amber-400" />
                  )}
                </motion.button>

                <motion.button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="md:hidden p-2 rounded-lg hover:bg-slate-800"
                  whileHover={{ scale: 1.1 }}
                >
                  {isMenuOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </motion.button>
              </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="md:hidden mt-4 flex flex-col gap-2"
                >
                  {["about", "projects", "skills", "contact"].map((item) => (
                    <motion.a
                      key={item}
                      href={`#${item}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="px-4 py-2 rounded-lg text-slate-400 hover:text-amber-400 hover:bg-amber-400/10 transition-colors"
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </nav>
        </motion.header>

        <main className="relative z-10 container mx-auto px-6">
          {/* Hero Section */}
          <motion.section
            id="hero"
            className="py-32 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/5 backdrop-blur-sm"
            >
              <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-sm text-amber-400 font-medium">High-Performance Dashboard</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-6xl sm:text-7xl font-bold mb-4 leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-amber-400 to-amber-300 bg-clip-text text-transparent">
                Fast. Technical. Elegant.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-slate-400 max-w-2xl mb-8"
            >
              Full-stack developer building performant web experiences with React, Next.js, and modern architecture patterns. Featured: 257K+ users on national subsidy platform.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(251,191,36,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-semibold rounded-lg flex items-center justify-center gap-2 hover:shadow-lg transition-all"
              >
                Explore Work <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-amber-500/50 text-amber-400 font-semibold rounded-lg hover:bg-amber-500/10 transition-all"
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </motion.section>

          {/* About Section */}
          <motion.section
            id="about"
            className="py-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold mb-6">About</h2>
                <div className="w-1 h-1 bg-amber-400 mb-6" />
                <p className="text-slate-400 text-lg leading-relaxed mb-4">
                  Passionate full-stack developer specialized in building scalable, high-performance web applications. Experienced with React, Next.js, TypeScript, and modern DevOps practices.
                </p>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Proven track record: shipped an app that reached 257,000+ active users in the first year. Expertise in cloud deployment (GCP, Docker), unit testing, UI/UX optimization, and CI/CD pipelines.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
              >
                {[
                  { label: "Frontend", value: "React, Next.js, TypeScript, Tailwind" },
                  { label: "Backend", value: "Node.js, PHP, Python, PostgreSQL" },
                  { label: "DevOps", value: "Docker, GCP, CI/CD, Git" },
                  { label: "Speciality", value: "High-scale apps, Performance optimization" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="border border-slate-700 rounded-lg p-4 hover:border-amber-500/50 transition-colors"
                  >
                    <p className="text-amber-400 font-semibold text-sm">{item.label}</p>
                    <p className="text-slate-300">{item.value}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.section>

          {/* LPG Project Metrics */}
          <motion.section
            className="py-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <LPGProjectMetrics />
          </motion.section>

          {/* Projects Section */}
          <motion.section
            id="projects"
            className="py-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-2"
              >
                Featured Projects
              </motion.h2>
              <div className="w-1 h-1 bg-amber-400" />
            </div>

            <Suspense fallback={<div className="text-slate-400 text-center py-12">Loading projects...</div>}>
              <ProjectsSection />
            </Suspense>
          </motion.section>

          {/* Skills Section */}
          <motion.section
            id="skills"
            className="py-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-2"
              >
                Technical Expertise
              </motion.h2>
              <div className="w-1 h-1 bg-amber-400" />
            </div>

            <Suspense fallback={<div className="text-slate-400 text-center py-12">Loading skills...</div>}>
              <SkillsSection />
            </Suspense>
          </motion.section>

          {/* Contact Section */}
          <motion.section
            id="contact"
            className="py-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="max-w-2xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-2"
              >
                Let's Connect
              </motion.h2>
              <div className="w-1 h-1 bg-amber-400 mb-8" />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 p-8"
              >
                <p className="text-slate-400 mb-6">
                  I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
                </p>
                <div className="space-y-3">
                  <a href="mailto:your.email@example.com" className="flex items-center gap-3 text-amber-400 hover:text-amber-300 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                    your.email@example.com
                  </a>
                  <a href="https://github.com" className="flex items-center gap-3 text-amber-400 hover:text-amber-300 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                    github.com/yourprofile
                  </a>
                  <a href="https://linkedin.com" className="flex items-center gap-3 text-amber-400 hover:text-amber-300 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                    linkedin.com/in/yourprofile
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.section>
        </main>

        {/* Footer */}
        <motion.footer
          className="relative z-10 backdrop-blur-xl bg-slate-950/80 border-t border-slate-800 mt-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-6 py-8 text-center text-slate-500 text-sm">
            <p>&copy; 2025 Juan Rayhan. Crafted with performance in mind.</p>
            <p className="mt-2">Try pressing <kbd className="px-2 py-1 rounded bg-slate-800 text-slate-300 text-xs">CMD+K</kbd> to navigate</p>
          </div>
        </motion.footer>
      </motion.div>
    </>
  )
}

