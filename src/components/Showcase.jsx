import { Code2, PenTool, Sparkles, Wand2 } from 'lucide-react';

const works = [
  {
    title: 'Liquid Neon Interface',
    tag: 'UI/UX',
    icon: <Wand2 className="h-5 w-5" />,
    desc: 'A holographic gradient dashboard with liquid morphing cards and smooth glass reflections.'
  },
  {
    title: 'Cosmic Commerce',
    tag: 'Web App',
    icon: <Code2 className="h-5 w-5" />,
    desc: 'Headless storefront with trippy galaxy theming and micro-animations for delightful browsing.'
  },
  {
    title: 'Dreamwave Poster Set',
    tag: 'Graphics',
    icon: <PenTool className="h-5 w-5" />,
    desc: 'Surreal vector compositions with iridescent gradients and vaporwave typography.'
  }
];

export default function Showcase() {
  return (
    <section id="work" className="relative z-10 mx-auto max-w-6xl px-6 py-20 text-white">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Selected Work</h2>
          <p className="mt-2 text-white/70">A mix of interfaces, web apps, and graphics exploring surreal aesthetics.</p>
        </div>
        <div className="hidden items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur sm:flex">
          <Sparkles className="h-4 w-4 text-fuchsia-300" /> curated
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {works.map((w, i) => (
          <article
            key={i}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:translate-y-[-2px] hover:border-white/20 hover:bg-white/10"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500/20 to-sky-500/20 px-3 py-1 text-xs text-white/80">
              {w.icon}
              {w.tag}
            </div>
            <h3 className="text-xl font-semibold">{w.title}</h3>
            <p className="mt-2 text-sm text-white/70">{w.desc}</p>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </article>
        ))}
      </div>
    </section>
  );
}
