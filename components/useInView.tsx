import { useEffect, useRef, useState } from 'react';

export default function useInView(threshold = 0.15) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    obs.observe(node);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView } as const;
}
