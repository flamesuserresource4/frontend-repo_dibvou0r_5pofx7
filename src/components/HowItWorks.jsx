import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Record or upload',
    desc: 'Use your phone, a USB mic, or upload from your soundboard. We handle common audio and video formats.',
  },
  {
    number: '02',
    title: 'Pewbeam transcribes',
    desc: 'Our AI cleans noise, detects speakers, and identifies scripture references for precise, readable text.',
  },
  {
    number: '03',
    title: 'Share and search',
    desc: 'Publish notes for your church app or website. Search past sermons by topic, verse, or speaker in seconds.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-slate-950 text-white">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">How it works</h2>
          <p className="mt-3 text-white/70">From the pulpit to searchable text—fast and faithful.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/20 text-violet-300 font-semibold">
                  {step.number}
                </span>
                <h3 className="text-lg font-medium">{step.title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">{step.desc}</p>
              <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-blue-500/10 blur-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
