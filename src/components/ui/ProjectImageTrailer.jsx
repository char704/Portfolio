import { motion, useSpring } from 'framer-motion';
import { useMemo } from 'react';
import { useMousePosition } from '../../hooks/useMousePosition.js';

export default function ProjectImageTrailer({ activeProject }) {
  const position = useMousePosition();
  const x = useSpring(position.x + 28, { stiffness: 220, damping: 26, mass: 0.35 });
  const y = useSpring(position.y - 90, { stiffness: 220, damping: 26, mass: 0.35 });

  const isFinePointer = useMemo(() => {
    if (typeof window === 'undefined') {
      return false;
    }

    return window.matchMedia('(pointer: fine)').matches;
  }, []);

  if (!isFinePointer) {
    return null;
  }

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden w-[280px] overflow-hidden rounded-[8px] border border-accent/40 bg-ink/88 shadow-card backdrop-blur-xl lg:block"
      style={{ x, y }}
      animate={{
        opacity: activeProject && position.isActive ? 1 : 0,
        scale: activeProject && position.isActive ? 1 : 0.82,
      }}
      transition={{ type: 'spring', stiffness: 260, damping: 24, mass: 0.5 }}
      aria-hidden="true"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={activeProject?.previewImage ?? '/images/ai-lab-visual.png'}
          alt=""
          className="h-full w-full object-cover opacity-80"
          loading="lazy"
        />
        <div className="preview-vignette absolute inset-0" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-[11px] font-bold uppercase text-accent">{activeProject?.metric ?? 'AI'}</p>
          <p className="mt-1 font-heading text-lg font-bold leading-tight text-milk">{activeProject?.title}</p>
        </div>
      </div>
    </motion.div>
  );
}
