"use client"

import { useState, useEffect } from "react"

export function CodeEditor() {
  const [currentLine, setCurrentLine] = useState(0)

  const codeLines = [
    "const engineer = {",
    '  name: "Faizan Rasheed",',
    "  roles: [",
    '    "Full Stack Developer",',
    '    "Software Engineer",',
    '    "AI Integration Engineer",',
    '    "DevOps Engineer"',
    "  ],",
    "  skills: [",
    '    "React", "Next.js", "TypeScript",',
    '    "Python", "Docker", "AWS",',
    '    "AI/ML", "CI/CD", "Kubernetes"',
    "  ],",
    '  passion: "Building innovative solutions",',
    "  available: true",
    "};",
    "",
    "export default engineer;",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % codeLines.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [codeLines.length])

  return (
    <div className="relative">
      <div className="bg-gray-900 rounded-lg border border-gray-700 overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-gray-400 text-sm">engineer.js</span>
        </div>

        <div className="p-4 font-mono text-sm">
          {codeLines.map((line, index) => (
            <div
              key={index}
              className={`flex items-center space-x-4 py-1 transition-all duration-300 ${
                index === currentLine ? "bg-purple-500/10 border-l-2 border-purple-500" : ""
              }`}
            >
              <span className="text-gray-500 w-6 text-right">{index + 1}</span>
              <span
                className={`${
                  line.includes("const") || line.includes("export")
                    ? "text-purple-400"
                    : line.includes('"')
                      ? "text-green-400"
                      : line.includes("//")
                        ? "text-gray-500"
                        : "text-gray-300"
                }`}
              >
                {line}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Floating code elements */}
      <div className="absolute -top-4 -right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-mono animate-pulse">
        ⚡ Live
      </div>
    </div>
  )
}
