import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-24 text-white">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Hikmah</h2>
        <p className="mt-2 text-white/70">Graphic designer and student in Pasuruan — exploring organic identity, light, and motion.</p>
      </div>
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-3">
        {/* Textual profile */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-1"
        >
          <h3 className="text-2xl font-semibold">Profile</h3>
          <p className="mt-4 text-white/80">
            I’m Hikmah Cahyo Setiawan — crafting verdant visuals with human-centered UI. I mix illustration, typography,
            and motion to tell clear, memorable stories.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-3 text-white/80">
            <li className="rounded-xl border border-white/10 bg-white/5 p-4">Brand & visual identity</li>
            <li className="rounded-xl border border-white/10 bg-white/5 p-4">Poster & social graphics</li>
            <li className="rounded-xl border border-white/10 bg-white/5 p-4">UI styleframes & systems</li>
            <li className="rounded-xl border border-white/10 bg-white/5 p-4">Motion & micro-interactions</li>
          </ul>
        </motion.div>

        {/* Expanded illustrative panel 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="relative md:col-span-1"
        >
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500/25 to-lime-500/25 blur-2xl" />
          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[radial-gradient(55%_55%_at_50%_45%,rgba(34,197,94,0.28),transparent),radial-gradient(50%_60%_at_60%_65%,rgba(16,185,129,0.25),transparent)]">
              <div className="relative h-full w-full">
                <motion.div
                  className="absolute left-6 top-6 h-20 w-20 rounded-xl bg-white/60 mix-blend-overlay"
                  animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                />
                <motion.div
                  className="absolute bottom-8 left-8 h-3 w-40 rounded-full bg-gradient-to-r from-emerald-400/80 to-lime-400/80"
                  animate={{ x: [0, 12, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                />
                <motion.div
                  className="absolute right-8 top-10 h-24 w-24 rounded-full bg-gradient-to-r from-emerald-500/30 to-lime-500/30 blur-xl"
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Expanded illustrative panel 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative md:col-span-1"
        >
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-teal-500/20 to-emerald-500/20 blur-2xl" />
          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[radial-gradient(60%_55%_at_50%_45%,rgba(20,184,166,0.28),transparent),radial-gradient(45%_60%_at_60%_65%,rgba(34,197,94,0.25),transparent)]">
              <div className="relative h-full w-full">
                <motion.div
                  className="absolute right-6 top-6 h-24 w-24 rounded-full bg-gradient-to-r from-teal-400/80 to-emerald-400/80 blur-md"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
                />
                <motion.div
                  className="absolute bottom-8 right-8 h-3 w-32 rounded-full bg-gradient-to-r from-lime-400/80 to-emerald-400/80"
                  animate={{ x: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut' }}
                />
                <motion.div
                  className="absolute left-8 top-10 h-10 w-10 rotate-12 rounded-lg border border-emerald-300/40 bg-emerald-200/10 backdrop-blur"
                  animate={{ rotate: [12, 0, 12] }}
                  transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
