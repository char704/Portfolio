import { Canvas, useFrame } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

function seededNoise(index, offset = 0) {
  const value = Math.sin(index * 91.17 + offset * 37.31) * 10000;
  return value - Math.floor(value);
}

function createWebGeometry() {
  const nodes = Array.from({ length: 62 }, (_, index) => {
    const radiusBias = 0.8 + seededNoise(index, 3) * 0.8;
    return new THREE.Vector3(
      (seededNoise(index, 0) - 0.5) * 7.5 * radiusBias,
      (seededNoise(index, 1) - 0.5) * 4.2 * radiusBias,
      (seededNoise(index, 2) - 0.5) * 3.2,
    );
  });

  const pointPositions = new Float32Array(nodes.flatMap((node) => [node.x, node.y, node.z]));
  const linePositions = [];

  nodes.forEach((node, index) => {
    nodes.slice(index + 1).forEach((candidate) => {
      if (linePositions.length > 600) {
        return;
      }

      if (node.distanceTo(candidate) < 1.45) {
        linePositions.push(node.x, node.y, node.z, candidate.x, candidate.y, candidate.z);
      }
    });
  });

  return {
    pointPositions,
    linePositions: new Float32Array(linePositions),
  };
}

function useCssColor(variableName, fallback) {
  const [color, setColor] = useState(fallback);

  useEffect(() => {
    const root = document.documentElement;
    const syncColor = () => {
      setColor(getComputedStyle(root).getPropertyValue(variableName).trim() || fallback);
    };

    syncColor();
    const observer = new MutationObserver(syncColor);
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, [fallback, variableName]);

  return color;
}

function NeuralParticleWeb() {
  const groupRef = useRef(null);
  const { pointPositions, linePositions } = useMemo(() => createWebGeometry(), []);
  const accentColor = useCssColor('--accent', 'rgb(0, 151, 178)');
  const signalColor = useCssColor('--signal', 'rgb(0, 151, 178)');

  useFrame(({ pointer, clock }, delta) => {
    if (!groupRef.current) {
      return;
    }

    const drift = Math.sin(clock.elapsedTime * 0.35) * 0.08;

    groupRef.current.rotation.y += delta * 0.06;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, pointer.y * 0.18, 0.05);
    groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, pointer.x * -0.08, 0.05);
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, pointer.x * 0.38, 0.045);
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, pointer.y * 0.18 + drift, 0.045);
  });

  return (
    <group ref={groupRef} position={[1.35, 0.05, 0]} rotation={[0.15, -0.38, 0]}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[pointPositions, 3]} />
        </bufferGeometry>
        <pointsMaterial color={accentColor} size={0.06} sizeAttenuation transparent opacity={0.92} />
      </points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color={signalColor} transparent opacity={0.2} />
      </lineSegments>
    </group>
  );
}

export default function HeroVisual() {
  const backgroundColor = useCssColor('--bg-primary', 'rgb(249, 249, 246)');

  return (
    <div className="hero-mask absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <Canvas
        className="absolute inset-0 h-full w-full"
        camera={{ position: [0, 0, 6.2], fov: 48 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <color attach="background" args={[backgroundColor]} />
        <ambientLight intensity={0.8} />
        <NeuralParticleWeb />
        <Preload all />
      </Canvas>
      <div className="hero-visual-overlay absolute inset-0" />
      <div className="hero-visual-vignette absolute inset-0" />
      <div className="accent-grid drift-grid absolute inset-0 opacity-20" />
    </div>
  );
}
