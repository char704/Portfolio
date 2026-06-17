import { contactLinks } from '../../data/profile.js';

export default function ContactLinks() {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {contactLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target={link.external ? '_blank' : undefined}
          rel={link.external ? 'noopener noreferrer' : undefined}
          className="focus-ring rounded-[8px] border border-line bg-milk/[0.055] p-4 text-sm font-bold uppercase text-milk transition-colors hover:border-accent hover:text-accent"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
