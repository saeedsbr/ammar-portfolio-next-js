 'use client';

import { personal } from '@/app/data/portfolio';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="section section-banded"
      aria-labelledby="contact-title"
      style={{ paddingBlock: '4.5rem 3.5rem' }}
    >
      <div className="container" style={{ display: 'grid', gap: '1.5rem', textAlign: 'center' }}>

        <div className="contact-panel fade-up">
          <p className="contact-kicker">Contact</p>
          <h2 id="contact-title">
            Let&apos;s build something that holds up under real conditions.
          </h2>
          <p style={{ maxWidth: '36rem', color: 'var(--text-2)', lineHeight: 1.75, fontSize: '.95rem' }}>
            Open to internship opportunities, research collaborations, and interesting engineering
            problems. If the work is technically challenging — I&apos;m interested.
          </p>
          <a
            className="contact-email"
            href={`mailto:${personal.email}`}
          >
            {personal.email}
          </a>
        </div>

        {/* Social icons */}
        <address className="contact-icons" aria-label="Social links">
          <a
            className="contact-icon"
            href={personal.linkedin}
            aria-label="LinkedIn"
            title="LinkedIn"
            target="_blank"
            rel="noreferrer"
            style={{ fontWeight: 700, fontSize: '.88rem' }}
          >
            in
          </a>

          <a
            className="contact-icon"
            href={personal.github}
            aria-label="GitHub"
            title="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <path d="M9.25 19.25c-4 .75-4-2-5.5-2.5" />
              <path d="M14.75 21v-3.35a2.9 2.9 0 0 0-.85-2.25c2.85-.3 5.85-1.4 5.85-6.25a4.85 4.85 0 0 0-1.3-3.35 4.55 4.55 0 0 0-.1-3.3s-1.05-.3-3.35 1.25a11.5 11.5 0 0 0-6 0C6.7 2.2 5.65 2.5 5.65 2.5a4.55 4.55 0 0 0-.1 3.3 4.85 4.85 0 0 0-1.3 3.4c0 4.8 3 5.9 5.85 6.2a2.9 2.9 0 0 0-.85 2.25V21" />
            </svg>
          </a>

          <a
            className="contact-icon"
            href={personal.leetcode}
            aria-label="LeetCode"
            title="LeetCode"
            target="_blank"
            rel="noreferrer"
            style={{ fontWeight: 700, fontSize: '.75rem', letterSpacing: '.02em' }}
          >
            LC
          </a>
        </address>

      </div>
    </section>
  );
}
