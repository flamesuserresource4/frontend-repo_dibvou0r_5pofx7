import React from 'react';

export default function CTA() {
  return (
    <section id="get-started" className="relative bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/20 via-fuchsia-500/10 to-amber-400/10 p-8 md:p-12">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_20%,rgba(139,92,246,0.25),transparent),radial-gradient(600px_200px_at_80%_80%,rgba(251,191,36,0.18),transparent)]" />
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">Bring clarity to every message</h3>
            <p className="mt-3 max-w-2xl text-white/80">
              Start free today. No credit card required. Upgrade when you’re ready to transcribe longer services and add more team members.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-slate-900 font-medium shadow-sm transition hover:brightness-95"
              >
                Create your account
              </a>
              <span className="text-sm text-white/70">5,000 minutes included on the free plan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
