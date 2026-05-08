// ═══════════════════════════════════════════════════════════════
// 5 Simulazioni d'esame di Economia e Gestione delle Imprese
// Struttura: domande multiple (1.5pt) + teoria applicata (3pt) +
// esercizi (4pt). Total ~ 40 punti, 90 minuti.
// Ogni simulazione copre concetti delle 12 week.
// ═══════════════════════════════════════════════════════════════

export const SIMULAZIONI_EGI = [
  // ────────────────────────────────────────────────────────────
  // SIMULAZIONE 1 — Strategia base, RBV, struttura competitiva
  // ────────────────────────────────────────────────────────────
  {
    id: 1,
    title: 'Simulazione 1',
    subtitle: 'Strategia, struttura competitiva e RBV',
    duration: 90,
    multipleChoice: [
      {
        question: "L'intensità della competizione è più alta quando…",
        options: [
          'ci sono forti barriere all\'entrata',
          'non c\'è possibilità di differenziazione',
          'l\'impresa è monopolista',
          'esistono barriere all\'uscita',
          'ci sono pochi prodotti sostituti'
        ],
        correctIndices: [1, 3],
        explanation: "Con prodotti indifferenziati la concorrenza si sposta sul prezzo. Le barriere all'uscita costringono le imprese a restare nel mercato anche con bassi profitti, intensificando rivalità.",
        weeks: [2]
      },
      {
        question: 'Per determinare le risorse e le competenze chiave bisogna…',
        options: [
          'identificare il proprio potere contrattuale verso i fornitori',
          'identificare il proprio potere contrattuale verso i clienti',
          'comprendere l\'importanza strategica della risorsa/competenza e il proprio livello di capacità relativa ai concorrenti',
          'capire il proprio know-how',
          'comprendere quelle del proprio raggruppamento strategico'
        ],
        correctIndices: [2, 3, 4],
        explanation: "Il VRIO valuta valore strategico (= importanza) e relativa rarità/inimitabilità (= capacità rispetto ai competitor). Anche know-how e benchmark del raggruppamento aiutano a identificare core competence.",
        weeks: [4]
      },
      {
        question: 'Le rendite di influenza sono…',
        options: [
          'extra-profitti dalla creazione di nuovi prodotti o processi',
          'extra-profitti perché le "regole del gioco" sono disegnate per favorire l\'impresa rispetto ai competitor',
          'extra-profitti dovuti a competizione limitata o inesistente',
          'extra-profitti temporanei legati a una risorsa in quantità fissa',
          'extra-profitti per maggiore efficienza nella gestione delle risorse'
        ],
        correctIndices: [1],
        explanation: "Le rendite di influenza derivano dalla capacità di plasmare l'ambiente istituzionale (lobby, regulatory capture). 0=Schumpeteriana, 2=Monopolistica, 3=Ricardiana, 4=Quasi-rendita.",
        weeks: [3]
      },
      {
        question: "In quali tra i seguenti modelli organizzativi la suddivisione degli addetti può avvenire per funzioni?",
        options: [
          'Nei network inter-organizzativi',
          'Modello divisionale',
          'Modello funzionale',
          'Modello a matrice',
          'Nei core business'
        ],
        correctIndices: [1, 2, 3],
        explanation: "Funzionale: le funzioni sono il criterio principale. Divisionale: ogni divisione ha al suo interno funzioni replicate. Matrice: le funzioni sono uno dei due assi (insieme ai prodotti/aree).",
        weeks: [9]
      },
      {
        question: "Un'invenzione industriale è brevettabile in presenza di quale dei seguenti requisiti?",
        options: [
          'Ambiguità causale',
          'Novità',
          'Segretezza',
          'Rarità',
          'Applicabilità industriale'
        ],
        correctIndices: [1, 4],
        explanation: "I 3 requisiti del brevetto sono: novità, attività inventiva (non ovvietà), e applicabilità industriale. La segretezza è il requisito del know-how, non del brevetto (che richiede invece disclosure).",
        weeks: [11]
      },
      {
        question: 'Il Master Production Schedule (MPS) è uno strumento di pianificazione di lungo periodo da cui dipende la definizione del Piano Aggregato di Produzione.',
        options: ['Vero', 'Falso'],
        correctIndices: [1],
        explanation: "FALSO. È il contrario: il Piano Aggregato (lungo periodo, mensile/trimestrale) viene disaggregato nell'MPS (medio periodo, settimanale per singolo prodotto). Gerarchia: Piano Aggregato → MPS → MRP → CRP.",
        weeks: [10]
      },
      {
        question: 'La Resource-Based View afferma che il vantaggio competitivo deriva da…',
        options: [
          'posizionamento favorevole nelle 5 forze',
          'risorse e capabilities Valuable, Rare, Inimitable, Organized to capture value',
          'capacità di influenzare le istituzioni',
          'ampie barriere all\'entrata',
          'una struttura di costo bassa'
        ],
        correctIndices: [1],
        explanation: "RBV (Barney 1991): il VC sostenibile nasce dalle risorse interne con caratteristiche VRIO. Il posizionamento (0) è la prospettiva I-B-V; le istituzioni (2) sono Institution-Based View.",
        weeks: [4]
      },
      {
        question: 'Una nicchia di mercato per essere profittevole deve essere:',
        options: [
          'Misurabile',
          'Attivabile',
          'Profittevole',
          'Indifferenziata',
          'Definita da un solo bisogno'
        ],
        correctIndices: [0, 1, 2],
        explanation: "I 3 requisiti M-A-P di una nicchia: deve poter essere quantificata (Misurabile), raggiungibile dall'impresa (Attivabile), e generare margine adeguato (Profittevole).",
        weeks: [5]
      }
    ],
    teoriaApplicata: [
      {
        question: 'Apple vende i propri prodotti in negozi propri (Apple Store) e attraverso premium retailer selezionati. Che tipo di scelta di canale ha fatto Apple e quali sono i pro e contro di questa scelta? (max 10 righe)',
        weeks: [12],
        soluzione: `Apple adotta una strategia di **distribuzione selettiva** (intensità intermedia tra esclusiva e intensiva) integrando un canale **diretto** (Apple Store online e fisici) con un canale **indiretto a distribuzione selettiva** (Premium Reseller).

**Pro:**
- Controllo totale dell'esperienza brand nei punti propri (atmosfera, formazione del personale, demo prodotti)
- Margini più elevati sui canali diretti
- Tutela dell'immagine premium (i Premium Reseller sono certificati)
- Raccolta dati diretti sui clienti, utili per CRM e marketing personalizzato
- Capillarità geografica grazie ai retailer (riduce il costo di apertura store ovunque)

**Contro:**
- Investimenti elevati in store (immobili, formazione, design)
- Conflitti di canale potenziali tra Apple Store e Premium Reseller (cannibalizzazione)
- Rigidità: la rete diretta è meno flessibile di un puro canale indiretto
- Necessità di gestire continui aggiornamenti delle policy commerciali con i partner certificati`
      },
      {
        question: 'Che cos\'è la **tragedia dei beni comuni**? Descrivi il fenomeno spiegando perché può emergere in contesti di risorse condivise (come la pesca). Fai riferimento, se possibile, alla simulazione **Fishbanks** o a un esempio concreto. (max 10 righe)',
        weeks: [6, 10],
        soluzione: `La **tragedia dei beni comuni** (Hardin, 1968) descrive il sovrasfruttamento di risorse condivise non escludibili (pascoli, foreste, stock ittici) quando ogni utilizzatore razionale, massimizzando il proprio beneficio individuale, contribuisce all'esaurimento collettivo della risorsa.

**Meccanismo:** ogni pescatore aumenta le catture perché il beneficio (1 pesce in più) è privato, mentre il costo dell'esaurimento si distribuisce su tutti. Il risultato è un equilibrio sub-ottimale di Nash.

**Fishbanks:** la simulazione mostra come team che competono nello stesso oceano tendono a investire in barche oltre la capacità rigenerativa dello stock ittico, fino al collasso.

**Soluzioni:** quote individuali trasferibili (ITQ), property rights, governance comunitaria (Ostrom), regolamentazione esterna. Il caso illustra perché in sostenibilità (cap. 6) la cooperazione e la regolamentazione sono fondamentali per gestire risorse condivise.`
      }
    ],
    esercizi: [
      {
        question: 'Costruire la **Matrice di Abell** (Cosa / Chi / Come) per un brand a vostra scelta del settore **automotive**.',
        weeks: [6],
        soluzione: `**Brand scelto: Tesla**

| Dimensione | Definizione |
|------------|-------------|
| **COSA — Funzioni d'uso** | Mobilità individuale, prestige status, sostenibilità ambientale percepita, autonomia di guida assistita, esperienza tecnologica integrata |
| **CHI — Clienti** | Early adopters tech-savvy, professionisti urbani 30-55 anni, clientela ad alto reddito, eco-consapevole, fleet aziendali green |
| **COME — Tecnologie** | Trazione 100% elettrica, batterie litio-ferro-fosfato proprie, software OTA (over-the-air), Autopilot/FSD, integrazione app, vendita diretta DTC |

**Confronto con Toyota** (in stessa matrice):
- COSA: Toyota copre più funzioni (utility, famiglia, off-road, lusso con Lexus)
- CHI: Toyota ha clientela più trasversale (mass market)
- COME: Toyota usa tecnologie ibride/termiche/idrogeno; rete dealer tradizionale

Il business di Tesla è **focalizzato e differenziato**: nicchia tech-premium con tecnologia proprietaria. Toyota è un player diversificato a copertura ampia.`
      },
      {
        question: `Considerando i seguenti dati di mercato, calcolare l'**indice di concentrazione C4** (prime 4 imprese) e l'**Herfindahl-Hirschman Index (HHI)**. Commentare in max 5 righe come si configura il mercato.

| Impresa | Vendite (€) |
|---------|-------------|
| Azienda 1 | 100.000 |
| Azienda 2 | 10.000 |
| Azienda 3 | 50.000 |
| Azienda 4 | 125.000 |
| Azienda 5 | 5.000 |
| Azienda 6 | 300.000 |
| Azienda 7 | 2.500 |
| Azienda 8 | 7.500 |
| **Mercato totale** | **600.000** |`,
        weeks: [2],
        soluzione: `**Quote di mercato:**
- A6 = 300.000 / 600.000 = **50%**
- A4 = 125.000 / 600.000 = **20,83%**
- A1 = 100.000 / 600.000 = **16,67%**
- A3 = 50.000 / 600.000 = **8,33%**
- A2 = 10.000 / 600.000 = 1,67%
- A8 = 7.500 / 600.000 = 1,25%
- A5 = 5.000 / 600.000 = 0,83%
- A7 = 2.500 / 600.000 = 0,42%

**C4 (somma top-4):** 50% + 20,83% + 16,67% + 8,33% = **C4 = 95,83%**

**HHI:** Σ(quota_i)² × 10.000 (in pp²) =
50² + 20,83² + 16,67² + 8,33² + 1,67² + 1,25² + 0,83² + 0,42² ≈
2.500 + 434 + 278 + 69 + 2,8 + 1,6 + 0,7 + 0,2 ≈ **3.286**

**Commento:** mercato fortemente **concentrato** (HHI > 2.500 secondo soglie DOJ/Antitrust), oligopolio asimmetrico con un'impresa leader chiara (A6, 50%) e due challenger (A4, A1). Le imprese piccole hanno potere di mercato trascurabile. Configurazione tipica di un settore maturo dove il leader può esercitare price-leadership.`
      },
      {
        question: `Disegnate (a parole) la **catena del valore di Porter** per un'impresa che produce smartphone, indicando per ciascuna delle 5 attività primarie la principale fonte di valore (max 10 righe).`,
        weeks: [5],
        soluzione: `**Attività primarie (catena di Porter):**

1. **Logistica in entrata** — Approvvigionamento componenti critici (chip, schermi OLED, batterie) da supply chain globale. Valore: relazioni strategiche con fornitori (es. TSMC per chip), lead time minimi, qualità garantita.

2. **Operations / Produzione** — Assemblaggio (spesso outsourced a Foxconn o Pegatron). Valore: economie di scala, controllo qualità, automazione. Lean manufacturing per ridurre muda.

3. **Logistica in uscita** — Distribuzione globale via hub regionali. Valore: time-to-market rapido (lancio simultaneo mondiale), gestione scorte just-in-time per ridurre obsolescenza.

4. **Marketing & Vendite** — Brand premium, pricing, canali (Apple Store, telco partner, e-commerce). Valore: storytelling, esperienza punto vendita, segmentazione fascia premium vs entry.

5. **Servizi** — Assistenza post-vendita (AppleCare), riparazioni, ricondizionati. Valore: customer retention, upsell, sostenibilità (riparabilità, trade-in).

**Attività di supporto** (R&D, HR, infrastruttura, procurement) supportano trasversalmente. Il **margine** è massimo in design (R&D) e marketing per Apple/Samsung; più basso per i produttori OEM cinesi che competono su costo.`
      }
    ]
  },

  // ────────────────────────────────────────────────────────────
  // SIMULAZIONE 2 — PESTEL, VRIO, Strategie generiche, BEP
  // ────────────────────────────────────────────────────────────
  {
    id: 2,
    title: 'Simulazione 2',
    subtitle: 'Macroambiente, vantaggio competitivo e operations',
    duration: 90,
    multipleChoice: [
      {
        question: "Quale dei seguenti fattori è una variabile dell'analisi PESTEL?",
        options: [
          'Potere contrattuale dei fornitori',
          'Tasso di interesse',
          'Risorse VRIO',
          'Vincoli normativi ambientali',
          'Curva di esperienza'
        ],
        correctIndices: [1, 3],
        explanation: "PESTEL = Politico, Economico, Sociale, Tecnologico, Ecologico, Legale. Tassi di interesse → Economico; vincoli ambientali → Ecologico/Legale. Le altre sono dimensioni interne o competitive.",
        weeks: [1]
      },
      {
        question: 'In una struttura matriciale, le linee di autorità sono:',
        options: [
          'Solo verticali (gerarchiche)',
          'Solo orizzontali (per progetto)',
          'Sia verticali che orizzontali (doppia autorità)',
          'Inesistenti — tutti rispondono al CEO',
          'Definite caso per caso'
        ],
        correctIndices: [2],
        explanation: "Il modello matriciale è caratterizzato dalla **doppia autorità**: ogni dipendente risponde sia al manager funzionale (es. R&D) sia al manager di progetto/prodotto. Crea ricchezza informativa ma anche conflitti di reporting.",
        weeks: [9]
      },
      {
        question: 'Una risorsa VRIO sostenibile deve essere:',
        options: [
          'Valuable',
          'Rare',
          'Inimitable',
          'Organized to capture value',
          'Brevettata'
        ],
        correctIndices: [0, 1, 2, 3],
        explanation: "VRIO = Value, Rarity, Imitability, Organization. Il brevetto è un meccanismo di protezione (Imitability) ma non un requisito del framework.",
        weeks: [4]
      },
      {
        question: 'La **strategia di Cost Leadership** richiede tipicamente:',
        options: [
          'Economie di scala significative',
          'Premium price elevato',
          'Differenziazione di prodotto',
          'Nicchia ristretta',
          'Cost driver ottimizzati'
        ],
        correctIndices: [0, 4],
        explanation: "Cost Leadership: economie di scala, esperienza, controllo dei cost driver (Porter), spesso ambito ampio. Premium price e differenziazione sono della strategia opposta.",
        weeks: [5]
      },
      {
        question: 'Nel modello A-U (Abernathy-Utterback), la fase **Specifica** è caratterizzata da:',
        options: [
          'Alta innovazione di prodotto, basso volume',
          'Emergere del dominant design',
          'Alta innovazione di processo, prodotto stabile',
          'Frammentazione del settore',
          'Concentrazione del settore e standardizzazione'
        ],
        correctIndices: [2, 4],
        explanation: "Fase Specifica: prodotto consolidato, innovazione si sposta su processo (efficienza), settore concentrato. Fluida = innovazione prodotto/frammentazione; Transitoria = emergere dominant design.",
        weeks: [11]
      },
      {
        question: "Il **bullwhip effect** descrive:",
        options: [
          "L'amplificazione della variabilità della domanda lungo la supply chain",
          "L'effetto di un calo dei prezzi sul margine",
          "La diminuzione della qualità nel tempo",
          "L'oscillazione del cambio nelle multinazionali",
          "L'effetto rete tra utenti di una piattaforma"
        ],
        correctIndices: [0],
        explanation: "Bullwhip effect: piccole variazioni di domanda al cliente finale si amplificano risalendo la supply chain (retailer → wholesaler → produttore). Cause: lead time, ordini batched, promozioni, rationing. La simulazione **Beer Game** lo dimostra.",
        weeks: [10]
      },
      {
        question: 'Le **economie di scopo** sono:',
        options: [
          'Riduzioni di costo dovute al volume',
          'Riduzioni di costo dovute alla condivisione di risorse tra prodotti diversi',
          'Riduzioni di costo dovute all\'apprendimento',
          'Risparmi da delocalizzazione',
          'Economie da integrazione verticale'
        ],
        correctIndices: [1],
        explanation: "Scope economies = costi inferiori producendo congiuntamente più prodotti che separatamente, condividendo risorse (R&D, brand, distribuzione). Diversa da scala (volume) e esperienza (apprendimento cumulato).",
        weeks: [8]
      },
      {
        question: "Quale generazione è caratterizzata da nativi digitali, valori sociali forti, e preferenza per esperienze rispetto a possesso?",
        options: ['Baby Boomers', 'Gen X', 'Millennials (Gen Y)', 'Gen Z', 'Xennials'],
        correctIndices: [3],
        explanation: "Gen Z (1997-2012): nati con internet/smartphone, sensibili a sostenibilità e diversity, consumatori esperienziali, digital-first per acquisti e socializzazione.",
        weeks: [1]
      }
    ],
    teoriaApplicata: [
      {
        question: 'Considera il **settore farmaceutico** delle big pharma (Pfizer, Roche, Novartis). Spiega perché in questo settore le strategie di **differenziazione** prevalgono su quelle di cost leadership, facendo riferimento al ciclo di vita di un farmaco e al ruolo del brevetto. (max 10 righe)',
        weeks: [5, 11],
        soluzione: `Il settore farmaceutico opera in un ambiente dominato dall'**asimmetria informativa** medico-paziente, da **brevetti** (durata 20 anni dall'application) e da **regolamentazione** stringente (FDA/EMA). Questi tre fattori favoriscono la differenziazione su scala industriale di farmaci innovativi.

**Ciclo del farmaco:**
1. **R&D + trial clinici (10-15 anni)**: investimenti enormi (~2 mld $/farmaco). Rischio di fallimento >90%.
2. **Periodo di esclusiva post-lancio (~8-10 anni utili)**: il brevetto consente prezzi premium, recuperando R&D.
3. **Patent cliff**: scadenza brevetto → ingresso generici → prezzo crolla del 70-90%.

**Perché differenziazione?** L'unicità terapeutica (efficacia, profilo effetti collaterali) è il vero cost driver del prezzo. Cost leadership funziona solo per i **generici** post-cliff. Le big pharma combattono la commoditizzazione con **strategie di portfolio** (Frontline + Pipeline) e marketing al medico (detailing). La differenziazione è inoltre amplificata dal **branding del molecola** (es. Viagra, Lipitor) e dal premium price tollerato dal sistema sanitario per farmaci salvavita.`
      },
      {
        question: "Che cos'è il **Bullwhip effect**? Descrivi il fenomeno e fai riferimento alle dinamiche osservate nella simulazione **Beer Game** o a un esempio concreto. (max 10 righe)",
        weeks: [10],
        soluzione: `Il **Bullwhip effect** è l'amplificazione progressiva della variabilità degli ordini risalendo la supply chain dal cliente finale verso il produttore. Una piccola fluttuazione della domanda al retailer genera oscillazioni sempre più ampie a wholesaler, distributore e produttore.

**Cause principali (Lee et al. 1997):**
1. **Demand forecast updating**: ogni stadio rivede le previsioni → reazioni amplificate
2. **Order batching**: ordini raggruppati settimanali/mensili nascondono il segnale reale
3. **Price fluctuations / promozioni**: clienti accumulano scorte durante gli sconti
4. **Rationing & shortage gaming**: in caso di scarsità, i clienti gonfiano gli ordini per ricevere allocazioni proporzionali

**Beer Game (MIT Sloan):** simulazione con 4 stadi (retailer, wholesaler, distributor, factory) che ordinano birra. Una domanda inizialmente costante con un piccolo shock genera ondate amplificate di ordini con stockout iniziali e poi sovrascorte massicce. Conferma che il bullwhip nasce da **strutture di feedback ritardate**, non da incompetenza.

**Contromisure:** condivisione informativa (VMI, EDI), riduzione lead time, ordini continui, EDLP invece di promozioni, supplier integration.`
      }
    ],
    esercizi: [
      {
        question: `Una pasticceria artigianale ha:
- Costo fisso annuo (affitto + stipendi base) = €60.000
- Costo variabile per pezzo (ingredienti + packaging) = €1,50
- Prezzo di vendita medio = €4,50

Calcolare il **Break-Even Point** in quantità (Q*) e in fatturato (€). Successivamente, indicare di quanto cambia Q* se il prezzo sale a €5,00.`,
        weeks: [2],
        soluzione: `**Formule:** Q* = CF / (P − cv); Fatturato BEP = P · Q*

**Caso 1: P = €4,50**
- Margine di contribuzione unitario: P − cv = 4,50 − 1,50 = €3,00
- Q* = 60.000 / 3,00 = **20.000 pezzi/anno**
- Fatturato BEP = 4,50 × 20.000 = **€90.000**

**Caso 2: P = €5,00**
- Margine unitario: 5,00 − 1,50 = €3,50
- Q* = 60.000 / 3,50 = **17.143 pezzi/anno** (arrotondato)
- Fatturato BEP = 5,00 × 17.143 = **€85.715**

**Variazione:** ΔQ* = 20.000 − 17.143 = −2.857 pezzi/anno (-14,3%).

**Interpretazione:** un aumento del prezzo del +11% (da 4,50 a 5,00) abbatte il punto di pareggio del 14% sui volumi. Tuttavia attenzione all'**elasticità della domanda**: se il prezzo provoca un calo di volumi >14% l'effetto netto è negativo. Il BEP non considera questa dinamica e va integrato con un'analisi di sensitività sulla quantità venduta.`
      },
      {
        question: "Applica il framework **VRIO** alle seguenti risorse di **Ferrari** e classificane il risultato (Disadvantage / Parity / Temporary / Sustainable).",
        weeks: [4],
        soluzione: `| Risorsa | V | R | I | O | Risultato |
|---------|---|---|---|---|-----------|
| **Heritage del marchio** (storia 80 anni, mito) | ✅ | ✅ | ✅ | ✅ | **Sustainable competitive advantage** |
| **Conoscenza ingegneristica F1** | ✅ | ✅ | ✅ | ✅ | **Sustainable** (catena di apprendimento culturale) |
| **Linea di assemblaggio robotizzata** | ✅ | ❌ | ❌ | ✅ | **Parity** (i competitor hanno linee simili) |
| **Capacità di limitare l'offerta** (waiting list) | ✅ | ✅ | ❌ | ✅ | **Temporary advantage** (imitabile da Lambo, McLaren) |
| **Stabilimenti di Maranello (location)** | ✅ | ✅ | ✅ | ❌ | **Unused** — risorsa di valore non sfruttata appieno se il marketing/HR non valorizzano la "Motor Valley" |

**Commento:** il vantaggio competitivo sostenibile di Ferrari nasce dall'**heritage** e dalla **knowledge tacita** racing/produzione, codificata in routine organizzative difficili da replicare. Il marchio è la risorsa più preziosa: non riproducibile in tempi brevi, oggetto di forte fedeltà del consumatore, supportato da brand stretching (lusso, abbigliamento, eventi).`
      },
      {
        question: `Disegna a parole il **funnel del Customer Journey 5A** di Kotler per il lancio di una nuova app di mobile banking. Per ogni stadio indica un'azione marketing concreta.`,
        weeks: [12],
        soluzione: `**Modello 5A (Kotler):** Aware → Appeal → Ask → Act → Advocate

| Stadio | Stato | Azione marketing |
|--------|-------|------------------|
| **AWARE** | L'utente sente parlare dell'app | Campagna di awareness: spot TV, billboard, social ads (Meta, TikTok), partnership influencer fintech |
| **APPEAL** | L'utente è incuriosito | Landing page con value proposition forte ("0 spese, conto in 3 minuti"), comparison tool vs banche tradizionali, video tutorial |
| **ASK** | Cerca informazioni e recensioni | SEO/SEM ottimizzato per keyword "miglior conto digitale 2026", presenza su forum (TrustPilot), FAQ chiaro su sicurezza, programma referral |
| **ACT** | Apre il conto e fa la prima operazione | Onboarding semplificato (KYC video, 5 step), bonus "20€ alla prima ricarica", supporto live chat in-app, push notifications guida |
| **ADVOCATE** | Raccomanda l'app ad amici | Programma "Invita un amico" (10€ a invito), gamification (badge, ranking), survey NPS, community Discord/Reddit, premi per recensioni positive |

**KPI da monitorare:** Awareness (reach, impressions), Conversion rate Aware→Act (~2-5% benchmark fintech), Net Promoter Score (target NPS > 40 per fintech), Customer Lifetime Value vs Customer Acquisition Cost (rapporto CLV/CAC > 3).`
      },
      {
        question: `Calcola la **leva finanziaria** (debt-to-equity) e analizza la **rischiosità** delle 3 banche seguenti, con un breve commento.

| Banca | Attività (mln) | Capitale proprio (mln) |
|-------|---------------|------------------------|
| Banca A | 1.000 | 100 |
| Banca B | 800 | 50 |
| Banca C | 1.500 | 200 |`,
        weeks: [4],
        soluzione: `**Leva finanziaria** = Attività / Capitale proprio

| Banca | Calcolo | Leva |
|-------|---------|------|
| Banca A | 1.000 / 100 | **10x** |
| Banca B | 800 / 50 | **16x** |
| Banca C | 1.500 / 200 | **7,5x** |

**Patrimonio netto disponibile (= Capitale)** rispetto a perdite ipotetiche:
- Se le attività perdono il **5%** del valore:
  - A: perde 50 → resta capitale 50 (50% buffer eroso)
  - B: perde 40 → resta capitale 10 (80% eroso) → **rischio insolvenza**
  - C: perde 75 → resta capitale 125 (37,5% eroso)

**Commento:**
- **Banca C** è la più solida (leva minore). Perdite del 5% lasciano ampi cuscinetti.
- **Banca B** è la più rischiosa: una crisi che eroda solo il 6,25% delle attività la porterebbe sotto zero (insolvenza).
- **Basilea III** richiede CET1 ≥ 4,5% delle attività ponderate per il rischio (RWA). Banche con leva > 12-15 sono nel mirino degli stress test.

**Trade-off:** leva alta = ROE potenziale alto in periodi favorevoli, ma rischio amplificato in recessione (cap. 4 sul leverage e i requisiti patrimoniali Basilea).`
      }
    ]
  },

  // ────────────────────────────────────────────────────────────
  // SIMULAZIONE 3 — Sostenibilità, BMC, Marketing, Stakeholder
  // ────────────────────────────────────────────────────────────
  {
    id: 3,
    title: 'Simulazione 3',
    subtitle: 'Sostenibilità, business model e marketing',
    duration: 90,
    multipleChoice: [
      {
        question: "Il **Business Model Canvas** di Osterwalder ha 9 blocchi. Quali fra questi NE FANNO parte?",
        options: [
          'Customer Segments',
          'SWOT Analysis',
          'Value Proposition',
          'BCG Matrix',
          'Cost Structure'
        ],
        correctIndices: [0, 2, 4],
        explanation: "I 9 blocchi BMC: Customer Segments, Value Proposition, Channels, Customer Relationships, Revenue Streams, Key Resources, Key Activities, Key Partners, Cost Structure. SWOT e BCG sono tool diversi.",
        weeks: [6]
      },
      {
        question: 'Il **Triple Bottom Line** di Elkington misura performance secondo:',
        options: [
          'Profit, People, Planet',
          'Past, Present, Future',
          'Plan, Process, Performance',
          'Product, Price, Place',
          'Profit, Profitability, Positioning'
        ],
        correctIndices: [0],
        explanation: "Le 3P di Elkington (1994) sono i tre pilastri della sostenibilità d'impresa: Profit (economico), People (sociale), Planet (ambientale).",
        weeks: [6]
      },
      {
        question: 'Nella matrice **Power-Interest** di Mendelow per gli stakeholder, gli azionisti di maggioranza ricadono tipicamente in:',
        options: [
          'Manage Closely (alto potere, alto interesse)',
          'Keep Satisfied (alto potere, basso interesse)',
          'Keep Informed (basso potere, alto interesse)',
          'Monitor (basso potere, basso interesse)',
          'Dipende dal settore'
        ],
        correctIndices: [0],
        explanation: "Azionisti di maggioranza hanno sia alto potere (votano nelle assemblee, scelgono il board) sia alto interesse (rendimento del capitale). Sono stakeholder primari da gestire attivamente.",
        weeks: [6]
      },
      {
        question: 'Il modello **STP** in marketing è:',
        options: [
          'Strategy-Tactics-Performance',
          'Segmentation-Targeting-Positioning',
          'Sales-Trade-Promotion',
          'Strength-Threats-Profit',
          'Sustainability-Trust-People'
        ],
        correctIndices: [1],
        explanation: "STP: Segmentazione (dividere il mercato), Targeting (scegliere il segmento), Posizionamento (definire come essere percepiti).",
        weeks: [12]
      },
      {
        question: 'La **Customer Lifetime Value** (CLV) è:',
        options: [
          'Il costo di acquisizione di un cliente',
          'Il valore attuale netto del flusso di profitti generati da un cliente nel suo ciclo di vita',
          'La spesa media di un cliente in un anno',
          'Il numero di prodotti acquistati da un cliente',
          'La frequenza degli acquisti'
        ],
        correctIndices: [1],
        explanation: "CLV = NPV dei profitti futuri generati da un cliente. Formula base: Σ (Margine × Retention^t / (1+r)^t). Confrontato con CAC, indica la sostenibilità del modello marketing.",
        weeks: [12]
      },
      {
        question: 'Il **9R framework** dell\'economia circolare di Ellen MacArthur include (tutte vere)?',
        options: [
          'Reduce',
          'Reuse',
          'Recycle',
          'Refurbish',
          'Reset (NON FA PARTE)'
        ],
        correctIndices: [0, 1, 2, 3],
        explanation: "Le 9R: Refuse, Rethink, Reduce, Reuse, Repair, Refurbish, Remanufacture, Repurpose, Recycle, Recover. 'Reset' non fa parte del framework.",
        weeks: [6]
      },
      {
        question: 'Una **B-Corp** si distingue per:',
        options: [
          'Essere quotata in borsa',
          'Aver superato il B Impact Assessment con punteggio ≥ 80/200',
          'Essere una società no-profit',
          'Avere sede in Italia',
          'Operare nel settore tecnologico'
        ],
        correctIndices: [1],
        explanation: "Una B-Corp è certificata da B Lab dopo aver superato il B Impact Assessment (almeno 80 punti su 200) e modifica lo statuto per integrare obiettivi sociali/ambientali. Non legata a quotazione, no-profit o settore.",
        weeks: [6]
      },
      {
        question: 'Il **brand equity** secondo Aaker include:',
        options: [
          'Brand awareness',
          'Brand loyalty',
          'Quality perception',
          'Brand associations',
          'Costo di produzione'
        ],
        correctIndices: [0, 1, 2, 3],
        explanation: "Aaker (1991): le 5 dimensioni del brand equity sono Awareness, Loyalty, Perceived Quality, Brand Associations, Other proprietary assets (brevetti, canali). Il costo di produzione è una dimensione contabile.",
        weeks: [12]
      }
    ],
    teoriaApplicata: [
      {
        question: 'Nel 2020 l\'AGCM ha sanzionato **Eni** per **greenwashing** sulla sua "Diesel+" presentato come "componente bio rinnovabile". Spiega cosa sia il greenwashing e perché casi come questo erodono il valore di lungo periodo del brand. Riferisci ai 7 peccati di TerraChoice o alla Direttiva UE Green Claims 2024/825. (max 10 righe)',
        weeks: [6],
        soluzione: `Il **greenwashing** (Westerveld, 1986) è la pratica con cui un'impresa comunica falsamente o esagera i benefici ambientali dei propri prodotti per attirare consumatori green-sensitive senza aver realmente trasformato i processi.

**I 7 peccati TerraChoice:**
1. Trade-off nascosto (focus su un solo aspetto green ignorando danni maggiori)
2. Mancanza di prova
3. Vaghezza ("eco", "natural" senza standard)
4. Falsa etichetta
5. Irrilevanza (es. "no CFC" su prodotti dove sono già vietati)
6. Minore di due mali
7. Falsità

**Caso Eni (Diesel+):** sanzionato perché la quota "bio" era solo del 15% (palmolio) e generava più CO₂ totale del diesel tradizionale. Il messaggio "componente verde" induceva il consumatore in errore (peccato di **trade-off nascosto** + **vaghezza**).

**Effetti di lungo periodo:**
- Erosione brand equity e trust irrecuperabile in alcuni segmenti (Gen Z particolarmente sensibile)
- Multe e rischi reputazionali
- Direttiva UE 2024/825 (Green Claims): richiede prove scientifiche prima di affermazioni green; vieta certificazioni autoreferenziali
- Stigma settoriale: il caso Eni rinforza la diffidenza verso oil&gas, complicando la transizione narrativa

L'autenticità della transizione ecologica è ora un asset strategico: non basta dirsi green, bisogna esserlo (es. Patagonia "Don't Buy This Jacket").`
      },
      {
        question: 'Descrivi il **Customer Journey** di un consumatore che valuta l\'acquisto di un\'auto elettrica (es. Tesla Model 3). Identifica i punti di contatto critici e le opportunità marketing in ogni fase. (max 10 righe)',
        weeks: [12],
        soluzione: `**Customer Journey 5A applicato al Tesla Model 3:**

1. **AWARE** — Esposizione: vedere una Tesla in strada, parlando con amici, articolo blog auto. Touchpoint: social organico (Elon Musk twitter), spot, eventi auto. Opportunità: PR esperienze (Cybertruck reveal).

2. **APPEAL** — Attratto da design/sostenibilità/tecnologia. Touchpoint: sito Tesla, video YouTube test drive, recensioni MotorTrend. Opportunità: configurator interattivo, calcolatore ROI vs benzina (€/km).

3. **ASK** — Ricerca attiva: prezzi, autonomia reale, costi assicurazione, ricarica, incentivi statali. Touchpoint: forum (Teslarati), Reddit r/teslamotors, Trustpilot, comparatori. Opportunità: contenuti SEO ("Tesla Model 3 vs BMW i4"), ambassador program, FAQ tecniche.

4. **ACT** — Test drive + ordine online. Touchpoint: Tesla store, app Tesla per ordine. Opportunità: esperienza store con realtà aumentata, finanziamenti integrati, consegna seamless.

5. **ADVOCATE** — Posta foto, recensisce, raccomanda. Touchpoint: social, programma referral. Opportunità: programma incentivi (mesi di Supercharge gratis), eventi owners club, app community.

**Punti critici:** la fase ASK è la più lunga per un acquisto da 50k€. La trasparenza dei costi totali di possesso (TCO) e la rete Supercharger sono i fattori decisivi. Il **passaparola** (advocate) è il driver più forte: studio MIT mostra che il 70% degli acquirenti Tesla è arrivato per referral.`
      }
    ],
    esercizi: [
      {
        question: `Costruisci un **Business Model Canvas** sintetico per un'app di consegna a domicilio di pasti vegani gourmet. Compila i 9 blocchi indicando 2-3 punti chiave per ogni blocco.`,
        weeks: [6],
        soluzione: `**Business Model Canvas — "VeggiePro"**

| Blocco | Contenuto |
|--------|-----------|
| **1. Customer Segments** | Vegani urbani 25-45 anni, professionisti high-income, sportivi/health-conscious, ristoranti aziendali plant-based |
| **2. Value Proposition** | Pasti vegani gourmet pronti, ingredienti locali e bio, ricette di chef stellati, certificato 100% vegano cruelty-free, packaging compostabile |
| **3. Channels** | App mobile (iOS/Android), sito web, partnership con Deliveroo/Glovo per zone non coperte, abbonamento mensile direct |
| **4. Customer Relationships** | Self-service tramite app + chat in-app, programma fedeltà (10° pasto gratis), notifiche push personalizzate (preferenze dietetiche), community Instagram |
| **5. Revenue Streams** | Vendita singolo pasto (12-25€), abbonamento weekly box (5 pasti 79€/sett), partnership con palestre/ufficio (catering aziendale) |
| **6. Key Resources** | Cucina centrale certificata, chef vegan (knowledge), fornitori locali bio, brand "VeggiePro", piattaforma tech (algoritmo personalizzazione menu) |
| **7. Key Activities** | Sviluppo ricette, produzione pasti, logistica last-mile, marketing performance, customer service, R&D nuovi piatti stagionali |
| **8. Key Partners** | Aziende agricole bio locali, dark kitchen rented, corrieri (in-house o Glovo), influencer plant-based, certificatori vegan (Vegan Society, V-Label) |
| **9. Cost Structure** | Costi food (35%), labor cucina+riders (28%), tech+marketing (15%), packaging eco (8%), affitto cucina (10%), altri (4%). Modello variable-cost dominante |

**Lettura strategica per macro-aree:**
- **Sistema del valore** (8, 6, 7): cucina centrale + supply locale = controllo qualità
- **Proposta** (2): differenziazione su gourmet + sostenibilità (no commodity vegan)
- **Mercato** (1, 3, 4): segmento premium urbano, canali digitali
- **Profittabilità** (5, 9): margine alto ma costi food impegnativi`
      },
      {
        question: `Calcola il **CLV** (Customer Lifetime Value) di un cliente di un'app di streaming musicale, dati:
- Margine annuo per cliente: M = €60
- Retention rate annuo: r_ret = 80%
- Tasso di sconto: r = 5%
- Orizzonte: 5 anni

Confronta poi con CAC = €40 e indica se il modello è sostenibile (regola di pollice CLV/CAC ≥ 3).`,
        weeks: [12],
        soluzione: `**Formula CLV finita:** CLV = Σ(t=1..N) [M · r_ret^(t-1) / (1+r)^t]

**Calcolo anno per anno (M=60, r_ret=0,8, r=0,05):**

| Anno t | r_ret^(t-1) | Margine atteso M·r_ret^(t-1) | (1+r)^t | Valore attuale |
|--------|-------------|------------------------------|---------|----------------|
| 1 | 1,000 | 60,00 | 1,050 | 57,14 |
| 2 | 0,800 | 48,00 | 1,1025 | 43,54 |
| 3 | 0,640 | 38,40 | 1,1576 | 33,17 |
| 4 | 0,512 | 30,72 | 1,2155 | 25,27 |
| 5 | 0,4096 | 24,58 | 1,2763 | 19,26 |

**CLV (5 anni) = 57,14 + 43,54 + 33,17 + 25,27 + 19,26 = €178,38**

**Rapporto CLV/CAC = 178,38 / 40 = 4,46**

**Verdetto:** ✅ Il modello è **sostenibile** (4,46 > 3). Ogni euro speso in acquisizione genera ~€4,46 di valore lifetime → margine ampio per investire in growth.

**Sensitività:**
- Se retention scendesse al 65%: CLV ≈ €130, ratio = 3,25 (al limite)
- Se retention salisse al 90%: CLV ≈ €230, ratio = 5,75 (eccellente)

**Implicazione strategica:** investire in **retention** (UX, contenuti esclusivi, programmi loyalty) ha ROI > investire in acquisizione, perché alza CLV in modo esponenziale. Spotify a fronte di churn ~5% mensile spende ~50% del marketing su customer success.`
      },
      {
        question: `Identifica **4 stakeholder primari** di un'azienda di moda fast-fashion (es. Zara) e posiziona ciascuno nella **matrice Power-Interest di Mendelow**, indicando per ognuno la **strategia di engagement** appropriata.`,
        weeks: [6],
        soluzione: `**Matrice Power-Interest applicata a Zara/Inditex:**

| Stakeholder | Power | Interest | Quadrante | Strategia |
|-------------|-------|----------|-----------|-----------|
| **Famiglia Ortega (azionisti maggioranza, ~59%)** | Alto | Alto | **Manage Closely** | Coinvolgimento attivo nelle scelte strategiche, info real-time, incontri periodici board |
| **Lavoratori filiere asiatiche (Bangladesh, Cambogia)** | Basso | Alto | **Keep Informed** | Comunicazione trasparente su standard sociali, audit indipendenti, codici di condotta, certificazioni (es. Better Work) |
| **Regolatori UE (CSRD, Green Deal)** | Alto | Basso (sui singoli player) | **Keep Satisfied** | Compliance proattiva, lobbying responsabile, partecipazione a tavoli ESG, reporting volontario superiore al minimo |
| **Consumatori finali (Gen Z, social media)** | Basso individualmente, alto in massa | Alto | **Keep Informed** + monitoraggio social | Comunicazione brand autentica, trasparenza materiali, programma resi sostenibili (Lefties), gestione crisi reputazionali rapida |
| **(Bonus) Influencer fashion** | Medio | Medio | **Tra Manage e Inform** | Partnership selettive, ambassador program, gifting strategico |

**Lettura:**
- Zara ha sviluppato un'**alta sensibilità** ai social: una crisi (es. accuse di lavoro minorile in fabbriche subcontracted) può scalare da "Keep Informed" a un boicottaggio in 48h.
- Il framework Mendelow è statico: **stakeholder dynamism** richiede monitoraggio continuo (es. Greta Thunberg ha portato i regolatori da basso a alto interesse in pochi anni).
- L'AA1000 standard di **stakeholder engagement** richiede che chi è in Manage Closely partecipi attivamente alla strategia.`
      },
      {
        question: `Calcola la **propensione marginale al consumo (PMC)** di una famiglia se quando il reddito disponibile aumenta da €30.000 a €36.000, il consumo passa da €25.000 a €29.500. Spiega cosa significa nel contesto macroeconomico (cap. 3 macro).`,
        weeks: [3, 12],
        soluzione: `**Formula:** PMC = ΔC / ΔY_disp

- ΔY_disp = 36.000 − 30.000 = **€6.000**
- ΔC = 29.500 − 25.000 = **€4.500**

**PMC = 4.500 / 6.000 = 0,75**

**Significato:** la famiglia spende il **75%** di ogni euro aggiuntivo di reddito; il restante 25% (PMS = 1 − PMC = 0,25) viene risparmiato.

**Implicazioni macroeconomiche (cap. 3 e 11 di macro):**
- **Effetto moltiplicatore:** se PMC = 0,75 e non c'è apertura/tasse, il moltiplicatore keynesiano è 1/(1−PMC) = 1/0,25 = **4**. Un aumento di spesa pubblica di 1€ genera 4€ di reddito aggregato.
- **Politica fiscale**: sussidi alle famiglie a basso reddito (PMC alta, ~0,9) sono più efficaci delle riduzioni fiscali ai ricchi (PMC bassa, ~0,3-0,5) per stimolare l'aggregato.
- **Differenze tra fasce**: studi BCE confermano PMC ≈ 0,8 nei primi 3 quintili di reddito, ≈ 0,5 nei 2 più alti.

**Critica:** il modello keynesiano semplice ignora aspettative (Friedman, permanent income hypothesis), debito, vincoli di liquidità. La PMC effettiva varia con il ciclo economico (sale in recessione per famiglie liquidity-constrained).`
      }
    ]
  },

  // ────────────────────────────────────────────────────────────
  // SIMULAZIONE 4 — Operations, Innovazione, Lean
  // ────────────────────────────────────────────────────────────
  {
    id: 4,
    title: 'Simulazione 4',
    subtitle: 'Operations management e innovazione',
    duration: 90,
    multipleChoice: [
      {
        question: "L'**Economic Order Quantity (EOQ)** ottimale è data da:",
        options: [
          'Q* = √(2DS/H)',
          'Q* = D × S × H',
          'Q* = D / S',
          'Q* = (D + S) / H',
          'Q* = H / (D × S)'
        ],
        correctIndices: [0],
        explanation: "EOQ classico (Wilson 1913): Q* = √(2DS/H), dove D=domanda annua, S=costo per ordine, H=costo holding unitario. Bilancia ordering cost (D·S/Q) e holding cost (H·Q/2).",
        weeks: [10]
      },
      {
        question: 'I **7 muda** della Lean Production includono:',
        options: [
          'Trasporti eccessivi',
          'Scorte',
          'Innovazione',
          'Difetti',
          'Sovrapproduzione'
        ],
        correctIndices: [0, 1, 3, 4],
        explanation: "I 7 muda di Toyota: Trasporti, Scorte (inventory), Movimenti, Attese, Sovrapproduzione, Lavorazioni eccessive, Difetti. L'innovazione NON è uno spreco. (Alcuni autori aggiungono un 8° muda: spreco di talento.)",
        weeks: [10]
      },
      {
        question: 'La **curva ad S** dell\'innovazione tecnologica descrive:',
        options: [
          'Diffusione lineare nel tempo',
          'Performance tecnologica vs investimento/tempo, con limite asintotico',
          'Vendite di prodotto',
          'Costo decrescente con l\'esperienza',
          'Quota di mercato'
        ],
        correctIndices: [1],
        explanation: "S-curve (Foster 1986): la performance di una tecnologia cresce lentamente all'inizio (emersione), accelera (crescita), poi rallenta verso un limite asintotico (maturità). Quando una tecnologia raggiunge il plateau, le imprese devono saltare a una nuova S-curve (innovation discontinuities).",
        weeks: [11]
      },
      {
        question: "**Open Innovation** secondo Chesbrough significa:",
        options: [
          'R&D solo interno (closed)',
          'Collaborazione con startup/università per acquisire o vendere conoscenza',
          'Tutti i brevetti pubblici',
          'Crowd-sourcing di nuove idee',
          'Outsourcing dell\'IT'
        ],
        correctIndices: [1, 3],
        explanation: "Open Innovation (Chesbrough 2003): apertura del processo innovativo. Modalità: inbound (acquisire da fuori, es. P&G Connect+Develop), outbound (licensing, spin-off), coupled (joint venture). Il crowdsourcing è un caso di inbound (es. InnoCentive).",
        weeks: [11]
      },
      {
        question: 'Nel processo produttivo **Make-To-Order (MTO)**:',
        options: [
          'Si produce su previsione di domanda',
          'Si produce solo dopo aver ricevuto un ordine',
          'Si tiene scorta di prodotto finito',
          'Lead time per il cliente è breve',
          'È adatto a prodotti standardizzati ad alto volume'
        ],
        correctIndices: [1],
        explanation: "MTO: si produce solo dopo l'ordine. Lead time più lungo per il cliente ma scorte minime. Tipico di prodotti customizzati (mobili su misura, macchinari speciali). MTS = Make-To-Stock = previsione (food, basics).",
        weeks: [10]
      },
      {
        question: 'Nella **Curva di Rogers** della diffusione dell\'innovazione, gli **Early Adopters** rappresentano:',
        options: [
          'Il 2,5% del mercato',
          'Il 13,5% del mercato',
          'Il 34% del mercato',
          'Il 50% del mercato',
          'Il 68% del mercato'
        ],
        correctIndices: [1],
        explanation: "Rogers (1962): Innovators 2,5%, Early Adopters 13,5%, Early Majority 34%, Late Majority 34%, Laggards 16%. Total = 100%. Gli Early Adopters sono i visionari che adottano subito dopo gli innovatori per ottenere vantaggio competitivo.",
        weeks: [11]
      },
      {
        question: "Una **Disruptive Innovation** secondo Christensen:",
        options: [
          'Inizia dal segmento high-end',
          'Inizia dal segmento low-end o nuovo mercato',
          'Migliora performance dei prodotti esistenti',
          'È adottata subito dai grandi player',
          'Crea nuovi modelli di business'
        ],
        correctIndices: [1, 4],
        explanation: "Disruption (Christensen 1997): nasce da segmenti trascurati (low-end o new market), inizialmente con performance inferiori sui criteri tradizionali ma migliori su nuovi (prezzo, semplicità). Esempi: Netflix vs Blockbuster, fotocamere digitali vs film. **Sustaining innovation** invece migliora prodotti esistenti per mainstream.",
        weeks: [11]
      },
      {
        question: 'Un **brevetto** garantisce protezione per:',
        options: [
          '5 anni',
          '10 anni',
          '20 anni dalla data di deposito (priority date)',
          '50 anni',
          'Indefinitamente, se rinnovato'
        ],
        correctIndices: [2],
        explanation: "Brevetto industriale: 20 anni dalla priority date (TRIPS, WTO). Marchio: rinnovabile indefinitamente ogni 10 anni. Copyright: vita autore + 70 anni. Segreto industriale: indefinito ma fragile.",
        weeks: [11]
      }
    ],
    teoriaApplicata: [
      {
        question: 'Spiega cos\'è la **servitization** prendendo come riferimento il modello "Power by the Hour" di **Rolls-Royce Aerospace**. Quali implicazioni operative e strategiche ha questo modello per produttore e cliente? (max 10 righe)',
        weeks: [10],
        soluzione: `La **servitization** è il passaggio strategico da vendita di prodotto a vendita di prodotto+servizio (o solo servizio basato sul prodotto). Il cliente non compra l'asset ma il **risultato** che ne deriva.

**Caso Rolls-Royce "Power by the Hour" (TotalCare):**
- Le compagnie aeree (Air France, Emirates) NON acquistano il motore aeronautico
- Pagano Rolls-Royce **per ora di volo effettivo** (es. ~$300-500/ora)
- Rolls-Royce mantiene la proprietà del motore e si occupa di manutenzione predittiva, ricambi, riparazioni

**Implicazioni per il produttore:**
- **Ricavi ricorrenti** (recurring revenue) → margini più alti e stabili (60-70% vs 20-30% sui motori)
- Necessità di IoT/sensori per monitoraggio (dati real-time da 12.000 motori in flight)
- Allineamento incentivi: meno guasti = più profitto (incentivo a costruire motori più affidabili)
- Vincolo di capitale immobilizzato

**Implicazioni per il cliente:**
- Costo predicibile, no investimento upfront
- Trasferisce il rischio di obsolescenza/manutenzione al fornitore
- Lock-in con il fornitore (switching cost alto)
- Focus su core business (volare aerei, non gestire manutenzione)

**Estensione a altri settori:** Hilti (utensili), Caterpillar (macchine movimento terra), Philips (lampadine come servizio "Pay-per-Lux"). La servitization è abilitata da IoT, big data e cloud, ed è coerente con i principi di economia circolare (cap. 6).`
      },
      {
        question: 'Spiega la differenza tra **innovazione sostaining** e **disruptive** secondo Christensen, con due esempi storici concreti per ciascuna. Perché le imprese leader spesso falliscono di fronte alla disruption? (max 10 righe)',
        weeks: [11],
        soluzione: `**Sustaining innovation** (Christensen): migliora i prodotti esistenti lungo le dimensioni di performance valutate dai clienti tradizionali. Mantiene i clienti mainstream soddisfatti.
- **Esempi:** processori Intel sempre più potenti (1995-2010), camere reflex con sensori sempre più nitidi (Canon 5D Mark I→II→III), motori a combustione sempre più efficienti.

**Disruptive innovation:** parte da un segmento **low-end** o da un **nuovo mercato**, con prodotto inizialmente inferiore sui criteri mainstream, ma migliore su altri (prezzo, semplicità, accessibilità). Migliora poi rapidamente, "risale" la scala e disloca i leader.
- **Low-end:** Toyota negli USA negli anni '70 (auto piccole/economiche prima di salire al lusso con Lexus). Mini-mill di acciaio (Nucor) vs integrated mills.
- **Nuovo mercato:** smartphone (Apple) vs PDA, fotocamere digitali vs film fotografico (Kodak/Polaroid), Netflix streaming vs Blockbuster.

**Perché i leader falliscono ("Innovator's Dilemma"):**
1. **Razionalità manageriale**: ascoltano i clienti mainstream che dicono "non ci serve la tecnologia disruptive" (es. clienti Kodak preferivano qualità film).
2. **Asset intangibili**: catene del valore consolidate (rete dealer, brand premium) sono inadatte ai nuovi mercati.
3. **Logica finanziaria**: i nuovi segmenti hanno margini bassi, non passano i screening interni.
4. **Cultura organizzativa**: chi ha dominato il vecchio paradigma non vuole cannibalizzarsi.

**Soluzione:** creare **autonomous business unit** o **spin-off** per esplorare disruption (es. GM con la divisione EV separata, Inditex con le linee online indipendenti dai negozi).`
      }
    ],
    esercizi: [
      {
        question: `Calcola l'**EOQ** per un'azienda con i seguenti dati:
- D = 12.000 unità/anno
- S = €50 per ordine
- H = €3 per unità/anno

Calcola anche: numero di ordini/anno, intervallo tra ordini (giorni), costo totale di gestione (TC) all'ottimo. Considera 250 giorni lavorativi/anno.`,
        weeks: [10],
        soluzione: `**EOQ formule:**
- Q* = √(2DS/H)
- N° ordini/anno = D / Q*
- Intervallo tra ordini = 250 / N°ordini
- TC = D·S/Q + H·Q/2

**Calcolo:**
- Q* = √(2 × 12.000 × 50 / 3) = √(1.200.000 / 3) = √400.000 = **632,5 unità**
- N° ordini/anno = 12.000 / 632,5 = **18,97 ≈ 19 ordini**
- Intervallo: 250 / 19 = **13,2 giorni** tra un ordine e l'altro
- Costo totale TC:
  - Ordering = 12.000 × 50 / 632,5 = €948,68
  - Holding = 3 × 632,5 / 2 = €948,75
  - **TC ≈ €1.897,43**

**Caratteristiche dell'ottimo:** all'EOQ i due costi (ordering e holding) sono **uguali** — il TC è in un minimo dove le derivate dei due costi si bilanciano.

**Sensitività:**
- Se Q = 800 (sopra l'ottimo): TC = 750 + 1.200 = 1.950 (+2,8%)
- Se Q = 500 (sotto): TC = 1.200 + 750 = 1.950 (+2,8%)
- L'EOQ è abbastanza **robusto**: piccole deviazioni da Q* incrementano TC poco.

**Estensioni operative:**
- **EOQ con sconti per quantità**: confrontare TC a vari livelli di prezzo
- **Safety stock**: SS = z · σ_LT · √L, dove z dipende dal service level (95% → z=1,65)
- **Q-system vs P-system**: Q-system (re-order point) reagisce meglio a domanda variabile`
      },
      {
        question: `Posiziona i seguenti acquisti di un'azienda manifatturiera nella **Matrice di Kraljic** (Impatto sul Profitto vs Rischio di Fornitura). Per ogni voce indica il quadrante e una strategia.

| Acquisto | Spesa annua | Note |
|----------|-------------|------|
| Cancelleria | €5.000 | Mille fornitori disponibili |
| Microchip specifici | €2.000.000 | Solo 2 fornitori al mondo |
| Acciaio standard | €800.000 | Tanti fornitori, prezzo volatile |
| Servizio pulizie | €60.000 | Tanti fornitori locali |`,
        weeks: [8],
        soluzione: `**Matrice di Kraljic:** 4 quadranti — Impatto Profitto (X: alto/basso) × Rischio Fornitura (Y: alto/basso).

| Acquisto | Impatto profitto | Rischio fornitura | Quadrante | Strategia |
|----------|------------------|-------------------|-----------|-----------|
| **Cancelleria** | Basso | Basso | **Non-critical** | Centralizzare acquisti, usare e-procurement standardizzato, focus efficienza transazionale |
| **Microchip specifici** | Alto | Alto | **Strategic** | Partnership di lungo termine, joint development, contratti pluriennali, eventuale integrazione verticale, scouting di alternative |
| **Acciaio standard** | Alto | Basso | **Leverage** | Sfruttare potere d'acquisto: gare competitive, contratti spot, hedging finanziario sui prezzi (commodity), volumi aggregati |
| **Servizio pulizie** | Basso | Basso | **Non-critical** | Outsourcing semplice, contratti annuali, KPI di servizio basici |

**Note critiche:**
- I **microchip** sono il caso più rischioso: alti per impatto e alti per rischio. La crisi 2020-23 (chip shortage post-COVID) ha mostrato come questa categoria possa fermare la produzione (es. auto). Strategia: **dual-sourcing geografico**, scorte di sicurezza, design-to-supply (progettare con chip alternativi sostituibili).
- **Acciaio standard** beneficia di leva negoziale, ma occhio alla **volatilità** dei prezzi commodity → considerare contratti index-linked o copertura derivati.
- **Cancelleria** e **pulizie** sono "low-hanging fruit" per la digitalizzazione del procurement (e.g. punchout cataloghi, marketplace).

**Evoluzione:** un acquisto "leverage" può diventare "strategic" se la concentrazione dei fornitori aumenta (M&A nel settore acciaio). Monitoraggio annuale della matrice è raccomandato.`
      },
      {
        question: `Una catena di fast food ha attualmente:
- 50 ristoranti
- Manager con span of control = 5 (ognuno gestisce direttamente 5 ristoranti)
- 3 livelli gerarchici (CEO → Area Manager → Restaurant Manager)

L'azienda vuole espandersi a **200 ristoranti** mantenendo la stessa struttura. Quanti livelli serviranno se mantieni span = 5? E quanti se aumenti span a 8?`,
        weeks: [9],
        soluzione: `**Formula:** in una struttura piramidale a span s, n totale di posizioni a livello L è s^L. Il livello che contiene tutti i 200 nodi base è ceil(log(N) / log(s)).

**Caso 1 — Span = 5:**
- Livello 1: CEO (1 persona)
- Livello 2: 5 dirigenti (gestiscono 5 cluster)
- Livello 3: 25 manager (5 × 5)
- Livello 4: 125 supervisori (5 × 25)
- Livello 5: 625 (sufficiente per 200)

Livelli necessari = ceil(log(200) / log(5)) = ceil(5,30 / 1,61) = **ceil(3,29) = 4 livelli operativi** + 1 CEO = **5 livelli totali**

**Caso 2 — Span = 8:**
- Livello 1: CEO
- Livello 2: 8 dirigenti
- Livello 3: 64 manager (8 × 8)
- Livello 4: 512 (sufficiente per 200)

Livelli necessari = ceil(log(200) / log(8)) = ceil(5,30 / 2,08) = **ceil(2,55) = 3 livelli operativi** + 1 CEO = **4 livelli totali**

**Trade-off:**

| Configurazione | Livelli | Pro | Contro |
|----------------|---------|-----|--------|
| Span 5 (tall) | 5 | Controllo capillare, mentoring stretto | Comunicazione lenta, costi manageriali alti, rischio silos |
| Span 8 (flat) | 4 | Comunicazione rapida, costi gestionali bassi, autonomia | Sovraccarico manager, controllo meno stretto |

**Raccomandazione:** in una catena fast food **standardizzata** (procedure rigide, KPI chiari) lo span può essere alto (8-10) perché il controllo è automatizzato dai sistemi. In settori con **alta varianza operativa** (consulenza, sanità) span più basso (4-6) è preferibile per qualità del coaching.

**Tendenza moderna:** organizzazioni piatte (Spotify squads, Zappos holacracy) puntano a **span massimo** con **decentralizzazione** decisionale, riducendo levelli a 3-4 anche per migliaia di dipendenti.`
      },
      {
        question: `Un'azienda ha **3 prodotti** (P1, P2, P3) con i seguenti dati:

| Prodotto | Crescita mercato (%) | Quota di mercato relativa (vs leader) |
|----------|----------------------|---------------------------------------|
| P1 | 18% | 0,3 |
| P2 | 4% | 1,8 |
| P3 | 22% | 1,5 |

Posiziona ogni prodotto nella **Matrice BCG** (soglia crescita 10%, soglia quota relativa 1,0). Per ognuno, suggerisci la strategia.`,
        weeks: [8],
        soluzione: `**Matrice BCG:** 4 quadranti definiti da:
- Asse X: quota di mercato relativa (alta se ≥ 1, bassa se < 1) — **decrescente** verso destra
- Asse Y: tasso di crescita del mercato (alto se ≥ 10%, basso se < 10%)

**Posizionamento:**

| Prodotto | Crescita | Quota relativa | Quadrante | Strategia |
|----------|----------|----------------|-----------|-----------|
| **P1** (18%, 0,3) | Alta | Bassa | **Question Mark (?)** | Decisione critica: investire pesantemente per portarlo a Star, oppure dismettere se non ha potenziale di crescita di quota. Build or divest. |
| **P2** (4%, 1,8) | Bassa | Alta | **Cash Cow** 💰 | Mungere il flusso di cassa: investimenti minimi, mantenere quota. Reinvestire la liquidità nelle Question Mark / Star. Hold + harvest. |
| **P3** (22%, 1,5) | Alta | Alta | **Star** ⭐ | Investire massicciamente in marketing e capacità per consolidare leadership. Una Star diventa Cash Cow quando il mercato matura. Build. |

**Bilanciamento di portfolio:**
- Cash flow: P2 (Cash Cow) **finanzia** P1 (Question Mark) e P3 (Star)
- Strategia 360°: cash da P2 → R&D per nuovi Question Mark → costruire prossime Star → diventeranno prossime Cash Cow

**Cosa farei concretamente:**
1. **P3 (Star)**: aumentare CapEx +30% per scalare prima dei competitor, alleanze strategiche, M&A
2. **P2 (Cash Cow)**: ottimizzare costi (lean), estensioni di linea low-cost, tagliare spese di marketing aggressivo (non serve)
3. **P1 (Question Mark)**: condurre analisi di nicchia. Se c'è un segmento dove può conquistare quota, investire 18 mesi. Se no, **dismettere** entro 6 mesi (i Question Mark che restano tali diventano "Dogs" se il mercato rallenta)

**Limite del BCG:** ignora sinergie tra prodotti, non considera profittabilità assoluta (un Dog può essere comunque profittevole), assume che la quota guidi i costi (non sempre vero in servizi/digitale).`
      }
    ]
  },

  // ────────────────────────────────────────────────────────────
  // SIMULAZIONE 5 — Corporate strategy, Org design, HR
  // ────────────────────────────────────────────────────────────
  {
    id: 5,
    title: 'Simulazione 5',
    subtitle: 'Corporate strategy, organizzazione e HR',
    duration: 90,
    multipleChoice: [
      {
        question: 'La **diversificazione correlata** ha tipicamente performance:',
        options: [
          'Inferiori al singolo business',
          'Migliori della diversificazione conglomerata',
          'Identiche al focus su singolo business',
          'Sempre superiori a qualsiasi alternativa',
          'Random'
        ],
        correctIndices: [1],
        explanation: "Empiricamente la diversificazione correlata (sinergie, scope economies) batte sia il singolo business (mancata diversificazione del rischio) sia il conglomerato (no sinergie, costi di coordinamento). Curva a U rovesciata.",
        weeks: [8]
      },
      {
        question: 'Quali sono i **3 costi delle interdipendenze** strategiche secondo la teoria delle sinergie?',
        options: [
          'Coordinamento, Compromesso, Rigidità',
          'Capitale, Costo, Convenienza',
          'Profitto, Mercato, Rischio',
          'Tecnologia, Innovazione, Brevetto',
          'Cultura, Storia, Tradizione'
        ],
        correctIndices: [0],
        explanation: "I 3 costi: Coordinamento (gestire interfacce tra business), Compromesso (perdere ottimizzazioni locali per sinergie globali), Rigidità (cambiamenti diventano più difficili nelle catene del valore intrecciate).",
        weeks: [8]
      },
      {
        question: 'Una **struttura divisionale** è preferibile quando:',
        options: [
          "L'azienda opera in un singolo business molto stabile",
          "L'azienda ha più business o aree geografiche con dinamiche diverse",
          "I prodotti sono molto standardizzati",
          "Non ci sono economie di scala da sfruttare",
          "Il mercato è in declino"
        ],
        correctIndices: [1],
        explanation: "La struttura divisionale (es. GE, Unilever) è ottimale per business multipli con dinamiche diverse: ogni divisione è autonoma su strategia/mercato. Funzionale invece per single-business stabile.",
        weeks: [9]
      },
      {
        question: "Le **5 configurazioni di Mintzberg** includono:",
        options: [
          'Struttura semplice',
          'Burocrazia meccanica',
          'Burocrazia professionale',
          'Adhocrazia',
          'Modello relazionale'
        ],
        correctIndices: [0, 1, 2, 3],
        explanation: "Mintzberg (1979): Struttura Semplice, Burocrazia Meccanica, Burocrazia Professionale, Soluzione Divisionale, Adhocrazia. Il quinto è la Soluzione Divisionale, non 'modello relazionale'.",
        weeks: [9]
      },
      {
        question: "Il **Single Loop Learning** secondo Argyris:",
        options: [
          'Mette in discussione gli assunti di base',
          'Corregge gli errori senza cambiare le regole sottostanti',
          'È più efficace del Double Loop in tutte le situazioni',
          'Riguarda solo l\'apprendimento individuale',
          'Coincide con il Triple Loop'
        ],
        correctIndices: [1],
        explanation: "Single Loop: detect-and-correct, mantieni le routine attuali. Double Loop: ridiscuti gli assunti che generano l'errore. Triple Loop: ridiscuti il modo in cui apprendi. Single è efficiente per problemi noti, ma è inadeguato per cambiamenti di paradigma.",
        weeks: [9]
      },
      {
        question: 'Il modello **OLI** di Dunning per l\'internazionalizzazione include:',
        options: [
          'Ownership advantages',
          'Location advantages',
          'Internalization advantages',
          'Learning advantages',
          'Operational advantages'
        ],
        correctIndices: [0, 1, 2],
        explanation: "OLI di Dunning: Ownership (vantaggi proprietari trasferibili: brand, tecnologia), Location (perché in quel paese?), Internalization (perché farlo in-house e non via export/licensing?). Servono tutti e 3 per l'IDE.",
        weeks: [8]
      },
      {
        question: 'Un MBO (**Management By Objectives**) efficace richiede obiettivi che siano:',
        options: [
          'SMART (Specific, Measurable, Achievable, Relevant, Time-bound)',
          'Deliberatamente vaghi per flessibilità',
          'Decisi solo dal CEO',
          'Statici per tutto l\'anno',
          'Identici per tutti i reparti'
        ],
        correctIndices: [0],
        explanation: "Drucker (1954): MBO funziona con obiettivi SMART e cascading top-down + commitment bottom-up. La rigidità (obiettivi solo dall'alto, statici) lo rende inefficace.",
        weeks: [9]
      },
      {
        question: "L'**Exploration vs Exploitation** di March (1991) descrive il dilemma tra:",
        options: [
          'Innovare (esplorare nuove possibilità) e sfruttare il sapere esistente',
          'Investire all\'estero e in patria',
          'Crescita organica e M&A',
          'Strategie corporate e business',
          'HR interno ed esterno'
        ],
        correctIndices: [0],
        explanation: "Exploration: ricerca di varianza, novità, esperimenti, R&D di base. Exploitation: efficienza, raffinamento, scala. Eccesso in una direzione = miopia: solo exploration → mai profitto, solo exploitation → obsolescenza. Le organizzazioni \"ambidextrous\" bilanciano entrambe.",
        weeks: [9]
      }
    ],
    teoriaApplicata: [
      {
        question: "Nel caso **Robin Hood**, lo sceriffo di Nottingham è il principale rivale. Identifica le 4 domande strategiche che Robin deve porsi e per ognuna proponi un'opzione strategica con pro/contro. (max 10 righe)",
        weeks: [9],
        soluzione: `**Caso Robin Hood — domande strategiche**

| Domanda | Opzione strategica | Pro | Contro |
|---------|-------------------|-----|--------|
| **1. Cosa stiamo facendo (mission)?** | (a) Continuare attacchi caravane (status quo) <br> (b) Pivottare verso obiettivo politico (deporre lo Sceriffo, supportare Re Riccardo) | (a) familiare, basso rischio <br> (b) impatto duraturo, allineamento valori | (a) prede in calo, rischio crescente <br> (b) richiede coalizione, scala diversa |
| **2. Come stiamo organizzati?** | (a) Banda monolitica con Robin al comando <br> (b) Decentralizzata in cellule autonome | (a) coordinamento facile <br> (b) scalabile, resiliente a cattura del leader | (a) rischio single-point-of-failure (Robin) <br> (b) deriva culturale, gestione complessa |
| **3. Quali risorse abbiamo / mancano?** | (a) Più reclute (uomini volenterosi) <br> (b) Risorse logistiche (cibo, denaro, protezione villaggi) | (a) abbondanti <br> (b) critiche per long-term | (a) saturano la foresta <br> (b) richiedono alleanze esterne (popolazione, baroni) |
| **4. Stakeholder e alleanze?** | (a) Alleanza con i baroni anti-Sceriffo <br> (b) Negoziazione con lo Sceriffo per amnistia | (a) leverage politico, capitale <br> (b) chiude la rivolta, tutela vite umane | (a) compromessi etici, perdere sostegno popolazione <br> (b) tradisce mission, possibile trappola |

**Sintesi:** la situazione di Robin è di **crescita oltre la struttura attuale** (banda passata da 30 a 200 uomini): risorse alimentari/finanziarie scarse, span of control superato, rischio cooptazione. La scelta strategica corretta dipende dall'orizzonte temporale e dal valore attribuito alla mission. Una via mediana è **decentralizzare in cellule** + **coalizione con baroni** per fini comuni, mantenendo Robin come **figura simbolica** anziché operativa.

**Riferimento ai luogotenenti:**
- Will Scarlet (operations): pragmatico, orientato al risultato
- Little John (HR): coesione interna
- Friar Tuck (relations esterne): legame con villaggi/Chiesa
- Much (intelligence): info su movimenti Sceriffo

Robin opera come "CEO" che bilancia 4 funzioni — paragonabile alla logica del **top management team** moderno.`
      },
      {
        question: 'Spiega il dilemma **Make vs Buy** nell\'integrazione verticale, identificando 3 fattori chiave da considerare. Discuti il caso di **Apple** (integrazione design/silicon) vs **Nike** (outsourcing produzione). (max 10 righe)',
        weeks: [8],
        soluzione: `Il dilemma **Make vs Buy** decide se un'attività della catena del valore va svolta internamente (integrazione verticale) o acquistata da terzi (outsourcing).

**3 fattori chiave (teoria dei costi di transazione, Williamson 1985):**

1. **Specificità dell'asset** — più alta = più conviene fare in-house. Asset specifici (brevetti, knowledge tacito, impianti dedicati) creano lock-in con il fornitore → rischio di hold-up.
2. **Frequenza della transazione** — alta frequenza giustifica i costi fissi dell'integrazione.
3. **Incertezza** — più incertezza tecnologica/di mercato = vantaggio dell'integrazione (controllo).

**Apple — integrazione su design e silicon:**
- **Make** per: design industriale, sistema operativo (iOS/macOS), chip Apple Silicon (M1, M2, A18)
- **Buy** per: assemblaggio finale (Foxconn), schermi (Samsung/LG), batterie
- **Razionale:** il silicon è asset altamente specifico e fonte di vantaggio competitivo (performance, integrazione SW-HW); l'assemblaggio è commodity, outsourcing efficiente.

**Nike — outsourcing della produzione:**
- **Make** per: design, marketing, brand, R&D materiali
- **Buy** per: 100% della produzione (Vietnam, Indonesia, Cina via 600+ fabbriche partner)
- **Razionale:** il valore Nike è **immateriale** (brand, design); la produzione è capital-intensive ma low-margin. Outsourcing libera capitale per marketing.

**Trade-off:**
- Apple: capitale alto, controllo qualità, vulnerabilità geopolitica supply chain (Cina)
- Nike: capitale basso, agilità, esposizione a critiche su condizioni di lavoro nei subappaltatori (controversie 1990s, codici di condotta da allora)

**Tendenza:** l'integrazione "smart" prevale (es. Tesla integra batterie e drivetrain ma compra semiconduttori, post-shortage 2021 sta integrando anche su silicon).`
      }
    ],
    esercizi: [
      {
        question: `Disegna a parole la **struttura organizzativa** del tuo caffè artigianale. Sei a capo dell'organizzazione. Hai uno staff composto da segreteria + ufficio amministrativo. Tre dipendenti operano in: logistica, acquisti, relazioni con il pubblico. Analizza la struttura.`,
        weeks: [9],
        soluzione: `**Organigramma del caffè artigianale:**

\`\`\`
                    [TU - CEO/Owner]
                          |
            ┌─────────────┴─────────────┐
            |                           |
        [STAFF]                    [LINE - Operations]
            |                           |
   ┌────────┴────────┐         ┌────────┼────────┐
   |                 |         |        |        |
[Segreteria]  [Ufficio Amm.] [Logistica][Acquisti][Relazioni Pubblico]
\`\`\`

**Caratteristiche:**

| Dimensione | Configurazione |
|------------|----------------|
| **Tipo** | Struttura semplice (Mintzberg) con elementi funzionali |
| **Livelli gerarchici** | 2 (CEO + funzioni dirette) |
| **Span of control** | 5 (3 line + 2 staff) |
| **Centralizzazione** | Alta (decisioni tutte al CEO) |
| **Formalizzazione** | Bassa (ambiente piccolo) |
| **Specializzazione** | Funzionale orizzontale |

**Punti di forza:**
- Comunicazione rapida (linea diretta CEO ↔ funzioni)
- Coordinamento facile per ambiente di piccole dimensioni
- Flessibilità decisionale
- Costi gestionali bassi (no middle management)

**Limiti / Rischi:**
- **Sovraccarico del CEO:** 5 riporti diretti su funzioni eterogenee (operative + amministrative)
- **Crescita limitata:** se il caffè scala (es. apre seconda sede), la struttura va riconfigurata in territoriale o multi-store
- **Single-point-of-failure:** assenza CEO blocca decisioni
- **Mancanza di carriera:** poche opportunità di progressione interna → rischio turnover

**Miglioramenti suggeriti:**
1. **Crearne un middle layer** se cresci: Responsabile Operations sotto il CEO supervisiona logistica + acquisti + RP, lasciando lo staff (segreteria + amministrazione) come supporto trasversale.
2. **Cross-training** dei dipendenti per ridurre dipendenza da singole figure.
3. **Definire i meccanismi di coordinamento** (Mintzberg): iniziale → supervisione diretta del CEO; in crescita → standardizzazione dei processi (procedure di apertura/chiusura, ordini); maturità → standardizzazione skill (formazione baristi).

Questa struttura è ideale per ~10 dipendenti totali; oltre questa soglia il modello richiede passaggio a struttura funzionale più articolata o a struttura multi-store.`
      },
      {
        question: `Calcola il **moltiplicatore di sinergia** in una M&A dove:
- Azienda A: ricavi €500 mln, EBITDA €100 mln (margine 20%)
- Azienda B: ricavi €300 mln, EBITDA €45 mln (margine 15%)
- Sinergie attese: €40 mln di costi eliminabili + €20 mln di nuove vendite (con margine 25%)

Calcola: nuovi ricavi totali, nuovo EBITDA, nuovo margine, e il "premio sinergia" (% di EBITDA aggiuntivo rispetto a somma A+B).`,
        weeks: [8],
        soluzione: `**Calcolo combinato (post M&A):**

| Voce | A | B | Sinergie | Totale post-M&A |
|------|---|---|----------|-----------------|
| Ricavi | 500 | 300 | +20 | **820 mln** |
| EBITDA | 100 | 45 | +40 (cost cut) + 5 (nuovi 20×25%) | **190 mln** |
| Margine % | 20% | 15% | — | **23,2%** |

**Step di calcolo:**

1. **Ricavi totali:** A + B + nuove vendite = 500 + 300 + 20 = **820 mln**

2. **EBITDA pre-sinergie (somma standalone):** 100 + 45 = **145 mln**

3. **Sinergie EBITDA:**
   - Cost synergies (eliminazione duplicazioni: HR, IT, sedi): **+40 mln**
   - Revenue synergies (cross-selling, nuovi mercati): 20 mln di ricavi × 25% margine = **+5 mln**
   - Totale sinergie: **45 mln**

4. **EBITDA post-M&A:** 145 + 45 = **190 mln**

5. **Margine combinato:** 190 / 820 = **23,2%**

6. **Premio sinergia:** sinergie / EBITDA standalone = 45 / 145 = **31% di uplift**

**Interpretazione:** la M&A genera un **valore aggiunto del 31%** rispetto alla somma delle parti. È coerente con la formula iconica del corporate strategy: **1+1=3**.

**Caveat:**
- Le **sinergie sono spesso sovrastimate** in fase di pre-deal: studi McKinsey indicano che il 70% delle M&A non realizza le sinergie annunciate.
- Costi di integrazione (consulenze, layoff, sistemi IT) tipicamente erodono 15-25% delle sinergie nel primo anno.
- **Tempistica:** sinergie di costo si manifestano in 12-18 mesi; di ricavo in 24-36 mesi.

**Trade-off interdipendenze (3 costi di Porter):**
- Coordinamento: integrare HR/IT
- Compromesso: alcune economie locali si perdono per sinergie globali
- Rigidità: la struttura combinata è meno agile della singola

**Valutazione finale dealbreaker:** con sinergie di 45 mln annui e WACC ~8%, il valore attualizzato delle sinergie è ~45/0,08 = **562 mln** (perpetuità). Questo è il premio massimo che A può pagare a B oltre il valore standalone, prima di distruggere valore.`
      },
      {
        question: `Considera 3 unità di business di un gruppo:
- **Unit X** (settore Auto Elettriche): mercato in crescita 25%/anno, X ha quota di mercato 1,4 (prima del competitor)
- **Unit Y** (Auto a benzina): crescita 2%/anno, quota relativa 2,1
- **Unit Z** (Idrogeno): crescita 35%/anno, quota relativa 0,4

Posiziona nel **BCG**, suggerisci un piano di **redistribuzione cash** tra le 3 unità con orizzonte 5 anni.`,
        weeks: [8],
        soluzione: `**Posizionamento BCG (soglie standard: crescita 10%, quota relativa 1,0):**

| Unit | Crescita | Quota relativa | Quadrante |
|------|----------|----------------|-----------|
| **X — Auto Elettriche** | 25% (alta) | 1,4 (alta) | ⭐ **Star** |
| **Y — Auto Benzina** | 2% (bassa) | 2,1 (alta) | 💰 **Cash Cow** |
| **Z — Idrogeno** | 35% (alta) | 0,4 (bassa) | ❓ **Question Mark** |

**Piano di redistribuzione cash su 5 anni:**

**Anno 1-2 (consolidamento):**
- **Y (Cash Cow)** genera flussi di cassa massimi: stimato +200-300 mln/anno
- Investimenti in Y: minimi (mantenimento, no R&D radicale)
- Cash di Y → 70% investito in X (Star), 30% in Z (Question Mark)
- Y inizia gradualmente declino (ICE phase-out a partire dal 2027 in UE)

**Anno 3-4 (transizione):**
- **X (Star)** scala: nuovo CapEx in batterie, software, network ricarica → valore di mercato cresce
- Y mantiene flussi ma decresce (-5%/anno): inizio harvesting (no investimenti incrementali, riduzione cost base)
- Z: dopo 2 anni di sperimentazione, **valutazione critica**:
  - Se la quota cresce verso 0,8-1: doppiare investimento (Z può diventare Star)
  - Se rimane stagnante: **divestment** (vendita o JV con player specializzato)

**Anno 5 (riequilibrio):**
- X: dovrebbe diventare la nuova Cash Cow (Auto elettriche maturano, mercato cresce 8-10%)
- Y: in declino terminale, residual cash flow + asset divestment (impianti, terreni)
- Z: o consolidato come Star (idrogeno per heavy-duty trucks) o uscita

**Tabella allocazione cash (mln € cumulati su 5 anni):**

| Voce | Y genera | X riceve | Z riceve | Saldo libero |
|------|----------|----------|----------|--------------|
| Anno 1 | +250 | -150 | -50 | +50 |
| Anno 2 | +260 | -180 | -60 | +20 |
| Anno 3 | +220 | -200 | -80 | -60 (debito) |
| Anno 4 | +180 | -220 | -100 / divest +50 | -40 |
| Anno 5 | +130 / divest +200 | -150 | -100 / divest +100 | +180 |

**Logica strategica:** Y è la "vacca da mungere" il cui declino paga la transizione di X (futuro core) e Z (opzione reale). Il rischio principale è una transizione regulatoria più rapida del previsto (es. divieto ICE 2030 anziché 2035), che accelererebbe il declino di Y prima che X sia autosufficiente. Mitigation: hedging finanziario, partnership strategica con un EV-pure player, o spin-off di Y.

**Lezione manageriale:** il portfolio bilanciato BCG richiede gestione **dinamica** dei flussi cash → R&D futuri. Le aziende che rimangono Cash-Cow-heavy (Kodak su pellicola) collassano. Quelle che bilanciano Star + Question Mark (Tesla 2010-2020) emergono.`
      },
      {
        question: `Una SBU genera **incentivi MBO** per i suoi 5 manager basati sui seguenti criteri:
- Ricavi (peso 30%): obiettivo +10%, raggiunto +12%
- EBITDA margin (peso 30%): obiettivo 18%, raggiunto 17%
- Customer satisfaction NPS (peso 20%): obiettivo 50, raggiunto 60
- Sostenibilità (peso 20%): obiettivo CO₂ -5%, raggiunto -3%

Bonus base: €10.000 per manager. Calcola il **bonus effettivo**.`,
        weeks: [9],
        soluzione: `**Logica MBO:** ogni KPI ha un livello di raggiungimento (% di achievement). Il bonus pesa ogni KPI secondo il peso, e la somma pesata dà il **multiplier** sul bonus base.

**Calcolo achievement per KPI:**

| KPI | Peso | Obiettivo | Raggiunto | Achievement |
|-----|------|-----------|-----------|-------------|
| Ricavi | 30% | +10% | +12% | 12/10 = **120%** |
| EBITDA margin | 30% | 18% | 17% | 17/18 = **94,4%** |
| NPS | 20% | 50 | 60 | 60/50 = **120%** (capped at 120 max o 150 max secondo policy) |
| Sostenibilità (CO₂) | 20% | -5% | -3% | 3/5 = **60%** |

**Achievement complessivo (somma pesata):**

A_total = 120%×30% + 94,4%×30% + 120%×20% + 60%×20%
       = 36% + 28,3% + 24% + 12%
       = **100,3%**

**Bonus effettivo:** €10.000 × 100,3% = **€10.030**

**Per 5 manager:** 5 × 10.030 = **€50.150 totale bonus pool**

**Considerazioni avanzate:**

1. **Cap upper:** molte aziende capano i KPI individuali al 150% per evitare premi sproporzionati per outlier (es. il NPS oltre 60 non aumenta più il payout).

2. **Threshold inferiore:** se un KPI è < 70% di achievement (qui sostenibilità = 60%), alcune policy non pagano la sua parte. Con questo trigger:
   - Sostenibilità annullata: A = 36% + 28,3% + 24% + 0% = 88,3%
   - Bonus: €10.000 × 88,3% = **€8.830**

3. **Component bonus:** invece di somma pesata, alcune aziende danno bonus per KPI raggiunto separatamente:
   - Ricavi: +20% sopra obiettivo → bonus extra +500€
   - EBITDA: -5,6% sotto → 0€ bonus su quella parte
   - NPS: +20% → +500€
   - Sostenibilità: -40% → 0€
   - Totale: bonus base 5.000 (se metà fissa) + 1.000 variabile = €6.000

4. **Critica del MBO:**
   - Rischio "**numbers game**": manager ottimizzano KPI a discapito di altre dimensioni non misurate (es. cultura, lungo termine)
   - Rischio "**sandbagging**": negoziare obiettivi facili in fase di setting → no stretch
   - Soluzione: combinare MBO con valutazione qualitativa peer/leadership (360°)
   - Mintzberg critica MBO come riduttivo della complessità manageriale

**Trend moderni:** OKR (Objectives & Key Results, Google/Intel) sostituiscono MBO con maggiore agilità e separazione tra obiettivi (ambiziosi, no payout) e metriche (operative, payout).`
      }
    ]
  }
];
