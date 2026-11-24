import { serviceAreas } from "./areas";

const configuredSiteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "").trim();
/**
 * Il dominio proprietario è sempre quello usato per canonical, sitemap, robots e JSON-LD.
 * Un vecchio valore `*.vercel.app` rimasto nelle variabili di deploy non può quindi
 * riportare l'host precedente nei file pubblicati.
 */
const siteUrl =
  !configuredSiteUrl || /vercel\.app/i.test(configuredSiteUrl)
    ? "https://www.bochferro.it"
    : configuredSiteUrl.replace(/\/$/, "");

export const business = {
  name: "BOCH FERRO ROTTAMI",
  tagline: "Recupero e commercio di rottami metallici",
  description:
    "BOCH FERRO ROTTAMI si occupa di recupero e commercio di rottami ferrosi e metalli non ferrosi, con soluzioni per aziende e privati in Piemonte.",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  phone: process.env.NEXT_PUBLIC_PHONE_NUMBER ?? "",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "",
  siteUrl,
  legalName: process.env.NEXT_PUBLIC_LEGAL_NAME ?? "",
  address: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS ?? "",
  city: process.env.NEXT_PUBLIC_BUSINESS_CITY ?? "",
  postalCode: process.env.NEXT_PUBLIC_BUSINESS_POSTAL_CODE ?? "",
  region: process.env.NEXT_PUBLIC_BUSINESS_REGION ?? "",
  vat: process.env.NEXT_PUBLIC_BUSINESS_VAT ?? "",
  hours: process.env.NEXT_PUBLIC_BUSINESS_HOURS ?? "",
  areaServedName: "Piemonte",
  areas: serviceAreas.map((area) => area.name),
  materials: [
    {
      name: "Ferro",
      slug: "ferro",
      description: "Rottami ferrosi e materiali in ferro.",
      icon: "wrench"
    },
    {
      name: "Acciaio",
      slug: "acciaio",
      description: "Rottami e scarti in acciaio.",
      icon: "factory"
    },
    {
      name: "Rame",
      slug: "rame",
      description: "Materiali in rame e metalli non ferrosi.",
      icon: "cable"
    },
    {
      name: "Ottone",
      slug: "ottone",
      description: "Ottone e leghe metalliche non ferrose.",
      icon: "settings"
    },
    {
      name: "Alluminio",
      slug: "alluminio",
      description: "Alluminio e profili in alluminio.",
      icon: "box"
    },
    {
      name: "Cavi elettrici",
      slug: "cavi",
      description: "Cavi elettrici e materiali metallici recuperabili.",
      icon: "zap"
    }
  ]
} as const;

/** Immagini esistenti nel progetto: la prima è ottimizzata in WebP per il carico iniziale. */
export const heroSlides = [
  {
    image: "/images/hero/boch-hero.webp",
    alt: "Raccolta industriale di rottami ferrosi selezionati",
    eyebrow: "Rottami metallici",
    title: "Recupero e Commercio di Rottami Metallici",
    subtitle:
      "Ritiro, selezione e valorizzazione di ferro, acciaio e metalli non ferrosi per aziende e privati in Piemonte.",
    ctaLabel: "Scopri i nostri servizi",
    ctaHref: "/servizi"
  },
  {
    image: "/images/servizi/ritiro-rottami-metallici.jpg",
    alt: "Ritiro di rottami metallici presso un'attività",
    eyebrow: "Ritiro e raccolta",
    title: "Ritiriamo i Tuoi Rottami Metallici",
    subtitle:
      "Ritiri organizzati per privati, aziende, officine, cantieri e attività agricole nelle aree servite.",
    ctaLabel: "Richiedi un ritiro",
    ctaHref: "/servizi/ritiro-rottami-privati"
  },
  {
    image: "/images/servizi/recupero-rottami.jpg",
    alt: "Selezione di materiali metallici per il recupero",
    eyebrow: "Recupero e selezione",
    title: "Ogni Metallo, al Giusto Recupero",
    subtitle:
      "Separiamo materiali ferrosi e non ferrosi per indirizzarli correttamente al recupero delle risorse.",
    ctaLabel: "Scopri come lavoriamo",
    ctaHref: "/servizi/recupero-selezione-metalli"
  }
] as const;

/**
 * Restituisce il numero in formato internazionale solo se è completo.
 * Un numero italiano valido ha 10 cifre nazionali (3XX... o 0XX...),
 * oppure 12 cifre con il prefisso 39. I segnaposto e i numeri troncati
 * vengono scartati per evitare collegamenti a numeri sbagliati.
 */
function normalizeItalianNumber(raw: string) {
  if (!raw || /X/i.test(raw)) return "";
  const digits = raw.replace(/\D/g, "");
  if (digits.startsWith("39")) {
    return digits.length === 12 ? digits : "";
  }
  if (digits.length === 10 && /^[30]/.test(digits)) {
    return `39${digits}`;
  }
  return "";
}

export function getWhatsAppNumber() {
  return normalizeItalianNumber(business.whatsapp);
}

export function getPhoneNumber() {
  return normalizeItalianNumber(business.phone);
}

export function getWhatsAppUrl(message?: string) {
  const number = getWhatsAppNumber();
  if (!number) return "#";
  const text =
    message ??
    "Buongiorno, vorrei informazioni sui servizi di recupero rottami metallici.";
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

export function getPhoneUrl() {
  const number = getPhoneNumber();
  return number ? `tel:+${number}` : "#";
}

/** Numero formattato per la visualizzazione nei pulsanti di contatto. */
export function formatDisplayNumber(raw: string) {
  const number = normalizeItalianNumber(raw);
  if (!number) return "";
  const rest = number.slice(2);
  return `+39 ${rest.slice(0, 3)} ${rest.slice(3, 6)} ${rest.slice(6)}`;
}

/** I pulsanti di contatto vengono mostrati solo con numeri completi e validi. */
export function hasWhatsApp() {
  return Boolean(getWhatsAppNumber());
}

export function hasPhone() {
  return Boolean(getPhoneNumber());
}
