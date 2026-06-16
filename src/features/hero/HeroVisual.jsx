export default function HeroVisual() {
  return (
    <div className="hero-mask absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <img
        src="/images/ai-lab-visual.png"
        alt=""
        className="h-full w-full object-cover opacity-70"
        loading="eager"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,16,18,0.95)_0%,rgba(15,16,18,0.72)_42%,rgba(15,16,18,0.36)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(15,16,18,0.96)_0%,rgba(15,16,18,0.2)_42%,rgba(15,16,18,0.68)_100%)]" />
      <div className="drift-grid absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(0,181,216,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(0,181,216,0.12)_1px,transparent_1px)] [background-size:48px_48px]" />
    </div>
  );
}
