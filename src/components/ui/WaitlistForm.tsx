'use client';

import { useState } from 'react';
import { track } from '@/lib/analytics';

interface WaitlistFormProps {
  location: 'hero' | 'footer';
  /** dark footer variant uses white success text */
  variant?: 'light' | 'dark';
  buttonClass?: string;
  showNote?: boolean;
}

/**
 * Visual-only for now: shows the success state and fires the PostHog event.
 * The /api/waitlist seam exists; flip ENABLE_API to wire it up at launch.
 */
const ENABLE_API = false;

export default function WaitlistForm({
  location,
  variant = 'light',
  buttonClass = 'btn btn-primary',
  showNote = true,
}: WaitlistFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;

    track.waitlistSubmitted(location);

    if (ENABLE_API) {
      try {
        await fetch('/api/waitlist', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, location }),
        });
      } catch {
        /* non-blocking */
      }
    }

    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className="hero-note ok"
        style={{ display: 'flex', ...(variant === 'dark' ? { color: '#fff', justifyContent: 'center' } : {}) }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke={variant === 'dark' ? '#fff' : '#C9530F'}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
        Na listi si. Vidimo se uskoro.
      </div>
    );
  }

  return (
    <>
      <form className="hero-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Tvoj email"
          required
          aria-label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className={buttonClass} type="submit">
          Prijavi se
        </button>
      </form>
      {showNote && (
        <div className="hero-note">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#9A938B"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="3" y="11" width="18" height="10" rx="2" />
            <path d="M7 11V8a5 5 0 0 1 10 0v3" />
          </svg>
          Bez spama. Javljamo se samo kada Early Access bude spreman.
        </div>
      )}
    </>
  );
}
