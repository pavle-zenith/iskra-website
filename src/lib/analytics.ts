'use client';

import posthog from 'posthog-js';

type Props = Record<string, unknown>;

function capture(event: string, props?: Props) {
  if (typeof window !== 'undefined' && posthog.__loaded) {
    posthog.capture(event, props);
  }
}

export const track = {
  waitlistSubmitted: (location: 'hero' | 'footer') =>
    capture('waitlist_submitted', { location, source: 'landing' }),
  quizCtaClicked: (location: string) => capture('quiz_cta_clicked', { location }),
  sectionViewed: (section: string) => capture('section_viewed', { section }),
  faqOpened: (question: string) => capture('faq_opened', { question }),
  toolViewed: () => capture('tool_viewed', {}),
  metricSwitched: (metric: string) => capture('metric_switched', { metric }),
};
