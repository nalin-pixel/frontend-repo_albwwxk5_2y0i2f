import Spline from '@splinetool/react-spline';
import { Rocket, Star, Mail, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[95vh] w-full overflow-hidden">
      {/* 3D cover (surreal rollercoaster universe) */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Vignette + green glow that doesn't block interaction */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_55%,rgba(6,20,13,0.9)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(700px_380px_at_80%_20%,rgba(34,197,94,0.22),transparent),radial-gradient(900px_520px_at_10%_80%,rgba(16,185,129,0.2),transparent)]" />
      </div>

      {/* Surreal overlays: flowing ribbons + twinkles (do not block Spline) */}
      <div className="pointer-events-none absolute inset-0">
        {/* holographic ribbon */}
        <motion.div
          aria-hidden
          className="absolute left-[-10%] top-[15%] h-32 w-[120%] -rotate-6 rounded-full bg-[linear-gradient(90deg,rgba(16,185,129,0)_0%,rgba(16,185,129,0.35)_25%,rgba(132,204,22,0.35)_50%,rgba(20,184,166,0.35)_75%,rgba(16,185,129,0)_100%)] blur-md"
          animate={{ x: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        />
        {/* neon wave */}
        <motion.div
          aria-hidden
          className="absolute bottom-[20%] left-[-15%] h-24 w-[130%] rotate-6 rounded-full bg-[linear-gradient(90deg,rgba(20,184,166,0)_0%,rgba(34,197,94,0.3)_40%,rgba(132,204,22,0.28)_60%,rgba(20,184,166,0)_100%)]"
          animate={{ x: [0, -24, 0] }}
          transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut' }}
        />
        {/* twinkles */}
        <div className="absolute inset-0">
          {[...Array(18)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute h-[2px] w-[2px] rounded-full bg-emerald-200"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.7,
              }}
              animate={{ opacity: [0.2, 1, 0.2], y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 3 + Math.random() * 3, ease: 'easeInOut' }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm backdrop-blur"
        >
          <Star className="h-4 w-4 text-emerald-300" />
          Verified Identity • Green Cosmos
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="bg-gradient-to-r from-emerald-200 via-lime-200 to-teal-200 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl"
        >
          Hikmah Cahyo Setiawan
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-3 max-w-2xl text-base text-white/85 sm:text-lg"
        >
          Graphic Designer • Student in Pasuruan — crafting lush, surreal visuals and nature-infused branding. Blending organic gradients with clean, practical UX.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-lime-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition-all hover:scale-[1.03] hover:shadow-lime-500/30"
          >
            <Rocket className="h-4 w-4" /> Explore Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
          >
            <Mail className="h-4 w-4" /> Contact
          </a>
        </motion.div>

        {/* Floating chips & increased illustrations */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-6 top-24 hidden md:block"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        >
          <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-3 py-2 text-xs">
            <Leaf className="h-4 w-4 text-emerald-300" /> organic UI
          </div>
        </motion.div>
        <motion.div
          aria-hidden
          className="pointer-events-none absolute bottom-28 right-8 hidden md:block"
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        >
          <div className="rounded-full bg-gradient-to-r from-emerald-500/40 to-lime-500/40 p-3 shadow-lg shadow-emerald-500/20 backdrop-blur">●</div>
        </motion.div>
        <motion.div
          aria-hidden
          className="pointer-events-none absolute right-24 top-32 hidden md:block"
          animate={{ x: [0, 8, 0], y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        >
          <div className="h-14 w-14 rounded-xl border border-emerald-300/30 bg-emerald-200/10 backdrop-blur" />
        </motion.div>
        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-20 bottom-20 hidden md:block"
          animate={{ rotate: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
        >
          <div className="h-10 w-32 rounded-full bg-gradient-to-r from-emerald-400/60 to-teal-400/60" />
        </motion.div>
      </div>
    </section>
  );
}
