"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, Award, Users, Coffee } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AboutSection() {




  return (
    <div className="min-h-screen bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-purple-400 text-sm font-medium tracking-wide uppercase">
              Get to know me
            </span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Passionate software engineer dedicated to crafting innovative digital solutions that make a meaningful
            impact in the world of technology.
          </p>
        </motion.div> */}

        {/* About & Stats */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Section (Text) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h1 className="text-4xl font-bold text-white">
              🚀 Hey, I’m <span className="text-purple-500">Faizan Rasheed</span>!
            </h1>

            <p className="text-gray-400 leading-relaxed text-lg">
  I’m a <span className="text-purple-400 font-semibold">Final-year Software Engineering student</span> at 
  <span className="text-blue-400 font-semibold"> FAST Islamabad</span>, passionate about building 
  <span className="text-pink-400"> scalable web apps 🚀</span> and 
  <span className="text-green-400"> AI-driven solutions 🤖</span>.
  <br /><br />
  Experienced with the 
  <span className="text-yellow-400"> MERN stack</span>, 
  <span className="text-purple-400"> Python</span>, 
  <span className="text-blue-400"> Next.js</span>, and 
  <span className="text-orange-400"> DevOps practices ⚡</span>, with hands-on projects and internships in 
  <span className="text-pink-400"> AI</span> and 
  <span className="text-teal-400"> web development</span>.
  <br /><br />
  Continuously learning through certifications in 
  <span className="text-cyan-400"> Cloud ☁️</span>, 
  <span className="text-purple-400"> AI</span>, and 
  <span className="text-indigo-400"> modern software practices</span>.
  <br /><br />
  I specialize in creating 
  <span className="text-purple-400"> AI-based applications 🤩</span>, integrating 
  <span className="text-green-400"> machine learning models</span> into web platforms, building 
  <span className="text-blue-400"> scalable backend systems</span>, and leveraging 
  <span className="text-orange-400"> DevOps tools ⚙️</span> to automate deployment and ensure reliable, 
  <span className="text-pink-400 font-semibold"> production-ready solutions 🔥</span>.
</p>

          </motion.div>

            {/* Right Section (Image) */}
            <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Image
              src="/professional-developer-portrait.jpg"
              alt="Developer Portrait"
              width={320}  // smaller than before
              height={380}
              className="rounded-2xl shadow-2xl object-cover"
            />
          </motion.div>
        </div>

        {/* Journey So Far */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-purple-400 text-sm font-medium tracking-wide uppercase">
                My Path
              </span>
            </div>
            <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Journey So Far
            </h3>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px md:w-0.5 h-full bg-gradient-to-b from-purple-500 via-purple-500/60 to-blue-500 rounded-full"></div>

            {/* Timeline Items */}
            <div className="space-y-6 sm:space-y-8 lg:space-y-10">

              {/* 2025 */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }} 
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="relative flex items-center"
              >
                <div className="w-1/2 pr-8 text-right">
                  <div className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-purple-500/30 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
                    <div className="flex items-center justify-end gap-2 mb-2">
                      <span className="text-purple-400 text-sm font-medium transition-colors transform duration-300 group-hover:-translate-y-0.5 group-hover:text-purple-300">Jul-Aug 2025</span>
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">VisionRD - Software Engineer Intern</h4>
                    <p className="text-gray-400 text-sm">Worked on Factory Copilot, an AI-powered worker performance analyzer for industrial assembly lines. Optimized pipeline efficiency and collaborated with team leads in agile workflows.</p>
                    <div className="flex flex-wrap gap-1 mt-3 justify-end">
                      <span className="bg-purple-600/20 text-purple-300 text-xs px-2 py-1 rounded-full">Python</span>
                      <span className="bg-purple-600/20 text-purple-300 text-xs px-2 py-1 rounded-full">Flask</span>
                      <span className="bg-purple-600/20 text-purple-300 text-xs px-2 py-1 rounded-full">AI/ML</span>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-black animate-pulse"></div>

                <div className="w-1/2 pl-8"></div>
              </motion.div>

              {/* 2025 - NCRA */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }} 
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative flex items-center"
              >
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-black animate-pulse"></div>
                <div className="w-1/2 pl-8">
                  <div className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-blue-500/30 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-blue-400 text-sm font-medium transition-colors transform duration-300 group-hover:-translate-y-0.5 group-hover:text-blue-300">Jun 2025</span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">NCRA-UAV - Simulation Engineer</h4>
                    <p className="text-gray-400 text-sm">Conducted simulation-based research on autonomous drone systems using PX4 and ArduPilot frameworks with ROS integration.</p>
                    <div className="flex flex-wrap gap-1 mt-3">
                      <span className="bg-blue-600/20 text-blue-300 text-xs px-2 py-1 rounded-full">PX4</span>
                      <span className="bg-blue-600/20 text-blue-300 text-xs px-2 py-1 rounded-full">ROS</span>
                      <span className="bg-blue-600/20 text-blue-300 text-xs px-2 py-1 rounded-full">UAV</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 2025 - Chrio */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }} 
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative flex items-center"
              >
                <div className="w-1/2 pr-8 text-right">
                  <div className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-purple-500/30 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
                    <div className="flex items-center justify-end gap-2 mb-2">
                      <span className="text-purple-400 text-sm font-medium transition-colors transform duration-300 group-hover:-translate-y-0.5 group-hover:text-purple-300">May-Jun 2025</span>
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Chrio - Web Developer</h4>
                    <p className="text-gray-400 text-sm">Built HR Resource Portal using Next.js with GPT integration for resume analysis and candidate matching.</p>
                    <div className="flex flex-wrap gap-1 mt-3 justify-end">
                      <span className="bg-purple-600/20 text-purple-300 text-xs px-2 py-1 rounded-full">Next.js</span>
                      <span className="bg-purple-600/20 text-purple-300 text-xs px-2 py-1 rounded-full">GPT</span>
                      <span className="bg-purple-600/20 text-purple-300 text-xs px-2 py-1 rounded-full">React</span>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-black animate-pulse"></div>
                <div className="w-1/2 pl-8"></div>
              </motion.div>

              {/* 2024 - Prodigy */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }} 
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative flex items-center"
              >
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-black animate-pulse"></div>
                <div className="w-1/2 pl-8">
                  <div className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-blue-500/30 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-blue-400 text-sm font-medium transition-colors transform duration-300 group-hover:-translate-y-0.5 group-hover:text-blue-300">Jun-Aug 2024</span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Prodigy InfoTech - Web Development Intern</h4>
                    <p className="text-gray-400 text-sm">Designed and built responsive web applications using modern frameworks with focus on clean code and scalable architecture.</p>
                    <div className="flex flex-wrap gap-1 mt-3">
                      <span className="bg-blue-600/20 text-blue-300 text-xs px-2 py-1 rounded-full">Web Dev</span>
                      <span className="bg-blue-600/20 text-blue-300 text-xs px-2 py-1 rounded-full">Responsive</span>
                      <span className="bg-blue-600/20 text-blue-300 text-xs px-2 py-1 rounded-full">Modern Frameworks</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* 2024 - Final Year Project
              <motion.div 
                initial={{ opacity: 0, x: -50 }} 
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="relative flex items-center"
              >
                <div className="w-1/2 pr-8 text-right">
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300">
                    <div className="flex items-center justify-end gap-2 mb-2">
                      <span className="text-purple-400 text-sm font-medium">2024</span>
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Final Year Project</h4>
                    <p className="text-gray-400 text-sm">Leading development of AI-powered industrial assistant for factory performance analysis</p>
                    <div className="flex flex-wrap gap-1 mt-3 justify-end">
                      <span className="bg-purple-600/20 text-purple-300 text-xs px-2 py-1 rounded-full">Python</span>
                      <span className="bg-purple-600/20 text-purple-300 text-xs px-2 py-1 rounded-full">AI/ML</span>
                      <span className="bg-purple-600/20 text-purple-300 text-xs px-2 py-1 rounded-full">Flask</span>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-black"></div>
                <div className="w-1/2 pl-8"></div>
              </motion.div> */}

              {/* 2023 */}
              {/* <motion.div 
                initial={{ opacity: 0, x: 50 }} 
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="relative flex items-center"
              >
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-black"></div>
                <div className="w-1/2 pl-8">
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-blue-500/30 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-blue-400 text-sm font-medium">2023</span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">AI & Web Development</h4>
                    <p className="text-gray-400 text-sm">Built Smart Study Planner with emotion recognition and developed full-stack event management system</p>
                    <div className="flex flex-wrap gap-1 mt-3">
                      <span className="bg-blue-600/20 text-blue-300 text-xs px-2 py-1 rounded-full">MERN Stack</span>
                      <span className="bg-blue-600/20 text-blue-300 text-xs px-2 py-1 rounded-full">AI/ML</span>
                      <span className="bg-blue-600/20 text-blue-300 text-xs px-2 py-1 rounded-full">DevOps</span>
                    </div>
                  </div>
                </div>
              </motion.div> */}

              {/* 2022 */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }} 
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="relative flex items-center"
              >
                <div className="w-1/2 pr-8 text-right">
                  <div className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-purple-500/30 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
                    <div className="flex items-center justify-end gap-2 mb-2">
                      <span className="text-purple-400 text-sm font-medium transition-colors transform duration-300 group-hover:-translate-y-0.5 group-hover:text-purple-300">2022</span>
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Software Engineering Journey</h4>
                    <p className="text-gray-400 text-sm">Started at FAST Islamabad, began learning modern web technologies and software development practices</p>
                    <div className="flex flex-wrap gap-1 mt-3 justify-end">
                      <span className="bg-purple-600/20 text-purple-300 text-xs px-2 py-1 rounded-full">JavaScript</span>
                      <span className="bg-purple-600/20 text-purple-300 text-xs px-2 py-1 rounded-full">React</span>
                      <span className="bg-purple-600/20 text-purple-300 text-xs px-2 py-1 rounded-full">Python</span>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-black animate-pulse"></div>
                <div className="w-1/2 pl-8"></div>
              </motion.div>

              {/* 2021 */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }} 
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="relative flex items-center"
              >
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-black animate-pulse"></div>
                <div className="w-1/2 pl-8">
                  <div className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-blue-500/30 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-blue-400 text-sm font-medium transition-colors transform duration-300 group-hover:-translate-y-0.5 group-hover:text-blue-300">2021</span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">The Beginning</h4>
                    <p className="text-gray-400 text-sm">Discovered passion for programming and started learning the fundamentals of software development</p>
                    <div className="flex flex-wrap gap-1 mt-3">
                      <span className="bg-blue-600/20 text-blue-300 text-xs px-2 py-1 rounded-full">HTML/CSS</span>
                      <span className="bg-blue-600/20 text-blue-300 text-xs px-2 py-1 rounded-full">JavaScript</span>
                      <span className="bg-blue-600/20 text-blue-300 text-xs px-2 py-1 rounded-full">Git</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Code Arsenal */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-purple-400 text-sm font-medium tracking-wide uppercase">
                Technical Proficiency
              </span>
            </div>
            <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Code Arsenal
            </h3>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300"
            >
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-purple-500 rounded-full"></div>
                Programming Languages
              </h4>
              <div className="space-y-4">
                {[
                  { name: "JavaScript/TypeScript", level: 90 },
                  { name: "Python", level: 85 },
                  { name: "React/Next.js", level: 88 },
                  { name: "Node.js", level: 82 },
                  { name: "Python", level: 80 },
                  { name: "AWS/Cloud", level: 75 }
                ].map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium text-sm">{skill.name}</span>
                      <span className="text-purple-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Frameworks/Libraries */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300"
            >
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-blue-500 rounded-full"></div>
                Frameworks/Libraries
              </h4>
              <div className="space-y-4">
                {[
                  { name: "React/Next.js", level: 90 },
                  { name: "TypeScript", level: 85 },
                  { name: "Node.js/Express", level: 88 },
                  { name: "Tailwind CSS", level: 92 },
                  { name: "Spring Boot", level: 78 },
                  { name: ".NET", level: 75 }
                ].map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium text-sm">{skill.name}</span>
                      <span className="text-blue-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tools & Technologies */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300"
            >
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-purple-400 rounded-full"></div>
                Tools & Technologies
              </h4>
              <div className="space-y-4">
                {[
                  { name: "Git/GitHub", level: 95 },
                  { name: "Docker", level: 80 },
                  { name: "AWS/Cloud", level: 75 },
                  { name: "MongoDB", level: 85 },
                  { name: "CI/CD", level: 78 },
                  { name: "Kubernetes", level: 70 }
                ].map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300 font-medium text-sm">{skill.name}</span>
                      <span className="text-purple-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut", delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-purple-400 to-blue-400 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  )
}
