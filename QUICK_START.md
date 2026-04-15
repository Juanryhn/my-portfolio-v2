# Deep Nord Portfolio - Quick Start Guide

## ✨ What Was Built

Your portfolio has been completely redesigned with:

1. **Deep Nord Color Palette** - Navy/Slate/Sky Blue SaaS-Premium theme
2. **Premium Project Cards** - With hover-glow effects and technical deep dives
3. **Bento Grid Layout** - Responsive masonry for featured projects
4. **Glassmorphism Effects** - 10px backdrop blur with border glows
5. **Framer Motion Animations** - Snappy (300ms) professional transitions
6. **Technical Deep Dives** - Showcase Face Recognition & OCR integration
7. **Responsive Design** - Mobile-first, fully responsive
8. **Restructured Content** - Highlighting Code ID transition & major projects

## 🚀 Getting Started

### 1. View Your Portfolio
```bash
cd "c:\Users\CODE.ID\Documents\playground\my-portfolio-v2"
npm run dev
# Open http://localhost:3000 in your browser
```

### 2. Navigate the Sections
- `/` → Hero with gradient text
- `#about` → About section
- `#experience` → Experience (Code ID + previous)
- `#projects` → Featured projects in Bento Grid
- `#deep-dives` → Technical deep dives section
- `#skills` → Animated skill progress bars
- `#certifications` → Certifications display
- `#contact` → Social links (GitHub, LinkedIn, Email)

## 📊 Project Layout Pattern

The featured projects use a **Bento Grid** layout:

```
[ Large Featured (2x2) ]  [ Standard ]  [ Standard ]
[ Large Featured (2x2) ]  [ Standard ]  [ Standard ]
[ Standard (1x1) ]        [ Standard ]  [ Standard ]
```

**Currently Featured:**
1. **Subsidi Tepat LPG** (256K+ users, 12K+ merchants) - Spans 2 columns
2. QRen Platform - Standard card
3. SIAPDA School System - Standard card
4. Geisa Online Present (with facial recognition) - Standard card
5. SIMRASIO Regional System - Standard card
6. Sarang IT Community Platform - Standard card

## 🎨 Design Details

### Color System
```
# Main Accents
Sky Blue (Primary):     #60d4ff
Navy (Secondary):       #5b6fa1
Text (Primary):         #e8ecf1
Text (Muted):          #8896a7

# Backgrounds
Dark:                   #0f1419
Darker:                 #1a1f2e
Surface/Cards:          #232d3f
Borders:               #2d3a52
```

### Hover Effects
- **Cards:** Lift up 4px + enhanced glow
- **Buttons:** Scale 1.05 + gradient shift
- **Text:** Color change + drop shadow glow
- **Borders:** Animated glow pulse

### Animations
- **Duration:** ~300ms (snappy feel)
- **Easing:** easeOut (natural)
- **Triggers:** Viewport scroll
- **Technique:** Framer Motion whileInView

## 💻 How to Customize

### Change Project Cards

Edit `lib/portfolio-content.ts`:

```tsx
export const PROJECTS_FEATURED = [
  {
    id: "subsidi-lpg",
    title: "Your Project Title",
    description: "Your description here",
    heroUrl: "/assets/hero/your-image.webp",
    isHighlighted: true,           // Shows "Featured" badge
    colSpan: 2,                    // 1 or 2 columns width
    metrics: [
      { label: "Users", value: "100K+" },
      { label: "Merchants", value: "5K+" },
    ],
    techStack: ["React", "Next.js", "PostgreSQL"],
    tags: ["Featured", "Production"],
    deepDive: {
      title: "Technical Implementation",
      description: "Details about...",
      highlights: [
        "Feature 1",
        "Feature 2",
      ],
    },
    cta: {
      text: "View Case Study",
      href: "/projects/subsidi-lpg",
    },
  },
]
```

### Change Your Experience

Edit `lib/portfolio-content.ts`:

```tsx
export const EXPERIENCE = [
  {
    id: "code-id",
    company: "Your Company",
    position: "Your Title",
    period: "2024 - Present",
    isCurrentRole: true,
    description: "Your role description",
    highlights: [
      "Achievement 1",
      "Achievement 2",
    ],
    techStack: ["React", "TypeScript"],
  },
]
```

### Change Colors

Edit `tailwind.config.js`:

```js
colors: {
  "nord-sky": "#YOUR_HEX",        // Primary accent
  "nord-navy": "#YOUR_HEX",       // Secondary accent
  "nord-dark": "#YOUR_HEX",       // Background
  // ... other colors
}
```

### Adjust Animation Speed

In component `<motion.div>`:

```tsx
transition={{ duration: 0.3 }}   // Fast (300ms)
transition={{ duration: 0.5 }}   // Medium (500ms)
transition={{ duration: 0.8 }}   // Slow (800ms)
```

## 📱 Responsive Behavior

