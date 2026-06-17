import { Code2, Download, Mail } from 'lucide-react';
import ChapterLabel from '../../components/ui/ChapterLabel.jsx';
import MagneticButton from '../../components/ui/MagneticButton.jsx';
import SectionShell from '../../components/ui/SectionShell.jsx';
import { profile, profileData } from '../../data/profile.js';
import ContactLinks from './ContactLinks.jsx';

export default function ContactSection() {
  return (
    <SectionShell id="contact" className="py-24 sm:py-32">
      <div className="rounded-[8px] border border-line bg-milk/[0.045] p-6 sm:p-10">
        <ChapterLabel index="06" title="Contact" />
        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <h2 className="font-heading text-5xl font-bold leading-none text-milk sm:text-7xl">
              Let&apos;s build something useful.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-milk/72">
              I am currently looking for Frontend Intern or Fresher opportunities where I can contribute, learn, and improve through real product development.
            </p>
          </div>

          <div className="space-y-5 lg:text-right">
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <MagneticButton href={`mailto:${profile.email}`} className="w-full sm:w-auto">
                <Mail className="h-4 w-4" aria-hidden="true" />
                Send Email
              </MagneticButton>
              <a
                href={profileData.resume.file}
                download={profileData.resume.downloadName}
                className="focus-ring inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full border border-line px-6 text-sm font-bold uppercase text-milk transition-colors hover:border-accent hover:text-accent sm:w-auto"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download CV
              </a>
            </div>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex min-h-11 items-center gap-2 rounded-full text-sm font-bold uppercase text-milk/70 transition-colors hover:text-accent"
            >
              <Code2 className="h-4 w-4" aria-hidden="true" />
              GitHub
            </a>
            <p className="text-sm leading-relaxed text-muted">
              {profile.email}
              <br />
              <a href="tel:+84908305196" className="focus-ring rounded-sm transition-colors hover:text-accent">
                {profile.phone}
              </a>
              <br />
              {profile.location}
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
