import Lenis from 'lenis';
import { useEffect } from 'react';
import CommandPalette from '../components/ui/CommandPalette.jsx';
import CustomCursor from '../components/ui/CustomCursor.jsx';
import Preloader from '../components/ui/Preloader.jsx';
import ScrollProgress from '../components/ui/ScrollProgress.jsx';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion.js';

export default function MainLayout({ children }) {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return undefined;
    }

    const lenis = new Lenis({
      duration: 1.15,
      lerp: 0.085,
      smoothWheel: true,
      wheelMultiplier: 0.92,
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [prefersReducedMotion]);

  return (
    <div className="page-shell min-h-screen overflow-hidden bg-ink text-milk">
      <Preloader />
      <div className="noise-layer" aria-hidden="true" />
      <ScrollProgress />
      <CustomCursor />
      <CommandPalette />
      {children}
    </div>
  );
}
