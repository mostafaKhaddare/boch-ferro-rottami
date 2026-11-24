export type ServiceIcon = "hardhat" | "factory" | "truck" | "coins" | "recycle" | "building";

export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  shortDescription: string;
  image: string;
  imageAlt: string;
  icon: ServiceIcon;
  intro: string[];
  materials: string[];
  audience: string[];
  process: { title: string; text: string }[];
  benefits: string[];
  local: string;
  faqs: { q: string; a: string }[];
  related: string[];
};

/**
 * Servizi effettivamente presenti nell'attività descritta dal progetto:
 * recupero, raccolta, selezione e commercio di rottami ferrosi e non ferrosi.
 * Nessun dato di contatto, prezzo, autorizzazione o certificazione è inventato.
 */
export const services: Service[] = [
  {
    slug: "ritiro-rottami-privati",
    title: "Ritiro rottami metallici per privati",
    eyebrow: "Privati",
    h1: "Ritiro di rottami metallici per privati",
    metaTitle: "Ritiro Rottami Metallici per Privati | BOCH FERRO ROTTAMI",
    metaDescription:
      "Hai ferro vecchio, cancelli, scaffali o oggetti metallici da togliere? Richiedi il ritiro di rottami per privati nelle aree servite in Piemonte.",
    shortDescription:
      "Ritiriamo ferro vecchio, cancelli, scaffali, reti metalliche, biciclette e altri oggetti metallici direttamente presso abitazioni e proprietà private.",
    image: "/images/servizi/privati.jpg",
    imageAlt: "Raccolta di rottami metallici presso un'abitazione privata",
    icon: "hardhat",
    intro: [
      "Vecchi cancelli, scaffali, reti metalliche, biciclette o ferro accumulato in garage e cortile: BOCH FERRO ROTTAMI organizza il ritiro di rottami metallici direttamente presso abitazioni e proprietà private.",
      "Ci occupiamo della raccolta di materiali ferrosi e non ferrosi, separando le diverse tipologie per favorirne il recupero. Ogni intervento viene organizzato in base al materiale descritto e alla disponibilità del cliente."
    ],
    materials: [
      "Ferro vecchio e rottami ferrosi",
      "Cancelli, ringhiere e infissi metallici",
      "Scaffalature, reti metalliche e lamiere",
      "Biciclette e piccoli oggetti in metallo",
      "Rame, ottone e alluminio",
      "Cavi elettrici e materiali metallici recuperabili"
    ],
    audience: [
      "Privati con ferro vecchio in casa, garage o cortile",
      "Proprietari di abitazioni, ville e cascine",
      "Chi deve liberarsi di oggetti metallici ingombranti",
      "Condomìni e piccole realtà locali con scarti metallici"
    ],
    process: [
      { title: "Contattaci", text: "Chiamaci, scrivici su WhatsApp oppure usa il modulo di contatto indicando il comune e il tipo di materiale." },
      { title: "Descrivi il materiale", text: "Indicaci cosa devi rimuovere, una quantità indicativa e l'eventuale presenza di più tipologie di metallo." },
      { title: "Concordiamo il ritiro", text: "Verifichiamo la disponibilità nell'area servita e organizziamo insieme modalità e accesso al luogo del ritiro." },
      { title: "Carico e separazione", text: "Al momento del ritiro il materiale viene caricato e distinto tra ferroso e non ferroso per avviarlo al recupero." }
    ],
    benefits: [
      "Un solo riferimento per la richiesta e per le informazioni sul ritiro",
      "Ritiro organizzato in base al materiale e alle esigenze del luogo",
      "Attenzione alla separazione tra metalli ferrosi e non ferrosi",
      "Nessun impegno: prima contatti, poi verifichiamo insieme la disponibilità"
    ],
    local:
      "Effettuiamo ritiri per privati a Nizza Monferrato, Canelli, Acqui Terme, Asti, Incisa Scapaccino, Calamandrana e Costigliole d'Asti, oltre che nei comuni limitrofi. Indicaci il tuo comune: verifichiamo la disponibilità del servizio nella tua zona.",
    faqs: [
      { q: "Quali oggetti metallici ritirate dai privati?", a: "Ritiriamo ferro vecchio, cancelli, scaffali, reti metalliche, biciclette e altri oggetti in metallo. Per materiali diversi, descriviceli nella richiesta e verifichiamo insieme la possibilità di recupero." },
      { q: "Devo smontare il materiale prima del ritiro?", a: "Dipende dal tipo di oggetto e dalle condizioni di accesso. Indicaci nella richiesta come è sistemato il materiale e ti daremo le informazioni utili per organizzare il carico." },
      { q: "Ritirate anche rame, ottone e alluminio da privati?", a: "Sì, trattiamo metalli non ferrosi come rame, ottone e alluminio. Vanno indicati nella richiesta perché vengono gestiti separatamente dai rottami ferrosi." },
      { q: "Come posso chiedere un ritiro a casa?", a: "Puoi usare il modulo di contatto, telefonare oppure scriverci su WhatsApp. Indica comune, tipo di materiale e quantità indicativa per ricevere informazioni più utili." }
    ],
    related: ["acquisto-rottami-metallici", "ritiro-rottami-aziende-agricole", "recupero-selezione-metalli"]
  },
  {
    slug: "ritiro-rottami-aziende",
    title: "Ritiro rottami metallici per aziende",
    eyebrow: "Aziende e officine",
    h1: "Ritiro di rottami metallici per aziende, officine e cantieri",
    metaTitle: "Ritiro Rottami per Aziende e Officine | BOCH FERRO ROTTAMI",
    metaDescription:
      "Ritiro di rottami ferrosi e non ferrosi per aziende, officine, carpenterie e cantieri in Piemonte. Descrivici il materiale e richiedi informazioni.",
    shortDescription:
      "Raccogliamo rottami metallici presso aziende, officine e cantieri, organizzando il servizio in base al materiale e alle esigenze dell'attività.",
    image: "/images/servizi/ritiro-rottami-metallici.jpg",
    imageAlt: "Raccolta di rottami metallici presso un'attività industriale",
    icon: "factory",
    intro: [
      "Le attività produttive generano scarti metallici di tipo e volume diverso: ritagli di lamiera, profili, tubi, cavi, scarti di lavorazione e materiale dismesso. BOCH FERRO ROTTAMI organizza il ritiro di rottami metallici presso aziende, officine e cantieri.",
      "L'intervento viene definito a partire dal materiale effettivamente presente: tipologia, quantità indicativa e modalità di accesso al sito. L'obiettivo è una gestione ordinata dei rottami, con separazione tra metalli ferrosi e non ferrosi."
    ],
    materials: [
      "Rottami ferrosi e scarti in acciaio",
      "Ritagli di lamiera, profili e tubi metallici",
      "Rame, ottone e alluminio da lavorazione",
      "Cavi elettrici e materiali non ferrosi",
      "Macchinari e componenti metallici dismessi",
      "Scarti metallici da cantieri e ristrutturazioni"
    ],
    audience: [
      "Officine meccaniche, fabbri e carpenterie",
      "Serramentisti, elettricisti e idraulici",
      "Imprese edili e cantieri di ristrutturazione",
      "Attività industriali e produttive locali"
    ],
    process: [
      { title: "Inventario del materiale", text: "Indicaci le tipologie di metallo presenti e una quantità approssimativa, anche tramite fotografie inviate su WhatsApp." },
      { title: "Verifica della disponibilità", text: "Valutiamo il materiale descritto e verifichiamo la disponibilità del ritiro nella tua area e nelle tue condizioni operative." },
      { title: "Organizzazione operativa", text: "Concordiamo accessi, modalità di carico ed eventuali indicazioni del sito produttivo o del cantiere." },
      { title: "Ritiro e valorizzazione", text: "Il materiale viene raccolto e separato per tipo, così da indirizzarlo correttamente al recupero dei metalli." }
    ],
    benefits: [
      "Gestione di rottami ferrosi e metalli non ferrosi con un unico interlocutore",
      "Possibilità di organizzare ritiri secondo la produzione dell'attività",
      "Contatto diretto con chi segue la richiesta",
      "Maggiore ordine nelle aree di stoccaggio del materiale"
    ],
    local:
      "Seguiamo richieste da aziende e officine nell'area di Asti, Nizza Monferrato, Canelli, Acqui Terme, Incisa Scapaccino, Calamandrana e Costigliole d'Asti. Per interventi in altri comuni del Piemonte, indicaci la località nella richiesta.",
    faqs: [
      { q: "Ritirate scarti da officine meccaniche?", a: "Sì. Ritiriamo scarti metallici da officine, fabbri e carpenterie: laminati, profili, ritagli, componenti dismessi e metalli non ferrosi. Descrivici il materiale per organizzare il ritiro." },
      { q: "Gestite anche materiale presente in cantiere?", a: "Possiamo organizzare il ritiro di rottami metallici da cantieri e ristrutturazioni, come tubi, profili, lamiere e impalcature metalliche. Indicate accessi e quantità indicative nella richiesta." },
      { q: "È possibile organizzare ritiri periodici?", a: "Per attività con produzione regolare di rottami è possibile richiedere informazioni su ritiri ricorrenti. Definiamo insieme modalità e frequenza in base al materiale." },
      { q: "Accettate anche cavi elettrici e metalli non ferrosi?", a: "Sì. Rame, ottone, alluminio e cavi elettrici rientrano tra i materiali che trattiamo e vengono gestiti separatamente dal ferro e dall'acciaio." }
    ],
    related: ["ritiro-rottami-cantieri", "acquisto-rottami-metallici", "recupero-selezione-metalli"]
  },
  {
    slug: "ritiro-rottami-aziende-agricole",
    title: "Ritiro rottami da case, cascine e aziende agricole",
    eyebrow: "Mondo agricolo",
    h1: "Ritiro di rottami da case, cascine e aziende agricole",
    metaTitle: "Ritiro Rottami da Cascine e Aziende Agricole | BOCH",
    metaDescription:
      "Ritiro di rottami metallici da abitazioni, cascine, cortili e aziende agricole nelle aree servite in Piemonte. Richiedi informazioni sul materiale.",
    shortDescription:
      "Organizziamo il ritiro di rottami metallici da abitazioni, cascine, cortili e aziende agricole: vecchio ferro, attrezzi e materiale dismesso.",
    image: "/images/servizi/ritiro-rottami-abitazioni-aziende-agricole.jpg",
    imageAlt: "Rottami metallici raccolti presso un'abitazione rurale e un'azienda agricola",
    icon: "truck",
    intro: [
      "Nelle cascine e nelle aziende agricole si accumulano nel tempo vecchi attrezzi, recinti, tubi, lamiere e macchinari dismessi. BOCH FERRO ROTTAMI organizza il ritiro di questo materiale metallico direttamente presso la proprietà.",
      "Il servizio riguarda sia il ferro vecchio presente in abitazioni e cortili sia i rottami provenienti da attività agricole. Ogni ritiro viene pianificato in base al materiale e alle condizioni di accesso alla proprietà."
    ],
    materials: [
      "Vecchi attrezzi agricoli e utensili in metallo",
      "Recinti, reti, pali e tubi metallici",
      "Lamiere, scaffalature e serbatoi dismessi",
      "Componenti di macchinari agricoli fuori uso",
      "Ferro vecchio da cortili, fienili e rimesse",
      "Alluminio, rame e ottone presenti nella proprietà"
    ],
    audience: [
      "Aziende agricole e cascine dell'area",
      "Proprietari di terreni e case rurali",
      "Abitazioni con cortili o depositi di ferro vecchio",
      "Piccole attività legate al mondo agricolo"
    ],
    process: [
      { title: "Descrivi il materiale", text: "Indicaci cosa è presente in cascina o in cortile, una quantità approssimativa e se si tratta di più tipologie di metallo." },
      { title: "Verifichiamo l'accesso", text: "Ci facciamo un'idea dei luoghi di carico e delle eventuali difficoltà di accesso per strade strette o cortili interni." },
      { title: "Concordiamo l'intervento", text: "Definiamo insieme la disponibilità e le modalità di ritiro, tenendo conto delle esigenze dell'attività agricola." },
      { title: "Carico e separazione", text: "Carichiamo il materiale e lo distinguiamo tra metalli ferrosi e non ferrosi per il successivo recupero." }
    ],
    benefits: [
      "Ritiro diretto presso cascine, cortili e proprietà rurali",
      "Valutazione del materiale dismesso presente in azienda",
      "Ordine e spazio liberato nei depositi e nelle rimesse",
      "Gestione separata di ferro, acciaio e metalli non ferrosi"
    ],
    local:
      "Operiamo in un territorio con forte presenza agricola: Asti, Nizza Monferrato, Canelli, Acqui Terme, Incisa Scapaccino, Calamandrana e Costigliole d'Asti. Se la tua cascina è in un comune limitrofo, scrivici e verifichiamo la disponibilità.",
    faqs: [
      { q: "Ritirate macchinari agricoli dismessi?", a: "Possiamo valutare il ritiro di componenti metallici e macchinari fuori uso. Descrivici di cosa si tratta e indicaci le dimensioni e il comune, così verifichiamo la disponibilità." },
      { q: "Ritirate il ferro vecchio presente in una cascina?", a: "Sì. Vecchi attrezzi, recinti, tubi, lamiere e altro ferro accumulato in cortile o fienile rientrano tra i materiali che possiamo ritirare." },
      { q: "L'accesso al cortile è stretto: è un problema?", a: "Indicaci le condizioni di accesso nella richiesta. Verifichiamo così le modalità di carico più adatte al luogo." },
      { q: "Trattate anche metalli non ferrosi in azienda agricola?", a: "Sì. Rame, ottone e alluminio vengono gestiti separatamente rispetto ai rottami ferrosi: segnalali nella richiesta." }
    ],
    related: ["ritiro-rottami-privati", "ritiro-rottami-aziende", "acquisto-rottami-metallici"]
  },
  {
    slug: "ritiro-rottami-cantieri",
    title: "Ritiro rottami da cantieri e ristrutturazioni",
    eyebrow: "Cantieri",
    h1: "Ritiro di rottami metallici da cantieri e ristrutturazioni",
    metaTitle: "Ritiro Rottami da Cantieri e Ristrutturazioni | BOCH",
    metaDescription:
      "Ritiro di rottami metallici da cantieri: tubi, profili, lamiere e scarti da ristrutturazione. Richiedi informazioni al nostro team.",
    shortDescription:
      "Raccogliamo rottami metallici da cantieri e ristrutturazioni: profili, tubi, lamiere, impalcature e scarti di lavorazione.",
    image: "/images/servizi/ritiro-rottami.jpg",
    imageAlt: "Materiale metallico pronto per il ritiro in un'area di lavoro",
    icon: "building",
    intro: [
      "Durante una ristrutturazione o un intervento edile restano spesso materiali metallici da gestire: tubature, profili, lamiere, telai, impalcature e ritagli. BOCH FERRO ROTTAMI può organizzarne il ritiro direttamente in cantiere.",
      "Il servizio viene definito in base al tipo di materiale, alla quantità indicativa e alle condizioni del cantiere. Il materiale metallico viene separato per tipologia per favorire il recupero."
    ],
    materials: [
      "Tubi, profili e lamiere da impianti e strutture",
      "Telai metallici e serramenti dismessi",
      "Impalcature e ponteggi metallici fuori uso",
      "Ritagli di lamiera e scarti di lavorazione",
      "Cavi elettrici e materiali non ferrosi",
      "Ferro e acciaio provenienti da demolizioni di elementi metallici"
    ],
    audience: [
      "Imprese edili e cantieri di ristrutturazione",
      "Artigiani e installatori che lavorano su cantieri",
      "Responsabili di lavori con scarti metallici da gestire",
      "Proprietari che ristrutturano e hanno materiale da rimuovere"
    ],
    process: [
      { title: "Segnala il materiale", text: "Indicaci le tipologie di metallo presenti in cantiere e una quantità approssimativa, eventualmente con fotografie." },
      { title: "Verifichiamo il cantiere", text: "Valutiamo accessi, spazi di manovra e condizioni di carico per organizzare l'intervento." },
      { title: "Pianifichiamo il ritiro", text: "Concordiamo la disponibilità con i tempi del cantiere e le esigenze dell'impresa." },
      { title: "Carico e recupero", text: "Carichiamo il materiale metallico e lo separiamo in base alla tipologia per indirizzarlo al recupero." }
    ],
    benefits: [
      "Un riferimento per il ritiro del materiale metallico in cantiere",
      "Pulizia dell'area di lavoro e riduzione degli ingombri",
      "Separazione tra metalli ferrosi e non ferrosi",
      "Intervento organizzato in base alle condizioni del cantiere"
    ],
    local:
      "Ritiriamo materiale metallico da cantieri nelle aree di Asti, Nizza Monferrato, Canelli, Acqui Terme, Incisa Scapaccino, Calamandrana e Costigliole d'Asti. Per cantieri in altri comuni, indicaci la località e verifichiamo la disponibilità.",
    faqs: [
      { q: "Ritirate solo ferro o anche altri metalli?", a: "Trattiamo sia rottami ferrosi sia metalli non ferrosi come rame, ottone e alluminio, oltre ai cavi elettrici. Segnalaci le tipologie presenti in cantiere." },
      { q: "Il cantiere ha spazi limitati per il carico: cosa facciamo?", a: "Descrivici accessi e spazi disponibili nella richiesta. Verifichiamo insieme come organizzare il carico in base alle condizioni reali del luogo." },
      { q: "Ritirate impalcature e ponteggi metallici dismessi?", a: "Possiamo valutare il ritiro di elementi metallici da ponteggio. Indicaci quantità e dimensioni per permetterci di verificare la disponibilità." },
      { q: "Chi gestisce il ritiro dei materiali non metallici?", a: "Il nostro servizio riguarda i rottami metallici. Per altri materiali da cantiere occorre rivolgersi a operatori dedicati." }
    ],
    related: ["ritiro-rottami-aziende", "acquisto-rottami-metallici", "recupero-selezione-metalli"]
  },
  {
    slug: "recupero-selezione-metalli",
    title: "Recupero e selezione dei metalli",
    eyebrow: "Recupero",
    h1: "Recupero e selezione dei rottami metallici",
    metaTitle: "Recupero e Selezione Metalli | BOCH FERRO ROTTAMI",
    metaDescription:
      "Selezione e separazione dei rottami metallici: ferro, acciaio, rame, ottone, alluminio e cavi. Scopri come BOCH gestisce il recupero dei metalli.",
    shortDescription:
      "Selezioniamo e separiamo i rottami metallici, distinguendo materiali ferrosi e non ferrosi per favorire il recupero e il riciclo delle risorse.",
    image: "/images/servizi/recupero-rottami.jpg",
    imageAlt: "Contenitori e mezzi per la selezione dei rottami metallici",
    icon: "recycle",
    intro: [
      "Il recupero dei metalli inizia da una corretta distinzione dei materiali. Ferro e acciaio seguono un circuito diverso rispetto a rame, ottone, alluminio e cavi elettrici: per questo la selezione è una fase importante della nostra attività.",
      "BOCH FERRO ROTTAMI si occupa della raccolta e della selezione dei rottami metallici, distinguendo le diverse tipologie per favorirne il recupero e l'impiego come materia prima secondaria."
    ],
    materials: [
      "Ferro e acciaio: rottami, lamiere, profili e tubi",
      "Rame: cavi, tubi e componenti elettrici",
      "Ottone: rubinetti, valvole e leghe non ferrose",
      "Alluminio: profili, lamiere e contenitori",
      "Cavi elettrici di diversa tipologia",
      "Altri metalli non ferrosi su verifica"
    ],
    audience: [
      "Aziende che producono scarti metallici separati o misti",
      "Privati con materiali ferrosi e non ferrosi da smaltire",
      "Cantieri e attività agricole con rottami da gestire",
      "Chiunque voglia indirizzare il materiale al recupero"
    ],
    process: [
      { title: "Raccolta", text: "Ritiriamo il materiale presso la tua sede o proprietà, in base alla tipologia e alla quantità indicata." },
      { title: "Distinzione dei materiali", text: "Separiamo i metalli ferrosi da quelli non ferrosi e distinguiamo le principali tipologie di leghe." },
      { title: "Verifica e gestione", text: "Il materiale selezionato viene gestito secondo la tipologia, per essere avviato al recupero delle risorse." },
      { title: "Economia circolare", text: "Il recupero dei metalli consente di riutilizzare materiali già estratti, riducendo lo spreco di risorse." }
    ],
    benefits: [
      "Attenzione alla separazione tra ferroso e non ferroso",
      "Gestione di più tipologie di metallo con un solo riferimento",
      "Recupero di materiali che altrimenti resterebbero inutilizzati",
      "Informazioni chiare sul materiale conferito"
    ],
    local:
      "La nostra attività di recupero si rivolge a clienti di Asti, Nizza Monferrato, Canelli, Acqui Terme, Incisa Scapaccino, Calamandrana, Costigliole d'Asti e comuni vicini. Per quantità importanti o materiali particolari, contattaci per una verifica.",
    faqs: [
      { q: "Perché è importante separare i metalli?", a: "Perché ferro, rame, ottone e alluminio hanno caratteristiche diverse e seguono percorsi di recupero differenti. Una selezione corretta facilita il riutilizzo del materiale." },
      { q: "Accettate materiali metallici misti?", a: "Possiamo valutare materiale misto: descrivici cosa è presente e in che proporzione, così verifichiamo come gestirlo. La separazione preventiva, quando possibile, aiuta il recupero." },
      { q: "Recuperate anche cavi elettrici?", a: "Sì. I cavi elettrici rientrano tra i materiali non ferrosi che trattiamo. Indicani tipologia e quantità indicativa nella richiesta." },
      { q: "Lavorate con privati oltre che con aziende?", a: "Sì. Il recupero e la selezione riguardano sia il materiale proveniente da attività produttive sia quello conferito da privati." }
    ],
    related: ["acquisto-rottami-metallici", "ritiro-rottami-aziende", "materiali"]
  },
  {
    slug: "acquisto-rottami-metallici",
    title: "Acquisto di rottami metallici",
    eyebrow: "Acquisto e commercio",
    h1: "Acquisto di rottami ferrosi e metalli non ferrosi",
    metaTitle: "Acquisto Rottami Metallici e Ferrosi | BOCH FERRO ROTTAMI",
    metaDescription:
      "Vuoi vendere rottami metallici? BOCH FERRO ROTTAMI si occupa di acquisto e commercio di ferro, acciaio, rame, ottone, alluminio e cavi.",
    shortDescription:
      "Ci occupiamo dell'acquisto e del commercio di rottami ferrosi e metalli non ferrosi. Descrivici il materiale e ricevi informazioni sulla sua gestione.",
    image: "/images/servizi/acquisto-rottami.jpg",
    imageAlt: "Rottami metallici selezionati pronti per il conferimento",
    icon: "coins",
    intro: [
      "Oltre alla raccolta e al recupero, BOCH FERRO ROTTAMI si occupa del commercio di rottami ferrosi e metalli non ferrosi. Questo significa che possiamo valutare l'acquisto del materiale metallico che hai da vendere.",
      "Tipologia, quantità e condizioni del materiale sono gli elementi da considerare per ogni valutazione. Per questo ti chiediamo di descriverci cosa hai a disposizione: ferro, acciaio, rame, ottone, alluminio o cavi elettrici."
    ],
    materials: [
      "Rottami ferrosi: ferro e acciaio",
      "Rame: cavi, tubi e componenti",
      "Ottone e leghe metalliche non ferrose",
      "Alluminio e profili in alluminio",
      "Cavi elettrici recuperabili",
      "Altri metalli non ferrosi previa verifica"
    ],
    audience: [
      "Chi vuole vendere ferro o rottami metallici",
      "Aziende con scarti da lavorazione da valorizzare",
      "Officine, cantieri e attività agricole",
      "Privati con quantità di materiale metallico da smaltire"
    ],
    process: [
      { title: "Descrivi il materiale", text: "Indicaci tipo di metallo, quantità indicativa, condizioni e comune in cui si trova il materiale." },
      { title: "Verifichiamo la tipologia", text: "Esaminiamo le informazioni ricevute per capire come gestire il materiale e quali indicazioni fornirti." },
      { title: "Concordiamo le condizioni", text: "Se il materiale rientra nella nostra attività, definiamo insieme modalità di ritiro e conferimento." },
      { title: "Ritiro e valorizzazione", text: "Il rottame viene raccolto, selezionato e indirizzato al circuito di recupero dei metalli." }
    ],
    benefits: [
      "Un interlocutore per acquisto, ritiro e gestione del materiale",
      "Valutazione basata su tipologia, quantità e condizioni reali",
      "Possibilità di gestire rottami ferrosi e non ferrosi insieme",
      "Riferimenti per il conferimento del materiale"
    ],
    local:
      "Acquistiamo e gestiamo rottami metallici nelle aree servite di Asti, Nizza Monferrato, Canelli, Acqui Terme, Incisa Scapaccino, Calamandrana e Costigliole d'Asti. Per vendere ferro in Piemonte, indicaci il tuo comune e il materiale disponibile.",
    faqs: [
      { q: "Come viene definita la valutazione del rottame?", a: "Dipende da tipo di metallo, quantità e condizioni del materiale. Non pubblichiamo prezzi indicativi: descrivici cosa hai e ti forniamo le informazioni disponibili." },
      { q: "Acquistate anche cavi elettrici?", a: "Rientrano tra i materiali non ferrosi che gestiamo. Indicani tipologia e quantità per consentirci una verifica." },
      { q: "Lavorate con quantità piccole o solo con grandi volumi?", a: "Valutiamo ogni richiesta in base al materiale descritto. Indica sempre quantità indicativa e comune nella tua richiesta." },
      { q: "Potete acquistare rottami da aziende e da privati?", a: "Sì. L'attività di commercio riguarda sia il materiale proveniente da attività produttive sia quello conferito da privati." }
    ],
    related: ["recupero-selezione-metalli", "ritiro-rottami-aziende", "ritiro-rottami-privati"]
  }
];

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
