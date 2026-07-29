import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Stars, OrbitControls } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh } from "three";

function MorphingBlob() {
  const mesh = useRef<Mesh>(null);
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.15;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <Sphere ref={mesh} args={[1.4, 128, 128]}>
        <MeshDistortMaterial
          color="#22d3ee"
          attach="material"
          distort={0.45}
          speed={2}
          roughness={0.1}
          metalness={0.8}
          emissive="#ec4899"
          emissiveIntensity={0.25}
        />
      </Sphere>
    </Float>
  );
}

function OrbitingShape({ position, color }: { position: [number, number, number]; color: string }) {
  const mesh = useRef<Mesh>(null);
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.elapsedTime * 0.5;
      mesh.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={mesh} position={position}>
        <icosahedronGeometry args={[0.35, 0]} />
        <meshStandardMaterial
          color={color}
          metalness={0.9}
          roughness={0.2}
          emissive={color}
          emissiveIntensity={0.4}
        />
      </mesh>
    </Float>
  );
}

export function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      aria-label="Interactive 3D scene"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#22d3ee" />
        <pointLight position={[-5, -5, -5]} intensity={1.5} color="#ec4899" />
        <Stars radius={50} depth={50} count={1500} factor={4} fade speed={1} />
        <MorphingBlob />
        <OrbitingShape position={[2.5, 1, -1]} color="#ec4899" />
        <OrbitingShape position={[-2.5, -1, -1]} color="#22d3ee" />
        <OrbitingShape position={[2, -1.5, 1]} color="#a855f7" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Suspense>
    </Canvas>
  );
}
