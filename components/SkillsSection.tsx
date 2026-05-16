'use client';

import { useState, useEffect, useRef } from 'react';
import { skills, techIcons } from '@/app/data/portfolio';

type SkillItem = { name: string; level: number; color: string };

function SkillBar({ skill, visible }: { skill: SkillItem; visible: boolean }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm" style={{ color: '#cbd5e1' }}>{skill.name}</span>
        <span className="text-xs font-mono" style={{ color: '#00d9ff' }}>{skill.level}%</span>
      </div>
      <div
        className="w-full h-2 rounded-full overflow-hidden"
        style={{ background: 'rgba(255,255,255,0.06)' }}
      >
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: visible ? `${skill.level}%` : '0%',
            background: `linear-gradient(90deg, ${skill.color}aa, ${skill.color})`,
            boxShadow: visible ? `0 0 8px ${skill.color}66` : 'none',
          }}
        />
      </div>
    </div>
  );
}

type TabKey = keyof typeof skills;
const tabs: { key: TabKey; label: string; icon: string }[] = [
  { key: 'languages', label: 'Languages',  icon: '<>' },
  { key: 'frontend',  label: 'Frontend',   icon: '{}' },
  { key: 'backend',   label: 'Backend',    icon: '//' },
  { key: 'ml',        label: 'ML / AI',    icon: '∑' },
];

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<TabKey>('languages');
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="py-32 relative" style={{ background: 'rgba(10,22,40,0.5)' }}>
      <div className="max-w-6xl mx-auto px-6" ref={ref}>

        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm tracking-widest" style={{ color: '#00ff88' }}>02.</span>
          <h2 className="section-title font-black tracking-widest uppercase underline-glow" style={{ color: '#e2e8f0' }}>
            Tech Stack
          </h2>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, rgba(0,217,255,0.3), transparent)' }} />
        </div>

        {/* Scrolling tech icons banner */}
        <div className="mb-16 overflow-hidden" style={{ maskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)' }}>
          <div
            className="flex gap-6 w-max"
            style={{ animation: 'scroll-x 20s linear infinite' }}
          >
            {[...techIcons, ...techIcons].map((icon, i) => (
              <div
                key={i}
                className="px-4 py-2 rounded text-xs tracking-widest whitespace-nowrap"
                style={{
                  border: '1px solid rgba(0,217,255,0.2)',
                  color: '#00d9ff',
                  background: 'rgba(0,217,255,0.04)',
                }}
              >
                {icon}
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes scroll-x {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
        `}</style>

        <div className="grid lg:grid-cols-3 gap-12">

          {/* Tab selector + bar chart */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="flex gap-2 mb-8 flex-wrap">
              {tabs.map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className="px-4 py-2 text-xs tracking-widest uppercase font-mono transition-all duration-200 rounded"
                  style={{
                    border: activeTab === tab.key
                      ? '1px solid #00d9ff'
                      : '1px solid rgba(255,255,255,0.1)',
                    color: activeTab === tab.key ? '#00d9ff' : '#64748b',
                    background: activeTab === tab.key ? 'rgba(0,217,255,0.08)' : 'transparent',
                    boxShadow: activeTab === tab.key ? '0 0 10px rgba(0,217,255,0.2)' : 'none',
                  }}
                >
                  <span className="mr-2" style={{ color: '#00ff88' }}>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Skill bars */}
            <div>
              {skills[activeTab].map((skill, i) => (
                <SkillBar key={`${activeTab}-${i}`} skill={skill} visible={visible} />
              ))}
            </div>
          </div>

          {/* Right: hexagonal skill map (visual decoration) */}
          <div className="flex flex-col gap-6">
            <div
              className="p-6 rounded-lg"
              style={{ background: 'rgba(13,31,45,0.8)', border: '1px solid rgba(0,217,255,0.15)' }}
            >
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#00ff88' }}>
                // core strengths
              </p>
              {[
                { label: 'Problem Solving',     icon: '🧩', level: 95 },
                { label: 'System Design',       icon: '🏗️',  level: 80 },
                { label: 'Algorithm Design',    icon: '⚡', level: 88 },
                { label: 'Code Quality',        icon: '✨', level: 85 },
                { label: 'Team Collaboration',  icon: '🤝', level: 90 },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 mb-3">
                  <span>{item.icon}</span>
                  <div className="flex-1">
                    <div className="flex justify-between text-xs mb-1">
                      <span style={{ color: '#94a3b8' }}>{item.label}</span>
                      <span style={{ color: '#00d9ff' }}>{item.level}%</span>
                    </div>
                    <div className="h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{
                          width: visible ? `${item.level}%` : '0%',
                          background: 'linear-gradient(90deg, #7c3aed, #00d9ff)',
                          transitionDelay: `${i * 150}ms`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              className="p-6 rounded-lg"
              style={{ background: 'rgba(13,31,45,0.8)', border: '1px solid rgba(0,255,136,0.15)' }}
            >
              <p className="text-xs tracking-widest uppercase mb-4" style={{ color: '#00ff88' }}>
                // tools & env
              </p>
              {[
                '⌨️  NeoVim + Tmux',
                '🐧  Linux (Arch)',
                '🐳  Docker / K8s',
                '☁️   AWS / GCP',
                '🔀  Git + GitHub Actions',
                '📊  Grafana + Prometheus',
              ].map((item, i) => (
                <p key={i} className="text-sm mb-2" style={{ color: '#64748b' }}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
