const tags = ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'GSAP', 'Framer Motion', 'Three.js', 'Responsive UI', 'Vite'];

export default function ProjectMarquee() {
  return (
    <div className="overflow-hidden border-y border-line py-3" aria-hidden="true">
      <div className="flex min-w-max gap-3 text-xs font-bold uppercase text-muted">
        {[...tags, ...tags].map((tag, index) => (
          <span key={`${tag}-${index}`} className="rounded-full border border-line px-3 py-2">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
