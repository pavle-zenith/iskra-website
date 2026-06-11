import Reveal from '@/components/ui/Reveal';

const CARDS = [
  {
    span: 'span3',
    delay: 1 as const,
    title: 'Pokušavao si ranije',
    body: 'Nije problem što si pao. Problem je što si svaki put ostao bez plana kad je postalo teško.',
    icon: (
      <>
        <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
        <path d="M21 3v5h-5" />
        <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
        <path d="M3 21v-5h5" />
      </>
    ),
  },
  {
    span: 'span3',
    delay: 2 as const,
    title: 'Znaš svoje okidače',
    body: 'Kafa, pauza, kafana, stres, posle jela. Cigareta se retko pojavi sama od sebe.',
    icon: (
      <>
        <path d="M4 9h13v4a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Z" />
        <path d="M17 10h2.2a2.3 2.3 0 0 1 0 4.6H17" />
        <path d="M7 3.5c0 1-.8 1.3-.8 2.3M11 3.5c0 1-.8 1.3-.8 2.3" />
      </>
    ),
  },
  {
    span: 'span2',
    delay: 1 as const,
    title: 'Ne želiš predavanja',
    body: 'Bez plašenja i moralizovanja. Samo konkretna pomoć kad ti se zapali.',
    icon: (
      <>
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
        <path d="M3 3l18 18" />
      </>
    ),
  },
  {
    span: 'span2',
    delay: 2 as const,
    title: 'Hoćeš da vidiš napredak',
    body: 'Dani bez cigarete, novac i cigarete koje nisi zapalio — sve na jednom mestu.',
    icon: (
      <>
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M17 7h4v4" />
      </>
    ),
  },
  {
    span: 'span2',
    delay: 3 as const,
    title: 'Znaš da motivacija ne traje',
    body: 'Zato Iskra računa na male korake svaki dan, ne samo na motivaciju.',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  },
];

export default function Audience() {
  return (
    <section className="section audience" id="zakoga" aria-label="Za koga je Iskra">
      <div className="wrap">
        <Reveal className="aud-copy" trackSection="audience">
          <span className="eyebrow">Za tebe je ako</span>
          <h2>
            Iskra je za ljude koji stvarno žele da prestanu — ali znaju da nije dovoljno samo
            „odlučiti“.
          </h2>
          <p className="lead">Ako se makar u jednom od ovih prepoznaješ, na pravom si mestu.</p>
        </Reveal>
        <div className="aud-bento">
          {CARDS.map((c) => (
            <Reveal key={c.title} className={`aud-card ${c.span}`} delay={c.delay}>
              <div className="aud-body">
                <span className="aud-ic">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E8621A" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {c.icon}
                  </svg>
                </span>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
