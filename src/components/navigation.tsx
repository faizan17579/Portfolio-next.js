"use client"

import { useState, useEffect, useMemo } from "react"
import { Code, Home, User, Briefcase, FolderOpen, Mail, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const navItems = useMemo(() => [
    { href: "#home", label: "Home", icon: Home, id: "home" },
    { href: "#about", label: "About", icon: User, id: "about" },
    { href: "#services", label: "Services", icon: Briefcase, id: "services" },
    { href: "#projects", label: "Projects", icon: FolderOpen, id: "projects" },
    { href: "#contact", label: "Contact", icon: Mail, id: "contact" },
  ], [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.id)
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [navItems])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <Code className="h-8 w-8 text-purple-500" />
            <span className="text-xl font-bold text-white">Faizan Rasheed</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-purple-400 bg-purple-500/10"
                      : "text-gray-300 hover:text-white hover:bg-gray-800"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </button>
              )
            })}
          </div>

          {/* Mobile menu button - Always visible on mobile */}
          <div className="md:hidden flex items-center mobile-nav-button">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - Improved positioning and visibility */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-gray-800 mobile-nav-menu">
            <div className="px-4 py-3 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-md text-base font-medium transition-colors w-full text-left ${
                      activeSection === item.id
                        ? "text-purple-400 bg-purple-500/20"
                        : "text-gray-300 hover:text-white hover:bg-gray-800"
                    }`}
                  >
                    <Icon className="h-5 w-5 flex-shrink-0" />
                    <span>{item.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
