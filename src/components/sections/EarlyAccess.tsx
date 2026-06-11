import Reveal from '@/components/ui/Reveal';
import QuizLink from '@/components/ui/QuizLink';

const CARDS = [
  {
    title: 'Rani pristup',
    body: 'Prvi dobijaš poziv kada beta bude spremna.',
    icon: <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />,
  },
  {
    title: 'Početna ponuda',
    body: 'Early Access korisnici dobijaju najpovoljniji pristup.',
    icon: (
      <>
        <path d="M20 12v9H4v-9" />
        <path d="M2 7h20v5H2z" />
        <path d="M12 22V7" />
        <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7Z" />
        <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7Z" />
      </>
    ),
  },
  {
    title: 'Uticaj na proizvod',
    body: 'Tvoje povratne informacije pomažu da Iskra bude bolja za ljude iz Srbije.',
    icon: (
      <>
        <path d="M12 2a10 10 0 1 0 10 10" />
        <path d="M22 4 12 14.01l-3-3" />
      </>
    ),
  },
];

export default function EarlyAccess() {
  return (
    <section className="section" id="cena" aria-label="Early Access ponuda">
      <div className="wrap">
        <Reveal className="center" trackSection="early-access">
          <span className="eyebrow">Early Access</span>
          <h2 className="h-sec" style={{ marginTop: 20 }}>
            Prvi korisnici dobijaju
            <br />
            najbolji pristup
          </h2>
          <p className="lead" style={{ maxWidth: 580, margin: '18px auto 0' }}>
            Iskra uskoro ulazi u prvu beta verziju. Ljudi sa liste čekanja prvi dobijaju poziv, rani
            pristup i početnu ponudu pre javnog lansiranja.
          </p>
        </Reveal>
        <Reveal className="ea-grid" delay={1}>
          {CARDS.map((c) => (
            <div className="ea-card" key={c.title}>
              <div className="ea-ic">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E8621A" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {c.icon}
                </svg>
              </div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </Reveal>
        <Reveal className="ea-cta">
          <a href="#cta" className="btn btn-primary">
            Uđi na listu
          </a>
          <QuizLink className="link" location="early-access">
            Uradi besplatni kviz{' '}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9530F" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </QuizLink>
        </Reveal>
      </div>
    </section>
  );
}
