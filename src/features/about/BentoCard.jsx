import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function BentoCard({ className = '', children }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 240, damping: 22 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 240, damping: 22 });

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width - 0.5);
    y.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      onPointerMove={handleMove}
      onPointerLeave={reset}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className={`rounded-[8px] border border-line bg-milk/[0.055] p-5 shadow-card backdrop-blur-xl transition-colors hover:border-accent/55 ${className}`}
    >
      {children}
    </motion.article>
  );
}
