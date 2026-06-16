import { heroMetrics } from '../../data/profile.js';

export default function HeroMetrics() {
  return (
    <div className="grid gap-3 sm:grid-cols-4">
      {heroMetrics.map((metric) => (
        <div key={metric.label} className="border-t border-line pt-4">
          <div className="font-heading text-3xl font-bold text-milk">{metric.value}</div>
          <div className="mt-1 text-xs uppercase text-muted">{metric.label}</div>
        </div>
      ))}
    </div>
  );
}
