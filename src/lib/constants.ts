export const SITE_URL = 'https://iskraclub.com';
export const SITE_NAME = 'Iskra';

export const QUIZ_URL = process.env.NEXT_PUBLIC_QUIZ_URL ?? 'https://quiz.iskraclub.com';

export const APP_STORE_URL = process.env.NEXT_PUBLIC_APP_STORE_URL ?? '';
export const PLAY_STORE_URL = process.env.NEXT_PUBLIC_PLAY_STORE_URL ?? '';
export const IS_PRE_LAUNCH = !APP_STORE_URL || !PLAY_STORE_URL;

export const INSTAGRAM_URL = 'https://www.instagram.com/iskraclub_';
export const TIKTOK_URL = 'https://www.tiktok.com/@iskraclub';

// Seeded social-proof numbers (labeled beta reactions; not real review ratings)
export const WAITLIST_BASE_COUNT = 2596;
export const ANNUAL_SAVINGS_RSD = 146000;

export const NAV_LINKS = [
  { href: '#kako', label: 'Kako radi' },
  { href: '#alati', label: 'Alati' },
  { href: '#napredak', label: 'Napredak' },
  { href: '#pitanja', label: 'Pitanja' },
];
