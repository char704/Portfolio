import { motion, useSpring } from 'framer-motion';
import { useEffect, useMemo } from 'react';
import { useMousePosition } from '../../hooks/useMousePosition.js';

export default function CustomCursor() {
  const position = useMousePosition();
  const x = useSpring(position.x - 18, { stiffness: 440, damping: 38, mass: 0.35 });
  const y = useSpring(position.y - 18, { stiffness: 440, damping: 38, mass: 0.35 });

  const isFinePointer = useMemo(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    return window.matchMedia('(pointer: fine)').matches;
  }, []);

  useEffect(() => {
    if (!isFinePointer) {
      return undefined;
    }

    document.body.classList.add('has-custom-cursor');

    return () => document.body.classList.remove('has-custom-cursor');
  }, [isFinePointer]);

  if (!isFinePointer) {
    return null;
  }

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[70] hidden h-9 w-9 rounded-full border border-accent/80 bg-accent/10 mix-blend-screen shadow-glow md:block"
      style={{ x, y }}
      aria-hidden="true"
    />
  );
}
