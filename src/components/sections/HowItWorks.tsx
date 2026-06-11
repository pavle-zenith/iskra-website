import Reveal from '@/components/ui/Reveal';
import SavingsBars from '@/components/ui/SavingsBars';

const CHECK = (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export default function HowItWorks() {
  return (
    <section className="section has-mtn" id="kako" style={{ background: 'var(--bg-cool)' }} aria-label="Kako radi">
      <div className="mtn mtn-o" />
      <div className="wrap">
        <Reveal className="center" trackSection="how-it-works">
          <span className="eyebrow">Kako radi</span>
          <h2 className="h-sec" style={{ marginTop: 20 }}>
            Tvoj put u tri koraka
          </h2>
        </Reveal>
        <div className="bento">
          <div className="bcol">
            <Reveal className="bcell s40" delay={1}>
              <span className="bnum">1</span>
              <h3>Napravi svoj plan</h3>
              <p>Kratak kviz upozna Iskru s tobom — šta te najviše vraća cigareti.</p>
              <div className="bviz">
                <div className="plan-chips">
                  <div className="pchip sel">
                    <span className="pc-l">
                      <span className="pc-ic">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#E8621A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M4 9h13v4a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Z" />
                          <path d="M17 10h2.2a2.3 2.3 0 0 1 0 4.6H17" />
                        </svg>
                      </span>
                      Jutarnja kafa
                    </span>
                    <span className="pc-r">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#E8621A" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                  </div>
                  <div className="pchip sel">
                    <span className="pc-l">
                      <span className="pc-ic">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#E8621A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M19 16a7 7 0 1 0-14 0" />
                          <path d="M12 3v2M5 9l1.5 1M19 9l-1.5 1" />
                        </svg>
                      </span>
                      Stres na poslu
                    </span>
                    <span className="pc-r">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#E8621A" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                  </div>
                  <div className="pchip">
                    <span className="pc-l">
                      <span className="pc-ic">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#BA7517" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M5 11h12v3a5 5 0 0 1-10 0Z" />
                          <path d="M9 4v3M13 4v3" />
                        </svg>
                      </span>
                      Kafana
                    </span>
                    <span className="pc-r" />
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal className="bcell s60" delay={2}>
              <span className="bnum">3</span>
              <h3>Prebrodi svaki poriv</h3>
              <p>Pritisneš „Imam poriv“ i biraš alat koji te vodi kroz tih par minuta.</p>
              <div className="bviz">
                <div className="pring">
                  <div className="ring">
                    <svg width="104" height="104" viewBox="0 0 104 104">
                      <circle cx="52" cy="52" r="46" fill="none" stroke="#F0EDE6" strokeWidth="9" />
                      <circle className="pring-arc" cx="52" cy="52" r="46" fill="none" stroke="#E8621A" strokeWidth="9" strokeLinecap="round" strokeDasharray="289" strokeDashoffset="78" />
                    </svg>
                    <div className="rt">
                      <span className="rn">3:42</span>
                      <span className="ru">MINUTA</span>
                    </div>
                  </div>
                  <div className="ptools">
                    <div className="pt"><span className="pd" style={{ background: '#2E8B80' }} />Dišem</div>
                    <div className="pt"><span className="pd" style={{ background: '#4A8AC4' }} />Pijem vodu</div>
                    <div className="pt"><span className="pd" style={{ background: '#E8621A' }} />Moji razlozi</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="bcol">
            <Reveal className="bcell s60" delay={2}>
              <span className="bnum">2</span>
              <h3>Prati napredak</h3>
              <p>Dani bez cigarete, novac i cigarete koje nisi zapalio.</p>
              <div className="bviz">
                <SavingsBars />
              </div>
            </Reveal>
            <Reveal className="bcell s40" delay={3}>
              <span className="bnum">★</span>
              <h3>Slaviš svaku prekretnicu</h3>
              <p>Dan 1. Prva nedelja. 30 dana. Male pobede koje mnogo znače kada ih vidiš svaki dan.</p>
              <div className="bviz">
                <div className="wk">
                  {['PON', 'UTO', 'SRE', 'ČET', 'PET'].map((d) => (
                    <div className="d" key={d}>
                      <span className="dl">{d}</span>
                      <span className="dc on">{CHECK}</span>
                    </div>
                  ))}
                  <div className="d">
                    <span className="dl">SUB</span>
                    <span className="dc today">?</span>
                  </div>
                  <div className="d">
                    <span className="dl">NED</span>
                    <span className="dc" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
