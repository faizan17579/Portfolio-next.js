"use client"

import { useState, useEffect } from "react"

export function RoleChanger() {
  const roles = ["Full Stack Developer", "Software Engineer", "AI Integration Engineer", "DevOps Engineer"]

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)

      setTimeout(() => {
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length)
        setIsAnimating(false)
      }, 500) // Half of the animation duration
    }, 3000) // Change role every 3 seconds

    return () => clearInterval(interval)
  }, [roles.length])

  return (
    <span className="relative inline-block">
      <span
        className={`text-white font-medium transition-all duration-500 ease-in-out ${
          isAnimating ? "opacity-0 transform translate-y-2 scale-95" : "opacity-100 transform translate-y-0 scale-100"
        }`}
      >
        <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
          {roles[currentRoleIndex]}
        </span>
      </span>

      {/* Typing cursor effect */}
      <span className="ml-1 animate-pulse text-purple-500 font-light">|</span>

      {/* Background glow effect */}
      <span
        className={`absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-600/20 blur-lg transition-opacity duration-500 ${
          isAnimating ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden="true"
      />
    </span>
  )
}
