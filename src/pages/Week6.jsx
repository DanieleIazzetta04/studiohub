import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import '../index.css';
import './macro/macro.css';

const markdownContent = `
# Capitolo 6: Il Business Model e l'Impresa Sostenibile

Nei capitoli precedenti abbiamo affrontato la strategia come scelta competitiva: quali settori presidiare, come costruire un vantaggio competitivo, come scomporre l'impresa nelle sue attività per trovare la fonte del margine. Questa settimana facciamo un salto concettuale importante. Allarghiamo la prospettiva da "come battiamo i concorrenti in un settore definito" a "qual è complessivamente il nostro *modo* di creare, catturare e distribuire valore, considerando tutti i suoi attori e il suo impatto sul mondo". È il passaggio dalla visione strategica tradizionale alla **Business Model View**, un approccio che riconosce quanto nel mondo contemporaneo i confini settoriali siano labili e quanto il successo dipenda più dall'architettura del modello di business che dalla singola mossa competitiva.

Parallelamente, nel XXI secolo le imprese sono chiamate a misurarsi con un'altra trasformazione profonda. Non basta più massimizzare il profitto per gli azionisti: entra con forza in scena il tema della **sostenibilità** e della responsabilità dell'impresa verso tutti i portatori di interesse, dall'ambiente ai dipendenti alle generazioni future. Questo capitolo mette in relazione i due temi e mostra come i modelli di business più innovativi integrino profondamente la dimensione economica e quella sociale.

---

## 1. La Business Model View: un cambio di prospettiva

Per decenni gli strumenti di analisi strategica si sono concentrati sull'impresa come *competitor* all'interno di un settore definito: le 5 forze di Porter, la catena del valore, le strategie generiche. Questi strumenti restano validi e potenti, ma presentano un limite: assumono come dato di partenza *i confini del settore* e *l'oggetto della competizione*. La domanda è sempre *"come battiamo gli altri giocatori del nostro settore?"*, e raramente *"il settore stesso è stato ridisegnato?"*.

Negli ultimi vent'anni, con l'irruzione delle tecnologie digitali, della globalizzazione e di nuovi modelli di consumo, i confini settoriali sono diventati sempre più porosi. Apple non è solo un'impresa di elettronica: è anche un'impresa di servizi digitali (App Store, Apple Music), di pagamenti (Apple Pay), di contenuti (Apple TV+), di sanità (Apple Health). Netflix ha iniziato vendendo DVD per posta e oggi produce film e serie, competendo con i grandi studios hollywoodiani. Amazon è passato dai libri all'e-commerce universale al cloud computing (AWS). Airbnb ha reinventato l'ospitalità senza possedere un solo hotel. Uber ha reinventato il trasporto urbano senza possedere un'auto.

In questo contesto, il concetto tradizionale di "settore" perde rilevanza, e diventa più importante comprendere l'**architettura complessiva del modo in cui l'impresa crea valore**. Questo è precisamente ciò che cattura il concetto di **Business Model** (o "Modello di Business"). Il Business Model è definito come il *modo in cui un'organizzazione crea, eroga e cattura valore* — una definizione volutamente ampia e astratta per includere le innumerevoli configurazioni possibili.

Rispetto alla tradizionale analisi di settore, il Business Model ha tre caratteristiche distintive. Primo, è **centrato sul cliente e sul valore per il cliente**: la domanda chiave non è "cosa sanno fare meglio i nostri concorrenti?" ma "di cosa ha bisogno davvero il cliente e come glielo forniamo?". Secondo, è **sistemico**: considera l'insieme coordinato degli elementi (risorse, attività, partner, canali, ricavi, costi) piuttosto che un singolo aspetto. Terzo, va **oltre i confini dell'impresa**: tiene conto delle relazioni con partner, fornitori, distributori, comunità di utenti, piattaforme esterne.

Un Business Model ben definito risponde a **tre domande fondamentali**, spesso riassunte come la "trinità del Business Model":

Prima domanda: **chi sono i clienti**? Non basta dire "tutti" o "il mercato": bisogna identificare specifici segmenti con bisogni, propensioni di spesa e comportamenti omogenei. Un'impresa che non sa precisamente chi sta servendo non sa neppure cosa offrire.

Seconda domanda: **quale valore offriamo loro**? Non il prodotto in sé, ma il *beneficio percepito*. Starbucks non vende caffè: vende un momento di pausa, un luogo di lavoro alternativo, uno status. Airbnb non vende stanze: vende la possibilità di "vivere come un locale" in qualsiasi città del mondo. Capire il valore reale è il punto più difficile ma più importante della definizione del Business Model.

Terza domanda: **come catturiamo parte di questo valore come profitto**? Attraverso quali risorse produciamo, quali attività svolgiamo, con quali partner collaboriamo, come facciamo arrivare il prodotto al cliente, in che modo ci facciamo pagare e quali costi sopportiamo. Tutto questo deve tornare: il valore catturato (ricavi) deve essere maggiore del valore sacrificato (costi), altrimenti il modello non è sostenibile.

### 1.1 Il Business Model Canvas di Osterwalder

Per dare forma visiva e operativa al concetto di Business Model, Alexander Osterwalder e Yves Pigneur hanno sviluppato nel 2010 uno strumento che è diventato uno standard mondiale: il **Business Model Canvas**. Il Canvas è una mappa a **nove blocchi** organizzati in un unico foglio, che copre tutti gli elementi essenziali di un Business Model e permette di visualizzarlo, discuterlo e modificarlo facilmente.

I nove blocchi sono interconnessi: ogni elemento influenza gli altri, e un cambiamento in un blocco ha ripercussioni su tutti gli altri. Analizziamoli uno per uno.

**Blocco 1: Value Proposition (La Proposta di Valore)**. È il cuore del Canvas. Descrive il **pacchetto di prodotti e servizi** che crea valore per uno specifico segmento di clienti. La Value Proposition risponde alla domanda: *perché un cliente dovrebbe scegliere noi anziché un concorrente?*. Può basarsi su molti attributi: prezzo più basso, prestazioni superiori, design migliore, personalizzazione, riduzione del rischio, comodità, accessibilità, brand. La Value Proposition è la sintesi di tutto ciò che l'impresa promette al cliente, e deve essere coerente con quello che il cliente realmente desidera (bisogni, *jobs-to-be-done*) e con quello che l'impresa può effettivamente fornire.

**Blocco 2: Customer Segments (Segmenti di Clientela)**. Identifica i gruppi di persone o organizzazioni che l'impresa vuole servire. Nessuna impresa può servire "tutti": bisogna scegliere segmenti specifici con bisogni, comportamenti o caratteristiche comuni. I segmenti possono essere di diversi tipi: un **mercato di massa** indifferenziato (beni di consumo), una **nicchia** specifica (auto di lusso), segmenti **diversificati** (un cliente consumer e uno business), **multi-sided platforms** con due o più gruppi interdipendenti (una rivista con lettori e inserzionisti, un marketplace con venditori e compratori). La definizione chiara dei segmenti è la precondizione per tutte le scelte successive.

**Blocco 3: Channels (Canali)**. Descrive il **modo in cui l'impresa raggiunge i propri segmenti di clientela** e come li serve. I canali coprono cinque fasi distinte: *awareness* (far conoscere il prodotto), *valutazione* (aiutare il cliente a valutarlo), *acquisto* (permettere di comprare), *consegna* (far arrivare il prodotto), *post-vendita* (assistenza dopo l'acquisto). I canali possono essere diretti (vendita online tramite il sito dell'impresa) o indiretti (rivenditori), di proprietà (negozi aziendali) o partner (distributori). La scelta del mix di canali è cruciale: canali diretti offrono margini più alti ma richiedono investimenti; canali indiretti abbassano gli investimenti ma erodono i margini.

**Blocco 4: Customer Relationships (Relazioni con il Cliente)**. Specifica il **tipo di relazione** che l'impresa vuole stabilire con ciascun segmento. Può essere di molti tipi: *assistenza personale* (un venditore dedicato, un consulente), *assistenza personale dedicata* (un account manager per clienti key), *self-service* (il cliente si serve da solo, come nella GDO), *servizi automatizzati* (sistemi di raccomandazione personalizzati, come Amazon), *community* (il cliente trova supporto e valore nella relazione con altri clienti, come nei forum di appassionati), *co-creazione* (il cliente partecipa alla creazione del prodotto, come su Wikipedia o sulle piattaforme di crowdsourcing). La scelta del tipo di relazione influisce sui costi di servizio ma anche sulla fidelizzazione.

**Blocco 5: Key Resources (Risorse Chiave)**. Descrive gli **asset indispensabili** perché il Business Model funzioni. Possono essere **fisiche** (stabilimenti, magazzini, reti di negozi, veicoli), **intellettuali** (brevetti, brand, copyright, know-how, database di clienti), **umane** (talenti, competenze rare, leadership), **finanziarie** (riserve di liquidità, linee di credito, garanzie). Le risorse chiave sono il collegamento diretto con il framework della **Resource-Based View** visto nella Settimana 4: le risorse VRIO (Valore, Rarità, Inimitabilità, Organizzazione) sono quelle che generano vantaggio competitivo sostenibile.

**Blocco 6: Key Activities (Attività Chiave)**. Identifica le **attività principali** che l'impresa deve svolgere per far funzionare il Business Model. Possono essere di tre tipi fondamentali: **produzione** (fabbricare beni di qualità, come per un produttore manifatturiero), **problem-solving** (risolvere problemi specifici dei clienti, come per una società di consulenza o uno studio legale), **piattaforma/network** (gestire l'infrastruttura che permette a più soggetti di interagire tra loro, come per eBay, Facebook, Airbnb, Uber). Le Key Activities sono legate alle Key Resources: le risorse rendono possibili le attività, e le attività sono il modo in cui le risorse vengono messe in opera.

**Blocco 7: Key Partnerships (Partner Chiave)**. Descrive la **rete di fornitori, alleati e partner** che rende possibile il Business Model. Nessuna impresa moderna opera completamente da sola: ha bisogno di partner per ridurre rischi, ottimizzare costi, acquisire competenze mancanti, accedere a risorse rare. I partner possono essere fornitori strategici, alleanze con altre imprese non concorrenti, joint venture, o addirittura alleanze con concorrenti — la cosiddetta **coopetition** (coopetizione). La coopetizione è un fenomeno particolarmente interessante: due imprese che competono sul mercato finale collaborano su aree non direttamente competitive (standard tecnologici comuni, ricerca di base condivisa, infrastrutture industriali condivise). Esempio: Samsung e Apple sono feroci concorrenti sugli smartphone, ma Samsung è anche un fornitore chiave di componenti per Apple.

**Blocco 8: Revenue Streams (Flussi di Ricavi)**. Descrive il **modo in cui l'impresa guadagna da ciascun segmento di clientela**. I flussi di ricavi possono essere di molti tipi: **vendita singola** (pay-per-use, una transazione tantum: compro un libro, pago una volta), **abbonamento** (subscription: pago ogni mese per avere accesso continuo al servizio, come Netflix o Spotify), **leasing e noleggio** (pago per l'uso temporaneo di un bene che rimane del fornitore), **licenza d'uso** (pago per il diritto di utilizzare una proprietà intellettuale, come nei software), **intermediazione/commissioni** (l'impresa fa da tramite tra due parti e guadagna una fee, come eBay, Airbnb, Amazon Marketplace), **pubblicità** (l'impresa offre un servizio gratuitamente ai clienti e guadagna dalla vendita dell'attenzione agli inserzionisti, come Google, Facebook). La scelta della struttura dei ricavi è cruciale: modelli a abbonamento generano ricavi più prevedibili ma richiedono sforzo costante di fidelizzazione; modelli a vendita singola sono più semplici ma più volatili.

**Blocco 9: Cost Structure (Struttura dei Costi)**. Descrive i **costi principali** sostenuti dall'impresa per far funzionare il Business Model. Due approcci fondamentali si possono distinguere:

Il primo è **cost-driven**: minimizzare i costi il più possibile. È tipico delle imprese che perseguono una strategia di leadership di costo (vedi Settimana 5): Ryanair, Ikea, Lidl, McDonald's. Queste imprese massimizzano l'automazione, riducono i servizi accessori, cercano economie di scala, esternalizzano le attività non core. Il loro Business Model è ottimizzato per mantenere il prezzo finale il più basso possibile.

Il secondo è **value-driven**: concentrarsi sulla creazione di valore eccezionale accettando costi alti. È tipico delle imprese differenziate e premium: Ferrari, hotel 5 stelle, haute couture, cliniche private di prestigio. Per loro i costi elevati non sono un problema — sono la premessa necessaria per offrire il valore che giustifica il Premium Price. Tentare di tagliare i costi in un Business Model value-driven significa distruggere proprio quel valore che giustifica l'esistenza del modello.

I nove blocchi del Canvas non vanno letti come una lista indipendente: sono profondamente interconnessi. La Value Proposition determina quali Customer Segments sono rilevanti; i Customer Segments influenzano la scelta dei Channels e delle Customer Relationships; le Key Activities derivano dalle Key Resources; i Revenue Streams dipendono da Value Proposition e Customer Segments; la Cost Structure è determinata dalle scelte in tutti gli altri blocchi. Un Business Model è coerente solo quando tutti i blocchi si sostengono a vicenda.

### 1.2 Disruption: Digital Vortex, Digital Economy, Sharing Economy

I Business Model tradizionali sono messi sotto pressione da forze di rottura radicali. Queste forze sono state definite collettivamente come il **Digital Vortex**: una metafora potente che descrive la digitalizzazione come un vortice in cui, volenti o nolenti, tutti i settori vengono progressivamente risucchiati e costretti a reinventarsi. Le imprese che resistono al vortice sperando che passi rischiano l'estinzione: gli esempi di Kodak, Blockbuster, Nokia sono ammonimenti classici.

Due grandi fenomeni dominano l'era della disruption digitale: la **Digital Economy** e la **Sharing Economy**.

**La Digital Economy**. Il software e la connessione onnipresente permettono di **smaterializzare** i beni fisici. La musica, un tempo vincolata a un CD fisico, è diventata un file digitale, poi uno stream. I film, i libri, i giornali seguono la stessa traiettoria. La smaterializzazione ha effetti dirompenti sui Business Model: azzera i costi di produzione delle copie (il costo marginale di un download è quasi zero), elimina i vincoli geografici (un file può essere inviato ovunque nel mondo), permette la **personalizzazione di massa** (algoritmi che raccomandano contenuti specifici a ciascun utente in base al suo comportamento passato). Ma soprattutto, cambia radicalmente la natura della competizione: in un mercato di prodotti fisici Blockbuster poteva avere un'affluenza di negozi locali come vantaggio; quando il film si scarica, quel vantaggio sparisce, e Netflix — nato dopo — può travolgere il leader di mercato storico.

La Digital Economy abilita anche nuovi modelli di ricavo basati sui dati. Google offre la ricerca gratuitamente, ma cattura dati preziosissimi sugli utenti e li monetizza vendendo pubblicità mirata. Facebook fa lo stesso con i contenuti sociali. Amazon usa i dati di acquisto per raccomandare nuovi prodotti e massimizzare il valore del singolo cliente. I dati sono diventati una risorsa strategica nuova, talvolta paragonata al petrolio del XX secolo.

**La Sharing Economy**. Il secondo grande fenomeno è il passaggio dalla **proprietà** (*ownership*) all'**accesso** (*access*). Per tutto il XX secolo, il paradigma dominante del consumo è stato: per usare un bene devi possederlo. Avevi bisogno di un'auto? La compravi. Di una casa per le vacanze? La acquistavi. Di un trapano? Lo avevi nel ripostiglio. Questo modello è intrinsecamente inefficiente dal punto di vista economico ed ecologico: la maggior parte degli asset posseduti dai consumatori viene utilizzata solo per una piccola frazione del tempo (un'auto privata è ferma il 95% delle ore).

La Sharing Economy ribalta questa logica usando piattaforme digitali per abbinare, in tempo reale, chi possiede un bene sottoutilizzato e chi ne ha bisogno temporaneamente. **Airbnb** permette ai proprietari di case di affittarle per brevi periodi, competendo con gli hotel senza possedere nessuna proprietà. **Uber** e **BlaBlaCar** collegano automobilisti e passeggeri, creando un servizio di trasporto senza possedere un'auto. **Vinted** e **Depop** abilitano il riutilizzo di vestiti usati, competendo con la fast fashion. **Getaround** permette di noleggiare auto tra privati. **WeWork** (con le sue difficoltà) ha proposto modelli di condivisione degli spazi ufficio.

La Sharing Economy ha implicazioni profonde per il concetto stesso di Business Model. L'asset (la casa, l'auto) non è più dell'impresa ma del singolo utente, che diventa contemporaneamente cliente e fornitore. Il valore dell'impresa sta nella **piattaforma** — l'infrastruttura digitale che abbina domanda e offerta, garantisce la fiducia (recensioni, pagamenti sicuri), riduce i costi di transazione. Questo tipo di Business Model, chiamato **multi-sided platform**, presenta economie di rete molto forti: più utenti su un lato attraggono più utenti sull'altro lato, in un circolo virtuoso che rende l'impresa leader di mercato quasi monopolista. Airbnb, Uber, Airbnb sono esempi di piattaforme a due lati che hanno vinto contro i concorrenti grazie agli effetti di rete.

---

## 2. L'Impresa e la Sostenibilità

Fin qui abbiamo parlato di Business Model in un senso purely economico: come creare valore per i clienti e catturarne una parte come profitto per gli azionisti. Ma nel XXI secolo l'impresa è chiamata a misurarsi con un insieme molto più ampio di attese. Le attese degli azionisti, dei dipendenti, dei fornitori, dei clienti, delle comunità locali, delle generazioni future e — indirettamente — dell'intero pianeta. Questo insieme di attese, e le responsabilità che ne derivano, costituiscono il tema della **sostenibilità**.

### 2.1 Dalla Shareholder Theory alla Stakeholder Approach

Per comprendere l'importanza del passaggio, bisogna ricordare da dove veniamo. Fino agli anni '70 il paradigma dominante, soprattutto nel mondo anglosassone, era quello teorizzato da **Milton Friedman** nel celebre articolo *"The Social Responsibility of Business is to Increase its Profits"* pubblicato sul *New York Times Magazine* nel 1970. La tesi di Friedman, nota come **Shareholder Theory**, si può riassumere così: la sola responsabilità sociale dell'impresa è massimizzare i profitti per i propri azionisti, nel rispetto delle leggi e delle regole etiche basilari. Tutto il resto — l'ambiente, il benessere dei dipendenti oltre il minimo contrattuale, il supporto alle comunità locali — non è compito dell'impresa: se qualcosa va corretto nel sistema, deve occuparsene lo Stato con la regolamentazione, non l'impresa con iniziative discrezionali.

La Shareholder Theory ha un suo fascino logico: l'impresa è uno strumento economico, non morale; i manager sono *agenti* degli azionisti e devono agire nell'interesse dei *principali*, cioè gli azionisti stessi; mescolare obiettivi economici e sociali confonde le responsabilità e finisce per peggiorare sia l'uno che l'altro fronte. Friedman arrivava a sostenere che i manager che usano risorse aziendali per fini sociali stanno di fatto *rubando* agli azionisti.

Questa visione, però, è entrata in crisi a partire dagli anni '80 per una serie di ragioni. Primo, è diventato sempre più evidente che le imprese, specialmente quelle grandi, hanno un impatto enorme sull'ambiente e sulla società — impatto che lo Stato non riesce a regolamentare completamente, specialmente su scala globale. Secondo, i consumatori hanno iniziato a premiare o punire le imprese in base ai loro comportamenti etici, rendendo la responsabilità sociale una questione anche economica. Terzo, i mercati finanziari hanno iniziato a prezzare i rischi reputazionali ed ESG (Environmental, Social, Governance), imponendo alle imprese di prestare attenzione agli aspetti non strettamente economici. Quarto, i dipendenti di qualità — soprattutto le nuove generazioni — cercano aziende con valori condivisi e rifiutano quelle percepite come socialmente irresponsabili.

Nel 1984 **R. Edward Freeman** pubblica *"Strategic Management: A Stakeholder Approach"*, un libro che ha cambiato il dibattito. Freeman propone una visione alternativa, la **Stakeholder Approach**: l'impresa non ha responsabilità solo verso gli azionisti, ma verso **tutti i portatori di interesse** — chiunque sia influenzato dalle decisioni dell'impresa o possa influenzarle. Gli *stakeholder* dell'impresa includono: azionisti, dipendenti, clienti, fornitori, comunità locali, creditori, autorità pubbliche, organizzazioni della società civile, ambiente, generazioni future.

La Stakeholder Approach non sostituisce il profitto come obiettivo, ma lo riconfigura. Il profitto rimane essenziale — senza profitto l'impresa non sopravvive e non può fare alcun bene a nessuno — ma diventa un obiettivo condizionato al rispetto delle legittime attese degli altri stakeholder. L'impresa deve creare valore per i dipendenti (condizioni di lavoro dignitose, retribuzioni adeguate, crescita professionale), per i clienti (prodotti sicuri, prezzi equi, comunicazione onesta), per le comunità (occupazione, rispetto dell'ambiente, contributo fiscale), per gli investitori (rendimento del capitale), per i fornitori (relazioni commerciali eque, pagamenti puntuali). Solo equilibrando tutti questi interessi l'impresa costruisce valore nel lungo periodo.

Da questo paradigma nasce il concetto moderno di **sostenibilità**, formalizzato nel 1987 dal **Rapporto Brundtland** della Commissione Mondiale per l'Ambiente e lo Sviluppo dell'ONU. La definizione — diventata standard internazionale — è: *"soddisfare i bisogni del presente senza compromettere la capacità delle generazioni future di soddisfare i propri bisogni"*. È una definizione intergenerazionale: il benessere di oggi non può essere ottenuto a spese del benessere di domani. Un'impresa sostenibile è quella che prende decisioni oggi senza creare danni irreversibili che scaricheranno i loro costi sulle generazioni future.

### 2.2 La Corporate Social Responsibility (CSR)

La traduzione operativa della visione stakeholder è la **Corporate Social Responsibility**, spesso abbreviata in **CSR**. La CSR è l'impegno volontario dell'impresa ad andare **oltre il minimo richiesto dalla legge** nelle dimensioni sociali e ambientali. Il concetto chiave è "volontario": la CSR non riguarda ciò che l'impresa è *obbligata* a fare (rispettare le leggi sull'ambiente, sulla sicurezza sul lavoro, sulla tutela dei consumatori), ma ciò che l'impresa *sceglie* di fare in più, per convinzione o per strategia.

La CSR si articola su due fronti principali: interno ed esterno.

La **CSR interna** riguarda il rapporto dell'impresa con i propri dipendenti e con gli aspetti interni dell'organizzazione. Include: equità retributiva (salari adeguati, differenziali ragionevoli tra vertice e base), diversità e inclusione (assenza di discriminazioni su genere, etnia, età, orientamento sessuale, disabilità), sicurezza sul lavoro (prevenzione degli infortuni, condizioni di lavoro dignitose), formazione e sviluppo professionale (investimenti nelle competenze dei dipendenti), work-life balance (conciliazione tra vita personale e lavorativa), welfare aziendale (benefit, supporto alla famiglia, salute, pensione integrativa), pari opportunità di carriera. Un'impresa con una CSR interna forte ha dipendenti motivati, riduce il turnover, attira talenti, riduce il rischio di cause legali e scandali.

La **CSR esterna** riguarda il rapporto dell'impresa con il mondo esterno: ambiente, comunità, clienti, fornitori, società in generale. Include: riduzione delle emissioni di CO₂ e dell'inquinamento, gestione responsabile dei rifiuti, uso efficiente delle risorse naturali, sviluppo di prodotti ecologici, supporto alle comunità locali in cui l'impresa opera (donazioni, progetti sociali, volontariato aziendale), filiere di fornitura etiche (no al lavoro minorile, no allo sfruttamento, rispetto dei diritti umani nei Paesi di approvvigionamento), trasparenza verso i clienti (informazione onesta sui prodotti, pubblicità non ingannevole), rapporto corretto con le autorità pubbliche (no alla corruzione, fiscalità responsabile).

### 2.3 La CSR come leva strategica (non come filantropia)

È importante evitare un grave equivoco: **la CSR non è filantropia**. La filantropia è donare denaro senza aspettarsi niente in cambio, per motivi etici o caritatevoli. La CSR, quando è fatta bene, è una **leva strategica** che genera valore economico per l'impresa oltre che per gli stakeholder. Le imprese che prendono sul serio la CSR non lo fanno per buon cuore ma perché hanno compreso che è nell'interesse economico di lungo periodo dell'impresa stessa. Quattro meccanismi rendono la CSR strategicamente preziosa.

**Primo meccanismo: risk management**. La CSR riduce la probabilità di scandali, multe, boicottaggi, cause legali, interventi regolatori punitivi. Un esempio eclatante è il **Dieselgate di Volkswagen** nel 2015: l'azienda è stata scoperta a manipolare i test sulle emissioni dei motori diesel. Il costo finale — multe, risarcimenti, richiami, perdita di valore del brand — ha superato i 30 miliardi di dollari. Nike negli anni '90 ha subito un tracollo reputazionale per le condizioni di lavoro nelle fabbriche dei suoi fornitori asiatici. BP ha pagato decine di miliardi per il disastro ambientale nel Golfo del Messico nel 2010. In tutti questi casi, una CSR più seria avrebbe probabilmente prevenuto il disastro, a un costo molto inferiore.

**Secondo meccanismo: rafforzamento del brand e della reputazione (RBV intangibile)**. Colleghiamoci qui al framework della Resource-Based View visto nella Settimana 4: il brand è una risorsa VRIO di enorme valore, e la reputazione ecologica o etica aumenta il valore del brand. Patagonia, grazie alla sua integrità ambientale, può praticare prezzi premium e fidelizzare clienti che non comprerebbero mai da un concorrente meno responsabile. Tesla ha costruito buona parte del proprio successo iniziale sull'identificazione con la causa ambientale. Le imprese *food* bio o fair-trade possono differenziarsi grazie alle certificazioni etiche. Un brand con forte reputazione di sostenibilità diventa un asset intangibile difficile da imitare.

**Terzo meccanismo: accesso ai capitali e agli investitori ESG**. Il mondo degli investimenti sta cambiando rapidamente. Sempre più fondi d'investimento adottano criteri **ESG** (*Environmental, Social, Governance*): escludono dai loro portafogli le imprese con scarse performance su questi temi, oppure le sottopesano. Nel 2024 si stima che gli asset gestiti secondo criteri ESG superino i 40.000 miliardi di dollari a livello mondiale. Un'impresa senza credenziali ESG viene esclusa da questi flussi di capitale, con un costo del denaro più alto e minore liquidità. Inoltre, molti paesi stanno introducendo obblighi di rendicontazione ESG: la direttiva europea **CSRD** (Corporate Sustainability Reporting Directive) rende obbligatorio per migliaia di imprese europee un reporting dettagliato sulle performance di sostenibilità.

**Quarto meccanismo: Premium Price e fidelizzazione**. I consumatori, in particolare le generazioni più giovani, sono sempre più disposti a **pagare di più** per prodotti percepiti come sostenibili o socialmente responsabili. Gli studi di mercato mostrano che la disponibilità a pagare un premium per prodotti sostenibili è intorno al 10-20% in molti settori. Inoltre, questi consumatori sono più fedeli: una volta identificatisi con un brand "etico", tendono a restare fedeli nel tempo.

La conclusione, in netto contrasto con la Shareholder Theory di Friedman, è che **CSR e redditività non sono antitetiche — nel lungo periodo si rinforzano a vicenda**. Le imprese più sostenibili tendono anche a essere, nel tempo, le più redditizie. Non tutti gli studi sono unanimi su questo punto, e c'è un ragionevole dibattito accademico; ma la tendenza generale è chiara.

### 2.4 Gli strumenti della sostenibilità

Come fa concretamente un'impresa ad affrontare il tema della sostenibilità? Diverse metodologie e standard internazionali sono ormai disponibili per aiutarla. I principali sono quattro.

**Gli SDGs (Sustainable Development Goals)**. Nel settembre 2015, l'Assemblea Generale delle Nazioni Unite ha approvato l'**Agenda 2030 per lo Sviluppo Sostenibile**, un documento che identifica **17 obiettivi globali** da raggiungere entro il 2030. Gli SDGs coprono l'intero spettro dello sviluppo sostenibile: *Sconfiggere la povertà* (SDG 1), *Sconfiggere la fame* (SDG 2), *Salute e benessere* (SDG 3), *Istruzione di qualità* (SDG 4), *Parità di genere* (SDG 5), *Acqua pulita e servizi igienico-sanitari* (SDG 6), *Energia pulita e accessibile* (SDG 7), *Lavoro dignitoso e crescita economica* (SDG 8), *Imprese, innovazione e infrastrutture* (SDG 9), *Ridurre le disuguaglianze* (SDG 10), *Città e comunità sostenibili* (SDG 11), *Consumo e produzione responsabili* (SDG 12), *Lotta contro il cambiamento climatico* (SDG 13), *Vita sott'acqua* (SDG 14), *Vita sulla terra* (SDG 15), *Pace, giustizia e istituzioni solide* (SDG 16), *Partnership per gli obiettivi* (SDG 17). Le imprese più avanzate allineano la propria strategia a uno o più SDG specifici, rendicontando periodicamente i progressi. Gli SDGs sono diventati il linguaggio comune della sostenibilità d'impresa.

**La matrice di materialità**. Non tutti i temi di sostenibilità hanno la stessa importanza per tutte le imprese. Una società mineraria deve preoccuparsi prima di tutto di ambiente e sicurezza; una banca di privacy, inclusione finanziaria, governance; un'impresa tessile di filiera etica e uso dell'acqua. La **matrice di materialità** è lo strumento che aiuta l'impresa a identificare quali temi di sostenibilità sono più rilevanti (*materiali*) sia per l'impresa stessa sia per i suoi stakeholder. Si costruisce come una matrice 2×2 in cui un asse misura l'impatto del tema sull'impresa e l'altro misura l'importanza per gli stakeholder. I temi che risultano importanti su entrambi gli assi sono quelli *materiali*, su cui l'impresa deve concentrare gli sforzi di sostenibilità e il reporting.

**Il reporting di sostenibilità**. Una volta identificati i temi materiali, l'impresa deve rendicontare pubblicamente le proprie performance. Esistono diversi standard internazionali per il reporting. Il più diffuso è il **GRI (Global Reporting Initiative)**, un insieme di indicatori standardizzati che coprono le dimensioni economica, ambientale e sociale. Un altro standard molto usato è quello del **SASB (Sustainability Accounting Standards Board)**, focalizzato su indicatori finanziariamente rilevanti per settore. Le imprese che aderiscono al **UN Global Compact** delle Nazioni Unite si impegnano a rispettare dieci principi su diritti umani, lavoro, ambiente e anticorruzione, e a rendicontare annualmente i progressi. In Europa, la **CSRD** rende obbligatoria la rendicontazione di sostenibilità secondo standard europei specifici (ESRS) per migliaia di imprese.

### 2.5 Social Enterprise e Circular Economy

I modelli di business più innovativi del XXI secolo integrano profondamente dimensione economica e sostenibilità. Due approcci in particolare meritano attenzione: la Social Enterprise e la Circular Economy.

**Social Enterprise**. Sono imprese ibride che combinano **finalità sociale** e **redditività economica**. Non sono organizzazioni no-profit pure: si autofinanziano generando margini sul mercato attraverso la vendita di prodotti e servizi. Ma il profitto non è il fine ultimo — è il mezzo per perseguire una missione sociale o ambientale. I profitti vengono reinvestiti nell'impresa stessa per ampliarne l'impatto sociale, o distribuiti in parte ai lavoratori e ai beneficiari. Esempi celebri sono la **Grameen Bank** di Muhammad Yunus (microcredito a donne in Bangladesh, Premio Nobel per la Pace 2006), **TOMS Shoes** (modello "one-for-one": per ogni paio di scarpe vendute, ne dona un paio a bambini bisognosi), **Banca Etica** in Italia (finanzia solo progetti con impatto sociale positivo), **Warby Parker** (occhiali a prezzo accessibile e donazione di un paio per ogni vendita). Il vantaggio della Social Enterprise rispetto al modello no-profit tradizionale è l'autosostenibilità: non dipende da donazioni, quindi può scalare e operare nel lungo termine senza l'incertezza dei finanziamenti filantropici.

**Circular Economy**. È forse il paradigma più radicalmente innovativo del nostro tempo. Il **modello economico lineare** tradizionale segue lo schema *estrai → produci → consuma → smaltisci*: si prendono risorse vergini dalla natura, si trasformano in prodotti, si vendono al consumatore che li usa e poi li butta come rifiuti. Questo modello è intrinsecamente insostenibile: le risorse del pianeta sono finite, i rifiuti si accumulano, l'ambiente si degrada. L'**economia circolare** propone un modello alternativo in cui i rifiuti di un processo diventano **input per un altro processo**, chiudendo il ciclo: *estrai → produci → consuma → riusa/ripara/ricicla → reintroduci*.

Le strategie operative della circolarità sono diverse.

La **servitizzazione** (o *servitization*) consiste nel vendere non più il prodotto ma il **servizio** che il prodotto fornisce. Philips, per esempio, non vende più lampadine all'aeroporto di Amsterdam: vende "illuminazione come servizio", mantenendo la proprietà delle lampadine e sostituendole quando necessario. Il risultato: Philips ha incentivo a produrre lampadine che durano a lungo (perché ogni sostituzione è un costo per lei), non più lampadine che si rompono presto per vendere di più. Michelin in alcuni segmenti vende "chilometri percorsi" invece di pneumatici, con la stessa logica. La servitizzazione allinea gli incentivi dei produttori a quelli dell'ambiente.

Il **design for durability, riparabilità, upgradability** consiste nel progettare prodotti che durino a lungo, che si possano riparare facilmente e che possano essere aggiornati nel tempo senza sostituirli completamente. È l'opposto dell'**obsolescenza programmata** (progettare prodotti che si rompono dopo un certo periodo per spingere all'acquisto di un nuovo esemplare). Esempio: Fairphone è uno smartphone modulare progettato perché l'utente possa sostituire facilmente batteria, schermo, fotocamera.

Il **refurbishing e re-manufacturing** consiste nel riprendere prodotti usati, ricondizionarli o rifabbricarli a costi molto inferiori rispetto alla produzione di un nuovo pezzo, e rivenderli come "ricondizionati" a un prezzo intermedio. Apple, Samsung e molte altre imprese hanno ormai linee ufficiali di ricondizionati. Caterpillar rimanufactura componenti di trattori, recuperando gran parte del valore.

Le **sharing platforms** massimizzano l'utilizzo dei beni riducendo lo spreco di asset sottoutilizzati. Ne abbiamo parlato a proposito della Sharing Economy: Airbnb, Uber, BlaBlaCar fanno parte sia del fenomeno "sharing" sia della circolarità.

Il **recycling** è il recupero dei materiali a fine vita: metalli, plastica, vetro, carta vengono riciclati e rientrano come materie prime secondarie nel ciclo produttivo. Il recycling è l'ultima ratio — la preferenza andrebbe sempre al riuso o alla riparazione prima del riciclo, perché il riciclo comporta sempre una perdita di energia e di qualità del materiale.

L'economia circolare è contemporaneamente etica (riduce l'impatto ambientale, preserva le risorse per il futuro) ed economicamente razionale (abbassa i costi di input, apre nuovi flussi di ricavo, fidelizza clienti consapevoli). Le imprese leader nel futuro saranno probabilmente quelle che avranno saputo integrare la circolarità nella propria strategia di lungo periodo.

---

## In sintesi

- Il **Business Model** è il modo in cui un'impresa crea, eroga e cattura valore, e va oltre i tradizionali confini del singolo settore. Risponde a tre domande: chi sono i clienti, che valore offriamo, come catturiamo parte di questo valore.
- Lo strumento standard per mappare un Business Model è il **Business Model Canvas** di Osterwalder, articolato in 9 blocchi interconnessi: Value Proposition, Customer Segments, Channels, Customer Relationships, Key Resources, Key Activities, Key Partnerships, Revenue Streams, Cost Structure.
- I Business Model tradizionali sono sotto pressione per effetto del **Digital Vortex**: la digitalizzazione spinge verso nuovi modelli basati sulla **Digital Economy** (smaterializzazione dei beni, personalizzazione basata sui dati) e la **Sharing Economy** (passaggio da proprietà ad accesso, piattaforme multi-sided).
- La vecchia **Shareholder Theory** di Friedman è stata superata dalla **Stakeholder Approach** di Freeman: l'impresa ha responsabilità verso tutti i portatori di interesse, non solo verso gli azionisti.
- La **sostenibilità**, nel suo senso moderno, è definita dal Rapporto Brundtland come la capacità di soddisfare i bisogni del presente senza compromettere quelli delle generazioni future.
- La **Corporate Social Responsibility** (CSR) è l'impegno volontario dell'impresa oltre il minimo legale, su due fronti: interno (dipendenti, equità, inclusione) ed esterno (ambiente, comunità, filiera etica). Va interpretata come **leva strategica** — non come filantropia — perché genera valore attraverso risk management, rafforzamento del brand, accesso ai capitali ESG e Premium Price.
- Gli **strumenti chiave della sostenibilità** sono gli **SDGs** dell'Agenda ONU 2030 (17 obiettivi), la **matrice di materialità**, e i reporting secondo standard internazionali come **GRI**, **UN Global Compact** e, in Europa, **CSRD** con gli standard ESRS.
- I modelli più evoluti — **Social Enterprise** e **Circular Economy** — integrano sostenibilità e redditività, superando il vecchio modello lineare "prendi-usa-butta" a favore di approcci circolari basati su servitizzazione, riparabilità, refurbishing, sharing platforms e recycling.

---

## 3. Approfondimento: il Business Model Canvas in tabella sintetica

Per fissare in modo immediatamente consultabile l'architettura dei nove "mattoni" di Osterwalder e Pigneur, è utile riassumere la mappa in forma tabellare. La tabella qui sotto ricorda la **domanda chiave** a cui ogni blocco deve rispondere, la **funzione strategica** assolta nel modello, e un **esempio paradigmatico** che aiuta a fissare il concetto. La logica del Canvas è quella di un foglio unico orizzontalmente diviso in tre macro-aree, perfettamente riconoscibili: a sinistra il **sistema del valore** (partner, attività, risorse), al centro la **proposta** (Value Proposition), a destra il **rapporto con il mercato** (relazioni, canali, segmenti). La fascia inferiore — **Cost Structure** e **Revenue Streams** — esprime infine la **profittabilità** del modello, ovvero la traduzione economica di tutte le scelte fatte sopra.

| # | Blocco | Macro-area | Domanda chiave | Funzione strategica | Esempio |
|---|--------|------------|---------------|---------------------|---------|
| 1 | **Customer Segments** | Mercato | A chi ci rivolgiamo? | Definire i gruppi omogenei di clienti da servire (mass market, nicchia, multi-sided, diversificati, segmentati) | Nespresso: consumer premium domestico + B2B uffici |
| 2 | **Value Proposition** | Proposta | Quale valore offriamo? | Aggregato di benefici (prezzo, performance, design, status, comodità) che risolve un *job-to-be-done* | Airbnb: "live like a local" ovunque nel mondo |
| 3 | **Channels** | Mercato | Come raggiungiamo i clienti? | Touch point per le 5 fasi (awareness, valutazione, acquisto, consegna, post-vendita); diretti/indiretti, propri/partner | Apple: Apple Store + Online Store + retailer terzi |
| 4 | **Customer Relationships** | Mercato | Che tipo di relazione costruiamo? | Modalità di interazione: assistenza personale, dedicata, self-service, automatizzata, community, co-creazione | Amazon: servizi automatizzati + raccomandazioni |
| 5 | **Revenue Streams** | Profittabilità | Come catturiamo valore monetario? | Flussi transazionali (vendita asset, fee) o ricorrenti (subscription, leasing, licensing, brokeraggio, advertising) | Netflix: subscription mensile ricorrente |
| 6 | **Key Resources** | Sistema del valore | Quali asset sono indispensabili? | Risorse fisiche, intellettuali (brand, IP), umane, finanziarie; ponte con la RBV e i criteri VRIO | Coca-Cola: brand globale + ricetta segreta |
| 7 | **Key Activities** | Sistema del valore | Cosa dobbiamo saper fare? | Tre archetipi: produzione, problem-solving, piattaforma/network | Uber: gestione algoritmica della piattaforma |
| 8 | **Key Partnerships** | Sistema del valore | Con chi collaboriamo? | Alleanze strategiche tra non-competitor, coopetition, joint venture, relazioni buyer-supplier affidabili | Samsung-Apple: coopetition (concorrenti + fornitore di chip) |
| 9 | **Cost Structure** | Profittabilità | Cosa ci costa il modello? | Approccio *cost-driven* (Ryanair, Lidl) vs *value-driven* (hotel di lusso, Ferrari); costi fissi vs variabili, economie di scala/scopo | Ryanair: cost-driven puro, automazione e outsourcing |

### 3.1 Lettura per macro-aree e applicazione: il caso Nespresso

Il Canvas si legge in modo particolarmente efficace per **macro-aree**. Il **sistema del valore** (Key Partners, Key Activities, Key Resources) descrive la "macchina interna" che produce ed eroga; la **proposta** (Value Proposition) ne sintetizza il senso; il rapporto con il mercato (Channels, Customer Relationships, Customer Segments) traduce la proposta in esperienza per il cliente; infine, **Cost Structure** e **Revenue Streams** chiudono il sistema sul piano economico-finanziario.

Un caso paradigmatico è **Nespresso** (Gruppo Nestlé). I *Customer Segments* sono i consumatori premium domestici amanti del caffè di qualità e, parallelamente, le aziende e gli uffici (segmento B2B). La *Value Proposition* è l'esperienza del caffè espresso di alta qualità, comodo, replicabile in casa, supportato da un brand identitario. I *Channels* combinano il sito **nespresso.com**, le **boutique** monomarca, i call center e i partner GDO. Le *Customer Relationships* si appoggiano sul **Nespresso Club**, una community fidelizzata con servizi personali dedicati. Le *Key Activities* sono il design e la produzione delle capsule, la gestione del marketing premium, la logistica diretta. Le *Key Resources* sono i **brevetti** sulle capsule (resi parzialmente porosi nel tempo), il **brand**, gli stabilimenti produttivi e la rete di boutique. I *Key Partners* sono i coltivatori certificati, i co-produttori delle macchine (Krups, De'Longhi), George Clooney come testimonial. La *Cost Structure* combina forti costi di marketing/brand-building con costi industriali di capsule e macchine. I *Revenue Streams* sono di tipo *razor-and-blade*: prezzo basso/intermedio sulla macchina, alti margini ricorrenti sulle capsule.

### 3.2 La matrice di Abell come supporto al Canvas

Per identificare con rigore i *Customer Segments*, le slide propongono uno strumento classico complementare: la **matrice di Abell**, che incrocia tre dimensioni — *Customer Groups* (chi serviamo), *Customer Functions/Needs* (quali bisogni soddisfiamo) e *Technology* (con quale tecnologia rispondiamo). La matrice di Abell costringe l'impresa a definire l'arena competitiva non in termini di "settore" generico ma di *intersezione* tra gruppi, bisogni e tecnologie, e introduce naturalmente la riflessione sulla **customer equity** e sulla *omogeneità* dei soggetti dentro ciascun segmento (modelli di acquisto, modalità di fruizione, capacità di spesa, contenuti per cui il target è disposto a pagare, fattori che influenzano la percezione di valore).

### 3.3 Le forze disruptive: Digital, Sharing, Green Economy

Le slide identificano **tre forze disruptive** che ridisegnano i Business Model tradizionali e che vanno lette come un continuum: **Digital Economy → Sharing Economy → Green Economy**. La **Digital Economy** è "quella parte della produzione economica derivata esclusivamente o principalmente dalle tecnologie digitali con un modello di business basato su beni o servizi digitali"; le sue quattro caratteristiche sono *Connessa, Condivisa, Personalizzata, Diretta*. Il **Digital Vortex** del Global Center for Digital Business Transformation rappresenta i settori come anelli concentrici risucchiati progressivamente verso il centro: più si è vicini al centro (Media & Entertainment, Tech Products & Services, Financial Services, Telecommunications, Retail), più la pressione a reinventare il modello di business è elevata e immediata. La rivoluzione digitale è abilitata da fattori **tecnologicamente possibili** (Internet pervasivo, cloud Pay-As-You-Go, software open source, hardware modulare, big data) e **socialmente possibili** (richiesta di uso collaborativo, urbanizzazione, consapevolezza ambientale, esperienze omni-channel, **accessibilità anziché proprietà**).

La **Sharing Economy** è "l'insieme di pratiche che attraverso piattaforme digitali aggregano grandi quantità di soggetti accomunati da comportamenti e esigenze simili"; vi rientra anche il **Pooling**, ossia la creazione di gruppi stabili nel tempo che utilizzano insieme un certo bene o servizio. Il ciclo virtuoso dello sharing si articola in: *Accessibilità → Condivisione → Semplificazione → Sostenibilità → Esperienza → Sperimentazione → Personalizzazione*.

---

## 4. La Triple Bottom Line e i pilastri ESG

Il concetto di **Triple Bottom Line** (TBL), formulato da John Elkington nel 1994, è il nucleo concettuale dell'impresa sostenibile e va memorizzato nella sua formulazione classica delle **3P**: **Profit, People, Planet**. La logica è che la performance d'impresa non può più essere misurata solo dalla "linea di fondo" del conto economico (l'utile per gli azionisti), ma deve essere valutata simultaneamente su tre dimensioni equiparabili: il **risultato economico** (Profit), l'**impatto sociale** sui lavoratori e sulle comunità (People), l'**impatto ambientale** sugli ecosistemi e le risorse naturali (Planet). Il diagramma di Venn della sostenibilità mostra che lo sviluppo *sostenibile* in senso pieno è solo l'intersezione delle tre dimensioni: l'intersezione Sociale-Economico è *equa*, quella Ambientale-Economico è *realizzabile*, quella Sociale-Ambientale è *vivibile*; solo la triplice intersezione è propriamente *sostenibile*.

| Dimensione | Nome inglese | Oggetto della misura | Esempi di KPI |
|------------|--------------|----------------------|---------------|
| **Economica** | Profit | Creazione di valore economico per azionisti, dipendenti, territorio | EBITDA, ROI, ROE, valore aggiunto distribuito, gettito fiscale |
| **Sociale** | People | Benessere dei lavoratori, delle comunità, della filiera | Indice di sicurezza, gender pay gap, ore di formazione, turnover, donazioni |
| **Ambientale** | Planet | Impronta ecologica delle attività | Emissioni CO₂ (Scope 1, 2, 3), consumo idrico, % energia rinnovabile, % rifiuti riciclati |

Operativamente, la TBL si traduce nei **tre pilastri ESG** (*Environmental, Social, Governance*), ormai linguaggio standard dell'investimento istituzionale e del reporting non-finanziario. Il pilastro **E** (Environmental) misura emissioni di gas serra, gestione di acqua e rifiuti, biodiversità, transizione energetica. Il pilastro **S** (Social) misura diritti umani in filiera, condizioni di lavoro, diversità e inclusione, salute e sicurezza, rapporti con le comunità. Il pilastro **G** (Governance) misura indipendenza del board, politiche di remunerazione del top management, lotta alla corruzione, trasparenza fiscale, qualità dei controlli interni. Le agenzie di rating ESG (MSCI, Sustainalytics, S&P Global) producono punteggi su questi pilastri che i fondi d'investimento utilizzano per costruire i propri portafogli responsabili.

### 4.1 Le determinanti della sostenibilità d'impresa e il sistema di valori

Le slide identificano **tre determinanti** del grado di sostenibilità di un'impresa: (i) la **rilevanza del valore sociale e ambientale** creato insieme a quello economico; (ii) l'**integrazione dei principi e delle strategie** per la sostenibilità nei valori, nell'organizzazione e nelle strategie aziendali; (iii) il **coinvolgimento degli stakeholder** nella definizione degli obiettivi di sostenibilità e nel loro raggiungimento. La sostenibilità non è dunque un "reparto" né un "addendum filantropico", ma un attributo trasversale dell'intera macchina aziendale.

Il **sistema di valori** dell'impresa — fatto di principi etici, modello comportamentale nel business e nelle relazioni interne, modello di rapporto con gli stakeholder — è plasmato da una pluralità di fattori: *purpose*, visione e missione; aspettative degli stakeholder; storia dell'impresa; caratteristiche prevalenti della popolazione aziendale; orientamenti culturali del contesto rilevante; comportamenti dei concorrenti leader. La **gestione strategica sostenibile** è quella di un'impresa orientata alla realizzazione di un *purpose* di rilievo collettivo, più ampio della sola creazione di ricchezza economica, articolato su quattro pilastri operativi: orientamento ai risultati di medio-lungo termine; impegno nella gestione dei rischi ambientali e sociali; trasparenza, integrità e coinvolgimento attivo degli stakeholder; innovazione per il miglioramento ambientale, sociale e competitivo.

### 4.2 Le fasi evolutive dell'orientamento alla sostenibilità

L'integrazione della sostenibilità in azienda non è un evento puntuale ma un percorso a stadi: (1) **Analisi delle specificità** (caratteristiche settoriali, rilevanza delle problematiche sociali/ambientali, esperienza dell'impresa, guidelines internazionali); (2) **Fase iniziale**, in cui l'impresa non ha ancora una strategia definita ma adotta "buone pratiche" sparse, adesione ai valori, supporto a no-profit e prima rendicontazione; (3) **Fase di definizione strategica**, con obiettivi di miglioramento sociale e azioni organiche e coerenti; (4) **Evoluzione organizzativa**, con creazione di unità operative dedicate, coordinamento tra business unit e stakeholder engagement strutturato; (5) infine, l'**innovazione del business model** stesso in chiave sostenibile, in cui la sostenibilità ridisegna proposta di valore, gestione dei costi, organizzazione interna e modalità di generazione dei ricavi.

---

## 5. La Piramide della CSR di Carroll

Il framework concettuale più citato per articolare la Corporate Social Responsibility è la **Piramide di Carroll** (Archie B. Carroll, 1991), che organizza le responsabilità dell'impresa su quattro livelli gerarchici, dalla base al vertice. La logica è cumulativa: i livelli superiori si reggono solo se quelli inferiori sono soddisfatti. La piramide è uno strumento sintetico per rispondere alla domanda "*che tipo di responsabilità ha l'impresa nei confronti della società?*" e va letta congiuntamente alla classica contrapposizione **Shareholder Theory di Friedman** vs **Stakeholder Approach di Freeman**.

| Livello | Responsabilità | Natura | Domanda guida | Esempio operativo |
|---------|----------------|--------|---------------|-------------------|
| 4 (apice) | **Filantropiche** | "*Be a good corporate citizen*" — desiderate dalla società | Cosa possiamo *donare* alla comunità? | Donazioni, volontariato aziendale, sponsorizzazioni culturali, fondazioni d'impresa |
| 3 | **Etiche** | "*Be ethical*" — attese dalla società | Cosa è *giusto* fare oltre la legge? | Codici etici, no a lavoro minorile in filiera, marketing onesto, parità di genere |
| 2 | **Legali** | "*Obey the law*" — richieste dalla società | Cosa la *legge* ci impone? | Rispetto fiscale, normative ambientali, sicurezza sul lavoro, antitrust, GDPR |
| 1 (base) | **Economiche** | "*Be profitable*" — pretese dalla società | Come generiamo *profitto*? | Sostenibilità economica, profitto per azionisti, efficienza, retribuzioni adeguate |

Le responsabilità **economiche** sono la base del modello: senza redditività l'impresa muore e non può adempiere ad alcuna delle responsabilità superiori. Le responsabilità **legali** rappresentano il "contratto sociale" minimo formalizzato: l'impresa deve operare nei limiti delle norme. Le responsabilità **etiche** vanno oltre la legge: sono ciò che gli stakeholder *si aspettano* anche se nessuna norma lo impone (per esempio non delocalizzare in Paesi senza tutele dei lavoratori, anche se sarebbe legale). Le responsabilità **filantropiche** sono al vertice: sono il "regalo" che l'impresa fa alla società, *desiderato* ma non *atteso*.

### 5.1 Sostenibilità vs filantropia: il ruolo della shared value strategy

Le slide distinguono nettamente la **filantropia pura** (atto privato nell'interesse pubblico, *one-shot* e disgiunto dal core business) dalla **strategia di sostenibilità integrata**. Una strategia puramente filantropica, dicono i materiali, "non consente spesso alle imprese di generare effettivo valore per sé stesse e per l'ecosistema tutto"; *tuttavia*, utilizzare la filantropia per migliorare il contesto di riferimento permette all'impresa di **allineare obiettivi sociali ed economici**, di fare leva su risorse e competenze per un supporto continuo alle cause caritatevoli e di adottare un approccio di lungo termine effettivamente sostenibile. Il diagramma "filantropia → benefici insieme sociali ed economici → puro business" rappresenta proprio questo continuum.

La cornice teorica più potente per comprendere questo passaggio è la **Creating Shared Value (CSV)** di **Michael Porter e Mark Kramer** (HBR, 2011). La CSV postula che la competitività di un'impresa e la salute delle comunità in cui opera siano *strettamente interdipendenti*: l'impresa che genera *shared value* — valore economico per sé creando contemporaneamente valore per la società affrontando i problemi sociali — supera la classica antinomia tra profitto e responsabilità. Porter e Kramer indicano tre vie operative per generare shared value: (i) **ridefinire prodotti e mercati** (servire bisogni sociali insoddisfatti, come Vodafone con M-Pesa per l'inclusione finanziaria africana); (ii) **ridefinire la produttività nella catena del valore** (ridurre consumi energetici, idrici, di materie prime — *benefici economici e ambientali insieme*); (iii) **costruire cluster di supporto locali** (rafforzare fornitori, infrastrutture, competenze del territorio, aumentando produttività e radicamento). La CSV è esplicitamente concepita come superamento sia della Shareholder Theory di Friedman sia della CSR difensiva basata su filantropia e gestione del rischio.

### 5.2 Stakeholder analysis e Stakeholder Mapping

L'approccio stakeholder richiede strumenti operativi per **identificare, classificare e gestire** i portatori di interesse. La distinzione di base è tra stakeholder **interni** (employees, manager, owners) e **esterni** (suppliers, society, government, creditors, shareholders, customers). Lo strumento operativo classico è la **matrice Power-Interest** (Stakeholder Mapping di Mendelow), che incrocia il *potere* dello stakeholder (asse Y) e il suo *interesse* nelle decisioni dell'impresa (asse X) producendo quattro quadranti di gestione:

| Posizione | Power | Interest | Strategia | Esempio |
|-----------|-------|----------|-----------|---------|
| **Key Player** | Alto | Alto | *Manage Closely* — coinvolgere in governance, consultare regolarmente | Investitori istituzionali, regolatori |
| **Keep Satisfied** | Alto | Basso | *Meet their needs* — tenere soddisfatti, cercare di alzarne l'interesse | Sindacati, autorità locali |
| **Keep Informed** | Basso | Alto | *Show consideration* — informare, coinvolgere in low-risk, *goodwill ambassador* | Comunità locali attive, ONG di settore |
| **Monitor** | Basso | Basso | *Minimum effort* — comunicazioni generali, newsletter | Pubblico generico |

Il processo di **stakeholder engagement** — secondo gli standard internazionali (AA1000) — deve rispettare quattro caratteristiche: **inclusività** (coinvolgere tutti gli stakeholder rilevanti), **completezza** (coprire tutti i temi materiali), **significatività** (concentrarsi su ciò che conta davvero), **capacità di risposta** (rispondere effettivamente alle istanze raccolte).

### 5.3 L'impatto della sostenibilità sul vantaggio competitivo

Le slide riassumono in tre macro-effetti il ritorno economico della sostenibilità: **riduzione dei costi**, **gestione dei rischi**, **miglioramento del capitale immateriale**. La **riduzione dei costi** si manifesta attraverso un atteggiamento pro-attivo a livello ambientale (minori costi di compliance, maggiore efficienza), il *redesign* dei prodotti (materie prime meno inquinanti e da risorse non finite), buone relazioni con la comunità (vantaggi fiscali e legittimazione sociale), l'adozione di standard ambientali più elevati (risposta all'incremento dei costi delle materie tossiche). La **gestione dei rischi** ridisegna gli assunti economici classici riducendo la vulnerabilità ad eventi di compliance, reputazionali e di mercato, legando la CSR ai processi chiave dello sviluppo del business. Il **miglioramento del capitale immateriale** chiude il cerchio con la **Resource-Based View** della Settimana 4: la responsabilità sociale alimenta risorse intangibili (umane, tecnologiche, reputazionali, culturali) che migliorano la performance finanziaria e, a loro volta, alimentano nuove risorse intangibili in un circolo virtuoso.

---

## 6. Economia Circolare: dalle 3R alle 6R/9R

L'economia circolare nasce in opposizione frontale al **modello economico lineare** (*take-make-use-dispose*: estrazione → produzione → consumo → smaltimento). Il diagramma circolare — materie prime → progettazione → produzione/rifabbricazione → distribuzione → consumo/uso/riutilizzo/riparazione → raccolta → riciclaggio → di nuovo materie prime — rende visivamente evidente come il "rifiuto" diventi *input* di un ciclo successivo, con i *rifiuti residui* ridotti al minimo possibile.

La gerarchia operativa più diffusa è quella delle **3R**: **Reduce, Reuse, Recycle**. È una gerarchia di preferenza: prima si **riduce** alla fonte (consumare meno materia ed energia, evitare imballaggi superflui, dematerializzare), poi si **riutilizza** (allungare la vita del prodotto attraverso più cicli d'uso, vintage, second-hand), infine si **ricicla** (recuperare i materiali a fine vita per reimmetterli come materie prime secondarie). La logica è che il riciclo, pur preferibile allo smaltimento, comporta sempre una perdita di energia e di qualità del materiale; ridurre e riutilizzare sono opzioni superiori dal punto di vista termodinamico e ambientale.

Le formulazioni più sofisticate estendono il modello a **6R** (Reduce, Reuse, Recycle, Recover, Redesign, Remanufacture) o addirittura **9R** (Refuse, Rethink, Reduce, Reuse, Repair, Refurbish, Remanufacture, Repurpose, Recycle/Recover) — il cosiddetto *9R framework* della Ellen MacArthur Foundation.

| R | Significato | Logica operativa |
|---|-------------|------------------|
| **R1 — Refuse** | Rifiutare | Rinunciare al prodotto/funzione non necessario |
| **R2 — Rethink** | Ripensare | Intensificare l'uso del prodotto (sharing, multi-funzione) |
| **R3 — Reduce** | Ridurre | Minimizzare materia prima ed energia per unità di prodotto |
| **R4 — Reuse** | Riutilizzare | Riusare il prodotto integro da parte di un altro consumatore |
| **R5 — Repair** | Riparare | Ripristinare il prodotto guasto al suo stato funzionale |
| **R6 — Refurbish** | Ricondizionare | Aggiornare e rimettere in commercio prodotti datati |
| **R7 — Remanufacture** | Rifabbricare | Smontare, ricondizionare componenti, rimontare un nuovo prodotto |
| **R8 — Repurpose** | Riconvertire | Usare il prodotto/parti per una nuova funzione |
| **R9 — Recycle/Recover** | Riciclare/Recuperare | Trasformare in materia prima secondaria o energia |

### 6.1 Le leve della circolarità e i quattro modelli circolari

Le slide identificano cinque **leve** per la definizione di sistemi di economia circolare: (i) **Value chain collaboration** (collaborazione lungo l'intera filiera); (ii) **Pushing for environmentally friendly processes** (processi ambientalmente compatibili); (iii) **Resource Efficiency** (riduzione, riuso, riciclo come efficienza intrinseca); (iv) **Design of products, processes and packaging** (progettazione circolare *by design*); (v) integrazione di **Reduce/Reuse/Recycle** come driver economico.

Sul fronte dei modelli di business, i **Circular Business Models** assumono cinque forme principali: **Circular Supplies** (input rinnovabili, biocompatibili o riciclati al 100%); **Resource Recovery** (recupero di risorse dai propri rifiuti o da quelli altrui); **Sharing Platforms** (massimizzare l'utilizzo di asset sotto-utilizzati); **Estensione del ciclo di vita del prodotto** (design for durability, riparabilità, upgradabilità, refurbishment); **Servitization / Product-as-a-Service** (vendere il servizio invece del prodotto, mantenendo la proprietà dell'asset).

### 6.2 Casi paradigmatici

**Patagonia** è l'esempio archetipico di brand integralmente costruito sulla circolarità: il programma *Worn Wear* incentiva esplicitamente il cliente a riparare e rivendere i capi usati; la celebre campagna *"Don't Buy This Jacket"* sul New York Times durante il Black Friday 2011 ha invitato i consumatori a *non* comprare nuovi prodotti se non strettamente necessario; la conversione del brand in *purpose corporation* (2018) e la successiva donazione integrale dell'azienda al pianeta da parte del fondatore Yvon Chouinard (2022) hanno reso Patagonia un caso unico di allineamento radicale tra purpose e modello di business.

**Interface**, leader globale nelle moquette modulari, ha lanciato negli anni '90 il programma *Mission Zero* con l'obiettivo (raggiunto) di azzerare l'impatto ambientale entro il 2020, e successivamente *Climate Take Back* con l'obiettivo di diventare un'impresa *carbon negative*. L'azienda ha rivoluzionato la filiera dei pavimenti tessili attraverso recupero di reti da pesca dismesse come materia prima, riduzione delle emissioni del 96% per metro quadro, design modulare per facilitare la sostituzione delle singole piastre senza buttare l'intera moquette.

Altri casi rilevanti: **Philips** vende "lighting-as-a-service" all'aeroporto di Amsterdam-Schiphol; **Michelin** ha pacchetti "pay-per-kilometer" per flotte commerciali; **Fairphone** produce smartphone modulari completamente riparabili dall'utente; **Caterpillar** ha la divisione *Cat Reman* dedicata al remanufacturing di componenti pesanti; **IKEA** ha lanciato il programma di buy-back e rivendita di mobili usati nei propri negozi.

---

## 7. Imprese Sociali, B-Corp e Società Benefit

### 7.1 Definizione di Social Enterprise

La definizione accademica più citata è quella di **Battilana e Lee (2012)**: *"Social enterprises are organizations that combine aspects of nonprofits and for profits by primarily pursue a social mission relying substantially on commercial revenue to sustain operations"*. Si tratta di **organizzazioni ibride** che incrociano la struttura economica del *for-profit* con la missione del *non-profit*, generando ricavi commerciali per sostenere autonomamente la propria missione sociale o ambientale.

| Dimensione | Profit puro | Non-profit puro | Social Enterprise |
|------------|-------------|-----------------|-------------------|
| **Mission** | Wealth generation | Social value generation | Social mission |
| **Source of financial sustainability** | Revenues / wealth generation | Grants, donations, social value generation | Revenues |
| **Role in society** | Economic mission / revenues | Social mission | Social value AND wealth generation |

La differenza chiave rispetto al *Business Model* classico è che, nel **Social Business Model**, il successo si misura **a livello di società** (non solo a livello di impresa), i *Customer Segments* si allargano a "customers + beneficiaries" (gli utenti finali del beneficio sociale possono essere diversi da chi paga), le *Key Partnerships* includono "partners + stakeholders" della comunità, e la *Value Proposition* genera valore "per clienti, beneficiari e società". La quota di valore che l'impresa cattura è **pari solo a quella necessaria per sostenersi nel futuro**: il surplus si reinveste nella missione.

### 7.2 Il Social Business Model Canvas

Lo strumento operativo per le imprese sociali è il **Social Business Model Canvas** (Social Innovation Lab), che modifica il Canvas di Osterwalder aggiungendo blocchi specifici: **Type of Intervention** (workshop, servizio, prodotto?), **Beneficiary** (chi riceve il beneficio sociale, distinto dal customer), **Social Value Proposition** e **Impact Measures** accanto alla Customer Value Proposition, **Surplus** (dove reinvestire i profitti) accanto a Cost Structure e Revenue.

### 7.3 Esempi di imprese sociali

- **Grameen Bank** (Muhammad Yunus, Bangladesh, Premio Nobel per la Pace 2006): microcredito a donne escluse dal sistema bancario tradizionale.
- **TOMS Shoes**: modello *one-for-one* — per ogni paio venduto, uno donato a bambini in povertà.
- **Warby Parker**: occhiali a prezzo accessibile + donazione di un paio per ogni vendita (programma *"Buy a Pair, Give a Pair"*).
- **Banca Etica** (Italia): finanzia esclusivamente progetti con impatto sociale e ambientale positivo.
- **Libera Terra** (Italia): cooperative agricole sui terreni confiscati alle mafie.
- **Cauto** (Brescia): cooperativa di inserimento lavorativo per persone svantaggiate nella raccolta differenziata.

### 7.4 Le imprese B-Corp e le Società Benefit

Le **B-Corp** (*Benefit Corporation*) sono imprese che ottengono una **certificazione internazionale** rilasciata dall'ente non-profit americano **B Lab**, attestante elevati standard di performance sociali e ambientali, trasparenza pubblica e responsabilità legale verso tutti gli stakeholder. Per ottenere il marchio l'impresa deve superare il **B Impact Assessment** con un punteggio minimo di **80 punti su 200** valutato su cinque aree (Governance, Workers, Community, Environment, Customers), accettando inoltre l'impegno a sottoporsi a una ricertificazione ogni tre anni.

In Italia, dal 2016, esiste anche la forma giuridica della **Società Benefit** (Legge 28 dicembre 2015, n. 208, art. 1, commi 376-384): l'Italia è stato il **primo Paese in Europa e secondo al mondo** dopo gli USA a introdurre nell'ordinamento questa figura giuridica. La Società Benefit è una società *for-profit* che statutariamente persegue, oltre allo scopo di lucro, **una o più finalità di beneficio comune** e opera in modo *responsabile, sostenibile e trasparente* nei confronti di persone, comunità, territori, ambiente, beni e attività culturali e sociali, enti, associazioni e altri portatori di interesse. È obbligata a redigere annualmente una **relazione di impatto** allegata al bilancio e a nominare un *responsabile dell'impatto*. Attenzione: B-Corp e Società Benefit non coincidono — la prima è una *certificazione* privata, la seconda è una *forma giuridica* di diritto italiano; un'impresa può essere l'una, l'altra, entrambe o nessuna.

Esempi di B-Corp note: **Patagonia**, **Ben & Jerry's**, **The Body Shop**, **Danone North America** (la più grande B-Corp al mondo per fatturato), **Illy Caffè**, **Aboca**, **Chiesi Farmaceutici**, **Save the Duck**, **Fratelli Carli**.

---

## 8. Greenwashing: il rischio reputazionale della sostenibilità di facciata

Il **greenwashing** (letteralmente *"lavaggio verde"*, da *green* + *whitewashing*) è la pratica di comunicare all'esterno un'immagine di responsabilità ambientale o sociale **sproporzionata** rispetto alle effettive azioni e performance aziendali. Il termine fu coniato dall'ambientalista Jay Westerveld nel 1986, riferendosi inizialmente alle catene alberghiere che invitavano gli ospiti a "salvare il pianeta" riutilizzando gli asciugamani — risparmio in realtà finalizzato a tagliare i costi di lavanderia. Il greenwashing è un rischio strategico crescente: i consumatori e le autorità sono sempre più sensibili e capaci di smascherarlo, con costi reputazionali e legali che possono superare di gran lunga il guadagno della comunicazione ingannevole.

I **"sette peccati del greenwashing"** (TerraChoice, 2007 — riferimento più citato nella letteratura) sono: (1) **trade-off nascosti** (vantare un attributo verde ignorando impatti negativi più gravi); (2) **assenza di prove** (claim non supportati da evidenze certificate); (3) **vaghezza** (frasi come "eco-friendly", "naturale" senza definizione); (4) **etichette false** (loghi che imitano certificazioni reali); (5) **irrilevanza** (vantare l'assenza di sostanze già vietate per legge); (6) **minore di due mali** (essere "meno peggio" di alternative comunque dannose); (7) **menzogne** vere e proprie.

Il quadro normativo si sta rapidamente irrigidendo: la **Direttiva UE 2024/825 sui Green Claims** (entrata in vigore nel 2024) vieta affermazioni ambientali generiche e non verificabili e introduce obblighi di certificazione indipendente; l'**AGCM** italiana ha già sanzionato numerose aziende — caso emblematico **Eni** nel 2020, sanzionata di 5 milioni di euro per l'uso ingannevole della denominazione "Diesel+". Il **Dieselgate Volkswagen** (2015), pur essendo una frode tecnica e non una semplice comunicazione, è il caso più citato di "greenwashing strutturale", con un costo finale superiore ai 30 miliardi di dollari tra multe, risarcimenti, richiami e perdita reputazionale.

---

## 9. Sustainable Business Model vs Business Model con programma di CSR

Una distinzione fine, ma cruciale per il futuro, è quella tra **"Sustainable" Business Model** e **Business Model con un programma di CSR**. Le slide rappresentano i due tipi su una bilancia, sottolineando come il primo sia *intrinsecamente* sostenibile mentre il secondo sia un Business Model tradizionale a cui si appende un programma di CSR.

| Caratteristica | Sustainable Business Model | Business Model con programma di CSR |
|----------------|----------------------------|--------------------------------------|
| **Logica** | Sostenibilità *by design*: integrata nei nove blocchi del Canvas | Sostenibilità *by addition*: programma a latere del core business |
| **Value Proposition** | Crea valore sociale/ambientale insieme a quello economico | Crea valore economico; il sociale è "compensazione" |
| **Misura del successo** | Triple Bottom Line integrata | Bottom Line economica + report CSR separato |
| **Dipendenza dal mercato** | I consumatori scelgono *anche* per i valori sostenibili | I consumatori scelgono per prezzo/qualità; la CSR è "extra" |
| **Esempi** | Patagonia, Interface, Grameen, Tesla iniziale | Multinazionali tradizionali con report CSR |

L'**innovazione del business model in chiave sostenibile** investe simultaneamente quattro dimensioni: la **proposta di valore** (che si arricchisce di benefici sociali e ambientali), l'**organizzazione interna** (con strutture, ruoli e cultura riallineate al purpose), le **modalità di generazione dei ricavi** (revenue stream coerenti con la sostenibilità — abbonamenti, servitization, modelli inclusivi), la **gestione ottimale dei costi** (efficienza energetica, riduzione sprechi, filiera responsabile come fonte di risparmio strutturale).

---

## In sintesi (estesa)

- Il **Business Model Canvas** è il foglio unico in cui leggere i 9 blocchi (*sistema del valore* + *proposta* + *condizioni fondamentali del mercato* + *profittabilità*); la tabella di sintesi al §3 è il riferimento operativo da memorizzare.
- Le tre forze disruptive — **Digital Economy, Sharing Economy, Green Economy** — costringono a reinventare i modelli classici; il Digital Vortex misura la velocità con cui ciò avviene per ogni settore.
- La **Triple Bottom Line** (Profit-People-Planet) è la traduzione operativa della sostenibilità; i pilastri **ESG** ne sono la versione finanziaria-istituzionale.
- La **Piramide di Carroll** struttura le responsabilità su quattro livelli (Economiche → Legali → Etiche → Filantropiche) e va letta nel passaggio paradigmatico **Friedman → Freeman**.
- La **Creating Shared Value** di Porter e Kramer supera l'antinomia profitto/responsabilità: l'impresa che risolve problemi sociali genera anche più valore economico.
- Lo **stakeholder engagement** richiede strumenti (mappa Power-Interest, matrice di materialità) e principi (inclusività, completezza, significatività, capacità di risposta).
- L'**economia circolare** declina le 3R/6R/9R in cinque modelli operativi: *Circular Supplies, Resource Recovery, Sharing Platforms, Product Life Extension, Servitization*; casi guida sono Patagonia, Interface, Philips, Fairphone.
- Le **imprese sociali** (Grameen, TOMS, Banca Etica) e le **B-Corp / Società Benefit** (Patagonia, Danone NA, Illy, Chiesi) integrano profitto e missione sociale a livello statutario o certificativo.
- Il **greenwashing** è il rischio reputazionale opposto: nuove direttive UE (Green Claims) e autorità antitrust nazionali stanno accelerando l'enforcement.
- La differenza tra **Sustainable Business Model** e **Business Model + CSR** è strutturale: il primo integra la sostenibilità *by design* nei 9 blocchi del Canvas, il secondo la appende come programma a latere.
`;

