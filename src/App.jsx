import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased">
      <header className="sticky top-0 z-20 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-3 w-3 rounded-full bg-violet-400" />
            <span className="text-sm font-semibold tracking-wide">Pewbeam AI</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#how-it-works" className="hover:text-white">How it works</a>
            <a href="#get-started" className="hover:text-white">Pricing</a>
            <a href="#get-started" className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 hover:bg-white/10">Sign in</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <CTA />
      </main>

      <footer className="border-t border-white/10 bg-slate-950 py-10">
        <div className="container mx-auto px-6 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-white/60">© {new Date().getFullYear()} Pewbeam AI. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-white/60">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
