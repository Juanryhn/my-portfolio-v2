// app/components/ProjectCard.tsx
'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  heroUrl: string
  slug?: string
}

export function ProjectCard({ 
  title, 
  description, 
  heroUrl 
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative rounded-2xl overflow-hidden border border-slate-700 hover:border-amber-500/50 transition-all duration-300 bg-slate-900 h-full"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={heroUrl}
          alt={title}
          width={500}
          height={300}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">{title}</h3>
        <p className="text-sm text-slate-400 line-clamp-3 mb-4">{description}</p>

        {/* CTA */}
        <motion.button
          whileHover={{ x: 4 }}
          className="inline-flex items-center gap-2 text-amber-400 font-medium text-sm hover:text-amber-300 transition-colors"
        >
          View Details
          <ExternalLink className="w-4 h-4" />
        </motion.button>
      </div>

      {/* Hover glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute top-0 left-0 w-40 h-40 bg-amber-500/20 blur-3xl rounded-full pointer-events-none -z-10 group-hover:animate-pulse"
      />
    </motion.div>
  )
}
