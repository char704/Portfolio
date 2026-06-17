import ChapterLabel from '../../components/ui/ChapterLabel.jsx';
import RevealText from '../../components/ui/RevealText.jsx';
import SectionShell from '../../components/ui/SectionShell.jsx';
import { experience } from '../../data/profile.js';

export default function ExperienceSection() {
  return (
    <SectionShell id="experience" className="py-24 sm:py-32">
      <div className="mb-10 flex flex-col gap-5 sm:mb-14 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <ChapterLabel index="04" title="Experience" />
          <h2 className="mt-5 max-w-4xl font-heading text-4xl font-bold leading-tight text-milk sm:text-6xl">
            Practical experience with requirements, support, and team communication.
          </h2>
        </div>
        <RevealText className="max-w-md text-base leading-relaxed text-milk/72">
          These internships support frontend work through clearer requirements, troubleshooting habits, and collaboration with development teams.
        </RevealText>
      </div>

      <div className="grid gap-5">
        {experience.map((item) => (
          <article key={`${item.company}-${item.role}`} className="rounded-[8px] border border-line bg-surface p-6 shadow-card sm:p-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase text-accent">{item.period}</p>
                <h3 className="mt-2 font-heading text-2xl font-bold leading-tight text-milk">{item.role}</h3>
                <p className="mt-1 text-sm font-bold text-muted">{item.company}</p>
              </div>
            </div>

            <ul className="mt-6 grid gap-3 text-sm leading-relaxed text-milk/74 sm:text-base">
              {item.points.map((point) => (
                <li key={point} className="border-l border-accent/45 pl-4">
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
