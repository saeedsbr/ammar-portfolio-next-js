'use client';

import { useState } from 'react';
import { personal } from '@/app/data/portfolio';
import MagneticButton from './MagneticButton';

const ASCII = `
 ██████╗ ██████╗ ███╗   ██╗████████╗ █████╗  ██████╗████████╗
██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔══██╗██╔════╝╚══██╔══╝
██║     ██║   ██║██╔██╗ ██║   ██║   ███████║██║        ██║
██║     ██║   ██║██║╚██╗██║   ██║   ██╔══██║██║        ██║
╚██████╗╚██████╔╝██║ ╚████║   ██║   ██║  ██║╚██████╗   ██║
 ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝   ╚═╝
`.trim();

const SOCIALS = [
  { label: 'Email',    href: `mailto:${personal.email}`, value: personal.email,         icon: '✉' },
  { label: 'GitHub',   href: personal.github,            value: `@${personal.githubUsername}`, icon: '⌥' },
  { label: 'LinkedIn', href: personal.linkedin,          value: '/in/yourusername',     icon: '◈' },
  { label: 'Location', href: null,                       value: personal.location,      icon: '◉' },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('sent'), 1600);
  };

  return (
    <section id="contact" className="py-32 relative">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,255,133,0.2), transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* ASCII art */}
        <div className="mb-14 overflow-x-auto">
          <pre
            className="text-xs leading-tight"
            style={{
              color: 'rgba(0,255,133,0.18)',
              fontFamily: 'var(--font-mono)',
              userSelect: 'none',
            }}
          >
            {ASCII}
          </pre>
        </div>

        <div className="mb-16">
          <p className="section-label mb-3">05 / Contact</p>
          <h2 className="section-title" style={{ fontFamily: 'var(--font-heading)' }}>
            Let's Build Together
          </h2>
          <p className="mt-4 max-w-xl" style={{ color: '#8B9BB4', fontFamily: 'var(--font-body)' }}>
            Always open to internship opportunities, research collaborations, and interesting
            projects. If you want to build something great together — my inbox is open.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left: contact info */}
          <div>
            <div className="space-y-3 mb-10">
              {SOCIALS.map(s => (
                <div
                  key={s.label}
                  className="flex items-center gap-4 p-5 rounded-xl transition-all duration-200"
                  style={{
                    background: 'rgba(10,17,31,0.8)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,255,133,0.2)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)'; }}
                >
                  <span
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                    style={{
                      background: 'rgba(0,255,133,0.08)',
                      color: '#00FF85',
                      border: '1px solid rgba(0,255,133,0.15)',
                    }}
                  >
                    {s.icon}
                  </span>
                  <div>
                    <p
                      className="text-xs mb-0.5"
                      style={{ color: '#475569', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}
                    >
                      {s.label.toUpperCase()}
                    </p>
                    {s.href ? (
                      <a
                        href={s.href}
                        target={s.href.startsWith('http') ? '_blank' : undefined}
                        rel="noreferrer"
                        className="text-sm transition-colors duration-200"
                        style={{ color: '#CBD5E1', fontFamily: 'var(--font-mono)' }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#00FF85'; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#CBD5E1'; }}
                      >
                        {s.value}
                      </a>
                    ) : (
                      <p className="text-sm" style={{ color: '#CBD5E1', fontFamily: 'var(--font-mono)' }}>
                        {s.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability */}
            <div
              className="p-5 rounded-xl"
              style={{
                background: 'rgba(0,255,133,0.04)',
                border: '1px solid rgba(0,255,133,0.18)',
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="w-2 h-2 rounded-full ring-pulse"
                  style={{ background: '#00FF85', boxShadow: '0 0 6px #00FF85' }}
                />
                <span
                  className="text-sm font-semibold"
                  style={{ color: '#00FF85', fontFamily: 'var(--font-heading)' }}
                >
                  Available for opportunities
                </span>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: '#475569', fontFamily: 'var(--font-body)' }}>
                Seeking Summer 2025 internships in SWE, ML research, or distributed systems.
                Also open to part-time freelance projects.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div>
            {status === 'sent' ? (
              <div
                className="h-full min-h-[400px] flex flex-col items-center justify-center rounded-xl text-center p-12"
                style={{
                  background: 'rgba(0,255,133,0.04)',
                  border: '1px solid rgba(0,255,133,0.2)',
                }}
              >
                <div
                  className="text-5xl mb-5 w-20 h-20 rounded-full flex items-center justify-center"
                  style={{ background: 'rgba(0,255,133,0.1)', color: '#00FF85', border: '1px solid rgba(0,255,133,0.3)' }}
                >
                  ✓
                </div>
                <p
                  className="text-2xl font-bold mb-2"
                  style={{ fontFamily: 'var(--font-heading)', color: '#00FF85' }}
                >
                  Message Sent!
                </p>
                <p className="text-sm" style={{ color: '#8B9BB4' }}>
                  Thanks for reaching out. I'll reply within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { field: 'name',    label: 'Name',    type: 'text',  ph: 'John Doe' },
                  { field: 'email',   label: 'Email',   type: 'email', ph: 'john@example.com' },
                  { field: 'subject', label: 'Subject', type: 'text',  ph: 'Internship Opportunity' },
                ].map(({ field, label, type, ph }) => (
                  <div key={field}>
                    <label
                      className="block text-xs uppercase tracking-widest mb-2"
                      style={{ color: '#475569', fontFamily: 'var(--font-mono)' }}
                    >
                      {label}
                    </label>
                    <input
                      type={type}
                      placeholder={ph}
                      required
                      value={form[field as keyof typeof form]}
                      onChange={e => setForm({ ...form, [field]: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg outline-none text-sm transition-all duration-200"
                      style={{
                        background: 'rgba(10,17,31,0.9)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        color: '#FFFFFF',
                        fontFamily: 'var(--font-mono)',
                      }}
                      onFocus={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,255,133,0.4)';
                        (e.currentTarget as HTMLElement).style.boxShadow = '0 0 16px rgba(0,255,133,0.08)';
                      }}
                      onBlur={e => {
                        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                      }}
                    />
                  </div>
                ))}

                <div>
                  <label
                    className="block text-xs uppercase tracking-widest mb-2"
                    style={{ color: '#475569', fontFamily: 'var(--font-mono)' }}
                  >
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about the opportunity..."
                    required
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg outline-none resize-none text-sm transition-all duration-200"
                    style={{
                      background: 'rgba(10,17,31,0.9)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: '#FFFFFF',
                      fontFamily: 'var(--font-mono)',
                    }}
                    onFocus={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,255,133,0.4)';
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 0 16px rgba(0,255,133,0.08)';
                    }}
                    onBlur={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    }}
                  />
                </div>

                <MagneticButton
                  onClick={() => {}}
                  className="w-full py-4 rounded-lg font-bold text-sm tracking-wide"
                  style={{
                    background: status === 'sending' ? 'rgba(0,255,133,0.4)' : '#00FF85',
                    color: '#050B14',
                    fontFamily: 'var(--font-heading)',
                    letterSpacing: '-0.01em',
                    boxShadow: '0 0 30px rgba(0,255,133,0.2)',
                    cursor: status === 'sending' ? 'wait' : 'pointer',
                  }}
                >
                  {status === 'sending' ? '// Sending...' : '// Send Message →'}
                </MagneticButton>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
