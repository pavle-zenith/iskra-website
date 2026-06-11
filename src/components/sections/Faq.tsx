'use client';

import { useState } from 'react';
import Reveal from '@/components/ui/Reveal';
import { FAQ_ITEMS } from '@/lib/sections-data';
import { track } from '@/lib/analytics';

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  function toggle(i: number, question: string) {
    setOpen((cur) => {
      const next = cur === i ? null : i;
      if (next === i) track.faqOpened(question);
      return next;
    });
  }

  return (
    <section className="section" id="pitanja" aria-label="Česta pitanja">
      <div className="wrap">
        <Reveal className="center" trackSection="faq">
          <span className="eyebrow">Česta pitanja</span>
          <h2 className="h-sec" style={{ marginTop: 20 }}>
            Sve što te zanima
          </h2>
        </Reveal>
        <Reveal className="faq-list" delay={1}>
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div className={`faq${isOpen ? ' open' : ''}`} key={item.q}>
                <button onClick={() => toggle(i, item.q)} aria-expanded={isOpen}>
                  {item.q}
                  <span className="ic" aria-hidden="true" />
                </button>
                <div className="a" style={{ maxHeight: isOpen ? 600 : 0 }}>
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
