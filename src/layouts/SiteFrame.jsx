import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { profile, profileData } from '../data/profile.js';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function SiteFrame() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-40 px-4 py-4 sm:px-8">
      <nav className="mx-auto max-w-[var(--max-page)] rounded-[24px] border border-line bg-ink/72 px-4 py-3 text-xs font-bold uppercase text-milk/80 shadow-card backdrop-blur-xl">
        <div className="flex items-center justify-between gap-3">
          <a href="#home" className="focus-ring rounded-full text-milk" onClick={closeMenu}>
            {profile.name}
          </a>

          <div className="hidden items-center gap-4 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="focus-ring rounded-full transition-colors hover:text-accent">
                {item.label}
              </a>
            ))}
            <a
              href={profileData.resume.file}
              download={profileData.resume.downloadName}
              className="focus-ring inline-flex min-h-11 items-center rounded-full border border-accent/60 px-4 text-accent transition-colors hover:bg-accent hover:text-ink"
            >
              Download CV
            </a>
          </div>

          <button
            type="button"
            className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-line text-milk transition-colors hover:border-accent hover:text-accent md:hidden"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>

        {isOpen ? (
          <div className="mt-3 grid gap-2 border-t border-line pt-3 md:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="focus-ring flex min-h-11 items-center rounded-[8px] px-3 transition-colors hover:bg-milk/[0.06] hover:text-accent"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <a
              href={profileData.resume.file}
              download={profileData.resume.downloadName}
              className="focus-ring flex min-h-11 items-center rounded-[8px] border border-accent/50 px-3 text-accent transition-colors hover:bg-accent hover:text-ink"
              onClick={closeMenu}
            >
              Download CV
            </a>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
