import ChapterLabel from '../../components/ui/ChapterLabel.jsx';
import RevealText from '../../components/ui/RevealText.jsx';
import ScrambleText from '../../components/ui/ScrambleText.jsx';
import SectionShell from '../../components/ui/SectionShell.jsx';
import { profileData } from '../../data/profile.js';
import BentoCard from './BentoCard.jsx';

export default function AboutSection() {
  return (
    <SectionShell id="workshop" className="py-24 sm:py-32">
      <div className="mb-10 flex flex-col gap-5 sm:mb-14 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <ChapterLabel index="01" title="Workshop" />
          <h2 className="mt-5 max-w-3xl font-heading text-4xl font-bold leading-tight text-milk sm:text-6xl">
            <ScrambleText>Systems thinking, model craft, and careful measurement.</ScrambleText>
          </h2>
        </div>
        <RevealText className="max-w-md text-base leading-relaxed text-milk/72">
          I move between research experiments, analysis documents, and implementation details so the final output is explainable, measurable, and useful.
        </RevealText>
      </div>

      <div className="bento-grid grid grid-cols-1 gap-4 md:grid-cols-2">
        {profileData.skills.map((skill) => (
          <BentoCard
            key={skill.id}
            category={skill.category}
            description={skill.description}
            techs={skill.techs}
            icon={skill.icon}
          />
        ))}
      </div>
    </SectionShell>
  );
}
