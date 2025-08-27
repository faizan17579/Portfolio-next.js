"use client"

import { Globe, Palette, Server, Cpu, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState, useRef, useEffect } from "react"

export function ServicesSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const carouselRef = useRef<HTMLDivElement | null>(null)
  
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Building responsive, modern web applications using React, Next.js, and cutting-edge technologies.",
      features: ["Responsive Design", "Performance Optimization", "SEO Friendly", "Modern Frameworks"],
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces with focus on user experience.",
      features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
      color: "from-pink-500 to-pink-600",
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Developing robust server-side applications with secure APIs and database management.",
      features: ["RESTful APIs", "Database Design", "Authentication", "Cloud Integration"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Cpu,
      title: "AI Integration Engineer (Flask, Python)",
      description: "Designing and integrating AI services and RESTful APIs using Python and Flask for production apps.",
      features: ["Flask APIs", "Model Serving", "OpenAI/LLM Integration", "Docker & Deployment"],
      color: "from-green-500 to-green-600",
    },
  ]

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    const carousel = carouselRef.current
    if (carousel) {
      const cardWidth = carousel.clientWidth // full viewport width minus padding
      carousel.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      })
    }
  }

  const handleScroll = () => {
    const carousel = carouselRef.current
    if (carousel) {
      const cardWidth = carousel.clientWidth
      const scrollPosition = carousel.scrollLeft
      const newIndex = Math.round(scrollPosition / cardWidth)
      setCurrentSlide(newIndex)
    }
  }

  // Autoplay every 3s
  useEffect(() => {
    if (!carouselRef.current) return
    const id = setInterval(() => {
      setCurrentSlide((prev) => {
        const next = (prev + 1) % services.length
        // scroll container
        const carousel = carouselRef.current
        if (carousel) {
          const cardWidth = carousel.clientWidth
          carousel.scrollTo({ left: next * cardWidth, behavior: 'smooth' })
        }
        return next
      })
    }, 3000)
    return () => clearInterval(id)
  }, [services.length])

  useEffect(() => {
    const carousel = carouselRef.current
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll)
      return () => carousel.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            My <span className="text-purple-500">Services</span>
          </h1>
       
        </div> */}

        {/* Mobile Layout - Horizontal Carousel */}
        <div className="block md:hidden mb-16">
          <div 
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4 px-4"
          >
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className="bg-gray-900 border-gray-800 hover:border-purple-500/50 transition-all duration-300 group flex-shrink-0 w-[calc(100vw-2rem)] snap-center"
                >
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
          
          {/* Carousel Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-purple-500' : 'bg-gray-600/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Layout - Multi Column Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="bg-gray-900 border-gray-800 hover:border-purple-500/50 transition-all duration-300 group"
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-8 sm:p-12 border border-purple-500/20">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Start Your <span className="text-purple-500">Project</span>?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            Let&apos;s discuss your ideas and create something amazing together. I&apos;m here to help bring your vision to life
            with cutting-edge technology.
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700" onClick={scrollToContact}>
            Get In Touch
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
