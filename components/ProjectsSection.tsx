'use client';

import { useState } from 'react';
import { projects } from '@/app/data/portfolio';

const categories = ['All', 'AI/ML', 'Full-Stack', 'Systems'];

type Project = typeof projects[0];

function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative rounded-lg overflow-hidden tech-card cursor-pointer"
      style={{
        background: 'rgba(13,31,45,0.9)',
        border: `1px solid ${hovered ? project.color + '60' : 'rgba(255,255,255,0.08)'}`,
        boxShadow: hovered ? `0 0 30px ${project.color}20` : 'none',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top accent bar */}
      <div
        className="h-0.5 w-full transition-all duration-300"
        style={{
          background: `linear-gradient(90deg, ${project.color}, transparent)`,
          opacity: hovered ? 1 : 0.4,
        }}
      />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <span
              className="text-xs px-2 py-0.5 rounded-full tracking-widest uppercase"
              style={{
                background: `${project.color}18`,
                color: project.color,
                border: `1px solid ${project.color}40`,
              }}
            >
              {project.category}
            </span>
            {project.featured && (
              <span
                className="text-xs px-2 py-0.5 rounded-full tracking-widest"
                style={{ background: 'rgba(255,189,0,0.1)', color: '#ffbd00', border: '1px solid rgba(255,189,0,0.3)' }}
              >
                ★ featured
              </span>
            )}
          </div>
          <div className="flex items-center gap-1 text-xs" style={{ color: '#64748b' }}>
            <span>★</span>
            <span>{project.stars}</span>
          </div>
        </div>

        <h3
          className="text-lg font-bold mb-2 tracking-wide transition-colors duration-200"
          style={{ color: hovered ? project.color : '#e2e8f0' }}
        >
          {project.name}
        </h3>

        <p className="text-sm leading-relaxed mb-5" style={{ color: '#64748b' }}>
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map(t => (
            <span key={t} className="tag-pill">{t}</span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-xs tracking-widest uppercase transition-colors duration-200 flex items-center gap-1.5"
            style={{ color: '#94a3b8' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#00d9ff'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#94a3b8'; }}
          >
            <span>↗</span> GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="text-xs tracking-widest uppercase transition-colors duration-200 flex items-center gap-1.5"
              style={{ color: '#94a3b8' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = project.color; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#94a3b8'; }}
            >
              <span>↗</span> Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Corner decoration */}
      <div
        className="absolute bottom-0 right-0 w-16 h-16 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at 100% 100%, ${project.color}15, transparent)`,
          opacity: hovered ? 1 : 0,
        }}
      />
    </div>
  );
}

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-32 relative grid-bg">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex items-center gap-4 mb-16">
          <span className="text-sm tracking-widest" style={{ color: '#00ff88' }}>03.</span>
          <h2 className="section-title font-black tracking-widest uppercase underline-glow" style={{ color: '#e2e8f0' }}>
            Projects
          </h2>
          <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, rgba(0,217,255,0.3), transparent)' }} />
        </div>

        {/* Category filter */}
        <div className="flex gap-3 mb-10 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-1.5 text-xs tracking-widest uppercase rounded-full transition-all duration-200"
              style={{
                border: activeCategory === cat
                  ? '1px solid #00d9ff'
                  : '1px solid rgba(255,255,255,0.1)',
                color: activeCategory === cat ? '#00d9ff' : '#64748b',
                background: activeCategory === cat ? 'rgba(0,217,255,0.08)' : 'transparent',
                boxShadow: activeCategory === cat ? '0 0 10px rgba(0,217,255,0.2)' : 'none',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm tracking-widest uppercase transition-all duration-200"
            style={{ border: '1px solid rgba(0,217,255,0.3)', color: '#00d9ff', borderRadius: 4 }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(0,217,255,0.08)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
          >
            <span>↗</span> View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
