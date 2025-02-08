"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useTheme } from "./contexts/ThemeContext"
import { Moon, Sun, Award, Code, Database, Server, Cloud, GitBranch, Menu, X } from "lucide-react"
import SplashScreen from "./components/SplashScreen"

export default function Home() {
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [isLoading, setIsLoading] = useState(true)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

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
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500) // Adjust this value to control how long the splash screen appears

    return () => clearTimeout(timer)
  }, [])

  const certifications = [
    { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", year: 2023 },
    { name: "Google Professional Cloud Architect", issuer: "Google Cloud", year: 2022 },
    { name: "Microsoft Certified: Azure Solutions Architect Expert", issuer: "Microsoft", year: 2021 },
  ]

  const skills = [
    { name: "React", icon: <Code className="w-6 h-6" /> },
    { name: "Node.js", icon: <Server className="w-6 h-6" /> },
    { name: "Python", icon: <Code className="w-6 h-6" /> },
    { name: "AWS", icon: <Cloud className="w-6 h-6" /> },
    { name: "Docker", icon: <Database className="w-6 h-6" /> },
    { name: "Git", icon: <GitBranch className="w-6 h-6" /> },
  ]

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <>
      <AnimatePresence>{isLoading && <SplashScreen />}</AnimatePresence>
      <motion.div
        className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 dark:from-gray-800 dark:via-gray-900 dark:to-black transition-colors duration-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.header
          className="sticky top-0 z-10 backdrop-blur-md bg-white/30 dark:bg-gray-900/30 shadow-lg"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <nav className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <motion.h1
                className="text-2xl font-bold text-gray-800 dark:text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Juan Rayhan
              </motion.h1>
              <div className="flex items-center space-x-4">
                <ul className="hidden md:flex space-x-4">
                  {["about", "projects", "certifications", "skills", "contact"].map((item) => (
                    <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <a
                        href={`#${item}`}
                        className={`text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${activeSection === item ? "text-blue-600 dark:text-blue-400" : ""}`}
                      >
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                      </a>
                    </motion.li>
                  ))}
                </ul>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Button onClick={toggleTheme} variant="ghost" size="icon" className="bg-transparent">
                    {theme === "light" ? (
                      <Moon className="h-[1.2rem] w-[1.2rem] stroke-black" />
                    ) : (
                      <Sun className="h-[1.2rem] w-[1.2rem]" />
                    )}
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="md:hidden">
                  <Button onClick={toggleMenu} variant="ghost" size="icon" className="bg-transparent">
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </Button>
                </motion.div>
              </div>
            </div>
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  className="md:hidden mt-4"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ul className="flex flex-col space-y-2">
                    {["about", "projects", "certifications", "skills", "contact"].map((item) => (
                      <motion.li key={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <a
                          href={`#${item}`}
                          className={`block py-2 text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${activeSection === item ? "text-blue-600 dark:text-blue-400" : ""}`}
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

        <main className="container mx-auto px-4">
          <motion.section
            id="hero"
            className="py-20 text-center"
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
          >
            <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">Welcome to My Creative World</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              I'm a passionate developer crafting beautiful digital experiences
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700">
                Explore My Work
              </Button>
            </motion.div>
          </motion.section>

          <motion.section
            id="about"
            className="py-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUpVariants}
          >
            <div className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">About Me</h2>
              <p className="text-gray-600 dark:text-gray-300">
                I'm a creative developer with a passion for building beautiful and functional websites. With expertise
                in modern web technologies, I bring ideas to life through code.
              </p>
            </div>
          </motion.section>
          <motion.section
            id="projects"
            className="py-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((project) => (
                <motion.div
                  key={project}
                  className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 rounded-lg overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                >
                  <Image
                    src={`/placeholder.svg?text=Project+${project}`}
                    alt={`Project ${project}`}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Project {project}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      A brief description of the project and its key features.
                    </p>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        variant="outline"
                        className="text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900"
                      >
                        View Project
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="certifications"
            className="py-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 rounded-lg p-6 shadow-lg"
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                >
                  <Award className="w-12 h-12 text-blue-500 dark:text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{cert.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{cert.issuer}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">Obtained in {cert.year}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="skills"
            className="py-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUpVariants}
          >
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">Skills</h2>
            <div className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 rounded-lg p-8 shadow-lg">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center justify-center p-4 backdrop-blur-md bg-white/20 dark:bg-gray-700/20 rounded-lg"
                    whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                  >
                    <motion.div
                      className="text-blue-500 dark:text-blue-400 mb-2"
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
                    >
                      {skill.icon}
                    </motion.div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section
            id="contact"
            className="py-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUpVariants}
          >
            <div className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Get in Touch</h2>
              <form className="space-y-4">
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="bg-white/50 dark:bg-gray-700/50 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-white/50 dark:bg-gray-700/50 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
                <Textarea
                  placeholder="Your Message"
                  className="bg-white/50 dark:bg-gray-700/50 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    type="submit"
                    className="bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
                  >
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.section>
        </main>

        <motion.footer
          className="backdrop-blur-md bg-white/30 dark:bg-gray-900/30 text-gray-800 dark:text-white text-center py-4 mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>&copy; 2025 Juan Rayhan. All rights reserved.</p>
        </motion.footer>
      </motion.div>
    </>
  )
}

