import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import '../index.css';
import './macro/macro.css';

const markdownContent = `
# Capitolo 1: Introduzione al Corso e Analisi del Macroambiente

La prima settimana del corso di Economia e Gestione delle Imprese introduce i concetti fondanti dell'azione manageriale. In un contesto globale sempre più interconnesso e soggetto a shock repentini, il ruolo del management non può più limitarsi alla mera "amministrazione" aziendale, ma deve evolvere verso una complessa attività di orchestrazione strategica. In questo capitolo esploreremo le fondamenta del management, per poi ampliare la visuale all'analisi dell'ambiente esterno, elemento imprescindibile affinché l'impresa possa non solo competere, ma sopravvivere nel lungo periodo.

## 1. Il Management e il Processo di Pianificazione Strategica

### 1.1 Definizione ed Essenza del Management
Il management può essere definito in senso lato come l'arte e la scienza di gestire le risorse di un'organizzazione per il raggiungimento di scopi ben definiti. Più organicamente, esso si articola in un processo continuo che abbraccia quattro dimensioni cardine: la pianificazione strategica, l'organizzazione, la guida (o *leadership*) e il controllo.
L'azione manageriale è finalizzata a coordinare gli sforzi (spesso eterogenei e divergenti) dei membri dell'organizzazione e ad impiegare capitali, tecnologie e asset materiali nel modo più efficiente ed efficace possibile. Non si tratta, dunque, di una semplice applicazione di routine prestabilite, bensì di un'attività squisitamente decisionale che avviene prevalentemente in condizioni di incertezza.

### 1.2 Il "Diamante della Strategia" e il Rapporto con le Tattiche
Ma cos'è realmente la "strategia"? Nel corso degli studi aziendali, il termine è stato spesso abusato, rendendolo sinonimo di qualsiasi azione di vertice. Il contributo accademico di Hambrick & Fredrickson (2001), intitolato provocatoriamente *"Are you sure you have a strategy?"* (Academy of Management Executive 19(4), 51-62), introduce il concetto di **Diamante della Strategia**.
Secondo gli autori, una vera strategia non è un generico elenco di desideri, ma un *set integrato di scelte*. Essi ritengono che ogni strategia debba rispondere a cinque specifiche domande interconnesse, ciascuna delle quali si articola in numerose sotto-domande operative:

| Elemento del Diamante | Domanda Strategica | Sotto-domande operative |
|---|---|---|
| **Arenas** | Dove saremo attivi (e con quanta enfasi)? | Quali categorie di prodotto? Quali canali? Quali segmenti di mercato? Quali aree geografiche? Quali tecnologie core? Quali stadi di creazione del valore? |
| **Vehicles** | Come ci arriveremo? | Sviluppo interno? Joint ventures? Licensing/franchising? Alleanze? Acquisizioni? |
| **Differentiators** | Come vinceremo sul mercato? | Tramite immagine? Personalizzazione (customization)? Prezzo? Styling? Affidabilità del prodotto? Velocità time-to-market? |
| **Staging** | Quale sarà la velocità e la sequenza delle nostre mosse? | Velocità di espansione? Sequenza delle iniziative? |
| **Economic Logic** | Come otterremo i nostri rendimenti economici? | Costi minimi tramite vantaggi di scala? Costi minimi tramite vantaggi di scope e replicazione? Premium price grazie a un servizio non eguagliabile? Premium price per caratteristiche proprietarie del prodotto? |

Solo quando questi cinque tasselli sono allineati ed esplicitati, l'impresa possiede una vera strategia. La logica economica (al centro del diamante) costituisce il punto di sintesi: tutti gli altri elementi devono convergere coerentemente nel meccanismo di generazione dei rendimenti.

Tuttavia, il piano d'azione non finisce qui. Del piano d'azione aziendale fanno parte le **tattiche**. La sequenza concettuale è chiara: la *Vision* aziendale definisce la *Strategy*; quest'ultima fissa le "*rules of engagement*" entro cui si dispiegano le *Tactics*; le tattiche sono "bound by" (vincolate da) la strategia e producono l'*Outcome* misurabile attraverso *metrics of success*. Nel linguaggio accademico e militare dal quale l'economia attinge, se la strategia stabilisce l'obiettivo di lungo periodo e il posizionamento generale, le tattiche rappresentano le *scelte operative dell'impresa che consentono l'implementazione pratica della strategia*. La tattica è una mossa subordinata, di raggio e orizzonte temporale più limitato, che serve ad eseguire quotidianamente la logica strategica. L'implementazione è infatti spesso il momento in cui strategie brillanti sulla carta crollano e falliscono.

### 1.3 Il Processo di Pianificazione Strategica: Sequenza End-to-End
La pianificazione strategica non è un atto puntuale ma un processo articolato in sette stadi sequenziali e ricorsivi, il cui flusso può essere visualizzato come un percorso logico che parte dall'idea imprenditoriale e si chiude sulla creazione di valore:

1. **Idea** — il concept iniziale, l'intuizione imprenditoriale grezza che dà avvio all'iniziativa.
2. **Mission, Vision, Value Proposition** — la definizione esplicita dello scopo (perché esistiamo), del traguardo aspirazionale (cosa vogliamo diventare) e della proposta di valore (quale beneficio offriamo a chi).
3. **External Analysis** — l'analisi del macroambiente (PESTEL, Megatrend) e del microambiente competitivo.
4. **Internal Analysis** — la mappatura delle risorse, competenze e capacità interne dell'impresa (logica RBV).
5. **SWOT Analysis** — la sintesi delle analisi precedenti in una matrice di Strengths, Weaknesses, Opportunities, Threats che incrocia le risultanze interne ed esterne.
6. **Strategic Choices** — le decisioni strategiche su due livelli distinti: la *Corporate Strategy* (rispondendo alla domanda *Where?*: in quali business e mercati operare) e la *Business Strategy* (rispondendo alla domanda *How?*: come competere all'interno di ciascun business scelto).
7. **Value Creation** — la fase finale di implementazione e misurazione dell'output, in cui le scelte si traducono in valore economico tangibile per l'impresa e per gli stakeholder.

Questo processo non è lineare in senso stretto: i feedback loop tra esecuzione, controllo e ridefinizione strategica sono costanti, soprattutto in ambienti turbolenti. Va inoltre sottolineato come il corso si svilupperà coprendo progressivamente i seguenti macro-temi: i **Megatrend** e le basi dell'analisi competitiva, il **Tripode Strategico**, la **competitività e le strategie di business**, i **Modelli di Business**, la **sostenibilità**, la **progettazione organizzativa**, le **strategie di crescita**, le **strategie funzionali** (marketing, innovazione, operations) sino ai progetti applicativi.

---

## 2. L'Analisi dell'Ambiente Esterno: Megatrend e Previsioni Future

Il processo di pianificazione strategica ha inizio inevitabilmente con l'analisi esterna (External Analysis) affiancata all'analisi interna. Poiché l'impresa è un sistema aperto, essa assorbe input dal suo ambiente per restituirvi output (prodotti o servizi); pertanto, il suo destino è legato a doppio filo all'ambiente in cui opera.

### 2.1 Il Cono del Tempo e l'Evoluzione dell'Incertezza
L'ambiente esterno è in rapido mutamento. Il cambiamento, secondo la celebre citazione di **William Pollard** riportata nelle slide del corso, è l'unico vero motore dell'innovazione: *"Without change there is no innovation, creativity or incentive for improvements. Those who initiate change will have a better opportunity to manage the change that is inevitable"*. La sfida per il management è dunque smettere di subire il cambiamento e passare a iniziarlo o quantomeno a gestirlo proattivamente.

Ma come si relaziona l'impresa col futuro? Si tratta di **prevedere o di indovinare**? L'obiettivo aziendale non è assumere degli indovini con la sfera di cristallo, bensì condurre analisi strutturate (system-level disruption and evolution). Viene citato in questo senso il diagramma del **"Time Cone"** (Cono del Tempo): l'atlante dei futuri potenziali è da attribuire a **Norman Henchey** (che nel 1978 individuò i futuri possibili, plausibili e probabili) ed è stato successivamente rielaborato da **Joseph Voros (2017)**. Questo costrutto visivo e concettuale mostra come, man mano che lo sguardo si proietta avanti nel tempo, la gamma dei possibili percorsi si espanda a dismisura: più l'orizzonte temporale è lontano, più i dati affidabili e utilizzabili diminuiscono e più aumenta il rischio.

La struttura del cono dei futuri di Voros distingue cinque tipologie di scenario, ordinati per livello crescente di "apertura":

| Tipologia di futuro | Descrizione | Frase emblematica |
|---|---|---|
| **Projected (default)** | Il futuro estrapolato per inerzia, "business as usual" | *"will happen"* |
| **Probable** | Basato sui trend attuali, ciò che probabilmente accadrà | *"likely to happen"* |
| **Plausible** | Possibile in base alle conoscenze attuali dei sistemi | *"could happen"* |
| **Possible** | Qualsiasi scenario non in violazione delle leggi fisiche, basato su future knowledge | *"might happen"* |
| **Preposterous** | Scenari giudicati assurdi o impossibili | *"won't ever happen!"* |
| **Preferable** | Futuri desiderabili in base a giudizi di valore | *"want/should happen"* |

L'orizzonte temporale tipico viene articolato in fasce: **12-24 mesi** (breve termine, alta affidabilità), **2-5 anni**, **5-10 anni**, **10+ anni** (lungo termine, alto rischio di disruption). L'organizzazione deve imparare a gestire la propria pianificazione strategica all'interno di questo "cono di incertezza", consapevole che più ci si proietta in avanti più aumenta il rischio di una *system disruption* che renda obsolete le ipotesi correnti.

Nelle classificazioni più moderne (es. World Economic Forum, *Global Risks Report* 2020 e seguenti), i megatrend e i rischi globali vengono mappati in un network interconnesso di rischi *economic, environmental, geopolitical, societal, technological*. Ciascun nodo del grafo (es. *inequality*, *biodiversity loss*, *involuntary migration*, *cyber espionage*, *AI adverse outcomes*, *misinformation*) ha un'intensità di influenza (high, medium, low) e un fitto reticolo di archi che evidenzia come ogni rischio sia correlato e co-occorrente con altri. L'analisi strategica deve dunque essere pensata in modo sistemico e non per silos.

### 2.2 I Megatrend: Forze che plasmano il domani
Uno degli strumenti primari per analizzare questi scenari futuri è l'osservazione dei **Megatrend**. A differenza dei "trend" normali (spesso semplici mode passeggere), i megatrend sono forze macroeconomiche, globali, sociali e tecnologiche strutturali. Hanno una forza d'inerzia massiccia; il loro impatto andrà a definire irreversibilmente il nostro mondo futuro. Ogni moderna organizzazione è obbligata ad analizzarli per poter adattare la propria *value proposition* (proposta di valore) ed evitare l'obsolescenza prima ancora che si manifesti. Possono essere suddivisi in quattro grandi categorie:

#### A. Social Trends (Andamenti Sociali e Demografici)
La demografia è il destino dell'economia. Il *Day of 8 Billion* (15 novembre 2022) ha sancito il superamento della soglia degli otto miliardi di abitanti del pianeta. Le proiezioni ONU (UN Population Division, *World Population Prospects 2019*) tracciano la traiettoria pluridecennale della popolazione mondiale:

| Anno | Popolazione Mondiale | Variazione cumulata |
|---|---|---|
| 15 novembre 2022 | 8,0 miliardi | — (anno base) |
| 2030 | 8,5 miliardi | +10% |
| 2050 | 9,7 miliardi | +26% |
| 2100 | 10,9 miliardi | +42% |

Eppure, a livello relativo, il tasso di crescita sta rallentando: nei prossimi 20 anni la popolazione aumenterà di circa 1,4 miliardi (+20% pari a 0,9% annuo), contro un incremento di 1,6 miliardi (+31%, pari a 1,3% annuo) registrato tra il 1990 e il 2010. Nel 1990 la popolazione mondiale era di 5,3 miliardi.

In modo ancor più rilevante per le imprese, stiamo assistendo all'inesorabile **Invecchiamento della Popolazione (Aging population)**: secondo Statista (2019), l'età mediana globale aumenterà da **29,6 anni nel 2015 a 41,9 nel 2100**. I paesi con l'età mediana più alta nel 2005 erano nell'ordine: **Giappone, Germania, Italia, Finlandia, Bulgaria, Croazia, Belgio, Svezia, Slovenia, Svizzera** (tutti compresi tra 38 e 43 anni). La distribuzione prevista della popolazione mondiale per fasce d'età evidenzia uno spostamento epocale verso il segmento *senior*:

| Fascia d'età | 2020 | 2050 | 2100 |
|---|---|---|---|
| 0-14 anni | 25,4% | 21,1% | 17,4% |
| 15-59 anni | 61,1% | 57,5% | 54,3% |
| 60 anni e oltre | 13,5% | 21,4% | 28,2% |

Questo comporta per interi settori la totale riprogrammazione delle agende: si pensi alla sanità, alla mobilità, al mercato immobiliare, ai prodotti finanziari di lungo termine, alla silver economy.

#### A.1 Le Generazioni: una mappa dei consumatori e dei lavoratori
Strettamente connessa al tema demografico è la classificazione generazionale, che nelle slide del corso viene declinata su sei coorti distinte. Ciascuna generazione ha *motivatori*, *rapporti con la tecnologia*, *medium di comunicazione preferiti*, *frequenza di feedback attesa* e *attitudine al teamwork* differenti — variabili che impattano direttamente su HR, marketing e strategie di prodotto:

| Generazione | Anni | Motivatori chiave | Tecnologia / Signature Product | Comunicazione | Feedback | Teamwork |
|---|---|---|---|---|---|---|
| **Baby Boomers** | 1940-1960 | Valore ed esperienza, mentoring, essere consultati, ricompense, libertà di coltivare hobby | Early IT adopters, TV | Face-to-Face | Schedulato | Imparano a lavorare presto in team a casa e a scuola |
| **Generation X** | 1961-1980 | Riconoscimento individuale, flessibilità, work-life balance, autonomia | Digital immigrants, PC, PowerPoint | Face-to-Face preferito, phone/email ok | Schedulato | Preferiscono il lavoro individuale |
| **Xennials** | 1976-1985 | Esperienze varie, sfide, accordi flessibili di lavoro, career guidance | Digital Entrepreneurs (infanzia senza internet, maturati durante la dot-com bubble), Tablet/Smartphone | Email | Settimanale | A loro agio nel passaggio tra lavoro individuale e di team |
| **Generation Y (Millennials)** | 1981-2000 | Lavoro significativo, ambienti divertenti, "tell it like it is", flextime, feedback tempestivo | Digital Natives, primi social (Facebook, YouTube), Online dating, Google Glasses | Email o Text | On-Demand | Sfruttano il potere collettivo |
| **YZennials** | 1996-2005 | Coinvolgimento in cause sociali, valore della creatività, autenticità, trasparenza, frequent feedback | Technoholics: Instagram, WhatsApp, Twitter, App-Generation, Selfie-Generation, Cloud computing | Online, Text o Social Media | Continuo | Preferiscono ambienti di lavoro collaborativi |
| **Generation Z** | 2001-2015 | Lavoro allineato con scopo di vita, coaching, reverse mentoring, feedback continuo | Technology Saturated Generation: tecnologia ubiqua, VR, wearable, self-driving cars, 3D printing | FaceTime su dispositivi handheld, Social Media | Istantaneo | Preferiscono ambienti di lavoro collaborativi |

#### A.2 Urbanizzazione e Megalopoli
L'altro gigantesco fenomeno sociale è l'**Urbanizzazione**. Se ancora negli anni '50 l'umanità era fortemente rurale (circa il 30% nelle città), nel 2018 la quota urbana era già al 55% e le proiezioni UN (*World Urbanization Prospects 2019*) stimano che entro il **2050 il 68% della popolazione mondiale vivrà in aree urbane**. Il sorpasso storico tra popolazione urbana e rurale è già avvenuto: oggi vi sono circa 6,7 miliardi di persone proiettate in città entro il 2050 contro 3,1 miliardi nelle aree rurali.

Le maggiori aree metropolitane del mondo:
- **Tokyo** circa 37 milioni di residenti
- **Jakarta** circa 42 milioni di abitanti (ha superato Tokyo come la più grande area urbana del mondo)
- **Nuova Delhi** circa 34,7 milioni
- **Shanghai** circa 30,5 milioni
- **Dhaka, Il Cairo, San Paolo, Città del Messico, Pechino e Mumbai** ciascuna con circa 20 milioni o più

Oggi esistono già **37 megalopoli** — agglomerati urbani con più di 10 milioni di abitanti — e si prevede che questo numero crescerà ulteriormente entro il 2030. La crescita di queste mega-città genera sfide infrastrutturali enormi (mobilità, rifiuti, energia, edilizia, sicurezza) ma rappresenta al contempo concentrazioni di domanda, talento e capitale di valore strategico per le imprese.

#### A.3 Migrazione
Tra i fenomeni sociali più rilevanti della contemporaneità rientra la **migrazione**, che si intreccia con il cambiamento demografico, la disuguaglianza economica e la crisi climatica. I flussi migratori — sia volontari che involontari, intra-statali e internazionali — modificano la composizione demografica dei mercati di destinazione, generano fabbisogni nuovi (alloggi, integrazione, formazione, servizi finanziari) e producono diaspore che fungono da ponte commerciale tra paesi di origine e di approdo. Nei *Global Risks Reports* del WEF, *involuntary migration or displacement* è ricorrentemente classificato tra i rischi sociali a maggior interconnessione con altri shock sistemici (conflitti, pandemie, eventi climatici estremi).

#### B. Economic Trends (Le dinamiche Economiche)
Su scala macroeconomica, lo stravolgimento più profondo è l'asse della **Globalizzazione** in mutamento. Sta avvenendo un titanico spostamento del fulcro economico globale dalle tradizionali potenze del "G7" (come USA, Giappone, Germania, Inghilterra) ai paesi dell' "E7" (le sette nazioni emergenti tra cui Cina, India, Brasile). Si prevede che la quota del G7 crollerà al 20% del PIL mondiale entro una trentina di anni, mentre l'E7 egemonizzerà la ricchezza globale accaparrandosi quasi il 50% di quest'ultima.
Una diretta conseguenza di queste frizioni globali e dei recenti shock pandemici e bellici è il palese *fallimento della catena del valore globale per come la conoscevamo*. Esistono **disruption violentissime delle catene di approvvigionamento (Supply Chains)**.
L'esempio classico in sede didattica è l'ecosistema di costruzione dell'iPhone, i cui oltre seicento componenti viaggiano da mezzo mondo (Taiwan, Corea, Germania, progettati in California) per essere infine assemblati a Shenzhen (Cina). Queste architetture, per quanto snelle per via della minimizzazione dei costi, sono iper-sensibili ai colli di bottiglia e agli shock geografici (i blocchi al Canale di Suez o del Canale di Panama ne sono la palese dimostrazione concreta). Per ovviare a questo rischio, le multinazionali stanno drasticamente ripensando le filosofie del *Just-in-Time* e del *Single Sourcing* a favore di pratiche di differenziazione dei poli produttivi.

#### C. Environmental Trends (I mutamenti Ambientali)
La celebre frase *"There isn't any planet B"* riassume in toto l'imperativo dei tempi contemporanei. Secondo il *World Economic Forum* (2020), i problemi climatici rappresentano ad oggi i **primi cinque rischi a lungo termine in termini di probabilità di accadimento**, a conferma di un cambio paradigmatico nella percezione del rischio sistemico.

I dati supportano questo grave scenario:
- **Anidride carbonica** in aumento, oltre 412 parti per milione (ppm)
- **Temperatura globale** aumentata di +1,9 °F dal 1880
- **Minimo del ghiaccio artico** in calo del 12,8% per decennio
- **Livello del mare** in crescita di 3,3 millimetri all'anno
- Il **2018 è stato il quarto anno più caldo** mai registrato (NASA GISS / Axios 2019)

A partire dalla metà del XX secolo, l'aumento delle concentrazioni di gas serra (GHG) è stato il principale motore dell'incremento delle temperature. Le proiezioni mostrano che entro il **2030 le emissioni mondiali di CO2 da combustione di combustibili fossili (carbone, petrolio, gas) aumenteranno del 16% raggiungendo 35.053 megatons (Mt), pari ad un incremento di +44%** rispetto agli ultimi 20 anni. In numeri assoluti l'incremento sarà di 4.838 Mt e quindi pari alla metà degli ultimi 20 anni (nel 1990 le emissioni di CO2 da combustione di carburanti ammontavano a 20.924 Mt). C'è quindi un rallentamento dell'accelerazione, ma non un'inversione di rotta.

Parallelamente, esplode la **domanda di cibo, acqua e materiali**:
- Si prevede che la **domanda di acqua a livello globale aumenterà del +55% tra il 2000 e il 2050** (fonte: International Renewable Energy Agency IRENA, 2015-2050)
- Entro il **2050, la domanda di cibo sarà superiore del +60%** rispetto al 2010
- L'**uso globale di materiali raddoppierà da 79 Gt nel 2011 a 167 Gt nel 2060** (Global Material Resources Outlook to 2060): metalli da 8 a 20 Gt, fossili da 14 a 24 Gt, biomassa da 20 a 37 Gt, minerali non metallici da 37 a 86 Gt
- L'uso dei materiali aumenterà ovunque, ma **non con la stessa velocità del PIL**: nei paesi OECD la crescita dei materiali è inferiore a quella del PIL (in OECD America Materials x1,7 vs GDP x2,6; OECD Europa x1,8 vs x2,5; OECD Pacifico x1,6 vs x2,2), mentre in Medio Oriente & Africa i materiali crescono x4,2 a fronte di un GDP x6,0 e in Asia non-OECD x2,1 vs x6,1.

Si è inoltre aggravata la **crisi energetica** scatenata durante il conflitto Russia-Ucraina: interruzione dei rapporti di fornitura consolidati da decenni, prezzi del gas naturale ai massimi pluriennali, **petrolio quasi a 130 $ al barile**, spirale inflazionistica post-pandemia con conseguente crisi del costo della vita. Le nazioni occidentali hanno implementato un **price cap** per il petrolio russo, mentre l'Europa ha investito massicciamente nel gas naturale liquefatto (GNL) per soddisfare il fabbisogno energetico, ridisegnando la mappa europea della capacità di stoccaggio del gas con nuovi accordi di solidarietà tra Stati membri dell'UE.

Le minacce fisiche cambiano profondamente la sensibilità dell'opinione pubblica, aprendo l'era dei grandi cambiamenti di paradigma normativi in merito alla **tutela della biodiversità**. Effetti di lungo periodo sono già visibili: secondo CNN (Katie Hunt, 2021), gli **animali a sangue caldo stanno "shape-shifting"** ovvero modificando la propria fisiologia per adattarsi a un clima più caldo (becchi, zampe e orecchie più grandi per regolare meglio la temperatura corporea); alcune specie di pappagalli australiani hanno visto la dimensione del becco aumentare in media del 4-10% dal 1871.

La biodiversità ha valori economici incalcolabili per i mercati stessi. Due esempi emblematici:

| Caso | Valore stimato | Razionale |
|---|---|---|
| **Insetti impollinatori** | **235-577 miliardi di dollari** annui | Oltre il 75% delle colture alimentari globali dipende dagli insetti impollinatori, contribuendo al 35% della produzione alimentare globale. Il valore della produzione agricola globale a rischio per la perdita di impollinatori è stimato dalla **Piattaforma intergovernativa di politica scientifica sulla biodiversità (IPBES)** in 235-577 miliardi di dollari annui. |
| **Grandi balene** | Oltre **1.000 miliardi di dollari** | Le grandi balene catturano in media 33 tonnellate di CO2 nel corso della loro vita; insieme ad altri effetti economici (miglioramento della pesca, ecoturismo, produttività del fitoplancton) rendono il valore medio di una grande balena pari a oltre 2 milioni di dollari (FMI). Il valore dell'attuale stock di grandi balene è superiore a 1.000 miliardi di dollari. |

Da questi fattori scaturisce il concetto di **Impresa Sostenibile**. Il framework canonico di sostenibilità è la "*triple bottom line*" *Planet–People–Profit*. Le aziende moderne poggiano su tre pilastri intersecati che convergono al centro nella nozione di *Sustainable Business*:

1. **Planet (tutela ambientale):** utilizzo di rinnovabili e risparmio energetico, adozione di approcci di **economia circolare** (riutilizzo e riciclo dei materiali), riduzione degli impatti ambientali (Environmental Impacts).
2. **People (impatti sociali):** operare nel rispetto di tutti gli stakeholder interni ed esterni — azionisti, dipendenti, consumatori, fornitori e comunità.
3. **Profit (risultati economici):** perseguire il profitto economico con uno sguardo costante anche all'ambiente e alla società, evitando trade-off distruttivi.

A livello internazionale, il framework di riferimento è quello dei **17 Sustainable Development Goals (SDGs)** delle Nazioni Unite, che fungono da bussola per qualsiasi politica di sostenibilità di stati e imprese:

1. No Poverty
2. Zero Hunger
3. Good Health and Well-being
4. Quality Education
5. Gender Equality
6. Clean Water and Sanitation
7. Affordable and Clean Energy
8. Decent Work and Economic Growth
9. Industry, Innovation and Infrastructure
10. Reduced Inequalities
11. Sustainable Cities and Communities
12. Responsible Consumption and Production
13. Climate Action
14. Life Below Water
15. Life on Land
16. Peace, Justice and Strong Institutions
17. Partnership for the Goals

#### D. Technological Trends (La Rivoluzione Digitale)
In ultimo, ma forse il motore accelerativo più rilevante, il filone del progresso tecnologico. Il paradigma di riferimento è quello di **Industry 4.0**, costruito su un ecosistema di nove tecnologie abilitanti interconnesse (fonte: INON Africa, IOA Position Papers):

1. **Autonomous Robots** — robotica avanzata e collaborativa (cobots)
2. **Big Data** — raccolta e analisi di volumi massivi di dati eterogenei
3. **Augmented Reality (AR)** — sovrapposizione digitale al reale per training, manutenzione, retail
4. **Additive Manufacturing** — stampa 3D per prototipazione e produzione on-demand
5. **Cloud Computing** — infrastruttura elastica e on-demand
6. **Cybersecurity** — protezione di sistemi industriali sempre più connessi
7. **Internet of Things (IoT)** — sensori e oggetti connessi che producono telemetria continua
8. **System Integration** — orchestrazione orizzontale e verticale dei sistemi
9. **Simulation** — gemelli digitali (digital twins) e modellazione predittiva

Siamo simultaneamente all'interno di un **"Digital Vortex"** (Global Center for Digital Business Transformation) che aspira sistematicamente all'interno di sé tutti i settori dell'economia industriale analogica e li smantella e ricostruisce in chiave digitale. La rappresentazione visiva è quella di un vortice concentrico in cui i settori si dispongono a strati: al centro (massima velocità di trasformazione) si trovano *Technology Products & Services, Education, Financial Services, Telecommunications, Professional Services*; in posizione intermedia *Retail, Media & Entertainment, Hospitality & Tourism, Consumer Packaged Goods, Healthcare & Pharma*; alla periferia (più lenti) *Transportation & Logistics, Real Estate & Construction, Manufacturing, Energy & Utilities*. Man mano che le aziende si avvicinano al centro del Digital Vortex, la necessità di reinventare il business accelera.

##### D.1 Gli enablers: i devices
La trasformazione digitale poggia sull'esplosione del numero di dispositivi e connessioni per persona. Secondo Cisco Systems / Statista 2023, il numero medio globale di devices e connessioni per capita è passato da **2,4 nel 2018 a 3,6 nel 2023**, con marcate disparità geografiche:

| Regione | Devices/persona 2018 | Devices/persona 2023 |
|---|---|---|
| Global | 2,4 | 3,6 |
| Asia Pacific | 2,1 | 3,1 |
| Central and Eastern Europe | 2,5 | 4,0 |
| Latin America | 2,2 | 3,1 |
| Middle East and Africa | 1,1 | 1,5 |
| North America | 8,2 | 13,4 |
| Western Europe | 5,6 | 9,4 |

In **Italia, 50 milioni di persone su 60 utilizzano Internet quotidianamente e trascorrono in media 6 ore online**, equivalenti a circa 100 giorni all'anno (We Are Social, *Global Digital Report* 2020). Il fenomeno mostra come l'informatizzazione non sia più un'opzione bensì una condizione di base dell'esistenza sociale ed economica.

##### D.2 Dalla data value chain alla data monetization
L'informatizzazione non riguarda più l'adeguamento dei sistemi o l'uso di computer, ma è diventata una questione organica: l'estrazione, l'analisi e la **monetizzazione dei dati**. La *data value chain* (UNCTAD Report, 2019) si articola in quattro fasi sequenziali — *Collect → Store → Analyse → Transform data into digital intelligence* — che sfociano poi nella *Data Monetization* attraverso quattro modelli di business:

| Modello di monetizzazione | Esempi |
|---|---|
| **Selling targeted online advertising** | Google, Facebook |
| **Operating e-commerce platforms** | Amazon, Alibaba, Uber, Airbnb |
| **Transforming traditional goods into rentable services** | Mobike, Rolls Royce |
| **Renting out cloud services** | Amazon Web Services, Tencent, MyJohnDeere |

Le quattro dimensioni di analisi della monetizzazione sono: *Distribution of value, Scope for upgrading, Governance of value creation, Value creation vs. capture*. Gli attori coinvolti spaziano da *individuals*, *small and large businesses*, *governments* fino agli *economy-wide effects*. La *digital disruption* apre opportunità e sfide soprattutto per i paesi in via di sviluppo: l'impatto netto dipende dal livello di sviluppo e di "readiness" dei paesi e dei loro stakeholder, e le politiche adottate sono determinanti per influenzare l'esito.

### 2.3 Megatrend vs Disruption: una distinzione necessaria
Dalla sintesi di questi trend è dunque indispensabile trarre conclusioni per l'azienda e i suoi decisori. Un **Megatrend** altera silenziosamente il panorama per anni, con forza d'inerzia massiccia e direzione strutturalmente prevedibile. Una **Disruption**, invece, è un evento traumatico immediato e dirompente — una *wrecking ball* — capace di rendere obsoleti ex-leader di mercato i quali non abbiano sondato o compreso in tempo il loro "Cono del Tempo". L'esempio canonico è la pandemia da **COVID-19**: una disruption che, irrompendo improvvisamente, ha smentito quei consigli di amministrazione che fino a poco prima ripetevano *"I don't see our company having to change any time soon"*. La differenza chiave è dunque temporale e di intensità: il megatrend è sismico ma lento, la disruption è uno shock puntuale.

---

## 3. Il Modello PESTEL: Strumento di Analisi del Macroambiente

Tornando all'analisi dell'ambiente esterno, lo strumento più consolidato e diffuso per condurre una mappatura sistematica delle condizioni macroambientali è il **modello PESTEL**. A differenza dei Megatrend, che sono forze di lungo periodo e strutturali, il PESTEL permette di censire in modo analitico e ordinato tutte le variabili esterne rilevanti per un'impresa operante in un dato settore, organizzandole in sei categorie distinte.

### 3.1 Le Sei Dimensioni del PESTEL

**P — Political (Fattori Politici)**
L'analisi delle condizioni politiche comprende: le politiche governative e la stabilità del sistema istituzionale, il grado di corruzione percepita, la disciplina del commercio estero (dazi, accordi bilaterali), la pressione fiscale (tax policy), il diritto del lavoro (labour law) e le eventuali restrizioni al commercio (trade restrictions). Un'impresa che opera in paesi politicamente instabili è esposta a rischi notevolmente superiori rispetto a chi opera in democrazie consolidate.

**E — Economic (Fattori Economici)**
Il contesto economico include: la crescita del PIL (economic growth), i tassi di cambio (fondamentali per le imprese esportatrici o con catene di fornitura internazionali), i tassi di interesse (interest rates), l'inflazione (inflation rates), il reddito disponibile delle famiglie (disposable income) e il tasso di disoccupazione (unemployment rates). Questi fattori determinano in buona parte la capacità di spesa dei consumatori e quindi la domanda potenziale.

**S — Social (Fattori Sociali)**
I trend sociali comprendono: il tasso di crescita della popolazione (population growth rate), la sua distribuzione per fasce d'età (age distribution), i nuovi modelli di carriera, l'enfasi sulla sicurezza, la crescente consapevolezza verso la salute (health consciousness), i mutamenti negli stili di vita (lifestyle attitudes) e le barriere culturali tra mercati diversi (cultural barriers). Questi fattori spiegano, per esempio, perché lo stesso prodotto necessita di adattamenti significativi per essere commercializzato con successo in culture differenti.

**T — Technological (Fattori Tecnologici)**
L'evoluzione tecnologica riguarda: gli incentivi pubblici all'innovazione (technology incentives), il livello generale di innovazione del settore (level of innovation), il grado di automazione raggiungibile (automation), l'intensità delle attività di Ricerca e Sviluppo (R&D activity) e la consapevolezza tecnologica dei consumatori (technological awareness). Le imprese che non monitorano questo asse rischiano di essere sorpassate da competitor che adottano tecnologie disruptive prima di loro.

**E — Environmental (Fattori Ambientali)**
Questo asse analizza: le condizioni meteo-climatiche rilevanti per il business (weather and climate), le politiche ambientali vigenti o in via di approvazione (environmental policies), i cambiamenti climatici strutturali (climate change) e le pressioni esercitate dalle ONG (pressures from NGOs). Le imprese che non integrano questi fattori nella propria strategia rischiano di trovarsi in un contesto normativo ostile o di perdere la fiducia dei consumatori piu sensibili.

**L — Legal (Fattori Legali)**
Il quadro normativo-legale comprende: le leggi anti-discriminazione, la normativa antitrust (antitrust laws), il diritto del lavoro (employment laws), la protezione dei consumatori (consumer protection laws), la disciplina dei brevetti e della proprieta intellettuale (copyright and patent laws), nonche le norme su salute e sicurezza sul lavoro (health and safety laws). Questi vincoli definiscono i confini entro cui le imprese possono operare e competere.

### 3.2 Applicazione del PESTEL: Esempi Settoriali

Il potere del modello PESTEL risiede nella sua applicabilita trasversale a qualsiasi settore o organizzazione specifica. Vediamo due esempi concreti discussi in sede didattica.

#### Esempio 1: Industria Farmaceutica
Applicando il PESTEL al settore farmaceutico emergono dinamiche di grande complessita:
- **Political/Economic:** I governi di tutto il mondo esercitano crescenti pressioni per contenere la spesa sanitaria pubblica, riducendo la disponibilita di rimborsi e comprimendo i margini delle case farmaceutiche. Allo stesso tempo, la crisi economica riduce il reddito individuale disponibile per farmaci non rimborsati, aumentando la pressione sui prezzi.
- **Social:** L'attivismo dei pazienti — amplificato dai social media — ha trasformato radicalmente la relazione tra aziende farmaceutiche e utenti finali. Il paziente di oggi e informato, organizzato e capace di influenzare l'opinione pubblica. La patient/public activism si e' intensificata anche grazie alle nuove tecnologie sociali.
- **Technological:** Nuove tecnologie digitali aprono opportunita inedite: i cosiddetti "e-models" (telemedicina, app per la salute, direct-to-patient advertising) possono diventare canali alternativi di comunicazione e di distribuzione. Le informazioni e le comunicazioni digitali tramite social media richiedono nuove forme di aggiornamento e personalizzazione dei messaggi.
- **Environmental:** La crescente consapevolezza ambientale spinge le aziende a identificare opportunita eco-friendly per portare i propri prodotti sul mercato.
- **Legal:** La necessita di conformarsi a normative diverse nei mercati USA ed europeo — che richiedono talvolta formule o dosaggi differenti, o rendono necessari standard educativi specifici — rende l'internazionalizzazione costosa e complessa. L'incapacita di razionalizzare tra mercati diversi introduce costi aggiuntivi.

#### Esempio 2: Uber e Coca-Cola
Un confronto tra due aziende apparentemente lontane mostra quanto il PESTEL sia flessibile:

**Uber (Leading Shared Taxi Service Provider):**
- *Political Factor:* Uber deve continuamente confrontarsi con regolamentazioni diverse, deve chiarire la propria posizione legale, seguire leggi sul salario minimo per i conducenti ed e' sottoposta a ban in vari paesi.
- *Economic Factor:* Il servizio e' facilmente accessibile (affordable fare charges) e offre opportunita di guadagno per i conducenti, anche se la remunerazione puo' non essere sempre conveniente.
- *Social Factor:* Il servizio e user-friendly, garantisce un rapido pick-up e offre un'esperienza taxi migliore rispetto ai taxi tradizionali.
- *Technological Factor:* Si avvale di un'eccellente app mobile, usa i social media e altri canali elettronici efficacemente per la promozione.
- *Legal Factor:* Deve conformarsi alle leggi in molti paesi, rispettare le leggi sul lavoro e sulla sicurezza dei lavoratori, e tenere conto delle norme sui copyright.
- *Environmental Factor:* Il consumo di carburante e' in aumento; la congestione del traffico e' una preoccupazione reale.

**Coca-Cola (Popular Soft Drink Producer):**
- *Political Factor:* Deve rispettare le normative FDA per fornire bevande alle persone, conformarsi alle leggi contabili e di marketing interno.
- *Economic Factor:* Comprende le preferenze e i gusti dei consumatori. La maggior parte del reddito proviene dalla vendita di soft drink, ma deve focalizzarsi sempre piu sul lancio di bevande salutari.
- *Social Factor:* Ha gia lanciato bevande salutari negli USA; ha la necessita di replicare questa tendenza anche in paesi come Giappone e Cina.
- *Technological Factor:* Utilizza tecnologie all'avanguardia nella produzione di prodotti di alta qualita in tempi brevi e usa i social media efficacemente per la promozione.
- *Legal Factor:* Coca-Cola ha fatto bene nel garantire i diritti del proprio business.
- *Environmental Factor:* Deve operare in aree dove la scarsita d'acqua e' un problema reale; la congestione del traffico e' un problema.

---

## 4. L'Ambiente Competitivo Specifico: Stakeholder, Struttura di Mercato e Vantaggio Competitivo

Una volta esaurita l'analisi del macroambiente (con il PESTEL e i Megatrend), l'azienda si deve focalizzare sul *microambiente* o ambiente competitivo in senso stretto.

### 4.1 Valore e Stakeholder

Prima di parlare di competizione, occorre chiedersi: *valore per chi?* L'impresa interagisce simultaneamente con quattro sfere: il mercato del prodotto (Product Market), la societa (Society), il mercato dei capitali (Capital Market) e la propria organizzazione interna (Organization). Al centro di queste quattro sfere vi e' il concetto fondamentale di **Stakeholder**.

Gli Stakeholder sono *individui o gruppi che sono influenzati o possono influenzare gli obiettivi dell'impresa*. La loro varieta e' enorme: Owners (azionisti), Customers (clienti), Employees (dipendenti), Government (governo), Community (comunita locale), Lenders (creditori), Society (societa in senso ampio). La gestione del rapporto con gli Stakeholder e' essenziale al raggiungimento del vantaggio competitivo. Gli obiettivi dei diversi Stakeholder possono essere in **conflitto** tra loro e devono pertanto essere gestiti e priorizzati con attenzione strategica.

### 4.2 La Struttura di Mercato

La dottrina economica classifica le strutture di mercato lungo un continuum, i cui estremi teorici sono la concorrenza perfetta e il monopolio puro. Alcuni elementi classici della struttura di mercato sono:

| Caratteristica | Concorrenza Perfetta | Oligopolio | Duopolio | Monopolio |
|---|---|---|---|---|
| **Concentrazione** | Molti | Pochi | Due | Uno |
| **Barriere ingresso/uscita** | Nessuna | Significative | Significative | Alte |
| **Differenziazione Prodotto** | Omogenee | Differenziazione Potenziale | Differenziazione Potenziale | Differenziazione Potenziale |
| **Informazione** | Perfetta | Imperfetta | Imperfetta | Imperfetta |

- **Concorrenza Perfetta:** Infinita molteplicita di piccole imprese, nessuna ha potere di prezzo, prodotti omogenei, piena trasparenza informativa. Esiste quasi solo come modello teorico di riferimento.
- **Oligopolio:** Pochi grandi concorrenti che innalzano pesantissime barriere all'accesso e costruiscono forti differenziazioni di prodotto. Le decisioni di ciascun attore incidono sull'intero mercato (es. mercato automobilistico, telecomunicazioni).
- **Duopolio:** Caso limite dell'oligopolio con soli due attori dominanti (es. Boeing/Airbus nel mercato degli aeromobili commerciali, Visa/Mastercard nei circuiti di pagamento).
- **Monopolio:** Un solo operatore controlla l'intero mercato e puo' fissare liberamente il prezzo. Spesso soggetto a intervento regolatorio pubblico.

### 4.3 Il Vantaggio Competitivo

Un'impresa raggiunge il **Vantaggio Competitivo** solo ed esclusivamente quando riesce ad implementare una strategia che i competitor *non possono duplicare o trovano troppo costoso imitare*.

> *"If you don't have a competitive advantage, don't compete"* — Jack Welch

### 4.4 Profitti ed Extra-Profitti

Il vantaggio competitivo si traduce a bilancio nel concetto di **Extra-profitti**: profitti superiori rispetto a quello che un investitore si aspetterebbe da un investimento con un simile ammontare di rischio. Sono le quote di utile aziendale che **superano il ROE medio di mercato**. Mentre i "profitti normali" remunerano semplicemente il rischio dell'investimento, l'*extra-profitto* segnala il successo tangibile di una scelta strategica superiore.

### 4.5 Tipologie di Profitti (Rendite)

La letteratura strategica identifica cinque categorie distinte di extra-profitti, ciascuna con una diversa origine causale:

- **Rendite Monopolistiche:** Extra-profitti ottenuti a causa del fatto che l'impresa incontra una competizione limitata o inesistente. Tipicamente generate da posizioni dominanti, concessioni o brevetti esclusivi.
- **Rendite Ricardiane (o di Efficienza):** Profitti ottenuti poiche l'impresa e' strutturalmente *piu efficiente dei suoi competitor*. A parita di prezzo, produce a costi inferiori, ottenendo margini superiori. Riflettono un vantaggio interno di risorse o processi.
- **Quasi-Rendite:** Rendite di natura temporanea poiche il differenziale di rendimento e' legato ad una risorsa la cui offerta e' in *quantita fissa, non modificabile* nel breve periodo (es. un brevetto in scadenza, una posizione geografica unica). Destinate ad azzerarsi quando la scarsita cessa.
- **Rendite Schumpeteriane (o di Innovazione):** Extra-profitti ottenuti dalla creazione di nuovi prodotti o processi. Sono i premi temporanei che l'innovatore ottiene finche il mercato non replica l'innovazione, avviando un nuovo ciclo di "distruzione creatrice" (Schumpeter).
- **Rendite di Influenza:** Extra-profitti ottenuti dagli attori poiche le "regole del gioco" sono disegnate per favorirli rispetto ai competitor. Emergono quando le istituzioni (norme, leggi, regolamenti) creano asimmetrie artificiali a vantaggio di specifiche imprese.

---

## 5. Il Tripode Strategico

Un framework teorico di fondamentale importanza per comprendere le *fonti* della performance aziendale e' il **Tripode Strategico**. Esso risponde alla domanda: cosa genera un'alta performance? La risposta e' che la strategia e la performance risultante non dipendono da una sola variabile, ma dall'interazione di tre pilastri distinti:

**Analisi Esterna (Fattori Esogeni):**
- **Industry-Based View:** I fattori competitivi strutturali del settore (es. analizzati con il modello delle 5 Forze di Porter). Risponde alla domanda: "Qual e' la struttura del settore in cui opero?".
- **Institutional Conditions:** Il contesto istituzionale, normativo e macro-economico nel quale l'impresa e' immersa (es. sistema legale, politiche governative, cultura nazionale). Questo pilastro funge da "filtro" degli stimoli ambientali e collega l'analisi esterna con quella interna.

**Analisi Interna (Fattori Endogeni):**
- **Resource and Competencies Based View (RBV):** La prospettiva interna per eccellenza, che guarda alle risorse e alle competenze *specifiche dell'impresa* come fonte primaria del vantaggio competitivo. Secondo la RBV, un vantaggio durevole nasce non dalla struttura del settore, ma dal possesso di risorse VRIN: Valuable (Valorose), Rare (Rare), Inimitable (Inimitabili), Non-Substitutable (Non-Sostituibili).

La **Strategia** e' quindi il risultato di un processo decisionale che bilancia e sintetizza queste tre forze (Industry-Based View + Institutional Conditions + Resource-Based View), e dalla qualita di questa sintesi dipende la **Performance** finale dell'impresa. Il Tripode serve ad avvertire i manager che una strategia costruita su un solo pilastro e' intrinsecamente fragile.

---

## 6. Come Definire l'Ambiente Competitivo Specifico del Business

### 6.1 La Segmentazione Prodotto/Mercato: L'Approccio Tradizionale

Storicamente, il concetto di "mercato" veniva definito in modo bidimensionale molto semplice. L'approccio tradizionale incrociava soltanto due criteri di disaggregazione:

**Prodotto** (Aspetti Tecnologici) **+** **Area Geografica** (Aspetti Marketing) **= Mercato**

Questo schema, per quanto utile come punto di partenza, e' intrinsecamente *riduttivo*: non cattura la complessita reale della competizione e porta spesso le imprese a definire il proprio business in modo troppo ristretto (marketing myopia) o troppo ampio. Definire il business come "produciamo automobili" e' radicalmente diverso da definirlo come "forniamo soluzioni di mobilita": il primo esclude la competizione dei trasporti pubblici, del bike-sharing e dei veicoli elettrici; il secondo li include correttamente nello spazio competitivo.

### 6.2 La Definizione di Business

In termini operativi, vale a dire nell'ambito di una scelta di una tecnologia e di una funzione d'uso da soddisfare, un business e':

> *Una combinazione prodotto/mercato distinguibile da altre combinazioni prodotto/mercato per: concorrenti, caratteristiche dei prodotti, clienti, fattori critici di successo, struttura dei costi, minacce e opportunita.*

### 6.3 Il Contributo di Abell: Prodotto, Mercato e le Tre Variabili Chiave

Il contributo seminale di **Derek F. Abell** ha superato i limiti dell'approccio bidimensionale. Secondo Abell, per definire un Business occorre indagare simultaneamente su due concetti-cardine e sulle loro componenti:

**Prodotto** e' la *manifestazione fisica dell'applicazione di una data tecnologia* per lo svolgimento di una determinata funzione d'uso per un particolare gruppo di clienti.

**Mercato** e' *un gruppo di clienti omogeneo*, localizzato in una data area geografica, che presenta un certo bisogno (funzione d'uso) che richiede di essere soddisfatto.

Da questa duplice definizione emergono le **tre variabili chiave** (the Key) che identificano un Business:

1. **Gruppi di Clienti** *(Chi deve essere servito?):* Rappresentano la categoria di persone a cui ci rivolgiamo. Rispondono alla domanda: *chi* deve essere servito? (Es. B2B vs. B2C, giovani vs. anziani, aziende manifatturiere vs. retail).
2. **Funzioni d'Uso** *(Cosa richiedono i clienti?):* Rappresentano il *bisogno* che dobbiamo soddisfare. Rispondono alla domanda: *cosa* richiedono i nostri clienti? (Es. mobilita urbana, status, sicurezza, risparmio di tempo). Le imprese non devono confondere il prodotto fisico con il bisogno latente che esso soddisfa.
3. **Tecnologie** *(Come viene soddisfatto il bisogno?):* Rappresentano le modalita alternative con cui una determinata funzione d'uso puo essere svolta. Rispondono alla domanda: *come* soddisfo il bisogno dei miei clienti? (Es. motore termico vs. motore elettrico, streaming vs. DVD fisico, farmaci chimici vs. bioterapie).

L'individuazione di *"combinazioni significative"* delle tre dimensioni consente l'identificazione di un **Business**. Il modello le' strutturato come un sistema di assi tridimensionali (Gruppi di Clienti, Funzioni d'Uso, Tecnologie) in cui ciascun "blocco" di combinazioni omogenee rappresenta un segmento strategico distinto.

### 6.4 Il Concetto di Business: Sintesi Prodotto/Mercato

Lo schema tridimensionale proposto da Abell puo essere ricondotto al concetto bidimensionale prodotto/mercato, ma con una comprensione molto piu ricca:

- *I prodotti*, infatti, vengono solitamente **descritti in base alla tecnologia utilizzata e alle funzioni svolte**.
- *I mercati serviti*, invece, sono normalmente **descritti in base ai gruppi di clienti e alle funzioni svolte**.

> *"Il prodotto e' quindi la manifestazione fisica dell'applicazione di una data tecnologia allo svolgimento di una determinata funzione per un particolare gruppo di clienti."*

Questa definizione unificante evidenzia come la **funzione d'uso** sia l'elemento centrale di raccordo tra prodotto e mercato, e quindi il perno attorno al quale si costruisce la comprensione del business.

### 6.5 Ampiezza e Differenziazione: Le Due Decisioni Strategiche Fondamentali

Una volta identificate le tre dimensioni del business, l'impresa deve prendere due decisioni strategiche fondamentali che definiscono il perimetro della propria attivita:

**1. L'Ampiezza (Breadth)**
La misura in cui l'azienda e' interessata *a uno o piu* gruppi di clienti, *a una o piu* funzioni d'uso, *a una o piu* tecnologie. Una strategia di ampiezza elevata corrisponde a un approccio generalista (es. una banca universale che serve privati, PMI e grandi aziende con tutti i prodotti finanziari); una strategia di ampiezza ridotta corrisponde a una specializzazione di nicchia (es. una boutique specializzata solo nel wealth management per clienti con alto patrimonio - HNWI).

**2. La Differenziazione**
La misura in cui l'azienda si pone *rispetto ai concorrenti* che operano sulle stesse combinazioni prodotto/mercato. La differenziazione risponde alla domanda: "Come ci distinguiamo dalla concorrenza in ciascuno dei segmenti in cui operiamo?". Puo avvenire su molteplici leve: qualita del prodotto, prezzo, servizio, brand, esperienza d'uso, tempi di consegna, personalizzazione.

La combinazione di *ampiezza* e *differenziazione* definisce il **posizionamento strategico** dell'impresa nel proprio spazio competitivo. Un business definito con precisione lungo le tre dimensioni di Abell, con scelte chiare su ampiezza e differenziazione, fornisce la base solida per costruire e difendere un vantaggio competitivo durevole nel tempo.
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
//  GRAPH 1 — POPULATION GROWTH 2020-2100
// ══════════════════════════════════════════════════════════════
function PopulationGrowthGraph() {
  const [rate, setRate] = useState(0.9); // tasso annuo %

  const yearStart = 2020;
  const yearEnd = 2100;
  const popStart = 8.0; // miliardi nel 2020

  const xMin = yearStart, xMax = yearEnd;
  const yMin = 7, yMax = 25;

  const popAt = (year) => popStart * Math.pow(1 + rate / 100, year - yearStart);

  const pts = [];
  for (let y = yearStart; y <= yearEnd; y += 1) {
    pts.push([toX(y, xMin, xMax), toY(popAt(y), yMin, yMax)]);
  }
  const path = 'M ' + pts.filter(p => p[1] >= PT).map(p => p.join(',')).join(' L ');

  const pop2050 = popAt(2050);
  const pop2100 = popAt(2100);

  return (
    <div className="graph-block">
      <h4 className="graph-title">Proiezione popolazione mondiale 2020-2100: P(t) = 8 mld · (1 + r)ᵗ</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          <Axes xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax} xLabel="anno" yLabel="mld" nX={4} xFmt={v => v.toFixed(0)} yFmt={v => v.toFixed(0)} />
          <path d={path} fill="none" stroke="#0ea5e9" strokeWidth={2.2} />
          {/* baseline 2020 */}
          <circle cx={toX(2020, xMin, xMax)} cy={toY(popStart, yMin, yMax)} r={4} fill="#16a34a" stroke="#fff" strokeWidth={1.5} />
          <text x={toX(2020, xMin, xMax) + 6} y={toY(popStart, yMin, yMax) - 6} fontSize={9} fill="#16a34a">2020: 8mld</text>
          {/* point 2050 */}
          {pop2050 <= yMax && (
            <>
              <circle cx={toX(2050, xMin, xMax)} cy={toY(pop2050, yMin, yMax)} r={4} fill="#f59e0b" stroke="#fff" strokeWidth={1.5} />
              <text x={toX(2050, xMin, xMax) + 6} y={toY(pop2050, yMin, yMax) - 6} fontSize={9} fill="#f59e0b">2050: {pop2050.toFixed(1)}mld</text>
            </>
          )}
          {/* point 2100 */}
          {pop2100 <= yMax && (
            <>
              <circle cx={toX(2100, xMin, xMax)} cy={toY(pop2100, yMin, yMax)} r={6} fill="#dc2626" stroke="#fff" strokeWidth={2} />
              <line x1={toX(2100, xMin, xMax)} y1={PT + cH} x2={toX(2100, xMin, xMax)} y2={toY(pop2100, yMin, yMax)} stroke="#dc2626" strokeDasharray="3,3" strokeWidth={1.2} />
            </>
          )}
        </svg>
        <div className="graph-controls">
          <SliderControl label="Tasso crescita demografica annuo" symbol="r" value={rate} min={0.5} max={2} step={0.05} onChange={setRate} color="#0ea5e9" fmt={v => v.toFixed(2) + '%'} />
          <div className="result-box">
            <div className="result-row"><strong>Pop. 2050</strong> <span>{pop2050.toFixed(2)} mld</span></div>
            <div className="result-row"><strong>Pop. 2100</strong> <span style={{ color: pop2100 > 15 ? '#dc2626' : '#f59e0b' }}>{pop2100.toFixed(2)} mld</span></div>
            <div className="result-row"><strong>Variazione 2020-2100</strong> <span>+{((pop2100 / popStart - 1) * 100).toFixed(0)}%</span></div>
          </div>
          <div className="insight-mini">Le proiezioni ONU stimano circa 10,9 miliardi al 2100 (crescita media ~0,9%/anno). Variazioni anche piccole nel tasso di crescita producono effetti enormi nel lungo periodo per via della natura esponenziale.</div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAPH 2 — AGING POPULATION: età mediana globale
// ══════════════════════════════════════════════════════════════
function AgingGraph() {
  const [year, setYear] = useState(2050);

  const yearStart = 2015;
  const yearEnd = 2100;
  const ageStart = 29.6;
  const ageEnd = 41.9;

  const xMin = yearStart, xMax = yearEnd;
  const yMin = 25, yMax = 45;

  // funzione lineare tra 2015 (29.6) e 2100 (41.9)
  const ageAt = (y) => ageStart + ((y - yearStart) / (yearEnd - yearStart)) * (ageEnd - ageStart);

  const pts = [];
  for (let y = yearStart; y <= yearEnd; y += 1) {
    pts.push([toX(y, xMin, xMax), toY(ageAt(y), yMin, yMax)]);
  }
  const path = 'M ' + pts.map(p => p.join(',')).join(' L ');

  const currentAge = ageAt(year);

  return (
    <div className="graph-block">
      <h4 className="graph-title">Invecchiamento globale: età mediana 2015-2100 (da 29,6 a 41,9 anni)</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          <Axes xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax} xLabel="anno" yLabel="età" nX={5} xFmt={v => v.toFixed(0)} yFmt={v => v.toFixed(0)} />
          <path d={path} fill="none" stroke="#a855f7" strokeWidth={2.2} />
          {/* baseline 2015 */}
          <circle cx={toX(2015, xMin, xMax)} cy={toY(ageStart, yMin, yMax)} r={4} fill="#16a34a" stroke="#fff" strokeWidth={1.5} />
          <text x={toX(2015, xMin, xMax) + 6} y={toY(ageStart, yMin, yMax) + 14} fontSize={9} fill="#16a34a">2015: 29,6</text>
          {/* baseline 2100 */}
          <circle cx={toX(2100, xMin, xMax)} cy={toY(ageEnd, yMin, yMax)} r={4} fill="#dc2626" stroke="#fff" strokeWidth={1.5} />
          <text x={toX(2100, xMin, xMax) - 50} y={toY(ageEnd, yMin, yMax) - 6} fontSize={9} fill="#dc2626">2100: 41,9</text>
          {/* current point */}
          <line x1={toX(year, xMin, xMax)} y1={PT + cH} x2={toX(year, xMin, xMax)} y2={toY(currentAge, yMin, yMax)} stroke="#a855f7" strokeDasharray="3,3" strokeWidth={1.2} />
          <line x1={PL} y1={toY(currentAge, yMin, yMax)} x2={toX(year, xMin, xMax)} y2={toY(currentAge, yMin, yMax)} stroke="#a855f7" strokeDasharray="3,3" strokeWidth={1.2} />
          <circle cx={toX(year, xMin, xMax)} cy={toY(currentAge, yMin, yMax)} r={6} fill="#a855f7" stroke="#fff" strokeWidth={2} />
        </svg>
        <div className="graph-controls">
          <SliderControl label="Anno di proiezione" symbol="t" value={year} min={2020} max={2100} step={1} onChange={setYear} color="#a855f7" fmt={v => v.toFixed(0)} />
          <div className="result-box">
            <div className="result-row"><strong>Età mediana nell'anno {year}</strong> <span style={{ color: '#a855f7' }}>{currentAge.toFixed(1)} anni</span></div>
            <div className="result-row"><strong>Variazione vs 2015</strong> <span>+{(currentAge - ageStart).toFixed(1)} anni</span></div>
            <div className="result-row"><strong>Quota over-60 (2050)</strong> <span>21,4%</span></div>
          </div>
          <div className="insight-mini">L'invecchiamento ridisegna interi settori (sanità, mobilità, prodotti finanziari, silver economy). I paesi con età mediana più alta nel 2005 erano Giappone, Germania e Italia (38-43 anni).</div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAPH 3 — CO2 EMISSIONS: concentrazione atmosferica
// ══════════════════════════════════════════════════════════════
function CO2EmissionsGraph() {
  const [growth, setGrowth] = useState(0.5); // tasso crescita annuo concentrazione %

  const yearStart = 1960;
  const yearNow = 2024;
  const yearEnd = 2050;
  const co2Start = 317; // ppm nel 1960
  const co2Now = 412;   // ppm attuale

  const xMin = yearStart, xMax = yearEnd;
  const yMin = 300, yMax = 550;

  // proiezione futura: 412 * (1 + growth/100)^(t - 2024)
  const co2At = (y) => {
    if (y <= yearNow) {
      // crescita storica calibrata da 317 (1960) a 412 (2024)
      const histRate = Math.pow(co2Now / co2Start, 1 / (yearNow - yearStart)) - 1;
      return co2Start * Math.pow(1 + histRate, y - yearStart);
    }
    return co2Now * Math.pow(1 + growth / 100, y - yearNow);
  };

  const pts = [];
  for (let y = yearStart; y <= yearEnd; y += 1) {
    pts.push([toX(y, xMin, xMax), toY(co2At(y), yMin, yMax)]);
  }
  const histPts = pts.slice(0, yearNow - yearStart + 1).filter(p => p[1] >= PT);
  const projPts = pts.slice(yearNow - yearStart).filter(p => p[1] >= PT);
  const pathHist = 'M ' + histPts.map(p => p.join(',')).join(' L ');
  const pathProj = 'M ' + projPts.map(p => p.join(',')).join(' L ');

  const co2_2030 = co2At(2030);
  const co2_2050 = co2At(2050);

  return (
    <div className="graph-block">
      <h4 className="graph-title">Concentrazione CO₂ atmosferica 1960-2050: storico (412 ppm) e proiezione</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          <Axes xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax} xLabel="anno" yLabel="ppm" nX={5} xFmt={v => v.toFixed(0)} yFmt={v => v.toFixed(0)} />
          {/* soglia 350 ppm (limite IPCC) */}
          <line x1={PL} y1={toY(350, yMin, yMax)} x2={PL + cW} y2={toY(350, yMin, yMax)} stroke="#16a34a" strokeWidth={1} strokeDasharray="4,3" />
          <text x={PL + cW - 100} y={toY(350, yMin, yMax) - 4} fontSize={9} fill="#16a34a">soglia 350 ppm</text>
          {/* soglia 450 ppm (rischio 2°C) */}
          <line x1={PL} y1={toY(450, yMin, yMax)} x2={PL + cW} y2={toY(450, yMin, yMax)} stroke="#dc2626" strokeWidth={1} strokeDasharray="4,3" />
          <text x={PL + cW - 100} y={toY(450, yMin, yMax) - 4} fontSize={9} fill="#dc2626">rischio 450 ppm (2°C)</text>
          {/* historical */}
          <path d={pathHist} fill="none" stroke="#475569" strokeWidth={2} />
          {/* projected */}
          <path d={pathProj} fill="none" stroke="#dc2626" strokeWidth={2.2} strokeDasharray="6,3" />
          {/* current point 2024 */}
          <circle cx={toX(yearNow, xMin, xMax)} cy={toY(co2Now, yMin, yMax)} r={5} fill="#f59e0b" stroke="#fff" strokeWidth={2} />
          <text x={toX(yearNow, xMin, xMax) - 60} y={toY(co2Now, yMin, yMax) - 8} fontSize={9} fill="#f59e0b">oggi: 412 ppm</text>
          {/* point 2050 */}
          {co2_2050 <= yMax && (
            <>
              <circle cx={toX(2050, xMin, xMax)} cy={toY(co2_2050, yMin, yMax)} r={5} fill="#dc2626" stroke="#fff" strokeWidth={2} />
              <line x1={toX(2050, xMin, xMax)} y1={PT + cH} x2={toX(2050, xMin, xMax)} y2={toY(co2_2050, yMin, yMax)} stroke="#dc2626" strokeDasharray="3,3" strokeWidth={1.2} />
            </>
          )}
        </svg>
        <div className="graph-controls">
          <SliderControl label="Tasso crescita annuo emissioni" symbol="g" value={growth} min={0} max={1.5} step={0.05} onChange={setGrowth} color="#dc2626" fmt={v => v.toFixed(2) + '%'} />
          <div className="result-box">
            <div className="result-row"><strong>CO₂ proiettata 2030</strong> <span>{co2_2030.toFixed(0)} ppm</span></div>
            <div className="result-row"><strong>CO₂ proiettata 2050</strong> <span style={{ color: co2_2050 > 450 ? '#dc2626' : '#f59e0b' }}>{co2_2050.toFixed(0)} ppm</span></div>
            <div className="result-row"><strong>Δ vs oggi</strong> <span>+{(co2_2050 - co2Now).toFixed(0)} ppm</span></div>
          </div>
          <div className="insight-mini">Le emissioni globali da combustibili fossili dovrebbero crescere del 16% entro il 2030 (35.053 Mt). Superare 450 ppm aumenta significativamente il rischio di +2°C, con conseguenze enormi sulla biodiversità e sui sistemi produttivi.</div>
        </div>
      </div>
    </div>
  );
}

export default function Week1() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', paddingBottom: '4rem' }}>
      <div className="page-header">
        <div style={{ color: 'var(--accent-cyan)', fontWeight: 600, letterSpacing: '0.1em', fontSize: '0.875rem', marginBottom: '0.5rem' }}>SETTIMANA 01</div>
        <h1 className="page-title gradient-text" style={{ fontSize: '3rem' }}>Introduzione e Macroambiente</h1>
      </div>

      <div className="content-section glass-panel markdown-body">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownContent}</ReactMarkdown>
      </div>

      <div className="content-section glass-panel" style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>📊 Visualizzazioni Interattive</h2>
        <PopulationGrowthGraph />
        <AgingGraph />
        <CO2EmissionsGraph />
      </div>
    </div>
  );
}
