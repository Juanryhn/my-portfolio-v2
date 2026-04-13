"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import HeroSection from "@/components/HeroSection"
import CareerTimeline from "@/components/CareerTimeline"
import InteractiveStack from "@/components/InteractiveStack"
import { Award, Menu, X } from "lucide-react"
import SplashScreen from "./components/SplashScreen"
import Image from "next/image"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [isLoading, setIsLoading] = useState(true)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "stack", "timeline", "projects", "certifications", "contact"]
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

  const careerTimeline = [
    {
      year: "2014-2019",
      title: "Junior Developer",
      company: "ISH",
      description: "Launched my software development career building foundational skills in web technologies and backend systems.",
      highlights: [
        "Built first production applications",
        "Learned core web development principles",
        "Contributed to team projects"
      ]
    },
    {
      year: "2019-2022",
      title: "Frontend Developer",
      company: "Code ID",
      description: "Transitioned focus to modern frontend development, specializing in React and component-based architecture.",
      highlights: [
        "Developed React applications with thousands of users",
        "Implemented responsive designs and animations",
        "Contributed to UI/UX improvements"
      ]
    },
    {
      year: "2022-2024",
      title: "Senior Frontend Engineer",
      company: "Code ID",
      description: "Advanced to senior role, leading frontend teams and architecting large-scale applications.",
      highlights: [
        "Led Merchant Apps Pertamina project (250K+ users)",
        "Mentored junior developers",
        "Architected scalable component systems"
      ]
    },
    {
      year: "2024-Present",
      title: "Tech Lead",
      company: "Code ID",
      description: "Currently leading technical initiatives, driving innovation and overseeing platform architecture.",
      highlights: [
        "Lead technical strategy and decisions",
        "Oversee multiple high-impact projects",
        "Drive performance optimization initiatives"
      ]
    }
  ]

  const techStack = [
    { name: "React", category: "frontend" as const, icon: "⚛️", description: "Modern UI library for building interactive components", proficiency: 98 },
    { name: "Next.js", category: "frontend" as const, icon: "▲", description: "Full-stack React framework with SSR and SSG capabilities", proficiency: 95 },
    { name: "TypeScript", category: "languages" as const, icon: "📘", description: "Typed superset of JavaScript for safer development", proficiency: 92 },
    { name: "JavaScript", category: "languages" as const, icon: "📙", description: "Core language for web development", proficiency: 98 },
    { name: "Tailwind CSS", category: "frontend" as const, icon: "🎨", description: "Utility-first CSS framework for rapid UI development", proficiency: 95 },
    { name: "Redux", category: "tools" as const, icon: "🔄", description: "Predictable state management for complex applications", proficiency: 85 },
    { name: "Node.js", category: "backend" as const, icon: "🟢", description: "JavaScript runtime for server-side development", proficiency: 88 },
    { name: "Java", category: "languages" as const, icon: "☕", description: "Enterprise backend development and system architecture", proficiency: 80 },
    { name: "PHP", category: "backend" as const, icon: "🐘", description: "Server-side scripting language for web applications", proficiency: 80 },
    { name: "Python", category: "languages" as const, icon: "🐍", description: "Versatile language for various development needs", proficiency: 75 },
    { name: "PostgreSQL", category: "backend" as const, icon: "🗄️", description: "Robust relational database for production systems", proficiency: 85 },
    { name: "Docker", category: "tools" as const, icon: "🐳", description: "Containerization for consistent deployment", proficiency: 80 },
    { name: "Git", category: "tools" as const, icon: "📦", description: "Version control system for collaborative development", proficiency: 95 },
    { name: "GCP", category: "tools" as const, icon: "☁️", description: "Google Cloud Platform for deployment and services", proficiency: 82 },
  ]

  const certifications = [
    { name: "Frontend Developer (React)", issuer: "HackerRank", year: 2025 },
    { name: "Google Cybersecurity", issuer: "Google - Coursera", year: 2024 },
    { name: "Android Development Associate", issuer: "Logical Operations", year: 2022 },
    { name: "Project Management Associate", issuer: "Logical Operations", year: 2022 },
    { name: "Scrum Foundational Professional Certificate (SFPC)", issuer: "Certiprof", year: 2023 },
    { name: "TOEFL (score 563)", issuer: "PT SARANA TUNAS MANDIRI", year: 2022 },
  ]

  const projects = [
    {
      title: 'Merchant Apps Pertamina Subsidy',
      description: 'A high-growth digital platform designed to streamline product and customer management while enhancing the sales process through advanced technology. It gained over 257,958 active users in its first year, demonstrating strong adoption.',
      heroUrl: '/assets/hero/hero-map.webp'
    },
    {
      title: 'QRen Project',
      description: 'QRen is a QR-based smart business and smart city solution that enhances digital transactions, including parking payments, market levies, e-ticketing, and billing payments.',
      heroUrl: '/assets/hero/hero-qr.webp'
    },
    {
      title: 'Geisa SIAPDA',
      description: 'SIAPDA is a school management system designed to streamline data management for teachers, students, and learning resources.',
      heroUrl: '/assets/hero/hero-si.webp'
    },
    {
      title: 'Geisa Online Present',
      description: 'An online employee CICO system that logs check-ins/outs with geolocation and facial capture, generating monthly data summaries.',
      heroUrl: '/assets/hero/hero-cico.webp'
    },
    {
      title: 'SIMRASIO',
      description: 'A school management system designed to streamline data management for teachers, students, and learning resources across regions.',
      heroUrl: '/assets/hero/hero-si.webp'
    },
    {
      title: 'Sarang IT',
      description: 'A collaborative platform where teams share insights on programming, tech updates, and industry trends to enhance knowledge and skill development.',
      heroUrl: '/assets/hero/hero-sit.webp'
    },
  ]

  return (
    <>
      <AnimatePresence>{isLoading && <SplashScreen />}</AnimatePresence>
      <motion.div
        className="min-h-screen bg-parchment-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header/Navigation */}
        <motion.header
          className="sticky top-0 z-50 bg-parchment-50 border-b border-parchment-300"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <nav className="editorial-container py-4 md:py-6">
            <div className="flex justify-between items-center">
              <motion.h1
                className="text-2xl md:text-3xl font-serif font-semibold text-navy-800"
                whileHover={{ scale: 1.02 }}
              >
                Juan Rayhan
              </motion.h1>
              
              <div className="flex items-center gap-4">
                {/* Desktop Navigation */}
                <ul className="hidden md:flex gap-8">
                  {[
                    { label: "Tech Stack", id: "stack" },
                    { label: "Career", id: "timeline" },
                    { label: "Projects", id: "projects" },
                    { label: "Certifications", id: "certifications" },
                    { label: "About", id: "about" },
                  ].map((item) => (
                    <motion.li key={item.id} whileHover={{ scale: 1.05 }}>
                      <a
                        href={`#${item.id}`}
                        className={`font-medium transition-colors ${
                          activeSection === item.id
                            ? "text-emerald-600"
                            : "text-navy-700 hover:text-emerald-600"
                        }`}
                      >
                        {item.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>

                {/* Mobile Menu Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleMenu}
                  className="md:hidden p-2"
                >
                  {isMenuOpen ? (
                    <X className="w-6 h-6 text-navy-800" />
                  ) : (
                    <Menu className="w-6 h-6 text-navy-800" />
                  )}
                </motion.button>
              </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  className="md:hidden mt-4 pb-4"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <ul className="space-y-3">
                    {[
                      { label: "Tech Stack", id: "stack" },
                      { label: "Career", id: "timeline" },
                      { label: "Projects", id: "projects" },
                      { label: "Certifications", id: "certifications" },
                      { label: "About", id: "about" },
                    ].map((item) => (
                      <motion.li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className="block font-medium text-navy-700 hover:text-emerald-600 transition-colors"
                          onClick={toggleMenu}
                        >
                          {item.label}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>
        </motion.header>

        <main className="min-h-screen">
          {/* Hero Section */}
          <section id="hero">
            <HeroSection
              title="Editorial Design Meets Code"
              subtitle="Welcome to my portfolio"
              description="Full-stack engineer with expertise in React, Next.js, and TypeScript. Passionate about building beautiful, performant digital experiences. Journey from ISH to Code ID, delivering 250K+ user platforms and innovative solutions."
              ctaText="Explore My Work"
              ctaHref="#projects"
              secondaryCTAText="View My Career"
              secondaryCTAHref="#timeline"
              showScrollIndicator={true}
            />
          </section>

          {/* Tech Stack Section */}
          <section id="stack">
            <InteractiveStack skills={techStack} />
          </section>

          {/* Career Timeline */}
          <section id="timeline" className="section-padding bg-white">
            <div className="editorial-container">
              <CareerTimeline items={careerTimeline} />
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="section-padding bg-parchment-50">
            <div className="editorial-container">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="display-md font-serif font-light text-navy-800 mb-4">
                  Featured Projects
                </h2>
                <p className="body-lg text-navy-700 max-w-2xl mb-16">
                  Showcasing the digital products and platforms I've built, each delivering meaningful impact and user value.
                </p>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {projects.map((project, idx) => (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    whileHover={{ y: -8 }}
                    className="group cursor-pointer"
                  >
                    <div className="bg-white rounded-lg overflow-hidden border border-parchment-200 shadow-sm hover:shadow-lg transition-all">
                      <div className="relative h-48 overflow-hidden bg-parchment-200">
                        <Image
                          src={project.heroUrl}
                          alt={project.title}
                          width={400}
                          height={200}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-serif font-semibold text-navy-800 mb-3">
                          {project.title}
                        </h3>
                        <p className="text-navy-700 text-sm leading-relaxed mb-4">
                          {project.description}
                        </p>
                        <motion.button
                          whileHover={{ x: 4 }}
                          className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
                        >
                          Learn More →
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Certifications Section */}
          <section id="certifications" className="section-padding bg-white">
            <div className="editorial-container">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="display-md font-serif font-light text-navy-800 mb-4">
                  Certifications & Achievements
                </h2>
                <p className="body-lg text-navy-700 max-w-2xl">
                  Professional credentials demonstrating expertise and commitment to continuous learning.
                </p>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.08,
                    },
                  },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, scale: 0.9 },
                      visible: { opacity: 1, scale: 1 },
                    }}
                    whileHover={{ y: -4 }}
                    className="p-6 bg-parchment-50 rounded-lg border border-parchment-200 hover:shadow-md transition-all"
                  >
                    <Award className="w-8 h-8 text-emerald-600 mb-4" />
                    <h3 className="font-serif font-semibold text-navy-800 mb-2">
                      {cert.name}
                    </h3>
                    <p className="text-emerald-600 text-sm font-medium mb-2">
                      {cert.issuer}
                    </p>
                    <p className="text-navy-600 text-xs">
                      Obtained in {cert.year}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="section-padding bg-parchment-50">
            <div className="editorial-container">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="display-md font-serif font-light text-navy-800 mb-8">
                  About Me
                </h2>
                <div className="max-w-3xl space-y-6">
                  <p className="body-lg text-navy-700">
                    A passionate Frontend Developer with a strong foundation in ReactJS, NextJS, and TypeScript. I have a proven track record of delivering scalable web applications and enhancing user experiences across multiple projects.
                  </p>
                  <p className="body-lg text-navy-700">
                    My journey spans from contributing to high-impact apps with over 250,000 active users to architecting comprehensive educational and operational platforms. Experienced in cloud deployment with GCP, containerization with Docker, and continuous integration with Jenkins.
                  </p>
                  <p className="body-lg text-navy-700">
                    I'm driven by solving complex problems through elegant design and clean code. When I'm not building digital products, I'm exploring new technologies and mentoring junior developers in my team.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <motion.footer
          className="border-t border-parchment-300 bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="editorial-container py-8 md:py-12">
            <div className="text-center text-navy-700">
              <p className="font-medium mb-2">Juan Rayhan</p>
              <p className="text-sm text-navy-600">
                © 2024 All rights reserved. Crafted with care and code.
              </p>
            </div>
          </div>
        </motion.footer>
      </motion.div>
    </>
  )
}

