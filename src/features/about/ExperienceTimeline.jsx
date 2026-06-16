import { experience } from '../../data/profile.js';

export default function ExperienceTimeline() {
  return (
    <div className="space-y-5">
      {experience.map((item) => (
        <article key={`${item.company}-${item.role}`} className="border-l border-accent/40 pl-4">
          <div className="text-xs font-bold uppercase text-accent">{item.period}</div>
          <h3 className="mt-2 font-heading text-xl font-bold text-milk">{item.role}</h3>
          <p className="text-sm text-muted">{item.company}</p>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-milk/72">
            {item.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
