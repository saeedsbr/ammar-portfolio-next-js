'use client';

import { useState } from 'react';
import { personal } from '@/app/data/portfolio';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // In production, wire to your API / EmailJS / Resend
    setTimeout(() => setStatus('sent'), 1500);
  };

  const contactItems = [
    { label: 'Email',    value: personal.email,    href: `mailto:${personal.email}`,   icon: '✉' },
    { label: 'GitHub',   value: '@yourusername',    href: personal.github,              icon: '⌥' },
    { label: 'LinkedIn', value: '/in/yourusername', href: personal.linkedin,            icon: '◈' },
    { label: 'Location', value: personal.location,  href: null,                         icon: '◉' },
  ];

  return (
    <section id="contact" className="py-32 relative grid-bg">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm tracking-widest" style={{ color: '#00ff88' }}>05.</span>
          <h2 className="section-title font-black tracking-widest uppercase underline-glow" style={{ color: '#e2e8f0' }}>
            Get In Touch
          </h2>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, rgba(0,217,255,0.3), transparent)' }} />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left: text + contact info */}
          <div>
            <p className="text-lg mb-2 font-bold gradient-text-cyan">
              Let's Build Something Together
            </p>
            <p className="leading-relaxed mb-8" style={{ color: '#94a3b8' }}>
              I'm always open to discussing internship opportunities, research collaborations,
              open-source projects, or just a chat about technology. My inbox is always open!
            </p>

            <div className="space-y-4 mb-10">
              {contactItems.map(item => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 rounded-lg tech-card"
                  style={{
                    background: 'rgba(13,31,45,0.8)',
                    border: '1px solid rgba(0,217,255,0.12)',
                  }}
                >
                  <span
                    className="w-10 h-10 flex items-center justify-center rounded text-lg flex-shrink-0"
                    style={{ background: 'rgba(0,217,255,0.08)', color: '#00d9ff' }}
                  >
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-xs tracking-widest uppercase mb-0.5" style={{ color: '#475569' }}>
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel="noreferrer"
                        className="text-sm transition-colors duration-200"
                        style={{ color: '#cbd5e1' }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#00d9ff'; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#cbd5e1'; }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm" style={{ color: '#cbd5e1' }}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability */}
            <div
              className="p-5 rounded-lg"
              style={{ background: 'rgba(0,255,136,0.05)', border: '1px solid rgba(0,255,136,0.2)' }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: '#00ff88', boxShadow: '0 0 6px #00ff88', animation: 'pulse-glow 2s infinite' }}
                />
                <span className="text-sm font-bold" style={{ color: '#00ff88' }}>
                  Available for opportunities
                </span>
              </div>
              <p className="text-xs" style={{ color: '#64748b' }}>
                Currently seeking Summer 2025 internships in SWE, ML, or research roles.
              </p>
            </div>
          </div>

          {/* Right: contact form */}
          <div>
            {status === 'sent' ? (
              <div
                className="h-full flex flex-col items-center justify-center p-12 rounded-lg text-center"
                style={{ border: '1px solid rgba(0,255,136,0.3)', background: 'rgba(0,255,136,0.04)' }}
              >
                <div className="text-5xl mb-4">✓</div>
                <p className="text-xl font-bold mb-2" style={{ color: '#00ff88' }}>Message Sent!</p>
                <p className="text-sm" style={{ color: '#64748b' }}>
                  Thanks for reaching out! I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { field: 'name',    label: 'Your Name',    type: 'text',  placeholder: 'John Doe' },
                  { field: 'email',   label: 'Your Email',   type: 'email', placeholder: 'john@example.com' },
                  { field: 'subject', label: 'Subject',      type: 'text',  placeholder: 'Internship Opportunity' },
                ].map(({ field, label, type, placeholder }) => (
                  <div key={field}>
                    <label
                      className="block text-xs tracking-widest uppercase mb-2"
                      style={{ color: '#64748b' }}
                    >
                      {label}
                    </label>
                    <input
                      type={type}
                      placeholder={placeholder}
                      value={form[field as keyof typeof form]}
                      onChange={e => setForm({ ...form, [field]: e.target.value })}
                      required
                      className="w-full px-4 py-3 text-sm rounded outline-none transition-all duration-200"
                      style={{
                        background: 'rgba(13,31,45,0.9)',
                        border: '1px solid rgba(0,217,255,0.2)',
                        color: '#e2e8f0',
                        fontFamily: 'inherit',
                      }}
                      onFocus={e => { (e.currentTarget as HTMLElement).style.borderColor = '#00d9ff'; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 12px rgba(0,217,255,0.2)'; }}
                      onBlur={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,217,255,0.2)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: '#64748b' }}>
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about the opportunity..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    required
                    className="w-full px-4 py-3 text-sm rounded outline-none resize-none transition-all duration-200"
                    style={{
                      background: 'rgba(13,31,45,0.9)',
                      border: '1px solid rgba(0,217,255,0.2)',
                      color: '#e2e8f0',
                      fontFamily: 'inherit',
                    }}
                    onFocus={e => { (e.currentTarget as HTMLElement).style.borderColor = '#00d9ff'; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 12px rgba(0,217,255,0.2)'; }}
                    onBlur={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,217,255,0.2)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3 text-sm font-bold tracking-widest uppercase rounded transition-all duration-200"
                  style={{
                    background: status === 'sending'
                      ? 'rgba(0,217,255,0.4)'
                      : 'linear-gradient(135deg, #00d9ff, #00ff88)',
                    color: '#050a0e',
                    cursor: status === 'sending' ? 'wait' : 'pointer',
                  }}
                  onMouseEnter={e => {
                    if (status !== 'sending')
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 0 25px rgba(0,217,255,0.4)';
                  }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
                >
                  {status === 'sending' ? '// sending...' : '// send message →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
