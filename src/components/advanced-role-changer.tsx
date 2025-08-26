"use client"

import { useState, useEffect } from "react"

export function AdvancedRoleChanger() {
  const roles = [
    {
      title: "Full Stack Developer",
      color: "from-purple-400 to-purple-600",
      icon: "💻",
    },
    {
      title: "Software Engineer",
      color: "from-blue-400 to-blue-600",
      icon: "⚙️",
    },
    {
      title: "AI Integration Engineer",
      color: "from-green-400 to-green-600",
      icon: "🤖",
    },
    {
      title: "DevOps Engineer",
      color: "from-orange-400 to-orange-600",
      icon: "🚀",
    },
  ]

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [showIcon, setShowIcon] = useState(false)

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]

    const timeout = setTimeout(
      () => {
        if (isPaused) {
          setShowIcon(true)
          setTimeout(() => {
            setShowIcon(false)
            setIsPaused(false)
            setIsDeleting(true)
          }, 1500)
          return
        }

        if (isDeleting) {
          if (currentText === "") {
            setIsDeleting(false)
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
          } else {
            setCurrentText(currentRole.title.substring(0, currentText.length - 1))
          }
        } else {
          if (currentText === currentRole.title) {
            setIsPaused(true)
          } else {
            setCurrentText(currentRole.title.substring(0, currentText.length + 1))
          }
        }
      },
      isPaused ? 100 : isDeleting ? 75 : 120,
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, isPaused, currentRoleIndex, roles])

  const currentRole = roles[currentRoleIndex]

  return (
    <span className="relative inline-block">
      <span className="text-white font-medium flex items-center gap-2">
        <span
          className={`bg-gradient-to-r ${currentRole.color} bg-clip-text text-transparent transition-all duration-300`}
        >
          {currentText}
        </span>

        {/* Animated icon */}
        <span
          className={`text-2xl transition-all duration-300 ${
            showIcon ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 rotate-180"
          }`}
        >
          {currentRole.icon}
        </span>
      </span>

      {/* Animated cursor */}
      <span
        className={`ml-1 text-purple-500 font-light transition-opacity duration-150 ${
          isPaused ? "animate-pulse" : "animate-ping"
        }`}
      >
        |
      </span>

      {/* Dynamic background glow */}
      <span
        className={`absolute inset-0 bg-gradient-to-r ${currentRole.color} opacity-10 blur-lg transition-all duration-500`}
        aria-hidden="true"
      />

      {/* Particle effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-gradient-to-r ${currentRole.color} rounded-full animate-ping`}
            style={{
              top: `${20 + i * 20}%`,
              left: `${80 + i * 5}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: "2s",
            }}
          />
        ))}
      </div>
    </span>
  )
}
