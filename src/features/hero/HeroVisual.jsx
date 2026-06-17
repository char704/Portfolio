import { Canvas, useFrame } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion.js';

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

function useCompactVisual() {
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 760px)');
    const handleChange = () => setIsCompact(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return isCompact;
}

function createInterfaceLayout(isCompact) {
  const panels = [
    { id: 'browser', position: [0.9, 0.2, 0], size: [3.2, 1.9], opacity: 0.26 },
    { id: 'sidebar', position: [-1.15, 0.95, -0.35], size: [1.25, 1.55], opacity: 0.2 },
    { id: 'card', position: [2.15, 1.12, -0.22], size: [1.55, 0.92], opacity: 0.18 },
    { id: 'mobile', position: [2.55, -1.1, 0.1], size: [0.85, 1.55], opacity: 0.24 },
    { id: 'toolbar', position: [-0.55, -1.12, -0.15], size: [1.95, 0.72], opacity: 0.16 },
    { id: 'component', position: [0.1, 1.55, -0.48], size: [1.05, 0.62], opacity: 0.16 },
    { id: 'state', position: [1.12, -1.75, -0.36], size: [1.35, 0.52], opacity: 0.14 },
  ];

  const visiblePanels = isCompact ? panels.slice(0, 4) : panels;
  const linePositions = [];

  visiblePanels.slice(1).forEach((panel) => {
    const [x, y, z] = panel.position;
    linePositions.push(0.9, 0.2, 0, x, y, z);
  });

  return {
    panels: visiblePanels,
    linePositions: new Float32Array(linePositions),
  };
}

function InterfacePanel({ panel, accentColor, surfaceColor }) {
  const [width, height] = panel.size;
  const [x, y, z] = panel.position;

  return (
    <group position={[x, y, z]}>
      <mesh>
        <planeGeometry args={[width, height]} />
        <meshBasicMaterial
          color={surfaceColor}
          transparent
          opacity={panel.opacity}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[
              new Float32Array([
                -width / 2,
                height / 2,
                0.01,
                width / 2,
                height / 2,
                0.01,
                width / 2,
                height / 2,
                0.01,
                width / 2,
                -height / 2,
                0.01,
                width / 2,
                -height / 2,
                0.01,
                -width / 2,
                -height / 2,
                0.01,
                -width / 2,
                -height / 2,
                0.01,
                -width / 2,
                height / 2,
                0.01,
              ]),
              3,
            ]}
          />
        </bufferGeometry>
        <lineBasicMaterial color={accentColor} transparent opacity={0.4} />
      </lineSegments>
      <mesh position={[-width * 0.28, height * 0.16, 0.02]}>
        <planeGeometry args={[width * 0.28, height * 0.12]} />
        <meshBasicMaterial color={accentColor} transparent opacity={0.28} depthWrite={false} />
      </mesh>
      <mesh position={[width * 0.14, -height * 0.08, 0.02]}>
        <planeGeometry args={[width * 0.48, height * 0.1]} />
        <meshBasicMaterial color={accentColor} transparent opacity={0.16} depthWrite={false} />
      </mesh>
      <mesh position={[width * 0.18, -height * 0.26, 0.02]}>
        <planeGeometry args={[width * 0.38, height * 0.08]} />
        <meshBasicMaterial color={accentColor} transparent opacity={0.1} depthWrite={false} />
      </mesh>
    </group>
  );
}

function InterfaceConstellation({ isCompact, prefersReducedMotion }) {
  const groupRef = useRef(null);
  const accentColor = useCssColor('--accent', 'rgb(0, 151, 178)');
  const surfaceColor = useCssColor('--surface', 'rgb(229, 231, 235)');
  const signalColor = accentColor;
  const { panels, linePositions } = useMemo(() => createInterfaceLayout(isCompact), [isCompact]);

  useFrame(({ pointer, clock }, delta) => {
    if (!groupRef.current || prefersReducedMotion) {
      return;
    }

    const drift = Math.sin(clock.elapsedTime * 0.28) * 0.045;

    groupRef.current.rotation.y += delta * 0.025;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, pointer.y * 0.1, 0.04);
    groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, pointer.x * -0.05, 0.04);
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, pointer.x * 0.24, 0.035);
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, pointer.y * 0.12 + drift, 0.035);
  });

  return (
    <group ref={groupRef} position={[isCompact ? 1.05 : 1.45, isCompact ? 0.55 : 0.05, 0]} rotation={[0.08, -0.32, 0]}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color={signalColor} transparent opacity={0.22} />
      </lineSegments>
      {panels.map((panel) => (
        <InterfacePanel key={panel.id} panel={panel} accentColor={accentColor} surfaceColor={surfaceColor} />
      ))}
    </group>
  );
}

export default function HeroVisual() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const isCompact = useCompactVisual();
  const backgroundColor = useCssColor('--bg-primary', 'rgb(249, 249, 246)');

  return (
    <div className="hero-mask absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <Canvas
        className="absolute inset-0 h-full w-full"
        camera={{ position: [0, 0, isCompact ? 7.2 : 6.2], fov: isCompact ? 54 : 48 }}
        dpr={isCompact ? [1, 1.25] : [1, 1.6]}
        frameloop={prefersReducedMotion ? 'demand' : 'always'}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <color attach="background" args={[backgroundColor]} />
        <ambientLight intensity={0.8} />
        <InterfaceConstellation isCompact={isCompact} prefersReducedMotion={prefersReducedMotion} />
        <Preload all />
      </Canvas>
      <div className="hero-visual-overlay absolute inset-0" />
      <div className="hero-visual-vignette absolute inset-0" />
      <div className="accent-grid drift-grid absolute inset-0 opacity-20" />
      <div className="pointer-events-none absolute right-5 top-32 hidden max-w-xs flex-wrap justify-end gap-2 text-[11px] font-bold uppercase text-accent/80 sm:flex lg:right-12">
        {['React', 'JavaScript', 'CSS', 'UI'].map((label) => (
          <span key={label} className="rounded-full border border-accent/30 bg-ink/48 px-3 py-2 backdrop-blur-sm">
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
