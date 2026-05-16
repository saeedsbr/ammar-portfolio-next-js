'use client';

import { useEffect, useRef, useState } from 'react';
import { personal } from '@/app/data/portfolio';

const roles = [
  'Full-Stack Developer',
  'ML Engineer',
  'Open Source Contributor',
  'Competitive Programmer',
  'Systems Architect',
];

const terminalLines = [
  { prompt: '~$', cmd: 'whoami', output: personal.name },
  { prompt: '~$', cmd: 'cat status.txt', output: personal.status },
  { prompt: '~$', cmd: 'cat university.txt', output: `${personal.university} — ${personal.degree}` },
  { prompt: '~$', cmd: './run_portfolio.sh', output: '✓ Portfolio loaded successfully. Welcome!' },
];

function TerminalLine({ line, delay }: { line: typeof terminalLines[0]; delay: number }) {
  const [show, setShow] = useState(false);
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShow(true), delay);
    const t2 = setTimeout(() => setShowOutput(true), delay + 600);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [delay]);

  if (!show) return null;

  return (
    <div className="mb-3">
      <div className="flex items-center gap-2">
        <span style={{ color: '#00ff88' }}>{line.prompt}</span>
        <span style={{ color: '#00d9ff' }}>{line.cmd}</span>
      </div>
      {showOutput && (
        <div className="mt-1 pl-4" style={{ color: '#e2e8f0' }}>
          {line.output}
        </div>
      )}
    </div>
  );
}

function TypeWriter({ texts }: { texts: string[] }) {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[idx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIdx((idx + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, idx, texts]);

  return (
    <span>
      <span className="gradient-text-cyan">{displayed}</span>
      <span className="cursor-blink" style={{ color: '#00d9ff' }}>|</span>
    </span>
  );
}

export default function HeroSection() {
  const [terminalDone, setTerminalDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setTerminalDone(true), terminalLines.length * 800 + 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center grid-bg scanline"
      style={{ paddingTop: 80 }}
    >
      {/* Background glow orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,217,255,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — main content */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full text-xs tracking-widest uppercase"
              style={{ border: '1px solid rgba(0,255,136,0.3)', color: '#00ff88', background: 'rgba(0,255,136,0.05)' }}
            >
              <span
                className="w-2 h-2 rounded-full pulse-glow"
                style={{ background: '#00ff88', boxShadow: '0 0 6px #00ff88' }}
              />
              {personal.status}
            </div>

            <p className="text-sm tracking-widest uppercase mb-2" style={{ color: '#94a3b8' }}>
              Hello, World! I'm
            </p>

            <h1 className="font-black tracking-tight mb-4" style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', lineHeight: 1.1 }}>
              <span
                className="glitch-text gradient-text-cyan"
                data-text={personal.name}
              >
                {personal.name}
              </span>
            </h1>

            <div className="text-xl mb-6 h-8" style={{ color: '#e2e8f0' }}>
              <TypeWriter texts={roles} />
            </div>

            <p className="text-sm leading-relaxed mb-8 max-w-md" style={{ color: '#94a3b8' }}>
              {personal.bio[0]}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 text-sm font-bold tracking-widest uppercase transition-all duration-200"
                style={{
                  background: 'linear-gradient(135deg, #00d9ff, #00ff88)',
                  color: '#050a0e',
                  borderRadius: 4,
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(0,217,255,0.5)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; (e.currentTarget as HTMLElement).style.transform = 'none'; }}
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 text-sm font-bold tracking-widest uppercase transition-all duration-200"
                style={{ border: '1px solid rgba(0,217,255,0.5)', color: '#00d9ff', borderRadius: 4 }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(0,217,255,0.08)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 12px rgba(0,217,255,0.3)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
              >
                Get In Touch
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-6 mt-8">
              {[
                { label: 'GitHub', href: personal.github, icon: 'GH' },
                { label: 'LinkedIn', href: personal.linkedin, icon: 'LI' },
                { label: 'Twitter', href: personal.twitter, icon: 'TW' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs tracking-widest uppercase transition-colors duration-200"
                  style={{ color: '#475569' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#00d9ff'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#475569'; }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right — terminal */}
          <div className="terminal-window float-anim" style={{ boxShadow: '0 0 40px rgba(0,217,255,0.08)' }}>
            <div className="terminal-header">
              <span className="terminal-dot" style={{ background: '#ff5f56' }} />
              <span className="terminal-dot" style={{ background: '#ffbd2e' }} />
              <span className="terminal-dot" style={{ background: '#27c93f' }} />
              <span className="ml-4 text-xs" style={{ color: '#555' }}>
                bash — portfolio.sh
              </span>
            </div>
            <div className="p-6 text-sm font-mono" style={{ minHeight: 280 }}>
              {terminalLines.map((line, i) => (
                <TerminalLine key={i} line={line} delay={i * 800} />
              ))}
              {terminalDone && (
                <div className="flex items-center gap-2 mt-2">
                  <span style={{ color: '#00ff88' }}>~$</span>
                  <span className="cursor-blink" style={{ color: '#00d9ff' }}>█</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest uppercase" style={{ color: '#475569' }}>scroll</span>
          <div
            className="w-px h-12"
            style={{
              background: 'linear-gradient(to bottom, #00d9ff, transparent)',
              animation: 'fadeInUp 1s ease infinite alternate',
            }}
          />
        </div>
      </div>
    </section>
  );
}
