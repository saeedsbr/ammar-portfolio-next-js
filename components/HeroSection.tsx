'use client';

import { useState, useEffect } from 'react';
import { personal, stats } from '@/app/data/portfolio';
import MagneticButton from './MagneticButton';

/* ── Syntax-highlighted terminal lines ─────────────── */
type Seg = { t: string; c: string };
type Line = Seg[];

const G = '#00FF85', W = '#FFFFFF', P = '#FF0055', M = '#8B9BB4', B = '#00C6FF';

const TERMINAL_LINES: Line[] = [
  [
    { t: '❯ ', c: M },
    { t: 'const ', c: P },
    { t: 'csStudent', c: B },
    { t: ' = ', c: M },
    { t: 'new ', c: P },
    { t: 'Portfolio', c: G },
    { t: '(', c: M },
    { t: `"${personal.name}"`, c: G },
    { t: ');', c: M },
  ],
  [
    { t: '❯ ', c: M },
    { t: 'csStudent', c: B },
    { t: '.skills', c: W },
    { t: ' = ', c: M },
    { t: '["React"', c: G },
    { t: ', ', c: M },
    { t: '"Rust"', c: G },
    { t: ', ', c: M },
    { t: '"PyTorch"]', c: G },
    { t: ';', c: M },
  ],
  [
    { t: '❯ ', c: M },
    { t: 'csStudent', c: B },
    { t: '.status', c: W },
    { t: ' = ', c: M },
    { t: '"Building the future"', c: G },
    { t: ';', c: M },
  ],
  [
    { t: '❯ ', c: M },
    { t: 'console', c: B },
    { t: '.log(', c: M },
    { t: 'await ', c: P },
    { t: 'csStudent', c: B },
    { t: '.getResume()', c: W },
    { t: ');', c: M },
  ],
];

const OUTPUT_LINE: Seg[] = [
  { t: '  ✓ ', c: G },
  { t: `{ name: "${personal.name}", available: `, c: M },
  { t: 'true', c: P },
  { t: `, location: "${personal.location}" }`, c: M },
];

function totalLen(line: Line) { return line.reduce((s, seg) => s + seg.t.length, 0); }

function renderUpTo(line: Line, chars: number): Line {
  const out: Line = [];
  let rem = chars;
  for (const seg of line) {
    if (rem <= 0) break;
    if (rem >= seg.t.length) { out.push(seg); rem -= seg.t.length; }
    else { out.push({ t: seg.t.slice(0, rem), c: seg.c }); rem = 0; }
  }
  return out;
}

/* ── Stat counter animation ─────────────────────── */
function CountUp({ target, suffix = '' }: { target: number | string; suffix?: string }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (typeof target !== 'number') return;
    const steps = 60;
    const inc = target / steps;
    let current = 0;
    const id = setInterval(() => {
      current += inc;
      if (current >= target) { setVal(target); clearInterval(id); }
      else setVal(Math.floor(current));
    }, 25);
    return () => clearInterval(id);
  }, [target]);
  if (typeof target !== 'number') return <>{target}{suffix}</>;
  return <>{val.toLocaleString()}{suffix}</>;
}

