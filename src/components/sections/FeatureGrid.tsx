import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';

const FEATURES = [
  {
    delay: 1 as const,
    bg: 'linear-gradient(180deg,#FEF0E8,#fff)',
    icBg: 'var(--ember)',
    icon: <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />,
    title: 'Za svaki poriv',
    body: 'Šest alata koji te provedu kroz tih 3–5 minuta — disanje, voda, šetnja, tvoji razlozi.',
    shot: '/mockups/water.png',
    alt: 'Poriv alati',
  },
  {
    delay: 2 as const,
    bg: 'linear-gradient(180deg,#E6F2E6,#fff)',
    icBg: 'var(--money)',
    icon: (
      <>
        <circle cx="8" cy="8" r="6" />
        <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
        <path d="M7 6h1v4" />
      </>
    ),
    title: 'Vidiš svaki dinar i dan',
    body: 'Ušteđeni novac, odbijene cigarete i vraćeno vreme — sve raste pred tobom, svaki dan.',
    shot: '/mockups/money.png',
    alt: 'Uštedine',
  },
  {
    delay: 3 as const,
    bg: 'linear-gradient(180deg,#F0EDF8,#fff)',
    icBg: 'var(--purple)',
    icon: <path d="M4 13 Q 8 7 12 13 Q 16 7 20 13" />,
    title: 'Bez osude',
    body: 'Pad je deo puta. Beležimo sve bez krivice i nežno te vraćamo tvojim razlozima.',
    shot: '/mockups/home.png',
    alt: 'Bez osude',
  },
  {
    delay: 1 as const,
    bg: 'linear-gradient(180deg,#FCEDF2,#fff)',
    icBg: 'var(--rose)',
    icon: (
      <>
        <path d="M7 4h10v4a5 5 0 0 1-10 0V4Z" />
        <path d="M7 6H4.5a2.5 2.5 0 0 0 2.5 4" />
        <path d="M17 6h2.5a2.5 2.5 0 0 1-2.5 4" />
        <path d="M9 20h6M10 16.5V20M14 16.5V20" />
      </>
    ),
    title: 'Slavi svaku prekretnicu',
    body: 'Desetine zdravstvenih i ličnih ciljeva koji se otključavaju kako napreduješ.',
    shot: '/mockups/milestoni.png',
    alt: 'Milestoni',
  },
  {
    delay: 2 as const,
    bg: 'linear-gradient(180deg,#E6F4F1,#fff)',
    icBg: 'var(--teal)',
    icon: <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5Z" />,
    title: 'Razumeš zašto, ne samo kako',
    body: 'Kratki tekstovi o navici, porivima i oporavku — jasno i na srpskom.',
    shot: '/mockups/knowledge.png',
    alt: 'Baza znanja',
  },
  {
    delay: 3 as const,
    bg: 'linear-gradient(180deg,#EAF2FA,#fff)',
    icBg: 'var(--sky)',
    icon: (
      <>
        <path d="M9 4h6a2 2 0 0 1 2 2v0h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1v0a2 2 0 0 1 2-2Z" />
        <path d="M9 4a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2" />
        <path d="M8 12l2 2 4-4" />
      </>
    ),
    title: 'Plan skrojen za tebe',
    body: 'Kratak upitnik napravi plan baš za tvoje navike, troškove i lične razloge.',
    shot: '/mockups/onboarding.png',
    alt: 'Personalizovan plan',
  },
];

export default function FeatureGrid() {
  return (
    <section className="section" id="zasto" aria-label="Tvoj saputnik — funkcije aplikacije">
      <div className="wrap">
        <Reveal className="center" trackSection="features">
          <span className="eyebrow">Tvoj saputnik</span>
          <h2 className="h-sec" style={{ marginTop: 20 }}>
            Sve što ti treba
            <br />
            na jednom mestu
          </h2>
        </Reveal>
        <div className="feat-grid">
          {FEATURES.map((f) => (
            <Reveal key={f.title} className="featc" delay={f.delay} style={{ background: f.bg }}>
              <div className="ic" style={{ background: f.icBg }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {f.icon}
                </svg>
              </div>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
              <Image className="shot" src={f.shot} alt={f.alt} width={268} height={520} loading="lazy" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
