import ChapterLabel from '../../components/ui/ChapterLabel.jsx';
import SectionShell from '../../components/ui/SectionShell.jsx';
import { achievement } from '../../data/profile.js';

export default function AchievementSection() {
  return (
    <SectionShell id="achievement" className="py-16 sm:py-20">
      <article className="overflow-hidden rounded-[8px] border border-accent/35 bg-accent/[0.075] p-6 shadow-card sm:p-8">
        <ChapterLabel index="05" title="Additional Achievement" />
        <div className="mt-6 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase text-accent">{achievement.year}</p>
            <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-milk sm:text-5xl">
              {achievement.title}
            </h2>
          </div>
          <div>
            <p className="text-sm font-bold uppercase text-muted">{achievement.context}</p>
            <p className="mt-3 text-lg leading-relaxed text-milk/78">{achievement.project}</p>
          </div>
        </div>
      </article>
    </SectionShell>
  );
}
