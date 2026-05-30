'use client';

import { experience } from '@/app/data/portfolio';

export default function ExperienceSection() {
  return (
    <section id="experience" className="section section-compact" aria-labelledby="experience-title">
      <div className="container section-stack">

        <div className="section-label">
          <h2 id="experience-title">Experience</h2>
        </div>

        <article className="exp-timeline">
          {experience.map((exp, i) => {
            return (
              <div
                key={i}
                className="exp-timeline fade-up"
                style={{ marginBlockStart: i > 0 ? '1.25rem' : undefined, animationDelay: `${i * 110}ms` }}
              >
                <div className="exp-card">
                  <div className="experience-main">
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, lineHeight: 1.3 }}>
                      {exp.title}
                    </h3>
                    <p className="exp-org">{exp.org}</p>
                    <p className="exp-meta">{exp.period} &nbsp;·&nbsp; {exp.location}</p>
                    <ul className="exp-bullets">
                      {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                    </ul>
                  </div>

                  <aside className="exp-stack" aria-label="Tech Stack">
                    <p className="exp-stack-title">Tech Stack</p>
                    <ul className="exp-stack-list">
                      {exp.tech.map(t => <li key={t}>{t}</li>)}
                    </ul>
                  </aside>
                </div>
              </div>
            );
          })}
        </article>

      </div>
    </section>
  );
}
