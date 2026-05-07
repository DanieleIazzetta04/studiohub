import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import '../index.css';
import './macro/macro.css';

const markdownContent = `
# Capitolo 8 — Strategie Corporate, Sinergie e Matrice BCG

## Introduzione: dal "come" al "dove" competere

Nei capitoli precedenti abbiamo lavorato sulla **Business Strategy**, cioè la strategia competitiva a livello di singola area di affari. In quel contesto la domanda guida era: *come possiamo ottenere un vantaggio competitivo rispetto ai nostri rivali all'interno di un determinato settore?* Abbiamo studiato le cinque forze di Porter, la catena del valore, le strategie generiche di leadership di costo, differenziazione e focalizzazione. Tutto questo serve a battere i concorrenti quando si è già deciso in quale mercato competere.

La **Corporate Strategy** sposta il punto di osservazione di un livello più in alto. Non chiede più "come vincere" dentro un singolo settore, ma chiede "dove vogliamo competere". È la strategia di gruppo, la strategia che viene elaborata ai piani alti del consiglio di amministrazione, dove si decidono le architetture complessive del business. Il CEO di un grande gruppo non si domanda solo come battere i concorrenti nel settore X: si domanda in quanti e quali settori il gruppo deve essere presente, se entrare in nuovi mercati geografici, se acquistare un concorrente, se integrarsi con un fornitore, se scorporare una divisione poco redditizia.

La Corporate Strategy definisce quindi il **raggio d'azione dell'impresa**: il perimetro complessivo delle attività, l'architettura dei business in cui l'impresa sceglie di operare. Il suo obiettivo è creare valore nel lungo periodo attraverso decisioni strutturali che riguardano l'intera organizzazione, non la singola unità di business. Le tre grandi direttrici attraverso cui un'impresa modifica il proprio raggio d'azione sono tre strategie di crescita classiche:

1. **Integrazione Verticale** — espansione lungo la filiera produttiva, verso i fornitori (a monte) o verso i distributori e clienti finali (a valle).
2. **Diversificazione** — ingresso in business diversi da quello di origine, correlati o totalmente non correlati.
3. **Internazionalizzazione** — espansione geografica oltre i confini nazionali, verso mercati esteri.

Ognuna di queste direttrici risponde a logiche economiche, strategiche e organizzative specifiche, che vediamo ora nel dettaglio.

---

## 1. Integrazione Verticale

### 1.1 La filiera produttiva

Per capire l'integrazione verticale, bisogna prima avere chiara l'idea di **filiera**. La filiera produttiva è la sequenza delle lavorazioni e dei passaggi necessari per trasformare le materie prime grezze in un prodotto finito pronto per il consumatore. Ogni impresa occupa una o più fasi di questa catena, e il prodotto "cresce" passando da una fase all'altra, accumulando valore.

Prendiamo come esempio il settore dell'abbigliamento in cotone. La filiera completa è approssimativamente questa: *coltivazione del cotone → ginnatura (separazione della fibra dal seme) → filatura → tessitura → tintura e finissaggio → confezionamento → distribuzione all'ingrosso → vendita al dettaglio.* Ogni singolo passaggio può essere svolto da un'impresa diversa, o può essere internalizzato. Un'azienda di moda può limitarsi a progettare le collezioni e acquistare tutto il resto dai fornitori; oppure può decidere di possedere le filature, le tintorie e la rete dei negozi monomarca. La stessa scelta esiste per qualsiasi prodotto: l'automobile (dal minerale del ferro all'acquisto nel concessionario), il caffè (dalla piantagione al bar), l'iPhone (dal silicio ai negozi Apple).

### 1.2 Definizione di integrazione verticale

L'**Integrazione Verticale** è la decisione strategica di internalizzare una o più fasi della filiera, facendole svolgere all'interno dell'impresa invece di acquistarle dal mercato. Più sono le fasi che l'impresa presidia direttamente sotto il proprio controllo proprietario, più è alto il suo "grado" di integrazione verticale.

L'integrazione può andare in due direzioni:

- **Integrazione a monte (upstream):** l'impresa si espande verso le fasi precedenti della filiera, avvicinandosi alle materie prime e allontanandosi dal cliente finale. Un esempio classico è Luxottica che integra a monte acquistando le fabbriche di componenti ottici, oppure un produttore di cioccolato che acquista direttamente le piantagioni di cacao.
- **Integrazione a valle (downstream):** l'impresa si espande verso le fasi successive, avvicinandosi al consumatore finale. Un esempio è Apple che apre i propri Apple Store invece di vendere solo tramite rivenditori terzi, o un produttore di scarpe che apre una catena di negozi monomarca.

### 1.3 Il criterio economico del "Make or Buy"

La scelta tra integrarsi o appoggiarsi a fornitori esterni viene affrontata in economia con la logica del **Make or Buy** (produrre internamente o comprare dal mercato). È la domanda che ogni impresa deve porsi per ogni attività che svolge: ci conviene farla dentro casa o ci conviene affidarla a qualcun altro?

La risposta in prima approssimazione è puramente economica: si confrontano i costi delle due alternative. Produrre internamente è conveniente quando:

$$Cp + Ca < P + Ct$$

Dove:

- **Cp (Costi di Produzione interna):** sono i costi diretti per produrre l'output nel nostro nuovo reparto interno — materie prime, energia, manodopera, ammortamento degli impianti dedicati.
- **Ca (Costi Amministrativi):** sono i costi fissi organizzativi che si aggiungono quando l'impresa si allarga. Nuovi manager da assumere, nuovi sistemi di controllo, più burocrazia, più coordinamento. Questi costi esistono solo perché abbiamo internalizzato una fase.
- **P (Prezzo di Acquisto):** il prezzo pagato al fornitore esterno per procurarsi lo stesso output sul mercato.
- **Ct (Costi di Transazione):** i costi nascosti che si pagano quando si usa il mercato per procurarsi qualcosa. Non è solo il prezzo di listino: c'è molto altro.

La disuguaglianza dice una cosa semplice: conviene fare in casa quando la somma dei costi interni (produzione + amministrazione) è minore della somma dei costi di acquisto dal mercato (prezzo + costi di transazione). Altrimenti conviene comprare.

### 1.4 I Costi di Transazione (Coase e Williamson)

Il vero elemento decisivo della formula sono i **Costi di Transazione**, un concetto introdotto dall'economista premio Nobel **Ronald Coase** (articolo del 1937 *The Nature of the Firm*) e poi sviluppato sistematicamente da **Oliver Williamson** (anch'egli premio Nobel). Il punto di Coase era rivoluzionario: se il mercato fosse perfettamente efficiente, nessuna impresa dovrebbe esistere, perché ogni coordinamento sarebbe fatto tramite contratti tra individui indipendenti. Invece le imprese esistono, e sono spesso grandi e integrate, perché il mercato **non è gratuito**: usarlo comporta dei costi nascosti, i costi di transazione appunto, e quando questi costi superano il costo di coordinare tramite la gerarchia interna, allora conviene integrarsi.

I costi di transazione si dividono in tre momenti temporali:

**1. Costi ex-ante (di ricerca e informazione).** Prima ancora di firmare un contratto, bisogna trovare il fornitore giusto. Questo implica tempo e denaro: ricerca di possibili partner, raccolta di informazioni, verifica delle certificazioni, confronto dei preventivi, valutazione della reputazione. Se il mercato è piccolo e trasparente, questo costo è basso; se è grande e opaco, può essere molto elevato.

**2. Costi durante (di negoziazione e contrattualizzazione).** Una volta scelto il fornitore, bisogna scrivere il contratto. Servono avvocati, riunioni, stesura di clausole, definizione di penali, garanzie, tempi, qualità, specifiche tecniche. Più è complessa la prestazione e più è lungo il rapporto, più costoso diventa il contratto.

**3. Costi ex-post (di controllo ed enforcement).** Dopo la firma, bisogna verificare che il fornitore rispetti il contratto: monitorare le consegne, controllare la qualità, intervenire sui ritardi. Se il fornitore si comporta male, bisogna attivare penali, chiedere risarcimenti, eventualmente andare in tribunale. Tutto questo costa tempo e denaro.

Perché esistono i costi di transazione? Perché il mercato opera in condizioni di **informazione imperfetta** e di **incertezza**. Williamson ha formalizzato due concetti chiave che spiegano la loro esistenza:

- **Razionalità limitata (Herbert Simon):** le persone non sono onniscienti. Quando scrivono un contratto, non possono prevedere tutti gli scenari futuri. Un contratto è sempre incompleto: ci saranno sempre eventi imprevisti non disciplinati. Questo lascia spazi di ambiguità.
- **Opportunismo dei contraenti:** nelle situazioni non disciplinate dal contratto, la controparte può comportarsi in modo opportunistico, cioè sfruttare l'ambiguità per perseguire i propri interessi a scapito del partner. Il fornitore può ritardare le consegne, abbassare la qualità, alzare i prezzi dei ricambi post-vendita, rivendere il know-how a concorrenti. Williamson sintetizza questo comportamento come "self-interest seeking with guile" (perseguimento dell'interesse personale con malizia).

Quando un'attività richiede **investimenti specifici** (asset specifici che hanno valore solo in quel rapporto — es. uno stabilimento costruito apposta per un singolo cliente), il rischio di opportunismo aumenta. Il fornitore sa che il cliente non può cambiarlo facilmente e può alzare i prezzi; il cliente sa che il fornitore non può vendere a nessun altro e può abbassare i prezzi. Questo rischio, chiamato **hold-up**, è una delle principali ragioni economiche per integrarsi verticalmente: l'integrazione elimina il rischio di opportunismo perché le due parti diventano una sola organizzazione.

### 1.5 Benefici dell'integrazione verticale

Quando un'impresa sceglie di integrarsi, ottiene una serie di vantaggi:

**Riduzione dei costi.** L'integrazione permette di sfruttare **economie di scala** (grande volume su singola fase → costo unitario più basso) e **economie di scopo** (stessa infrastruttura usata per più fasi → risparmio). Inoltre eliminiamo tutti i costi di transazione visti sopra: non dobbiamo più cercare fornitori, negoziare contratti, controllare qualità esterna.

**Aumento del potere di mercato.** L'integrazione aumenta il controllo sul settore, con due effetti:

- *Effetto difensivo:* si erigono barriere all'ingresso per i concorrenti. Se possediamo direttamente le materie prime critiche o i canali distributivi chiave, un nuovo entrante farà fatica ad avere accesso. Inoltre proteggiamo il know-how: se il prodotto è tecnologicamente sensibile, dare le lavorazioni a fornitori esterni rischia di trasferire loro competenze preziose, che potrebbero poi essere vendute ai concorrenti. Integrando, teniamo il know-how in casa.

- *Effetto offensivo:* si può usare la posizione verticale per attaccare i concorrenti. Possiamo praticare prezzi più bassi (perché abbiamo margini più alti grazie al controllo delle fasi a monte), possiamo conoscere meglio il comportamento del mercato finale (perché abbiamo i nostri negozi), possiamo sviluppare prodotti più coerenti lungo tutta la filiera.

**Maggiore qualità e coordinamento.** Integrando, si eliminano i conflitti di interesse con i fornitori e si garantisce una qualità uniforme in tutta la filiera. Il flusso produttivo è più fluido, si riducono scorte e tempi di attesa.

### 1.6 Svantaggi dell'integrazione verticale

L'integrazione ha però un prezzo pesante:

**Perdita di flessibilità.** Un'impresa integrata è rigida. Se cambia la tecnologia o le esigenze dei clienti, l'impresa integrata deve rinnovare tutta la filiera, mentre un'impresa non integrata può semplicemente cambiare fornitore. La rigidità è particolarmente pericolosa in settori ad alta innovazione.

**Barriere all'uscita elevate.** Uscire da una fase integrata è difficile e costoso: bisogna dismettere impianti specifici, licenziare personale, gestire contenziosi. Una volta integrati, si è "prigionieri" della propria struttura.

**Aumento della leva operativa.** Integrandosi, l'impresa si carica di costi fissi aggiuntivi (impianti, manodopera dedicata, strutture di supporto). Questo aumenta la leva operativa: l'utile diventa più sensibile alle variazioni del fatturato. In caso di contrazione della domanda, un'impresa altamente integrata soffre di più, perché deve comunque coprire i costi fissi.

**Squilibri nella capacità produttiva.** Ogni fase della filiera ha la propria "scala ottima minima" (il volume al di sotto del quale non è efficiente produrre). Integrando più fasi, è molto difficile che tutte abbiano la stessa scala ottima: si finisce per avere alcune fasi sottoutilizzate e altre sovraccariche, con inefficienze diffuse.

**Complessità gestionale.** Una filiera integrata richiede manager competenti in ambiti molto diversi tra loro. Non è facile per la direzione di un'azienda agricola gestire anche un reparto di marketing, o viceversa. La diversità organizzativa fa aumentare i costi di coordinamento e riduce la specializzazione.

### 1.7 Quando conviene integrarsi

Riassumendo, l'integrazione verticale conviene quando:
- I costi di transazione sul mercato sono alti (per asset specifici, hold-up, incertezza).
- Il know-how da proteggere è critico.
- Il settore è stabile (poca innovazione) e si possono sfruttare economie di scala.
- La scala produttiva delle fasi è compatibile.

Non conviene quando:
- Il mercato dei fornitori è competitivo e trasparente (prezzi bassi, molti fornitori affidabili).
- Il settore cambia rapidamente e serve flessibilità.
- Le fasi hanno scale minime molto diverse.
- L'impresa non ha competenze manageriali per gestire business diversi.

---

## 2. Diversificazione

### 2.1 Definizione e logica

La **Diversificazione** è la strategia con cui un'impresa entra in business nuovi, diversi da quello di origine. Mentre l'integrazione verticale espande l'impresa **lungo** la filiera (stesso settore, fasi diverse), la diversificazione espande l'impresa **oltre** i confini del settore, portandola in attività nuove, talvolta completamente estranee al core business.

Le motivazioni per diversificare sono molteplici: difendersi dalla saturazione del mercato originario, sfruttare risorse sottoutilizzate, ridurre il rischio, cogliere nuove opportunità. Ma non tutte le diversificazioni sono uguali. Esistono due grandi famiglie.

### 2.2 Diversificazione Correlata

Nella **Diversificazione Correlata**, l'impresa entra in business **collegati** al core originario. I nuovi business condividono risorse, competenze, tecnologie o mercati con quelli già esistenti. L'idea è sfruttare **sinergie**: usare le stesse risorse su più fronti, ottenendo un rendimento superiore a quello che avrebbero separate.

Le sinergie possono essere di due tipi:

**Sinergie da risorse tangibili.** L'impresa utilizza impianti, logistica, reti distributive, forza vendita già esistenti anche per il nuovo business. Per esempio, un produttore di pasta che entra nel mercato del sugo pronto utilizza gli stessi canali distributivi (supermercati), la stessa forza vendita, le stesse relazioni con la grande distribuzione.

**Sinergie da risorse intangibili.** L'impresa sfrutta il brand, il know-how, la reputazione già costruiti. Esempi classici:

- **Yamaha** produce pianoforti, motociclette, motori marini, sci nautici, racchette da tennis. Cosa hanno in comune? All'apparenza niente, ma condividono in realtà le stesse competenze tecniche (metallurgia, meccanica di precisione, acustica) e lo stesso brand di "qualità giapponese".
- **Bic** produce penne biro, rasoi usa-e-getta, accendini. Il legame è il modello di business: prodotti di plastica a basso costo, per consumo di massa, distribuiti nella grande distribuzione attraverso espositori. Le competenze tecniche di stampaggio della plastica e il know-how del marketing "mass market" sono le stesse.
- **Disney** estende il brand dal cinema ai parchi a tema, ai prodotti di merchandising, alle crociere, agli hotel. Il denominatore comune è l'universo di personaggi e la qualità del "family entertainment".

Le correlazioni possono essere distinte in:
- **Correlazione di mercato:** stessa clientela, stessi canali distributivi, stesso brand.
- **Correlazione tecnico-produttiva:** stesse tecnologie, stessi impianti, stesse competenze di R&S.

### 2.3 Diversificazione Conglomerale (non correlata)

Nella **Diversificazione Conglomerale**, l'impresa entra in business totalmente slegati dal core originario, senza sinergie operative. L'esempio storico più famoso è **General Electric** che negli anni '80 e '90 operava contemporaneamente in elettrodomestici, motori aeronautici, turbine elettriche, servizi finanziari (GE Capital), media (NBC), elettronica medicale. Un altro esempio è **Samsung**, che va dai telefoni ai cantieri navali alle assicurazioni vita.

Qual è la logica? Non ci sono sinergie produttive, quindi il beneficio deve essere altrove. L'argomento classico è la **diversificazione del rischio**: investendo in attività scorrelate, si ripartisce il rischio e si stabilizza il rendimento complessivo. Quando un settore va male, un altro va bene, e l'impresa come insieme resta stabile.

Questo argomento però ha un problema serio: anche gli azionisti possono diversificare da soli, semplicemente comprando azioni di diverse aziende sul mercato. Perché dovrebbero pagare l'impresa conglomerale per fare ciò che possono fare da soli a costo quasi zero? In più, i conglomerati soffrono di un **"conglomerate discount"**: il mercato azionario tipicamente li valuta meno della somma delle parti, perché la complessità gestionale genera inefficienze e distrugge valore.

Per questo, a partire dagli anni '90, la maggior parte dei grandi conglomerati è stata scorporata (GE ha venduto NBC, GE Capital, ecc.; ITT si è divisa in tre aziende). La diversificazione conglomerale è oggi vista con scetticismo dai teorici di strategia.

### 2.4 I Fattori che spingono alla diversificazione

Le imprese diversificano per spinte sia esterne sia interne.

**Fattori esterni (spinta dall'ambiente):**
- **Saturazione del core business:** quando la domanda nel settore originario smette di crescere (maturità o declino), l'impresa cerca nuove fonti di crescita in altri settori. È stato il caso di Philip Morris che è entrata nel food (Kraft) quando il mercato delle sigarette ha iniziato a contrarsi.
- **Costi di transazione elevati:** se è difficile gestire rapporti con fornitori o partner esterni in un determinato ambito, può convenire internalizzarlo diversificando.
- **Privatizzazioni e liberalizzazioni:** l'apertura di settori prima chiusi (telecomunicazioni, energia, trasporti, servizi pubblici) ha offerto grandi opportunità a gruppi diversificati che hanno acquisito asset pubblici.
- **Innovazioni tecnologiche:** nuove tecnologie aprono mercati nuovi e possono essere sfruttate partendo da competenze esistenti.

**Fattori interni (spinta dall'impresa):**
- **Riduzione del rischio:** i manager preferiscono distribuire il rischio per proteggere la propria posizione e stabilizzare il reddito.
- **Eccesso di cassa:** imprese molto redditizie nel core accumulano cassa che non possono reinvestire nel core stesso (ormai saturo). Diversificare è un modo per impiegarla.
- **Ambizione manageriale:** i CEO spesso amano far crescere l'impresa per ragioni di prestigio e compenso (compensi spesso legati alle dimensioni). Si parla in questi casi di "empire building" — la costruzione di imperi manageriali che serve il CEO più che gli azionisti.
- **Economie di scopo:** quando esistono risorse sottoutilizzate (un brand forte, competenze tecniche uniche, reti distributive eccellenti), diversificare permette di estrarne più valore.

### 2.5 I Tre Test di Porter

Per evitare diversificazioni distruttive di valore, **Michael Porter** (nel suo celebre articolo del 1987 *From Competitive Advantage to Corporate Strategy*) ha proposto tre test rigorosi che ogni progetto di diversificazione deve superare:

**1. Il Test dell'Attrattività del Settore.**
Il nuovo settore in cui si vuole entrare deve essere **strutturalmente attraente**, cioè capace di garantire rendimenti superiori alla media nel lungo periodo. Questa attrattività si verifica con l'analisi delle **cinque forze competitive** di Porter: potere dei fornitori, potere dei clienti, minaccia di nuovi entranti, minaccia di prodotti sostitutivi, intensità della rivalità. Un settore in rapida crescita non è automaticamente attraente: potrebbe avere rivalità feroce e margini bassi (es. il settore aereo è sempre cresciuto ma ha sempre avuto redditività disastrosa). Attrattività significa profittabilità strutturale, non solo crescita.

**2. Il Test del Costo di Ingresso.**
Il costo per entrare nel nuovo settore (sia attraverso acquisizione di un'impresa esistente, sia attraverso un investimento greenfield) **non deve mai essere superiore ai profitti futuri attesi**, altrimenti annulliamo in anticipo tutto il valore creato. Il problema è che in molte acquisizioni si paga un "premio di controllo" molto alto, e in alcuni casi il costo di ingresso è così elevato da rendere impossibile recuperare l'investimento anche se il settore è attraente. Se il settore è attraente, molti vogliono entrarci, e il prezzo di acquisto di un'impresa esistente è alto. Spesso le acquisizioni a prezzo pieno distruggono valore invece di crearlo.

**3. Il Test del "Better-Off".**
Dopo l'ingresso, **la nuova SBU deve stare meglio dentro il gruppo di quanto starebbe da sola**, e **il gruppo deve stare meglio con la nuova SBU di quanto starebbe senza**. In altre parole, ci deve essere una vera sinergia: la diversificazione deve creare un valore che non esisterebbe se le due imprese fossero separate. Se le due imprese non si danno nulla l'una all'altra, unirle non serve a niente e distrugge valore (costi amministrativi aggiuntivi, confusione gestionale).

Se anche **uno solo** dei tre test fallisce, la diversificazione è sbagliata. La maggior parte delle acquisizioni storicamente analizzate fallisce su almeno uno di questi test, e questo spiega perché molte fusioni e acquisizioni distruggono valore invece di crearlo.

---

## 3. Internazionalizzazione

### 3.1 Definizione

L'**Internazionalizzazione** è la strategia di espansione geografica dell'impresa oltre i confini nazionali. Un'impresa diventa **multinazionale** quando adotta una strategia stabile e di lungo termine di presenza su più mercati geografici.

Bisogna distinguere l'internazionalizzazione vera da semplici esportazioni occasionali. Un'impresa che vende qualche pezzo all'estero tramite un distributore non è una multinazionale. Lo diventa quando investe direttamente all'estero, costruisce filiali, acquisisce imprese, assume personale locale, adatta i prodotti ai mercati di destinazione.

### 3.2 Le motivazioni all'internazionalizzazione

L'economista John Dunning ha formalizzato le motivazioni all'internazionalizzazione nel cosiddetto **approccio eclettico** (o paradigma OLI: Ownership, Location, Internalization). Le motivazioni principali sono tre:

**Market-Seeking (ricerca di mercati).** L'impresa cerca nuovi clienti quando la domanda interna è satura o cresce troppo lentamente. I paesi emergenti offrono opportunità enormi: classi medie in crescita, mercati non ancora serviti, tassi di crescita del PIL elevati. Esempio: i produttori di auto europei e americani che hanno aggredito il mercato cinese negli anni 2000 (oggi la Cina è il più grande mercato auto del mondo). Esempio: Ferrero che ha portato la Nutella prima in Europa, poi negli USA, poi in Asia.

**Natural-Resource-Seeking (ricerca di risorse).** L'impresa cerca accesso a risorse naturali non disponibili nel paese di origine: giacimenti di petrolio e gas, minerali rari, terre agricole fertili, foreste. Le grandi compagnie petrolifere (Shell, Exxon, Eni) sono tipicamente multinazionali perché il petrolio si estrae dove c'è. La Cina ha fatto enormi investimenti in Africa proprio per assicurarsi materie prime.

**Low-Cost-Seeking (ricerca di efficienza).** L'impresa delocalizza la produzione in paesi con costo del lavoro più basso, fiscalità più favorevole, regolamentazione meno restrittiva. Questa pratica è nota come **offshoring**. Tutta la produzione elettronica mondiale è stata spostata in Asia (Cina, Vietnam, Malesia) per questo motivo. Il tessile in Bangladesh, l'auto in Europa dell'Est, i call center in India.

### 3.3 Arbitraggio Transnazionale

Oltre alle tre motivazioni classiche, le multinazionali sfruttano l'**Arbitraggio Transnazionale**: giocano sulle differenze normative e fiscali tra paesi per ottimizzare il risultato complessivo. Gli strumenti tipici sono:

- **Transfer Pricing:** le multinazionali stabiliscono prezzi interni di trasferimento tra filiali di paesi diversi in modo da spostare contabilmente gli utili verso i paesi a bassa tassazione. Se la filiale irlandese "vende" licenze alla filiale tedesca a prezzo molto alto, l'utile si accumula in Irlanda (dove l'imposta è 12,5%) invece che in Germania (dove è molto più alta).
- **Paradisi fiscali e tax rulings:** sedi legali in paesi a tassazione ridotta, accordi fiscali vantaggiosi (il caso Apple-Irlanda).
- **Arbitraggio finanziario:** capitali presi in prestito dove i tassi sono bassi, investiti dove i rendimenti sono alti.

Questa pratica è oggi oggetto di forti critiche e ha portato a iniziative internazionali (OCSE, BEPS, minimum tax globale al 15%) per limitare l'elusione fiscale.

### 3.4 Le modalità di ingresso: il Modello di Uppsala

Entrare in un mercato estero non è una scelta "tutto o niente": tipicamente si procede per gradi progressivi di impegno, come descritto dal celebre **Modello di Uppsala** (elaborato da Johanson e Vahlne negli anni '70). Man mano che l'impresa acquisisce esperienza in un mercato, aumenta il proprio impegno. I cinque stadi sono:

**1. Esportazioni Indirette.** L'impresa vende all'estero tramite intermediari (buyer, export consortia, trading companies). Non ha presenza diretta nel mercato estero. Rischio e investimento bassissimi, margini bassi, poco controllo. È spesso il primo passo per testare un mercato senza impegno reale.

**2. Esportazioni Dirette.** L'impresa costruisce una propria rete di vendita all'estero, con agenti commerciali dipendenti, rappresentanti, filiali commerciali. Bypassa gli intermediari e ha rapporti diretti con i clienti finali. L'investimento è più alto, ma aumentano margini e controllo. È lo stadio tipico delle PMI italiane esportatrici.

**3. Accordi Contrattuali (Licensing e Franchising).** L'impresa concede a partner locali il diritto di usare il proprio marchio, brevetti, know-how in cambio di royalties. Il **licensing** è tipico dell'industria (un'impresa cede a un produttore locale la licenza per produrre il suo prodotto); il **franchising** è tipico dei servizi (McDonald's, Benetton, Subway danno in franchising il format commerciale). Nessun investimento in capitale fisso nel paese estero, ma minore controllo sulla qualità e sul posizionamento.

**4. Joint Venture.** L'impresa crea una società condivisa con un partner locale, tipicamente al 50%-50%. Si condividono rischi, costi, know-how. È la strada obbligata in mercati dove la legge impone la partecipazione di un partner locale (es. Cina fino agli anni 2000 in molti settori). Il vantaggio è la conoscenza del mercato locale che il partner porta; lo svantaggio è la condivisione del controllo e il rischio di conflitti.

**5. Investimenti Diretti Esteri (IDE) totali.** Massimo livello di impegno. L'impresa investe direttamente nella creazione di una filiale estera, controllandola al 100%. Due modalità:
- **Greenfield investment:** si costruisce da zero una nuova struttura (stabilimento, sede commerciale, ecc.) nel paese estero. Tempi lunghi, controllo totale fin dall'inizio, flessibilità nella scelta del sito e delle tecnologie.
- **Brownfield investment (M&A cross-border):** si acquisisce un'impresa locale già esistente. Tempi rapidi di ingresso, accesso immediato a clienti e personale, ma rischio di problemi di integrazione culturale e di pagare un prezzo troppo alto.

Il controllo è imperativo totale. L'IDE è lo strumento principe delle multinazionali mature.

### 3.5 Vantaggi e Rischi dell'Internazionalizzazione

**Vantaggi:**
- Accesso a mercati più grandi → economie di scala.
- Diversificazione geografica del rischio (crisi in un paese, ma altri vanno bene).
- Ottimizzazione fiscale e dei costi.
- Apprendimento: contatto con mercati diversi stimola innovazione.

**Rischi:**
- Rischio di cambio: variazioni del tasso di cambio possono annullare i profitti.
- Rischio politico: instabilità, espropriazioni, dazi improvvisi.
- Rischio culturale: i prodotti di successo in un paese possono fallire in un altro per ragioni culturali non comprese.
- Complessità gestionale: coordinare un'organizzazione globale è molto più difficile che gestire un'impresa nazionale.

---

## 4. Analisi di Portafoglio e Matrice BCG

### 4.1 Il Portfolio Management

Quando un'impresa corporativa ha molte **Strategic Business Unit (SBU)** — ciascuna con il proprio mercato, i propri concorrenti, le proprie dinamiche — deve gestire il portafoglio di business come un tutto coerente. Questa attività si chiama **Portfolio Management** e ha tre obiettivi principali:

1. **Bilanciare il portafoglio:** assicurarsi che ci sia un mix corretto tra business maturi che generano cassa, business in crescita che richiedono investimenti, e business in declino da cui uscire.
2. **Allocare le risorse finanziarie:** decidere a quali SBU destinare il cash disponibile, a quali chiedere di generarlo, quali invece devono essere dismesse.
3. **Sfruttare le sinergie:** massimizzare le interdipendenze tra business per creare valore aggiuntivo rispetto alla somma delle parti.

Le **sinergie** possono essere di scopo (condivisione di risorse fisiche: impianti, canali, forza vendita) o di coordinamento (condivisione di competenze e conoscenze). Ma attenzione: le sinergie non sono mai gratuite. Per realizzarle bisogna coordinare, e il coordinamento ha dei costi:

- **Costi di coordinamento:** riunioni, sistemi informativi comuni, procedure condivise, persone dedicate al coordinamento.
- **Costi di rigidità:** ogni divisione perde autonomia decisionale, deve adattarsi agli standard del gruppo, non può muoversi liberamente.

Solo quando le sinergie reali superano questi costi, l'appartenenza al gruppo crea valore. Altrimenti, come dice Porter, la corporate strategy **distrugge** valore invece di crearlo.

### 4.2 Cos'è la Matrice BCG

La **Matrice BCG** (sviluppata negli anni '70 dalla società di consulenza **Boston Consulting Group**) è lo strumento storicamente più famoso per classificare e gestire un portafoglio di SBU. È una matrice 2×2 che colloca ogni SBU in uno di quattro quadranti in base a due dimensioni.

**Asse verticale (Y) — Tasso di Crescita del Mercato.**
È una misura **esterna**, non controllabile dall'impresa. Rappresenta l'attrattività prospettica del settore, legata allo stadio del ciclo di vita del mercato:
- Introduzione → crescita bassa o negativa (mercato embrionale)
- Sviluppo → crescita alta (mercato in espansione)
- Maturità → crescita bassa (mercato saturo)
- Declino → crescita negativa (mercato in contrazione)

La dimensione viene divisa in "alta" e "bassa" tipicamente con una soglia al 10% annuo (ma dipende dai settori).

**Asse orizzontale (X) — Quota di Mercato Relativa.**
È una misura **interna** del potere competitivo dell'SBU. Si calcola come:

$$ \\text{Quota Relativa} = \\frac{\\text{Fatturato della nostra SBU}}{\\text{Fatturato del leader del mercato (o del primo concorrente, se l'SBU è leader)}} $$

Se l'SBU ha una quota di 40% e il secondo ha 20%, la quota relativa è 2.0 (leader). Se l'SBU ha 20% e il leader ha 40%, la quota relativa è 0.5 (inseguitore).

La soglia tradizionalmente usata è **1,5**: sopra 1,5 l'SBU è considerata leader "forte"; sotto 1,5 è in posizione debole. L'asse è spesso rappresentato in scala logaritmica.

Dietro questa misura c'è un concetto potente: la **curva di esperienza**. Il BCG ha mostrato empiricamente che il costo unitario tende a scendere in modo prevedibile (tipicamente 20-30%) ogni volta che la produzione cumulata raddoppia. Chi ha la quota più alta ha prodotto di più, ha i costi più bassi, ha i margini più alti, ha più risorse per investire, resta leader. È un circolo virtuoso. Per questo la quota di mercato è così importante.

### 4.3 I Quattro Quadranti

Incrociando i due assi, ogni SBU cade in uno dei quattro quadranti:

**QUESTION MARK (Punti Interrogativi) — alta crescita, bassa quota.**
Sono business in mercati promettenti (il settore cresce molto), ma dove l'impresa è in posizione debole rispetto al leader. Esempio tipico: un produttore di software che entra nel mercato dell'intelligenza artificiale generativa, dove i leader sono OpenAI e Google.

Caratteristiche finanziarie:
- **Consumano molta cassa:** servono investimenti pesanti in marketing, R&S, capacità produttiva per tenere il ritmo del mercato in crescita.
- **Generano poca cassa:** la posizione debole non permette margini alti.
- **Saldo nettamente negativo.**

La decisione strategica è cruciale: **investire pesantemente per trasformarli in Star**, oppure **abbandonarli** se l'investimento è troppo rischioso. Non si può tenerli neutrali: il mercato cresce troppo velocemente, e senza investimento si diventa Dog.

**STAR (Stelle) — alta crescita, alta quota.**
Sono i business leader nei mercati in forte espansione. Esempio tipico: Tesla nell'auto elettrica nei primi anni 2020, o Nvidia nei chip per AI.

Caratteristiche finanziarie:
- **Consumano molta cassa:** per difendere la leadership, servono investimenti continui in innovazione, marketing, capacità.
- **Generano molta cassa:** la leadership porta margini alti.
- **Saldo tipicamente vicino al pareggio.**

Le Star non sono un'oasi di profitto immediato, ma sono **il futuro dell'impresa**. Quando il mercato maturerà, le Star diventeranno Cash Cow, e a quel punto genereranno profitti enormi perché non serviranno più grandi investimenti. Tutta la strategia di portafoglio ruota intorno alla preparazione delle Cash Cow di domani.

**CASH COW (Mucche da Mungere) — bassa crescita, alta quota.**
Sono business leader in mercati maturi, stabili, ormai saturi. Esempio classico: Coca-Cola nel mercato delle bevande gassate, Marlboro nel tabacco, Microsoft Office nelle suite di produttività.

Caratteristiche finanziarie:
- **Consumano poca cassa:** il mercato non cresce, non servono grandi investimenti espansivi.
- **Generano molta cassa:** la leadership garantisce margini elevati su un mercato consolidato.
- **Saldo nettamente positivo.**

Le Cash Cow sono la "cassaforte" dell'impresa. Il cash da loro generato viene "munto" — cioè prelevato dalla SBU e trasferito alla corporate — per finanziare i Question Mark promettenti e le Star in sviluppo. Non si investe nelle Cash Cow (a parte la manutenzione), perché il mercato non cresce e gli investimenti non rendono.

**DOG (Cani) — bassa crescita, bassa quota.**
Sono business perdenti in mercati stagnanti o in declino. Esempio: marchi di fotocamere tradizionali nel mondo degli smartphone, o marchi di dischi fisici nel mondo dello streaming.

Caratteristiche finanziarie:
- **Consumano poca cassa** (se non si investe).
- **Generano poca o nulla cassa:** posizione debole + mercato fermo = margini risicati.
- **Saldo nullo o lievemente negativo.**

I Dog sono destinati alla dismissione (**divestment**) perché non hanno futuro e occupano capacità manageriale che potrebbe essere usata meglio altrove. **Eccezione:** si tengono i Dog quando svolgono una funzione difensiva o complementare (es. proteggere una Star dagli attacchi dei concorrenti laterali, completare un portafoglio necessario per i clienti chiave).

### 4.4 La Logica Strategica del Portafoglio

La matrice BCG non è solo una classificazione, ma prescrive una precisa **logica di gestione finanziaria**:

1. **Le Cash Cow finanziano tutto.** Il cash da loro prelevato è la risorsa critica.
2. **I Question Mark vengono selezionati:** pochi, quelli più promettenti, ricevono investimenti massicci per essere trasformati in Star. Gli altri vengono abbandonati subito.
3. **Le Star ricevono il cash necessario per mantenere la leadership fino alla maturità del mercato.** Quando il mercato maturerà, diventeranno le Cash Cow di domani.
4. **I Dog vengono dismessi** (o mantenuti solo se difensivi).

Un portafoglio equilibrato deve avere una combinazione corretta di queste quattro categorie, in particolare:
- **Abbastanza Cash Cow** per finanziare la strategia.
- **Abbastanza Star e Question Mark** per preparare il futuro.
- **Pochi o nessun Dog.**

### 4.5 Limiti della Matrice BCG

Pur essendo uno strumento potente, la BCG ha limiti importanti:

- **Due sole dimensioni:** riduce la complessità competitiva a crescita e quota. Ignora fattori come la concorrenza, la tecnologia, la qualità dei clienti.
- **Ipotesi forte sulla curva di esperienza:** assume che quota alta = costi bassi, ma in molti settori moderni (alta tecnologia, servizi) questo legame è debole.
- **Quota relativa:** il "1,5" come soglia è arbitrario. In mercati molto frammentati (centinaia di concorrenti), anche un leader può avere quote basse.
- **Non considera le sinergie tra business:** ogni SBU è valutata in isolamento.
- **Staticità:** fotografa la situazione attuale ma non dice nulla sul percorso dinamico dei business.

Per questi limiti sono state sviluppate matrici più sofisticate (es. **Matrice GE/McKinsey** su 9 celle, con "attrattività del settore" e "posizione competitiva" come dimensioni multidimensionali). Ma la BCG resta il punto di partenza obbligato di qualsiasi analisi di portafoglio.

---

## 5. Approfondimenti sui temi Corporate

### 5.1 I livelli della strategia: una visione integrata

Le slide del corso impostano la riflessione partendo da una domanda apparentemente semplice — *come produciamo valore nel lungo periodo, generando rendimenti superiori alla media?* — e mostrano che la risposta richiede di operare contemporaneamente su due piani:

| Livello | Domanda guida | Oggetto di analisi | Strumento |
|---|---|---|---|
| **Corporate Strategy** | *In quale settore dovremmo operare?* | Attrattività strutturale dei settori | Cinque Forze di Porter, Matrice BCG |
| **Business Strategy** | *Come dovremmo competere?* | Vantaggio competitivo nel singolo business | Catena del Valore, strategie generiche |

Il **raggio d'azione (scope) dell'organizzazione** si dispiega lungo tre dimensioni intrecciate, che le slide rappresentano graficamente come un "vettore di crescita" tridimensionale:
- **Vertical Integration** (stages of industry value chain): quante fasi della filiera presidiamo direttamente.
- **Horizontal Integration** (products and services): in quanti business / categorie di prodotto siamo presenti.
- **Geographic Scope** (regional, national, global markets): in quante aree geografiche operiamo.

Le tre direttrici (integrazione verticale, diversificazione, internazionalizzazione) corrispondono esattamente all'espansione lungo questi tre assi.

### 5.2 Decisioni associate alla strategia di integrazione verticale

Decidere sull'integrazione verticale significa, secondo le slide, prendere **tre decisioni concatenate**:

1. **Delimitare i confini** dell'attività complessiva dell'azienda — quali fasi facciamo internamente, quali no.
2. **Stabilire i rapporti** che l'impresa intrattiene con le **controparti esterne** — fornitori, distributori, partner.
3. **Identificare le circostanze** che potrebbero portare a una **modifica dei confini** delle attività dell'impresa nel tempo (de-integrazione, re-integrazione).

Da qui emerge un concetto chiave: oltre ai costi di transazione, l'impresa deve considerare i **costi di cambiamento** (switching costs), cioè gli oneri da sostenere per abbandonare il mercato e internalizzare un'attività (oppure, viceversa, per de-integrare e tornare al mercato). Questi costi includono dismissione di impianti, formazione di nuovo personale, riprogettazione dei flussi, contenziosi con i fornitori esistenti.

### 5.3 I rischi del "Buy": perché il mercato fa paura

Le slide enumerano in modo netto i quattro **rischi tipici dell'acquisto sul mercato**, che alimentano la pressione verso l'integrazione:

| Rischio | Descrizione |
|---|---|
| **Potere contrattuale del fornitore** | Il fornitore concentrato (pochi player, asset specifici) impone prezzi e condizioni — porter's "Bargaining power of suppliers". |
| **Rischio di diffusione** | Affidando lavorazioni a terzi si trasferisce **know-how** che il fornitore può rivendere ai concorrenti, erodendo il vantaggio. |
| **Rischio di erosione della qualità** | Il fornitore può abbassare standard nel tempo per ridurre i propri costi — l'impresa cliente ne soffre l'immagine senza poter intervenire direttamente. |
| **Rischio strategico per fornitura e approvvigionamento** | Dipendenza da fornitori critici: una loro crisi (fallimento, scioperi, pandemie) blocca l'intera produzione (la fragilità delle supply chain emersa nel 2020-2022). |

### 5.4 La Matrice di Kraljic: gestire strategicamente gli acquisti

Quando l'impresa sceglie comunque di affidarsi al mercato, deve gestire il portafoglio degli acquisti con criteri strategici. Lo strumento canonico, citato nelle slide, è la **Matrice di Kraljic** (1983), che incrocia due dimensioni: **Supply Risk** (rischio di approvvigionamento, asse verticale) e **Profit Impact** (impatto sul profitto, asse orizzontale).

| Quadrante | Caratteristiche | Strategia di acquisto |
|---|---|---|
| **Strategic items** (high risk, high impact) | Componenti critici, fornitori pochi, valore elevato | **Form partnerships** — relazioni di lungo termine, joint development, eventuale integrazione verticale |
| **Bottleneck items** (high risk, low impact) | Difficili da reperire ma non strategici per il margine | **Ensure supply** — contratti di fornitura, scorte di sicurezza, fonti alternative |
| **Leverage items** (low risk, high impact) | Mercato concorrenziale, ma volumi importanti | **Exploit purchasing power** — gare competitive, riduzione del costo, sfruttamento del potere d'acquisto |
| **Non-critical items** (low risk, low impact) | Commodity di basso valore | **Simplify and automate** — e-procurement, ordini standardizzati, riduzione costi amministrativi |

La Matrice di Kraljic completa quindi la riflessione "make or buy": una volta deciso di comprare, **non tutti gli acquisti vanno gestiti allo stesso modo**.

### 5.5 Le forme intermedie di diversificazione

Le slide propongono una rappresentazione "a cerchi concentrici" della diversificazione che è più sfumata della dicotomia correlata/conglomerale. Si individuano **cinque livelli crescenti di distanza dal core business**:

1. **Core business** — il settore originario, il cuore dell'identità dell'impresa.
2. **Intorno al core business** — estensioni minime (nuovi segmenti, varianti di prodotto).
3. **Diversificazione fortemente correlata** — business con piena condivisione di tecnologie, brand, competenze.
4. **Diversificazione correlata** — business con condivisione parziale (solo mercato o solo tecnologia).
5. **Diversificazione debolmente correlata** — connessioni labili, prevalentemente di natura manageriale.
6. **Diversificazione conglomerale** — totale assenza di legami operativi.

Più ci si allontana dal centro, più si riducono le sinergie potenziali e crescono i costi gestionali della complessità.

I **fattori di correlazione** che misurano la prossimità tra business sono:
- **Intensità della correlazione**: rilievo della connessione strategica ed economica tra i settori; non è oggettiva, varia nel tempo.
- **Correlazione di mercato**: sovrapposizione tra i mercati di riferimento o tra le funzioni d'uso.
- **Correlazione tecnologico-produttiva**: sfruttamento della stessa tecnologia.

### 5.6 Diversificazione e performance: la curva a U rovesciata

Una delle evidenze empiriche più robuste della letteratura, esplicitamente illustrata nelle slide, è che il rapporto tra grado di diversificazione e performance aziendale segue una **curva a U rovesciata**:

- Nei primi stadi di diversificazione, la performance **cresce** perché si sfruttano economie di scopo: brand, R&S, canali distributivi vengono spalmati su più business.
- Oltre una certa soglia, la performance **inizia a calare** perché i costi della complessità organizzativa (coordinamento, compromessi, rigidità, perdita di focus) superano i benefici delle sinergie.

Esiste quindi un **livello ottimale di diversificazione**, oltre il quale "fare di più" significa "fare peggio". È la spiegazione teorica del **conglomerate discount**: oltre un certo punto, il mercato finanziario penalizza i gruppi troppo diversificati.

### 5.7 Le motivazioni alla diversificazione: schema di sintesi

Le slide riassumono le motivazioni in tre parole chiave: **Crescita, Riduzione del rischio, Aumento del profitto**. Queste si articolano in fattori esterni e interni:

| Fattori Esterni | Fattori Interni |
|---|---|
| Opportunità di mercato in cui l'impresa ha un vantaggio competitivo | Esigenza/opportunità di realizzare economie di scala e/o di scopo |
| Flessione della domanda nel business attuale | Disponibilità di risorse finanziarie (es. monopoli del settore energetico) |
| Elevati costi di transazione | Frazionamento del rischio |
| Politiche pubbliche (privatizzazione, liberalizzazione) | Obiettivi manageriali di crescita ("empire building") |
| | Possibilità di generare sinergie tra risorse tangibili ed intangibili di diversi business |

### 5.8 Vantaggio competitivo dalla diversificazione: scopo + transazione

Le slide chiariscono che la diversificazione crea valore **solo** se combina due categorie di economie:

**Economie di scopo** (condivisione di risorse):
- Condivisione di **risorse tangibili** (laboratori R&S, sistemi di distribuzione) tra più aziende.
- Condivisione di **risorse intangibili** (marchi, tecnologia) tra più aziende.
- Trasferimento di **capacità funzionali** (marketing, sviluppo prodotto) tra aziende.
- Applicazione di **competenze di gestione generale** comuni a diverse aziende.

**Economie di transazione** (efficienza dei mercati interni):
- Le economie di scopo da sole non bastano: devono essere supportate dai costi di transazione nei mercati delle risorse.
- Un'azienda diversificata può **evitare transazioni esterne** gestendo internamente i mercati del capitale e del lavoro.
- L'azienda diversificata dispone di **migliori informazioni** sulle caratteristiche delle risorse rispetto ai mercati esterni.

In altre parole: avere risorse condivisibili è condizione necessaria ma non sufficiente; serve anche che il "mercato interno" della corporation sia più efficiente del mercato esterno nell'allocare quelle risorse.

### 5.9 Le cause dell'internazionalizzazione: visione completa

Le slide distinguono tre prospettive sull'espansione estera:

**I) L'espansione estera come fonte intrinseca di vantaggi competitivi.** L'impresa internazionalizza perché l'estero, di per sé, offre benefici. Si articola in tre filoni:

| Categoria | Strumenti |
|---|---|
| **Benefici transazionali (approccio eclettico OLI)** | Investimenti market-seeking, natural-resource seeking, low-cost seeking |
| **Opportunità di arbitraggio** | Abbattimento oneri fiscali (transfer pricing), ottimizzazione delle fonti finanziarie nei diversi mercati |
| **Leve concorrenziali** | Riduzione del rischio di portafoglio, incremento delle basi di conoscenza, strategie di comunicazione, **effetto made-in (lato offerta) / Country of origin (lato domanda)** |

**II) L'espansione estera come strategia per *sfruttare* vantaggi competitivi già detenuti** nel mercato originario (es. un brand forte in patria viene portato all'estero).

**III) L'espansione estera come modalità di *ricerca di nuovi* vantaggi competitivi** (es. acquisire competenze tecnologiche presenti solo all'estero, come le case auto europee che si insediano nella Silicon Valley).

**Fattori esterni** che favoriscono l'internazionalizzazione (catena causale evidenziata nelle slide):
1. Internazionalizzazione dei mercati (globalizzazione).
2. Miglioramento delle condizioni e diminuzione dei costi di comunicazione e trasporto.
3. Saturazione del mercato locale.
4. Reazione competitiva verso un rivale (**band-wagon effect** o **exchange of threat**: si segue il concorrente sul suo mercato per pareggiare le posizioni).

### 5.10 Le quattro fasi del processo di internazionalizzazione

Il processo di internazionalizzazione, secondo le slide, si articola in **quattro fasi sequenziali**:

| Fase | Descrizione |
|---|---|
| **I. Entrata** | Ingresso nel mercato estero, scelta della modalità (export, JV, IDE) |
| **II. Assestamento** | Consolidamento della presenza nel mercato estero, acquisizione di clienti stabili |
| **III. Sviluppo** | Espansione della posizione competitiva nel mercato estero, eventuale aumento dell'impegno |
| **IV. Razionalizzazione** | Ottimizzazione della posizione internazionale globale, riconfigurazione delle filiali, dismissioni selettive |

### 5.11 Modalità di ingresso: classificazione dettagliata

Le slide propongono una tassonomia più granulare delle modalità di ingresso, che integra il modello di Uppsala. Sull'asse del **coinvolgimento di risorse** (basso → elevato), si distinguono:

| Macro-categoria | Modalità specifiche |
|---|---|
| **Transazioni** | Spot export; Contratti a lungo termine; Agente/distributore straniero; Licensing brevetti; Franchising |
| **Investimenti diretti** | Joint Venture (Marketing & Distribution / Integrazione completa); Sussidiaria completamente posseduta (Marketing & Distribution / Integrazione completa) |

#### Esportazioni indirette: tipologie di intermediari

| Intermediario | Funzione |
|---|---|
| **Buyer** | Agente di un'azienda straniera interessato a stringere relazioni con potenziali fornitori nell'area geografica |
| **Broker** | Connette domanda e offerta in due paesi e supporta la transazione |
| **Export Management Company (EMC)** | Azienda commerciale che supporta gruppi di imprese con offerte complementari |
| **Trading companies** | Grandi società focalizzate nel trading di specifici prodotti (es. sogo shosha giapponesi) |
| **Consorzi** | Aggregazioni di PMI che esportano insieme per condividere costi |
| **Piggyback** | Il "rider" (piccola impresa) vende i propri prodotti attraverso una società più grande che agisce da carrier |

#### Esportazioni dirette: tipologie di presenza

| Modalità | Funzione |
|---|---|
| **Commercial network** | Agenti o dipendenti che entrano in contatto con potenziali acquirenti nel paese straniero |
| **Commercial Branch** | Filiale commerciale che stringe accordi di vendita e "studia" il mercato |
| **Logistic center** | Coordina la distribuzione nel mercato estero |
| **E-commerce** | Vendita digitale (richiede piattaforma e visibilità online) |

### 5.12 L'impresa internazionalizzata: i tre pilastri

Le slide qualificano un'impresa come **internazionalizzata** quando soddisfa simultaneamente tre condizioni:

1. **Estensione geografica dell'attività**: presenza fisica e operativa in più aree geografiche.
2. **Internazionalizzazione reale e non solo finanziaria**: investimenti in attività produttive, commerciali o di R&S, non solo flussi di capitale.
3. **Molteplicità delle forme di autorità esterna**: l'impresa si confronta con regolatori, ordinamenti giuridici, sistemi sindacali, culture diverse.

L'internazionalizzazione è quindi un orientamento strategico **consapevole** (strategia + organizzazione + azioni operative), non un fenomeno episodico.

---

## 6. Strategia di Portafoglio: Sinergie e Interdipendenze

### 6.1 La prospettiva di portafoglio

La **strategia orizzontale** definisce il portafoglio dei business dell'impresa sulla base delle **interrelazioni** che possono essere sfruttate, coordinando obiettivi e strategie dei singoli business. Per **interdipendenza** (o interrelazione) si intende una **condivisione** di elementi — tangibili o intangibili — tra due o più business della medesima impresa.

L'idea di fondo, evocata nelle slide con la formula iconica **"1+1=3"**, è che dalle interdipendenze possano derivare **sinergie**: il valore complessivo dei business gestiti insieme è superiore alla somma dei valori che avrebbero da soli.

Le interdipendenze determinano un vantaggio competitivo se favoriscono una **riduzione nei costi** o lo **sviluppo di elementi di differenziazione**.

### 6.2 Tipologie di interdipendenze

Le slide distinguono **tre tipologie** di interdipendenze tra business:

#### A) Interdipendenze tangibili
Si verificano quando due o più business mettono in comune asset tangibili: **impianti, macchinari, forza vendita, laboratori di R&S**. Esempi tipici (Tabella 6.1 della catena del valore):

| Approvvigionamento | Produzione | Marketing e vendite | Tecnologia |
|---|---|---|---|
| Utilizzo degli stessi input produttivi | Localizzazione comune delle linee produttive | Clienti comuni | Analoga tecnologia di prodotto |
| Utilizzo degli stessi fornitori | Condivisione di fasi del processo produttivo | Canali di distribuzione comuni | Analoga tecnologia di processo |
| Centralizzazione della gestione degli acquisti | Condivisione di attività di supporto al processo produttivo | Mercato geografico comune | Legami tecnici tra prodotti diversi |

#### B) Interdipendenze intangibili
Riguardano la **condivisione di conoscenza**: il trasferimento di **know-how direzionale** (manageriale, organizzativo, di problem solving) tra due o più business della medesima impresa. Sono le più difficili da imitare ma anche le più difficili da realizzare (la conoscenza è "appiccicosa").

#### C) Interdipendenze competitive
Scaturiscono dalla circostanza di **doversi confrontare con gli stessi rivali in diverse aree di business** (concorrenti multipli o **multi-market competitors**). Le azioni competitive in un nostro business possono condizionare ed essere condizionate da quelle attuate in business dove sono presenti gli stessi rivali — è la logica del *cross-subsidization* e della *mutual forbearance*.

### 6.3 I costi delle interdipendenze

Sfruttare le sinergie ha un prezzo. Le slide individuano **tre costi specifici** che contrastano i benefici:

| Costo | Natura | Effetto |
|---|---|---|
| **Coordinamento** | Tempo e personale dedicati al coordinamento; interventi fisici per dare concretezza all'interrelazione | Aumento dei costi indiretti, allungamento dei tempi decisionali |
| **Compromesso** | Necessità di trovare soluzioni operative coerenti tra business diversi; la soluzione adottata può non essere ottimale per il singolo business | Riduzione della performance del singolo business; aumenta se le strategie dei business interessati non sono coerenti |
| **Rigidità** | Decisioni meno rapide perché si deve considerare l'effetto sulle altre unità correlate | Difficoltà a rispondere ad attacchi della concorrenza; impossibilità di abbandonare un business |

Solo quando le sinergie reali superano la somma di questi tre costi, la strategia di portafoglio crea valore.

---

## 7. Esercizi applicativi sulla Matrice BCG

### 7.1 Procedura operativa standard

Per costruire la matrice BCG su un caso reale, le slide indicano una procedura in **quattro passi**:

1. **Calcolare il tasso di crescita del mercato** per ogni segmento, usando la formula $(\\text{Mkt}_X - \\text{Mkt}_{X-1}) / \\text{Mkt}_{X-1}$. Confrontarlo con la soglia (media settoriale, PIL nazionale, o media dei business dell'impresa).
2. **Calcolare la quota di mercato relativa** per ogni SBU: $\\text{Vendite SBU} / \\text{Vendite principale concorrente}$. Confrontarla con la soglia di **1,5**.
3. **Posizionare le SBU** sulla matrice 2x2; il diametro del cerchio è proporzionale al fatturato della SBU (contributo alle vendite totali).
4. **Definire le strategie**: investire i Question Mark più promettenti, mantenere/difendere le Star, mungere le Cash Cow, dismettere i Dog non difensivi.

### 7.2 Esempio: B.I.N. B&B (azienda multi-business)

L'azienda **B.I.N. B&B** opera in quattro business correlati: Home Care (core), Personal Care, Pet Care, Baby Care. Dati 2024 (Total Annual Market in migliaia, Vendite in migliaia):

| Segmento | Mercato 2023 | Mercato 2024 | Tasso crescita | Vendite B.I.N. | Vendite leader | Quota relativa |
|---|---|---|---|---|---|---|
| Home Care | 1.152.000 | 1.382.400 | +20% | 100.000 | 150.000 | 0,67 |
| Personal Care | 484.000 | 532.400 | +10% | 50.000 | 20.000 | 2,5 |
| Pet Care | 1.500.000 | 2.250.000 | +50% | 40.000 | 100.000 | 0,4 |
| Baby Care | 575.000 | 661.250 | +15% | 20.000 | 60.000 | 0,33 |

Posizionamento (soglia di crescita = media settoriale, soglia di quota = 1,5):
- **Home Care**: alta crescita, bassa quota → **Question Mark** (rivedere posizione del leader)
- **Personal Care**: crescita media, quota alta → **Cash Cow / Star** (a seconda della soglia)
- **Pet Care**: altissima crescita, bassissima quota → **Question Mark** rischioso
- **Baby Care**: crescita media, quota molto bassa → **Dog**

### 7.3 Esempio: PharmaNova (gruppo farmaceutico)

PharmaNova è un gruppo farmaceutico con quattro Business Unit. Tasso di crescita medio del settore farmaceutico = **5,2%**.

| BU | Crescita mercato 2023→2024 | Posizionamento crescita | Fatturato BU | Fatturato leader | Quota relativa | Quadrante |
|---|---|---|---|---|---|---|
| **GenNova** (Terapie Geniche) | (18,2-14,8)/14,8 = +23% | Alta | 3,2 mld | 4,5 mld | 0,71 | **Question Mark** |
| **ImmunoPharm** (Farmaci Biologici) | (42,5-38,7)/38,7 = +9,8% | Alta | 4,8 mld | 6,2 mld | 0,77 | **Question Mark** |
| **CardioHealth** (Cardiovascolare) | (52,1-49,8)/49,8 = +4,6% | Bassa | 10,5 mld | 7,8 mld | 1,35 | **Cash Cow** (quasi leader) |
| **PainRelief** (Analgesici OTC) | (22,1-21,5)/21,5 = +2,8% | Bassa | 2,1 mld | 4,3 mld | 0,49 | **Dog** |

**Strategia consigliata**: investire selettivamente in GenNova (terapie geniche promettenti); mungere CardioHealth per finanziare gli investimenti; dismettere o riposizionare PainRelief; valutare l'effettiva trasformabilità di ImmunoPharm in Star.

### 7.4 Esempio: AmeriCorp (conglomerato statunitense)

AmeriCorp è un conglomerato USA con quattro BU non correlate. Tasso di crescita PIL USA 2024 = **2,1%** (soglia di riferimento).

| BU | Crescita mercato | Quota assoluta vs. leader | Quota relativa | Quadrante |
|---|---|---|---|---|
| **GreenFuture** (Rinnovabili) | (110,3-98,2)/98,2 = +12,3% | 7,2 vs 8,0 mld (leader) | 0,90 | **Question Mark** |
| **TechWave** (AI imprese) | (45,6-34,1)/34,1 = +33,7% | 12,4 vs 8,2 mld → leader | 1,51 | **Star** |
| **FastBites** (Fast Food) | (345,1-332,7)/332,7 = +3,7% | 15,8 vs 10,2 mld → leader | 1,55 | **Cash Cow** |
| **PrintSolutions** (Stampanti) | (20,1-19,3)/19,3 = +4,1% | 3,1 vs 4,6 mld | 0,67 | **Dog** |

**Strategia consigliata**: TechWave è il futuro del gruppo, va sostenuto con investimenti aggressivi nonostante l'assorbimento di cassa; FastBites genera la cassa operativa per finanziare TechWave e per valutare se trasformare GreenFuture in una seconda Star; PrintSolutions va dismesso (settore in declino strutturale, posizione debole).

---

## 8. Sintesi finale

La Corporate Strategy si gioca su **tre direttrici** (verticale, orizzontale-diversificazione, geografica) governate da **un criterio economico** (Make or Buy con costi di transazione), **tre test di Porter** per le diversificazioni, **un modello a stadi** per l'internazionalizzazione (Uppsala), e **uno strumento di portafoglio** (Matrice BCG) per gestire il mix di SBU.

La regola d'oro che attraversa tutto il capitolo: **una strategia corporate crea valore solo se le sinergie reali superano i costi di coordinamento, compromesso e rigidità**. Quando questa condizione non è verificata, la corporate distrugge valore — ed è ciò che spiega il conglomerate discount, il fallimento di molte M&A, la fragilità dei conglomerati anni '80 dismantled negli anni '90.
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
//  GRAPH 1 — MATRICE BCG (quota relativa vs tasso di crescita)
// ══════════════════════════════════════════════════════════════
function BCGMatrixGraph() {
  const [rms, setRms] = useState(0.5); // relative market share (0..2 con 1 = soglia)
  const [growth, setGrowth] = useState(12); // tasso di crescita %

  // X axis: relative market share da 2 (alta) a 0 (bassa) → DECRESCENTE
  const xMin = 0, xMax = 2;
  const yMin = 0, yMax = 25;
  const xThr = 1;   // soglia quota
  const yThr = 10;  // soglia crescita

  // determiniamo il quadrante
  let quadrant = '';
  let strategy = '';
  let qColor = '#64748b';
  if (rms >= xThr && growth >= yThr) { quadrant = 'Star'; strategy = 'Build (investire per mantenere leadership)'; qColor = '#f59e0b'; }
  else if (rms >= xThr && growth < yThr) { quadrant = 'Cash Cow'; strategy = 'Hold (mungere il flusso di cassa)'; qColor = '#16a34a'; }
  else if (rms < xThr && growth >= yThr) { quadrant = 'Question Mark'; strategy = 'Build o Divest (investire selettivamente o uscire)'; qColor = '#a855f7'; }
  else { quadrant = 'Dog'; strategy = 'Harvest / Divest (smobilizzare)'; qColor = '#dc2626'; }

  // l'asse X mostra valori decrescenti: invertiamo la mappatura visiva
  const xToScreen = (v) => toX(xMax - v, xMin, xMax);

  return (
    <div className="graph-block">
      <h4 className="graph-title">Matrice BCG: quota relativa di mercato vs tasso di crescita</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          {/* sfondi quadranti */}
          <rect x={xToScreen(xMax)} y={toY(yMax, yMin, yMax)} width={(cW / 2)} height={(cH / 2)} fill="#fef3c7" opacity={0.55} />
          <rect x={xToScreen(xThr)} y={toY(yMax, yMin, yMax)} width={(cW / 2)} height={(cH / 2)} fill="#ede9fe" opacity={0.55} />
          <rect x={xToScreen(xMax)} y={toY(yThr, yMin, yMax)} width={(cW / 2)} height={(cH / 2)} fill="#dcfce7" opacity={0.55} />
          <rect x={xToScreen(xThr)} y={toY(yThr, yMin, yMax)} width={(cW / 2)} height={(cH / 2)} fill="#fee2e2" opacity={0.55} />
          <Axes xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax} xLabel="quota rel. (decresc.)" yLabel="g %" xFmt={v => (xMax - v).toFixed(1) + '×'} yFmt={v => v.toFixed(0) + '%'} />
          {/* linee di soglia */}
          <line x1={xToScreen(xThr)} y1={PT} x2={xToScreen(xThr)} y2={PT + cH} stroke="#475569" strokeWidth={1.2} strokeDasharray="4,3" />
          <line x1={PL} y1={toY(yThr, yMin, yMax)} x2={PL + cW} y2={toY(yThr, yMin, yMax)} stroke="#475569" strokeWidth={1.2} strokeDasharray="4,3" />
          {/* etichette quadranti */}
          <text x={xToScreen(1.5)} y={toY(20, yMin, yMax)} textAnchor="middle" fontSize={12} fill="#b45309" fontWeight="bold">Stars</text>
          <text x={xToScreen(0.5)} y={toY(20, yMin, yMax)} textAnchor="middle" fontSize={12} fill="#7c3aed" fontWeight="bold">Question Marks</text>
          <text x={xToScreen(1.5)} y={toY(5, yMin, yMax)} textAnchor="middle" fontSize={12} fill="#15803d" fontWeight="bold">Cash Cows</text>
          <text x={xToScreen(0.5)} y={toY(5, yMin, yMax)} textAnchor="middle" fontSize={12} fill="#b91c1c" fontWeight="bold">Dogs</text>
          {/* unità di business */}
          <circle cx={xToScreen(rms)} cy={toY(growth, yMin, yMax)} r={9} fill={qColor} stroke="#fff" strokeWidth={2.5} />
        </svg>
        <div className="graph-controls">
          <SliderControl label="Quota rel. di mercato" symbol="RMS" value={rms} min={0.1} max={2} step={0.05} onChange={setRms} color="#0ea5e9" fmt={v => v.toFixed(2) + '×'} />
          <SliderControl label="Tasso di crescita mercato" symbol="g" value={growth} min={0} max={25} step={0.5} onChange={setGrowth} color="#a855f7" fmt={v => v.toFixed(1) + '%'} />
          <div className="result-box">
            <div className="result-row"><strong>Quadrante</strong> <span style={{ color: qColor }}>{quadrant}</span></div>
            <div className="result-row"><strong>Strategia</strong> <span style={{ fontSize: '0.85rem' }}>{strategy}</span></div>
          </div>
          <div className="insight-mini">La BCG classifica le SBU su due dimensioni: posizione competitiva (quota relativa) e attrattività del settore (crescita). Stars e Cash Cows sono leader; Question Marks e Dogs sono follower.</div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAPH 2 — MATRICE KRALJIC (impatto profitto vs rischio fornitura)
// ══════════════════════════════════════════════════════════════
function KraljicMatrixGraph() {
  const [profit, setProfit] = useState(3);  // impatto sul profitto (0..10)
  const [risk, setRisk] = useState(3);      // rischio di fornitura (0..10)

  const xMin = 0, xMax = 10;
  const yMin = 0, yMax = 10;
  const thr = 5;

  let quadrant = '';
  let strategy = '';
  let qColor = '#64748b';
  if (profit >= thr && risk >= thr) { quadrant = 'Strategici'; strategy = 'Partnership di lungo periodo, alleanze'; qColor = '#dc2626'; }
  else if (profit >= thr && risk < thr) { quadrant = 'Leva (Leverage)'; strategy = 'Negoziazione aggressiva, gare competitive'; qColor = '#16a34a'; }
  else if (profit < thr && risk >= thr) { quadrant = 'Colli di bottiglia'; strategy = 'Garantire continuità, scorte di sicurezza'; qColor = '#a855f7'; }
  else { quadrant = 'Non critici'; strategy = 'Standardizzare, automatizzare gli ordini'; qColor = '#0ea5e9'; }

  return (
    <div className="graph-block">
      <h4 className="graph-title">Matrice di Kraljic: classificazione degli acquisti</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          <rect x={toX(0, xMin, xMax)} y={toY(yMax, yMin, yMax)} width={(cW / 2)} height={(cH / 2)} fill="#dbeafe" opacity={0.55} />
          <rect x={toX(thr, xMin, xMax)} y={toY(yMax, yMin, yMax)} width={(cW / 2)} height={(cH / 2)} fill="#dcfce7" opacity={0.55} />
          <rect x={toX(0, xMin, xMax)} y={toY(thr, yMin, yMax)} width={(cW / 2)} height={(cH / 2)} fill="#ede9fe" opacity={0.55} />
          <rect x={toX(thr, xMin, xMax)} y={toY(thr, yMin, yMax)} width={(cW / 2)} height={(cH / 2)} fill="#fee2e2" opacity={0.55} />
          <Axes xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax} xLabel="impatto profitto" yLabel="rischio forn." xFmt={v => v.toFixed(0)} yFmt={v => v.toFixed(0)} />
          <line x1={toX(thr, xMin, xMax)} y1={PT} x2={toX(thr, xMin, xMax)} y2={PT + cH} stroke="#475569" strokeWidth={1.2} strokeDasharray="4,3" />
          <line x1={PL} y1={toY(thr, yMin, yMax)} x2={PL + cW} y2={toY(thr, yMin, yMax)} stroke="#475569" strokeWidth={1.2} strokeDasharray="4,3" />
          <text x={toX(2.5, xMin, xMax)} y={toY(8, yMin, yMax)} textAnchor="middle" fontSize={11} fill="#1d4ed8" fontWeight="bold">Colli di bottiglia</text>
          <text x={toX(7.5, xMin, xMax)} y={toY(8, yMin, yMax)} textAnchor="middle" fontSize={11} fill="#b91c1c" fontWeight="bold">Strategici</text>
          <text x={toX(2.5, xMin, xMax)} y={toY(2, yMin, yMax)} textAnchor="middle" fontSize={11} fill="#0369a1" fontWeight="bold">Non critici</text>
          <text x={toX(7.5, xMin, xMax)} y={toY(2, yMin, yMax)} textAnchor="middle" fontSize={11} fill="#15803d" fontWeight="bold">Leverage</text>
          <circle cx={toX(profit, xMin, xMax)} cy={toY(risk, yMin, yMax)} r={9} fill={qColor} stroke="#fff" strokeWidth={2.5} />
        </svg>
        <div className="graph-controls">
          <SliderControl label="Impatto sul profitto" symbol="P" value={profit} min={0} max={10} step={0.1} onChange={setProfit} color="#16a34a" fmt={v => v.toFixed(1)} />
          <SliderControl label="Rischio di fornitura" symbol="R" value={risk} min={0} max={10} step={0.1} onChange={setRisk} color="#dc2626" fmt={v => v.toFixed(1)} />
          <div className="result-box">
            <div className="result-row"><strong>Categoria</strong> <span style={{ color: qColor }}>{quadrant}</span></div>
            <div className="result-row"><strong>Strategia</strong> <span style={{ fontSize: '0.85rem' }}>{strategy}</span></div>
          </div>
          <div className="insight-mini">La matrice Kraljic guida la strategia di approvvigionamento: ad alto impatto e alto rischio servono partnership profonde; a basso impatto e basso rischio, semplici ordini standardizzati.</div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAPH 3 — SINERGIE M&A: 1+1=3
// ══════════════════════════════════════════════════════════════
function SynergyGraph() {
  const [synergyType, setSynergyType] = useState(0); // 0..3 indice tipo sinergia
  const [intensity, setIntensity] = useState(0.3);    // 0..1 intensità

  const A = 100;
  const B = 80;

  const types = [
    { name: 'Operativa', factor: 0.55, color: '#0ea5e9' },
    { name: 'Finanziaria', factor: 0.30, color: '#16a34a' },
    { name: 'Manageriale', factor: 0.40, color: '#a855f7' },
    { name: 'Di mercato', factor: 0.50, color: '#f59e0b' },
  ];
  const t = types[Math.round(synergyType)];
  const synergyValue = (A + B) * t.factor * intensity;
  const combined = A + B + synergyValue;

  const xMin = 0, xMax = 4;
  const yMin = 0, yMax = 280;

  // tre barre: A, B, A+B+S
  const barW = 50;
  const xA = toX(0.7, xMin, xMax);
  const xB = toX(1.7, xMin, xMax);
  const xC = toX(3.0, xMin, xMax);

  return (
    <div className="graph-block">
      <h4 className="graph-title">Sinergie M&amp;A: il principio "1+1=3"</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          <Axes xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax} xLabel="" yLabel="valore" nX={4} xFmt={() => ''} yFmt={v => v.toFixed(0)} />
          {/* barra A */}
          <rect x={xA - barW / 2} y={toY(A, yMin, yMax)} width={barW} height={(PT + cH) - toY(A, yMin, yMax)} fill="#0ea5e9" opacity={0.85} />
          <text x={xA} y={toY(A, yMin, yMax) - 6} textAnchor="middle" fontSize={11} fill="#0369a1" fontWeight="bold">A = {A}</text>
          <text x={xA} y={PT + cH + 28} textAnchor="middle" fontSize={11} fill="#475569">Azienda A</text>
          {/* barra B */}
          <rect x={xB - barW / 2} y={toY(B, yMin, yMax)} width={barW} height={(PT + cH) - toY(B, yMin, yMax)} fill="#a855f7" opacity={0.85} />
          <text x={xB} y={toY(B, yMin, yMax) - 6} textAnchor="middle" fontSize={11} fill="#7c3aed" fontWeight="bold">B = {B}</text>
          <text x={xB} y={PT + cH + 28} textAnchor="middle" fontSize={11} fill="#475569">Azienda B</text>
          {/* barra combinata: parte A+B + parte sinergia */}
          <rect x={xC - barW / 2} y={toY(A + B, yMin, yMax)} width={barW} height={(PT + cH) - toY(A + B, yMin, yMax)} fill="#94a3b8" opacity={0.7} />
          <rect x={xC - barW / 2} y={toY(combined, yMin, yMax)} width={barW} height={toY(A + B, yMin, yMax) - toY(combined, yMin, yMax)} fill={t.color} opacity={0.95} />
          <text x={xC} y={toY(combined, yMin, yMax) - 6} textAnchor="middle" fontSize={11} fill={t.color} fontWeight="bold">{combined.toFixed(0)}</text>
          <text x={xC} y={PT + cH + 28} textAnchor="middle" fontSize={11} fill="#475569">A+B+S</text>
          {/* linea di riferimento A+B */}
          <line x1={PL} y1={toY(A + B, yMin, yMax)} x2={PL + cW} y2={toY(A + B, yMin, yMax)} stroke="#475569" strokeDasharray="3,3" strokeWidth={1} />
          <text x={PL + cW - 4} y={toY(A + B, yMin, yMax) - 4} textAnchor="end" fontSize={10} fill="#475569">A+B = {A + B}</text>
        </svg>
        <div className="graph-controls">
          <SliderControl label="Tipo di sinergia" symbol="T" value={synergyType} min={0} max={3} step={1} onChange={setSynergyType} color={t.color} fmt={() => t.name} />
          <SliderControl label="Intensità sinergia" symbol="i" value={intensity} min={0} max={1} step={0.02} onChange={setIntensity} color={t.color} fmt={v => (v * 100).toFixed(0) + '%'} />
          <div className="result-box">
            <div className="result-row"><strong>Sinergia (S)</strong> <span style={{ color: t.color }}>+{synergyValue.toFixed(1)}</span></div>
            <div className="result-row"><strong>Valore combinato</strong> <span>{combined.toFixed(1)}</span></div>
            <div className="result-row"><strong>Premio vs A+B</strong> <span>+{((combined / (A + B) - 1) * 100).toFixed(1)}%</span></div>
          </div>
          <div className="insight-mini">Una M&amp;A crea valore solo se il valore combinato supera la somma delle parti grazie alle sinergie. Se S = 0, l'operazione è solo finanziaria; se S è negativo, distrugge valore.</div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAPH 4 — CURVA DI DIVERSIFICAZIONE (U rovesciata)
// ══════════════════════════════════════════════════════════════
function DiversificationCurveGraph() {
  const [d, setD] = useState(3); // grado di diversificazione 0..10

  const xMin = 0, xMax = 10;
  const yMin = 0, yMax = 100;
  // curva a U rovesciata: picco a d=4 (diversificazione correlata)
  const peak = 4;
  const k = 0.04;
  const baseline = 35;
  const ampl = 60;
  const perf = (x) => baseline + ampl - k * ampl * Math.pow(x - peak, 2);
  const currentPerf = perf(d);

  const pts = [];
  for (let x = xMin; x <= xMax; x += 0.1) {
    pts.push([toX(x, xMin, xMax), toY(perf(x), yMin, yMax)]);
  }
  const path = 'M ' + pts.filter(p => p[1] >= PT).map(p => p.join(',')).join(' L ');

  let regime = '';
  let regColor = '#64748b';
  if (d < 1.5) { regime = 'Single business'; regColor = '#0ea5e9'; }
  else if (d < 3.5) { regime = 'Diversificazione correlata (limitata)'; regColor = '#16a34a'; }
  else if (d < 5.5) { regime = 'Diversificazione correlata (ottimale)'; regColor = '#16a34a'; }
  else if (d < 8) { regime = 'Diversificazione non correlata'; regColor = '#f59e0b'; }
  else { regime = 'Conglomerato puro'; regColor = '#dc2626'; }

  return (
    <div className="graph-block">
      <h4 className="graph-title">Performance vs grado di diversificazione: la U rovesciata</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          <Axes xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax} xLabel="d (focus → conglomerato)" yLabel="perf." xFmt={v => v.toFixed(0)} yFmt={v => v.toFixed(0)} />
          <path d={path} fill="none" stroke="#16a34a" strokeWidth={2.4} />
          {/* picco ottimale */}
          <line x1={toX(peak, xMin, xMax)} y1={PT + cH} x2={toX(peak, xMin, xMax)} y2={toY(perf(peak), yMin, yMax)} stroke="#16a34a" strokeDasharray="3,3" strokeWidth={1} />
          <circle cx={toX(peak, xMin, xMax)} cy={toY(perf(peak), yMin, yMax)} r={4} fill="#16a34a" stroke="#fff" strokeWidth={1.5} />
          <text x={toX(peak, xMin, xMax) + 6} y={toY(perf(peak), yMin, yMax) - 6} fontSize={10} fill="#16a34a">picco</text>
          {/* punto corrente */}
          <line x1={toX(d, xMin, xMax)} y1={PT + cH} x2={toX(d, xMin, xMax)} y2={toY(currentPerf, yMin, yMax)} stroke={regColor} strokeDasharray="3,3" strokeWidth={1.2} />
          <circle cx={toX(d, xMin, xMax)} cy={toY(currentPerf, yMin, yMax)} r={7} fill={regColor} stroke="#fff" strokeWidth={2.5} />
          {/* annotazioni regime */}
          <text x={toX(0.5, xMin, xMax)} y={PT + 14} fontSize={9} fill="#0369a1">single</text>
          <text x={toX(9.2, xMin, xMax)} y={PT + 14} fontSize={9} fill="#b91c1c">conglom.</text>
        </svg>
        <div className="graph-controls">
          <SliderControl label="Grado di diversificazione" symbol="d" value={d} min={0} max={10} step={0.1} onChange={setD} color={regColor} fmt={v => v.toFixed(1)} />
          <div className="result-box">
            <div className="result-row"><strong>Performance</strong> <span style={{ color: regColor }}>{currentPerf.toFixed(1)}</span></div>
            <div className="result-row"><strong>Regime</strong> <span style={{ fontSize: '0.85rem', color: regColor }}>{regime}</span></div>
            <div className="result-row"><strong>Distanza dal picco</strong> <span>{Math.abs(d - peak).toFixed(1)}</span></div>
          </div>
          <div className="insight-mini">La performance cresce con la diversificazione finché si sfruttano sinergie (correlata), poi cala perché aumentano costi di coordinamento e conglomerate discount.</div>
        </div>
      </div>
    </div>
  );
}

export default function Week8() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', paddingBottom: '4rem' }}>
      <div className="page-header">
        <div style={{ color: 'var(--accent-cyan)', fontWeight: 600, letterSpacing: '0.1em', fontSize: '0.875rem', marginBottom: '0.5rem' }}>SETTIMANA 08</div>
        <h1 className="page-title gradient-text" style={{ fontSize: '3rem' }}>Strategie Corporate e Analisi di Portafoglio</h1>
      </div>

      <div className="content-section glass-panel markdown-body">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownContent}</ReactMarkdown>
      </div>

      <div className="content-section glass-panel" style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>📊 Visualizzazioni Interattive</h2>
        <BCGMatrixGraph />
        <KraljicMatrixGraph />
        <SynergyGraph />
        <DiversificationCurveGraph />
      </div>
    </div>
  );
}
