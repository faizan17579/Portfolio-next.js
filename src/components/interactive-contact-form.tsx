"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Send, Mail, MapPin, Phone, Sparkles, Code, Wifi } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export function InteractiveContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([])
  const formRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Generate particles when form is focused
    if (focusedField) {
      const newParticles = Array.from({ length: 12 }, (_, i) => ({
        id: Date.now() + i,
        x: Math.random() * 100,
        y: Math.random() * 100,
      }))
      setParticles(newParticles)

      const timer = setTimeout(() => setParticles([]), 3000)
      return () => clearTimeout(timer)
    }
  }, [focusedField])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission with success animation
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "faizanrasheed2175@gmail.com",
      href: "mailto:faizanrasheed2175@gmail.com",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 (304) 3332175",
      href: "tel:+923043332175",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Islamabad, Pakistan",
      href: "#",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/10",
    },
  ]

  return (
    <div className="space-y-8">
      <Card
        ref={formRef}
        className={`bg-gray-900/80 backdrop-blur-sm border-gray-800 relative overflow-hidden transition-all duration-500 ${
          focusedField ? "border-purple-500/50 shadow-2xl shadow-purple-500/20" : ""
        }`}
      >
        {/* Digital rain effect */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-px h-8 bg-gradient-to-b from-purple-400 via-blue-400 to-transparent animate-pulse pointer-events-none"
            style={{
              top: `${particle.y}%`,
              left: `${particle.x}%`,
              animationDuration: "2s",
            }}
          />
        ))}

        {/* Circuit board pattern background */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="circuit" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 20h40M20 0v40" stroke="#8b5cf6" strokeWidth="0.5" fill="none" />
                <circle cx="20" cy="20" r="2" fill="#8b5cf6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>

        {/* Animated border gradient */}
        <div
          className={`absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 opacity-0 transition-opacity duration-500 ${
            focusedField ? "opacity-100" : ""
          }`}
        />

        <CardContent className="p-8 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2">
              <Code className="h-6 w-6 text-purple-400" />
              <h2 className="text-2xl font-bold text-white">Initialize Contact</h2>
            </div>
            <div className="flex items-center gap-1">
              <Wifi
                className={`h-4 w-4 transition-all duration-300 ${
                  focusedField ? "text-green-400 animate-pulse" : "text-gray-600"
                }`}
              />
              <Sparkles
                className={`h-5 w-5 transition-all duration-300 ${
                  focusedField ? "text-purple-400 animate-spin" : "text-gray-600"
                }`}
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative group">
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                {"> name: string"}
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name..."
                value={formData.name}
                onChange={handleChange}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                className={`bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 transition-all duration-300 font-mono ${
                  focusedField === "name" ? "border-purple-500 shadow-lg shadow-purple-500/20 scale-[1.02]" : ""
                }`}
                required
              />
              {focusedField === "name" && (
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg blur-sm -z-10 animate-pulse" />
              )}
            </div>

            <div className="relative group">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                {"> email: string"}
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@domain.com"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                className={`bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 transition-all duration-300 font-mono ${
                  focusedField === "email" ? "border-blue-500 shadow-lg shadow-blue-500/20 scale-[1.02]" : ""
                }`}
                required
              />
              {focusedField === "email" && (
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-sm -z-10 animate-pulse" />
              )}
            </div>

            <div className="relative group">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 font-mono">
                {"> message: string[]"}
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="// Tell me about your project or idea..."
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                className={`bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 min-h-[120px] transition-all duration-300 font-mono ${
                  focusedField === "message" ? "border-green-500 shadow-lg shadow-green-500/20 scale-[1.02]" : ""
                }`}
                required
              />
              {focusedField === "message" && (
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-purple-500/20 rounded-lg blur-sm -z-10 animate-pulse" />
              )}
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className={`w-full bg-purple-600 hover:bg-purple-700 transition-all duration-300 relative overflow-hidden font-mono ${
                isSubmitting ? "scale-95" : "hover:scale-105"
              }`}
            >
              {isSubmitting && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 animate-pulse" />
              )}
              <div className="relative flex items-center justify-center">
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                    {"> Transmitting..."}
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    {"> Execute Send()"}
                  </>
                )}
              </div>

              {/* Button particles */}
              {!isSubmitting && (
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-px h-px bg-white rounded-full animate-ping"
                      style={{
                        top: `${20 + i * 8}%`,
                        left: `${10 + i * 10}%`,
                        animationDelay: `${i * 0.15}s`,
                      }}
                    />
                  ))}
                </div>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Enhanced Contact Information */}
      <div className="space-y-4">
        {contactInfo.map((info, index) => {
          const Icon = info.icon
          return (
            <a
              key={index}
              href={info.href}
              className={`flex items-center gap-4 p-4 bg-gray-900/60 backdrop-blur-sm rounded-lg border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group relative overflow-hidden`}
            >
              {/* Hover effect background */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              />

              {/* Connection line animation */}
              <div className="absolute left-0 top-1/2 w-0 h-px bg-purple-400 group-hover:w-full transition-all duration-500 transform -translate-y-1/2" />

              <div
                className={`${info.bgColor} p-3 rounded-lg group-hover:scale-110 transition-transform duration-300 relative z-10 border border-gray-700/50`}
              >
                <Icon className={`h-5 w-5 bg-gradient-to-r ${info.color} bg-clip-text text-transparent`} />
              </div>
              <div className="relative z-10">
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors font-mono">
                  {info.label.toLowerCase()}:
                </p>
                <p className="text-white font-medium group-hover:text-purple-300 transition-colors font-mono">
                  "{info.value}"
                </p>
              </div>

              {/* Data stream particles */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-px h-4 bg-purple-400/50 animate-pulse"
                    style={{
                      top: `${30 + i * 20}%`,
                      right: `${15 + i * 10}%`,
                      animationDelay: `${i * 0.2}s`,
                      animationDuration: "1.5s",
                    }}
                  />
                ))}
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}
