import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Html } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={1.6} position-y={0} rotation-y={0} />
  );
};

const OrbitingSkills = () => {
  const groupRef = useRef();
  const labels = ["Frontend", "Backend", "Database", "Mobile", "AI/ML", "DevOps"]; 
  const radius = 3.2;

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      {labels.map((label, i) => {
        const angle = (i / labels.length) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = Math.sin(angle * 2) * 0.4;
        return (
          <group key={label} position={[x, y, z]}>
            <mesh>
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.35} />
            </mesh>
            <Html center distanceFactor={10}>
              <div className="bg-black/60 text-white px-2 py-1 rounded-full text-xs whitespace-nowrap border border-white/10">
                {label}
              </div>
            </Html>
          </group>
        );
      })}
    </group>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-3, 2.5, 5],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        {/* <OrbitingSkills /> */}

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;