import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function MagneticButton({ href, children, className = '' }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 18 });
  const springY = useSpring(y, { stiffness: 260, damping: 18 });

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - (rect.left + rect.width / 2);
    const offsetY = event.clientY - (rect.top + rect.height / 2);

    x.set(offsetX * 0.22);
    y.set(offsetY * 0.22);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      onPointerDown={reset}
      style={{ x: springX, y: springY }}
      className={`focus-ring group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-milk px-6 text-sm font-bold uppercase text-ink transition-colors hover:bg-accent ${className}`}
    >
      <span>{children}</span>
      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </motion.a>
  );
}
