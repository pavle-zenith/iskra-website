import Image from 'next/image';
import WaitlistForm from '@/components/ui/WaitlistForm';
import StoreBadges from '@/components/ui/StoreBadges';
import CountUp from '@/components/ui/CountUp';
import { WAITLIST_BASE_COUNT } from '@/lib/constants';

export default function Hero() {
  return (
    <section className="section hero" id="top" aria-label="Iskra — prestani da pušiš">
      <div className="hero-bg" />
      <div className="mtn mtn-o" />
      <div className="hero-visual">
        <div className="hero-visual-bg" />
        <Image
          className="hero-phone"
          src="/mockups/home.png"
          alt="Iskra aplikacija — početni ekran"
          width={296}
          height={560}
          priority
        />
      </div>
      <div className="wrap hero-2col">
        <div className="hero-copy">
          <span className="eyebrow">Uskoro za Srbiju</span>
          <h1 style={{ marginTop: 18 }}>
            Prestani da pušiš.
            <br />
            <span className="accent" style={{ fontWeight: 600 }}>
              Ovaj put zaista.
            </span>
          </h1>
          <p className="lead">
            Iskra ti pomaže baš u trenutku kada ti se zapali. Dan po dan, poriv po poriv, bez
            osuđivanja.
          </p>
          <div className="hero-form-wrap" style={{ width: '100%', maxWidth: 460 }}>
            <WaitlistForm location="hero" />
          </div>
          <StoreBadges />
          <div className="proof">
            <div className="p">
              <b>
                <CountUp end={WAITLIST_BASE_COUNT} />+
              </b>
              <span>na listi čekanja</span>
            </div>
            <div className="p">
              <b>100%</b>
              <span>za Srbiju</span>
            </div>
            <div className="p">
              <b>0</b>
              <span>osuđivanja</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
