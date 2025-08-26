import React from "react"
import { Html } from "@react-three/drei"

export default function CanvasLoader() {
  return (
    <Html center>
      <div className="flex justify-center items-center">
        <span className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></span>
      </div>
    </Html>
  )
}


