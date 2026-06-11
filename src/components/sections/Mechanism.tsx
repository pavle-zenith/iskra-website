import Reveal from '@/components/ui/Reveal';
import QuizLink from '@/components/ui/QuizLink';

const CARDS = [
  { delay: 1 as const, ph: 'Pre poriva', h: 'Iskra te priprema', p: 'Zna tvoje okidače i unapred te naoruža planom za trenutke u kojima obično popustiš.' },
  { delay: 2 as const, ph: 'Tokom poriva', h: 'Provede te kroz najteže', p: 'Dobijaš alat od 3–5 minuta — disanje, vodu, šetnju — taman koliko traje poriv. I prođe.' },
  { delay: 3 as const, ph: 'Posle poriva', h: 'Vraća te bez krivice', p: 'Zabeležiš šta se desilo i nastaviš dalje. Bez osude — jer jedan trenutak ne poništava napredak.' },
];

export default function Mechanism() {
  return (
    <section className="section mech" id="drugacije" aria-label="Zašto je drugačije">
      <div className="wrap center">
        <span className="eyebrow">Zašto je drugačije</span>
        <h2>
          Većina aplikacija broji dane.
          <br />
          <span className="accent">Iskra ti pomaže u trenutku kada ti se stvarno puši.</span>
        </h2>
        <p className="lead">
          Brojanje dana je korisno, ali nije dovoljno. Problem se ne dešava kad mirno gledaš
          statistiku — dešava se kad dođe poriv, stres, kafa, društvo ili ona jedna misao: „samo
          jednu“.
        </p>
        <div className="mech-row">
          {CARDS.map((c) => (
            <Reveal key={c.ph} className="mech-card" delay={c.delay}>
              <div className="pulse" />
              <div className="ph">{c.ph}</div>
              <h3>{c.h}</h3>
              <p>{c.p}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mech-cta">
          <QuizLink className="btn btn-primary" location="mechanism">
            Uradi besplatni kviz
          </QuizLink>
        </Reveal>
      </div>
    </section>
  );
}
