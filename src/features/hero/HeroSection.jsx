import { lazy, Suspense, useRef } from 'react';
import gsap from 'gsap';
import MagneticButton from '../../components/ui/MagneticButton.jsx';
import { profile, profileData } from '../../data/profile.js';
import { useGsapContext } from '../../hooks/useGsapContext.js';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion.js';
import { splitChars } from '../../utils/format.js';

const HeroVisual = lazy(() => import('./HeroVisual.jsx'));

export default function HeroSection() {
  const scope = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const nameParts = profile.name.toUpperCase().split(' ');

  useGsapContext(
    scope,
    () => {
      if (prefersReducedMotion) {
        return undefined;
      }

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
        .from('.hero-copy', { y: 22, opacity: 0, duration: 0.72, stagger: 0.08 }, '-=0.2');

      return undefined;
    },
    [prefersReducedMotion],
  );

  return (
    <section
      id="home"
      ref={scope}
      className="relative flex min-h-screen items-end overflow-hidden px-5 pb-8 pt-28 sm:px-8 sm:pb-10 lg:pb-12"
    >
      <Suspense
        fallback={
          <div
            className="accent-grid-soft hero-mask absolute inset-0 -z-10 bg-ink"
            aria-hidden="true"
          />
        }
      >
        <HeroVisual />
      </Suspense>

      <div className="mx-auto grid w-full max-w-[var(--max-page)] gap-8">
        <div className="max-w-5xl">
          <p className="hero-kicker mb-5 text-sm font-bold uppercase text-accent">{profile.role}</p>
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
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div className="hero-copy max-w-2xl space-y-4 text-xl leading-relaxed text-milk/78 sm:text-2xl">
            <p>{profileData.heroDescription}</p>
            <p className="text-base leading-relaxed text-milk/68 sm:text-lg">{profileData.heroSupport}</p>
          </div>

          <div className="hero-copy flex flex-col gap-4 lg:items-end">
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:justify-end">
              <MagneticButton href="#projects" className="w-full sm:w-auto">
                View Projects
              </MagneticButton>
              <a
                href={profileData.resume.file}
                download={profileData.resume.downloadName}
                className="focus-ring inline-flex min-h-14 w-full items-center justify-center rounded-full border border-line px-6 text-sm font-bold uppercase text-milk transition-colors hover:border-accent hover:text-accent sm:w-auto"
              >
                Download CV
              </a>
            </div>

            <div className="flex flex-wrap gap-4 text-sm font-bold uppercase text-milk/64 lg:justify-end">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring rounded-full transition-colors hover:text-accent"
              >
                GitHub
              </a>
              <a href={`mailto:${profile.email}`} className="focus-ring rounded-full transition-colors hover:text-accent">
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
