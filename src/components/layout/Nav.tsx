'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { NAV_LINKS, QUIZ_URL } from '@/lib/constants';
import { track } from '@/lib/analytics';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
        <div className="nav-inner">
          <a className="brand" href="#top">
            <span className="mk">
              <Image src="/brand/iskra-flame-white.png" alt="" width={34} height={34} priority />
            </span>
            ISKRA
          </a>
          <nav className="nav-links" aria-label="Glavna navigacija">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="nav-cta">
            <a href={QUIZ_URL} className="btn btn-primary" onClick={() => track.quizCtaClicked('nav')}>
              Uradi kviz
            </a>
            <button
              className="nav-burger"
              aria-label="Meni"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
            {l.label}
          </a>
        ))}
        <a
          href={QUIZ_URL}
          className="btn btn-primary mm-cta"
          onClick={() => {
            track.quizCtaClicked('nav-mobile');
            setMenuOpen(false);
          }}
        >
          Uradi kviz
        </a>
      </div>
    </>
  );
}
