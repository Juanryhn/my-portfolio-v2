/**
 * Portfolio Content Structure
 * Highlights Code ID transition and Subsidi Tepat LPG project
 */

export const EXPERIENCE = [
  {
    id: "code-id",
    company: "Code ID",
    position: "Senior Frontend Developer",
    period: "2024 - Present",
    isCurrentRole: true,
    description:
      "Leading frontend architecture and development initiatives, specializing in React/Next.js ecosystem for enterprise SaaS applications.",
    highlights: [
      "Architected scalable component systems using React, TypeScript, and Tailwind CSS",
      "Led the technical transition providing mentorship on modern frontend practices",
      "Spearheaded the Subsidi Tepat LPG project integrating Face Recognition and OCR",
      "Optimized application performance achieving 99.8% uptime",
    ],
    techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "WebRTC", "ML Integration"],
  },
  {
    id: "previous",
    company: "Previous Organizations",
    position: "Full Stack Developer",
    period: "2021 - 2024",
    isCurrentRole: false,
    description:
      "Built and maintained multiple web applications serving 257K+ users across different sectors including education, HR, and civic services.",
    highlights: [
      "Developed SIAPDA school management system serving educational institutions",
      "Built QRen platform for smart city & business solutions",
      "Created Geisa Online Present with facial recognition capabilities",
      "Implemented SIMRASIO regional school management platform",
    ],
    techStack: ["React", "Vue.js", "Node.js", "PHP", "MySQL", "AWS"],
  },
]

export const PROJECTS_FEATURED = [
  {
    id: "subsidi-lpg",
    title: "Subsidi Tepat LPG (Pertamina Merchant Apps)",
    shortTitle: "Subsidi Tepat LPG",
    description:
      "Enterprise-scale digital platform enabling merchants to manage product distribution and customer relationships. Grown to 257K+ active users with 12K+ merchants managing 2.3M transactions monthly at 99.8% uptime.",
    heroUrl: "/assets/hero/hero-map.webp",
    category: "SaaS / E-Commerce",
    isHighlighted: true,
    colSpan: "2",
    metrics: [
      { label: "Active Users", value: "257K+" },
      { label: "Merchants", value: "12K+" },
      { label: "Monthly Transactions", value: "2.3M" },
      { label: "Uptime", value: "99.8%" },
    ],
    techStack: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Framer Motion"],
    tags: ["Featured", "Production", "Scale"],
    deepDive: {
      title: "Face Recognition & OCR Integration",
      description:
        "Advanced biometric and document processing capabilities for merchant verification and transaction validation.",
      highlights: [
        "Integrated facial recognition for merchant KYC verification",
        "OCR system for receipt and invoice processing",
        "Real-time transaction validation pipeline",
        "Multi-factor authentication layer",
      ],
    },
    cta: {
      text: "View Technical Deep Dive",
      href: "#subsidi-deep-dive",
    },
  },
  {
    id: "qren",
    title: "QRen Platform",
    description:
      "QR-based smart business and smart city solution enabling digital transactions including parking, market levies, e-ticketing, and billing with comprehensive admin tools.",
    heroUrl: "/assets/hero/hero-qr.webp",
    category: "Smart City / Payment",
    techStack: ["React", "Node.js", "MongoDB", "QR Technology"],
    tags: ["Smart City", "Payments"],
    cta: {
      text: "Learn More",
      href: "#projects",
    },
  },
  {
    id: "siapda",
    title: "SIAPDA - School Management System",
    description:
      "Comprehensive school management platform streamlining data management for teachers, students, and learning resources.",
    heroUrl: "/assets/hero/hero-si.webp",
    category: "Education Tech",
    techStack: ["Vue.js", "PHP", "MySQL"],
    tags: ["Education", "Management"],
  },
  {
    id: "geisa-present",
    title: "Geisa Online Present",
    description:
      "Employee CICO system with geolocation tracking (latitude/longitude) and facial capture for accurate attendance monitoring.",
    heroUrl: "/assets/hero/hero-cico.webp",
    category: "HR Tech",
    techStack: ["React", "Node.js", "Facial Recognition"],
    tags: ["HR", "Biometric"],
    deepDive: {
      title: "Biometric Attendance",
      description: "Facial recognition-based check-in/check-out system with geolocation verification.",
      highlights: [
        "Real-time facial recognition",
        "GPS geolocation verification",
        "Monthly analytics dashboard",
      ],
    },
  },
  {
    id: "simrasio",
    title: "SIMRASIO - Regional School Management",
    description:
      "Scalable school management system designed for regional deployments, streamlining data management across multiple institutions.",
    heroUrl: "/assets/hero/hero-si.webp",
    category: "Education Tech",
    techStack: ["Vue.js", "PHP", "MySQL"],
    tags: ["Education", "Regional"],
  },
  {
    id: "sarang-it",
    title: "Sarang IT",
    description:
      "Collaborative platform for tech community knowledge sharing, featuring programming tips, tech updates, and industry trend discussions.",
    heroUrl: "/assets/hero/hero-sit.webp",
    category: "Community",
    techStack: ["React", "Firebase", "Tailwind CSS"],
    tags: ["Community", "Learning"],
  },
]

