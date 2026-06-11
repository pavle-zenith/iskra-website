'use client';

import { useEffect, useRef, useState } from 'react';

function fmt(n: number) {
  return Math.round(n).toLocaleString('sr-RS').replace(/,/g, '.');
}

interface CountUpProps {
  end: number;
  duration?: number;
  className?: string;
}

/**
 * Renders the final formatted value immediately (SSR-friendly, in the HTML),
 * then re-animates from 0 on first scroll into view. Respects reduced motion.
 */
export default function CountUp({ end, duration = 1500, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(() => fmt(end));
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !done.current) {
            done.current = true;
            const t0 = performance.now();
            const tick = (t: number) => {
              const p = Math.min(1, (t - t0) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setDisplay(fmt(end * eased));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
