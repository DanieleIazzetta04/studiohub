import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Cap9Crescita() {
  return (
    <div className="macro-page">

      {/* ── HEADER ─────────────────────────────────────────── */}
      <div className="macro-header">
        <div className="chapter-badge">Capitolo 9 · Teoria della Crescita nel Lunghissimo Periodo</div>
        <h1 className="macro-title">
          <span className="gradient-text">Solow, Popolazione</span>
          <br />e Progresso Tecnologico
        </h1>
        <p className="macro-subtitle">
          Come la crescita demografica frena il reddito pro capite, come il progresso tecnologico è l'unica fonte di crescita sostenuta nel lungo periodo, e cosa ci dicono i modelli di crescita endogena.
        </p>
      </div>

      {/* ── SEZIONE 9.1 ────────────────────────────────────── */}
      <section className="macro-section">
        <h2 className="section-title">9.1 Crescita della Popolazione e Stato Stazionario</h2>
        <div className="prose">
          <p>
            Nel capitolo precedente abbiamo visto che il modello di Solow spiega due fatti fondamentali: i paesi che risparmiano di più tendono ad avere più capitale e redditi più alti; i paesi che risparmiano poco restano con poco capitale e redditi bassi.
          </p>
          <p>
            In questo capitolo estendiamo l'analisi introducendo la <strong>crescita della popolazione (n)</strong>. Quando la popolazione cresce rapidamente, il capitale disponibile deve essere distribuito tra un numero sempre maggiore di lavoratori. Questo riduce il capitale <em>per lavoratore</em> (k) e, di conseguenza, il reddito pro capite. In altre parole, una crescita demografica elevata impoverisce lo stato stazionario.
          </p>
          <p>
            Formalmente, allo stato stazionario (dove Δk = 0), l'equazione di equilibrio diventa:
          </p>
          <p className="indent-formula" style={{ textAlign: 'center', fontSize: '1.2rem', margin: '1.5rem 0' }}>
            s · f(k) = (δ + n) · k
          </p>
          <p>
            Il termine <strong>(δ + n)</strong> rappresenta il tasso di "break-even": la quota di investimento necessaria non solo a rimpiazzare il capitale usurato (δ), ma anche a dotare di capitale i nuovi lavoratori che entrano nel mercato del lavoro (n). Usando la produzione Cobb-Douglas y = k^α, si ricava che il reddito di equilibrio è:
          </p>
          <div className="formula-box">
             <div className="formula-main">y* = [ s / (δ + n) ] ^(α / 1 − α)</div>
             <div className="formula-note">Il reddito pro capite di equilibrio <strong>aumenta</strong> con il tasso di risparmio (s) e <strong>diminuisce</strong> con il tasso di crescita della popolazione (n). Questo è confermato empiricamente: i paesi con alta crescita demografica tendono ad avere redditi pro capite più bassi.</div>
          </div>
          <p>
            Attenzione: il rapporto non è necessariamente causale in un solo senso. Mankiw sottolinea che anche la povertà può spingere verso famiglie numerose, ad esempio quando i figli sono l'unica forma di "pensione" per i genitori in assenza di welfare pubblico.
          </p>
        </div>

        <div className="prose" style={{ marginTop: '2.5rem' }}>
          <h3>Due visioni opposte: Malthus vs Kremer</h3>
          <p>
            Nel corso della storia economica, due studiosi hanno interpretato il ruolo della crescita demografica in modo radicalmente opposto.
          </p>
          
          <div className="case-study-grid">
            <div className="case-card">
              <div className="case-icon">📜</div>
              <h4>La visione pessimista di Malthus (1798)</h4>
              <p>
                Thomas Robert Malthus, nel suo <em>Saggio sul principio di popolazione</em> (1798), sosteneva che la popolazione cresce geometricamente mentre le risorse alimentari crescono aritmeticamente. Il risultato inevitabile, secondo lui, era la miseria cronica. Riteneva anche inutile aiutare i poveri: i sussidi avrebbero solo aumentato le nascite, peggiorando il problema a lungo termine. La storia ha smentito questa previsione, perché Malthus non aveva previsto la potenza del progresso tecnologico.
              </p>
            </div>
             <div className="case-card">
              <div className="case-icon">💡</div>
              <h4>La visione ottimista di Kremer (1993)</h4>
              <p>
                Michael Kremer (Premio Nobel per l'Economia nel 2019) ha proposto la visione opposta. Più persone significa più potenziali inventori, scienziati e innovatori. Kremer ha studiato le popolazioni di continenti isolati fino al 1500: quelli con più abitanti (come l'Eurasia) avanzavano più rapidamente; quelli con popolazioni ridotte e isolate (come la Tasmania) avevano persino dimenticato tecnologie di base nel corso dei secoli. La sua conclusione: la crescita demografica può accelerare il progresso tecnologico, non solo frenarla.
              </p>
            </div>
          </div>
        </div>

        {/* Componente Grafico Popolazione */}
        <PopulationGrowthGraph />

      </section>

      {/* ── SEZIONE 9.2 ────────────────────────────────────── */}
      <section className="macro-section">
        <h2 className="section-title">9.2 Il Progresso Tecnologico nel Modello di Solow</h2>
        <div className="prose">
          <p>
            Fino a questo punto il modello di Solow trattava la tecnologia come una costante: tutti i paesi, nel lungo periodo, convergереbbero verso uno stato stazionario fisso. Ma allora come si spiega che il reddito pro capite cresce nei paesi sviluppati decade dopo decade? La risposta è il <strong>progresso tecnologico</strong>.
          </p>
          <h4>L'efficienza del lavoro (E) e il concetto di "Labour-Augmenting"</h4>
          <p>
            Introduciamo una nuova variabile: <strong>E (efficienza del lavoro)</strong>. E misura la produttività di ogni lavoratore: quanto un lavoratore riesce a produrre con le stesse ore di lavoro, grazie al miglioramento delle tecnologie, dell'istruzione e delle competenze. La funzione di produzione diventa:
          </p>
          <div className="formula-box">
             <div className="formula-main">Y = F(K, L × E)</div>
             <div className="formula-note">Il termine <strong>L × E</strong> rappresenta i cosiddetti <em>"lavoratori effettivi"</em>: non il numero fisico di persone, ma la loro produttività complessiva. Se E raddoppia, un lavoratore produce quanto due lavoravano prima. Si assume che E cresca a un tasso costante <strong>g</strong> (il tasso di progresso tecnologico). Poiché i lavoratori crescono al tasso n ed E cresce al tasso g, i lavoratori effettivi totali crescono al tasso <strong>n + g</strong>.</div>
          </div>

          <h4>Lo stato stazionario con progresso tecnologico</h4>
          <p>
            Ora misuriamo tutto per <em>lavoratore effettivo</em> (non per lavoratore fisico): k = K / (L × E) e y = Y / (L × E). L'equazione di accumulazione del capitale diventa:
          </p>
          <p className="indent-formula" style={{ textAlign: 'center', fontSize: '1.2rem', margin: '1.5rem 0' }}>
            Δk = s · f(k) - (δ + n + g) · k
          </p>
          <p>
            Rispetto a prima, compare un terzo termine nel tasso di break-even: <strong>g</strong>. Anche il progresso tecnologico richiede investimento — serve equipaggiare i lavoratori che diventano via via più produttivi. Lo stato stazionario si raggiunge quando questo investimento bilancia la quota di risparmio.
          </p>
        </div>

        <div className="prose" style={{ marginTop: '2rem' }}>
          <h3>Cosa accade allo stato stazionario? (Tabella riassuntiva)</h3>
          <p>
            Quando Δk = 0, siamo nello stato stazionario. Apparentemente sembra che tutto sia fermo, ma in realtà non è così. Ecco cosa succede a ciascuna grandezza:
          </p>
          <ul>
            <li><strong>Capitale per lavoratore effettivo (k):</strong> costante — tasso di crescita 0.</li>
            <li><strong>Produzione per lavoratore effettivo (y):</strong> costante — tasso di crescita 0.</li>
            <li><strong>Reddito pro capite reale (Y/L):</strong> poiché Y/L = y × E, e E cresce al tasso g, <strong>il reddito pro capite cresce al tasso g ogni anno</strong>. È questo il motore del miglioramento del tenore di vita nel lungo periodo.</li>
            <li><strong>PIL totale (Y):</strong> poiché Y = y × (L × E), cresce al tasso complessivo <strong>n + g</strong>.</li>
          </ul>
               <p>
            Il progresso tecnologico è quindi <em>l'unica spiegazione coerente della crescita sostenuta del reddito pro capite nel lungo periodo</em>. Senza g, lo stato stazionario condanna ogni economia a un reddito fisso.
          </p>
        </div>

        <TechProgressGraph />
        
        <div className="prose">
          <h4>La Regola Aurea aggiornata</h4>
          <p>
            Con progresso tecnologico, la regola aurea (che massimizza i consumi) deve essere aggiornata. Prima era: c* = f(k*) - δ·k*. Ora diventa: c* = f(k*) - (δ + n + g)·k*. Il livello d'oro del capitale si trova dove il prodotto marginale del capitale al netto dell'ammortamento è uguale al tasso di crescita naturale dell'economia:
          </p>
          <p className="indent-formula" style={{ textAlign: 'center', fontSize: '1.1rem', margin: '1.5rem 0' }}>
            <strong>PMK - δ = n + g</strong>
          </p>
          <p>
            In pratica: se il rendimento netto del capitale è superiore a (n + g), conviene aumentare il risparmio e accumulare più capitale. Se è inferiore, stiamo risparmiando troppo e consumiamo meno del necessario.
          </p>
        </div>
      </section>

      {/* ── SEZIONE 9.3 ─────────────── */}
      <section className="macro-section">
        <h2 className="section-title">9.3 La Teoria della Crescita Endogena</h2>
        <div className="prose">
           <p>
             Il modello di Solow ha un limite riconosciuto: tratta il progresso tecnologico come una variabile <em>esogena</em>, cioè che cade dall'esterno del modello senza spiegarla. Sa che g esiste, ma non dice da dove viene, chi lo produce, né perché alcuni paesi innovano più di altri.
           </p>
           <p>
             La <strong>teoria della crescita endogena</strong>, sviluppata dagli anni '80-'90, cerca di spiegare il progresso tecnologico <em>all'interno</em> del modello economico, come risultato di scelte di investimento in ricerca, istruzione e conoscenza.
           </p>
          
          <h4>Il modello base: Y = A × K</h4>
          <p>
            Il punto di partenza più semplice è il cosiddetto <strong>modello AK</strong>. L'ipotesi chiave è che il capitale K include non solo i macchinari fisici, ma anche il capitale umano (conoscenza, competenze, brevetti, ecc.). Il capitale umano — a differenza di quello fisico — non soffre di rendimenti decrescenti: ogni nuova scoperta è costruita sulle precedenti e apre la strada ad altre ancora.
          </p>
          <div className="formula-box">
             <div className="formula-main">Y = A × K</div>
             <div className="formula-note"><strong>A</strong> è una costante che cattura il livello tecnologico. La funzione di produzione è lineare nel capitale: non ci sono rendimenti decrescenti perché il "capitale" include la conoscenza, che non si logora e anzi si accumula nel tempo.</div>
          </div>
          <p>
            Sostituendo nella equazione di accumulazione del capitale (ΔK = sY - δK) e dividendo per K si ottiene:
          </p>
           <p className="indent-formula" style={{ textAlign: 'center', fontSize: '1.2rem', margin: '1.5rem 0' }}>
            <strong>(ΔK / K) = s · A - δ</strong>
          </p>
          <p>
            Questo è il risultato chiave e rivoluzionario: <strong>il tasso di crescita del capitale è costante e dipende dal tasso di risparmio s</strong>. Se sA &gt; δ, l'economia cresce senza mai raggiungere uno stato stazionario — la crescita è permanente e dipende dalle politiche economiche. A differenza di Solow, qui il governo può influenzare il tasso di crescita di lungo periodo (non solo il livello) agendo sul risparmio, sugli investimenti in R&S e sull'istruzione.
          </p>
        </div>

        <EndogenousGraph />

        <div className="prose" style={{ marginTop: '2.5rem' }}>
          <h3>Estensioni: i modelli a due settori e le esternalità della conoscenza</h3>
          <p>
            I modelli più sofisticati dividono l'economia in due settori: il settore <em>manifatturiero</em>, che produce beni fisici, e il settore della <em>ricerca e sviluppo</em> (R&S), che produce nuova conoscenza. Una quota <strong>u</strong> del capitale umano viene allocata alla ricerca: riduce la produzione di breve periodo, ma aumenta il tasso di crescita tecnologica g nel lungo periodo.
          </p>
          <p>
            Un aspetto cruciale è che la conoscenza genera <strong>esternalità positive</strong>: le scoperte di un'impresa beneficiano anche le altre, perché le idee non si consumano e possono essere usate da tutti. Questa è la famosa metafora di Newton: "mi sono seduto sulle spalle dei giganti". Per questo motivo, il mercato privato tende a sotto-investire in ricerca (il beneficio privato per un'impresa è circa il 6% del valore sociale creato, contro un potenziale collettivo del 40%). Questo giustifica il finanziamento pubblico della ricerca di base.
          </p>

          <div className="callout" style={{ marginTop: '2rem' }}>
            <h4>La "Distruzione Creativa" di Schumpeter</h4>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <div style={{ fontSize: '2.5rem' }}>🌪️</div>
              <div>
                <p>
                  Joseph Schumpeter, nel suo <em>"Capitalismo, socialismo e democrazia"</em> (1942), descrisse il motore del capitalismo con un'espressione diventata celebre: <strong>Distruzione Creativa</strong>.
                </p>
                <p>
                  L'idea è semplice: la crescita non avviene ottimizzando lentamente ciò che esiste, ma attraverso innovazioni radicali che distruggono le tecnologie precedenti e le sostituiscono con qualcosa di nuovo. Gli imprenditori innovatori cercano il profitto di monopolio temporaneo: investono in una nuova tecnologia, eliminano i concorrenti con quella vecchia, e raccolgono i benefici finché un'altra innovazione non li supera a loro volta.
                </p>
                <p>
                  L'esempio più visibile oggi: Amazon ed e-commerce hanno distrutto moltissimi negozi fisici e magazzinieri tradizionali. Ma nel lungo periodo, i prezzi più bassi e la maggiore efficienza hanno aumentato il benessere complessivo dei consumatori e il PIL reale. Schumpeter ci avverte che tentare di bloccare questa distruzione — proteggendo settori in declino per ragioni politiche — rallenta la crescita economica complessiva.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ── CONCLUSIONI FINALI DEL MODELLO ──────────────── */}
      <section className="macro-section conclusion">
        <h2 className="section-title">9.4 Conclusioni</h2>
        <div className="conclusion-grid">
           <div className="conclusion-item">
            <span className="conclusion-icon">📉</span>
            <strong>La crescita demografica riduce il reddito pro capite</strong>
            <p>Paesi con alta crescita della popolazione hanno, ceteris paribus, meno capitale per lavoratore e redditi pro capite più bassi. I dati empirici del Penn World Table confermano questa relazione per circa 160 paesi.</p>
          </div>
          <div className="conclusion-item">
            <span className="conclusion-icon">🚀</span>
            <strong>Il progresso tecnologico (g) è l'unico motore della crescita sostenuta</strong>
            <p>Senza progresso tecnologico, ogni economia converge a uno stato stazionario con reddito fisso. Solo g permette al reddito pro capite di crescere indefinitamente, spiegando il continuo miglioramento del tenore di vita nei paesi avanzati.</p>
          </div>
          <div className="conclusion-item">
            <span className="conclusion-icon">🧠</span>
            <strong>La crescita endogena: le politiche contano davvero</strong>
            <p>Nei modelli di crescita endogena (Y = AK, modelli a due settori), il tasso di crescita dipende dalle scelte di risparmio, istruzione e investimento in R&S. A differenza di Solow, le politiche economiche possono cambiare non solo il livello di reddito, ma il suo tasso di crescita permanente.</p>
          </div>
        </div>
      </section>

    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTI GRAFICI INTERATTIVI (SVG)
// ─────────────────────────────────────────────────────────────────────────────

function PopulationGrowthGraph() {
  const [s, setS] = useState(0.3);
  const [alpha, setAlpha] = useState(0.4);
  const [delta, setDelta] = useState(0.1);
  const [n, setN] = useState(0.05);

  const kStarBase = Math.pow(s / delta, 1 / (1 - alpha));
  const kStarN = Math.pow(s / (delta + n), 1 / (1 - alpha));

  const maxK = Math.max(kStarBase * 1.5, 10);
  const maxY = Math.pow(maxK, alpha) * 1.2;

  const width = 600;
  const height = 350;
  const padding = 40;

  const getX = (val) => padding + (val / maxK) * (width - 2 * padding);
  const getY = (val) => height - padding - (val / maxY) * (height - 2 * padding);

  const pointsSf = Array.from({ length: 50 }, (_, i) => {
    const k = (i / 49) * maxK;
    return `${getX(k)},${getY(s * Math.pow(k, alpha))}`;
  }).join(' ');

  const pointsDeltaOnly = Array.from({ length: 2 }, (_, i) => {
    const k = i * maxK;
    return `${getX(k)},${getY(delta * k)}`;
  }).join(' ');

  const pointsDeltaN = Array.from({ length: 2 }, (_, i) => {
    const k = i * maxK;
    return `${getX(k)},${getY((delta + n) * k)}`;
  }).join(' ');

  return (
    <div className="interactive-graph-container" style={{ marginTop: '2rem' }}>
      <div className="graph-controls" style={{ marginBottom: '1rem' }}>
        <div className="control-group">
          <label>Crescita Demografica (n): {(n * 100).toFixed(1)}%</label>
          <input type="range" min="0" max="0.15" step="0.01" value={n} onChange={(e) => setN(Number(e.target.value))} />
        </div>
      </div>
      <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`}>
        <line x1={padding} y1={height - padding} x2={width - 20} y2={height - padding} stroke="#ccc" />
        <line x1={padding} y1={height - padding} x2={padding} y2={20} stroke="#ccc" />
        <text x={width - 20} y={height - padding - 10} fontSize="12" fill="#666">k</text>
        
        <polyline points={pointsSf} fill="none" stroke="#22d3ee" strokeWidth="2" />
        <text x={width - 60} y={getY(s * Math.pow(maxK, alpha)) - 10} fontSize="12" fill="#22d3ee">s·f(k)</text>

        <polyline points={pointsDeltaOnly} fill="none" stroke="#ff8f00" strokeWidth="1.5" strokeDasharray="4 4" />
        <text x={width - 120} y={getY(delta * maxK) + 15} fontSize="11" fill="#ff8f00">δ·k (In assenza di crescita pop)</text>

        <motion.polyline 
          points={pointsDeltaN} 
          fill="none" 
          stroke="#ef4444" 
          strokeWidth="2" 
          animate={{ points: pointsDeltaN }}
          transition={{ duration: 0.3 }}
        />
        <motion.text 
          x={width - 100} 
          y={getY((delta + n) * maxK) - 10} 
          fontSize="12" 
          fill="#ef4444"
          animate={{ y: getY((delta + n) * maxK) - 10 }}
        >
          (δ + n)·k
        </motion.text>

        <circle cx={getX(kStarBase)} cy={getY(delta * kStarBase)} r="3" fill="#ff8f00" />
        <line x1={getX(kStarBase)} y1={height - padding} x2={getX(kStarBase)} y2={getY(delta * kStarBase)} stroke="#ff8f00" strokeDasharray="4 4" strokeWidth="0.5" />
        <text x={getX(kStarBase)} y={height - padding + 15} fontSize="10" textAnchor="middle" fill="#ff8f00">k*₁</text>

        <motion.circle 
          cx={getX(kStarN)} 
          cy={getY((delta + n) * kStarN)} 
          r="5" 
          fill="#ef4444" 
          animate={{ cx: getX(kStarN), cy: getY((delta + n) * kStarN) }}
        />
        <motion.line 
          x1={getX(kStarN)} 
          y1={height - padding} 
          x2={getX(kStarN)} 
          y2={getY((delta + n) * kStarN)} 
          stroke="#ef4444" 
          strokeDasharray="4 4" 
          animate={{ x1: getX(kStarN), x2: getX(kStarN), y2: getY((delta + n) * kStarN) }}
        />
        <motion.text 
          x={getX(kStarN)} 
          y={height - padding + 30} 
          fontSize="12" 
          fontWeight="bold"
          textAnchor="middle" 
          fill="#ef4444"
          animate={{ x: getX(kStarN) }}
        >
          k*₂
        </motion.text>
      </svg>
      <div className="graph-caption">
        Spostando il cursore della crescita demografica, si visualizza graficamente come la curva del fabbisogno di *break-even* s'inasprisca, intersecando inevitabilmente la parabola del risparmio molto più a monte. Un tasso <strong>n</strong> sfavorevole riduce drasticamente lo status nominale <strong>k*</strong> di dotazione ad operaio, generando povertà diffusa ove non avvengano balzi compensativi ai tassi di risparmio s.
      </div>
    </div>
  );
}

function TechProgressGraph() {
  const [s] = useState(0.25);
  const [alpha] = useState(0.33);
  const [delta] = useState(0.05);
  const [n] = useState(0.02);
  const [g, setG] = useState(0.03);

  const kStarBase = Math.pow(s / (delta + n), 1 / (1 - alpha));
  const kStarTech = Math.pow(s / (delta + n + g), 1 / (1 - alpha));
  
  const width = 600;
  const height = 350;
  const padding = 40;
  const maxK = 15;
  const maxY = Math.pow(maxK, alpha) * 0.4;

  const getX = (val) => padding + (val / maxK) * (width - 2 * padding);
  const getY = (val) => height - padding - (val / maxY) * (height - 2 * padding);

  const pointsSf = Array.from({ length: 50 }, (_, i) => {
    const k = (i / 49) * maxK;
    return `${getX(k)},${getY(s * Math.pow(k, alpha))}`;
  }).join(' ');

  const pointsBaseEndowment = `${getX(0)},${getY(0)} ${getX(maxK)},${getY((delta + n) * maxK)}`;
  const pointsTechEndowment = `${getX(0)},${getY(0)} ${getX(maxK)},${getY((delta + n + g) * maxK)}`;

  return (
    <div className="interactive-graph-container" style={{ marginTop: '2rem' }}>
      <div className="graph-controls">
         <div className="control-group">
          <label>Progresso Tecnologico Efficienza (g): {(g * 100).toFixed(1)}%</label>
          <input type="range" min="0" max="0.10" step="0.01" value={g} onChange={(e) => setG(Number(e.target.value))} />
        </div>
      </div>
      <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`}>
        <line x1={padding} y1={height - padding} x2={width - 20} y2={height - padding} stroke="#ccc" />
        <line x1={padding} y1={height - padding} x2={padding} y2={20} stroke="#ccc" />
        <text x={width - 20} y={height - padding - 10} fontSize="12" fill="#666">k (Capitalizz. a Lav. Effettivo)</text>

        <polyline points={pointsSf} fill="none" stroke="#22d3ee" strokeWidth="2" />
        <text x={width - 60} y={getY(s * Math.pow(maxK, alpha)) - 10} fontSize="12" fill="#22d3ee">s·f(k)</text>

        <polyline points={pointsBaseEndowment} fill="none" stroke="#ef4444" strokeWidth="1" strokeDasharray="5 5" />
        <text x={width - 150} y={getY((delta + n) * maxK) + 20} fontSize="11" fill="#ef4444">(δ+n)k</text>

        <motion.polyline 
          points={pointsTechEndowment} 
          fill="none" 
          stroke="#a855f7" 
          strokeWidth="2" 
          animate={{ points: pointsTechEndowment }}
        />
        <motion.text 
          x={width - 100} 
          y={getY((delta + n + g) * maxK) - 10} 
          fontSize="12" 
          fill="#a855f7"
          animate={{ y: getY((delta + n + g) * maxK) - 10 }}
        >
          (δ+n+g)k
        </motion.text>

        <motion.circle 
          cx={getX(kStarTech)} 
          cy={getY((delta + n + g) * kStarTech)} 
          r="5" 
          fill="#a855f7" 
          animate={{ cx: getX(kStarTech), cy: getY((delta + n + g) * kStarTech) }}
        />
        <motion.line 
          x1={getX(kStarTech)} 
          y1={height - padding} 
          x2={getX(kStarTech)} 
          y2={getY((delta + n + g) * kStarTech)} 
          stroke="#a855f7" 
          strokeDasharray="4 4" 
          animate={{ x1: getX(kStarTech), x2: getX(kStarTech), y2: getY((delta + n + g) * kStarTech) }}
        />
        <motion.text 
          x={getX(kStarTech)} 
          y={height - padding + 20} 
          fontSize="12" 
          textAnchor="middle" 
          fill="#a855f7"
          animate={{ x: getX(kStarTech) }}
        >
          k*
        </motion.text>
      </svg>
      <div className="graph-caption">
        Il tasso $g$ funge da drenaggio sulle economie perché dotare le nuove generazioni a pari macchine virtuali consuma scorta; tuttavia questo assestamento ($k^*$) blocca solo la frazione asettica di efficienza, consentendo ai puri beni consumabili e stipendi civili proiettati fuori-tasso (la reale frazione nominale Y/L della nazione) a correre linearmente ai ritmi stratosferici del {(g * 100).toFixed(1)}% ogni anno!
      </div>
    </div>
  );
}

