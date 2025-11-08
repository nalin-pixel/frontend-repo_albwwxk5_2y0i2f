import Hero from './components/Hero';
import Showcase from './components/Showcase';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#070712]">
      {/* animated ambient backdrop */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(88,28,135,0.25),transparent),radial-gradient(800px_400px_at_10%_20%,rgba(14,165,233,0.18),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(7,7,18,0.2),rgba(7,7,18,0.2))]" />
      </div>

      <Hero />
      <Showcase />
      <About />
      <Contact />
    </div>
  );
}

export default App;
