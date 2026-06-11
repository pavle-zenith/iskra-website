import Reveal from '@/components/ui/Reveal';
import { TRUST_LOGOS } from '@/lib/sections-data';

export default function TrustBar() {
  return (
    <section className="trust" aria-label="Pristup zasnovan na istraživanjima">
      <div className="wrap">
        <Reveal as="p" className="tt">
          Pristup zasnovan na javno dostupnim{' '}
          <b>smernicama i istraživanjima o prestanku pušenja</b>
        </Reveal>
        <Reveal className="trust-row" delay={1}>
          {TRUST_LOGOS.map((logo) => (
            <span key={logo.label} className={logo.serif ? 'serif' : undefined}>
              {logo.label}
            </span>
          ))}
        </Reveal>
        <Reveal as="p" className="trust-dis" delay={2}>
          Institucije nisu povezane sa Iskrom. Koristimo javno dostupne smernice i istraživanja kao
          osnovu za edukativni pristup.
        </Reveal>
      </div>
    </section>
  );
}
