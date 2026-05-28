const lecture2 = {
  id: 2,
  title: "Costi Fissi, Variabili e Margine di Contribuzione",
  subtitle: "Classificazione dei costi e analisi Costi-Volumi-Risultati (CVP)",
  lectureNumber: 2,
  sections: [
    {
      id: "definizione-costo",
      title: "Il concetto di costo e l'oggetto di costo",
      content: `
        <p>Prima di addentrarsi nelle tecniche di analisi dei costi, è necessario fissare con precisione le definizioni di base. In contabilità gestionale, il <strong>costo</strong> è definito come il valore monetario delle risorse impiegate per raggiungere un determinato obiettivo. Questa definizione, apparentemente semplice, porta con sé due implicazioni importanti. La prima è che il costo è sempre legato a uno scopo: le risorse non vengono consumate in astratto, ma in vista di qualcosa da produrre, da offrire o da raggiungere. La seconda è che il costo è espresso in unità monetarie: non si parla di ore di lavoro o di chilogrammi di materia prima in sé, ma del loro valore monetario, che consente di aggregare grandezze eterogenee in un'unica misura comparabile.</p>

        <p>Altrettanto centrale è il concetto di <strong>oggetto di costo</strong> (<em>cost object</em>): qualsiasi elemento per il quale si voglia calcolare una specifica misura di costo. L'oggetto di costo non è necessariamente un prodotto fisico: può essere un servizio (ad esempio un volo aereo da Manchester a Roma), un progetto (l'assemblaggio di un Airbus per British Airways), un'attività specifica (un test di qualità per un'automobile), oppure un'intera unità organizzativa come il dipartimento marketing, del quale interessa conoscere le risorse complessivamente impiegate. La scelta dell'oggetto di costo è una decisione gestionale fondamentale: cambiando l'oggetto di riferimento, cambiano le voci di costo rilevanti, i metodi di attribuzione appropriati e, di conseguenza, le decisioni che il sistema di controllo supporta.</p>

        <p>Nel corso di Pianificazione e Controllo, i costi vengono analizzati principalmente secondo due classificazioni trasversali, che rispondono a domande diverse ma complementari. La prima classificazione guarda al <strong>comportamento del costo in relazione all'output</strong> — come cambiano i costi al variare dei volumi di produzione o di vendita? — e distingue tra costi fissi e costi variabili. La seconda classificazione guarda all'<strong>attribuibilità del costo a specifici oggetti</strong> — quanto è direttamente tracciabile un costo verso un determinato prodotto, servizio o centro? — e distingue tra costi diretti e costi indiretti, argomento che verrà approfondito nella lezione dedicata al modello ABC.</p>
      `
    },
    {
      id: "costi-fissi",
      title: "I costi fissi: comportamento totale e unitario",
      charts: [{ type: 'fixed-cost' }],
      content: `
        <p>Un <strong>costo fisso</strong> è un costo che rimane costante nel suo ammontare complessivo anche quando i volumi di produzione o di vendita variano, nell'ambito di un dato <strong>intervallo di rilevanza</strong> (<em>relevant range</em>). L'intervallo di rilevanza è il range di attività entro il quale le ipotesi sul comportamento dei costi sono valide: al di fuori di quell'intervallo, anche un costo "fisso" potrebbe cambiare, perché l'azienda dovrebbe acquisire ulteriori risorse fisse (un nuovo impianto, un nuovo magazzino, un nuovo supervisore) per sostenere volumi più elevati.</p>

        <p>La funzione matematica del costo fisso totale è estremamente semplice: <strong>CF = a</strong>, dove <em>a</em> è una costante. Il costo fisso totale si rappresenta graficamente come una retta orizzontale: qualunque sia il numero di unità prodotte — 200, 400, 800, 1.000 — il costo rimane invariato. Si immagini un'azienda che paga un canone di locazione annuale di €10.000 per i propri fabbricati industriali. Che produca 400 o 1.000 unità, il canone di affitto rimane €10.000. È questa la logica del costo fisso in totale: il costo non "vede" i volumi di produzione.</p>

        <p>Esempi tipici di costi fissi includono: i <strong>canoni di locazione</strong> degli immobili industriali o commerciali; gli <strong>stipendi dei supervisori e del personale manageriale</strong>, che non variano con la produzione giornaliera; le <strong>quote di ammortamento</strong> dei macchinari a quote costanti; i premi <strong>assicurativi</strong> e i canoni di <strong>leasing</strong> degli impianti. Tutti questi costi devono essere sostenuti indipendentemente da quante unità vengono prodotte in un determinato periodo.</p>

        <p>Diverso è il ragionamento quando si guarda al <strong>costo fisso unitario</strong>, ovvero al costo fisso per singola unità di prodotto. Qui la relazione si inverte: il costo fisso unitario <em>diminuisce</em> all'aumentare del volume di produzione. Se i costi fissi totali sono €10.000 e si producono 400 unità, ogni unità "assorbe" €25 di costi fissi (10.000/400). Se si producono 500 unità, il costo fisso per unità scende a €20 (10.000/500). A 800 unità scende ulteriormente a €12,50; a 1.000 unità a €10. Questo fenomeno è alla base del concetto di <strong>economie di scala</strong>: aumentando i volumi di produzione, il costo fisso si "spalma" su più unità e il costo unitario totale si riduce, migliorando la competitività di prezzo o il margine per unità.</p>

        <p>C'è un'ulteriore osservazione importante sul rapporto tra costi fissi e orizzonte temporale. Nel <strong>breve periodo</strong>, la quota di costi fissi tende ad essere elevata: molte risorse — impianti, contratti di locazione, personale strutturato — non possono essere ridotte rapidamente in risposta a cali di volume. Nel <strong>lungo periodo</strong>, invece, quasi tutti i costi diventano variabili: l'azienda può scegliere di non rinnovare un contratto di affitto, di ridimensionare la struttura produttiva, di rivedere l'organico. È per questo che la distinzione fisso/variabile è sempre relativa all'orizzonte temporale dell'analisi: non esiste un costo "assolutamente fisso" o "assolutamente variabile" in assoluto, ma solo in relazione a un certo periodo di riferimento e a un determinato intervallo di attività.</p>
      `
    },
    {
      id: "costi-variabili",
      title: "I costi variabili: comportamento totale e unitario",
      charts: [{ type: 'variable-cost' }],
      content: `
        <p>Un <strong>costo variabile</strong> è un costo che varia in modo <em>direttamente proporzionale</em> al variare del volume di produzione o vendita. Dove il costo fisso era rappresentato da una retta orizzontale, il costo variabile totale è rappresentato da una retta con pendenza positiva che parte dall'origine: <strong>CV = b × Q</strong>, dove <em>b</em> è il costo variabile unitario e <em>Q</em> è il volume di produzione. La pendenza della retta — cioè il coefficiente <em>b</em> — rappresenta esattamente quanto costa produrre ogni unità aggiuntiva in termini di costi variabili.</p>

        <p>Se, ad esempio, il costo variabile unitario è di €5 per unità, allora produrre 200 unità comporta costi variabili totali di €1.000 (5 × 200), produrre 600 unità porta i costi variabili a €3.000 (5 × 600) e produrre 1.000 unità li porta a €5.000 (5 × 1.000). La proporzionalità è diretta e lineare: ogni unità aggiuntiva aggiunge esattamente €5 di costi variabili al totale.</p>

        <p>Esempi tipici di costi variabili sono le <strong>materie prime dirette</strong> — più prodotti si fabbricano, più materiale si consuma; le <strong>commissioni di vendita</strong> riconosciute agli agenti commerciali — variano in proporzione diretta al fatturato realizzato; il <strong>costo del lavoro diretto</strong> a ore — in molti settori, se si produce di più si lavorano più ore e i costi salariali crescono di conseguenza. In tutti questi casi, la variazione del costo è la conseguenza diretta della variazione del volume di attività.</p>

        <p>La caratteristica speculare rispetto ai costi fissi è il comportamento del <strong>costo variabile unitario</strong>: mentre il costo fisso per unità decresce all'aumentare del volume, il costo variabile per unità rimane costante — almeno nell'intervallo di rilevanza e a parità di condizioni di efficienza produttiva. Nell'esempio precedente, il costo variabile per unità è sempre €5, indipendentemente dal fatto che si producano 200 o 1.000 unità. Questo vale finché le condizioni operative rimangono stabili: se acquistando grandi quantità di materia prima si ottengono sconti sul prezzo, il costo variabile unitario potrebbe ridursi al crescere dei volumi — ma questo è un caso speciale che richiede un'analisi separata.</p>

        <p>La simmetria tra i due tipi di costo può essere riassunta in modo che rimanga impressa: il costo fisso è costante in totale ma variabile per unità; il costo variabile è variabile in totale ma costante per unità. Questa è la chiave logica per non confondersi nelle analisi.</p>
      `
    },
    {
      id: "analisi-cvr",
      title: "L'analisi Costi-Volumi-Risultati (CVR/CVP)",
      content: `
        <p>L'<strong>analisi Costi-Volumi-Risultati</strong> (CVR), nota in letteratura anglosassone come <em>Cost-Volume-Profit analysis</em> (CVP), è uno degli strumenti più potenti e pratici del controllo di gestione. Essa studia le relazioni tra quattro variabili fondamentali della gestione aziendale: i <strong>prezzi di vendita</strong> dei prodotti, i <strong>volumi</strong> prodotti e venduti, i <strong>costi variabili unitari</strong> e i <strong>costi fissi totali</strong>. Capire come queste quattro variabili interagiscono è indispensabile per rispondere a domande operative concrete: a quante unità dobbiamo vendere per coprire tutti i costi? Quanto dobbiamo produrre per raggiungere un determinato obiettivo di profitto? Come cambierebbe il risultato economico se abbassassimo il prezzo di vendita del 5%?</p>

        <p>Il punto di partenza dell'analisi CVR è la costruzione delle due equazioni fondamentali. L'<strong>equazione dei costi totali</strong> somma i costi fissi ai costi variabili totali:</p>

        <p><strong>CT = CF + (CVu × Q)</strong></p>

        <p>dove CT è il costo totale, CF è il totale dei costi fissi (costante per definizione), CVu è il costo variabile per unità e Q è la quantità prodotta. L'<strong>equazione dei ricavi totali</strong> è ancora più semplice:</p>

        <p><strong>RT = PV × Q</strong></p>

        <p>dove RT sono i ricavi totali, PV è il prezzo di vendita unitario e Q la quantità venduta. Nell'analisi CVR di base si assume, per semplificazione, che le unità prodotte siano uguali alle unità vendute — cioè che non ci sia variazione di magazzino.</p>

        <p>Sul piano grafico, la retta dei ricavi parte dall'origine (se non si vende nulla, non si incassa nulla) con una pendenza pari al prezzo unitario PV. La retta dei costi totali parte invece dall'asse delle ordinate a un'altezza uguale ai costi fissi CF (anche con volumi zero, i costi fissi esistono), e poi cresce con una pendenza uguale al costo variabile unitario CVu. Essendo il prezzo di vendita normalmente superiore al costo variabile unitario — altrimenti ogni unità venduta peggiorerebbe la situazione — la retta dei ricavi è più ripida di quella dei costi totali. Le due rette si intersecano in un punto preciso: il <strong>Break-Even Point</strong>, il punto di pareggio. A sinistra di quel punto l'azienda è in perdita (i costi totali superano i ricavi), a destra genera profitto.</p>

        <p>Questo schema grafico, apparentemente elementare, è straordinariamente efficace per visualizzare la struttura economica di un'impresa e per simulare scenari alternativi. Che succede se aumentano i costi fissi? La retta dei costi totali si sposta verso l'alto, il break-even si sposta verso destra: servono più unità vendute per raggiungere il pareggio. Che succede se il costo variabile unitario aumenta? La pendenza della retta dei costi aumenta, avvicinandosi a quella dei ricavi, e il break-even si sposta di nuovo verso destra. Che succede se il prezzo di vendita cresce? La retta dei ricavi diventa più ripida, il punto di intersezione si sposta verso sinistra: bastano meno unità per coprire tutti i costi.</p>
      `
    },
    {
      id: "margine-contribuzione",
      title: "Il Margine di Contribuzione: logica e calcolo",
      content: `
        <p>Il <strong>Margine di Contribuzione</strong> (MC) è il concetto centrale dell'analisi CVR e uno degli indicatori più utilizzati nella pratica del controllo di gestione. La sua logica è intuitiva: è ciò che "rimane" dai ricavi di vendita dopo aver coperto i costi variabili, e che quindi è disponibile per due scopi sequenziali — prima coprire i costi fissi, poi generare profitto.</p>

        <p>Il <strong>Margine di Contribuzione unitario</strong> (MCu) si calcola come differenza tra il prezzo di vendita unitario e il costo variabile unitario:</p>

        <p><strong>MCu = PV − CVu</strong></p>

        <p>Il <strong>Margine di Contribuzione totale</strong> si calcola invece come differenza tra i ricavi totali e i costi variabili totali:</p>

        <p><strong>MC totale = RT − CV totali = (PV × Q) − (CVu × Q) = MCu × Q</strong></p>

        <p>Il margine di contribuzione è un indicatore di redditività al lordo dei costi fissi. Questo è il suo punto di forza: poiché i costi fissi non dipendono dai volumi, il MCu misura esattamente quanto ogni unità venduta contribuisce al recupero dei costi fissi e alla generazione di profitto. Se l'azienda dell'esempio precedente vende un'unità a €20 con un costo variabile di €10, ogni unità venduta "contribuisce" €10 al recupero dei costi fissi e — una volta coperti questi ultimi — all'utile.</p>

        <p>L'interpretazione del margine di contribuzione è ricca di implicazioni operative. Un MCu positivo non significa necessariamente che l'azienda sia in utile: significa che ogni unità venduta riduce la perdita, o aumenta il profitto, di un importo pari al MCu. Un MCu negativo — prezzo di vendita inferiore al costo variabile — significa invece che ogni unità venduta <em>peggiora</em> il risultato economico: in questo caso, produrre di più non è la soluzione ma il problema. Questa distinzione è cruciale in situazioni di crisi o di ristrutturazione, dove si è tentati di abbassare i prezzi per aumentare i volumi senza rendersi conto che si sta vendendo "in perdita variabile".</p>

        <p>Un concetto derivato utile è il <strong>rapporto di contribuzione</strong> (o <em>contribution margin ratio</em>), che esprime il MCu come percentuale del prezzo di vendita: MC% = MCu / PV. Se PV = €20 e CVu = €10, allora MC% = 10/20 = 50%. Questo significa che per ogni euro di ricavi, €0,50 contribuiscono alla copertura dei costi fissi e al profitto. Il rapporto di contribuzione è particolarmente utile quando si confrontano prodotti con prezzi assoluti diversi, o quando si lavora con dati di ricavo aggregato anziché con quantità fisiche.</p>

        <p>Da un punto di vista manageriale, il margine di contribuzione è anche lo strumento con cui si valutano le decisioni di breve periodo relative al <em>mix di produzione</em>. Se un'azienda produce due prodotti con diversi MCu, e la capacità produttiva è un vincolo, è razionale spostare la produzione verso il prodotto con MCu più alto — quello che contribuisce di più per ogni unità (o per ogni ora di capacità utilizzata). Questa logica, sviluppata poi nell'ambito della programmazione lineare e della teoria dei vincoli, parte sempre dalla comprensione del margine di contribuzione.</p>
      `
    },
    {
      id: "break-even",
      title: "Il Break-Even Point: calcolo, interpretazione e applicazioni",
      charts: [{ type: 'cvp', defaults: { cf: 60000, cvu: 10, pv: 20, qmax: 12000, targetProfit: 40000 } }],
      content: `
        <p>Il <strong>Break-Even Point</strong> (BEP), o punto di pareggio, è il volume di produzione e vendita al quale i ricavi totali uguagliano esattamente i costi totali, generando un risultato economico pari a zero — né profitto né perdita. È uno degli indicatori più immediati e pratici dell'analisi CVR, perché risponde a una domanda che ogni imprenditore e ogni manager si pone: quante unità dobbiamo vendere per non andare in perdita?</p>

        <p>La derivazione della formula del BEP è algebricamente semplice. Al punto di pareggio, per definizione, RT = CT. Sostituendo le rispettive espressioni:</p>

        <p><strong>PV × Q* = CF + CVu × Q*</strong></p>

        <p>Raccogliendo Q* a destra e isolando:</p>

        <p><strong>PV × Q* − CVu × Q* = CF</strong><br>
        <strong>Q* × (PV − CVu) = CF</strong><br>
        <strong>Q* = CF / (PV − CVu) = CF / MCu</strong></p>

        <p>Il Break-Even Point in quantità è quindi uguale al totale dei costi fissi diviso il Margine di Contribuzione unitario. La formula ha un'interpretazione economica immediata: il BEP è il numero di unità che devo vendere affinché il margine di contribuzione complessivo (MCu × Q*) sia esattamente sufficiente a coprire tutti i costi fissi. Prima di quel volume sono in perdita; dopo quel volume ogni unità aggiuntiva genera puro profitto pari al MCu.</p>

        <p>Si consideri l'esempio numerico presentato nelle slide del corso:</p>
        <ul>
          <li>Costi fissi annuali: <strong>CF = €60.000</strong></li>
          <li>Prezzo di vendita unitario: <strong>PV = €20</strong></li>
          <li>Costo variabile unitario: <strong>CVu = €10</strong></li>
          <li>Intervallo di rilevanza: 4.000 – 12.000 unità</li>
        </ul>

        <p>Il Margine di Contribuzione unitario è MCu = 20 − 10 = <strong>€10 per unità</strong>.</p>

        <p>Il Break-Even Point è Q* = 60.000 / 10 = <strong>6.000 unità</strong>. Poiché 6.000 rientra nell'intervallo di rilevanza (4.000–12.000), il risultato è valido e interpretabile. Significa che fino a 5.999 unità vendute l'azienda è in perdita; a partire dalla 6.001ª unità inizia a generare profitto.</p>

        <p>L'analisi CVR permette anche di rispondere a una seconda domanda altrettanto frequente: quante unità devo vendere per raggiungere un <strong>profitto target</strong> prestabilito? La logica è identica: il MC totale deve coprire i costi fissi e il profitto desiderato.</p>

        <p><strong>Q (profitto target) = (CF + Profitto target) / MCu</strong></p>

        <p>Nell'esempio, se il management vuole raggiungere un profitto di €40.000:</p>

        <p>Q = (60.000 + 40.000) / 10 = 100.000 / 10 = <strong>10.000 unità</strong>.</p>

        <p>Anche 10.000 rientra nell'intervallo di rilevanza, quindi il calcolo è valido. Significa che vendendo 10.000 unità a €20, con un CVu di €10, si copre l'intero ammontare dei costi fissi (€60.000) e si genera esattamente l'utile desiderato (€40.000). Verifica: RT = 20 × 10.000 = €200.000; CT = 60.000 + (10 × 10.000) = €160.000; Utile = 200.000 − 160.000 = €40.000. ✓</p>

        <p>È importante ricordare che il modello CVR si basa su alcune ipotesi semplificatrici che nella realtà possono non essere sempre verificate: la linearità dei ricavi (prezzo costante indipendentemente dal volume venduto), la linearità dei costi variabili (costo variabile unitario costante), la corrispondenza tra unità prodotte e vendute (nessuna variazione di scorte), e la stabilità del mix di produzione nelle imprese multi-prodotto. Queste ipotesi rendono il modello un approssimazione utile per analisi di breve periodo e per simulazioni gestionali, ma non un sostituto di analisi più dettagliate quando si devono prendere decisioni strategiche di lungo termine.</p>
      `
    },
    {
      id: "margine-sicurezza",
      title: "Il Margine di Sicurezza",
      content: `
        <p>Una volta determinato il Break-Even Point, si può calcolare un ulteriore indicatore di grande utilità pratica: il <strong>Margine di Sicurezza</strong> (<em>Margin of Safety</em>, MS). Il Margine di Sicurezza misura di quanto le vendite previste o effettive superano il volume di pareggio: in altre parole, indica "quanto spazio" ha l'azienda prima di entrare in zona di perdita.</p>

        <p>La formula è semplicemente:</p>

        <p><strong>MS = Volumi di vendita pianificati − Volumi di vendita di equilibrio (BEP)</strong></p>

        <p>Il Margine di Sicurezza può essere espresso sia in unità fisiche che in valore monetario, e spesso si preferisce esprimerlo in termini <strong>percentuali</strong> rispetto ai ricavi totali previsti:</p>

        <p><strong>MS% = (Vendite previste − BEP vendite) / Vendite previste × 100</strong></p>

        <p>Tornando all'esempio precedente: se l'azienda pianifica di vendere 9.000 unità nell'anno e il BEP è a 6.000 unità, il Margine di Sicurezza è di 3.000 unità (9.000 − 6.000). In percentuale: MS% = 3.000 / 9.000 = 33,3%. Questo significa che le vendite dovrebbero crollare di un terzo rispetto alle previsioni prima che l'azienda cominci a registrare perdite. Un MS% del 33% è generalmente considerato un livello di sicurezza confortevole; un MS% del 5-10% segnala invece una situazione di elevata vulnerabilità: basta uno scostamento modesto dalle previsioni per portare l'azienda in perdita.</p>

        <p>L'interpretazione gestionale del Margine di Sicurezza è legata alla struttura dei costi dell'impresa. Un'azienda con una struttura di costi prevalentemente <strong>fissa</strong> — impianti costosi, personale strutturato, contratti di locazione elevati — ha un BEP tendenzialmente alto e quindi un Margine di Sicurezza più basso, a parità di ricavi previsti. È un'azienda con elevata <strong>leva operativa</strong>: piccole variazioni nei volumi di vendita generano grandi variazioni nel risultato economico, sia in positivo che in negativo. Al contrario, un'azienda con struttura di costi prevalentemente variabile ha un BEP più basso, un Margine di Sicurezza più ampio e una leva operativa ridotta: è meno vulnerabile ai cali di volume, ma anche meno capace di sfruttare le economie di scala nei momenti di crescita.</p>

        <p>Il Margine di Sicurezza è quindi non solo un indicatore statico di "quanto siamo lontani dalla perdita", ma anche un segnale della struttura di rischio dell'impresa. In un'analisi di pianificazione, un MS% basso suggerisce di rivedere la struttura dei costi — cercando di trasformare costi fissi in variabili dove possibile, ad esempio attraverso l'outsourcing o contratti di fornitura più flessibili — oppure di rivalutare i prezzi di vendita o le previsioni di volume. In un'analisi di controllo, un MS% che si riduce nel tempo è un segnale di deterioramento della struttura economica dell'impresa che richiede attenzione immediata.</p>

        <p>Riepilogando il framework della lezione, l'analisi CVR ruota intorno a poche formule fondamentali ma straordinariamente informative. Il costo totale si decompone in fissi e variabili: CT = CF + CVu × Q. Il risultato economico è la differenza tra ricavi e costi: Utile = RT − CT = (PV − CVu) × Q − CF = MCu × Q − CF. Il punto di pareggio è Q* = CF / MCu. Il volume necessario per un profitto target è Q = (CF + Profitto target) / MCu. E il Margine di Sicurezza misura quanto siamo distanti da quel punto critico. Quattro variabili, un sistema coerente di decisioni.</p>
      `
    },
    {
      id: "make-or-buy",
      title: "Decisioni Make-or-Buy e il punto di indifferenza tra alternative",
      content: `
        <p>L'analisi CVR diventa uno strumento decisionale potentissimo quando l'impresa deve scegliere tra <strong>alternative produttive diverse</strong>: produrre internamente o acquistare da fornitori esterni (decisione di <em>make-or-buy</em>), oppure scegliere tra due localizzazioni produttive con strutture di costo differenti, o tra due tecnologie con diversi livelli di automazione. In ogni caso il principio è lo stesso: confrontare la <strong>struttura economica</strong> delle due alternative al variare dei volumi.</p>

        <p>Ciascuna alternativa è caratterizzata da una coppia di parametri: i costi fissi (CF) e il costo variabile unitario (CVu). Tipicamente, l'alternativa che richiede investimenti maggiori — produzione interna con stabilimento, macchinari e personale tecnico — ha <strong>CF più alti ma CVu più basso</strong>; l'alternativa "leggera" — acquistare dal fornitore o produrre in un paese a basso costo del lavoro — ha <strong>CF più bassi ma CVu più alto</strong> (per via dei margini del fornitore o dei costi di trasporto). La domanda strategica è: per quale volume di vendita un'alternativa conviene rispetto all'altra?</p>

        <p>Il <strong>punto di indifferenza</strong> è il volume Q* per cui le due alternative producono lo stesso costo totale (e quindi lo stesso risultato operativo, dato che i ricavi a parità di prezzo sono identici). Si trova eguagliando i costi totali delle due alternative:</p>

        <p><strong>CF<sub>A</sub> + CVu<sub>A</sub> × Q = CF<sub>B</sub> + CVu<sub>B</sub> × Q</strong></p>

        <p>Risolvendo rispetto a Q si ottiene la formula del punto di indifferenza:</p>

        <p><strong>Q* = (CF<sub>A</sub> − CF<sub>B</sub>) / (CVu<sub>B</sub> − CVu<sub>A</sub>)</strong></p>

        <p>L'interpretazione è netta. Per volumi <em>inferiori</em> a Q* conviene l'alternativa con i costi fissi più bassi: a bassi volumi i CF non si "spalmano" su molte unità e pesano di più. Per volumi <em>superiori</em> a Q* conviene invece l'alternativa con il costo variabile unitario più basso: con grandi volumi il vantaggio di un CVu ridotto si moltiplica e compensa abbondantemente i maggiori CF. A Q* le due alternative sono indifferenti dal punto di vista economico, e la scelta dipende da considerazioni qualitative (rischio, flessibilità, controllo qualità, strategia).</p>

        <p><strong>Esempio numerico.</strong> Avondale Ltd. valuta dove produrre una scheda di memoria. <em>Irlanda</em>: CF = €480.000, CVu = €23,60. <em>Polonia</em>: CF = €360.000, CVu = €24,60. Il punto di indifferenza è Q* = (480.000 − 360.000) / (24,60 − 23,60) = 120.000 / 1 = <strong>120.000 unità</strong>. Sotto 120.000 unità conviene la Polonia (CF più bassi); sopra, conviene l'Irlanda (CVu inferiore). Se le vendite previste sono 60.000 unità, la Polonia è la scelta economicamente migliore.</p>

        <p>Una variante importante è la decisione <strong>make-or-buy con sconti contrattuali a soglia</strong>: il fornitore può offrire uno sconto sul prezzo di acquisto al superamento di una certa quantità, applicato solamente alle unità eccedenti. In questo caso il costo variabile unitario dell'alternativa "buy" <em>non è costante</em> al variare dei volumi: occorre calcolare separatamente il costo delle unità entro soglia (al prezzo pieno) e di quelle oltre soglia (al prezzo scontato). Il risultato operativo si ottiene come:</p>

        <p><strong>RO = Ricavi − CF − (Q<sub>entro</sub> × CVu<sub>pieno</sub>) − (Q<sub>oltre</sub> × CVu<sub>scontato</sub>)</strong></p>

        <p><strong>Esempio.</strong> BioScan Technologies può acquistare un prodotto a €48/unità, con uno sconto del 10% applicato solamente alle unità oltre le 30.000 acquistate. Aggiungendo costi logistici di €5/unità, il CVu base è €53; oltre la soglia diventa 48 × 0,9 + 5 = €48,20. Su 45.000 unità: 30.000 × 53 + 15.000 × 48,20 = €2.313.000 di costi variabili totali. Con CF di €210.000 e ricavi di €3.375.000 (45.000 × €75), il RO è 3.375.000 − 2.313.000 − 210.000 = <strong>€852.000</strong>.</p>

        <p>La decisione di make-or-buy non è mai puramente quantitativa: il punto di indifferenza fornisce l'argomento economico, ma vanno valutate anche le implicazioni strategiche (controllo del know-how, dipendenza da fornitori, qualità, tempi di consegna, flessibilità nei volumi). Spesso un'impresa che potrebbe convenientemente "buy" sceglie di produrre internamente per ragioni di indipendenza strategica, e viceversa.</p>
      `
    }
  ]
}

export default lecture2
