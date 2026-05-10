// ═══════════════════════════════════════════════════════════════
// 5 Simulazioni "APERTE" di Economia e Gestione delle Imprese
// Solo domande di teoria applicata (10 per simulazione, totale 50).
// Ogni risposta attesa: max 10 righe, 3 pt ciascuna → 30 pt totali.
// Coverage di tutte le 12 settimane EGI.
// ═══════════════════════════════════════════════════════════════

export const SIMULAZIONI_EGI_APERTE = [
  // ────────────────────────────────────────────────────────────
  // APERTE 1 — Strategia, ambiente e istituzioni (W1, W2, W3)
  // ────────────────────────────────────────────────────────────
  {
    id: 1,
    title: 'Aperte 1',
    subtitle: 'Strategia, ambiente competitivo e istituzioni',
    duration: 40,
    multipleChoice: [],
    teoriaApplicata: [
      {
        question: 'Descrivi il modello **PESTEL** e spiega come viene utilizzato nell\'analisi del macro-ambiente. Porta un esempio applicato al settore automobilistico. (max 10 righe)',
        weeks: [1],
        soluzione: `Il **PESTEL** è un framework per scansionare il macro-ambiente esterno dell'impresa. Si articola in sei dimensioni:

- **P**olitica — stabilità governativa, politiche commerciali, regolamentazioni
- **E**conomica — PIL, tassi di interesse, inflazione, potere d'acquisto
- **S**ociale — demografia, tendenze culturali, stili di vita, generazioni
- **T**ecnologica — R&D, automazione, digitalizzazione, brevetti
- **E**cologica — climate change, normative emissioni, sostenibilità
- **L**egale — diritto societario, IPR, tutela consumatori

**Esempio automotive:** la transizione verso l'auto elettrica è guidata da fattori *Politici* (divieto auto termiche UE al 2035), *Tecnologici* (miglioramento batterie e autonomia), *Ecologici* (riduzione CO₂), *Economici* (incentivi statali) e *Sociali* (crescente eco-consapevolezza). I costruttori devono riallocare massicci investimenti in R&D elettrico, modificare le catene di fornitura (da motorizzazioni termiche a celle a batteria) e riformare le reti di distribuzione e assistenza.`
      },
      {
        question: 'Cosa sono i **megatrend** e perché sono strategicamente rilevanti per le imprese contemporanee? Cita e descrivi almeno quattro megatrend. (max 10 righe)',
        weeks: [1],
        soluzione: `I **megatrend** (Naisbitt 1982) sono trasformazioni strutturali di lungo periodo (10-30 anni) che ridisegnano l'ambiente competitivo indipendentemente dalla volontà dei singoli attori. Differiscono dai trend ordinari per ampiezza, irreversibilità e impatto trasversale a settori e geografie.

**Quattro megatrend rilevanti:**

1. **Digitalizzazione e Industry 4.0** — IoT, AI, blockchain, big data trasformano produzione, logistica e modelli di business; creare o perdere vantaggio competitivo dipende dalla velocità di adozione.
2. **Cambiamento demografico** — invecchiamento della popolazione nei Paesi sviluppati (silver economy, healthcare) e crescita giovanile nei Paesi emergenti (nuova domanda consumer).
3. **Climate change e sostenibilità** — pressione regolatoria (CSRD, tassonomia UE), preferenze dei consumatori e rischi fisici spingono le imprese verso business model circolari e a basse emissioni.
4. **Urbanizzazione** — oltre il 70% della popolazione mondiale vivrà in città entro il 2050, creando opportunità in mobilità, infrastrutture, smart city e servizi urbani.

Comprendere i megatrend consente all'impresa di anticipare discontinuità e adattare la strategia prima che siano diventati irreversibili.`
      },
      {
        question: 'Spiega la **Triple Bottom Line** (Elkington) e il suo rapporto con i 17 Sustainable Development Goals (SDGs) dell\'ONU. (max 10 righe)',
        weeks: [1],
        soluzione: `La **Triple Bottom Line** (Elkington, 1994) propone che l'impresa debba rendicontare la propria performance lungo tre assi, le "3P":

- **People** (dimensione sociale): condizioni di lavoro, impatto sulle comunità, diritti umani nella supply chain
- **Planet** (dimensione ambientale): emissioni, consumo di risorse, biodiversità, economia circolare
- **Profit** (dimensione economica): redditività, creazione di valore per gli azionisti e gli stakeholder

Il framework sfida la visione shareholder-centrica di Friedman (1970) e anticipa i criteri **ESG** oggi usati dagli investitori istituzionali.

**Relazione con gli SDGs:** i 17 Obiettivi di Sviluppo Sostenibile dell'Agenda 2030 (ONU, 2015) rappresentano la traduzione pubblica/intergovernativa della TBL. Imprese che si allineano agli SDGs (es. SDG 7 energia pulita, SDG 12 consumo responsabile, SDG 13 clima) trovano un linguaggio comune per comunicare il proprio impatto a investitori, regolatori e consumatori, trasformando la TBL da framework concettuale in sistema di misurazione operativa.`
      },
      {
        question: 'Descrivi il modello delle **5 Forze di Porter** e spiega come determina la profittabilità media di un settore. Analizza brevemente il settore della grande distribuzione organizzata (GDO). (max 10 righe)',
        weeks: [2],
        soluzione: `Porter (1980) individua cinque forze strutturali che determinano l'intensità competitiva e la profittabilità media di lungo periodo di un settore:

1. **Rivalità tra concorrenti** — numero e dimensione dei player, differenziazione, costi fissi, crescita del mercato
2. **Minaccia di nuovi entranti** — altezza delle barriere all'entrata (scala, brand, brevetti, regolazioni)
3. **Minaccia di prodotti sostituti** — il tetto al premium price che i clienti sono disposti a pagare
4. **Potere contrattuale dei fornitori** — capacità di alzare i prezzi o ridurre qualità/quantità
5. **Potere contrattuale dei clienti** — capacità di spingere verso il basso i prezzi o aumentare le pretese

Quanto più intense sono le cinque forze, tanto minore è la profittabilità media del settore.

**GDO:** rivalità *alta* (Esselunga, Conad, Coop, Lidl competono su prezzo e location); nuovi entranti *medi* (barriere logistiche e di scala); sostituti *medi* (e-commerce alimentare, discount); potere fornitori *medio* (brand forti come Nestlé vs. private label); potere clienti *alto* (bassa fedeltà, alta sensibilità al prezzo). Profittabilità complessiva: *medio-bassa*.`
      },
      {
        question: 'Spiega il **paradigma SCP** (Structure-Conduct-Performance) di Bain-Mason. Quali sono i suoi limiti rispetto alla Resource-Based View? (max 10 righe)',
        weeks: [2],
        soluzione: `Il paradigma **SCP** (Bain, Mason — Harvard School, anni '50-'60) afferma che:

**Structure** (struttura del settore: concentrazione, barriere, differenziazione) → **Conduct** (condotta: decisioni di prezzo, R&D, pubblicità) → **Performance** (profittabilità, benessere sociale)

La struttura di settore è considerata il principale determinante delle performance: settori concentrati con alte barriere generano extraprofitti. La condotta è quasi meccanicamente determinata dalla struttura. Questo schema fonda le politiche antitrust: ridurre la concentrazione per aumentare il benessere.

**Limiti rispetto alla RBV:**

- La SCP è *esogena*: ignora come le risorse e competenze interne dell'impresa possano generare eterogeneità di performance *all'interno* dello stesso settore (stessa struttura, profittabilità diversissima tra firm).
- Barney (1991) dimostra che il vantaggio competitivo sostenibile dipende da risorse VRIO interne, non solo dal posizionamento settoriale.
- La SCP tende al determinismo: le imprese reagirebbero passivamente alla struttura, mentre nella realtà le imprese plasmano attivamente il proprio ambiente competitivo (si veda anche l'Institutional-Based View di Peng 2002).`
      },
      {
        question: 'Distingui tra **barriere all\'entrata** e **barriere all\'uscita**. Come ciascuna influenza la struttura competitiva e la profittabilità del settore? Porta un esempio. (max 10 righe)',
        weeks: [2],
        soluzione: `**Barriere all'entrata** sono ostacoli che rendono difficile (o costoso) per nuovi concorrenti penetrare in un settore. Tipologie:
- Economie di scala (il newcomer inizia piccolo, svantaggiato sui costi)
- Fabbisogno di capitale elevato
- Differenziazione / brand loyalty dei player esistenti
- Accesso ai canali distributivi
- Brevetti e asset intangibili
- Regolazioni/licenze governative

*Effetto:* barriere alte → meno nuovi entranti → minore pressione competitiva → profittabilità più alta per gli incumbent.

**Barriere all'uscita** sono costi e vincoli che trattengono le imprese nel settore anche quando non è più profittevole. Tipologie:
- Asset specializzati (difficilmente riconvertibili)
- Costi fissi di uscita (liquidazioni, contratti)
- Vincoli emotivi/strategici del management
- Dipendenze interrelazionali con altri business

*Effetto:* barriere all'uscita alte → le imprese restano nel mercato anche in perdita → eccesso di capacità → guerra dei prezzi → profittabilità compressa.

*Esempio:* il settore siderurgico ha barriere all'uscita elevatissime (altoforni costosi e non riconvertibili), il che genera profittabilità strutturalmente bassa nonostante le barriere all'entrata siano anch'esse alte (requisiti di capitale).`
      },
      {
        question: 'Cosa sono i **raggruppamenti strategici** (Grant)? Perché la rivalità intra-gruppo è tipicamente più intensa di quella inter-gruppo? Porta un esempio dal settore automobilistico. (max 10 righe)',
        weeks: [2],
        soluzione: `I **raggruppamenti strategici** (Hunt 1972, Grant 2016) sono insiemi di imprese all'interno di un settore che adottano strategie simili lungo le dimensioni strategiche rilevanti (prezzo, qualità, gamma prodotti, canali, segmenti di mercato).

I raggruppamenti si identificano costruendo **mappe di posizionamento** bidimensionali. Imprese nello stesso gruppo sono più simili tra loro che rispetto ad imprese in altri gruppi.

**Rivalità intra-gruppo > inter-gruppo** perché:
- Imprese nello stesso raggruppamento si rivolgono agli stessi clienti con offerte sostituibili
- La differenziazione percepita è minima → competizione principalmente su prezzo
- I clienti considerano facilmente intercambiabili i prodotti dello stesso gruppo

**Esempio automotive:**
- *Gruppo premium tedesco*: BMW, Mercedes, Audi → si contendono gli stessi clienti ad alto reddito con prodotti simili; la rivalità interna è feroce
- *Gruppo mass-market*: Volkswagen, Peugeot, Renault → logica di volume e costo
- *Gruppo EV disruptive*: Tesla, BYD → sfidano i gruppi tradizionali con un modello diverso

La rivalità inter-gruppo (es. BMW vs. Peugeot) è molto meno intensa perché si rivolgono a segmenti distinti.`
      },
      {
        question: 'Descrivi i **quattro tipi di rendite economiche** (Ricardiane, Monopolistiche, Schumpeteriane, di Influenza). Porta un esempio concreto per ciascuna. (max 10 righe)',
        weeks: [3],
        soluzione: `Le **rendite economiche** sono extra-profitti superiori al costo opportunità del capitale. Le quattro tipologie:

1. **Rendite Ricardiane** (Ricardo) — derivano da risorse scarse e di qualità superiore in offerta fissa (terra fertile, giacimenti minerari, location). *Esempio:* un vigneto nella Valpolicella DOC produce rendite perché il terreno è irriproducibile.

2. **Rendite Monopolistiche** — derivano da posizioni di monopolio o oligopolio che limitano la concorrenza. *Esempio:* un gestore di rete idrica in una città gode di monopolio naturale e può praticare prezzi sopra il costo marginale.

3. **Rendite Schumpeteriane** (Schumpeter) — derivano dall'innovazione radicale che crea temporaneo vantaggio di first-mover prima che i concorrenti imitino. *Esempio:* Apple con il primo iPhone (2007) ha goduto di rendite schumpeteriane finché Android non ha eroso la sua unicità.

4. **Rendite di Influenza** (rent-seeking) — derivano dalla capacità di plasmare le "regole del gioco" a proprio favore attraverso lobbying, regulatory capture e relazioni politiche. *Esempio:* grandi banche che ottengono normative prudenziali favorevoli dopo il proprio intervento regolatorio.

La distinzione è rilevante perché le strategie per crearle e difenderle sono profondamente diverse.`
      },
      {
        question: 'Spiega i **tre pilastri istituzionali di Scott** (2014) e come influenzano la struttura e il comportamento delle imprese. (max 10 righe)',
        weeks: [3],
        soluzione: `Scott (2014) identifica tre "pilastri" che stabilizzano le istituzioni e condizionano il comportamento organizzativo:

1. **Pilastro Regolatorio** — regole formali, leggi, sanzioni e meccanismi di enforcement dello Stato. Le imprese si conformano per *coercizione* (pena/sanzione). *Esempio:* una fabbrica rispetta i limiti di emissione perché altrimenti è multata dall'autorità ambientale.

2. **Pilastro Normativo** — norme sociali, valori professionali, aspettative morali. Le imprese si conformano per ottenere *legittimità sociale* e rispettare obblighi morali condivisi. *Esempio:* uno studio legale rispetta i codici deontologici della professione anche in assenza di controllo diretto.

3. **Pilastro Cognitivo** — schemi mentali condivisi, categorie di pensiero date per scontate, cultura. Le imprese si conformano perché certi comportamenti sono semplicemente "quello che si fa". *Esempio:* tutte le aziende di un settore adottano un certo formato contrattuale standard senza interrogarsi sul perché.

**Implicazione strategica:** un'impresa che entra in un nuovo mercato deve ottenere legittimità su tutti e tre i livelli. Violare anche un solo pilastro può generare stigma organizzativo (Hudson 2008) e perdita di accesso a risorse critiche.`
      },
      {
        question: 'Descrivi le **tre pressioni isomorfiche** di DiMaggio e Powell (1983). Quali effetti producono sulla diversità strategica delle imprese nello stesso settore? (max 10 righe)',
        weeks: [3],
        soluzione: `DiMaggio e Powell (1983) spiegano perché le organizzazioni nello stesso campo istituzionale tendono nel tempo a somigliarsi sempre di più (**isomorfismo**). Identificano tre meccanismi:

1. **Isomorfismo Coercitivo** — pressioni formali e informali esercitate da soggetti da cui l'organizzazione dipende (Stato, regolatori, clienti dominanti). *Esempio:* fornitori di una grande catena adottano i sistemi di rendicontazione ESG richiesti dalla corporate.

2. **Isomorfismo Mimetico** — imitazione di organizzazioni percepite come di successo in condizioni di incertezza. *Esempio:* molte startup hanno imitato la struttura flat e le OKR di Google, indipendentemente dal proprio contesto.

3. **Isomorfismo Normativo** — convergenza derivante dalla professionalizzazione: manager formati nelle stesse business school condividono modelli mentali e best practice. *Esempio:* l'adozione generalizzata del Business Model Canvas in contesti di startup.

**Effetti sulla diversità:** le tre pressioni producono convergenza dei comportamenti aziendali (strutture, sistemi, strategie) sacrificando spesso l'efficienza tecnica per la legittimità istituzionale. Il paradosso è che le stesse forze che promuovono legittimità riducono la differenziazione e potenzialmente le rendite. La sfida strategica è conformarsi abbastanza da essere legittime, ma differenziarsi abbastanza da generare vantaggio competitivo.`
      }
    ],
    esercizi: []
  },

  // ────────────────────────────────────────────────────────────
  // APERTE 2 — RBV, conoscenza e strategie competitive (W4, W5)
  // ────────────────────────────────────────────────────────────
  {
    id: 2,
    title: 'Aperte 2',
    subtitle: 'RBV, gestione della conoscenza e strategie competitive',
    duration: 40,
    multipleChoice: [],
    teoriaApplicata: [
      {
        question: 'Cos\'è la **Resource-Based View (RBV)**? Chi sono i suoi principali autori e in cosa si distingue dall\'Industry-Based View di Porter? (max 10 righe)',
        weeks: [4],
        soluzione: `La **Resource-Based View** (RBV) è una prospettiva teorica che individua l'origine del vantaggio competitivo nelle *risorse e competenze interne* all'impresa, anziché nelle caratteristiche strutturali del settore.

**Autori chiave:**
- **Penrose (1959)** — *Theory of the Growth of the Firm*: l'impresa come bundle di risorse produttive; la crescita dipende da risorse in eccesso
- **Wernerfelt (1984)** — conia l'etichetta "Resource-Based View"
- **Barney (1991)** — formalizza i criteri VRIO per identificare le fonti di vantaggio sostenibile

**Distinzione dall'Industry-Based View (IBV) di Porter:**

| Dimensione | IBV (Porter) | RBV (Barney) |
|---|---|---|
| Fonte del vantaggio | Struttura del settore, posizionamento | Risorse interne VRIO |
| Livello di analisi | Industria | Impresa |
| Flusso causale | Struttura → Strategia → Performance | Risorse → Capabilities → Vantaggio |
| Mobilità delle risorse | Assumibile sul mercato | Eterogeneità + immobilità |

La RBV spiega la *varianza di performance intra-settoriale*: imprese nello stesso settore con strutture simili ottengono risultati profondamente diversi.`
      },
      {
        question: 'Descrivi il framework **VRIO** di Barney (1991). Come si determinano gli esiti competitivi (vantaggio sostenibile, temporaneo, parità, svantaggio)? Fai un esempio. (max 10 righe)',
        weeks: [4],
        soluzione: `Il framework **VRIO** valuta quattro criteri di una risorsa o competenza per stabilirne l'impatto competitivo:

- **V**alue — la risorsa permette di sfruttare opportunità o neutralizzare minacce?
- **R**arity — è posseduta da pochi concorrenti o da uno solo?
- **I**mitability — è costosa da imitare o replicare (per path-dependency, ambiguità causale, complessità sociale)?
- **O**rganization — l'impresa è organizzata per catturarne il valore (strutture, processi, incentivi)?

**Esiti:**

| V | R | I | O | Implicazione competitiva |
|---|---|---|---|---|
| No | - | - | - | Svantaggio competitivo |
| Sì | No | - | - | Parità competitiva |
| Sì | Sì | No | - | Vantaggio temporaneo |
| Sì | Sì | Sì | No | Vantaggio inutilizzato |
| Sì | Sì | Sì | Sì | **Vantaggio competitivo sostenibile** |

**Esempio — Ferrari:** il brand heritage (V✓ R✓ I✓) e il network di dealer selezionati (O✓) generano un vantaggio competitivo sostenibile. Al contrario, i sistemi IT standard (V✓ R✗) garantiscono solo parità competitiva.`
      },
      {
        question: 'Spiega il modello **SECI** di Nonaka e Takeuchi per la creazione e conversione della conoscenza organizzativa. Perché è rilevante per la strategia? (max 10 righe)',
        weeks: [4],
        soluzione: `Il modello **SECI** (Nonaka & Takeuchi, 1995) descrive come la conoscenza viene creata e amplificata all'interno dell'organizzazione attraverso quattro modalità di conversione tra conoscenza **Tacita (T)** ed **Esplicita (E)**:

1. **Socializzazione (T → T)** — condivisione di conoscenza tacita per osservazione diretta, apprendistato, pratica condivisa. *Esempio:* un cuoco impara osservando il maestro, non leggendo ricette.

2. **Esternalizzazione (T → E)** — articolazione della conoscenza tacita in concetti espliciti (metafore, modelli, prototipi). *Esempio:* un ingegnere disegna il prototipo di un meccanismo prima mai documentato.

3. **Combinazione (E → E)** — sistematizzazione di conoscenze esplicite provenienti da più fonti. *Esempio:* creazione di un manuale procedurale integrando best practice di diversi reparti.

4. **Internalizzazione (E → T)** — assimilazione di conoscenza esplicita in tacita attraverso learning by doing. *Esempio:* l'addestramento su simulatori che diventa riflesso automatico.

Il ciclo SECI è a spirale: ogni giro amplifica e trasferisce la conoscenza da individuale → gruppo → organizzazione → inter-organizzazione. **Rilevanza strategica:** le imprese che gestiscono attivamente questo ciclo creano knowledge assets difficilmente imitabili, fonte di vantaggio competitivo sostenibile.`
      },
      {
        question: 'Cosa distingue la **conoscenza tacita** da quella **esplicita** (Polanyi)? Perché la conoscenza tacita è una fonte particolarmente robusta di vantaggio competitivo? (max 10 righe)',
        weeks: [4],
        soluzione: `**Polanyi (1966):** *"we know more than we can tell"* — questa intuizione fonda la distinzione tra i due tipi di conoscenza.

**Conoscenza Esplicita:**
- Codificabile, trasferibile via documenti, database, manuali
- Facile da replicare e acquistare sul mercato
- *Esempi:* brevetti, procedure scritte, dati di mercato, codice software

**Conoscenza Tacita:**
- Incorporata nell'esperienza personale, nel contesto, nei gesti
- Difficile da articolare e trasmettere senza interazione diretta
- Si trasferisce via socializzazione (mentoring, osservazione, pratica)
- *Esempi:* abilità artigianale, intuizione manageriale, cultura organizzativa, know-how di processo

**Perché è fonte di vantaggio sostenibile:**
- **Non trasferibile sul mercato** → i concorrenti non possono semplicemente comprarla
- **Ambiguità causale** → anche se un concorrente sa che esiste, non capisce come replicarla
- **Path-dependent** → si accumula nel tempo e richiede contesti specifici per svilupparsi
- **Socialmente complessa** → emerge da reti di relazioni che non si possono copiare

Secondo la RBV, è proprio l'inimitabilità della conoscenza tacita a renderla il nucleo del vantaggio competitivo sostenibile delle imprese knowledge-intensive.`
      },
      {
        question: 'Descrivi la piramide **DIKW** (Data, Information, Knowledge, Wisdom) e spiega come si collega alla gestione strategica della conoscenza organizzativa. (max 10 righe)',
        weeks: [4],
        soluzione: `La piramide **DIKW** (Ackoff 1989, ripresa da Rowley 2007) rappresenta una gerarchia di astrazione e valore:

| Livello | Descrizione | Domanda chiave |
|---|---|---|
| **Data** | Fatti grezzi, segnali, osservazioni non interpretate | "Cosa c'è?" |
| **Information** | Dati contestualizzati con significato | "Cosa significa?" |
| **Knowledge** | Informazioni integrate con esperienza e giudizio | "Come si usa?" |
| **Wisdom** | Conoscenza applicata con saggezza, giudizio etico, visione | "Perché farlo?" |

Ogni livello aggiunge valore ma anche complessità di gestione.

**Implicazioni strategiche:**
- **Big data** creano enorme volume di *Data*, ma il valore si crea solo trasformandoli in *Information* (analisi) → *Knowledge* (insight azionabili) → *Wisdom* (decisioni strategiche)
- Le imprese che gestiscono bene questa gerarchia (es. Amazon, Google) hanno un vantaggio informativo sostenibile
- Il livello *Wisdom* corrisponde alla conoscenza tacita dei top manager: difficile da codificare, impossibile da imitare
- La governance della conoscenza (knowledge management) deve operare su tutti e quattro i livelli per essere efficace`
      },
      {
        question: 'Analizza la **Catena del Valore di Porter**: elenca le attività primarie e quelle di supporto, e spiega come viene usata per identificare fonti di vantaggio competitivo. (max 10 righe)',
        weeks: [5],
        soluzione: `La **Catena del Valore** (Porter 1985) decompone l'impresa nelle sue attività strategicamente rilevanti per identificare le fonti di costo e di differenziazione.

**Attività Primarie (sequenza lineare):**
1. **Logistica in entrata** — ricevimento, stoccaggio e gestione input (materie prime, componenti)
2. **Operations** — trasformazione degli input in prodotto finito
3. **Logistica in uscita** — stoccaggio e distribuzione del prodotto
4. **Marketing & Vendite** — attività di comunicazione, pricing, canali
5. **Servizi post-vendita** — assistenza, manutenzione, ricondizionati

**Attività di Supporto (trasversali):**
- Infrastruttura aziendale (management, finanza, legale)
- Gestione delle Risorse Umane
- Sviluppo Tecnologico / R&D
- Approvvigionamenti (Procurement)

**Il Margine** è la differenza tra il valore percepito dal cliente e il costo totale delle attività.

**Utilizzo strategico:** si identificano le attività dove il costo è più alto rispetto al valore creato (ottimizzare o esternalizzare), quelle dove si può differenziare (investire), e i **link** tra attività che generano sinergie hard-to-replicate. Confrontare la propria value chain con quella dei concorrenti (benchmarking) rivela gap di efficienza e opportunità di differenziazione.`
      },
      {
        question: 'Descrivi le **tre strategie generiche di Porter** (Cost Leadership, Differenziazione, Focus). Spiega cosa si intende per "Stuck in the middle" e perché Porter lo considera una posizione perdente. (max 10 righe)',
        weeks: [5],
        soluzione: `Porter (1985) identifica tre posizionamenti strategici generici:

**1. Cost Leadership** — l'impresa produce a costi più bassi dei concorrenti, operando con un ampio ambito competitivo. Richiede: economie di scala, curva di esperienza, controllo rigoroso dei cost driver, standardizzazione. *Esempio:* Ryanair, IKEA, Amazon (logistica).

**2. Differenziazione** — l'impresa offre un prodotto/servizio percepito come unico per cui il cliente è disposto a pagare un premium price. Richiede: qualità superiore, brand, innovazione, servizi. *Esempio:* Apple, Ferrari, Nespresso.

**3. Focus** — l'impresa si concentra su un segmento ristretto (nicchia), applicando al suo interno la cost leadership o la differenziazione. *Esempio:* Rolls-Royce (focus differenziato nel lusso auto).

**"Stuck in the middle":** imprese che non riescono a scegliere con coerenza tra le strategie si trovano in una posizione ibrida: non abbastanza efficienti da battere i cost leader sul prezzo, non abbastanza differenziate da giustificare un premium. Per Porter è strutturalmente perdente: i competitor alle estremità le erodono da entrambi i lati. La scelta strategica richiede coerenza di tutte le attività della value chain con il posizionamento scelto.`
      },
      {
        question: 'Spiega i **cost driver** di Porter. Come un\'impresa che persegue la Cost Leadership può agire su di essi per ridurre strutturalmente i propri costi? (max 10 righe)',
        weeks: [5],
        soluzione: `Porter (1985) identifica nove **cost driver** che determinano il costo di ogni attività della value chain:

1. **Economie di scala** — il costo unitario decresce all'aumentare del volume
2. **Apprendimento e spillover** — la curva di esperienza riduce il costo con il volume cumulato
3. **Utilizzo della capacità produttiva** — alto utilizzo spalma i costi fissi su più unità
4. **Interrelazioni tra attività** — condivisione di risorse tra unità/prodotti genera scope economies
5. **Integrazione verticale** — fare in proprio vs acquistare, in funzione dei costi di transazione
6. **Timing** — first-mover advantage su approvvigionamenti, apprendimento
7. **Politiche discrezionali** — scelte di qualità, specifiche di prodotto, livelli di servizio
8. **Localizzazione geografica** — costi di manodopera, energia, logistica, tassazione locale
9. **Fattori istituzionali** — regolazioni, sussidi, union agreements

**Come agire:** un cost leader agisce sistematicamente su *tutti* i driver rilevanti. *Esempio McDonald's:* scala (migliaia di punti vendita), apprendimento (procedure standardizzate), alto utilizzo (rotazione clienti rapida), integrazione parziale (supply chain dedicata), localizzazione (headquarter fiscali ottimizzati). Il cost leadership non è una strategia di "taglio costi" tattico ma una scelta sistemica di design della value chain.`
      },
      {
        question: 'Quali sono i **quattro pilastri della differenziazione**? Spiega come ciascuno crea valore per il cliente e giustifica un premium price. Porta un esempio per ciascun pilastro. (max 10 righe)',
        weeks: [5],
        soluzione: `La differenziazione crea un'offerta percepita come unica dal cliente, che è disposto a pagare un premium price. Si articola in quattro pilastri:

**1. Prodotto** — caratteristiche, performance, qualità, design, affidabilità, durabilità. Il valore creato è la superiorità funzionale o estetica. *Esempio:* Dyson con l'aspirapolvere senza sacchetto brevettato.

**2. Servizio** — velocità di consegna, installazione, assistenza post-vendita, garanzie estese, personalizzazione. Il valore è la riduzione del rischio e dell'effort per il cliente. *Esempio:* Amazon Prime con consegna gratuita in 1 giorno e reso semplificato.

**3. Brand** — identità, valori, storia, reputazione, status symbol. Il valore è emotivo-simbolico, non puramente funzionale. *Esempio:* Rolex: il prezzo premium è quasi interamente brand equity, non superiorità tecnica.

**4. Personale** — competenze, cortesia, credibilità, affidabilità dei dipendenti a contatto col cliente. Cruciale nei servizi (7P). *Esempio:* Singapore Airlines, dove la formazione degli assistenti di volo è un asset strategico certificato.

**Condizione di sostenibilità:** il premium price ottenuto deve *superare* il costo extra della differenziazione e l'impresa deve mantenere *cost proximity* rispetto ai cost leader (Ghemawat), altrimenti il premium non bilancia gli extra-costi.`
      },
      {
        question: 'Spiega il concetto di **"Ba"** di Nonaka e come si collega ai quattro modi SECI. Perché creare spazi condivisi di interazione è fondamentale per l\'innovazione organizzativa? (max 10 righe)',
        weeks: [4],
        soluzione: `**Ba** (場, giapponese per "luogo/spazio condiviso") è il concetto introdotto da Nonaka & Konno (1998) per indicare la *piattaforma condivisa* — fisica, virtuale o mentale — in cui la conoscenza viene creata. Il Ba non è uno spazio neutro: è un contesto attivo che abilita le interazioni che trasformano la conoscenza.

**Quattro tipi di Ba, uno per ciascun modo SECI:**

1. **Originating Ba** (Socializzazione T→T) — interazione faccia a faccia, fiducia, empatia: *uffici open space, meeting informali, caffè aziendali*
2. **Dialoguing Ba** (Esternalizzazione T→E) — dialogo strutturato per articolare modelli mentali: *workshop di design thinking, brainstorming*
3. **Systemizing Ba** (Combinazione E→E) — condivisione e organizzazione di conoscenza esplicita: *intranet, database, virtual team*
4. **Exercising Ba** (Internalizzazione E→T) — applicazione pratica di conoscenza codificata: *training on the job, simulatori*

**Perché è fondamentale:** senza Ba, la conoscenza rimane frammentata e individuale. Il Ba *abilita il ciclo SECI* fornendo il contesto relazionale e psicologico necessario. Imprese innovative come Toyota, Google, 3M hanno progettato deliberatamente spazi fisici e digitali (Ba) per catalizzare la creazione di conoscenza collettiva — un asset strategico inimitabile.`
      }
    ],
    esercizi: []
  },

  // ────────────────────────────────────────────────────────────
  // APERTE 3 — Sostenibilità, BMC e marketing (W6, W12)
  // ────────────────────────────────────────────────────────────
  {
    id: 3,
    title: 'Aperte 3',
    subtitle: 'Sostenibilità, business model e marketing',
    duration: 40,
    multipleChoice: [],
    teoriaApplicata: [
      {
        question: 'Descrivi la **Piramide della CSR di Carroll** (1991). Quali sono i quattro livelli e come si relazionano tra loro? Come si differenzia dalla visione di Friedman? (max 10 righe)',
        weeks: [6],
        soluzione: `Carroll (1991) propone una **piramide a quattro livelli** per classificare le responsabilità d'impresa, dalla più fondamentale alla più volontaria:

**Dal basso verso l'alto:**

1. **Responsabilità Economica** (base) — essere profittevole è il prerequisito: senza reddito l'impresa non esiste e non può assolvere nessun'altra responsabilità. *"Be profitable."*

2. **Responsabilità Legale** — rispettare le leggi e le regolazioni dello Stato, il "codificato dell'etica". *"Obey the law."*

3. **Responsabilità Etica** — agire eticamente anche al di là di quanto imposto dalla legge: onestà, fairness, rispetto delle aspettative sociali. *"Be ethical."*

4. **Responsabilità Filantropica** (vertice) — contribuire attivamente al benessere della comunità: donazioni, volontariato, sponsorizzazioni. *"Be a good corporate citizen."*

**Relazione tra livelli:** i livelli inferiori abilitano quelli superiori. Un'impresa in perdita non può filantropia; un'impresa criminale non può essere "etica".

**Differenza da Friedman (1970):** Friedman sostiene che l'unica responsabilità sociale dell'impresa è massimizzare il profitto per gli azionisti, rispettando le regole del gioco. Carroll va oltre: riconosce responsabilità etiche e filantropiche legittime, prefigurando il modello stakeholder e la successiva CSR strategica di Porter.`
      },
      {
        question: 'Distingui il **Creating Shared Value (CSV)** di Porter e Kramer (2011) dalla CSR tradizionale. In quali tre modi un\'impresa può creare valore condiviso? Porta un esempio concreto. (max 10 righe)',
        weeks: [6],
        soluzione: `**CSV (Porter & Kramer, 2011)** ridefinisce il rapporto tra business e società: il valore economico e quello sociale non solo sono compatibili, ma possono essere *co-generati* attraverso la stessa attività d'impresa.

**CSR vs CSV:**

| | **CSR tradizionale** | **CSV** |
|---|---|---|
| Logica | Filantropia, "riparare" danni | Innovazione e opportunità di business |
| Valore creato | Branding, licenza operativa | Profitto + impatto sociale |
| Relazione con core business | Periferica | Integrata nella strategia |
| Metriche | Budget donazioni | Impatto sociale + ROI |

**Tre modalità di CSV:**

1. **Riconfigurare prodotti e mercati** — servire bisogni sociali irrisolti come nuovi mercati. *Esempio:* Danone con yogurt nutrienti a basso costo per mercati emergenti (nutricia).
2. **Ridefinire la produttività nella value chain** — ridurre esternalità negative genera risparmio. *Esempio:* Walmart riducendo emballaggi e CO₂ nella logistica ha ridotto costi e impatto.
3. **Sviluppare cluster locali** — rafforzare l'ecosistema locale (fornitori, istituzioni, infrastrutture) aumenta la produttività dell'impresa. *Esempio:* Nestlé con programmi di supporto ai coltivatori di caffè in Etiopia.`
      },
      {
        question: 'Spiega il **Business Model Canvas** di Osterwalder (9 blocchi). Descrivili brevemente e illustra la logica interna del modello. (max 10 righe)',
        weeks: [6],
        soluzione: `Il **Business Model Canvas** (Osterwalder & Pigneur, 2010) è uno strumento visuale per descrivere, analizzare e progettare modelli di business su un'unica pagina. Si articola in **9 blocchi** suddivisi in due metà:

**Lato Sinistro (come creiamo valore — costi):**
- **Key Partners** — chi ci aiuta (fornitori, alleati, outsourcer)
- **Key Activities** — cosa facciamo di cruciale
- **Key Resources** — asset fondamentali (fisici, umani, intellettuali, finanziari)

**Centro (cosa offriamo):**
- **Value Propositions** — i pacchetti di valore per ciascun segmento di clienti

**Lato Destro (per chi e come — ricavi):**
- **Customer Segments** — chi serviamo (mass market, niche, multi-sided)
- **Channels** — come raggiungiamo i clienti (fisico, digitale, partner)
- **Customer Relationships** — tipo di relazione (self-service, assistito, community)
- **Revenue Streams** — come guadagniamo (vendita, abbonamento, licensing, freemium)

**Lato Inferiore (economia del modello):**
- **Cost Structure** — costi principali (fissi, variabili, scala, scopo)

**Logica:** la Value Proposition è il centro di gravità; i blocchi sinistri descrivono come la creiamo, quelli destri come la consegnamo e monetizziamo. La coerenza interna tra i 9 blocchi determina la solidità e difendibilità del business model.`
      },
      {
        question: 'Cos\'è il **greenwashing**? Descrivi i "7 peccati del greenwashing" di TerraChoice e spiega le conseguenze legali e reputazionali per le imprese. (max 10 righe)',
        weeks: [6],
        soluzione: `Il **greenwashing** consiste nel comunicare in modo ingannevole la sostenibilità ambientale di prodotti, servizi o organizzazioni, creando una percezione "green" non supportata da evidenze concrete.

**I 7 peccati di TerraChoice (2010):**
1. **Hidden Trade-off** — enfatizzare un attributo green ignorando altri impatti rilevanti (*es. carta riciclata sbiancata con cloro*)
2. **No Proof** — claim ambientali non supportati da dati o certificazioni verificabili
3. **Vagueness** — affermazioni generiche e imprecise ("eco-friendly", "naturale", "verde")
4. **False Labels** — loghi o etichette che simulano certificazioni di terze parti inesistenti
5. **Irrelevance** — sottolineare attributi veri ma irrilevanti (*es. "senza CFC" su un prodotto dove i CFC sono già vietati*)
6. **Lesser of Two Evils** — promuovere un prodotto come "il meno dannoso" in una categoria intrinsecamente nociva (*es. sigarette biologiche*)
7. **Fibbing** — false dichiarazioni dirette (es. certificazioni false)

**Conseguenze:**
- **Legali:** il caso AGCM–Eni (2020, multa €5 mln per il claim "Diesel+ green") e la Direttiva UE 2024/825 vietano claim ambientali generici non sostanziati
- **Reputazionali:** perdita di fiducia dei consumatori, activist targeting, media scandal
- **Finanziarie:** disinvestimento ESG, downgrading rating di sostenibilità`
      },
      {
        question: 'Descrivi l\'**economia circolare** secondo il framework di Ellen MacArthur Foundation. Spiega la gerarchia delle "9R" e come si differenzia dall\'approccio lineare "take-make-waste". (max 10 righe)',
        weeks: [6],
        soluzione: `L'**economia lineare** tradizionale segue il modello *"take-make-waste"*: estrai risorse → produci → usa → smaltisci. È insostenibile perché esaurisce risorse e genera rifiuti.

L'**economia circolare** (Ellen MacArthur Foundation) mantiene materiali, prodotti e componenti al massimo valore il più a lungo possibile, eliminando il concetto di "scarto".

**Le 9R in ordine gerarchico** (dall'impatto più basso al più alto):

| Priorità | R | Azione |
|---|---|---|
| ↑ Massima | R0 Refuse | Non produrre ciò che non serve |
| | R1 Rethink | Riprogettare per uso intensivo |
| | R2 Reduce | Ridurre l'uso di materiali/energia |
| | R3 Reuse | Riusare il prodotto senza trasformazione |
| | R4 Repair | Riparare per estendere la vita |
| | R5 Refurbish | Rinnovare e aggiornare |
| | R6 Remanufacture | Rimanifatturare con parti usate |
| | R7 Repurpose | Usare in un contesto diverso |
| | R8 Recycle | Recuperare materiali |
| ↓ Minima | R9 Recover | Recupero energetico da smaltimento |

Le prime R sono preferibili perché mantengono valore intrinseco; il riciclo (R8) è preferibile al solo recupero energetico (R9) ma resta l'ultima opzione. **Implicazione strategica:** le imprese circolari preferiscono modelli di servitization, leasing, product-as-a-service.`
      },
      {
        question: 'Spiega il processo **STP** nel marketing: Segmentation, Targeting, Positioning. Quali sono i principali criteri di segmentazione del mercato consumer? (max 10 righe)',
        weeks: [12],
        soluzione: `L'**STP** è il processo strategico di base del marketing (Kotler):

**1. Segmentation** — suddivisione del mercato totale in gruppi omogenei di consumatori con bisogni, caratteristiche o comportamenti simili.

*Criteri di segmentazione consumer:*
- **Geografici** — paese, regione, clima, densità urbana
- **Demografici** — età, genere, reddito, istruzione, ciclo di vita famigliare
- **Psicografici** — stile di vita, valori, personalità (es. VALS framework)
- **Comportamentali** — frequenza d'uso, fedeltà al brand, benefici cercati, status d'uso (non-user, ex-user, potential)

**2. Targeting** — selezione del/dei segmenti da servire, valutando:
- Dimensione e crescita del segmento
- Attrattività strutturale (5 forze)
- Compatibilità con le risorse e obiettivi aziendali
Strategie: *undifferentiated* (mass marketing), *differentiated* (segmenti multipli), *concentrated* (nicchia), *micromarketing*.

**3. Positioning** — costruzione di un'immagine distintiva nella mente del consumatore target rispetto ai concorrenti. Si articola in: *choosing a value proposition* (a chi, cosa, come) e *comunicazione coerente* su tutti i touchpoint.

*Strumento:* la **mappa percettiva** (perceptual map) visualizza il posizionamento relativo dei brand su due dimensioni rilevanti per il target.`
      },
      {
        question: 'Descrivi il **Marketing Mix**: dalle 4P (McCarthy) alle 7P (Booms e Bitner). Perché le 3P aggiuntive sono necessarie per i servizi? (max 10 righe)',
        weeks: [12],
        soluzione: `**Le 4P di McCarthy (1960)** — il marketing mix classico per beni tangibili:

1. **Product** — caratteristiche, qualità, design, gamma, brand, packaging
2. **Price** — listino, sconti, condizioni di pagamento, politica di pricing
3. **Place** — canali di distribuzione, copertura, logistica, punti vendita
4. **Promotion** — advertising, PR, promozioni, direct marketing, digital

**Le 7P di Booms & Bitner (1981)** — estensione per i servizi, che aggiunge:

5. **People** — tutto il personale a contatto col cliente; in un servizio le persone *sono* parte del prodotto (es. un medico, un insegnante)
6. **Process** — procedure, flussi di erogazione, sistemi di booking e delivery; il processo è visibile al cliente e ne determina la soddisfazione
7. **Physical Evidence** — tutto l'ambiente fisico (e digitale) che supporta l'erogazione: arredamento, uniformi, sito web; aiuta a tangibilizzare l'intangibile

**Perché necessarie per i servizi:** i servizi sono caratterizzati da **intangibilità** (non si possono toccare prima dell'acquisto), **inseparabilità** produzione/consumo, **eterogeneità** (ogni erogazione è diversa), **deperibilità** (non stockabili). Le 3P aggiuntive gestiscono proprio queste peculiarità che le 4P originali non catturano.`
      },
      {
        question: 'Descrivi le **5 componenti del Brand Equity** secondo il modello di Aaker (1991). Come il brand equity si traduce in valore economico per l\'impresa? (max 10 righe)',
        weeks: [12],
        soluzione: `Il **Brand Equity** (Aaker 1991) è il valore aggiunto che un brand conferisce a un prodotto/servizio rispetto a un equivalente senza marca. Si compone di cinque asset:

1. **Brand Awareness** — livello di notorietà nella mente del consumatore (dal non-aware al top-of-mind). Misura: awareness spontanea, aided awareness, top-of-mind.

2. **Brand Loyalty** — fedeltà dei clienti: riduce i costi di marketing (ritention più economica dell'acquisition), crea barriere all'entrata, genera flussi di cassa stabili.

3. **Perceived Quality** — qualità percepita (non necessariamente oggettiva): giustifica premium price, facilita l'estensione di brand.

4. **Brand Associations** — insieme di immagini, emozioni, valori e attributi che il consumatore associa al brand. Costruiscono il positioning.

5. **Other Proprietary Brand Assets** — brevetti, marchi registrati, relazioni di canale esclusive.

**Come si traduce in valore economico:**
- **Premium price** — il cliente paga di più per lo stesso prodotto con brand forte (es. Coca-Cola vs. cola generica)
- **Maggiori volumi** — la fedeltà e la notorietà attraggono nuovi clienti
- **Costi di marketing inferiori** — brand forti richiedono meno spesa per mantenere la quota
- **Estensioni di brand** — un brand forte riduce il rischio di lancio di nuovi prodotti (es. Apple che estende da computer a smartphone, a wearable)
- **Potere negoziale** — verso la distribuzione (retailer preferiscono brand forti)`
      },
      {
        question: 'Spiega il modello **Customer Journey "5A"** di Kotler (Marketing 4.0). Come si differenzia dal vecchio modello AIDA e quali implicazioni ha per la strategia digitale? (max 10 righe)',
        weeks: [12],
        soluzione: `Kotler (2017, *Marketing 4.0*) sostituisce il classico AIDA con il modello **5A** per l'era della connettività:

| Fase | Descrizione | Touchpoint tipico |
|---|---|---|
| **Aware** | Il cliente scopre il brand (spesso passivamente) | Social media, passaparola, ADV |
| **Appeal** | Il brand entra nel consideration set; scatta un interesse | SEO, content marketing |
| **Ask** | Il cliente cerca attivamente informazioni, chiede al network | Review online, influencer, chatbot |
| **Act** | L'acquisto (online o offline) e la prima esperienza d'uso | E-commerce, store, app |
| **Advocate** | Il cliente soddisfatto diventa promotore attivo | UGC, recensioni, NPS, referral |

**Differenze da AIDA:** AIDA (Attention → Interest → Desire → Action) era lineare e unidirezionale; le 5A riconoscono che:
- Il percorso non è lineare: si può passare da *Aware* direttamente ad *Act* (grazie a raccomandazioni del network)
- La fase *Ask* è critica nell'era digitale: le review e i peer hanno più peso della pubblicità tradizionale
- La fase *Advocate* è un motore di crescita (loop): i promotori alimentano la *Aware* di nuovi clienti

**Implicazione:** le imprese devono ottimizzare i touchpoint digitali (SEO, review management, loyalty program) in ogni fase, misurando la conversione tra le 5A.`
      },
      {
        question: 'Spiega cosa sono il **Net Promoter Score (NPS)** e il **Customer Lifetime Value (CLV)**. Come si calcolano e come vengono usati nelle decisioni di marketing? (max 10 righe)',
        weeks: [12],
        soluzione: `**Net Promoter Score (NPS)** (Reichheld & Satell, 2003) misura la propensione dei clienti a raccomandare l'impresa su una scala 0-10:
- **Promotori** (9-10): clienti fedeli che promuovono attivamente
- **Passivi** (7-8): soddisfatti ma vulnerabili alla concorrenza
- **Detrattori** (0-6): insoddisfatti, possono danneggiare il brand

**Calcolo:** NPS = %Promotori − %Detrattori (range: −100 a +100)

Valori di riferimento: <0 critico, 0-30 buono, 30-70 ottimo, >70 eccellente.

**Customer Lifetime Value (CLV)** misura il valore totale attualizzato che un cliente genera nel corso dell'intera relazione:

**Formula semplificata:**
CLV = (Ricavo medio annuo × Margine lordo) / (1 + tasso di sconto − tasso di ritenzione)

**Uso nelle decisioni:**
- **NPS** → proxy della qualità dell'esperienza; driver delle iniziative di customer experience; confronto con benchmark di settore
- **CLV** → decide quanto spendere per acquisire un cliente (CAC ≤ CLV), quali segmenti prioritizzare, se offrire programmi di loyalty
- **Rapporto CLV/CAC > 3** → indicatore di salute del business; se <1 il modello è in perdita

Entrambi gli indicatori spostano il focus dal fatturato spot al valore di lungo periodo della base clienti.`
      }
    ],
    esercizi: []
  },

  // ────────────────────────────────────────────────────────────
  // APERTE 4 — Corporate strategy e design organizzativo (W8, W9)
  // ────────────────────────────────────────────────────────────
  {
    id: 4,
    title: 'Aperte 4',
    subtitle: 'Corporate strategy, sinergie e design organizzativo',
    duration: 40,
    multipleChoice: [],
    teoriaApplicata: [
      {
        question: 'Descrivi la **matrice BCG** (Boston Consulting Group). Elenca i quattro quadranti, le strategie consigliate per ciascuno e i limiti del modello. (max 10 righe)',
        weeks: [8],
        soluzione: `La **matrice BCG** (1970) è uno strumento di portfolio management che classifica le business unit (SBU) su due assi:
- **Asse Y:** tasso di crescita del mercato (proxy dell'attrattività)
- **Asse X:** quota di mercato relativa (proxy del vantaggio competitivo; >1 significa quota > del principale concorrente)

**Quattro quadranti:**

| Quadrante | Crescita | Quota | Cash flow | Strategia |
|---|---|---|---|---|
| **Stars** (stelle) | Alta | Alta | Equilibrato | Investire per mantenere leadership |
| **Cash Cows** (mucche) | Bassa | Alta | Positivo (cash generator) | Mungere per finanziare Stars/QM |
| **Question Marks** | Alta | Bassa | Negativo (cash user) | Investire selettivamente o dismettere |
| **Dogs** (cani) | Bassa | Bassa | Equilibrato o negativo | Disinvestire o mantenere se break-even |

**Logica del portfolio:** i Cash Cows finanziano Stars e Question Marks selezionati; i Dogs si liquidano.

**Limiti:**
- Solo due dimensioni (semplificazione eccessiva)
- Ignora le sinergie tra SBU
- La quota relativa non è sempre buona proxy del vantaggio competitivo
- Visione statica (non cattura la dinamica competitiva)
- Il concetto di "mucca" può portare a sotto-investimento in business maturi profittevoli`
      },
      {
        question: 'Spiega la **teoria dei costi di transazione** di Williamson. Come influenza le decisioni di **Make or Buy** (integrazione verticale vs esternalizzazione)? (max 10 righe)',
        weeks: [8],
        soluzione: `La **Transaction Cost Theory** (Williamson 1975, 1985) afferma che le imprese scelgono tra produrre internamente (gerarchia) e acquistare sul mercato minimizzando i *costi di transazione* — costi di ricerca, negoziazione, monitoraggio, enforcement dei contratti.

**Determinanti dei costi di transazione:**

1. **Specificità degli asset** — più un asset è specifico per quella transazione, maggiore il rischio di *hold-up* (il fornitore sfrutta la dipendenza)
2. **Frequenza** — transazioni rare giustificano meno gli investimenti in strutture interne
3. **Incertezza** — alta incertezza rende difficile scrivere contratti completi; meglio la gerarchia
4. **Opportunismo** — i partner possono agire in modo opportunistico (asimmetria informativa)

**Regola di decisione:**

| Condizione | Scelta ottimale |
|---|---|
| Alta specificità + alta frequenza + alta incertezza | **Make** (integrare verticalmente) |
| Bassa specificità + bassa frequenza | **Buy** (mercato) |
| Situazione intermedia | **Ibrido** (contratti a lungo termine, JV, franchising) |

**Esempio:** Toyota mantiene internamente la produzione di componenti specifici del motore (alta specificità), ma esternalizza sedi, pulizie e IT standard (bassa specificità).`
      },
      {
        question: 'Descrivi il **paradigma OLI di Dunning** (1977) per le multinazionali. Come aiuta a spiegare la scelta tra esportazione, licensing e investimento diretto estero (FDI)? (max 10 righe)',
        weeks: [8],
        soluzione: `Il paradigma **OLI** (Dunning 1977, "Eclectic Theory") spiega perché e come le imprese si internazionalizzano attraverso tre vantaggi:

1. **O — Ownership advantages** (vantaggi di proprietà) — asset esclusivi dell'impresa trasferibili all'estero: brand, tecnologia, brevetti, know-how, economie di scala. *"Cosa possiedo che i competitor locali non hanno?"*

2. **L — Location advantages** (vantaggi localizzativi) — caratteristiche del paese ospite che rendono conveniente produrre lì anziché esportare: costo del lavoro, mercato locale, incentivi, materie prime, infrastrutture. *"Perché produrre lì?"*

3. **I — Internalization advantages** (vantaggi di internalizzazione) — benefici di fare in proprio anziché cedere il vantaggio di proprietà a partner locali (licensing): controllo qualità, protezione IP, riduzione rischio opportunismo. *"Perché non cedere in licenza?"*

**Matrice decisionale OLI:**

| O | L | I | Modalità |
|---|---|---|---|
| Sì | No | - | **Esportazione** (produco in casa, vendo all'estero) |
| Sì | Sì | No | **Licensing/Franchising** (cedo il vantaggio a partner locali) |
| Sì | Sì | Sì | **FDI** (investimento diretto, filiale propria) |

**Esempio:** McDonald's ha vantaggi O (brand, sistemi), L (mercati in crescita) e I (controllo qualità dei punti vendita) → FDI via franchising controllato.`
      },
      {
        question: 'Distingui la **diversificazione correlata** da quella **conglomerata**. Cosa indicano gli studi di Rumelt (1974) sulla loro profittabilità relativa? Spiega il concetto di "curva a U rovesciata". (max 10 righe)',
        weeks: [8],
        soluzione: `**Diversificazione Correlata:** l'impresa si espande in business che condividono risorse, tecnologie, competenze o mercati con il core business esistente. Le sinergie operative sono la fonte di valore.
- *Esempio:* Apple che dall'iPhone si è estesa a AirPods, Apple Watch, Apple TV — tutti ruotano attorno all'ecosistema digitale condiviso.

**Diversificazione Conglomerata:** l'impresa entra in business non correlati, con sinergie solo finanziarie (allocazione del capitale, riduzione del rischio finanziario).
- *Esempio:* General Electric nei suoi anni d'oro (aeromotori + finanza + media + elettrodomestici).

**Studi di Rumelt (1974):** analizzando le 500 Fortune company Rumelt trovò che le imprese a **diversificazione correlata moderata** ("related-constrained") mostravano le performance più alte; quelle conglomerate le più basse.

**Curva a U rovesciata (Palich et al. 2000):** la relazione tra diversificazione e performance non è lineare:
- **Poca diversificazione** (focalizzazione): alta profittabilità ma rischio concentrato
- **Diversificazione correlata moderata**: picco di performance grazie a sinergie operative
- **Diversificazione elevata/conglomerata**: performance decrescenti per eccesso di complessità manageriale, costi di coordinamento e perdita di focus

La lezione strategica è che la diversificazione aggiunge valore solo se genera sinergie reali superiori ai costi organizzativi di gestirla.`
      },
      {
        question: 'Spiega i due tipi di **integrazione verticale** (a monte e a valle) con i rispettivi vantaggi e rischi. Porta un esempio per ciascuna. (max 10 righe)',
        weeks: [8],
        soluzione: `**Integrazione Verticale** consiste nell'espandere le attività dell'impresa lungo la filiera produttiva, riducendo la dipendenza da partner esterni.

**Integrazione a monte (Backward Integration):**
L'impresa acquisisce o sviluppa internamente attività dei fornitori (risalendo verso le materie prime).
- *Esempio:* Tesla che produce internamente le batterie (Gigafactory) per non dipendere da fornitori terzi.
- **Vantaggi:** controllo qualità/costo delle materie prime, riduzione costi di transazione, sicurezza di fornitura
- **Rischi:** perdita di flessibilità (il fornitore esterno può servire molti clienti, l'attività interna dipende solo dall'impresa), riduzione economie di scala del fornitore

**Integrazione a valle (Forward Integration):**
L'impresa acquisisce o sviluppa internamente attività dei distributori/retailer (scendendo verso il cliente finale).
- *Esempio:* Luxottica (Essilor) che oltre a produrre occhiali possiede LensCrafters, Sunglass Hut e Salmoiraghi & Viganò.
- **Vantaggi:** controllo dell'esperienza cliente e del posizionamento, margini retail, dati sul comportamento d'acquisto
- **Rischi:** alto investimento fisso (negozi), necessità di competenze di retail management molto diverse dalla produzione

**Trade-off generale:** l'integrazione verticale riduce i costi di transazione ma aumenta i costi fissi e la rigidità strategica; va valutata con la TCT di Williamson.`
      },
      {
        question: 'Descrivi le **cinque configurazioni organizzative di Mintzberg**. Quali sono le caratteristiche principali di ciascuna e in quale contesto competitivo è più adatta? (max 10 righe)',
        weeks: [9],
        soluzione: `Mintzberg (1979, *The Structuring of Organizations*) identifica cinque configurazioni organizzative ideali, ognuna con un diverso meccanismo di coordinamento predominante:

| Configurazione | Meccanismo di coordinamento | Parte chiave | Contesto tipico |
|---|---|---|---|
| **1. Struttura Semplice** | Supervisione diretta | Vertice strategico | Startup, PMI familiari, imprenditore unico |
| **2. Burocrazia Meccanica** | Standardizzazione dei processi | Tecnostruttura | Produzione di massa, settori maturi, catene fast-food |
| **3. Burocrazia Professionale** | Standardizzazione delle competenze | Nucleo operativo | Ospedali, università, studi legali, consulenza |
| **4. Forma Divisionale** | Standardizzazione degli output | Middle line | Grandi gruppi multi-business, multinazionali |
| **5. Adhocrazia** | Adattamento reciproco | Staff di supporto | Innovazione, progetti complessi, agenzie creative |

**Meccanismi di coordinamento** (comuni a tutte): supervisione diretta, standardizzazione dei processi, output, competenze, norme. All'aumentare della complessità, il coordinamento si sposta verso l'adattamento reciproco.

**Nota:** Mintzberg ha successivamente aggiunto la **Missionaria** (coordinata da standardizzazione delle norme, es. ONG) e la **Politica** (nessun meccanismo dominante, pura politica interna).`
      },
      {
        question: 'Spiega i concetti di **Span of Control** e **centralizzazione/decentralizzazione**. Quali fattori determinano la scelta ottimale? (max 10 righe)',
        weeks: [9],
        soluzione: `**Span of Control** (ampiezza del controllo manageriale) indica il numero di subordinati diretti che un manager può supervisionare efficacemente.

- **Span ampio** (6-15+ persone) → **struttura piatta** (pochi livelli gerarchici): riduce costi manageriali, aumenta autonomia e responsabilizzazione dei dipendenti, comunicazione più veloce. *Rischio:* sovraccarico del manager, coordinamento difficile.
- **Span stretto** (2-5 persone) → **struttura alta** (molti livelli): supervisione capillare, controllo preciso. *Rischio:* costi gestionali elevati, lentezza decisionale, demotivazione per micro-management.

**Fattori che permettono span più ampie:**
- Lavoro routinario e standardizzato (meno bisogno di supervisione)
- Alta formazione/professionalità dei dipendenti
- Buoni sistemi informativi (reporting automatizzato)
- Task fisicamente collocate vicine

**Centralizzazione vs Decentralizzazione:**
- **Centralizzazione:** le decisioni vengono prese ai livelli apicali → controllo, coerenza, economie di scala nelle decisioni
- **Decentralizzazione:** delega ai livelli inferiori → reattività locale, motivazione, specializzazione

**Trend attuale:** la digitalizzazione e l'intelligenza artificiale stanno aumentando gli span of control (meno middle management) e favorendo la decentralizzazione operativa mantenendo il controllo strategico centralizzato.`
      },
      {
        question: 'Descrivi le **fasi del ciclo di gestione delle Risorse Umane (HR cycle)**: quali sono e quali strumenti si usano in ciascuna? (max 10 righe)',
        weeks: [9],
        soluzione: `Il **ciclo HR** descrive il percorso completo di gestione del capitale umano dall'ingresso all'uscita:

**1. Pianificazione del personale (Workforce Planning)** — analisi del fabbisogno futuro (gap tra competenze disponibili e necessarie). *Strumenti:* succession planning, skills matrix, scenario planning.

**2. Reclutamento** — attrazione di candidati qualificati. *Strumenti:* employer branding, job posting, LinkedIn, campus recruiting, headhunting.

**3. Selezione** — identificazione dei candidati più adatti. *Strumenti:* colloqui strutturati, assessment center, test attitudinali, background check.

**4. Onboarding e Formazione** — integrazione e sviluppo competenze. *Strumenti:* programmi di induction, e-learning, mentoring, job rotation, academy interne.

**5. Valutazione della Performance** — misurazione dei risultati rispetto a obiettivi. *Strumenti:* MBO (Management By Objectives, Drucker), feedback 360°, OKR (Objectives and Key Results).

**6. Compensation & Benefits** — remunerazione e incentivi. *Strumenti:* total reward package, bonus variabile, equity, welfare aziendale.

**7. Sviluppo della carriera** — percorsi di crescita e mobilità interna. *Strumenti:* development centre, talent pool, individual development plan (IDP).

**8. Uscita (Offboarding/Outplacement)** — gestione delle separazioni in modo professionale per mantenere employer brand.`
      },
      {
        question: 'Distingui **Exploration** e **Exploitation** secondo March (1991). Cosa si intende per "ambidexterity organizzativa" e perché è difficile da realizzare? (max 10 righe)',
        weeks: [9],
        soluzione: `March (1991) identifica due modalità fondamentali di apprendimento e allocazione delle risorse organizzative:

**Exploitation** (sfruttamento):
- Usa e ottimizza risorse e competenze esistenti
- Benefici vicini, certi e prevedibili (ROI breve termine)
- Riduce varianza, massimizza efficienza
- *Esempi:* miglioramento continuo dei processi (kaizen), aggiornamenti incrementali di prodotto

**Exploration** (esplorazione):
- Ricerca di nuove opportunità, tecnologie, mercati
- Benefici distanti, incerti e ad alta varianza
- Richiede sperimentazione, tolleranza per il fallimento
- *Esempi:* R&D radicale, innovazione disruptive, nuovi mercati

**Il paradosso di March:** la pressione competitiva di breve termine spinge le imprese verso l'exploitation, che però impoverisce le capacità future. Le imprese che scelgono solo exploitation rischiano la *competency trap*; quelle che scelgono solo exploration falliscono prima di raccogliere i frutti.

**Ambidexterity organizzativa:** capacità di fare *entrambe* contemporaneamente. Due approcci:
1. **Structural ambidexterity** — unità separate per exploration (laboratori, spin-off) e exploitation (core business)
2. **Contextual ambidexterity** — singoli manager che allocano il proprio tempo tra le due modalità

**Difficoltà:** richiedono culture, processi e metriche opposte; spesso si creano conflitti di risorse e priorità tra le due unità.`
      },
      {
        question: 'Descrivi la **Balanced Scorecard (BSC)** di Kaplan e Norton. Quali sono le quattro prospettive e come si collegano attraverso la mappa strategica? (max 10 righe)',
        weeks: [9],
        soluzione: `La **Balanced Scorecard** (Kaplan & Norton, 1992) è un sistema di misurazione e gestione strategica che traduce la visione e la strategia in obiettivi, misure, target e iniziative lungo **quattro prospettive** equilibrate:

1. **Prospettiva Finanziaria** — come appariamo agli azionisti? *Indicatori:* ROE, ROI, EBITDA, fatturato, cash flow, EVA.

2. **Prospettiva Cliente** — come appariamo ai clienti? *Indicatori:* soddisfazione, NPS, quota di mercato, retention, CLV, time-to-delivery.

3. **Prospettiva dei Processi Interni** — in quali processi dobbiamo eccellere? *Indicatori:* produttività, qualità (difetti, resi), cycle time, innovation rate, compliance.

4. **Prospettiva Apprendimento e Crescita** — come sosteniamo la capacità di cambiare e migliorare? *Indicatori:* employee satisfaction, training ore, skill coverage, turnover, knowledge management.

**La Strategy Map:** le quattro prospettive sono collegate da relazioni di causa-effetto ascendenti:
- Apprendimento & Crescita → migliorano i Processi interni
- Processi eccellenti → creano valore per il Cliente
- Cliente soddisfatto → genera risultati Finanziari

**Valore del modello:** supera i limiti del controllo di gestione puramente finanziario (lagging indicators), integrando indicatori leading (processi, HR, clienti) che anticipano la performance futura. È la base per il collegamento tra strategia e esecuzione operativa.`
      }
    ],
    esercizi: []
  },

  // ────────────────────────────────────────────────────────────
  // APERTE 5 — Operations, lean management e innovazione (W10, W11)
  // ────────────────────────────────────────────────────────────
  {
    id: 5,
    title: 'Aperte 5',
    subtitle: 'Operations, lean management e innovazione',
    duration: 40,
    multipleChoice: [],
    teoriaApplicata: [
      {
        question: 'Spiega i **7 muda (sprechi)** della Lean Production e come il Toyota Production System (TPS) li affronta sistematicamente. (max 10 righe)',
        weeks: [10],
        soluzione: `**Muda** (無駄, giapponese per "spreco") è qualsiasi attività che consuma risorse senza creare valore per il cliente. Ohno identificò **7 muda** nel TPS:

1. **Sovrapproduzione** — produrre più del necessario o prima del necessario (il peggior muda: genera tutti gli altri). *Rimedio:* produzione pull, kanban.

2. **Attese** — tempo inattivo di persone o macchinari per mancanza di materiali, informazioni o approvazioni. *Rimedio:* bilanciamento linee, riduzione setup.

3. **Trasporti inutili** — spostamenti non necessari di materiali tra reparti o magazzini. *Rimedio:* layout a flusso continuo (U-shaped cells).

4. **Lavorazioni eccessive** — attività che aggiungono più qualità/funzione del necessario. *Rimedio:* definire il valore dal punto di vista del cliente (VOC).

5. **Scorte eccessive** — materiali in attesa di lavorazione (WIP) o prodotti finiti invenduti. *Rimedio:* JIT, riduzione lotti.

6. **Movimenti inutili** — movimenti non necessari di persone durante il lavoro. *Rimedio:* ergonomia, 5S, standardizzazione.

7. **Difetti e rilavorazioni** — errori che richiedono correzione o scarto. *Rimedio:* Jidoka (autonomazione), poka-yoke, controllo qualità alla fonte.

Talvolta si aggiunge un **8° muda**: il sotto-utilizzo delle competenze dei dipendenti (waste of human potential). Il TPS combatte i muda attraverso *heijunka* (livellamento produzione), *jidoka* e *JIT*.`
      },
      {
        question: 'Descrivi il **Just-In-Time (JIT)** e il sistema **kanban**. Quali sono le condizioni necessarie per la sua implementazione efficace? (max 10 righe)',
        weeks: [10],
        soluzione: `Il **Just-In-Time** (Toyota, anni '50-'60) è il principio operativo di produrre e consegnare *esattamente ciò che serve, quando serve, nella quantità che serve*, eliminando le scorte come buffer di inefficienza.

**Componenti chiave del JIT:**
- **Sistema pull** — la produzione è "tirata" dalla domanda reale del cliente finale, non "spinta" da previsioni
- **Flusso continuo** — one-piece flow o small-lot production per ridurre WIP e lead time
- **Livellamento della produzione** (Heijunka) — mix e volume di produzione costanti per assorbire variazioni domanda
- **Tempi di setup ridotti** (SMED — Single Minute Exchange of Die) — per rendere economici i piccoli lotti
- **Zero difetti** — la qualità a monte elimina la necessità di buffer di sicurezza a valle

**Sistema Kanban** — strumento operativo del JIT:
- Carta/segnale visuale che autorizza il prelievo o la produzione di un quantitativo definito
- Tipi: kanban di prelievo (spostare materiali) e kanban di produzione (autorizzare la lavorazione)
- Regola: nulla si produce o si sposta senza kanban → visibilità completa del flusso

**Condizioni necessarie per JIT efficace:**
- Forniture frequenti e affidabili (partnership con fornitori — "single sourcing" fiduciario)
- Domanda relativamente stabile e prevedibile
- Alta qualità a monte (zero difetti) — il JIT non tollera buffer di sicurezza
- Operatori flessibili e multi-skilled
- Manutenzione preventiva totale (TPM) per evitare fermi macchina`
      },
      {
        question: 'Spiega la classificazione dei sistemi produttivi secondo **Wortmann** (MTS, ATO, MTO, ETO) e il concetto di "Customer Order Decoupling Point". (max 10 righe)',
        weeks: [10],
        soluzione: `La classificazione di **Wortmann** (1982) ordina i sistemi produttivi lungo un continuum di crescente personalizzazione/coinvolgimento del cliente nel processo produttivo:

| Tipo | Sigla | Logica | Esempi |
|---|---|---|---|
| **Make to Stock** | MTS | Produzione per magazzino su previsione domanda | Alimentari confezionati, componenti standard |
| **Assemble to Order** | ATO | Moduli/componenti a stock, assemblati su ordine | Computer, auto con opzioni, cucine modulari |
| **Make to Order** | MTO | Produzione avviata solo a ordine ricevuto | Macchine utensili, abbigliamento su misura |
| **Engineer to Order** | ETO | Progettazione e produzione custom per ogni ordine | Impianti industriali, navi, ponti |

**Customer Order Decoupling Point (CODP):** il punto lungo la catena produttiva in cui si "aggancia" l'ordine del cliente. Prima del CODP si lavora su previsioni (push); dopo il CODP si risponde all'ordine specifico (pull).

- **MTS:** CODP al magazzino prodotti finiti (il cliente sceglie da quello che c'è)
- **ATO:** CODP all'assemblaggio finale
- **MTO:** CODP al lancio della produzione
- **ETO:** CODP alla progettazione

**Implicazione:** avanzare il CODP verso il cliente (MTS→ETO) aumenta la personalizzazione ma allunga i lead time e richiede maggiore flessibilità produttiva. La scelta ottimale dipende dalla variabilità della domanda e dalla tolleranza del cliente ai tempi di attesa.`
      },
      {
        question: 'Descrivi la **Supply Chain** e il **Bullwhip Effect**. Quali sono le cause dell\'amplificazione della varianza lungo la catena e come può essere ridotto? (max 10 righe)',
        weeks: [10],
        soluzione: `La **Supply Chain** (SC) è la rete di organizzazioni, risorse e processi che trasformano materie prime in prodotti finiti consegnati al cliente finale. Comprende: fornitori → produttore → distributore → retailer → cliente.

**Bullwhip Effect** (Lee, Padmanabhan & Whang, 1997) — fenomeno per cui piccole variazioni della domanda del consumatore finale si amplificano man mano che si risale la catena, generando oscillazioni sempre più grandi degli ordini e delle scorte nei livelli upstream.

**Analogia:** come la coda di un frustino: un piccolo movimento del polso crea un'onda amplissima all'estremità.

**Quattro cause identificate:**

1. **Demand signal processing** — ogni anello aggiorna le proprie previsioni amplificando il segnale di domanda
2. **Order batching** — gli ordini vengono aggregati periodicamente (settimanali, mensili) invece di essere continui → picchi artificiali
3. **Price fluctuations** — promozioni e sconti inducono forward buying (acquisti anticipati in grandi quantità) che distorcono il segnale di domanda reale
4. **Rationing and shortage gaming** — in caso di carenze, i buyer gonfiano gli ordini per assicurarsi allocazioni maggiori

**Rimedi:**
- **Information sharing** — condivisione dati POS (punto vendita) lungo tutta la SC (VMI, ECR, EDI)
- **EDI e ordini continui** — eliminare il batching
- **EDLP** (Every Day Low Pricing) — ridurre promozioni erratiche
- **SC collaboration** — contratti di coordinamento tra buyer e fornitore`
      },
      {
        question: 'Spiega le **5S della metodologia Lean** e il loro ruolo nella creazione di un workplace organizzato e produttivo. (max 10 righe)',
        weeks: [10],
        soluzione: `Le **5S** sono una metodologia di organizzazione e standardizzazione del posto di lavoro, base visuale del Lean management. Derivano da cinque parole giapponesi:

| S | Giapponese | Significato | Azione pratica |
|---|---|---|---|
| **1. Seiri** | 整理 | Selezionare | Rimuovere dall'area di lavoro tutto ciò che non serve per le attività correnti (regola: se non usato da 30 giorni, rimuovere) |
| **2. Seiton** | 整頓 | Sistemare | Organizzare ciò che rimane in modo che ogni oggetto abbia un posto definito e sia facilmente accessibile: *"a place for everything, everything in its place"* |
| **3. Seiso** | 清掃 | Spazzare/Pulire | Pulire regolarmente l'area di lavoro; la pulizia è anche ispezione (si scoprono anomalie, perdite, usure) |
| **4. Seiketsu** | 清潔 | Standardizzare | Definire procedure e visual management per mantenere le prime tre S: cartelli, marcature a pavimento, check-list |
| **5. Shitsuke** | 躾 | Sostenere | Autodisciplina e miglioramento continuo; le 5S diventano abitudine culturale e non solo attività periodica |

**Benefici:**
- Riduzione dei tempi di ricerca di attrezzature e materiali
- Riduzione degli infortuni (ambiente ordinato)
- Visibilità immediata di anomalie e problemi
- Fondamento per altri strumenti Lean (SMED, TPM, Standard Work)

**Importante:** le 5S non sono un esercizio di pulizia ma un sistema di *visual management* che rende i problemi immediatamente visibili ("errori impossibili" o poka-yoke visuale).`
      },
      {
        question: 'Descrivi la **curva di diffusione delle innovazioni di Rogers** (1962). Quali sono le cinque categorie di adottanti e cosa si intende per "chasm" secondo Moore? (max 10 righe)',
        weeks: [11],
        soluzione: `Rogers (1962, *Diffusion of Innovations*) descrive come le innovazioni si diffondono attraverso la popolazione nel tempo, seguendo una **curva a campana** (distribuzione normale) per la frequenza di adozione e una **curva ad S** per l'adozione cumulata.

**Cinque categorie di adottanti** (in ordine cronologico):

| Categoria | % popolazione | Caratteristiche |
|---|---|---|
| **Innovatori** | 2,5% | Appassionati di tecnologia, tolleranza alta al rischio, accesso a capitali |
| **Early Adopters** | 13,5% | Opinion leader, visionari, comprendono il potenziale trasformativo |
| **Early Majority** | 34% | Pragmatici, aspettano prove di funzionamento, referenze dai peer |
| **Late Majority** | 34% | Scettici, adottano per pressione sociale o necessità |
| **Laggards** | 16% | Resistenti al cambiamento, adottano solo quando costretti |

**Il "Chasm" di Moore (1991):** *Crossing the Chasm* identifica un **abisso** critico tra Early Adopters e Early Majority. Gli Early Adopters sono visionari che accettano tecnologie imperfette per il vantaggio competitivo; l'Early Majority sono pragmatici che vogliono soluzioni complete, referenze e supporto.

Molte innovazioni tecnologiche *muoiono nel chasm* perché non riescono a fare il salto. Strategia di Moore: focus su una nicchia verticale specifica, diventarne il riferimento assoluto, poi espandersi.`
      },
      {
        question: 'Spiega il modello di **innovazione disruptive di Christensen** (1997). In cosa si distingue dall\'innovazione "sustaining" e perché le imprese dominanti faticano a gestirla? (max 10 righe)',
        weeks: [11],
        soluzione: `Christensen (*The Innovator's Dilemma*, 1997) distingue due tipi di innovazione:

**Innovazione Sustaining (di mantenimento):**
- Migliora le performance del prodotto lungo le dimensioni valorizzate dai clienti esistenti
- Gli incumbent sono bravi a farlo: investono in R&D per serve meglio i clienti correnti
- *Esempi:* fotocamere con più megapixel, smartphone con batteria più lunga

**Innovazione Disruptive:**
- Inizia con performance *inferiori* sulle dimensioni tradizionali ma introduce attributi nuovi (semplicità, convenienza, accessibilità)
- Attacca inizialmente segmenti *trascurati* (low-end) o crea mercati *nuovi* (non-consumption)
- Nel tempo migliora fino a soddisfare anche i clienti mainstream degli incumbent
- *Esempi:* i minicomputer vs. mainframe; il PC vs. minicomputer; Netflix vs. Blockbuster; iPhone vs. Nokia

**L'"Innovator's Dilemma":**
Le imprese dominanti razionalmente *ignorano* le disruption perché:
1. I mercati disruptive iniziali sono piccoli e a basso margine → non attraenti per grandi imprese
2. I clienti esistenti non vogliono la disruption → non c'è pull interno
3. I processi e i valori aziendali sono ottimizzati per il mercato esistente
4. I sistemi di valutazione del management premiano le iniziative certe e redditizie

**Soluzione:** creare unità organizzative *separate* con metriche, processi e cultura propri per gestire le innovazioni disruptive senza interferenza del core business.`
      },
      {
        question: 'Descrivi il modello **Abernathy-Utterback (A-U)** per le traiettorie dell\'innovazione tecnologica. Quali sono le tre fasi e come cambia il focus dell\'innovazione in ciascuna? (max 10 righe)',
        weeks: [11],
        soluzione: `Abernathy & Utterback (1978) propongono un modello che descrive come l'innovazione in un settore evolve nel tempo attraverso tre fasi:

**Fase 1 — FLUIDA (Fluid phase):**
- Molti prodotti sperimentali con design diversi; alta incertezza su quale configurazione vincerà
- Dominanza dell'**innovazione di prodotto**; bassi volumi, alta varietà
- Molte imprese nascenti (start-up), nessun dominant design
- *Esempio:* il settore auto agli albori (1890-1910): motori a vapore, elettrici e a benzina coesistevano

**Fase 2 — TRANSITORIA (Transitional phase):**
- Emerge il **dominant design** — l'architettura di prodotto che diventa standard de facto
- Si concentra il settore: sopravvivono le imprese che si allineano al dominant design
- L'innovazione si sposta da prodotto a *processo* (efficienza produttiva)
- *Esempio:* il Ford Model T (1908) stabilì il dominant design per l'auto di massa

**Fase 3 — SPECIFICA (Specific phase):**
- Prodotto standardizzato, alta efficienza produttiva, **innovazione di processo** dominante
- Settore concentrato, barriere all'entrata alte, concorrenza su costo
- *Esempio:* produzione di acciaio, semiconduttori maturi, commodity chemicals

**Implicazione strategica:** le imprese devono riconoscere in quale fase si trova il proprio settore e allineare la propria strategia di innovazione di conseguenza. Anticipare il dominant design o diventare disruptive prima che emerga è la mossa strategica chiave.`
      },
      {
        question: 'Spiega l\'**Open Innovation** di Chesbrough (2003). Descrivi le tre modalità (inbound, outbound, coupled) con esempi concreti. (max 10 righe)',
        weeks: [11],
        soluzione: `Chesbrough (2003, *Open Innovation*) teorizza che le imprese non possono più innovare in modo isolato ("closed model"): il valore si crea combinando conoscenza interna ed esterna, e le buone idee non usate internamente vanno valorizzate verso l'esterno.

**Tre modalità di Open Innovation:**

**1. Inbound (Outside-in):**
Acquisire e integrare conoscenza, tecnologia e idee dall'esterno:
- *Strumenti:* crowdsourcing, open R&D consortia, acquisizioni di startup, università, startup scouting, API aperte
- *Esempio:* Procter & Gamble con il programma "Connect+Develop": il 50% delle innovazioni deve provenire dall'esterno

**2. Outbound (Inside-out):**
Valorizzare esternamente asset intellettuali e tecnologie non sfruttate internamente:
- *Strumenti:* licensing di brevetti, spin-off, venture capital interno, cessione di IP
- *Esempio:* ARM Holdings che licenzia la sua architettura di chip a centinaia di aziende (Apple, Samsung, Qualcomm) invece di produrre chip propri

**3. Coupled (alleanze simmetriche):**
Co-creazione attraverso partnership strategiche, joint venture, ecosistemi:
- *Strumenti:* R&D consortia, alleanze strategiche, piattaforme multi-sided
- *Esempio:* ASML che co-sviluppa chip EUV con Intel, TSMC e Samsung

**Perché rilevante:** in settori a rapida evoluzione tecnologica, nessuna impresa può mantenere le competenze interne per tutte le tecnologie necessarie. L'Open Innovation riduce il time-to-market, i costi di R&D e il rischio di essere sorpresi da tecnologie esterne.`
      },
      {
        question: 'Descrivi le principali tipologie di **Intellectual Property Rights (IPR)**. Quali sono le differenze tra brevetto, copyright, marchio, design e segreto industriale in termini di durata, requisiti e ambito di protezione? (max 10 righe)',
        weeks: [11],
        soluzione: `Gli **IPR** (Diritti di Proprietà Intellettuale) proteggono le creazioni dell'ingegno e incentivano l'innovazione garantendo un monopolio temporaneo.

| Tipo IPR | Oggetto | Durata | Requisiti chiave |
|---|---|---|---|
| **Brevetto** | Invenzione tecnica | 20 anni dal deposito, NON rinnovabile | Novità, attività inventiva, applicabilità industriale; richiede *disclosure* pubblica |
| **Copyright** (diritto d'autore) | Opere creative (letteratura, musica, software, arte) | Vita dell'autore + 70 anni | Nasce automaticamente con la creazione; no registrazione richiesta |
| **Marchio** (trademark) | Segni distintivi (logo, nome, forma) | 10 anni, rinnovabile **indefinitamente** | Distintività, capacità di identificare l'origine; registrazione necessaria |
| **Design registrato** | Forma estetica di un prodotto | 5 anni, rinnovabile fino a 25 anni | Novità e carattere individuale |
| **Segreto industriale** (know-how) | Informazioni riservate di valore | Teoricamente illimitato ma fragile | Mantenimento rigoroso della segretezza |

**Trade-off chiave: Brevetto vs Segreto**
- **Brevetto:** protezione legale forte per 20 anni, ma richiede *disclosure* pubblica (dopo la scadenza chiunque può usare l'invenzione)
- **Segreto:** durata potenzialmente illimitata, ma un singolo leak o la reverse engineering lo annulla; non protegge dalla scoperta indipendente

*Esempio:* la formula di Coca-Cola è un segreto industriale da 130 anni, non un brevetto, perché la protezione brevettuale sarebbe scaduta decenni fa.`
      }
    ],
    esercizi: []
  }
];
