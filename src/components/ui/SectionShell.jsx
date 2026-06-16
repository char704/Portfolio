export default function SectionShell({ id, className = '', children }) {
  return (
    <section id={id} className={`relative mx-auto w-full max-w-[var(--max-page)] px-5 sm:px-8 ${className}`}>
      {children}
    </section>
  );
}
