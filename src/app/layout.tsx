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
    default: 'Iskra — Prestani da pušiš. Ovaj put zaista.',
    template: '%s · Iskra',
  },
  description:
    'Iskra je aplikacija koja ti pomaže da prestaneš da pušiš — sa alatom za poriv, praćenjem uštede i podrškom na srpskom, bez osuđivanja. Prijavi se na listu čekanja.',
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
    title: 'Prestani da pušiš. Ovaj put zaista.',
    description:
      'Iskra je aplikacija za prestanak pušenja napravljena za Srbiju. Pomaže ti baš u trenutku kada ti se zapali.',
    images: [
      { url: '/og/og-default.jpg', width: 1200, height: 630, alt: 'Iskra — aplikacija za prestanak pušenja' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prestani da pušiš. Ovaj put zaista.',
    description: 'Iskra je aplikacija za prestanak pušenja napravljena za Srbiju.',
    images: ['/og/og-default.jpg'],
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
