'use client';

import { useEffect, useRef, useState } from 'react';
import { personal, stats, achievements } from '@/app/data/portfolio';

function CountUp({ to, suffix = '' }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const [go, setGo] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setGo(true); }, { threshold: .3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!go) return;
    let frame = 0;
    const total = 55;
    const id = setInterval(() => {
      frame++;
      setN(Math.round((frame / total) * to));
      if (frame >= total) clearInterval(id);
    }, 22);
    return () => clearInterval(id);
  }, [go, to]);

  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>;
}

export default function AboutSection() {
  return (
    <section id="about" className="section about-section" aria-labelledby="about-title"
      style={{ paddingBlock: '0 5.5rem', borderBlockStart: 0 }}>
      <div className="container section-stack">

        <div className="section-label">
          <h2>About</h2>
        </div>

        {/* Main about card */}
        <div className="about-card about-layout">
          <div className="about-copy">
            <p>{personal.bio}</p>
            <p>
              When I'm not writing code, I'm reading distributed systems papers, grinding algorithmic
              problems, or mentoring at hackathons. I believe great software is precise, observable,
              and built to last — not just to ship.
            </p>

            {/* Education mini */}
            <div style={{ marginTop: '2rem', paddingTop: '1.6rem', borderTop: '1px solid var(--line-strong)' }}>
              <p style={{ color: 'var(--text-3)', fontSize: '.72rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: '.9rem' }}>
                Education
              </p>
              <p style={{ fontWeight: 600, color: 'var(--text-1)', fontSize: '1rem' }}>{personal.degree}</p>
              <p style={{ color: 'var(--gold)', fontSize: '.9rem', marginTop: '.25rem' }}>{personal.university}</p>
              <p style={{ color: 'var(--text-3)', fontSize: '.84rem', marginTop: '.2rem' }}>
                {personal.graduation} &nbsp;·&nbsp; <span style={{ color: 'var(--gold)' }}>GPA {personal.gpa}/{personal.gpaMax}</span>
              </p>
            </div>
          </div>

          {/* Portrait placeholder */}
          <figure className="about-portrait" aria-label={personal.name}>
            <div style={{
              width: '100%', height: '100%',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'flex-end',
              paddingBottom: '1rem',
              background: 'linear-gradient(180deg, rgba(201,169,97,.04) 0%, var(--surface) 100%)',
            }}>
              <div style={{ fontSize: '5rem', marginBottom: '.5rem', opacity: .7 }}>👨‍💻</div>
              <p style={{ color: 'var(--gold)', fontSize: '.78rem', fontWeight: 600, letterSpacing: '.06em' }}>
                {personal.name}
              </p>
            </div>
          </figure>
        </div>

        {/* 2×2 stat grid */}
        <div className="stat-grid">
          {[
            { label: 'LeetCode Rating', value: stats.leetcodeRating, suffix: '' },
            { label: 'GitHub Commits / yr', value: stats.githubCommits, suffix: '+' },
            { label: 'OSS PRs Merged', value: stats.opensourcePrs, suffix: '' },
            { label: 'Hackathons Won', value: stats.hackathonsWon, suffix: '×' },
          ].map(s => (
            <div className="stat-cell" key={s.label}>
              <div className="stat-value">
                <CountUp to={s.value} suffix={s.suffix} />
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Achievements row */}
        <div style={{ display: 'grid', gap: '.75rem', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))' }}>
          {achievements.map((a, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '.85rem',
                padding: '1.1rem',
                border: '1px solid var(--line-strong)',
                borderRadius: 8,
                background: 'var(--surface)',
                transition: 'border-color .15s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold-border)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--line-strong)'; }}
            >
              <span style={{ fontSize: '1.3rem', flexShrink: 0, marginTop: '.05rem' }}>{a.icon}</span>
              <div>
                <p style={{ fontWeight: 600, color: 'var(--text-1)', fontSize: '.92rem' }}>{a.title}</p>
                <p style={{ color: 'var(--text-3)', fontSize: '.82rem', marginTop: '.2rem' }}>{a.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Currently */}
        <div style={{
          padding: '1.4rem',
          border: '1px solid var(--line-strong)',
          borderRadius: 8,
          background: 'rgba(201,169,97,.04)',
          borderColor: 'rgba(201,169,97,.2)',
        }}>
          <p style={{ color: 'var(--gold)', fontSize: '.72rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: '.85rem' }}>
            Currently
          </p>
          <div style={{ display: 'grid', gap: '.55rem' }}>
            {[
              '🔬 Fine-tuning code generation LLMs for accuracy on algorithmic tasks',
              '🏗️  Building a distributed key-value store in Rust from scratch',
              '📚 Reading: "Designing Data-Intensive Applications" — Martin Kleppmann',
            ].map((item, i) => (
              <p key={i} style={{ color: 'var(--text-2)', fontSize: '.9rem', lineHeight: 1.6 }}>{item}</p>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
