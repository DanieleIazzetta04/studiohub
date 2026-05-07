import { useState } from 'react';
import './macro.css';

// ══════════════════════════════════════════════════════════════
//  MAIN PAGE COMPONENT
// ══════════════════════════════════════════════════════════════
export default function Cap10Evidenza() {
  return (
    <div className="macro-page">

      {/* ── HEADER ─────────────────────────────────────────── */}
      <div className="macro-header">
        <div className="chapter-badge">Capitolo 10 · Teoria della Crescita nel Lunghissimo Periodo</div>
        <h1 className="macro-title">
          <span className="gradient-text">Crescita Economica:</span>
          <br />Evidenza e Politiche
        </h1>
        <p className="macro-subtitle">
          Come si testa empiricamente il modello di Solow, come si misura il contributo di capitale, lavoro e tecnologia alla crescita, e quali politiche possono effettivamente accelerare il progresso economico di lungo periodo.
        </p>
      </div>

      {/* ── SEZIONE 10.1 ────────────────────────────────────── */}
      <section className="macro-section">
        <h2 className="section-title">10.1 Dalla Teoria all'Evidenza Empirica</h2>
        <div className="prose">
          <p>
            Nei capitoli precedenti abbiamo descritto il modello di Solow in modo teorico. Ora ci chiediamo: <em>cosa succede quando questa teoria viene confrontata con i dati reali?</em> Il Capitolo 10 risponde a tre domande pratiche:
          </p>
          <ul>
            <li>Il modello di Solow spiega le differenze di reddito tra paesi?</li>
            <li>Come si misura il contributo di ciascun fattore produttivo alla crescita?</li>
            <li>Quali politiche pubbliche possono promuovere la crescita economica?</li>
          </ul>
          <p>
            Lo strumento empirico chiave è la <strong>contabilità della crescita</strong> (<em>growth accounting</em>): un metodo per scomporre la crescita del PIL in tre componenti — capitale, lavoro e progresso tecnologico.
          </p>

          <h3>La crescita bilanciata</h3>
          <p>
            Il modello di Solow prevede che, allo stato stazionario, il progresso tecnologico faccia crescere insieme molte variabili chiave. Questa proprietà si chiama <strong>crescita bilanciata</strong> (<em>balanced growth</em>) ed è utile per spiegare la dinamica di lungo periodo dei paesi industrializzati avanzati.
          </p>
          <p>
            I dati statunitensi degli ultimi cinquant'anni confermano questa previsione: la produzione per occupato (Y/L) e il capitale per occupato (K/L) sono cresciuti allo stesso tasso — circa il 2% l'anno. Il rapporto capitale/produzione è quindi rimasto pressoché costante nel tempo, esattamente come prevede il modello. Anche il rendimento reale del capitale (la rendita reale del capitale come quota del PIL) è rimasta sostanzialmente stabile.
          </p>

          <h3>La convergenza</h3>
          <p>
            Il modello di Solow formula una previsione precisa sulla <strong>convergenza</strong>: i paesi poveri dovrebbero crescere più rapidamente di quelli ricchi, avvicinandosi progressivamente al loro stato stazionario. La logica è semplice — i paesi con poco capitale hanno un prodotto marginale del capitale più alto, quindi ogni unità di investimento produce più output.
          </p>
          <p>
            L'evidenza empirica è sfumata:
          </p>
          <ul>
            <li><strong>Convergenza condizionata:</strong> I paesi con strutture simili (tasso di risparmio, crescita demografica, capitale umano) tendono a convergere verso lo stesso stato stazionario. I dati dei diversi Stati Uniti nel XIX secolo ne sono un esempio chiaro.</li>
            <li><strong>Nessuna convergenza incondizionata:</strong> Guardando tutti i paesi del mondo contemporaneamente, i paesi più poveri non crescono sistematicamente più in fretta. Questo perché i paesi differiscono nei tassi di risparmio, nella crescita demografica e nell'efficienza produttiva — hanno stati stazionari diversi, non lo stesso.</li>
          </ul>
          <p>
            La velocità di convergenza stimata empiricamente è intorno al 2% l'anno — coerente con il modello di Solow applicato con i parametri reali.
          </p>
        </div>

        <div className="prose" style={{ marginTop: '2.5rem' }}>
          <h3>L'accumulazione dei fattori e l'efficienza produttiva</h3>
          <p>
            Le differenze di reddito tra paesi possono dipendere da due fonti distinte:
          </p>
          <div className="case-study-grid">
            <div className="case-card">
              <div className="case-icon">🏗️</div>
              <h4>Accumulazione dei fattori</h4>
              <p>
                I paesi hanno quantità diverse di capitale fisico (K) e capitale umano (competenze, istruzione). Un lavoratore in un paese povero potrebbe avere meno strumenti, macchinari e formazione rispetto a uno in un paese ricco, e questo spiega parte del gap nei redditi.
              </p>
            </div>
            <div className="case-card">
              <div className="case-icon">⚙️</div>
              <h4>Efficienza produttiva</h4>
              <p>
                Anche a parità di fattori, i paesi differiscono nell'efficienza con cui li usano. Un lavoratore in un paese povero potrebbe avere gli stessi strumenti ma una produttività marginale molto inferiore, per via di istituzioni deboli, cattiva gestione, corruzione o assenza di leggi che garantiscano i diritti di proprietà.
              </p>
            </div>
          </div>
          <p style={{ marginTop: '1.5rem' }}>
            La ricerca suggerisce che <em>entrambe</em> le componenti contano. Bloom e Van Reenen (2010) hanno dimostrato che le pratiche di gestione aziendale spiegano buona parte delle differenze di produttività tra paesi avanzati — le imprese meglio gestite sono più efficienti, più redditizie e hanno tassi di fallimento più bassi.
          </p>

          <div className="callout" style={{ marginTop: '2rem' }}>
            <h4>📋 Caso di studio: la buona gestione come fonte di produttività</h4>
            <p>
              Bloom e Van Reenen hanno condotto un'indagine su 732 imprese manifatturiere di medie dimensioni in Francia, Germania, Regno Unito e Stati Uniti, assegnando punteggi basati sulla qualità delle pratiche gestionali. Il risultato principale: le aziende con manager migliori ottengono risultati migliori su tutti i fronti — produttività, profitti, crescita, quotazioni di borsa e tassi di fallimento inferiori.
            </p>
            <p>
              Le due spiegazioni principali per la persistenza delle cattive gestioni sono: <strong>(1) la concorrenza insufficiente</strong>, che permette alle imprese mal gestite di sopravvivere senza pressioni competitive; <strong>(2) la primogenitura</strong>, cioè la tendenza di alcune aziende familiari a nominare CEO il figlio maggiore indipendentemente dalle sue competenze.
            </p>
          </div>
        </div>

        <ConvergenceGraph />
      </section>

      {/* ── SEZIONE 10.2 ────────────────────────────────────── */}
      <section className="macro-section">
        <h2 className="section-title">10.2 Contabilità delle Fonti di Crescita</h2>
        <div className="prose">
          <p>
            La <strong>contabilità della crescita</strong> è lo strumento empirico che permette di misurare quanto di ogni punto percentuale di crescita del PIL è spiegato dall'aumento del capitale, dall'aumento del lavoro e dall'aumento della produttività.
          </p>

          <h3>Come funziona: dal prodotto marginale all'equazione della crescita</h3>
          <p>
            Il punto di partenza è la funzione di produzione: Y = AF(K, L). Dalla definizione del prodotto marginale del capitale (PMK) e del prodotto marginale del lavoro (PML), si può dimostrare che la variazione percentuale del PIL è:
          </p>
          <div className="formula-box">
            <div className="formula-main">ΔY/Y = α · (ΔK/K) + (1 − α) · (ΔL/L) + ΔA/A</div>
            <div className="formula-note">
              Dove <strong>α</strong> è la quota del reddito spettante al capitale (circa 0,30 negli USA) e <strong>(1 − α)</strong> è la quota spettante al lavoro (circa 0,70).<br />
              I tre termini rappresentano rispettivamente: <em>contributo del capitale</em>, <em>contributo del lavoro</em>, <em>crescita della produttività totale dei fattori (PTF)</em>.
            </div>
          </div>

          <h3>Il Residuo di Solow (ΔA/A)</h3>
          <p>
            La produttività totale dei fattori (PTF) non si osserva direttamente — si calcola per sottrazione: è la parte della crescita del PIL che resta dopo aver tolto il contributo del capitale e del lavoro. Per questo si chiama <strong>residuo di Solow</strong>, dal nome dell'economista che ha sviluppato il metodo.
          </p>
          <div className="formula-box">
            <div className="formula-main">ΔA/A = ΔY/Y − α · (ΔK/K) − (1 − α) · (ΔL/L)</div>
            <div className="formula-note">
              Il residuo di Solow misura il <em>progresso tecnologico</em> in senso lato: include innovazioni, migliorie organizzative, nuova conoscenza — tout ce qui rende i fattori produttivi più efficienti. Viene usato come misura empirica di ΔA/A.
            </div>
          </div>

          <h3>I dati reali USA: Tabella 10.1</h3>
          <p>
            Applicando questo metodo ai dati statunitensi, si ottengono risultati molto istruttivi:
          </p>
          <div className="case-study-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginTop: '1.5rem' }}>
            <div className="case-card" style={{ textAlign: 'center' }}>
              <div className="case-icon">📅</div>
              <h4>1948–2019</h4>
              <p><strong>ΔY/Y = 3,4%</strong></p>
              <p>Capitale: 1,3% | Lavoro: 1,0% | PTF: 1,1%</p>
            </div>
            <div className="case-card" style={{ textAlign: 'center' }}>
              <div className="case-icon">📈</div>
              <h4>1948–1973 (Boom)</h4>
              <p><strong>ΔY/Y = 4,2%</strong></p>
              <p>Capitale: 1,3% | Lavoro: 1,0% | PTF: 1,9%</p>
            </div>
            <div className="case-card" style={{ textAlign: 'center' }}>
              <div className="case-icon">📉</div>
              <h4>1973–2019 (Rallentamento)</h4>
              <p><strong>ΔY/Y = 3,0%</strong></p>
              <p>Capitale: 1,3% | Lavoro: 1,1% | PTF: 0,7%</p>
            </div>
          </div>
          <p style={{ marginTop: '1.5rem' }}>
            Il dato più interessante è che il contributo del capitale e del lavoro è rimasto stabile nel tempo (~1,3% e ~1,0% rispettivamente). Il cambiamento principale è avvenuto nella <strong>produttività totale dei fattori</strong>: 1,9% nella fase di boom, crollata a 0,7% dopo il 1973. Questo suggerisce che il rallentamento della crescita USA dopo il 1973 è essenzialmente un rallentamento del progresso tecnologico.
          </p>

          <div className="callout" style={{ marginTop: '2rem' }}>
            <h4>📋 Caso di studio: il rallentamento della produttività dopo il 1973</h4>
            <p>
              Intorno al 1973 gli Stati Uniti hanno registrato un improvviso rallentamento della produttività. Tre spiegazioni principali sono state avanzate:
            </p>
            <ul>
              <li><strong>Problemi di misurazione:</strong> i miglioramenti qualitativi dei servizi (sanità, istruzione) sono difficili da quantificare, e quindi la crescita reale potrebbe essere sottostimata nei dati ufficiali.</li>
              <li><strong>Minor qualità della forza lavoro:</strong> il massiccio ingresso delle donne e dei baby boomer nel mercato del lavoro negli anni '70 ha temporaneamente ridotto la produttività media (lavoratori con meno esperienza).</li>
              <li><strong>Esaurimento delle idee:</strong> secondo alcuni economisti, all'inizio degli anni '70 il mondo aveva esaurito le idee più semplici da applicare, entrando in un'era di progresso tecnologico più lento.</li>
            </ul>
            <p>
              A metà degli anni '90 la crescita è ripresa grazie alle tecnologie informatiche e a Internet. Nel decennio conclusosi nel 2019, tuttavia, la PTF è cresciuta solo dello 0,7% l'anno — il rallentamento rimane in parte un mistero aperto.
            </p>
          </div>

          <h3>Il residuo di Solow nel breve periodo</h3>
          <p>
            Il residuo di Solow viene usato non solo per analizzare la crescita di lungo periodo, ma anche per comprendere il <strong>ciclo economico</strong>. Lo stesso residuo che di anno in anno misura il progresso tecnologico, nel breve periodo <em>fluttua in modo significativo</em>: è alto in espansione, negativo nelle recessioni.
          </p>
          <p>
            L'economista Edward Prescott ha interpretato queste fluttuazioni come la prova che il ciclo economico sia guidato da <strong>shock tecnologici</strong> di breve periodo — la cosiddetta <em>teoria del ciclo economico reale</em>. Se questa interpretazione fosse corretta, la politica monetaria sarebbe inutile per stabilizzare l'economia.
          </p>
          <p>
            Molti economisti non condividono questa lettura. La spiegazione alternativa più convincente è il cosiddetto <strong>labor hoarding</strong> (accumulo di manodopera): durante le recessioni, le imprese trattengono lavoratori che non producono al pieno regime, aspettando la ripresa. Questo fa sì che la produzione cali più rapidamente dell'input lavoro. Di conseguenza, il residuo di Solow appare negativo non perché la tecnologia sia peggiorata, ma perché il lavoro effettivo è sovrastimato. Questo spiega perché il residuo sia più <em>ciclico</em> di quanto non lo sia la tecnologia reale.
          </p>
        </div>

        <GrowthAccountingGraph />
      </section>

      {/* ── SEZIONE 10.3 ────────────────────────────────────── */}
      <section className="macro-section">
        <h2 className="section-title">10.3 Le Politiche per Promuovere la Crescita</h2>
        <div className="prose">
          <p>
            Il modello di Solow identifica le determinanti fondamentali del tenore di vita: il risparmio e l'investimento, la qualità del capitale umano, e il tasso di progresso tecnologico. Possiamo usare questa cornice teorica per valutare le politiche economiche più discusse.
          </p>

          <h3>Valutare il tasso di risparmio</h3>
          <p>
            Secondo il modello di Solow, un tasso di risparmio più alto porta a più capitale e a un reddito di equilibrio più alto. Ma gli USA stanno risparmiando troppo o troppo poco rispetto al livello ottimale (la regola aurea)?
          </p>
          <p>
            Per rispondere, occorre confrontare il prodotto marginale netto del capitale (PMK – δ) con il tasso di crescita totale dell'output (n + g). Usando tre dati reali statunitensi:
          </p>
          <ul>
            <li>Il capitale è circa 3 volte il PIL annuo: k ≈ 3y → δk/k = 0,05 → <strong>δ ≈ 5%</strong></li>
            <li>La rendita reale del capitale è circa il 33% del PIL → PMK × k = 0,33y → <strong>PMK ≈ 0,11 (11%)</strong></li>
            <li>Il deprezzamento del capitale è circa il 15% del PIL → δk = 0,15y → <strong>δ = 5%</strong></li>
          </ul>
          <p>
            Quindi PMK – δ ≈ 11% – 5% = <strong>6%</strong>, ben superiore al tasso di crescita dell'economia (n + g ≈ 3%). Questo significa che gli USA si trovano <em>al di sotto</em> del livello di regola aurea: stanno risparmiando <em>meno</em> di quanto sarebbe ottimale. Un aumento del risparmio farebbe crescere il capitale, il PIL e — nel lungo periodo — il consumo.
          </p>

          <h3>Come modificare il tasso di risparmio</h3>
          <p>
            Il governo può influenzare il risparmio in due modi principali:
          </p>
          <div className="case-study-grid">
            <div className="case-card">
              <div className="case-icon">🏛️</div>
              <h4>Risparmio pubblico (avanzo di bilancio)</h4>
              <p>
                Quando le entrate fiscali superano la spesa pubblica, si genera un <strong>avanzo di bilancio</strong>, che aumenta il risparmio nazionale. Al contrario, un deficit (spesa pubblica &gt; entrate) drena il risparmio nazionale, riduce l'investimento e frena la crescita. Uno dei pochi punti su cui c'è ampio consenso tra gli economisti.
              </p>
            </div>
            <div className="case-card">
              <div className="case-icon">💰</div>
              <h4>Incentivi al risparmio privato</h4>
              <p>
                Le politiche di incentivo includono: esenzioni fiscali sui rendimenti del risparmio (come l'IRA o l'ISA anglosassone), riduzione dell'imposta sui capitali, tassazione sui consumi invece che sul reddito. L'efficacia è dibattuta: c'è disaccordo su quanto le famiglie reagiscano agli incentivi fiscali aumentando davvero il risparmio.
              </p>
            </div>
          </div>

          <h3>Allocare il tipo giusto di investimento</h3>
          <p>
            Non tutto il capitale è uguale. Il modello di Solow assume un solo tipo di capitale, ma nella realtà le imprese investono in macchinari, computer, robot; i governi investono in strade, ponti, sistemi idrici (<strong>infrastrutture</strong>). Oltre al capitale fisico, c'è il <strong>capitale umano</strong>: istruzione, formazione, salute.
          </p>
          <p>
            Due considerazioni chiave:
          </p>
          <ul>
            <li><strong>Il capitale umano è importante quanto quello fisico</strong> per spiegare le differenze di reddito tra paesi. Includere la scolarizzazione nel modello di Solow migliora notevolmente la capacità esplicativa del modello.</li>
            <li><strong>Il capitale umano genera esternalità positive:</strong> un lavoratore più istruito aumenta la produttività dei colleghi. Questa esternalità giustifica il finanziamento pubblico dell'istruzione, dato che il mercato privato tenderebbe a sotto-investire.</li>
          </ul>

          <h3>Incentivare il progresso tecnologico</h3>
          <p>
            Il progresso tecnologico è l'unica fonte di crescita permanente del reddito pro capite. Come può il governo promuoverlo?
          </p>
          <div className="case-study-grid">
            <div className="case-card">
              <div className="case-icon">🔬</div>
              <h4>Brevetti e diritti di proprietà intellettuale</h4>
              <p>
                Il sistema dei brevetti garantisce ai ricercatori e alle imprese un monopolio temporaneo sulla loro innovazione. Senza brevetti, nessuno investirebbe in R&amp;S, sapendo che i concorrenti copierebbero subito i risultati. Il lato negativo è che il monopolio crea inefficienze, ma è il prezzo da pagare per incentivare la ricerca.
              </p>
            </div>
            <div className="case-card">
              <div className="case-icon">🎓</div>
              <h4>Sussidi alla ricerca e l'istruzione</h4>
              <p>
                La ricerca genera esternalità positive: le scoperte di un'impresa beneficiano le altre. Il mercato privato quindi sotto-investe in R&amp;S. Molti governi finanziano direttamente la ricerca di base nelle università, prevedono sgravi fiscali per le imprese che investono in R&amp;S, o finanziano agenzie come DARPA negli USA (da cui è nato Internet).
              </p>
            </div>
            <div className="case-card">
              <div className="case-icon">💡</div>
              <h4>Learning by doing e spillover della conoscenza</h4>
              <p>
                Alcune innovazioni emergono non dalla ricerca formale, ma dall'<strong>apprendimento sul campo</strong> (<em>learning by doing</em>): producendo un bene, le imprese migliorano progressivamente i loro processi. Questo apprendimento genera un'<strong>esternalità tecnologica</strong> (<em>spillover della conoscenza</em>): le conoscenze acquisite diventano parte del patrimonio comune della società e beneficiano anche i concorrenti. Poiché il rendimento sociale del capitale è superiore a quello privato, il mercato tende a sotto-investire in queste attività rispetto all'ottimo sociale.
              </p>
            </div>
          </div>

          <div className="callout" style={{ marginTop: '2rem' }}>
            <h4>📋 Caso di studio: la politica industriale nella realtà</h4>
            <p>
              Il dibattito sulla <strong>politica industriale</strong> — cioè se il governo debba favorire settori o imprese strategiche — è antico quanto l'economia. Da Alexander Hamilton (1789) a oggi, la questione è: può lo Stato scegliere i vincitori meglio del mercato?
            </p>
            <p>
              Gli argomenti a favore fanno leva sulle esternalità: se la R&amp;S di un'impresa beneficia l'intera industria, il governo potrebbe giustamente sussidiarla. Il caso più citato è il <strong>MITI giapponese</strong> (Ministero del Commercio internazionale e dell'Industria): viene considerato un abile promotore delle industrie nazionali, salvo poi aver tentato di impedire alla Honda di passare dalle motociclette alle automobili. Il governo ha perso — e la Honda è diventata uno dei produttori di auto più redditizi al mondo.
            </p>
            <p>
              La storia di <strong>ARPANET</strong> mostra invece un caso in cui il governo ha davvero fatto la differenza: creata dal Dipartimento della Difesa USA, è diventata la rete su cui si è costruito Internet. Al contrario, <strong>Solyndra</strong>, un'azienda produttrice di pannelli solari sostenuta con 535 milioni di dollari di garanzie federali, ha dichiarato bancarotta appena due anni dopo — un simbolo dei rischi della politica industriale.
            </p>
            <p>
              Gli economisti sono generalmente scettici: il mercato dovrebbe allocare le risorse ai settori con il prodotto marginale più alto; la politica industriale distorce questo meccanismo. Il giudizio finale dipende dall'efficienza relativa dei mercati rispetto alle istituzioni governative nel riconoscere le tecnologie più meritevoli.
            </p>
          </div>
        </div>
      </section>

      {/* ── SEZIONE 10.4 ────────────────────────────────────── */}
      <section className="macro-section">
        <h2 className="section-title">10.4 Le Istituzioni come Fondamento della Crescita</h2>
        <div className="prose">
          <p>
            Tutti i fattori fin qui discussi — risparmio, capitale umano, tecnologia — dipendono in ultima analisi dalla qualità delle <strong>istituzioni</strong>. Un sistema giuridico solido, diritti di proprietà garantiti, una burocrazia onesta e bassa corruzione sono precondizioni essenziali per la crescita economica di lungo periodo.
          </p>

          <h3>Perché le istituzioni contano</h3>
          <p>
            In un'economia di mercato che funziona, il capitale e il lavoro vengono allocati naturalmente dove il loro prodotto marginale è più alto. Se le istituzioni sono deboli, questo meccanismo non funziona: le imprese a bassa produttività sopravvivono grazie a favoritismi o licenze governative, mentre quelle efficienti non riescono a espandersi. Il risultato è un'allocazione inefficiente delle risorse che riduce il livello medio di produttività — e quindi il PIL.
          </p>

          <div className="callout" style={{ marginTop: '2rem' }}>
            <h4>📋 Caso di studio: allocazione errata in India e Cina</h4>
            <p>
              Hsieh e Klenow hanno analizzato la produttività a livello di singolo impianto in India, Cina e USA. Il divario di produttività tra gli impianti migliori e peggiori in India e Cina è molto più elevato che negli USA. Se quella dispersione si riducesse ai livelli usa, la produttività complessiva del settore manifatturiero aumenterebbe del 30-50% in Cina e del 40-60% in India.
            </p>
            <p>
              Il motivo: i mercati del capitale e del lavoro in questi paesi non allocano le risorse in modo efficiente — le imprese meno produttive sopravvivono grazie ad aiuti pubblici o a interferenze politiche; le più produttive non riescono ad attrarre capitale e lavoratori nel modo migliore possibile.
            </p>
          </div>

          <h3>Un esempio emblematico: Corea del Nord vs Corea del Sud</h3>
          <p>
            Nessun confronto illustra meglio il ruolo delle istituzioni della Corea. All'indomani della Seconda Guerra Mondiale, la Corea fu divisa in due nazioni con la stessa popolazione, la stessa storia, la stessa cultura e quasi la stessa lingua. La Corea del Nord adottò le istituzioni del comunismo sovietico — pianificazione centrale, collettivizzazione, nessuna proprietà privata. La Corea del Sud adottò le istituzioni del capitalismo democratico americano — mercati, diritti di proprietà, apertura commerciale.
          </p>
          <p>
            Oggi il PIL pro capite della Corea del Sud è circa <strong>dieci volte</strong> quello della Corea del Nord. La differenza non è spiegabile da dotazioni di risorse naturali, geografia o cultura: è spiegata quasi interamente dalle istituzioni diverse.
          </p>

          <h3>Common law vs codice napoleonico</h3>
          <p>
            Un'altra differenza istituzionale importante è il sistema giuridico. I paesi con ordinamento di <strong>common law</strong> (di tradizione anglosassone: USA, Regno Unito, Australia, India, Singapore) tendono ad avere mercati dei capitali più sviluppati ed efficienti, con tutele più forti degli azionisti e dei creditori rispetto agli ordinamenti di tipo <strong>francese</strong> (codice napoleonico), che includono molti paesi dell'America Latina e gran parte dei paesi a sviluppo più lento. I dati empirici mostrano che queste differenze giuridiche sono correlate con tassi di crescita economica distinti nel lungo periodo.
          </p>

          <h3>Le origini coloniali e la qualità delle istituzioni</h3>
          <p>
            Una ricerca di Acemoglu, Johnson e Robinson ha documentato un meccanismo che spiega perché le istituzioni differiscono tanto tra paesi oggi. La tesi in quattro passi:
          </p>
          <ol>
            <li><strong>I climi tropicali</strong> erano particolarmente pericolosi per i colonizzatori europei, a causa di malattie come malaria e febbre gialla. I colonizzatori evitavano di insediarsi direttamente nelle zone tropicali.</li>
            <li>Dove i colonizzatori non si insediavano, costruivano <strong>istituzioni estrattive</strong>: progettate per drenare le ricchezze locali verso la madrepatria, non per costruire istituzioni durevoli di governo del territorio.</li>
            <li>Dove invece il clima era favorevole (come le aree temperate che sono oggi USA, Canada, Australia, Nuova Zelanda), i colonizzatori si stabilivano in massa e costruivano <strong>istituzioni inclusive</strong>: diritti di proprietà, tutele legali, limiti al potere di governo.</li>
            <li>Queste istituzioni <strong>persistono fino ad oggi</strong>, secoli dopo la fine del colonialismo, e spiegano ancora gran parte della variabilità nel tenore di vita osservata tra paesi.</li>
          </ol>

          <h3>Cultura, commercio e crescita</h3>
          <p>
            Oltre alle istituzioni formali, altri fattori influenzano la crescita nel lungo periodo:
          </p>
          <div className="case-study-grid">
            <div className="case-card">
              <div className="case-icon">🤝</div>
              <h4>La struttura culturale e la fiducia sociale</h4>
              <p>
                La <strong>fiducia sociale</strong> (o <em>capitale sociale</em>) — la rete di relazioni cooperative tra gli individui — è correlata positivamente con il reddito pro capite. Le società ad alta fiducia coordinano l'attività economica a costi minori. Un esempio calzante: il cambiamento di atteggiamento nei confronti delle donne in molti paesi nell'ultimo secolo. Oggi le donne hanno istruzione e opportunità lavorative nettamente superiori al passato — e questo ha portato a standard di vita più elevati per le famiglie. Le politiche pubbliche non sono i principali determinanti di questi cambiamenti, ma le leggi che ampliano le opportunità educative per le donne giocano comunque un ruolo, integrando l'evoluzione culturale.
              </p>
            </div>
            <div className="case-card">
              <div className="case-icon">🌐</div>
              <h4>Il libero scambio internazionale</h4>
              <p>
                Da Adam Smith in poi, gli economisti sostengono che l'apertura al commercio internazionale promuove la prosperità. I dati di Warner e Sachs (1995) mostrano che le economie più aperte crescono mediamente del <strong>2,3%</strong> l'anno, quelle chiuse solo dello <strong>0,7%</strong>. Tra i paesi in via di sviluppo, le economie più aperte sono cresciute mediamente del 4,5% l'anno, quelle chiuse solo dello 0,7%.
              </p>
            </div>
          </div>

          <div className="callout" style={{ marginTop: '2rem' }}>
            <h4>📋 Caso di studio: il libero scambio fa bene alla crescita economica?</h4>
            <p>
              La correlazione tra commercio e crescita è robusta, ma non implica causalità. L'apertura agli scambi potrebbe essere correlata con altre riforme pro-crescita, rendendo difficile distinguerne l'effetto specifico.
            </p>
            <p>
              Frankel e Romer hanno affrontato il problema con un approccio econometrico sofisticato, usando le <strong>variabili strumentali</strong>: invece di misurare il commercio direttamente, hanno usato fattori geografici (posizione, distanza dai porti, dalle coste) come strumenti per isolare la componente del commercio non influenzata da altri fattori. La conclusione: <em>«se il rapporto tra commercio internazionale e PIL aumenta dell'1%, il reddito pro capite sale solo del 0,5%»</em>. Gli scambi internazionali aumentano il reddito, ma non sono una panacea.
            </p>
            <p>
              Uno scettico potrebbe obiettare che questo è valido solo da un punto di vista teorico: l'evidenza empirica mostra che le nazioni aperte al commercio godono di una maggiore efficienza nella produzione e di un più elevato tenore di vita, ma distinguere gli effetti del libero scambio da quelli delle altre politiche pro-crescita rimane difficile. Il caso dei dazi imposti da Donald Trump nel 2018 è un esempio contemporaneo di questa politica in azione.
            </p>
          </div>
        </div>

        <InstitutionsGraph />
      </section>

      {/* ── CONCLUSIONI ─────────────────────── */}
      <section className="macro-section conclusion">
        <h2 className="section-title">10.5 Conclusioni</h2>
        <div className="conclusion-grid">
          <div className="conclusion-item">
            <span className="conclusion-icon">📊</span>
            <strong>I dati confermano Solow</strong>
            <p>La crescita bilanciata e la convergenza condizionata sono documentate empiricamente. Il modello di Solow, nonostante la sua semplicità, spiega molta della variabilità osservata nei dati.</p>
          </div>
          <div className="conclusion-item">
            <span className="conclusion-icon">⚗️</span>
            <strong>Il residuo di Solow è la chiave</strong>
            <p>Le variazioni nella PTF spiegano quasi tutta la differenza tra il boom economico pre-1973 e il rallentamento successivo. Il progresso tecnologico non è stabile: accelera e decelera per ragioni ancora non del tutto comprese.</p>
          </div>
          <div className="conclusion-item">
            <span className="conclusion-icon">🏛️</span>
            <strong>Le istituzioni fanno la differenza</strong>
            <p>Nessuna politica di risparmio o di R&S funziona senza un sistema istituzionale solido. Diritti di proprietà, buon governo e assenza di corruzione sono precondizioni essenziali per la crescita — e le loro radici storiche condizionano i paesi ancora oggi.</p>
          </div>
        </div>
      </section>

    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAFICO 1: CONVERGENZA — PIL pro capite nel tempo
// ══════════════════════════════════════════════════════════════
function ConvergenceGraph() {
  const [showConvergence, setShowConvergence] = useState(true);

  const W = 520, H = 290;
  const PL = 52, PR = 18, PT = 18, PB = 40;
  const cW = W - PL - PR, cH = H - PT - PB;

  const years = 40;
  const toX = (t) => PL + (t / years) * cW;
  const toY = (v, min, max) => PT + (1 - (v - min) / (max - min)) * cH;

  // Simulazione convergenza: paese ricco e paese povero crescono verso stesso SS
  const ss = 100;
  const richStart = 80;
  const poorStart = 30;
  const speed = 0.06;

  const richPath = Array.from({ length: years + 1 }, (_, t) => {
    const v = ss - (ss - richStart) * Math.exp(-speed * t);
    return `${toX(t).toFixed(1)},${toY(v, 0, 120).toFixed(1)}`;
  }).join('L');

  const poorPath = Array.from({ length: years + 1 }, (_, t) => {
    const v = ss - (ss - poorStart) * Math.exp(-speed * t);
    return `${toX(t).toFixed(1)},${toY(v, 0, 120).toFixed(1)}`;
  }).join('L');

  const noConvergePath = Array.from({ length: years + 1 }, (_, t) => {
    const v = 30 + t * 0.5; // crescita piatta senza convergenza
    return `${toX(t).toFixed(1)},${toY(v, 0, 120).toFixed(1)}`;
  }).join('L');

  const ssY = toY(ss, 0, 120);

  return (
    <div className="graph-container" style={{ marginTop: '2.5rem' }}>
      <div className="graph-header">
        <h3 className="graph-title">Convergenza Condizionata</h3>
        <p className="graph-subtitle">Paesi con struttura simile convergono verso lo stesso stato stazionario</p>
      </div>

      <div className="graph-controls">
        <label className="control-label">
          <input
            type="checkbox"
            checked={showConvergence}
            onChange={e => setShowConvergence(e.target.checked)}
            style={{ marginRight: '0.5rem' }}
          />
          Mostra convergenza
        </label>
      </div>

      <div className="graph-svg-wrap">
        <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%' }}>
          {/* Griglia */}
          {[0, 30, 60, 90, 120].map(v => (
            <line key={v} x1={PL} y1={toY(v, 0, 120)} x2={PL + cW} y2={toY(v, 0, 120)}
              stroke="#e2e8f0" strokeWidth={v === 0 ? 1 : 0.6} />
          ))}

          {/* Assi */}
          <line x1={PL} y1={PT} x2={PL} y2={PT + cH} stroke="#94a3b8" strokeWidth={1.5} />
          <line x1={PL} y1={PT + cH} x2={PL + cW} y2={PT + cH} stroke="#94a3b8" strokeWidth={1.5} />

          {/* Linea stato stazionario */}
          <line x1={PL} y1={ssY} x2={PL + cW} y2={ssY}
            stroke="#f59e0b" strokeWidth={1.5} strokeDasharray="6 3" />
          <text x={PL + cW - 2} y={ssY - 5} textAnchor="end" fontSize={10} fill="#f59e0b">Stato Stazionario</text>

          {/* Paese ricco */}
          <path d={`M${richPath}`} fill="none" stroke="#6366f1" strokeWidth={2.5} />
          <text x={toX(0) + 4} y={toY(richStart, 0, 120) - 6} fontSize={10} fill="#6366f1">Paese ricco</text>

          {/* Paese povero */}
          {showConvergence ? (
            <path d={`M${poorPath}`} fill="none" stroke="#10b981" strokeWidth={2.5} />
          ) : (
            <path d={`M${noConvergePath}`} fill="none" stroke="#ef4444" strokeWidth={2.5} strokeDasharray="5 3" />
          )}
          <text x={toX(0) + 4} y={toY(poorStart, 0, 120) + 14} fontSize={10} fill={showConvergence ? "#10b981" : "#ef4444"}>
            Paese povero
          </text>

          {/* Etichette assi */}
          <text x={PL - 6} y={PT + 4} textAnchor="end" fontSize={10} fill="#94a3b8">PIL/L</text>
          <text x={PL + cW} y={PT + cH + 16} textAnchor="middle" fontSize={10} fill="#94a3b8">Tempo →</text>
        </svg>
      </div>

      <div className="graph-legend">
        <span style={{ color: '#6366f1' }}>━ Paese ricco</span>
        <span style={{ color: showConvergence ? '#10b981' : '#ef4444' }}>
          {showConvergence ? '━ Paese povero (converge)' : '╌ Paese povero (senza convergenza)'}
        </span>
        <span style={{ color: '#f59e0b' }}>╌ Stato Stazionario</span>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAFICO 2: CONTABILITÀ DELLA CRESCITA
// ══════════════════════════════════════════════════════════════
function GrowthAccountingGraph() {
  const [alpha, setAlpha] = useState(0.3);
  const [dKK, setDKK] = useState(4.3);   // % crescita K
  const [dLL, setDLL] = useState(1.4);   // % crescita L
  const [dYY, setDYY] = useState(3.4);   // % crescita Y

  const capitalContrib = +(alpha * dKK).toFixed(2);
  const laborContrib   = +((1 - alpha) * dLL).toFixed(2);
  const tfp            = +(dYY - capitalContrib - laborContrib).toFixed(2);

  const total = Math.max(dYY, 0.1);
  const pCap  = Math.max(0, (capitalContrib / total) * 100);
  const pLab  = Math.max(0, (laborContrib / total) * 100);
  const pTFP  = Math.max(0, (tfp / total) * 100);

  return (
    <div className="graph-container" style={{ marginTop: '2.5rem' }}>
      <div className="graph-header">
        <h3 className="graph-title">Contabilità della Crescita Interattiva</h3>
        <p className="graph-subtitle">Modifica i parametri per vedere come si scompone la crescita del PIL</p>
      </div>

      <div className="graph-controls" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.2rem' }}>
        <label className="control-label">
          α (quota capitale): <strong>{alpha.toFixed(2)}</strong>
          <input type="range" min="0.1" max="0.6" step="0.05" value={alpha}
            onChange={e => setAlpha(+e.target.value)} />
        </label>
        <label className="control-label">
          Crescita K (%): <strong>{dKK.toFixed(1)}</strong>
          <input type="range" min="0" max="10" step="0.1" value={dKK}
            onChange={e => setDKK(+e.target.value)} />
        </label>
        <label className="control-label">
          Crescita L (%): <strong>{dLL.toFixed(1)}</strong>
          <input type="range" min="0" max="5" step="0.1" value={dLL}
            onChange={e => setDLL(+e.target.value)} />
        </label>
        <label className="control-label">
          Crescita Y (%): <strong>{dYY.toFixed(1)}</strong>
          <input type="range" min="0" max="10" step="0.1" value={dYY}
            onChange={e => setDYY(+e.target.value)} />
        </label>
      </div>

      {/* Barra impilata scomposizione */}
      <div style={{ marginTop: '2rem', padding: '0 1rem' }}>
        <p style={{ textAlign: 'center', marginBottom: '0.8rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          Scomposizione di ΔY/Y = {dYY.toFixed(1)}%
        </p>
        <div style={{ display: 'flex', height: '3rem', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ width: `${pCap}%`, background: '#6366f1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', color: 'white', fontWeight: 600, minWidth: pCap > 5 ? undefined : 0 }}>
            {pCap > 8 ? `K: ${capitalContrib}%` : ''}
          </div>
          <div style={{ width: `${pLab}%`, background: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', color: 'white', fontWeight: 600 }}>
            {pLab > 8 ? `L: ${laborContrib}%` : ''}
          </div>
          <div style={{ width: `${pTFP}%`, background: tfp >= 0 ? '#f59e0b' : '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', color: 'white', fontWeight: 600 }}>
            {pTFP > 8 ? `PTF: ${tfp}%` : ''}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '1rem', fontSize: '0.9rem', flexWrap: 'wrap' }}>
          <span><span style={{ display: 'inline-block', width: 12, height: 12, background: '#6366f1', borderRadius: 2, marginRight: 4 }} />Capitale: <strong>{capitalContrib}%</strong></span>
          <span><span style={{ display: 'inline-block', width: 12, height: 12, background: '#10b981', borderRadius: 2, marginRight: 4 }} />Lavoro: <strong>{laborContrib}%</strong></span>
          <span><span style={{ display: 'inline-block', width: 12, height: 12, background: tfp >= 0 ? '#f59e0b' : '#ef4444', borderRadius: 2, marginRight: 4 }} />Residuo Solow (PTF): <strong>{tfp}%</strong></span>
        </div>

        <div className="formula-box" style={{ marginTop: '1.5rem' }}>
          <div className="formula-main" style={{ fontSize: '0.95rem' }}>
            ΔY/Y = α·(ΔK/K) + (1−α)·(ΔL/L) + ΔA/A
          </div>
          <div className="formula-note">
            {dYY.toFixed(1)}% = {alpha.toFixed(2)}×{dKK.toFixed(1)}% + {(1-alpha).toFixed(2)}×{dLL.toFixed(1)}% + ΔA/A
            &nbsp;→&nbsp; <strong>PTF = {tfp}%</strong>
            {tfp < 0 && <span style={{ color: '#ef4444' }}> (regressione tecnologica!)</span>}
          </div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAFICO 3: ISTITUZIONI — PMK vs Regola Aurea
// ══════════════════════════════════════════════════════════════
function InstitutionsGraph() {
  const [s, setS] = useState(0.3);
  const n_plus_g = 0.03; // tasso crescita fisso
  const delta = 0.05;

  const W = 520, H = 260;
  const PL = 52, PR = 18, PT = 18, PB = 40;
  const cW = W - PL - PR, cH = H - PT - PB;

  const kMax = 15;
  const yMax = 2.5;
  const toX = (k) => PL + (k / kMax) * cW;
  const toY = (v) => PT + (1 - Math.min(v, yMax) / yMax) * cH;

  const alpha = 0.33;
  const f = (k) => Math.pow(Math.max(k, 1e-6), alpha);
  const PMKnet = (k) => alpha * Math.pow(Math.max(k, 1e-6), alpha - 1) - delta;

  // Stato stazionario: s*f(k) = (n+g+delta)*k
  let kStar = 1;
  for (let i = 0; i < 200; i++) {
    kStar = Math.pow(s / (n_plus_g + delta), 1 / (1 - alpha));
  }
  const kGolden = Math.pow(alpha / (n_plus_g + delta), 1 / (1 - alpha));

  const sfPath = [];
  const brPath = [];
  for (let i = 1; i <= 200; i++) {
    const k = (i / 200) * kMax;
    sfPath.push(`${toX(k).toFixed(1)},${toY(s * f(k)).toFixed(1)}`);
    brPath.push(`${toX(k).toFixed(1)},${toY((n_plus_g + delta) * k).toFixed(1)}`);
  }

  const kStarX = toX(kStar);
  const kGoldenX = toX(kGolden);

  return (
    <div className="graph-container" style={{ marginTop: '2.5rem' }}>
      <div className="graph-header">
        <h3 className="graph-title">Regola Aurea e Tasso di Risparmio</h3>
        <p className="graph-subtitle">
          Gli USA si trovano al di sotto del livello aureo: PMK – δ ≈ 6% &gt; n+g ≈ 3%
        </p>
      </div>
      <div className="graph-controls">
        <label className="control-label">
          Tasso di risparmio (s): <strong>{(s * 100).toFixed(0)}%</strong>
          <input type="range" min="0.05" max="0.6" step="0.01" value={s}
            onChange={e => setS(+e.target.value)} />
        </label>
      </div>
      <div className="graph-svg-wrap">
        <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%' }}>
          {/* Griglia */}
          {[0.5, 1.0, 1.5, 2.0].map(v => (
            <line key={v} x1={PL} y1={toY(v)} x2={PL + cW} y2={toY(v)} stroke="#e2e8f0" strokeWidth={0.6} />
          ))}
          <line x1={PL} y1={PT} x2={PL} y2={PT + cH} stroke="#94a3b8" strokeWidth={1.5} />
          <line x1={PL} y1={PT + cH} x2={PL + cW} y2={PT + cH} stroke="#94a3b8" strokeWidth={1.5} />

          {/* Curve */}
          <path d={`M${sfPath.join('L')}`} fill="none" stroke="#6366f1" strokeWidth={2.5} />
          <path d={`M${brPath.join('L')}`} fill="none" stroke="#94a3b8" strokeWidth={2} strokeDasharray="6 3" />

          {/* Stato stazionario */}
          {kStar < kMax && (
            <>
              <line x1={kStarX} y1={PT} x2={kStarX} y2={PT + cH}
                stroke="#10b981" strokeWidth={1.5} strokeDasharray="4 3" />
              <text x={kStarX + 4} y={PT + 14} fontSize={10} fill="#10b981">k*</text>
            </>
          )}

          {/* Regola aurea */}
          {kGolden < kMax && (
            <>
              <line x1={kGoldenX} y1={PT} x2={kGoldenX} y2={PT + cH}
                stroke="#f59e0b" strokeWidth={1.5} strokeDasharray="4 3" />
              <text x={kGoldenX + 4} y={PT + 26} fontSize={10} fill="#f59e0b">k (aurea)</text>
            </>
          )}

          <text x={PL + cW - 4} y={toY(s * f(kMax * 0.9)) - 6} textAnchor="end" fontSize={10} fill="#6366f1">s·f(k)</text>
          <text x={PL + cW - 4} y={toY((n_plus_g + delta) * (kMax * 0.95)) - 6} textAnchor="end" fontSize={10} fill="#94a3b8">(n+g+δ)·k</text>
        </svg>
      </div>
      <div className="graph-legend">
        <span style={{ color: '#6366f1' }}>━ Investimento s·f(k)</span>
        <span style={{ color: '#94a3b8' }}>╌ Break-even (n+g+δ)·k</span>
        <span style={{ color: '#10b981' }}>╌ Stato stazionario (k*)</span>
        <span style={{ color: '#f59e0b' }}>╌ Regola aurea (massimo consumo)</span>
      </div>
      <p style={{ textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
        {kStar < kGolden
          ? `k* < k_aurea: gli USA risparmiano MENO dell'ottimo → PMK netto (≈6%) > n+g (≈3%)`
          : `k* > k_aurea: risparmio eccessivo → consumo subottimale`}
      </p>
    </div>
  );
}
