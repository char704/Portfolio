import { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectImageTrailer from '../../components/ui/ProjectImageTrailer.jsx';
import { projects } from '../../data/profile.js';
import { useGsapContext } from '../../hooks/useGsapContext.js';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion.js';
import ProjectCard from './ProjectCard.jsx';

gsap.registerPlugin(ScrollTrigger);

export default function ProjectStack() {
  const scope = useRef(null);
  const [activePreview, setActivePreview] = useState(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useGsapContext(scope, () => {
    const cards = gsap.utils.toArray('.project-card');

    if (prefersReducedMotion) {
      gsap.set(cards, { clearProps: 'all' });
      return undefined;
    }

    const media = gsap.matchMedia();

    media.add('(min-width: 900px)', () => {
      gsap.set(cards, {
        yPercent: (index) => (index === 0 ? 0 : 105),
        scale: (index) => 1 - index * 0.035,
        opacity: 1,
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: scope.current,
          start: 'top top',
          end: () => `+=${cards.length * window.innerHeight}`,
          pin: true,
          scrub: 0.9,
          anticipatePin: 1,
        },
      });

      cards.forEach((card, index) => {
        if (index === 0) {
          return;
        }

        timeline
          .to(cards[index - 1], { scale: 0.92 - index * 0.015, yPercent: -7, duration: 0.8 }, index - 0.15)
          .to(card, { yPercent: index * 3.2, scale: 1 - index * 0.022, duration: 0.9 }, index - 0.05);
      });

      return () => gsap.set(cards, { clearProps: 'all' });
    });

    media.add('(max-width: 899px)', () => {
      gsap.set(cards, { clearProps: 'all' });
    });

    return () => media.revert();
  }, [prefersReducedMotion]);

  return (
    <div ref={scope} className="relative py-10 lg:min-h-screen">
      <ProjectImageTrailer activeProject={activePreview} />
      <div className="relative mx-auto grid max-w-5xl gap-5 rounded-[8px] lg:min-h-[620px] lg:items-center lg:overflow-hidden">
        {projects.map((project, index) => (
          <div key={project.title} className="lg:col-start-1 lg:row-start-1">
            <ProjectCard project={project} index={index} onPreviewChange={setActivePreview} />
          </div>
        ))}
      </div>
    </div>
  );
}
