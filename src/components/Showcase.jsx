import { Code2, PenTool, Sparkles, Wand2 } from 'lucide-react';
import { motion } from 'framer-motion';

const works = [
  {
    title: 'Iridescent Identity Kit',
    tag: 'Branding',
    icon: <PenTool className="h-5 w-5" />,
    desc: 'Logo, palette, and social system built around holographic materials and soft motion.'
  },
  {
    title: 'Neon UI Frames',
    tag: 'UI/UX',
    icon: <Wand2 className="h-5 w-5" />,
    desc: 'Explorations of cards, chips, and navigation with micro-interactions and parallax.'
  },
  {
    title: 'Cosmic Commerce',
    tag: 'Web App',
    icon: <Code2 className="h-5 w-5" />,
    desc: 'Concept storefront featuring dreamy gradients and playful motion for product focus.'
  }
];

export default function Showcase() {
  return (
    <section id="work" className="relative z-10 mx-auto max-w-6xl px-6 py-24 text-white">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Selected Work</h2>
          <p className="mt-2 text-white/70">A mix of branding, UI frames, and web concepts exploring surreal aesthetics.</p>
        </div>
        <div className="hidden items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur sm:flex">
          <Sparkles className="h-4 w-4 text-fuchsia-300" /> curated
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } }
        }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {works.map((w, i) => (
          <motion.article
            key={i}
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:translate-y-[-2px] hover:border-white/20 hover:bg-white/10"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500/20 to-fuchsia-500/20 px-3 py-1 text-xs text-white/80">
              {w.icon}
              {w.tag}
            </div>
            <h3 className="text-xl font-semibold">{w.title}</h3>
            <p className="mt-2 text-sm text-white/70">{w.desc}</p>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-r from-fuchsia-500/30 to-sky-500/30 blur-xl"
              animate={{ rotate: [0, 180, 360] }}
              transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
            />
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
