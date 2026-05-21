'use client';

import { useRef, useState, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  href?: string;
  onClick?: () => void;
  strength?: number;
  target?: string;
  rel?: string;
}

export default function MagneticButton({
  children, className = '', style = {}, href, onClick,
  strength = 0.35, target, rel,
}: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    const el = wrapperRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width  / 2;
    const cy = rect.top  + rect.height / 2;
    setPos({
      x: (e.clientX - cx) * strength,
      y: (e.clientY - cy) * strength,
    });
  };

  const handleLeave = () => setPos({ x: 0, y: 0 });

  const innerStyle: React.CSSProperties = {
    transform: `translate(${pos.x}px, ${pos.y}px)`,
    transition: pos.x === 0 && pos.y === 0
      ? 'transform 0.5s cubic-bezier(0.23,1,0.32,1)'
      : 'transform 0.1s ease',
  };

  const inner = href ? (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`mag-btn ${className}`}
      style={{ ...innerStyle, ...style }}
      onClick={onClick}
    >
      {children}
    </a>
  ) : (
    <button
      type="button"
      className={`mag-btn ${className}`}
      style={{ ...innerStyle, ...style }}
      onClick={onClick}
    >
      {children}
    </button>
  );

  return (
    <div
      ref={wrapperRef}
      style={{ display: 'inline-flex' }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {inner}
    </div>
  );
}
