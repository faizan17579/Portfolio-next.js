"use client"

import { useEffect, useState } from "react"

export function FloatingElements() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-20 w-2 h-2 bg-purple-500 rounded-full animate-ping"></div>
      <div className="absolute top-40 right-32 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-green-400 rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 right-20 w-1 h-1 bg-yellow-400 rounded-full animate-ping"></div>
      <div className="absolute top-60 left-1/3 w-1 h-1 bg-red-400 rounded-full animate-pulse"></div>
    </div>
  )
}
