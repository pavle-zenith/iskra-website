import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import { allSchemas } from '@/lib/seo';
import { SITE_URL } from '@/lib/constants';

const manrope = Manrope({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'ISKRA | Aplikacija za prestanak pušenja u Srbiji #1',
    template: '%s · Iskra',
  },
  description:
    'Iskra ti pomaže da prestaneš da pušiš uz alate za poriv, praćenje napretka, ušteđen novac i podršku bez osuđivanja. Uđi na Early Access listu.',
  applicationName: 'Iskra',
  keywords: [
    'prestani da pušiš',
    'kako prestati pušiti',
    'aplikacija za prestanak pušenja',
    'ostavljanje cigareta',
    'prestanak pušenja',
    'Iskra',
  ],
  authors: [{ name: 'Iskra' }],
  creator: 'Iskra',
  publisher: 'Iskra',
  alternates: {
    canonical: SITE_URL,
    languages: {
      'sr-RS': SITE_URL,
      'x-default': SITE_URL,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'sr_RS',
    url: SITE_URL,
    siteName: 'Iskra',
    title: 'ISKRA | Aplikacija za prestanak pušenja u Srbiji #1',
    description:
      'Iskra ti pomaže da prestaneš da pušiš uz alate za poriv, praćenje napretka, ušteđen novac i podršku bez osuđivanja. Uđi na Early Access listu.',
    images: [
      { url: '/og/iskra-og.png', width: 1200, height: 630, alt: 'Iskra — aplikacija za prestanak pušenja u Srbiji #1' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ISKRA | Aplikacija za prestanak pušenja u Srbiji #1',
    description:
      'Iskra ti pomaže da prestaneš da pušiš uz alate za poriv, praćenje napretka, ušteđen novac i podršku bez osuđivanja. Uđi na Early Access listu.',
    images: ['/og/iskra-og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr" className={manrope.variable}>
      <head>
        {allSchemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body>{children}</body>
    </html>
  );
}
