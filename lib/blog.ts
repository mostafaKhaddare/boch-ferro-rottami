import type { FaqItem } from "./faqs";

export type BlogSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  steps?: { title: string; text: string }[];
};

export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  image: string;
  imageAlt: string;
  intro: string[];
  sections: BlogSection[];
  takeaways: string[];
  faqs: FaqItem[];
  relatedServices: string[];
  relatedMaterials: string[];
  relatedPosts: string[];
};

/**
 * Cinque articoli statici, senza CMS. I contenuti sono informativi e coerenti
 * con i servizi e le aree già presenti nel progetto: nessun prezzo, dato statistico,
 * autorizzazione, certificazione o referenza inventata.
 */
export const blogPosts: BlogPost[] = [
  {
    slug: "preparare-rottami-per-il-ritiro",
    title: "Come preparare i rottami metallici prima del ritiro",
    metaTitle: "Come Preparare i Rottami per il Ritiro | BOCH FERRO ROTTAMI",
    metaDescription:
      "Consigli pratici per separare, identificare e rendere accessibile il rottame metallico prima di richiedere un ritiro a privati o aziende.",
    excerpt:
      "Separare i materiali, rendere accessibile il luogo di carico e descrivere bene il rottame: tre passaggi che aiutano a organizzare un ritiro più ordinato.",
    category: "Guida pratica",
    image: "/images/servizi/privati.jpg",
    imageAlt: "Rottami metallici raccolti presso un'abitazione privata",
    intro: [
      "Prima di richiedere il ritiro di ferro vecchio, scarti di officina o materiale metallico da una cascina, vale la pena dedicare qualche minuto all'organizzazione del materiale. Non serve essere esperti: basta osservare cosa c'è, dove si trova e come si può caricare.",
      "Una descrizione chiara permette di verificare la disponibilità del servizio e di organizzare l'intervento in base alle condizioni reali del luogo. Ecco cosa controllare.",
    ],
    sections: [
      {
        heading: "1. Individua le tipologie di metallo presenti",
        paragraphs: [
          "Il primo passo è distinguere i materiali ferrosi da quelli non ferrosi. Ferro e acciaio sono i più comuni, ma spesso accanto a loro si trovano rame, ottone, alluminio e cavi elettrici. Ognuno di questi materiali viene gestito in modo diverso."
        ],
        bullets: [
          "Ferro e acciaio: cancelli, lamiere, profili, scaffali, reti, attrezzi.",
          "Rame e ottone: tubi, rubinetti, valvole, componenti di impianti.",
          "Alluminio: profili di serramenti, lamiere, telai leggeri.",
          "Cavi elettrici: spezzoni di impianto o cavi da macchinari dismessi.",
        ],
      },
      {
        heading: "2. Separa ciò che è possibile separare",
        paragraphs: [
          "Se i materiali sono già divisi, la gestione risulta più semplice. Non sempre è possibile farlo, soprattutto quando il rottame è accumulato da tempo: in quel caso non è un problema, ma segnalalo nella richiesta descrivendo cosa è presente e in che proporzione."
        ],
        bullets: [
          "Metti da parte, se puoi, i metalli non ferrosi rispetto al ferro.",
          "Evita di mescolare il materiale metallico con rifiuti non metallici.",
          "Raggruppa gli oggetti ingombranti in un'unica area, se lo spazio lo consente.",
        ],
      },
      {
        heading: "3. Controlla accessi e condizioni di carico",
        paragraphs: [
          "Un indicatore importante non è solo cosa c'è, ma dove si trova. Cortili interni, strade strette, rimesse e fienili possono richiedere indicazioni particolari per organizzare il carico."
        ],
        bullets: [
          "Segnala se il materiale è in garage, cortile, cascina, cantiere o officina.",
          "Indica eventuali scale, passaggi stretti o ostacoli.",
          "Se gli oggetti sono pesanti o fuori uso, descrivi le condizioni générali.",
        ],
      },
      {
        heading: "4. Prepara le informazioni per la richiesta",
        paragraphs: [
          "Il modulo di contatto è il modo più diretto per inviare una richiesta completa. Più informazioni utili inserisci, più sarà facile verificare la disponibilità del servizio nella tua zona."
        ],
        steps: [
          { title: "Comune", text: "Indica dove si trova il materiale: è il primo dato per verificare l'area servita." },
          { title: "Tipologia", text: "Scrivi quali metalli sono presenti, anche in modo approssimativo." },
          { title: "Quantità indicativa", text: "Bastano poche parole: cassoni, scaffali, cumulo, alcuni oggetti." },
          { title: "Fotografie", text: "Se possibile, inviale tramite i canali indicati nella pagina contatti." },
        ],
      },
      {
        heading: "5. Evita gli errori più comuni",
        bullets: [
          "Descrivere tutto come “ferro” quando sono presenti anche rame, ottone o alluminio.",
          "Omettere il comune: senza località non è possibile verificare la zona.",
          "Dare per scontato che il materiale sia accessibile: indica sempre eventuali difficoltà.",
          "Mescolare rottami metallici con materiali non identificati.",
        ],
      },
    ],
    takeaways: [
      "Separa, quando possibile, metalli ferrosi e non ferrosi.",
      "Descrivi quantità indicativa, comune e condizioni di accesso.",
      "Le fotografie aiutano a capire il materiale prima dell'intervento.",
      "Ogni ritiro viene verificato in base al materiale e alla zona.",
    ],
    faqs: [
      { q: "Devo smontare i oggetti prima del ritiro?", a: "Non sempre. Dipende dal tipo di materiale e dagli spazi disponibili. Indica nella richiesta come sono sistemati gli oggetti e verifichiamo insieme come organizzare il carico." },
      { q: "Posso chiedere il ritiro anche se il materiale è misto?", a: "Sì. Descrivici le tipologie presenti: la separazione preventiva aiuta, ma non è sempre possibile e viene valutata caso per caso." },
      { q: "Cosa devo indicare nel modulo di contatto?", a: "Comune, tipo di materiale, quantità indicativa e un breve messaggio sulle condizioni di accesso sono le informazioni più utili per una prima verifica." },
    ],
    relatedServices: ["ritiro-rottami-privati", "ritiro-rottami-aziende"],
    relatedMaterials: ["ferro", "rame", "cavi"],
    relatedPosts: ["riconoscere-i-metalli-da-recuperare", "rottami-in-azienda-officine-e-cantieri"],
  },
  {
    slug: "riconoscere-i-metalli-da-recuperare",
    title: "Ferro, rame, ottone e alluminio: come riconoscere i metalli da recuperare",
    metaTitle: "Riconoscere i Metalli da Recuperare | BOCH FERRO ROTTAMI",
    metaDescription:
      "Guida semplice per distinguere ferro, acciaio, rame, ottone, alluminio e cavi elettrici e indirizzarli correttamente al recupero.",
    excerpt:
      "Colore, peso e utilizzo aiutano a riconoscere i metalli più comuni. Una guida pratica per chi vuole descrivere meglio il proprio materiale.",
    category: "Materiali",
    image: "/images/servizi/recopero-rotami.jpg",
    imageAlt: "Materiali metallici selezionati per il recupero",
    intro: [
      "Non è necessario essere un esperto per distinguere i principali metalli presenti nei rottami. Colore, peso e tipo di oggetto forniscono indizi utili, soprattutto quando si prepara una richiesta di ritiro o si vuole capire come viene gestito il materiale.",
      "Ecco una guida semplice alle tipologie che trattiamo più spesso.",
    ],
    sections: [
      {
        heading: "Ferro e acciaio: i rottami ferrosi",
        paragraphs: [
          "Sono i materiali più diffusi nelle richieste di ritiro. Li si trova in cancelli, lamiere, profili, scaffalature, reti, biciclette, attrezzi e componenti di macchinari. Sono generalmente magnetici, caratteristica che li distingue dai metalli non ferrosi."
        ],
        bullets: ["Ferro vecchio da garage, cortili e abitazioni.", "Scarti di lamiera e profili da officine e cantieri.", "Materiale agricolo dismesso come recinti e attrezzi."],
      },
      {
        heading: "Rame: il metallo dal colore rossastro",
        paragraphs: [
          "Il rame si riconosce per il colore rosa-rosso e per il peso relativamente elevato. È presente soprattutto nei cavi elettrici, nei tubi e nei componenti di impianti idraulici ed elettrici dismessi."
        ],
        bullets: ["Cavi e spezzoni di cavo.", "Tubi e raccordi.", "Parti di componenti elettrici."],
      },
      {
        heading: "Ottone: la lega dal colore giallo",
        paragraphs: [
          "L'ottone ha un colore giallo dorato e si trova in rubinetti, valvole, raccordi e piccoli componenti meccanici. È una lega a base di rame e zinco e va distinto dal rame, pur essendo anch'esso un metallo non ferroso."
        ],
      },
      {
        heading: "Alluminio: leggero e diffuso nei serramenti",
        paragraphs: [
          "L'alluminio è più leggero di ferro e rame. Lo si incontra in profili e telai di serramenti, lamiere, pannelli, contenitori e parti di macchinari. È molto comune nei materiali provenienti da ristrutturazioni."
        ],
      },
      {
        heading: "Cavi elettrici: una fonte di metallo non ferroso",
        paragraphs: [
          "I cavi contengono conduttori in rame o alluminio e rivestimenti di altro tipo. Anche quando non sono stati preparati in precedenza, possono essere gestiti come materiale non ferroso: descrivine tipologia e quantità nella richiesta."
        ],
      },
      {
        heading: "Perché la distinzione è utile",
        paragraphs: [
          "Ogni metallo segue un percorso di recupero diverso. Separare correttamente i materiali aiuta a indirizzarli meglio e a evitare che leghe diverse vengano mescolate. Se non sei sicuro di cosa hai, non serve azzardare: descrivi l'oggetto e ti aiutiamo a valutarlo."
        ],
      },
    ],
    takeaways: [
      "Ferro e acciaio sono ferrosi e generalmente magnetici.",
      "Rame, ottone e alluminio vanno gestiti separatamente.",
      "I cavi elettrici rientrano tra i materiali non ferrosi.",
      "In caso di dubbi, descrivi l'oggetto nella richiesta.",
    ],
    faqs: [
      { q: "Come riconosco l'ottone dal rame?", a: "L'ottone tende al giallo dorato, mentre il rame ha un colore rossastro. Se non sei sicuro, indica l'oggetto di provenienza, ad esempio un rubinetto o un cavo." },
      { q: "L'alluminio è magnetico?", a: "No. L'alluminio non è magnetico ed è più leggero di ferro e acciaio: sono due indizi semplici per distinguerlo." },
      { q: "Devono essere già separati per essere ritirati?", a: "Non necessariamente. Se il materiale è misto, segnalalo: verifichiamo insieme come gestirlo." },
    ],
    relatedServices: ["recupero-selezione-metalli", "acquisto-rottami-metallici"],
    relatedMaterials: ["ferro", "rame", "ottone", "alluminio", "cavi"],
    relatedPosts: ["preparare-rottami-per-il-ritiro", "recupero-metalli-e-economia-circolare"],
  },
  {
    slug: "rottami-in-azienda-officine-e-cantieri",
    title: "Rottami in azienda: come gestire scarti da officine e cantieri",
    metaTitle: "Gestione Rottami in Azienda, Officine e Cantieri | BOCH",
    metaDescription:
      "Come organizzare raccolta e stoccaggio dei rottami metallici in officina, carpinteria e cantiere, e quali informazioni preparare per il ritiro.",
    excerpt:
      "Dallo stoccaggio degli scarti alle informazioni da preparare per il ritiro: una guida per attività produttive e cantieri.",
    category: "Per aziende",
    image: "/images/servizi/ritiro-rottami-mitalici.jpg",
    imageAlt: "Raccolta di rottami metallici presso un'attività produttiva",
    intro: [
      "Officine meccaniche, fabbri, carpenterie, serramentisti, elettricisti, idraulici e imprese edili producono ogni giorno scarti metallici diversi. Ritagli di lamiera, profili, tubi, cavi e componenti dismessi occupano spazio e vanno gestiti con ordine.",
      "Organizzare la raccolta non significa solo liberare area: significa anche avere informazioni utili quando si richiede un ritiro.",
    ],
    sections: [
      {
        heading: "Cosa producono le officine",
        paragraphs: [
          "Nelle officine e nelle carpenterie si accumulano scarti di taglio, ritagli di lamiera, profili, tubi e parti di macchinari. Spesso coesistono materiali ferrosi e non ferrosi, perché la lavorazione riguarda metalli diversi."
        ],
        bullets: ["Ritagli di lamiera e profili in acciaio.", "Rame, ottone e alluminio da lavorazioni specifiche.", "Cavi e componenti elettrici da impianti o attrezzature."],
      },
      {
        heading: "Il materiale tipico di un cantiere",
        paragraphs: [
          "Nei cantieri di ristrutturazione e nei lavori edili compaiono tubature, telai, lamiere, impalcature e serramenti dismessi. In questo caso conta molto anche la logistica: accessi, spazi di manovra e tempi dell'intervento."
        ],
        bullets: ["Tubi, profili e lamiere da impianti e strutture.", "Telai e serramenti metallici sostituiti.", "Elementi metallici da ponteggi e impalcature."],
      },
      {
        heading: "Organizzare gli spazi di stoccaggio",
        paragraphs: [
          "Un'area dedicata e ordinata rende più semplice descrivere il materiale e organizzarne il carico. Quando è possibile, conviene tenere separati i principali gruppi di metalli e indicare dove si trovano."
        ],
        bullets: ["Dedica un'area precisa ai rottami metallici.", "Separa, se puoi, ferro e metalli non ferrosi.", "Evita di mescolare il metallo con materiale non identificato.", "Segnala gli oggetti particolarmente ingombranti."],
      },
      {
        heading: "Cosa concordare per un ritiro",
        paragraphs: [
          "Prima dell'intervento è utile definire pochi punti pratici. Non esistono regole uguali per tutte le attività: le condizioni del sito fanno la differenza."
        ],
        steps: [
          { title: "Materiale", text: "Tipologie presenti e quantità indicativa, anche con fotografie." },
          { title: "Accesso", text: "Dove avviene il carico e come si arriva all'area di stoccaggio." },
          { title: "Disponibilità", text: "Verifica della zona e delle esigenze operative dell'attività." },
          { title: "Ritiri ricorrenti", text: "Se la produzione è continua, si può chiedere un ritiro organizzato nel tempo." },
        ],
      },
      {
        heading: "Il valore della separazione",
        paragraphs: [
          "Metalli diversi seguono percorsi di recupero diversi. Una raccolta ordinata, anche semplice, aiuta a gestire il materiale in modo più chiaro e a evitare che tipologie differenti finiscano insieme."
        ],
      },
    ],
    takeaways: [
      "Officine e cantieri producono tipologie di scarto diverse.",
      "Un'area di stoccaggio ordinata aiuta a descrivere il materiale.",
      "Indica sempre accessi e condizioni del sito nella richiesta.",
      "I ritiri ricorrenti vanno concordati in base alla produzione.",
    ],
    faqs: [
      { q: "Ritirate scarti da officine meccaniche?", a: "Sì. Gestiamo scarti metallici da officine, fabbri e carpenterie. Descrivi le tipologie presenti per organizzare il ritiro." },
      { q: "Potete intervenire in cantiere?", a: "Possiamo organizzare il ritiro di materiale metallico da cantieri. Indica accessi e quantità indicative nella richiesta." },
      { q: "Gestite ritiri periodici?", a: "Per attività con produzione regolare di rottami è possibile richiedere informazioni su ritiri organizzati nel tempo." },
    ],
    relatedServices: ["ritiro-rottami-aziende", "ritiro-rottami-cantieri", "ritiro-rottami-aziende-agricole"],
    relatedMaterials: ["acciaio", "rame", "alluminio"],
    relatedPosts: ["preparare-rottami-per-il-ritiro", "recupero-metalli-e-economia-circolare"],
  },
  {
    slug: "recupero-metalli-e-economia-circolare",
    title: "Recupero dei metalli e economia circolare: perché separare i materiali",
    metaTitle: "Recupero Metalli ed Economia Circolare | BOCH FERRO ROTTAMI",
    metaDescription:
      "Come funziona il recupero dei rottami metallici, perché è importante separare ferro e metalli non ferrosi e quale contributo possono dare privati e aziende.",
    excerpt:
      "Dalla raccolta alla selezione: cosa significa recuperare un metallo e perché la separazione dei materiali è il primo passo.",
    category: "Recupero",
    image: "/images/servizi/ritiro-rottami.jpg",
    imageAlt: "Materiale metallico pronto per la raccolta e il recupero",
    intro: [
      "Il recupero dei metalli è un modo per dare una nuova utilità a materiali già estratti e lavorati. Non si tratta solo di raccogliere rottami: conta anche come vengono distinti e indirizzati.",
      "Per capire il processo è utile partire da un concetto semplice: materiali diversi hanno caratteristiche diverse e non possono essere trattati allo stesso modo.",
    ],
    sections: [
      {
        heading: "Cosa significa recuperare un metallo",
        paragraphs: [
          "Recuperare un metallo significa raccoglierlo dopo il suo utilizzo e indirizzarlo a un nuovo ciclo di impiego. Ferro, acciaio, rame, ottone e alluminio possono essere riutilizzati come materia prima una volta gestiti correttamente."
        ],
      },
      {
        heading: "Perché separare ferro e metalli non ferrosi",
        paragraphs: [
          "Ferro e acciaio sono ferrosi; rame, ottone e alluminio non lo sono. Le due famiglie seguono percorsi differenti. Mescolarle rende più difficile distinguere il materiale e riduce la chiarezza nella gestione del rottame."
        ],
        bullets: [
          "Il ferro e l'acciaio vengono gestiti come rottami ferrosi.",
          "Rame, ottone e alluminio richiedono una gestione separata.",
          "I cavi elettrici rientrano tra i materiali non ferrosi.",
        ],
      },
      {
        heading: "Dalla raccolta alla valorizzazione",
        steps: [
          { title: "Raccolta", text: "Il materiale viene ritirato presso privati, aziende, cantieri o attività agricole." },
          { title: "Distinzione", text: "Le diverse tipologie di metallo vengono separate e riconosciute." },
          { title: "Gestione", text: "Il materiale selezionato viene indirizzato in base alla propria tipologia." },
          { title: "Nuovo utilizzo", text: "Il metallo recuperato può tornare a essere una risorsa per nuovi prodotti." },
        ],
      },
      {
        heading: "Il contributo di privati e aziende",
        paragraphs: [
          "Una minima separazione fatta a casa, in officina o in cantiere aiuta l'intero processo. Non serve attrezzatura particolare: spesso basta indicare cosa è presente e tenere distinte le tipologie più evidenti."
        ],
        bullets: ["Privati: ferro vecchio, oggetti metallici, cavi di impianti dismessi.", "Aziende: scarti di lavorazione e materiale dismesso.", "Cantieri e agricoltura: profili, lamiere, attrezzi e recinti."],
      },
      {
        heading: "Cosa evitare",
        bullets: [
          "Mescolare il metallo con rifiuti non metallici non identificati.",
          "Dare per scontato che tutti i rottami abbiano lo stesso valore o la stessa gestione.",
          "Omettere informazioni importanti al momento della richiesta.",
        ],
      },
    ],
    takeaways: [
      "Il recupero inizia con una corretta distinzione dei materiali.",
      "Ferro e non ferroso seguono percorsi diversi.",
      "La separazione può essere semplice, ma aiuta la gestione.",
      "Ogni richiesta viene valutata in base al materiale descritto.",
    ],
    faqs: [
      { q: "Perché è importante separare i metalli?", a: "Perché ferro, rame, ottone e alluminio hanno caratteristiche diverse. Distingerli aiuta a indirizzare correttamente ogni materiale al recupero." },
      { q: "Accettate materiale misto?", a: "Possiamo valutarlo. Descrivici cosa è presente: la separazione preventiva aiuta, ma non è sempre possibile." },
      { q: "Il recupero riguarda solo le aziende?", a: "No. Anche i privati possono conferire ferro vecchio, metalli non ferrosi e cavi elettrici per il recupero." },
    ],
    relatedServices: ["recupero-selezione-metalli", "acquisto-rottami-metallici"],
    relatedMaterials: ["ferro", "alluminio", "rame"],
    relatedPosts: ["riconoscere-i-metalli-da-recuperare", "vendere-rottami-in-piemonte"],
  },
  {
    slug: "vendere-rottami-in-piemonte",
    title: "Vendere rottami in Piemonte: informazioni utili prima di contattare un operatore",
    metaTitle: "Vendere Rottami in Piemonte | Guida | BOCH FERRO ROTTAMI",
    metaDescription:
      "Cosa preparare prima di vendere rottami ferrosi e metalli non ferrosi in Piemonte: tipologia, quantità, condizioni e zone servite.",
    excerpt:
      "Tipo di metallo, quantità, condizioni e comune: le informazioni da preparare per una prima valutazione del materiale nelle aree servite.",
    category: "Locale",
    image: "/images/servizi/acquisto-rottami.jpg",
    imageAlt: "Rottami metallici selezionati per il conferimento",
    intro: [
      "Chi decide di vendere ferro, acciaio o metalli non ferrosi si trova spesso di fronte a una domanda semplice: cosa devo dire a un operatore per ottenere informazioni utili? La risposta sta nella descrizione del materiale.",
      "Non servono perizie: bastano pochi dati concreti, soprattutto se ci si trova in una delle aree in cui il servizio viene abitualmente organizzato.",
    ],
    sections: [
      {
        heading: "Prima di scrivere: osserva il materiale",
        paragraphs: [
          "Guarda cosa hai a disposizione e cerca di capire se prevale il ferro o se sono presenti metalli non ferrosi. La presenza di cavi, tubi in rame, ottone o profili in alluminio cambia la descrizione della richiesta."
        ],
        bullets: ["Ferro e acciaio: rottami ferrosi più comuni.", "Rame, ottone, alluminio: metalli non ferrosi.", "Cavi elettrici: da indicare separatamente."],
      },
      {
        heading: "Le informazioni da preparare",
        steps: [
          { title: "Tipologia di metallo", text: "Indica cosa è presente, anche in modo approssimativo." },
          { title: "Quantità indicativa", text: "Un cumulo, pochi oggetti, cassoni: una stima è sufficiente." },
          { title: "Condizioni", text: "Il materiale è pulito, misto, smontato o ancora montato?" },
          { title: "Comune", text: "La località permette di verificare l'area servita." },
        ],
      },
      {
        heading: "Come viene considerata la valutazione",
        paragraphs: [
          "Non esiste una risposta valida per ogni caso: tipo di metallo, quantità e condizioni sono gli elementi che contano. Per questo non pubblichiamo prezzi indicativi: preferiamo valutare ogni richiesta in base al materiale effettivamente descritto."
        ],
      },
      {
        heading: "Le aree servite in Piemonte",
        paragraphs: [
          "Organizziamo ritiri e conferimenti principalmente ad Asti, Nizza Monferrato, Canelli, Acqui Terme, Incisa Scapaccino, Calamandrana e Costigliole d'Asti, oltre che nei comuni limitrofi. Se il tuo comune non è in elenco, indicalo comunque nella richiesta: verifichiamo la disponibilità."
        ],
      },
      {
        heading: "Domande utili da fare",
        bullets: [
          "Come viene gestito il tipo di materiale che ho?",
          "Quali informazioni servono per organizzare il ritiro?",
          "Il comune in cui mi trovo è servito?",
          "Come va descritto il materiale misto, se presente?",
        ],
      },
      {
        heading: "Dopo l'accordo",
        paragraphs: [
          "Una volta definite le informazioni, si organizza il conferimento del materiale: modalità di ritiro, accesso al luogo e indicazioni pratiche vengono concordate caso per caso. Il rottame viene poi gestito e selezionato in base alla propria tipologia."
        ],
      },
    ],
    takeaways: [
      "Descrivi tipologia, quantità indicativa e condizioni del materiale.",
      "Indica sempre il comune per verificare l'area servita.",
      "Le valutazioni dipendono dal materiale, non da prezzi standard.",
      "Anche i comuni non elencati possono essere verificati su richiesta.",
    ],
    faqs: [
      { q: "Pubblicate un listino prezzi?", a: "No. La gestione dipende da tipo di metallo, quantità e condizioni: per questo valutiamo ogni richiesta singolarmente." },
      { q: "Vendete anche cavi elettrici?", a: "Rientrano tra i materiali non ferrosi che gestiamo. Indica tipologia e quantità per consentirci una verifica." },
      { q: "Lavorate con piccole quantità?", a: "Valutiamo ogni richiesta in base al materiale descritto. Indica sempre quantità e comune." },
    ],
    relatedServices: ["acquisto-rottami-metallici", "ritiro-rottami-privati"],
    relatedMaterials: ["ferro", "rame", "cavi"],
    relatedPosts: ["recupero-metalli-e-economia-circolare", "preparare-rottami-per-il-ritiro"],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
