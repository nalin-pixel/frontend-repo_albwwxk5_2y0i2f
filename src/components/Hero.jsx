import Spline from '@splinetool/react-spline';
import { Rocket, Star, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_55%,rgba(0,0,0,0.75)_100%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-sm backdrop-blur">
          <Star className="h-4 w-4 text-yellow-300" />
          Surreal Portfolio • Cosmic Aesthetics
        </span>
        <h1 className="bg-gradient-to-r from-fuchsia-300 via-sky-300 to-purple-300 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl">
          xzmply
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          Trippy galaxy vibes meet futuristic craftsmanship. I design and build immersive digital experiences with a surreal twist.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition-all hover:scale-[1.02] hover:shadow-sky-500/30"
          >
            <Rocket className="h-4 w-4" /> Explore Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20"
          >
            <Mail className="h-4 w-4" /> Contact
          </a>
        </div>
      </div>
    </section>
  );
}
