import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import '../index.css';
import './macro/macro.css';

const markdownContent = `
# Capitolo 4: L'Analisi Interna e la Resource-Based View (RBV)

Se nelle precedenti sessioni abbiamo analizzato l'ambiente esterno in cui opera l'impresa (attraverso le Cinque Forze di Porter e l'approccio del Neo-istituzionalismo), questa quarta settimana ci richiede di spostare l'attenzione all'interno dell'organizzazione. Completiamo così la nostra indagine strategica introducendo la **Resource-Based View (RBV)**, ovvero la prospettiva basata sulle risorse, che si concentra sull'analisi interna dell'impresa. Questa corrente di pensiero ribalta la logica precedente stabilendo un principio fondamentale: l'unico vero vantaggio competitivo che possa durare nel tempo non deriva dall'adattamento alle condizioni del mercato esterno, ma da ciò che l'impresa possiede strutturalmente (le sue Risorse) e da ciò che sa fare in modo unico e non replicabile (le sue Competenze).

## 1. Dal focus sul mercato all'importanza centrale delle risorse

### 1.1 Il cambiamento di prospettiva degli anni '80
Come abbiamo visto, l'analisi strategica dominante negli anni '80 era fortemente influenzata dal modello delle *Cinque forze competitive di Porter*. In quel contesto, l'analista concentrava la sua attenzione unicamente sul rapporto tra l'impresa e il suo settore di riferimento, trascurando le peculiarità interne dell'organizzazione.
Tuttavia, all'interno del dibattito accademico emerse una questione cruciale: *cosa succede quando le condizioni del mercato e dell'ambiente competitivo cambiano così rapidamente da rendere impossibile l'adattamento attraverso piani prestabiliti?*
È da questa domanda che nasce la **Resource-Based View (RBV)**. Invece di inseguire un ambiente esterno in continuo e rapido mutamento, gli economisti propongono un'inversione di rotta: le risorse interne dell'azienda, essendo più stabili e direttamente controllabili, diventano l'unica vera base su cui costruire una strategia di sviluppo solida e resiliente nel tempo.

### 1.2 Il Tripode Strategico: la ricomposizione delle prospettive
Per cogliere appieno la portata della RBV è opportuno collocarla all'interno della cornice analitica nota come **Tripode Strategico**, che integra le tre grandi prospettive della strategia d'impresa convergenti tutte verso l'obiettivo finale della *Performance*:

| Prospettiva | Focus | Tipo di fattori | Domanda guida |
|---|---|---|---|
| **Industry-Based View** (Porter) | Settore di riferimento e dinamiche competitive | Esogeni / esterni | Qual è la struttura del settore? |
| **Institutional-Based View** (Neo-istituzionalismo) | Regole, norme e cornici socio-culturali | Esogeni / esterni | Quali condizioni istituzionali vincolano l'azione? |
| **Resource-Based View** (Penrose, Wernerfelt, Barney) | Risorse e competenze interne all'impresa | Endogeni / interni | Cosa l'impresa possiede e cosa sa fare? |

Le prime due prospettive guardano all'esterno (analisi esogena), mentre la RBV completa il quadro con uno sguardo endogeno: l'impresa cessa di essere considerata una scatola nera reagente al mercato e diventa un soggetto attivo, dotato di una propria identità e di un proprio capitale strategico irriducibile.

### 1.3 I contributi fondatori: Penrose, Wernerfelt e Barney
La Resource-Based View affonda le sue radici nel pensiero di **Edith Penrose** (1959), la cui celebre intuizione *"A firm is essentially a pool of resources"* ha segnato uno spartiacque concettuale: l'impresa non è una mera funzione di produzione, ma un *aggregato dinamico di risorse produttive* il cui sfruttamento non saturo costituisce la base della crescita endogena.

Nei decenni successivi il dibattito è stato sistematizzato da due autori di riferimento:
- **Birger Wernerfelt (1984)**, con l'articolo *"A Resource-Based View of the Firm"*, ha coniato l'etichetta dell'approccio e ha proposto di guardare all'impresa non più solo dal lato dei prodotti, ma soprattutto dal lato delle risorse, recuperando l'idea che gli asset distintivi siano la fonte primaria delle rendite.
- **Jay B. Barney (1991)**, con il saggio *"Firm Resources and Sustained Competitive Advantage"*, ha fornito i due assunti analitici cardine della teoria: l'**eterogeneità** delle dotazioni di risorse tra le imprese e l'**imperfetta mobilità** di tali risorse sul mercato dei fattori. È proprio Barney a tradurre poi questi presupposti nel framework operativo VRIO.

Sul versante operativo della formula riassuntiva, la RBV può essere concettualizzata come un binomio inscindibile: *"quello che l'impresa ha a disposizione (le risorse) e quello che l'impresa sa fare (le competenze)"*.

### 1.4 I principi fondamentali della RBV
L'affermazione di questo nuovo approccio segna una netta rottura con la teoria economica classica. Il principio base su cui si fonda la RBV è **l'Eterogeneità delle imprese**.
Contrariamente all'idea di un mercato perfetto in cui le aziende sono tutte uguali e intercambiabili, la RBV afferma che ogni impresa è un'entità unica, caratterizzata da un insieme specifico e differenziato (eterogeneo) di risorse. È proprio in questa eterogeneità, che rende le imprese diverse l'una dall'altra e non facilmente replicabili, che risiede la base per costruire un vantaggio competitivo e ottenere profitti superiori rispetto ai concorrenti.

I presupposti operativi della RBV possono dunque essere riassunti in tre proposizioni:
1. L'impresa è una *configurazione di risorse eterogenee*, non un'unità interscambiabile;
2. Il vantaggio competitivo sostenibile si fonda sui *livelli di attività e capacità* sviluppate internamente;
3. Quando l'ambiente esterno si fa turbolento, le risorse e le competenze interne offrono una *base più stabile e direttamente controllabile* del semplice posizionamento di mercato.

Il **vantaggio competitivo** secondo la RBV è quindi riconducibile a *rendite* che affluiscono all'impresa in virtù di una **maggiore efficienza** rispetto ai concorrenti, derivante dall'impiego sapiente delle risorse e delle competenze aziendali.

### 1.5 La distinzione tra Risorse e Capacità (Capabilities)
Sebbene i due termini vengano talvolta usati come sinonimi, nell'impalcatura della RBV essi designano oggetti analiticamente distinti:

| Dimensione | Risorse (Resources) | Capacità (Capabilities) |
|---|---|---|
| **Natura** | Stock di asset (tangibili o intangibili) di cui l'impresa dispone | Flussi di attività e processi attraverso cui le risorse vengono impiegate |
| **Carattere** | Statico, accumulabile, valutabile singolarmente | Dinamico, organizzativo, frutto di apprendimento ripetuto |
| **Esempio** | Un brevetto, un impianto, un brand | La capacità di innovare, di servire il cliente, di coordinare la filiera |
| **Rilevanza strategica** | Materia prima del vantaggio competitivo | Meccanismo che trasforma le risorse in performance |

In sintesi: le risorse rappresentano *cosa* l'impresa possiede, le capacità rappresentano *come* l'impresa sa orchestrare ciò che possiede. Solo dalla combinazione virtuosa dei due piani emerge il vantaggio competitivo sostenibile.

---

## 2. La classificazione degli Asset: Tipologie di Risorse
Entrando nel dettaglio dell'analisi interna, è necessario classificare le risorse e le competenze a disposizione dell'impresa. Queste si dividono principalmente in grandi macro-categorie, che hanno un impatto diverso nel determinare il vantaggio competitivo.

### 2.0 Quadro sinottico della tassonomia
Prima di approfondire le singole categorie, è utile fissare la **mappa complessiva** delle tipologie di risorse aziendali, che procede dal grado più elementare (asset materiali) al grado più sofisticato (capitale umano):

| Macro-categoria | Sotto-categorie | Visibilità contabile | Replicabilità | Contributo al vantaggio competitivo |
|---|---|---|---|---|
| **Risorse Tangibili** | Finanziarie, Fisiche | Alta (in bilancio) | Elevata | Bassa / strumentale |
| **Risorse Intangibili** | Tecnologiche, Reputazionali, Relazionali, Conoscenza | Bassa (raramente a bilancio) | Limitata | Elevata |
| **Risorse Umane** | Knowledge, Lealtà, Qualità del personale | Indiretta | Molto limitata | Decisiva |

### 2.1 Le Risorse Tangibili
Le prime risorse da considerare sono quelle materiali, che sono facilmente identificabili, misurabili e riportate nei documenti contabili (come il bilancio).
Esse includono principalmente:
- **Risorse Finanziarie:** Si tratta della capacità economica dell'impresa, come ad esempio la sua capacità di ottenere prestiti e finanziamenti, oppure la sua abilità nel generare flussi di cassa operativi sufficienti per autofinanziare i propri investimenti. I parametri chiave in questo ambito sono il livello di indebitamento (leverage) e il flusso di cassa netto generato.
- **Risorse Fisiche e Patrimoniali:** Riguardano gli asset fisici posseduti, come macchinari, impianti di produzione, magazzini, materie prime e immobili. Rientra in questa categoria anche l'importanza della localizzazione geografica (ad esempio, possedere un punto vendita in una via dello shopping esclusivo conferisce un valore strategico molto diverso rispetto a un locale in periferia).
Sebbene queste risorse siano fondamentali per l'operatività quotidiana e abbiano un chiaro valore a bilancio, secondo la teoria accademica non sono sufficienti per garantire un vantaggio competitivo a lungo termine. Essendo beni materiali facilmente acquistabili sul mercato, i concorrenti possono semplicemente replicarle disponendo delle adeguate risorse economiche. Non offrono, quindi, una barriera difensiva duratura.

### 2.2 Le Risorse Intangibili
Il vero potenziale strategico risiede negli asset immateriali, ovvero risorse che non hanno una consistenza fisica e raramente appaiono nei bilanci, ma che rappresentano il vero cuore del vantaggio competitivo. A differenza dei beni fisici, che si logorano con l'uso, le risorse intangibili spesso si rafforzano man mano che vengono utilizzate all'interno dell'impresa.
Queste risorse si suddividono principalmente in:
- **Risorse Tecnologiche:** Includono il patrimonio di conoscenze tecnologiche e industriali (know-how) sviluppato nei reparti di Ricerca & Sviluppo. Ne fanno parte anche gli strumenti legali di protezione della proprietà intellettuale, come i brevetti, le licenze esclusive e i segreti industriali, che impediscono ai concorrenti di copiare le innovazioni aziendali.
- **Capitale Relazionale e Sociale:** Il successo di un'azienda dipende fortemente dalla sua capacità di costruire e mantenere una rete di connessioni formali e informali. Questo include le relazioni di fiducia instaurate sia all'interno dell'organizzazione (intranet, cooperazione tra uffici), sia verso l'esterno (fornitori, partner di filiera, istituzioni). Questo patrimonio relazionale viene definito *Capitale Sociale*.
- **Risorse Reputazionali:** Rappresentano uno degli elementi più difficili da costruire e più preziosi da mantenere, poiché si sviluppano solo nel corso di lunghi periodi di tempo, attraverso comportamenti coerenti. La reputazione agisce a due livelli: sul singolo *Prodotto* (la cosiddetta Brand Image, che genera fedeltà nel cliente, spesso disattivando la sua sensibilità al prezzo) e sul livello *Corporate* (la reputazione globale dell'azienda, che riguarda la fiducia degli investitori, la percezione della solidità finanziaria e della qualità del management).

### 2.3 Le Risorse Umane
Nessuna delle dotazioni aziendali esaminate avrebbe rilevanza senza l'attivazione da parte del fattore umano. È infatti nelle persone che risiedono asset fondamentali quali:
1. **Conoscenza cognitiva:** L'insieme delle competenze tecniche e dell'esperienza pratica accumulata dai dipendenti nel corso del tempo.
2. **Motivazione e Lealtà aziendale:** L'attaccamento, la dedizione e il senso di appartenenza che i dipendenti provano verso l'impresa.
3. **Controllo del Turnover:** Una forte fidelizzazione dei lavoratori essenziali evita che dipendenti qualificati (spesso formati a spese dell'azienda) abbandonino l'impresa per passare alla concorrenza, rischiando di trasferire conoscenze strategiche verso i competitor.

---

## 3. La Gestione della Conoscenza: Il Modello SECI
Un tema centrale nell'analisi aziendale è la gestione della Conoscenza. L'obiettivo dell'impresa, secondo uno dei modelli più influenti in questo ambito (il modello S.E.C.I., sviluppato dagli studiosi giapponesi Nonaka e Takeuchi), è quello di riuscire a trasformare la conoscenza individuale dei singoli lavoratori in un patrimonio di conoscenza collettiva e aziendale, per evitare che la perdita di un dipendente si traduca nella perdita del suo expertise.

### 3.1 La Catena della Conoscenza: dai dati al know-how
Per inquadrare correttamente il concetto di conoscenza è necessario distinguerlo dai gradini inferiori della cosiddetta *catena della conoscenza* (DIKW pyramid), una scala gerarchica che procede dai dati grezzi fino alla saggezza applicata:

| Livello | Definizione | Esempio in azienda |
|---|---|---|
| **Data (Dati)** | Simboli o misure grezzi, privi di contesto | Numero di unità vendute oggi |
| **Information (Informazioni)** | Dati organizzati, contestualizzati e dotati di significato | Trend di vendita per area geografica |
| **Knowledge (Conoscenza)** | Informazioni elaborate, comprese e collegate all'esperienza | Comprendere *perché* certe aree vendono di più |
| **Wisdom (Saggezza / Know-how)** | Capacità di applicare la conoscenza per prendere decisioni efficaci | Saper progettare una strategia commerciale di successo |

È al vertice della piramide (Knowledge → Wisdom) che si colloca il **Know-how** aziendale, ovvero la dotazione di sapere pratico-applicativo che costituisce il vero asset strategico immateriale.

### 3.2 Le forme della conoscenza: Tacita vs Esplicita (Polanyi)
La distinzione classica tra conoscenza tacita ed esplicita risale agli studi del filosofo **Michael Polanyi**, ripresa successivamente da Nonaka. L'esigenza di fondo, sintetizzata nel celebre motto *"separare la conoscenza dal conoscitore"*, è quella di rendere il sapere individuale patrimonio dell'organizzazione.

| Caratteristica | Conoscenza Tacita | Conoscenza Esplicita |
|---|---|---|
| **Natura** | Soggettiva e sperimentale | Oggettiva e razionale |
| **Esprimibilità** | Non può essere espressa in parole, frasi, numeri o formule | Può essere espressa, codificata e trasferita |
| **Legame col contesto** | Locale, situata, contestuale | Svincolata dal contesto |
| **Forma** | Informale, intangibile | Formale, codificata, tangibile |
| **Elementi costitutivi** | Cognitivi (modelli mentali) e tecnici (skill manuali) | Documenti, manuali, regole, database |
| **Esempio** | L'intuito del manager, l'abilità dell'artigiano | Un manuale operativo, un brevetto, una procedura |

- **Conoscenza Tacita:** È quella conoscenza legata in modo indissolubile all'esperienza personale e pratica di un individuo. È altamente soggettiva, molto difficile da formalizzare, descrivere a parole o inserire all'interno di un manuale. Riguarda l'intuito decisionale di un top manager o la specifica abilità manuale di un artigiano esperto, caratteristiche non replicabili tramite procedure standard o automatismi informatici.
- **Conoscenza Esplicita:** Al contrario della precedente, questa conoscenza è oggettiva, formale e facilmente trasmissibile. Può essere distaccata dall'individuo che l'ha prodotta e codificata sotto forma di regole, descrizioni tecniche, manuali operativi o database aziendali, permettendone una rapida diffusione a qualsiasi altro operatore.

### 3.3 Le quattro fasi del Modello SECI
Il trasferimento e la creazione di nuova conoscenza all'interno dell'impresa avvengono attraverso un processo continuo noto come **Modello S.E.C.I.**, che prevede 4 fasi interconnesse, organizzate lungo una matrice a doppia entrata che incrocia la natura della conoscenza in input e in output:

| Fase | Da → A | Modalità prevalente | Strumenti tipici | Esempio aziendale |
|---|---|---|---|---|
| **(S) Socializzazione** | Tacita → Tacita | Osservazione, imitazione, affiancamento | On-the-job training, mentoring, comunità di pratica | Apprendista che osserva il maestro artigiano |
| **(E) Esternalizzazione** | Tacita → Esplicita | Articolazione, metafora, modellizzazione | Workshop, focus group, redazione di manuali | Codificazione di un'intuizione in un protocollo |
| **(C) Combinazione** | Esplicita → Esplicita | Sintesi, sistematizzazione, integrazione | Database, ERP, knowledge management systems | Integrazione di report di vendita in un dashboard |
| **(I) Internalizzazione** | Esplicita → Tacita | Apprendimento pratico, learning by doing | Esercitazioni, simulazioni, applicazione ripetuta | Procedura che diventa abitudine automatica |

- **(S) Socializzazione (Tacita → Tacita):** La conoscenza tacita viene trasferita da un individuo all'altro attraverso l'osservazione diretta, l'affiancamento e l'imitazione pratica (il classico rapporto tra maestro e apprendista), senza l'uso di manuali e spiegazioni formali.
- **(E) Esternalizzazione (Tacita → Esplicita):** È la fase più complessa, in cui l'azienda cerca di tradurre l'esperienza e l'intuizione insita nella conoscenza tacita in concetti espliciti, codificandola in protocolli, software o manuali scritti organizzati logicamente.
- **(C) Combinazione (Esplicita → Esplicita):** Diverse fonti di conoscenza esplicita (documenti, dati formali, database) vengono riorganizzate, elaborate e integrate dai sistemi informativi aziendali per generare una conoscenza superiore, da mettere a disposizione dell'intera organizzazione.
- **(I) Internalizzazione (Esplicita → Tacita):** Quando una norma codificata o un manuale procedurale viene applicato ripetutamente nel tempo dai dipendenti, le istruzioni esplicite vengono gradualmente assimilate. Diventano così degli automatismi e delle nuove abitudini inconsce all'interno del modo di lavorare della persona, ritrasformandosi in nuova conoscenza tacita e pratica.

Le quattro fasi non si esauriscono in un unico passaggio lineare ma si compongono in una **spirale della conoscenza**: ogni ciclo SECI si conclude alimentando un nuovo ciclo a un livello qualitativamente superiore, generando così un processo cumulativo e ascensionale di apprendimento organizzativo.

### 3.4 Il concetto di "Ba": il luogo della creazione di conoscenza
Nonaka completa il modello SECI introducendo la nozione di **"Ba"** (in giapponese: *luogo*, *spazio condiviso*), ovvero il contesto fisico, virtuale o mentale in cui la conoscenza viene generata, condivisa e utilizzata. Il *Ba* non è un semplice ambiente di lavoro: è la *piattaforma relazionale* che rende possibile l'innesco di ciascuna fase del SECI. Si distinguono quattro tipologie di *ba* corrispondenti alle quattro fasi:

| Tipo di Ba | Fase SECI corrispondente | Caratteristiche |
|---|---|---|
| **Originating Ba** | Socializzazione | Spazio fisico di interazione faccia a faccia, condivisione di esperienze |
| **Dialoguing Ba** | Esternalizzazione | Spazio di dialogo collettivo, articolazione di concetti |
| **Systemizing Ba** | Combinazione | Spazio virtuale, reti informatiche, ambienti collaborativi digitali |
| **Exercising Ba** | Internalizzazione | Spazio di pratica e applicazione individuale |

La gestione consapevole dei *ba* (ad esempio progettando uffici aperti, comunità di pratica o piattaforme digitali) è uno dei compiti chiave del management moderno della conoscenza.

## 4. Routine, Competenze Distintive e Core Competence

### 4.1 Routine Organizzative e Path Dependency
Man mano che l'impresa opera, accumula esperienza e cristallizza i suoi processi decisionali in quelle che gli studiosi **Nelson e Winter (1982)** hanno definito **Routine Organizzative**, ovvero *"sequenze di azioni coordinate da parte di determinati individui"*. Si tratta di modelli di comportamento ripetitivi e semi-automatici adottati dall'organizzazione per affrontare i problemi quotidiani; sono basate su una conoscenza superficiale che permette di reagire in modo rapido ed efficiente senza ricorrere ogni volta a complesse analisi preliminari. Le routine costituiscono il *modo di fare le cose* dell'impresa e fungono da ponte tra la *memoria organizzativa* e l'*esperienza* operativa quotidiana.

Esempi tipici di routine organizzative comprendono la gestione logistica dei magazzini, le procedure di selezione delle offerte commerciali, le modalità di predisposizione del budget annuale.

Lo sviluppo di queste routine, tuttavia, è soggetto al fenomeno della **Path Dependency** (dipendenza dal sentiero): le scelte, le procedure e l'orientamento strategico che un'azienda adotta oggi sono fortemente vincolati e predeterminati dalle decisioni storiche, dagli investimenti e dai processi intrapresi nel passato, fin dalle origini dell'impresa. Il *contesto* è esso stesso la pre-condizione per attivare le routine: senza una storia accumulata e un ambiente organizzativo specifico, le routine non potrebbero radicarsi.

Una volta che l'insieme di risorse e routine organizzative si consolida, dà vita alle **Competenze Organizzative** che, secondo la definizione di **Schoemaker (1993)**, sono *"processi tangibili ed intangibili, firm specific e sviluppati nel tempo"*: regole e procedure che conferiscono risposte sicure ai cambiamenti ambientali. Le azioni d'impresa, dunque, non dipendono unicamente dalla razionalità degli individui, ma sono il risultato di processi collettivi che permettono all'organizzazione di riconoscere ricorrenze nelle situazioni e di reagire in modo coordinato.

### 4.1.bis Le proprietà delle risorse: dai presupposti ai rendimenti resource-based
Affinché una dotazione interna possa generare rendimenti resource-based, deve possedere un insieme articolato di proprietà, tradizionalmente raggruppate in tre dimensioni:

| Dimensione | Proprietà | Significato |
|---|---|---|
| **Generazione del Vantaggio Competitivo** | Scarsità | La risorsa non è disponibile in modo uniforme tra i concorrenti |
| | Rilevanza | La risorsa contribuisce concretamente alla creazione di valore per il cliente |
| **Sostegno del Vantaggio Competitivo** | Durabilità | La risorsa mantiene il suo valore nel tempo, resistendo all'obsolescenza |
| | (Non) Trasferibilità | La risorsa non è facilmente cedibile o acquistabile sui mercati esterni |
| | (Non) Replicabilità | I concorrenti non riescono a riprodurre internamente una risorsa equivalente |
| **Appropriabilità** | Appropriabilità | L'impresa è in grado di catturare e trattenere effettivamente le rendite generate dalla risorsa, senza che esse vengano disperse verso fornitori, dipendenti o concorrenti |

### 4.2 Le Competenze Distintive e il concetto di Core Competence
Quando l'impresa raggiunge i livelli più alti di efficienza combinando sinergicamente le proprie risorse fisiche, immateriali, il know-how umano e le inossidabili routine organizzative, si arriva alla formazione di una **Competenza Distintiva**. Questa garantisce all'impresa una redditività superiore e duratura nel tempo poiché poggia su tre elementi chiave: una risorsa di grande valore, affiancata da asset complementari, il tutto supportato da innate e consolidate capacità organizzative.

All'inizio degli anni '90, gli studiosi Prahalad ed Hamel hanno elevato questo concetto alla sua massima espressione nominandolo **Core Competence** (Competenza chiave). Essa rappresenta l'essenza stessa dell'identità aziendale ed è in grado di estendere la propria influenza trasversalmente a divisioni e reparti anche molto distanti tra loro.
Perché una particolare combinazione aziendale possa fregiarsi dello status di vera e propria *Core Competence*, deve obbligatoriamente soddisfare tre rigidi criteri:
1. **Trasversalità (Accesso a nuovi mercati):** Deve fornire un accesso preferenziale a una vasta gamma di mercati diversificati. Questa competenza funge da "ponte" che consente all'impresa di espandersi in settori completamente estranei tra loro, sfruttando lo stesso nucleo di abilità di base per operare con successo in contesti molto lontani da quello di partenza.
2. **Creazione di Valore Rilevante per il Cliente (Customer Value):** Deve contribuire in maniera assolutamente decisiva al valore e ai benefici percepiti dal cliente finale. La competenza deve tradursi in un pregio chiaramente visibile nel prodotto, inducendo l'utente all'acquisto.
3. **Inimitabilità:** Deve risultare estremamente complessa e costosa da copiare per le aziende concorrenti. La struttura stessa di tale competenza deve essere così stratificata e legata all'esperienza unica dell'azienda da precludere, nei fatti, ogni tentativo di emulazione o plagio.

### 4.3 Esempi paradigmatici di Core Competence

**Il caso Honda — la core competence motoristica.** L'azienda nipponica ha sviluppato nel corso dei decenni una impareggiabile core competence nella *progettazione di motori termici a combustione interna*. Questo patrimonio le ha consentito di dominare inizialmente il settore delle motociclette e, successivamente, di trasferire agilmente tale competenza in mercati apparentemente lontani e irrealizzabili, costruendo autovetture di successo sfidando i giganti occidentali, e spaziando trasversalmente fino ai tagliaerba, ai generatori elettrici e ai motori marini fuoribordo.

**Il caso Canon — la combinazione di core competence multiple.** Le competenze di Canon, costruite sulle eccellenze giapponesi nell'**ottica di precisione**, nella **micromeccanica** e nell'**elettronica**, hanno consentito all'azienda di partire dalle macchine fotografiche per estendersi con successo verso prodotti tecnologicamente affini ma commercialmente lontani, come le stampanti multifunzione, le fotocopiatrici aziendali e gli scanner professionali. La medesima triade di competenze viene combinata in modi diversi a seconda del prodotto finale: ciò che cambia è la *ricetta organizzativa*, non l'asset tecnico di base.

**Il caso Sony — la miniaturizzazione.** La core competence Sony nella miniaturizzazione elettronica le ha permesso di passare dalle radio a transistor ai walkman, dai televisori portatili alle videocamere, valorizzando in ogni nuovo settore la stessa capacità tecnologica di base.

| Impresa | Core Competence | Mercati raggiunti |
|---|---|---|
| **Honda** | Progettazione motori a combustione | Moto, auto, tagliaerba, generatori, motori marini |
| **Canon** | Ottica, micromeccanica, elettronica | Fotocamere, stampanti, fotocopiatrici, scanner |
| **Sony** | Miniaturizzazione elettronica | Radio, walkman, TV portatili, videocamere |

In tutti e tre i casi è evidente come la core competence funga da *meta-risorsa* trasversale, capace di alimentare strategie di diversificazione correlata fondate non sulla casualità ma su una logica industriale unificante.

---

## 5. Il Framework Universale V.R.I.O.
Per aiutare i dirigenti aziendali ad orientarsi all'interno della vasta gamma di risorse disponibili, lo studioso **Jay Barney** ha redatto uno strumento analitico noto come **Framework V.R.I.O.**, evoluzione operativa del precedente acronimo VRIN (in cui la "N" di *Non-substitutability* è stata sostituita dalla "O" di *Organization*).

Questo metodo consiste in un test articolato in quattro domande consecutive, utili a determinare se una particolare risorsa interna è in grado di garantire un vero **Vantaggio Competitivo Sostenibile** nel lungo termine o se si risolve in una semplice presenza inefficace.

### 5.1 Le quattro domande del VRIO

- **V (Valore):** La prima domanda mira a stabilire se la risorsa in esame porta effettivamente valore all'azienda. Nello specifico, essa deve consentire di sfruttare appieno un'opportunità di mercato, oppure di disinnescare e neutralizzare le minacce provenienti dall'ambiente esterno. Se la risposta è negativa e la risorsa non contribuisce a migliorare l'efficienza e l'efficacia aziendale, il percorso analitico si interrompe registrando uno stato di **Svantaggio Competitivo**.
- **R (Rarità):** Se la risorsa possiede valore, bisogna chiedersi quanto sia diffusa. È una dotazione esclusiva dell'impresa oppure molti dei concorrenti ne sono ugualmente equipaggiati? Se la risorsa è preziosa ma comune e facilmente reperibile, non conferirà un vantaggio rispetto ai rivali, bensì determinerà un mero allineamento di mercato, noto come **Parità Competitiva**.
- **I (Inimitabilità):** Superato positivamente anche il test della rarità, il terzo step indaga la vulnerabilità della risorsa. È protetta da barriere efficaci? Le aziende concorrenti si troverebbero di fronte a costi esorbitanti e immense difficoltà se tentassero di replicarla, simularla o trovare alternative comparabili? Se una risorsa preziosa e rara è facilmente imitabile (o acquistabile con poco sforzo dai concorrenti), essa genererà un profitto superiore, ma solo per un breve periodo di tempo, configurando un **Vantaggio Competitivo Temporaneo**.
- **O (Organizzazione):** L'ultimo fondamentale elemento riguarda l'azienda in quanto tale. Una risorsa preziosa, rara e inimitabile deve scontrarsi con l'organizzazione reale dell'impresa: i processi gestionali, i canali di controllo e le procedure formali sono strutturati adeguatamente per estrapolare e catturare concretamente tutto il valore potenziale di quell'asset? Se l'organizzazione non è preparata ad accoglierla e valorizzarla, quella dotazione rappresenta soltanto uno spreco di potenziale (ovvero un **Vantaggio Competitivo Non Sfruttato / Inespresso**). Qualora invece tutte e quattro le caratteristiche (Valore, Rarità, Inimitabilità e Organizzazione adeguata) siano soddisfatte contemporaneamente, l'azienda avrà certificato scientificamente il possesso di un **Vantaggio Competitivo Sostenibile**, capace di sconfiggere nel tempo gli assalti della concorrenza.

### 5.2 La matrice completa dei cinque esiti VRIO
Il framework può essere riassunto in una tabella decisionale a cinque righe, ciascuna corrispondente a un possibile esito strategico:

| Valore? | Rarità? | Inimitabilità? | Organizzazione? | Esito strategico |
|:---:|:---:|:---:|:---:|---|
| NO | — | — | — | **Svantaggio Competitivo** (Competitive Disadvantage) |
| SÌ | NO | — | — | **Parità Competitiva** (Competitive Equality / Parity) |
| SÌ | SÌ | NO | — | **Vantaggio Competitivo Temporaneo** (Temporary Competitive Advantage) |
| SÌ | SÌ | SÌ | NO | **Vantaggio Competitivo Inespresso** (Unused Competitive Advantage) |
| SÌ | SÌ | SÌ | SÌ | **Vantaggio Competitivo Sostenibile** (Long-term Competitive Advantage) |

La logica è dunque cumulativa e gerarchica: ciascun criterio costituisce una *condizione necessaria* ma non sufficiente, e solo l'allineamento contemporaneo di tutti e quattro genera il risultato strategicamente più ambito. Il framework VRIO non è solo descrittivo, ma anche prescrittivo: indica al management su *quale* dimensione intervenire qualora la risorsa risulti carente.

---

## 6. Strategie Resource-Based e Valutazione delle Risorse

### 6.1 Come sviluppare rendimenti resource-based
Per giungere a possedere risorse di valore, rare e imperfettamente mobili (presupposti del vantaggio competitivo sostenibile), un'impresa può seguire due percorsi alternativi e complementari:

1. **Sviluppo interno delle risorse:** l'impresa accumula nel tempo, attraverso investimenti in R&S, formazione e apprendimento organizzativo, uno *stock di risorse context- e firm-specific* che risulta non commercializzabile sui mercati esterni e dunque intrinsecamente eterogeneo.
2. **Acquisizione delle risorse sui mercati:** l'impresa si procura risorse strategiche dal mercato dei fattori, sfruttando vantaggi di posizione (costi di acquisizione inferiori) o vantaggi cognitivi (asimmetrie informative e aspettative differenziate sul valore futuro). Anche in questo caso, le *circostanze fortuite* e l'imperfetta mobilità contribuiscono a generare uno stock di risorse imperfettamente mobile.

L'integrazione dei due percorsi conduce all'accumulazione di **risorse di valore, rare e imperfettamente mobili**, ovvero risorse eterogenee, dalle quali derivano *rendimenti eterogenei* superiori alla media del settore.

### 6.2 Le tre strategie basate sulle risorse
La RBV non è soltanto uno schema descrittivo, ma anche un approccio prescrittivo che si traduce in tre famiglie di strategie aziendali, tutte convergenti verso l'obiettivo della *profittabilità derivante dalle risorse*:

| Strategia | Logica di fondo | Leve operative principali |
|---|---|---|
| **Resource Picking** | Selezionare le risorse migliori sui mercati dei fattori | Posizionamento sul mercato dei fattori strategici; selezione di risorse di valore; qualità del management; sistemi informativi e di monitoraggio dell'ambiente |
| **Strategia di Sostegno** | Proteggere e preservare nel tempo le risorse di valore già detenute | Protezione delle risorse di valore; diritti di proprietà intellettuale; meccanismi di isolamento; investimento nell'ambiguità causale; valorizzazione delle complementarità |
| **Strategia di Innovazione** | Rinnovare costantemente il portafoglio di risorse | Sostituzione continua delle risorse obsolete; focus sulle risorse intangibili; orientamento all'innovazione |

### 6.3 Valutare risorse e competenze: la matrice "Needed to Play / Needed to Win"
Per discriminare quali risorse aziendali siano effettivamente strategiche, la letteratura ha elaborato una matrice a due dimensioni che incrocia *l'intensità del controllo/qualità/quantità* posseduta dall'impresa rispetto ai concorrenti (ridotta vs elevata) con la *natura competitiva* della risorsa (necessaria solo per partecipare al gioco vs necessaria per vincerlo):

| | Needed to Play | Needed to Win |
|---|---|---|
| **Controllo elevato** | **Superfluous Strengths** — punti di forza "senza conseguenze": risorse buone ma non differenzianti | **Key Strengths** — i veri punti di forza, base del vantaggio competitivo |
| **Controllo ridotto** | **Zone of Irrelevance** — debolezze "senza conseguenze" su risorse non strategiche | **Key Weaknesses** — i punti di debolezza critici, da colmare prioritariamente |

Solo le risorse collocate nella colonna *Needed to Win* hanno rilevanza strategica autentica: il management deve quindi concentrare risorse e investimenti sul rafforzamento dei *Key Strengths* e sul recupero delle *Key Weaknesses*, lasciando in secondo piano i quadranti irrilevanti.

---

## 7. La sintesi del Tripode: l'Analisi SWOT
Il punto di arrivo dell'intera architettura strategica – RBV, Industry-Based View e Institutional-Based View – si condensa nella celebre **Analisi SWOT** (*Strengths, Weaknesses, Opportunities, Threats*). Si tratta dello strumento di sintesi che integra le due grandi dimensioni dell'analisi:

| | Helpful (favorisce l'obiettivo) | Harmful (ostacola l'obiettivo) |
|---|---|---|
| **Internal Origin** (Endogeno: RBV) | **S — Strengths** (i Key Strengths emersi dalla matrice precedente) | **W — Weaknesses** (le Key Weaknesses) |
| **External Origin** (Esogeno: Industry + Institutional) | **O — Opportunities** (opportunità di mercato e istituzionali) | **T — Threats** (minacce competitive e normative) |

In altri termini, le componenti **S** e **W** della SWOT derivano direttamente dall'analisi RBV (filtrata attraverso la matrice Needed to Play / Needed to Win), mentre **O** e **T** discendono dall'analisi del settore (Porter) e dall'analisi neo-istituzionale. La SWOT, lungi dall'essere uno strumento isolato, costituisce dunque il *quadrante riassuntivo* in cui confluiscono tutte le analisi strategiche fin qui condotte, fornendo al management una rappresentazione integrata su cui fondare le scelte strategiche.

---

## 🎯 Sezione: Simulazioni Domande d'Esame - Settimana 4

**Domanda 1:**
Illustrare i principi fondamentali che sanciscono il passaggio dall'approccio settoriale (Porter) all'analisi interna promossa dalla *Resource-Based View* (RBV). Elencare e argomentare l'importanza strategica delle diverse tipologie di dotazioni aziendali (soffermandosi sulla maggiore valenza delle risorse intangibili). Introdurre infine l'analisi sulla gestione del sapere secondo il modello S.E.C.I. (Nonaka e Takeuchi), definendo chiaramente il dualismo concettuale e pratico che separa la Conoscenza Tacita da quella Esplicita.

**Domanda 2:**
Evidenziare i passaggi critici e le finalità strategiche sottese all'impiego del modello V.R.I.O. ai fini della determinazione di un vantaggio aziendale stabile e duraturo. Connettere tale analisi al concetto teorizzato da Prahalad ed Hamel di "Core Competence", elencandone esplicitamente i tre attributi insindacabili (estensione multidimensionale in nuovi mercati, creazione del valore per il cliente e difficoltà emulativa della concorrenza), offrendo preferibilmente un'applicazione logica fondata su un noto caso aziendale (es. Honda Motors).
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
//  GRAPH 1 — VRIO MATRIX: 4 toggle V/R/I/O → esito strategico
// ══════════════════════════════════════════════════════════════
function VRIOMatrixGraph() {
  const [v, setV] = useState(1);
  const [r, setR] = useState(1);
  const [i, setI] = useState(1);
  const [o, setO] = useState(1);

  // Determine outcome index: 0=Disadvantage, 1=Parity, 2=Temporary, 3=Unused, 4=Sustainable
  let outcomeIdx;
  if (v === 0) outcomeIdx = 0;
  else if (r === 0) outcomeIdx = 1;
  else if (i === 0) outcomeIdx = 2;
  else if (o === 0) outcomeIdx = 3;
  else outcomeIdx = 4;

  const outcomes = [
    { label: 'Svantaggio Competitivo', short: 'Disadvantage', color: '#dc2626', y: 0 },
    { label: 'Parità Competitiva', short: 'Parity', color: '#f59e0b', y: 1 },
    { label: 'Vantaggio Temporaneo', short: 'Temporary', color: '#eab308', y: 2 },
    { label: 'Vantaggio Inespresso', short: 'Unused', color: '#0ea5e9', y: 3 },
    { label: 'Vantaggio Sostenibile', short: 'Sustainable', color: '#16a34a', y: 4 },
  ];

  const current = outcomes[outcomeIdx];

  // Bar chart vertical: 5 bars, current one tall and colored, others short and grey
  const barW = (cW - 40) / 5;
  const barGap = 8;

  return (
    <div className="graph-block">
      <h4 className="graph-title">Framework VRIO: configurazione V/R/I/O → esito competitivo</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          <Axes xMin={0} xMax={5} yMin={0} yMax={5} xLabel="" yLabel="livello vantaggio" nX={5} nY={5} xFmt={() => ''} yFmt={v => v.toFixed(0)} />
          {outcomes.map((out, idx) => {
            const x = PL + 20 + idx * (barW + barGap);
            const isActive = idx === outcomeIdx;
            const barH = ((out.y + 1) / 5) * cH * 0.9;
            return (
              <g key={idx}>
                <rect
                  x={x}
                  y={PT + cH - barH}
                  width={barW}
                  height={barH}
                  fill={isActive ? out.color : '#cbd5e1'}
                  opacity={isActive ? 1 : 0.45}
                  stroke={isActive ? '#fff' : 'none'}
                  strokeWidth={isActive ? 2 : 0}
                />
                <text
                  x={x + barW / 2}
                  y={PT + cH + 14}
                  textAnchor="middle"
                  fontSize={9}
                  fill={isActive ? out.color : '#94a3b8'}
                  fontWeight={isActive ? 'bold' : 'normal'}
                >
                  {out.short}
                </text>
                {isActive && (
                  <text
                    x={x + barW / 2}
                    y={PT + cH - barH - 5}
                    textAnchor="middle"
                    fontSize={11}
                    fill={out.color}
                    fontWeight="bold"
                  >
                    ★
                  </text>
                )}
              </g>
            );
          })}
        </svg>
        <div className="graph-controls">
          <SliderControl label="Valore" symbol="V" value={v} min={0} max={1} step={1} onChange={setV} color="#0ea5e9" fmt={x => x === 1 ? 'SÌ' : 'NO'} />
          <SliderControl label="Rarità" symbol="R" value={r} min={0} max={1} step={1} onChange={setR} color="#a855f7" fmt={x => x === 1 ? 'SÌ' : 'NO'} />
          <SliderControl label="Inimitabilità" symbol="I" value={i} min={0} max={1} step={1} onChange={setI} color="#f59e0b" fmt={x => x === 1 ? 'SÌ' : 'NO'} />
          <SliderControl label="Organizzazione" symbol="O" value={o} min={0} max={1} step={1} onChange={setO} color="#16a34a" fmt={x => x === 1 ? 'SÌ' : 'NO'} />
          <div className="result-box">
            <div className="result-row"><strong>Esito</strong> <span style={{ color: current.color }}>{current.label}</span></div>
          </div>
          <div className="insight-mini">La logica VRIO è cumulativa e gerarchica: ciascun criterio è condizione necessaria ma non sufficiente. Solo l'allineamento di tutte e quattro le caratteristiche genera il vantaggio competitivo sostenibile.</div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAPH 2 — RESOURCE VALUE DECAY: V(t) = V₀·exp(-λt) per 3 categorie
// ══════════════════════════════════════════════════════════════
function ResourceValueDecayGraph() {
  const [years, setYears] = useState(10);
  const [lambda, setLambda] = useState(0.15);

  const xMin = 0, xMax = 20;
  const yMin = 0, yMax = 100;

  // Three categories: commodity (high decay), semi-rare (medium), rare/inimitable (low)
  // Scale lambda for each category
  const lambdaCommodity = lambda * 2.2;
  const lambdaSemi = lambda * 1.0;
  const lambdaRare = lambda * 0.25;

  const buildPath = (lam) => {
    const pts = [];
    for (let t = xMin; t <= xMax; t += 0.25) {
      const val = 100 * Math.exp(-lam * t);
      pts.push([toX(t, xMin, xMax), toY(val, yMin, yMax)]);
    }
    return 'M ' + pts.map(p => p.join(',')).join(' L ');
  };

  const pathCommodity = buildPath(lambdaCommodity);
  const pathSemi = buildPath(lambdaSemi);
  const pathRare = buildPath(lambdaRare);

  const valCommodity = 100 * Math.exp(-lambdaCommodity * years);
  const valSemi = 100 * Math.exp(-lambdaSemi * years);
  const valRare = 100 * Math.exp(-lambdaRare * years);

  return (
    <div className="graph-block">
      <h4 className="graph-title">Decadimento del valore: V(t) = V₀·exp(−λt) per categoria di risorsa</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          <Axes xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax} xLabel="anni" yLabel="V (% iniziale)" xFmt={v => v.toFixed(0)} yFmt={v => v.toFixed(0) + '%'} />
          <path d={pathCommodity} fill="none" stroke="#dc2626" strokeWidth={2} />
          <path d={pathSemi} fill="none" stroke="#f59e0b" strokeWidth={2} />
          <path d={pathRare} fill="none" stroke="#16a34a" strokeWidth={2.4} />
          {/* vertical dashed at current years */}
          <line x1={toX(years, xMin, xMax)} y1={PT} x2={toX(years, xMin, xMax)} y2={PT + cH} stroke="#475569" strokeDasharray="3,3" strokeWidth={1} />
          {/* points at current year */}
          <circle cx={toX(years, xMin, xMax)} cy={toY(valCommodity, yMin, yMax)} r={4.5} fill="#dc2626" stroke="#fff" strokeWidth={1.5} />
          <circle cx={toX(years, xMin, xMax)} cy={toY(valSemi, yMin, yMax)} r={4.5} fill="#f59e0b" stroke="#fff" strokeWidth={1.5} />
          <circle cx={toX(years, xMin, xMax)} cy={toY(valRare, yMin, yMax)} r={4.5} fill="#16a34a" stroke="#fff" strokeWidth={1.5} />
          {/* legend */}
          <g transform={`translate(${PL + cW - 130}, ${PT + 6})`}>
            <rect x={-4} y={-4} width={134} height={48} fill="white" opacity={0.85} stroke="#cbd5e1" strokeWidth={0.5} rx={3} />
            <line x1={0} y1={6} x2={18} y2={6} stroke="#dc2626" strokeWidth={2} />
            <text x={22} y={10} fontSize={9} fill="#475569">Commodity</text>
            <line x1={0} y1={20} x2={18} y2={20} stroke="#f59e0b" strokeWidth={2} />
            <text x={22} y={24} fontSize={9} fill="#475569">Semi-rara</text>
            <line x1={0} y1={34} x2={18} y2={34} stroke="#16a34a" strokeWidth={2.4} />
            <text x={22} y={38} fontSize={9} fill="#475569">Rara/Inimitabile</text>
          </g>
        </svg>
        <div className="graph-controls">
          <SliderControl label="Orizzonte temporale" symbol="t" value={years} min={1} max={20} step={1} onChange={setYears} color="#475569" fmt={v => v.toFixed(0) + ' anni'} />
          <SliderControl label="Tasso imitazione base" symbol="λ" value={lambda} min={0.05} max={0.4} step={0.01} onChange={setLambda} color="#a855f7" fmt={v => v.toFixed(2)} />
          <div className="result-box">
            <div className="result-row"><strong>Commodity</strong> <span style={{ color: '#dc2626' }}>{valCommodity.toFixed(1)}%</span></div>
            <div className="result-row"><strong>Semi-rara</strong> <span style={{ color: '#f59e0b' }}>{valSemi.toFixed(1)}%</span></div>
            <div className="result-row"><strong>Rara/Inimitabile</strong> <span style={{ color: '#16a34a' }}>{valRare.toFixed(1)}%</span></div>
          </div>
          <div className="insight-mini">Le risorse commodity perdono valore rapidamente per imitazione. Le risorse rare e inimitabili — protette da meccanismi di isolamento e ambiguità causale — mantengono il loro valore nel tempo, fondando il vantaggio competitivo sostenibile.</div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAPH 3 — SECI SPIRAL: 4 quadranti con spirale crescente
// ══════════════════════════════════════════════════════════════
function SECISpiralGraph() {
  const [intensity, setIntensity] = useState(2);

  // 4 quadrants centered in plot area
  const cx = PL + cW / 2;
  const cy = PT + cH / 2;
  const halfW = cW / 2;
  const halfH = cH / 2;

  // Quadrants:
  // top-left = S (Socializzazione), top-right = E (Esternalizzazione)
  // bottom-right = C (Combinazione), bottom-left = I (Internalizzazione)
  const quadrants = [
    { label: 'S', name: 'Socializzazione', x: PL, y: PT, color: '#0ea5e9' },
    { label: 'E', name: 'Esternalizzazione', x: cx, y: PT, color: '#a855f7' },
    { label: 'C', name: 'Combinazione', x: cx, y: cy, color: '#f59e0b' },
    { label: 'I', name: 'Internalizzazione', x: PL, y: cy, color: '#16a34a' },
  ];

  // Build a logarithmic spiral that traverses S → E → C → I → S' (next loop, larger)
  // Use Archimedean spiral starting at center
  // Number of full turns scales with intensity
  const turns = intensity;
  const steps = Math.max(120, Math.floor(turns * 60));
  const maxRadius = Math.min(halfW, halfH) * 0.95;
  const totalAngle = turns * 2 * Math.PI;

  const spiralPts = [];
  for (let i = 0; i <= steps; i++) {
    const frac = i / steps;
    // Start angle so first quadrant is S (top-left = angle ≈ 3π/4)
    const angle = (3 * Math.PI) / 4 + frac * totalAngle;
    const r = frac * maxRadius;
    const px = cx + r * Math.cos(angle);
    const py = cy - r * Math.sin(angle);
    spiralPts.push([px, py]);
  }
  const spiralPath = 'M ' + spiralPts.map(p => p.map(n => n.toFixed(2)).join(',')).join(' L ');

  // Final point of spiral (current position)
  const lastPt = spiralPts[spiralPts.length - 1];

  return (
    <div className="graph-block">
      <h4 className="graph-title">Spirale SECI: ciclo Tacita ↔ Esplicita attraverso i 4 ba</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          {/* 4 quadrants background */}
          {quadrants.map((q, idx) => (
            <rect
              key={idx}
              x={q.x}
              y={q.y}
              width={halfW}
              height={halfH}
              fill={q.color}
              opacity={0.08}
              stroke={q.color}
              strokeWidth={1}
            />
          ))}
          {/* Cross axes */}
          <line x1={cx} y1={PT} x2={cx} y2={PT + cH} stroke="#475569" strokeWidth={1} />
          <line x1={PL} y1={cy} x2={PL + cW} y2={cy} stroke="#475569" strokeWidth={1} />

          {/* Quadrant labels */}
          {quadrants.map((q, idx) => (
            <g key={`l${idx}`}>
              <text x={q.x + halfW / 2} y={q.y + 16} textAnchor="middle" fontSize={13} fontWeight="bold" fill={q.color}>
                {q.label}
              </text>
              <text x={q.x + halfW / 2} y={q.y + halfH - 8} textAnchor="middle" fontSize={9} fill={q.color} opacity={0.85}>
                {q.name}
              </text>
            </g>
          ))}

          {/* Axis annotations */}
          <text x={PL + 4} y={PT - 4} fontSize={9} fill="#64748b">Tacita</text>
          <text x={PL + cW - 32} y={PT - 4} fontSize={9} fill="#64748b">Esplicita</text>

          {/* Spiral */}
          <path d={spiralPath} fill="none" stroke="#dc2626" strokeWidth={2} opacity={0.85} />

          {/* current point on spiral */}
          <circle cx={lastPt[0]} cy={lastPt[1]} r={5} fill="#dc2626" stroke="#fff" strokeWidth={2} />
          {/* center */}
          <circle cx={cx} cy={cy} r={2.5} fill="#475569" />
        </svg>
        <div className="graph-controls">
          <SliderControl label="Intensità apprendimento" symbol="ι" value={intensity} min={0.5} max={5} step={0.1} onChange={setIntensity} color="#dc2626" fmt={v => v.toFixed(1) + ' giri'} />
          <div className="result-box">
            <div className="result-row"><strong>Cicli SECI completati</strong> <span style={{ color: '#dc2626' }}>{intensity.toFixed(1)}</span></div>
            <div className="result-row"><strong>Fasi attraversate</strong> <span>{Math.floor(intensity * 4)}</span></div>
          </div>
          <div className="insight-mini">La spirale della conoscenza non è lineare ma ascensionale: ogni ciclo Socializzazione → Esternalizzazione → Combinazione → Internalizzazione si conclude alimentando un nuovo ciclo a un livello qualitativamente superiore.</div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAPH 4 — TACIT vs EXPLICIT: barre stack per fase SECI per tipo organizzazione
// ══════════════════════════════════════════════════════════════
function TacitExplicitGraph() {
  const [orgType, setOrgType] = useState(0); // 0 = artigianale, 1 = industriale, 2 = knowledge-intensive

  // Each phase has a baseline tacit/explicit composition
  // S: 100/0, E: 60/40, C: 0/100, I: 40/60
  // Modulated by org type
  // Artigianale: more tacit overall, Industriale: balanced/more explicit, Knowledge-intensive: high explicit but rich tacit
  const baseTacit = {
    S: 95,
    E: 60,
    C: 10,
    I: 45,
  };

  // Org modifiers (delta on tacit %)
  const orgMods = [
    { name: 'Artigianale', deltas: { S: 0, E: 15, C: 25, I: 30 }, color: '#a16207' },
    { name: 'Industriale', deltas: { S: -20, E: -15, C: -5, I: -10 }, color: '#0369a1' },
    { name: 'Knowledge-Intensive', deltas: { S: 0, E: 5, C: -5, I: 5 }, color: '#7c3aed' },
  ];

  const mod = orgMods[orgType];
  const phases = ['S', 'E', 'C', 'I'];
  const phaseNames = {
    S: 'Socializzazione',
    E: 'Esternalizzazione',
    C: 'Combinazione',
    I: 'Internalizzazione',
  };

  const data = phases.map(p => {
    const tacit = Math.max(0, Math.min(100, baseTacit[p] + mod.deltas[p]));
    return { phase: p, tacit, explicit: 100 - tacit };
  });

  const xMin = 0, xMax = 4;
  const yMin = 0, yMax = 100;

  const barW = (cW - 60) / 4;
  const barGap = 12;

  return (
    <div className="graph-block">
      <h4 className="graph-title">Composizione Tacita/Esplicita nelle 4 fasi SECI per tipo di organizzazione</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          <Axes xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax} xLabel="" yLabel="quota (%)" nX={4} nY={5} xFmt={() => ''} yFmt={v => v.toFixed(0) + '%'} />
          {data.map((d, idx) => {
            const x = PL + 30 + idx * (barW + barGap);
            const tacitH = (d.tacit / 100) * cH;
            const explicitH = (d.explicit / 100) * cH;
            return (
              <g key={idx}>
                {/* tacit (bottom, warm color) */}
                <rect x={x} y={PT + cH - tacitH} width={barW} height={tacitH} fill="#dc2626" opacity={0.78} />
                {/* explicit (top, cool color) */}
                <rect x={x} y={PT + cH - tacitH - explicitH} width={barW} height={explicitH} fill="#0ea5e9" opacity={0.78} />
                {/* labels inside bars */}
                {tacitH > 18 && (
                  <text x={x + barW / 2} y={PT + cH - tacitH / 2 + 3} textAnchor="middle" fontSize={10} fill="white" fontWeight="bold">
                    {d.tacit.toFixed(0)}%
                  </text>
                )}
                {explicitH > 18 && (
                  <text x={x + barW / 2} y={PT + cH - tacitH - explicitH / 2 + 3} textAnchor="middle" fontSize={10} fill="white" fontWeight="bold">
                    {d.explicit.toFixed(0)}%
                  </text>
                )}
                {/* phase label below */}
                <text x={x + barW / 2} y={PT + cH + 14} textAnchor="middle" fontSize={11} fontWeight="bold" fill="#475569">
                  {d.phase}
                </text>
              </g>
            );
          })}
          {/* legend */}
          <g transform={`translate(${PL + cW - 110}, ${PT + 6})`}>
            <rect x={-4} y={-4} width={114} height={36} fill="white" opacity={0.9} stroke="#cbd5e1" strokeWidth={0.5} rx={3} />
            <rect x={0} y={0} width={14} height={10} fill="#dc2626" opacity={0.78} />
            <text x={20} y={9} fontSize={9} fill="#475569">Tacita</text>
            <rect x={0} y={16} width={14} height={10} fill="#0ea5e9" opacity={0.78} />
            <text x={20} y={25} fontSize={9} fill="#475569">Esplicita</text>
          </g>
        </svg>
        <div className="graph-controls">
          <SliderControl label="Tipo organizzazione" symbol="org" value={orgType} min={0} max={2} step={1} onChange={setOrgType} color={mod.color} fmt={v => orgMods[v].name} />
          <div className="result-box">
            <div className="result-row"><strong>S — Tacita</strong> <span style={{ color: '#dc2626' }}>{data[0].tacit.toFixed(0)}%</span></div>
            <div className="result-row"><strong>E — Tacita</strong> <span style={{ color: '#dc2626' }}>{data[1].tacit.toFixed(0)}%</span></div>
            <div className="result-row"><strong>C — Tacita</strong> <span style={{ color: '#dc2626' }}>{data[2].tacit.toFixed(0)}%</span></div>
            <div className="result-row"><strong>I — Tacita</strong> <span style={{ color: '#dc2626' }}>{data[3].tacit.toFixed(0)}%</span></div>
          </div>
          <div className="insight-mini">Le organizzazioni artigianali poggiano prevalentemente su conoscenza tacita (apprendistato, mentoring). Le imprese industriali spingono sulla codifica esplicita. Le knowledge-intensive bilanciano i due registri sfruttando in pieno la spirale SECI.</div>
        </div>
      </div>
    </div>
  );
}

export default function Week4() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', paddingBottom: '4rem' }}>
      <div className="page-header">
        <div style={{ color: 'var(--accent-cyan)', fontWeight: 600, letterSpacing: '0.1em', fontSize: '0.875rem', marginBottom: '0.5rem' }}>SETTIMANA 04</div>
        <h1 className="page-title gradient-text" style={{ fontSize: '3rem' }}>Resource-Based View (RBV)</h1>
      </div>

      <div className="content-section glass-panel markdown-body">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownContent}</ReactMarkdown>
      </div>

      <div className="content-section glass-panel" style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>📊 Visualizzazioni Interattive</h2>
        <VRIOMatrixGraph />
        <ResourceValueDecayGraph />
        <SECISpiralGraph />
        <TacitExplicitGraph />
      </div>
    </div>
  );
}
