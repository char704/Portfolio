export default function ProjectCard({ project, index }) {
  return (
    <article className="project-card relative flex min-h-[520px] flex-col justify-between overflow-hidden rounded-[8px] border border-line bg-graphite p-5 shadow-card sm:p-8">
      <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(250,250,248,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(250,250,248,0.07)_1px,transparent_1px)] [background-size:36px_36px]" />
      <div className="line-scan absolute left-0 top-0 h-px w-full bg-accent" />
      <div className="relative z-10 flex items-start justify-between gap-5">
        <div>
          <p className="text-xs font-bold uppercase text-accent">{project.eyebrow}</p>
          <h3 className="mt-4 max-w-3xl font-heading text-4xl font-bold leading-tight text-milk sm:text-6xl">
            {project.title}
          </h3>
        </div>
        <div className="hidden h-20 w-20 shrink-0 place-items-center rounded-full border border-accent/50 bg-ink/42 font-heading text-xl font-bold text-accent sm:grid">
          {String(index + 1).padStart(2, '0')}
        </div>
      </div>

      <div className="relative z-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <div className="font-heading text-6xl font-bold text-milk/10 sm:text-8xl">{project.metric}</div>
          <p className="mt-3 text-lg leading-relaxed text-milk/78">{project.summary}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span key={tool} className="rounded-full border border-line bg-ink/42 px-3 py-2 text-xs text-milk/75">
                {tool}
              </span>
            ))}
          </div>
        </div>
        <ul className="space-y-3 text-sm leading-relaxed text-milk/72 sm:text-base">
          {project.details.map((detail) => (
            <li key={detail} className="border-l border-accent/45 pl-4">
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
