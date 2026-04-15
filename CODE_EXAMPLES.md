# Code Examples & Best Practices

## 🎯 Using ProjectCard Component

### Basic Usage
```tsx
import { ProjectCard } from "@/components/ProjectCard"

<ProjectCard
  id="my-project"
  title="My Awesome Project"
  description="A brief description of what this project does"
  heroUrl="/assets/hero/project-hero.webp"
/>
```

### Full Featured Example (Featured Project)
```tsx
<ProjectCard
  id="subsidi-lpg"
  title="Subsidi Tepat LPG"
  description="Enterprise platform managing 257K+ merchants with real-time transaction processing"
  heroUrl="/assets/hero/hero-map.webp"
  isHighlighted={true}  // Shows "Featured" badge
  colSpan="2"           // Featured projects span 2 columns
  metrics={[
    { label: "Active Users", value: "257K+" },
    { label: "Merchants", value: "12K+" },
    { label: "Monthly Transactions", value: "2.3M" },
    { label: "Uptime", value: "99.8%" },
  ]}
  techStack={[
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "AWS",
    "Face Recognition API",
    "OCR Engine",
  ]}
  tags={["Featured", "Production", "Scale"]}
  deepDive={{
    title: "Face Recognition & OCR Integration",
    description:
      "Advanced biometric and document processing for merchant verification",
    highlights: [
      "Facial recognition for KYC with 98% accuracy",
      "OCR system supporting 5+ document formats",
      "Real-time validation pipeline (<100ms latency)",
      "Multi-layer security (AES-256 encryption)",
    ],
  }}
  cta={{
    text: "View Case Study",
    href: "/case-studies/subsidi-lpg",
  }}
/>
```

---

## 📐 Using BentoGrid Component

### Basic Grid
```tsx
import { BentoGrid, BentoGridItem } from "@/components/BentoGrid"

<BentoGrid gap="md">
  <BentoGridItem colSpan={1}>
    <YourComponent />
  </BentoGridItem>
  <BentoGridItem colSpan={1}>
    <YourComponent />
  </BentoGridItem>
</BentoGrid>
```

### Featured Project Layout Pattern
```tsx
<BentoGrid gap="md">
  {/* Large featured project (2x2 on desktop, 1x1 on mobile) */}
  <BentoGridItem colSpan={2} index={0}>
    <ProjectCard {...featuredProject} colSpan="2" />
  </BentoGridItem>

  {/* 3 standard projects in a row */}
  <BentoGridItem colSpan={1} index={1}>
    <ProjectCard {...standardProject1} colSpan="1" />
  </BentoGridItem>
  <BentoGridItem colSpan={1} index={2}>
    <ProjectCard {...standardProject2} colSpan="1" />
  </BentoGridItem>
  <BentoGridItem colSpan={1} index={3}>
    <ProjectCard {...standardProject3} colSpan="1" />
  </BentoGridItem>

  {/* Additional standard projects */}
  <BentoGridItem colSpan={1} index={4}>
    <ProjectCard {...standardProject4} colSpan="1" />
  </BentoGridItem>
  <BentoGridItem colSpan={1} index={5}>
    <ProjectCard {...standardProject5} colSpan="1" />
  </BentoGridItem>
  <BentoGridItem colSpan={1} index={6}>
    <ProjectCard {...standardProject6} colSpan="1" />
  </BentoGridItem>
</BentoGrid>
```

---

## 🧠 Using TechnicalDeepDive Component

```tsx
import { TechnicalDeepDive } from "@/components/TechnicalDeepDive"

<TechnicalDeepDive
  projectName="Subsidi Tepat LPG"
  challenge="Building a scalable platform capable of handling 257K+ merchants with real-time transaction processing, complex document verification, and biometric authentication while maintaining 99.8% uptime."
  solution="Architected a microservices-based backend with containerized services, implemented face recognition for KYC verification, integrated OCR for document processing, and built a real-time validation pipeline."
  features={[
    {
      icon: <FaceIcon />,
      title: "Face Recognition",
      description:
        "Multi-factor facial recognition for merchant KYC verification and transaction validation. Integrated using WebRTC and ML APIs.",
      metrics: ["98% accuracy", "Real-time processing", "100ms latency"],
    },
    {
      icon: <DocumentIcon />,
      title: "OCR Integration",
      description:
        "Automated document processing for receipts, invoices, and identification. Handles multiple formats and languages.",
      metrics: ["Support 5+ formats", "Multi-language", "Neural OCR"],
    },
    // ... more features
  ]}
  impact={{
    users: "257K+",
    performance: "99.8% uptime",
    reliability: "2.3M trans/mo",
  }}
  techHighlights={[
    "React + Next.js",
    "Node.js Microservices",
    "PostgreSQL + Redis",
    "Face Recognition API",
    "OCR Engine",
    "WebRTC",
    "AWS Infrastructure",
  ]}
/>
```

