// Seeded beta reactions — labeled as such in the UI. Not real review ratings.
export interface Review {
  q: string;
  n: string;
  c: string;
  a: string;
}

export const REVIEWS: Review[] = [
  { q: 'Prvi put da mi nešto pomaže baš u trenutku kad mi se zapali. Tih pet minuta zaista prođe.', n: 'Marija J.', c: 'Beograd', a: '/avatars/av-w0.png' },
  { q: 'Najviše mi znači što me ne osuđuje kad pukne. Vratim se i nastavim dalje.', n: 'Nenad S.', c: 'Novi Sad', a: '/avatars/av-m0.png' },
  { q: 'Kad vidim koliko sam para uštedeo za mesec dana — to je motivacija koju nisam imao ranije.', n: 'Dušan P.', c: 'Niš', a: '/avatars/av-m1.png' },
  { q: 'Konačno na srpskom i napravljeno za nas. Kafana, kafa, stres — sve je tu.', n: 'Ana T.', c: 'Kragujevac', a: '/avatars/av-w1.png' },
  { q: 'Disanje me spasi svaki put kad mi dođe da zapalim uz kafu. Genijalno jednostavno.', n: 'Ivana M.', c: 'Subotica', a: '/avatars/av-w2.png' },
  { q: 'Brojač ušteđenih para je ono što me drži. Već planiram šta ću s tim novcem.', n: 'Stefan R.', c: 'Zrenjanin', a: '/avatars/av-m2.png' },
  { q: 'Probao sam sve, ovo je prvo što razume kako je to kod nas — društvo, kafana, stres.', n: 'Miloš K.', c: 'Čačak', a: '/avatars/av-m0.png' },
  { q: 'Lepo je videti napredak svaki dan. Male pobede, ali se skupljaju.', n: 'Jelena P.', c: 'Pančevo', a: '/avatars/av-w0.png' },
];
