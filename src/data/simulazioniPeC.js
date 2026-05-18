// ═══════════════════════════════════════════════════════════════
// 5 Compiti d'esame di Pianificazione e Controllo (formato LUISS)
// Struttura di ogni compito: 3 esercizi numerici (Budgeting, CVR/BEP,
// Costi & ABC) + 10 domande teoriche a risposta multipla e vero/falso.
// Gli esercizi sono tratti dalle esercitazioni reali del corso;
// le soluzioni sono interamente svolte passo-passo.
// ═══════════════════════════════════════════════════════════════

export const SIMULAZIONI_PEC = [
  // ────────────────────────────────────────────────────────────
  // COMPITO 1
  // ────────────────────────────────────────────────────────────
  {
    id: 1,
    title: 'Compito 1',
    subtitle: 'Budget di Beta Ltd · BEP conferenza · Allocazione costi Motor Ltd',
    duration: 50,
    multipleChoice: [
      {
        question: "L'attività di programmazione si colloca tra la pianificazione strategica (medio-lungo periodo) e il controllo, e trova la sua sintesi nel documento chiamato budget.",
        options: ['Vero', 'Falso'],
        correctIndices: [0],
        explanation: "VERO. La programmazione traduce gli obiettivi strategici di lungo periodo (3-5 anni) in programmi operativi di breve periodo; il suo documento di sintesi è il budget.",
        weeks: []
      },
      {
        question: 'Quale tra le seguenti è la definizione FORMALE di budget?',
        options: [
          'Uno strumento di controllo di gestione che orienta i comportamenti futuri dei manager',
          'Documento contabile-amministrativo che, con riferimento a un orizzonte di breve periodo, traduce in termini quantitativo-monetari i dati del piano aziendale di medio-lungo termine',
          'Un programma di gestione flessibile articolato per centri di responsabilità',
          'La somma algebrica di costi e ricavi di competenza dell\'esercizio',
          'Un report di analisi degli scostamenti tra dati preventivi e consuntivi'
        ],
        correctIndices: [1],
        explanation: "La definizione formale descrive il budget come documento contabile-amministrativo che traduce in termini quantitativo-monetari il piano di medio-lungo termine. La risposta 0 è la definizione funzionale.",
        weeks: []
      },
      {
        question: 'Quali tra le seguenti sono funzioni del budget nel governo dell\'impresa?',
        options: [
          'Simulare gli effetti economico-patrimoniali-finanziari di ipotesi di gestione',
          'Guidare il management in conformità agli obiettivi prestabiliti',
          'Coordinare i responsabili delle varie funzioni nelle loro scelte',
          'Sostituire il bilancio d\'esercizio civilistico consuntivo',
          'Motivare i manager secondo la logica della gestione per obiettivi'
        ],
        correctIndices: [0, 1, 2, 4],
        explanation: "Le funzioni del budget sono: simulare, guidare, valutare/responsabilizzare, coordinare, motivare, formare. Il budget NON sostituisce il bilancio consuntivo: è un bilancio preventivo.",
        weeks: []
      },
      {
        question: 'Il Break-Even Point (punto di pareggio) in termini di quantità si calcola come:',
        options: [
          'Costi Fissi / Prezzo di vendita unitario',
          'Costi Fissi / Margine di Contribuzione unitario',
          'Costi Fissi / Costo Variabile unitario',
          'Margine di Contribuzione unitario / Costi Fissi',
          'Costi Totali / Prezzo di vendita unitario'
        ],
        correctIndices: [1],
        explanation: "BEP (quantità) = CF / MCu, dove MCu = Prezzo − Costo Variabile unitario. È il volume per cui i ricavi totali eguagliano i costi totali (RO = 0).",
        weeks: []
      },
      {
        question: 'Il margine di contribuzione unitario è la differenza tra il prezzo di vendita unitario e il costo variabile unitario.',
        options: ['Vero', 'Falso'],
        correctIndices: [0],
        explanation: "VERO. MCu = PV − CVu. Rappresenta quanto ogni unità venduta contribuisce alla copertura dei costi fissi e, oltre il BEP, alla formazione del risultato operativo.",
        weeks: []
      },
      {
        question: 'I centri di responsabilità in cui si articola il budget possono essere:',
        options: [
          'Centri di costo',
          'Centri di ricavo',
          'Centri di profitto',
          'Centri di investimento',
          'Centri di liquidità'
        ],
        correctIndices: [0, 1, 2, 3],
        explanation: "I quattro tipi di centri di responsabilità sono: centri di costo, di ricavo, di profitto (o risultato) e di investimento. Il 'centro di liquidità' non esiste come categoria.",
        weeks: []
      },
      {
        question: 'Un costo è definito variabile quando il suo ammontare totale varia al variare del volume di produzione/vendita.',
        options: ['Vero', 'Falso'],
        correctIndices: [0],
        explanation: "VERO. I costi variabili (es. materie prime) cambiano in totale al variare dei volumi; i costi fissi (es. affitto) restano costanti in totale entro l'intervallo di rilevanza.",
        weeks: []
      },
      {
        question: 'Il coefficiente di allocazione dei costi indiretti si determina come:',
        options: [
          'Costi indiretti totali / Base di allocazione prescelta',
          'Base di allocazione / Costi indiretti totali',
          'Costi diretti / Costi indiretti',
          'Costi indiretti / Numero di prodotti',
          'Ricavi totali / Costi indiretti'
        ],
        correctIndices: [0],
        explanation: "Il coefficiente di allocazione = costi indiretti totali ÷ base di allocazione (es. ore MOD, ore macchina, costo MOD). Si moltiplica poi per la quantità di base assorbita da ciascuna commessa/prodotto.",
        weeks: []
      },
      {
        question: 'Quale affermazione sui costi diretti e indiretti è CORRETTA?',
        options: [
          'I costi diretti non possono essere attribuiti a un oggetto di costo in modo specifico',
          'I costi indiretti sono sempre costi fissi',
          'Un costo diretto è attribuibile in modo specifico ed esclusivo a un oggetto di costo',
          'Il costo della manodopera è sempre un costo indiretto',
          'I costi indiretti non richiedono basi di allocazione'
        ],
        correctIndices: [2],
        explanation: "Il costo diretto è oggettivamente e univocamente riferibile a un oggetto di costo (es. materie prime di una commessa). I costi indiretti (comuni a più oggetti) richiedono basi di allocazione. Diretto/indiretto è distinto da variabile/fisso.",
        weeks: []
      },
      {
        question: 'Il budget deriva dal piano strategico, di cui costituisce idealmente il primo anno di attuazione.',
        options: ['Vero', 'Falso'],
        correctIndices: [0],
        explanation: "VERO. Il budget non è un documento autonomo: i suoi numeri devono essere coerenti con gli obiettivi del piano strategico di lungo periodo, di cui rappresenta la traduzione operativa per il primo esercizio.",
        weeks: []
      }
    ],
    teoriaApplicata: [],
    esercizi: [
      {
        question: `**ESERCIZIO 1 — Sistemi di budgeting · Beta Ltd**

Beta Ltd. produce e vende borse che presentano variazioni stagionali nelle richieste. Le seguenti informazioni riguardano il primo trimestre (che termina il 31 marzo 2023) e i primi due mesi del trimestre successivo.

1) Il prezzo di vendita delle borse è di **€10 per unità**. Le vendite preventivate in unità:

| | Gennaio | Febbraio | Marzo | Aprile | Maggio |
|---|---|---|---|---|---|
| Quantità venduta | 40.000 | 60.000 | 10.000 | 50.000 | 70.000 |

2) Il controllo di gestione prevede di riscuotere il **75% dei ricavi nel mese** in cui avvengono le vendite e il **25% nel mese successivo**. I crediti al 31/12/2022 sono pari a €30.000 e saranno interamente riscossi a gennaio.

3) Beta Ltd mira a mantenere uno stock di prodotti finiti pari al **30% delle vendite stimate per il mese successivo**. Le scorte di prodotti finiti a fine dicembre erano pari a 12.000 unità.

4) Sono necessari **0,5 kg di plastica** per unità di borsa. La direzione prevede una disponibilità di materie prime a fine mese pari al **25% delle materie prime utilizzate in produzione nel mese successivo**. Il 31 dicembre erano disponibili 10.000 kg di plastica. Il materiale costa **€5 al kg**.

5) Beta Ltd sostiene un costo del lavoro fisso di €150.000 al mese e spese generali fisse di €80.000 al mese. L'imposta dovuta a fine marzo è di €100.000.

**Richiesto** — preparare per gennaio-marzo 2023 (dati mensili):
A. Budget delle vendite e budget degli incassi
B. Budget di produzione e budget di acquisto materiali
C. Budget di cassa`,
        soluzione: `**A. Budget delle vendite e degli incassi**

Vendite in valore: Gen €400.000 · Feb €600.000 · Mar €100.000

Incassi (75% nel mese + 25% mese successivo + crediti pregressi):
- **Gennaio** = 75%×400.000 + crediti 30.000 = 300.000 + 30.000 = **€330.000**
- **Febbraio** = 75%×600.000 + 25%×400.000 = 450.000 + 100.000 = **€550.000**
- **Marzo** = 75%×100.000 + 25%×600.000 = 75.000 + 150.000 = **€225.000**

**B. Budget di produzione** (Produzione = Vendite + RF − RI; RF = 30% vendite mese successivo)

| | Gennaio | Febbraio | Marzo |
|---|---|---|---|
| Vendite | 40.000 | 60.000 | 10.000 |
| + RF (30% mese succ.) | 18.000 | 3.000 | 15.000 |
| − RI | 12.000 | 18.000 | 3.000 |
| **Produzione** | **46.000** | **45.000** | **22.000** |

**Budget acquisto materiali** (consumo = produzione × 0,5 kg; RF MP = 25% consumo mese successivo)

Consumi MP: Gen 23.000 kg · Feb 22.500 kg · Mar 11.000 kg · (Apr: produzione 56.000 → consumo 28.000 kg)

| | Gennaio | Febbraio | Marzo |
|---|---|---|---|
| Consumo MP | 23.000 | 22.500 | 11.000 |
| + RF MP (25% consumo succ.) | 5.625 | 2.750 | 7.000 |
| − RI MP | 10.000 | 5.625 | 2.750 |
| **Acquisti (kg)** | **18.625** | **19.625** | **15.250** |
| **Acquisti (€ × 5)** | **€93.125** | **€98.125** | **€76.250** |

**C. Budget di cassa** (acquisti MP pagati nel mese; lavoro €150.000 e spese generali €80.000 mensili)

| | Gennaio | Febbraio | Marzo |
|---|---|---|---|
| Entrate (incassi) | 330.000 | 550.000 | 225.000 |
| − Acquisti MP | 93.125 | 98.125 | 76.250 |
| − Costo del lavoro | 150.000 | 150.000 | 150.000 |
| − Spese generali | 80.000 | 80.000 | 80.000 |
| − Imposte | — | — | 100.000 |
| **Saldo del mese** | **+6.875** | **+221.875** | **−181.250** |
| **Saldo progressivo** | 6.875 | 228.750 | **47.500** |

A marzo si genera un deficit di periodo (−181.250) per il calo delle vendite e l'imposta, ma il saldo progressivo resta positivo (€47.500).`,
        points: 10,
        weeks: []
      },
      {
        question: `**ESERCIZIO 2 — Analisi CVR · Dr. Leila Brennan (conferenza)**

La Dr. Leila Brennan organizza la European Tax Network conference (5-6 ottobre) e ha programmato **60 iscritti**. Costi **per ciascun iscritto**:
1. Albergo, 2 notti a €85 a notte
2. Cena di Gala: €35 menu + €9 vino
3. Pranzo, 2 giorni a €7,50 per pranzo
4. Tè e caffè, 2 giorni a €4,50 al giorno
5. Cartellina: €11 + rilegatura €4,50

Costi **invariati** per qualsiasi numero di iscritti:
1. Affitto 2 aule a €300/aula al giorno, per 2 giorni
2. 2 membri del personale amministrativo a €100/giorno per 2 giorni
3. Pubblicità e marketing: €2.000
4. Sito internet: €2.500
5. Persona di supporto: €1.700/mese per 2 mesi

La quota di iscrizione dello scorso anno era di **€400**.

**Richiesto:**
(a) Con quota €400: numero di iscritti per il pareggio, BEP in valore, e profitto/perdita con 60 iscritti.
(c) La commissione vuole un surplus di €2.000 (rivista €1.500 + borsa €500). Calcolare gli iscritti necessari con quota €400. Poi: con quota +10% e con sconti ottenuti (−€5 a notte sull'alloggio, −10% su pranzi/tè/caffè), calcolare il surplus con 60 iscritti e dire se basta.`,
        soluzione: `**Costo variabile per iscritto:**
- Albergo: 2 × €85 = €170
- Cena di gala: 35 + 9 = €44
- Pranzo: 2 × 7,50 = €15
- Tè/caffè: 2 × 4,50 = €9
- Cartellina: 11 + 4,50 = €15,50

**CVu = 170 + 44 + 15 + 9 + 15,50 = €253,50**

**Costi fissi:**
- Affitto aule: 2 × 300 × 2 = €1.200
- Personale amministrativo: 2 × 100 × 2 = €400
- Pubblicità: €2.000
- Sito web: €2.500
- Persona di supporto: 1.700 × 2 = €3.400

**CF = 1.200 + 400 + 2.000 + 2.500 + 3.400 = €9.500**

**(a) Quota €400 — MCu = 400 − 253,50 = €146,50**
- BEP iscritti = 9.500 / 146,50 = 64,8 → **65 iscritti**
- BEP in valore = 65 × 400 = **€26.000**
- Risultato con 60 iscritti = 60 × 146,50 − 9.500 = 8.790 − 9.500 = **−€710 (perdita)**

**(c) Surplus richiesto = 1.500 + 500 = €2.000**

Iscritti necessari con quota €400: (CF + surplus) / MCu = (9.500 + 2.000) / 146,50 = 11.500 / 146,50 = 78,5 → **79 iscritti**

*Con quota +10% e sconti:*
- Nuova quota = 400 × 1,10 = **€440**
- Sconto alloggio −€5 a notte → 2 × 80 = €160 (risparmio €10)
- Sconto −10% su pranzi/tè/caffè → (15 + 9) × 0,90 = €21,60 (risparmio €2,40)
- Nuovo CVu = 253,50 − 10 − 2,40 = **€241,10**
- Nuovo MCu = 440 − 241,10 = **€198,90**

Surplus con 60 iscritti = 60 × 198,90 − 9.500 = 11.934 − 9.500 = **€2.434**

Il surplus di €2.434 **è sufficiente** a coprire i €2.000 necessari per finanziare i due eventi futuri (rivista €1.500 + borsa €500), con un margine residuo di €434.`,
        points: 10,
        weeks: []
      },
      {
        question: `**ESERCIZIO 3 — Allocazione dei costi · Motor Ltd**

Motor Ltd. produce caricabatterie per auto. Il processo coinvolge due reparti: Reparto A (assemblaggio batterie) e Reparto B (montaggio). Per il trimestre il budget prevede **$130.000 di costi indiretti (overhead)**, **$24.000 di MOD nel Reparto A** (a $16/ora) e **$60.000 di MOD nel Reparto B** (a $12/ora).

Due commesse:

| | Job X | Job Y |
|---|---|---|
| Materiali diretti | $16.000 | $12.000 |
| MOD Reparto A | $4.400 | $2.400 |
| MOD Reparto B | $6.600 | $3.600 |
| Unità prodotte | 1.000 | 900 |

**Richiesto:**
(a) Calcolare il coefficiente plant-wide (su ore MOD) e il costo totale e unitario di ciascuna commessa.
(b) Ricalcolare con coefficienti dipartimentali: overhead assemblaggio $64.000 su ore macchina (16.000 ore totali); overhead montaggio $66.000 su ore MOD del reparto B. Job X usa 2.400 ore macchina, Job Y 400 ore macchina.
(c) Ricalcolare con sistema ABC: Setup $33.000 (3.300 ore setup); Battery assembly $40.000 (25.000 ore macchina); Pack mounting $32.000 (6.400 ore MOD); Final quality test $25.000 (5.000 ispezioni). Job X: 45 ore setup, 50% unità ispezionate; Job Y: 50 ore setup, 40% unità ispezionate.`,
        soluzione: `**Ore MOD:** Reparto A = 24.000/16 = 1.500 h · Reparto B = 60.000/12 = 5.000 h · Totale = **6.500 h**
Job X: 4.400/16 + 6.600/12 = 275 + 550 = 825 h · Job Y: 2.400/16 + 3.600/12 = 150 + 300 = 450 h

**(a) Coefficiente plant-wide = 130.000 / 6.500 = $20 per ora MOD**

| | Job X | Job Y |
|---|---|---|
| Materiali diretti | 16.000 | 12.000 |
| MOD totale | 11.000 | 6.000 |
| Overhead (ore × 20) | 825×20 = 16.500 | 450×20 = 9.000 |
| **Costo totale** | **$43.500** | **$27.000** |
| **Costo unitario** | **$43,50** | **$30,00** |

**(b) Coefficienti dipartimentali**
- Assemblaggio (A): 64.000 / 16.000 ore macchina = **$4/ora macchina**
- Montaggio (B): 66.000 / 5.000 ore MOD = **$13,20/ora MOD**

Job X: OH = 2.400×4 + 550×13,20 = 9.600 + 7.260 = $16.860
Job Y: OH = 400×4 + 300×13,20 = 1.600 + 3.960 = $5.560

| | Job X | Job Y |
|---|---|---|
| **Costo totale** | 16.000+11.000+16.860 = **$43.860** | 12.000+6.000+5.560 = **$23.560** |
| **Costo unitario** | **$43,86** | **$26,18** |

**(c) Sistema ABC** — coefficienti delle attività:
- Setup: 33.000/3.300 = $10/ora setup
- Battery assembly: 40.000/25.000 = $1,60/ora macchina
- Pack mounting: 32.000/6.400 = $5/ora MOD
- Quality test: 25.000/5.000 = $5/ispezione

Job X: OH = 45×10 + 2.400×1,60 + 550×5 + 500×5 = 450 + 3.840 + 2.750 + 2.500 = $9.540
Job Y: OH = 50×10 + 400×1,60 + 300×5 + 360×5 = 500 + 640 + 1.500 + 1.800 = $4.440

| | Job X | Job Y |
|---|---|---|
| **Costo totale** | 16.000+11.000+9.540 = **$36.540** | 12.000+6.000+4.440 = **$22.440** |
| **Costo unitario** | **$36,54** | **$24,93** |

**Confronto:** il sistema plant-wide sovrastima il costo di entrambe le commesse. L'ABC, attribuendo i costi in base all'effettivo consumo di attività (setup, ispezioni), restituisce costi più bassi e accurati. È il classico effetto di *overcosting* del metodo tradizionale.`,
        points: 10,
        weeks: []
      }
    ]
  },

  // ────────────────────────────────────────────────────────────
  // COMPITO 2
  // ────────────────────────────────────────────────────────────
  {
    id: 2,
    title: 'Compito 2',
    subtitle: 'Budget di cassa Starmer · Make-or-buy Avondale · Costi per reparto Orange',
    duration: 50,
    multipleChoice: [
      {
        question: 'Il controllo direzionale è il processo mediante il quale i dirigenti si assicurano che le risorse siano usate efficacemente ed efficientemente per il raggiungimento dei fini dell\'organizzazione.',
        options: ['Vero', 'Falso'],
        correctIndices: [0],
        explanation: "VERO. È la definizione di Anthony: il controllo direzionale guida l'attività dei responsabili, coordina, valuta le prestazioni manageriali e motiva tramite incentivi.",
        weeks: []
      },
      {
        question: 'Quale affermazione sul rapporto tra contabilità generale e controllo di gestione è CORRETTA?',
        options: [
          'Le informazioni del controllo di gestione sono orientate al passato, quelle della contabilità generale al futuro',
          'Il controllo di gestione è usato per scopi informativi esterni e la contabilità generale per scopi interni',
          'La contabilità generale misura performance economico-finanziarie, tecnico-operative e qualitative, mentre il controllo di gestione solo quelle economico-finanziarie',
          'La contabilità generale fornisce un feedback al mercato (informativa esterna), mentre il controllo di gestione supporta decisioni strategico-tattiche del management (informativa interna)',
          'Contabilità generale e controllo di gestione sono sinonimi'
        ],
        correctIndices: [3],
        explanation: "La contabilità generale è orientata all'esterno (bilancio, informativa al mercato); il controllo di gestione (contabilità analitica) è orientato all'interno per supportare le decisioni del management. È il controllo di gestione, non la contabilità generale, a misurare anche performance tecnico-operative e qualitative.",
        weeks: []
      },
      {
        question: 'Il budget commerciale (delle vendite) costituisce il punto di partenza dell\'iter di programmazione, poiché i programmi di acquisto e di produzione dipendono dalla capacità di assorbimento del mercato.',
        options: ['Vero', 'Falso'],
        correctIndices: [0],
        explanation: "VERO. Si parte dalla stima dei volumi di vendita; da questi, tramite la politica delle scorte, si deriva il budget di produzione e poi quello degli approvvigionamenti.",
        weeks: []
      },
      {
        question: 'Il margine di sicurezza:',
        options: [
          'Indica l\'ammontare di vendite che possono essere perdute prima di iniziare a registrare perdite; la formula è "volumi di vendita pianificati − volumi di vendita di equilibrio"',
          'Indica l\'ammontare di vendite perdibili prima delle perdite; la formula è "volumi di equilibrio − volumi pianificati"',
          'È pari a "costi fissi + costi variabili − volumi di vendita pianificati"',
          'Indica le vendite guadagnabili eliminando linee in perdita',
          'Coincide sempre con il break-even point'
        ],
        correctIndices: [0],
        explanation: "Il margine di sicurezza = volumi pianificati − volumi di equilibrio (BEP). Misura di quanto le vendite possono ridursi prima di entrare in area di perdita; più è ampio, minore è il rischio operativo.",
        weeks: []
      },
      {
        question: 'Un\'azienda si trova a dover aumentare i costi variabili unitari. A parità di altre condizioni, questa decisione determina un aumento del punto di pareggio (in termini sia di quantità sia di fatturato).',
        options: ['Vero', 'Falso'],
        correctIndices: [0],
        explanation: "VERO. Aumentando il CVu, il margine di contribuzione unitario diminuisce; poiché BEP = CF/MCu, un MCu minore fa salire il BEP sia in quantità sia in valore.",
        weeks: []
      },
      {
        question: 'Nella decisione di make-or-buy, il punto di indifferenza tra produzione interna ed esternalizzazione è il volume per cui:',
        options: [
          'Il costo totale della produzione interna eguaglia il costo totale dell\'acquisto esterno',
          'Il ricavo totale eguaglia il costo fisso',
          'Il margine di contribuzione è nullo',
          'Il costo variabile unitario interno è zero',
          'I costi fissi interni sono uguali ai ricavi'
        ],
        correctIndices: [0],
        explanation: "Il punto di indifferenza è il volume Q per cui CF_interni + CVu_interni·Q = Prezzo_acquisto·Q. Sotto tale volume conviene comprare (buy), sopra conviene produrre (make), se l'interno ha CVu inferiore.",
        weeks: []
      },
      {
        question: 'L\'allocazione dei costi indiretti con una base unica aziendale e quella con basi multiple (un coefficiente per reparto) producono sempre lo stesso costo di commessa.',
        options: ['Vero', 'Falso'],
        correctIndices: [1],
        explanation: "FALSO. La base unica e le basi multiple per reparto producono in generale costi di commessa diversi: la base unica può sovrastimare o sottostimare commesse che assorbono i reparti in modo non proporzionale alla base aziendale.",
        weeks: []
      },
      {
        question: 'Nell\'ambito della classificazione dei costi secondo la modalità di attribuzione agli oggetti di costo, le provvigioni pagate ai venditori sul fatturato ottenuto sono un esempio di costo diretto.',
        options: ['Vero', 'Falso'],
        correctIndices: [0],
        explanation: "VERO. Le provvigioni sono riferibili in modo specifico e univoco al prodotto/linea che le ha generate (sono calcolate sul suo fatturato): sono quindi un costo diretto (e variabile).",
        weeks: []
      },
      {
        question: 'Quando si usano coefficienti di allocazione distinti per reparto produttivo, la base di allocazione:',
        options: [
          'Deve essere obbligatoriamente la stessa per tutti i reparti',
          'Può essere scelta diversa per ciascun reparto (es. ore macchina in un reparto, costo MOD in un altro)',
          'È sempre il costo dei materiali diretti',
          'Non è necessaria',
          'È sempre il numero di unità prodotte'
        ],
        correctIndices: [1],
        explanation: "Con il sistema a basi multiple ogni reparto può adottare la base di allocazione più rappresentativa del proprio assorbimento di costi indiretti (ore macchina per reparti capital-intensive, ore o costo MOD per reparti labour-intensive).",
        weeks: []
      },
      {
        question: 'Il budget è flessibile: non costituisce un imperativo rigido di gestione ma una proposta di politiche modificabili nel corso della futura gestione.',
        options: ['Vero', 'Falso'],
        correctIndices: [0],
        explanation: "VERO. La flessibilità consente di adattare il budget a cambiamenti sostanziali del contesto; le revisioni vanno però motivate da mutamenti strutturali, non usate per mascherare inefficienze.",
        weeks: []
      }
    ],
    teoriaApplicata: [],
    esercizi: [
      {
        question: `**ESERCIZIO 1 — Budget di cassa · Starmer Ltd**

Starmer Ltd. produce e vende cartucce per stampanti. Vendite ai rivenditori nel 2009:

| Giugno | Luglio | Agosto | Settembre |
|---|---|---|---|
| 12.000 | 20.000 | 15.000 | 14.000 |

Nel 2010 le vendite ai rivenditori saranno **ridotte del 40%** rispetto agli stessi mesi 2009. Prezzo: **€25/cartuccia**. Incasso rivenditori: 50% nel mese, 50% nel mese successivo.

Vendite **online** aggiuntive: 5.000 unità a giugno e luglio, 7.000 ad agosto e settembre. Prezzo €25; incasso nel mese successivo, al netto del 2% di commissioni.

Scorte prodotti finiti a fine mese = **75% delle vendite del mese successivo**. Ogni cartuccia richiede 1,5 g di inchiostro a €5/g; **pagamento fornitori a 1 mese**; scorte MP a fine mese = quantità per la produzione del mese successivo.

Costi fissi indiretti annui €180.000 (includono €60.000 di ammortamenti — €600.000 ammortizzati in 10 anni); sostenuti uniformemente.
Spedizioni Ontime: canone fisso €5.000/mese fino a 6.000 unità; €3/unità per quelle eccedenti.
Powertec gestione sito: €2.500/mese da luglio.
Manodopera: €190.000/mese; **−5% da agosto**.
Imposte 2009 di €15.000 pagate il 15 agosto 2010.
Saldo c/c al 1° luglio 2010: **+€25.000**.

**Richiesto:** preparare il budget di cassa di Starmer Ltd. per luglio e agosto 2010.`,
        soluzione: `**Vendite 2010 (rivenditori = 2009 −40%):** Giu 7.200 · Lug 12.000 · Ago 9.000 · Set 8.400
**Vendite totali (rivenditori + online):** Giu 12.200 · Lug 17.000 · Ago 16.000 · Set 15.400

**Produzione** (= vendite + RF − RI; RF = 75% vendite mese succ.):
- Giu = 12.200 + 0,75×17.000 − 0,75×12.200 = 15.800
- Lug = 17.000 + 0,75×16.000 − 12.750 = 16.250
- Ago = 16.000 + 0,75×15.400 − 12.000 = 15.550

**Acquisti MP** (consumo = prod × 1,5 g; scorta finale = consumo mese succ. ⟹ acquisto del mese = consumo del mese successivo):
- Acquisti Giugno = consumo Luglio = 16.250 × 1,5 = 24.375 g → ×€5 = **€121.875** (prima del 1/7, nessuno sconto)
- Acquisti Luglio = consumo Agosto = 15.550 × 1,5 = 23.325 g → ×€5×0,90 = **€104.962,50** (sconto 10% dal 1/7)

I fornitori sono pagati a 1 mese: luglio paga gli acquisti di giugno, agosto quelli di luglio.

**Costi fissi indiretti cash** = (180.000 − 60.000 ammortamenti) / 12 = **€10.000/mese**

**BUDGET DI CASSA**

| | LUGLIO | AGOSTO |
|---|---|---|
| Saldo iniziale | 25.000 | 58.125 |
| **Entrate** | | |
| Incassi rivenditori | 50%×300.000 + 50%×180.000 = 240.000 | 50%×225.000 + 50%×300.000 = 262.500 |
| Incassi online (mese succ., −2%) | 5.000×25×0,98 = 122.500 | 5.000×25×0,98 = 122.500 |
| **Totale entrate** | **362.500** | **385.000** |
| **Uscite** | | |
| Fornitori MP | 121.875 | 104.962,50 |
| Costi fissi indiretti (cash) | 10.000 | 10.000 |
| Spedizioni Ontime | 5.000 | 8.000 |
| Powertec (sito) | 2.500 | 2.500 |
| Manodopera | 190.000 | 180.500 |
| Imposte | — | 15.000 |
| **Totale uscite** | **329.375** | **320.962,50** |
| **Saldo del mese** | +33.125 | +64.037,50 |
| **Saldo finale** | **€58.125** | **€122.162,50** |

*Note:* spedizioni Ontime ad agosto = 5.000 + (7.000−6.000)×€3 = €8.000 (le vendite online di agosto sono 7.000 > 6.000). Gli ammortamenti (€60.000/anno) sono esclusi: non comportano uscite di cassa.`,
        points: 10,
        weeks: []
      },
      {
        question: `**ESERCIZIO 2 — Analisi CVR / Make-or-buy · Avondale Ltd**

Avondale Ltd. svilupperà una scheda di memoria avanzata da luglio 2025. Il CdA deve decidere se produrre **nell'Ovest dell'Irlanda** o **in Polonia**.

**Produzione nell'Ovest dell'Irlanda** — Affitto locali: €480.000/anno. Per unità: Materie Prime A 0,8 kg; Materie Prime B 0,6 kg; Forza Lavoro Qualificata 0,4 ore; Forza Lavoro NON Qualificata 1 ora.

**Produzione in Polonia** — Affitto locali: €120.000/anno; affitto macchinari: €240.000/anno. Per unità: MP A 0,8 kg; MP B 0,6 kg; FL Qualificata 0,6 ore; FL NON Qualificata 1,2 ore; costi di trasporto €1,40/unità.

In entrambe le località il prezzo è **€5/kg per la MP A** e **€10/kg per la MP B**. Salari Irlanda: qualificata €14/ora, non qualificata €8/ora. Salari Polonia: qualificata €10/ora, non qualificata €6/ora. Prezzo di vendita: **€60/unità**.

**Richiesto:**
(a) Per ciascuna località: BEP in unità, BEP in valore, unità per un reddito operativo di €1.000.000.
(b) Reddito operativo atteso con 60.000 unità per ciascuna località.
(c) Margine di sicurezza con 60.000 unità per ciascuna località.
(d) Unità per ottenere lo stesso risultato operativo nelle due località, e relativo reddito operativo.
(e) Raccomandazione al management.`,
        soluzione: `**Materiali (uguali ovunque):** A 0,8×5 = €4 + B 0,6×10 = €6 = **€10/unità**

**Irlanda** — CVu = 10 + (0,4×14) + (1×8) = 10 + 5,60 + 8 = **€23,60** · CF = €480.000 · MCu = 60 − 23,60 = **€36,40**

**Polonia** — CVu = 10 + (0,6×10) + (1,2×6) + 1,40 = 10 + 6 + 7,20 + 1,40 = **€24,60** · CF = 120.000 + 240.000 = €360.000 · MCu = 60 − 24,60 = **€35,40**

**(a)**
| | Irlanda | Polonia |
|---|---|---|
| BEP unità (CF/MCu) | 480.000/36,40 = **13.187** | 360.000/35,40 = **10.170** |
| BEP valore (×€60) | **€791.220** | **€610.200** |
| Unità per RO €1.000.000 | (480.000+1.000.000)/36,40 = **40.660** | (360.000+1.000.000)/35,40 = **38.419** |

**(b) RO con 60.000 unità**
- Irlanda = 60.000×36,40 − 480.000 = 2.184.000 − 480.000 = **€1.704.000**
- Polonia = 60.000×35,40 − 360.000 = 2.124.000 − 360.000 = **€1.764.000**

**(c) Margine di sicurezza con 60.000 unità**
- Irlanda = (60.000 − 13.187)/60.000 = **78,0%** (46.813 unità)
- Polonia = (60.000 − 10.170)/60.000 = **83,1%** (49.830 unità)

**(d) Punto di indifferenza** — eguagliando i RO: 36,40·Q − 480.000 = 35,40·Q − 360.000
⟹ (36,40 − 35,40)·Q = 480.000 − 360.000 ⟹ Q = **120.000 unità**
RO comune = 36,40×120.000 − 480.000 = **€3.888.000**

**(e) Raccomandazione:** sotto le 120.000 unità conviene la **Polonia** (CF più bassi compensano il MCu leggermente inferiore); oltre le 120.000 unità conviene l'Irlanda (MCu più alto). Poiché la ricerca di mercato stima vendite di 60.000 unità (< 120.000), **conviene produrre in Polonia**: a 60.000 unità genera €60.000 di RO in più rispetto all'Irlanda e offre un margine di sicurezza più ampio.`,
        points: 10,
        weeks: []
      },
      {
        question: `**ESERCIZIO 3 — Allocazione costi per reparto · Orange Engineering**

Orange Engineering Company Ltd. è divisa in tre reparti produttivi e lavora su commessa. Costi previsti per il 2006:

| | Dept. 1 | Dept. 2 | Dept. 3 | Totale |
|---|---|---|---|---|
| Materie prime dirette | | | | €360.000 |
| Manodopera diretta | €100.000 | €80.000 | €140.000 | €320.000 |
| Costi indiretti di produzione | €80.000 | €60.000 | €100.000 | €240.000 |

Ore macchina stimate: 20.000 (Dept.1), 16.000 (Dept.2), 4.000 (Dept.3).

Fino al 2006 i costi indiretti erano allocati su base dei **costi di manodopera diretta** con un coefficiente unico aziendale. L'azienda valuta ora coefficienti per reparto: **ore macchina** per Dept.1 e Dept.2, **costo MOD** per Dept.3.

**Commessa n. 321 (2006):** Materiali diretti €3.800. MOD: Dept.1 €1.500, Dept.2 €1.000, Dept.3 €1.400. Ore macchina: 220 (Dept.1), 160 (Dept.2), 50 (Dept.3).

**Richiesto:**
(a) Costo di produzione totale della commessa 321 con coefficiente unico aziendale.
(b) Costo di produzione totale della commessa 321 con coefficienti specifici per reparto.`,
        soluzione: `**(a) Coefficiente unico aziendale** (base = costo MOD)

Coefficiente = costi indiretti totali / costo MOD totale = 240.000 / 320.000 = **0,75 (75% del costo MOD)**

Commessa 321:
- Materiali diretti = €3.800
- MOD totale = 1.500 + 1.000 + 1.400 = €3.900
- Costi indiretti = 75% × 3.900 = €2.925

**Costo totale commessa 321 = 3.800 + 3.900 + 2.925 = €10.625**

**(b) Coefficienti per reparto**

| Reparto | Base | Coefficiente |
|---|---|---|
| Dept. 1 | ore macchina | 80.000 / 20.000 = €4,00/ora macchina |
| Dept. 2 | ore macchina | 60.000 / 16.000 = €3,75/ora macchina |
| Dept. 3 | costo MOD | 100.000 / 140.000 = 0,7143 (71,43% del costo MOD) |

Costi indiretti commessa 321:
- Dept. 1 = 220 × 4,00 = €880
- Dept. 2 = 160 × 3,75 = €600
- Dept. 3 = 71,43% × 1.400 = €1.000
- **Totale indiretti = €2.480**

**Costo totale commessa 321 = 3.800 + 3.900 + 2.480 = €10.180**

**Confronto:** con la base unica la commessa 321 costa €10.625, con i coefficienti per reparto €10.180 (−€445). La base unica la **sovrastima**: la commessa 321 assorbe relativamente poche ore macchina rispetto al costo MOD impiegato, quindi l'allocazione su base MOD le carica costi indiretti superiori al reale assorbimento. I coefficienti per reparto offrono un costo più accurato.`,
        points: 10,
        weeks: []
      }
    ]
  },

  // ────────────────────────────────────────────────────────────
  // COMPITO 3
  // ────────────────────────────────────────────────────────────
  {
    id: 3,
    title: 'Compito 3',
    subtitle: 'Budget completo Paper Srl · BEP Walk Rite · ABC Lucey Ltd',
    duration: 50,
    multipleChoice: [
      {
        question: 'Quale tra le seguenti è la corretta sequenza degli step del sistema ABC?',
        options: [
          'Identificare le attività → definire i cost driver → stimare il costo delle attività → calcolare il cost driver rate → usare il rate per il costo dei prodotti',
          'Stimare il costo delle attività → identificare le attività → definire i cost driver → calcolare il cost driver rate → usare il rate per il costo dei prodotti',
          'Calcolare il cost driver rate → identificare le attività → definire i cost driver → stimare il costo → costo dei prodotti',
          'Definire i cost driver → calcolare il rate → identificare le attività → stimare il costo → costo dei prodotti',
          'Usare il rate → identificare le attività → stimare il costo → definire i driver → calcolare il rate'
        ],
        correctIndices: [0],
        explanation: "L'ABC procede: 1) identificare le attività, 2) attribuire i costi alle attività, 3) individuare i cost driver, 4) calcolare il cost driver rate (costo attività/quantità driver), 5) attribuire i costi ai prodotti in base al consumo di driver.",
        weeks: []
      },
      {
        question: 'Nel sistema ABC, il cost driver è il fattore che determina (causa) il sostenimento del costo di un\'attività ed è usato come base per attribuirne il costo ai prodotti.',
        options: ['Vero', 'Falso'],
        correctIndices: [0],
        explanation: "VERO. Il cost driver (es. n. di setup, n. di ispezioni, ore macchina) misura il consumo di un'attività da parte di ciascun oggetto di costo ed è la base di imputazione del relativo costo.",
        weeks: []
      },
      {
        question: 'Rispetto al metodo tradizionale, il sistema ABC tende a:',
        options: [
          'Attribuire i costi indiretti in modo più aderente all\'effettivo consumo di attività',
          'Eliminare del tutto i costi indiretti',
          'Ridurre sempre il costo di tutti i prodotti',
          'Allocare i costi solo in base al volume di produzione',
          'Correggere il fenomeno di sovra/sotto-costing dei prodotti tipico del metodo a base unica'
        ],
        correctIndices: [0, 4],
        explanation: "L'ABC supera il limite del metodo tradizionale (allocazione su base unica legata al volume) attribuendo i costi indiretti in funzione del reale consumo di attività; corregge così l'overcosting dei prodotti ad alto volume e l'undercosting di quelli a bassa serie/alta complessità.",
        weeks: []
      },
      {
        question: 'Il volume di produzione programmato si calcola come: Volume di vendita programmato + Rimanenze finali di prodotti programmate − Rimanenze iniziali di prodotti stimate.',
        options: ['Vero', 'Falso'],
        correctIndices: [0],
        explanation: "VERO. La politica delle scorte di prodotti finiti collega il budget delle vendite a quello della produzione: Produzione = Vendite + RF − RI.",
        weeks: []
      },
      {
        question: 'La politica delle scorte di prodotti finiti:',
        options: [
          'È l\'elemento che collega la programmazione delle vendite a quella della produzione',
          'Impone che la quantità da produrre coincida sempre con la quantità da vendere',
          'Riguarda esclusivamente le materie prime',
          'È irrilevante ai fini del budget di produzione',
          'Può prevedere scorte finali pari a una percentuale delle vendite del mese successivo'
        ],
        correctIndices: [0, 4],
        explanation: "La politica delle scorte di prodotti finiti raccorda vendite e produzione: la quantità da produrre NON coincide con quella da vendere proprio per effetto delle rimanenze iniziali e finali (spesso definite come % delle vendite del periodo successivo).",
        weeks: []
      },
      {
        question: 'Il budget aziendale a livello globale si sintetizza in un bilancio preventivo composto da budget economico, budget patrimoniale e budget finanziario.',
        options: ['Vero', 'Falso'],
        correctIndices: [0],
        explanation: "VERO. L'output del processo di budget è un bilancio d'esercizio a preventivo: conto economico preventivo (budget economico), stato patrimoniale preventivo (budget patrimoniale) e prospetto dei flussi finanziari preventivi (budget finanziario).",
        weeks: []
      },
      {
        question: 'Il budget di acquisto delle materie prime si determina come:',
        options: [
          'Consumo di materie programmato + Rimanenze finali di MP programmate − Rimanenze iniziali di MP stimate',
          'Consumo di materie − Rimanenze finali + Rimanenze iniziali',
          'Volume di produzione × prezzo di vendita',
          'Rimanenze finali − Rimanenze iniziali',
          'Volume di vendita × coefficiente di impiego unitario'
        ],
        correctIndices: [0],
        explanation: "Acquisti MP = Consumo di materie (= produzione × coefficiente di impiego unitario) + RF di MP − RI di MP. Il consumo dipende dal programma di produzione; le scorte di MP raccordano consumo e acquisti.",
        weeks: []
      },
      {
        question: 'Il break-even point in termini di valore (fatturato) si ottiene moltiplicando il BEP in quantità per il prezzo di vendita unitario.',
        options: ['Vero', 'Falso'],
        correctIndices: [0],
        explanation: "VERO. BEP in valore = BEP in quantità × PV. In alternativa: BEP valore = CF / (MCu/PV), cioè costi fissi diviso il rapporto di contribuzione.",
        weeks: []
      },
      {
        question: 'Il budget degli investimenti si distingue dagli altri budget settoriali perché:',
        options: [
          'Ha un orizzonte temporale tipicamente pluriennale',
          'Deriva dall\'aggregazione di più richieste o progetti di investimento',
          'Riguarda beni a utilizzo pluriennale (acquisti esterni o produzione interna)',
          'Non viene mai inserito nel documento di budget',
          'Riguarda esclusivamente i costi variabili di produzione'
        ],
        correctIndices: [0, 1, 2],
        explanation: "Il budget degli investimenti programma l'acquisto/realizzazione di beni a utilizzo pluriennale; ha orizzonte pluriennale (a differenza degli altri budget annuali) e nasce dall'aggregazione di progetti di investimento (strategici, di espansione, di razionalizzazione, di sostituzione).",
        weeks: []
      },
      {
        question: 'Il rapporto di contribuzione (margine di contribuzione percentuale) si calcola come margine di contribuzione unitario diviso il prezzo di vendita unitario.',
        options: ['Vero', 'Falso'],
        correctIndices: [0],
        explanation: "VERO. MC% = MCu / PV. Indica la quota di ogni euro di ricavo che residua dopo la copertura dei costi variabili e contribuisce a coprire i costi fissi e a generare reddito.",
        weeks: []
      }
    ],
    teoriaApplicata: [],
    esercizi: [
      {
        question: `**ESERCIZIO 1 — Budget settoriali e budget economico · Paper S.r.l.**

Paper S.r.l. produce quaderni rilegati ad anelli A4. **Volume di vendita previsto: 500.000 quaderni** a **€3** l'uno.

Costi: costo unitario variabile industriale **€1,35/quaderno**; costi variabili commerciali = provvigioni del **5% sul prezzo di vendita**.

**Distinta base** (per 1 quaderno): 2 copertine in cartoncino; 1 risma di fogli A4; 1 spirale di plastica. **Prezzi standard MP:** copertina €0,15; risma €0,50; spirale €0,25.

**Politica scorte MP** — Rimanenze iniziali: copertine 70.000, risme 135.000, spirali 95.000. Le rimanenze finali devono coprire **un quinto della produzione prevista**.
**Scorte prodotti finiti:** politica costante, RI = RF = 50.000 unità.

**Personale:** 2 capi officina €42.000/anno cadauno (produzione); 3 dipendenti amministrazione €25.000/anno; MOD a cottimo €0,30 per prodotto finito; 2 venditori autonomi con fisso €900/mese cadauno + provvigioni.

**Altre aree:** ammortamenti €15.000 (amministrazione €4.000, direzione generale €5.000, R&S €6.000); marketing €15.000; telefonia €5.000 (amm. €1.000, dir. gen. €2.000, marketing €1.000, R&S €1.000).

**Altre poste:** interessi attivi €1.500; interessi passivi c/c €14.000; interessi passivi mutui €2.800; plusvalenze €4.000; fitti attivi €10.000. Aliquota fiscale **40%**.

**Richiesto:** redigere budget commerciale, budget di produzione, budget approvvigionamenti MP, budget del personale, budget delle altre aree e il budget economico (schema civilistico).`,
        soluzione: `**Budget commerciale:** Ricavi = 500.000 × €3 = **€1.500.000** · Provvigioni (5%) = **€75.000**

**Budget di produzione:** Produzione = Vendite + RF − RI = 500.000 + 50.000 − 50.000 = **500.000 quaderni**

**Budget approvvigionamenti MP** — Fabbisogno: copertine 1.000.000, risme 500.000, spirali 500.000. RF = 1/5 produzione: copertine 200.000, risme 100.000, spirali 100.000.

| MP | Fabbisogno | + RF | − RI | Acquisti (q.tà) | Valore |
|---|---|---|---|---|---|
| Copertine | 1.000.000 | 200.000 | 70.000 | 1.130.000 | €169.500 |
| Risme | 500.000 | 100.000 | 135.000 | 465.000 | €232.500 |
| Spirali | 500.000 | 100.000 | 95.000 | 505.000 | €126.250 |
| **Totale** | | | | | **€528.250** |

**Budget del personale:** capi officina 2×42.000 = €84.000 · amministrativi 3×25.000 = €75.000 · MOD cottimo 0,30×500.000 = €150.000 · venditori (fisso) 2×900×12 = €21.600.
Personale dipendente (B9) = 84.000 + 75.000 + 150.000 = **€309.000**; il fisso dei venditori autonomi (€21.600) confluisce nei servizi.

**Budget altre aree:** ammortamenti €15.000 · marketing €15.000 · telefonia €5.000.

**BUDGET ECONOMICO (schema civilistico, art. 2425 c.c.)**

| Voce | Importo |
|---|---|
| A1 Ricavi delle vendite | 1.500.000 |
| A5 Altri ricavi (fitti attivi 10.000 + plusvalenze 4.000) | 14.000 |
| **A) Valore della produzione** | **1.514.000** |
| B6 Materie prime (acquisti) | 528.250 |
| B7 Servizi (marketing 15.000 + telefonia 5.000 + provvigioni 75.000 + fisso venditori 21.600) | 116.600 |
| B9 Personale (dipendenti) | 309.000 |
| B10 Ammortamenti | 15.000 |
| B11 Variazione rimanenze MP (RI 101.750 − RF 105.000) | −3.250 |
| **B) Costi della produzione** | **965.600** |
| **Differenza A − B** | **548.400** |
| C) Proventi e oneri finanziari (1.500 − 14.000 − 2.800) | −15.300 |
| **Risultato ante imposte** | **533.100** |
| Imposte (40%) | 213.240 |
| **Utile netto d'esercizio** | **€319.860** |

*Verifica:* il costo delle MP consumate = acquisti €528.250 + variazione rimanenze (−3.250) = €525.000, pari al fabbisogno valorizzato (copertine 150.000 + risme 250.000 + spirali 125.000). Coerente con il CV industriale €1,35/unità × 500.000 = €675.000 (MP €525.000 + MOD cottimo €150.000).`,
        points: 10,
        weeks: []
      },
      {
        question: `**ESERCIZIO 2 — Analisi CVR · Walk Rite Shoe Company**

Walk Rite Shoe Company gestisce negozi di scarpe. Sta valutando l'apertura di un nuovo negozio con i seguenti dati:

**Dati variabili per unità (paio di scarpe):**
- Prezzo di vendita: $30,00
- Costo di produzione delle scarpe: $19,50
- Commissioni sulle vendite: $1,50
- Totale costi variabili: **$21,00**

**Costi fissi annuali:** Affitto $60.000 · Stipendi $200.000 · Marketing e pubblicità $80.000 · Altri costi fissi $20.000 → **Totale $360.000**

**Richiesto** (ogni domanda indipendente dalle altre):
1. Break-even point annuale in (a) unità e (b) valore delle vendite.
2. Se vende 35.000 unità, quale risultato operativo?
3. Se le commissioni vengono eliminate in favore di un aumento dello stipendio fisso di $81.000, quale BEP in (a) unità e (b) valore?
4. Dati originali. Se lo store manager ricevesse commissioni di $0,30 per ogni unità venduta (oltre al suo fisso), quale BEP in (a) unità e (b) valore?
5. Dati originali. Se lo store manager ricevesse $0,30 per ogni unità venduta in eccesso al break-even point, quale risultato operativo per una vendita di 50.000 unità?`,
        soluzione: `**Dati base:** MCu = 30 − 21 = **$9** · CF = **$360.000**

**1.** BEP unità = 360.000 / 9 = **40.000 unità** · BEP valore = 40.000 × 30 = **$1.200.000**

**2.** RO con 35.000 unità = 35.000 × 9 − 360.000 = 315.000 − 360.000 = **−$45.000 (perdita)**

**3.** Commissioni eliminate (CVu da 21 → 19,50; MCu = 30 − 19,50 = $10,50) e CF da 360.000 → 441.000 (+81.000):
BEP unità = 441.000 / 10,50 = **42.000 unità** · BEP valore = 42.000 × 30 = **$1.260.000**

**4.** Commissione store manager $0,30/unità (CVu da 21 → 21,30; MCu = 30 − 21,30 = $8,70); CF invariati $360.000:
BEP unità = 360.000 / 8,70 = 41.379,3 → **41.380 unità** · BEP valore = 41.380 × 30 = **$1.241.400**

**5.** Dati originali (BEP = 40.000 unità). Vendite 50.000 unità.
- Unità oltre il BEP = 50.000 − 40.000 = 10.000
- Commissione extra store manager = 10.000 × $0,30 = $3.000
- RO ordinario = 50.000 × 9 − 360.000 = 450.000 − 360.000 = $90.000
- **RO finale = 90.000 − 3.000 = $87.000**`,
        points: 10,
        weeks: []
      },
      {
        question: `**ESERCIZIO 3 — Costing tradizionale vs ABC · Lucey Ltd**

Lucey Ltd. produce due prodotti. Dati 2022:

| | Prodotto A | Prodotto B | Totale |
|---|---|---|---|
| Quantità prodotta (unità) | 35.000 | 5.000 | 40.000 |
| Costo MP per unità | €20 | €50 | |
| Ore MOD per unità | 2 | 4 | |
| Costo MOD per ora | €12 | €12 | |
| Ore macchina totali | 10.000 | 15.000 | 25.000 |
| Cicli produttivi totali | 200 | 600 | 800 |
| Utilizzo materiali (kg) | 200.000 | 300.000 | 500.000 |

Costi indiretti: Manutenzione macchinari €200.000 (driver: ore macchina) · Pianificazione produzione €300.000 (driver: cicli produttivi) · Movimentazione materiali €400.000 (driver: kg materiali) → **Totale €900.000**.

**Richiesto:**
(a) Costo unitario e totale di A e B con approccio tradizionale (base = ore MOD).
(b) Costo unitario e totale di A e B con approccio ABC.`,
        soluzione: `**(a) Approccio tradizionale** — base = ore MOD dirette

Ore MOD: A = 35.000×2 = 70.000 h · B = 5.000×4 = 20.000 h · Totale = 90.000 h
Coefficiente = 900.000 / 90.000 = **€10/ora MOD**

| | Prodotto A | Prodotto B |
|---|---|---|
| MP/unità | €20 | €50 |
| MOD/unità (ore × 12) | 2×12 = €24 | 4×12 = €48 |
| Indiretti/unità (ore × 10) | 2×10 = €20 | 4×10 = €40 |
| **Costo unitario** | **€64** | **€138** |
| **Costo totale** | 64×35.000 = **€2.240.000** | 138×5.000 = **€690.000** |

**(b) Approccio ABC** — cost driver rate:
- Manutenzione: 200.000 / 25.000 ore macchina = €8/ora macchina
- Pianificazione: 300.000 / 800 cicli = €375/ciclo
- Movimentazione: 400.000 / 500.000 kg = €0,80/kg

Costi indiretti **Prodotto A** = 10.000×8 + 200×375 + 200.000×0,80 = 80.000 + 75.000 + 160.000 = €315.000 → €9/unità
Costi indiretti **Prodotto B** = 15.000×8 + 600×375 + 300.000×0,80 = 120.000 + 225.000 + 240.000 = €585.000 → €117/unità

| | Prodotto A | Prodotto B |
|---|---|---|
| MP + MOD/unità | 20 + 24 = €44 | 50 + 48 = €98 |
| Indiretti/unità (ABC) | €9 | €117 |
| **Costo unitario ABC** | **€53** | **€215** |
| **Costo totale ABC** | 53×35.000 = **€1.855.000** | 215×5.000 = **€1.075.000** |

**Confronto:** il metodo tradizionale **sovrastima** A (€64 vs €53) e **sottostima** B (€138 vs €215). Il prodotto B, pur a basso volume, assorbe molte più attività per unità (cicli produttivi, ore macchina, movimentazione): l'ABC ne rivela il costo reale, evitando le distorsioni del costing basato sul solo volume di MOD.`,
        points: 10,
        weeks: []
      }
    ]
  },

  // ────────────────────────────────────────────────────────────
  // COMPITO 4
  // ────────────────────────────────────────────────────────────
  {
    id: 4,
    title: 'Compito 4',
    subtitle: 'Budget di cassa RF SpA · CVR Beta SpA · Base unica/multipla Alpha',
    duration: 50,
    multipleChoice: [
      {
        question: 'I targets rappresentano le tappe intermedie utilizzate per monitorare l\'avanzamento operativo delle iniziative, mentre le milestones definiscono i livelli di performance attesi rispetto agli obiettivi strategici.',
        options: ['Vero', 'Falso'],
        correctIndices: [1],
        explanation: "FALSO. Le definizioni sono invertite: i TARGETS sono i livelli di performance attesi rispetto agli obiettivi (i traguardi quantitativi); le MILESTONES sono le tappe intermedie che scandiscono e monitorano l'avanzamento delle iniziative.",
        weeks: []
      },
      {
        question: 'Nell\'ambito dell\'analisi CVR, una volta raggiunto il break-even point, ogni unità addizionale venduta determina un incremento del risultato operativo pari al prezzo di vendita applicato al cliente.',
        options: ['Vero', 'Falso'],
        correctIndices: [1],
        explanation: "FALSO. Oltre il BEP ogni unità aggiuntiva incrementa il risultato operativo di un ammontare pari al MARGINE DI CONTRIBUZIONE UNITARIO (prezzo − costo variabile unitario), non al prezzo di vendita: i costi variabili della nuova unità vanno comunque sostenuti.",
        weeks: []
      },
      {
        question: 'Il budget degli investimenti, a differenza degli altri budget settoriali, ha un orizzonte temporale tipicamente pluriennale.',
        options: ['Vero', 'Falso'],
        correctIndices: [0],
        explanation: "VERO. Mentre i budget operativi sono annuali/infrannuali, il budget degli investimenti riguarda beni a utilizzo pluriennale e quindi adotta un orizzonte temporale di più anni.",
        weeks: []
      },
      {
        question: 'Quando, nell\'allocazione dei costi indiretti, sono presenti centri ausiliari (es. manutenzione, magazzino), il procedimento corretto prevede di:',
        options: [
          'Ribaltare i costi dei centri ausiliari sui centri produttivi prima di allocare i costi alle commesse/prodotti',
          'Allocare i costi dei centri ausiliari direttamente ai prodotti senza passare dai centri produttivi',
          'Ignorare i costi dei centri ausiliari',
          'Sommare i costi ausiliari ai costi diretti',
          'Allocare i costi ausiliari in base al prezzo di vendita'
        ],
        correctIndices: [0],
        explanation: "I costi dei centri ausiliari vanno prima ribaltati (allocati) sui centri produttivi, usando basi rappresentative dei servizi resi (es. n. addetti, ore macchina); solo dopo si calcolano i coefficienti e si imputano i costi alle commesse.",
        weeks: []
      },
      {
        question: 'Nella valutazione delle prestazioni di un centro di responsabilità, è corretto considerare:',
        options: [
          'Solo i costi controllabili, cioè quelli che dipendono dalle decisioni del responsabile',
          'Tutti i costi del centro, controllabili e non',
          'I costi incontrollabili, cioè quelli indipendenti dalle decisioni del responsabile',
          'I soli ricavi, mai i costi',
          'I costi controllabili sono quelli su cui il responsabile può effettivamente incidere'
        ],
        correctIndices: [0, 4],
        explanation: "Un principio di equità del controllo: il responsabile va valutato solo sui costi controllabili (su cui può incidere con le sue decisioni). Caricarlo dei costi incontrollabili (es. ammortamenti decisi al centro) sarebbe iniquo e demotivante.",
        weeks: []
      },
      {
        question: 'L\'approccio top-down alla definizione del budget è caratterizzato da:',
        options: [
          'Uno stile impositivo',
          'Obiettivi decisi dall\'alta direzione',
          'Piena partecipazione dei manager di linea alla definizione degli obiettivi',
          'Possibili problemi di scarsa conoscenza dei problemi locali e di demotivazione',
          'Enfasi sulle cause degli scostamenti più che sugli scostamenti negativi'
        ],
        correctIndices: [0, 1, 3],
        explanation: "Il top-down ha stile impositivo: gli obiettivi sono fissati dal vertice e calati sui manager, che possono solo conseguirli. Rischi: scarsa conoscenza dei problemi locali, difficile accettazione, demotivazione, enfasi sugli scostamenti negativi. La partecipazione è invece tipica del bottom-up.",
        weeks: []
      },
      {
        question: 'Le verifiche di fattibilità del budget riguardano la fattibilità tecnica, economica e finanziaria.',
        options: ['Vero', 'Falso'],
        correctIndices: [0],
        explanation: "VERO. Prima dell'approvazione il budget va verificato sotto il profilo tecnico (capacità produttiva, risorse), economico (redditività) e finanziario (sostenibilità dei flussi di cassa).",
        weeks: []
      },
      {
        question: 'Quale affermazione, in riferimento ai costi diretti e indiretti, è ERRATA?',
        options: [
          'Nessuna delle alternative proposte è errata',
          'Il costo per ammortamento di un impianto nel quale vengono realizzate le produzioni di tre prodotti costituisce un esempio di costo diretto',
          'I costi indiretti non possono essere ricondotti a un\'unità di prodotto in modo specifico ed esclusivo',
          'Il coefficiente di allocazione dei costi indiretti è dato dal rapporto tra costi indiretti e base di allocazione',
          'Il costo di manodopera può essere sia diretto sia indiretto'
        ],
        correctIndices: [1],
        explanation: "È ERRATA l'affermazione b: l'ammortamento di un impianto su cui si producono TRE prodotti è un costo comune a più oggetti di costo, quindi un costo INDIRETTO (non diretto). Le altre affermazioni sono corrette.",
        weeks: []
      },
      {
        question: 'I costi indiretti possono essere ricondotti a una singola unità di prodotto in modo specifico ed esclusivo, senza bisogno di basi di allocazione.',
        options: ['Vero', 'Falso'],
        correctIndices: [1],
        explanation: "FALSO. È esattamente il contrario: i costi indiretti sono comuni a più oggetti di costo e NON sono attribuibili in modo specifico ed esclusivo; per imputarli serve una base di allocazione.",
        weeks: []
      },
      {
        question: 'Il margine di sicurezza può essere espresso anche in termini percentuali, rapportando la differenza tra vendite pianificate e vendite di equilibrio alle vendite pianificate.',
        options: ['Vero', 'Falso'],
        correctIndices: [0],
        explanation: "VERO. Margine di sicurezza % = (Vendite pianificate − Vendite di equilibrio) / Vendite pianificate. Più è elevato, maggiore è la capacità dell'impresa di assorbire cali di fatturato restando in utile.",
        weeks: []
      }
    ],
    teoriaApplicata: [],
    esercizi: [
      {
        question: `**ESERCIZIO 1 — Budget di cassa · RF S.p.A.**

RF S.p.A. commercializza il prodotto **Tour** (prodotto internamente). Pianificazione dei flussi di cassa, trimestre giugno-agosto.

Vendite di Tour: **3.000 unità a giugno e luglio**; ad agosto **+50%**, poi costanti fino a fine anno. Prezzo: **€120/unità**. Incasso: **70% nel mese**, 30% nel mese successivo.

Scorte prodotti finiti a fine mese = **70% delle vendite del mese successivo**; al 31 maggio RF = 1.600 unità.

Materia prima: **€18/kg**, **0,3 kg per unità**; pagamento fornitori nel mese successivo; scorte MP a fine mese = quantità per la produzione del mese successivo. A maggio acquistati 1.800 kg a €14/kg (prezzo speciale); RF MP al 31 maggio = 750 kg; il pagamento di tali acquisti avviene a giugno.

Manodopera: **4 ore per unità**; 58 persone a tempo pieno, 240 ore/mese, **€10/ora** (salario fisso indipendente dalla produzione); ore eccedenti a **€14/ora**.

Costi fissi indiretti €7.500/mese; affitto stabilimento €60.000/anno in rate mensili; altri costi variabili di produzione €6/unità prodotta (pagati nel mese).

A giugno: acquisto macchinario €80.000 (2 rate uguali a luglio e agosto). A giugno: attrezzature €140.000 (€25.000 a giugno, €50.000 a luglio, €65.000 ad agosto). Il 1/6 prelievo di €55.000.

**Richiesto:** redigere il budget di cassa per giugno, luglio e agosto.`,
        soluzione: `**Vendite:** Giu 3.000 · Lug 3.000 · Ago 4.500 · Set 4.500
**Produzione** (= vendite + RF − RI; RF = 70% vendite mese succ.; RI giu = 1.600):
- Giu = 3.000 + 0,70×3.000 − 1.600 = 3.500 · Lug = 3.000 + 0,70×4.500 − 2.100 = 4.050 · Ago = 4.500 + 3.150 − 3.150 = 4.500

**Consumo MP** (prod × 0,3 kg): Giu 1.050 · Lug 1.215 · Ago 1.350 · (Set 1.350)
**Acquisti MP** (= consumo + RF − RI; RF = consumo mese succ.):
- Giu = 1.050 + 1.215 − 750 = 1.515 kg → €27.270 · Lug = 1.215 + 1.350 − 1.215 = 1.350 kg → €24.300 · Ago = 1.350 kg → €24.300
- Pagamento fornitori (mese successivo): Giu paga maggio (1.800×14 = €25.200) · Lug paga giugno (€27.270) · Ago paga luglio (€24.300)

**Manodopera** — ore richieste = prod × 4: Giu 14.000 · Lug 16.200 · Ago 18.000. Ore fisse = 58×240 = 13.920 (costo fisso 13.920×10 = €139.200/mese). Eccedenza ×€14:
- Giu: (14.000−13.920)×14 = 1.120 → MOD €140.320 · Lug: 2.280×14 = 31.920 → €171.120 · Ago: 4.080×14 = 57.120 → €196.320

**Incassi** (70% mese + 30% mese succ.; vendite: Giu 360.000, Lug 360.000, Ago 540.000):
Giu = 252.000 · Lug = 252.000 + 108.000 = 360.000 · Ago = 378.000 + 108.000 = 486.000

**BUDGET DI CASSA**

| | GIUGNO | LUGLIO | AGOSTO |
|---|---|---|---|
| Saldo iniziale | 0 | −27.020 | +7.790 |
| Entrate (incassi) | 252.000 | 360.000 | 486.000 |
| − Fornitori MP | 25.200 | 27.270 | 24.300 |
| − Manodopera | 140.320 | 171.120 | 196.320 |
| − Altri costi variabili (€6/u) | 21.000 | 24.300 | 27.000 |
| − Costi fissi indiretti + affitto | 12.500 | 12.500 | 12.500 |
| − Macchinario | — | 40.000 | 40.000 |
| − Attrezzature | 25.000 | 50.000 | 65.000 |
| − Prelievo | 55.000 | — | — |
| **Saldo del mese** | −27.020 | +34.810 | +120.880 |
| **Saldo finale** | **−€27.020** | **+€7.790** | **+€128.670** |

A giugno il saldo è negativo (−€27.020) per la concentrazione di esborsi (prelievo, attrezzature); l'azienda recupera nei mesi successivi chiudendo agosto con +€128.670. *Affitto mensile = 60.000/12 = €5.000; costi fissi+affitto = 7.500 + 5.000 = €12.500.*`,
        points: 10,
        weeks: []
      },
      {
        question: `**ESERCIZIO 2 — Analisi CVR e BEP · Beta S.p.A.**

Beta S.p.A. è un'azienda monoprodotto (prodotto X) con capacità produttiva massima di **180.000 unità**. Costi fissi aziendali **€7.850.000**; costo variabile unitario **€485**; prezzo unitario di vendita **€585**.

**Determinare:**
1. Il punto di equilibrio in termini di quantità.
2. Il punto di equilibrio in termini di fatturato.
3. Il risultato operativo in corrispondenza di 62.000 unità vendute.
4. Il margine di sicurezza se sono state vendute 120.000 unità.
5. Il prezzo di vendita unitario necessario per un volume di pareggio di 165.000 unità (CF e CVu invariati).
6. Il nuovo CVu che consente un risultato operativo di €1.850.000 con 95.000 unità (P=€585, CF invariati).
7. I nuovi costi fissi se, con CVu €485, P €585 e 70.000 unità vendute, si rileva un RO di €250.000.
8. La quantità necessaria per un risultato operativo obiettivo di €100.000 (dati originari).`,
        soluzione: `**Dati base:** MCu = 585 − 485 = **€100**

**1.** BEP quantità = CF / MCu = 7.850.000 / 100 = **78.500 unità**

**2.** BEP fatturato = 78.500 × 585 = **€45.922.500**

**3.** RO con 62.000 unità = 62.000×100 − 7.850.000 = 6.200.000 − 7.850.000 = **−€1.650.000 (perdita)**
(62.000 < BEP 78.500: l'azienda è in area di perdita)

**4.** Margine di sicurezza con 120.000 unità = (120.000 − 78.500) / 120.000 = 41.500 / 120.000 = **34,58%**

**5.** Prezzo per BEP a 165.000 unità: (P − 485) × 165.000 = 7.850.000 ⟹ P − 485 = 47,576 ⟹ **P ≈ €532,58**

**6.** Nuovo CVu per RO €1.850.000 con 95.000 unità:
(585 − CVu) × 95.000 − 7.850.000 = 1.850.000 ⟹ (585 − CVu) × 95.000 = 9.700.000 ⟹ 585 − CVu = 102,11 ⟹ **CVu ≈ €482,89**

**7.** Nuovi CF con 70.000 unità e RO €250.000: (585 − 485)×70.000 − CF = 250.000 ⟹ 7.000.000 − CF = 250.000 ⟹ **CF = €6.750.000**

**8.** Quantità per RO obiettivo €100.000 (dati originari): Q = (CF + RO) / MCu = (7.850.000 + 100.000) / 100 = **79.500 unità**`,
        points: 10,
        weeks: []
      },
      {
        question: `**ESERCIZIO 3 — Base unica vs base multipla · Alpha Industrial Engineering S.p.A.**

Alpha Industrial Engineering opera su commessa. Tre reparti produttivi (Lavorazioni Meccaniche, Assemblaggio, Finitura) e due centri ausiliari (Magazzino e logistica, Servizi Tecnici e Manutenzione).

**Costi indiretti preventivati 2026:** Lav. Meccaniche €520.000 · Assemblaggio €390.000 · Finitura €310.000 · Magazzino €260.000 · Servizi Tecnici €180.000.

**Ribaltamento ausiliari:** Magazzino in base al n. addetti (Lav. Mecc. 50, Assembl. 35, Finitura 35); Servizi Tecnici in base alle ore macchina (Lav. Mecc. 72.000, Assembl. 18.000, Finitura 10.000).

**Ore MOD previste:** Lav. Mecc. 30.000 · Assembl. 42.000 · Finitura 36.000. **Costo orario MOD:** €22 · €26 · €29.

**Base unica:** coefficiente unico sul costo totale MOD. **Base multipla:** Lav. Mecc. su ore macchina; Assemblaggio e Finitura su ore MOD.

**Commessa POLARIS** — Materiali diretti: Lav. Mecc. €120.000, Assembl. €65.000, Finitura €48.000. Ore macchina: 8.000 / 1.500 / 800. Ore MOD: 3.200 / 5.000 / 4.200.

**Richiesto:**
(a) Ribaltare i costi dei centri ausiliari sui reparti produttivi.
(b) Determinare il coefficiente unico e i coefficienti per reparto.
(c) Calcolare il costo totale di produzione della commessa POLARIS con base unica e con base multipla.`,
        soluzione: `**(a) Ribaltamento centri ausiliari**

*Magazzino €260.000 — base n. addetti (50+35+35 = 120):*
- Lav. Mecc. = 260.000×50/120 = €108.333 · Assembl. = 260.000×35/120 = €75.833 · Finitura = €75.833

*Servizi Tecnici €180.000 — base ore macchina (72.000+18.000+10.000 = 100.000):*
- Lav. Mecc. = 180.000×72% = €129.600 · Assembl. = 180.000×18% = €32.400 · Finitura = 180.000×10% = €18.000

**Costi indiretti totali post-ribaltamento:**
- Lav. Meccaniche = 520.000 + 108.333 + 129.600 = **€757.933**
- Assemblaggio = 390.000 + 75.833 + 32.400 = **€498.233**
- Finitura = 310.000 + 75.833 + 18.000 = **€403.833**

**(b) Coefficienti**

*Base unica* — Costo MOD totale = 30.000×22 + 42.000×26 + 36.000×29 = 660.000 + 1.092.000 + 1.044.000 = €2.796.000
Coefficiente unico = 1.660.000 / 2.796.000 = **0,5937 (€ per € di MOD)**

*Base multipla:*
- Lav. Mecc. = 757.933 / 72.000 ore macchina = **€10,527/ora macchina**
- Assemblaggio = 498.233 / 42.000 ore MOD = **€11,863/ora MOD**
- Finitura = 403.833 / 36.000 ore MOD = **€11,218/ora MOD**

**(c) Costo della commessa POLARIS**

Materiali diretti = 120.000 + 65.000 + 48.000 = €233.000
Costo MOD = 3.200×22 + 5.000×26 + 4.200×29 = 70.400 + 130.000 + 121.800 = €322.200

*Base unica:* Indiretti = 0,5937 × 322.200 = €191.292
**Costo totale = 233.000 + 322.200 + 191.292 = €746.492**

*Base multipla:* Indiretti = 8.000×10,527 + 5.000×11,863 + 4.200×11,218 = 84.215 + 59.314 + 47.114 = €190.643
**Costo totale = 233.000 + 322.200 + 190.643 = €745.843**

I due risultati sono vicini (€746.492 vs €745.843) perché POLARIS impiega i reparti in proporzione simile alla media aziendale; su commesse con mix di reparti molto sbilanciato la differenza tra base unica e base multipla diventa rilevante e la base multipla risulta più accurata.`,
        points: 10,
        weeks: []
      }
    ]
  },

  // ────────────────────────────────────────────────────────────
  // COMPITO 5
  // ────────────────────────────────────────────────────────────
  {
    id: 5,
    title: 'Compito 5',
    subtitle: 'Budget multi-prodotto EnergyMove · Make-or-buy BioScan · ABC Chocolate Industry',
    duration: 50,
    multipleChoice: [
      {
        question: 'Quale tra le seguenti affermazioni sul budgeting e sullo strumento del budget è ERRATA?',
        options: [
          'Il budget finanziario mette in evidenza costi e ricavi di esercizio, permettendo di determinare il risultato di periodo (utile o perdita)',
          'Nessuna delle alternative proposte è errata',
          'Il programma della manodopera diretta si definisce moltiplicando il programma di produzione per le ore standard di impiego di MOD per prodotto',
          'I centri di responsabilità sono unità organizzative cui vengono assegnate specifiche responsabilità e obiettivi, distinguendo costi controllabili e incontrollabili',
          'Nell\'approccio bottom-up gli obiettivi non vengono determinati esclusivamente dall\'alta direzione: presenta uno stile partecipativo'
        ],
        correctIndices: [0],
        explanation: "È ERRATA l'affermazione a: a mettere in evidenza costi e ricavi e il risultato di periodo è il BUDGET ECONOMICO, non il budget finanziario. Il budget finanziario contiene i flussi finanziari (entrate e uscite di cassa) del periodo.",
        weeks: []
      },
      {
        question: 'Nell\'approccio bottom-up alla definizione del budget, i centri di responsabilità formulano le proprie proposte e gli obiettivi vengono concordati tra i vari soggetti: è uno stile partecipativo.',
        options: ['Vero', 'Falso'],
        correctIndices: [0],
        explanation: "VERO. Il bottom-up è partecipativo: le proposte salgono dai centri di responsabilità e gli obiettivi sono negoziati. Vantaggi: migliore conoscenza dei problemi locali, motivazione. Rischi: scarso coordinamento, budget slacks (margini di comodo).",
        weeks: []
      },
      {
        question: 'Quali tra i seguenti sono vantaggi del sistema di budgeting?',
        options: [
          'Costringe a definire obiettivi e programmi e a pensare al futuro programmandolo',
          'Coordina le attività delle diverse funzioni e comunica i programmi',
          'Supporta la valutazione della performance ancorando le valutazioni al presente e al futuro',
          'Garantisce l\'assenza totale di incertezza sui risultati futuri',
          'Ancora le valutazioni esclusivamente ai dati storici del passato'
        ],
        correctIndices: [0, 1, 2],
        explanation: "Tra i vantaggi del budget: definire obiettivi e programmi, pensare/programmare il futuro, coordinare e comunicare, supportare la valutazione della performance ancorandola al presente e al futuro (non al passato). Il budget non elimina l'incertezza.",
        weeks: []
      },
      {
        question: 'Quale tra le seguenti è una critica (limite) riconosciuta al sistema di budgeting?',
        options: [
          'Il processo è costoso e richiede molto tempo',
          'L\'uso del budget per valutare il management può indurre a sottostimare gli obiettivi o a richiedere più risorse del necessario',
          'Il budget può risultare poco utile in contesti molto dinamici',
          'Il budget impedisce qualsiasi forma di coordinamento tra le funzioni',
          'Il budget rende impossibile la comunicazione dei programmi'
        ],
        correctIndices: [0, 1, 2],
        explanation: "Le critiche al budget: processo costoso e lungo; comportamenti opportunistici (budget slack, gaming) quando è usato per valutare i manager; scarsa utilità in contesti molto dinamici/turbolenti. Coordinamento e comunicazione sono invece tra i suoi vantaggi.",
        weeks: []
      },
      {
        question: 'Un centro di profitto (o di risultato) è un centro di responsabilità il cui responsabile risponde sia dei costi sia dei ricavi, ed è quindi valutato sul margine generato.',
        options: ['Vero', 'Falso'],
        correctIndices: [0],
        explanation: "VERO. Il centro di profitto risponde del risultato economico (ricavi − costi): tipicamente business unit, divisioni o filiali dotate di autonomia. Il centro di investimento aggiunge la responsabilità sul capitale investito (valutazione sul ROI).",
        weeks: []
      },
      {
        question: 'La distinta base indica i componenti (materie prime/semilavorati) e le relative quantità necessarie a produrre una unità di prodotto finito.',
        options: ['Vero', 'Falso'],
        correctIndices: [0],
        explanation: "VERO. La distinta base elenca per ogni prodotto i materiali e le quantità unitarie necessarie; combinata con i prezzi standard delle materie permette di determinare il costo variabile industriale e il fabbisogno di approvvigionamenti.",
        weeks: []
      },
      {
        question: 'Il budget commerciale comprende:',
        options: [
          'Il budget delle quantità vendute',
          'Il budget dei ricavi',
          'Il budget dei costi commerciali',
          'Il budget degli investimenti in impianti produttivi',
          'Il budget delle materie prime'
        ],
        correctIndices: [0, 1, 2],
        explanation: "Il budget commerciale è composto da: budget delle quantità vendute, budget dei ricavi (quantità × prezzo) e budget dei costi commerciali (personale di vendita, trasporto, pubblicità, imballaggio, assistenza clienti). Investimenti e materie prime appartengono ad altri budget settoriali.",
        weeks: []
      },
      {
        question: 'Nella decisione di make-or-buy, l\'esistenza di una clausola di sconto sul prezzo di acquisto al superamento di una certa soglia di volume:',
        options: [
          'Rende il costo variabile unitario dell\'alternativa "buy" non costante al variare dei volumi',
          'Non ha alcun effetto sull\'analisi',
          'Va considerata applicando lo sconto solo alle unità eccedenti la soglia, se così previsto dal contratto',
          'Rende sempre conveniente la produzione interna',
          'Trasforma i costi fissi in costi variabili'
        ],
        correctIndices: [0, 2],
        explanation: "Uno sconto a scaglioni rende il CVu dell'alternativa 'buy' variabile con il volume: se lo sconto si applica solo alle unità oltre la soglia, occorre calcolare separatamente il costo delle unità entro soglia e di quelle eccedenti.",
        weeks: []
      },
      {
        question: 'Il costo pieno (full cost) di un prodotto comprende sia i costi diretti sia una quota di costi indiretti a esso allocata.',
        options: ['Vero', 'Falso'],
        correctIndices: [0],
        explanation: "VERO. Il costo pieno (full costing) somma ai costi diretti del prodotto la quota di costi indiretti imputata tramite i coefficienti di allocazione (base unica, basi multiple o ABC).",
        weeks: []
      },
      {
        question: 'Il budget della produzione presuppone decisioni sulla politica delle scorte, la conoscenza dei costi standard e la connessione con il budget del personale.',
        options: ['Vero', 'Falso'],
        correctIndices: [0],
        explanation: "VERO. Il budget di produzione determina le quantità da produrre (via politica delle scorte di PF), i costi per i volumi programmati (costi standard) e gli investimenti collegati; è strettamente connesso al budget del personale (organico necessario).",
        weeks: []
      }
    ],
    teoriaApplicata: [],
    esercizi: [
      {
        question: `**ESERCIZIO 1 — Budget multi-prodotto · EnergyMove S.p.A.**

EnergyMove S.p.A. commercializza due modelli prodotti internamente: **ProRun** e **LightFit**.

Vendite **ProRun**: 3.200 unità a giugno e luglio; ad agosto **+40%** rispetto a luglio; da settembre costanti al livello di agosto. Vendite **LightFit**: 2.400 unità a giugno, 2.800 a luglio; ad agosto **+30%** rispetto a luglio; da settembre costanti. Prezzi: ProRun **€125**, LightFit **€100**.

Incasso ProRun: 65% nel mese, 35% nel mese successivo. Incasso LightFit: 25% nel mese, 35% nel mese successivo, 40% due mesi dopo. Crediti al 31/5 per LightFit: €45.000 a giugno, €40.000 a luglio.

Scorte prodotti finiti a fine mese = **75% delle vendite del mese successivo**; al 31/5 RF = 1.700 ProRun e 1.500 LightFit.

Materia prima comune: **€22/kg**; ProRun 0,35 kg/unità, LightFit 0,2 kg/unità. Pagamento fornitori nel mese successivo; scorte MP a fine mese = fabbisogno della produzione del mese successivo; al 31/5 scorte MP = 900 kg; debito v/fornitori al 31/5 = €44.200 (pagato a giugno).

Manodopera: ProRun 2 ore/unità, LightFit 1,8 ore/unità; 60 lavoratori, 230 ore/mese, €12/ora (fisso); ore eccedenti €17/ora.

Altre spese: utenze €8.500/mese; affitto €66.000/anno in rate mensili; ammortamenti €10.000/mese; macchinario ProRun €100.000 (2 rate uguali luglio e agosto); attrezzature LightFit €135.000 (€35.000 giu, €50.000 lug, €50.000 ago). Saldo banca al 1/6 = **€75.000**.

**Richiesto:** budget delle vendite e degli incassi, budget di produzione, budget acquisti MP, e budget di cassa per giugno, luglio e agosto.`,
        soluzione: `**Vendite (unità):** ProRun Giu 3.200, Lug 3.200, Ago 4.480, Set 4.480 · LightFit Giu 2.400, Lug 2.800, Ago 3.640, Set 3.640

**Incassi ProRun (65% + 35%):** Giu 260.000 · Lug 400.000 · Ago 504.000
**Incassi LightFit (25% + 35% + 40% + crediti):** Giu 60.000+45.000 = 105.000 · Lug 70.000+84.000+40.000 = 194.000 · Ago 91.000+98.000+96.000 = 285.000
**Incassi totali:** Giu **€365.000** · Lug **€594.000** · Ago **€789.000**

**Produzione** (= vendite + RF − RI; RF = 75% mese succ.):
- ProRun: Giu 3.900 · Lug 4.160 · Ago 4.480 — LightFit: Giu 3.000 · Lug 3.430 · Ago 3.640

**Consumo MP** (ProRun×0,35 + LightFit×0,2): Giu 1.965 kg · Lug 2.142 kg · Ago 2.296 kg · (Set 2.296)
**Acquisti MP** (= consumo + RF − RI; RF = consumo mese succ.; RI giu = 900):
- Giu = 1.965 + 2.142 − 900 = 3.207 kg → €70.554 · Lug = 2.296 kg → €50.512 · Ago = 2.296 kg → €50.512
- Pagamento fornitori (mese succ.): Giu €44.200 · Lug €70.554 · Ago €50.512

**Manodopera** — ore richieste (ProRun×2 + LightFit×1,8): Giu 13.200 · Lug 14.494 · Ago 15.512. Ore fisse = 60×230 = 13.800 (costo €165.600/mese). Eccedenza ×€17:
- Giu: 0 (13.200 ≤ 13.800) → €165.600 · Lug: 694×17 = 11.798 → €177.398 · Ago: 1.712×17 = 29.104 → €194.704

**BUDGET DI CASSA**

| | GIUGNO | LUGLIO | AGOSTO |
|---|---|---|---|
| Saldo iniziale | 75.000 | 181.200 | 412.748 |
| Entrate (incassi) | 365.000 | 594.000 | 789.000 |
| − Fornitori MP | 44.200 | 70.554 | 50.512 |
| − Manodopera | 165.600 | 177.398 | 194.704 |
| − Utenze | 8.500 | 8.500 | 8.500 |
| − Affitto (66.000/12) | 5.500 | 5.500 | 5.500 |
| − Macchinario | — | 50.000 | 50.000 |
| − Attrezzature | 35.000 | 50.000 | 50.000 |
| **Saldo del mese** | +106.200 | +231.548 | +429.784 |
| **Saldo finale** | **€181.200** | **€412.748** | **€842.532** |

*Gli ammortamenti (€10.000/mese) sono esclusi dal budget di cassa: non generano uscite monetarie.*`,
        points: 10,
        weeks: []
      },
      {
        question: `**ESERCIZIO 2 — Make-or-buy · BioScan Technologies Ltd**
*(esercizio del mock exam ufficiale LUISS 2025/26)*

BioScan Technologies Ltd. sta valutando per il 2026 il lancio di un nuovo scanner portatile per analisi, di fronte a due possibili strategie produttive.

**Produzione interna (prima alternativa):** l'azienda sosterrebbe costi fissi annui di adeguamento impianti e assunzione di personale tecnico specializzato per complessivi **€750.000**. A tali costi si aggiungerebbero ulteriori costi fissi per **€7.000 mensili** relativi a campagne pubblicitarie a supporto del lancio. Costi variabili unitari della produzione interna:
- 1 kg di materia prima A, costo €18/kg
- 0,5 kg di materia prima B, costo €20/kg
- ulteriori costi variabili per €22 (manodopera diretta e costi indiretti variabili di produzione)

**Esternalizzazione (seconda alternativa):** BioScan acquisterebbe il prodotto finito a un costo unitario di **€48**, sostenendo inoltre costi logistici e di distribuzione pari a **€5/unità**. Questa soluzione comporterebbe costi fissi inferiori, stimati in **€210.000 annui**. Il fornitore propone una clausola contrattuale per cui, al superamento delle **30.000 unità** acquistate, viene riconosciuto uno **sconto del 10%** esclusivamente sul costo unitario di acquisto, applicato solamente alle unità eccedenti la soglia.

Il prezzo di vendita, per entrambe le alternative, è pari a **€75/unità**.

**Richiesto:**
(a) Determinare il punto di pareggio in termini di quantità per l'alternativa "produzione interna" 2026.
(b) Determinare il risultato operativo dell'alternativa "esternalizzazione" ipotizzando un acquisto (e conseguente vendita) di 45.000 scanner.`,
        soluzione: `**(a) BEP — Produzione interna**

Costi fissi = 750.000 + (7.000 × 12) = 750.000 + 84.000 = **€834.000**

Costo variabile unitario:
- MP A: 1 kg × €18 = €18
- MP B: 0,5 kg × €20 = €10
- Altri costi variabili = €22
- **CVu = 18 + 10 + 22 = €50**

Margine di contribuzione unitario = 75 − 50 = **€25**

**BEP = CF / MCu = 834.000 / 25 = 33.360 unità**

**(b) Risultato operativo — Esternalizzazione con 45.000 unità**

Costo variabile unitario base = acquisto €48 + logistica €5 = **€53/unità**

Lo sconto del 10% si applica solo alle unità **oltre le 30.000**:
- Prime 30.000 unità: CVu = €53 → 30.000 × 53 = €1.590.000
- Unità eccedenti (45.000 − 30.000 = 15.000): acquisto scontato 48×0,90 = €43,20 + logistica €5 = €48,20 → 15.000 × 48,20 = €723.000
- **Costi variabili totali = 1.590.000 + 723.000 = €2.313.000**

Ricavi = 45.000 × €75 = €3.375.000
Costi fissi = €210.000

**Risultato operativo = 3.375.000 − 2.313.000 − 210.000 = €852.000**`,
        points: 10,
        weeks: []
      },
      {
        question: `**ESERCIZIO 3 — Costing tradizionale e ABC · Chocolate Industry SpA**

Chocolate Industry SpA produce 3 tipi di cioccolate calde: **Latte, Fondente, Nocciola**. Valori consuntivi di periodo:

| | Latte | Fondente | Nocciola |
|---|---|---|---|
| Unità prodotte | 1.950 | 1.160 | 1.730 |
| Costo MP unitario | €1,10 | €1,80 | €1,25 |
| Ore MOD per unità | 1,4 | 0,5 | 1,10 |
| Costo orario MOD | €7,40 | €6,20 | €5,60 |

Costi fissi comuni: **€13.800**. Cinque macro-attività con relativi cost driver:

| Attività | Costo | Cost driver | Latte | Fondente | Nocciola |
|---|---|---|---|---|---|
| Controllo e attrezzaggio | €1.300 | n. attrezzaggi | 5 | 7 | 8 |
| Gestione macchinari | €2.500 | ore macchina | 40 | 30 | 50 |
| Amministrazione | €4.800 | fatture emesse | 17 | 9 | 14 |
| Progettazione | €3.250 | interventi programmati | 10 | 12 | 11 |
| Imballaggio | €1.950 | n. imballaggi | 14 | 9 | 13 |

**Richiesto:**
(a) Costo pieno totale e unitario dei tre prodotti con metodo tradizionale (base = ore MOD totali).
(b) Costo pieno totale e unitario dei tre prodotti con metodo ABC.`,
        soluzione: `**Costo primo (MP + MOD) per unità:**
- Latte = 1,10 + (1,4×7,40) = 1,10 + 10,36 = €11,46
- Fondente = 1,80 + (0,5×6,20) = 1,80 + 3,10 = €4,90
- Nocciola = 1,25 + (1,10×5,60) = 1,25 + 6,16 = €7,41

**(a) Metodo tradizionale** — base ore MOD totali

Ore MOD: Latte 1.950×1,4 = 2.730 · Fondente 1.160×0,5 = 580 · Nocciola 1.730×1,10 = 1.903 · **Totale = 5.213 h**
Coefficiente = 13.800 / 5.213 = **€2,6472/ora MOD**

| | Latte | Fondente | Nocciola |
|---|---|---|---|
| Indiretti/unità (ore MOD × 2,6472) | 3,71 | 1,32 | 2,91 |
| **Costo pieno unitario** | **€15,17** | **€6,22** | **€10,32** |
| **Costo pieno totale** | €29.574 | €7.219 | €17.857 |

**(b) Metodo ABC** — cost driver rate:
- Controllo/attrezzaggio: 1.300/20 = €65/attrezzaggio
- Gestione macchinari: 2.500/120 = €20,833/ora macchina
- Amministrazione: 4.800/40 = €120/fattura
- Progettazione: 3.250/33 = €98,485/intervento
- Imballaggio: 1.950/36 = €54,167/imballaggio

Costi indiretti per prodotto:
- **Latte** = 5×65 + 40×20,833 + 17×120 + 10×98,485 + 14×54,167 = 325 + 833 + 2.040 + 985 + 758 = €4.941 → €2,53/unità
- **Fondente** = 7×65 + 30×20,833 + 9×120 + 12×98,485 + 9×54,167 = 455 + 625 + 1.080 + 1.182 + 488 = €3.830 → €3,30/unità
- **Nocciola** = 8×65 + 50×20,833 + 14×120 + 11×98,485 + 13×54,167 = 520 + 1.042 + 1.680 + 1.083 + 704 = €5.029 → €2,91/unità

| | Latte | Fondente | Nocciola |
|---|---|---|---|
| Costo primo unitario | €11,46 | €4,90 | €7,41 |
| Indiretti/unità (ABC) | €2,53 | €3,30 | €2,91 |
| **Costo pieno unitario ABC** | **€13,99** | **€8,20** | **€10,32** |
| **Costo pieno totale ABC** | €27.289 | €9.513 | €17.848 |

**Confronto:** il metodo tradizionale, allocando tutto sulle ore MOD, **sovrastima il Latte** (€15,17 vs €13,99 ABC, perché è il prodotto a più alte ore MOD) e **sottostima il Fondente** (€6,22 vs €8,20 ABC, perché pur richiedendo poca MOD assorbe molte attività di amministrazione, progettazione e attrezzaggio). L'ABC, legando i costi ai driver effettivi, corregge la distorsione.`,
        points: 10,
        weeks: []
      }
    ]
  }
];
