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
    if (!isFinePointer || !position.isActive) {
      document.body.classList.remove('has-custom-cursor');
      return undefined;
    }

    document.body.classList.add('has-custom-cursor');

    return () => document.body.classList.remove('has-custom-cursor');
  }, [isFinePointer, position.isActive]);

  if (!isFinePointer) {
    return null;
  }

  return (
    <motion.div
      data-testid="custom-cursor"
      className={`pointer-events-none fixed left-0 top-0 z-[70] block h-10 w-10 rounded-full border border-accent bg-accent/15 shadow-glow backdrop-blur-[1px] transition-opacity duration-150 ${
        position.isActive ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ x, y }}
      aria-hidden="true"
    >
      <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-milk" />
    </motion.div>
  );
}
