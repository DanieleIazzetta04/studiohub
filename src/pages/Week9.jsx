import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import '../index.css';
import './macro/macro.css';

const markdownContent = `
# Capitolo 9 — Progettazione Organizzativa e Gestione delle Risorse Umane

## Introduzione: dalle strategie alla struttura

Nei capitoli precedenti abbiamo studiato le strategie di vertice: la **Corporate Strategy** decide *dove* competere (in quali settori, aree geografiche, business), la **Business Strategy** decide *come* competere (con quale vantaggio competitivo, quale posizionamento, quali attività della catena del valore). Ma una strategia è solo un progetto finché non prende corpo nella realtà. Per tradurre una strategia in azione concreta serve un'organizzazione: una struttura che distribuisca responsabilità, coordini le persone, assegni le risorse, controlli i risultati.

Questo capitolo si occupa di due temi strettamente connessi:

1. La **Progettazione Organizzativa**: come si costruisce la struttura dell'impresa, quali forme può prendere, come scegliere tra le diverse configurazioni possibili.
2. La **Gestione delle Risorse Umane (HR)**: come si motivano, selezionano, sviluppano le persone che animano questa struttura. Include i sistemi di incentivazione (MBO), i percorsi di carriera, e la visione dell'impresa come **Learning Organization** (Peter Senge), capace di apprendere continuamente.

Una struttura ben progettata ma animata da persone demotivate produce poco. Una squadra di grandi talenti in una struttura mal progettata produce caos. Solo l'allineamento tra strategia, struttura e persone genera vantaggio competitivo sostenibile.

---

## 1. La Struttura Organizzativa: definizione e componenti

### 1.1 Cos'è la struttura organizzativa

La **Struttura Organizzativa** non si riduce all'organigramma disegnato su un foglio. L'organigramma è solo la rappresentazione grafica delle relazioni formali di riporto gerarchico, ma la struttura è molto di più: è l'intero sistema di regole, relazioni, procedure, responsabilità, flussi informativi che fa funzionare l'impresa. È la "spina dorsale" dell'organizzazione.

Una struttura organizzativa ben progettata deve garantire quattro caratteristiche chiave:

- **Efficienza**: minimizzare costi e sprechi nel funzionamento operativo corrente.
- **Elasticità Operativa**: capacità di rispondere velocemente a fluttuazioni di breve periodo (picchi di domanda, imprevisti).
- **Elasticità Strategica**: capacità di riorientarsi su nuove direzioni strategiche quando cambia l'ambiente competitivo.
- **Elasticità Strutturale**: capacità di riorganizzarsi internamente, cambiando ruoli, unità, procedure.

Più le quattro dimensioni sono elevate, più la struttura è "buona". Il problema è che spesso entrano in conflitto: un'organizzazione molto efficiente (macchina ben oliata) è tipicamente poco elastica (cambiamenti costosi). Un'organizzazione molto elastica (fluida, adattiva) è spesso poco efficiente (procedure deboli, ridondanze). Il compito del progettista organizzativo è trovare il giusto equilibrio in base alla strategia dell'impresa.

### 1.2 Le componenti della struttura

Progettare una struttura organizzativa significa definire tre elementi fondamentali:

**1. Le relazioni gerarchiche formali.** Chi risponde a chi? Quanti livelli gerarchici esistono nell'impresa? Un'impresa "piatta" ha pochi livelli (es. 3-4) con molti subordinati per manager. Un'impresa "alta" ha molti livelli (es. 7-10) con pochi subordinati per manager. La scelta incide sulla velocità decisionale (meno livelli = più velocità), sulla specializzazione manageriale (più livelli = più specializzazione), sui costi (più livelli = più manager = più costi).

Legato a questo c'è il concetto di **Span of Control** (ampiezza del controllo): quanti subordinati diretti ha un manager? Uno span stretto (pochi subordinati) consente controllo capillare ma costa molto in stipendi manageriali; uno span ampio (molti subordinati) costa poco ma rischia di lasciare i subordinati senza guida.

**2. I criteri di aggregazione.** Come si raggruppano le persone? Per funzione (marketing, produzione, R&S)? Per prodotto (divisione auto, divisione moto)? Per area geografica (Europa, Asia, Americhe)? Per tipologia di cliente (consumer, business)? La scelta del criterio di aggregazione è il fulcro della progettazione organizzativa e definisce la forma strutturale dell'impresa.

**3. I sistemi di coordinamento e informazione.** Come si garantisce la comunicazione tra le diverse parti dell'organizzazione? Quali sistemi informativi raccolgono e distribuiscono i dati? Quali regole e procedure standardizzano le decisioni? Quali meccanismi di coordinamento trasversale esistono? Senza questi sistemi, una struttura divisa in unità diventa una serie di "silos" incomunicanti.

### 1.3 Connessioni verticali e orizzontali

Le connessioni tra unità organizzative si dividono in due grandi famiglie.

**Connessioni Verticali (la Catena di Comando).**
Sono il sistema di trasmissione delle decisioni dall'alto verso il basso e dei report dal basso verso l'alto. Servono principalmente al **controllo**: permettono al vertice di monitorare ciò che succede e di dirigere l'organizzazione. Si compongono di tre strumenti:

- **Il riporto gerarchico:** la catena formale di chi risponde a chi. Ogni persona ha un capo diretto e un percorso definito per ricevere ordini e trasmettere informazioni.
- **Le regole e procedure:** istruzioni scritte che standardizzano le decisioni e riducono il bisogno di consultare continuamente i superiori.
- **I sistemi informativi di reporting:** dashboard, KPI, report periodici che fanno circolare le informazioni lungo la gerarchia.

Le connessioni verticali sono forti quando l'ambiente è stabile e prevedibile: in questi casi funzionano bene regole chiare e controlli periodici. Sono meno adatte in contesti turbolenti dove le decisioni vanno prese rapidamente sul campo, senza aspettare l'approvazione dei superiori.

**Connessioni Orizzontali (il Coordinamento Interfunzionale).**
Sono la comunicazione tra unità di pari livello, spesso invisibili nell'organigramma ma essenziali perché l'impresa non funzioni "a silos". Un'impresa dove il marketing, la produzione e l'R&S non si parlano è condannata: lanciano prodotti sbagliati, producono cose che i clienti non vogliono, litigano continuamente. Le connessioni orizzontali sono di intensità crescente:

- **Informazioni condivise:** sistemi informativi comuni (ERP, CRM, database aziendali) che permettono a tutte le funzioni di vedere gli stessi dati.
- **Contatti diretti:** i manager di funzioni diverse si incontrano spontaneamente per risolvere problemi operativi, senza passare dal vertice.
- **Task Force temporanee:** gruppi multi-funzionali creati ad hoc per affrontare un problema o un progetto specifico, che si sciolgono quando il lavoro è finito.
- **Integratori Full-Time:** figure il cui unico compito è coordinare più funzioni (tipicamente i Product Manager, i Project Manager, i Brand Manager). Non hanno autorità gerarchica sulle funzioni, ma hanno il mandato di farle collaborare.
- **Team Permanenti Interfunzionali:** gruppi stabili che includono persone di più funzioni e lavorano insieme come un'unità permanente. Molto comuni nel settore dello sviluppo software (team Agile, team di prodotto).

### 1.4 Le Strategic Business Unit (SBU)

Nelle imprese medio-grandi, le unità organizzative di primo livello corrispondono tipicamente alle **Strategic Business Unit (SBU)**. Una SBU è un'unità che opera su un mercato specifico con una propria strategia e con responsabilità di risultato economico. Ogni SBU può avere una natura diversa all'interno del gruppo:

- **Core Business:** è la SBU che rappresenta la missione originaria e primaria dell'impresa. Da questo business è nata storicamente l'azienda ed è spesso il suo centro di gravità strategico. In Ferrari, il core è la produzione di vetture sportive; in Campari, il core è il liquore Campari stesso.
- **Business Cerniera:** è una SBU che ha forti interrelazioni (tangibili o intangibili) con altri business del gruppo. Funziona da raccordo sinergico: condivide tecnologie, competenze, clienti, canali con più SBU. Non è il core, ma è strategicamente importante perché tiene insieme il portafoglio.
- **Business Captive:** è una SBU che produce quasi esclusivamente per altre SBU del gruppo (cliente interno). Non vende sul mercato aperto. Esempi: società interne di logistica, divisioni che producono componenti per altre divisioni. Sono comuni nei gruppi integrati verticalmente.

La distinzione è importante perché la gestione di ciascun tipo è diversa: il core si difende e si investe; la cerniera si coordina con il resto del gruppo; la captive si gestisce come un centro di costo.

---

## 2. Le Forme Strutturali Fondamentali

Le configurazioni organizzative di base sono quattro: semplice, funzionale, multi-divisionale, a matrice. Ogni forma è adatta a contesti diversi e presenta specifici vantaggi e svantaggi.

### 2.1 La Struttura Semplice (o Elementare)

**Caratteristiche.** È la forma organizzativa delle imprese più piccole, giovani o a conduzione familiare. È costituita essenzialmente da due livelli: il vertice (l'imprenditore/fondatore) e i collaboratori operativi. Non c'è un livello intermedio di management. La struttura è informale, le procedure sono poche, le decisioni si prendono sul momento.

**Quando si usa.** Tipicamente nelle start-up, nelle piccole imprese familiari, nelle attività a conduzione diretta. Funziona bene quando l'azienda ha pochi prodotti, pochi dipendenti (tipicamente sotto i 30-50), poche aree geografiche, e l'imprenditore può avere sotto controllo diretto tutto ciò che succede.

**Vantaggi:**
- **Massima velocità decisionale.** Chi decide è l'imprenditore stesso, senza filtri né procedure.
- **Alta coesione e orientamento.** Tutti conoscono la missione, tutti comunicano direttamente.
- **Flessibilità totale.** Si cambia rotta in un attimo se serve.
- **Bassi costi di struttura.** Non servono manager intermedi né sistemi formali.

**Svantaggi:**
- **Bassa specializzazione tecnica.** Ognuno fa un po' di tutto, mancano gli esperti.
- **Non scala.** Al crescere dell'azienda, l'imprenditore non riesce più a controllare tutto personalmente.
- **Dipendenza dal fondatore.** Se l'imprenditore si ammala o muore, l'azienda rischia il collasso.
- **Scarsa formalizzazione.** In caso di conflitti o imprevisti, mancano regole chiare a cui appellarsi.

La struttura semplice è il punto di partenza di ogni azienda. Ma è anche quella che obbligatoriamente deve essere abbandonata quando si cresce.

### 2.2 La Struttura Funzionale

**Caratteristiche.** Quando l'impresa supera la fase pionieristica, il fondatore non può più controllare tutto direttamente. Si introduce un livello di management intermedio, e il criterio di raggruppamento dominante diventa la **funzione aziendale**. L'organizzazione si divide in dipartimenti specializzati per competenza:

- Direzione Marketing e Commerciale
- Direzione Produzione
- Direzione Ricerca e Sviluppo
- Direzione Acquisti e Supply Chain
- Direzione Finanza e Amministrazione
- Direzione Risorse Umane
- Direzione IT/Sistemi Informativi

Ogni dipartimento raggruppa persone con competenze simili ed è guidato da un direttore funzionale (CMO, COO, CTO, CFO, CHRO, CIO). Tutte le direzioni riportano al CEO.

**Quando si usa.** È la forma più diffusa per le imprese di **medie dimensioni con un solo prodotto o una gamma ristretta**, che operano in uno o pochi mercati geografici. Esempi: una media azienda manifatturiera italiana, una società di servizi professionali.

**Vantaggi:**

1. **Economie di scala all'interno delle funzioni.** Un solo grande reparto produzione è più efficiente di tanti piccoli reparti. Un solo ufficio marketing centrale sfrutta meglio risorse come i budget pubblicitari o le ricerche di mercato.
2. **Alta specializzazione tecnica.** Ogni persona si concentra su ciò che sa fare meglio. L'ingegnere di R&S fa solo R&S, il venditore fa solo vendite. Le competenze tecniche si affinano al massimo.
3. **Chiarezza di carriera funzionale.** I percorsi professionali sono lineari all'interno della funzione, facili da gestire e da valutare.
4. **Obiettivi funzionali chiari.** Ogni direzione ha KPI specifici (fatturato per il commerciale, efficienza per la produzione, innovazione per R&S).

**Svantaggi:**

1. **Lentezza decisionale.** Le decisioni che riguardano più funzioni (praticamente tutte le decisioni strategiche importanti) devono salire al CEO, che è l'unica persona con visione d'insieme. Se il CEO è oberato, si creano ingorghi decisionali.
2. **Scarsa innovazione.** Le funzioni lavorano a compartimenti stagni (i cosiddetti **silos**). Il marketing non sa cosa fa R&S, la produzione non sa cosa promette il commerciale ai clienti. I prodotti innovativi richiedono collaborazione intensa tra funzioni, che in questa struttura è difficile.
3. **Sovraccarico del vertice.** Il CEO diventa il collo di bottiglia dell'organizzazione. Tutte le decisioni interfunzionali passano da lui.
4. **Campanilismo funzionale.** Ogni direzione ottimizza i propri obiettivi, non quelli aziendali. Il commerciale vuole promettere tutto al cliente per vendere; la produzione vuole standardizzare per contenere i costi; R&S vuole sviluppare la tecnologia più sofisticata. Questi obiettivi confliggono.

**Le strutture funzionali modificate.** Per mitigare i problemi della struttura funzionale pura, si introducono figure trasversali che collegano più funzioni:

- **Product Manager:** responsabile di un singolo prodotto, lavora con tutte le funzioni per portarlo al successo.
- **Project Manager:** responsabile di un progetto specifico (es. lancio di un nuovo prodotto, implementazione di un nuovo sistema IT), coordina risorse da più funzioni.
- **Brand Manager:** responsabile di un marchio, ne cura il posizionamento e coordina tutte le attività che lo riguardano.

Questi integratori full-time non hanno autorità gerarchica sulle funzioni ma hanno il mandato di farle lavorare insieme. Sono la risposta interna al bisogno di coordinamento orizzontale.

### 2.3 La Struttura Multi-Divisionale (M-Form)

**Caratteristiche.** Quando un'impresa ha molti prodotti diversi, opera in molte aree geografiche, o serve mercati profondamente diversi, la struttura funzionale non regge più. I silos funzionali diventano ingestibili: il CEO non può tenere sotto controllo la strategia di decine di prodotti in decine di paesi.

La soluzione è la **struttura multi-divisionale (M-Form)**: l'impresa si scinde in **divisioni** (business unit), ciascuna delle quali gestisce autonomamente una linea di prodotto, una geografia, o una tipologia di clienti. Ogni divisione ha al proprio interno una struttura quasi completa, con le proprie funzioni principali. Il criterio di raggruppamento di primo livello può essere:

- **Linee di Prodotto:** es. un produttore di mezzi di trasporto con divisione auto, divisione camion, divisione moto.
- **Aree Geografiche:** es. un gruppo con divisione Europa, divisione Asia-Pacifico, divisione Americhe.
- **Tipologie di Clienti:** es. un gruppo tecnologico con divisione consumer, divisione business, divisione pubblica amministrazione.

Ogni divisione è un **centro di profitto** semi-autonomo: ha proprie vendite, propri costi, proprio margine, proprio risultato. Ogni divisione è guidata da un Divisional General Manager che risponde al CEO della corporate. Il vertice corporativo si concentra su: allocazione delle risorse tra divisioni, strategia di gruppo, funzioni centralizzate di servizio (finanza, HR, legale), M&A.

**Quando si usa.** Imprese di grandi dimensioni, diversificate per prodotto, geografia o clienti. Esempio storico: General Motors sotto Alfred Sloan negli anni '20, pioniere dell'M-form (Chevrolet, Pontiac, Buick, Cadillac come divisioni distinte per segmento di clientela). Esempi moderni: Johnson & Johnson (divisione farmaceutica, medical device, consumer), Procter & Gamble (divisione beauty, health, fabric care).

**Vantaggi:**

- **Alta elasticità operativa.** Ogni divisione si adatta velocemente al proprio mercato senza dover aspettare approvazioni dal vertice.
- **Reattività ai mercati.** Le divisioni conoscono da vicino clienti e concorrenti del loro settore, possono rispondere rapidamente.
- **Decentramento decisionale.** Le decisioni sono prese al livello giusto, dove sta l'informazione rilevante. Il CEO non è più il collo di bottiglia.
- **Responsabilità di risultato.** Ogni divisione è valutata sul proprio risultato economico, i suoi manager hanno incentivi chiari.
- **Facilita la crescita per acquisizione.** Le nuove aziende acquisite possono diventare nuove divisioni senza dover essere integrate nella struttura funzionale.

**Svantaggi:**

- **Duplicazione dei costi.** Ogni divisione ha il proprio marketing, la propria R&S, la propria logistica. Si perdono economie di scala rispetto alla struttura funzionale, dove tutto era centralizzato.
- **Minore specializzazione tecnica.** Le competenze sono distribuite in più divisioni, ognuna con meno specialisti. Non c'è il "centro di eccellenza" che si forma in una struttura funzionale.
- **Conflitti interdivisionali.** Le divisioni competono tra loro per le risorse corporative (budget, manager, attenzione). Possono competere anche sui clienti quando i loro mercati si sovrappongono.
- **Rischio di dis-allineamento strategico.** Le divisioni possono iniziare a perseguire i propri obiettivi anche a scapito della strategia di gruppo. Richiede un forte controllo dal vertice corporativo.

### 2.4 La Struttura a Matrice

**Caratteristiche.** La matrice è la forma più complessa e ibrida. Sovrappone **due criteri di raggruppamento contemporaneamente**, creando una griglia bidimensionale. Tipicamente:
- Un asse è la **funzione** (marketing, produzione, R&S, ecc.).
- L'altro asse è il **progetto/prodotto/area geografica**.

Ogni dipendente ha **due capi**: il manager funzionale (che cura lo sviluppo delle competenze tecniche e l'allocazione alle attività) e il manager di progetto/prodotto (che cura il risultato del suo progetto). I due manager condividono l'autorità formale sullo stesso subordinato.

**Quando si usa.** In contesti complessi, ad alta incertezza, dove serve massima flessibilità:
- Industrie aerospaziali (ogni aereo è un grande progetto, serve coordinare specialisti di molte funzioni).
- Consulenza (ogni cliente è un progetto, i consulenti sono specialisti funzionali).
- Ricerca farmaceutica (ogni molecola è un progetto, i ricercatori sono specialisti).
- Grandi studi di ingegneria, progetti infrastrutturali.

**Vantaggi:**

- **Massima condivisione delle risorse specializzate.** Un ingegnere esperto può essere allocato a più progetti in sequenza, ottimizzando l'utilizzo del suo tempo.
- **Doppia focalizzazione.** L'organizzazione ottiene sia eccellenza funzionale (competenze approfondite) sia responsabilità di progetto/prodotto (risultato).
- **Sviluppo di competenze multiple.** I dipendenti lavorano su progetti diversi e si formano in modo ricco.
- **Flessibilità di allocazione delle persone.** Quando un progetto finisce, le persone tornano disponibili per altri progetti.

**Svantaggi (la "crisi dell'autorità duale"):**

- **Violazione dell'unità di comando.** Il principio classico del management ("ognuno ha un solo capo") è infranto. Se i due capi danno ordini contraddittori, il dipendente è in imbarazzo.
- **Ambiguità e frustrazione.** I dipendenti spesso si sentono tirati da due parti. Chi decide del loro aumento di stipendio? Chi valuta la loro performance? Chi ha la priorità?
- **Conflitti tra i manager.** Il manager funzionale vuole che i suoi specialisti eccellano tecnicamente; il manager di progetto vuole che finiscano in tempo e nel budget. I due obiettivi spesso confliggono.
- **Riunioni infinite.** Per mantenere l'allineamento tra i due assi servono continue riunioni di coordinamento, che consumano tempo e energia.
- **Alta complessità gestionale.** Richiede una cultura aziendale matura e sistemi di comunicazione sofisticati. In culture gerarchiche rigide, la matrice non funziona.

La matrice è la "Ferrari" delle strutture organizzative: massima prestazione, ma anche massima difficoltà di guida. Molte aziende l'hanno provata e sono tornate a forme più semplici.

---

## 3. Il Caso Robin Hood: dalle crisi alla crescita organizzativa

Il caso accademico di **Robin Hood** è un esempio classico usato per illustrare come le strutture organizzative devono evolvere al crescere dell'impresa. Il caso trasforma la leggenda medievale in un problema di management.

### 3.1 La fase iniziale — Struttura Semplice

All'inizio della storia, Robin Hood ha un piccolo gruppo di "Merry Men" nella foresta di Sherwood. La struttura è semplice: Robin è il capo, tutti gli altri sono collaboratori. Le decisioni le prende lui personalmente; le operazioni vengono organizzate sul momento; la coesione è data dal carisma del leader e dalla missione condivisa (rubare ai ricchi per dare ai poveri).

Funziona bene perché:
- Il gruppo è piccolo, Robin conosce tutti personalmente.
- Le operazioni sono semplici (agguati ai ricchi viandanti).
- Non serve specializzazione: ognuno fa un po' di tutto.

È la tipica start-up: piccola, informale, guidata dalla visione del fondatore.

### 3.2 La crescita e le crisi organizzative

Col passare del tempo, la fama di Robin si diffonde e molti nuovi uomini vengono ad arruolarsi nella banda. Il gruppo cresce da poche decine a diverse centinaia di persone. A questo punto emergono **due crisi** che minano l'organizzazione.

**Crisi del coordinamento (lo Span of Control esploso).**
Robin non riesce più a controllare personalmente tutti i suoi uomini. Non conosce più i volti dei nuovi arrivati, non sa cosa fanno, non può coordinare le azioni di gruppi dispersi nella foresta. Il principio base del management dice che ogni manager può controllare efficacemente solo un numero limitato di subordinati (tipicamente 5-10, al massimo 15-20). Oltre questa soglia, il controllo diretto diventa impossibile. Robin è tecnicamente a capo di centinaia di persone, ma di fatto non le comanda più.

**Crisi delle risorse (capacity overflow).**
Il gruppo troppo grande consuma più risorse di quante la foresta possa produrre. La selvaggina non basta, gli assalti ai viandanti ricchi sono sempre meno (i viandanti cominciano a evitare la foresta di Sherwood, perché è troppo pericolosa). Il gruppo rischia il collasso per fame.

### 3.3 L'evoluzione — Proto-struttura Funzionale

Robin è costretto a cambiare l'organizzazione. Non può più fare tutto da solo. Introduce il **decentramento per specializzazione**: delega specifiche funzioni a luogotenenti fidati. È la nascita di una proto-struttura funzionale:

- **Will Scarlett** viene messo a capo dell'**intelligence e spionaggio**: raccoglie informazioni sui viandanti ricchi, monitora i movimenti dello sceriffo di Nottingham, gestisce la rete di informatori.
- **Little John** viene messo a capo dell'**addestramento armato**: prende in carico i nuovi reclutati, li addestra al combattimento, organizza le squadre di attacco.
- **Scarlock** viene messo a capo della **tesoreria e finanza**: gestisce il bottino accumulato, lo distribuisce ai poveri, tiene i conti.

In parallelo, viene **ridefinita la politica fiscale** della banda. Prima si derubavano tutti i viandanti ricchi indiscriminatamente; ora si decide di tassare anche i contadini del territorio in modo sistematico (con regole chiare su chi, quanto, quando). È il passaggio da un comportamento opportunistico a una politica strutturata.

### 3.4 Cosa insegna il caso

Il caso Robin Hood mostra tre cose fondamentali:

1. **Le crisi organizzative non sono fallimenti: sono passaggi obbligati di crescita.** Nessuna azienda resta per sempre nella struttura iniziale. Le crisi segnalano che è il momento di cambiare struttura.
2. **La struttura deve seguire la dimensione (e la strategia).** Un gruppo di 10 persone richiede una struttura; un gruppo di 500 persone ne richiede un'altra. Non c'è la "struttura giusta" in assoluto: c'è quella giusta per il contesto.
3. **La transizione è il momento più delicato.** Molte imprese muoiono proprio durante i passaggi strutturali, perché il vecchio modello non funziona più e il nuovo non è ancora in piedi. Serve leadership per gestire la transizione.

Larry Greiner, in un celebre articolo del 1972 (*Evolution and Revolution as Organizations Grow*), ha teorizzato cinque fasi di crescita, ciascuna chiusa da una crisi che apre la fase successiva: crescita per creatività → crisi di leadership → crescita per direzione → crisi di autonomia → crescita per delega → crisi di controllo → crescita per coordinamento → crisi di burocrazia → crescita per collaborazione. Il caso Robin Hood illustra concretamente i primi due passaggi.

---

## 4. Gestione delle Risorse Umane (HR)

### 4.1 Dal personale alla People Strategy

La gestione delle risorse umane ha subito un'evoluzione profonda negli ultimi decenni. In passato, l'ufficio del personale si occupava essenzialmente di amministrazione: contratti, buste paga, ferie, malattie, controversie sindacali. Era una funzione burocratica, tenuta ai margini delle decisioni strategiche.

Oggi la visione è radicalmente cambiata. Le persone sono riconosciute come la **risorsa critica** dell'impresa: in settori a bassa intensità di capitale fisico (servizi, software, consulenza), sono praticamente l'unica risorsa. Di conseguenza la funzione HR è diventata **strategica**: si parla di *People Strategy*, cioè come l'impresa attira, sviluppa, motiva e trattiene le persone migliori. L'HR Director partecipa al comitato direttivo alla pari degli altri direttori.

I focus HR moderni sono:
- **Talent Acquisition:** attrarre i migliori candidati sul mercato.
- **Performance Management:** misurare e gestire le prestazioni individuali.
- **Learning & Development:** formare le persone e svilupparne il potenziale.
- **Compensation & Benefits:** sistemi retributivi competitivi.
- **Employee Engagement:** mantenere alto l'ingaggio e la motivazione.
- **Succession Planning:** preparare i leader di domani.

### 4.2 Il Management By Objectives (MBO)

Il **Management By Objectives**, proposto da **Peter Drucker** nel libro *The Practice of Management* (1954), è il sistema più diffuso per legare gli obiettivi aziendali alla motivazione individuale. Il principio è: **le persone sono più motivate e performano meglio se lavorano su obiettivi chiari, condivisi e legati a ricompense**.

Il processo MBO si svolge in quattro fasi:

**1. Definizione degli obiettivi (inizio anno).**
A inizio anno (tipicamente gennaio), ogni manager si incontra con il proprio capo e concorda insieme un set di obiettivi personali per i dodici mesi successivi. L'importante è che gli obiettivi siano **condivisi**, non imposti dall'alto. La negoziazione è parte integrante del processo.

Gli obiettivi devono avere tre caratteristiche chiave:
- **Prioritari:** pochi (3-5 al massimo), focalizzati su ciò che conta davvero. Troppi obiettivi dispersono l'attenzione.
- **Sfidanti:** devono richiedere uno sforzo significativo. Obiettivi troppo facili non motivano. Obiettivi impossibili demoralizzano. Il target classico è "difficile ma raggiungibile".
- **Misurabili:** devono essere quantificabili in modo oggettivo, così a fine anno si può verificare senza ambiguità se sono stati raggiunti. Indicatori tipici: fatturato, quota di mercato, soddisfazione clienti (NPS), costi, tempo di consegna, qualità (difettosità).

Esempi di obiettivi SMART (Specific, Measurable, Achievable, Relevant, Time-bound):
- "Aumentare il fatturato della linea X del 15% entro il 31 dicembre"
- "Portare il Net Promoter Score al 90% entro il Q4"
- "Ridurre il tempo di consegna medio da 10 a 7 giorni entro settembre"
- "Lanciare il nuovo prodotto Y sul mercato europeo entro ottobre"

**2. Bonus Target.**
A ogni obiettivo è associato un **Bonus Target**, cioè un premio monetario che viene erogato se l'obiettivo è raggiunto. Tipicamente il bonus rappresenta una quota significativa della retribuzione totale (può andare dal 10% per il personale operativo fino al 50-100% per il top management).

Il meccanismo di erogazione è spesso a gradini:
- Sotto il 90% di raggiungimento: nessun bonus.
- Dal 90% al 100%: bonus proporzionale al livello raggiunto.
- Oltre il 100%: bonus maggiorato (fino a un tetto, es. 120% o 150%).

Questo schema incentiva a superare l'obiettivo ma previene comportamenti rischiosi (se si sta sotto il 90%, si ha poco da guadagnare a rischiare tutto per arrivare al 100%).

**3. Monitoraggio intermedio.**
Durante l'anno (tipicamente ogni trimestre), si fanno revisioni intermedie per verificare l'avanzamento, identificare problemi, aggiustare la rotta. Non sono valutazioni formali, ma check-point che permettono di correggere per tempo.

**4. Valutazione finale (fine anno).**
A fine anno si misura il risultato effettivo e si calcola il bonus. La valutazione è anche l'occasione per un colloquio di sviluppo: cosa è andato bene, cosa si può migliorare, quali obiettivi per l'anno successivo, quali percorsi di formazione attivare.

**Vantaggi dell'MBO:**
- Allinea gli obiettivi individuali con quelli aziendali (cascading degli obiettivi: quelli del CEO vengono scomposti in obiettivi per i direttori, poi per i manager, ecc.).
- Chiarezza: ognuno sa cosa deve fare.
- Motivazione: il legame tra sforzo e ricompensa è trasparente.
- Base oggettiva per valutazioni e promozioni.

**Critiche all'MBO:**
- Rischio di **focalizzarsi sul misurabile a scapito del non misurabile**: un manager può ignorare aspetti importanti ma difficili da quantificare (clima aziendale, collaborazione, innovazione di lungo).
- **Gaming del sistema:** le persone negoziano obiettivi bassi per garantirsi il bonus, oppure truccano i numeri.
- **Disincentiva la cooperazione:** se ognuno è valutato solo sui propri obiettivi, non ha incentivi ad aiutare i colleghi.

Per questo l'MBO moderno integra anche indicatori di collaborazione, comportamenti, valori aziendali, non solo numeri puri.

### 4.3 I Percorsi di Carriera

L'HR si occupa anche di **mappare i percorsi di carriera** all'interno dell'impresa. Sapere come crescere professionalmente è un fattore fondamentale di engagement: le persone restano se vedono prospettive, se ne vanno se si sentono ferme. I percorsi di carriera possono essere di diverse forme:

**Percorsi Lineari (Verticali).**
L'avanzamento è per gradi all'interno della stessa funzione: es. analista junior → analista senior → manager → senior manager → direttore. Il passaggio da un livello all'altro richiede anni e richiede di dimostrare competenze tecniche e manageriali crescenti. È il percorso classico nelle grandi corporate.

**Percorsi Orizzontali (Trasversali).**
L'avanzamento include cambi di funzione o di area geografica: es. un marketing manager in Italia diventa marketing manager in Francia, poi commercial director in Germania, poi torna in Italia come country manager. Questo arricchisce l'esperienza e crea leader più completi. Le multinazionali mature usano sistematicamente la **job rotation** come strumento di sviluppo dei talenti.

**Percorsi a Spirale.**
Combinazione di avanzamenti verticali e orizzontali: la carriera sale in modo non lineare, esplorando funzioni diverse, paesi diversi, progetti diversi. Ogni salto orizzontale è seguito da un salto verticale. È il percorso tipico dei futuri top manager nei gruppi globali.

Il **piano di successione** (*succession planning*) è un altro compito chiave dell'HR: identificare in anticipo chi potrà ricoprire i ruoli chiave dell'azienda quando i titolari attuali andranno in pensione o lasceranno l'azienda. Le imprese mature hanno "piani di successione" per tutti i ruoli critici, con due o tre candidati identificati per ciascuno.

---

## 5. Apprendimento Organizzativo e Learning Organization

### 5.1 Perché imparare è diventato critico

Nel Novecento industriale, l'eccellenza operativa era la chiave: fare le cose bene, con efficienza, in modo ripetibile. Le aziende vincenti erano quelle capaci di produrre di più, meglio, a costo più basso. L'apprendimento era lento e i cambiamenti di paradigma erano rari.

Nel mondo attuale, dominato da velocità tecnologica, discontinuità di mercato, globalizzazione e digitalizzazione, l'eccellenza operativa non basta più. Un'azienda può essere perfetta nel fare quello che ha sempre fatto, eppure morire in dieci anni perché il mercato cambia. È successo a Kodak (perfetta nel business della pellicola fotografica, travolta dal digitale), a Blockbuster (perfetta nel noleggio DVD, distrutta da Netflix), a Nokia (leader mondiale dei telefoni, spazzata via da Apple).

La lezione è chiara: **chi non impara a cambiare muore**. L'impresa moderna deve essere capace non solo di eseguire, ma di **apprendere e reinventarsi** continuamente.

### 5.2 La Learning Organization di Peter Senge

**Peter Senge**, nel libro *The Fifth Discipline* (1990), ha coniato il concetto di **Learning Organization**: un'organizzazione in cui ogni persona contribuisce continuamente all'apprendimento collettivo, e dove l'impresa nel suo insieme è capace di evolvere, adattarsi, reinventarsi.

Senge identifica cinque "discipline" necessarie per diventare una Learning Organization:

1. **Personal Mastery:** ogni individuo si impegna a sviluppare continuamente le proprie competenze.
2. **Mental Models:** si esaminano criticamente i modelli mentali con cui si interpretano i fenomeni, riconoscendo che possono essere sbagliati.
3. **Shared Vision:** l'organizzazione costruisce una visione condivisa del futuro, che guida le azioni individuali.
4. **Team Learning:** i team sviluppano la capacità di pensare insieme, sfruttando l'intelligenza collettiva.
5. **Systems Thinking:** si pensa l'organizzazione come un sistema complesso, non come una somma di parti isolate. Questa è la "quinta disciplina" che tiene insieme le altre quattro.

### 5.3 Single-Loop vs Double-Loop Learning

L'apprendimento organizzativo non è tutto uguale. **Chris Argyris** ha proposto una distinzione fondamentale tra due tipi di apprendimento:

**Single-Loop Learning (Apprendimento Adattivo).**
Si correggono gli errori operativi senza mettere in discussione le regole, gli obiettivi, i modelli mentali sottostanti. L'apprendimento è **incrementale** e **migliorativo**: funziona all'interno del paradigma esistente.

*Esempio:* un processo produttivo genera molti difetti. L'impresa analizza le cause (usura di un macchinario, errore di un operatore) e interviene (sostituisce il macchinario, forma l'operatore). Il difetto diminuisce. Ma il modo di fare il prodotto resta lo stesso.

Questo tipo di apprendimento è necessario e prezioso per l'**exploitation** (vedi sotto), ma non salva l'impresa quando il mercato cambia radicalmente.

**Double-Loop Learning (Apprendimento Generativo).**
Gli errori o i problemi spingono a mettere in discussione i presupposti stessi: le regole, gli obiettivi, i modelli mentali, la strategia stessa. È un salto di livello: si cambia non solo il "come", ma il "cosa" e il "perché".

*Esempio:* un'azienda di pellicola fotografica vede i vendite calare. Il single-loop direbbe: "riduciamo i costi, aumentiamo la pubblicità, lanciamo nuovi formati". Il double-loop direbbe: "forse il business della pellicola è morto, dobbiamo reinventarci nel digitale". Kodak ha fatto il primo, è fallita. Fujifilm ha fatto il secondo, è sopravvissuta trasformandosi in cosmetica, chimica, materiali.

Il double-loop è doloroso perché mette in discussione l'identità stessa dell'impresa e l'autostima dei suoi leader (significa ammettere che stavano sbagliando strategia). Ma è l'unico modo per sopravvivere alle discontinuità.

### 5.4 Exploration vs Exploitation

James March, in un articolo celebre del 1991, ha formalizzato una tensione strategica permanente che ogni impresa affronta:

**Exploitation (sfruttamento).**
Massimizzare il rendimento di ciò che l'impresa già sa fare bene. Processi consolidati, prodotti maturi, mercati noti, competenze rodate. L'exploitation genera **profitti oggi**. Le attività di exploitation sono: efficienza, qualità totale, lean manufacturing, riduzione dei costi, ottimizzazione dei processi.

**Exploration (esplorazione).**
Investire in territori nuovi, tecnologie emergenti, nuovi mercati, innovazione radicale, competenze da acquisire. L'exploration **costa oggi** e **prepara il futuro**, ma i risultati sono incerti: non si sa se l'investimento darà frutti. Le attività di exploration sono: R&S di frontiera, sperimentazione, lancio di nuovi prodotti, ingresso in nuovi mercati, sviluppo di nuove competenze.

**Il dilemma.**
Le due attività competono per le stesse risorse (tempo, denaro, attenzione dei manager). Concentrarsi solo sull'exploitation massimizza i profitti di breve ma condanna l'impresa all'obsolescenza: quando il paradigma cambia, non si hanno le competenze per cambiare. Concentrarsi solo sull'exploration brucia risorse senza garantire risultati: si rischia il fallimento finanziario prima che le innovazioni maturino.

Le imprese che sopravvivono nel lungo periodo sono le **imprese ambidestre**, capaci di fare contemporaneamente entrambe le attività. Tipicamente lo fanno separando le due logiche: unità organizzative dedicate all'exploitation (efficienti, strutturate, orientate ai risultati di breve) e unità separate dedicate all'exploration (flessibili, sperimentali, tollerate il fallimento), con il vertice corporativo che le coordina.

Un esempio classico: **Amazon** gestisce con ferrea efficienza il business del retail (exploitation), ma ha lanciato e incubato AWS (cloud computing), Kindle, Alexa, Amazon Prime Video (exploration). Alcune exploration sono fallite; alcune (come AWS) sono diventate il motore di crescita dell'intera azienda.

### 5.5 Conclusione: organizzazione e persone come fonti di vantaggio competitivo

La progettazione organizzativa e la gestione delle risorse umane non sono temi "soft" o accessori: sono fattori critici di successo. Una strategia brillante senza una struttura adeguata fallisce. Una struttura efficiente senza persone motivate non genera valore. Un'impresa che non impara diventa irrilevante.

Il compito del top management è costruire un'organizzazione che sia contemporaneamente:
- **Efficiente** (per fare bene quello che già sa fare).
- **Elastica** (per cambiare quando serve).
- **Apprendente** (per evolvere continuamente).
- **Capace di attrarre e motivare talenti** (senza cui niente si muove).

Questo equilibrio è la chiave del vantaggio competitivo sostenibile nel lungo periodo, ed è il cuore di questo capitolo.

---

## 6. Approfondimento: i Principi della Progettazione Organizzativa

### 6.1 Dalla strategia alla forma: i bisogni strutturali

Le scelte di progettazione organizzativa non nascono nel vuoto: sono la traduzione operativa dei **bisogni strutturali** emersi nella fase di analisi strategica. Ogni decisione di portafoglio (Corporate) e ogni decisione competitiva (Business) genera implicazioni sulla forma organizzativa. Il processo si articola in tre passaggi logici:

1. **Individuazione delle combinazioni di caratteristiche organizzative**: si esplorano le possibili combinazioni di centralizzazione/decentramento, formalizzazione/flessibilità, specializzazione tecnica/generalismo, criteri di raggruppamento.
2. **Definizione della forma organizzativa più idonea**: tra le combinazioni candidate si sceglie quella che meglio risponde alle esigenze di mercato, tecnologia, dimensione, diversificazione.
3. **Analisi delle interazioni tra struttura e altri sotto-sistemi aziendali**: la struttura interagisce con tecnologia, meccanismi operativi, ruoli, risorse umane e ambiente esterno (modello del sistema organizzativo aziendale).

### 6.2 Le caratteristiche organizzative fondamentali

La progettazione organizzativa lavora su un insieme di **leve di design** che definiscono il carattere della struttura. Le principali sono:

| Caratteristica | Descrizione | Effetto se elevata | Effetto se bassa |
|----------------|-------------|--------------------|------------------|
| **Specializzazione** | Grado di divisione del lavoro in compiti specialistici | Alta efficienza tecnica, profondità di competenze, ma rigidità e silos | Maggior versatilità, ma minor profondità tecnica |
| **Formalizzazione** | Grado di standardizzazione di regole, procedure, comportamenti scritti | Prevedibilità, controllo, riduzione discrezionalità | Flessibilità, ma rischio di arbitrarietà |
| **Centralizzazione** | Concentrazione del potere decisionale al vertice | Coerenza strategica, controllo forte | Reattività locale, decentramento decisionale |
| **Gerarchia (Span of Control)** | Numero di livelli e ampiezza del controllo manageriale | Span ristretto = controllo capillare, costi alti | Span ampio = velocità ma minor supervisione |
| **Aggregazione** | Criterio con cui si raggruppano le unità (funzione, prodotto, geografia, cliente, processo) | Determina la forma strutturale (funzionale, divisionale, matriciale) | — |
| **Coordinamento** | Meccanismi di integrazione tra unità (verticali e orizzontali) | Riduce silos, favorisce innovazione | Rischio di frammentazione |

### 6.3 Il modello sistemico: Strategia – Struttura – Ambiente

La struttura non è un disegno isolato: è un nodo di un **sistema organizzativo aziendale** che mette in relazione sei dimensioni con l'ambiente esterno:

| Dimensione | Variabili chiave |
|------------|------------------|
| **Strategia** | Mantenimento, espansione, diversificazione |
| **Struttura** | Accentramento, decentramento, integrazione, differenziazione |
| **Tecnologia** | Rigidità, flessibilità, variabilità |
| **Meccanismi operativi** | Politiche, procedure, sistemi gestionali (pianificazione, controllo, MBO, sistema informativo) |
| **Ruoli** | Chiarezza, possibilità di interpretazione soggettiva, prescrittività |
| **Risorse umane** | Motivazioni, valori, conoscenze |

Tutte e sei le dimensioni interagiscono reciprocamente e con l'ambiente esterno (mercati, tecnologia, regolazione, concorrenza). La coerenza interna del sistema (*organizational fit*) è condizione necessaria perché la strategia produca risultati.

### 6.4 Le Strategic Business Unit: determinanti e articolazione strategica

Una **Strategic Business Unit (SBU)** è il livello di analisi e gestione strategica al quale viene formulata e implementata una strategia competitiva specifica. Le **determinanti** che la identificano sono tre:

- **Area di mercato** servita (segmenti di clienti, area geografica);
- **Gamma di prodotti o servizi** offerta;
- **Risorse e competenze distintive** che ne sostengono il vantaggio competitivo.

Da queste determinanti derivano quattro caratteristiche operative dell'SBU:
1. **Obiettivi specifici** distinti rispetto al resto del gruppo;
2. **Determinazione e implementazione di una strategia specifica**;
3. **Identità organizzativa** (cultura, processi, persone);
4. **Integrazione con le altre SBU** del portafoglio.

La strategia di SBU si articola a sua volta in quattro sotto-strategie coerenti, partendo dagli **obiettivi dell'unità** e dai **nodi competitivi chiave**:

| Sotto-strategia | Oggetto |
|-----------------|---------|
| Strategia competitiva | Posizionamento, vantaggio di costo o differenziazione |
| Strategia di mercato | Segmentazione, targeting, marketing mix |
| Strategia di produzione | Scelte di make-or-buy, capacità, tecnologie |
| Strategia di acquisizione e sviluppo delle risorse | Risorse umane, finanziarie, tecnologiche, di conoscenza |

---

## 7. I Criteri di Raggruppamento e i Modelli Organizzativi: quadro di sintesi

### 7.1 I tre criteri base di raggruppamento

Il raggruppamento delle unità in macro-unità organizzative può seguire tre criteri fondamentali, che danno luogo alle altrettante famiglie di strutture:

| Criterio | Logica di aggregazione | Forma organizzativa che genera |
|----------|------------------------|--------------------------------|
| **Funzionale** | In base alle conoscenze e capacità, alle funzioni svolte | Struttura funzionale |
| **Divisionale** | In base agli output, alla categoria di clienti o all'area geografica | Struttura multi-divisionale (M-form) |
| **Matriciale** | Per progetti/processi, sovrapponendo due criteri di specializzazione | Struttura a matrice |

### 7.2 Il disegno della struttura: tre fasi operative

Operativamente, progettare una struttura significa rispondere in sequenza a tre domande:

1. **Definizione delle attività**: quali compiti, processi, funzioni l'organizzazione deve svolgere?
2. **Relazioni di riporto organizzativo**: chi risponde a chi, lungo quale catena di comando?
3. **Raggruppamento in dipartimenti/divisioni**: come si aggregano le persone e le attività in unità formali?

### 7.3 Tabella comparativa dei modelli strutturali

| Caratteristica | Semplice | Funzionale | Funzionale modificata | Divisionale (M-form) | Matriciale |
|----------------|----------|------------|------------------------|----------------------|------------|
| **Criterio di aggregazione** | Nessuno (vertice + operativi) | Funzioni aziendali | Funzioni + ruoli integratori | Prodotto / mercato / area geografica | Funzione × Prodotto/Progetto |
| **Centralizzazione** | Massima | Alta | Alta con apertura trasversale | Bassa (decentramento sulle divisioni) | Bilanciata sulle due assi |
| **Formalizzazione** | Bassa | Alta | Alta | Alta (interna alle divisioni) | Alta e duale |
| **Specializzazione** | Bassa | Molto alta | Alta | Media (distribuita) | Alta e bilanciata |
| **Elasticità operativa** | Alta | Bassa | Media | Alta | Alta |
| **Elasticità strategica** | Alta (ma per dimensioni piccole) | Bassa | Media | Alta | Molto alta |
| **Elasticità strutturale** | Massima | Bassa | Media | Media | Massima |
| **Quando si usa** | Start-up, micro-imprese | Medie imprese mono-business, ambiente stabile, prodotti maturi | Medie imprese con bisogno di coordinamento per prodotto | Grandi imprese diversificate, ambienti instabili | Dimensioni medio-grandi, prodotti a breve ciclo, sviluppo tecnologico interno |
| **Vantaggio principale** | Velocità, coesione | Economie di scala, efficienza, profondità tecnica | Recupera coordinamento orizzontale | Reattività, responsabilità di profitto | Coordinamento massimo, condivisione risorse |
| **Svantaggio principale** | Non scala | Silos, lentezza, sovraccarico vertice | Conflitti tra integratori e capi funzionali | Duplicazione costi, conflitti interdivisionali | Autorità duale, ambiguità, riunioni infinite |

### 7.4 Il Modello Funzionale: efficienza ed economie di scala

Il **modello funzionale** è l'assetto organizzativo più diffuso nelle imprese di medie dimensioni. Prevede la **ripartizione delle responsabilità al primo livello organizzativo secondo le funzioni fondamentali dell'impresa** (produzione, marketing, vendite, R&S, finanza, HR, IT). Le decisioni rimangono accentrate ai livelli alti della gerarchia, ma con partecipazione degli organi direttivi funzionali.

**Caratteristiche distintive.** Privilegia lo svolgimento dell'attività in condizioni di **efficienza**, sfruttando le economie di scala e di esperienza garantite dalla specializzazione. Il monitoraggio delle condizioni di efficienza richiede un coordinamento continuo attraverso un **forte accentramento delle responsabilità** e un'**accurata definizione di procedure organizzative** e altri meccanismi operativi.

**Numero di funzioni secondarie**: dipende da
- grado di varietà/complessità dell'organizzazione,
- dimensione globale,
- tipo di interdipendenze e coordinamento richieste,
- grado di ricorso all'esternalizzazione (outsourcing).

**Quando è più adatto?** Dimensioni piccole-medie; gamma ristretta di prodotti a lungo ciclo vitale; tecnologia stabile; ambiente stabile; strategie di sviluppo e penetrazione nei mercati.

**Vantaggi e svantaggi del modello funzionale**

| Punti di forza | Punti di debolezza |
|----------------|--------------------|
| Facilita le economie di scala all'interno delle unità funzionali | Tempo di risposta lento di fronte ai cambiamenti ambientali |
| Permette lo sviluppo di conoscenze e capacità approfondite | Causa accumulo di decisioni al vertice e sovraccarico della gerarchia |
| Permette il conseguimento di obiettivi funzionali | Scarso coordinamento orizzontale tra le unità organizzative |
| È preferibile in presenza di un solo prodotto o pochi prodotti | Si traduce in una minore innovazione |
| | Implica una visione ristretta degli obiettivi organizzativi |

### 7.5 Il Modello Funzionale Modificato: meccanismi di coordinamento e ruoli integratori

La rigidità del modello funzionale può essere recuperata con appositi accorgimenti volti a rafforzare il coordinamento orizzontale. La slide del corso identifica **quattro principali meccanismi di coordinamento**:

1. **Le regole e le procedure** (standardizzazione dei processi);
2. **La programmazione degli output funzionali** (allineamento tramite obiettivi e budget);
3. **Il ricorso ai livelli gerarchici superiori per appianare i contrasti** (escalation);
4. **Il ricorso a unità di coordinamento o gruppi di lavoro temporanei** costituiti da persone provenienti dalle funzioni da integrare (task force, comitati interfunzionali).

In aggiunta, la struttura funzionale si "modifica" in due direzioni complementari:
- **Articolazione di secondo livello in base a criteri di prodotto/mercato** (sub-aggregazioni interne alle direzioni);
- **Ricorso a ruoli integratori** trasversali.

**I ruoli integratori** (Product Manager, Project Manager, Brand Manager) hanno tre caratteristiche definitorie:
- sono **figure responsabilizzate su determinati task**;
- **non godono di autorità gerarchica** sui referenti funzionali a cui fanno riferimento;
- hanno il compito di **coordinare e dirigere il flusso di lavoro**, diffondendo una comune ottica trans-funzionale.

### 7.6 Il Modello Divisionale (M-form): elasticità operativa e strategica

Il **modello divisionale** prevede la ripartizione delle responsabilità al primo livello organizzativo secondo criteri di **prodotto/mercato/area geografica**. È un modello che gode di **elasticità operativa e strategica**, poiché ogni divisione riproduce al proprio interno le condizioni operative ed organizzative tipiche di una singola impresa autonoma e viene gestita come un **centro di profitto**.

**Risponde alle seguenti esigenze**:
- crescita delle dimensioni aziendali;
- proliferazione di prodotti e/o servizi;
- sviluppo tecnologico;
- ambienti tendenzialmente instabili;
- strategie di differenziazione.

**Il grado di divisionalizzazione**. È la scelta di quanta autonomia attribuire alle divisioni rispetto alle Direzioni Centrali. Determina:
- l'autonomia delle singole divisioni;
- le attività svolte dalle Direzioni Centrali nello svolgimento di alcune funzioni aziendali;
- contempera le esigenze di flessibilità delle singole divisioni e le necessità di controllo, coordinamento e sfruttamento delle interrelazioni garantito dalle Funzioni Centrali.

**Esempio: la funzione Approvvigionamenti**

| Soluzione | Logica | Vantaggio | Svantaggio |
|-----------|--------|-----------|------------|
| **Accentramento** | Diversi prodotti richiedono materiali omogenei → tutte le funzioni di acquisto al centro (grandi lotti); le divisioni gestiscono solo le scorte operative | Economie di acquisto | Possibili ritardi rispetto alle esigenze di produzione delle divisioni |
| **Decentramento** | Fonti di acquisto molto diverse → tutte le funzioni di acquisto alle divisioni (piccoli lotti); la Direzione Centrale si occupa solo di studi e ricerche di mercato sui materiali | Gestione ottimale dei tempi di approvvigionamento | Diseconomie di acquisto |
| **Soluzioni intermedie** | Combinazioni miste (categorie strategiche al centro, operative alle divisioni) | Bilanciamento | Richiede governance attenta |

**Vantaggi e svantaggi del modello divisionale**

| Punti di forza | Punti di debolezza |
|----------------|--------------------|
| Adatto ai cambiamenti veloci in ambiente instabile | Elimina le economie di scala dei dipartimenti funzionali |
| Conduce alla soddisfazione del cliente, perché responsabilità di prodotto e punti di contatto sono chiari | Porta a scarso coordinamento delle linee di prodotto |
| Elevato coordinamento tra le varie funzioni (interno alla divisione) | Elimina approfondita competenza e specializzazione tecnica |
| Consente di adattarsi alle differenze di prodotti, regioni, clienti | Rende difficile l'integrazione e la standardizzazione delle linee di prodotto |
| Adatto a grandi organizzazioni con molti prodotti | |
| Decentra il processo decisionale | |

### 7.7 Il Modello Matriciale: la duplicità di autorità

Il **modello matriciale** massimizza congiuntamente sia gli obiettivi delle unità funzionali sia quelli dei progetti/prodotti, mediante la definizione di una **matrice di responsabilità**. Si caratterizza per:
- **adozione simultanea di due (o più) criteri di specializzazione**;
- **corrispondenza tra ogni criterio di specializzazione e una specifica linea di autorità**;
- **elevata elasticità strutturale**.

**Quando è più efficace.** Imprese di dimensioni medio-grandi; prodotti a breve ciclo di vita; necessità di svolgere attività **interne** di sviluppo tecnologico; strategie di segmentazione e forte differenziazione.

**Implicazioni organizzative.** Il modello offre spunti rilevanti su motivazione e sviluppo delle risorse umane:
- consente il raccordo tra il **contributo specialistico** del singolo e l'**obiettivo di risultato complessivo**;
- la **duplicità di autorità** può comportare problemi di bilanciamento di potere tra le diverse dimensioni della matrice (asse funzionale vs asse di prodotto/progetto).

**Vantaggi e svantaggi del modello matriciale**

| Punti di forza | Punti di debolezza |
|----------------|--------------------|
| Realizza il coordinamento necessario per soddisfare le richieste dei clienti | Autorità duale frustrante e potenzialmente confusa |
| Condivisione flessibile delle risorse umane tra prodotti | Richiede partecipanti con buone capacità relazionali e formazione |
| Adatto a decisioni complesse e cambiamenti frequenti in ambiente instabile | Comporta frequenti riunioni e sessioni di risoluzione dei conflitti |
| Offre opportunità per lo sviluppo di abilità funzionali e di prodotto | Richiede grande sforzo per mantenere l'equilibrio tra poteri |
| Adatto per organizzazioni di medie dimensioni con più prodotti | |

---

## 8. Le Caratteristiche del Modello Semplice

Il **modello semplice** (o elementare) presenta caratteristiche specifiche che meritano una sintesi formale, distinta dalla narrazione iniziale.

**Struttura.** Esistono solo due livelli di organi: il livello centrale (vertice) da cui dipendono tutti gli organi operativi. La struttura organizzativa è scarsamente formalizzata; è diffusa nelle aziende a conduzione "familiare" o di piccole dimensioni (anche in termini di estensione geografica); si adatta ad aziende con una sola linea di prodotti.

**Vantaggi/caratteristiche distintive.**
- Scarsa formalizzazione;
- Solo Vertice e nucleo operativo;
- Alta centralizzazione;
- Orientamento di tutti alla gestione complessiva;
- Bassa specializzazione.

---

## 9. La Gestione delle Risorse Umane: dal personale al capitale umano

### 9.1 Capitale umano e "liquidità" intangibile

Il passaggio concettuale fondamentale della disciplina HR moderna è quello dalle **risorse umane** al **capitale umano**: le persone non sono più un costo da minimizzare, ma un capitale intangibile da sviluppare e proteggere.

Il capitale intangibile si manifesta attraverso la **liquidità organizzativa**, intesa come capacità di mobilitare conoscenza e competenze in funzione delle esigenze strategiche. Le sue componenti sono due:
- **Competenze** (capacità tecniche, manageriali, relazionali);
- **Qualità** (motivazione, valori, comportamenti).

La liquidità può essere sviluppata attraverso interventi volti a stimolare:
- **fedeltà del personale** (retention);
- **cultura organizzativa** condivisa;
- **ricambio generazionale** ordinato.

### 9.2 Il ciclo HR: gli strumenti di gestione del personale

La gestione delle risorse umane si articola in un **ciclo** completo che accompagna il lavoratore dall'ingresso all'uscita dall'organizzazione. Le fasi principali sono sei:

| Fase HR | Oggetto | Strumenti tipici |
|---------|---------|------------------|
| **Reclutamento e selezione** | Attrarre e scegliere i candidati | Job description, employer branding, assessment center, colloqui strutturati, test psicometrici |
| **Formazione (training & development)** | Sviluppare le competenze tecniche e manageriali | Training on-the-job, aula, e-learning, coaching, mentoring, academy aziendali |
| **Valutazione delle prestazioni** | Misurare la performance individuale e di team | MBO, performance appraisal, feedback 360°, OKR |
| **Retribuzione e incentivazione** | Definire il sistema compensativo e la "people strategy" | RAL, MBO bonus, stock option, benefit, welfare aziendale |
| **Sviluppo della carriera** | Pianificare i percorsi di crescita | Job rotation, succession planning, piani di carriera, mobilità internazionale |
| **Separazione (off-boarding)** | Gestire l'uscita (pensionamento, dimissioni, licenziamento) | Outplacement, exit interview, piani di esodo |

### 9.3 La formazione

La **formazione** è uno degli strumenti chiave di gestione del personale: serve a colmare gap di competenze, supportare le transizioni di ruolo, alimentare la learning organization. Oltre a sviluppare hard skill (competenze tecniche), nelle imprese moderne riveste un ruolo crescente la formazione su soft skill (comunicazione, leadership, lavoro in team) e su valori aziendali.

### 9.4 Il sistema compensativo e la "people strategy"

Il **sistema compensativo** è una leva di gestione strategica. Gli obiettivi di un sistema retributivo coerente con la **people strategy** sono cinque:

1. **Mantenere attrattività e competitività** nei confronti del mercato del lavoro (benchmark salariale);
2. **Accrescere la performance complessiva** e riconoscere i contributi individuali;
3. **Rinforzare i comportamenti organizzativi coerenti** con le strategie aziendali e con il processo motivazionale delle persone;
4. **Mantenere/accrescere il grado di flessibilità del costo del lavoro** (componente fissa vs variabile);
5. **Comunicare i valori dell'organizzazione** per allineare la visione del management e delle persone.

### 9.5 I percorsi di carriera (sintesi tassonomica)

Le slide del corso codificano tre tipologie di percorso, che ampliano lo schema già discusso:

| Percorso | Logica | Effetto sulle competenze |
|----------|--------|--------------------------|
| **Lineare** | Avanzamento verticale all'interno della stessa funzione/area | Profondità tecnica, specializzazione |
| **Esperto** | Crescita all'interno di un ruolo specialistico, senza passaggio gerarchico-manageriale | Riconoscimento dell'eccellenza tecnica (es. dual ladder) |
| **Spirale** | Combinazione di mobilità verticale e orizzontale, con cambi di funzione e geografia | Visione sistemica, leadership trasversale |

### 9.6 Il Management By Objectives: criteri operativi e indicatori

I requisiti formali degli obiettivi MBO secondo la slide del corso sono cinque. Gli obiettivi devono essere:

1. **prioritari** per le strategie aziendali;
2. **significativamente correlati con le prestazioni individuali**, influenzabili dalla persona incentivata;
3. **realistici, ambiziosi e sfidanti** ma comunque raggiungibili;
4. **misurabili e controllabili** attraverso i sistemi aziendali;
5. **coerenti nella dimensione temporale**.

A ogni obiettivo deve essere associato un indicatore di performance adeguato e coerente (Fontana, 1994). Le **sei famiglie di indicatori** sono:

| Tipologia di indicatore | Esempi |
|-------------------------|--------|
| **Reddituali** | Margine, EBITDA, ROS |
| **Finanziari** | Cash flow, capitale circolante, indebitamento |
| **Fisici** | Volumi prodotti/venduti, scarti, difettosità |
| **Temporali** | Tempo di consegna, time-to-market |
| **Strategici** | Quota di mercato, numero di nuovi prodotti |
| **Di integrazione** | Cooperazione interfunzionale, KPI condivisi |

### 9.7 Il calcolo dell'incentivo MBO: schema operativo

Lo schema MBO classico utilizza un sistema di **ponderazione e coefficienti di incentivazione** per trasformare il livello di raggiungimento degli obiettivi in un bonus monetario.

**Variabili dello schema:**
- A_i = obiettivo i-esimo;
- B_i = peso dell'obiettivo (∑B_i = 1);
- C_i = valore di esercizio precedente (baseline);
- D_i = budget/target dell'anno;
- F_i = livelli di risultato a tre soglie (1, 2, 3);
- G_i = consuntivo effettivo;
- H_i = coefficiente di incentivazione associato al livello raggiunto (es. 80% / 100% / 110%);
- I_i = ponderazione finale = B_i × H_i.

**Indice totale di raggiungimento**: ∑ I_i.

**Incentivo maturato** = Bonus target × Indice totale.

**Esempio di regole di incentivo (slide del corso):**

| Livello di raggiungimento | Coefficiente H_i |
|---------------------------|------------------|
| < 90% del target | 80% |
| = target (100%) | 100% |
| > target | 110% |

**Esempio numerico (RAL €50.000, Bonus target = 20% della RAL = €10.000):**

| Obiettivo | Peso B_i | Target | Consuntivo | Raggiungimento | H_i | B_i × H_i |
|-----------|----------|--------|-----------|----------------|------|-----------|
| Aumento fatturato | 0,5 | €1.000.000 | €1.050.000 | 105% (>) | 110% | 0,55 |
| Aumento clienti | 0,3 | 100 | 90 | 90% (=) | 100% | 0,30 |
| Customer satisfaction | 0,2 | 85% | 85% | 100% (=) | 100% | 0,20 |
| **Totale indice** | **1,0** | | | | | **1,05** |

Incentivo maturato = €10.000 × 1,05 = **€10.500**.

---

## 10. L'Apprendimento Organizzativo: dimensioni della conoscenza

### 10.1 Dimensioni della conoscenza

Lo sviluppo della conoscenza organizzativa si basa sul processo di trasformazione della conoscenza lungo due dimensioni (Nonaka–Takeuchi):

| Dimensione | Polo 1 | Polo 2 |
|------------|--------|--------|
| **Natura** | Tacita (incorporata nelle persone e nei contesti) | Esplicita (codificata in procedure, manuali, documenti) |
| **Soggetto** | Individuale | Collettiva |

Il knowledge management agisce sui passaggi tra i quadranti (socializzazione, esternalizzazione, combinazione, internalizzazione) per trasformare conoscenza tacita-individuale in conoscenza esplicita-collettiva, aumentando il capitale intellettuale dell'organizzazione.

Le **alleanze strategiche** rappresentano un canale fondamentale di apprendimento inter-organizzativo: consentono di acquisire competenze tacite altrimenti non accessibili sul mercato.

### 10.2 La Learning Organization: definizione di Senge

Senge definisce la learning organization come *"an organisation in which everyone is engaged in identifying and solving problems, enabling the organisation to continuously experiment, improve, and increase its capability"* (*The Fifth Discipline*, 1990). Aumenta flessibilità e adattabilità in ambienti in rapida evoluzione, ottimizzando il flusso di conoscenza interno.

### 10.3 Le cinque leve della Learning Organization

| # | Disciplina | Significato operativo |
|---|------------|------------------------|
| 1 | **Systems thinking** | Vedere l'organizzazione come sistema complesso di interdipendenze, non come somma di parti |
| 2 | **Personal mastery** | Sviluppo continuo delle competenze e della maturità personale |
| 3 | **Mental models** | Esaminare e mettere in discussione i modelli mentali con cui si interpreta la realtà |
| 4 | **Shared vision** | Costruire una visione del futuro condivisa che guidi le azioni individuali |
| 5 | **Team learning** | Sviluppare la capacità di pensare e apprendere insieme come team |

### 10.4 Single-Loop vs Double-Loop Learning (Argyris): schema sintetico

| Caratteristica | Single-Loop (Adaptive Learning) | Double-Loop (Generative Learning) |
|----------------|--------------------------------|-----------------------------------|
| **Cosa si modifica** | La soluzione operativa | I presupposti, gli obiettivi, i modelli mentali |
| **Tipo di apprendimento** | Adattivo, incrementale | Generativo, trasformativo |
| **Output** | Soluzione migliorata | Soluzione "more effective" basata su nuove conoscenze |
| **Quando funziona** | Ambiente stabile, paradigma valido | Discontinuità, cambio di paradigma |
| **Rischio se prevale** | Obsolescenza in caso di cambiamento radicale | Costo elevato e instabilità |

### 10.5 Exploration vs Exploitation: il trade-off di March

Compromesso strategico fondamentale tra:
- **Sfruttare la base di conoscenza esistente** (exploitation);
- **Esplorare nuove possibilità** (exploration).

**Patologie possibili (miopia)**:
- Aziende che **esplorano senza sfruttare**: costo di ricerca elevato, mancata monetizzazione delle scoperte.
- Imprese che **sfruttano senza esplorare**: equilibrio subottimale, mancanza di rinnovamento, rischio di obsolescenza.

L'**impresa ambidestra** è quella che riesce a tenere insieme entrambe le logiche, separandole organizzativamente (unità di exploitation e unità di exploration) e coordinandole dal vertice.

---

## 11. Il Caso Robin Hood: chiavi di lettura organizzativa

### 11.1 Le quattro domande guida del caso

Il caso si lascia leggere attraverso quattro domande che ricalcano la sequenza di analisi organizzativa:

1. **Qual è la mission di Robin Hood?** (obiettivo finale e identità del gruppo);
2. **Chi sono le persone attorno a Robin Hood e che ruoli ricoprono?** (mappatura dei ruoli e delle competenze);
3. **Quali sono i problemi che Robin Hood e il suo team riscontrano?** (diagnosi organizzativa: span of control, risorse, allineamento);
4. **Quali sono le soluzioni organizzative possibili per raggiungere gli obiettivi?** (alternative strutturali e gestionali).

### 11.2 I ruoli dei luogotenenti: una proto-struttura funzionale

| Ruolo | Funzione | Equivalente aziendale moderno |
|-------|----------|-------------------------------|
| **Will Scarlett** | Intelligence e scouting (osservare lo Sceriffo, raccogliere informazioni sui mercanti e sugli esattori) | Business intelligence, strategy & insight |
| **Little John** | Disciplina e addestramento (mantenere la coesione, tenere alte le competenze di tiro con l'arco) | HR, formazione, operations |
| **Scarlock** | Finanza (trasformare il bottino in moneta, ripagare i debiti, custodire il surplus) | CFO, tesoreria |
| **Figlio di Much the Miller** | Approvvigionamento del gruppo in crescita | Supply chain, procurement |

### 11.3 I tre macro-problemi organizzativi del caso

| Problema | Natura | Soluzione organizzativa |
|----------|--------|-------------------------|
| **Crescita incontrollata e perdita di disciplina** | Span of control esploso, sconoscenza reciproca, calo della vigilanza | Decentramento per specializzazione, introduzione di luogotenenti, regole formalizzate |
| **Scarsità di risorse** | La selvaggina scarseggia, i mercanti evitano la foresta, i ricavi calano e i costi salgono | Diversificazione delle fonti di reddito, nuova politica fiscale (tassa fissa di transito), gestione delle scorte |
| **Disallineamento strategico** | I luogotenenti non condividono il cambio di politica fiscale; rischio di rottura culturale | Allineamento mission-azione, comunicazione interna, gestione del cambiamento |

### 11.4 Lo Sceriffo come benchmark competitivo

Mentre Robin attraversa una crisi di crescita, **lo Sceriffo si organizza meglio**: sfrutta connessioni politiche, ottiene rinforzi, gode dell'appoggio del Principe Giovanni. È il classico "concorrente" che cresce più velocemente quando l'impresa rallenta. Robin sperava che la disorganizzazione e il malcontento popolare avrebbero portato alla destituzione dello Sceriffo, ma il calcolo si rivela errato. Il caso mostra che **non basta avere ragione strategica: serve un'organizzazione capace di eseguire**.

---

## 12. Sintesi finale: la coerenza Strategia-Struttura-Persone

Il messaggio integrato del capitolo si può cristallizzare in tre tesi:

1. **La struttura segue la strategia, ma la influenza a sua volta** (Chandler, *Strategy and Structure*, 1962). Le scelte di Corporate e Business Strategy generano bisogni strutturali, ma le strutture esistenti vincolano e a volte modificano le strategie attuabili.
2. **Non esiste la struttura "giusta" in assoluto**: esiste la struttura coerente con dimensione, diversificazione, ambiente competitivo, tecnologia, risorse umane (approccio della *contingency theory*).
3. **L'allineamento Strategia–Struttura–Persone è il vero vantaggio competitivo sostenibile**. Una strategia brillante senza una struttura adeguata fallisce; una struttura efficiente senza persone motivate non genera valore; un'impresa che non impara diventa irrilevante, indipendentemente da quanto sia ben disegnata oggi.
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
//  GRAPH 1 — SPAN OF CONTROL: livelli gerarchici vs span
// ══════════════════════════════════════════════════════════════
function SpanOfControlGraph() {
  const [N, setN] = useState(1000);    // total employees
  const [span, setSpan] = useState(6); // span of control

  // levels = log(N)/log(span)
  const levels = Math.log(N) / Math.log(span);

  const xMin = 3, xMax = 15;
  const yMin = 0, yMax = 10;

  // curve: levels as function of span at current N
  const pts = [];
  for (let s = xMin; s <= xMax; s += 0.1) {
    pts.push([toX(s, xMin, xMax), toY(Math.log(N) / Math.log(s), yMin, yMax)]);
  }
  const path = 'M ' + pts.filter(p => p[1] >= PT).map(p => p.join(',')).join(' L ');

  const structureType = levels > 6 ? 'Tall (alta)' : levels < 4 ? 'Flat (piatta)' : 'Intermedia';
  const structureColor = levels > 6 ? '#dc2626' : levels < 4 ? '#16a34a' : '#f59e0b';

  return (
    <div className="graph-block">
      <h4 className="graph-title">Span of control: livelli gerarchici = log(N) / log(span)</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          <Axes xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax} xLabel="span (subordinati/manager)" yLabel="livelli" xFmt={v => v.toFixed(0)} yFmt={v => v.toFixed(0)} />
          <path d={path} fill="none" stroke="#0ea5e9" strokeWidth={2.2} />
          {/* reference horizontal bands */}
          <line x1={PL} y1={toY(4, yMin, yMax)} x2={PL + cW} y2={toY(4, yMin, yMax)} stroke="#16a34a" strokeWidth={0.8} strokeDasharray="2,2" />
          <text x={PL + cW - 50} y={toY(4, yMin, yMax) - 4} fontSize={9} fill="#16a34a">flat (≤4)</text>
          <line x1={PL} y1={toY(6, yMin, yMax)} x2={PL + cW} y2={toY(6, yMin, yMax)} stroke="#dc2626" strokeWidth={0.8} strokeDasharray="2,2" />
          <text x={PL + cW - 50} y={toY(6, yMin, yMax) - 4} fontSize={9} fill="#dc2626">tall (≥6)</text>
          {/* current point */}
          <line x1={toX(span, xMin, xMax)} y1={PT + cH} x2={toX(span, xMin, xMax)} y2={toY(levels, yMin, yMax)} stroke="#0ea5e9" strokeDasharray="3,3" strokeWidth={1.2} />
          <line x1={PL} y1={toY(levels, yMin, yMax)} x2={toX(span, xMin, xMax)} y2={toY(levels, yMin, yMax)} stroke="#0ea5e9" strokeDasharray="3,3" strokeWidth={1.2} />
          <circle cx={toX(span, xMin, xMax)} cy={toY(levels, yMin, yMax)} r={6} fill="#0ea5e9" stroke="#fff" strokeWidth={2} />
        </svg>
        <div className="graph-controls">
          <SliderControl label="Numero totale dipendenti" symbol="N" value={N} min={50} max={5000} step={50} onChange={setN} color="#0ea5e9" fmt={v => v.toFixed(0)} />
          <SliderControl label="Span of control" symbol="s" value={span} min={3} max={15} step={1} onChange={setSpan} color="#a855f7" fmt={v => v.toFixed(0)} />
          <div className="result-box">
            <div className="result-row"><strong>Livelli gerarchici</strong> <span>{levels.toFixed(1)}</span></div>
            <div className="result-row"><strong>Tipo struttura</strong> <span style={{ color: structureColor }}>{structureType}</span></div>
            <div className="result-row"><strong>Manager totali ≈</strong> <span>{Math.round(N / span)}</span></div>
          </div>
          <div className="insight-mini">Strutture piatte (span ampio, pochi livelli) sono veloci e flessibili ma offrono poco controllo. Strutture tall (span stretto, molti livelli) garantiscono controllo ma sono lente e costose.</div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAPH 2 — MINTZBERG: 5 configurazioni organizzative
// ══════════════════════════════════════════════════════════════
function MintzbergGraph() {
  const [eta, setEta] = useState(5);         // età (1-10)
  const [dim, setDim] = useState(5);         // dimensione (1-10)
  const [tec, setTec] = useState(5);         // tecnologia (1-10)
  const [amb, setAmb] = useState(5);         // ambiente turbolento (1-10)
  const [pot, setPot] = useState(5);         // concentrazione potere (1-10)

  // score for each Mintzberg configuration based on dimensions
  // weights derived from the theory:
  //  - Struttura Semplice: giovane, piccola, tecn. semplice, ambiente dinamico, potere concentrato
  //  - Burocrazia Meccanica: vecchia, grande, tecn. regolare, ambiente stabile, potere medio
  //  - Burocrazia Professionale: variabile età, grande, tecn. complessa, ambiente stabile, potere distribuito
  //  - Soluzione Divisionale: vecchia, molto grande, tecn. divisibile, ambiente diversificato, potere medio
  //  - Adhocrazia: giovane/media, media, tecn. molto complessa, ambiente turbolento, potere distribuito
  const configs = [
    { name: 'Struttura Semplice',         score: (11-eta)*1.2 + (11-dim)*1.5 + (11-tec)*1.0 + amb*0.8 + pot*1.5, color: '#0ea5e9' },
    { name: 'Burocrazia Meccanica',       score: eta*1.2 + dim*1.5 + (11-tec)*0.8 + (11-amb)*1.5 + pot*0.5,        color: '#a855f7' },
    { name: 'Burocrazia Professionale',   score: eta*0.6 + dim*1.0 + tec*1.5 + (11-amb)*1.0 + (11-pot)*1.2,        color: '#16a34a' },
    { name: 'Soluzione Divisionale',      score: eta*1.0 + dim*1.8 + tec*0.8 + amb*0.6 + pot*0.5,                  color: '#f59e0b' },
    { name: 'Adhocrazia',                 score: (11-eta)*0.8 + dim*0.6 + tec*1.8 + amb*1.5 + (11-pot)*1.2,        color: '#dc2626' },
  ];

  const maxScore = Math.max(...configs.map(c => c.score));
  const dominantIdx = configs.findIndex(c => c.score === maxScore);

  // bars
  const barH = 28;
  const barGap = 8;
  const barXStart = PL + 10;
  const barWMax = cW - 20;
  const yTop = PT + 6;

  return (
    <div className="graph-block">
      <h4 className="graph-title">Configurazioni di Mintzberg: la dominante in funzione di età, dimensione, tecnologia, ambiente, potere</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          {/* axis line */}
          <line x1={barXStart} y1={yTop} x2={barXStart} y2={yTop + 5*(barH+barGap)} stroke="#475569" strokeWidth={1.5} />
          {configs.map((c, i) => {
            const w = (c.score / maxScore) * barWMax;
            const isDominant = i === dominantIdx;
            return (
              <g key={i}>
                <rect x={barXStart} y={yTop + i*(barH+barGap)} width={w} height={barH} fill={c.color} opacity={isDominant ? 0.95 : 0.45} stroke={isDominant ? '#1e293b' : 'none'} strokeWidth={isDominant ? 2 : 0} rx={3} />
                <text x={barXStart + 6} y={yTop + i*(barH+barGap) + barH/2 + 4} fontSize={11} fill="#fff" fontWeight={isDominant ? 700 : 500}>{c.name}</text>
                <text x={barXStart + w + 5} y={yTop + i*(barH+barGap) + barH/2 + 4} fontSize={10} fill="#475569">{c.score.toFixed(1)}</text>
                {isDominant && (
                  <text x={barXStart + w + 30} y={yTop + i*(barH+barGap) + barH/2 + 4} fontSize={10} fill="#dc2626" fontWeight={700}>★ dominante</text>
                )}
              </g>
            );
          })}
        </svg>
        <div className="graph-controls">
          <SliderControl label="Età organizzazione" symbol="età" value={eta} min={1} max={10} step={1} onChange={setEta} color="#0ea5e9" fmt={v => v.toFixed(0)} />
          <SliderControl label="Dimensione" symbol="dim" value={dim} min={1} max={10} step={1} onChange={setDim} color="#a855f7" fmt={v => v.toFixed(0)} />
          <SliderControl label="Complessità tecnologia" symbol="tec" value={tec} min={1} max={10} step={1} onChange={setTec} color="#16a34a" fmt={v => v.toFixed(0)} />
          <SliderControl label="Turbolenza ambiente" symbol="amb" value={amb} min={1} max={10} step={1} onChange={setAmb} color="#f59e0b" fmt={v => v.toFixed(0)} />
          <SliderControl label="Concentrazione potere" symbol="pot" value={pot} min={1} max={10} step={1} onChange={setPot} color="#dc2626" fmt={v => v.toFixed(0)} />
          <div className="result-box">
            <div className="result-row"><strong>Configurazione dominante</strong> <span style={{ color: configs[dominantIdx].color }}>{configs[dominantIdx].name}</span></div>
          </div>
          <div className="insight-mini">Le 5 configurazioni di Mintzberg sono "tipi ideali": la forma reale di un'impresa è un mix, ma una configurazione tende a dominare in base ai parametri contingenti.</div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAPH 3 — CICLO HR: 6 fasi su un cerchio
// ══════════════════════════════════════════════════════════════
function HRCycleGraph() {
  const [pian, setPian] = useState(7);  // pianificazione
  const [recl, setRecl] = useState(7);  // reclutamento
  const [sel, setSel]   = useState(7);  // selezione
  const [form, setForm] = useState(7);  // formazione
  const [val, setVal]   = useState(7);  // valutazione
  const [comp, setComp] = useState(7);  // compensazione

  const phases = [
    { name: 'Pianificazione', val: pian, color: '#0ea5e9' },
    { name: 'Reclutamento',   val: recl, color: '#a855f7' },
    { name: 'Selezione',      val: sel,  color: '#16a34a' },
    { name: 'Formazione',     val: form, color: '#f59e0b' },
    { name: 'Valutazione',    val: val,  color: '#dc2626' },
    { name: 'Compensazione',  val: comp, color: '#0891b2' },
  ];

  // efficacy: weighted average penalised by min (the chain is as strong as the weakest link)
  const avg = phases.reduce((s, p) => s + p.val, 0) / 6;
  const minV = Math.min(...phases.map(p => p.val));
  const efficacia = 0.6 * avg + 0.4 * minV;  // 0..10

  // circle layout
  const cx = PL + cW / 2;
  const cy = PT + cH / 2;
  const R = Math.min(cW, cH) / 2 - 30;

  const nodes = phases.map((p, i) => {
    const ang = -Math.PI / 2 + (2 * Math.PI * i) / 6;  // start at top
    return {
      ...p,
      x: cx + R * Math.cos(ang),
      y: cy + R * Math.sin(ang),
      r: 6 + (p.val / 10) * 14,  // node radius scales with intensity
    };
  });

  const efficaciaColor = efficacia >= 7 ? '#16a34a' : efficacia >= 4 ? '#f59e0b' : '#dc2626';

  return (
    <div className="graph-block">
      <h4 className="graph-title">Ciclo HR: le 6 fasi e l'efficacia complessiva</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          {/* connecting circle */}
          <circle cx={cx} cy={cy} r={R} fill="none" stroke="#cbd5e1" strokeWidth={1.5} strokeDasharray="4,3" />
          {/* arrows between consecutive phases */}
          {nodes.map((n, i) => {
            const next = nodes[(i + 1) % 6];
            return <line key={i} x1={n.x} y1={n.y} x2={next.x} y2={next.y} stroke="#94a3b8" strokeWidth={1.2} />;
          })}
          {/* center: total efficacy */}
          <circle cx={cx} cy={cy} r={26} fill={efficaciaColor} opacity={0.9} stroke="#fff" strokeWidth={2} />
          <text x={cx} y={cy - 2} textAnchor="middle" fontSize={10} fill="#fff" fontWeight={600}>HR</text>
          <text x={cx} y={cy + 11} textAnchor="middle" fontSize={12} fill="#fff" fontWeight={700}>{efficacia.toFixed(1)}</text>
          {/* phase nodes */}
          {nodes.map((n, i) => (
            <g key={i}>
              <circle cx={n.x} cy={n.y} r={n.r} fill={n.color} opacity={0.85} stroke="#fff" strokeWidth={2} />
              <text x={n.x} y={n.y - n.r - 4} textAnchor="middle" fontSize={10} fill="#1e293b" fontWeight={600}>{n.name}</text>
              <text x={n.x} y={n.y + 3} textAnchor="middle" fontSize={10} fill="#fff" fontWeight={700}>{n.val}</text>
            </g>
          ))}
        </svg>
        <div className="graph-controls">
          <SliderControl label="Pianificazione" symbol="pia" value={pian} min={0} max={10} step={1} onChange={setPian} color="#0ea5e9" fmt={v => v.toFixed(0)} />
          <SliderControl label="Reclutamento" symbol="rec" value={recl} min={0} max={10} step={1} onChange={setRecl} color="#a855f7" fmt={v => v.toFixed(0)} />
          <SliderControl label="Selezione" symbol="sel" value={sel} min={0} max={10} step={1} onChange={setSel} color="#16a34a" fmt={v => v.toFixed(0)} />
          <SliderControl label="Formazione" symbol="for" value={form} min={0} max={10} step={1} onChange={setForm} color="#f59e0b" fmt={v => v.toFixed(0)} />
          <SliderControl label="Valutazione" symbol="val" value={val} min={0} max={10} step={1} onChange={setVal} color="#dc2626" fmt={v => v.toFixed(0)} />
          <SliderControl label="Compensazione" symbol="com" value={comp} min={0} max={10} step={1} onChange={setComp} color="#0891b2" fmt={v => v.toFixed(0)} />
          <div className="result-box">
            <div className="result-row"><strong>Efficacia HR</strong> <span style={{ color: efficaciaColor }}>{efficacia.toFixed(1)}/10</span></div>
            <div className="result-row"><strong>Anello debole</strong> <span>{phases.find(p => p.val === minV).name}</span></div>
          </div>
          <div className="insight-mini">Il ciclo HR è una catena: un investimento sbilanciato (formazione altissima, valutazione bassa) riduce l'efficacia complessiva. L'anello debole determina la forza della catena.</div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAPH 4 — LEARNING LOOP: Single Loop vs Double Loop (Argyris)
// ══════════════════════════════════════════════════════════════
function LearningLoopGraph() {
  const [errFreq, setErrFreq] = useState(5);     // frequenza errori 1-10
  const [feedback, setFeedback] = useState(5);    // capacità feedback 1-10

  const xMin = 0, xMax = 24;  // months
  const yMin = 0, yMax = 100;  // performance

  // Single loop: corregge errori ma non rivede i modelli mentali
  // performance(t) ≈ A * (1 - exp(-k_s * t)) with k_s low
  // Double loop: rivede assunzioni → crescita più rapida
  // performance(t) ≈ A * (1 - exp(-k_d * t)) with k_d high
  const k_single = 0.04 + 0.02 * (feedback / 10) - 0.01 * (errFreq / 10);
  const k_double = 0.10 + 0.10 * (feedback / 10) - 0.02 * (errFreq / 10);
  const A_single = 60 - 2 * (errFreq);   // asymptote lower with high errors
  const A_double = 95 - 1 * (errFreq);

  const ptsSingle = [];
  const ptsDouble = [];
  for (let t = 0; t <= xMax; t += 0.25) {
    const ys = A_single * (1 - Math.exp(-Math.max(0.001, k_single) * t));
    const yd = A_double * (1 - Math.exp(-Math.max(0.001, k_double) * t));
    ptsSingle.push([toX(t, xMin, xMax), toY(ys, yMin, yMax)]);
    ptsDouble.push([toX(t, xMin, xMax), toY(yd, yMin, yMax)]);
  }
  const pathSingle = 'M ' + ptsSingle.map(p => p.join(',')).join(' L ');
  const pathDouble = 'M ' + ptsDouble.map(p => p.join(',')).join(' L ');

  const finalSingle = A_single * (1 - Math.exp(-Math.max(0.001, k_single) * xMax));
  const finalDouble = A_double * (1 - Math.exp(-Math.max(0.001, k_double) * xMax));
  const gap = finalDouble - finalSingle;

  return (
    <div className="graph-block">
      <h4 className="graph-title">Single Loop vs Double Loop (Argyris): performance organizzativa nel tempo</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          <Axes xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax} xLabel="mesi" yLabel="performance" nX={6} xFmt={v => v.toFixed(0)} yFmt={v => v.toFixed(0)} />
          {/* Single loop curve */}
          <path d={pathSingle} fill="none" stroke="#f59e0b" strokeWidth={2.2} />
          <text x={toX(xMax - 1, xMin, xMax)} y={toY(finalSingle, yMin, yMax) - 5} fontSize={10} fill="#f59e0b" textAnchor="end">Single Loop</text>
          {/* Double loop curve */}
          <path d={pathDouble} fill="none" stroke="#16a34a" strokeWidth={2.2} />
          <text x={toX(xMax - 1, xMin, xMax)} y={toY(finalDouble, yMin, yMax) - 5} fontSize={10} fill="#16a34a" textAnchor="end">Double Loop</text>
          {/* Gap arrow at t=24 */}
          <line x1={toX(xMax - 0.5, xMin, xMax)} y1={toY(finalSingle, yMin, yMax)} x2={toX(xMax - 0.5, xMin, xMax)} y2={toY(finalDouble, yMin, yMax)} stroke="#dc2626" strokeWidth={1.5} strokeDasharray="3,2" />
          <circle cx={toX(xMax - 0.5, xMin, xMax)} cy={toY((finalSingle+finalDouble)/2, yMin, yMax)} r={3} fill="#dc2626" />
        </svg>
        <div className="graph-controls">
          <SliderControl label="Frequenza errori" symbol="err" value={errFreq} min={1} max={10} step={1} onChange={setErrFreq} color="#dc2626" fmt={v => v.toFixed(0)} />
          <SliderControl label="Capacità di feedback" symbol="fb" value={feedback} min={1} max={10} step={1} onChange={setFeedback} color="#16a34a" fmt={v => v.toFixed(0)} />
          <div className="result-box">
            <div className="result-row"><strong>Performance Single Loop</strong> <span style={{ color: '#f59e0b' }}>{finalSingle.toFixed(1)}</span></div>
            <div className="result-row"><strong>Performance Double Loop</strong> <span style={{ color: '#16a34a' }}>{finalDouble.toFixed(1)}</span></div>
            <div className="result-row"><strong>Gap (vantaggio Double)</strong> <span style={{ color: '#dc2626' }}>+{gap.toFixed(1)}</span></div>
          </div>
          <div className="insight-mini">Il <em>single loop</em> corregge gli errori entro modelli mentali dati; il <em>double loop</em> rivede le assunzioni stesse. Le organizzazioni che apprendono in modalità double loop crescono molto più rapidamente.</div>
        </div>
      </div>
    </div>
  );
}

export default function Week9() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', paddingBottom: '4rem' }}>
      <div className="page-header">
        <div style={{ color: 'var(--accent-cyan)', fontWeight: 600, letterSpacing: '0.1em', fontSize: '0.875rem', marginBottom: '0.5rem' }}>SETTIMANA 09</div>
        <h1 className="page-title gradient-text" style={{ fontSize: '3rem' }}>Progettazione Organizzativa e Gestione Risorse Umane</h1>
      </div>

      <div className="content-section glass-panel markdown-body">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownContent}</ReactMarkdown>
      </div>

      <div className="content-section glass-panel" style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>📊 Visualizzazioni Interattive</h2>
        <SpanOfControlGraph />
        <MintzbergGraph />
        <HRCycleGraph />
        <LearningLoopGraph />
      </div>
    </div>
  );
}
