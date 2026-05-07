import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import '../index.css';
import './macro/macro.css';

const markdownContent = `
# Capitolo 10: La Macchina Incessante, La Gestione delle Operations (OM) e la Logistica

Il fascino del marketing, la fierezza del brand e l'audacia dell'ingresso in nuovi mercati risultano impotenti se non supportati dalla titanica e chirurgica ossatura produttiva dell'impresa. Questa decima settimana sviscera l'infrangibile ingranaggio logistico ed ingegneristico dell'impresa, battezzato a livello accademico come **Operations Management (La Gestione delle Operations)**, definibile come *"l'impegnativo processo di design, implementazione, gestione e miglioramento continuo dei sistemi aziendali preposti a plasmare, realizzare e consegnare i prodotti finiti e i servizi ai clienti, cercando di massimizzare efficienza ed efficacia"*.

## 1. Divergenze d'Ascesi: Manifattura (Manufacturing) contro Servizi (Services)
Il baratro che separa un'impresa manifatturiera (es. produzione di acciaio o di veicoli) da un'impresa di servizi (es. struttura alberghiera o consulenza) poggia su cardini strutturali dissimili:
- **Il Manufacturing (La Produzione Tangibile):** Sforna beni totalmente fisici ("goods"). Questi output sopportano la passività logistica, ovvero possono essere mantenuti in giacenza e immagazzinati in attesa della vendita (Logistica d'inventario). La pretesa di *Qualità* si accerta in modo del tutto oggettivo misurandola analiticamente sui difetti fisici del prodotto. Il consumatore finale è abissalmente escluso dalle fasi del processo di produzione interno all'officina. Quest'architettura esige massicce acquisizioni di macchinari e impianti (impianti cosiddetti **Capital Intensive**, o divora-capitale).
- **Il Sector Service (L'Erogazione Incorporea):** Sfuma nell'immaterialità non fisica. In questo ambito, la fase di produzione vera e propria coincide rigorosamente a livello temporale con la fase di erogazione e consumo (simultaneità produttiva, es. un esame clinico o un taglio dal parrucchiere). Ne consegue l'eliminazione organica del concetto stesso di scorta o magazzino del "prodotto finito". La parametrizzazione della *Qualità* diventa effimera e altamente difficili da calcolare oggettivamente poiché limitata alla percezione soggettiva del cliente. Il cliente, o ricevente, è compartecipe: si infiltra e partecipa attivamente nella filiera dell'erogazione stessa. Inoltre il servizio esige massicce dotazioni e dipendenza assoluta dall'elemento umano operativo, decretandolo come sistema **Labor Intensive** (centrato sul lavoro).

## 2. Piani e Logiche Strategiche delle Operations
Le Operations si diramano ed innescano attraverso tre livelli decisionali scalari e integrati:
- **Livello Strategico (Lungo Termine):** Decisioni ampie che vincolano strutturalmente l'azienda per decenni (es. macro-decisioni sulle capacità, determinazione del numero e della localizzazione degli impianti - inclusi fenomeni di *reshoring* o *offshoring*).
- **Livello Tattico (Medio Termine):** Decisioni limitate all'allocazione e alla temporizzazione sull'uso delle forze lavoro, definendo moderati lotti e ordini entro i limiti prefissati dall'impianto.
- **Livello Operativo (Breve Termine):** L'assegnazione giornaliera microscopica dei carichi, lo schedulamento (scheduling) e l'attribuzione analitica del lavoro ai singoli subalterni e macchinari.

L'obiettivo supremo dell'Operations Management è incidere sulla performance aziendale bilanciando cinque determinanti variabili concorrenti: minimizzare le sacche di inefficienza e il **Costo**, massimizzare la pretesa dogmatica di eccellenza della **Qualità**, innalzare drasticamente la **Flessibilità** (adattabilità ai cambi dei volumi o flessibilità nell'innovare i mix), ridurre lo spreco di **Velocità** (time to client), ed assicurare inossidabile **Affidabilità** (la purezza incontestabile di rispettare rigorosamente le scadenze promesse al cliente - logiche "Just in Time").

### 2.1 Architetture Produttive: Tipi di Processi Fisici
Le configurazioni dei layout macchine scalano dal livello artigianale personalizzato fino all'estrema automazione standardizzata per linee:
- **Job Shop:** Produzione per lotti unitari su personalizzazione spinta. Elevata flessibilità e utilizzo parziale e generico di macchinari (es. restauro artistico o costruzioni aerospaziali).
- **Batch Shop (Produzione a Lotti):** Macchinari aggregati per similitudine funzionale. Un processo produttivo processa o tratta limitati e separati lotti finché si esauriscono; subito dopo si riattrezzano le macchine (Switch di set-up) per passare alla produzione del lotto di un prodotto differente.
- **Continuous / Flow Production:** È la canonizzazione dell'apice industriale (le Linee di Montaggio continue) che non necessita set-up di prodotto. I macchinari sono posizionati fisicamente ad obbedire in strettissima sequenza. Rilascia volumi immensi iper-standardizzati senza interruzioni operative, specialmente nell'estrazione petrolchimica in cui l'arresto causerebbe danni colossali.

### 2.2 S.C.M. (Supply Chain Management) e I Piani di Produzione
Oggi la contesa competitiva non esplode più tra singole isole aziendali solitarie, bensì tra catene d'approvvigionamento coordinate avversarie. La **Logistica (S.C.M.)** abbraccia non solo le reti interne, ma incrocia i confini inglobando la *Logistica Acquisitiva* a monte (dei fornitori) e la *Logistica Distributiva* a valle.
Internamente, per asservire la logistica, i manager impongono e disaggregano gerarchicamente immensi Piani di Produzione temporali (dallo strategico a 3-5 anni al tattico procedurale):
- **Il Piano Aggregato:** Dispone solitamente di un orizzonte temporale ricalcato sull'annata ed un time-bucket analitico a mensilità. Stimola valutazioni raggruppate aggregando furbamente e macroscopicamente le previsioni di vendita "aggregate" per determinare l'impegno di produzione stimato nel lungo termine evitando lo squassante squilibrio di capacità disponibile.
- **Il Piano Principale di Produzione (MPS - Master Production Schedule):** Opera e decide la disaggregazione speculare tattica del precedente piano. L'orizzonte inquadra solitamente trimestri o semestri con lotti disaggregati su rigidi archi temporali settimanali indicanti esplicitamente per le trincee e le macchine "Quale", "In quanti Pezzi" e per "Quando" specificamente erogare i prodotti che popoleranno i cataloghi aziendali.

### 2.3 Evoluzioni, Total Quality, Lean Management e la Servitization
Il focus sulle operations ha partorito tre grandi dogmi operativi:
- **Total Quality Management (TQM):** Un approccio organizzativo olistico e maniacale proiettato sulla venerazione della completezza della soddisfazione qualitativa globale per il cliente. Richiede implacabile integrazione tra reparti, circoli di qualità inesauribili ed avvallo a certificazioni industriali assolute.
- **Lean Production (La Produzione Snella):** Nasce in Giappone (sistema Toyota) come naturale ascesa formale del TQM, votata quasi misticamente allo sgonfiamento dogmatico di ogni *Muda* (Spreco fisico o di tempi morti pregressi). Vi rientra il dogma assoluto del **Just In Time**, un flusso "Pull", imperniato esclusivamente sulla creazione del tassello perfetto soltanto prettamente "nel momento vitale d'effettiva propedeutica necessità" per le stazioni successive di post montaggio. Sconvolge layout, imponendo linee a "U" e polivalenza manodopera e tranciatura ai tempi di set-up.
- **Servitization:** Un cambio di prospettiva tra i "Silos" settoriali industriali. L'officina manifatturiera che cessa la sterile fornitura statica del bene isolato per integrarne all'unisono "In Pacchetti", la proposizione valoriale continuata inglobandola e somministrando il "sistema di Servizi d'assieme al prodotto Finito". Tramite assistenza diagnostica e pacchetti garantiti, incamera prolifica fidelizzazione incrollabile con clientela decennale ed asceesi e salvataggi contabili per prolifica ed a monte immissione utile al bilancio aziendale.

---

## 3. L'Ansietà del Deposito: L'Inventory Management e Le Scorte

Fattore propulsivo delle asfissianti decisioni tattiche permane e grava sul peso onnipresente delle logiche di gestione dell'Inventario, diviso materialisticamente in tre nature: Materie prime (Raw Materials), Semilavorati incagliati del macchinario (WIP - Works in Process) e le merci conclusive all'appannaggio commerciale (Finished Goods).
Ulteriore prezzatura disattesa ne specifica giacenze preposte a *Scorte Temporanee in transito navale o su gomma*, rassicuranti *Buffer di protezione per turbolenze impreviste e variabilità di ordini*, scorte d'*Anticipazione preventiva per le fluttuazioni macro-economiche stagionali* e Scorte MRO utilitaristiche riparatrici.

Le detenzioni formanti scorte di qualsivoglia entità incidono su quattro voragini o **Costi di Inventario**:
1. **Holding Costs (Costi di Mantenimento Cautelativo):** Assicurazioni esose per furto ed incendio merce immobilizzata nei metri d'affitto imposto da riempire, preclusioni finanziare per il congelamento pecunia fusa nella polvere accatastata e il rischio irreversibile di obsolescenza (Merce Sorpassata Tecnologicamente).
2. **Setup o Production Change Costs:** Oneri macchinosi scaturiti dalle riparametrazioni a freddo e cambio strumentazione macchine per lanciare la stampigliatura delle singole diverse parti per linee (Per abbassarle si incrementa illimitatamente i pezzi dello stesso lotto fuso per massimizzare le tirature uniche, gonfiando al contrario le holding costs dei neo-tasselli finiti).
3. **Ordering Costs:** Ammortamenti, moduli incrociati e personale direzionale oberato dalle emissioni e monitorazioni spola incrociato degli infiniti ordini e ri-approvvigionamenti.
4. **Shortage Costs (Oneri da Rottura di Stock o Defezione):** Implicazioni aspre d'ordine pecuniario in annullamento ed onore per immagine delusa nell'attesa e cancellazione insabbiante pretesa cliente avversa alla non provvista del componente o assenza inventario nel pervadente ricasco fiduciario del cliente indispettito.

### 3.1 Logiche Reattive (Look-back) vs Logiche Predittive (Look-ahead)
Il "Quando" ed "A Quanto" proporsi per re-immettere scorte gravita su due pilastri dottrinali assoluti incrocianti:
- **La Logica Stock control (Guardarsi Indietro o Reattiva o di Flusso Consuntivo):** Ci si disinteressa freddamente del mercato. Vige ed innesca l'erogazione degli allarmi unicamente avvalendosi nel post e dopo la misurazione tangibile delle scorte decadute decantante la consumata soglia minima "R" di reintegro imposta come sicuritaria fissa. (Pull System Puro).
- **La Logica Flow Control (Guardarsi Oltre, Predittivo d'anticipo del piano):** La neo-fase logica per ripristino per scorte attui pretese s'osserva ad intuito fiorante non sul consumo steso al pavimento a ritroso, bensì sul piano analitico strategico predittivo de-segnalato ad affioramento master production MPS e riavvallamento proattivo d'ordine ai vertici.

Per l'operatività Stock-Control vi regnano egemonicamente e metodologicamente **Due Modelli Sovrani di Inventario (a Flusso Stock innescati o da Limite Assorbimento Assoluti):**
1. **I Modelli a Quantità Fissa (Punto di Riordino - EOQ):** Si innescano "tramite un limite evento": L'assottigliamento asfissiante toccante del livello stock fino ad eguagliare il pavimento vitale e numerato della Soglia Minima Assoluta ("R" - Reorder Point). Sorpassata quella barriere il software "Batte sempre inalterabile il fisso neo-ordine per Lotti Economici quantitativamente Ottimi costanti (Quantità = "Q"), mentre rimarrà e sarà mutevole ad oscillare aspramente l'effettiva varianza incerta cronologica ad accadimento di quando riordinare e fustigare il magazziniere addetto al riflusso e richiamo."
2. **Il Modello a Tempo Fisso (A Schedulazione Ciclica Permanente temporale):** Esattamente asimmetrico: è innescato esclusivamente temporalmente disattendendo ciecamente lo stock in pancia ("Ti controllo per prassi stataria immutata ferma fisicamente e ti riordino immutabile ogni Venerdì a scadenzario"). E' fissa ed impiantata e sicura cronologicamente al richiamo logistico la data, ma "oscillerà ampiamente il calcolo della singola pezzatura ricalcolata varialbilmente rimpinguata 'Quantità'" per poter rabboccare un livellamento ideale soggettivo fluttuante, a ripiano della merce sfumata nell'intervallo esibito al conteggio mensile.

---

## 4. Approfondimento Definitorio: L'Operations Management e i Suoi Confini

L'**Operations Management (OM)** rappresenta il complesso disciplinare deputato al *design*, all'*implementazione* ed al *miglioramento continuo* di tutti quei sistemi aziendali che concorrono a creare e consegnare i prodotti ed i servizi dell'impresa al cliente finale. In ottica processuale, l'OM è la **gestione integrata dei processi** che innescano la produzione e la distribuzione di output (tangibili o intangibili) verso i destinatari finali. La sua finalità ultima è duplice e simultanea: garantire che i processi funzionino in modo **efficace** (ossia raggiungano gli obiettivi prefissati in termini di output e qualità) ed **efficiente** (ossia minimizzino l'assorbimento di risorse per unità prodotta).

### 4.1 Quadro Comparativo Sintetico: Manufacturing vs Service

| Dimensione | Manufacturing (Beni) | Service (Servizi) |
|---|---|---|
| Natura output | Bene fisico, tangibile | Bene non fisico, intangibile |
| Inventariabilità | Le merci sono inventariate | Produzione e consumo sono simultanei |
| Misurazione qualità | Misurabile direttamente sul prodotto | Qualità percepita, difficile da misurare |
| Coinvolgimento cliente | Il cliente non è coinvolto nella produzione | Il consumer partecipa al processo di produzione |
| Asset critici | Le facility/impianti sono importanti per il successo | Le strutture umane sono cruciali per il successo |
| Intensità produttiva | **Capital Intensive** (impianti, macchinari) | **Labour Intensive** (forza lavoro, competenze) |

### 4.2 Operations Strategy: Obiettivi Strategici Tipici

La **strategia delle operations** è l'insieme delle decisioni di lungo termine che definiscono il modo in cui l'organizzazione decide di rispondere alle richieste del mercato attraverso la produzione di beni e servizi. Tipici obiettivi strategici includono:

- **Massimizzazione del valore aggiunto** offerto al cliente (es. Cirque du Soleil come esperienza unica);
- **Massimizzazione della risposta al cliente** in termini di reattività (es. Enterprise Rent-A-Car con il modello "we'll pick you up");
- **Innovazione, velocità e flessibilità** del sistema (capacità di riconfigurare prodotti e processi);
- **Maggiore qualità** intrinseca del prodotto/servizio (es. Mercedes-Benz);
- **Maggiore efficienza** operativa (es. Hotel F1 nel low-cost dell'ospitalità).

### 4.3 I Processi Logistici nella Supply Chain

La logistica attraversa non solo i settori interni dell'azienda, ma anche i **confini dell'organizzazione**, abbracciando l'intera filiera. Si distinguono tre macro-processi:

1. **Processi logistico-acquisitivi (Procurement):** approvvigionamento dei fattori produttivi presso i fornitori (initial suppliers, second layer of suppliers, first layer of suppliers).
2. **Processi logistico-produttivi (Manufacturing/Internal Logistic):** logistica interna che governa i flussi tra le diverse fasi produttive.
3. **Processi logistico-distributivi (Retailing):** distribuzione dei prodotti finiti verso i first layer of customers, second layer of customers, fino al final customer.

A questi si aggiunge la **Reverse Logistic**, ossia la logistica di ritorno (resi, riciclo, riutilizzo, smaltimento). Caso emblematico è la **supply chain di Apple**: sourcing globale (Stati Uniti, Cina, altri Paesi asiatici, Europa), assemblaggio in Cina, magazzinaggio (Elk Grove, California, e magazzini intermedi via UPS/FedEx), distribuzione multicanale (store online, negozi al dettaglio, vendita diretta, grossisti, dettaglianti, network carriers), e gestione dei resi (restituzione in garanzia, trade-in program, riciclo/riutilizzo).

### 4.4 Impatto sulla Performance Aziendale: Le Cinque Determinanti

| Determinante | Contenuto operativo |
|---|---|
| **Qualità** | Rispetto delle specifiche: meno sprechi e più soddisfazione |
| **Velocità di risposta** | Time to client; possibile differenziazione di prezzo |
| **Affidabilità** | Rispondere nei tempi promessi (esempio: Just In Time) |
| **Flessibilità** | Capacità di cambiare il volume di produzione, di adattare il tempo necessario, di modificare il piano, di innovare |
| **Costo** | Tutti gli obiettivi concorrono ad abbassare i costi; essenziale per le decisioni di marketing |

L'esempio comparativo classico oppone il **fast food** (priorità su costo e velocità) al **ristorante 5 stelle** (priorità su qualità, affidabilità e flessibilità), illustrando come il bilanciamento delle cinque determinanti definisca il posizionamento competitivo.

### 4.5 Configurazione delle Operations: Decisioni Strutturali e Sovrastrutturali

- **Decisioni strutturali:** decisioni di lungo termine che condizionano l'organizzazione futura delle operations (es. localizzazione facility, dimensionamento capacità).
- **Decisioni sovrastrutturali:** valenza di medio termine, riguardano elementi più mutevoli (es. forza lavoro, organizzazione interna).

**Localizzazione delle facility** — fattori da valutare: offshoring/reshoring, fattori ambientali, fattori intangibili, rischio, fattori economico-finanziari.

**Strategie di dimensionamento della capacità produttiva:**

| Strategia | Logica operativa |
|---|---|
| **Chase** | Inseguire la domanda modificando i livelli di produzione in ogni periodo |
| **Level-production** | Mantenere una produzione stabile in ogni periodo dell'orizzonte di pianificazione |
| **Mixed** | Combinare le precedenti strategie bilanciandone vantaggi e svantaggi |

---

## 5. Tipi di Processi Produttivi: Tassonomia Completa

I processi produttivi possono essere classificati lungo due assi: **varietà** (output mix) e **volume** (numerosità unità prodotte). Si ottiene una distinzione tra processi a flusso **intermittente** e a flusso **continuo**.

| Tipologia | Varietà | Volume | Caratteristiche dominanti | Esempi |
|---|---|---|---|---|
| **Progetto (Project)** | Massima | Minimo (unicità) | Output unico, non ripetibile, risorse assemblate ad hoc | Grandi opere civili, eventi, navi |
| **Job Shop** | Alta | Basso | Macchine generiche, alta personalizzazione, lavorazione per commessa | Restauro, aerospazio, prototipi |
| **Batch Shop** | Media | Medio | Macchinari raggruppati per similitudine funzionale, lotti separati con set-up | Tessile, farmaceutico, food |
| **Assembly (Linea di Montaggio)** | Bassa | Alto | Macchinari in sequenza rigida, lavorazione ripetitiva | Automotive, elettrodomestici |
| **Continuous flow** | Minima | Massimo | Flusso ininterrotto, no set-up di prodotto, impianti dedicati | Petrolchimico, siderurgico, energia |

### 5.1 Process Technology e Product Technology

I processi si dispongono in uno spazio tridimensionale: **Process Volume** (job shop, batch shop, continuous flow), **Process Technology** (technically-constrained cycle, distinto in *unitary system* e *distinct machines system*, vs *non technically-constrained cycle*) e **Product Technology** (flow production e components production).

### 5.2 Classificazione dei Flussi Produttivi (Wortmann, 1992)

| Flusso | Descrizione | Area | Esempi tipici |
|---|---|---|---|
| **Make To Stock (MTS)** | Produzione per magazzino, basata su previsioni | Area PUSH | Commodities, alimentari, beni di largo consumo |
| **Assemble To Order (ATO)** | Produzione mista, assemblaggio finale su ordine | Area PUSH/PULL | Mobili componibili, macchine agricole, gruppi meccanici |
| **Make To Order (MTO)** | Produzione standard per commessa | Area PULL | Automobili utilitarie, elettrodomestici, componentistica ricorrente |
| **Purchase To Order (PTO)** | Produzione personalizzata per commessa | Area PULL | Manufatti convenzionali con optional non ricorrenti |
| **Engineer To Order (ETO)** | Produzione speciale non ricorrente, su progetto | Area PULL | Grandi cantieri navali, nautica di lusso, macchinari speciali |

L'asse "Production time" è inversamente proporzionale al "Delivery time" percepito dal cliente: più la produzione è MTS, minore il delivery time; più si scivola verso ETO, maggiore il delivery time ma maggiore la personalizzazione.

### 5.3 Layout Produttivi

Alla classificazione dei processi corrisponde una tipologia parallela di **layout fisici di stabilimento**:

| Layout | Descrizione | Coerenza con processi |
|---|---|---|
| **Layout per processo (functional layout)** | Macchine raggruppate per affinità funzionale; il prodotto si muove tra i reparti | Job shop, batch shop |
| **Layout per prodotto (line layout)** | Macchine disposte in sequenza secondo il ciclo del prodotto; il prodotto avanza in linea | Assembly, continuous |
| **Layout a celle (cellular layout)** | Cellule autonome che raggruppano macchine eterogenee per famiglie di prodotti | Lean / soluzioni ibride |
| **Layout a posizione fissa** | Il prodotto è immobile, risorse e operatori si muovono verso di esso | Project (cantieri, navi, aerei) |
| **Layout a U** | Variante lean del layout per prodotto, con stazione di partenza ed arrivo ravvicinate | Just In Time, Lean Production |

---

## 6. Pianificazione Produttiva: Architettura Gerarchica

La pianificazione delle operations si articola in fasi temporali distinte, ognuna con orizzonte e dettaglio propri. Il flusso decisionale (Monks, 1987) si snoda dal lungo periodo (push) al breve periodo (pull).

| Fase | Orizzonte | Time bucket | Output | Verifica capacità |
|---|---|---|---|---|
| **Pianificazione strategica** | 3-5 anni | Anno | Piano strategico aziendale | — |
| **Pianificazione aggregata (Piano Aggregato)** | 1 anno | Mese | Piano aggregato di produzione (per famiglie di prodotti) | **RRP** (Resource Requirement Planning) |
| **Master Production Schedule (MPS)** | 6-12 mesi | Settimana/mese | Carico di lavoro per prodotto finito | **RCCP** (Rough-Cut Capacity Planning) |
| **Material Requirements Planning (MRP)** | Settimane | Settimana | Fabbisogno materiali e componenti | **CRP** (Capacity Requirement Planning) |
| **FAS (Final Assembly Schedule) / SFC (Shop Floor Control)** | Giorni / 2 settimane | Turno / giorno | Schedulazione di dettaglio per attività | Vincoli di breve termine |

### 6.1 Piano Aggregato vs MPS

| Elemento | Piano Aggregato | Master Production Schedule |
|---|---|---|
| Obiettivo | Tradurre ordini e previsioni di vendita in un piano produttivo gestibile | Definire formalmente quali prodotti realizzare, in quali quantità e tempi |
| Orizzonte | Anno (rolling mensile) | Insieme dei tempi di approvvigionamento + produzione, presumendo zero scorte |
| Logica | Aggregazione per famiglie di prodotti | Disaggregazione del piano aggregato per dimensioni tempo e prodotto |
| Time bucket | Mese | Settimana |
| Frequenza aggiornamento | Mensile (rolling) | Settimanale/mensile |

### 6.2 MRP (Material Requirements Planning) e CRP

L'**MRP** è il sistema informativo che, partendo dal MPS e dalla **distinta base** (Bill of Materials), calcola il fabbisogno netto di materie prime, semilavorati e componenti, considerando le scorte esistenti e i lead time di approvvigionamento. Il **CRP (Capacity Requirement Planning)** verifica la coerenza del piano di produzione con la capacità produttiva disponibile (ore-macchina, ore-uomo).

---

## 7. Operations Improvement: Filosofia del Miglioramento Continuo

L'operations improvement si fonda su tre pilastri:

- **Il miglioramento è pensato per il cliente:** una qualsiasi azienda esiste perché i clienti sono disposti ad acquistare i suoi prodotti.
- **Il miglioramento è continuo:** solo la costante interazione tra ricerca, progettazione, test, produzione e vendita permette di "soddisfare i bisogni presenti e futuri del cliente".
- **Quality first o approccio "zero difetti":** i processi devono funzionare da subito; la qualità si insegue già in fase di progettazione del prodotto e del servizio (logica *upstream* della qualità).

---

## 8. Total Quality Management (TQM): Modello e Pilastri

Il **Total Quality Management** è un approccio manageriale che mira a una completa soddisfazione del cliente coinvolgendo tutte le aree funzionali dell'impresa. È basato su una forte interazione tra tutte le funzioni in tutti i processi.

### 8.1 Strumenti operativi del TQM

- **Coordinamento interfunzionale** tra reparti;
- **Circoli di qualità** (gruppi di miglioramento operai);
- **Comitati interfunzionali** dedicati alla qualità;
- **Certificazioni di qualità** (es. ISO 9000).

### 8.2 Modello TQM (5 pilastri)

| Pilastro | Contenuto |
|---|---|
| **Customer Focus** | Il cliente è il riferimento ultimo della qualità |
| **Planning Process** | La qualità si pianifica ex ante, non si controlla solo ex post |
| **Process Management** | Gestione sistematica dei processi |
| **Process Improvement** | Miglioramento continuo (kaizen) |
| **Total Participation** | Coinvolgimento integrale di tutto il personale |

### 8.3 Padri storici del TQM

- **W. E. Deming:** introduce il **ciclo PDCA** (*Plan, Do, Check, Act*) come motore del miglioramento iterativo.
- **J. M. Juran:** trilogia della qualità (planning, control, improvement); concetto di "fitness for use".
- **K. Ishikawa:** circoli di qualità e diagramma causa-effetto (a lisca di pesce).
- **P. Crosby:** "quality is free" e "zero defects".

---

## 9. Lean Production e Toyota Production System

La **Lean Production** può essere considerata quasi come un'evoluzione del TQM. Il suo grande punto di forza risiede nel **taglio metodologico orientato a produrre il maggior valore possibile con il minor utilizzo di risorse**, attraverso la continua ricerca ed eliminazione degli sprechi (*muda*).

### 9.1 I Due Principi Fondanti

1. **Just In Time (JIT):** produrre la quantità esatta al momento giusto, con sistemi di produzione flessibili. Logica **pull** (a tiraggio): la stazione a valle "tira" il fabbisogno dalla stazione a monte solo quando ne ha effettiva necessità.
2. **Jidoka (autonomazione):** automazione con tocco umano; le macchine si fermano automaticamente al rilevamento di un'anomalia, evitando la propagazione di difetti.

### 9.2 Caratteristiche del Sistema Lean

- Produzione a flusso continuo: i processi sono flessibili, efficienti ed affidabili;
- Riduzione drastica dei tempi di **set-up del lotto** di produzione (tecnica **SMED** - Single Minute Exchange of Die);
- Utilizzo di **contenitori standard** con quantità predefinite;
- **Layout a "U"** che riduce gli spostamenti e favorisce la polivalenza degli operatori.

### 9.3 I Sette Sprechi (Muda)

| # | Muda | Descrizione |
|---|---|---|
| 1 | **Sovrapproduzione** | Produrre più del necessario o prima del necessario |
| 2 | **Attese** | Tempi morti di operatori o macchine in attesa di input |
| 3 | **Trasporti** | Movimentazioni non necessarie di materiali tra reparti |
| 4 | **Lavorazioni eccessive (over-processing)** | Operazioni che non aggiungono valore percepito dal cliente |
| 5 | **Scorte** | Inventario eccessivo che immobilizza capitale e maschera i problemi |
| 6 | **Movimenti** | Spostamenti inutili degli operatori (ergonomia inefficiente) |
| 7 | **Difetti** | Prodotti non conformi che richiedono rilavorazione o scarto |

### 9.4 Strumenti Operativi della Lean

| Strumento | Descrizione |
|---|---|
| **Kaizen** | Filosofia del miglioramento continuo, a piccoli passi, con coinvolgimento dell'intero personale |
| **5S** | Seiri (separare), Seiton (ordinare), Seiso (pulire), Seiketsu (standardizzare), Shitsuke (sostenere) |
| **Kanban** | Sistema di cartellini che regola il flusso pull tra stazioni; ogni contenitore vuoto è un ordine di reintegro |
| **Poka-Yoke** | Dispositivi anti-errore (a prova di stupido) che impediscono fisicamente la generazione di difetti |
| **Heijunka** | Livellamento della produzione in mix e volume, per ridurre la variabilità interna del flusso |
| **Andon** | Sistema visivo di segnalazione delle anomalie (luci, tabelloni) |
| **Value Stream Mapping** | Mappatura del flusso di valore per individuare attività a valore vs sprechi |

---

## 10. Servitization: I Servizi delle Aziende Manifatturiere

La **servitization** significa capire come il cliente userà il prodotto: questa conoscenza aiuta l'impresa ad aumentare la *value-proposition* attraverso l'erogazione di servizi addizionali integrati al bene materiale.

### 10.1 Cambiamento di Paradigma

- **Cambiano le configurazioni delle attività** svolte da una molteplicità di imprese, rendendo sempre più permeabili i confini tra le stesse nella realizzazione di un bene materiale o immateriale.
- Se fino agli **anni '80** il focus era *produrre beni o servizi*, con la servitization il focus si sposta sulla **vendita di un sistema di prodotti e servizi** (Product-Service System, PSS).
- È necessaria la capacità di innovare le proprie capacità e processi per creare un **valore aggiunto distribuito** lungo l'intero ciclo di vita del prodotto.

### 10.2 Risultati della Servitization

- **Utili incrementati** (margini ricorrenti dai servizi superiori a quelli del bene una tantum);
- **Avanzamento e personalizzazione del prodotto** grazie ai dati raccolti durante l'uso;
- **Affiliazione del cliente** (lock-in basato sulla relazione di servizio).

### 10.3 Esempi Paradigmatici

| Azienda | Modello di servitization |
|---|---|
| **Rolls-Royce Aerospace** | "Power by the Hour": vendita di ore di funzionamento del motore anziché del motore stesso; manutenzione e disponibilità inclusi |
| **IBM** | Transizione da fornitore hardware a fornitore di servizi IT, consulenza e soluzioni integrate |
| **Hilti** | "Fleet Management" per attrezzature da cantiere: l'impresa edile paga un canone, Hilti garantisce disponibilità, manutenzione e sostituzione |
| **Caterpillar** | Servizi predittivi di manutenzione basati su IoT installato sulle macchine movimento terra |

---

## 11. Inventory Management: Approfondimento Sistemico

L'**Inventory System** consiste nelle politiche di controllo che monitorano i livelli di inventario e determinano quali livelli debbano essere mantenuti, quando la scorta deve essere riempita e come gli ordini debbano essere gestiti.

### 11.1 Obiettivi del Sistema di Inventario

1. **Soddisfare la variazione della domanda** del prodotto (assorbire i picchi);
2. **Consentire flessibilità nella programmazione** della produzione (decoupling tra fasi);
3. **Fornire una salvaguardia per la variazione nel tempo di consegna** delle materie prime (protezione dai lead time variabili).

### 11.2 Tipologie di Inventario

#### Classificazione in base allo stadio dei materiali

| Tipologia | Descrizione |
|---|---|
| **Raw Materials** | Materie prime usate nel processo di produzione per generare componenti |
| **Works-in-Process (WIP)** | Tutti i materiali, componenti, assemblati e semi-assemblati che stanno per essere processati o sono in attesa di essere processati dal sistema |
| **Finished Goods** | Prodotti finiti pronti per la commercializzazione |

#### Classificazione in base al proposito dei materiali

| Tipologia | Descrizione |
|---|---|
| **Transito (Transit/Pipeline)** | Materiale in spostamento da un luogo all'altro |
| **Buffer** | Protezione dalle incertezze (variabilità di domanda e fornitura) |
| **Anticipazione** | Scorte costituite per possibili eventi futuri prevedibili (stagionalità, promozioni) |
| **Safety stock** | Scorta minima di sicurezza per coprire l'aleatorietà residua |
| **MRO Goods** | Maintenance, Repair and Operating goods (manutenzione, riparazione e operativi) |

### 11.3 Costi di Inventario: Quadro Sintetico

| Costo | Voci tipiche |
|---|---|
| **Holding (carrying) costs** | Stoccaggio, movimentazione, assicurazione, obsolescenza, tasse, costo opportunità del capitale immobilizzato |
| **Setup (production change) costs** | Riattrezzaggio macchine, lancio di nuovi lotti, perdita di produttività durante il cambio |
| **Ordering costs** | Emissione, monitoraggio, ricezione e contabilizzazione degli ordini |
| **Shortage costs** | Perdita di vendita, costi di urgenza, costi di annullamento dell'ordine, danno d'immagine |

### 11.4 Logiche di Inventario: Stock Control vs Flow Control

| Logica | Direzione | Trigger | Tipologia |
|---|---|---|---|
| **Stock Control (look back)** | Reattiva, sguardo all'indietro | L'ordine è effettuato quando lo stock diminuisce sotto soglia; il livello stock è precedentemente definito | Pull system |
| **Flow Control (look ahead)** | Proattiva, sguardo in avanti | Il livello stock non è definito ex ante; si definisce osservando l'andamento delle scorte e dei piani | Push/MRP |

### 11.5 Modelli di Inventario in Stock Control

#### Modello a Quantità Fissa (Q-System / EOQ con Reorder Point)

- **Innescato dagli eventi:** quando il livello scende a R (Reorder Point) si emette un ordine di quantità fissa Q.
- **Q (Economic Order Quantity)** è la quantità ottima costante;
- **R (Reorder Point)** è il punto di riordino, calcolato come *R = d × L + SS* dove *d* è la domanda media giornaliera, *L* è il lead time e *SS* il safety stock;
- **L (Lead time)** è il tempo che intercorre tra emissione e ricezione dell'ordine;
- Il ciclo si ripete: ricezione di Q → consumo nel tempo → raggiungimento di R → nuovo ordine di Q;
- **La quantità è fissa, il tempo tra ordini è variabile**.

**Formula EOQ:**

> **EOQ = √(2 × D × S / H)**

dove:
- **D** = domanda annua (unità/anno);
- **S** = costo fisso di emissione di un ordine (ordering cost o setup cost);
- **H** = costo di mantenimento unitario annuo (holding cost per unità per anno).

L'EOQ è il punto di minimo della curva del costo totale (Holding cost + Ordering cost): nel punto ottimo, holding cost annuo e ordering cost annuo si equivalgono.

#### Modello a Tempo Fisso (P-System / Periodic Review)

- **Innescato dal tempo:** la revisione delle scorte avviene a intervalli temporali fissi (es. ogni venerdì);
- L'ordine emesso porta lo stock al **livello target** prefissato (Order-Up-To Level);
- **Q variabile:** Q = Target − Inventory on hand al momento della revisione;
- **Safety stock** più elevato rispetto al Q-system (deve coprire l'incertezza per tutto l'intervallo di revisione + lead time);
- Vantaggio: semplificazione amministrativa, possibilità di consolidare ordini multipli verso lo stesso fornitore.

### 11.6 Confronto Sintetico Q-System vs P-System

| Caratteristica | Modello a Quantità Fissa (Q) | Modello a Tempo Fisso (P) |
|---|---|---|
| Trigger | Evento (livello = R) | Tempo (intervallo fisso) |
| Quantità ordine | Fissa (Q = EOQ) | Variabile |
| Tempo tra ordini | Variabile | Fisso |
| Monitoraggio | Continuo (perpetual inventory) | Periodico |
| Safety stock | Più basso | Più alto |
| Adatto a | Articoli ad alto valore (classe A) | Articoli a basso valore o consolidamento ordini |

### 11.7 Classificazione ABC (Analisi di Pareto)

L'**analisi ABC** applica il principio di Pareto (80/20) alla gestione delle scorte:

| Classe | % numero articoli | % valore movimentato | Politica di gestione |
|---|---|---|---|
| **A** | ~10-20% | ~70-80% | Controllo stretto, Q-system, conteggi frequenti, safety stock calibrato |
| **B** | ~30% | ~15-20% | Controllo intermedio, P-system o Q-system semplificato |
| **C** | ~50-60% | ~5-10% | Controllo blando, lotti grandi, two-bin system |

### 11.8 Effetto Bullwhip nella Supply Chain

L'**effetto Bullwhip (effetto frusta)** è il fenomeno per cui piccole oscillazioni della domanda al cliente finale si amplificano progressivamente risalendo la supply chain verso monte (retailer → distributore → produttore → fornitore di materie prime). Le cause principali sono:

| Causa | Meccanismo |
|---|---|
| **Demand forecast updating** | Ogni stadio aggiorna le previsioni in base agli ordini ricevuti, sovra-reagendo |
| **Order batching** | Aggregazione degli ordini in lotti (per ridurre costi fissi) genera picchi artificiali |
| **Price fluctuation** | Promozioni e sconti inducono acquisti speculativi |
| **Rationing & shortage gaming** | In caso di scarsità, i clienti ordinano in eccesso temendo razionamenti |

**Contromisure:** condivisione delle informazioni di vendita reale (POS data), Vendor Managed Inventory (VMI), Collaborative Planning Forecasting and Replenishment (CPFR), riduzione dei lead time, EDLP (Every Day Low Pricing).

### 11.9 Integrazione nella Supply Chain

| Integrazione | Direzione | Esempio |
|---|---|---|
| **Verticale a monte (upstream)** | Verso fornitori | Produttore acquisisce/integra fornitori di componenti |
| **Verticale a valle (downstream)** | Verso distributori e retail | Produttore apre catena di flagship store proprietari |
| **Orizzontale** | Tra concorrenti dello stesso stadio | Consorzi di acquisto, joint venture per logistica condivisa |
| **Virtuale (relazionale)** | Coordinamento informativo senza acquisizione | Partnership di lungo periodo, EDI, piattaforme cloud condivise |
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
//  GRAPH 1 — EOQ: Economic Order Quantity
// ══════════════════════════════════════════════════════════════
function EOQGraph() {
  const [D, setD] = useState(10000);   // demand annua
  const [S, setS] = useState(50);      // ordering cost
  const [Hc, setHc] = useState(5);     // holding cost unitario

  const eoq = Math.sqrt((2 * D * S) / Hc);
  const totalCostMin = Math.sqrt(2 * D * S * Hc);

  // Domain: Q from 1 to ~3*EOQ to nicely visualize
  const xMin = 1;
  const xMax = Math.max(eoq * 3, 500);
  const yMin = 0;
  // y range adapt to peak of HC at xMax and OC at xMin
  const yMaxHC = Hc * xMax / 2;
  const yMaxOC = (D * S) / xMin;
  const yMax = Math.min(totalCostMin * 6, Math.max(yMaxHC, totalCostMin * 3));

  // Holding cost curve: HC = H * Q / 2
  const hcPts = [];
  // Ordering cost curve: OC = D*S / Q
  const ocPts = [];
  // Total cost: TC = HC + OC
  const tcPts = [];

  const step = (xMax - xMin) / 100;
  for (let q = xMin; q <= xMax; q += step) {
    const hc = Hc * q / 2;
    const oc = (D * S) / q;
    const tc = hc + oc;
    hcPts.push([toX(q, xMin, xMax), toY(hc, yMin, yMax)]);
    ocPts.push([toX(q, xMin, xMax), toY(oc, yMin, yMax)]);
    tcPts.push([toX(q, xMin, xMax), toY(tc, yMin, yMax)]);
  }
  const hcPath = 'M ' + hcPts.filter(p => p[1] >= PT).map(p => p.join(',')).join(' L ');
  const ocPath = 'M ' + ocPts.filter(p => p[1] >= PT).map(p => p.join(',')).join(' L ');
  const tcPath = 'M ' + tcPts.filter(p => p[1] >= PT).map(p => p.join(',')).join(' L ');

  return (
    <div className="graph-block">
      <h4 className="graph-title">EOQ — Economic Order Quantity: TC = H·Q/2 + D·S/Q minimo in Q* = √(2DS/H)</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          <Axes xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax} xLabel="Q (lotto)" yLabel="costo annuo €" nX={5} xFmt={v => v.toFixed(0)} yFmt={v => v >= 1000 ? (v / 1000).toFixed(1) + 'k' : v.toFixed(0)} />
          {/* Holding cost curve (blue, linear up) */}
          <path d={hcPath} fill="none" stroke="#0ea5e9" strokeWidth={1.8} />
          <text x={toX(xMax * 0.85, xMin, xMax)} y={toY(Hc * xMax * 0.85 / 2, yMin, yMax) - 6} fontSize={10} fill="#0ea5e9">HC = H·Q/2</text>
          {/* Ordering cost curve (orange, hyperbola down) */}
          <path d={ocPath} fill="none" stroke="#f59e0b" strokeWidth={1.8} />
          <text x={toX(xMax * 0.55, xMin, xMax)} y={toY((D * S) / (xMax * 0.55), yMin, yMax) - 6} fontSize={10} fill="#f59e0b">OC = D·S/Q</text>
          {/* Total cost curve (red, U-shape) */}
          <path d={tcPath} fill="none" stroke="#dc2626" strokeWidth={2.4} />
          <text x={toX(xMax * 0.7, xMin, xMax)} y={toY((Hc * xMax * 0.7 / 2) + ((D * S) / (xMax * 0.7)), yMin, yMax) - 6} fontSize={10} fill="#dc2626" fontWeight="600">TC = HC+OC</text>
          {/* EOQ vertical line */}
          {eoq >= xMin && eoq <= xMax && (
            <g>
              <line x1={toX(eoq, xMin, xMax)} y1={PT} x2={toX(eoq, xMin, xMax)} y2={PT + cH} stroke="#16a34a" strokeWidth={1.6} strokeDasharray="4,3" />
              <circle cx={toX(eoq, xMin, xMax)} cy={toY(totalCostMin, yMin, yMax)} r={6} fill="#16a34a" stroke="#fff" strokeWidth={2} />
              <text x={toX(eoq, xMin, xMax) + 6} y={PT + 12} fontSize={11} fill="#16a34a" fontWeight="700">Q* = {eoq.toFixed(0)}</text>
            </g>
          )}
        </svg>
        <div className="graph-controls">
          <SliderControl label="Domanda annua" symbol="D" value={D} min={1000} max={50000} step={500} onChange={setD} color="#0ea5e9" fmt={v => v.toFixed(0) + ' u/anno'} />
          <SliderControl label="Costo per ordine" symbol="S" value={S} min={10} max={200} step={5} onChange={setS} color="#f59e0b" fmt={v => '€ ' + v.toFixed(0)} />
          <SliderControl label="Costo holding unit." symbol="H" value={Hc} min={1} max={20} step={0.5} onChange={setHc} color="#dc2626" fmt={v => '€ ' + v.toFixed(1) + '/u'} />
          <div className="result-box">
            <div className="result-row"><strong>EOQ ottimo Q*</strong> <span style={{ color: '#16a34a' }}>{eoq.toFixed(0)} u</span></div>
            <div className="result-row"><strong>Costo totale minimo</strong> <span>€ {totalCostMin.toFixed(0)}</span></div>
            <div className="result-row"><strong>N. ordini/anno</strong> <span>{(D / eoq).toFixed(1)}</span></div>
          </div>
          <div className="insight-mini">Nel punto ottimo Q*, holding cost e ordering cost annui si equivalgono: TC*= √(2·D·S·H). Aumentare D o S sposta Q* verso destra (lotti più grandi); aumentare H lo sposta a sinistra.</div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAPH 2 — Q-System vs P-System: profili a sega scorte
// ══════════════════════════════════════════════════════════════
function InventoryQPGraph() {
  const [L, setL] = useState(3);          // lead time (giorni)
  const [d, setD] = useState(20);         // domanda media giornaliera
  const [sl, setSl] = useState(95);       // service level %

  // Safety stock semplificato: z*sigma*sqrt(L), con z funzione di sl
  const z = sl >= 99 ? 2.33 : sl >= 97 ? 1.88 : sl >= 95 ? 1.65 : sl >= 90 ? 1.28 : 1.0;
  const sigma = d * 0.2; // dev std demand giornaliera = 20% del medio
  const SS = z * sigma * Math.sqrt(L);
  const ROP = d * L + SS;

  // Q-system: ordine fisso Q_eoq, riordino quando stock <= ROP
  const Q = 200;
  // P-system: review ogni T giorni
  const T = 7; // intervallo fisso settimanale
  const Target = d * (T + L) + z * sigma * Math.sqrt(T + L);

  const days = 30;
  const xMin = 0, xMax = days;
  const yMin = 0, yMax = Math.max(Q + SS + 30, Target + 30);

  // Build Q-system trajectory
  const qLine = [];
  let stockQ = Q;
  let onOrder = false;
  let orderArrives = -1;
  for (let day = 0; day <= days; day += 0.25) {
    if (orderArrives > 0 && day >= orderArrives) {
      stockQ += Q;
      onOrder = false;
      orderArrives = -1;
    }
    if (!onOrder && stockQ <= ROP) {
      onOrder = true;
      orderArrives = day + L;
    }
    qLine.push([toX(day, xMin, xMax), toY(stockQ, yMin, yMax)]);
    stockQ -= d * 0.25;
    if (stockQ < 0) stockQ = 0;
  }
  const qPath = 'M ' + qLine.map(p => p.join(',')).join(' L ');

  // Build P-system trajectory: review every T days, order to bring up to Target
  const pLine = [];
  let stockP = Target;
  let pOrder = 0;
  let pArrives = -1;
  let nextReview = T;
  for (let day = 0; day <= days; day += 0.25) {
    if (pArrives > 0 && day >= pArrives) {
      stockP += pOrder;
      pOrder = 0;
      pArrives = -1;
    }
    if (day >= nextReview) {
      const onHand = stockP + pOrder;
      pOrder = Math.max(0, Target - onHand);
      pArrives = day + L;
      nextReview += T;
    }
    pLine.push([toX(day, xMin, xMax), toY(stockP, yMin, yMax)]);
    stockP -= d * 0.25;
    if (stockP < 0) stockP = 0;
  }
  const pPath = 'M ' + pLine.map(p => p.join(',')).join(' L ');

  return (
    <div className="graph-block">
      <h4 className="graph-title">Q-System vs P-System: profili a sega delle scorte nel tempo</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          <Axes xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax} xLabel="giorni" yLabel="stock" nX={6} xFmt={v => v.toFixed(0)} yFmt={v => v.toFixed(0)} />
          {/* ROP line for Q-system */}
          <line x1={PL} y1={toY(ROP, yMin, yMax)} x2={PL + cW} y2={toY(ROP, yMin, yMax)} stroke="#0ea5e9" strokeDasharray="4,3" strokeWidth={1.2} />
          <text x={PL + cW - 4} y={toY(ROP, yMin, yMax) - 4} fontSize={9} fill="#0ea5e9" textAnchor="end">ROP = {ROP.toFixed(0)}</text>
          {/* Target line for P-system */}
          <line x1={PL} y1={toY(Target, yMin, yMax)} x2={PL + cW} y2={toY(Target, yMin, yMax)} stroke="#a855f7" strokeDasharray="4,3" strokeWidth={1.2} />
          <text x={PL + cW - 4} y={toY(Target, yMin, yMax) - 4} fontSize={9} fill="#a855f7" textAnchor="end">Target = {Target.toFixed(0)}</text>
          {/* SS line */}
          <line x1={PL} y1={toY(SS, yMin, yMax)} x2={PL + cW} y2={toY(SS, yMin, yMax)} stroke="#16a34a" strokeDasharray="2,3" strokeWidth={1} />
          <text x={PL + cW - 4} y={toY(SS, yMin, yMax) - 4} fontSize={9} fill="#16a34a" textAnchor="end">SS = {SS.toFixed(0)}</text>
          {/* Q-system curve */}
          <path d={qPath} fill="none" stroke="#0ea5e9" strokeWidth={1.8} />
          {/* P-system curve */}
          <path d={pPath} fill="none" stroke="#a855f7" strokeWidth={1.8} />
          {/* Legend */}
          <g>
            <line x1={PL + 8} y1={PT + 8} x2={PL + 26} y2={PT + 8} stroke="#0ea5e9" strokeWidth={2} />
            <text x={PL + 30} y={PT + 11} fontSize={9} fill="#0ea5e9">Q-system</text>
            <line x1={PL + 90} y1={PT + 8} x2={PL + 108} y2={PT + 8} stroke="#a855f7" strokeWidth={2} />
            <text x={PL + 112} y={PT + 11} fontSize={9} fill="#a855f7">P-system</text>
          </g>
        </svg>
        <div className="graph-controls">
          <SliderControl label="Lead time" symbol="L" value={L} min={1} max={10} step={1} onChange={setL} color="#0ea5e9" fmt={v => v.toFixed(0) + ' gg'} />
          <SliderControl label="Domanda media" symbol="d" value={d} min={5} max={50} step={1} onChange={setD} color="#a855f7" fmt={v => v.toFixed(0) + ' u/g'} />
          <SliderControl label="Livello servizio" symbol="SL" value={sl} min={80} max={99} step={1} onChange={setSl} color="#16a34a" fmt={v => v.toFixed(0) + '%'} />
          <div className="result-box">
            <div className="result-row"><strong>Reorder Point ROP</strong> <span>{ROP.toFixed(0)} u</span></div>
            <div className="result-row"><strong>Target P-system</strong> <span>{Target.toFixed(0)} u</span></div>
            <div className="result-row"><strong>Safety Stock</strong> <span>{SS.toFixed(0)} u</span></div>
          </div>
          <div className="insight-mini">Q-system riordina al raggiungimento del ROP (quantità fissa Q, tempo variabile). P-system riordina ad ogni intervallo T (tempo fisso, quantità variabile fino a Target). Il P-system necessita di safety stock maggiore.</div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAPH 3 — Effetto Bullwhip lungo la Supply Chain
// ══════════════════════════════════════════════════════════════
function BullwhipGraph() {
  const [Lt, setLt] = useState(2);          // lead time per stadio
  const [varD, setVarD] = useState(10);     // demand variability % al cliente

  // Modello semplificato: ogni stadio amplifica la varianza per fattore (1 + 2L/T + 2L^2/T^2)^0.5
  // approssimato: amplification factor per stage = sqrt(1 + 2*Lt + 2*Lt^2)
  const amp = Math.sqrt(1 + 2 * Lt + 2 * Lt * Lt);

  const stages = [
    { name: 'Cliente', sigma: varD, color: '#16a34a' },
    { name: 'Retailer', sigma: varD * amp, color: '#0ea5e9' },
    { name: 'Wholesaler', sigma: varD * amp * amp, color: '#f59e0b' },
    { name: 'Manufacturer', sigma: varD * amp * amp * amp, color: '#dc2626' },
  ];

  const xMin = 0, xMax = 4;
  const yMin = 0, yMax = Math.max(stages[3].sigma * 1.15, 50);

  const barWidth = cW / 5;
  const bullwhipRatio = stages[3].sigma / stages[0].sigma;

  return (
    <div className="graph-block">
      <h4 className="graph-title">Effetto Bullwhip: amplificazione varianza domanda lungo la supply chain</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          <Axes xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax} xLabel="" yLabel="σ (dev.std)" nX={4} xFmt={() => ''} yFmt={v => v.toFixed(0) + '%'} />
          {stages.map((s, i) => {
            const cx = PL + (i + 0.5) * (cW / 4);
            const bx = cx - barWidth / 2.5;
            const by = toY(s.sigma, yMin, yMax);
            const bh = (PT + cH) - by;
            return (
              <g key={i}>
                <rect x={bx} y={by} width={barWidth / 1.25} height={bh} fill={s.color} opacity={0.85} stroke="#fff" strokeWidth={1.5} rx={3} />
                <text x={cx} y={by - 6} fontSize={10} fill={s.color} fontWeight="700" textAnchor="middle">{s.sigma.toFixed(0)}%</text>
                <text x={cx} y={PT + cH + 16} fontSize={10} fill="#475569" textAnchor="middle" fontWeight="600">{s.name}</text>
              </g>
            );
          })}
          {/* Arrow showing amplification */}
          <defs>
            <marker id="arrowBW" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#dc2626" />
            </marker>
          </defs>
          <line x1={PL + cW * 0.1} y1={PT + 30} x2={PL + cW * 0.9} y2={PT + 30} stroke="#dc2626" strokeWidth={1.5} markerEnd="url(#arrowBW)" strokeDasharray="3,3" />
          <text x={PL + cW * 0.5} y={PT + 22} fontSize={10} fill="#dc2626" fontWeight="600" textAnchor="middle">amplificazione →</text>
        </svg>
        <div className="graph-controls">
          <SliderControl label="Lead time per stadio" symbol="L" value={Lt} min={0.5} max={5} step={0.5} onChange={setLt} color="#0ea5e9" fmt={v => v.toFixed(1) + ' periodi'} />
          <SliderControl label="Variabilità domanda cliente" symbol="σ" value={varD} min={2} max={30} step={1} onChange={setVarD} color="#16a34a" fmt={v => v.toFixed(0) + '%'} />
          <div className="result-box">
            <div className="result-row"><strong>σ Cliente</strong> <span style={{ color: '#16a34a' }}>{stages[0].sigma.toFixed(0)}%</span></div>
            <div className="result-row"><strong>σ Manufacturer</strong> <span style={{ color: '#dc2626' }}>{stages[3].sigma.toFixed(0)}%</span></div>
            <div className="result-row"><strong>Bullwhip Ratio</strong> <span style={{ color: '#dc2626' }}>×{bullwhipRatio.toFixed(1)}</span></div>
          </div>
          <div className="insight-mini">Lead time più lunghi e domand-forecast updating fanno esplodere la varianza salendo verso monte. Contromisure: information sharing (POS), VMI/CPFR, riduzione lead time, EDLP.</div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAPH 4 — 7 Muda della Lean Production
// ══════════════════════════════════════════════════════════════
function MudaWasteGraph() {
  const [m1, setM1] = useState(5); // Trasporti
  const [m2, setM2] = useState(6); // Scorte
  const [m3, setM3] = useState(4); // Movimenti
  const [m4, setM4] = useState(7); // Attese
  const [m5, setM5] = useState(8); // Sovrapproduzione
  const [m6, setM6] = useState(3); // Lavorazioni eccessive
  const [m7, setM7] = useState(5); // Difetti

  const muda = [
    { id: 1, name: 'Trasporti', val: m1, set: setM1, color: '#0ea5e9' },
    { id: 2, name: 'Scorte', val: m2, set: setM2, color: '#0284c7' },
    { id: 3, name: 'Movimenti', val: m3, set: setM3, color: '#a855f7' },
    { id: 4, name: 'Attese', val: m4, set: setM4, color: '#f59e0b' },
    { id: 5, name: 'Sovrapprod.', val: m5, set: setM5, color: '#dc2626' },
    { id: 6, name: 'Over-process.', val: m6, set: setM6, color: '#ec4899' },
    { id: 7, name: 'Difetti', val: m7, set: setM7, color: '#7c3aed' },
  ];

  const totalWaste = muda.reduce((acc, m) => acc + m.val, 0);
  const maxTotal = 70; // 7 * 10
  const leanScore = Math.max(0, 100 - (totalWaste / maxTotal) * 100);

  const xMin = 0, xMax = 7;
  const yMin = 0, yMax = 10;

  const barWidth = cW / 8;

  return (
    <div className="graph-block">
      <h4 className="graph-title">I 7 Muda (sprechi Lean): intensità di ogni spreco e Lean Score complessivo</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          <Axes xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax} xLabel="" yLabel="intensità" nX={7} xFmt={() => ''} yFmt={v => v.toFixed(0)} />
          {muda.map((m, i) => {
            const cx = PL + (i + 0.5) * (cW / 7);
            const bx = cx - barWidth / 2.4;
            const by = toY(m.val, yMin, yMax);
            const bh = (PT + cH) - by;
            return (
              <g key={m.id}>
                <rect x={bx} y={by} width={barWidth / 1.2} height={bh} fill={m.color} opacity={0.85} stroke="#fff" strokeWidth={1.5} rx={3} />
                <text x={cx} y={by - 5} fontSize={10} fill={m.color} fontWeight="700" textAnchor="middle">{m.val}</text>
                <text x={cx} y={PT + cH + 14} fontSize={8} fill="#475569" textAnchor="middle" fontWeight="600">{m.name}</text>
                <text x={cx} y={PT + cH + 25} fontSize={8} fill="#94a3b8" textAnchor="middle">#{m.id}</text>
              </g>
            );
          })}
        </svg>
        <div className="graph-controls">
          {muda.map((m) => (
            <SliderControl key={m.id} label={`${m.id}. ${m.name}`} symbol={'M' + m.id} value={m.val} min={0} max={10} step={1} onChange={m.set} color={m.color} fmt={v => v.toFixed(0)} />
          ))}
          <div className="result-box">
            <div className="result-row"><strong>Spreco totale</strong> <span style={{ color: '#dc2626' }}>{totalWaste} / {maxTotal}</span></div>
            <div className="result-row"><strong>Lean Score</strong> <span style={{ color: leanScore > 70 ? '#16a34a' : leanScore > 40 ? '#f59e0b' : '#dc2626' }}>{leanScore.toFixed(0)} / 100</span></div>
          </div>
          <div className="insight-mini">Ogni Muda assorbe risorse senza creare valore. Il Lean Score è inversamente proporzionale allo spreco totale: kaizen, 5S, kanban e poka-yoke mirano ad eliminare progressivamente questi sprechi.</div>
        </div>
      </div>
    </div>
  );
}

export default function Week10() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', paddingBottom: '4rem' }}>
      <div className="page-header">
        <div style={{ color: 'var(--accent-cyan)', fontWeight: 600, letterSpacing: '0.1em', fontSize: '0.875rem', marginBottom: '0.5rem' }}>SETTIMANA 10</div>
        <h1 className="page-title gradient-text" style={{ fontSize: '3rem' }}>Gestione Logistica, Produzione e Operations Management</h1>
      </div>

      <div className="content-section glass-panel markdown-body">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownContent}</ReactMarkdown>
      </div>

      <div className="content-section glass-panel" style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>📊 Visualizzazioni Interattive</h2>
        <EOQGraph />
        <InventoryQPGraph />
        <BullwhipGraph />
        <MudaWasteGraph />
      </div>
    </div>
  );
}
