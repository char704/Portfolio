import { motion, useMotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useMousePosition } from '../../hooks/useMousePosition.js';

export default function CustomCursor() {
  const position = useMousePosition();
  const [isFinePointer, setIsFinePointer] = useState(false);

  const x = useMotionValue(-18);
  const y = useMotionValue(-18);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');

    const updatePointerType = () => {
      setIsFinePointer(mediaQuery.matches);
    };

    updatePointerType();
    mediaQuery.addEventListener('change', updatePointerType);

    return () => {
      mediaQuery.removeEventListener('change', updatePointerType);
    };
  }, []);

  useEffect(() => {
    if (!position.isActive) {
      return;
    }

    x.set(position.x - 20);
    y.set(position.y - 20);
  }, [position.x, position.y, position.isActive, x, y]);

  useEffect(() => {
    if (!isFinePointer || !position.isActive) {
      document.body.classList.remove('has-custom-cursor');
      return;
    }

    document.body.classList.add('has-custom-cursor');

    return () => {
      document.body.classList.remove('has-custom-cursor');
    };
  }, [isFinePointer, position.isActive]);

  if (!isFinePointer) {
    return null;
  }

  return (
    <motion.div
      data-testid="custom-cursor"
      className={`pointer-events-none fixed left-0 top-0 z-[100] h-10 w-10 rounded-full border border-accent bg-accent/15 backdrop-blur-[1px] transition-opacity duration-150 ${
        position.isActive ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ x, y }}
      aria-hidden="true"
    >
      <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
    </motion.div>
  );
}
