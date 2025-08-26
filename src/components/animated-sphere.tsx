"use client"

import { useEffect, useRef, useState } from "react"

export function AnimatedSphere() {
  const sphereRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }))
    setParticles(newParticles)
  }, [])

  useEffect(() => {
    const sphere = sphereRef.current
    const container = containerRef.current
    if (!sphere || !container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const deltaX = (e.clientX - centerX) / 15
      const deltaY = (e.clientY - centerY) / 15

      setMousePosition({ x: deltaX, y: deltaY })

      sphere.style.transform = `
        translate3d(${deltaX}px, ${deltaY}px, 0) 
        rotateX(${deltaY * 0.5}deg) 
        rotateY(${deltaX * 0.5}deg)
        scale(${isHovered ? 1.1 : 1})
      `
    }

    const handleMouseLeave = () => {
      setMousePosition({ x: 0, y: 0 })
      sphere.style.transform = "translate3d(0px, 0px, 0) rotateX(0deg) rotateY(0deg) scale(1)"
    }

    document.addEventListener("mousemove", handleMouseMove)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      container.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isHovered])

  return (
    <div
      ref={containerRef}
      className="relative w-96 h-96 flex items-center justify-center cursor-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main animated sphere */}
      <div
        ref={sphereRef}
        className="relative w-80 h-80 rounded-full transition-all duration-300 ease-out"
        style={{
          background: `
            conic-gradient(from 0deg, 
              #8b5cf6 0deg, 
              #3b82f6 72deg, 
              #06b6d4 144deg, 
              #10b981 216deg, 
              #f59e0b 288deg, 
              #8b5cf6 360deg
            )
          `,
          filter: "blur(1px)",
          boxShadow: `
            0 0 60px rgba(139, 92, 246, 0.4),
            0 0 120px rgba(59, 130, 246, 0.2),
            inset 0 0 60px rgba(255, 255, 255, 0.1)
          `,
        }}
      >
        {/* Inner glow layers */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-cyan-500/30 blur-md animate-spin-slow" />
        <div className="absolute inset-8 rounded-full bg-gradient-to-r from-cyan-500/40 via-purple-500/40 to-pink-500/40 blur-lg animate-reverse-spin" />

        {/* Central core */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className={`w-32 h-32 bg-white/10 rounded-full backdrop-blur-sm transition-all duration-500 ${
              isHovered ? "scale-125 bg-white/20" : "scale-100"
            }`}
            style={{
              boxShadow: "inset 0 0 30px rgba(255, 255, 255, 0.2)",
            }}
          />
        </div>

        {/* Rotating rings */}
        <div className="absolute inset-0 animate-spin-slow">
          <div className="absolute top-10 left-10 right-10 bottom-10 border border-white/20 rounded-full" />
        </div>
        <div className="absolute inset-0 animate-reverse-spin">
          <div className="absolute top-16 left-16 right-16 bottom-16 border border-purple-400/30 rounded-full" />
        </div>
      </div>

      {/* Interactive particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 bg-purple-400 rounded-full animate-ping pointer-events-none"
          style={{
            top: `${particle.y}%`,
            left: `${particle.x}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: "3s",
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
      ))}

      {/* Floating orbs */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`orb-${i}`}
          className={`absolute w-4 h-4 rounded-full animate-float pointer-events-none ${
            i % 3 === 0 ? "bg-purple-500/60" : i % 3 === 1 ? "bg-blue-500/60" : "bg-cyan-500/60"
          }`}
          style={{
            top: `${15 + i * 12}%`,
            left: `${10 + i * 15}%`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${4 + i}s`,
            transform: `translate(${mousePosition.x * (0.05 + i * 0.01)}px, ${mousePosition.y * (0.05 + i * 0.01)}px)`,
            transition: "transform 0.2s ease-out",
            filter: "blur(0.5px)",
          }}
        />
      ))}

      {/* Energy waves */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}>
        {[...Array(3)].map((_, i) => (
          <div
            key={`wave-${i}`}
            className="absolute inset-0 border border-purple-400/20 rounded-full animate-ping"
            style={{
              animationDelay: `${i * 0.5}s`,
              animationDuration: "2s",
            }}
          />
        ))}
      </div>

      {/* Mouse follower */}
      <div
        className="absolute w-6 h-6 bg-white/30 rounded-full pointer-events-none transition-all duration-100 ease-out backdrop-blur-sm"
        style={{
          transform: `translate(${mousePosition.x * 0.8}px, ${mousePosition.y * 0.8}px)`,
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Ambient light effect */}
      <div
        className="absolute inset-0 rounded-full transition-all duration-500"
        style={{
          background: `radial-gradient(circle at ${50 + mousePosition.x * 0.1}% ${50 + mousePosition.y * 0.1}%, 
            rgba(139, 92, 246, 0.1) 0%, 
            rgba(59, 130, 246, 0.05) 50%, 
            transparent 100%)`,
          transform: `scale(${isHovered ? 1.2 : 1})`,
        }}
      />
    </div>
  )
}
