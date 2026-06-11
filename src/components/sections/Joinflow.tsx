import Reveal from '@/components/ui/Reveal';
import QuizLink from '@/components/ui/QuizLink';

const STEPS = [
  { n: 1, delay: 1 as const, h: 'Uđeš na Early Access listu', p: 'Ostaviš email i rezervišeš mesto među prvima koji će dobiti pristup.' },
  { n: 2, delay: 2 as const, h: 'Dobijaš besplatni kviz', p: 'Prvi korak je kratak upitnik koji ti pokazuje šta te najviše vraća cigareti.' },
  { n: 3, delay: 3 as const, h: 'Dobijaš poziv kad beta bude spremna', p: 'Javljamo ti se kada Iskra bude dostupna za prve korisnike u Srbiji — uz najpovoljniju početnu ponudu.' },
];

export default function Joinflow() {
  return (
    <section className="section joinflow has-mtn" id="lista" aria-label="Kada se prijaviš">
      <div className="mtn mtn-o" />
      <div className="wrap">
        <Reveal className="center" trackSection="joinflow">
          <span className="eyebrow">Kada se prijaviš</span>
          <h2 className="h-sec" style={{ marginTop: 20 }}>
            Bez pritiska.
            <br />
            Samo prvi red kada Iskra bude spremna.
          </h2>
        </Reveal>
        <div className="jf-steps">
          {STEPS.map((s) => (
            <Reveal key={s.n} className="jf-step" delay={s.delay}>
              <div className="jf-num">{s.n}</div>
              <h3>{s.h}</h3>
              <p>{s.p}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="jf-trust">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9A938B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="11" width="18" height="10" rx="2" />
            <path d="M7 11V8a5 5 0 0 1 10 0v3" />
          </svg>
          Bez spama. Bez plaćanja unapred. Samo obaveštenje kada Iskra bude spremna.
        </Reveal>
        <Reveal className="jf-cta" delay={1}>
          <a href="#cta" className="btn btn-primary">
            Uđi na listu
          </a>
          <QuizLink className="link" location="joinflow">
            Prvo uradi kviz{' '}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9530F" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </QuizLink>
        </Reveal>
      </div>
    </section>
  );
}
