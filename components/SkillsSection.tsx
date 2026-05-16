'use client';

import { useState, useEffect, useRef } from 'react';
import { skills, techCloud } from '@/app/data/portfolio';

type Tab = 'languages' | 'frameworks' | 'tools';

const TABS: { key: Tab; label: string; prefix: string }[] = [
  { key: 'languages',  label: 'Languages',      prefix: 'lang' },
  { key: 'frameworks', label: 'Frameworks & ML', prefix: 'fw' },
  { key: 'tools',      label: 'DevOps & Tools',  prefix: 'tools' },
];

function SkillBar({
  name, level, visible, delay = 0,
}: {
  name: string; level: number; visible: boolean; delay?: number;
}) {
  const pct = visible ? level : 0;
  const color = level >= 85 ? '#00FF85' : level >= 75 ? '#00C6FF' : '#8B9BB4';

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span
          className="text-sm font-medium"
          style={{ color: '#CBD5E1', fontFamily: 'var(--font-body)' }}
        >
          {name}
        </span>
        <span
          className="text-xs"
          style={{ color, fontFamily: 'var(--font-mono)' }}
        >
          {level}%
        </span>
      </div>
      <div className="skill-track">
        <div
          className="skill-fill"
          style={{
            width: `${pct}%`,
            background: `linear-gradient(90deg, ${color}88, ${color})`,
            boxShadow: visible ? `0 0 10px ${color}44` : 'none',
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const [tab,  setTab]  = useState<Tab>('languages');
  const [vis,  setVis]  = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  // Reset bars when tab changes so they re-animate
  const [localVis, setLocalVis] = useState(false);
  useEffect(() => {
    setLocalVis(false);
    const t = setTimeout(() => setLocalVis(true), 50);
    return () => clearTimeout(t);
  }, [tab]);

  const show = vis && localVis;

  return (
    <section
      id="skills"
      className="py-32 relative"
      style={{ background: 'rgba(10,17,31,0.4)' }}
      ref={ref}
    >
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,0,85,0.2), transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="section-label mb-3">02 / Skills</p>
          <h2 className="section-title" style={{ fontFamily: 'var(--font-heading)' }}>
            Tech Stack
          </h2>
        </div>

        {/* Scrolling tech cloud banner */}
        <div
          className="mb-16 overflow-hidden rounded-xl"
          style={{
            background: 'rgba(10,17,31,0.6)',
            border: '1px solid rgba(255,255,255,0.06)',
            maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
          }}
        >
          <div className="marquee-track flex gap-4 py-4 w-max" style={{ paddingLeft: 20 }}>
            {[...techCloud, ...techCloud].map((tech, i) => (
              <span
                key={i}
                className="px-4 py-1.5 rounded-lg text-xs whitespace-nowrap"
                style={{
                  border: '1px solid rgba(0,255,133,0.15)',
                  color: '#8B9BB4',
                  background: 'rgba(0,255,133,0.04)',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.05em',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left — tab content (3/5) */}
          <div className="lg:col-span-3">
            {/* Tabs */}
            <div className="flex gap-2 mb-10 flex-wrap">
              {TABS.map(t => (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  className="px-4 py-2 rounded-lg text-xs transition-all duration-200"
                  style={{
                    border: tab === t.key ? '1px solid rgba(0,255,133,0.4)' : '1px solid rgba(255,255,255,0.08)',
                    color: tab === t.key ? '#00FF85' : '#8B9BB4',
                    background: tab === t.key ? 'rgba(0,255,133,0.08)' : 'transparent',
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.06em',
                    boxShadow: tab === t.key ? '0 0 16px rgba(0,255,133,0.12)' : 'none',
                  }}
                >
                  {tab === t.key && <span style={{ color: '#00FF85', marginRight: 6 }}>▶</span>}
                  {t.label}
                </button>
              ))}
            </div>

            {/* Skill bars */}
            <div>
              {skills[tab].map((s, i) => (
                <SkillBar key={`${tab}-${s.name}`} name={s.name} level={s.level} visible={show} delay={i * 80} />
              ))}
            </div>
          </div>

          {/* Right — core strengths + env (2/5) */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div
              className="p-6 rounded-xl"
              style={{ background: 'rgba(10,17,31,0.9)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <p
                className="text-xs uppercase tracking-widest mb-5"
                style={{ color: '#00FF85', fontFamily: 'var(--font-mono)' }}
              >
                // core strengths
              </p>
              {[
                { label: 'Problem Solving',    val: 95, icon: '🧩' },
                { label: 'System Design',      val: 82, icon: '🏗️' },
                { label: 'Algorithm Design',   val: 88, icon: '⚡' },
                { label: 'Code Quality',       val: 85, icon: '✨' },
                { label: 'Team Leadership',    val: 80, icon: '🤝' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 mb-4">
                  <span className="text-lg w-7 flex-shrink-0">{item.icon}</span>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1.5">
                      <span className="text-xs" style={{ color: '#8B9BB4' }}>{item.label}</span>
                      <span className="text-xs" style={{ color: '#00C6FF', fontFamily: 'var(--font-mono)' }}>
                        {item.val}%
                      </span>
                    </div>
                    <div className="skill-track">
                      <div
                        className="skill-fill"
                        style={{
                          width: show ? `${item.val}%` : '0%',
                          background: 'linear-gradient(90deg, #7C3AED, #00C6FF)',
                          transitionDelay: `${i * 100 + 400}ms`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="p-6 rounded-xl"
              style={{ background: 'rgba(10,17,31,0.9)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <p
                className="text-xs uppercase tracking-widest mb-4"
                style={{ color: '#FF0055', fontFamily: 'var(--font-mono)' }}
              >
                // daily driver
              </p>
              {[
                { icon: '⌨️',  text: 'NeoVim + Tmux' },
                { icon: '🐧',  text: 'Linux (Arch btw)' },
                { icon: '🐳',  text: 'Docker / Kubernetes' },
                { icon: '☁️',  text: 'AWS + GCP' },
                { icon: '🔀',  text: 'Git + GitHub Actions' },
                { icon: '📊',  text: 'Grafana + Prometheus' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 mb-3">
                  <span>{item.icon}</span>
                  <span className="text-sm" style={{ color: '#8B9BB4', fontFamily: 'var(--font-mono)' }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
