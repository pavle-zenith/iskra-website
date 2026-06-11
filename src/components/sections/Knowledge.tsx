import Reveal from '@/components/ui/Reveal';
import KnowledgeSlider from '@/components/ui/KnowledgeSlider';
import { QUIZ_URL } from '@/lib/constants';

export default function Knowledge() {
  return (
    <section className="section" id="saznaj" aria-label="Saznaj — baza znanja">
      <div className="wrap">
        <Reveal className="center" trackSection="knowledge">
          <span className="eyebrow">Saznaj</span>
          <h2 className="h-sec" style={{ marginTop: 20 }}>
            Razumeš zašto,
            <br />
            ne samo kako
          </h2>
          <p className="lead" style={{ maxWidth: 560, margin: '18px auto 0' }}>
            Kratki, jasni tekstovi o navici, porivima i oporavku — da znaš šta se dešava u tebi i
            zašto prolazi.
          </p>
        </Reveal>
        <KnowledgeSlider />
        <div className="center" style={{ marginTop: 34 }}>
          <a href={QUIZ_URL} className="btn btn-ghost">
            Iskra Blog{' '}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
