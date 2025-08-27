"use client"

import React, { useEffect, useRef } from "react"

type TrailPoint = {
  x: number
  y: number
  size: number
  hue: number
  alpha: number
  vx: number
  vy: number
}

export default function InteractiveBackground(): React.ReactElement {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const animationRef = useRef<number | null>(null)
  const trailRef = useRef<TrailPoint[]>([])
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    const dpr = Math.max(1, window.devicePixelRatio || 1)

    const resize = () => {
      const { innerWidth, innerHeight } = window
      canvas.width = Math.floor(innerWidth * dpr)
      canvas.height = Math.floor(innerHeight * dpr)
      canvas.style.width = `${innerWidth}px`
      canvas.style.height = `${innerHeight}px`
      ctx.scale(dpr, dpr)
    }
    resize()

    let hueBase = 200
    let lastTime = performance.now()

    const spawnTrail = (x: number, y: number) => {
      // Apply 5% size increase: original range (1 + Math.random() * 1.5) * 0.95, now scaled by 1.05
      const size = (1 + Math.random() * 1.5) * 0.95 * 1.05
      trailRef.current.push({
        x,
        y,
        size,
        hue: (hueBase + Math.random() * 60) % 360,
        alpha: 0.7,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
      })
    }

    const onPointerMove = (e: PointerEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
      mouseRef.current.active = true
      if (Math.random() < 0.3) spawnTrail(e.clientX, e.clientY)
    }
    const onPointerDown = (e: PointerEvent) => {
      mouseRef.current.active = true
      spawnTrail(e.clientX, e.clientY)
    }
    const onPointerUp = () => {
      mouseRef.current.active = false
    }

    window.addEventListener("pointermove", onPointerMove)
    window.addEventListener("pointerdown", onPointerDown)
    window.addEventListener("pointerup", onPointerUp)
    window.addEventListener("resize", resize)

    const drawBackground = (now: number) => {
      const dt = Math.min(32, now - lastTime)
      lastTime = now

      ctx.globalCompositeOperation = "source-over"
      ctx.fillStyle = "rgba(0,0,0,0.14)"
      ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight)

      const t = now * 0.0002
      const cx = canvas.clientWidth * (0.5 + Math.sin(t) * 0.1)
      const cy = canvas.clientHeight * (0.5 + Math.cos(t * 1.3) * 0.1)
      const rad = Math.max(canvas.clientWidth, canvas.clientHeight) * 0.9
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, rad)
      grad.addColorStop(0, "rgba(20,20,60,0.18)")
      grad.addColorStop(1, "rgba(0,0,0,0.0)")
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight)

      hueBase = (hueBase + dt * 0.02) % 360
      ctx.globalCompositeOperation = "lighter"

      const next: TrailPoint[] = []
      for (const p of trailRef.current) {
        p.x += p.vx * dt
        p.y += p.vy * dt
        p.size *= 0.98
        p.alpha *= 0.96
        if (p.alpha < 0.02 || p.size < 0.5) continue
        next.push(p)

        ctx.fillStyle = `hsla(${p.hue}, 100%, 60%, ${Math.min(1, p.alpha)})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      }
      trailRef.current = next

      if (mouseRef.current.active && Math.random() < 0.2) {
        spawnTrail(mouseRef.current.x, mouseRef.current.y)
      }

      animationRef.current = requestAnimationFrame(drawBackground)
    }
    animationRef.current = requestAnimationFrame(drawBackground)

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      window.removeEventListener("pointermove", onPointerMove)
      window.removeEventListener("pointerdown", onPointerDown)
      window.removeEventListener("pointerup", onPointerUp)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="fixed inset-0 -z-10 pointer-events-none select-none [contain:layout_paint_size]"
    />
  )
}