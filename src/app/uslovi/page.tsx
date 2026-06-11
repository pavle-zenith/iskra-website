import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Uslovi korišćenja',
  description: 'Uslovi korišćenja sajta i aplikacije Iskra.',
  robots: { index: true, follow: true },
};

export default function UsloviPage() {
  return (
    <main className="wrap" style={{ maxWidth: 760, padding: '140px 28px 96px' }}>
      <Link href="/" style={{ color: 'var(--ember-deep)', fontWeight: 700, fontSize: 15 }}>
        ← Nazad na početnu
      </Link>
      <h1 style={{ fontSize: 'clamp(30px,5vw,46px)', margin: '24px 0 8px' }}>Uslovi korišćenja</h1>
      <p style={{ color: 'var(--faint)', marginBottom: 32 }}>Poslednje ažuriranje: jun 2026.</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 22, color: 'var(--muted)', fontSize: 16, lineHeight: 1.7 }}>
        <p>
          Korišćenjem sajta iskraclub.com prihvataš ove uslove. Iskra je trenutno u pred-lansiranju i
          omogućava prijavu na Early Access listu čekanja.
        </p>
        <section>
          <h2 style={{ color: 'var(--ink)', fontSize: 20, marginBottom: 10 }}>Usluga</h2>
          <p>
            Iskra je aplikacija za podršku pri prestanku pušenja. Iskra nije medicinska usluga niti
            zamena za profesionalnu medicinsku pomoć. Za zdravstvena pitanja posavetuj se sa lekarom.
          </p>
        </section>
        <section>
          <h2 style={{ color: 'var(--ink)', fontSize: 20, marginBottom: 10 }}>Lista čekanja</h2>
          <p>
            Prijava na listu čekanja je besplatna i bez obaveze. Cena aplikacije još nije javno
            objavljena; Early Access korisnici dobijaju početnu ponudu pre javnog lansiranja.
          </p>
        </section>
        <section>
          <h2 style={{ color: 'var(--ink)', fontSize: 20, marginBottom: 10 }}>Kontakt</h2>
          <p>
            Za pitanja piši na{' '}
            <a href="mailto:hello@iskraclub.com" style={{ color: 'var(--ember-deep)', fontWeight: 600 }}>
              hello@iskraclub.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
