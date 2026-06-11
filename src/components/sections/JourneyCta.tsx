import Image from 'next/image';
import Reveal from '@/components/ui/Reveal';

export default function JourneyCta() {
  return (
    <section className="section" style={{ paddingTop: 0 }} aria-label="Tvoj put počinje danas">
      <div className="wrap">
        <Reveal className="journey-card">
          <Image className="jphoto" src="/photos/journey.jpg" alt="Novi početak — izlazak sunca nad pejzažom" width={1180} height={440} loading="lazy" />
          <div className="scrim" />
          <div className="jc">
            <h2>
              Tvoj put<em>počinje danas.</em>
            </h2>
            <p>
              Pridruži se onima koji su rekli dosta — i počni svoju priču sa Iskrom, korak po korak.
            </p>
            <a href="#cta" className="btn">
              Uđi na listu
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
