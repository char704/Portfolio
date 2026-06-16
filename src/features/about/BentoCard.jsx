import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Brain, Layout, Server, Terminal } from 'lucide-react';

const icons = {
  Brain,
  Layout,
  Server,
  Terminal,
};

export default function BentoCard({ category, description, techs = [], icon = 'Terminal', className = '' }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 240, damping: 22 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 240, damping: 22 });
  const Icon = icons[icon] ?? Terminal;

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
      className={`group flex min-h-[300px] flex-col justify-between overflow-hidden rounded-[8px] border border-line bg-surface p-6 shadow-card transition-colors hover:border-accent/60 sm:p-7 ${className}`}
    >
      <div>
        <div className="flex items-start justify-between gap-4">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-[8px] border border-accent/35 bg-ink/38 text-accent transition-colors group-hover:border-accent/70 group-hover:bg-accent/10">
            <Icon size={24} strokeWidth={1.8} aria-hidden="true" />
          </div>
          <span className="rounded-full border border-milk/12 bg-ink/28 px-3 py-1 text-xs font-bold uppercase text-milk/70">
            {techs.length} tools
          </span>
        </div>

        <h3 className="mt-7 font-heading text-2xl font-bold leading-tight text-milk sm:text-3xl">{category}</h3>
        <p className="mt-4 text-base leading-relaxed text-milk/72">{description}</p>
      </div>

      <div className="mt-9 flex flex-wrap gap-2">
        {techs.map((tech) => (
          <span key={tech} className="rounded-full border border-milk/12 bg-ink/34 px-3 py-2 text-xs text-milk/78">
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
