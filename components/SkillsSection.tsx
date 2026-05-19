'use client';

import { useState, useEffect, useRef } from 'react';
import { skills, techCloud } from '@/app/data/portfolio';

type Tab = 'languages' | 'frameworks' | 'tools';
const TABS: { key: Tab; label: string }[] = [
  { key: 'languages',  label: 'Languages' },
  { key: 'frameworks', label: 'Frameworks & ML' },
  { key: 'tools',      label: 'DevOps & Tools' },
];

export default function SkillsSection() {
  const [tab, setTab] = useState<Tab>('languages');
  const [vis, setVis] = useState(false);
  const [animate, setAnimate] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: .1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    setAnimate(false);
    const t = setTimeout(() => setAnimate(vis), 60);
    return () => clearTimeout(t);
  }, [tab, vis]);

  return (
    <section id="skills" className="section section-banded" aria-labelledby="skills-title" ref={ref}>
      <div className="container section-stack">

        <div className="section-label">
          <h2 id="skills-title">Skills</h2>
        </div>

        {/* Tech cloud */}
        <div className="tech-cloud">
          {techCloud.map(t => (
            <span key={t} className="tech-pill">{t}</span>
          ))}
        </div>

        {/* Tabs + bars */}
        <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: '1fr' }}>
          <div className="skill-tabs">
            {TABS.map(t => (
              <button
                key={t.key}
                className={`skill-tab ${tab === t.key ? 'active' : ''}`}
                onClick={() => setTab(t.key)}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div style={{ border: '1px solid var(--line-strong)', borderRadius: 8, padding: '0 1.2rem', background: 'var(--surface)' }}>
            {skills[tab].map((s, i) => (
              <div key={`${tab}-${s.name}`} className="skill-row">
                <span className="skill-name">{s.name}</span>
                <div className="skill-track" style={{ flex: 1, maxWidth: '55%' }}>
                  <div
                    className="skill-fill"
                    style={{
                      inlineSize: animate ? `${s.level}%` : '0%',
                      transitionDelay: `${i * 60}ms`,
                    }}
                  />
                </div>
                <span className="skill-pct">{s.level}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Core strengths */}
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}>
          {[
            { icon: '🧩', label: 'Problem Solving',   note: 'Competitive programming, ICPC' },
            { icon: '🏗️', label: 'System Design',      note: 'Distributed systems, scalability' },
            { icon: '⚡', label: 'Algorithm Design',   note: 'LeetCode 1847, graph & DP' },
            { icon: '🤝', label: 'Collaboration',       note: 'Open source, team projects' },
          ].map((s, i) => (
            <div
              key={i}
              style={{
                padding: '1.1rem',
                border: '1px solid var(--line-strong)',
                borderRadius: 8,
                background: 'rgba(10,10,10,.5)',
                transition: 'border-color .15s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold-border)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'var(--line-strong)'; }}
            >
              <span style={{ fontSize: '1.25rem' }}>{s.icon}</span>
              <p style={{ fontWeight: 600, color: 'var(--text-1)', fontSize: '.92rem', marginTop: '.6rem' }}>{s.label}</p>
              <p style={{ color: 'var(--text-3)', fontSize: '.8rem', marginTop: '.2rem' }}>{s.note}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