---

## 🎨 Using Design System

### Animation Presets

#### Scale-In Animation
```tsx
import { ANIMATION_PRESETS } from "@/lib/design-system"
import { motion } from "framer-motion"

<motion.div
  initial={ANIMATION_PRESETS.scaleInVariants.hidden}
  whileInView={ANIMATION_PRESETS.scaleInVariants.visible}
  viewport={{ once: true, margin: "-50px" }}
>
  Content scales in when it comes into view
</motion.div>

// Output: Scales from 0.95 to 1, opacity 0 to 1 (300ms)
```

#### Slide-In Left Animation
```tsx
<motion.div
  initial={ANIMATION_PRESETS.slideInLeftVariants.hidden}
  whileInView={ANIMATION_PRESETS.slideInLeftVariants.visible}
  viewport={{ once: true }}
>
  Content slides in from the left
</motion.div>

// Output: X position from -30 to 0, opacity 0 to 1 (400ms)
```

#### Staggered Container Animation
```tsx
<motion.div
  initial={ANIMATION_PRESETS.containerVariants.hidden}
  whileInView={ANIMATION_PRESETS.containerVariants.visible}
  viewport={{ once: true }}
>
  {items.map((item, idx) => (
    <motion.div key={idx} variants={ANIMATION_PRESETS.itemVariants}>
      {item}
    </motion.div>
  ))}
</motion.div>

// Output: Container fades in, children stagger by 0.1s
```

---

## 🌊 Using Glassmorphism Effects

### Glass Container
```tsx
import { GLASS_UTILITIES, BORDER_GLOW } from "@/lib/glass-effects"

<div className={GLASS_UTILITIES.premium}>
  Your glassy content here
</div>

// Output: Glass effect with 10px blur, nord-surface background
```

### Glass + Glow Hover
```tsx
<div className={`${GLASS_UTILITIES.premium} ${BORDER_GLOW.skyHover}`}>
  Content with glow effect on hover
</div>

// Output: Static glass + animated glow on hover
```

### Dynamic Glass Style
```tsx
import { createGlassStyle } from "@/lib/glass-effects"

const Card = styled.div`
  ${createGlassStyle({ blur: 15, opacity: 0.9 })}
`

// Output: Custom glass style with 15px blur, 90% opacity
```

---

## 📝 Adding New Projects

### In `lib/portfolio-content.ts`

```tsx
export const PROJECTS_FEATURED = [
  // ... existing projects
  {
    id: "my-new-project",
    title: "My New Project Title",
    shortTitle: "Shortened Title",
    description:
      "A detailed description of what this project does and its impact",
    heroUrl: "/assets/hero/my-project-hero.webp",
    category: "Category Name",
    isHighlighted: false,  // Set to true for featured status
    colSpan: "1",          // 1 or 2 columns
    metrics: [
      { label: "Metric 1", value: "100K" },
      { label: "Metric 2", value: "50%" },
    ],
    techStack: ["Tech 1", "Tech 2", "Tech 3"],
    tags: ["tag1", "tag2"],
    deepDive: {
      title: "Technical Details",
      description: "Explanation of the technical approach",
      highlights: [
        "Achievement 1",
        "Achievement 2",
        "Achievement 3",
      ],
    },
    cta: {
      text: "Learn More",
      href: "#my-project",
    },
  },
]
```

---

## 🎬 Animation Best Practices

### ✅ DO
```tsx
// Good: Viewport-triggered, once: true, smooth
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3, ease: "easeOut" }}
  viewport={{ once: true, margin: "-50px" }}
>
  Content
</motion.div>

// Good: Use ANIMATION_PRESETS for consistency
<motion.div
  variants={ANIMATION_PRESETS.scaleInVariants}
  initial="hidden"
  whileInView="visible"
>
  Content
</motion.div>
```

### ❌ DON'T
```tsx
// Bad: animate immediately on load (janky)
<motion.div
  animate={{ opacity: 1 }}
>
  Content
</motion.div>

// Bad: Long animations (feels sluggish)
<motion.div
  transition={{ duration: 2 }}
>
  Content
</motion.div>

// Bad: Constant animations (distracting)
<motion.div
  animate={{ rotate: 360 }}
  transition={{ repeat: Infinity }}
>
  Content
</motion.div>
```

