'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { personal } from '@/app/data/portfolio';

const COMMANDS = [
  { label: 'About',            icon: '01', action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) },
  { label: 'Skills',           icon: '02', action: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }) },
  { label: 'Projects',         icon: '03', action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) },
  { label: 'Experience',       icon: '04', action: () => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }) },
  { label: 'Contact',          icon: '05', action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) },
  { label: 'Open GitHub',      icon: '↗',  action: () => window.open(personal.github, '_blank') },
  { label: 'Open LinkedIn',    icon: '↗',  action: () => window.open(personal.linkedin, '_blank') },
  { label: 'Download Resume',  icon: '↓',  action: () => window.open(personal.resumeUrl, '_blank') },
  { label: 'Send Email',       icon: '✉',  action: () => { window.location.href = `mailto:${personal.email}`; } },
];

export default function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query,  setQuery]  = useState('');
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = COMMANDS.filter(c => c.label.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => { if (open) { setQuery(''); setCursor(0); setTimeout(() => inputRef.current?.focus(), 10); } }, [open]);
  useEffect(() => { setCursor(0); }, [query]);

  const run = useCallback((cmd: typeof COMMANDS[0]) => { cmd.action(); onClose(); }, [onClose]);

  useEffect(() => {
    if (!open) return;
    const h = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') { e.preventDefault(); setCursor(c => Math.min(c + 1, filtered.length - 1)); }
      if (e.key === 'ArrowUp')   { e.preventDefault(); setCursor(c => Math.max(c - 1, 0)); }
      if (e.key === 'Enter' && filtered[cursor]) run(filtered[cursor]);
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [open, cursor, filtered, run]);

  if (!open) return null;

  return (
    <div className="cmd-overlay" onClick={onClose}>
      <div className="cmd-box" onClick={e => e.stopPropagation()}>
        <div className="cmd-input-row">
          <span style={{ color: 'var(--gold)', fontSize: '1rem', flexShrink: 0 }}>⌘</span>
          <input
            ref={inputRef}
            className="cmd-input"
            placeholder="Type a command or search..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <kbd style={{ color: 'var(--text-3)', fontSize: '.72rem', flexShrink: 0 }}>ESC</kbd>
        </div>

        <div className="cmd-items">
          {filtered.length === 0 && (
            <p style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-3)', fontSize: '.88rem' }}>
              No results for "{query}"
            </p>
          )}
          {filtered.map((cmd, i) => (
            <div
              key={cmd.label}
              className={`cmd-item ${i === cursor ? 'is-active' : ''}`}
              onClick={() => run(cmd)}
              onMouseEnter={() => setCursor(i)}
            >
              <span className="cmd-icon">{cmd.icon}</span>
              <span className="cmd-label">{cmd.label}</span>
              {i === cursor && (
                <kbd style={{ marginInlineStart: 'auto', color: 'var(--gold)', fontSize: '.7rem' }}>Enter ↵</kbd>
              )}
            </div>
          ))}
        </div>

        <div className="cmd-footer">
          <span><kbd>↑↓</kbd> navigate</span>
          <span><kbd>↵</kbd> select</span>
          <span><kbd>Esc</kbd> close</span>
        </div>
      </div>
    </div>
  );
}
