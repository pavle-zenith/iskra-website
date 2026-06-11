import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import WaitlistForm from '@/components/ui/WaitlistForm';
import QuizLink from '@/components/ui/QuizLink';
import StoreBadges from '@/components/ui/StoreBadges';

const PRODUCT_LINKS = [
  { href: '#kako', label: 'Kako radi' },
  { href: '#alati', label: 'Alati za porive' },
  { href: '#napredak', label: 'Napredak' },
  { href: '#cena', label: 'Early Access' },
];
const ISKRA_LINKS = [
  { href: '#zasto', label: 'O aplikaciji' },
  { href: '#saznaj', label: 'Baza znanja' },
  { href: '#pitanja', label: 'Česta pitanja' },
  { href: '#cta', label: 'Lista čekanja' },
];
const LEGAL_LINKS = [
  { href: '/privatnost', label: 'Privatnost' },
  { href: '/uslovi', label: 'Uslovi korišćenja' },
  { href: 'mailto:hello@iskraclub.com', label: 'Kontakt' },
];

export default function Footer() {
  return (
    <footer className="foot" id="cta">
      <div className="mtn mtn-w" />
      <div className="wrap">
        <Reveal className="foot-cta" trackSection="footer-cta">
          <span className="eyebrow">Uskoro</span>
          <h2>
            Sledeća cigareta
            <br />
            ne mora da postoji.
          </h2>
          <p>Uđi na listu čekanja i budi među prvima koji počinju put sa Iskrom.</p>
          <WaitlistForm location="footer" variant="dark" buttonClass="btn" showNote={false} />
          <QuizLink className="foot-quiz" location="footer">
            Uradi besplatni kviz →
          </QuizLink>
        </Reveal>

        <div className="foot-top">
          <div>
            <a className="brand" href="#top">
              <span className="mk">
                <Image src="/brand/iskra-logo-sm.png" alt="" width={34} height={34} aria-hidden="true" />
              </span>
              ISKRA
            </a>
            <p className="desc">
              Topla, lična aplikacija za prestanak pušenja. Napravljeno u Srbiji, za Srbiju.
            </p>
            <StoreBadges className="foot-stores" small />
          </div>
          <div>
            <h4>Proizvod</h4>
            <ul>
              {PRODUCT_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Iskra</h4>
            <ul>
              {ISKRA_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Pravno</h4>
            <ul>
              {LEGAL_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© 2026 Iskra · Napravljeno za Srbiju</span>
          <div className="socials">
            <a href="https://www.instagram.com/iskraclub_" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.9" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="#fff" stroke="none" />
              </svg>
            </a>
            <a href="https://www.tiktok.com/@iskraclub" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                <path d="M16 3c.3 2.3 1.8 4 4 4.2v3c-1.5 0-2.9-.5-4-1.3v6.3a6 6 0 1 1-6-6c.3 0 .7 0 1 .1v3.2a2.8 2.8 0 1 0 2 2.7V3h3z" />
              </svg>
            </a>
            <a href="https://www.facebook.com/iskraclub" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                <path d="M14 8h2V5h-2c-2 0-3 1.3-3 3.3V10H9v3h2v8h3v-8h2.2l.8-3H14V8.6c0-.4.3-.6.7-.6z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="foot-mark" aria-hidden="true">
          ISKRA
        </div>
      </div>
    </footer>
  );
}
