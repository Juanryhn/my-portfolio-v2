// Code Snippet Reference: Integration Examples
// Place these in your components where needed

// ═══════════════════════════════════════════════════════════
// 1. HERO SECTION WITH GRADIENT TEXT
// ═══════════════════════════════════════════════════════════
const HeroSection = () => (
  <motion.h2
    className="text-6xl sm:text-7xl font-bold mb-4 leading-tight"
  >
    <span className="bg-gradient-to-r from-white via-amber-400 to-amber-300 bg-clip-text text-transparent">
      Fast. Technical. Elegant.
    </span>
  </motion.h2>
)

// ═══════════════════════════════════════════════════════════
// 2. AMBER GLOW CTA BUTTON
// ═══════════════════════════════════════════════════════════
const CTAButton = () => (
  <motion.button
    whileHover={{ 
      scale: 1.05, 
      boxShadow: "0 0 30px rgba(251,191,36,0.3)" 
    }}
    className="px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-semibold rounded-lg hover:shadow-lg transition-all"
  >
    Explore Work
  </motion.button>
)

// ═══════════════════════════════════════════════════════════
// 3. SEGMENTED SKILL PROGRESS WITH GLOW
// ═══════════════════════════════════════════════════════════
const SkillProgressBar = ({ skill }) => (
  <div className="flex gap-1.5">
    {Array.from({ length: 12 }).map((_, index) => (
      <motion.div
        key={index}
        className={`h-2 rounded-full flex-1 transition-all duration-500 ${
          index < Math.round((skill.proficiency / 100) * 12)
            ? "bg-gradient-to-r from-amber-400 to-amber-500 shadow-[0_0_12px_rgba(251,191,36,0.6)] hover:shadow-[0_0_20px_rgba(251,191,36,0.8)]"
            : "bg-slate-700 hover:bg-slate-600"
        }`}
      />
    ))}
  </div>
)

// ═══════════════════════════════════════════════════════════
// 4. HOVER CARD WITH AMBER BORDER ACCENT
// ═══════════════════════════════════════════════════════════
const AccentCard = ({ children }) => (
  <motion.div
    whileHover={{ y: -4 }}
    className="rounded-xl p-4 border border-slate-700 bg-slate-800/50 hover:border-amber-500/50 hover:bg-slate-800 transition-all duration-300"
  >
    {children}
  </motion.div>
)

// ═══════════════════════════════════════════════════════════
// 5. METRIC WITH GLOW AND HIGHLIGHT
// ═══════════════════════════════════════════════════════════
const MetricCard = ({ value, label, highlight = false }) => (
  <motion.div
    whileHover={{ y: -4, scale: 1.02 }}
    className={`rounded-xl p-4 backdrop-blur-sm transition-all duration-300 ${
      highlight
        ? "border border-amber-500/50 bg-amber-500/10 hover:bg-amber-500/15 hover:border-amber-400"
        : "border border-slate-700 bg-slate-800/50 hover:bg-slate-800"
    }`}
  >
    <p className={`text-2xl font-bold tracking-tight ${
      highlight ? "text-amber-400" : "text-white"
    }`}>
      {value}
    </p>
    <p className="text-xs text-slate-500 uppercase tracking-wider">
      {label}
    </p>
    {highlight && (
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute top-0 right-0 w-20 h-20 bg-amber-500/20 blur-3xl rounded-full pointer-events-none"
      />
    )}
  </motion.div>
)

// ═══════════════════════════════════════════════════════════
// 6. ANIMATED SECTION HEADER WITH DOT
// ═══════════════════════════════════════════════════════════
const SectionHeader = ({ title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="flex items-center gap-3"
  >
    <div className="w-1.5 h-8 rounded-full bg-gradient-to-b from-amber-400 to-amber-600" />
    <div>
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      {subtitle && <p className="text-sm text-slate-500 mt-1">{subtitle}</p>}
    </div>
  </motion.div>
)

// ═══════════════════════════════════════════════════════════
// 7. BACKDROP WITH AMBIENT GLOW
// ═══════════════════════════════════════════════════════════
const AmbientGlowBackground = () => (
  <motion.div
    animate={{
      background: [
        "radial-gradient(800px at 0% 0%, rgba(251,191,36,0.15) 0%, transparent 80%)",
        "radial-gradient(800px at 100% 100%, rgba(251,191,36,0.05) 0%, transparent 80%)",
        "radial-gradient(800px at 0% 0%, rgba(251,191,36,0.15) 0%, transparent 80%)",
      ]
    }}
    transition={{ duration: 15, repeat: Infinity }}
    className="fixed inset-0 pointer-events-none z-0"
  />
)

// ═══════════════════════════════════════════════════════════
// 8. NAVIGATION LINK WITH ACTIVE STATE
// ═══════════════════════════════════════════════════════════
const NavLink = ({ href, label, isActive }) => (
  <motion.a
    href={href}
    className={`px-4 py-2 rounded-lg font-medium transition-all ${
      isActive
        ? "text-amber-400 bg-amber-400/10 border border-amber-500/50"
        : "text-slate-400 hover:text-amber-400 hover:bg-amber-400/5"
    }`}
    whileHover={{ scale: 1.05 }}
  >
    {label}
  </motion.a>
)

// ═══════════════════════════════════════════════════════════
// 9. COMMAND PALETTE TRIGGER BUTTON
// ═══════════════════════════════════════════════════════════
const CmdKTrigger = () => (
  <button className="fixed top-4 right-4 z-40 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 text-sm hover:border-amber-500 hover:text-amber-400 transition-all duration-300 flex items-center gap-2">
    <Search className="w-4 h-4" />
    <span className="hidden sm:inline">CMD</span>
    <kbd className="hidden sm:inline font-semibold">K</kbd>
  </button>
)

// ═══════════════════════════════════════════════════════════
// 10. SUSPENSSE BOUNDARY WITH FALLBACK
// ═══════════════════════════════════════════════════════════
const AsyncSectionWithSuspense = () => (
  <Suspense fallback={
    <div className="text-slate-400 text-center py-12 animate-pulse">
      Loading amazing content...
    </div>
  }>
    <AsyncDataComponent />
  </Suspense>
)

// ═══════════════════════════════════════════════════════════
// COLOR TOKENS QUICK REFERENCE
// ═══════════════════════════════════════════════════════════
/*

SLATE BACKGROUNDS:
- bg-slate-950  → #09090b (main)
- bg-slate-900  → #18181b (cards)
- bg-slate-800  → #27272a (tertiary)
- border-slate-700 → #3f3f46

AMBER ACCENTS:
- text-amber-400 → #fbbf24 (bright)
- text-amber-500 → #f59e0b (primary)
- hover:bg-amber-600 → #d97706
- border-amber-500/50 → transparent border

GLOWS:
- shadow-[0_0_12px_rgba(251,191,36,0.6)]  (soft)
- shadow-[0_0_20px_rgba(251,191,36,0.8)]  (medium)
- shadow-[0_0_30px_rgba(251,191,36,1)]    (strong)

GRADIENTS:
- from-white via-amber-400 to-amber-300
- from-amber-400 to-amber-500
- from-slate-900 via-slate-900/95 to-slate-950

*/

export {
  HeroSection,
  CTAButton,
  SkillProgressBar,
  AccentCard,
  MetricCard,
  SectionHeader,
  AmbientGlowBackground,
  NavLink,
  CmdKTrigger,
  AsyncSectionWithSuspense,
}
