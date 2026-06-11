import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Politika privatnosti',
  description: 'Kako Iskra prikuplja, koristi i štiti tvoje podatke.',
  robots: { index: true, follow: true },
};

export default function PrivatnostPage() {
  return (
    <main className="wrap" style={{ maxWidth: 760, padding: '140px 28px 96px' }}>
      <Link href="/" style={{ color: 'var(--ember-deep)', fontWeight: 700, fontSize: 15 }}>
        ← Nazad na početnu
      </Link>
      <h1 style={{ fontSize: 'clamp(30px,5vw,46px)', margin: '24px 0 8px' }}>Politika privatnosti</h1>
      <p style={{ color: 'var(--faint)', marginBottom: 32 }}>Poslednje ažuriranje: jun 2026.</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 22, color: 'var(--muted)', fontSize: 16, lineHeight: 1.7 }}>
        <p>
          Iskra poštuje tvoju privatnost. Ova politika objašnjava koje podatke prikupljamo, kako ih
          koristimo i koja su tvoja prava. Trenutno smo u pred-lansiranju i prikupljamo prijave za
          Early Access listu čekanja.
        </p>
        <section>
          <h2 style={{ color: 'var(--ink)', fontSize: 20, marginBottom: 10 }}>Koje podatke prikupljamo</h2>
          <p>
            Kada se prijaviš na listu čekanja, prikupljamo tvoju email adresu. Ako uradiš kviz,
            čuvamo i tvoje odgovore i rezultate. Prikupljamo i anonimne analitičke podatke o
            korišćenju sajta kako bismo ga poboljšali.
          </p>
        </section>
        <section>
          <h2 style={{ color: 'var(--ink)', fontSize: 20, marginBottom: 10 }}>Kako koristimo podatke</h2>
          <p>
            Email koristimo isključivo za Early Access obaveštenja i informacije o Iskri. Ne šaljemo
            spam i ne prodajemo tvoje podatke trećim stranama.
          </p>
        </section>
        <section>
          <h2 style={{ color: 'var(--ink)', fontSize: 20, marginBottom: 10 }}>Kontakt</h2>
          <p>
            Za sva pitanja u vezi sa privatnošću piši nam na{' '}
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
