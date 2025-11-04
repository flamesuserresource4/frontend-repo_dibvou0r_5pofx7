import React from 'react';
import { Mic, Shield, Zap, Users } from 'lucide-react';

const features = [
  {
    icon: Mic,
    title: 'Crystal‑clear transcription',
    desc: 'Optimized for sermons, worship, and announcements with punctuation, speaker hints, and scripture detection.',
  },
  {
    icon: Shield,
    title: 'Secure & private',
    desc: 'Your recordings are encrypted in transit and at rest. You control what gets shared and when.',
  },
  {
    icon: Zap,
    title: 'Real‑time + batch',
    desc: 'Stream live during service or upload later. Get accurate transcripts and highlights in minutes.',
  },
  {
    icon: Users,
    title: 'Built for ministry teams',
    desc: 'Invite pastors, media, and volunteers. Organize by series, date, and speaker with powerful search.',
  },
];

export default function Features() {
  return (
    <section className="relative bg-slate-950 text-white">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Why churches choose Pewbeam</h2>
          <p className="mt-3 text-white/70">
            Everything you need to capture the Word and share it with your community.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 backdrop-blur transition hover:from-white/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/20 text-violet-300">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-medium">{title}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{desc}</p>
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/10 blur-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
