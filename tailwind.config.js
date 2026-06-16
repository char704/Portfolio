export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0F1012',
        graphite: '#1A1C20',
        surface: '#43464B',
        milk: '#FAFAF8',
        muted: '#A9ADB4',
        accent: '#00B5D8',
        signal: '#7CE7D4',
        line: 'rgba(250, 250, 248, 0.12)',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'Geist Mono', 'ui-monospace', 'monospace'],
        body: ['DM Sans', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 60px rgba(0, 181, 216, 0.22)',
        card: '0 24px 80px rgba(0, 0, 0, 0.34)',
      },
    },
  },
};
