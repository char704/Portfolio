import { Code2, ExternalLink } from 'lucide-react';

export default function ProjectCard({ project, index, onPreviewChange }) {
  return (
    <article
      className="project-card relative flex min-h-0 flex-col overflow-hidden rounded-[8px] border border-line bg-graphite shadow-card lg:min-h-[620px]"
      onPointerEnter={() => onPreviewChange?.(project)}
      onPointerMove={() => onPreviewChange?.(project)}
      onPointerLeave={() => onPreviewChange?.(null)}
      onFocus={() => onPreviewChange?.(project)}
      onBlur={() => onPreviewChange?.(null)}
    >
      <div className="project-card-grid absolute inset-0 opacity-35" />
      <div className="line-scan absolute left-0 top-0 h-px w-full bg-accent" />

      <div className="relative z-10 grid flex-1 gap-6 p-5 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <div className="flex min-w-0 flex-col justify-between gap-8">
          <div>
            <div className="flex items-start justify-between gap-5">
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

            <div className="mt-8 font-heading text-5xl font-bold text-milk/10 sm:text-7xl">{project.metric}</div>
            <p className="mt-3 text-lg leading-relaxed text-milk/78">{project.summary}</p>
          </div>

          <div>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span key={tool} className="rounded-full border border-line bg-ink/42 px-3 py-2 text-xs text-milk/75">
                  {tool}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-4 text-xs font-bold uppercase text-milk transition-colors hover:border-accent hover:text-accent"
                >
                  <Code2 className="h-4 w-4" aria-hidden="true" />
                  GitHub
                </a>
              ) : null}
              {project.liveDemo ? (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-full bg-milk px-4 text-xs font-bold uppercase text-ink transition-colors hover:bg-accent"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  Live Demo
                </a>
              ) : null}
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-rows-[minmax(220px,0.92fr)_auto]">
          <div className="relative min-h-[220px] overflow-hidden rounded-[8px] border border-line bg-ink/42">
            {project.previewImage ? (
              <img
                src={project.previewImage}
                alt={project.previewAlt ?? `${project.title} preview`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            ) : (
              <div className="grid h-full place-items-center p-6 text-center text-sm font-bold uppercase text-muted">
                Project Preview
              </div>
            )}
          </div>

          <ul className="grid gap-3 text-sm leading-relaxed text-milk/72 sm:text-base">
            {project.details.map((detail) => (
              <li key={detail} className="border-l border-accent/45 pl-4">
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
