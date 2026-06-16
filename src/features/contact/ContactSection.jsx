import ChapterLabel from '../../components/ui/ChapterLabel.jsx';
import MagneticButton from '../../components/ui/MagneticButton.jsx';
import SectionShell from '../../components/ui/SectionShell.jsx';
import { profile } from '../../data/profile.js';
import ContactLinks from './ContactLinks.jsx';

export default function ContactSection() {
  return (
    <SectionShell id="contact" className="py-24 sm:py-32">
      <div className="rounded-[8px] border border-line bg-milk/[0.045] p-6 sm:p-10">
        <ChapterLabel index="03" title="Epilogue" />
        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <h2 className="font-heading text-5xl font-bold leading-none text-milk sm:text-7xl">
              Let the next experiment begin.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-milk/72">
              I am open to AI Engineering, computer vision, machine learning, and data-heavy product work where clarity matters as much as model performance.
            </p>
          </div>
          <div className="space-y-5 lg:text-right">
            <MagneticButton href={`mailto:${profile.email}`} className="w-full sm:w-auto">
              Email Phuong
            </MagneticButton>
            <p className="text-sm leading-relaxed text-muted">
              {profile.email}
              <br />
              {profile.phone}
            </p>
          </div>
        </div>
        <div className="mt-10">
          <ContactLinks />
        </div>
      </div>
    </SectionShell>
  );
}
