'use client';

import { useState } from 'react';
import { projects } from '@/app/data/portfolio';

const CATS = ['All', 'AI/ML', 'Full-Stack', 'Systems'];

export default function ProjectsSection() {
  const [cat, setCat] = useState('All');
  const filtered = cat === 'All' ? projects : projects.filter(p => p.category === cat);

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container section-stack">

        <div className="section-label">
          <h2 id="projects-title">Projects</h2>
        </div>

        {/* Filter */}
        <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', alignItems: 'center' }}>
          {CATS.map(c => (
            <button
              key={c}
              type="button"
              className={`skill-tab ${cat === c ? 'active' : ''}`}
              onClick={() => setCat(c)}
            >
              {c}
            </button>
          ))}
          <span style={{ marginInlineStart: 'auto', color: 'var(--text-3)', fontSize: '.78rem', fontWeight: 600 }}>
            {filtered.length} projects
          </span>
        </div>

        <div className="project-grid">
          {filtered.map(p => (
            <article
              key={p.id}
              className="project-card fade-up"
              style={{ animationDelay: `${p.id * 90}ms` }}
            >
              {/* Image area */}
              <figure className="project-media">
                <div style={{
                  width: '100%', height: '100%',
                  background: `linear-gradient(135deg, ${p.color}14, #0d0d0d)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexDirection: 'column', gap: '.5rem',
                }}>
                  <span style={{ fontSize: '2rem', opacity: .5 }}>
                    {p.category === 'AI/ML' ? '🤖' : p.category === 'Systems' ? '⚙️' : '🌐'}
                  </span>
                  <span style={{ fontSize: '.72rem', color: 'var(--text-3)', fontWeight: 600, letterSpacing: '.05em' }}>
                    {p.category}
                  </span>
                </div>
              </figure>

              <div>
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '.5rem', marginBottom: '.75rem' }}>
                  <div style={{ display: 'flex', gap: '.4rem', alignItems: 'center', flexWrap: 'wrap' }}>
                    <span
                      className={`diff-badge ${p.difficulty === 'Expert' ? 'diff-expert' : p.difficulty === 'Advanced' ? 'diff-advanced' : 'diff-intermediate'}`}
                    >
                      {p.difficulty}
                    </span>
                    {p.featured && (
                      <span style={{
                        fontSize: '.7rem', fontWeight: 700, color: 'var(--text-3)',
                        letterSpacing: '.05em', textTransform: 'uppercase',
                      }}>
                        Featured
                      </span>
                    )}
                  </div>
                  <span style={{ color: 'var(--text-3)', fontSize: '.78rem', fontWeight: 600 }}>★ {p.stars}</span>
                </div>

                <h3>{p.name}</h3>
                <p style={{ marginTop: '.65rem', color: 'var(--text-2)', lineHeight: 1.7, fontSize: '.92rem' }}>
                  {p.description}
                </p>
              </div>

              {/* Stack pills */}
              <ul className="project-stack" aria-label={`${p.name} tech stack`}>
                {p.techStack.map(t => <li key={t}>{t}</li>)}
              </ul>

              {/* Footer */}
              <div className="card-footer">
                <div style={{ display: 'flex', alignItems: 'center', gap: '.4rem' }}>
                  <span style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: '#27c93f',
                    boxShadow: '0 0 4px #27c93f',
                    display: 'inline-block', flexShrink: 0,
                  }} />
                  <p>Last commit: {p.lastCommit}</p>
                </div>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <a href={`https://github.com/${p.githubRepo}`} target="_blank" rel="noreferrer">
                    <span>View on GitHub</span>
                    <span aria-hidden="true"> ↗</span>
                  </a>
                  {p.liveUrl && (
                    <a href={p.liveUrl} target="_blank" rel="noreferrer">
                      <span>Live demo</span>
                      <span aria-hidden="true"> ↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', paddingTop: '.5rem' }}>
          <a
            href={`https://github.com/${projects[0].githubRepo.split('/')[0]}`}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
            style={{ display: 'inline-flex' }}
          >
            View all repositories ↗
          </a>
        </div>

      </div>
    </section>
  );
}
