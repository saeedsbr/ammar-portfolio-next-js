'use client';

import { useState, useEffect } from 'react';
import { personal, stats } from '@/app/data/portfolio';

/* ── Terminal typing animation ──────────────────── */
type Seg = { t: string; c: string };
type TLine = Seg[];

const DIM = '#9a9a9a', WHT = '#f5f5f5', GLD = '#c9a961', BLU = '#5b8db8';

const CODE_LINES: TLine[] = [
  [
    { t: '> ', c: DIM },
    { t: 'const ', c: BLU },
    { t: 'dev', c: WHT },
    { t: ' = ', c: DIM },
    { t: 'new ', c: BLU },
    { t: 'Portfolio', c: GLD },
    { t: '(', c: DIM },
    { t: `"${personal.name}"`, c: GLD },
    { t: ');', c: DIM },
  ],
  [
    { t: '> ', c: DIM },
    { t: 'dev', c: WHT },
    { t: '.skills', c: BLU },
    { t: ' = ', c: DIM },
    { t: '["React"', c: GLD },
    { t: ', "Rust"', c: GLD },
    { t: ', "PyTorch"]', c: GLD },
    { t: ';', c: DIM },
  ],
  [
    { t: '> ', c: DIM },
    { t: 'dev', c: WHT },
    { t: '.status', c: BLU },
    { t: ' = ', c: DIM },
    { t: '"Building the future"', c: GLD },
    { t: ';', c: DIM },
  ],
  [
    { t: '> ', c: DIM },
    { t: 'console', c: WHT },
    { t: '.log(', c: DIM },
    { t: 'await ', c: BLU },
    { t: 'dev', c: WHT },
    { t: '.getResume()', c: WHT },
    { t: ');', c: DIM },
  ],
];

const OUTPUT: Seg[] = [
  { t: '  ✓ ', c: GLD },
  { t: `{ name: "${personal.name}", available: `, c: DIM },
  { t: 'true', c: BLU },
  { t: `, location: "${personal.location}" }`, c: DIM },
];

function totalLen(line: TLine) { return line.reduce((s, seg) => s + seg.t.length, 0); }
function sliceLine(line: TLine, n: number): TLine {
  const out: TLine = [];
  let rem = n;
  for (const seg of line) {
    if (rem <= 0) break;
    if (rem >= seg.t.length) { out.push(seg); rem -= seg.t.length; }
    else { out.push({ t: seg.t.slice(0, rem), c: seg.c }); rem = 0; }
  }
  return out;
}

