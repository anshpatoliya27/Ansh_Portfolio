"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#8a2be2"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
        wireframe={false}
      />
    </Sphere>
  );
}

function FloatingRing({ radius, speed, thickness, color }: any) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * speed;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * (speed * 0.8);
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[radius, thickness, 16, 100]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} wireframe />
    </mesh>
  );
}

export default function SphereCoreCanvas() {
  return (
    <div className="w-full h-full absolute inset-0 pointer-events-none md:pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#00f0ff" />
        
        <AnimatedSphere />
        
        {/* Decorative Rings */}
        <FloatingRing radius={2.5} speed={0.2} thickness={0.02} color="#00f0ff" />
        <FloatingRing radius={3} speed={-0.15} thickness={0.01} color="#8a2be2" />
        <FloatingRing radius={3.5} speed={0.1} thickness={0.03} color="#ffffff" />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5} 
          maxPolarAngle={Math.PI / 2 + 0.3} 
          minPolarAngle={Math.PI / 2 - 0.3}
        />
      </Canvas>
    </div>
  );
}
