import ChapterLabel from '../../components/ui/ChapterLabel.jsx';
import RevealText from '../../components/ui/RevealText.jsx';
import ScrambleText from '../../components/ui/ScrambleText.jsx';
import SectionShell from '../../components/ui/SectionShell.jsx';
import { profile, skillGroups } from '../../data/profile.js';
import BentoCard from './BentoCard.jsx';
import ExperienceTimeline from './ExperienceTimeline.jsx';
import SkillOrbit from './SkillOrbit.jsx';

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

      <div className="bento-grid grid gap-4 lg:grid-cols-12">
        <BentoCard className="lg:col-span-7 lg:row-span-2">
          <p className="text-xs font-bold uppercase text-accent">Current track</p>
          <h3 className="mt-4 font-heading text-3xl font-bold text-milk sm:text-4xl">{profile.role}</h3>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-milk/72">
            Final-year Computer Science student focused on computer vision, machine learning, image super-resolution, and the discipline of fair model comparison.
          </p>
          <div className="mt-8 h-px w-full bg-line" />
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            <div>
              <p className="text-xs uppercase text-muted">Education</p>
              <p className="mt-2 font-bold text-milk">{profile.education.school}</p>
              <p className="text-sm text-milk/66">{profile.education.degree}</p>
            </div>
            <div>
              <p className="text-xs uppercase text-muted">Graduation</p>
              <p className="mt-2 font-bold text-milk">{profile.education.graduation}</p>
              <p className="text-sm text-milk/66">GPA {profile.education.gpa}</p>
            </div>
            <div>
              <p className="text-xs uppercase text-muted">Location</p>
              <p className="mt-2 font-bold text-milk">{profile.location}</p>
              <p className="text-sm text-milk/66">Vietnamese native, English TOEIC 750</p>
            </div>
          </div>
        </BentoCard>

        <BentoCard className="lg:col-span-5">
          <p className="text-xs font-bold uppercase text-accent">Award signal</p>
          <h3 className="mt-4 font-heading text-2xl font-bold text-milk">{profile.award.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-milk/72">
            {profile.award.context} for {profile.award.project}, {profile.award.year}.
          </p>
        </BentoCard>

        <BentoCard className="lg:col-span-5">
          <p className="text-xs font-bold uppercase text-accent">Skill surface</p>
          <div className="mt-5">
            <SkillOrbit />
          </div>
        </BentoCard>

        <BentoCard className="lg:col-span-5">
          <p className="text-xs font-bold uppercase text-accent">Experience</p>
          <div className="mt-5">
            <ExperienceTimeline />
          </div>
        </BentoCard>

        <BentoCard className="lg:col-span-7">
          <p className="text-xs font-bold uppercase text-accent">Tool map</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title} className="rounded-[8px] border border-line bg-ink/34 p-4">
                <h3 className="font-heading text-lg font-bold text-milk">{group.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-milk/68">{group.items.join(' / ')}</p>
              </div>
            ))}
          </div>
        </BentoCard>
      </div>
    </SectionShell>
  );
}
