import Reveal from '@/components/ui/Reveal';
import ToolRail from '@/components/ui/ToolRail';

export default function Toolkit() {
  return (
    <section className="section toolkit" id="alati" aria-label="Poriv mod — alati">
      <div className="mtn mtn-w" />
      <div className="wrap">
        <Reveal className="center" trackSection="toolkit">
          <span className="eyebrow">Poriv mod</span>
          <h2 className="h-sec" style={{ marginTop: 20 }}>
            Šest alata za trenutak
            <br />
            kad ti se najviše puši
          </h2>
          <p className="lead" style={{ maxWidth: 600, margin: '18px auto 0' }}>
            Pritisneš „Imam poriv“ i biraš šta ti tog trenutka pomaže. Svaki alat te vodi kroz tih
            3–5 minuta dok poriv ne prođe.
          </p>
        </Reveal>
        <ToolRail />
        <p className="tool-more">Svaki poriv koji prebrodiš mozak pamti. Sledeći je malo lakši.</p>
      </div>
    </section>
  );
}
