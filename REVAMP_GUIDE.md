# Portfolio Revamp v3.2 - High-Performance Dashboard Guide

## 🎨 Color System: Slate & Amber

### HEX Codes (Tailwind Config)
```
Slate/Zinc Backgrounds:
- #09090b (slate-950)  - Primary dark background
- #18181b (slate-900)  - Secondary background / cards
- #27272a (slate-800)  - Card tertiary backgrounds
- #3f3f46 (slate-700)  - Borders
- #52525b (slate-600)  - Muted text

Amber Accents (Warm):
- #fbbf24 (amber-400)  - Bright highlights & CTAs
- #f59e0b (amber-500)  - Primary accent (default)
- #d97706 (amber-600)  - Hover states
- #78350f (amber-950)  - Dark amber supports
```

### Applied In
- **app/tailwind.config.js** - Extended color palette
- **components/ui/** - Updated all components with Slate/Amber
- **app/page.tsx** - Hero uses gradient text with amber highlights

---

## ✨ Creative Hooks Implemented

### 1. CMD+K Command Palette
**File:** `components/CommandPalette.tsx`

**Features:**
- Press `Cmd+K` (or `Ctrl+K` on Windows) to open
- Search navigation, projects, and actions
- Smooth animations with Framer Motion
- Arrow key navigation + Enter to select
- Categories: navigation, project, action

**Usage in page.tsx:**
```tsx
import { CommandPalette } from "@/components/CommandPalette"

<CommandPalette />  // Add to root component
```

### 2. Custom Cursor Effect
**File:** `components/CustomCursor.tsx`

**Features:**
- Amber glowing cursor with trailing circle
- Smooth lerp animation for elegant follow
- Hides default browser cursor
- Respects prefers-reduced-motion
- Box shadow glow effect

**Technical Details:**
- Inner dot: immediate response (direct position)
- Outer circle: smooth trailing effect (lerped)
- Mix-blend-mode: screen (for glow effect)

---

## 🚀 Modernity: React Server Components + Suspense

### Architecture Overview
```
page.tsx (Client Component)
├── Suspense + ProjectsSection (Async)
│   ├── ProjectsList (Server Component)
│   └── ProjectsSkeleton (Loading fallback)
├── Suspense + SkillsSection (Async)
│   ├── SkillsList (Server Component)
│   └── SkillsSkeleton (Loading fallback)
└── LPGProjectMetrics (Client - instant render)
```

### Server Component Pattern
**File:** `app/components/ProjectsSection.tsx`

```tsx
// Server component with async data fetching
async function ProjectsList() {
  await new Promise(resolve => setTimeout(resolve, 300))
  const projects = [...]
  return <div>{/**projects*/}</div>
}

// Client wrapper with Suspense fallback
export function ProjectsSection() {
  return (
    <Suspense fallback={<ProjectsSkeleton />}>
      <ProjectsList />
    </Suspense>
  )
}
```

**Benefits:**
- Streaming UI immediately
- Skeleton loaders show while data loads
- Faster perceived performance
- Database queries on server (when connected)

### Files Implementing RSC + Suspense
1. **app/components/ProjectsSection.tsx** - Async project fetching
2. **app/components/SkillsSection.tsx** - Async skill loading
3. **app/page.tsx** - Orchestrates with `<Suspense>` boundaries

---

## 📊 Key Metrics Component

### Purpose
Showcase the national scale of "Subsidi Tepat LPG" project alongside technical metrics.

### File
`components/KeyMetrics.tsx`

### Features
- Animated gradient backgrounds (looping)
- Segmented metrics grid (4-column on desktop)
- Highlight prop for emphasis (glowing borders/backgrounds)
- Smooth number animations on viewport enter
- Icon rotation on hover

### LPG Metrics (Preset Component)
```tsx
import { LPGProjectMetrics } from "@/components/KeyMetrics"

// Usage in page.tsx (after About section)
<LPGProjectMetrics />
```

**Displayed Metrics:**
- 257,958 Active Users (highlighted)
- 12,000+ Merchant Partners (highlighted)
- 2.3M Transactions/Month (highlighted)
- 99.8% Uptime (highlighted)

### Customization
Create new metrics component:
```tsx
<KeyMetrics
  title="Custom Project"
  subtitle="Description..."
  metrics={[
    { label: "Users", value: "10K", icon: <Users />, highlight: true },
    { label: "Revenue", value: "$500K", icon: <TrendingUp /> },
  ]}