| Screen | Projects | Columns | Navigation |
|--------|----------|---------|------------|
| Mobile | Cards | 1 | Hamburger menu |
| Tablet | Cards | 2 | Full menu |
| Desktop | Bento Grid | 4 | Full menu |

## 🔧 File Reference

### Components (Reusable)
- `components/ProjectCard.tsx` - Individual project card
- `components/BentoGrid.tsx` - Grid layout wrapper
- `components/TechnicalDeepDive.tsx` - Technical showcase

### Design Systems
- `lib/design-system.ts` - Colors, animations, presets
- `lib/glass-effects.ts` - Glassmorphism utilities
- `lib/portfolio-content.ts` - All portfolio content

### Main Page
- `app/page.tsx` - Your complete portfolio
- `tailwind.config.js` - Styling configuration

## 🎯 Feature Highlights

### 1. Project Cards
✅ Hero image with gradient overlay  
✅ Metrics grid (users, merchants, etc)  
✅ Tech stack tags  
✅ Deep dive technical details (hover to expand)  
✅ Call-to-action buttons  
✅ Hover-glow effect with lift animation  

### 2. Skills Section
✅ 4 categories (Frontend, Backend, Specializations, Tools)  
✅ Animated progress bars  
✅ Proficiency percentages  
✅ Staggered animations  

### 3. Technical Deep Dives
✅ Challenge & Solution display  
✅ 6 technical highlight cards  
✅ Impact metrics showcase  
✅ Tech stack listing  
✅ Icon-based feature display  

### 4. Experience Timeline
✅ Current role badge  
✅ Company & position  
✅ Date range  
✅ Description + highlights  
✅ Tech stack tags  
✅ Hover lift effect  

## 📚 Component Examples

### Using ProjectCard
```tsx
import { ProjectCard } from "@/components/ProjectCard"
import { BentoGrid, BentoGridItem } from "@/components/BentoGrid"

<BentoGrid>
  <BentoGridItem colSpan={2}>
    <ProjectCard
      id="project-1"
      title="My Project"
      description="Description"
      heroUrl="/path/to/image.webp"
      isHighlighted={true}
      metrics={[{ label: "Users", value: "100K" }]}
      deepDive={{
        title: "Technical Details",
        description: "...",
        highlights: ["..."],
      }}
    />
  </BentoGridItem>
</BentoGrid>
```

### Using Design System
```tsx
import { ANIMATION_PRESETS, DEEP_NORD } from "@/lib/design-system"
import { GLASS_UTILITIES, BORDER_GLOW } from "@/lib/glass-effects"

<motion.div
  className={`${GLASS_UTILITIES.premium} ${BORDER_GLOW.skyHover}`}
  initial={ANIMATION_PRESETS.scaleInVariants.hidden}
  whileInView={ANIMATION_PRESETS.scaleInVariants.visible}
>
  Your content
</motion.div>
```

## 🚢 Deployment

```bash
# Build for production
npm run build

# Test build locally
npm start

# Deploy to Vercel
# Just push to GitHub and Vercel auto-deploys
# OR use: vercel --prod
```

## ✅ Verification Checklist

- [ ] Portfolio loads without errors
- [ ] All sections scroll smoothly
- [ ] Hover effects work on cards
- [ ] Mobile menu opens/closes
- [ ] Project images display
- [ ] Deep dives expand on card hover
- [ ] Animations are smooth
- [ ] Colors are consistent
- [ ] Navigation highlights current section
- [ ] Contact links work

## 🎓 Next Steps

1. **Update Content:** Edit `lib/portfolio-content.ts` with your real data
2. **Add Images:** Place project images in `/public/assets/hero/`
3. **Customize Colors:** Edit `tailwind.config.js` if needed
4. **Deploy:** Push to GitHub and let Vercel deploy
5. **Monitor:** Check performance at https://vercel.com/analytics

## 📖 Documentation

- Full guide: See `PORTFOLIO_REVAMP_v3.3.md`
- Design system: See `lib/design-system.ts`
- Component props: See components TypeScript interfaces
- Content structure: See `lib/portfolio-content.ts`

## 🆘 Troubleshooting

**Cards not showing?**
- Check `PROJECTS_FEATURED` in `lib/portfolio-content.ts`
- Verify image paths in `/public/assets/hero/`

**Animations jittery?**
- Check GPU acceleration in browser DevTools
- Verify Framer Motion version in `package.json`

**Colors different?**
- Clear browser cache (Ctrl+Shift+Delete)
- Rebuild Tailwind (npm run build)

**Mobile menu not working?**
- Check `isMenuOpen` state in `app/page.tsx`
- Verify Lucide icons are imported

---

**Theme:** Deep Nord (Navy/Slate/Sky Blue)  
**Type:** SaaS Premium Dark Mode First  
**Status:** ✅ Production Ready  
**Updated:** April 13, 2026
