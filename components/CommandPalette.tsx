'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { personal } from '@/app/data/portfolio';

const commands = [
  { label: 'Go to About',      icon: '01', action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) },
  { label: 'Go to Skills',     icon: '02', action: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' }) },
  { label: 'Go to Projects',   icon: '03', action: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) },
  { label: 'Go to Experience', icon: '04', action: () => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }) },
  { label: 'Go to Contact',    icon: '05', action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) },
  { label: 'Open GitHub',      icon: '↗',  action: () => window.open(personal.github, '_blank') },
  { label: 'Open LinkedIn',    icon: '↗',  action: () => window.open(personal.linkedin, '_blank') },
  { label: 'Download Resume',  icon: '↓',  action: () => window.open(personal.resumeUrl, '_blank') },
  { label: 'Send Email',       icon: '✉',  action: () => { window.location.href = `mailto:${personal.email}`; } },
];

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function CommandPalette({ open, onClose }: Props) {
  const [query, setQuery]   = useState('');
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = commands.filter(c =>
    c.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => { if (open) { setQuery(''); setCursor(0); inputRef.current?.focus(); } }, [open]);
  useEffect(() => { setCursor(0); }, [query]);

  const execute = useCallback((cmd: typeof commands[0]) => {
    cmd.action();
    onClose();
  }, [onClose]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === 'Escape') { onClose(); return; }
      if (e.key === 'ArrowDown') { e.preventDefault(); setCursor(c => Math.min(c + 1, filtered.length - 1)); }
      if (e.key === 'ArrowUp')   { e.preventDefault(); setCursor(c => Math.max(c - 1, 0)); }
      if (e.key === 'Enter' && filtered[cursor]) { execute(filtered[cursor]); }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, cursor, filtered, execute, onClose]);

  if (!open) return null;

  return (
    <div className="cmd-overlay" onClick={onClose}>
      <div
        className="cmd-box"
        onClick={e => e.stopPropagation()}
        style={{ margin: '0 16px' }}
      >
        {/* Search bar */}
        <div className="flex items-center gap-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <span style={{ color: '#8B9BB4', paddingLeft: 20, fontSize: '1.1rem' }}>⌘</span>
          <input
            ref={inputRef}
            className="cmd-input"
            placeholder="Type a command..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            style={{ fontFamily: 'var(--font-mono)', paddingLeft: 4 }}
          />
          <kbd
            className="text-xs mr-4 px-2 py-1 rounded"
            style={{ color: '#8B9BB4', border: '1px solid rgba(139,155,180,0.2)', whiteSpace: 'nowrap' }}
          >
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div style={{ maxHeight: 340, overflowY: 'auto', padding: '8px 0' }}>
          {filtered.length === 0 && (
            <p className="text-center py-8 text-sm" style={{ color: '#8B9BB4' }}>
              No results for "{query}"
            </p>
          )}
          {filtered.map((cmd, i) => (
            <div
              key={cmd.label}
              className={`cmd-item ${i === cursor ? 'active' : ''}`}
              onClick={() => execute(cmd)}
              onMouseEnter={() => setCursor(i)}
            >
              <span
                className="w-8 h-8 rounded flex items-center justify-center text-xs flex-shrink-0"
                style={{
                  background: i === cursor ? 'rgba(0,255,133,0.12)' : 'rgba(255,255,255,0.04)',
                  color: i === cursor ? '#00FF85' : '#8B9BB4',
                  fontFamily: 'var(--font-mono)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                {cmd.icon}
              </span>
              <span style={{ color: i === cursor ? '#FFFFFF' : '#8B9BB4', fontSize: '0.9rem' }}>
                {cmd.label}
              </span>
              {i === cursor && (
                <kbd
                  className="ml-auto text-xs px-2 py-0.5 rounded"
                  style={{ color: '#00FF85', border: '1px solid rgba(0,255,133,0.2)', background: 'rgba(0,255,133,0.06)' }}
                >
                  Enter ↵
                </kbd>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          className="flex items-center gap-4 px-5 py-3 text-xs"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)', color: '#8B9BB4' }}
        >
          <span><kbd style={{ color: '#00FF85' }}>↑↓</kbd> navigate</span>
          <span><kbd style={{ color: '#00FF85' }}>↵</kbd> select</span>
          <span><kbd style={{ color: '#00FF85' }}>Esc</kbd> close</span>
          <span className="ml-auto" style={{ fontFamily: 'var(--font-mono)' }}>⌘K</span>
        </div>
      </div>
    </div>
  );
}
