import { serviceAreas } from "./areas";

export const business = {
  name: "BOCH FERRO ROTTAMI",
  tagline: "Recupero e commercio di rottami metallici",
  description:
    "BOCH FERRO ROTTAMI si occupa di recupero e commercio di rottami ferrosi e metalli non ferrosi, con soluzioni per aziende e privati in Piemonte.",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  phone: process.env.NEXT_PUBLIC_PHONE_NUMBER ?? "",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.bochferrorottami.it",
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
    image: "/images/servizi/ritiro-rottami-mitalici.jpg",
    alt: "Ritiro di rottami metallici presso un'attività",
    eyebrow: "Ritiro e raccolta",
    title: "Ritiriamo i Tuoi Rottami Metallici",
    subtitle:
      "Ritiri organizzati per privati, aziende, officine, cantieri e attività agricole nelle aree servite.",
    ctaLabel: "Richiedi un ritiro",
    ctaHref: "/servizi/ritiro-rottami-privati"
  },
  {
    image: "/images/servizi/recopero-rotami.jpg",
    alt: "Selezione di materiali metallici per il recupero",
    eyebrow: "Recupero e selezione",
    title: "Ogni Metallo, al Giusto Recupero",
    subtitle:
      "Separiamo materiali ferrosi e non ferrosi per indirizzarli correttamente al recupero delle risorse.",
    ctaLabel: "Scopri come lavoriamo",
    ctaHref: "/servizi/recupero-selezione-metalli"
  }
] as const;

export function getWhatsAppUrl(message?: string) {
  const raw = business.whatsapp.trim();
  if (!raw || /X/i.test(raw)) return "#";
  const number = raw.replace(/\D/g, "");
  if (!number) return "#";
  const text =
    message ??
    "Buongiorno, vorrei informazioni sui servizi di recupero rottami metallici.";
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

export function getPhoneUrl() {
  const raw = business.phone.trim();
  if (!raw || /X/i.test(raw)) return "#";
  const number = raw.replace(/[^\d+]/g, "");
  if (!number) return "#";
  return `tel:${number}`;
}

/** I pulsanti di contatto vengono mostrati solo con numeri reali configurati. */
export function hasWhatsApp() {
  return getWhatsAppUrl() !== "#";
}

export function hasPhone() {
  return getPhoneUrl() !== "#";
}
