import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import '../index.css';
import './macro/macro.css';

const markdownContent = `
# Capitolo 5: Le Strategie Competitive e la Catena del Valore

Nelle settimane precedenti abbiamo costruito il cosiddetto "tripode strategico": l'analisi esterna (macroambiente, settore, 5 forze di Porter), l'analisi interna (risorse, competenze, VRIO) e l'analisi istituzionale. Questi tre pilastri servono a capire *dove* l'impresa si trova e *quali basi* ha per competere. Ma sapere dove si è non basta: arriva il momento in cui il management deve decidere come muoversi concretamente. Deve scegliere in quali business operare, come competere in ciascun business e come tradurre queste scelte in azioni operative coerenti.

Questa settimana affronta tre grandi temi tra loro profondamente collegati. Il primo è l'**architettura della pianificazione strategica**: come la strategia si articola su più livelli all'interno dell'impresa, dalla visione complessiva della holding fino alle singole funzioni operative. Il secondo è la **catena del valore di Porter**, uno strumento analitico formidabile che permette di scomporre l'impresa nelle sue attività elementari per capire dove viene effettivamente creato il margine e dove invece si perde valore. Il terzo è la scelta strategica vera e propria: le **tre strategie competitive di base** di Porter (leadership di costo, differenziazione, focalizzazione), la logica che le distingue, le condizioni per il loro successo e il pericolo mortale di non scegliere, cioè lo *Stuck in the Middle*.

---

## 1. L'Architettura della Pianificazione Strategica

Il successo di un'impresa moderna non è frutto dell'improvvisazione o del fiuto del singolo imprenditore geniale. È piuttosto il risultato di un processo strutturato e consapevole che va sotto il nome di **pianificazione strategica**. La pianificazione strategica è l'insieme delle decisioni attraverso cui l'impresa definisce le proprie mete di lungo periodo, traduce queste mete in obiettivi intermedi e coordina le attività quotidiane affinché siano coerenti con quelle mete.

Il punto di partenza della pianificazione è costituito dai due elementi fondativi dell'identità aziendale: la **mission** e la **vision**. La mission esprime la ragion d'essere dell'impresa — *perché esistiamo*, *a chi serviamo*, *quale bisogno soddisfiamo*. La vision, invece, proietta l'impresa nel futuro — *cosa vogliamo diventare*, *quale impatto vogliamo avere*. Da questi due ancoraggi discende a cascata tutto il resto della strategia, articolandosi su tre livelli gerarchici distinti ma interconnessi.

### 1.1 I tre livelli della strategia

Il primo livello è quello della **Corporate Strategy**, ed è la strategia del vertice aziendale, tipicamente della holding o del consiglio di amministrazione. La Corporate Strategy risponde alla domanda fondamentale: *in quali business dobbiamo operare?*. Qui si decide la composizione del **portafoglio** dell'impresa: quali settori presidiare, quali abbandonare, quali nuovi mercati esplorare, quali acquisizioni effettuare, quali rami cedere. Un gruppo come Unilever, per esempio, a livello corporate decide se stare solo negli alimentari o anche nei prodotti per la casa, se entrare in nuove aree geografiche, se diversificare verso il settore del benessere. Le domande tipiche della Corporate Strategy riguardano l'**attrattività dei settori** (sono redditizi? sono in crescita? sono sostenibili nel lungo termine?) e le **sinergie** tra i diversi business (possono condividere risorse, brand, canali distributivi, conoscenze?).

Il secondo livello è quello della **Business Strategy**, che opera all'interno di un singolo business o area strategica d'affari (ASA). La Business Strategy risponde alla domanda: *nel settore X, come dobbiamo competere per ottenere un vantaggio sostenibile sui concorrenti?*. Qui entrano in gioco tutte le analisi già viste — le 5 forze, l'analisi delle risorse — ma la domanda ora è operativa: come traduco questa conoscenza in un posizionamento competitivo vincente? È al livello della Business Strategy che si scelgono le strategie generiche di Porter di cui parleremo più avanti.

Il terzo livello è quello delle **Strategie Funzionali**, che riguardano le singole funzioni aziendali: marketing, produzione, finanza, HR, supply chain, R&D, IT. Le strategie funzionali non sono autonome: traducono le scelte della Business Strategy in piani operativi concreti e coerenti per ciascuna area. Se la Business Strategy dell'impresa è la differenziazione basata sulla qualità del prodotto, allora la strategia di marketing enfatizzerà il brand e i canali premium, la strategia di produzione punterà alla qualità dei materiali piuttosto che al contenimento dei costi, la strategia HR selezionerà e formerà personale altamente qualificato. La coerenza tra strategie funzionali e business strategy è cruciale: se le funzioni remano in direzioni diverse, nessuna strategia può funzionare.

### 1.1.bis Il processo di pianificazione strategica: dal tripode alle scelte

Le slide schematizzano il processo di pianificazione strategica come una sequenza ordinata che parte dall'identità aziendale e arriva alle scelte operative articolate sui tre livelli. Il flusso può essere sintetizzato così:

| Fase | Contenuto | Output |
|------|-----------|--------|
| **1. Identità** | Mission, Vision, Valori | Definizione del *perché* l'impresa esiste e di *cosa* vuole diventare |
| **2. Tripode strategico** | Analisi esterna + Analisi interna + SWOT | Quadro integrato di opportunità/minacce e punti di forza/debolezza |
| **3. Scelte strategiche** | Decisioni di portafoglio, posizionamento, allocazione | Direzione strategica complessiva |
| **4. Articolazione** | Livello *Corporate*, *Business*, *Funzionale* | Piani coerenti a tutti i livelli organizzativi |

La **SWOT analysis** è lo strumento di sintesi che, ponte tra tripode e scelte strategiche, incrocia i punti di forza (*Strengths*) e debolezza (*Weaknesses*) interni con le opportunità (*Opportunities*) e minacce (*Threats*) esterne, generando una matrice 2×2 da cui emergono le possibili direzioni strategiche: difensive (forze contro minacce), offensive (forze su opportunità), di riorientamento (debolezze su opportunità) o di ristrutturazione (debolezze contro minacce).

### 1.2 Dal tripode strategico alle scelte: il vantaggio competitivo

Il fine ultimo di tutta l'attività di pianificazione strategica è l'ottenimento di un **vantaggio competitivo**. Un'impresa possiede un vantaggio competitivo quando riesce a generare, in modo duraturo, una **redditività superiore alla media del proprio settore**. Nota bene: non basta essere redditizi, bisogna esserlo *più* dei concorrenti, e in modo *non episodico*. Una redditività temporanea — un anno d'oro seguito da vacche magre — non è un vantaggio competitivo, è solo un picco di fortuna. Il vantaggio competitivo è una macchina che continua a produrre extra-profitti anno dopo anno.

Perché un'impresa ottenga extra-profitti, deve fare qualcosa di **diverso** rispetto ai concorrenti. Questa è la chiave: la diversità. Se un'impresa fa esattamente quello che fanno tutte le altre, i suoi prezzi, i suoi costi e le sue margini saranno allineati alla media del settore, e quindi per definizione la sua redditività sarà quella media. L'extra-profitto nasce solo dallo scarto — dalla capacità di offrire qualcosa che i concorrenti non offrono, o di offrirlo in modo più economico. La fonte della diversità può essere di due tipi, ed è importante distinguerli con precisione perché hanno implicazioni molto diverse per la sostenibilità del vantaggio.

La prima fonte è l'**efficienza operativa** (*operational effectiveness*). Qui l'impresa fa le stesse cose che fanno tutti i concorrenti, ma le fa meglio: produce a costi più bassi, consegna più rapidamente, offre una qualità più alta a parità di prezzo. Tipicamente l'efficienza operativa si traduce in processi produttivi più raffinati, minor spreco di materiali, manodopera più qualificata, macchinari all'avanguardia, logistica ottimizzata. Il problema dell'efficienza operativa come fonte di vantaggio è che è **imitabile**: le best practice si diffondono, i consulenti le copiano da un cliente all'altro, i benchmarking studiano chi fa meglio e comunicano i risultati, i dipendenti cambiano lavoro portando con sé il know-how. Nel tempo, tutti i concorrenti si avvicinano alla stessa "frontiera di efficienza" e il vantaggio si erode. L'impresa che si affida solo all'efficienza operativa si condanna a una rincorsa infinita in cui ogni miglioramento viene rapidamente copiato dagli altri.

La seconda fonte è il **posizionamento strategico**. Qui l'impresa non fa le stesse cose dei concorrenti in modo migliore: fa cose *diverse*, sceglie una combinazione unica di attività che nessun altro ha. Il posizionamento strategico richiede **trade-off** consapevoli: per fare bene una cosa, l'impresa rinuncia a farne altre. Ryanair sceglie di volare solo su rotte punto-punto da aeroporti secondari con una sola classe di servizio; rinuncia ai vantaggi dei grandi hub e delle connessioni. Ferrari sceglie di produrre poche auto a prezzi altissimi; rinuncia ai volumi del mercato di massa. Il posizionamento strategico è molto più difficile da imitare perché richiede di riorganizzare contemporaneamente molte attività in modo coerente — non basta copiare un pezzo, bisogna copiare l'intero sistema, e spesso questo è incompatibile con le altre scelte che un concorrente ha già fatto. Un concorrente che vuole competere con Ryanair dovrebbe rinunciare al suo sistema di hub, dismettere gran parte della propria flotta, rinegoziare tutti i contratti con i dipendenti: un'operazione che può richiedere anni e che spesso è politicamente impossibile.

### 1.3 La sostenibilità del vantaggio: i meccanismi di Ghemawat

Anche il più solido vantaggio competitivo tende a erodersi con il tempo. I concorrenti imitano, inventano sostituti, le tecnologie cambiano, i gusti dei consumatori si modificano. Pankaj Ghemawat, professore di Harvard, ha studiato in profondità la questione e ha identificato **tre meccanismi principali** che rendono un vantaggio competitivo sostenibile, cioè capace di resistere all'erosione nel tempo.

Il primo meccanismo è la **dimensione**, in particolare le **economie di scala**. Quando un'impresa ha raggiunto una dimensione molto superiore a quella dei suoi concorrenti, i suoi costi unitari sono così bassi che nessun nuovo entrante riesce a raggiungerla senza fare investimenti colossali e assorbire perdite per anni. Il caso classico è Walmart nel retail americano: i suoi volumi d'acquisto sono talmente elevati che ottiene dai fornitori sconti che nessun piccolo concorrente potrà mai ottenere. Altri esempi sono Intel nei microprocessori, Google nella ricerca online, Amazon nell'e-commerce. La dimensione funziona come una barriera all'ingresso e come un deterrente per gli sfidanti.

Il secondo meccanismo è l'**accesso privilegiato a risorse o mercati**. Questo accade quando un'impresa controlla un input critico che i concorrenti non possono ottenere alle stesse condizioni: un brevetto, un contratto esclusivo con un fornitore, una localizzazione unica (pensiamo a un negozio in piazza del Duomo), relazioni consolidate con clienti strategici, risorse umane fuori ordinario (un designer famoso, un cuoco stellato). Se queste risorse sono legate a lungo termine all'impresa e non sono replicabili dai concorrenti, generano un vantaggio durevole. È la logica dei *recursi VRIO* che abbiamo visto in RBV: valore, rarità, inimitabilità, organizzazione.

Il terzo meccanismo sono le **restrizioni strutturali all'azione dei concorrenti**. Anche quando un vantaggio sarebbe attaccabile, talvolta i concorrenti non possono reagire perché vincolati da impegni passati: impianti troppo rigidi, contratti sindacali pluriennali, brand troppo identificati con un segmento diverso, reti distributive costruite per altre esigenze. Un concorrente che volesse copiare una strategia premium, per esempio, potrebbe trovarsi bloccato dalla reputazione costruita negli anni come fornitore economico: il suo stesso brand è un ostacolo al cambiamento. Queste "rigidità buone per chi ha già il vantaggio" sono spesso sottovalutate ma in realtà sono potentissime: le **commitments** pregresse di un rivale possono impedirgli di reagire efficacemente.

Un buon vantaggio competitivo, secondo Ghemawat, è quello che poggia su almeno uno di questi tre meccanismi. I vantaggi che non hanno alcuna base strutturale sono fragili: spariranno non appena un concorrente più agguerrito entrerà nell'arena.

### 1.4 La sostenibilità complessiva: durata, variabili strutturali, strategie di difesa

Le slide ampliano il quadro di Ghemawat indicando che la **stabilità del vantaggio competitivo** dipende complessivamente da tre famiglie di fattori, tra loro complementari, che il management deve presidiare in modo coordinato.

| Famiglia di fattori | Componenti | Logica |
|---------------------|-----------|--------|
| **1. Durata delle R&C distintive** | Risorse e competenze VRIO non deperibili | Più le risorse critiche sono robuste e non si erodono, più il vantaggio dura |
| **2. Variabili strutturali** | (a) Dimensione d'impresa; (b) accesso privilegiato a risorse o mercato; (c) limiti alle strategie dei concorrenti | Condizioni di contesto che rendono la posizione difendibile (logica di Ghemawat) |
| **3. Strategie di difesa** | (a) *Nascondere* la performance superiore; (b) *moral suasion* (promessa credibile di rappresaglia); (c) occupazione anticipata di una nicchia (*first-mover advantage*); (d) *causal ambiguity* (rendere opaca la fonte del vantaggio) | Comportamenti attivi del management per scoraggiare imitazione e attacco |

La **causal ambiguity** è particolarmente importante: quando i concorrenti non riescono a capire *quale* combinazione di attività e risorse genera la performance superiore, l'imitazione diventa estremamente difficile, perché non si sa esattamente *cosa* copiare. La **moral suasion** opera invece sul piano della credibilità: l'incumbent comunica che reagirà con durezza a qualsiasi attacco (taglio prezzi, guerra promozionale, lobbying), inducendo i potenziali sfidanti a desistere prima ancora di entrare.

---

## 2. La Catena del Valore di Porter

Fino a qui abbiamo parlato dell'impresa come di un'entità unitaria: produce un prodotto, lo vende, guadagna un margine. Ma se vogliamo capire **dove** nasce davvero il margine — in quale parte dell'impresa, attraverso quali attività — abbiamo bisogno di uno strumento analitico più fine. Lo strumento è la **catena del valore** (*value chain*), introdotta da Michael Porter nel 1985 in *Competitive Advantage*. La catena del valore è una mappa che scompone l'impresa in un insieme di attività distinte ma interconnesse, ciascuna delle quali contribuisce (o dovrebbe contribuire) alla creazione del valore finale.

L'idea di fondo è semplice ma potente. Ogni impresa, per trasformare input in prodotti finiti che il cliente è disposto a pagare, svolge una serie di attività. Ogni attività ha un **costo** (quello che l'impresa spende per svolgerla) e un **contributo al valore** (quanto quell'attività aggiunge, agli occhi del cliente, al valore del prodotto finale). La differenza tra il valore totale creato e il costo totale delle attività è il **margine** dell'impresa. Formalmente:

$$\\text{Margine} = \\text{Valore Totale Creato} - \\text{Costo Totale delle Attività}$$

Se scomponiamo l'impresa attività per attività, possiamo identificare dove il valore nasce (*attività che aggiungono molto valore al cliente*) e dove i costi si concentrano (*attività costose ma magari poco apprezzate*). Questa analisi è la base per il miglioramento della competitività: possiamo decidere di rafforzare le attività chiave del valore, esternalizzare quelle poco strategiche, eliminare gli sprechi, ridisegnare la sequenza delle operazioni.

Porter distingue le attività dell'impresa in due grandi categorie: le **attività primarie** e le **attività di supporto**.

### 2.0.bis Schema sintetico delle attività della catena del valore

Le slide presentano le attività primarie e di supporto in due tabelle riassuntive che è utile riportare in forma diretta, perché costituiscono la "definizione operativa" che il corso utilizza nei casi e nelle verifiche.

**Attività primarie**

| Attività | Definizione | Esempi operativi |
|----------|------------|------------------|
| **Logistica in entrata** | Gestione fisica degli input produttivi | Gestione del magazzino, controllo delle scorte, restituzione delle merci ai fornitori |
| **Attività operative** | Trasformazione degli input e creazione del prodotto | Lavorazione, assemblaggio, imballaggio, manutenzione dei macchinari |
| **Logistica in uscita** | Flusso delle consegne dei prodotti finiti | Magazzinaggio prodotti finiti, evasione ordini, gestione dei vettori di consegna |
| **Marketing e vendite** | Aspetto negoziale del processo operativo | Pubblicità, gestione della forza vendita, offerte, selezione canali distributivi, politica dei prezzi |
| **Servizi post-vendita** | Mantenere o migliorare il valore del prodotto nel tempo | Installazioni, collaudi, corsi di formazione, ricambi, assistenza |

**Attività di supporto (secondarie)**

| Attività | Definizione | Esempi operativi |
|----------|------------|------------------|
| **Approvvigionamenti** | Procedura di acquisto di tutti gli input | Materie prime, forniture, beni di consumo, beni patrimoniali |
| **Sviluppo della tecnologia** | Know-how, procedure e input tecnologici per ogni attività della catena | R&D di prodotto e di processo, digitalizzazione, automazione |
| **Gestione delle risorse umane** | Politiche per il capitale umano | Selezione, promozione e assunzione, valutazione, programmazione carriere, rapporti con i sindacati |
| **Attività infrastrutturali** | Governo generale dell'impresa | Direzione generale, pianificazione, finanza, contabilità, ufficio legale, controllo della qualità |

### 2.1 Le cinque attività primarie

Le attività primarie sono quelle direttamente coinvolte nella trasformazione fisica degli input in output e nel trasferimento di questi output al cliente. Porter ne identifica cinque.

**Logistica in entrata (*Inbound Logistics*)**. È la prima attività della catena: riguarda la ricezione, lo stoccaggio e la gestione dei materiali in ingresso — le materie prime, i componenti, i semilavorati acquistati da fornitori esterni. Include attività come la gestione del magazzino, la movimentazione interna, il controllo qualità in ingresso, la programmazione dei flussi in arrivo. Un'ottima logistica in entrata è quella che garantisce disponibilità dei materiali al momento giusto senza accumulare scorte eccessive, minimizzando costi di stoccaggio e rischi di obsolescenza. Il modello Just-In-Time di Toyota è un esempio leggendario di innovazione nella logistica in entrata: i materiali arrivano in stabilimento esattamente quando servono, riducendo drasticamente le scorte.

**Attività operative (*Operations*)**. È il cuore produttivo dell'impresa: la trasformazione vera e propria degli input in prodotti finiti. Include la fabbricazione, l'assemblaggio, i collaudi, il packaging, la manutenzione degli impianti. Per un'impresa di servizi, le Operations riguardano l'erogazione del servizio stesso (il cuoco che cucina, il consulente che consiglia, l'insegnante che insegna). È l'attività spesso più visibile e tradizionalmente considerata "il vero lavoro" dell'impresa. Ma Porter avverte: *le Operations sono solo una delle cinque attività primarie*. Un'impresa che concentra tutta l'attenzione sulla fabbrica e trascura le altre attività lascia sul tavolo enormi opportunità di miglioramento.

**Logistica in uscita (*Outbound Logistics*)**. Riguarda lo stoccaggio del prodotto finito, l'ordinamento degli ordini dei clienti, la preparazione delle spedizioni e la distribuzione fisica. Include la gestione del magazzino dei prodotti finiti, il picking, il packaging per la spedizione, i rapporti con corrieri e trasportatori, la consegna al cliente. Nell'e-commerce la logistica in uscita è diventata cruciale: Amazon ha fatto della rapidità e affidabilità delle consegne uno dei suoi principali vantaggi competitivi. Una logistica in uscita inefficace può distruggere qualsiasi eccellenza di prodotto: il cliente che riceve merce in ritardo o danneggiata non distingue la colpa della fabbrica da quella del corriere.

**Marketing e Vendite**. Sono le attività che inducono il cliente a scegliere il nostro prodotto e a pagarlo. Includono la pubblicità, il posizionamento del brand, la gestione dei canali distributivi, la formazione dei venditori, la definizione dei prezzi, le promozioni, le relazioni con i rivenditori, l'analisi del mercato. Marketing e Vendite sono l'interfaccia tra l'impresa e il cliente: un prodotto eccellente che non riesce a comunicare il proprio valore fallirà nel mercato. Allo stesso tempo, un marketing aggressivo su un prodotto scadente può generare vendite a breve ma distruggere la reputazione dell'impresa a medio termine. Il marketing efficace è quello che racconta il valore reale del prodotto in modo credibile.

**Servizi post-vendita**. L'ultima attività primaria riguarda tutto ciò che accade *dopo* che il cliente ha ricevuto il prodotto: installazione, formazione all'uso, manutenzione, riparazioni, gestione dei reclami, garanzia, parti di ricambio. Porter osserva giustamente che per molti prodotti i servizi post-vendita sono una fonte di valore enorme e troppo spesso trascurata. Un'auto come una Mercedes o un elettrodomestico come un Miele valgono anche perché si sa che l'assistenza sarà eccellente. Inoltre, i servizi post-vendita generano spesso margini altissimi (pensiamo al prezzo dei ricambi originali) e costruiscono la fedeltà del cliente per gli acquisti futuri.

### 2.2 Le quattro attività di supporto

Le attività di supporto non producono direttamente il prodotto, ma **sostengono** le attività primarie fornendo loro risorse, competenze, tecnologie e coordinamento. Sono spesso "invisibili" al cliente ma indispensabili all'impresa. Porter ne identifica quattro.

**Infrastruttura dell'impresa**. Include tutte le attività di governo generale: direzione strategica, pianificazione, finanza e contabilità, amministrazione, gestione legale, relazioni con gli investitori, gestione dei rapporti istituzionali, qualità complessiva dell'organizzazione. Sono le attività che tengono insieme l'impresa come entità economica e giuridica. Un'infrastruttura ben organizzata è quella che prende decisioni rapide ed efficaci, tiene sotto controllo il bilancio, garantisce la legalità delle operazioni, preserva la reputazione aziendale.

**Gestione delle Risorse Umane (HR)**. Include reclutamento, selezione, formazione, valutazione delle performance, sistema di incentivi e retribuzioni, pianificazione delle carriere, relazioni sindacali, welfare aziendale. La gestione HR è trasversale a tutte le altre attività: serve HR per le Operations (operai qualificati), per il marketing (venditori preparati), per l'R&D (ricercatori brillanti), per la direzione (manager capaci). In molte imprese moderne basate sulla conoscenza, HR è *l'attività più critica*, perché le persone sono la vera risorsa dell'impresa.

**Sviluppo tecnologico (R&D e Innovazione)**. Include tutte le attività di ricerca e sviluppo, sia di prodotto (nuovi modelli, miglioramenti di qualità) sia di processo (nuove tecniche produttive, automazione, digitalizzazione). Non riguarda solo i laboratori di R&D in senso stretto: qualsiasi attività di miglioramento sistematico — dalla progettazione di un nuovo sistema informativo alla messa a punto di una nuova procedura di vendita — rientra nello sviluppo tecnologico. In settori ad alta intensità tecnologica come il farmaceutico, l'elettronica, l'automotive, lo sviluppo tecnologico assorbe una parte enorme del budget aziendale ed è la chiave della sopravvivenza di lungo periodo.

**Approvvigionamenti (*Procurement*)**. Riguarda l'acquisto di tutti gli input utilizzati dall'impresa: materie prime, componenti, macchinari, servizi, consulenze, energia. Gli approvvigionamenti non vanno confusi con la logistica in entrata: la logistica in entrata gestisce *fisicamente* i materiali una volta che sono arrivati, mentre gli approvvigionamenti *scelgono i fornitori*, *negoziano i contratti*, *definiscono le condizioni di acquisto*. Un buon approvvigionamento può generare enormi risparmi: selezionando fornitori più economici, ottenendo sconti per volumi, evitando dipendenze da fornitori monopolistici. Ma è anche strategico: la scelta di fornitori di qualità può fare la differenza per la qualità finale del prodotto.

### 2.3 Il margine e il sistema del valore

Rimettendo insieme il quadro: le cinque attività primarie e le quattro di supporto, svolte in modo coordinato, producono un certo **valore totale** per il cliente. Dall'altra parte, hanno un certo **costo totale**. La differenza tra valore e costo è il margine. L'obiettivo strategico è massimizzare questo margine — il che significa lavorare contemporaneamente sul valore (aumentandolo) e sui costi (riducendoli, quando possibile senza distruggere valore).

La catena del valore, tuttavia, non si ferma ai confini dell'impresa. Ogni impresa è parte di un **sistema del valore** più ampio, che comprende a monte le catene del valore dei suoi **fornitori** e a valle quelle dei suoi **distributori** e dei suoi **clienti finali**. Tutte queste catene, messe in fila, formano la filiera che porta il valore dall'estrazione delle materie prime fino al consumatore. L'impresa che sa gestire bene non solo la propria catena, ma anche le interfacce con fornitori e distributori — magari integrandosi verticalmente, stringendo partnership strategiche, o semplicemente coordinandosi meglio — può ottenere vantaggi competitivi significativi rispetto ai rivali che lavorano isolati.

Un esempio illuminante è quello di IKEA: IKEA ha rivoluzionato l'arredamento non solo grazie alla propria catena del valore interna (design efficiente, negozi self-service, mobili smontabili), ma anche integrando intelligentemente i fornitori (contratti pluriennali che permettono economie di scala) e coinvolgendo il cliente stesso nelle attività finali (assemblaggio a casa, trasporto). IKEA ha riscritto il sistema del valore del settore mobili.

### 2.4 La catena delle relazioni: integrazione, non alternativa

Le slide introducono un raffinamento concettuale importante: la **catena delle relazioni** non è uno strumento alternativo alla catena del valore, ma una sua **integrazione**. Mentre la catena del valore mette al centro le *attività* svolte dall'impresa, la catena delle relazioni evidenzia il *come* di tali attività — ossia le relazioni interne ed esterne attraverso cui l'impresa acquisisce, controlla e sviluppa le risorse e competenze (R&C) che producono il valore.

| Tipologia di relazione | Esempi | Contributo al valore |
|------------------------|--------|---------------------|
| **Relazioni con i fornitori** | Contratti, partnership, co-design | Qualità degli input, riduzione dei costi di transazione |
| **Relazioni interne/esterne nel processo produttivo** | Coordinamento tra reparti, terzisti, alleanze tecniche | Efficienza operativa, flessibilità |
| **Relazioni con i clienti** | CRM, post-vendita, co-creazione | Fedeltà, valore percepito, feedback |
| **Relazioni nell'ambito allargato** | Stakeholder istituzionali, regolatori, comunità | Legittimazione, accesso a risorse pubbliche |
| **Relazioni nelle attività di supporto** | Università, centri di ricerca, consulenti | Innovazione, competenze specialistiche |

L'enfasi è sul fatto che il valore non scaturisce solo dalle attività in sé, ma dalla **qualità delle relazioni** che le animano. Imprese con catene del valore formalmente identiche possono produrre risultati radicalmente diversi a seconda di come gestiscono i propri network relazionali.

---

## 3. Le Strategie Competitive di Base

Arriviamo infine al punto nodale: una volta capito *dove* si genera valore nell'impresa (catena del valore) e *come* si costruisce un vantaggio sostenibile (efficienza vs posizionamento, meccanismi di Ghemawat), il management deve fare una scelta strategica concreta. Come competiamo? Qual è il nostro *modo* di cercare il vantaggio competitivo nel settore?

Porter ha codificato questa scelta in un celebre schema a matrice che incrocia due dimensioni fondamentali.

La prima dimensione è la **fonte del vantaggio competitivo**. L'impresa può cercare il vantaggio o attraverso il **costo più basso** (riuscire a produrre più economicamente dei concorrenti) o attraverso la **differenziazione** (offrire qualcosa di percepito come unico, per cui il cliente è disposto a pagare un premium).

La seconda dimensione è l'**ambito competitivo**. L'impresa può scegliere un **ambito ampio**, cercando di servire l'intero mercato o gran parte di esso, oppure un **ambito ristretto**, concentrandosi su uno o pochi segmenti specifici (una nicchia).

Incrociando queste due dimensioni si ottiene una matrice 2×2 da cui emergono le **tre strategie generiche di Porter**: leadership di costo (ambito ampio + costi bassi), differenziazione (ambito ampio + unicità) e focalizzazione (ambito ristretto, a sua volta declinata in focalizzazione sui costi o focalizzazione sulla differenziazione).

### 3.1 La Leadership di Costo

La strategia di **leadership di costo** consiste nel diventare il **produttore con i costi più bassi del settore**, servendo un mercato ampio. L'impresa offre tipicamente un prodotto **standardizzato**, privo di caratteristiche superflue (*no-frills*), essenziale nelle sue funzioni. Il valore non sta in un'esperienza raffinata o in un design elegante, ma nell'accesso a un bene o servizio a un prezzo che nessun concorrente riesce a pareggiare mantenendo margini sani.

La leadership di costo si costruisce attraverso diversi meccanismi combinati. Il primo sono le **economie di scala**: producendo volumi molto elevati, i costi fissi si spalmano su un gran numero di unità, abbassando il costo unitario. Il secondo è la **curva di esperienza**: più un'impresa produce un certo prodotto, più affina le tecniche, riduce gli errori, ottimizza i processi — e i costi scendono progressivamente. Il terzo è l'**automazione** e l'investimento in tecnologie produttive avanzate. Il quarto è l'**outsourcing** o la delocalizzazione verso Paesi a costo del lavoro più basso. Il quinto è il **potere contrattuale verso i fornitori**, che permette di strappare prezzi migliori grazie ai volumi acquistati. Il sesto è il **design del prodotto orientato al costo**: semplificare, standardizzare, eliminare componenti non indispensabili.

Una volta che l'impresa ha raggiunto una posizione di costo inferiore ai concorrenti, ha davanti a sé due opzioni strategiche. La prima è **abbassare il prezzo** sotto il livello dei concorrenti, trasferendo al cliente parte del vantaggio di costo: in questo modo conquista quote di mercato, espelle i concorrenti deboli, aumenta i volumi. La seconda è **mantenere il prezzo allineato** a quello dei concorrenti, intascando come **margine unitario** maggiore l'intero differenziale di costo: lo stesso prezzo del mercato ma costi più bassi significa profitti più alti. Entrambe le opzioni sono valide; la scelta dipende dalla struttura del settore e dagli obiettivi di lungo periodo dell'impresa.

Esempi classici di leadership di costo sono **Ryanair** nelle compagnie aeree low-cost, **IKEA** nell'arredamento (pur con qualche differenziazione sul design), **Walmart** nel retail americano, **Lidl** nella grande distribuzione alimentare europea, **McDonald's** nella ristorazione.

#### Determinanti del vantaggio di costo: nove leve operative

Le slide identificano in modo puntuale **nove fattori** specifici dell'attività (le cosiddette *cost drivers*) attraverso cui l'impresa può costruire un vantaggio di costo. Ciascuna leva agisce su una dimensione tecnica o organizzativa precisa.

| # | Leva | Logica del risparmio |
|---|------|---------------------|
| 1 | **Economie di scala e di scopo** | Riduzione dei costi unitari per spalmatura dei costi fissi su volumi più ampi e per condivisione di risorse tra più produzioni |
| 2 | **Economie di apprendimento** | Riduzione progressiva dei costi grazie all'esperienza cumulata (curva di esperienza) |
| 3 | **Grado di utilizzazione della capacità produttiva** | Ammortamento più efficiente di impianti e strutture quando si lavora vicino al pieno carico |
| 4 | **Tecnologia di processo** | Adozione di tecnologie produttive più efficienti, automazione, robotica |
| 5 | **Progettazione del prodotto** | Design *for cost*: standardizzazione, riduzione componenti, modularità |
| 6 | **Localizzazione delle attività produttive** | Scelta di geografie a minor costo del lavoro, dell'energia, delle materie prime |
| 7 | **Modalità di approvvigionamento** | Selezione fornitori, contratti quadro, *e-procurement*, gare competitive |
| 8 | **Modalità di distribuzione** | Razionalizzazione canali, riduzione intermediari, logistica integrata |
| 9 | **Fattori generici di efficienza interna** | Cultura organizzativa orientata al risparmio, sistemi di *cost control*, KPI sui costi |

#### Riconfigurazione della catena del valore

Una seconda categoria di determinanti del vantaggio di costo riguarda non la singola attività, ma i **legami tra attività**: l'impresa può ottenere risparmi strutturali ridisegnando la propria catena del valore secondo quattro direttrici principali.

| Direttrice | Significato | Esempio |
|------------|-------------|---------|
| **Esternalizzazione di attività** | Affidare a terzi attività in cui l'impresa è meno efficiente di operatori specializzati | Outsourcing della logistica, della contabilità, dell'IT |
| **Reingegnerizzazione dei processi produttivi** | Ridefinire la sequenza logica delle fasi per eliminare ridondanze e tempi morti | *Business Process Reengineering*, lean manufacturing |
| **Razionalizzazione delle unità produttive** | Concentrare la produzione in stabilimenti integrati di grandi dimensioni | Chiusura di plant ridondanti, hub regionali |
| **Riposizionamento lungo la filiera** | Integrazione verticale a monte (verso i fornitori) o a valle (verso la distribuzione) | Acquisizione di un fornitore strategico, ingresso nel retail diretto |

La riconfigurazione è "complessa ma genera maggiore sostenibilità del vantaggio di costo": più difficile da copiare per i concorrenti rispetto a un singolo miglioramento di efficienza puntuale.

#### Effetti sistemici della leadership di costo

Avere costi inferiori ai concorrenti non incide solo sul margine: modifica l'**equilibrio competitivo** complessivo del settore lungo quattro dimensioni:

- riduce l'**intensità della competizione** (il leader può sostenere prezzi che altri non reggono);
- modifica il **potere contrattuale** verso clienti e fornitori (margini più ampi danno spazio negoziale);
- invia un **messaggio deterrente ai potenziali entranti** (chi entra dovrà sostenere perdite per anni);
- riduce il rischio di **switching verso prodotti sostituti** (il prezzo basso erode l'attrattività delle alternative).

I **rischi** della leadership di costo sono però significativi. Il primo è l'**imitazione tecnologica**: un nuovo concorrente, magari da un Paese emergente, può replicare le tecniche produttive a costi ancora più bassi grazie a costi del lavoro inferiori, sconvolgendo la posizione del leader storico. È quanto è successo alle imprese occidentali quando i produttori cinesi sono entrati nei settori dell'acciaio, dei pannelli solari, dell'elettronica di consumo. Il secondo rischio è il **cambiamento delle preferenze del consumatore**: se il mercato diventa sempre più sofisticato e cerca prodotti differenziati, il prodotto standardizzato low-cost può trovarsi marginalizzato. Il terzo rischio è la **dipendenza dai volumi**: il leader di costo deve produrre e vendere molto per ammortizzare gli investimenti, e una caduta della domanda può rapidamente distruggere la sua redditività. Il quarto è che il leader può essere così focalizzato sul costo da perdere di vista la qualità minima accettabile, finendo per allontanare i clienti.

### 3.2 La Differenziazione

La strategia di **differenziazione** consiste nell'offrire un prodotto o servizio **percepito come unico** dal cliente, per qualche dimensione che ha valore per lui. Il cliente è disposto a pagare un prezzo superiore — un **Premium Price** — perché riconosce nel prodotto qualcosa che gli altri non offrono. La differenziazione non richiede di avere i costi più bassi: al contrario, spesso comporta costi maggiori (materiali migliori, R&D più costosa, servizio al cliente più intenso). Ma il maggior prezzo ottenuto compensa e va oltre l'aumento dei costi, generando margini più alti di quelli della media del settore.

Le **fonti di differenziazione** sono molte e possono combinarsi. Le fonti **tangibili** riguardano le caratteristiche fisiche e misurabili del prodotto: prestazioni superiori (un'auto più potente, una fotocamera con più megapixel), affidabilità e durata (un elettrodomestico che dura vent'anni), qualità dei materiali (un abito di lana pregiata, un orologio in oro), design estetico (un prodotto Apple o un mobile di design italiano). Le fonti **intangibili** riguardano invece aspetti immateriali ma altrettanto potenti: il **brand** e la sua reputazione, lo **status sociale** che il prodotto conferisce, l'**esperienza d'acquisto** e di utilizzo, il **servizio clienti** straordinario, la **personalizzazione**.

Particolarmente importante tra le fonti intangibili è il **brand**. Il brand è un insieme di associazioni, ricordi, emozioni e aspettative che il cliente connette a un nome o simbolo commerciale. Un brand forte ha due effetti economici preziosi: riduce l'incertezza del cliente (sa cosa aspettarsi e quindi è disposto a pagare di più per la certezza) e conferisce uno status sociale (chi indossa o usa un certo brand comunica qualcosa di sé stesso). Rolex non vende solo un orologio che segna l'ora — vende l'appartenenza a un club sociale.

Esempi emblematici di differenziazione sono **Apple** nell'elettronica di consumo (design, ecosistema, esperienza d'uso), **Ferrari** e **Lamborghini** nelle auto sportive (performance, esclusività, heritage), **Rolex** negli orologi, **Louis Vuitton** nella pelletteria di lusso, **Nespresso** nel caffè in capsule (brand, esperienza, rituale), **Starbucks** nel caffè (esperienza, ambiente, comunità).

#### I quattro pilastri della differenziazione

Le slide riconducono ogni strategia di differenziazione efficace a **quattro elementi fondativi** che devono coesistere:

| Pilastro | Significato | Implicazione gestionale |
|----------|-------------|-------------------------|
| **Unicità** | Caratteristica oggettivamente diversa dai concorrenti | Investimenti in R&D, design, processi proprietari |
| **Valore** | La differenza deve essere rilevante per il cliente, non un capriccio del produttore | Ascolto del mercato, *voice of the customer* |
| **Percezione** | Il cliente deve *riconoscere* l'unicità (la differenziazione invisibile non paga) | Comunicazione, branding, segnali di qualità |
| **Sostenibilità economica** | Il *premium price* deve coprire i maggiori costi e generare margine | Controllo dei *cost driver* della differenziazione |

#### Le tre componenti operative della differenziazione

Sul piano della *implementazione*, la differenziazione agisce su tre famiglie di componenti:

| Famiglia | Sotto-componenti | Esempi |
|----------|------------------|--------|
| **Componenti tangibili** | Contenuto tecnologico, performance, affidabilità, materiali, integrabilità con beni complementari, ampiezza della gamma, innovatività, design | Iphone, Tesla, Dyson |
| **Componenti intangibili** | Marchio, reputazione, sistema di valori, integrità del prodotto | Rolex, Patagonia, Ferrari |
| **Componenti relazionali o addizionali** | Condizioni d'acquisto, caratteristiche del luogo di acquisto, condizioni d'uso, fattori di segnalazione, servizi aggiuntivi | Apple Store, concierge service del lusso |

Le tre dimensioni si rinforzano a vicenda: un prodotto tecnicamente superiore (tangibile) viene amplificato da un brand forte (intangibile) e da un'esperienza d'acquisto curata (relazionale). I concorrenti possono attaccare una dimensione alla volta, ma replicare un sistema integrato è molto più difficile.

#### Costi della differenziazione

La differenziazione non è gratuita: comporta costi che si possono distinguere in **diretti** (riconducibili in modo immediato all'attività di differenziazione) e **indiretti** (effetti sistemici).

| Tipologia | Voci | Esempio |
|-----------|------|---------|
| **Costi diretti** | Input di qualità superiore, formazione del personale, promozione/comunicazione, *after-sale services* | Materie prime premium, campagne pubblicitarie globali, customer service 24/7 |
| **Costi indiretti** | Sacrificio di scala (volumi minori a parità di capacità), rinuncia a economie di apprendimento (varietà alta = serie corte) | Linee produttive flessibili meno efficienti |

L'impresa che differenzia deve verificare costantemente che il *premium price* ottenuto superi questo aggregato di maggiori costi. Quando l'equilibrio si rompe, la strategia perde sostenibilità economica anche se il prodotto resta tecnicamente superiore.

#### Impatto della differenziazione sulla catena del valore

La differenziazione si "scarica" su attività specifiche della catena del valore, generando innovazioni puntuali:

- **Logistica in entrata**: qualità materiali e componenti, affidabilità delle forniture, movimentazione che minimizza i danni;
- **Attività operative**: qualità del prodotto, durata, ampiezza gamma, flessibilità di lavorazione, tempi di produzione, corrispondenza alle specifiche;
- **Logistica in uscita**: consegna rapida, processo gestione ordini, consegne di ordini non programmati, movimentazione che minimizza i danni;
- **Marketing e vendite**: reputazione della marca, livello e qualità della pubblicità, qualità della forza vendita, credito al *trade*;
- **Servizi post-vendita**: assistenza tecnica ai clienti, credito ai clienti, disponibilità ricambi, formazione del personale del cliente, installazione rapida;
- **Attività di supporto**: sistemi informativi di qualità (infrastruttura), addestramento e incentivi (HR), prodotti unici e collaudo automatizzato (sviluppo tecnologico), partnership di lungo periodo con fornitori (approvvigionamenti).

I **rischi** della differenziazione sono diversi da quelli della leadership di costo. Il primo è la **perdita di valore percepito**: se il cliente smette di riconoscere l'unicità del prodotto, il Premium Price crolla e con esso il margine. Questo può accadere per cambiamenti culturali, per errori di marketing, per scandali che minano la reputazione. Il secondo rischio è il **trading down**: in periodi di crisi economica o semplicemente di cambiamento dei valori dei consumatori, i clienti possono spostarsi verso prodotti più economici, abbandonando le marche premium. Il terzo è l'**imitazione a basso costo**: concorrenti più economici possono copiare le caratteristiche esteriori del prodotto differenziato vendendolo a molto meno (il fenomeno dei "dupe" su TikTok), erodendo la base di clientela del differenziato. Il quarto è l'**eccesso di differenziazione**: investire in caratteristiche che il cliente in realtà non apprezza e non vuole pagare, gonfiando i costi senza generare valore percepito corrispondente.

### 3.3 La Focalizzazione (Focus)

La terza strategia generica di Porter è la **focalizzazione** o *focus*. Qui l'impresa non tenta di competere sull'intero mercato, ma sceglie una **nicchia** specifica — un segmento di clienti con caratteristiche particolari, o un'area geografica ristretta, o un canale distributivo specifico — e la serve meglio di chiunque altro. All'interno della nicchia, la focalizzazione può a sua volta essere basata sui **costi** (*focalizzazione sui costi*: essere il più economico nella nicchia) o sulla **differenziazione** (*focalizzazione sulla differenziazione*: essere il più unico e apprezzato nella nicchia).

La logica della focalizzazione è che un concorrente generalista, che cerca di servire tutto il mercato, non può essere altrettanto efficace nel servire un segmento specifico quanto un'impresa che dedica interamente le proprie risorse a quel segmento. L'impresa focalizzata conosce meglio i propri clienti, adatta il prodotto esattamente ai loro bisogni, comunica in un linguaggio che risuona con loro, costruisce relazioni profonde e durature. Il concorrente generalista, per quanto potente, tende a offrire prodotti standardizzati che vanno "bene per tutti ma perfetti per nessuno".

Perché una nicchia sia una buona base per una strategia focalizzata, deve possedere alcune caratteristiche. Deve essere **misurabile**: dobbiamo poter definire con precisione chi sono i clienti, quanti sono, quanto valgono, in modo da valutare la potenziale redditività. Deve essere **accessibile**: dobbiamo poterla raggiungere attraverso canali efficaci (pubblicitari, distributivi, di relazione) senza costi sproporzionati. Deve essere **abbastanza grande** da sostenere la struttura dell'impresa e generare margini adeguati, ma **non così grande** da attrarre l'interesse dei concorrenti generalisti. Deve essere **stabile nel tempo**: una nicchia che si svuota dopo poco non sostiene un vantaggio duraturo. E idealmente deve essere **protetta da barriere** naturali o costruite: competenze specifiche, relazioni consolidate, regolamentazioni particolari.

Le slide sintetizzano queste condizioni in tre criteri di "interesse strutturale" del segmento, cui si lega un giudizio di **vantaggi/svantaggi** della focalizzazione.

| Requisito del segmento | Significato |
|-----------------------|-------------|
| **Misurabile e numeroso** | Si possono identificare e quantificare i clienti; il bacino è sufficiente a sostenere la struttura |
| **Attivabile** | È raggiungibile con i canali e gli strumenti dell'impresa, a costi proporzionati |
| **Profittevole e durevole** | Genera margini adeguati e mantiene queste caratteristiche nel tempo |

| Vantaggi della focalizzazione | Svantaggi della focalizzazione |
|-------------------------------|-------------------------------|
| Minori investimenti in risorse (aree di business piccole) | Opportunità di crescita limitate |
| Specializzazione di risorse e conoscenze | Difficoltà nel raggiungere economie di scala |
| Acquisizione rapida di esperienza produttiva e di mercato | Segmento facilmente aggredibile da grandi player |
| Riduzione della pressione competitiva delle grandi imprese | Forte dipendenza dal ciclo di vita del segmento |
| Elevati livelli di fedeltà dei clienti | — |

Esempi di focalizzazione sono **Rolls-Royce** nelle auto di lusso estremo, **Ferrari** (nel segmento delle sportive esclusive), **Patagonia** nell'abbigliamento outdoor eco-responsabile, **Harley-Davidson** nelle moto custom, **Moleskine** nella cancelleria di design, piccoli produttori artigianali di vini di qualità, negozi specializzati in oggetti da collezione.

I **rischi** della focalizzazione riguardano principalmente tre fenomeni. Primo, la **contrazione della nicchia**: se il segmento si riduce per cambiamenti demografici, culturali o tecnologici, l'impresa focalizzata può trovarsi senza mercato. Secondo, il **concorrente generalista che attacca la nicchia**: quando una nicchia diventa molto redditizia, può attirare l'attenzione di un grande concorrente che decide di investire risorse per conquistarla. Terzo, la **perdita di distintività**: se l'impresa focalizzata, crescendo, cerca di allargare il proprio raggio d'azione per aumentare i ricavi, può perdere la specificità che l'aveva resa vincente nella nicchia originaria.

### 3.4 Il pericolo dello *Stuck in the Middle*

Porter chiude la sua teoria con un avvertimento severo: **l'impresa deve scegliere**. Non si può essere contemporaneamente leader di costo *e* differenziato *e* focalizzato. La scelta strategica è un atto di disciplina che richiede di rinunciare a qualcosa per poter eccellere in qualcos'altro. L'impresa che tenta di essere tutto — economica ma anche unica, ampia ma anche specialistica, efficiente ma anche ricca di servizi — finisce in una terra di nessuno senza un vantaggio competitivo chiaro: costi troppo alti per competere con i leader di costo, differenziazione troppo debole per giustificare un Premium Price, posizionamento troppo generico per servire bene una nicchia.

Porter chiama questa situazione **Stuck in the Middle**, letteralmente "bloccati nel mezzo". È la posizione più pericolosa del mercato, perché l'impresa non ha nessuna arma competitiva chiara da usare: viene battuta sui costi dai leader di costo, battuta sulla differenziazione dai differenziatori, battuta sulla specializzazione dai focalizzati. La redditività crolla, e con essa la capacità di investire per uscire dalla situazione.

La ragione per cui le strategie generiche sono inconciliabili è che richiedono scelte organizzative incompatibili. Essere leader di costo richiede impianti standardizzati, personale focalizzato sull'efficienza, cultura del risparmio. Essere differenziato richiede flessibilità, personale creativo, investimenti in R&D e marketing. Un'impresa non può avere contemporaneamente una cultura del risparmio e una della creatività — sono sistemi organizzativi opposti. Lo stesso vale per gli impianti, per i sistemi informativi, per le metriche di valutazione delle performance.

Esiste una sola eccezione al pericolo dello *Stuck in the Middle*: le imprese che, grazie a una **dimensione enorme**, riescono a creare sotto-business autonomi, ciascuno con la propria strategia generica coerente. Toyota ha la gamma low-cost con Toyota e la gamma premium con Lexus, ma si tratta di due business distinti con identità separate. Inditex ha Zara (moda accessibile) e Massimo Dutti (moda premium) come marchi separati. La logica rimane: *dentro ciascun business bisogna scegliere una strategia e perseguirla con coerenza*.

Il monito di Porter, a distanza di quarant'anni, rimane attualissimo: le imprese che provano a "fare tutto" falliscono. Le imprese che scelgono con chiarezza, rinunciano consapevolmente a qualcosa, e costruiscono un sistema organizzativo coerente con quella scelta, ottengono il vantaggio competitivo duraturo.

### 3.5 Il principio di prossimità: convivenza tra leadership di costo e differenziazione

Le slide raffinano la dicotomia "scegli o muori" introducendo il concetto di **prossimità**. In ogni mercato, leader di costo e differenziatori non vivono in mondi separati: si fronteggiano nella mente del consumatore, che mette a confronto prezzi e caratteristiche. Esiste un *limite* a quanto un cliente paga in più per extra-caratteristiche e a quante caratteristiche è disposto a sacrificare per un prezzo più basso. Da qui il concetto:

| Strategia generica | Tipo di prossimità richiesta |
|--------------------|------------------------------|
| **Cost Leadership** | Prossimità nelle **caratteristiche**: il prodotto, pur essendo essenziale, deve avere caratteristiche *abbastanza vicine* a quelle dei differenziatori da non risultare inaccettabile |
| **Differenziazione** | Prossimità nei **costi**: il *premium price* non può divaricare in modo eccessivo dal prezzo dei leader di costo, altrimenti il cliente abbandona |

Il leader di costo che riduce troppo le caratteristiche perde clienti che esigono uno standard minimo; il differenziatore che si fa troppo caro perde clienti sensibili al prezzo. Entrambe le strategie restano vincenti finché restano *sufficientemente prossime* alla strategia opposta sull'altra dimensione.

### 3.6 Strategie diverse per SBU diverse e dentro la stessa SBU

Le slide pongono due domande operative cruciali:

1. **Possono SBU diverse della stessa impresa perseguire strategie generiche differenti?** *Sì*: la scelta dipende dall'**ambito competitivo** specifico di ciascun business. Toyota–Lexus, Inditex con Zara e Massimo Dutti, Volkswagen Group con Skoda (low-cost) e Audi/Porsche (premium) sono casi paradigmatici.

2. **Una singola SBU può perseguire più strategie contemporaneamente?** Solo a condizioni precise: tipicamente **leadership di costo nelle fasi a monte** della catena del valore (produzione, approvvigionamenti) e **differenziazione nelle fasi a valle** (marketing, retail, servizio). I casi di scuola sono **IKEA** (efficienza estrema in produzione e logistica, ma esperienza d'acquisto curata e brand riconoscibile) e **Prada** (strutture produttive ottimizzate, ma posizionamento premium nel retail e nella comunicazione). La condizione è che vi sia una **leva strategica essenziale** — quella che il cliente percepisce come fonte primaria del valore — che identifichi inequivocabilmente la SBU come "leader di costo" o "differenziatore". Senza questa chiarezza, lo *Stuck in the Middle* è dietro l'angolo.

---

## In sintesi

- La **pianificazione strategica** si articola su tre livelli: *Corporate Strategy* (in quali business), *Business Strategy* (come competere in ciascun business), *Strategie Funzionali* (come eseguire coerentemente nelle singole funzioni).
- Il **vantaggio competitivo** è una redditività superiore sostenibile, nasce dalla *diversità* rispetto ai concorrenti, e può fondarsi sull'efficienza operativa (imitabile, fragile) o sul posizionamento strategico (più difendibile).
- La **sostenibilità** del vantaggio, secondo Ghemawat, poggia su tre meccanismi: *economie di scala*, *accesso privilegiato a risorse e mercati*, *restrizioni strutturali all'azione dei concorrenti*.
- La **catena del valore di Porter** scompone l'impresa in 5 attività primarie (logistica in entrata, operations, logistica in uscita, marketing e vendite, servizi post-vendita) e 4 di supporto (infrastruttura, HR, sviluppo tecnologico, approvvigionamenti). Il margine è la differenza tra valore totale creato e costo totale delle attività.
- L'impresa si inserisce in un **sistema del valore** più ampio che comprende le catene di fornitori e distributori; gestire bene le interfacce può generare vantaggi competitivi.
- Le tre **strategie generiche** di Porter sono *Leadership di Costo*, *Differenziazione* e *Focalizzazione* (declinabile in focus sui costi o focus sulla differenziazione).
- Chi non sceglie una strategia chiara finisce nel pericolosissimo **Stuck in the Middle**: posizione di mediocrità competitiva con margini bassi e nessuna arma per difendersi.
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
//  GRAPH 1 — STRATEGIE GENERICHE DI PORTER (matrice 2x2)
// ══════════════════════════════════════════════════════════════
function GenericStrategiesGraph() {
  // X: ambito competitivo (0 = ristretto, 1 = ampio)
  // Y: vantaggio (0 = costo, 1 = differenziazione)
  const [scope, setScope] = useState(0.75);
  const [advantage, setAdvantage] = useState(0.75);

  const xMin = 0, xMax = 1;
  const yMin = 0, yMax = 1;

  // Determina il quadrante / posizione strategica
  const distFromCenter = Math.sqrt(Math.pow(scope - 0.5, 2) + Math.pow(advantage - 0.5, 2));
  let strategy = '';
  let strategyColor = '';
  if (distFromCenter < 0.18) {
    strategy = 'Stuck in the Middle';
    strategyColor = '#dc2626';
  } else if (scope >= 0.5 && advantage >= 0.5) {
    strategy = 'Differenziazione';
    strategyColor = '#a855f7';
  } else if (scope >= 0.5 && advantage < 0.5) {
    strategy = 'Cost Leadership';
    strategyColor = '#0ea5e9';
  } else if (scope < 0.5 && advantage >= 0.5) {
    strategy = 'Focus su Differenziazione';
    strategyColor = '#16a34a';
  } else {
    strategy = 'Focus su Costi';
    strategyColor = '#f59e0b';
  }

  // Coordinate dei centri dei quadranti
  const xMidPx = toX(0.5, xMin, xMax);
  const yMidPx = toY(0.5, yMin, yMax);

  return (
    <div className="graph-block">
      <h4 className="graph-title">Matrice di Porter: ambito competitivo × fonte del vantaggio</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          <Axes xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax} xLabel="ambito" yLabel="vantaggio" nX={2} nY={2} xFmt={v => v < 0.25 ? 'ristretto' : v > 0.75 ? 'ampio' : ''} yFmt={v => v < 0.25 ? 'costo' : v > 0.75 ? 'diff.' : ''} />
          {/* Sfondi quadranti */}
          <rect x={xMidPx} y={PT} width={PL + cW - xMidPx} height={yMidPx - PT} fill="#a855f7" opacity={0.08} />
          <rect x={xMidPx} y={yMidPx} width={PL + cW - xMidPx} height={PT + cH - yMidPx} fill="#0ea5e9" opacity={0.08} />
          <rect x={PL} y={PT} width={xMidPx - PL} height={yMidPx - PT} fill="#16a34a" opacity={0.08} />
          <rect x={PL} y={yMidPx} width={xMidPx - PL} height={PT + cH - yMidPx} fill="#f59e0b" opacity={0.08} />
          {/* Linee divisorie */}
          <line x1={xMidPx} y1={PT} x2={xMidPx} y2={PT + cH} stroke="#475569" strokeWidth={1} strokeDasharray="3,3" />
          <line x1={PL} y1={yMidPx} x2={PL + cW} y2={yMidPx} stroke="#475569" strokeWidth={1} strokeDasharray="3,3" />
          {/* Etichette quadranti */}
          <text x={(xMidPx + PL + cW) / 2} y={(PT + yMidPx) / 2 - 4} textAnchor="middle" fontSize={11} fill="#a855f7" fontWeight={600}>Differenziazione</text>
          <text x={(xMidPx + PL + cW) / 2} y={(PT + yMidPx) / 2 + 10} textAnchor="middle" fontSize={9} fill="#a855f7">(ampio + unicità)</text>
          <text x={(xMidPx + PL + cW) / 2} y={(yMidPx + PT + cH) / 2 - 4} textAnchor="middle" fontSize={11} fill="#0ea5e9" fontWeight={600}>Cost Leadership</text>
          <text x={(xMidPx + PL + cW) / 2} y={(yMidPx + PT + cH) / 2 + 10} textAnchor="middle" fontSize={9} fill="#0ea5e9">(ampio + costo)</text>
          <text x={(PL + xMidPx) / 2} y={(PT + yMidPx) / 2 - 4} textAnchor="middle" fontSize={10} fill="#16a34a" fontWeight={600}>Focus Diff.</text>
          <text x={(PL + xMidPx) / 2} y={(PT + yMidPx) / 2 + 10} textAnchor="middle" fontSize={9} fill="#16a34a">(nicchia + unicità)</text>
          <text x={(PL + xMidPx) / 2} y={(yMidPx + PT + cH) / 2 - 4} textAnchor="middle" fontSize={10} fill="#f59e0b" fontWeight={600}>Focus Costi</text>
          <text x={(PL + xMidPx) / 2} y={(yMidPx + PT + cH) / 2 + 10} textAnchor="middle" fontSize={9} fill="#f59e0b">(nicchia + costo)</text>
          {/* Zona Stuck in the Middle */}
          <circle cx={xMidPx} cy={yMidPx} r={28} fill="#dc2626" opacity={0.15} stroke="#dc2626" strokeWidth={1} strokeDasharray="2,2" />
          <text x={xMidPx} y={yMidPx + 3} textAnchor="middle" fontSize={9} fill="#dc2626" fontWeight={600}>Stuck</text>
          {/* Punto dell'impresa */}
          <circle cx={toX(scope, xMin, xMax)} cy={toY(advantage, yMin, yMax)} r={8} fill={strategyColor} stroke="#fff" strokeWidth={2.5} />
        </svg>
        <div className="graph-controls">
          <SliderControl label="Ambito competitivo" symbol="0=ristretto, 1=ampio" value={scope} min={0} max={1} step={0.01} onChange={setScope} color="#0ea5e9" fmt={v => v.toFixed(2)} />
          <SliderControl label="Fonte del vantaggio" symbol="0=costo, 1=diff." value={advantage} min={0} max={1} step={0.01} onChange={setAdvantage} color="#a855f7" fmt={v => v.toFixed(2)} />
          <div className="result-box">
            <div className="result-row"><strong>Posizione strategica</strong> <span style={{ color: strategyColor }}>{strategy}</span></div>
            <div className="result-row"><strong>Distanza dal centro</strong> <span>{distFromCenter.toFixed(2)}</span></div>
          </div>
          <div className="insight-mini">Le tre strategie generiche di Porter richiedono scelte chiare: ampio o ristretto, costo o differenziazione. Restare nel mezzo significa non avere armi competitive e finire bloccati in posizione di mediocrità.</div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAPH 2 — CATENA DEL VALORE: 9 attività di Porter
// ══════════════════════════════════════════════════════════════
function ValueChainBarGraph() {
  // 5 primarie + 4 supporto
  const [logIn, setLogIn] = useState(60);
  const [ops, setOps] = useState(75);
  const [logOut, setLogOut] = useState(55);
  const [marketing, setMarketing] = useState(80);
  const [postSale, setPostSale] = useState(50);
  const [infra, setInfra] = useState(65);
  const [hr, setHr] = useState(70);
  const [tech, setTech] = useState(60);
  const [procure, setProcure] = useState(55);

  const activities = [
    { name: 'Logistica in entrata', value: logIn, set: setLogIn, type: 'P', color: '#0ea5e9' },
    { name: 'Operations', value: ops, set: setOps, type: 'P', color: '#0ea5e9' },
    { name: 'Logistica in uscita', value: logOut, set: setLogOut, type: 'P', color: '#0ea5e9' },
    { name: 'Marketing & vendite', value: marketing, set: setMarketing, type: 'P', color: '#0ea5e9' },
    { name: 'Servizi post-vendita', value: postSale, set: setPostSale, type: 'P', color: '#0ea5e9' },
    { name: 'Infrastruttura', value: infra, set: setInfra, type: 'S', color: '#a855f7' },
    { name: 'Risorse umane', value: hr, set: setHr, type: 'S', color: '#a855f7' },
    { name: 'Sviluppo tecnologico', value: tech, set: setTech, type: 'S', color: '#a855f7' },
    { name: 'Approvvigionamenti', value: procure, set: setProcure, type: 'S', color: '#a855f7' },
  ];

  const total = activities.reduce((sum, a) => sum + a.value, 0);
  const avg = total / activities.length;

  // Layout barre orizzontali
  const barH = (cH - 10) / activities.length;
  const xMin = 0, xMax = 100;

  return (
    <div className="graph-block">
      <h4 className="graph-title">Catena del valore: contributo delle 9 attività al valore totale</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          {/* Asse X (livello di valore 0-100) */}
          <line x1={PL} y1={PT + cH} x2={PL + cW} y2={PT + cH} stroke="#475569" strokeWidth={1.5} />
          {[0, 25, 50, 75, 100].map((v, i) => (
            <g key={i}>
              <line x1={toX(v, xMin, xMax)} y1={PT} x2={toX(v, xMin, xMax)} y2={PT + cH} stroke="#e2e8f0" strokeWidth={0.6} />
              <text x={toX(v, xMin, xMax)} y={PT + cH + 14} textAnchor="middle" fontSize={9} fill="#94a3b8">{v}</text>
            </g>
          ))}
          {/* Barre */}
          {activities.map((a, i) => {
            const y = PT + 4 + i * barH;
            const wPx = toX(a.value, xMin, xMax) - PL;
            return (
              <g key={i}>
                <rect x={PL} y={y} width={wPx} height={barH - 3} fill={a.color} opacity={0.75} />
                <text x={PL - 4} y={y + barH / 2 + 2} textAnchor="end" fontSize={8} fill="#475569">{a.name}</text>
                <text x={PL + wPx + 4} y={y + barH / 2 + 2} fontSize={8} fill={a.color} fontWeight={600}>{a.value}</text>
              </g>
            );
          })}
          {/* Linea media */}
          <line x1={toX(avg, xMin, xMax)} y1={PT} x2={toX(avg, xMin, xMax)} y2={PT + cH} stroke="#dc2626" strokeWidth={1.2} strokeDasharray="3,3" />
          <text x={toX(avg, xMin, xMax) + 3} y={PT + 8} fontSize={9} fill="#dc2626">media</text>
        </svg>
        <div className="graph-controls" style={{ maxHeight: '320px', overflowY: 'auto' }}>
          {activities.map((a, i) => (
            <SliderControl key={i} label={a.name} symbol={a.type === 'P' ? 'primaria' : 'supporto'} value={a.value} min={0} max={100} step={1} onChange={a.set} color={a.color} fmt={v => v.toFixed(0)} />
          ))}
          <div className="result-box">
            <div className="result-row"><strong>Valore totale</strong> <span style={{ color: '#16a34a' }}>{total}</span></div>
            <div className="result-row"><strong>Valore medio attività</strong> <span>{avg.toFixed(1)}</span></div>
          </div>
          <div className="insight-mini">Ogni attività concorre al valore totale. Identificare le attività ad alto contributo (sopra la media) e rafforzarle, esternalizzare o ridurre i costi di quelle a basso contributo è la chiave dell'analisi della catena del valore.</div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAPH 3 — STRUTTURA DEI COSTI: leader di costo vs differenziatore
// ══════════════════════════════════════════════════════════════
function CostStructureGraph() {
  const [pressure, setPressure] = useState(0.5); // 0 = bassa concorrenza, 1 = alta

  // Cost leader: quota di costo 40% base, sale a 60% con pressione
  // Differenziatore: quota di costo 60% base, sale a 80% con pressione (margine premium si erode)
  const costLeaderCost = 40 + pressure * 20;
  const costLeaderMargin = 100 - costLeaderCost;
  const differentiatorCost = 60 + pressure * 20;
  const differentiatorPriceMargin = (1 - pressure * 0.6) * (40 - pressure * 10); // premium price che si erode
  const differentiatorBaseRevenue = 100;
  const differentiatorMargin = Math.max(0, differentiatorBaseRevenue + differentiatorPriceMargin - differentiatorCost - differentiatorPriceMargin);
  // Ricalcoliamo in modo più semplice: revenue = 100 + premium, cost = differentiatorCost, margin = revenue - cost
  const premium = Math.max(0, 35 - pressure * 30);
  const revDiff = 100 + premium;
  const marginDiff = revDiff - differentiatorCost;

  const xMin = 0, xMax = 2;
  const barW = cW / 3;

  // Scala Y per ricavi totali (0 - 150)
  const yMin = 0, yMax = 150;

  return (
    <div className="graph-block">
      <h4 className="graph-title">Struttura di costo: Cost Leader vs Differenziatore (pressione concorrenziale variabile)</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          <Axes xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax} xLabel="" yLabel="€" nX={2} nY={5} xFmt={v => v < 0.5 ? 'C. Leader' : v > 1.5 ? 'Differenz.' : ''} yFmt={v => v.toFixed(0)} />
          {/* Cost Leader bar */}
          <rect x={toX(0.25, xMin, xMax)} y={toY(costLeaderCost, yMin, yMax)} width={barW * 0.5} height={toY(0, yMin, yMax) - toY(costLeaderCost, yMin, yMax)} fill="#0ea5e9" opacity={0.85} />
          <rect x={toX(0.25, xMin, xMax)} y={toY(100, yMin, yMax)} width={barW * 0.5} height={toY(costLeaderCost, yMin, yMax) - toY(100, yMin, yMax)} fill="#16a34a" opacity={0.75} />
          <text x={toX(0.5, xMin, xMax)} y={toY(costLeaderCost / 2, yMin, yMax) + 3} textAnchor="middle" fontSize={9} fill="#fff" fontWeight={600}>costo {costLeaderCost.toFixed(0)}</text>
          <text x={toX(0.5, xMin, xMax)} y={toY((100 + costLeaderCost) / 2, yMin, yMax) + 3} textAnchor="middle" fontSize={9} fill="#fff" fontWeight={600}>margine {costLeaderMargin.toFixed(0)}</text>
          {/* Differentiator bar */}
          <rect x={toX(1.25, xMin, xMax)} y={toY(differentiatorCost, yMin, yMax)} width={barW * 0.5} height={toY(0, yMin, yMax) - toY(differentiatorCost, yMin, yMax)} fill="#a855f7" opacity={0.85} />
          <rect x={toX(1.25, xMin, xMax)} y={toY(100, yMin, yMax)} width={barW * 0.5} height={toY(differentiatorCost, yMin, yMax) - toY(100, yMin, yMax)} fill="#16a34a" opacity={0.75} />
          <rect x={toX(1.25, xMin, xMax)} y={toY(revDiff, yMin, yMax)} width={barW * 0.5} height={toY(100, yMin, yMax) - toY(revDiff, yMin, yMax)} fill="#f59e0b" opacity={0.85} />
          <text x={toX(1.5, xMin, xMax)} y={toY(differentiatorCost / 2, yMin, yMax) + 3} textAnchor="middle" fontSize={9} fill="#fff" fontWeight={600}>costo {differentiatorCost.toFixed(0)}</text>
          {premium > 5 && (
            <text x={toX(1.5, xMin, xMax)} y={toY((100 + revDiff) / 2, yMin, yMax) + 3} textAnchor="middle" fontSize={9} fill="#fff" fontWeight={600}>premium {premium.toFixed(0)}</text>
          )}
          {/* Linea prezzo base */}
          <line x1={PL} y1={toY(100, yMin, yMax)} x2={PL + cW} y2={toY(100, yMin, yMax)} stroke="#475569" strokeWidth={1} strokeDasharray="4,3" />
          <text x={PL + cW - 6} y={toY(100, yMin, yMax) - 4} textAnchor="end" fontSize={9} fill="#475569">prezzo base 100</text>
        </svg>
        <div className="graph-controls">
          <SliderControl label="Pressione concorrenziale" symbol="0=bassa, 1=alta" value={pressure} min={0} max={1} step={0.01} onChange={setPressure} color="#dc2626" fmt={v => v.toFixed(2)} />
          <div className="result-box">
            <div className="result-row"><strong>Cost Leader</strong> <span style={{ color: '#0ea5e9' }}>costo {costLeaderCost.toFixed(0)}, margine {costLeaderMargin.toFixed(0)}</span></div>
            <div className="result-row"><strong>Differenziatore</strong> <span style={{ color: '#a855f7' }}>costo {differentiatorCost.toFixed(0)}, premium {premium.toFixed(0)}, margine {marginDiff.toFixed(0)}</span></div>
            <div className="result-row"><strong>Vince</strong> <span style={{ color: marginDiff > costLeaderMargin ? '#a855f7' : '#0ea5e9' }}>{marginDiff > costLeaderMargin ? 'Differenziatore' : 'Cost Leader'}</span></div>
          </div>
          <div className="insight-mini">Il leader di costo ha quota di costo bassa (40-60%) e margine ampio. Il differenziatore ha costo più alto (60-80%) ma incassa un premium price. Più alta la pressione concorrenziale, più si erode il premium e si schiacciano i margini.</div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAPH 4 — REDDITIVITÀ DELLA NICCHIA (Focus Strategy)
// ══════════════════════════════════════════════════════════════
function NicheProfitabilityGraph() {
  const [misurabilita, setMisurabilita] = useState(7);
  const [attivabilita, setAttivabilita] = useState(6);
  const [profittabilita, setProfittabilita] = useState(8);

  // Profittabilità totale come prodotto pesato (max 1000 → riportiamo a 100)
  const totale = (misurabilita * attivabilita * profittabilita) / 10;
  const soglia = 60;
  const sostenibile = totale >= soglia;

  const criteria = [
    { name: 'Misurabile', value: misurabilita, set: setMisurabilita, color: '#0ea5e9' },
    { name: 'Attivabile', value: attivabilita, set: setAttivabilita, color: '#a855f7' },
    { name: 'Profittevole', value: profittabilita, set: setProfittabilita, color: '#f59e0b' },
  ];

  const xMin = 0, xMax = 3;
  const yMin = 0, yMax = 10;

  return (
    <div className="graph-block">
      <h4 className="graph-title">Redditività della nicchia: profitto = misurabilità × attivabilità × profittabilità</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          <Axes xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax} xLabel="criteri" yLabel="livello (0-10)" nX={3} nY={5} xFmt={v => v < 0.5 ? '' : v < 1.5 ? 'M' : v < 2.5 ? 'A' : 'P'} yFmt={v => v.toFixed(0)} />
          {/* Barre per ciascun criterio */}
          {criteria.map((c, i) => {
            const x = toX(i + 0.5, xMin, xMax);
            const y = toY(c.value, yMin, yMax);
            const h = toY(0, yMin, yMax) - y;
            return (
              <g key={i}>
                <rect x={x - 25} y={y} width={50} height={h} fill={c.color} opacity={0.8} />
                <text x={x} y={y - 4} textAnchor="middle" fontSize={11} fill={c.color} fontWeight={600}>{c.value.toFixed(1)}</text>
                <text x={x} y={toY(0, yMin, yMax) + 14} textAnchor="middle" fontSize={9} fill="#475569">{c.name}</text>
              </g>
            );
          })}
          {/* Indicatore profittabilità totale (linea) */}
          <line x1={PL} y1={toY((totale / 100) * 10, yMin, yMax)} x2={PL + cW} y2={toY((totale / 100) * 10, yMin, yMax)} stroke={sostenibile ? '#16a34a' : '#dc2626'} strokeWidth={2} strokeDasharray="5,3" />
          <text x={PL + cW - 6} y={toY((totale / 100) * 10, yMin, yMax) - 4} textAnchor="end" fontSize={10} fill={sostenibile ? '#16a34a' : '#dc2626'} fontWeight={600}>profitto {totale.toFixed(0)}/100</text>
          {/* Soglia sostenibilità */}
          <line x1={PL} y1={toY((soglia / 100) * 10, yMin, yMax)} x2={PL + cW} y2={toY((soglia / 100) * 10, yMin, yMax)} stroke="#475569" strokeWidth={1} strokeDasharray="2,2" />
          <text x={PL + 4} y={toY((soglia / 100) * 10, yMin, yMax) - 4} fontSize={9} fill="#475569">soglia {soglia}</text>
        </svg>
        <div className="graph-controls">
          {criteria.map((c, i) => (
            <SliderControl key={i} label={c.name} symbol="0-10" value={c.value} min={0} max={10} step={0.1} onChange={c.set} color={c.color} fmt={v => v.toFixed(1)} />
          ))}
          <div className="result-box">
            <div className="result-row"><strong>Profittabilità totale</strong> <span style={{ color: sostenibile ? '#16a34a' : '#dc2626' }}>{totale.toFixed(1)}/100</span></div>
            <div className="result-row"><strong>Soglia sostenibilità</strong> <span>{soglia}</span></div>
            <div className="result-row"><strong>Esito</strong> <span style={{ color: sostenibile ? '#16a34a' : '#dc2626', fontWeight: 600 }}>{sostenibile ? 'Nicchia sostenibile' : 'Sotto soglia'}</span></div>
          </div>
          <div className="insight-mini">Una nicchia è una buona base per la focalizzazione solo se è misurabile, attivabile e profittevole insieme. Se anche un solo criterio cala troppo, il prodotto crolla: tutti i criteri devono essere alti perché la strategia funzioni.</div>
        </div>
      </div>
    </div>
  );
}

export default function Week5() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', paddingBottom: '4rem' }}>
      <div className="page-header">
        <div style={{ color: 'var(--accent-cyan)', fontWeight: 600, letterSpacing: '0.1em', fontSize: '0.875rem', marginBottom: '0.5rem' }}>SETTIMANA 05</div>
        <h1 className="page-title gradient-text" style={{ fontSize: '3rem' }}>Strategie Competitive</h1>
      </div>

      <div className="content-section glass-panel markdown-body">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownContent}</ReactMarkdown>
      </div>

      <div className="content-section glass-panel" style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>📊 Visualizzazioni Interattive</h2>
        <GenericStrategiesGraph />
        <ValueChainBarGraph />
        <CostStructureGraph />
        <NicheProfitabilityGraph />
      </div>
    </div>
  );
}
