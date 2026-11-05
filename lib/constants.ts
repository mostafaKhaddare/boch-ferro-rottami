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
    title: "Recupero Rottami Ferrosi",
    image: "/images/servizi/rottami-ferrosi.jpg",
    alt: "Rottami ferrosi in un piazzale di recupero industriale",
    description:
      "Raccolta e recupero di rottami ferrosi, ferro e acciaio provenienti da attività industriali, artigianali e privati.",
    icon: "factory"
  },
  {
    title: "Recupero Metalli Non Ferrosi",
    image: "/images/servizi/metalli-non-ferrosi.jpg",
    alt: "Rame, ottone e alluminio selezionati per il recupero",
    description:
      "Gestione e valorizzazione di metalli non ferrosi come rame, ottone e alluminio.",
    icon: "coins"
  },
  {
    title: "Raccolta Rottami Metallici",
    image: "/images/servizi/raccolta-rottami.jpg",
    alt: "Mezzi e contenitori per la raccolta di rottami metallici",
    description:
      "Servizi di raccolta di materiali metallici, con soluzioni da concordare in base alle esigenze del cliente.",
    icon: "truck"
  },
  {
    title: "Ritiro Rottami da Aziende",
    image: "/images/servizi/ritiro-aziende.jpg",
    alt: "Area industriale con materiali metallici pronti per il ritiro",
    description:
      "Soluzioni per aziende, officine, imprese e attività produttive che necessitano di gestire i propri rottami metallici.",
    icon: "building"
  },
  {
    title: "Recupero da Cantieri",
    image: "/images/servizi/recupero-cantieri.jpg",
    alt: "Cantiere edile con materiali metallici separati",
    description:
      "Recupero di materiali metallici provenienti da cantieri edili e attività di demolizione, nel rispetto delle normative applicabili.",
    icon: "hardhat"
  },
  {
    title: "Commercio di Rottami Metallici",
    image: "/images/servizi/commercio-rottami.jpg",
    alt: "Materiali metallici selezionati pronti per la valorizzazione",
    description:
      "Valorizzazione e commercio di materiali metallici recuperabili secondo le caratteristiche e la qualità del materiale.",
    icon: "scale"
  }
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
