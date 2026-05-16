'use client';

import { personal } from '@/app/data/portfolio';

export default function Footer() {
  return (
    <footer
      className="py-12 relative"
      style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo */}
          <a
            href="#"
            className="font-bold text-base"
            style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em', color: '#FFFFFF' }}
          >
            <span style={{ color: '#00FF85' }}>{'<'}</span>
            {personal.name.split(' ')[0]}
            <span style={{ color: '#00FF85' }}>{'>'}</span>
          </a>

          {/* Social links */}
          <div className="flex items-center gap-6">
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
                style={{ color: '#475569', fontFamily: 'var(--font-mono)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#00FF85'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#475569'; }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Built with */}
          <p
            className="text-xs"
            style={{ color: '#2d3748', fontFamily: 'var(--font-mono)' }}
          >
            Built with Next.js · TypeScript · Tailwind
          </p>
        </div>

        <div className="text-center mt-8">
          <p className="text-xs" style={{ color: '#1e2a3a', fontFamily: 'var(--font-mono)' }}>
            © {new Date().getFullYear()} {personal.name}. Designed & coded by hand.
          </p>
        </div>
      </div>
    </footer>
  );
}
