export const business = {
  name: "BOCH FERRO ROTTAMI",
  tagline: "Ritiro e recupero rottami metallici",
  description:
    "Ritiro di ferro, acciaio, rame, ottone, alluminio e cavi presso aziende e privati in Piemonte.",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  phone: process.env.NEXT_PUBLIC_PHONE_NUMBER ?? "",
  email: process.env.NEXT_PUBLIC_EMAIL ?? "",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.it",
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
      description: "Ritiro di rottami ferrosi e materiali in ferro.",
      icon: "wrench"
    },
    {
      name: "Acciaio",
      slug: "acciaio",
      description: "Ritiro di rottami e scarti in acciaio.",
      icon: "factory"
    },
    {
      name: "Rame",
      slug: "rame",
      description: "Ritiro di rame e materiali in rame.",
      icon: "cable"
    },
    {
      name: "Ottone",
      slug: "ottone",
      description: "Ritiro di ottone e rottami metallici non ferrosi.",
      icon: "settings"
    },
    {
      name: "Alluminio",
      slug: "alluminio",
      description: "Ritiro di alluminio e profili in alluminio.",
      icon: "box"
    },
    {
      name: "Cavi elettrici",
      slug: "cavi",
      description: "Ritiro di cavi elettrici e materiali contenenti rame.",
      icon: "zap"
    }
  ]
} as const;

export const imageSources = {
  hero:
    "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&w=2400&q=85",
  recycling:
    "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&w=1600&q=80",
  truck:
    "https://images.unsplash.com/photo-1601584115197-04ecc0da31d8?auto=format&fit=crop&w=1600&q=80",
  metal:
    "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80"
} as const;

export function getWhatsAppUrl(message?: string) {
  const number = business.whatsapp.replace(/\D/g, "");
  if (!number) return "#";
  const text =
    message ??
    "Buongiorno, vorrei informazioni per il ritiro di rottami metallici.";
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

export function getPhoneUrl() {
  const number = business.phone.replace(/[^\d+]/g, "");
  return number ? `tel:${number}` : "#";
}
