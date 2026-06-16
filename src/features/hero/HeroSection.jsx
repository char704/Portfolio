import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import gsap from 'gsap';
import MagneticButton from '../../components/ui/MagneticButton.jsx';
import { profile, profileData } from '../../data/profile.js';
import { useGsapContext } from '../../hooks/useGsapContext.js';
import { splitChars } from '../../utils/format.js';
import HeroMetrics from './HeroMetrics.jsx';

const HeroVisual = lazy(() => import('./HeroVisual.jsx'));

export default function HeroSection() {
  const scope = useRef(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = profileData.roles;
  const nameParts = profile.name.toUpperCase().split(' ');

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setRoleIndex((currentIndex) => (currentIndex + 1) % roles.length);
    }, 2500);

    return () => window.clearInterval(intervalId);
  }, [roles.length]);

  useGsapContext(scope, () => {
    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

    timeline
      .from('.hero-kicker', { y: 20, opacity: 0, duration: 0.7 })
      .from(
        '.hero-char',
        {
          yPercent: 118,
          rotate: 4,
          opacity: 0,
          duration: 0.82,
          stagger: 0.018,
        },
        '-=0.35',
      )
      .from('.hero-copy', { y: 22, opacity: 0, duration: 0.72, stagger: 0.08 }, '-=0.2')
      .from('.hero-metrics', { y: 20, opacity: 0, duration: 0.7 }, '-=0.25');
  }, []);

  return (
    <section
      id="prologue"
      ref={scope}
      className="relative flex min-h-screen items-end overflow-hidden px-5 pb-8 pt-28 sm:px-8 sm:pb-10 lg:pb-12"
    >
      <Suspense
        fallback={
          <div
            className="hero-mask absolute inset-0 -z-10 bg-ink [background-image:linear-gradient(rgba(0,181,216,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,181,216,0.08)_1px,transparent_1px)] [background-size:48px_48px]"
            aria-hidden="true"
          />
        }
      >
        <HeroVisual />
      </Suspense>
      <div className="mx-auto grid w-full max-w-[var(--max-page)] gap-6">
        <div className="max-w-5xl">
          <p className="hero-kicker mb-5 text-sm font-bold uppercase text-accent">Prologue / AI Engineer Portfolio</p>
          <h1
            className="font-heading text-6xl font-bold leading-[0.88] text-milk sm:text-8xl lg:text-[6.65rem] xl:text-[7.2rem] 2xl:text-[8.75rem]"
            aria-label={profile.name}
          >
            {nameParts.map((part) => (
              <span key={part} className="block overflow-hidden pb-1">
                <span className="inline-block">
                  {splitChars(part).map((char) => (
                    <span key={char.id} className="hero-char inline-block">
                      {char.value}
                    </span>
                  ))}
                </span>
              </span>
            ))}
          </h1>
          <div className="hero-copy mt-6 h-9 overflow-hidden font-heading text-2xl font-bold text-accent sm:h-11 sm:text-4xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={roles[roleIndex]}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                aria-live="polite"
              >
                {roles[roleIndex]}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div className="hero-copy max-w-2xl text-xl leading-relaxed text-milk/78 sm:text-2xl">
            {profile.summary} I build experiments where model behavior, visual quality, and engineering constraints can be inspected clearly.
          </div>
          <div className="hero-copy flex flex-wrap items-center gap-3 lg:justify-end">
            <MagneticButton href={`mailto:${profile.email}`}>Start a conversation</MagneticButton>
            <a
              href={profile.github}
              className="focus-ring inline-flex min-h-14 items-center rounded-full border border-line px-6 text-sm font-bold uppercase text-milk transition-colors hover:border-accent hover:text-accent"
            >
              View GitHub
            </a>
          </div>
        </div>

        <div className="hero-metrics hidden lg:block">
          <HeroMetrics />
        </div>
      </div>
    </section>
  );
}