function EndogenousGraph() {
  const [s, setS] = useState(0.2);
  const A = 0.5;
  const delta = 0.05;

  const width = 600;
  const height = 350;
  const padding = 40;
  const maxK = 100;
  const maxY = maxK * A * 0.3;

  const getX = (val) => padding + (val / maxK) * (width - 2 * padding);
  const getY = (val) => height - padding - (val / maxY) * (height - 2 * padding);

  const pointsInvest = `${getX(0)},${getY(0)} ${getX(maxK)},${getY(s * A * maxK)}`;
  const pointsDeprec = `${getX(0)},${getY(0)} ${getX(maxK)},${getY(delta * maxK)}`;

  return (
    <div className="interactive-graph-container" style={{ marginTop: '2rem' }}>
       <div className="graph-controls">
         <div className="control-group">
          <label>Propensione Marginale al Risparmio Endogeno (s): {(s * 100).toFixed(0)}%</label>
          <input type="range" min="0.05" max="0.30" step="0.01" value={s} onChange={(e) => setS(Number(e.target.value))} />
        </div>
      </div>
      <svg width="100%" height={height} viewBox={`0 0 ${width} ${height}`}>
        <defs>
          <linearGradient id="divergeArea" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="rgba(34, 211, 238, 0.4)" />
            <stop offset="100%" stopColor="rgba(34, 211, 238, 0)" />
          </linearGradient>
        </defs>

        <line x1={padding} y1={height - padding} x2={width - 20} y2={height - padding} stroke="#ccc" />
        <line x1={padding} y1={height - padding} x2={padding} y2={20} stroke="#ccc" />
        <text x={width - 20} y={height - padding - 10} fontSize="12" fill="#666">K Capitale Globale (macchinari + scienza conoscitiva)</text>

        <polyline points={pointsDeprec} fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" />
        <text x={width - 130} y={getY(delta * maxK) + 20} fontSize="12" fill="#ef4444">Deprezzamento Annuo (δK)</text>

        <motion.polyline 
          points={pointsInvest} 
          fill="none" 
          stroke="#22d3ee" 
          strokeWidth="3" 
          animate={{ points: pointsInvest }}
        />
        <motion.text 
          x={width - 160} 
          y={getY(s * A * maxK) - 15} 
          fontSize="12" 
          fontWeight="bold"
          fill="#22d3ee"
          animate={{ y: getY(s * A * maxK) - 15 }}
        >
          Spinta all'Investimento (sAK)
        </motion.text>

        {s * A > delta && (
          <motion.polygon 
            points={`${getX(0)},${getY(0)} ${getX(maxK)},${getY(s * A * maxK)} ${getX(maxK)},${getY(delta * maxK)}`}
            fill="url(#divergeArea)"
            animate={{ points: `${getX(0)},${getY(0)} ${getX(maxK)},${getY(s * A * maxK)} ${getX(maxK)},${getY(delta * maxK)}` }}
          />
        )}
      </svg>
      <div className="graph-caption">
        Nel modello a targa <strong>Y = AK</strong>, non vi riposano ostacoli di rendiconto decrescente! Alzando la propensione a risparmiare del pubblico o del governo oltre la trincea mortifera del deprezzamento fisso (lo scenario fecondo ove perciò si avveri <strong>sA &gt; δ</strong>, zona cromata e traslucida fra rette), lo slancio asintotico a $k^*$ preesistente si sbriciola e ci balestra dentro un'era di volano di ricircolo perpetuo al medesimo tasso divergente infinitamente, del tutto plasmabile ed endogeno ai voleri ministeriali.
      </div>
    </div>
  );
}
