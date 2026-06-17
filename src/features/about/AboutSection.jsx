import ChapterLabel from '../../components/ui/ChapterLabel.jsx';
import RevealText from '../../components/ui/RevealText.jsx';
import SectionShell from '../../components/ui/SectionShell.jsx';
import { profileData } from '../../data/profile.js';

export default function AboutSection() {
  return (
    <SectionShell id="about" className="py-24 sm:py-32">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <ChapterLabel index="01" title="About" />
          <h2 className="mt-5 max-w-3xl font-heading text-4xl font-bold leading-tight text-milk sm:text-6xl">
            Responsive interfaces, thoughtful interaction, and maintainable code.
          </h2>
        </div>

        <div className="space-y-6">
          {profileData.about.paragraphs.map((paragraph) => (
            <RevealText key={paragraph} className="text-lg leading-relaxed text-milk/74">
              {paragraph}
            </RevealText>
          ))}

          <dl className="grid gap-3 sm:grid-cols-2">
            {profileData.about.facts.map((fact) => (
              <div key={fact.label} className="rounded-[8px] border border-line bg-surface p-4">
                <dt className="text-xs font-bold uppercase text-accent">{fact.label}</dt>
                <dd className="mt-2 font-heading text-lg font-bold leading-tight text-milk">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </SectionShell>
  );
}
