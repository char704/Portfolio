import { AnimatePresence, motion } from 'framer-motion';
import { Code2, Download, Layout, Mail, Search, X } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { profile, profileData } from '../../data/profile.js';

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const panelRef = useRef(null);
  const closeButtonRef = useRef(null);

  const commands = useMemo(
    () => [
      {
        label: 'Download Frontend CV',
        detail: profileData.resume.file,
        icon: Download,
        action: () => {
          const link = document.createElement('a');
          link.href = profileData.resume.file;
          link.download = profileData.resume.downloadName;
          link.click();
        },
      },
      {
        label: 'View Projects',
        detail: '#projects',
        icon: Layout,
        action: () => {
          document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        },
      },
      {
        label: 'Open GitHub',
        detail: profile.github.replace('https://', ''),
        icon: Code2,
        action: () => {
          window.open(profile.github, '_blank', 'noopener,noreferrer');
        },
      },
      {
        label: 'Send Email',
        detail: profile.email,
        icon: Mail,
        action: () => {
          window.location.href = `mailto:${profile.email}`;
        },
      },
    ],
    [],
  );

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousFocus = document.activeElement;
    window.setTimeout(() => closeButtonRef.current?.focus(), 0);

    return () => {
      if (previousFocus instanceof HTMLElement) {
        previousFocus.focus();
      }
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const isCommandTrigger = (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k';

      if (isCommandTrigger) {
        event.preventDefault();
        setIsOpen((current) => !current);
        setActiveIndex(0);
        return;
      }

      if (!isOpen) {
        return;
      }

      if (event.key === 'Escape') {
        event.preventDefault();
        setIsOpen(false);
      }

      if (event.key === 'ArrowDown') {
        event.preventDefault();
        setActiveIndex((current) => (current + 1) % commands.length);
      }

      if (event.key === 'ArrowUp') {
        event.preventDefault();
        setActiveIndex((current) => (current - 1 + commands.length) % commands.length);
      }

      if (event.key === 'Enter') {
        event.preventDefault();
        commands[activeIndex].action();
        setIsOpen(false);
      }

      if (event.key === 'Tab' && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll('button');
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (!first || !last) {
          return;
        }

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, commands, isOpen]);

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-[80] grid place-items-center bg-ink/62 px-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={() => setIsOpen(false)}
        >
          <motion.div
            ref={panelRef}
            className="w-full max-w-xl overflow-hidden rounded-[8px] border border-line bg-graphite/95 shadow-card"
            initial={{ opacity: 0, scale: 0.95, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 14 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            onMouseDown={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
          >
            <div className="flex items-center gap-3 border-b border-line px-4 py-4">
              <Search className="h-4 w-4 text-accent" aria-hidden="true" />
              <input
                className="h-8 flex-1 bg-transparent font-mono text-sm text-milk outline-none placeholder:text-muted"
                value="frontend.commands"
                readOnly
                aria-label="Command search"
              />
              <button
                ref={closeButtonRef}
                type="button"
                className="focus-ring rounded-full p-1 text-muted transition-colors hover:text-milk"
                onClick={() => setIsOpen(false)}
                aria-label="Close command palette"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div className="p-2">
              {commands.map((command, index) => {
                const Icon = command.icon;
                const isActive = index === activeIndex;

                return (
                  <button
                    key={command.label}
                    type="button"
                    className={`focus-ring flex w-full items-center gap-3 rounded-[8px] px-3 py-3 text-left transition-colors ${
                      isActive ? 'bg-accent/14 text-milk' : 'text-milk/76 hover:bg-milk/[0.06]'
                    }`}
                    onFocus={() => setActiveIndex(index)}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => {
                      command.action();
                      setIsOpen(false);
                    }}
                  >
                    <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
                    <span className="min-w-0 flex-1">
                      <span className="block font-mono text-sm font-bold">{command.label}</span>
                      <span className="block truncate text-xs text-muted">{command.detail}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
