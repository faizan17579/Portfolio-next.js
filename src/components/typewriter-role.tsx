"use client"

import { useState, useEffect, useMemo } from "react"

export function TypewriterRole() {
  const roles = useMemo(() => ["Full Stack Developer", "Software Engineer", "AI Integration Engineer", "DevOps Engineer"], [])

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]

    const timeout = setTimeout(
      () => {
        if (isPaused) {
          setIsPaused(false)
          setIsDeleting(true)
          return
        }

        if (isDeleting) {
          if (currentText === "") {
            setIsDeleting(false)
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
          } else {
            setCurrentText(currentRole.substring(0, currentText.length - 1))
          }
        } else {
          if (currentText === currentRole) {
            setIsPaused(true)
          } else {
            setCurrentText(currentRole.substring(0, currentText.length + 1))
          }
        }
      },
      isPaused ? 2000 : isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, isPaused, currentRoleIndex, roles])

  return (
    <span className="relative inline-block">
      <span className="text-white font-medium">
        <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
          {currentText}
        </span>
      </span>

      {/* Blinking cursor */}
      <span className="ml-1 animate-pulse text-purple-500 font-light">|</span>

      {/* Background glow effect */}
      <span
        className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-purple-600/10 blur-lg"
        aria-hidden="true"
      />
    </span>
  )
}
