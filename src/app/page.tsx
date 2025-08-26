"use client"

import { ArrowRight, Download, MapPin, Mail, Circle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CodeEditor } from "@/components/code-editor"
import { FloatingElements } from "@/components/floating-elements"
import { AboutSection } from "@/components/sections/about-section"
import { ServicesSection } from "@/components/sections/services-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ContactSection } from "@/components/sections/contact-section"
import { RoleChanger } from "@/components/role-changer"

export default function Home() {
  return (
    <div className="bg-black">
      <FloatingElements />

      {/* Hero Section */}
      <section id="home" className="min-h-screen relative overflow-hidden flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-purple-400 text-sm font-medium tracking-wide uppercase">Hello, I'm</p>
                <h1 className="text-5xl lg:text-7xl font-bold">
                  <span className="text-purple-500">Faizan Rasheed</span>
                </h1>
                <h2 className="text-2xl lg:text-3xl text-gray-300 font-light">
                  I'm a <RoleChanger />
                </h2>
              </div>

              <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                I craft exceptional digital experiences through clean code and innovative design. Specializing in modern
                web technologies to build scalable, user-centric applications that make a difference.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 text-sm">
                <div className="flex items-center gap-2 text-green-400">
                  <Circle className="h-3 w-3 fill-current" />
                  <span>Available for work</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="h-4 w-4" />
                  <span>G11 Islamabad</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Mail className="h-4 w-4" />
                  <span>faizanrasheed175@example.com</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700"
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <ArrowRight className="mr-2 h-4 w-4" />
                  View My Work
                </Button>
               <a href="/resume.pdf" download>
              <Button size="lg" variant="outline" className="border-gray-600 hover:bg-gray-800 bg-transparent">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </a>
              </div>
            </div>

            <div className="relative" style={{ marginTop: "-20px" }}>
             <CodeEditor />
            </div>
          </div>
        </div>

        {/* Background code snippets */}
        <div className="absolute top-20 left-10 text-green-400/20 font-mono text-sm">{'{ code: "life" }'}</div>
        <div className="absolute bottom-20 right-10 text-purple-400/20 font-mono text-sm">{"<Developer />"}</div>
        <div className="absolute bottom-10 left-20 text-blue-400/20 font-mono text-sm">
          {'console.log("Hello World")'}
        </div>
        <div className="absolute top-40 right-20 text-yellow-400/20 font-mono text-sm">{"npm run build"}</div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-purple-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Services Section */}
      <section id="services">
        <ServicesSection />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <ProjectsSection />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactSection />
      </section>
    </div>
  )
}
