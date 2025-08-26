"use client"

import Image from "next/image"
import { ExternalLink, Github, Heart, Eye, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect, useRef } from "react"

export function ProjectsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [activeTab, setActiveTab] = useState<'projects' | 'certificates'>('projects')
  const carouselRef = useRef<HTMLDivElement | null>(null)
  const [isInteracting, setIsInteracting] = useState(false)
  
  // Carousel states for different tabs
  const [certificatesSlide, setCertificatesSlide] = useState(0)
  const [isCertificatesAutoPlaying, setIsCertificatesAutoPlaying] = useState(true)
  
  const projects = [
    {
      title: "Factory Copilot — Worker Performance Analyzer",
      description:
        "An AI-powered industrial assistant that analyzes worker task execution on assembly lines, providing real-time insights, anomaly detection, and training recommendations. Built with Python (Flask), machine learning, and a modular dashboard for factory managers.",
      image: "/copilot.png",
      technologies: ["Python", "Flask", "Machine Learning", "AI Analytics","Industrial IoT Integration"],
      likes: 124,
      views: 45,
      github: "https://github.com/visionrd-ai/copilot-haval",
      featured: true,
    },
    {
      title: "TA and LD Management System",
      description:
        "A TA (Teaching Assistant) and LD (Lecture Delivery) management system designed to streamline TA assignments, scheduling, availability tracking, and lecture content delivery to ensure smooth course operations.",
      image: "/ld.png",
      technologies: ["C#", "Databases", "Database Management System (DBMS)", ".NET Framework", "Software Development Life Cycle (SDLC)"],
      likes: 76,
      views: 29,
      github: "https://github.com/faizan17579/Ta-Ld-System-.NET",
      featured: true,
    },
    {
      title: "Smart Study Planner",
      description:
        "AI-powered study planner built with Flask, Python, HTML, and Tailwind CSS to generate personalized schedules and predictions. Uses CNN for emotion recognition and CatBoost for score forecasting to boost productivity.",
      image: "/study.png",
      technologies: ["Artificial Intelligence (AI)", "Machine Learning", "Flask", "Python", "Tailwind CSS", "CNN", "CatBoost"],
      likes: 102,
      views: 40,
      github: "https://github.com/faizan17579/Smart-study-panner",
      featured: true,
    },
    {
      title: "Event Management System",
      description:
        "Full-stack event management platform built with MERN stack featuring role-based access for Admin, Organizer, and Attendee. Includes event creation, registration, feedback, and personalized recommendations.",
      image: "/eventverse.png",
      technologies: ["MERN Stack", "Front-End Development", "MongoDB", "React.js",   "Software Development Life Cycle (SDLC)"],
      likes: 95,
      views: 38,
      github: "https://github.com/faizan17579/Event-Verse",
      featured: true,
    },
    {
      title: "DevOps Automation for Eventverse",
      description:
        "Containerized the Eventverse MERN application using Docker for consistent deployment across environments. Deployed and managed the application on a Kubernetes cluster for scalability and fault tolerance. Set up CI/CD pipelines to automate building, testing, and deployment.",
      image: "/docker.png",
      technologies: ["Docker", "Infrastructure as Code","DevOps", "Kubernetes", "CI/CD" ],
      likes: 87,
      views: 35,
      github: "https://github.com/faizan17579/Event-Verse",
      featured: true,
    },
    {
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media management with real-time data visualization, post scheduling, and performance tracking.",
      image: "/social-media-analytics-dashboard.png",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      likes: 156,
      views: 78,
      github: "#",
      featured: false,
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website with smooth animations, dark mode support, and optimized performance.",
      image: "/portfolio-website-design.png",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
      likes: 203,
      views: 91,
      github: "#",
      featured: false,
    },
    {
      title: "Chat Application",
      description:
        "Real-time chat application with group messaging, file sharing, emoji support, and end-to-end encryption.",
      image: "/chat-application-interface.png",
      technologies: ["React", "Socket.io", "Express", "MongoDB"],
      likes: 134,
      views: 56,
      github: "#",
      featured: false,
    },
    {
      title: "HomeServiceXpress",
      description:
        "An all-inclusive handyman and home services application that revolutionizes how people access and interact with qualified service providers. Features a digital ecosystem connecting renters, homeowners, and service providers for reliable home improvement services.",
      image: "/home.png",
      technologies: ["Java", "Spring Boot", "JWT Authentication", "MySQL", "REST API", "Maven"],
      likes: 89,
      views: 42,
      github: "https://github.com/faizan17579/SDA_Final_Spring_Boot_Project",
      featured: true,
    },
  ]

  const certificates = [
    {
      title: "AWS Cloud Technical Essentials",
      issuer: "Amazon Web Services (AWS)",
      date: "Feb 2025",
      image: "/aws.png",
      credentialId: "SC0M7LJKQ3HC",
      description: "Comprehensive understanding of AWS cloud computing fundamentals and core services.",
      category: "Cloud Computing"
    },
    {
      title: "UX Design Fundamentals",
      issuer: "California Institute of the Arts",
      date: "Feb 2025",
      image: "/ui.png",
      credentialId: "PT2X9W8MCPI7",
      description: "Mastery of user interface design principles, human-computer interaction, and Figma software.",
      category: "UX/UI Design"
    },
    {
      title: "Artificial Intelligence Essentials V2",
      issuer: "Coursera",
      date: "Jan 2025",
      image: "/ai.png",
      credentialId: "AI-Essentials-V2",
      description: "Advanced understanding of artificial intelligence concepts and practical applications.",
      category: "Artificial Intelligence"
    },
    {
      title: "Introduction to Artificial Intelligence (AI)",
      issuer: "IBM",
      date: "Jan 2025",
      image: "/ai2.png",
      credentialId: "NI0MJC229GSN",
      description: "Comprehensive introduction to AI fundamentals, machine learning, and neural networks.",
      category: "Artificial Intelligence"
    },
    {
      title: "Introduction to Networking",
      issuer: "NVIDIA",
      date: "Jan 2025",
      image: "/net.png",
      credentialId: "XS02PNKGP4B5",
      description: "Understanding of networking fundamentals, protocols, and network architecture.",
      category: "Networking"
    },
    {
      title: "Process Mining",
      issuer: "Eindhoven University of Technology",
      date: "Jan 2025",
      image: "/process.png",
      credentialId: "3GTSYMQZAR8Z",
      description: "Expertise in process mining, Petri nets, business process improvement, and troubleshooting.",
      category: "Business Process"
    },
    {
      title: "Python for Data Science, AI & Development",
      issuer: "IBM",
      date: "Sep 2023",
      image: "/python.png",
      credentialId: "6WMVGGWTCRS5",
      description: "Advanced Python programming skills for data science, AI development, and software engineering.",
      category: "Programming"
    }
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  // other projects removed per request
  
  // Auto-rotation logic for one-by-one movement with fixed card sizes
  const totalSlides = featuredProjects.length - 2 // Show 3 at a time, so we can move (total - 2) times
  const totalCertificatesSlides = Math.max(0, certificates.length - 2) // Show 3 at a time
  
  // Auto-rotation logic for one-by-one movement with fixed card sizes
  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 3000) // Change slide every 5 seconds
    
    return () => clearInterval(interval)
  }, [isAutoPlaying, totalSlides])
  
  // Auto-rotation for certificates
  useEffect(() => {
    if (!isCertificatesAutoPlaying) return
    
    const interval = setInterval(() => {
      setCertificatesSlide((prev) => (prev + 1) % Math.max(1, totalCertificatesSlides))
    }, 3000) // Change slide every 5 seconds
    
    return () => clearInterval(interval)
  }, [isCertificatesAutoPlaying, totalCertificatesSlides])
  
  // Mouse wheel support
  useEffect(() => {
    const el = carouselRef.current
    if (!el) return

    const handleWheel = (e: WheelEvent) => {
      // Only hijack wheel when not interacting with a card overlay/content
      if (isInteracting) {
        // Allow default scrolling within the modal/content
        return
      }
      e.preventDefault()
      if (e.deltaY > 0) {
        setCurrentSlide((prev) => (prev + 1) % totalSlides)
        setIsAutoPlaying(false)
        setTimeout(() => setIsAutoPlaying(true), 3000)
      } else if (e.deltaY < 0) {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
        setIsAutoPlaying(false)
        setTimeout(() => setIsAutoPlaying(true), 3000)
      }
    }

    el.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      el.removeEventListener('wheel', handleWheel)
    }
  }, [totalSlides, isInteracting])
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    // Resume auto-play after 3 seconds
    setTimeout(() => setIsAutoPlaying(true), 3000)
  }

  const goToCertificatesSlide = (index: number) => {
    setCertificatesSlide(index)
    setIsCertificatesAutoPlaying(false)
    // Resume auto-play after 3 seconds
    setTimeout(() => setIsCertificatesAutoPlaying(true), 3000)
  }

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-purple-400 text-sm font-medium tracking-wide uppercase">My recent work</span>
          </div>
          
         

          {/* Tab Navigation */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'projects'
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/25'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-2">
                <Github className="h-4 w-4" />
                Projects
              </div>
            </button>
            <button
              onClick={() => setActiveTab('certificates')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === 'certificates'
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/25'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                Certificates
              </div>
            </button>
          </div>
        </div>

        {/* Projects Tab Content */}
        {activeTab === 'projects' && (
          <>
            {/* Featured Projects Carousel - Responsive Design */}
            <div className="relative mb-16">
              {/* Mobile Layout - Vertical Stack */}
              <div className="block md:hidden">
                <div className="grid gap-4">
                  {featuredProjects.map((project, index) => (
                    <div key={index} className="w-full">
                      <Card
                        className="bg-gray-900 border-gray-800 overflow-hidden group hover:border-purple-500/50 transition-all duration-300 h-[500px] relative"
                        onMouseEnter={() => { setIsAutoPlaying(false); setIsInteracting(true) }}
                        onMouseLeave={() => { setIsAutoPlaying(true); setIsInteracting(false) }}
                        onFocus={() => { setIsAutoPlaying(false); setIsInteracting(true) }}
                        onBlur={() => { setIsAutoPlaying(true); setIsInteracting(false) }}
                        onTouchStart={() => { setIsAutoPlaying(false); setIsInteracting(true) }}
                        onTouchEnd={() => { setIsAutoPlaying(true); setIsInteracting(false) }}
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 h-full">
                          <div className="relative overflow-hidden rounded-lg">
                            <Image
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              width={500}
                              height={300}
                              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-4 right-4 flex gap-2">
                              <div className="bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                                <Heart className="h-3 w-3 text-red-400" />
                                <span className="text-xs text-white">{project.likes}</span>
                              </div>
                              <div className="bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                                <Eye className="h-3 w-3 text-blue-400" />
                                <span className="text-xs text-white">{project.views}</span>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-3 flex flex-col h-full">
                            <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                              {project.title}
                            </h3>
                            
                            <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">
                              {project.description}
                            </p>

                            <div className="flex flex-wrap gap-1">
                              {project.technologies.slice(0, 4).map((tech, techIndex) => (
                                <Badge key={techIndex} variant="secondary" className="bg-purple-600/20 text-purple-300 text-xs">
                                  {tech}
                                </Badge>
                              ))}
                              {project.technologies.length > 4 && (
                                <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 text-xs">
                                  +{project.technologies.length - 4}
                                </Badge>
                              )}
                            </div>

                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block mt-auto"
                            >
                              <Button
                                size="sm"
                                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-sm h-9"
                              >
                                <Github className="h-4 w-4 mr-2" />
                                Code
                              </Button>
                            </a>
                          </div>
                        </div>

                        {/* Hover Overlay Modal for Mobile */}
                        <div className="absolute inset-0 bg-black/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col p-6">
                          {/* Scrollable Content Area */}
                          <div className="flex-1 overflow-hidden">
                            <div className="h-full overflow-y-auto hide-scrollbar">
                              <div className="text-center space-y-4">
                                <h3 className="text-lg font-bold text-white">
                                  {project.title}
                                </h3>
                                
                                <p className="text-gray-300 text-sm leading-relaxed">
                                  {project.description}
                                </p>

                                <div className="space-y-2">
                                  <p className="text-purple-400 text-xs font-medium">Technologies Used:</p>
                                  <div className="flex flex-wrap gap-1 justify-center">
                                    {project.technologies.map((tech, i) => (
                                      <Badge key={i} className="bg-purple-600/30 text-purple-50 text-[10px]">
                                        {tech}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Fixed GitHub Icon Button - Always Visible */}
                          <div className="flex justify-center pt-4 flex-shrink-0">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center w-12 h-12 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors duration-200"
                            >
                              <Github className="h-5 w-5 text-white" />
                            </a>
                          </div>
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop Layout - Horizontal Carousel */}
              <div ref={carouselRef} className="hidden md:block overflow-hidden">
                <div
                  className="flex transition-transform duration-700 ease-out gap-6"
                  style={{ transform: `translateX(-${currentSlide * 340}px)` }}
                >
                  {featuredProjects.map((project, index) => (
                    <div key={index} className="w-[320px] max-w-sm flex-shrink-0">
                      <Card
                        className="bg-gray-900 border border-gray-800 overflow-hidden group hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500 rounded-xl h-[420px] relative"
                        onMouseEnter={() => { setIsAutoPlaying(false); setIsInteracting(true) }}
                        onMouseLeave={() => { setIsAutoPlaying(true); setIsInteracting(false) }}
                        onFocus={() => { setIsAutoPlaying(false); setIsInteracting(true) }}
                        onBlur={() => { setIsAutoPlaying(true); setIsInteracting(false) }}
                        onTouchStart={() => { setIsAutoPlaying(false); setIsInteracting(true) }}
                        onTouchEnd={() => { setIsAutoPlaying(true); setIsInteracting(false) }}
                      >
                        {/* Image */}
                        <div className="relative">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            width={400}
                            height={220}
                            className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-3 right-3 flex gap-2">
                            <span className="bg-black/70 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                              <Heart className="h-3 w-3 text-red-400" /> {project.likes}
                            </span>
                            <span className="bg-black/70 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                              <Eye className="h-3 w-3 text-blue-400" /> {project.views}
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <CardContent className="p-4 flex flex-col h-full">
                          <h3 className="text-base font-semibold text-white group-hover:text-purple-400 transition-colors">
                            {project.title}
                          </h3>

                          <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                            {project.description}
                          </p>

                          {/* Tech badges */}
                          <div className="flex flex-wrap gap-1 mt-3">
                            {project.technologies.slice(0, 3).map((tech, i) => (
                              <Badge key={i} className="bg-purple-600/20 text-purple-300 text-[10px]">
                                {tech}
                              </Badge>
                            ))}
                            {project.technologies.length > 3 && (
                              <Badge className="bg-purple-600/20 text-purple-300 text-[10px]">
                                +{project.technologies.length - 3}
                              </Badge>
                            )}
                          </div>

                          {/* Button */}
                          <div className="mt-4">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Button
                                size="sm"
                                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-xs h-8"
                              >
                                <Github className="h-3 w-3 mr-2" />
                                Code
                              </Button>
                            </a>
                          </div>
                        </CardContent>

                        {/* Hover Overlay Modal */}
                        <div className="absolute inset-0 bg-black/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col p-6">
                          {/* Scrollable Content Area */}
                          <div className="flex-1 overflow-hidden">
                            <div className="h-full overflow-y-auto hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                              <div className="text-center space-y-4">
                                <h3 className="text-lg font-bold text-white">
                                  {project.title}
                                </h3>
                                
                                <p className="text-gray-300 text-sm leading-relaxed">
                                  {project.description}
                                </p>

                                <div className="space-y-2">
                                  <p className="text-purple-400 text-xs font-medium">Technologies Used:</p>
                                  <div className="flex flex-wrap gap-1 justify-center">
                                    {project.technologies.map((tech, i) => (
                                      <Badge key={i} className="bg-purple-600/30 text-purple-50 text-[10px]">
                                        {tech}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Fixed GitHub Icon Button - Always Visible */}
                          <div className="flex justify-center pt-4 flex-shrink-0">
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center w-12 h-12 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors duration-200"
                            >
                              <Github className="h-5 w-5 text-white" />
                            </a>
                          </div>
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carousel Indicators - Only for Desktop */}
              <div className="hidden md:flex justify-center mt-6 gap-2">
                {Array.from({ length: totalSlides }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-purple-500' : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Other Projects removed */}
          </>
        )}

        {/* Certificates Tab Content */}
        {activeTab === 'certificates' && (
          <>
            {/* Featured Certificates */}
            <div className="relative mb-16">
              {/* <h2 className="text-3xl font-bold text-center mb-8">
                Featured <span className="text-purple-500">Certifications</span>
              </h2> */}
              
              {/* Mobile Layout - Vertical Stack */}
              <div className="block md:hidden">
                <div className="grid gap-4">
                  {certificates.slice(0, 3).map((cert, index) => (
                    <div key={index} className="w-full">
                      <Card className="bg-gray-900 border-gray-800 overflow-hidden group hover:border-purple-500/50 transition-all duration-300 h-[500px] relative">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 h-full">
                          <div className="relative overflow-hidden rounded-lg">
                            <Image
                              src={cert.image || "/placeholder.svg"}
                              alt={cert.title}
                              width={500}
                              height={300}
                              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-4 right-4 flex gap-2">
                              <div className="bg-black/70 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                                <Award className="h-3 w-3 text-purple-400" />
                                <span className="text-xs text-white">Certified</span>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-3 flex flex-col h-full">
                            <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                              {cert.title}
                            </h3>
                            
                            <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">
                              {cert.description}
                            </p>

                            <div className="flex flex-wrap gap-1">
                              <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 text-xs">
                                {cert.issuer}
                              </Badge>
                              <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 text-xs">
                                {cert.category}
                              </Badge>
                              <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 text-xs">
                                {cert.date}
                              </Badge>
                            </div>

                            <div className="mt-auto">
                              <Button
                                size="sm"
                                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-sm h-9"
                              >
                                <Award className="h-4 w-4 mr-2" />
                                View Details
                              </Button>
                            </div>
                          </div>
                        </div>

                        {/* Hover Overlay Modal for Mobile */}
                        <div className="absolute inset-0 bg-black/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col p-6">
                          {/* Scrollable Content Area */}
                          <div className="flex-1 overflow-hidden">
                            <div className="h-full overflow-y-auto hide-scrollbar">
                              <div className="text-center space-y-4">
                                <h3 className="text-lg font-bold text-white">
                                  {cert.title}
                                </h3>
                                
                                <p className="text-gray-300 text-sm leading-relaxed">
                                  {cert.description}
                                </p>

                                <div className="space-y-2">
                                  <p className="text-purple-400 text-xs font-medium">Issuer:</p>
                                  <div className="flex items-center gap-1 justify-center">
                                    <Award className="h-3 w-3" />
                                    {cert.issuer}
                                  </div>
                                </div>
                                <div className="space-y-2">
                                  <p className="text-purple-400 text-xs font-medium">Credential ID:</p>
                                  <div className="flex items-center gap-1 justify-center">
                                    <span className="text-gray-400 text-xs">{cert.credentialId}</span>
                                  </div>
                                </div>
                                <div className="space-y-2">
                                  <p className="text-purple-400 text-xs font-medium">Category:</p>
                                  <div className="flex items-center gap-1 justify-center">
                                    <span className="text-gray-400 text-xs">{cert.category}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Fixed Award Icon Button - Always Visible */}
                          <div className="flex justify-center pt-4 flex-shrink-0">
                            <a
                              href="#"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center w-12 h-12 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors duration-200"
                            >
                              <Award className="h-5 w-5 text-white" />
                            </a>
                          </div>
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop Layout - Horizontal Carousel */}
              <div className="hidden md:block overflow-hidden">
                <div
                  className="flex transition-transform duration-700 ease-out gap-6"
                  style={{ transform: `translateX(-${certificatesSlide * 340}px)` }}
                >
                  {certificates.map((cert, index) => (
                    <div key={index} className="w-[320px] max-w-sm flex-shrink-0">
                      <Card className="bg-gray-900 border border-gray-800 overflow-hidden group hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500 rounded-xl h-[420px] relative">
                        {/* Image */}
                        <div className="relative">
                          <Image
                            src={cert.image || "/placeholder.svg"}
                            alt={cert.title}
                            width={400}
                            height={220}
                            className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-3 right-3 flex gap-2">
                            <span className="bg-black/70 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                              <Award className="h-3 w-3 text-purple-400" /> Certified
                            </span>
                          </div>
                        </div>

                        {/* Content */}
                        <CardContent className="p-4 flex flex-col h-full">
                          <h3 className="text-base font-semibold text-white group-hover:text-purple-400 transition-colors">
                            {cert.title}
                          </h3>

                          <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                            {cert.description}
                          </p>

                          {/* Badges */}
                          <div className="flex flex-wrap gap-1 mt-3">
                            <Badge className="bg-purple-600/20 text-purple-300 text-[10px]">
                              {cert.issuer}
                            </Badge>
                            <Badge className="bg-purple-600/20 text-purple-300 text-[10px]">
                              {cert.category}
                            </Badge>
                          </div>

                          {/* Button */}
                          <div className="mt-4">
                            <Button
                              size="sm"
                              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-xs h-8"
                            >
                              <Award className="h-3 w-3 mr-2" />
                              View Details
                            </Button>
                          </div>
                        </CardContent>

                        {/* Hover Overlay Modal */}
                        <div className="absolute inset-0 bg-black/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col p-6">
                          {/* Scrollable Content Area */}
                          <div className="flex-1 overflow-hidden">
                            <div className="h-full overflow-y-auto hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                              <div className="text-center space-y-4">
                                <h3 className="text-lg font-bold text-white">
                                  {cert.title}
                                </h3>
                                
                                <p className="text-gray-300 text-sm leading-relaxed">
                                  {cert.description}
                                </p>

                                <div className="space-y-2">
                                  <p className="text-purple-400 text-xs font-medium">Issuer:</p>
                                  <div className="flex items-center gap-1 justify-center">
                                    <Award className="h-3 w-3" />
                                    {cert.issuer}
                                  </div>
                                </div>
                                <div className="space-y-2">
                                  <p className="text-purple-400 text-xs font-medium">Credential ID:</p>
                                  <div className="flex items-center gap-1 justify-center">
                                    <span className="text-gray-400 text-xs">{cert.credentialId}</span>
                                  </div>
                                </div>
                                <div className="space-y-2">
                                  <p className="text-purple-400 text-xs font-medium">Category:</p>
                                  <div className="flex items-center gap-1 justify-center">
                                    <span className="text-gray-400 text-xs">{cert.category}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Fixed Award Icon Button - Always Visible */}
                          <div className="flex justify-center pt-4 flex-shrink-0">
                            <a
                              href="#"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center w-12 h-12 bg-purple-600 hover:bg-purple-700 rounded-full transition-colors duration-200"
                            >
                              <Award className="h-5 w-5 text-white" />
                            </a>
                          </div>
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carousel Indicators - Only for Desktop */}
              {totalCertificatesSlides > 0 && (
                <div className="hidden md:flex justify-center mt-6 gap-2">
                  {Array.from({ length: totalCertificatesSlides }, (_, index) => (
                    <button
                      key={index}
                      onClick={() => goToCertificatesSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === certificatesSlide ? 'bg-purple-500' : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </>
        )}

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-12 border border-purple-500/20">
          <h2 className="text-3xl font-bold mb-4">
            Like What You <span className="text-purple-500">See</span>?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            I'm always working on new projects and exploring cutting-edge technologies. Let's collaborate and create
            something amazing together.
          </p>
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Start a Project
          </Button>
        </div>
      </div>
    </div>
  )
}
