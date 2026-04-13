"use client"

import { useEffect, useRef } from "react"

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const positionRef = useRef({ x: 0, y: 0 })
  const targetRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY }

      // Update dot immediately
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + "px"
        dotRef.current.style.top = e.clientY + "px"
      }
    }

    const handleMouseEnter = () => {
      if (cursorRef.current && dotRef.current) {
        cursorRef.current.opacity = "1"
        dotRef.current.opacity = "1"
      }
    }

    const handleMouseLeave = () => {
      if (cursorRef.current && dotRef.current) {
        cursorRef.current.opacity = "0"
        dotRef.current.opacity = "0"
      }
    }

    // Smooth animation loop for main cursor
    let animationFrameId: number
    const animate = () => {
      if (cursorRef.current) {
        positionRef.current.x += (targetRef.current.x - positionRef.current.x) * 0.15
        positionRef.current.y += (targetRef.current.y - positionRef.current.y) * 0.15

        cursorRef.current.style.left = positionRef.current.x + "px"
        cursorRef.current.style.top = positionRef.current.y + "px"
      }
      animationFrameId = requestAnimationFrame(animate)
    }

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (!prefersReducedMotion) {
      animate()
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseenter", handleMouseEnter)
      document.addEventListener("mouseleave", handleMouseLeave)

      return () => {
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseenter", handleMouseEnter)
        document.removeEventListener("mouseleave", handleMouseLeave)
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  return (
    <>
      {/* Hidden default cursor */}
      <style>{`
        body {
          cursor: none;
        }
        button, a, input, textarea {
          cursor: none !important;
        }
      `}</style>

      {/* Main cursor (trailing circle) */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed z-50 w-8 h-8 border-2 border-amber-400 rounded-full mix-blend-screen opacity-0 transition-opacity duration-300"
        style={{
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 20px rgba(251, 191, 36, 0.6), inset 0 0 10px rgba(251, 191, 36, 0.3)"
        }}
      />

      {/* Dot cursor (immediate response) */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed z-50 w-2 h-2 bg-amber-400 rounded-full mix-blend-screen opacity-0 transition-opacity duration-300"
        style={{
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 8px rgba(251, 191, 36, 0.8)"
        }}
      />
    </>
  )
}
