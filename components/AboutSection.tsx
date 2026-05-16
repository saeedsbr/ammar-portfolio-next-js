'use client';

import { useEffect, useRef, useState } from 'react';
import { personal, stats, achievements } from '@/app/data/portfolio';

function StatCard({
  icon, label, value, suffix = '', accent = '#00FF85', delay = 0,
}: {
  icon: string; label: string; value: number | string; suffix?: string; accent?: string; delay?: number;
}) {
  const [count, setCount] = useState(0);
  const [vis,   setVis]   = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!vis || typeof value !== 'number') return;
    const t = setTimeout(() => {
      const steps = 50;
      const inc = value / steps;
      let curr = 0;
      const id = setInterval(() => {
        curr += inc;
        if (curr >= value) { setCount(value); clearInterval(id); }
        else setCount(Math.floor(curr));
      }, 28);
      return () => clearInterval(id);
    }, delay);
    return () => clearTimeout(t);
  }, [vis, value, delay]);

  return (
    <div
      ref={ref}
      className="relative p-6 rounded-xl overflow-hidden"
      style={{
        background: 'rgba(10,17,31,0.9)',
        border: `1px solid ${accent}22`,
        boxShadow: vis ? `0 0 30px ${accent}08` : 'none',
        transition: 'box-shadow 0.6s ease',
      }}
    >
      {/* Corner accent */}
      <div
        className="absolute top-0 right-0 w-16 h-16"
        style={{
          background: `radial-gradient(circle at 100% 0%, ${accent}18 0%, transparent 70%)`,
        }}
      />
      <div className="text-2xl mb-3">{icon}</div>
      <div
        className="text-4xl font-black mb-1"
        style={{ fontFamily: 'var(--font-mono)', color: accent }}
      >
        {typeof value === 'number' ? count.toLocaleString() : value}
        {suffix}
      </div>
      <div
        className="text-xs uppercase tracking-widest"
        style={{ color: '#475569', fontFamily: 'var(--font-mono)' }}
      >
        {label}
      </div>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="py-32 relative">
      {/* Subtle gradient top */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,255,133,0.2), transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section heading */}
        <div className="mb-16">
          <p className="section-label mb-3">01 / About</p>
          <h2 className="section-title" style={{ fontFamily: 'var(--font-heading)' }}>
            Who I Am
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: bio + edu + achievements */}
          <div>
            <p
              className="text-lg leading-relaxed mb-6"
              style={{ color: '#CBD5E1', fontFamily: 'var(--font-body)' }}
            >
              {personal.bio}
            </p>
            <p className="leading-relaxed mb-10" style={{ color: '#8B9BB4', fontFamily: 'var(--font-body)' }}>
              When I'm not coding, I'm usually reading distributed systems papers, grinding
              LeetCode hard problems, or contributing to open-source projects. I believe in
              writing code that is not just functional, but elegant and maintainable.
            </p>

            {/* Education card */}
            <div
              className="p-5 rounded-xl mb-6"
              style={{ background: 'rgba(10,17,31,0.9)', border: '1px solid rgba(0,255,133,0.12)' }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span style={{ color: '#00FF85', fontFamily: 'var(--font-mono)', fontSize: '0.7rem' }}>🎓 EDUCATION</span>
              </div>
              <p
                className="font-bold text-base mb-0.5"
                style={{ fontFamily: 'var(--font-heading)', color: '#FFFFFF' }}
              >
                {personal.degree}
              </p>
              <p className="text-sm mb-2" style={{ color: '#00FF85' }}>{personal.university}</p>
              <div className="flex gap-4 text-xs" style={{ color: '#475569', fontFamily: 'var(--font-mono)' }}>
                <span>{personal.graduation}</span>
                <span>|</span>
                <span style={{ color: '#00FF85' }}>GPA {personal.gpa}/{personal.gpaMax}</span>
              </div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-3">
              {achievements.map((a, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl"
                  style={{
                    background: 'rgba(10,17,31,0.7)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    transition: 'border-color 0.2s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,255,133,0.2)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)'; }}
                >
                  <span className="text-xl">{a.icon}</span>
                  <div>
                    <p
                      className="text-sm font-semibold"
                      style={{ fontFamily: 'var(--font-heading)', color: '#FFFFFF' }}
                    >
                      {a.title}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: '#475569' }}>{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: 2×2 stat grid */}
          <div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <StatCard icon="🎯" label="LeetCode Rating"    value={stats.leetcodeRating} accent="#00FF85" delay={0} />
              <StatCard icon="📦" label="GitHub Commits/yr"  value={stats.githubCommits}  suffix="+"  accent="#FF0055" delay={100} />
              <StatCard icon="📄" label="Papers Read"         value={stats.papersRead}     accent="#00C6FF" delay={200} />
              <StatCard icon="☕" label="Coffee Cups"         value="∞"                    accent="#FFB800"  delay={0} />
            </div>

            {/* Open source row */}
            <div className="grid grid-cols-2 gap-4">
              <div
                className="p-5 rounded-xl"
                style={{ background: 'rgba(10,17,31,0.9)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <p className="text-2xl font-black mb-1" style={{ fontFamily: 'var(--font-mono)', color: '#00FF85' }}>
                  {stats.opensourcePrs}
                </p>
                <p className="text-xs uppercase tracking-widest" style={{ color: '#475569', fontFamily: 'var(--font-mono)' }}>
                  OSS PRs Merged
                </p>
              </div>
              <div
                className="p-5 rounded-xl"
                style={{ background: 'rgba(10,17,31,0.9)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <p className="text-2xl font-black mb-1" style={{ fontFamily: 'var(--font-mono)', color: '#FF0055' }}>
                  {stats.hackathonsWon}
                </p>
                <p className="text-xs uppercase tracking-widest" style={{ color: '#475569', fontFamily: 'var(--font-mono)' }}>
                  Hackathons Won
                </p>
              </div>
            </div>

            {/* Currently box */}
            <div
              className="mt-4 p-5 rounded-xl"
              style={{
                background: 'rgba(0,255,133,0.03)',
                border: '1px solid rgba(0,255,133,0.15)',
              }}
            >
              <p
                className="text-xs uppercase tracking-widest mb-3"
                style={{ color: '#00FF85', fontFamily: 'var(--font-mono)' }}
              >
                // currently hacking on
              </p>
              {[
                '🔬 Fine-tuning LLMs for code generation',
                '🏗️  Distributed messaging system (Rust)',
                '📚 "Designing Data-Intensive Applications"',
              ].map((item, i) => (
                <p key={i} className="text-sm mb-2" style={{ color: '#8B9BB4', fontFamily: 'var(--font-body)' }}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
