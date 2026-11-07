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
  areas: [
    "Nizza Monferrato",
    "Canelli",
    "Calamandrana",
    "Incisa Scapaccino",
    "Acqui Terme",
    "Asti"
  ],
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

export const heroSlides = [
  {
    image: "/images/hero/boch-hero.png",
    alt: "Raccolta industriale di rottami ferrosi selezionati",
    eyebrow: "Rottami metallici",
    title: "Recupero e Commercio di Rottami Metallici",
    subtitle:
      "Soluzioni professionali per il recupero, la raccolta e la valorizzazione dei metalli.",
    ctaLabel: "Scopri i nostri servizi",
    ctaHref: "/servizi"
  },
  {
    image: "/images/hero/boch-hero.png",
    alt: "Metalli non ferrosi selezionati in ambiente industriale",
    eyebrow: "Metalli non ferrosi",
    title: "Valorizziamo Ogni Tipo di Metallo",
    subtitle:
      "Raccolta e gestione di ferro, rame, ottone, alluminio e altri materiali metallici.",
    ctaLabel: "Contattaci",
    ctaHref: "/contatti"
  },
  {
    image: "/images/hero/boch-hero.png",
    alt: "Operazioni industriali di recupero materiali metallici",
    eyebrow: "Recupero industriale",
    title: "Il Recupero dei Metalli, con Professionalità",
    subtitle:
      "Un servizio orientato al recupero delle risorse e all'economia circolare.",
    ctaLabel: "Richiedi informazioni",
    ctaHref: "/contatti"
  }
] as const;

export const services = [
  {
    title: "Ritiro rottami da case, cascine e aziende agricole",
    image: "/images/servizi/Ritiro-rottami-abitazioni-aziende-agricole.jpg",
    alt: "Ritiro rottami da case, cascine e aziende agricole",
    description:
      "Hai vecchio ferro da eliminare? Organizziamo il ritiro di rottami metallici da abitazioni, cascine, cortili e aziende agricole.",
    icon: "factory"
  },
  {
    title: "Ritiro rottami metallici",
    image: "/images/servizi/ritiro-rottami-mitalici.jpg",
    alt: "Ritiro rottami metallici",
    description:
      "Offriamo servizi di ritiro di rottami metallici direttamente presso aziende, officine e cantieri. Raccogliamo diverse tipologie di materiali ferrosi e non ferrosi, organizzando il servizio in base alle esigenze del cliente.",
    icon: "coins"
  },
  {
    title: "Recupero e selezione metalli",
    image: "/images/servizi/recopero-rotami.jpg",
    alt: "Mezzi e contenitori per la raccolta di rottami metallici",
    description:
      "Ci occupiamo della selezione e della separazione dei rottami metallici, distinguendo i materiali ferrosi da quelli non ferrosi per favorire il recupero e il riciclo delle risorse.",
    icon: "truck"
  },
  {
    title: "Acquisto rottami metallici",
    image: "/images/servizi/acquisto-rottami.jpg",
    alt: "Acquisto rottami metallici",
    description:
      "Acquistiamo diverse tipologie di rottami metallici, tra cui ferro, acciaio, rame, ottone e alluminio. Valutiamo i materiali in base alla tipologia, alla qualità e alle quantità disponibili.",
    icon: "building"
  },
  {
    title: "Ritiro rottami metallici per privati",
    image: "/images/servizi/privati.jpg",
    alt: "Ritiro rottami metallici per privati",
    description:
      "Ritiriamo ferro vecchio, cancelli, scaffali, reti metalliche, biciclette e altri oggetti metallici direttamente presso abitazioni e proprietà private.",
    icon: "hardhat"
  },
  {
    title: "Ritiro Ferro Vecchio da Privati",
    image: "/images/servizi/Ritiro Ferro Vecchio da Privati.jpg",
    alt: "Ritiro Ferro Vecchio da Privati",
    description:
      "Ritiriamo ferro vecchio e materiali metallici direttamente a casa tua, in garage e nelle proprietà private",
    icon: "hardhat"
  },
  
] as const;

export function getWhatsAppUrl(message?: string) {
  const number = business.whatsapp.replace(/\D/g, "");
  if (!number) return "#";
  const text =
    message ??
    "Buongiorno, vorrei informazioni sui servizi di recupero rottami metallici.";
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

export function getPhoneUrl() {
  const number = business.phone.replace(/[^\d+]/g, "");
  return number ? `tel:${number}` : "#";
}
