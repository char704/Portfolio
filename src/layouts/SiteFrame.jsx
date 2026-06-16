import { profile } from '../data/profile.js';

const navItems = [
  { href: '#workshop', label: 'Workshop' },
  { href: '#lab', label: 'Lab' },
  { href: '#contact', label: 'Contact' },
];

export default function SiteFrame() {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 px-4 py-4 sm:px-8">
      <nav className="mx-auto flex max-w-[var(--max-page)] items-center justify-between rounded-full border border-line bg-ink/52 px-4 py-3 text-xs font-bold uppercase text-milk/80 backdrop-blur-xl">
        <a href="#prologue" className="focus-ring rounded-full text-milk">
          {profile.name}
        </a>
        <div className="hidden items-center gap-4 sm:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="focus-ring rounded-full transition-colors hover:text-accent">
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
