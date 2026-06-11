'use client';

import Image from 'next/image';
import { REVIEWS, type Review } from '@/lib/reviews-data';

function VerifiedBadge() {
  return (
    <svg className="vf" width="15" height="15" viewBox="0 0 24 24" fill="#E8621A" aria-hidden="true">
      <path d="M12 1.6l2.6 1.9 3.2-.2 1 3 2.6 1.9-1 3 1 3-2.6 1.9-1 3-3.2-.2L12 22.4l-2.6-1.9-3.2.2-1-3L2.6 15.8l1-3-1-3 2.6-1.9 1-3 3.2.2z" />
      <path d="M8 12l2.5 2.5L16 9" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Card({ r }: { r: Review }) {
  return (
    <div className="rev">
      <div className="stars" aria-label="5 od 5">
        ★★★★★
      </div>
      <p>„{r.q}“</p>
      <div className="who">
        <Image className="av" src={r.a} alt="" width={42} height={42} loading="lazy" aria-hidden="true" />
        <div>
          <div className="nm">
            {r.n} <VerifiedBadge />
          </div>
          <span>{r.c}</span>
        </div>
      </div>
    </div>
  );
}

export default function Marquee() {
  const row1 = REVIEWS.slice(0, 4);
  const row2 = REVIEWS.slice(4);
  // Duplicate 2x so translateX(-50%) lands exactly on the loop seam.
  const dup = (arr: Review[]) => [...arr, ...arr];

  return (
    <div className="marquee">
      <div className="mrow r1">
        {dup(row1).map((r, i) => (
          <Card key={`r1-${i}`} r={r} />
        ))}
      </div>
      <div className="mrow r2">
        {dup(row2).map((r, i) => (
          <Card key={`r2-${i}`} r={r} />
        ))}
      </div>
    </div>
  );
}
