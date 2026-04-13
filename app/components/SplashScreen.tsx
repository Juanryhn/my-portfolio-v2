import { motion } from "framer-motion"

const SplashScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      onAnimationComplete={() => (document.body.style.overflow = "auto")}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <h1 className="text-4xl font-bold text-foreground">Welcome to My Portfolio</h1>
      </motion.div>
    </motion.div>
  )
}

export default SplashScreen

