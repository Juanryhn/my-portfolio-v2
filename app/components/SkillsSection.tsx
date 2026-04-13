// app/components/SkillsSection.tsx
import { Suspense } from "react"
import { SkillProgressGrid } from "@/components/SkillProgress"
import { Skeleton } from "@/components/ui/skeleton"

interface Skill {
  name: string
  proficiency: number
  category: "frontend" | "backend" | "devops"
}

async function SkillsList() {
  // Simulate data fetching
  await new Promise(resolve => setTimeout(resolve, 200))

  const skills: Skill[] = [
    // Frontend
    { name: "React", proficiency: 95, category: "frontend" },
    { name: "TypeScript", proficiency: 92, category: "frontend" },
    { name: "Tailwind CSS", proficiency: 93, category: "frontend" },
    { name: "Next.js", proficiency: 90, category: "frontend" },
    
    // Backend
    { name: "Node.js", proficiency: 88, category: "backend" },
    { name: "PHP", proficiency: 85, category: "backend" },
    { name: "Python", proficiency: 82, category: "backend" },
    { name: "PostgreSQL", proficiency: 87, category: "backend" },
    
    // DevOps
    { name: "Docker", proficiency: 80, category: "devops" },
    { name: "Git", proficiency: 94, category: "devops" },
    { name: "CI/CD Pipelines", proficiency: 78, category: "devops" },
  ]

  return <SkillProgressGrid skills={skills} />
}

function SkillsSkeleton() {
  return (
    <div className="space-y-8">
      {["Frontend", "Backend", "DevOps"].map((category) => (
        <div key={category}>
          <Skeleton className="h-8 w-40 mb-4 bg-slate-800" />
          <div className="space-y-6">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i}>
                <Skeleton className="h-4 w-32 mb-3 bg-slate-800" />
                <Skeleton className="h-2 w-full bg-slate-800" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export function SkillsSection() {
  return (
    <Suspense fallback={<SkillsSkeleton />}>
      <SkillsList />
    </Suspense>
  )
}
