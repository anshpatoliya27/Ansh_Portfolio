"use client";

import { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, MeshTransmissionMaterial, Float, Stars as DreiStars } from "@react-three/drei";
import * as THREE from "three";

function SceneObjects() {
  const group = useRef<THREE.Group>(null);
  const { viewport } = useThree();
  
  const glassMaterial = (
    <MeshTransmissionMaterial 
      backside 
      backsideThickness={1} 
      thickness={2} 
      chromaticAberration={0.06} 
      anisotropy={1} 
      clearcoat={1} 
      clearcoatRoughness={0.1} 
      envMapIntensity={2} 
    />
  );

  // Link native browser scroll to 3D positions
  useFrame((state, delta) => {
    if (!group.current) return;
    
    // Calculate normalized scroll (0 to 1) based on document height vs window height
    const scrollY = window.scrollY;
    
    // Create a smooth parallax scrolling effect for the entire group
    // The divisor controls how fast the 3D objects scroll away compared to HTML
    const targetY = (scrollY * 0.005);
    const targetRotationY = (scrollY * 0.001);

    group.current.position.y = THREE.MathUtils.damp(group.current.position.y, targetY, 4, delta);
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, targetRotationY, 4, delta);
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, scrollY * 0.0005, 4, delta);
  });

  return (
    <group ref={group}>
      {/* Central Hero Core */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh position={[viewport.width > 5 ? 3 : 0, 0, -1]} rotation={[0.5, 0.5, 0]}>
          <octahedronGeometry args={[viewport.width > 5 ? 2 : 1.5, 0]} />
          {glassMaterial}
        </mesh>
      </Float>

      {/* Scattered Cubes */}
      <Float speed={3} rotationIntensity={2} floatIntensity={2}>
        <mesh position={[-4, 2, -3]} rotation={[0.4, 0.2, 0]}>
          <boxGeometry args={[1.2, 1.2, 1.2]} />
          {glassMaterial}
        </mesh>
      </Float>
      
      <Float speed={2.5} rotationIntensity={1.5} floatIntensity={1.5}>
        <mesh position={[4, 5, -5]} rotation={[0.1, 0.5, 0.3]}>
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          {glassMaterial}
        </mesh>
      </Float>

      {/* Abstract Ring */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[-3, -8, -2]} rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[1.5, 0.4, 64, 100]} />
          <meshStandardMaterial color="#222" metalness={1} roughness={0.05} />
        </mesh>
      </Float>

      {/* Giant Icosahedron Lower Down */}
      <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[viewport.width > 5 ? -4 : 0, -14, -6]} rotation={[0, 0, 0]}>
          <icosahedronGeometry args={[4, 0]} />
          <meshStandardMaterial color="#ff4500" metalness={0.8} roughness={0.2} emissive="#ff4500" emissiveIntensity={0.2} wireframe />
        </mesh>
      </Float>

       {/* Floating DNA/Data Pillars */}
       <Float speed={2} rotationIntensity={0.2} floatIntensity={2}>
        <mesh position={[5, -20, -4]} rotation={[0, 0.5, 0]}>
          <cylinderGeometry args={[0.2, 0.2, 4, 32]} />
          {glassMaterial}
        </mesh>
      </Float>
    </group>
  );
}

function SceneLayout() {
  return (
    <>
      <color attach="background" args={["#020202"]} />
      
      <ambientLight intensity={0.4} />
      <spotLight position={[10, 10, 10]} intensity={3} angle={0.15} penumbra={1} color="#ffffff" castShadow />
      <pointLight position={[-10, 0, -10]} color="#00f0ff" intensity={4} />
      <pointLight position={[0, -10, 5]} color="#8a2be2" intensity={4} />
      
      <Environment preset="city" />
      <DreiStars radius={100} depth={50} count={3000} factor={4} saturation={1} fade speed={1.5} />
      
      <SceneObjects />
    </>
  );
}

export default function Experience() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]}>
      <Suspense fallback={null}>
        <SceneLayout />
      </Suspense>
    </Canvas>
  );
}
