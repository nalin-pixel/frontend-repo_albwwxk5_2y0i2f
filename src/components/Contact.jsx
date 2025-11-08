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
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let’s create something surreal</h2>
          <p className="mt-2 text-white/70">Open for collaborations, commissions, and experimental UI builds.</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:hikmah.cahyo.setiawan@example.com"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition-all hover:scale-[1.03] hover:shadow-fuchsia-500/30"
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
      <p className="mt-6 text-center text-xs text-white/50">© {new Date().getFullYear()} Hikmah Cahyo Setiawan — crafted in the cosmic void</p>

      {/* subtle animated orbs as illustrations */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-10 bottom-6 h-24 w-24 rounded-full bg-fuchsia-500/20 blur-2xl"
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-0 top-10 h-20 w-20 rounded-full bg-sky-500/20 blur-2xl"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
      />
    </section>
  );
}