---

## 🎨 Color Usage Best Practices

### Text Colors
```tsx
// Primary text
<p className="text-nord-sky">Important heading</p>

// Secondary text
<p className="text-nord-slate-light">Regular paragraph</p>

// Muted text
<p className="text-nord-slate">Meta information</p>

// Error/Alert
<p className="text-nord-error">Error message</p>
```

### Component Backgrounds
```tsx
// Dark backgrounds (page)
<div className="bg-nord-dark">Page background</div>

// Darker backgrounds (nested)
<div className="bg-nord-darker">Nested content</div>

// Surface backgrounds (cards)
<div className="bg-nord-surface">Card background</div>

// Glass effect
<div className={GLASS_UTILITIES.premium}>Glass card</div>
```

### Accent Colors
```tsx
// Primary accent
<button className="bg-nord-sky text-nord-dark">Primary CTA</button>

// Secondary accent
<button className="bg-nord-navy text-nord-dark">Secondary CTA</button>

// Hover state
<div className="hover:border-nord-sky hover:shadow-glow-sky">
  Hover effect
</div>
```

---

## 📊 Updating Content

### Edit Experience
```tsx
// lib/portfolio-content.ts
export const EXPERIENCE = [
  {
    id: "code-id",
    company: "Code ID",
    position: "Senior Frontend Developer",
    period: "2024 - Present",
    isCurrentRole: true,
    description: "Your role description",
    highlights: [
      "Achievement 1",
      "Achievement 2",
      "Achievement 3",
    ],
    techStack: ["React", "Next.js", "TypeScript"],
  },
]
```

### Edit Skills
```tsx
export const SKILLS_CATEGORIZED = {
  frontend: {
    name: "Frontend",
    color: "nord-sky",
    skills: [
      { name: "React", proficiency: 98, years: 4 },
      { name: "TypeScript", proficiency: 95, years: 3 },
    ],
  },
}
```

### Edit Certifications
```tsx
export const CERTIFICATIONS = [
  {
    name: "Your Certification",
    issuer: "Issuing Organization",
    year: 2024,
    verified: true,
  },
]
```

---

## 🚀 Performance Tips

### Image Optimization
```tsx
import Image from "next/image"

// Good: Using Next.js Image component
<Image
  src="/assets/hero/project.webp"
  alt="Project hero image"
  width={1200}
  height={600}
  priority  // For above-fold images
/>

// Specify dimensions for automatic optimization
```

### Animation Performance
```tsx
// Good: Use will-change for animated elements
<motion.div
  className="will-change-transform"
  animate={{ opacity: 1 }}
>
  Content
</motion.div>

// Prefer transform over positional properties
<motion.div
  # animate={{ y: 10 }}  ✓ Good
  # animate={{ top: 10 }} ✗ Bad (causes layout shift)
>
  Content
</motion.div>
```

### Viewport Triggering
```tsx
// Good: Lazy animations with viewport trigger
<motion.div
  whileInView={{ opacity: 1 }}
  viewport={{ 
    once: true,        // Animate only once
    margin: "-50px"    // Start before visible
  }}
>
  Content
</motion.div>
```

---

## 🔗 Common Patterns

### Feature List with Icons
```tsx
{features.map((feature, idx) => (
  <motion.div
    key={idx}
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: idx * 0.1 }}
    className={`${GLASS_UTILITIES.soft} p-4 rounded`}
  >
    <feature.icon className="text-nord-sky mb-2" />
    <h4 className="text-nord-sky-light font-semibold">{feature.title}</h4>
    <p className="text-nord-slate-light text-sm">{feature.description}</p>
  </motion.div>
))}
```

### Metric Display
```tsx
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  {metrics.map((metric) => (
    <div key={metric.label} className="text-center">
      <div className="text-2xl font-bold text-nord-sky">
        {metric.value}
      </div>
      <div className="text-xs text-nord-slate uppercase tracking-wider">
        {metric.label}
      </div>
    </div>
  ))}
</div>
```

### Skill Progress Bar
```tsx
{skill.map((skill) => (
  <div key={skill.name}>
    <div className="flex justify-between mb-2">
      <span className="text-nord-slate-light">{skill.name}</span>
      <span className="text-nord-sky text-xs">{skill.proficiency}%</span>
    </div>
    <div className="h-2 bg-nord-border rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-nord-sky to-nord-navy"
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.proficiency}%` }}
        transition={{ delay: 0.2, duration: 0.5 }}
      />
    </div>
  </div>
))}
```

---

**These examples cover the most common use cases for your portfolio!**
