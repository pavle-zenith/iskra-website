import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import CountUp from '@/components/ui/CountUp';
import Marquee from '@/components/ui/Marquee';
import { WAITLIST_BASE_COUNT } from '@/lib/constants';

export default function Reviews() {
  return (
    <section className="section" style={{ background: 'var(--bg-cool)' }} aria-label="Reakcije iz beta verzije">
      <Reveal className="rev-head">
        <div className="rev-mark">
          <Image src="/brand/iskra-logo-sm.png" alt="" width={34} height={34} aria-hidden="true" />
        </div>
        <div className="rev-bignum">
          <CountUp end={WAITLIST_BASE_COUNT} />+
        </div>
        <div className="rev-bigcap">ljudi već čeka pristup Iskri</div>
        <div className="rev-note">
          Prvi korisnici ulaze čim beta bude spremna. Primeri reakcija iz beta verzije — zamenićemo
          ih pravim ocenama nakon lansiranja.
        </div>
      </Reveal>
      <Reveal delay={1}>
        <Marquee />
      </Reveal>
    </section>
  );
}
