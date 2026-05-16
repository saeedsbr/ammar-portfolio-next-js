'use client';

import { useState, useEffect } from 'react';
import { personal, navItems } from '@/app/data/portfolio';
import CommandPalette from './CommandPalette';

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [active,   setActive]     = useState('');
  const [menuOpen, setMenuOpen]   = useState(false);
  const [cmdOpen,  setCmdOpen]    = useState(false);

  /* ── Scroll tracking ── */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const ids = navItems.map(n => n.href.slice(1));
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(id); break; }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Cmd+K / Ctrl+K ── */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCmdOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <>
      <CommandPalette open={cmdOpen} onClose={() => setCmdOpen(false)} />

      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(5,11,20,0.92)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#"
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '1.1rem',
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
            }}
          >
            <span style={{ color: '#00FF85' }}>{'<'}</span>
            {personal.name.split(' ')[0]}
            <span style={{ color: '#00FF85' }}>{'>'}</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-sm transition-colors duration-200"
                style={{
                  fontFamily: 'var(--font-mono)',
                  color: active === item.href.slice(1) ? '#00FF85' : '#8B9BB4',
                  letterSpacing: '0.05em',
                }}
                onMouseEnter={e => { if (active !== item.href.slice(1)) (e.currentTarget as HTMLElement).style.color = '#FFFFFF'; }}
                onMouseLeave={e => { if (active !== item.href.slice(1)) (e.currentTarget as HTMLElement).style.color = '#8B9BB4'; }}
              >
                <span style={{ color: '#00FF85', fontSize: '0.65rem', marginRight: 4 }}>
                  {item.icon}.
                </span>
                {item.label.toLowerCase()}
                {active === item.href.slice(1) && (
                  <span
                    className="absolute bottom-0 left-4 right-4 h-px"
                    style={{ background: 'linear-gradient(90deg, #00FF85, transparent)' }}
                  />
                )}
              </a>
            ))}

            {/* Cmd+K button */}
            <button
              onClick={() => setCmdOpen(true)}
              className="ml-3 flex items-center gap-2 px-3 py-1.5 rounded-md text-xs transition-all duration-200"
              style={{
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#8B9BB4',
                background: 'rgba(255,255,255,0.03)',
                fontFamily: 'var(--font-mono)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,255,133,0.4)';
                (e.currentTarget as HTMLElement).style.color = '#00FF85';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
                (e.currentTarget as HTMLElement).style.color = '#8B9BB4';
              }}
            >
              <span>⌘K</span>
            </button>

            {/* Resume */}
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="ml-2 px-4 py-2 text-xs rounded-md transition-all duration-200"
              style={{
                border: '1px solid rgba(0,255,133,0.4)',
                color: '#00FF85',
                background: 'rgba(0,255,133,0.06)',
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.08em',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(0,255,133,0.12)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 16px rgba(0,255,133,0.2)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(0,255,133,0.06)';
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              resume.pdf
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {[0, 1, 2].map(i => (
              <span
                key={i}
                className="block h-px w-6 transition-all"
                style={{
                  background: menuOpen ? '#00FF85' : '#8B9BB4',
                  transform: menuOpen && i === 0 ? 'rotate(45deg) translate(4px, 4px)'
                    : menuOpen && i === 2 ? 'rotate(-45deg) translate(4px, -4px)'
                    : menuOpen && i === 1 ? 'scaleX(0)' : 'none',
                }}
              />
            ))}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="md:hidden px-6 pb-8 flex flex-col gap-1"
            style={{ background: 'rgba(5,11,20,0.98)', borderTop: '1px solid rgba(255,255,255,0.06)' }}
          >
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 py-3"
                style={{ color: '#8B9BB4', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}
              >
                <span style={{ color: '#00FF85' }}>{item.icon}.</span>
                {item.label.toLowerCase()}
              </a>
            ))}
            <button
              onClick={() => { setMenuOpen(false); setCmdOpen(true); }}
              className="flex items-center gap-3 py-3 mt-2"
              style={{ color: '#8B9BB4', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}
            >
              <span style={{ color: '#00FF85' }}>⌘</span>Command palette
            </button>
          </div>
        )}
      </nav>
    </>
  );
}
