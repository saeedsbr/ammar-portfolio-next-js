'use client';

import { personal } from '@/app/data/portfolio';

export default function Footer() {
  return (
    <footer
      className="py-10 text-center relative"
      style={{ borderTop: '1px solid rgba(0,217,255,0.1)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <a href="#" className="font-bold text-lg tracking-widest block mb-3" style={{ color: '#00d9ff' }}>
          <span style={{ color: '#00ff88' }}>&lt;</span>
          {personal.name.split(' ')[0]}
          <span style={{ color: '#00ff88' }}>/&gt;</span>
        </a>
        <p className="text-xs tracking-widest mb-4" style={{ color: '#475569' }}>
          Designed & Built by{' '}
          <span style={{ color: '#00d9ff' }}>{personal.name}</span>
        </p>
        <div className="flex justify-center gap-6 mb-6">
          {[
            { label: 'GitHub',   href: personal.github },
            { label: 'LinkedIn', href: personal.linkedin },
            { label: 'Twitter',  href: personal.twitter },
            { label: 'Email',    href: `mailto:${personal.email}` },
          ].map(link => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-xs tracking-widest uppercase transition-colors duration-200"
              style={{ color: '#475569' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#00d9ff'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#475569'; }}
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-xs" style={{ color: '#2d3748' }}>
          Built with Next.js · TypeScript · Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
