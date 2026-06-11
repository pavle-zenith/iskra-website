// All finalized Serbian copy (v1.0) — do not paraphrase.

export const FAQ_ITEMS = [
  {
    q: 'Šta je tačno Iskra?',
    a: 'Iskra je aplikacija koja pomaže kod odvikavanja od pušenja. Napravljena je za ljude kojima ne treba još jedno predavanje, nego konkretna podrška u trenutku kada im se stvarno zapali. Pratiš dane bez cigarete, novac koji ostaje kod tebe, cigarete koje nisi zapalio i okidače koji te najčešće vraćaju.',
  },
  {
    q: 'Kada izlazi?',
    a: 'Očekujemo prvu beta verziju uskoro, a javno lansiranje nakon toga. Ljudi sa liste čekanja dobijaju pristup prvi.',
  },
  {
    q: 'Da li je aplikacija već dostupna?',
    a: 'Još nije javno dostupna. Trenutno primamo prijave za Early Access listu. App Store i Google Play verzije su u pripremi.',
  },
  {
    q: 'Koliko košta?',
    a: 'Cena još nije javno objavljena. Early Access korisnici će dobiti početnu ponudu pre javnog lansiranja.',
  },
  {
    q: 'Da li radi i za IQOS i druge nikotinske proizvode?',
    a: 'Iskra je primarno napravljena za cigarete, ali mnogi principi važe i za IQOS i druge nikotinske navike. U prvoj verziji fokus je na cigaretama i najčešćim situacijama koje ljude vraćaju pušenju.',
  },
  {
    q: 'Šta ako popustim i zapalim?',
    a: 'Onda ne krećeš od nule. Iskra nije napravljena da te kazni kad padneš. Napravljena je da ti pomogne da razumeš šta se desilo, zabeležiš okidač i nastaviš dalje.',
  },
  {
    q: 'Da li je Iskra medicinski tretman?',
    a: 'Ne. Iskra nije zamena za lekara, terapiju ili medicinski tretman. Iskra je aplikacija za podršku, praćenje navika, edukaciju i pomoć u svakodnevnim trenucima kada ti se puši. Ako imaš ozbiljne zdravstvene probleme ili jaku nikotinsku zavisnost, najbolje je da se posavetuješ sa lekarom.',
  },
  {
    q: 'Da li su moji podaci privatni?',
    a: 'Da. Tvoj email koristimo za Early Access obaveštenja i tvoje rezultate ako uradiš kviz. Ne šaljemo spam i ne prodajemo tvoje podatke.',
  },
];

export const TRUST_LOGOS = [
  { label: 'WHO', serif: false },
  { label: 'Mayo Clinic', serif: true },
  { label: 'NHS', serif: false },
  { label: 'Harvard Health', serif: true },
  { label: 'CDC', serif: false },
  { label: 'Cochrane', serif: true },
  { label: 'NIH', serif: false },
];

// Savings chart datasets (metric pill swap)
export const CHART_METRICS = {
  money: {
    v: [400, 2800, 12000, 146000],
    u: 'RSD',
    grad: 'linear-gradient(180deg,#4E9A4E,#3A7A3A)',
    col: '#3A7A3A',
    deep: '#2E6B2E',
    note: 'Projekcija za 20 cigareta dnevno po ceni od 400 RSD.',
  },
  cig: {
    v: [20, 140, 600, 7300],
    u: 'kom',
    grad: 'linear-gradient(180deg,#D4605A,#C24A43)',
    col: '#C24A43',
    deep: '#A53A34',
    note: 'Za prosečnu naviku od 20 cigareta dnevno.',
  },
  time: {
    v: [4, 26, 110, 1340],
    u: 'h',
    grad: 'linear-gradient(180deg,#7D68B8,#6B52A8)',
    col: '#6B52A8',
    deep: '#574191',
    note: 'Vreme koje bi inače otišlo na pušenje — oko 11 min po cigareti.',
  },
} as const;

export const CHART_LABELS = ['Dnevno', 'Nedeljno', 'Mesečno', 'Godišnje'];

export const KNOWLEDGE_ARTICLES = [
  { tag: 'Telo', title: 'Šta se dešava u tvom telu prvih 48 sati bez nikotina', min: '4 min čitanja', photo: '/photos/k-telo.jpg' },
  { tag: 'Okidači', title: 'Zašto kafa i cigareta idu zajedno i kako to razdvojiti', min: '3 min čitanja', photo: '/photos/k-okidaci.jpg' },
  { tag: 'Kafana i društvo', title: 'Kako izaći bez cigarete kad svi oko tebe puše', min: '4 min čitanja', photo: '/photos/k-kafana.jpg' },
  { tag: 'Stres', title: 'Zašto ti se najviše puši kad si pod pritiskom', min: '3 min čitanja', photo: '/photos/k-stres.jpg' },
];

export const COMPARISON_ROWS = [
  'Posvećeno baš prestanku pušenja',
  'Alati za trenutni poriv',
  'Praćenje ušteđenog novca i zdravlja',
  'Baza znanja na srpskom',
  'Bez osude kada popustiš',
  'Plan skrojen baš za tebe',
];
