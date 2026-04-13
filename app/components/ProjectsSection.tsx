// app/components/ProjectsSection.tsx
import { Suspense } from "react"
import { ProjectCard } from "./ProjectCard"
import { Skeleton } from "@/components/ui/skeleton"

interface ProjectData {
  title: string
  description: string
  heroUrl: string
}

// Server component for fetching projects
async function ProjectsList() {
  // Simulate data fetching with a small delay to demonstrate Suspense
  await new Promise(resolve => setTimeout(resolve, 300))

  const projects: ProjectData[] = [
    {
      title: "Merchant Apps Pertamina Subsidy",
      description: "A high-growth digital platform designed to streamline product and customer management while enhancing the sales process through advanced technology. It gained over 257,958 active users in its first year.",
      heroUrl: "/assets/hero/hero-map.webp"
    },
    {
      title: "QRen Project",
      description: "QR-based smart business and smart city solution for digital transactions, parking payments, market levies, e-ticketing, and billing payments.",
      heroUrl: "/assets/hero/hero-qr.webp"
    },
    {
      title: "Geisa SIAPDA",
      description: "School management system designed to streamline data management for teachers, students, and learning resources.",
      heroUrl: "/assets/hero/hero-si.webp"
    },
    {
      title: "Geisa Online Present",
      description: "Online employee CICO system with geolocation (latitude, longitude) and facial capture, generating monthly data summaries.",
      heroUrl: "/assets/hero/hero-cico.webp"
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          description={project.description}
          heroUrl={project.heroUrl}
        />
      ))}
    </div>
  )
}

// Loading skeleton
function ProjectsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {Array.from({ length: 4 }).map((_, i) => (
        <div key={i} className="rounded-2xl overflow-hidden border border-slate-700">
          <Skeleton className="w-full h-48 bg-slate-800" />
          <div className="p-6 space-y-3">
            <Skeleton className="h-6 bg-slate-800 w-3/4" />
            <Skeleton className="h-4 bg-slate-800 w-full" />
            <Skeleton className="h-4 bg-slate-800 w-2/3" />
          </div>
        </div>
      ))}
    </div>
  )
}

export function ProjectsSection() {
  return (
    <Suspense fallback={<ProjectsSkeleton />}>
      <ProjectsList />
    </Suspense>
  )
}
