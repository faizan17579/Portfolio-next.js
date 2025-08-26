"use client"

import { MessageCircle, Rocket, Code2, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EarthCanvas, StarsCanvas } from "@/components/canvas"
import { InteractiveContactForm } from "@/components/interactive-contact-form"

export function ContactSection() {
  return (
    <div className="min-h-screen bg-black py-16 sm:py-20 relative overflow-hidden">
      {/* Cosmic background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10" />
        <StarsCanvas />

        {/* Stars background */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Rocket className="h-6 w-6 text-purple-400 animate-bounce" />
            <span className="text-purple-400 text-sm font-medium tracking-wide uppercase">Launch Your Project</span>
          </div>
         
        
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-start">
          {/* Contact Form */}
          <div className="relative order-2 lg:order-1">
            <InteractiveContactForm />
          </div>

          {/* 3D Earth - Integrated Design */}
          <div className="relative flex flex-col gap-3 sm:gap-4 order-1 lg:order-2">
          <div className="text-center text-gray-400 text-xs sm:text-sm italic">
              "Explore the technologies orbiting my development universe"
            </div>
            <div className="relative h-[360px] sm:h-[420px] md:h-[500px] lg:h-[600px] w-full">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-blue-900/5 rounded-2xl" />
              <EarthCanvas />
              
             
              <div className="absolute top-8 left-8 text-purple-400 text-sm font-mono bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm border border-purple-500/20">
                Frontend
              </div>
              <div className="absolute top-20 right-12 text-blue-400 text-sm font-mono bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm border border-blue-500/20">
                Backend
              </div>
              <div className="absolute bottom-32 left-16 text-green-400 text-sm font-mono bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm border border-green-500/20">
                Database
              </div>
              <div className="absolute bottom-16 right-20 text-pink-400 text-sm font-mono bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm border border-pink-500/20">
                Mobile
              </div>
              <div className="absolute top-1/2 left-4 text-yellow-400 text-sm font-mono bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm border border-yellow-500/20">
                AI/ML
              </div>
              <div className="absolute top-1/2 right-4 text-cyan-400 text-sm font-mono bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm border border-cyan-500/20">
                DevOps
              </div>
            </div>
           
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="mt-12 sm:mt-16 text-center relative">
          <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-6 sm:p-10 lg:p-12 border border-purple-500/20 relative overflow-hidden backdrop-blur-sm">
            {/* Animated cosmic background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-purple-500/5 animate-pulse" />

            {/* Floating tech elements */}
            <div className="absolute top-4 left-4 text-purple-400/30 animate-bounce">{"<>"}</div>
            <div className="absolute top-4 right-4 text-blue-400/30 animate-pulse">{"{ }"}</div>
            <div className="absolute bottom-4 left-8 text-green-400/30 animate-ping">npm</div>
            <div className="absolute bottom-4 right-8 text-yellow-400/30 animate-bounce">API</div>

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
                <MessageCircle className="h-12 w-12 sm:h-16 sm:w-16 text-purple-500 animate-bounce" />
                <Zap className="h-10 w-10 sm:h-12 sm:w-12 text-yellow-400 animate-pulse" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                Let's Build Something <span className="text-purple-500">Amazing</span>
              </h2>
              <p className="text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
                Whether you have a groundbreaking idea, need technical expertise, or want to collaborate on innovative
                projects, I'm here to help transform your vision into reality.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 hover:scale-105 transition-all duration-300 group"
                >
                  <Rocket className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  Schedule a Call
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-600 hover:bg-gray-800 bg-transparent hover:scale-105 transition-all duration-300 group"
                >
                  <Code2 className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                  View My Resume
                </Button>
              </div>
            </div>

            {/* Orbital particles */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-purple-400/20 rounded-full animate-ping"
                style={{
                  top: `${20 + i * 10}%`,
                  left: `${10 + i * 10}%`,
                  animationDelay: `${i * 0.6}s`,
                  animationDuration: "4s",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
