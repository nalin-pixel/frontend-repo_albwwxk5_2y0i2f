import Spline from '@splinetool/react-spline';
import { Rocket, Star, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[95vh] w-full overflow-hidden">
      {/* 3D cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Vignette + color glow that doesn't block interaction */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_55%,rgba(5,5,12,0.85)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_80%_20%,rgba(245,158,11,0.15),transparent),radial-gradient(800px_400px_at_10%_80%,rgba(59,130,246,0.18),transparent)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm backdrop-blur"
        >
          <Star className="h-4 w-4 text-yellow-300" />
          Playful • Modern • Vibrant
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="bg-gradient-to-r from-fuchsia-300 via-amber-200 to-sky-300 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl"
        >
          xzmply
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 max-w-2xl text-base text-white/85 sm:text-lg"
        >
          A surreal portfolio blending 3D assembly-line vibes with tactile UI. I build interfaces that feel alive.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition-all hover:scale-[1.03] hover:shadow-sky-500/30"
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

        {/* Floating chips as playful illustrations */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-4 top-20 hidden md:block"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        >
          <div className="rounded-2xl border border-white/10 bg-white/10 px-3 py-2 text-xs">UI Chips</div>
        </motion.div>
        <motion.div
          aria-hidden
          className="pointer-events-none absolute bottom-28 right-8 hidden md:block"
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        >
          <div className="rounded-full bg-gradient-to-r from-sky-500/40 to-fuchsia-500/40 p-3 shadow-lg shadow-fuchsia-500/20 backdrop-blur">●</div>
        </motion.div>
      </div>
    </section>
  );
}
