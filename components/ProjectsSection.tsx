'use client';

import { useState, useRef } from 'react';
import { projects } from '@/app/data/portfolio';

type Project = typeof projects[0];

const CATS = ['All', 'AI/ML', 'Full-Stack', 'Systems'];

const DIFF_CLASS: Record<string, string> = {
  Beginner:     'diff-beginner',
  Intermediate: 'diff-intermediate',
  Advanced:     'diff-advanced',
  Expert:       'diff-expert',
};

function TiltCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glow, setGlow] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current!.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;  // -0.5 to 0.5
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    setTilt({ x, y });
    setGlow({
      x: ((e.clientX - rect.left) / rect.width)  * 100,
      y: ((e.clientY - rect.top)  / rect.height) * 100,
    });
  };

  const onLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <div
      ref={cardRef}
      className="relative rounded-xl overflow-hidden cursor-pointer"
      style={{
        background: 'rgba(10,17,31,0.95)',
        border: `1px solid ${hovered ? project.color + '35' : 'rgba(255,255,255,0.07)'}`,
        transform: hovered
          ? `perspective(800px) rotateX(${-tilt.y * 10}deg) rotateY(${tilt.x * 10}deg) translateZ(8px)`
          : 'perspective(800px) rotateX(0) rotateY(0) translateZ(0)',
        transition: hovered
          ? 'transform 0.08s ease, border-color 0.3s ease, box-shadow 0.3s ease'
          : 'transform 0.5s cubic-bezier(0.23,1,0.32,1), border-color 0.3s ease, box-shadow 0.3s ease',
        boxShadow: hovered ? `0 20px 60px rgba(0,0,0,0.5), 0 0 40px ${project.color}12` : 'none',
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onLeave}
    >
      {/* Dynamic glare */}
      {hovered && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(255,255,255,0.04) 0%, transparent 60%)`,
            zIndex: 1,
            borderRadius: 'inherit',
          }}
        />
      )}

      {/* Top accent line */}
      <div
        className="h-0.5 w-full transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, ${project.color}, transparent 70%)`,
          opacity: hovered ? 1 : 0.4,
        }}
      />

      <div className="p-6 relative" style={{ transform: 'translateZ(1px)' }}>
        {/* Header row */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex flex-wrap gap-2">
            {/* Category */}
            <span
              className="pill text-xs"
              style={{ color: project.color, borderColor: `${project.color}35`, background: `${project.color}0d` }}
            >
              {project.category}
            </span>
            {/* Difficulty */}
            <span className={`pill text-xs ${DIFF_CLASS[project.difficulty]}`}>
              {project.difficulty}
            </span>
            {/* Featured */}
            {project.featured && (
              <span className="pill text-xs" style={{ color: '#FFB800', borderColor: 'rgba(255,184,0,0.3)', background: 'rgba(255,184,0,0.08)' }}>
                ★ Featured
              </span>
            )}
          </div>
          {/* Stars */}
          <div
            className="flex items-center gap-1.5 text-xs"
            style={{ color: '#475569', fontFamily: 'var(--font-mono)' }}
          >
            <span style={{ color: '#FFB800' }}>★</span>
            <span>{project.stars}</span>
          </div>
        </div>

        {/* Name */}
        <h3
          className="text-xl font-bold mb-2 transition-colors duration-200"
          style={{
            fontFamily: 'var(--font-heading)',
            letterSpacing: '-0.02em',
            color: hovered ? project.color : '#FFFFFF',
          }}
        >
          {project.name}
        </h3>

        {/* Description */}
        <p
          className="text-sm leading-relaxed mb-5"
          style={{ color: '#8B9BB4', fontFamily: 'var(--font-body)' }}
        >
          {project.description}
        </p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.techStack.map(t => (
            <span key={t} className="pill">{t}</span>
          ))}
        </div>

        {/* Footer row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: '#00FF85', boxShadow: '0 0 4px #00FF85' }}
            />
            <span
              className="text-xs"
              style={{ color: '#475569', fontFamily: 'var(--font-mono)' }}
            >
              Last commit: {project.lastCommit}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`https://github.com/${project.githubRepo}`}
              target="_blank"
              rel="noreferrer"
              className="text-xs transition-colors duration-200"
              style={{ color: '#475569', fontFamily: 'var(--font-mono)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#00FF85'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#475569'; }}
              onClick={e => e.stopPropagation()}
            >
              ↗ GitHub
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs transition-colors duration-200"
                style={{ color: '#475569', fontFamily: 'var(--font-mono)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = project.color; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#475569'; }}
                onClick={e => e.stopPropagation()}
              >
                ↗ Live
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Bottom glow on hover */}
      <div
        className="absolute bottom-0 inset-x-0 h-24 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(ellipse at 50% 100%, ${project.color}14, transparent 70%)`,
          opacity: hovered ? 1 : 0,
        }}
      />
    </div>
  );
}

export default function ProjectsSection() {
  const [cat, setCat] = useState('All');

  const filtered = cat === 'All' ? projects : projects.filter(p => p.category === cat);

  return (
    <section id="projects" className="py-32 relative dot-grid">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,255,133,0.2), transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="section-label mb-3">03 / Projects</p>
          <h2 className="section-title" style={{ fontFamily: 'var(--font-heading)' }}>
            Things I've Built
          </h2>
        </div>

        {/* Category filters */}
        <div className="flex gap-3 mb-10 flex-wrap">
          {CATS.map(c => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className="px-4 py-1.5 rounded-full text-xs transition-all duration-200"
              style={{
                border: cat === c ? '1px solid rgba(0,255,133,0.5)' : '1px solid rgba(255,255,255,0.08)',
                color: cat === c ? '#00FF85' : '#8B9BB4',
                background: cat === c ? 'rgba(0,255,133,0.08)' : 'transparent',
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.06em',
                boxShadow: cat === c ? '0 0 12px rgba(0,255,133,0.15)' : 'none',
              }}
            >
              {c === 'All' ? '⬡ All' : c}
            </button>
          ))}
          <span
            className="ml-auto text-xs self-center"
            style={{ color: '#475569', fontFamily: 'var(--font-mono)' }}
          >
            {filtered.length} projects
          </span>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(p => (
            <TiltCard key={p.id} project={p} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16">
          <a
            href={`https://github.com/yourusername`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm transition-all duration-200"
            style={{
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#8B9BB4',
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.06em',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,255,133,0.3)';
              (e.currentTarget as HTMLElement).style.color = '#00FF85';
              (e.currentTarget as HTMLElement).style.background = 'rgba(0,255,133,0.04)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
              (e.currentTarget as HTMLElement).style.color = '#8B9BB4';
              (e.currentTarget as HTMLElement).style.background = 'transparent';
            }}
          >
            ↗ View all on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
