import { SITE_URL, SITE_NAME, INSTAGRAM_URL, TIKTOK_URL, FACEBOOK_URL } from './constants';
import { FAQ_ITEMS } from './sections-data';

const sameAs = [INSTAGRAM_URL, TIKTOK_URL, FACEBOOK_URL];

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/brand/iskra-logo-sm.png`,
  sameAs,
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: 'sr-RS',
  publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
};

// MobileApplication — no price (pre-launch), no aggregateRating (no real ratings yet).
export const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: SITE_NAME,
  description:
    'Iskra je aplikacija za prestanak pušenja napravljena za Srbiju — sa alatima za poriv, praćenjem napretka i uštede, i podrškom bez osuđivanja.',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'iOS, Android',
  inLanguage: 'sr',
  url: SITE_URL,
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/PreOrder',
    priceCurrency: 'RSD',
  },
  sameAs,
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

export const allSchemas = [organizationSchema, websiteSchema, appSchema, faqSchema];
