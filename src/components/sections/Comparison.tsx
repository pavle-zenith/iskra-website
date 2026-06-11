import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';

const YES = (
  <span className="dot-y">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  </span>
);
const NO = (
  <span className="dot-n">
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.4)" strokeWidth="3" strokeLinecap="round" aria-hidden="true">
      <path d="M6 12h12" />
    </svg>
  </span>
);
const PARTIAL = (
  <span className="dot-p">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.7)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  </span>
);

// rows: [feature icon, label, iskra, wellness apps, advice/videos]
const ROWS: { icon: React.ReactNode; label: string; a: 'yes'; b: 'no' | 'partial'; c: 'no' | 'partial' }[] = [
  {
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="12" cy="12" r="0.6" fill="currentColor" />
      </>
    ),
    label: 'Posvećeno baš prestanku pušenja',
    a: 'yes',
    b: 'no',
    c: 'no',
  },
  {
    icon: <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />,
    label: 'Alati za trenutni poriv',
    a: 'yes',
    b: 'no',
    c: 'no',
  },
  {
    icon: (
      <>
        <circle cx="8" cy="8" r="6" />
        <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
        <path d="M7 6h1v4" />
      </>
    ),
    label: 'Praćenje ušteđenog novca i zdravlja',
    a: 'yes',
    b: 'no',
    c: 'no',
  },
  {
    icon: <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5Z" />,
    label: 'Baza znanja na srpskom',
    a: 'yes',
    b: 'no',
    c: 'partial',
  },
  {
    icon: <path d="M4 13 Q 8 7 12 13 Q 16 7 20 13" />,
    label: 'Bez osude kada popustiš',
    a: 'yes',
    b: 'no',
    c: 'no',
  },
  {
    icon: (
      <>
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </>
    ),
    label: 'Plan skrojen baš za tebe',
    a: 'yes',
    b: 'partial',
    c: 'no',
  },
];

function mark(kind: 'yes' | 'no' | 'partial') {
  return kind === 'yes' ? YES : kind === 'partial' ? PARTIAL : NO;
}

export default function Comparison() {
  return (
    <section className="section compare" aria-label="Uporedi pristupe">
      <div className="mtn mtn-w" />
      <div className="wrap">
        <Reveal className="center" trackSection="comparison">
          <span className="eyebrow">Uporedi pristupe</span>
          <h2 className="h-sec" style={{ marginTop: 20 }}>
            Iskra naspram ostalih
          </h2>
        </Reveal>
        <Reveal className="ctable" delay={1}>
          <div className="ch ch-feat" />
          <div className="ch hl">
            <div className="logos">
              <span className="mk">
                <Image src="/brand/iskra-logo-sm.png" alt="" width={34} height={34} aria-hidden="true" />
              </span>
            </div>
            <span className="nm">Iskra</span>
          </div>
          <div className="ch other">
            <div className="logos">
              <div className="gen">
                <span className="a">🧘</span>
                <span className="b">📿</span>
              </div>
            </div>
            <span className="nm">Opšte „wellness“ aplikacije</span>
          </div>
          <div className="ch other">
            <div className="logos">
              <div className="dot-p" style={{ width: 54, height: 54 }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.6)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 18V5l12-2v13" />
                  <circle cx="6" cy="18" r="3" />
                  <circle cx="18" cy="16" r="3" />
                </svg>
              </div>
            </div>
            <span className="nm">Saveti i video snimci</span>
          </div>

          {ROWS.map((row) => (
            <div className="crow" key={row.label}>
              <div className="ccell feat">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {row.icon}
                </svg>{' '}
                {row.label}
              </div>
              <div className="ccell mark col-hl">{mark(row.a)}</div>
              <div className="ccell mark">{mark(row.b)}</div>
              <div className="ccell mark">{mark(row.c)}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
