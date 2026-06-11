import Reveal from '@/components/ui/Reveal';
import CountUp from '@/components/ui/CountUp';
import { ANNUAL_SAVINGS_RSD } from '@/lib/constants';

export default function StatBand() {
  return (
    <section className="section" aria-label="Godišnja ušteda">
      <div className="wrap">
        <Reveal className="statband">
          <div className="tex" />
          <div className="inner">
            <div className="num">
              <CountUp end={ANNUAL_SAVINGS_RSD} />
            </div>
            <div className="cap">dinara nazad u tvom džepu — svake godine</div>
            <p className="sub">
              Toliko prosečan pušač u Srbiji može da potroši na cigarete za godinu dana. To je novac
              koji može da ostane tebi.
            </p>
            <a href="#cta" className="btn">
              Hoću to nazad
            </a>
            <p style={{ fontSize: 12, color: 'rgba(255,255,255,.6)', marginTop: 18 }}>
              Računica je okvirna i zavisi od broja cigareta i cene paklice.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
