import ChapterLabel from '../../components/ui/ChapterLabel.jsx';
import RevealText from '../../components/ui/RevealText.jsx';
import SectionShell from '../../components/ui/SectionShell.jsx';
import ProjectMarquee from './ProjectMarquee.jsx';
import ProjectStack from './ProjectStack.jsx';

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative overflow-hidden py-24 sm:py-32">
      <SectionShell className="pb-10">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <ChapterLabel index="03" title="Projects" />
            <h2 className="mt-5 max-w-4xl font-heading text-4xl font-bold leading-tight text-milk sm:text-6xl">
              Selected frontend projects and interface work.
            </h2>
          </div>
          <RevealText className="max-w-md text-base leading-relaxed text-milk/72">
            Project cards highlight verified UI work, contribution details, technology stack, and safe external links.
          </RevealText>
        </div>
      </SectionShell>
      <ProjectMarquee />
      <SectionShell>
        <ProjectStack />
      </SectionShell>
    </section>
  );
}
