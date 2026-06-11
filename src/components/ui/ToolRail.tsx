'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import { track } from '@/lib/analytics';

const TOOLS = [
  { delay: 1 as const, bg: 'linear-gradient(160deg,#3A322B,#1A1714)', img: '/toolkit/tex-disem.jpg', eyb: 'Alat 01', title: 'Dišem', body: 'Vođeno disanje koje smiri telo za jedan minut.' },
  { delay: 2 as const, bg: 'linear-gradient(160deg,#4E93CE,#235C8E)', img: '/toolkit/tex-voda.jpg', eyb: 'Alat 02', title: 'Pijem vodu', body: 'Čaša vode i kratak ritual koji prekida automatsku naviku.' },
  { delay: 3 as const, bg: 'linear-gradient(160deg,#F0701F,#C24A1A)', img: '/toolkit/tex-razlozi.jpg', eyb: 'Alat 03', title: 'Moji razlozi', body: 'Tvoje reči iz dana kada si bio odlučan, vraćene kad zatreba.' },
  { delay: 1 as const, bg: 'linear-gradient(160deg,#4E9A5E,#1A3A20)', img: '/toolkit/tex-setam.jpg', eyb: 'Alat 04', title: 'Šetam', body: 'Kratak pokret menja stanje tela i izvlači te iz trenutka.' },
  { delay: 2 as const, bg: 'linear-gradient(160deg,#4B4B85,#1C1B35)', img: '/toolkit/tex-posmatram.jpg', eyb: 'Alat 05', title: 'Odlažem', body: 'Ne moraš da kažeš „nikad“. Samo „ne narednih pet minuta“.' },
  { delay: 3 as const, bg: 'linear-gradient(160deg,#8166C8,#2D1F5E)', img: '/toolkit/tex-igram.jpg', eyb: 'Alat 06', title: 'Beležim', body: 'Zabeleži šta je izazvalo poriv. Sledeći put ga prepoznaješ ranije.' },
];

export default function ToolRail() {
  const railRef = useRef<HTMLDivElement>(null);
  const viewed = useRef(false);

  function go(dir: number) {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector<HTMLElement>('.tslide');
    const step = card ? card.offsetWidth + 20 : 320;
    rail.scrollBy({ left: dir * step, behavior: 'smooth' });
    if (!viewed.current) {
      viewed.current = true;
      track.toolViewed();
    }
  }

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const onScroll = () => {
      if (!viewed.current) {
        viewed.current = true;
        track.toolViewed();
      }
    };
    rail.addEventListener('scroll', onScroll, { passive: true, once: true });
    return () => rail.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className="tool-rail" id="toolRail" ref={railRef}>
        {TOOLS.map((t) => (
          <Reveal key={t.title} className="tslide" delay={t.delay} style={{ background: t.bg }}>
            <Image className="ph" src={t.img} alt="" width={372} height={500} loading="lazy" aria-hidden="true" />
            <div className="scrim" />
            <div className="eyb">{t.eyb}</div>
            <h3>{t.title}</h3>
            <p>{t.body}</p>
          </Reveal>
        ))}
      </div>
      <div className="rail-nav">
        <button aria-label="Prethodni" onClick={() => go(-1)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </button>
        <button aria-label="Sledeći" onClick={() => go(1)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </>
  );
}
