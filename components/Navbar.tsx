'use client';

import { useState, useEffect } from 'react';
import { personal } from '@/app/data/portfolio';

const navItems = [
  { label: 'about',      href: '#about' },
  { label: 'skills',     href: '#skills' },
  { label: 'projects',   href: '#projects' },
  { label: 'experience', href: '#experience' },
  { label: 'contact',    href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active,   setActive]   = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navItems.map(n => n.href.slice(1));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(id); break; }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(5,10,14,0.95)'
          : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(0,217,255,0.15)' : 'none',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-bold text-lg tracking-widest" style={{ color: '#00d9ff' }}>
          <span style={{ color: '#00ff88' }}>&lt;</span>
          {personal.name.split(' ')[0]}
          <span style={{ color: '#00ff88' }}>/&gt;</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm tracking-widest uppercase transition-colors duration-200"
              style={{
                color: active === item.href.slice(1) ? '#00d9ff' : '#94a3b8',
                textShadow: active === item.href.slice(1) ? '0 0 8px #00d9ff' : 'none',
              }}
            >
              {active === item.href.slice(1) && (
                <span style={{ color: '#00ff88', marginRight: 4 }}>{'>'}</span>
              )}
              {item.label}
            </a>
          ))}
          <a
            href={personal.resume}
            target="_blank"
            rel="noreferrer"
            className="text-sm tracking-widest px-4 py-2 transition-all duration-200"
            style={{
              border: '1px solid #00d9ff',
              color: '#00d9ff',
              borderRadius: 4,
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(0,217,255,0.1)';
              (e.currentTarget as HTMLElement).style.boxShadow = '0 0 12px rgba(0,217,255,0.4)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = 'transparent';
              (e.currentTarget as HTMLElement).style.boxShadow = 'none';
            }}
          >
            resume
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {[0,1,2].map(i => (
            <span
              key={i}
              className="block h-0.5 w-6 transition-all duration-300"
              style={{ background: '#00d9ff' }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ background: 'rgba(5,10,14,0.98)', borderTop: '1px solid rgba(0,217,255,0.15)' }}
        >
          {navItems.map(item => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-widest uppercase py-2"
              style={{ color: '#94a3b8' }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
