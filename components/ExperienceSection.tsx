'use client';

import { experience } from '@/app/data/portfolio';

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-32 relative"
      style={{ background: 'rgba(10,17,31,0.4)' }}
    >
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,0,85,0.2), transparent)' }}
      />

      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <p className="section-label mb-3">04 / Experience</p>
          <h2 className="section-title" style={{ fontFamily: 'var(--font-heading)' }}>
            Where I've Been
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative pl-12">
          {/* Vertical line */}
          <div className="tl-line" />

          <div className="space-y-10">
            {experience.map((exp, i) => (
              <div key={i} className="relative">
                {/* Node */}
                <div
                  className="tl-node"
                  style={{
                    background: exp.color,
                    boxShadow: `0 0 16px ${exp.color}66`,
                  }}
                />

                {/* Card */}
                <div
                  className="ml-6 p-6 rounded-xl transition-all duration-300"
                  style={{
                    background: 'rgba(10,17,31,0.9)',
                    border: `1px solid ${exp.color}18`,
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${exp.color}35`;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${exp.color}08`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${exp.color}18`;
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="text-xs px-2 py-0.5 rounded-full"
                          style={{
                            background: `${exp.color}14`,
                            color: exp.color,
                            border: `1px solid ${exp.color}30`,
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.65rem',
                            letterSpacing: '0.08em',
                          }}
                        >
                          {exp.type === 'work' ? '💼 WORK' : '🎓 EDUCATION'}
                        </span>
                      </div>
                      <h3
                        className="text-lg font-bold"
                        style={{ fontFamily: 'var(--font-heading)', letterSpacing: '-0.02em', color: '#FFFFFF' }}
                      >
                        {exp.title}
                      </h3>
                      <p className="text-sm" style={{ color: exp.color }}>{exp.org}</p>
                      <p className="text-xs mt-0.5" style={{ color: '#475569' }}>📍 {exp.location}</p>
                    </div>
                    <div
                      className="text-xs px-3 py-1.5 rounded-md flex-shrink-0"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        color: '#8B9BB4',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.06)',
                      }}
                    >
                      {exp.period}
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm" style={{ color: '#8B9BB4' }}>
                        <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: exp.color }} />
                        <span style={{ fontFamily: 'var(--font-body)' }}>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map(t => (
                      <span key={t} className="pill">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
