import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import InteractiveBackground from "@/components/interactive-background"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Faizan Rasheed - Full Stack Developer",
  description: "Professional software engineer specializing in modern web technologies",
  generator: 'v0.app'
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} text-white min-h-screen`}>
        <InteractiveBackground />
        <div className="relative z-10">
          <Navigation />
          <main className="pt-20">{children}</main>
        </div>
      </body>
    </html>
  )
}
