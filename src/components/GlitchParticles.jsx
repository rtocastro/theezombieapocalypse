import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";

function Particles() {
  const groupRef = useRef();

  const particles = useMemo(() => {
    return Array.from({ length: 55 }, () => ({
      x: (Math.random() - 0.5) * 8,
      y: (Math.random() - 0.5) * 5,
      z: (Math.random() - 0.5) * 4,
      size: Math.random() * 0.035 + 0.015,
    }));
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.05;
      groupRef.current.rotation.x = Math.sin(time * 0.2) * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      {particles.map((particle, index) => (
        <mesh key={index} position={[particle.x, particle.y, particle.z]}>
          <boxGeometry args={[particle.size, particle.size, particle.size]} />
          <meshBasicMaterial color={index % 2 === 0 ? "#00A86B" : "#00FFFF"} />
        </mesh>
      ))}
    </group>
  );
}

export default function GlitchParticles() {
  return (
    <div className="three-bg">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <Particles />
      </Canvas>
    </div>
  );
}