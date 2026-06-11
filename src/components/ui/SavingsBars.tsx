'use client';

import { useEffect, useRef } from 'react';

const BARS = [
  { h: '20%', v: '400', l: 'dan', peak: false },
  { h: '47%', v: '2.800', l: 'ned', peak: false },
  { h: '66%', v: '12.000', l: 'mes', peak: false },
  { h: '100%', v: '146k', l: 'god', peak: true },
];

export default function SavingsBars() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = ref.current;
    if (!wrap) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            wrap.querySelectorAll<HTMLElement>('.bar').forEach((b, i) => {
              setTimeout(() => {
                b.style.height = b.dataset.h ?? '0';
              }, i * 120);
            });
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(wrap);
    return () => io.disconnect();
  }, []);

  return (
    <div className="bbars" ref={ref}>
      {BARS.map((b) => (
        <div className={`bbar${b.peak ? ' peak' : ''}`} key={b.l}>
          <div className="bar" data-h={b.h} />
          <div className="bv">{b.v}</div>
          <div className="bl">{b.l}</div>
        </div>
      ))}
    </div>
  );
}