export default function HeroSection() {
  /* ── Typing state ── */
  const [doneLines, setDoneLines]   = useState<Line[]>([]);
  const [curLine,   setCurLine]     = useState(0);
  const [curChar,   setCurChar]     = useState(0);
  const [showOut,   setShowOut]     = useState(false);
  const [allDone,   setAllDone]     = useState(false);

  useEffect(() => {
    if (curLine >= TERMINAL_LINES.length) {
      const t = setTimeout(() => { setShowOut(true); setAllDone(true); }, 300);
      return () => clearTimeout(t);
    }
    const line  = TERMINAL_LINES[curLine];
    const total = totalLen(line);

    if (curChar < total) {
      const id = setTimeout(() => setCurChar(c => c + 1), 28);
      return () => clearTimeout(id);
    }
    // line complete — wait then move to next
    const t = setTimeout(() => {
      setDoneLines(prev => [...prev, line]);
      setCurLine(l => l + 1);
      setCurChar(0);
    }, 240);
    return () => clearTimeout(t);
  }, [curLine, curChar]);

  const currentPartial = curLine < TERMINAL_LINES.length
    ? renderUpTo(TERMINAL_LINES[curLine], curChar)
    : null;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center scanline"
      style={{ paddingTop: 90 }}
    >
      {/* ── Glowing orbs ── */}
      <div className="orb orb-green w-[600px] h-[600px] -top-32 -left-32 pointer-events-none" style={{ zIndex: 1 }} />
      <div className="orb orb-pink  w-[400px] h-[400px]  top-1/2 right-0 pointer-events-none" style={{ zIndex: 1, animationDelay: '3s' }} />
      <div className="orb orb-blue  w-[300px] h-[300px]  bottom-0 left-1/3 pointer-events-none" style={{ zIndex: 1, animationDelay: '8s' }} />

      {/* ── Dot grid ── */}
      <div className="dot-grid absolute inset-0 pointer-events-none" style={{ zIndex: 1, opacity: 0.6 }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* ── Left: name + bio + CTAs ── */}
          <div>
            {/* Status badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs mb-8"
              style={{
                border: '1px solid rgba(0,255,133,0.25)',
                background: 'rgba(0,255,133,0.06)',
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.08em',
              }}
            >
              <span
                className="w-2 h-2 rounded-full ring-pulse"
                style={{ background: '#00FF85', boxShadow: '0 0 6px #00FF85' }}
              />
              <span style={{ color: '#00FF85' }}>{personal.status}</span>
            </div>

            {/* Name */}
            <div style={{ fontFamily: 'var(--font-heading)' }}>
              <p
                className="text-sm mb-2"
                style={{ color: '#8B9BB4', fontFamily: 'var(--font-mono)', letterSpacing: '0.15em' }}
              >
                Hello, World! I'm
              </p>
              <h1
                className="glitch font-black leading-none mb-4"
                data-text={personal.name}
                style={{
                  fontSize: 'clamp(3rem, 8vw, 5.5rem)',
                  letterSpacing: '-0.03em',
                }}
              >
                <span className="text-gradient">{personal.name}</span>
              </h1>
              <p
                className="mb-3 font-semibold"
                style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', color: '#8B9BB4', letterSpacing: '-0.01em' }}
              >
                {personal.title} /{' '}
                <span style={{ color: '#FFFFFF' }}>{personal.subtitle}</span>
              </p>
            </div>

            <p
              className="mb-8 leading-relaxed max-w-md"
              style={{ color: '#8B9BB4', fontFamily: 'var(--font-body)' }}
            >
              {personal.bio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-10">
              <MagneticButton
                href="#projects"
                className="px-7 py-3.5 rounded-lg font-semibold text-sm"
                style={{
                  background: '#00FF85',
                  color: '#050B14',
                  fontFamily: 'var(--font-heading)',
                  letterSpacing: '-0.01em',
                  boxShadow: '0 0 30px rgba(0,255,133,0.3)',
                }}
              >
                View Projects ↗
              </MagneticButton>
              <MagneticButton
                href="#contact"
                className="px-7 py-3.5 rounded-lg font-semibold text-sm"
                style={{
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: '#FFFFFF',
                  background: 'rgba(255,255,255,0.04)',
                  fontFamily: 'var(--font-heading)',
                  letterSpacing: '-0.01em',
                }}
              >
                Get In Touch
              </MagneticButton>
            </div>

            {/* Social row */}
            <div className="flex items-center gap-6">
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
                  className="text-xs tracking-widest uppercase transition-colors duration-200"
                  style={{ color: '#475569', fontFamily: 'var(--font-mono)' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#00FF85'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#475569'; }}
                >
                  {s.label}
                </a>
              ))}
              <span className="text-xs ml-auto" style={{ color: '#333d4d', fontFamily: 'var(--font-mono)' }}>
                ⌘K to explore
              </span>
            </div>
          </div>

          {/* ── Right: terminal ── */}
          <div className="float">
            <div className="term" style={{ boxShadow: '0 0 60px rgba(0,255,133,0.08), 0 40px 80px rgba(0,0,0,0.4)' }}>
              {/* Title bar */}
              <div className="term-bar">
                <span className="term-dot" style={{ background: '#FF5F56' }} />
                <span className="term-dot" style={{ background: '#FFBD2E' }} />
                <span className="term-dot" style={{ background: '#27C93F' }} />
                <span
                  className="ml-4 text-xs flex-1 text-center -ml-12"
                  style={{ color: '#475569', fontFamily: 'var(--font-mono)' }}
                >
                  ~/portfolio.sh
                </span>
                <span
                  className="text-xs px-2 py-0.5 rounded"
                  style={{
                    background: 'rgba(0,255,133,0.1)',
                    color: '#00FF85',
                    border: '1px solid rgba(0,255,133,0.2)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                  }}
                >
                  bash
                </span>
              </div>

              {/* Terminal body */}
              <div
                className="p-6 text-sm leading-7"
                style={{ minHeight: 280, fontFamily: 'var(--font-mono)' }}
              >
                {/* Completed lines */}
                {doneLines.map((line, i) => (
                  <div key={i} className="flex flex-wrap">
                    {line.map((seg, j) => (
                      <span key={j} style={{ color: seg.c }}>{seg.t}</span>
                    ))}
                  </div>
                ))}

                {/* Current line typing */}
                {currentPartial && (
                  <div className="flex flex-wrap items-center">
                    {currentPartial.map((seg, j) => (
                      <span key={j} style={{ color: seg.c }}>{seg.t}</span>
                    ))}
                    <span className="cursor w-2 h-5 ml-0.5 inline-block" style={{ background: '#00FF85' }} />
                  </div>
                )}

                {/* Output line */}
                {showOut && (
                  <div className="flex flex-wrap mt-1">
                    {OUTPUT_LINE.map((seg, j) => (
                      <span key={j} style={{ color: seg.c }}>{seg.t}</span>
                    ))}
                  </div>
                )}

                {/* Final blinking cursor */}
                {allDone && (
                  <div className="flex items-center gap-2 mt-2">
                    <span style={{ color: G }}>❯</span>
                    <span className="cursor w-2 h-5 inline-block" style={{ background: '#00FF85' }} />
                  </div>
                )}
              </div>
            </div>

            {/* ── Mini stat strip below terminal ── */}
            <div className="grid grid-cols-4 gap-3 mt-4">
              {[
                { label: 'LeetCode',  value: stats.leetcodeRating, suffix: '',  icon: '🏅' },
                { label: 'Commits',   value: stats.githubCommits,  suffix: '+', icon: '📦' },
                { label: 'Papers',    value: stats.papersRead,      suffix: '',  icon: '📄' },
                { label: 'Hackathons',value: stats.hackathonsWon,   suffix: '×', icon: '🏆' },
              ].map(s => (
                <div
                  key={s.label}
                  className="p-3 rounded-lg text-center"
                  style={{
                    background: 'rgba(10,17,31,0.8)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div className="text-lg mb-0.5">{s.icon}</div>
                  <div
                    className="text-base font-black"
                    style={{ fontFamily: 'var(--font-mono)', color: '#00FF85' }}
                  >
                    <CountUp target={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: '#475569', fontFamily: 'var(--font-mono)' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-3 mt-20">
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: '#2d3748', fontFamily: 'var(--font-mono)' }}
          >
            scroll
          </span>
          <div
            className="w-px h-16"
            style={{
              background: 'linear-gradient(to bottom, #00FF85, transparent)',
              animation: 'float 2s ease-in-out infinite',
            }}
          />
        </div>
      </div>
    </section>
  );
}