// ══════════════════════════════════════════════════════════════
//  SVG ENGINE
// ══════════════════════════════════════════════════════════════
const W = 520, H = 290;
const PL = 52, PR = 18, PT = 18, PB = 40;
const cW = W - PL - PR;
const cH = H - PT - PB;

const toX = (v, vMin, vMax) => PL + ((v - vMin) / (vMax - vMin)) * cW;
const toY = (v, yMin, yMax) => {
  const range = yMax - yMin;
  const clamped = Math.max(yMin, Math.min(v, yMax));
  return PT + (1 - (clamped - yMin) / range) * cH;
};

function Axes({ xMin = 0, xMax, yMin = 0, yMax, xLabel = '', yLabel = '', nX = 5, nY = 4, xFmt = v => v.toFixed(1), yFmt = v => v.toFixed(1) }) {
  const xTicks = Array.from({ length: nX + 1 }, (_, i) => xMin + (i / nX) * (xMax - xMin));
  const yTicks = Array.from({ length: nY + 1 }, (_, i) => yMin + (i / nY) * (yMax - yMin));
  return (
    <g>
      {xTicks.map((x, i) => (
        <g key={i}>
          <line x1={toX(x, xMin, xMax)} y1={PT} x2={toX(x, xMin, xMax)} y2={PT + cH} stroke="#e2e8f0" strokeWidth={0.8} />
          <text x={toX(x, xMin, xMax)} y={PT + cH + 15} textAnchor="middle" fontSize={10} fill="#94a3b8">{xFmt(x)}</text>
        </g>
      ))}
      {yTicks.map((y, i) => (
        <g key={i}>
          <line x1={PL} y1={toY(y, yMin, yMax)} x2={PL + cW} y2={toY(y, yMin, yMax)} stroke="#e2e8f0" strokeWidth={0.8} />
          <text x={PL - 6} y={toY(y, yMin, yMax) + 4} textAnchor="end" fontSize={10} fill="#94a3b8">{yFmt(y)}</text>
        </g>
      ))}
      <line x1={PL} y1={PT} x2={PL} y2={PT + cH} stroke="#475569" strokeWidth={1.5} />
      <line x1={PL} y1={PT + cH} x2={PL + cW} y2={PT + cH} stroke="#475569" strokeWidth={1.5} />
      <text x={PL + cW + 4} y={PT + cH + 3} fontSize={13} fill="#475569" fontStyle="italic">{xLabel}</text>
      {yLabel && <text x={PL - 38} y={PT - 5} fontSize={12} fill="#64748b" fontStyle="italic">{yLabel}</text>}
    </g>
  );
}

