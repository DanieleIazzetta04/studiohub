// ═══════════════════════════════════════════════════════════════
// 5 Simulazioni "MULTIPLA" di Economia e Gestione delle Imprese
// Solo domande a risposta multipla (20 per simulazione, totale 100).
// Difficoltà mista: definizioni, autori, riconoscimento concetti,
// vero/falso, mini-casi. Coverage di tutte le 12 settimane EGI.
// ═══════════════════════════════════════════════════════════════

export const SIMULAZIONI_EGI_MULTIPLA = [
  // ────────────────────────────────────────────────────────────
  // MULTIPLA 1 — Strategia & Ambiente (W1, W2, W3)
  // ────────────────────────────────────────────────────────────
  {
    id: 1,
    title: 'Multipla 1',
    subtitle: 'Strategia, ambiente competitivo e istituzioni',
    duration: 60,
    multipleChoice: [
      {
        question: "Le 5 forze di Porter NON includono…",
        options: [
          'Rivalità tra concorrenti',
          'Minaccia di nuovi entranti',
          'Forza del management interno',
          'Potere contrattuale dei fornitori',
          'Minaccia di prodotti sostituti'
        ],
        correctIndices: [2],
        explanation: "Le 5 forze sono: rivalità, nuovi entranti, sostituti, potere fornitori, potere clienti. Il management è una variabile interna (RBV), non una forza strutturale del settore.",
        weeks: [2]
      },
      {
        question: "Quali tra le seguenti sono dimensioni dell'analisi PESTEL?",
        options: [
          'Politica',
          'Economica',
          'Stocastica',
          'Tecnologica',
          'Ecologica/Ambientale'
        ],
        correctIndices: [0, 1, 3, 4],
        explanation: "PESTEL = Political, Economic, Social, Technological, Environmental, Legal. Non esiste la dimensione 'stocastica'. Il framework serve a leggere l'ambiente macro (W1).",
        weeks: [1]
      },
      {
        question: "Il paradigma SCP (Structure-Conduct-Performance) afferma che…",
        options: [
          'la performance dipende solo dalle risorse interne',
          'la struttura del settore influenza la condotta delle imprese e quindi le performance',
          'le istituzioni determinano la struttura del settore',
          'la condotta dei consumatori determina la struttura',
          'la struttura è esogena e non modificabile'
        ],
        correctIndices: [1],
        explanation: "Bain-Mason (Harvard): la struttura del settore (numero imprese, barriere, differenziazione) condiziona la condotta (prezzi, R&D, pubblicità) che a sua volta determina la performance (profittabilità).",
        weeks: [2]
      },
      {
        question: "Le tre forze dell'isomorfismo istituzionale di DiMaggio & Powell (1983) sono:",
        options: [
          'Coercitiva, Normativa, Mimetica',
          'Coercitiva, Mimetica, Tecnologica',
          'Cognitiva, Normativa, Regolatoria',
          'Politica, Economica, Sociale',
          'Strutturale, Strategica, Operativa'
        ],
        correctIndices: [0],
        explanation: "Le 3 pressioni isomorfiche: Coercitiva (pressioni formali da Stato/regolatori), Normativa (professionalizzazione, network), Mimetica (imitazione in contesti di incertezza).",
        weeks: [3]
      },
      {
        question: "Il Diamante della Strategia di Hambrick & Fredrickson include i seguenti elementi:",
        options: [
          'Arene',
          'Vehicles (mezzi)',
          'Differenziatori',
          'Struttura organizzativa',
          'Logica economica'
        ],
        correctIndices: [0, 1, 2, 4],
        explanation: "I 5 elementi del Diamante: Arenas (dove competiamo), Vehicles (come ci arriviamo), Differentiators (come vinciamo), Staging (sequenza), Economic Logic (come guadagniamo). La struttura non è uno dei 5.",
        weeks: [1]
      },
      {
        question: "Le rendite ricardiane derivano da…",
        options: [
          'monopolio legale',
          'risorse scarse di qualità superiore in offerta limitata',
          'innovazione radicale',
          'lobby istituzionale',
          'sinergie tra business'
        ],
        correctIndices: [1],
        explanation: "Ricardo: rendite da risorse naturali/strategiche scarse (terra fertile, location, talento). 0=monopolistiche, 2=schumpeteriane, 3=di influenza.",
        weeks: [3]
      },
      {
        question: "Le barriere all'uscita includono tipicamente:",
        options: [
          'Asset specifici di settore (specializzati e difficilmente riconvertibili)',
          'Vincoli contrattuali con dipendenti o sindacati',
          'Bassi costi fissi',
          'Vincoli emotivi del management',
          'Elevata standardizzazione del prodotto'
        ],
        correctIndices: [0, 1, 3],
        explanation: "Barriere all'uscita: asset specifici, costi fissi alti (non bassi), interrelazioni tra business, barriere governative/sindacali, vincoli emotivi/strategici. Ridurre la pressione all'uscita aumenta la rivalità interna.",
        weeks: [2]
      },
      {
        question: "Il Time Cone è uno strumento usato per…",
        options: [
          'analizzare la concorrenza nel settore',
          'pianificare orari di produzione',
          'gestire la dimensione temporale dei trend di scenario',
          'calcolare il break-even point',
          'mappare la catena del valore'
        ],
        correctIndices: [2],
        explanation: "Il Time Cone (Voros) suddivide gli scenari futuri in zone (probable, plausible, possible, preposterous) per ragionare su trend e disruption nella prospettiva strategica di lungo periodo.",
        weeks: [1]
      },
      {
        question: "Quali tra i seguenti sono Megatrend rilevanti per le imprese contemporanee?",
        options: [
          'Digitalizzazione e Industry 4.0',
          'Cambiamento demografico (invecchiamento popolazione)',
          'Urbanizzazione',
          'Centralizzazione politica',
          'Climate change'
        ],
        correctIndices: [0, 1, 2, 4],
        explanation: "I principali megatrend includono digitalizzazione, demografia (invecchiamento e calo natalità), urbanizzazione, climate change, scarsità risorse. La 'centralizzazione politica' non è un megatrend riconosciuto.",
        weeks: [1]
      },
      {
        question: "I tre pilastri dell'analisi istituzionale (Scott) sono:",
        options: [
          'Regolatorio, Normativo, Cognitivo',
          'Politico, Economico, Sociale',
          'Coercitivo, Mimetico, Cognitivo',
          'Strategico, Operativo, Tattico',
          'Macro, Meso, Micro'
        ],
        correctIndices: [0],
        explanation: "Scott (2014): Regolatorio (leggi/sanzioni), Normativo (norme sociali e professionali), Cognitivo (schemi mentali e categorie condivise). I 3 pilastri stabilizzano l'ambiente istituzionale.",
        weeks: [3]
      },
      {
        question: "Il fenomeno dello Stigma organizzativo (Hudson 2008) si riferisce a…",
        options: [
          'riconoscimento sociale positivo',
          'perdita di reputazione per associazione a categorie devianti',
          'segno distintivo del marchio',
          'logo aziendale',
          'simbolo di status del management'
        ],
        correctIndices: [1],
        explanation: "Lo stigma organizzativo è una valutazione sociale collettiva negativa che screditata l'organizzazione (es. tobacco, gambling, armi). Riduce legittimità istituzionale e accesso a risorse.",
        weeks: [3]
      },
      {
        question: "I 17 Sustainable Development Goals (SDGs) sono stati promulgati da:",
        options: [
          'OECD nel 2010',
          'ONU nel 2015 (Agenda 2030)',
          'UE nel 2019 (Green Deal)',
          'WTO nel 2005',
          'World Economic Forum nel 2020'
        ],
        correctIndices: [1],
        explanation: "Gli SDGs sono parte dell'Agenda 2030 ONU, adottata nel 2015. Sono 17 obiettivi (No Poverty, Zero Hunger, ecc.) con 169 target. Fanno da framework globale per la sostenibilità.",
        weeks: [1]
      },
      {
        question: "I raggruppamenti strategici (Grant) sono…",
        options: [
          'cluster di aziende che competono con strategie simili nello stesso settore',
          'consorzi temporanei per gare d\'appalto',
          'alleanze strategiche formali',
          'gruppi di lobbying settoriali',
          'aggregati di business unit della stessa impresa'
        ],
        correctIndices: [0],
        explanation: "I raggruppamenti strategici (es. nel settore auto: premium tedeschi, generalisti, sportivi) raggruppano imprese con dimensioni e posizionamento simili. La rivalità intra-gruppo è più alta che inter-gruppo.",
        weeks: [2]
      },
      {
        question: "La Curva di esperienza spiega che…",
        options: [
          'i costi unitari diminuiscono al raddoppiare del volume cumulato di produzione',
          'i ricavi aumentano con il tempo',
          'i prezzi crescono nel lungo periodo',
          'la qualità migliora con l\'invecchiamento del prodotto',
          'i dipendenti diventano più costosi'
        ],
        correctIndices: [0],
        explanation: "Boston Consulting Group: ad ogni raddoppio del volume cumulato di produzione, i costi unitari diminuiscono di una % costante (tipicamente 15-30%) per learning, scala e innovazione di processo.",
        weeks: [2]
      },
      {
        question: "La Triple Bottom Line (Elkington) include le dimensioni:",
        options: [
          'People',
          'Planet',
          'Profit',
          'Power',
          'Process'
        ],
        correctIndices: [0, 1, 2],
        explanation: "TBL (Elkington 1994): People (sociale), Planet (ambientale), Profit (economico). Le tre P della sostenibilità: l'impresa deve creare valore in tutte e tre le dimensioni.",
        weeks: [1]
      },
      {
        question: "In un settore con elevate barriere all'entrata, ci si aspetta…",
        options: [
          'profittabilità media più alta',
          'maggior numero di nuovi entranti',
          'scarsa differenziazione',
          'pressione sui prezzi maggiore',
          'minore minaccia da parte di nuovi entranti'
        ],
        correctIndices: [0, 4],
        explanation: "Barriere alte → nuovi entranti scoraggiati → meno pressione concorrenziale → margini sostenibili più alti. Esempi: brevetti, scala, capitale, accesso ai canali distributivi.",
        weeks: [2]
      },
      {
        question: "Il modello di Peng (2002) sull'Institutional-Based View afferma che le strategie d'impresa sono determinate da…",
        options: [
          'sole condizioni di mercato',
          'sole risorse interne',
          'l\'interazione fra istituzioni e risorse aziendali',
          'la struttura proprietaria',
          'le tendenze tecnologiche di settore'
        ],
        correctIndices: [2],
        explanation: "Peng aggiunge la 'terza gamba' della strategy tripod: oltre a Industry-Based View (Porter) e Resource-Based View (Barney), le istituzioni (formali e informali) sono determinanti del comportamento strategico.",
        weeks: [3]
      },
      {
        question: "La differenza tra economie di scala ed economie di scopo è:",
        options: [
          'le scale derivano dal volume di un singolo prodotto, le scopo dalla condivisione di risorse tra prodotti diversi',
          'le scopo derivano dal volume, le scala dalla condivisione',
          'sono sinonimi',
          'le scale riguardano solo la finanza, le scopo solo il marketing',
          'sono entrambe legate solo all\'apprendimento'
        ],
        correctIndices: [0],
        explanation: "Scala: riduzione di costo unitario all'aumentare del volume (singolo prodotto). Scopo: riduzione di costo producendo più prodotti diversi che condividono risorse (R&D, brand, distribuzione).",
        weeks: [2]
      },
      {
        question: "Per Camuffo & Cappellari (2005) i meccanismi di coordinamento istituzionale producono…",
        options: [
          'omogeneità tra imprese (isomorfismo)',
          'esclusivamente differenziazione',
          'solo competizione di prezzo',
          'distruzione creatrice',
          'fallimenti di mercato'
        ],
        correctIndices: [0],
        explanation: "I meccanismi istituzionali (coercitivi, normativi, mimetici) producono convergenza dei comportamenti aziendali (isomorfismo) verso forme legittimate, sacrificando spesso l'efficienza tecnica per la legittimità.",
        weeks: [3]
      },
      {
        question: "La generazione dei Baby Boomers è caratterizzata da…",
        options: [
          'nati 1946-1964, ottimismo, lavoro come centralità identitaria, alto potere d\'acquisto',
          'nati 1997-2012, nativi digitali, esperienze > possesso',
          'nati 1965-1980, scetticismo, equilibrio vita/lavoro',
          'nati 1981-1996, pragmatismo digitale',
          'generazione del dopoguerra ante 1945'
        ],
        correctIndices: [0],
        explanation: "Baby Boomers (1946-1964): nati nel boom economico post-bellico, attaccati al lavoro, fiduciosi nelle istituzioni, oggi rappresentano la 'silver economy' con grande capacità di spesa.",
        weeks: [1]
      }
    ],
    teoriaApplicata: [],
    esercizi: []
  },

  // ────────────────────────────────────────────────────────────
  // MULTIPLA 2 — Risorse & Strategie competitive (W4, W5)
  // ────────────────────────────────────────────────────────────
  {
    id: 2,
    title: 'Multipla 2',
    subtitle: 'Risorse, conoscenza e strategie competitive',
    duration: 60,
    multipleChoice: [
      {
        question: "Il framework VRIO è composto dai criteri:",
        options: [
          'Value, Rarity, Imitability, Organization',
          'Value, Resources, Innovation, Operation',
          'Vision, Resources, Identity, Outcome',
          'Volume, Rate, Investment, Output',
          'Value, Reach, Income, Output'
        ],
        correctIndices: [0],
        explanation: "VRIO (Barney 1991): Value (la risorsa neutralizza minacce o sfrutta opportunità), Rarity (è scarsa), Imitability (è costosa da imitare), Organization (l'impresa è organizzata per sfruttarla).",
        weeks: [4]
      },
      {
        question: "Una risorsa Valuable e Rare ma facilmente Imitabile genera:",
        options: [
          'Vantaggio competitivo sostenibile',
          'Vantaggio competitivo temporaneo',
          'Parità competitiva',
          'Svantaggio competitivo',
          'Distruzione del valore'
        ],
        correctIndices: [1],
        explanation: "Esiti VRIO: V e R ma non I → vantaggio temporaneo (i concorrenti recupereranno). Solo V+R+I+O genera vantaggio sostenibile. Solo V → parità. Non V → svantaggio.",
        weeks: [4]
      },
      {
        question: "Il modello SECI di Nonaka descrive la conversione di conoscenza tra:",
        options: [
          'Tacita e esplicita',
          'Individuale e organizzativa',
          'Vecchia e nuova',
          'Interna ed esterna',
          'Hard e soft skill'
        ],
        correctIndices: [0],
        explanation: "SECI (Socializzazione T→T, Esternalizzazione T→E, Combinazione E→E, Internalizzazione E→T) è il ciclo di conversione tra conoscenza tacita ed esplicita (Polanyi).",
        weeks: [4]
      },
      {
        question: "Le 5 attività primarie della catena del valore di Porter sono:",
        options: [
          'Logistica in entrata',
          'Operations',
          'Logistica in uscita',
          'Marketing & Vendite',
          'Servizi post-vendita'
        ],
        correctIndices: [0, 1, 2, 3, 4],
        explanation: "Le 5 primarie: Inbound Logistics, Operations, Outbound Logistics, Marketing & Sales, Service. Le 4 di supporto: Infrastruttura, HR, R&D/Tecnologia, Approvvigionamenti.",
        weeks: [5]
      },
      {
        question: "Le 3 strategie generiche di Porter sono:",
        options: [
          'Cost Leadership, Differenziazione, Focus',
          'Differenziazione, Diversificazione, Internazionalizzazione',
          'Innovazione, Imitazione, Posizionamento',
          'Crescita, Stabilità, Disinvestimento',
          'Penetrazione, Sviluppo, Diversificazione'
        ],
        correctIndices: [0],
        explanation: "Porter (1985): le strategie generiche sono Cost Leadership (basso costo), Differenziazione (unicità percepita), Focus (nicchia, con sotto-strategia di costo o differenziazione).",
        weeks: [5]
      },
      {
        question: "Lo 'Stuck in the middle' (Porter) descrive un'impresa che…",
        options: [
          'eccelle in costo e qualità contemporaneamente',
          'non riesce a essere né leader di costo né differenziata, e sotto-performa',
          'è in fase di transizione tra due strategie',
          'occupa una posizione intermedia profittevole',
          'persegue una strategia di focus'
        ],
        correctIndices: [1],
        explanation: "Per Porter è una posizione perdente: chi tenta entrambe le strategie senza coerenza finisce a metà, con costi più alti del leader di costo e meno differenziazione del differenziatore.",
        weeks: [5]
      },
      {
        question: "Le proprietà desiderabili delle risorse strategiche includono (almeno una corretta):",
        options: [
          'Durabilità (resistenza all\'obsolescenza)',
          'Trasparenza (facilmente comprensibili dai concorrenti)',
          'Trasferibilità limitata',
          'Replicabilità nulla',
          'Appropriabilità dei rendimenti'
        ],
        correctIndices: [0, 2, 3, 4],
        explanation: "Risorse di valore: durabili, NON trasparenti (ambiguità causale), non trasferibili sul mercato, non replicabili e con rendimenti appropriabili dall'impresa. La trasparenza facilita l'imitazione.",
        weeks: [4]
      },
      {
        question: "La RBV è stata sviluppata principalmente da:",
        options: [
          'Porter',
          'Penrose, Wernerfelt, Barney',
          'Mintzberg',
          'Christensen',
          'Kotler'
        ],
        correctIndices: [1],
        explanation: "Penrose (1959, 'Theory of the Growth of the Firm'), Wernerfelt (1984, 'A Resource-Based View'), Barney (1991, VRIO). La RBV vede l'impresa come bundle di risorse uniche.",
        weeks: [4]
      },
      {
        question: "La conoscenza tacita è caratterizzata da:",
        options: [
          'difficile codificazione',
          'forte componente esperienziale',
          'facile diffusione via documenti',
          'standardizzabilità immediata',
          'trasferibilità tramite training one-to-one e mentoring'
        ],
        correctIndices: [0, 1, 4],
        explanation: "Polanyi: 'sappiamo più di quanto possiamo dire'. La tacita è personale, contextual, difficile da codificare; si trasmette via socializzazione (apprendistato, observation, storytelling).",
        weeks: [4]
      },
      {
        question: "Il principio di prossimità nelle strategie di differenziazione (Ghemawat) afferma che…",
        options: [
          'differenziarsi richiede premium price che copra il costo aggiuntivo',
          'i costi devono essere vicini a quelli dei concorrenti per non erodere il premium',
          'la prossimità geografica con i clienti garantisce VC',
          'occorre essere vicini ai fornitori',
          'tutte le precedenti sono sinonimi'
        ],
        correctIndices: [0, 1],
        explanation: "Ghemawat: la differenziazione è sostenibile se il premium price ottenuto > extra-costo della differenziazione, mantenendo costi sufficientemente vicini ai cost leader (cost proximity).",
        weeks: [5]
      },
      {
        question: "I cost driver di Porter includono:",
        options: [
          'Economie di scala',
          'Apprendimento',
          'Utilizzo della capacità produttiva',
          'Localizzazione geografica',
          'Volume del marchio'
        ],
        correctIndices: [0, 1, 2, 3],
        explanation: "I 9 cost driver di Porter: scala, apprendimento, utilizzo capacità, link tra attività, integrazione verticale, timing, politiche discrezionali, location, fattori istituzionali. Il 'volume del marchio' non esiste.",
        weeks: [5]
      },
      {
        question: "I quattro quadranti del modello SECI sono:",
        options: [
          'Socializzazione (T→T)',
          'Esternalizzazione (T→E)',
          'Combinazione (E→E)',
          'Internalizzazione (E→T)',
          'Trasformazione (E→I)'
        ],
        correctIndices: [0, 1, 2, 3],
        explanation: "I 4 modi di conversione: S (T→T tramite condivisione esperienza), E (T→E tramite metafore), C (E→E sistematizzazione), I (E→T learning by doing). 'Trasformazione E→I' è inventata.",
        weeks: [4]
      },
      {
        question: "La piramide DIKW (Data, Information, Knowledge, Wisdom) implica…",
        options: [
          'gerarchia ascendente di astrazione e valore',
          'i dati sono il livello più alto',
          'la conoscenza è inferiore all\'informazione',
          'wisdom è il livello più astratto e contestualizzato',
          'i dati grezzi hanno già valore strategico'
        ],
        correctIndices: [0, 3],
        explanation: "DIKW: Data (fatti grezzi) → Information (dati con contesto) → Knowledge (informazioni interpretate) → Wisdom (conoscenza applicata con giudizio). Saggezza è il livello apicale.",
        weeks: [4]
      },
      {
        question: "I 4 pilastri della differenziazione includono:",
        options: [
          'Caratteristiche del prodotto',
          'Servizio',
          'Brand',
          'Personale',
          'Logistica geografica'
        ],
        correctIndices: [0, 1, 2, 3],
        explanation: "I 4 pilastri della differenziazione: Prodotto (features, qualità, design), Servizio (assistenza, garanzie), Personale (competenze, cortesia), Brand (immagine, reputazione). La logistica è un cost driver.",
        weeks: [5]
      },
      {
        question: "La nicchia di mercato per essere profittevole deve essere:",
        options: [
          'Misurabile',
          'Attivabile',
          'Profittevole',
          'Indifferenziata',
          'Definita da un solo bisogno'
        ],
        correctIndices: [0, 1, 2],
        explanation: "I 3 requisiti M-A-P della nicchia: Misurabile (quantificabile), Attivabile (raggiungibile), Profittevole (margine adeguato). Una nicchia non è mai indifferenziata: è caratterizzata da bisogni specifici.",
        weeks: [5]
      },
      {
        question: "Il concetto di 'Ba' di Nonaka indica:",
        options: [
          'spazio condiviso (fisico, virtuale, mentale) in cui la conoscenza è creata',
          'un brevetto industriale',
          'una struttura organizzativa rigida',
          'un indicatore finanziario',
          'una metrica di misurazione qualità'
        ],
        correctIndices: [0],
        explanation: "Ba (場 in giapponese) = piattaforma di interazione che facilita la creazione di conoscenza. Nonaka ne distingue 4 tipi corrispondenti ai 4 modi SECI (originating, dialoguing, systemizing, exercising ba).",
        weeks: [4]
      },
      {
        question: "Le risorse intangibili tipicamente:",
        options: [
          'sono più difficili da imitare di quelle tangibili',
          'includono brand, know-how, cultura, network',
          'sono sempre acquistabili sul mercato',
          'non rientrano nella RBV',
          'sono meno strategiche di quelle tangibili'
        ],
        correctIndices: [0, 1],
        explanation: "Le risorse intangibili (knowledge-based) sono path-dependent, costruite nel tempo, non transabili → fonti più sostenibili di vantaggio competitivo. Sono al cuore della RBV (Itami).",
        weeks: [4]
      },
      {
        question: "IKEA è un esempio classico di…",
        options: [
          'Cost leadership con elementi di differenziazione (design, esperienza)',
          'Pura differenziazione di lusso',
          'Stuck in the middle',
          'Nicchia premium',
          'Focus differenziato sul B2B'
        ],
        correctIndices: [0],
        explanation: "IKEA combina costi bassi (montaggio cliente, packaging piatto, scala globale) con differenziazione moderata (design scandinavo, brand, esperienza store). Caso scuola di 'value innovation'.",
        weeks: [5]
      },
      {
        question: "Il Capitale umano nella RBV è:",
        options: [
          'una risorsa intangibile centrale',
          'composto da conoscenze, abilità ed esperienze dei dipendenti',
          'sempre facilmente trasferibile',
          'un asset contabilizzato a bilancio',
          'irrilevante rispetto a quello fisico'
        ],
        correctIndices: [0, 1],
        explanation: "Il capitale umano (Becker) è risorsa intangibile fondamentale: include skill, conoscenze, esperienze. Non è facilmente trasferibile (specie il tacito) e non figura a bilancio, ma è strategico.",
        weeks: [4]
      },
      {
        question: "Le quattro attività di supporto della catena del valore di Porter sono:",
        options: [
          'Infrastruttura',
          'Gestione delle Risorse Umane',
          'R&D / Sviluppo Tecnologico',
          'Approvvigionamenti (Procurement)',
          'Operations'
        ],
        correctIndices: [0, 1, 2, 3],
        explanation: "Le 4 di supporto: Infrastruttura aziendale, HR, R&D/Tecnologia, Procurement. Operations è una delle 5 attività primarie, non di supporto.",
        weeks: [5]
      }
    ],
    teoriaApplicata: [],
    esercizi: []
  },

  // ────────────────────────────────────────────────────────────
  // MULTIPLA 3 — Sostenibilità & Marketing (W6, W12)
  // ────────────────────────────────────────────────────────────
  {
    id: 3,
    title: 'Multipla 3',
    subtitle: 'Sostenibilità, business model e marketing',
    duration: 60,
    multipleChoice: [
      {
        question: "Il Business Model Canvas (Osterwalder) è composto da:",
        options: [
          '5 blocchi',
          '7 blocchi',
          '9 blocchi',
          '11 blocchi',
          '12 blocchi'
        ],
        correctIndices: [2],
        explanation: "I 9 blocchi del BMC: Customer Segments, Value Propositions, Channels, Customer Relationships, Revenue Streams, Key Resources, Key Activities, Key Partners, Cost Structure.",
        weeks: [6]
      },
      {
        question: "Le componenti del Brand Equity di Aaker sono:",
        options: [
          'Awareness',
          'Loyalty',
          'Perceived Quality',
          'Brand Associations',
          'Other proprietary brand assets'
        ],
        correctIndices: [0, 1, 2, 3, 4],
        explanation: "Aaker (1991): le 5 componenti del Brand Equity sono Awareness, Loyalty, Perceived Quality, Associations, Other assets (brevetti, marchi, canali). Insieme generano valore monetario del brand.",
        weeks: [12]
      },
      {
        question: "Il modello Customer Journey '5A' di Kotler include le fasi:",
        options: [
          'Aware',
          'Appeal',
          'Ask',
          'Act',
          'Advocate'
        ],
        correctIndices: [0, 1, 2, 3, 4],
        explanation: "Kotler (Marketing 4.0): Aware (consapevolezza), Appeal (attrattività), Ask (richiesta info), Act (acquisto), Advocate (raccomandazione). Sostituisce il vecchio AIDA in era digitale.",
        weeks: [12]
      },
      {
        question: "La piramide di Carroll della CSR è strutturata, dal basso verso l'alto, in:",
        options: [
          'Economica → Legale → Etica → Filantropica',
          'Filantropica → Etica → Legale → Economica',
          'Etica → Economica → Sociale → Ambientale',
          'Legale → Sociale → Etica → Filantropica',
          'Profitto → Persone → Pianeta → Performance'
        ],
        correctIndices: [0],
        explanation: "Carroll (1991): la base è la responsabilità economica (essere profittevoli), poi legale (rispettare le leggi), etica (agire eticamente), filantropica (essere buoni cittadini d'impresa).",
        weeks: [6]
      },
      {
        question: "B-Corp è una certificazione che richiede:",
        options: [
          'punteggio ≥ 80/200 al B Impact Assessment',
          'modifica statutaria che incorpori la mission sociale',
          'audit triennale di B Lab',
          'certificazione ISO 14001 obbligatoria',
          'fatturato > 50 milioni'
        ],
        correctIndices: [0, 1, 2],
        explanation: "B-Corp (B Lab): score ≥ 80/200 nel B Impact Assessment (governance, lavoratori, comunità, ambiente, clienti), modifica statutaria, audit ogni 3 anni. ISO/fatturato non sono requisiti.",
        weeks: [6]
      },
      {
        question: "I 7 peccati del Greenwashing (TerraChoice) includono:",
        options: [
          'Hidden trade-off (sostenibilità su un aspetto, ignorando altri)',
          'No proof (claim non supportati)',
          'Vagueness (linguaggio impreciso)',
          'Trasparenza eccessiva',
          'False labels (etichette finte)'
        ],
        correctIndices: [0, 1, 2, 4],
        explanation: "I 7 peccati TerraChoice: Hidden Trade-off, No Proof, Vagueness, False Labels, Irrelevance, Lesser of Two Evils, Fibbing. La trasparenza eccessiva non è un peccato del greenwashing.",
        weeks: [6]
      },
      {
        question: "STP nel marketing significa:",
        options: [
          'Segmentation, Targeting, Positioning',
          'Standardization, Test, Prove',
          'Strategy, Target, Profit',
          'Segmentation, Tactics, Promotion',
          'Sales, Trade, Pricing'
        ],
        correctIndices: [0],
        explanation: "STP: Segmentation (suddividere il mercato in cluster omogenei), Targeting (selezionare i segmenti da servire), Positioning (creare immagine distintiva nella mente del consumatore).",
        weeks: [12]
      },
      {
        question: "Il modello delle 7P è un'estensione del marketing mix per:",
        options: [
          'i prodotti industriali',
          'i servizi',
          'i prodotti di lusso',
          'l\'e-commerce',
          'il B2C alimentare'
        ],
        correctIndices: [1],
        explanation: "Booms & Bitner (1981) estende le 4P (Product, Price, Place, Promotion) con People, Process, Physical Evidence, indispensabili nei servizi (intangibilità, inseparabilità produzione/consumo).",
        weeks: [12]
      },
      {
        question: "L'Economia Circolare (Ellen MacArthur) si basa sulle '9R'. Quali tra queste fanno parte del framework?",
        options: [
          'Refuse, Rethink, Reduce',
          'Reuse, Repair, Refurbish',
          'Remanufacture, Repurpose',
          'Recycle, Recover',
          'Replace, Rotate, Reset'
        ],
        correctIndices: [0, 1, 2, 3],
        explanation: "Le 9R in ordine: R0 Refuse, R1 Rethink, R2 Reduce, R3 Reuse, R4 Repair, R5 Refurbish, R6 Remanufacture, R7 Repurpose, R8 Recycle, R9 Recover. Replace/Rotate/Reset non fanno parte del modello.",
        weeks: [6]
      },
      {
        question: "Il modello stakeholder di Mendelow (Power-Interest Matrix) suggerisce di:",
        options: [
          'gestire da vicino (Manage Closely) gli stakeholder ad alto Power & alto Interest',
          'tenere informati (Keep Informed) quelli a basso Power & alto Interest',
          'tenere soddisfatti (Keep Satisfied) quelli ad alto Power & basso Interest',
          'ignorare gli stakeholder a basso Power e Interest',
          'eliminare ogni distinzione strategica'
        ],
        correctIndices: [0, 1, 2],
        explanation: "Mendelow: 4 quadranti = Manage Closely (alto P, alto I), Keep Satisfied (alto P, basso I), Keep Informed (basso P, alto I), Minimum Effort (basso P, basso I). 'Ignorare' è una semplificazione errata: monitor.",
        weeks: [6]
      },
      {
        question: "Il Net Promoter Score (NPS) si calcola come:",
        options: [
          '% Promotori - % Detrattori',
          '% Promotori + % Detrattori',
          'media delle valutazioni 1-10',
          'rapporto tra acquirenti ripetuti e nuovi',
          'tasso di abbandono del prodotto'
        ],
        correctIndices: [0],
        explanation: "NPS = %Promotori (voto 9-10) - %Detrattori (voto 0-6). Score può andare da -100 a +100. Sopra +50 è eccellente. È una proxy della fedeltà e propensione al passaparola positivo.",
        weeks: [12]
      },
      {
        question: "Il Customer Lifetime Value (CLV) misura:",
        options: [
          'il valore totale generato da un cliente nell\'arco della relazione',
          'il costo di acquisizione di un cliente',
          'il fatturato annuo dell\'azienda',
          'la quota di mercato',
          'il ROI di campagna'
        ],
        correctIndices: [0],
        explanation: "CLV = somma scontata dei flussi di cassa generati dal cliente nel tempo. Formula semplice: CLV = (ARPU × margine × retention rate) / (1 + tasso sconto - retention rate). Va confrontato con CAC.",
        weeks: [12]
      },
      {
        question: "Il Creating Shared Value (CSV) di Porter & Kramer afferma che…",
        options: [
          'la creazione di valore economico e sociale possono andare di pari passo',
          'la sostenibilità riduce sempre la profittabilità',
          'la CSR è la stessa cosa di CSV',
          'si possono identificare opportunità di business risolvendo problemi sociali',
          'il valore è solo monetario'
        ],
        correctIndices: [0, 3],
        explanation: "Porter & Kramer (2011): CSV ≠ CSR (filantropia). CSV identifica intersezioni tra problemi sociali e opportunità di business: ridefinire prodotti/mercati, riconfigurare la value chain, sviluppare cluster locali.",
        weeks: [6]
      },
      {
        question: "L'evoluzione del Marketing 1.0 → 5.0 è caratterizzata da:",
        options: [
          'Marketing 1.0: prodotto-centrico',
          'Marketing 2.0: cliente-centrico',
          'Marketing 3.0: human-centric/valori',
          'Marketing 4.0: digitale e omnichannel',
          'Marketing 5.0: tech for humanity (AI, AR/VR)'
        ],
        correctIndices: [0, 1, 2, 3, 4],
        explanation: "Kotler: 1.0 product-centric, 2.0 customer-centric (segmentazione), 3.0 values-driven (human spirit), 4.0 digital integration, 5.0 next-tech (AI, IoT, AR, blockchain) al servizio del benessere umano.",
        weeks: [12]
      },
      {
        question: "Le 4P del marketing mix originario sono:",
        options: [
          'Product, Price, Place, Promotion',
          'People, Process, Profit, Performance',
          'Plan, Position, Push, Pull',
          'Pricing, Packaging, Promotion, Performance',
          'Product, Profit, Person, Place'
        ],
        correctIndices: [0],
        explanation: "McCarthy (1960): le 4P del marketing mix tradizionale per prodotti tangibili sono Product, Price, Place (distribuzione), Promotion (comunicazione).",
        weeks: [12]
      },
      {
        question: "Una Società Benefit nell'ordinamento italiano (L. 208/2015):",
        options: [
          'persegue lucro e finalità di beneficio comune',
          'è obbligata alla certificazione B-Corp',
          'redige una relazione annuale di impatto',
          'nomina un responsabile dell\'impatto',
          'è esente da imposte sul reddito'
        ],
        correctIndices: [0, 2, 3],
        explanation: "Società Benefit (Italia 2015): forma giuridica con doppia mission (profit + impatto), relazione annuale obbligatoria, responsabile dell'impatto. NON deve essere B-Corp e NON ha esenzioni fiscali.",
        weeks: [6]
      },
      {
        question: "Il caso AGCM Eni (2020, multa 5 mln€) ha riguardato:",
        options: [
          "pubblicità ingannevole sul Diesel+ presentato come 'green'",
          'cartello sui prezzi della benzina',
          'evasione fiscale',
          'monopolio nel gas',
          'discriminazione di genere'
        ],
        correctIndices: [0],
        explanation: "AGCM ha sanzionato Eni perché il claim 'Diesel+ green' era ingannevole: il prodotto rimaneva un combustibile fossile a impatto ambientale rilevante. Caso scuola di greenwashing.",
        weeks: [6]
      },
      {
        question: "Le architetture di brand includono:",
        options: [
          'Corporate (es. Microsoft, IBM)',
          'Family/Umbrella (es. Apple)',
          'Individual/House of brands (es. P&G)',
          'Co-branding (es. Nike + Apple)',
          'Random branding (assenza di logica)'
        ],
        correctIndices: [0, 1, 2, 3],
        explanation: "Aaker: corporate, family/umbrella, individual (house of brands), endorsed, co-branding, private label. Il 'random' non è un'architettura riconosciuta: tutte le architetture sono pianificate.",
        weeks: [12]
      },
      {
        question: "I criteri ESG sono:",
        options: [
          'Environmental, Social, Governance',
          'Economic, Sustainable, Green',
          'Ethics, Society, Globalization',
          'Energy, Stakeholder, Growth',
          'Equity, Solidarity, Goals'
        ],
        correctIndices: [0],
        explanation: "ESG = Environmental (emissioni, energia, biodiversità), Social (HR, comunità, supply chain), Governance (board, anti-corruzione, trasparenza). Framework dominante per investimenti sostenibili.",
        weeks: [6]
      },
      {
        question: "La Direttiva UE 2024/825 (Empowering Consumers for the Green Transition):",
        options: [
          'vieta claim ambientali generici non supportati',
          'rende obbligatorio l\'uso del logo B-Corp',
          'introduce regole anti-greenwashing per i prodotti',
          'impone l\'obbligo di certificazione ESG per tutte le imprese',
          'vieta l\'obsolescenza programmata'
        ],
        correctIndices: [0, 2, 4],
        explanation: "Direttiva 2024/825: vieta claim verdi generici/non sostenibili, contrasta obsolescenza programmata, rafforza informativa al consumatore. Non impone B-Corp né certificazione ESG universale.",
        weeks: [6]
      }
    ],
    teoriaApplicata: [],
    esercizi: []
  },

  // ────────────────────────────────────────────────────────────
  // MULTIPLA 4 — Corporate & Organizzazione (W8, W9)
  // ────────────────────────────────────────────────────────────
  {
    id: 4,
    title: 'Multipla 4',
    subtitle: 'Corporate strategy, sinergie e design organizzativo',
    duration: 60,
    multipleChoice: [
      {
        question: "Le 5 configurazioni organizzative di Mintzberg includono:",
        options: [
          'Struttura semplice',
          'Burocrazia meccanica',
          'Burocrazia professionale',
          'Forma divisionale',
          'Adhocrazia'
        ],
        correctIndices: [0, 1, 2, 3, 4],
        explanation: "Mintzberg (1979): le 5 configurazioni base. La struttura semplice è tipica di startup; meccanica delle imprese mature; professionale di ospedali/università; divisionale di gruppi multibusiness; adhocrazia di società innovative.",
        weeks: [9]
      },
      {
        question: "La matrice BCG classifica i business in:",
        options: [
          'Stars',
          'Cash Cows',
          'Question Marks (Problem Children)',
          'Dogs',
          'Black Sheep'
        ],
        correctIndices: [0, 1, 2, 3],
        explanation: "BCG matrix (1970): Stars (alta crescita, alta quota), Cash Cows (bassa crescita, alta quota), Question Marks (alta crescita, bassa quota), Dogs (bassa crescita, bassa quota). 'Black sheep' non esiste.",
        weeks: [8]
      },
      {
        question: "La matrice di Kraljic classifica gli acquisti in 4 quadranti:",
        options: [
          'Strategic items',
          'Bottleneck items',
          'Leverage items',
          'Non-critical (Routine) items',
          'Premium items'
        ],
        correctIndices: [0, 1, 2, 3],
        explanation: "Kraljic (1983): assi = impatto sul profitto × rischio fornitura. Strategic (alto-alto), Bottleneck (basso impatto-alto rischio), Leverage (alto-basso), Non-critical (basso-basso). 'Premium' non esiste.",
        weeks: [8]
      },
      {
        question: "La diversificazione correlata genera tipicamente più valore di quella conglomerata perché…",
        options: [
          'sfrutta sinergie operative tra business affini',
          'consente economie di scopo',
          'è sempre meno rischiosa',
          'condivide risorse e competenze trasferibili',
          'gode di sole agevolazioni fiscali'
        ],
        correctIndices: [0, 1, 3],
        explanation: "Correlata: business condividono risorse/competenze (sinergie operative, scope economies, brand). Conglomerata: business non collegati, sinergie solo finanziarie. Studi (Rumelt 1974) mostrano U rovesciata: la correlata moderata è ottimale.",
        weeks: [8]
      },
      {
        question: "La teoria dei costi di transazione di Williamson suggerisce di internalizzare (Make) quando:",
        options: [
          'specificità degli asset è alta',
          'la frequenza delle transazioni è alta',
          'l\'incertezza è elevata',
          'il rischio di opportunismo è alto',
          'tutti i fattori precedenti sono presenti'
        ],
        correctIndices: [0, 1, 2, 3, 4],
        explanation: "Williamson (1985): Make-or-Buy dipende da specificità asset, frequenza, incertezza, rischio opportunismo (hold-up). Quando questi sono alti, i costi di transazione del mercato superano quelli organizzativi.",
        weeks: [8]
      },
      {
        question: "Il paradigma OLI di Dunning per le multinazionali si compone di:",
        options: [
          'Ownership advantages',
          'Location advantages',
          'Internalization advantages',
          'Operational advantages',
          'Logistic advantages'
        ],
        correctIndices: [0, 1, 2],
        explanation: "OLI (Dunning 1977): Ownership (vantaggi proprietari trasferibili all'estero), Location (vantaggi del paese ospite), Internalization (vantaggi nel fare in proprio anziché licensing). Spiega scelte FDI.",
        weeks: [8]
      },
      {
        question: "Il modello a matrice è caratterizzato da:",
        options: [
          'doppia linea di reporting',
          'duplicazione di alcune funzioni',
          'rapidità decisionale univoca',
          'tipico di multinazionali e progetti complessi',
          'unica catena di comando'
        ],
        correctIndices: [0, 1, 3],
        explanation: "Matrice: doppia subordinazione (es. funzionale + prodotto/area). Vantaggio: flessibilità e specializzazione; svantaggio: conflitti di autorità, lentezza decisionale, doppia rendicontazione.",
        weeks: [9]
      },
      {
        question: "Il MBO (Management By Objectives) di Drucker richiede obiettivi:",
        options: [
          'Specifici',
          'Misurabili',
          'Achievable (raggiungibili)',
          'Relevant (rilevanti)',
          'Time-bound (definiti nel tempo)'
        ],
        correctIndices: [0, 1, 2, 3, 4],
        explanation: "MBO + criteri SMART: Specific, Measurable, Achievable, Relevant, Time-bound. Drucker introdusse l'MBO nel 1954: gli obiettivi vengono concordati cascading-down dalla direzione ai team.",
        weeks: [9]
      },
      {
        question: "Lo Span of Control si riferisce a:",
        options: [
          'numero di subordinati diretti che un manager controlla',
          'estensione geografica dell\'impresa',
          'orizzonte temporale della pianificazione',
          'gamma di prodotti del portafoglio',
          'estensione del budget'
        ],
        correctIndices: [0],
        explanation: "Span of control = ampiezza del controllo. Span ampio (10+) → struttura piatta, autonomia, ma rischio di sovraccarico manageriale. Span stretto (3-5) → struttura alta, supervisione capillare ma costi.",
        weeks: [9]
      },
      {
        question: "Le sinergie di gruppo (1+1=3) hanno costi opposti che includono:",
        options: [
          'Costi di coordinamento',
          'Costi di compromesso',
          'Costi di rigidità',
          'Costi di trasporto',
          'Costi di magazzino'
        ],
        correctIndices: [0, 1, 2],
        explanation: "Goold & Campbell: i 3 costi della corporate strategy (1+1<3): coordinamento (gestire più business), compromesso (decisioni sub-ottimali per condividere), rigidità (riduzione flessibilità delle SBU).",
        weeks: [8]
      },
      {
        question: "Distinguendo Exploration vs Exploitation (March 1991), l'Exploration:",
        options: [
          'cerca nuove opportunità con esiti incerti',
          'sfrutta risorse e competenze esistenti',
          'genera benefici nel lungo periodo',
          'genera benefici nel breve periodo',
          'è l\'unica modalità sostenibile'
        ],
        correctIndices: [0, 2],
        explanation: "March: Exploration = ricerca, sperimentazione, varianza alta, ROI lontano e incerto. Exploitation = efficienza su asset esistenti, ROI vicino e prevedibile. Ambidexterity = bilanciamento dei due.",
        weeks: [9]
      },
      {
        question: "Le 6 fasi del ciclo HR includono tipicamente:",
        options: [
          'Pianificazione del personale',
          'Reclutamento & Selezione',
          'Formazione',
          'Valutazione & Compensation',
          'Sviluppo carriera & Outplacement'
        ],
        correctIndices: [0, 1, 2, 3, 4],
        explanation: "Le 6 fasi del ciclo HR: pianificazione (workforce planning), reclutamento, selezione, formazione, valutazione, sviluppo. La separazione (outplacement) chiude il ciclo.",
        weeks: [9]
      },
      {
        question: "Argyris distingue tra Single Loop e Double Loop Learning. Il Double Loop:",
        options: [
          'mette in discussione le assunzioni di base e i mental model',
          'corregge errori senza cambiare le premesse',
          'è tipico delle organizzazioni che apprendono profondamente',
          'è meccanico e ripetitivo',
          'non genera apprendimento sostenibile'
        ],
        correctIndices: [0, 2],
        explanation: "Single loop: si correggono azioni senza rivedere le 'governing variables'. Double loop: si rimettono in discussione le premesse strategiche/cognitive. Quest'ultimo è distintivo delle 'learning organizations' (Senge).",
        weeks: [9]
      },
      {
        question: "Il Made in / Country of Origin Effect (COO):",
        options: [
          'influenza la percezione di qualità e prestigio dei prodotti',
          'è particolarmente rilevante per moda, food, automobili',
          'è oggi del tutto irrilevante per i consumatori globali',
          'può attivare un premium price (es. Made in Italy nella moda)',
          'tutti i paesi hanno la stessa COO equity'
        ],
        correctIndices: [0, 1, 3],
        explanation: "COO Effect: l'origine geografica funge da segnale di qualità in settori 'simbolici'. Made in Italy (lusso/food), Made in Germany (auto/ingegneria), Made in Japan (elettronica) generano premium price.",
        weeks: [8]
      },
      {
        question: "L'esportazione indiretta vs diretta:",
        options: [
          'indiretta: tramite intermediari nel paese d\'origine',
          'diretta: l\'azienda gestisce in proprio l\'esportazione',
          'indiretta: minor controllo ma minor investimento',
          'diretta: maggior controllo del marketing-mix nel paese estero',
          'sono modalità alternative alla joint venture'
        ],
        correctIndices: [0, 1, 2, 3],
        explanation: "Indiretta = via export houses/buyers nel paese d'origine (basso controllo, basso rischio). Diretta = filiale o agenti propri all'estero (alto controllo, alto investimento). Sono primi step dell'internazionalizzazione.",
        weeks: [8]
      },
      {
        question: "L'integrazione verticale a monte (backward integration) consiste nel:",
        options: [
          'acquisire/incorporare attività dei fornitori',
          'acquisire/incorporare attività dei distributori',
          'ridurre la dipendenza dai fornitori e controllare costi/qualità',
          'estendere il business verso nuovi mercati geografici',
          'esempio classico: Luxottica con la rete retail'
        ],
        correctIndices: [0, 2],
        explanation: "Backward integration = a monte (verso fornitori, materie prime). Forward = a valle (verso distribuzione, retail). Luxottica con i suoi store è forward, non backward.",
        weeks: [8]
      },
      {
        question: "La struttura divisionale tipicamente:",
        options: [
          'è organizzata per prodotti, mercati o aree geografiche',
          'consente accountability sui risultati di SBU',
          'evita ogni duplicazione di funzioni',
          'è tipica dei grandi gruppi multibusiness',
          'è sempre la più efficiente in tutti i contesti'
        ],
        correctIndices: [0, 1, 3],
        explanation: "Divisionale: SBU autonome con propri profit centre. Vantaggi: accountability, focus, flessibilità. Svantaggi: duplicazioni e perdita di economie di scala. Adatta a multibusiness/multi-paese (es. GE, Siemens).",
        weeks: [9]
      },
      {
        question: "Le 6 famiglie di indicatori di Fontana (1994) per il sistema di controllo manageriale includono:",
        options: [
          'Indicatori economici',
          'Indicatori finanziari',
          'Indicatori di qualità',
          'Indicatori commerciali',
          'Indicatori di produttività e di sviluppo'
        ],
        correctIndices: [0, 1, 2, 3, 4],
        explanation: "Fontana 1994: 6 famiglie = economici (margini), finanziari (cash flow), qualità (resi, difetti), commerciali (vendite, share), produttività (efficienza), sviluppo (R&D, innovazione).",
        weeks: [9]
      },
      {
        question: "L'effetto 'band-wagon' (carro del vincitore) nel marketing internazionale è:",
        options: [
          'tendenza a imitare i comportamenti di acquisto della maggioranza',
          'fattore amplificato da social media e influencer',
          "opposto allo 'snob effect' (preferenza per beni esclusivi)",
          'irrilevante nelle decisioni di acquisto',
          'esiste solo nei mercati B2B'
        ],
        correctIndices: [0, 1, 2],
        explanation: "Bandwagon effect: utilità del consumo cresce col numero di altri consumatori (es. iPhone). Opposto allo Snob effect (utilità decresce). Veblen: beni di lusso ostentativi.",
        weeks: [8]
      },
      {
        question: "L'organizzazione semplice di Mintzberg è caratterizzata da:",
        options: [
          'centralizzazione decisionale nel vertice',
          'bassa formalizzazione',
          'tipica di startup o piccole imprese',
          'elevata burocratizzazione',
          'tecnostruttura sviluppata'
        ],
        correctIndices: [0, 1, 2],
        explanation: "Struttura semplice: vertice strategico forte, supervisione diretta, poca tecnostruttura, basso staff di supporto. Tipica di PMI familiari, startup, organizzazioni in fase di nascita.",
        weeks: [9]
      }
    ],
    teoriaApplicata: [],
    esercizi: []
  },

  // ────────────────────────────────────────────────────────────
  // MULTIPLA 5 — Operations & Innovazione (W10, W11)
  // ────────────────────────────────────────────────────────────
  {
    id: 5,
    title: 'Multipla 5',
    subtitle: 'Operations, lean management e innovazione',
    duration: 60,
    multipleChoice: [
      {
        question: "L'EOQ (Economic Order Quantity) si calcola come:",
        options: [
          '√(2DS/H), dove D=domanda annua, S=costo ordine, H=costo holding',
          '√(DS/2H)',
          'D/S × H',
          '2DS × H',
          'D × S × H / 2'
        ],
        correctIndices: [0],
        explanation: "Wilson (1934): EOQ = √(2·D·S/H). Minimizza la somma di costi di ordinazione (decrescenti col lotto) e costi di mantenimento (crescenti col lotto). Lotto economico ottimale.",
        weeks: [10]
      },
      {
        question: "I 7 muda (sprechi) della Lean Production includono:",
        options: [
          'Sovrapproduzione',
          'Attese',
          'Trasporti inutili',
          'Scorte eccessive',
          'Innovazione'
        ],
        correctIndices: [0, 1, 2, 3],
        explanation: "I 7 muda originali (Ohno): sovrapproduzione, attese, trasporti, lavorazioni eccessive, scorte, movimenti, difetti. Talvolta si aggiunge 'sottoutilizzo competenze' come 8°. L'innovazione NON è uno spreco.",
        weeks: [10]
      },
      {
        question: "La Curva di Rogers (Diffusion of Innovations) classifica gli adottanti in:",
        options: [
          'Innovators (~2,5%)',
          'Early Adopters (~13,5%)',
          'Early Majority (~34%)',
          'Late Majority (~34%)',
          'Laggards (~16%)'
        ],
        correctIndices: [0, 1, 2, 3, 4],
        explanation: "Rogers (1962): la diffusione segue una curva normale: Innovators 2,5%, Early Adopters 13,5%, Early Majority 34%, Late Majority 34%, Laggards 16%. Cumulato: curva ad S.",
        weeks: [11]
      },
      {
        question: "Il modello di Christensen distingue tra innovazione:",
        options: [
          'Sustaining (incrementale, migliora prestazioni per clienti esistenti)',
          'Disruptive (entra dal basso o nuovi mercati, performance diverse)',
          'Radical-only (mai utile)',
          'Marginale (ininfluente)',
          'Performance-driven (irrilevante)'
        ],
        correctIndices: [0, 1],
        explanation: "Christensen (1997, 'Innovator's Dilemma'): Sustaining = migliora performance attese (incumbents bravi); Disruptive = trade-off di performance, parte da nicchie low-end o new market e poi 'risale'.",
        weeks: [11]
      },
      {
        question: "Il Crossing the Chasm (Moore) descrive…",
        options: [
          'il salto critico tra Early Adopters e Early Majority',
          'la fusione di due aziende',
          'il passaggio dal mercato domestico a quello globale',
          'la transizione da prodotto fisico a servizio',
          'la fase di declino del prodotto'
        ],
        correctIndices: [0],
        explanation: "Moore (1991): tra Early Adopters (visionari) e Early Majority (pragmatici) c'è un baratro. Molte innovazioni high-tech muoiono qui. Strategia: focus su una nicchia per costruire credibilità.",
        weeks: [11]
      },
      {
        question: "La curva ad S dell'innovazione tecnologica (Foster) mostra:",
        options: [
          'la performance di una tecnologia in funzione dello sforzo cumulato',
          'una fase di apprendimento iniziale lenta',
          'una fase di crescita esponenziale',
          'una fase di maturità con rendimenti decrescenti',
          'la curva dei costi di produzione'
        ],
        correctIndices: [0, 1, 2, 3],
        explanation: "Curva ad S (Foster 1986): performance vs effort/tempo. Embryonic (slow), Growth (rapid), Maturity (plateau). Tecnologie nuove iniziano sotto e poi superano quelle vecchie (technology substitution).",
        weeks: [11]
      },
      {
        question: "I principi del Total Quality Management (TQM) includono:",
        options: [
          'Focalizzazione sul cliente',
          'Miglioramento continuo (kaizen)',
          'Coinvolgimento di tutti i dipendenti',
          'Approccio per processi',
          'Decisioni basate su intuizione personale'
        ],
        correctIndices: [0, 1, 2, 3],
        explanation: "TQM (Deming, Juran, Ishikawa, Crosby): customer focus, continuous improvement, employee involvement, process approach, fact-based decision making (NON intuitivo), system approach.",
        weeks: [10]
      },
      {
        question: "L'Open Innovation (Chesbrough) si articola in:",
        options: [
          'Inbound (acquisire idee/tecnologie esterne)',
          'Outbound (rilasciare verso l\'esterno asset interni)',
          'Coupled (alleanze e co-creazione)',
          'Closed (interna)',
          'Random (casuale)'
        ],
        correctIndices: [0, 1, 2],
        explanation: "Chesbrough (2003): Open Innovation rompe il 'closed model'. Inbound (es. crowdsourcing, scouting), Outbound (licensing, spin-off), Coupled (R&D consortium, JV). Il random non è una modalità.",
        weeks: [11]
      },
      {
        question: "Il modello A-U di Abernathy-Utterback distingue le fasi:",
        options: [
          'Fluida (innovazione di prodotto dominante)',
          'Transitoria (emergenza dominant design)',
          'Specifica (innovazione di processo)',
          'Esplosiva (boom delle vendite)',
          'Conservativa (mantenimento)'
        ],
        correctIndices: [0, 1, 2],
        explanation: "Abernathy-Utterback (1978): 3 fasi. Fluida = molte varianti, focus prodotto, alta innovazione, basso volume. Transitoria = emerge il dominant design. Specifica = standardizzazione, focus su efficienza di processo.",
        weeks: [11]
      },
      {
        question: "Il Just-In-Time (JIT) richiede:",
        options: [
          'pull system (produzione tirata dalla domanda)',
          'flusso continuo / one-piece flow',
          'forniture frequenti e affidabili',
          'tempi di setup ridotti (SMED)',
          'scorte di sicurezza elevate'
        ],
        correctIndices: [0, 1, 2, 3],
        explanation: "JIT (Toyota): produrre solo ciò che serve, quando serve, nella quantità che serve. Pull, flusso continuo, forniture frequenti, SMED, qualità a monte. Scorte minime (NON elevate).",
        weeks: [10]
      },
      {
        question: "Lo standard war tra VHS e Betamax (anni '80) è un esempio di:",
        options: [
          'effetti di rete / esternalità',
          'lock-in tecnologico',
          'qualità tecnica come fattore decisivo',
          'importanza di partnership con content provider',
          'casualità storica'
        ],
        correctIndices: [0, 1, 3],
        explanation: "VHS (JVC) batté Betamax (Sony) tecnicamente superiore grazie a: licenze più aperte, partnership con video noleggio, durata cassette maggiore (compatibile con film). Network effects determinanti.",
        weeks: [11]
      },
      {
        question: "Il Bullwhip Effect è ampliato da:",
        options: [
          'lead time lunghi',
          'order batching',
          'fluttuazioni di prezzo / promozioni',
          'rationing & shortage gaming',
          'condivisione informativa lungo la SC'
        ],
        correctIndices: [0, 1, 2, 3],
        explanation: "Lee et al. 1997: cause del bullwhip. Demand forecast updating, order batching, price fluctuations, rationing/shortage gaming. La condivisione informativa (VMI, EDI) RIDUCE il bullwhip.",
        weeks: [10]
      },
      {
        question: "La classificazione ABC delle scorte (Pareto) suggerisce che…",
        options: [
          'circa 20% delle referenze (A) genera ~80% del valore',
          'le referenze di classe A vanno gestite con attenzione (Q-system)',
          'le referenze di classe C possono essere gestite con regole semplici',
          'tutte le referenze richiedono lo stesso livello di controllo',
          'è una pura curiosità statistica senza utilità pratica'
        ],
        correctIndices: [0, 1, 2],
        explanation: "ABC analysis (Pareto 80/20): A (20% codici, 80% valore, controllo accurato), B (30%, 15%, gestione standard), C (50%, 5%, regole semplici come reorder point a vista).",
        weeks: [10]
      },
      {
        question: "L'IPR (Intellectual Property Rights) brevetto in Europa dura:",
        options: [
          '20 anni dalla data di deposito',
          'rinnovabile ogni 10 anni',
          'autore + 70 anni (è il copyright)',
          'rinnovabile indefinitamente (è il marchio)',
          'illimitato'
        ],
        correctIndices: [0],
        explanation: "Brevetto europeo: 20 anni dal deposito, NON rinnovabile, in cambio di disclosure pubblica. Copyright: vita autore + 70 anni. Marchio: 10 anni rinnovabili indefinitamente. Segreto: indefinito ma fragile.",
        weeks: [11]
      },
      {
        question: "Le 5S della Lean (toyotismo) sono:",
        options: [
          'Seiri (Selezionare)',
          'Seiton (Sistemare)',
          'Seiso (Spazzare/Pulire)',
          'Seiketsu (Standardizzare)',
          'Shitsuke (Sostenere/Disciplina)'
        ],
        correctIndices: [0, 1, 2, 3, 4],
        explanation: "5S: metodologia di organizzazione del posto di lavoro. Seiri, Seiton, Seiso, Seiketsu, Shitsuke. Eliminare il superfluo, ordinare, pulire, standardizzare, autodisciplina. Base del Lean visivo.",
        weeks: [10]
      },
      {
        question: "La classificazione di Wortmann (MTS, ATO, MTO, ETO) ordina i sistemi produttivi per…",
        options: [
          'crescente personalizzazione/coinvolgimento del cliente',
          'decrescente personalizzazione',
          'crescenti volumi',
          'crescenti tempi di consegna',
          'tipologia di mercato (B2B vs B2C)'
        ],
        correctIndices: [0, 3],
        explanation: "Wortmann: MTS (Make to Stock, std), ATO (Assemble to Order, opzioni), MTO (Make to Order, custom), ETO (Engineer to Order, progettato). Crescente personalizzazione e tempi, decrescenti volumi.",
        weeks: [10]
      },
      {
        question: "La servitization (es. Rolls-Royce 'Power by the Hour') consiste nel:",
        options: [
          'vendere il prodotto come servizio (pay-per-use)',
          'integrare prodotti e servizi nell\'offerta',
          'spostare il valore dal prodotto al risultato',
          'aumentare il prezzo del prodotto fisico',
          'ridurre l\'offerta complessiva'
        ],
        correctIndices: [0, 1, 2],
        explanation: "Servitization: il cliente paga ore di volo affidabili (Rolls-Royce manutiene il motore). Caso classico di product-service system: vincoli allineati (uptime), recurring revenue, lock-in del cliente.",
        weeks: [10]
      },
      {
        question: "Il dominant design in un settore è:",
        options: [
          'l\'architettura di prodotto che si afferma come standard',
          'la fine della fase Fluida del modello A-U',
          'irrilevante per le decisioni strategiche',
          'esempio: il modello T di Ford, lo smartphone touch dopo l\'iPhone',
          'sempre imposto da regolamentazione'
        ],
        correctIndices: [0, 1, 3],
        explanation: "Dominant design (Anderson-Tushman): configurazione che diventa standard de facto. Marca la fine della Fluida e l'inizio della Transitoria. Esempi: Ford Model T, QWERTY, iPhone-like smartphone.",
        weeks: [11]
      },
      {
        question: "Schumpeter (1942) ha coniato il concetto di:",
        options: [
          'distruzione creatrice',
          'imprenditore innovatore',
          'cicli economici di innovazione',
          'monopolio temporaneo da innovazione',
          'mano invisibile'
        ],
        correctIndices: [0, 1, 2, 3],
        explanation: "Schumpeter: distruzione creatrice (creative destruction), imprenditore innovatore come motore del capitalismo, cicli di innovazione (Kondratiev), monopolio temporaneo da innovazione. La 'mano invisibile' è di Adam Smith.",
        weeks: [11]
      },
      {
        question: "Il PLC (Product Life Cycle) tradizionale prevede 4 fasi:",
        options: [
          'Introduzione',
          'Crescita',
          'Maturità',
          'Declino',
          'Rinascita'
        ],
        correctIndices: [0, 1, 2, 3],
        explanation: "PLC: Introduzione (lancio, perdite), Crescita (decollo vendite e profitti), Maturità (saturazione, max profitti), Declino (vendite calanti). 'Rinascita' può occasionalmente esserci ma non è una fase canonica.",
        weeks: [11]
      }
    ],
    teoriaApplicata: [],
    esercizi: []
  }
];
