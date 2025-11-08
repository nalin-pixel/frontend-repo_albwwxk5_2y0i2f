import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="relative z-10 mx-auto max-w-5xl px-6 py-24 text-white">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-fuchsia-500/30 to-sky-500/30 blur-2xl" />
          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6">
            {/* Illustrated panel */}
            <div className="aspect-video w-full overflow-hidden rounded-2xl bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,0,153,0.25)_0%,rgba(0,153,255,0.25)_100%)]">
              <div className="flex h-full w-full items-center justify-center">
                <motion.div
                  className="h-20 w-20 rounded-xl bg-white/80 mix-blend-overlay"
                  animate={{ y: [0, -8, 0], rotate: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                />
                <motion.div
                  className="ml-6 h-6 w-40 rounded-full bg-gradient-to-r from-fuchsia-400/80 to-sky-400/80"
                  animate={{ x: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs text-white/70">
              <div className="rounded-lg bg-white/5 p-3">12+ projects</div>
              <div className="rounded-lg bg-white/5 p-3">5 yrs exp</div>
              <div className="rounded-lg bg-white/5 p-3">Remote friendly</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
