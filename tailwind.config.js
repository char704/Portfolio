export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: 'var(--bg-primary)',
        graphite: 'var(--surface)',
        surface: 'var(--surface)',
        milk: 'var(--text-primary)',
        muted: 'var(--muted)',
        accent: 'var(--accent)',
        signal: 'var(--signal)',
        line: 'var(--line)',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'Geist Mono', 'ui-monospace', 'monospace'],
        body: ['DM Sans', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 60px color-mix(in srgb, var(--accent) 22%, transparent)',
        card: 'var(--shadow-card)',
      },
    },
  },
};
