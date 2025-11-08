import { Mail, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 mx-auto max-w-6xl px-6 py-24 text-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl border border-white/10 bg-white/5 p-8"
      >
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let’s create something fresh</h2>
          <p className="mt-2 text-white/70">Open for collaborations, commissions, and experimental UI builds.</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:hikmah.cahyo.setiawan@example.com"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-lime-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition-all hover:scale-[1.03] hover:shadow-lime-500/30"
          >
            <Mail className="h-4 w-4" /> Email
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>
      </motion.div>
      <p className="mt-6 text-center text-xs text-white/50">© {new Date().getFullYear()} Hikmah Cahyo Setiawan — cultivated in an emerald garden</p>

      {/* additional green orbs and accents */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-10 bottom-6 h-24 w-24 rounded-full bg-emerald-500/20 blur-2xl"
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-0 top-10 h-20 w-20 rounded-full bg-lime-500/20 blur-2xl"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-12 bottom-8 h-10 w-32 rotate-6 rounded-full bg-gradient-to-r from-emerald-400/60 to-teal-400/60"
        animate={{ x: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut' }}
      />
    </section>
  );
}