/>
```

---

## 🎯 Skill Progress Component (Creative Amber Usage)

### File
`components/SkillProgress.tsx`

### Creative Features
1. **Segmented Progress Bars** (12 segments)
   - Glowing amber effect on filled segments
   - Box-shadow: `0_0_12px_rgba(251,191,36,0.6)`
   - Hover glow intensifies: `0_0_20px_rgba(251,191,36,0.8)`

2. **Animated Counter Display**
   - Smooth number animation from 0 to proficiency %
   - Uses requestAnimationFrame for smooth performance

3. **Category Organization**
   - Frontend Mastery
   - Backend Mastery
   - DevOps Mastery

### Usage
```tsx
import { SkillProgressGrid } from "@/components/SkillProgress"

const skills = [
  { name: "React", proficiency: 95, category: "frontend" },
  { name: "Node.js", proficiency: 88, category: "backend" },
  // ...
]

<SkillProgressGrid skills={skills} />
```

### Progressive Disclosure
- Segments animate in sequentially (staggered by index × 0.02s)
- Underline glow activates on group hover
- Entire card lifts up (-4px) on hover

---

## 📁 New Files Created

```
components/
├── CommandPalette.tsx       (CMD+K navigation)
├── CustomCursor.tsx         (Amber glow cursor)
├── SkillProgress.tsx        (Segmented progress + creative amber)
├── KeyMetrics.tsx           (LPG metrics showcase)

app/components/
├── ProjectCard.tsx          (Individual project card - enhanced)
├── ProjectsSection.tsx      (RSC + Suspense)
├── SkillsSection.tsx        (RSC + Suspense)

Updated:
├── app/page.tsx             (New Slate/Amber design + RSC)
├── tailwind.config.js       (Slate/Amber HEX colors)
```

---

## 🎨 Design Tokens Reference

### Typography
- **Hero Title:** text-6xl sm:text-7xl font-bold + gradient
- **Section Headers:** text-4xl font-bold
- **Body Text:** text-slate-400 for regular, text-white for emphasis
- **Accents:** text-amber-400 for highlights

### Spacing
- **Sections:** py-20 (5rem vertical)
- **Container:** px-6 (1.5rem horizontal)
- **Grid gaps:** gap-6 to gap-12 depending on context

### Effects
- **Backdrop:** backdrop-blur-xl (blur effect)
- **Glows:** shadow-[0_0_Xpx_rgba(251,191,36,Y)]
- **Gradients:** from-amber-400 to-amber-500 (primary)
- **Borders:** border-slate-700 (default), border-amber-500/50 (hover)

### Animations
- **Spring Header:** type: "spring", stiffness: 100, damping: 20
- **Standard:** duration: 0.6-0.8 for most transitions
- **Progress Bars:** duration: 0.5 for fill animations
- **Hover:** scale: 1.05 or similar subtle lift

---

## 🔧 Integration Checklist

- [x] **Tailwind Config:** Slate + Amber colors added
- [x] **Command Palette:** Installed and integrated into page
- [x] **Custom Cursor:** Added to root layout
- [x] **RSC Architecture:** ProjectsSection + SkillsSection ready
- [x] **Suspense Boundaries:** Fallbacks with skeleton loaders
- [x] **Key Metrics:** LPG project metrics component added
- [x] **Skill Progress:** Segmented bars with glow effects
- [x] **Page Layout:** Modern hero + sections redesigned

## 🚀 Performance Optimizations

1. **Streaming UI:** Suspense boundaries load content progressively
2. **Lazy Images:** Next.js Image component auto-optimizes
3. **CSS-in-JS:** Framer Motion GPU-accelerated animations
4. **Cursor:** RequestAnimationFrame for smooth 60fps tracking
5. **Responsive:** Mobile-first design with sm/md/lg breakpoints

---

## 📱 Responsive Breakpoints

- **Mobile:** Base styles (< 640px)
- **sm:** 640px and above
- **md:** 768px and above (tablet layout)
- **lg:** 1024px and above (desktop 4-column grid)

---

## 🎯 Next Steps

1. **Add Contact Form:** Implement in contact section
2. **Install Analytics:** Track engagement with CMD+K usage
3. **Add Project Detail Pages:** Create [slug] routes
4. **Connect to CMS:** Fetch projects/skills from headless CMS
5. **Add Blog:** Leverage RSC for fast blog loading
6. **SEO Optimization:** Update meta tags per page

---

## 💡 Pro Tips

- **Keyboard Shortcuts:** CMD+K shows all available commands
- **Mobile Cursor:** Custom cursor disabled on touch devices (prefers-reduced-motion)
- **Metrics Highlighting:** Use `highlight: true` to emphasize key metrics
- **Skill Categories:** Easy to add new categories beyond frontend/backend/devops
- **Progress Animation:** Speeds up on slower connections (uses delta time)

---

Created: April 13, 2026
Design System: High-Performance Dashboard
Color Scheme: Slate (Dark) + Amber (Warm)
