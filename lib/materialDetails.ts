export type MaterialDetail = {
  intro: string;
  sources: string[];
  who: string[];
  recovery: string;
  faqs: { q: string; a: string }[];
  relatedServices: string[];
};

/**
 * Contenuti specifici per ogni materiale già presente in `lib/constants.ts`.
 * Le pagine /materiali/[slug] diventano così pagine utili sul recupero del singolo metallo,
 * senza creare duplicati con le pagine /servizi/[slug].
 */
export const materialDetails: Record<string, MaterialDetail> = {
  ferro: {
    intro:
      "Il ferro è il materiale più comune tra i rottami che trattiamo. Rientrano in questa categoria il ferro vecchio di casa, i cancelli, le reti, le lamiere, i profili e i componenti metallici provenienti da attività produttive o agricole.",
    sources: [
      "Ferro vecchio da garage, cortili e abitazioni",
      "Cancelli, ringhiere, scaffali e reti metalliche",
      "Lamiere, profili e tubi da officine e cantieri",
      "Attrezzi e materiale dismesso da cascine e aziende agricole"
    ],
    who: ["Privati", "Officine e fabbri", "Imprese edili", "Aziende agricole"],
    recovery:
      "Il rottame ferroso viene raccolto e gestito separatamente dai metalli non ferrosi. Questa distinzione permette di indirizzare il materiale al recupero come materia prima per nuovi prodotti in ferro e acciaio.",
    faqs: [
      { q: "Che tipo di ferro ritirate?", a: "Ritiriamo ferro vecchio, cancelli, scaffali, reti metalliche, lamiere, profili e altri oggetti in ferro o acciaio. Se hai materiale diverso, descrivicelo nella richiesta." },
      { q: "Il ferro può essere ritirato insieme ad altri metalli?", a: "Sì, ma conviene segnalarlo: ferro e metalli non ferrosi vengono gestiti separatamente per favorire il recupero di ciascun materiale." },
      { q: "Come chiedo il ritiro del ferro?", a: "Usa il modulo di contatto, telefona o scrivici su WhatsApp indicando comune, quantità indicativa e tipo di materiale." }
    ],
    relatedServices: ["ritiro-rottami-privati", "acquisto-rottami-metallici", "ritiro-rottami-aziende"]
  },
  acciaio: {
    intro:
      "L'acciaio è presente sotto molte forme: ritagli di lamiera, profili, tubi, scaffalature, componenti di macchinari e scarti di lavorazione. Lo trattiamo sia quando arriva da privati sia quando proviene da attività produttive.",
    sources: [
      "Ritagli e scarti di lamiera da officine e carpenterie",
      "Profili, tubi e strutture da cantieri",
      "Scaffalature e contenitori metallici dismessi",
      "Componenti in acciaio da macchinari fuori uso"
    ],
    who: ["Aziende e officine", "Carpenterie e serramentisti", "Cantieri", "Privati con materiale metallico"],
    recovery:
      "Gli scarti in acciaio vengono separati dalle altre leghe metalliche e avviati al recupero. Anche in questo caso la distinzione tra materiali ferrosi e non ferrosi è il primo passo per una corretta gestione del rottame.",
    faqs: [
      { q: "Ritirate scarti di lamiera e profili in acciaio?", a: "Sì. Sono tra i materiali che gestiamo per aziende, officine e cantieri. Indicani quantità indicativa e comune per verificare la disponibilità." },
      { q: "Accettate acciaio insieme al ferro?", a: "Sì: ferro e acciaio rientrano entrambi nella categoria dei rottami ferrosi e vengono trattati insieme, separandoli dai metalli non ferrosi." },
      { q: "Gestite ritiri ricorrenti di scarti in acciaio?", a: "Per attività con produzione regolare di scarti è possibile richiedere informazioni su ritiri organizzati nel tempo." }
    ],
    relatedServices: ["ritiro-rottami-aziende", "ritiro-rottami-cantieri", "acquisto-rottami-metallici"]
  },
  rame: {
    intro:
      "Il rame è un metallo non ferroso molto ricorrente nei rottami: lo si trova nei cavi elettrici, nei tubi, nei componenti elettrici e in molte parti di impianti dismessi. Viene gestito separatamente dal ferro e dall'acciaio.",
    sources: [
      "Cavi elettrici e spezzoni di cavo",
      "Tubi e raccordi da impianti idraulici e termici",
      "Componenti elettrici ed elettronici contenenti rame",
      "Materiale da officine, cantieri e ristrutturazioni"
    ],
    who: ["Elettricisti e impiantisti", "Officine", "Cantieri", "Privati con cavi o tubi dismessi"],
    recovery:
      "Il rame recuperato viene separato dalle altre leghe non ferrose. Il suo recupero è importante perché il metallo può essere riutilizzato dopo la lavorazione, riducendo il bisogno di nuova estrazione.",
    faqs: [
      { q: "Ritirate cavi di rame?", a: "Sì. I cavi elettrici rientrano tra i materiali che trattiamo. Indicani tipologia e quantità indicativa nella richiesta." },
      { q: "Il rame deve essere separato dagli altri metalli?", a: "È preferibile. Se il materiale è misto, descrivici cosa è presente: verifichiamo insieme come gestirlo." },
      { q: "Lavorate con piccole quantità di rame?", a: "Valutiamo ogni richiesta in base al materiale descritto. Indica sempre quantità e comune per ricevere informazioni utili." }
    ],
    relatedServices: ["acquisto-rottami-metallici", "recupero-selezione-metalli", "ritiro-rottami-aziende"]
  },
  ottone: {
    intro:
      "L'ottone è una lega di rame e zinco presente in rubinetti, valvole, otturatori, piccoli componenti meccanici e oggetti di uso comune. Anche quando è mescolato ad altri rottami, va riconosciuto e gestito come metallo non ferroso.",
    sources: [
      "Rubinetti, valvole e raccordi da impianti",
      "Componenti meccanici e piccole parti di ottone",
      "Oggetti decorativi e serrature dismesse",
      "Materiale misto proveniente da officine e ristrutturazioni"
    ],
    who: ["Idraulici e installatori", "Officine meccaniche", "Cantieri", "Privati"],
    recovery:
      "L'ottone viene distinto dal rame puro e dagli altri metalli non ferrosi. Questa separazione consente di indirizzare correttamente la lega al recupero e al riutilizzo delle sue componenti metalliche.",
    faqs: [
      { q: "Ritirate rubinetti e valvole in ottone?", a: "Sì. Rientrano tra i materiali non ferrosi che trattiamo. Se provengono da una ristrutturazione, segnalali insieme agli altri metalli presenti." },
      { q: "Come riconosco l'ottone?", a: "Ha un colore giallo dorato, diverso dal rame rossastro. Se non sei sicuro, descrivici l'oggetto nella richiesta e ti aiutiamo a valutarlo." },
      { q: "Trattate ottone insieme al rame?", a: "Sono materiali diversi e vengono gestiti separatamente per favorire il recupero di ciascuna lega." }
    ],
    relatedServices: ["recupero-selezione-metalli", "acquisto-rottami-metallici", "ritiro-rottami-privati"]
  },
  alluminio: {
    intro:
      "L'alluminio è leggero e presente in profili per serramenti, lamiere, telai, contenitori e componenti di macchinari. Lo ritiriamo quando arriva da cantieri, officine, attività commerciali e proprietà private.",
    sources: [
      "Profili e telai di serramenti dismessi",
      "Lamiere e pannelli in alluminio",
      "Contenitori e componenti leggeri in alluminio",
      "Parti di macchinari e attrezzature fuori uso"
    ],
    who: ["Serramentisti", "Cantieri e ristrutturazioni", "Aziende", "Privati"],
    recovery:
      "L'alluminio viene separato dai metalli ferrosi e dalle altre leghe leggere. Il recupero di questo materiale permette di riutilizzarlo in nuovi prodotti con un minor consumo di risorse rispetto alla produzione primaria.",
    faqs: [
      { q: "Ritirate profili in alluminio da serramenti?", a: "Sì. Profili e telai da sostituzioni di serramenti sono tra i materiali che possiamo ritirare, insieme ad altre tipologie di alluminio." },
      { q: "L'alluminio può essere mischiato al ferro?", a: "Meglio evitarlo: sono materiali diversi. Se non è possibile separarli, indicacelo nella richiesta così valutiamo come gestire il materiale." },
      { q: "Ritirate lamiere in alluminio da cantieri?", a: "Sì. Indica quantità e comune del cantiere per verificare la disponibilità del ritiro." }
    ],
    relatedServices: ["ritiro-rottami-cantieri", "recupero-selezione-metalli", "acquisto-rottami-metallici"]
  },
  cavi: {
    intro:
      "I cavi elettrici sono una fonte importante di metalli non ferrosi, soprattutto rame e alluminio. Li trattiamo quando provengono da impianti dismessi, ristrutturazioni, officine o cantieri.",
    sources: [
      "Cavi di impianti elettrici dismessi",
      "Spezzoni e bobine di cavo da cantieri",
      "Cavi da macchinari e attrezzature fuori uso",
      "Materiale misto contenente cavi e connettori"
    ],
    who: ["Elettricisti", "Cantieri", "Officine", "Privati con impianti da smontare"],
    recovery:
      "I cavi vengono gestiti come materiale non ferroso e separati dagli altri rottami. Il metallo conduttore presente al loro interno può così essere recuperato e indirizzato a un nuovo ciclo di utilizzo.",
    faqs: [
      { q: "Ritirate cavi elettrici anche in piccole quantità?", a: "Valutiamo ogni richiesta in base al materiale descritto. Indica tipologia, quantità indicativa e comune." },
      { q: "Devono essere cavi già spellati?", a: "Non è necessario. Descrivici la tipologia di cavo presente: verifichiamo insieme come gestirlo." },
      { q: "I cavi vengono trattati insieme al ferro?", a: "No. I cavi rientrano tra i metalli non ferrosi e vengono separati dai rottami ferrosi." }
    ],
    relatedServices: ["acquisto-rottami-metallici", "recupero-selezione-metalli", "ritiro-rottami-aziende"]
  }
};
