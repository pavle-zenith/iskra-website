'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { KNOWLEDGE_ARTICLES } from '@/lib/sections-data';

const ARROW = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function KnowledgeSlider() {
  const [active, setActive] = useState(0);
  const [progKey, setProgKey] = useState(0); // bump to restart the kfill animation
  const railRef = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const started = useRef(false);

  function show(i: number) {
    setActive(i);
    setProgKey((k) => k + 1);
  }

  function startAuto() {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => {
      setActive((a) => {
        setProgKey((k) => k + 1);
        return (a + 1) % KNOWLEDGE_ARTICLES.length;
      });
    }, 6000);
  }

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            show(0);
            startAuto();
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(rail);
    return () => {
      io.disconnect();
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  return (
    <div className="krail" id="krail" ref={railRef}>
      {KNOWLEDGE_ARTICLES.map((art, i) => (
        <article
          key={art.title}
          className={`kcard${i === active ? ' active' : ''}`}
          onMouseEnter={() => {
            show(i);
            startAuto();
          }}
          onClick={() => {
            show(i);
            startAuto();
          }}
        >
          <Image className="kphoto" src={art.photo} alt={art.title} width={600} height={440} loading="lazy" />
          <div className="scrim" />
          <div className="tag">{art.tag}</div>
          <div className="kbody">
            <h3>{art.title}</h3>
            <div className="krow">
              <span className="read">Pročitaj {ARROW}</span>
              <span className="min">{art.min}</span>
            </div>
            <div className="prog">
              <i key={i === active ? progKey : `idle-${i}`} />
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
