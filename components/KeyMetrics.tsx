"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, MapPin, Zap } from "lucide-react"

interface MetricItem {
  label: string
  value: string | number
  suffix?: string
  icon: React.ReactNode
  highlight?: boolean
}

interface KeyMetricsProps {
  title: string
  subtitle?: string
  metrics: MetricItem[]
  accentColor?: string
}

export function KeyMetrics({
  title,
  subtitle,
  metrics,
  accentColor = "amber"
}: KeyMetricsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-100px" }}
      className="rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 p-8 overflow-hidden group hover:border-amber-500/50 transition-colors duration-300"
    >
      {/* Animated background glow */}
      <motion.div
        animate={{ 
          background: [
            "radial-gradient(500px at 0% 0%, rgba(251,191,36,0.1) 0%, transparent 80%)",
            "radial-gradient(500px at 100% 100%, rgba(251,191,36,0.05) 0%, transparent 80%)",
            "radial-gradient(500px at 0% 0%, rgba(251,191,36,0.1) 0%, transparent 80%)",
          ]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Header */}
      <div className="relative mb-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center gap-3"
        >
          <div className="w-1.5 h-8 rounded-full bg-gradient-to-b from-amber-400 to-amber-600" />
          <div>
            <h3 className="text-2xl font-bold text-white">{title}</h3>
            {subtitle && <p className="text-sm text-slate-500 mt-1">{subtitle}</p>}
          </div>
        </motion.div>
      </div>

      {/* Metrics Grid */}
      <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, scale: 1.02 }}
            className={`rounded-xl p-4 backdrop-blur-sm transition-all duration-300 ${
              metric.highlight
                ? "border border-amber-500/50 bg-amber-500/10 hover:bg-amber-500/15 hover:border-amber-400"
                : "border border-slate-700 bg-slate-800/50 hover:bg-slate-800 hover:border-slate-600"
            }`}
          >
            {/* Icon */}
            <motion.div
              whileHover={{ rotate: 12, scale: 1.1 }}
              className={`mb-3 inline-block p-2 rounded-lg ${
                metric.highlight
                  ? "bg-amber-500/20"
                  : "bg-slate-700/50"
              }`}
            >
              <div className={metric.highlight ? "text-amber-400" : "text-slate-400"}>
                {metric.icon}
              </div>
            </motion.div>

            {/* Value */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              viewport={{ once: true }}
              className="mb-2"
            >
              <p className={`text-2xl font-bold tracking-tight ${
                metric.highlight ? "text-amber-400" : "text-white"
              }`}>
                {metric.value}
                {metric.suffix && <span className="text-lg">{metric.suffix}</span>}
              </p>
            </motion.div>

            {/* Label */}
            <p className="text-xs text-slate-500 uppercase tracking-wider">
              {metric.label}
            </p>

            {/* Glow effect on highlight */}
            {metric.highlight && (
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-0 right-0 w-20 h-20 bg-amber-500/20 blur-3xl rounded-full pointer-events-none"
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Code snippet indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-8 pt-6 border-t border-slate-700/50"
      >
        <p className="text-xs text-slate-600 flex items-center gap-2">
          <Zap className="w-3 h-3 text-amber-500" />
          Technical implementation details available in code snippets
        </p>
      </motion.div>
    </motion.div>
  )
}

// Preset: Subsidi Tepat LPG Metrics
export function LPGProjectMetrics() {
  const metrics: MetricItem[] = [
    {
      label: "Active Users",
      value: "257,958",
      icon: <Users className="w-5 h-5" />,
      highlight: true
    },
    {
      label: "Merchant Partners",
      value: "12,000+",
      icon: <MapPin className="w-5 h-5" />,
      highlight: true
    },
    {
      label: "Transactions/Month",
      value: "2.3M",
      icon: <TrendingUp className="w-5 h-5" />,
      highlight: true
    },
    {
      label: "Uptime",
      value: "99.8%",
      suffix: "",
      icon: <Zap className="w-5 h-5" />,
      highlight: true
    }
  ]

  return (
    <KeyMetrics
      title="Subsidi Tepat LPG"
      subtitle="National-scale LPG subsidy distribution platform - First year performance"
      metrics={metrics}
      accentColor="amber"
    />
  )
}
