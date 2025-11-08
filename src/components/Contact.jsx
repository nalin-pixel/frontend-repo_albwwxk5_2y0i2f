import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 mx-auto max-w-5xl px-6 py-20 text-white">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let’s create something surreal</h2>
          <p className="mt-2 text-white/70">Open for collaborations, commissions, and full-stack builds.</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:hello@xzmply.io"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition-all hover:scale-[1.02] hover:shadow-sky-500/30"
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
      </div>
      <p className="mt-6 text-center text-xs text-white/50">© {new Date().getFullYear()} xzmply — crafted in the cosmic void</p>
    </section>
  );
}
