"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useTheme } from "./contexts/ThemeContext"
import { Moon, Sun, Award, Code2, Database, Server, Cloud, GitBranch, Menu, X, ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import SplashScreen from "./components/SplashScreen"

export default function Home() {
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [isLoading, setIsLoading] = useState(true)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "skills", "certifications"]
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
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  const certifications = [
    { name: "Frontend Developer (React)", issuer: "HackerRank", year: 2025 },
    { name: "Google Cybersecurity", issuer: "Google - Coursera", year: 2024 },
    { name: "Android Development Associate", issuer: "Logical Operations", year: 2022 },
    { name: "Project Management Associate", issuer: "Logical Operations", year: 2022 },
    { name: "Scrum Foundational Professional Certificate (SFPC)", issuer: "Certiprof", year: 2023 },
    { name: "TOEFL (score 563)", issuer: "PT SARANA TUNAS MANDIRI", year: 2022 },
  ]

  const skills = [
    { name: "React", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "TypeScript", category: "Language" },
    { name: "JavaScript", category: "Language" },
    { name: "PHP", category: "Language" },
    { name: "Python", category: "Language" },
    { name: "Node.js", category: "Backend" },
    { name: "Git", category: "Tools" },
    { name: "Docker", category: "DevOps" },
    { name: "GCP", category: "Cloud" },
    { name: "UI/UX", category: "Design" },
    { name: "Testing", category: "QA" },
  ];

  const projects = [
    {
      title: "Merchant Apps Pertamina Subsidy",
      description: "High-growth digital platform streamlining product and customer management. Achieved 257,958+ active users in first year with advanced sales process technology.",
      tags: ["React", "Next.js", "TypeScript", "GCP"],
      heroUrl: "/assets/hero/hero-map.webp",
      impact: "257k+ Active Users"
    },
    {
      title: "QRen Project",
      description: "QR-based smart business solution for digital transactions including parking, e-ticketing, and billing with comprehensive admin tools for verification.",
      tags: ["React", "Node.js", "MongoDB", "Payment Integration"],
      heroUrl: "/assets/hero/hero-qr.webp",
      impact: "Multi-City Deployment"
    },
    {
      title: "SIAPDA School Management",
      description: "Comprehensive school management system streamlining teacher, student, and learning resource data across educational institutions.",
      tags: ["React", "TypeScript", "PostgreSQL", "REST API"],
      heroUrl: "/assets/hero/hero-si.webp",
      impact: "City-Wide Adoption"
    },
    {
      title: "Geisa Online Presence",
      description: "Employee check-in/out system with geolocation and facial capture, generating comprehensive monthly data summaries and reports.",
      tags: ["React", "Node.js", "WebRTC", "GIS"],
      heroUrl: "/assets/hero/hero-cico.webp",
      impact: "Enterprise Solution"
    },
    {
      title: "SIMRASIO Platform",
      description: "Regional school management system with region-specific data management for teachers, students, and educational resources.",
      tags: ["React", "Firebase", "Real-time DB", "Analytics"],
      heroUrl: "/assets/hero/hero-si.webp",
      impact: "Regional Scale"
    },
    {
      title: "Sarang IT Community",
      description: "Collaborative platform for sharing programming insights, tech updates, and industry trends to enhance team knowledge and development.",
      tags: ["React", "Node.js", "Real-time Chat", "Community"],
      heroUrl: "/assets/hero/hero-sit.webp",
      impact: "Active Community"
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <>
      <AnimatePresence>{isLoading && <SplashScreen />}</AnimatePresence>
      <div className="min-h-screen bg-background text-foreground">
        {/* Header */}
        <motion.header
          className="sticky top-0 z-50 glass-effect"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <nav className="container mx-auto px-4 py-4 md:py-6">
            <div className="flex justify-between items-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2"
              >
                <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold gradient-text">Juan Rayhan</span>
              </motion.div>

              <div className="flex items-center space-x-2">
                <ul className="hidden lg:flex space-x-8">
                  {["about", "projects", "skills", "certifications"].map((item) => (
                    <motion.li key={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <a
                        href={`#${item}`}
                        className={`text-sm font-medium transition-colors ${
                          activeSection === item
                            ? "text-foreground font-bold"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                      </a>
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleTheme}
                  className="p-2 rounded-lg hover:bg-card transition-colors"
                >
                  {theme === "light" ? (
                    <Moon className="w-5 h-5" />
                  ) : (
                    <Sun className="w-5 h-5" />
                  )}
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleMenu}
                  className="lg:hidden p-2 rounded-lg hover:bg-card transition-colors"
                >
                  {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </motion.button>
              </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  className="lg:hidden mt-4 py-4 border-t border-border"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ul className="flex flex-col space-y-3">
                    {["about", "projects", "skills", "certifications"].map((item) => (
                      <motion.li key={item} whileHover={{ x: 4 }}>
                        <a
                          href={`#${item}`}
                          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                          onClick={toggleMenu}
                        >
                          {item.charAt(0).toUpperCase() + item.slice(1)}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>
        </motion.header>

        <main className="container mx-auto px-4 py-20">
          {/* Hero Section */}
          <motion.section
            id="hero"
            className="min-h-[60vh] flex flex-col justify-center mb-32"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <motion.span
                  className="inline-block px-4 py-2 rounded-full bg-gray-200 text-gray-700 text-sm font-medium mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  Welcome to my digital space
                </motion.span>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                  Full Stack Developer <br />
                  <span className="gradient-text">Crafting Digital Experiences</span>
                </h1>
              </div>

              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                I build modern web applications with React, Next.js, and TypeScript. Passionate about creating scalable solutions that solve real-world problems and deliver exceptional user experiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a href="#projects">
                    <Button className="bg-gray-800 text-white hover:bg-gray-900 px-8 py-6 text-lg gap-2">
                      Explore My Work
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </a>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" className="px-8 py-6 text-lg gap-2">
                    <Mail className="w-5 h-5" />
                    Get in Touch
                  </Button>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-8">
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 rounded-lg bg-card hover:bg-card/80 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 rounded-lg bg-card hover:bg-card/80 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="mailto:hello@example.com"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-3 rounded-lg bg-card hover:bg-card/80 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </motion.section>

          {/* About Section */}
          <motion.section
            id="about"
            className="mb-32 scroll-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12">About Me</h2>
            <motion.div
              className="glass-effect rounded-xl p-8 md:p-12"
              variants={itemVariants}
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I&apos;m a passionate Full Stack Developer with 5+ years of experience building scalable web applications. My expertise spans frontend development with React and Next.js, combined with solid backend knowledge using Node.js and modern databases.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I&apos;ve had the privilege of working on high-impact projects that served hundreds of thousands of users. I believe in writing clean, maintainable code and creating intuitive user interfaces that solve real problems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
              </p>
            </motion.div>
          </motion.section>

          {/* Projects Section */}
          <motion.section
            id="projects"
            className="mb-32 scroll-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Featured Projects</h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={containerVariants}
            >
              {projects.map((project, idx) => (
                <motion.div
                  key={idx}
                  className="glass-effect rounded-xl overflow-hidden group card-hover"
                  variants={itemVariants}
                >
                  <div className="relative h-64 overflow-hidden bg-card">
                    <Image
                      src={project.heroUrl}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="p-6 md:p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <span className="px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-sm font-medium">
                        {project.impact}
                      </span>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-lg bg-gray-200 text-xs font-medium text-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <motion.div whileHover={{ x: 4 }}>
                      <Button variant="ghost" className="gap-2 text-foreground hover:bg-gray-200">
                        View Case Study
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Skills Section */}
          <motion.section
            id="skills"
            className="mb-32 scroll-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Technical Skills</h2>
            <motion.div className="glass-effect rounded-xl p-8 md:p-12" variants={itemVariants}>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    className="p-4 rounded-lg bg-card hover:bg-card/80 border border-border transition-colors group cursor-pointer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    variants={itemVariants}
                  >
                    <p className="font-semibold text-foreground">{skill.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{skill.category}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.section>

          {/* Certifications Section */}
          <motion.section
            id="certifications"
            className="mb-32 scroll-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Certifications & Awards</h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
            >
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  className="glass-effect rounded-xl p-6 border border-border group card-hover"
                  variants={itemVariants}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gray-200 group-hover:bg-gray-300 transition-colors">
                      <Award className="w-6 h-6 text-gray-800" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-1">{cert.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                      <span className="inline-block px-3 py-1 rounded-full bg-gray-200 text-gray-700 text-xs font-medium">
                        {cert.year}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            className="mb-32"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="glass-effect rounded-xl p-12 md:p-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Work Together?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                I&apos;m always interested in hearing about new projects and opportunities.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gray-800 text-white hover:bg-gray-900 px-8 py-6 text-lg">
                  Get in Touch
                </Button>
              </motion.div>
            </div>
          </motion.section>
        </main>

        {/* Footer */}
        <motion.footer
          className="glass-effect border-t border-border py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-muted-foreground text-sm">
                © 2025 Juan Rayhan. All rights reserved.
              </p>
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  GitHub
                </motion.a>
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  LinkedIn
                </motion.a>
                <motion.a
                  href="mailto:hello@example.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  Email
                </motion.a>
              </div>
            </div>
          </div>
        </motion.footer>
      </div>
    </>
  )
}