function Terminal() {
  const [done,    setDone]    = useState<TLine[]>([]);
  const [curLine, setCurLine] = useState(0);
  const [curChar, setCurChar] = useState(0);
  const [showOut, setShowOut] = useState(false);
  const [idle,    setIdle]    = useState(false);

  useEffect(() => {
    if (curLine >= CODE_LINES.length) {
      setTimeout(() => { setShowOut(true); setTimeout(() => setIdle(true), 300); }, 250);
      return;
    }
    const line  = CODE_LINES[curLine];
    const total = totalLen(line);
    if (curChar < total) {
      const t = setTimeout(() => setCurChar(c => c + 1), 26);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => { setDone(p => [...p, line]); setCurLine(l => l + 1); setCurChar(0); }, 220);
    return () => clearTimeout(t);
  }, [curLine, curChar]);

  const partial = curLine < CODE_LINES.length ? sliceLine(CODE_LINES[curLine], curChar) : null;

  return (
    <div
      style={{
        background: '#0d0d0d',
        border: '1px solid rgba(245,245,245,.1)',
        borderRadius: 10,
        overflow: 'hidden',
        boxShadow: '0 24px 64px rgba(0,0,0,.55)',
      }}
    >
      {/* Mac-style title bar */}
      <div
        style={{
          background: '#181818',
          borderBottom: '1px solid rgba(245,245,245,.07)',
          padding: '10px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: 7,
        }}
      >
        {['#FF5F56', '#FFBD2E', '#27C93F'].map(c => (
          <span key={c} style={{ width: 12, height: 12, borderRadius: '50%', background: c, display: 'inline-block' }} />
        ))}
        <span style={{ marginLeft: 'auto', marginRight: 'auto', transform: 'translateX(-28px)', fontSize: '.72rem', color: '#555' }}>
          portfolio — bash
        </span>
      </div>

      {/* Terminal content */}
      <div style={{ padding: '1.4rem 1.6rem', minHeight: 240, fontFamily: 'monospace', fontSize: '.88rem', lineHeight: 1.9 }}>
        {done.map((line, i) => (
          <div key={i} style={{ display: 'flex', flexWrap: 'wrap' }}>
            {line.map((seg, j) => <span key={j} style={{ color: seg.c }}>{seg.t}</span>)}
          </div>
        ))}
        {partial && (
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
            {partial.map((seg, j) => <span key={j} style={{ color: seg.c }}>{seg.t}</span>)}
            <span className="blink" style={{ display: 'inline-block', width: 8, height: 15, background: GLD, marginLeft: 1 }} />
          </div>
        )}
        {showOut && (
          <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: 2 }}>
            {OUTPUT.map((seg, j) => <span key={j} style={{ color: seg.c }}>{seg.t}</span>)}
          </div>
        )}
        {idle && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 6 }}>
            <span style={{ color: DIM }}>{'>'}</span>
            <span className="blink" style={{ display: 'inline-block', width: 8, height: 15, background: GLD }} />
          </div>
        )}
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      {/* Subtle background texture */}
      <div className="hero-bg">
        <div className="hero-noise" />
        {/* Faint radial gradient at top-left */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 60% 55% at 10% 15%, rgba(201,169,97,.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
      </div>

      <div className="container hero-content">
        <div style={{ display: 'grid', gap: '3.5rem', alignItems: 'center' }} className="hero-grid">

          {/* Left: headline */}
          <div>
            {/* Status */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '.55rem', marginBottom: '1.4rem' }}>
              <span
                className="status-dot pulse-dot"
                style={{ background: '#c9a961' }}
              />
              <span style={{ color: 'var(--text-3)', fontSize: '.82rem', fontWeight: 600 }}>
                {personal.status}
              </span>
            </div>

            <h1 id="hero-title">{personal.name}</h1>

            <p className="hero-sub">{personal.title}. {personal.subtitle.split('·')[0].trim()}.</p>

            <p className="hero-desc">{personal.bio}</p>

            <div className="hero-actions">
              <a className="btn-primary" href={personal.resumeUrl} download>
                Download CV
              </a>
              <a className="btn-ghost" href="#projects">
                View Projects ↗
              </a>
            </div>

            {/* Social links */}
            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem', alignItems: 'center' }}>
              {[
                { label: 'GitHub',   href: personal.github },
                { label: 'LinkedIn', href: personal.linkedin },
                { label: 'LeetCode', href: personal.leetcode },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: 'var(--text-3)', fontSize: '.82rem', fontWeight: 600, textDecoration: 'none' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--gold)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'var(--text-3)'; }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: terminal */}
          <div>
            <Terminal />

            {/* Stat strip */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 1, background: 'var(--line-strong)', border: '1px solid var(--line-strong)', borderRadius: 8, overflow: 'hidden', marginTop: '.75rem' }}>
              {[
                { label: 'LeetCode',  value: stats.leetcodeRating.toString() },
                { label: 'Commits/yr', value: `${stats.githubCommits}+` },
                { label: 'Papers',    value: stats.papersRead.toString() },
                { label: 'Hackathons', value: `${stats.hackathonsWon}×` },
              ].map(s => (
                <div key={s.label} style={{ background: 'var(--surface)', padding: '1rem .85rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--gold)', letterSpacing: '-.03em', lineHeight: 1 }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: '.65rem', fontWeight: 600, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '.05em', marginTop: '.35rem' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem' }}>
          <span style={{ color: 'var(--text-3)', fontSize: '.72rem', fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase' }}>
            scroll
          </span>
          <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, var(--gold-muted), transparent)' }} />
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .hero-grid { grid-template-columns: minmax(0,1fr) minmax(0,1fr); }
        }
      `}</style>
    </section>
  );
}
