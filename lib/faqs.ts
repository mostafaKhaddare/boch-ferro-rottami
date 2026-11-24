export type FaqItem = { q: string; a: string };

export type FaqGroup = {
  id: string;
  title: string;
  description: string;
  items: FaqItem[];
  links: { label: string; href: string }[];
};

/** FAQ globale: contenuti coerenti con i servizi e le aree già presenti nel progetto. */
export const faqGroups: FaqGroup[] = [
  {
    id: "ritiri",
    title: "Servizi e ritiri",
    description: "Come funzionano il ritiro e la raccolta dei rottami metallici.",
    items: [
      { q: "Quali servizi di ritiro offrite?", a: "Organizziamo il ritiro di rottami metallici per privati, aziende e officine, cantieri e ristrutturazioni, cascine e aziende agricole. Ci occupiamo inoltre di recupero, selezione e acquisto di rottami ferrosi e metalli non ferrosi." },
      { q: "Come funziona una richiesta di ritiro?", a: "Il primo passo è descrivere il materiale: tipologia, quantità indicativa e comune. Verifichiamo la disponibilità nella nostra area e concordiamo insieme modalità e accesso al luogo del ritiro." },
      { q: "Posso inviare una foto del materiale?", a: "Sì. Le fotografie aiutano a capire di cosa si tratta e come organizzare il carico. Puoi descrivere il materiale nel modulo di contatto oppure inviarci le foto direttamente su WhatsApp, usando il pulsante che trovi nella pagina contatti." },
      { q: "Organizzate ritiri ricorrenti per le aziende?", a: "Per attività con produzione regolare di rottami è possibile richiedere informazioni su ritiri organizzati nel tempo. Definiamo modalità e frequenza in base al materiale e alle esigenze dell'attività." },
      { q: "Ritirate materiale misto?", a: "Possiamo valutare materiale metallico misto. Descrivici le tipologie presenti e le condizioni: la separazione preventiva tra ferro e metalli non ferrosi aiuta comunque il recupero." }
    ],
    links: [
      { label: "Tutti i servizi", href: "/servizi" },
      { label: "Come funziona", href: "/#come-funziona" }
    ]
  },
  {
    id: "materiali",
    title: "Materiali e recupero",
    description: "Cosa trattiamo e come distinguiamo i diversi metalli.",
    items: [
      { q: "Quali materiali metallici trattate?", a: "Trattiamo ferro, acciaio, rame, ottone, alluminio e cavi elettrici. Per materiali non presenti nell'elenco è possibile inviare una richiesta per una verifica." },
      { q: "Che differenza c'è tra metalli ferrosi e non ferrosi?", a: "Ferro e acciaio sono ferrosi; rame, ottone e alluminio sono non ferrosi. La distinzione è importante perché le diverse tipologie seguono percorsi di recupero differenti." },
      { q: "Perché separare i metalli prima del ritiro?", a: "Una separazione corretta facilita il recupero di ciascun materiale e riduce il rischio che metalli diversi finiscano mescolati. Quando non è possibile separarli, segnalalo nella richiesta." },
      { q: "Ritirate cavi elettrici?", a: "Sì. I cavi elettrici rientrano tra i materiali non ferrosi che trattiamo. Indica tipologia e quantità indicativa per consentirci una verifica." },
      { q: "Come viene gestito il materiale dopo il ritiro?", a: "Il materiale viene raccolto, distinto per tipologia e indirizzato al recupero delle risorse metalliche, in linea con un approccio di economia circolare." }
    ],
    links: [
      { label: "Materiali trattati", href: "/materiali" },
      { label: "Recupero e selezione", href: "/servizi/recupero-selezione-metalli" }
    ]
  },
  {
    id: "clienti",
    title: "Privati, aziende e cantieri",
    description: "Risposte per chi ha materiale da rimuovere o valorizzare.",
    items: [
      { q: "Lavorate anche con i privati?", a: "Sì. Ritiriamo ferro vecchio, cancelli, scaffali, reti metalliche, biciclette e altri oggetti metallici direttamente presso abitazioni e proprietà private." },
      { q: "Seguite officine e attività artigiane?", a: "Sì. Ci rivolgiamo a officine meccaniche, fabbri, carpenterie, serramentisti, elettricisti, idraulici e altre attività che producono scarti metallici." },
      { q: "Ritirate rottami da cantieri?", a: "Possiamo organizzare il ritiro di materiale metallico da cantieri e ristrutturazioni: tubi, profili, lamiere, telai e impalcature. Indica accessi e quantità nella richiesta." },
      { q: "Lavorate con aziende agricole?", a: "Sì. Ritiriamo vecchi attrezzi, recinti, tubi, lamiere e materiale metallico dismesso da cascine, cortili e aziende agricole." },
      { q: "Posso vendere il mio rottame?", a: "L'attività include il commercio di rottami ferrosi e non ferrosi. Descrivici tipo di metallo, quantità e condizioni: ti forniamo le informazioni disponibili sulla gestione del materiale." }
    ],
    links: [
      { label: "Servizio per aziende", href: "/aziende" },
      { label: "Acquisto rottami", href: "/servizi/acquisto-rottami-metallici" }
    ]
  },
  {
    id: "zona-contatti",
    title: "Zona di servizio e contatti",
    description: "Dove operiamo e come mettervi in contatto.",
    items: [
      { q: "In quali zone operate?", a: "Operiamo principalmente in Piemonte, con riferimento ad Asti, Nizza Monferrato, Canelli, Acqui Terme, Incisa Scapaccino, Calamandrana e Costigliole d'Asti, oltre ai comuni limitrofi." },
      { q: "Il mio comune non è nell'elenco: posso chiedere un ritiro?", a: "Sì. Indica la località e una descrizione del materiale nella richiesta: verifichiamo la disponibilità in base al tipo di rottame e alla zona." },
      { q: "Come posso contattarvi?", a: "Puoi usare il modulo nella pagina contatti oppure i canali indicati nella stessa pagina: telefono, WhatsApp e indirizzo email. Per una risposta rapida, include tipologia del materiale, comune e quantità indicativa." },
      { q: "Quanto tempo serve per una risposta?", a: "Non pubblichiamo tempi di risposta garantiti. Ti ricontatteremo appena possibile dopo aver ricevuto e verificato le informazioni inviate." },
      { q: "Pubblicate prezzi o tariffe?", a: "No. La gestione del materiale dipende da tipologia, quantità e condizioni: per questo preferiamo valutare ogni richiesta singolarmente." }
    ],
    links: [
      { label: "Zona di servizio", href: "/zona-di-ritiro" },
      { label: "Contatti", href: "/contatti" }
    ]
  }
];

export const allFaqs: FaqItem[] = faqGroups.flatMap((group) => group.items);
