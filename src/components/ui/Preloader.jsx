import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion.js';

export default function Preloader() {
  const overlayRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!overlayRef.current) {
      return undefined;
    }

    const counter = { value: 0 };
    const timeline = gsap.timeline({
      defaults: { ease: 'power3.out' },
      onComplete: () => setIsComplete(true),
    });

    timeline
      .to(counter, {
        value: 100,
        duration: prefersReducedMotion ? 0.25 : 1.85,
        onUpdate: () => setProgress(Math.round(counter.value)),
      })
      .to(overlayRef.current, {
        yPercent: -100,
        duration: prefersReducedMotion ? 0.2 : 0.85,
        ease: 'power3.inOut',
      });

    return () => timeline.kill();
  }, [prefersReducedMotion]);

  if (isComplete) {
    return null;
  }

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-ink text-milk"
      aria-label="Loading portfolio"
    >
      <div className="w-full max-w-sm px-6 text-center">
        <div className="font-heading text-7xl font-bold leading-none sm:text-8xl">{progress}%</div>
        <div className="mt-6 h-px overflow-hidden bg-line">
          <div className="h-full bg-accent" style={{ width: `${progress}%` }} />
        </div>
        <p className="mt-5 animate-pulse text-xs font-bold uppercase text-muted">
          Initializing Lab Environment...
        </p>
      </div>
    </div>
  );
}
