import Hero from './components/Hero';
import Showcase from './components/Showcase';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#06140D] text-white">
      {/* ambient green backdrop */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(16,185,129,0.18),transparent),radial-gradient(800px_400px_at_10%_20%,rgba(34,197,94,0.14),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(6,20,13,0.35),rgba(6,20,13,0.35))]" />
        {/* soft animated noise glow */}
        <div className="absolute inset-0 [background:radial-gradient(60%_60%_at_50%_40%,rgba(34,197,94,0.08),transparent),radial-gradient(45%_60%_at_60%_70%,rgba(16,185,129,0.07),transparent)] animate-pulse" />
      </div>

      <Hero />
      <Showcase />
      <About />
      <Contact />
    </div>
  );
}

export default App;
