export default function About() {
  return (
    <section className="relative z-10 mx-auto max-w-5xl px-6 py-16 text-white">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Surrealist Designer & Builder</h2>
          <p className="mt-4 text-white/80">
            I craft interfaces that feel like slipping into a lucid dream—playful, immersive, and deeply usable.
            My focus is blending unconventional visuals with crisp, intentional UX, bringing ideas to life with code.
          </p>
          <ul className="mt-6 space-y-2 text-white/70">
            <li>• Motion-first interfaces and micro-interactions</li>
            <li>• Holographic gradients, glassmorphism, and neon futurism</li>
            <li>• React, Three/Spline, and modern web tooling</li>
          </ul>
        </div>
        <div className="relative">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-fuchsia-500/30 to-sky-500/30 blur-2xl" />
          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="aspect-video w-full overflow-hidden rounded-2xl bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,0,153,0.25)_0%,rgba(0,153,255,0.25)_100%)]" />
            <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs text-white/70">
              <div className="rounded-lg bg-white/5 p-3">12+ projects</div>
              <div className="rounded-lg bg-white/5 p-3">5 yrs exp</div>
              <div className="rounded-lg bg-white/5 p-3">Remote friendly</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
