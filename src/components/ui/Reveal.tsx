'use client';

import { useEffect, useRef, type ElementType, type ReactNode } from 'react';
import { track } from '@/lib/analytics';

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: 1 | 2 | 3 | 4;
  /** id passed through to the rendered element */
  id?: string;
  /** fires section_viewed once when this element first enters the viewport */
  trackSection?: string;
  style?: React.CSSProperties;
  ariaLabel?: string;
}

/**
 * Wraps content and adds `.in` to the rendered element when it scrolls into view.
 * The `.in` class is applied to THIS element (matches CSS like `.empathy.in .mk`,
 * `.chart.in .bar`), so pass the section's own className here when needed.
 */
export default function Reveal({
  children,
  as: Tag = 'div',
  className = '',
  delay,
  id,
  trackSection,
  style,
  ariaLabel,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const tracked = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add('in');
            if (trackSection && !tracked.current) {
              tracked.current = true;
              track.sectionViewed(trackSection);
            }
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [trackSection]);

  const cls = ['reveal', delay ? `d${delay}` : '', className].filter(Boolean).join(' ');

  return (
    <Tag ref={ref} id={id} className={cls} style={style} aria-label={ariaLabel}>
      {children}
    </Tag>
  );
}
