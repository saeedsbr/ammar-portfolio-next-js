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
  const ref = useRef<HTMLElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
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

  const common = {
    className: `mag-btn ${className}`,
    style: {
      transform: `translate(${pos.x}px, ${pos.y}px)`,
      transition: pos.x === 0 && pos.y === 0
        ? 'transform 0.5s cubic-bezier(0.23,1,0.32,1)'
        : 'transform 0.1s ease',
      ...style,
    },
    onMouseMove:  handleMove,
    onMouseLeave: handleLeave,
    onClick,
  };

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        {...common}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type="button"
      {...common}
    >
      {children}
    </button>
  );
}
