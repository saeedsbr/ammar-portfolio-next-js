'use client';

import { experience } from '@/app/data/portfolio';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-32 relative" style={{ background: 'rgba(10,22,40,0.5)' }}>
      <div className="max-w-4xl mx-auto px-6">

        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm tracking-widest" style={{ color: '#00ff88' }}>04.</span>
          <h2 className="section-title font-black tracking-widest uppercase underline-glow" style={{ color: '#e2e8f0' }}>
            Experience
          </h2>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, rgba(0,217,255,0.3), transparent)' }} />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, #00d9ff, #7c3aed, transparent)' }}
          />

          <div className="space-y-12">
            {experience.map((exp, i) => (
              <div key={i} className="relative pl-16">
                {/* Timeline node */}
                <div
                  className="absolute left-3.5 top-5 w-5 h-5 rounded-full -translate-x-1/2 flex items-center justify-center"
                  style={{
                    background: exp.color,
                    boxShadow: `0 0 12px ${exp.color}88`,
                    border: '2px solid rgba(5,10,14,1)',
                  }}
                >
                  <span style={{ fontSize: 8, color: '#050a0e' }}>●</span>
                </div>

                {/* Content card */}
                <div
                  className="p-6 rounded-lg tech-card"
                  style={{
                    background: 'rgba(13,31,45,0.9)',
                    border: `1px solid ${exp.color}25`,
                  }}
                >
                  {/* Type badge */}
                  <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                    <span
                      className="text-xs px-2 py-0.5 rounded-full tracking-widest uppercase"
                      style={{
                        background: `${exp.color}18`,
                        color: exp.color,
                        border: `1px solid ${exp.color}40`,
                      }}
                    >
                      {exp.type === 'work' ? '💼 work' : '🎓 education'}
                    </span>
                    <span className="text-xs font-mono" style={{ color: '#475569' }}>
                      {exp.period}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold mb-0.5" style={{ color: '#e2e8f0' }}>
                    {exp.title}
                  </h3>
                  <p className="text-sm mb-1" style={{ color: exp.color }}>
                    {exp.company}
                  </p>
                  <p className="text-xs mb-5" style={{ color: '#475569' }}>
                    📍 {exp.location}
                  </p>

                  {/* Description bullets */}
                  <ul className="space-y-2 mb-5">
                    {exp.description.map((d, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm" style={{ color: '#94a3b8' }}>
                        <span style={{ color: exp.color, marginTop: 2 }}>▸</span>
                        {d}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map(t => (
                      <span key={t} className="tag-pill">{t}</span>
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