export const SKILLS_CATEGORIZED = {
  frontend: {
    name: "Frontend",
    color: "nord-sky",
    skills: [
      { name: "React", proficiency: 98, years: 4 },
      { name: "Next.js", proficiency: 96, years: 3 },
      { name: "TypeScript", proficiency: 95, years: 3 },
      { name: "Tailwind CSS", proficiency: 94, years: 2 },
      { name: "Framer Motion", proficiency: 92, years: 1 },
      { name: "JavaScript", proficiency: 98, years: 5 },
      { name: "HTML/CSS", proficiency: 96, years: 5 },
      { name: "Vue.js", proficiency: 85, years: 2 },
    ],
  },
  backend: {
    name: "Backend",
    color: "nord-navy",
    skills: [
      { name: "Node.js", proficiency: 90, years: 3 },
      { name: "Express.js", proficiency: 88, years: 3 },
      { name: "PHP", proficiency: 80, years: 2 },
      { name: "PostgreSQL", proficiency: 85, years: 2 },
      { name: "MongoDB", proficiency: 82, years: 2 },
      { name: "AWS", proficiency: 78, years: 1 },
    ],
  },
  specializations: {
    name: "Specializations",
    color: "nord-sky-light",
    skills: [
      { name: "Face Recognition", proficiency: 88, years: 1 },
      { name: "OCR Integration", proficiency: 85, years: 1 },
      { name: "Performance Optimization", proficiency: 90, years: 3 },
      { name: "Component Architecture", proficiency: 94, years: 3 },
      { name: "API Design", proficiency: 88, years: 2 },
      { name: "WebRTC", proficiency: 82, years: 1 },
    ],
  },
  tools: {
    name: "Tools & Systems",
    color: "nord-slate-light",
    skills: [
      { name: "Git/GitHub", proficiency: 95, years: 4 },
      { name: "Docker", proficiency: 82, years: 1 },
      { name: "CI/CD Pipelines", proficiency: 85, years: 1 },
      { name: "Figma", proficiency: 80, years: 2 },
      { name: "Jira", proficiency: 88, years: 3 },
    ],
  },
}

export const CERTIFICATIONS = [
  {
    name: "Frontend Developer (React)",
    issuer: "HackerRank",
    year: 2025,
    verified: true,
  },
  {
    name: "Google Cybersecurity Professional",
    issuer: "Google - Coursera",
    year: 2024,
    verified: true,
  },
  {
    name: "Android Development Associate",
    issuer: "Logical Operations",
    year: 2022,
    verified: true,
  },
  {
    name: "SCRUM Foundational Professional Certificate",
    issuer: "Certiprof",
    year: 2023,
    verified: true,
  },
  {
    name: "TOEFL (Score: 563)",
    issuer: "Educational Testing Service",
    year: 2022,
    verified: true,
  },
]

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/juanryhn",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/juanrayhan",
    icon: "linkedin",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/juanrayhan",
    icon: "twitter",
  },
  {
    name: "Email",
    url: "mailto:contact@juanrayhan.dev",
    icon: "mail",
  },
]

export const DEEP_DIVES = [
  {
    id: "subsidi-lpg-tech",
    projectName: "Subsidi Tepat LPG",
    challenge:
      "Building a scalable platform capable of handling 257K+ merchants with real-time transaction processing, complex document verification, and biometric authentication while maintaining 99.8% uptime.",
    solution:
      "Architected a microservices-based backend with containerized services, implemented face recognition for KYC verification, integrated OCR for document processing, and built a real-time validation pipeline on top of a high-performance database infrastructure.",
    features: [
      {
        icon: "👤",
        title: "Face Recognition",
        description:
          "Multi-factor facial recognition for merchant KYC verification and transaction validation. Integrated using WebRTC and ML APIs.",
        metrics: ["98% accuracy", "Real-time processing", "100ms latency"],
      },
      {
        icon: "📄",
        title: "OCR Integration",
        description:
          "Automated document processing for receipts, invoices, and identification. Handles multiple formats and languages.",
        metrics: ["Support 5+ formats", "Multi-language", "Neural OCR"],
      },
      {
        icon: "⚡",
        title: "Real-time Validation",
        description:
          "Sub-100ms transaction validation pipeline ensuring instant merchant and customer feedback.",
        metrics: ["<100ms latency", "99.8% accuracy", "Redundant systems"],
      },
      {
        icon: "🔐",
        title: "Multi-layer Security",
        description:
          "End-to-end encryption, rate limiting, anomaly detection, and compliance with financial regulations.",
        metrics: ["AES-256 encryption", "PCI-DSS compliant", "Daily audits"],
      },
    ],
    impact: {
      users: "257K+",
      performance: "99.8% uptime",
      reliability: "2.3M trans/mo",
    },
    techHighlights: [
      "React + Next.js Frontend",
      "Node.js Microservices",
      "PostgreSQL + Redis",
      "Face Recognition API",
      "OCR Engine",
      "WebRTC",
      "AWS Infrastructure",
      "Docker & Kubernetes",
      "CI/CD Pipeline",
    ],
  },
]
