import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="container mx-auto px-6 pt-20 pb-10 md:pt-28 md:pb-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs md:text-sm tracking-wide text-white/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
            Introducing Pewbeam AI
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Turn every sermon into searchable, shareable text
          </h1>
          <p className="mt-4 text-base md:text-lg text-white/70">
            A speech‑to‑text assistant designed for churches. Capture sermons, choir moments, and announcements with stunning accuracy—ready to share, study, and archive.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-xl bg-violet-500 px-5 py-3 text-white shadow-lg shadow-violet-500/25 transition hover:brightness-110"
            >
              Get started free
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white/90 transition hover:bg-white/10"
            >
              How it works
            </a>
          </div>
        </div>
      </div>

      <div className="relative h-[56vh] md:h-[70vh]">
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.25),transparent_60%),radial-gradient(ellipse_at_center,rgba(59,130,246,0.2),transparent_40%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>
    </section>
  );
}
