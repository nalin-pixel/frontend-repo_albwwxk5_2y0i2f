import { Code2, PenTool, Sparkles, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

const works = [
  {
    title: 'Verdant Identity Kit',
    tag: 'Branding',
    icon: <PenTool className="h-5 w-5" />,
    desc: 'Logo, palette, and social system inspired by organic forms and fresh greens.'
  },
  {
    title: 'Canopy UI Frames',
    tag: 'UI/UX',
    icon: <Leaf className="h-5 w-5" />,
    desc: 'Cards, chips, and nav with botanical gradients and nature-driven motion.'
  },
  {
    title: 'Eco Commerce Concept',
    tag: 'Web App',
    icon: <Code2 className="h-5 w-5" />,
    desc: 'Storefront exploring sustainable vibes with playful hover and scroll interactions.'
  }
];

export default function Showcase() {
  return (
    <section id="work" className="relative z-10 mx-auto max-w-6xl px-6 py-24 text-white">
      <div className="mb-12 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Selected Work</h2>
          <p className="mt-2 text-white/70">Branding, UI frames, and concepts exploring an emerald aesthetic.</p>
        </div>
        <div className="hidden items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur sm:flex">
          <Sparkles className="h-4 w-4 text-emerald-300" /> curated
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
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-lime-500/20 px-3 py-1 text-xs text-white/80">
              {w.icon}
              {w.tag}
            </div>
            <h3 className="text-xl font-semibold">{w.title}</h3>
            <p className="mt-2 text-sm text-white/70">{w.desc}</p>
            {/* added illustrative layers */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-r from-emerald-500/30 to-lime-500/30 blur-xl"
              animate={{ rotate: [0, 180, 360] }}
              transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
            />
            <motion.div
              aria-hidden
              className="pointer-events-none absolute bottom-[-30px] left-[-30px] h-24 w-24 rotate-12 rounded-xl border border-emerald-400/30 bg-emerald-200/10 backdrop-blur"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
            />
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
