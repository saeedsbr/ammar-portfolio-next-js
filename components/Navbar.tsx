'use client';

import { useState, useEffect } from 'react';
import { personal, navItems } from '@/app/data/portfolio';
import CommandPalette from './CommandPalette';

export default function Navbar() {
  const [solid,    setSolid]    = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cmdOpen,  setCmdOpen]  = useState(false);

  useEffect(() => {
    const hero = document.querySelector('.hero');
    const update = () => {
      if (!hero) { setSolid(window.scrollY > 0); return; }
      setSolid(hero.getBoundingClientRect().bottom <= 0);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => { window.removeEventListener('scroll', update); window.removeEventListener('resize', update); };
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); setCmdOpen(p => !p); }
      if (e.key === 'Escape') { setMenuOpen(false); setCmdOpen(false); }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <>
      <CommandPalette open={cmdOpen} onClose={() => setCmdOpen(false)} />

      <header
        className="site-header"
        {...(solid ? { 'data-solid': '' } : {})}
        {...(menuOpen ? { 'data-menu-open': '' } : {})}
      >
        <nav className="container header-inner" aria-label="Primary">

          {/* Brand */}
          <a className="brand-link" href="#">
            {personal.name.split(' ').map(w => w[0]).join('')}
          </a>

          {/* Centered pill nav */}
          <div id="section-nav" className="section-nav" aria-label="Page sections">
            {navItems.map(item => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div style={{ position: 'absolute', insetBlockStart: '50%', insetInlineEnd: 0, transform: 'translateY(-50%)', display: 'flex', alignItems: 'center', gap: '.5rem' }}>
            <button
              className="cmd-badge"
              onClick={() => setCmdOpen(true)}
              aria-label="Open command palette"
            >
              <span>⌘K</span>
            </button>
            <a className="resume-btn" href={personal.resumeUrl} target="_blank" rel="noreferrer">
              Resume ↓
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(p => !p)}
            style={{ marginInlineStart: 'auto' }}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </header>
    </>
  );
}
