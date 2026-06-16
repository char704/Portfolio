import { AnimatePresence, motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme.js';

const iconVariants = {
  initial: { rotate: -90, scale: 0.55, opacity: 0 },
  animate: { rotate: 0, scale: 1, opacity: 1 },
  exit: { rotate: 90, scale: 0.55, opacity: 0 },
};

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const Icon = isDark ? Sun : Moon;

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      aria-pressed={isDark}
      className="focus-ring fixed right-4 top-20 z-[75] grid h-12 w-12 place-items-center rounded-full border border-line bg-surface/86 text-accent shadow-card backdrop-blur-xl transition-colors hover:border-accent sm:right-6 sm:top-24"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: 'spring', stiffness: 420, damping: 24 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          variants={iconVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <Icon size={20} strokeWidth={2} aria-hidden="true" />
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