function SliderControl({ label, symbol, value, min, max, step, onChange, color, fmt = v => v.toFixed(2) }) {
  return (
    <div className="slider-row">
      <div className="slider-header">
        <span className="slider-label">{label} <em>({symbol})</em></span>
        <span className="slider-value" style={{ color }}>{fmt(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        style={{ '--slider-color': color }}
      />
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAPH 1 — TRIPLE BOTTOM LINE: Profit, People, Planet
// ══════════════════════════════════════════════════════════════
function TripleBottomLineGraph() {
  const [profit, setProfit] = useState(70);
  const [people, setPeople] = useState(55);
  const [planet, setPlanet] = useState(40);

  const xMin = 0, xMax = 3;
  const yMin = 0, yMax = 100;

  // Sostenibilità complessiva = media pesata (pesi uguali 1/3 ciascuno)
  const overall = (profit + people + planet) / 3;
  const esgThreshold = 60;

  const bars = [
    { label: 'Profit', value: profit, color: '#0ea5e9', x: 0.5 },
    { label: 'People', value: people, color: '#16a34a', x: 1.5 },
    { label: 'Planet', value: planet, color: '#f59e0b', x: 2.5 },
  ];

  const barW = 60;

  return (
    <div className="graph-block">
      <h4 className="graph-title">Triple Bottom Line: Profit • People • Planet (sostenibilità integrata)</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          <Axes xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax} xLabel="" yLabel="punteggio (0-100)" nX={3} xFmt={() => ''} yFmt={v => v.toFixed(0)} />
          {/* ESG threshold line */}
          <line x1={PL} y1={toY(esgThreshold, yMin, yMax)} x2={PL + cW} y2={toY(esgThreshold, yMin, yMax)} stroke="#dc2626" strokeWidth={1.5} strokeDasharray="5,3" />
          <text x={PL + cW - 80} y={toY(esgThreshold, yMin, yMax) - 4} fontSize={10} fill="#dc2626">soglia ESG (60)</text>
          {/* Bars */}
          {bars.map((b, i) => (
            <g key={i}>
              <rect x={toX(b.x, xMin, xMax) - barW / 2} y={toY(b.value, yMin, yMax)} width={barW} height={toY(0, yMin, yMax) - toY(b.value, yMin, yMax)} fill={b.color} opacity={0.85} stroke="#fff" strokeWidth={1.5} />
              <text x={toX(b.x, xMin, xMax)} y={toY(b.value, yMin, yMax) - 6} textAnchor="middle" fontSize={11} fill={b.color} fontWeight="600">{b.value.toFixed(0)}</text>
              <text x={toX(b.x, xMin, xMax)} y={PT + cH + 28} textAnchor="middle" fontSize={11} fill="#475569" fontWeight="600">{b.label}</text>
            </g>
          ))}
          {/* Overall marker */}
          <line x1={PL} y1={toY(overall, yMin, yMax)} x2={PL + cW} y2={toY(overall, yMin, yMax)} stroke="#a855f7" strokeWidth={1.5} strokeDasharray="2,2" />
          <text x={PL + 4} y={toY(overall, yMin, yMax) - 4} fontSize={10} fill="#a855f7">media ({overall.toFixed(0)})</text>
        </svg>
        <div className="graph-controls">
          <SliderControl label="Profit (economico)" symbol="P₁" value={profit} min={0} max={100} step={1} onChange={setProfit} color="#0ea5e9" fmt={v => v.toFixed(0)} />
          <SliderControl label="People (sociale)" symbol="P₂" value={people} min={0} max={100} step={1} onChange={setPeople} color="#16a34a" fmt={v => v.toFixed(0)} />
          <SliderControl label="Planet (ambientale)" symbol="P₃" value={planet} min={0} max={100} step={1} onChange={setPlanet} color="#f59e0b" fmt={v => v.toFixed(0)} />
          <div className="result-box">
            <div className="result-row"><strong>Sostenibilità complessiva</strong> <span style={{ color: overall >= esgThreshold ? '#16a34a' : '#dc2626' }}>{overall.toFixed(1)}</span></div>
            <div className="result-row"><strong>Status ESG</strong> <span>{overall >= esgThreshold ? 'Accettabile' : 'Sotto soglia'}</span></div>
          </div>
          <div className="insight-mini">La Triple Bottom Line richiede equilibrio tra le tre dimensioni: un'impresa con profitto alto ma scarso impatto sociale o ambientale non è sostenibile. La soglia ESG di accettabilità è fissata a 60.</div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAPH 2 — PIRAMIDE DI CARROLL: 4 livelli di responsabilità
// ══════════════════════════════════════════════════════════════
function CarrollPyramidGraph() {
  const [econ, setEcon] = useState(8);
  const [legal, setLegal] = useState(7);
  const [ethic, setEthic] = useState(5);
  const [philo, setPhilo] = useState(3);

  // Layout piramide: base più larga (economiche), apice (filantropiche)
  const cx = PL + cW / 2;
  const baseY = PT + cH - 10;
  const topY = PT + 15;
  const totalH = baseY - topY;
  const layerH = totalH / 4;

  // Larghezza scalata sull'intensità (ma anche sulla posizione: base sempre più larga)
  const maxW = cW - 30;
  const layers = [
    { label: 'Economiche', value: econ, color: '#0ea5e9', baseScale: 1.0 },
    { label: 'Legali', value: legal, color: '#16a34a', baseScale: 0.78 },
    { label: 'Etiche', value: ethic, color: '#f59e0b', baseScale: 0.55 },
    { label: 'Filantropiche', value: philo, color: '#a855f7', baseScale: 0.32 },
  ];

  const totalCommitment = econ + legal + ethic + philo;
  const balance = Math.min(econ, legal, ethic, philo) / Math.max(econ, legal, ethic, philo, 0.01);

  return (
    <div className="graph-block">
      <h4 className="graph-title">Piramide di Carroll: 4 livelli di responsabilità sociale d'impresa</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          {/* Background grid */}
          <rect x={PL} y={PT} width={cW} height={cH} fill="#f8fafc" stroke="#e2e8f0" strokeWidth={0.8} />
          {layers.map((l, i) => {
            const y = baseY - (i + 1) * layerH;
            const intensity = l.value / 10;
            const scale = l.baseScale * (0.5 + 0.5 * intensity);
            const w = maxW * scale;
            const opacity = 0.4 + 0.6 * intensity;
            return (
              <g key={i}>
                <rect x={cx - w / 2} y={y} width={w} height={layerH - 2} fill={l.color} opacity={opacity} stroke="#fff" strokeWidth={1.5} />
                <text x={cx} y={y + layerH / 2 + 4} textAnchor="middle" fontSize={11} fill="#fff" fontWeight="600">{l.label}</text>
                <text x={cx + w / 2 + 6} y={y + layerH / 2 + 4} fontSize={10} fill={l.color} fontWeight="600">{l.value.toFixed(1)}/10</text>
              </g>
            );
          })}
          <text x={cx} y={PT + 10} textAnchor="middle" fontSize={10} fill="#94a3b8" fontStyle="italic">apice — discrezionali</text>
          <text x={cx} y={baseY + 18} textAnchor="middle" fontSize={10} fill="#94a3b8" fontStyle="italic">base — fondamentali</text>
        </svg>
        <div className="graph-controls">
          <SliderControl label="Resp. Economiche" symbol="E" value={econ} min={0} max={10} step={0.1} onChange={setEcon} color="#0ea5e9" fmt={v => v.toFixed(1)} />
          <SliderControl label="Resp. Legali" symbol="L" value={legal} min={0} max={10} step={0.1} onChange={setLegal} color="#16a34a" fmt={v => v.toFixed(1)} />
          <SliderControl label="Resp. Etiche" symbol="Et" value={ethic} min={0} max={10} step={0.1} onChange={setEthic} color="#f59e0b" fmt={v => v.toFixed(1)} />
          <SliderControl label="Resp. Filantropiche" symbol="F" value={philo} min={0} max={10} step={0.1} onChange={setPhilo} color="#a855f7" fmt={v => v.toFixed(1)} />
          <div className="result-box">
            <div className="result-row"><strong>Impegno totale</strong> <span>{totalCommitment.toFixed(1)} / 40</span></div>
            <div className="result-row"><strong>Equilibrio piramide</strong> <span style={{ color: balance > 0.5 ? '#16a34a' : '#f59e0b' }}>{(balance * 100).toFixed(0)}%</span></div>
          </div>
          <div className="insight-mini">La piramide di Carroll prevede una gerarchia: prima essere economicamente sostenibili e rispettare le leggi, poi agire eticamente e infine impegnarsi filantropicamente. La base (economiche) è sempre più ampia.</div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAPH 3 — MATRICE DI MENDELOW: Power vs Interest
// ══════════════════════════════════════════════════════════════
function StakeholderMatrixGraph() {
  const [movPower, setMovPower] = useState(7);
  const [movInterest, setMovInterest] = useState(6);

  const xMin = 0, xMax = 10;
  const yMin = 0, yMax = 10;

  // Stakeholder fissi
  const fixed = [
    { name: 'Azionisti', power: 9, interest: 9, color: '#0ea5e9' },
    { name: 'Dipendenti', power: 4, interest: 8, color: '#16a34a' },
    { name: 'Clienti', power: 6, interest: 7, color: '#f59e0b' },
    { name: 'Fornitori', power: 5, interest: 4, color: '#a855f7' },
    { name: 'Comunità', power: 3, interest: 5, color: '#ec4899' },
  ];

  // Stakeholder mobile = Governo (gestito dagli slider)
  const movable = { name: 'Governo', power: movPower, interest: movInterest, color: '#dc2626' };

  // Determina quadrante (4 zone Mendelow)
  const getQuadrant = (p, i) => {
    if (p >= 5 && i >= 5) return 'Manage Closely';
    if (p >= 5 && i < 5) return 'Keep Satisfied';
    if (p < 5 && i >= 5) return 'Keep Informed';
    return 'Monitor';
  };
  const quadrant = getQuadrant(movPower, movInterest);

  return (
    <div className="graph-block">
      <h4 className="graph-title">Matrice di Mendelow: Power-Interest dei stakeholder</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          <Axes xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax} xLabel="Interesse" yLabel="Potere" nX={5} nY={5} xFmt={v => v.toFixed(0)} yFmt={v => v.toFixed(0)} />
          {/* Quadrant background colors */}
          <rect x={toX(5, xMin, xMax)} y={PT} width={toX(10, xMin, xMax) - toX(5, xMin, xMax)} height={toY(5, yMin, yMax) - PT} fill="#dc2626" opacity={0.08} />
          <rect x={PL} y={PT} width={toX(5, xMin, xMax) - PL} height={toY(5, yMin, yMax) - PT} fill="#f59e0b" opacity={0.08} />
          <rect x={toX(5, xMin, xMax)} y={toY(5, yMin, yMax)} width={toX(10, xMin, xMax) - toX(5, xMin, xMax)} height={toY(0, yMin, yMax) - toY(5, yMin, yMax)} fill="#16a34a" opacity={0.08} />
          <rect x={PL} y={toY(5, yMin, yMax)} width={toX(5, xMin, xMax) - PL} height={toY(0, yMin, yMax) - toY(5, yMin, yMax)} fill="#94a3b8" opacity={0.08} />
          {/* Quadrant divider lines */}
          <line x1={toX(5, xMin, xMax)} y1={PT} x2={toX(5, xMin, xMax)} y2={PT + cH} stroke="#94a3b8" strokeWidth={1.2} strokeDasharray="3,3" />
          <line x1={PL} y1={toY(5, yMin, yMax)} x2={PL + cW} y2={toY(5, yMin, yMax)} stroke="#94a3b8" strokeWidth={1.2} strokeDasharray="3,3" />
          {/* Quadrant labels */}
          <text x={toX(2.5, xMin, xMax)} y={PT + 14} textAnchor="middle" fontSize={9} fill="#f59e0b" fontWeight="600">Keep Satisfied</text>
          <text x={toX(7.5, xMin, xMax)} y={PT + 14} textAnchor="middle" fontSize={9} fill="#dc2626" fontWeight="600">Manage Closely</text>
          <text x={toX(2.5, xMin, xMax)} y={toY(0.5, yMin, yMax)} textAnchor="middle" fontSize={9} fill="#94a3b8" fontWeight="600">Monitor</text>
          <text x={toX(7.5, xMin, xMax)} y={toY(0.5, yMin, yMax)} textAnchor="middle" fontSize={9} fill="#16a34a" fontWeight="600">Keep Informed</text>
          {/* Fixed stakeholders */}
          {fixed.map((s, i) => (
            <g key={i}>
              <circle cx={toX(s.interest, xMin, xMax)} cy={toY(s.power, yMin, yMax)} r={5} fill={s.color} opacity={0.85} stroke="#fff" strokeWidth={1.5} />
              <text x={toX(s.interest, xMin, xMax) + 7} y={toY(s.power, yMin, yMax) + 3} fontSize={9} fill={s.color} fontWeight="600">{s.name}</text>
            </g>
          ))}
          {/* Movable stakeholder */}
          <circle cx={toX(movable.interest, xMin, xMax)} cy={toY(movable.power, yMin, yMax)} r={7} fill={movable.color} stroke="#fff" strokeWidth={2} />
          <text x={toX(movable.interest, xMin, xMax) + 9} y={toY(movable.power, yMin, yMax) + 3} fontSize={10} fill={movable.color} fontWeight="700">{movable.name}</text>
        </svg>
        <div className="graph-controls">
          <SliderControl label="Potere (Governo)" symbol="P" value={movPower} min={0} max={10} step={0.1} onChange={setMovPower} color="#dc2626" fmt={v => v.toFixed(1)} />
          <SliderControl label="Interesse (Governo)" symbol="I" value={movInterest} min={0} max={10} step={0.1} onChange={setMovInterest} color="#dc2626" fmt={v => v.toFixed(1)} />
          <div className="result-box">
            <div className="result-row"><strong>Quadrante</strong> <span style={{ color: '#dc2626' }}>{quadrant}</span></div>
            <div className="result-row"><strong>Strategia</strong> <span>{quadrant === 'Manage Closely' ? 'Coinvolgere' : quadrant === 'Keep Satisfied' ? 'Tener soddisfatto' : quadrant === 'Keep Informed' ? 'Informare' : 'Monitorare'}</span></div>
          </div>
          <div className="insight-mini">La matrice di Mendelow classifica gli stakeholder in 4 quadranti in base a potere e interesse. Il livello di coinvolgimento varia: dal monitoraggio passivo per chi ha basso potere/basso interesse, alla gestione stretta per chi ha alto potere/alto interesse.</div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAPH 4 — ECONOMIA CIRCOLARE: 5R vs lineare
// ══════════════════════════════════════════════════════════════
function CircularEconomyGraph() {
  const [reduce, setReduce] = useState(60);
  const [reuse, setReuse] = useState(50);
  const [recycle, setRecycle] = useState(70);
  const [refurb, setRefurb] = useState(40);
  const [remanu, setRemanu] = useState(30);

  const xMin = 0, xMax = 5;
  const yMin = 0, yMax = 100;

  // Pesi: ogni R vale di più man mano che si sale nella gerarchia
  const w = { reduce: 0.30, reuse: 0.25, recycle: 0.15, refurb: 0.15, remanu: 0.15 };
  const circularity = reduce * w.reduce + reuse * w.reuse + recycle * w.recycle + refurb * w.refurb + remanu * w.remanu;
  // Modello lineare (take-make-dispose): circolarità = 0
  const linearBaseline = 0;
  const savingsVsLinear = circularity - linearBaseline;

  const bars = [
    { label: 'Reduce', value: reduce, color: '#16a34a', x: 0.5 },
    { label: 'Reuse', value: reuse, color: '#0ea5e9', x: 1.5 },
    { label: 'Recycle', value: recycle, color: '#a855f7', x: 2.5 },
    { label: 'Refurbish', value: refurb, color: '#f59e0b', x: 3.5 },
    { label: 'Remanufacture', value: remanu, color: '#ec4899', x: 4.5 },
  ];

  const barW = 35;

  return (
    <div className="graph-block">
      <h4 className="graph-title">Economia circolare (5R) vs economia lineare (take-make-dispose)</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          <Axes xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax} xLabel="" yLabel="intensità (%)" nX={5} xFmt={() => ''} yFmt={v => v.toFixed(0)} />
          {/* Linear baseline */}
          <line x1={PL} y1={toY(linearBaseline, yMin, yMax)} x2={PL + cW} y2={toY(linearBaseline, yMin, yMax)} stroke="#dc2626" strokeWidth={1.5} strokeDasharray="5,3" />
          <text x={PL + 4} y={toY(linearBaseline, yMin, yMax) - 4} fontSize={9} fill="#dc2626">lineare = 0</text>
          {/* Circularity reference */}
          <line x1={PL} y1={toY(circularity, yMin, yMax)} x2={PL + cW} y2={toY(circularity, yMin, yMax)} stroke="#16a34a" strokeWidth={1.2} strokeDasharray="2,2" />
          <text x={PL + cW - 100} y={toY(circularity, yMin, yMax) - 4} fontSize={9} fill="#16a34a">circolarità ({circularity.toFixed(0)})</text>
          {/* Bars */}
          {bars.map((b, i) => (
            <g key={i}>
              <rect x={toX(b.x, xMin, xMax) - barW / 2} y={toY(b.value, yMin, yMax)} width={barW} height={toY(0, yMin, yMax) - toY(b.value, yMin, yMax)} fill={b.color} opacity={0.85} stroke="#fff" strokeWidth={1.2} />
              <text x={toX(b.x, xMin, xMax)} y={toY(b.value, yMin, yMax) - 5} textAnchor="middle" fontSize={9} fill={b.color} fontWeight="600">{b.value.toFixed(0)}</text>
              <text x={toX(b.x, xMin, xMax)} y={PT + cH + 14} textAnchor="middle" fontSize={9} fill="#475569" fontWeight="600">{b.label}</text>
            </g>
          ))}
        </svg>
        <div className="graph-controls">
          <SliderControl label="Reduce" symbol="R₁" value={reduce} min={0} max={100} step={1} onChange={setReduce} color="#16a34a" fmt={v => v.toFixed(0) + '%'} />
          <SliderControl label="Reuse" symbol="R₂" value={reuse} min={0} max={100} step={1} onChange={setReuse} color="#0ea5e9" fmt={v => v.toFixed(0) + '%'} />
          <SliderControl label="Recycle" symbol="R₃" value={recycle} min={0} max={100} step={1} onChange={setRecycle} color="#a855f7" fmt={v => v.toFixed(0) + '%'} />
          <SliderControl label="Refurbish" symbol="R₄" value={refurb} min={0} max={100} step={1} onChange={setRefurb} color="#f59e0b" fmt={v => v.toFixed(0) + '%'} />
          <SliderControl label="Remanufacture" symbol="R₅" value={remanu} min={0} max={100} step={1} onChange={setRemanu} color="#ec4899" fmt={v => v.toFixed(0) + '%'} />
          <div className="result-box">
            <div className="result-row"><strong>Circolarità totale</strong> <span style={{ color: '#16a34a' }}>{circularity.toFixed(1)}</span></div>
            <div className="result-row"><strong>Risparmio vs lineare</strong> <span>+{savingsVsLinear.toFixed(1)}</span></div>
          </div>
          <div className="insight-mini">L'economia circolare massimizza il valore tramite le 5R: Reduce (riduzione) ha il peso maggiore, seguita da Reuse. Il modello lineare "take-make-dispose" ha circolarità zero per definizione.</div>
        </div>
      </div>
    </div>
  );
}

export default function Week6() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', paddingBottom: '4rem' }}>
      <div className="page-header">
        <div style={{ color: 'var(--accent-cyan)', fontWeight: 600, letterSpacing: '0.1em', fontSize: '0.875rem', marginBottom: '0.5rem' }}>SETTIMANA 06</div>
        <h1 className="page-title gradient-text" style={{ fontSize: '3rem' }}>Business Model e Sostenibilità</h1>
      </div>

      <div className="content-section glass-panel markdown-body">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownContent}</ReactMarkdown>
      </div>

      <div className="content-section glass-panel" style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>📊 Visualizzazioni Interattive</h2>
        <TripleBottomLineGraph />
        <CarrollPyramidGraph />
        <StakeholderMatrixGraph />
        <CircularEconomyGraph />
      </div>
    </div>
  );
}
