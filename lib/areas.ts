/**
 * Aree indicate dal progetto esistente, più Costigliole d'Asti,
 * richiesta esplicitamente come area di riferimento per il servizio locale.
 * Nessun indirizzo, orario o dato di contatto viene inventato.
 */
export type ServiceArea = {
  name: string;
  slug: string;
  blurb: string;
};

export const serviceAreas: ServiceArea[] = [
  {
    name: "Nizza Monferrato",
    slug: "nizza-monferrato",
    blurb:
      "Ritiro e recupero di rottami metallici per abitazioni, officine e attività commerciali del centro storico e delle zone produttive."
  },
  {
    name: "Asti",
    slug: "asti",
    blurb:
      "Richieste di recupero ferro, ritiro rottami e vendita di metalli per privati, aziende e cantieri nel capoluogo e nelle frazioni."
  },
  {
    name: "Canelli",
    slug: "canelli",
    blurb:
      "Raccolta di rottami ferrosi e non ferrosi per cantine, attività artigiane, cascine e proprietà private dell'area."
  },
  {
    name: "Acqui Terme",
    slug: "acqui-terme",
    blurb:
      "Ritiro di ferro vecchio e materiali metallici da abitazioni, esercizi commerciali e piccole realtà produttive."
  },
  {
    name: "Incisa Scapaccino",
    slug: "incisa-scapaccino",
    blurb:
      "Interventi di raccolta metalli per privati e attività locali, con verifica della disponibilità in base al materiale."
  },
  {
    name: "Calamandrana",
    slug: "calamandrana",
    blurb:
      "Ritiro di rottami da cortili, cascine e officine, incluso il materiale metallico accumulato nel tempo."
  },
  {
    name: "Costigliole d'Asti",
    slug: "costigliole-dasti",
    blurb:
      "Servizio di recupero e ritiro rottami per residenze, aziende agricole e attività artigiane del territorio."
  }
];
