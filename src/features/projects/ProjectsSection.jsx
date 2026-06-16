import ChapterLabel from '../../components/ui/ChapterLabel.jsx';
import RevealText from '../../components/ui/RevealText.jsx';
import ScrambleText from '../../components/ui/ScrambleText.jsx';
import SectionShell from '../../components/ui/SectionShell.jsx';
import ProjectMarquee from './ProjectMarquee.jsx';
import ProjectStack from './ProjectStack.jsx';

export default function ProjectsSection() {
  return (
    <section id="lab" className="relative overflow-hidden py-24 sm:py-32">
      <SectionShell className="pb-10">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <ChapterLabel index="02" title="Lab" />
            <h2 className="mt-5 max-w-4xl font-heading text-4xl font-bold leading-tight text-milk sm:text-6xl">
              <ScrambleText>Selected experiments, stacked like research notes.</ScrambleText>
            </h2>
          </div>
          <RevealText className="max-w-md text-base leading-relaxed text-milk/72">
            The project cards pin during scroll on desktop, letting each case study slide upward and sit over the previous one.
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
