"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Code, ExternalLink, ChevronRight } from "lucide-react"
import { Input } from "@/components/ui/input"

interface Command {
  id: string
  label: string
  category: "navigation" | "action" | "project"
  icon: React.ReactNode
  action?: () => void
  href?: string
}

const commands: Command[] = [
  // Navigation
  { 
    id: "hero", 
    label: "Hero Section", 
    category: "navigation", 
    icon: <Code className="w-4 h-4" />,
    action: () => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })
  },
  { 
    id: "projects", 
    label: "View Projects", 
    category: "navigation", 
    icon: <Code className="w-4 h-4" />,
    action: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  },
  { 
    id: "skills", 
    label: "My Skills", 
    category: "navigation", 
    icon: <Code className="w-4 h-4" />,
    action: () => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })
  },
  { 
    id: "contact", 
    label: "Contact Me", 
    category: "navigation", 
    icon: <Code className="w-4 h-4" />,
    action: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  },
  // Projects
  { 
    id: "lpg", 
    label: "Subsidi Tepat LPG Project", 
    category: "project", 
    icon: <ExternalLink className="w-4 h-4" />
  },
  { 
    id: "qren", 
    label: "QRen Solution", 
    category: "project", 
    icon: <ExternalLink className="w-4 h-4" />
  },
  // Actions
  { 
    id: "resume", 
    label: "Download Resume", 
    category: "action", 
    icon: <ExternalLink className="w-4 h-4" />
  },
]

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(0)

  const filtered = commands.filter(cmd => 
    cmd.label.toLowerCase().includes(search.toLowerCase()) ||
    cmd.category.includes(search.toLowerCase())
  )

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setIsOpen((prev) => !prev)
        setSearch("")
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const handleSelect = useCallback((command: Command) => {
    command.action?.()
    setIsOpen(false)
    setSearch("")
  }, [])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        setSelectedIndex((prev) => (prev + 1) % filtered.length)
        break
      case "ArrowUp":
        e.preventDefault()
        setSelectedIndex((prev) => (prev - 1 + filtered.length) % filtered.length)
        break
      case "Enter":
        e.preventDefault()
        if (filtered[selectedIndex]) {
          handleSelect(filtered[selectedIndex])
        }
        break
      case "Escape":
        setIsOpen(false)
        break
    }
  }

  return (
    <>
      {/* CMD+K Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 right-4 z-40 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 text-sm hover:border-amber-500 hover:text-amber-400 transition-all duration-300 flex items-center gap-2 group"
      >
        <Search className="w-4 h-4" />
        <span className="hidden sm:inline">CMD</span>
        <kbd className="hidden sm:inline font-semibold">K</kbd>
      </button>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Command Palette */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-x-4 top-24 z-50 max-w-2xl mx-auto"
          >
            <div className="rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden">
              {/* Input */}
              <div className="relative border-b border-slate-700 p-4">
                <Search className="absolute left-6 top-6 w-5 h-5 text-amber-500" />
                <Input
                  autoFocus
                  placeholder="Search commands..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value)
                    setSelectedIndex(0)
                  }}
                  onKeyDown={handleKeyDown}
                  className="pl-12 bg-slate-900 border-0 text-white placeholder-slate-600 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>

              {/* Results */}
              <div className="max-h-96 overflow-y-auto">
                {filtered.length === 0 ? (
                  <div className="p-8 text-center text-slate-500">
                    No commands found.
                  </div>
                ) : (
                  filtered.map((command, index) => (
                    <motion.button
                      key={command.id}
                      onClick={() => handleSelect(command)}
                      onMouseEnter={() => setSelectedIndex(index)}
                      whileHover={{ x: 4 }}
                      className={`w-full px-4 py-3 flex items-center justify-between transition-colors ${
                        index === selectedIndex
                          ? "bg-amber-500/10 border-l-2 border-amber-500"
                          : "hover:bg-slate-800"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`text-lg ${index === selectedIndex ? "text-amber-500" : "text-slate-600"}`}>
                          {command.icon}
                        </div>
                        <div className="text-left">
                          <p className="font-medium text-white">{command.label}</p>
                          <p className="text-xs text-slate-600 capitalize">{command.category}</p>
                        </div>
                      </div>
                      {index === selectedIndex && (
                        <ChevronRight className="w-4 h-4 text-amber-500" />
                      )}
                    </motion.button>
                  ))
                )}
              </div>

              {/* Footer */}
              <div className="border-t border-slate-700 px-4 py-3 bg-slate-950 flex items-center justify-between text-xs text-slate-600">
                <div className="flex gap-4">
                  <span>↑↓ to navigate</span>
                  <span>Enter to select</span>
                  <span>Esc to close</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
