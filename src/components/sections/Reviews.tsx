import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';
import CountUp from '@/components/ui/CountUp';
import Marquee from '@/components/ui/Marquee';
import { WAITLIST_BASE_COUNT } from '@/lib/constants';

export default function Reviews() {
  return (
    <section className="section reviews-section" aria-label="Reakcije iz beta verzije">
      <Reveal className="rev-head">
        <div className="rev-mark">
          <Image src="/brand/iskra-flame-white.png" alt="" width={62} height={62} aria-hidden="true" />
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
