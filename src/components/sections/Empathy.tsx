import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';

function MarkIcon() {
  return (
    <span className="mk">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#BBB4AB" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
        <rect x="3" y="10" width="13" height="4" rx="1.2" />
        <line x1="3.5" y1="6" x2="19" y2="17.5" />
      </svg>
    </span>
  );
}

export default function Empathy() {
  return (
    <Reveal
      as="section"
      className="section empathy"
      trackSection="empathy"
      ariaLabel="Razumemo — prestanak je težak"
    >
      <div className="mtn mtn-o" />
      <div className="wrap">
        <div className="emp-grid">
          <div className="emp-head">
            <span className="eyebrow">Razumemo</span>
            <h2 style={{ marginTop: 16 }}>
              Prestanak je težak.
              <br />
              <span className="big">Ali nisi sam/a u tome.</span>
            </h2>
            <p>
              Nikotin nije jedini problem. Problem je jutarnja kafa, pauza na poslu, kafana, stres,
              dosada — i ona misao: „samo jednu“.
            </p>
            <p className="cite">
              Većina ljudi ne padne zato što ne zna da treba da prestane. Padne kada poriv postane
              jači od plana. Iskra je napravljena baš za te trenutke.
            </p>
          </div>

          <div className="emp-cell emp-stat">
            <div className="lab">Koliko pokušaja?</div>
            <div className="emp-marks">
              {Array.from({ length: 9 }).map((_, i) => (
                <MarkIcon key={i} />
              ))}
              <span className="mk win">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.07-2.14-.22-4.05 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.15.43-2.29 1-3a2.5 2.5 0 0 0 2.5 2.5Z" />
                </svg>
              </span>
            </div>
            <div className="num">
              <em>8–10</em> puta
            </div>
            <div className="sub">
              toliko prosečan pušač pokuša pre nego što trajno prestane. <b>Svaki pokušaj te uči.</b>
            </div>
          </div>

          <div className="emp-cell emp-gauge">
            <div className="gauge">
              <svg viewBox="0 0 200 116">
                <defs>
                  <linearGradient id="gg" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#F0701F" />
                    <stop offset="1" stopColor="#E8621A" />
                  </linearGradient>
                </defs>
                <path d="M14 100 A 86 86 0 0 1 186 100" fill="none" stroke="#F0EDE6" strokeWidth="16" strokeLinecap="round" />
                <path className="arc" d="M14 100 A 86 86 0 0 1 186 100" fill="none" stroke="url(#gg)" strokeWidth="16" strokeLinecap="round" />
              </svg>
              <div className="cap">
                <span className="n">3–5</span> <span className="u">MIN</span>
              </div>
            </div>
            <div className="t">Toliko često traje najjači talas</div>
            <div className="d">Ne moraš da pobediš ceo dan. Samo narednih nekoliko minuta.</div>
          </div>

          <div className="emp-cell emp-photo">
            <Image className="photo-fill" src="/photos/empathy-portrait.jpg" alt="Beta korisnica Iskre" width={600} height={800} />
            <div className="scrim" />
            <div className="qm">“</div>
            <div className="q">
              <p>Mislila sam da ne mogu. Iskra me drži kad je najteže.</p>
              <span>Marija, 34 — beta korisnica</span>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
