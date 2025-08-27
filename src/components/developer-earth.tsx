"use client"

import { useEffect, useRef, useState, useMemo } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, Stars, Html } from "@react-three/drei"
import * as THREE from "three"


// Tech Icon Component
function TechIcon({ position, color, name, speed }: {
  position: { x: number; y: number; z: number };
  color: string;
  name: string;
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime()
      meshRef.current.position.x = Math.cos(time * speed) * position.x
      meshRef.current.position.z = Math.sin(time * speed) * position.z
      meshRef.current.rotation.y = time * 2
      meshRef.current.rotation.x = Math.sin(time * 0.5) * 0.2
    }
  })

  return (
    <group position={[position.x, position.y, position.z]}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.5 : 1}
      >
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial 
          color={color} 
          emissive={color}
          emissiveIntensity={hovered ? 0.5 : 0.2}
          transparent
          opacity={0.8}
        />
      </mesh>
      <Html position={[0, 0.8, 0]} center>
        <div className="bg-black/80 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
          {name}
        </div>
      </Html>
    </group>
  )
}

// Floating Code Particles
function CodeParticles() {
  const particlesRef = useRef<THREE.Points>(null)
  const particleCount = 200
  
  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)
    
    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 20
      positions[i3 + 1] = (Math.random() - 0.5) * 20
      positions[i3 + 2] = (Math.random() - 0.5) * 20
      
      colors[i3] = Math.random() * 0.5 + 0.5
      colors[i3 + 1] = Math.random() * 0.5 + 0.5
      colors[i3 + 2] = Math.random() * 0.5 + 0.5
      
      sizes[i] = Math.random() * 0.1 + 0.05
    }
    
    return { positions, colors, sizes }
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      const time = state.clock.getElapsedTime()
      particlesRef.current.rotation.y = time * 0.1
      particlesRef.current.rotation.x = time * 0.05
    }
  })
  
  return (
          <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particles.positions, 3]}
            count={particleCount}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[particles.colors, 3]}
            count={particleCount}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-size"
            args={[particles.sizes, 1]}
            count={particleCount}
            itemSize={1}
          />
        </bufferGeometry>
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

// Earth Component
function Earth() {
  const earthRef = useRef<THREE.Mesh>(null)
  const atmosphereRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  
  useFrame((state) => {
    if (earthRef.current) {
      earthRef.current.rotation.y = state.clock.getElapsedTime() * 0.1
      earthRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.05) * 0.1
    }
    if (atmosphereRef.current) {
      atmosphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.15
      atmosphereRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.03) * 0.05
    }
  })

  return (
    <group>
      {/* Earth Core */}
      <mesh
        ref={earthRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.1 : 1}
      >
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial
          color="#4a90e2"
          roughness={0.8}
          metalness={0.2}
        />
      </mesh>
      
      {/* Atmosphere Glow */}
      <mesh ref={atmosphereRef}>
        <sphereGeometry args={[2.2, 64, 64]} />
        <meshStandardMaterial
          color="#87ceeb"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </mesh>
      
      {/* Continents */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <sphereGeometry args={[2.01, 64, 64]} />
        <meshStandardMaterial
          color="#228b22"
          transparent
          opacity={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Tech Grid Lines */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[2.05, 32, 32]} />
        <meshBasicMaterial
          color="#00ff00"
          transparent
          opacity={0.1}
          wireframe
        />
      </mesh>
    </group>
  )
}

// Orbiting Satellites
function Satellites() {
  const satellitesRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (satellitesRef.current) {
      const time = state.clock.getElapsedTime()
      satellitesRef.current.rotation.y = time * 0.2
      satellitesRef.current.rotation.x = Math.sin(time * 0.1) * 0.3
    }
  })
  
  return (
    <group ref={satellitesRef}>
      {/* Satellite 1 */}
      <mesh position={[4, 1, 0]}>
        <boxGeometry args={[0.2, 0.2, 0.8]} />
        <meshStandardMaterial color="#ff6b6b" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Satellite 2 */}
      <mesh position={[-3, -1, 2]}>
        <boxGeometry args={[0.3, 0.1, 0.6]} />
        <meshStandardMaterial color="#4ecdc4" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Satellite 3 */}
      <mesh position={[2, -2, -3]}>
        <boxGeometry args={[0.15, 0.15, 0.5]} />
        <meshStandardMaterial color="#45b7d1" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  )
}

// Main Scene Component
function Scene() {
  const { camera } = useThree()
  
  useEffect(() => {
    camera.position.set(8, 5, 8)
  }, [camera])
  
  const techIcons = [
    { color: "#a855f7", name: "Frontend", position: { x: 6, y: 0, z: 0 }, speed: 0.5 },
    { color: "#3b82f6", name: "Database", position: { x: -6, y: 0, z: 0 }, speed: 0.7 },
    { color: "#10b981", name: "Backend", position: { x: 0, y: 0, z: 6 }, speed: 0.6 },
    { color: "#ec4899", name: "Mobile", position: { x: 0, y: 0, z: -6 }, speed: 0.8 },
    { color: "#eab308", name: "AI/ML", position: { x: 4, y: 4, z: 4 }, speed: 0.4 },
    { color: "#f97316", name: "DevOps", position: { x: -4, y: -4, z: -4 }, speed: 0.9 },
    { color: "#06b6d4", name: "CLI", position: { x: 3, y: -3, z: 3 }, speed: 0.3 },
    { color: "#6366f1", name: "Web", position: { x: -3, y: 3, z: -3 }, speed: 0.6 },
    { color: "#fbbf24", name: "Performance", position: { x: 5, y: -2, z: -1 }, speed: 0.7 },
    { color: "#34d399", name: "Security", position: { x: -5, y: 2, z: 1 }, speed: 0.5 },
    { color: "#60a5fa", name: "Cloud", position: { x: 1, y: 5, z: -2 }, speed: 0.8 },
  ]
  
        return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4a90e2" />
      <pointLight position={[0, 10, 0]} intensity={0.3} color="#87ceeb" />
      
      {/* Stars Background */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      {/* Earth */}
      <Earth />
      
      {/* Tech Icons */}
      {techIcons.map((tech, index) => (
        <TechIcon
            key={index}
          position={tech.position}
          color={tech.color}
          name={tech.name}
          speed={tech.speed}
        />
      ))}
      
      {/* Satellites */}
      <Satellites />
      
      {/* Code Particles */}
      <CodeParticles />
      

    </>
  )
}

export function DeveloperEarth() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  if (!mounted) return null
  
        return (
    <div className="w-full h-[600px] relative">
      <Canvas
        camera={{ position: [8, 5, 8], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <Scene />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.5}
          minDistance={5}
          maxDistance={20}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
      </Canvas>
      
      {/* Subtle interaction hint */}
      <div className="absolute bottom-4 right-4 text-gray-400/60 text-xs">
        Drag • Scroll • Hover
          </div>
    </div>
  )
}
