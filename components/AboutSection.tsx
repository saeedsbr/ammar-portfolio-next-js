'use client';

import { personal, stats, achievements } from '@/app/data/portfolio';

export default function AboutSection() {
  return (
    <section id="about" className="py-32 relative grid-bg">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section heading */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm tracking-widest" style={{ color: '#00ff88' }}>01.</span>
          <h2 className="section-title font-black tracking-widest uppercase underline-glow" style={{ color: '#e2e8f0' }}>
            About Me
          </h2>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, rgba(0,217,255,0.3), transparent)' }} />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: bio + achievements */}
          <div>
            {personal.bio.map((para, i) => (
              <p
                key={i}
                className="mb-5 leading-relaxed"
                style={{ color: i === 0 ? '#cbd5e1' : '#94a3b8' }}
              >
                {para}
              </p>
            ))}

            {/* Education card */}
            <div
              className="mt-8 p-5 rounded-lg tech-card"
              style={{
                background: 'rgba(13,31,45,0.8)',
                border: '1px solid rgba(0,217,255,0.15)',
              }}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl mt-1">🎓</span>
                <div>
                  <p className="font-bold text-sm tracking-wider" style={{ color: '#e2e8f0' }}>
                    {personal.degree}
                  </p>
                  <p className="text-sm" style={{ color: '#00d9ff' }}>{personal.university}</p>
                  <div className="flex items-center gap-4 mt-2 text-xs" style={{ color: '#64748b' }}>
                    <span>Class of {personal.graduation}</span>
                    <span>|</span>
                    <span style={{ color: '#00ff88' }}>GPA: {personal.gpa}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="mt-8 grid grid-cols-1 gap-3">
              {achievements.map((a, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-lg tech-card"
                  style={{
                    background: 'rgba(13,31,45,0.6)',
                    border: '1px solid rgba(0,217,255,0.1)',
                  }}
                >
                  <span className="text-xl">{a.icon}</span>
                  <div>
                    <p className="text-sm font-bold" style={{ color: '#e2e8f0' }}>{a.title}</p>
                    <p className="text-xs mt-0.5" style={{ color: '#64748b' }}>{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: stats + hexagon avatar placeholder */}
          <div className="flex flex-col gap-8">
            {/* Avatar placeholder */}
            <div className="flex justify-center">
              <div className="relative w-64 h-64">
                {/* Outer rotating ring */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: '2px dashed rgba(0,217,255,0.3)',
                    animation: 'rotate-ring 20s linear infinite',
                  }}
                />
                {/* Inner counter ring */}
                <div
                  className="absolute inset-4 rounded-full"
                  style={{
                    border: '1px dashed rgba(0,255,136,0.2)',
                    animation: 'counter-ring 15s linear infinite',
                  }}
                />
                {/* Center content */}
                <div
                  className="absolute inset-8 rounded-full flex items-center justify-center flex-col gap-1"
                  style={{
                    background: 'linear-gradient(135deg, #0a1628, #0d1f2d)',
                    border: '2px solid rgba(0,217,255,0.3)',
                    boxShadow: '0 0 30px rgba(0,217,255,0.1)',
                  }}
                >
                  <span className="text-4xl">👨‍💻</span>
                  <span className="text-xs tracking-widest uppercase mt-1" style={{ color: '#00d9ff' }}>
                    {personal.name.split(' ')[0]}
                  </span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="p-5 rounded-lg text-center tech-card"
                  style={{
                    background: 'rgba(13,31,45,0.8)',
                    border: '1px solid rgba(0,217,255,0.15)',
                  }}
                >
                  <div className="text-2xl mb-1">{s.icon}</div>
                  <div
                    className="text-3xl font-black mb-1"
                    style={{ color: i % 2 === 0 ? '#00d9ff' : '#00ff88' }}
                  >
                    {s.value}
                  </div>
                  <div className="text-xs tracking-widest uppercase" style={{ color: '#64748b' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Currently */}
            <div
              className="p-5 rounded-lg"
              style={{ background: 'rgba(13,31,45,0.8)', border: '1px solid rgba(0,255,136,0.2)' }}
            >
              <p className="text-xs tracking-widest uppercase mb-3" style={{ color: '#00ff88' }}>
                // currently
              </p>
              {[
                '🔬 Researching LLM fine-tuning techniques',
                '🏗️  Building a distributed messaging system',
                '📚 Reading: "Designing Data-Intensive Applications"',
                '🎯 Preparing for technical interviews',
              ].map((item, i) => (
                <p key={i} className="text-sm mb-2" style={{ color: '#94a3b8' }}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
