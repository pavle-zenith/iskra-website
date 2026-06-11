'use client';

import { useState } from 'react';
import posthog from 'posthog-js';
import { track } from '@/lib/analytics';

interface WaitlistFormProps {
  location: 'hero' | 'footer';
  /** dark footer variant uses white success text */
  variant?: 'light' | 'dark';
  buttonClass?: string;
  showNote?: boolean;
}

export default function WaitlistForm({
  location,
  variant = 'light',
  buttonClass = 'btn btn-primary',
  showNote = true,
}: WaitlistFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (pending) return;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(true);
      return;
    }
    setError(false);
    setPending(true);

    track.waitlistSubmitted(location);

    const distinct_id =
      typeof posthog?.get_distinct_id === 'function' ? posthog.get_distinct_id() : undefined;

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, location, distinct_id }),
      });
      if (!res.ok) throw new Error('request failed');
      setSubmitted(true);
    } catch {
      // Network/server failure — still show success so the user isn't blocked,
      // the PostHog client event already fired and captures the intent.
      setSubmitted(true);
    } finally {
      setPending(false);
    }
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
      <form className="hero-form" onSubmit={handleSubmit} noValidate>
        <input
          type="email"
          placeholder="Tvoj email"
          required
          aria-label="Email"
          aria-invalid={error}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError(false);
          }}
          style={error ? { borderColor: 'var(--cig)' } : undefined}
        />
        <button className={buttonClass} type="submit" disabled={pending} style={pending ? { opacity: 0.7 } : undefined}>
          {pending ? 'Šaljem…' : 'Prijavi se'}
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
