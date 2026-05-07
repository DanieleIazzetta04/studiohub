import { useState } from 'react';

// ─── Stili condivisi ────────────────────────────────────────────────────────
const S = {
  section: { marginBottom: '3rem' },
  h2: { fontSize: '1.6rem', color: 'var(--accent-indigo)', marginBottom: '1rem', marginTop: '2.5rem', fontFamily: 'Outfit, sans-serif', fontWeight: 700 },
  h3: { fontSize: '1.2rem', color: 'var(--text-primary)', marginTop: '1.8rem', marginBottom: '0.7rem', fontFamily: 'Outfit, sans-serif', fontWeight: 600, borderBottom: '1px solid var(--border-color)', paddingBottom: '0.4rem' },
  h4: { fontSize: '1.05rem', color: 'var(--text-primary)', marginTop: '1.3rem', marginBottom: '0.5rem', fontFamily: 'Outfit, sans-serif', fontWeight: 600 },
  p: { color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1rem', fontSize: '1.02rem' },
  formula: { background: 'rgba(67,56,202,0.06)', border: '1px solid rgba(67,56,202,0.15)', borderRadius: '10px', padding: '1rem 1.5rem', margin: '1.2rem 0', fontFamily: 'monospace', fontSize: '1rem', color: 'var(--text-primary)' },
  graphWrap: { background: 'rgba(2,132,199,0.04)', border: '1px solid rgba(2,132,199,0.12)', borderRadius: '12px', padding: '1.5rem', margin: '1.5rem 0' },
  graphTitle: { fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.3rem', fontSize: '1rem' },
  graphSub: { fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' },
  sliderLabel: { fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.4rem' },
  sliderRow: { display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '2px' },
  resultBox: { marginTop: '0.8rem', padding: '0.6rem 0.9rem', background: 'rgba(67,56,202,0.06)', borderRadius: '8px', fontSize: '0.85rem', color: 'var(--text-secondary)' },
  caseCard: { background: 'rgba(255,255,255,0.7)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '1.25rem 1.5rem', margin: '1.2rem 0' },
  caseTitle: { fontWeight: 700, color: 'var(--accent-indigo)', marginBottom: '0.4rem', fontSize: '0.95rem' },
  keyBox: { background: 'rgba(67,56,202,0.05)', border: '1px solid rgba(67,56,202,0.15)', borderLeft: '4px solid var(--accent-indigo)', borderRadius: '0 10px 10px 0', padding: '0.9rem 1.2rem', margin: '1rem 0' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'rgba(67,56,202,0.08)', padding: '0.5rem 0.7rem', textAlign: 'left', fontWeight: 700, color: 'var(--text-primary)', borderBottom: '2px solid rgba(67,56,202,0.2)' },
  td: { padding: '0.45rem 0.7rem', borderBottom: '1px solid var(--border-color)', color: 'var(--text-secondary)' },
};

// ─── Grafico 1: Ritardi di politica e potenziale destabilizzazione ──────────
const PolicyLagsGraph = () => {
  const [lag, setLag] = useState(4); // ritardo della politica in trimestri
  const [strength, setStrength] = useState(0.5);

  // Simuliamo: l'output fluttua naturalmente (ciclo) e la BC agisce con ritardo.
  // Output naturale senza intervento: y(t) = sin(t·2π/20)·3
  // La BC agisce su y(t-lag), cercando di contrastarlo con forza "strength".
  // Ma il suo intervento arriva in ritardo, quindi rischia di rinforzare invece di smorzare.
  const periods = 40;
  const data = [];
  for (let t = 0; t < periods; t++) {
    const natural = Math.sin(t * 2 * Math.PI / 20) * 3;
    // Intervento basato su y(t-lag)
    let intervention = 0;
    if (t - lag >= 0) {
      const observed = Math.sin((t - lag) * 2 * Math.PI / 20) * 3;
      intervention = -strength * observed;
    }
    const withPolicy = natural + intervention;
    data.push({ t, natural, withPolicy, intervention });
  }

  const W = 520, H = 300;
  const PL = 45, PR = 15, PT = 20, PB = 40;
  const pW = W - PL - PR, pH = H - PT - PB;
  const tx = (t) => PL + (t / (periods - 1)) * pW;
  const ty = (v) => PT + pH / 2 - (v / 5) * (pH / 2);

  const naturalPts = data.map(d => `${tx(d.t).toFixed(1)},${ty(d.natural).toFixed(1)}`).join(' ');
  const policyPts = data.map(d => `${tx(d.t).toFixed(1)},${ty(d.withPolicy).toFixed(1)}`).join(' ');

  // Varianza per misurare la stabilizzazione
  const varNat = data.reduce((s, d) => s + d.natural ** 2, 0) / data.length;
  const varPol = data.reduce((s, d) => s + d.withPolicy ** 2, 0) / data.length;
  const stabilizationRatio = varPol / varNat;

  return (
    <div style={S.graphWrap}>
      <div style={S.graphTitle}>Ritardi di policy e rischio di destabilizzazione</div>
      <div style={S.graphSub}>Una politica discrezionale che reagisce con ritardo può rinforzare le fluttuazioni invece di smorzarle</div>

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto', display: 'block' }}>
        <line x1={PL} y1={ty(0)} x2={PL + pW} y2={ty(0)} stroke="#94a3b8" strokeWidth="0.8" />
        {[-4, -2, 2, 4].map(v => (
          <g key={v}>
            <line x1={PL} y1={ty(v)} x2={PL + pW} y2={ty(v)} stroke="rgba(0,0,0,0.04)" />
            <text x={PL - 5} y={ty(v) + 3} textAnchor="end" fontSize="10" fill="#94a3b8">{v > 0 ? '+' : ''}{v}</text>
          </g>
        ))}
        <line x1={PL} y1={PT} x2={PL} y2={PT + pH} stroke="#64748b" strokeWidth="1" />
        <line x1={PL} y1={PT + pH} x2={PL + pW} y2={PT + pH} stroke="#64748b" strokeWidth="1" />

        <polyline points={naturalPts} fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="5,3" />
        <polyline points={policyPts} fill="none" stroke="#dc2626" strokeWidth="2.5" />

        <text x={PL + 8} y={PT + 15} fontSize="11" fill="#94a3b8">— — ciclo naturale</text>
        <text x={PL + 8} y={PT + 30} fontSize="11" fill="#dc2626">— ciclo con politica</text>

        <text x={PL + pW / 2} y={H - 8} textAnchor="middle" fontSize="11" fill="#64748b">Tempo (trimestri)</text>
        <text x={13} y={PT + pH / 2} textAnchor="middle" fontSize="11" fill="#64748b" transform={`rotate(-90,13,${PT + pH / 2})`}>Gap Y − Ȳ</text>
      </svg>

      <div style={{ marginTop: '0.9rem' }}>
        <label style={S.sliderLabel}>Ritardo dell'intervento (trimestri): <strong>{lag}</strong></label>
        <input type="range" min={0} max={10} step={1} value={lag} onChange={e => setLag(+e.target.value)} style={{ width: '100%' }} />
      </div>
      <div style={{ marginTop: '0.6rem' }}>
        <label style={S.sliderLabel}>Forza dell'intervento: <strong>{strength.toFixed(1)}</strong></label>
        <input type="range" min={0} max={1.5} step={0.1} value={strength} onChange={e => setStrength(+e.target.value)} style={{ width: '100%' }} />
      </div>

      <div style={S.resultBox}>
        Rapporto di varianza (politica / ciclo naturale): <strong>{stabilizationRatio.toFixed(2)}</strong>.
        {stabilizationRatio < 0.8 && <> La politica <span style={{ color: '#16a34a', fontWeight: 700 }}>stabilizza</span> efficacemente le fluttuazioni.</>}
        {stabilizationRatio >= 0.8 && stabilizationRatio < 1.2 && <> La politica ha effetto <span style={{ color: '#ea580c', fontWeight: 700 }}>neutro</span>: il rumore dovuto al ritardo annulla il beneficio.</>}
        {stabilizationRatio >= 1.2 && <> La politica <span style={{ color: '#dc2626', fontWeight: 700 }}>destabilizza</span>: agisce in controfase e amplifica il ciclo.</>}
      </div>
    </div>
  );
};

// ─── Grafico 2: Incoerenza temporale ────────────────────────────────────────
const TimeInconsistencyGraph = () => {
  const [scenario, setScenario] = useState('announce'); // 'announce' | 'deviate' | 'rule'

  const data = {
    announce: { pi: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2], Y: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100], label: 'BC promette π=2%, la mantiene', color: '#16a34a' },
    deviate: { pi: [2, 2, 2, 5, 7, 6, 5, 4, 3, 3], Y: [100, 100, 100, 102, 104, 103, 101, 100, 100, 100], label: 'BC promette π=2%, poi devia a sorpresa', color: '#dc2626' },
    rule: { pi: [2, 2, 2, 2.2, 2.5, 2.3, 2.1, 2, 2, 2], Y: [100, 100, 100, 101, 101, 100.5, 100, 100, 100, 100], label: 'BC vincolata da una regola: shock assorbito gradualmente', color: '#0284c7' },
  };

  const curr = data[scenario];

  const W = 520, H = 270;
  const PL = 45, PR = 15, PT = 20, PB = 35;
  const pW = W - PL - PR, pH = H - PT - PB;
  const periods = curr.pi.length;
  const tx = (t) => PL + (t / (periods - 1)) * pW;

  const drawPanel = (series, yMin, yMax, color, title) => {
    const ty = (v) => PT + pH - ((v - yMin) / (yMax - yMin)) * pH;
    const pts = series.map((v, t) => `${tx(t).toFixed(1)},${ty(v).toFixed(1)}`).join(' ');
    return (
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto', display: 'block', background: 'white', borderRadius: '8px', marginBottom: '0.5rem' }}>
        <text x={PL + 6} y={15} fontSize="11" fill="#64748b" fontWeight="700">{title}</text>
        {[yMin, (yMin + yMax) / 2, yMax].map(v => (
          <g key={v}>
            <line x1={PL} y1={ty(v)} x2={PL + pW} y2={ty(v)} stroke="rgba(0,0,0,0.04)" />
            <text x={PL - 4} y={ty(v) + 3} textAnchor="end" fontSize="9" fill="#94a3b8">{v.toFixed(1)}</text>
          </g>
        ))}
        <line x1={PL} y1={PT} x2={PL} y2={PT + pH} stroke="#64748b" strokeWidth="1" />
        <line x1={PL} y1={PT + pH} x2={PL + pW} y2={PT + pH} stroke="#64748b" strokeWidth="1" />
        <polyline points={pts} fill="none" stroke={color} strokeWidth="2.5" />
        {series.map((v, t) => (
          <circle key={t} cx={tx(t)} cy={ty(v)} r="3" fill={color} />
        ))}
        <text x={PL + pW / 2} y={H - 5} textAnchor="middle" fontSize="10" fill="#94a3b8">Periodo</text>
      </svg>
    );
  };

  return (
    <div style={S.graphWrap}>
      <div style={S.graphTitle}>Incoerenza temporale: la tentazione di deviare</div>
      <div style={S.graphSub}>Tre scenari per la politica monetaria dopo l'annuncio di un target π = 2%</div>

      {drawPanel(curr.pi, 1, 8, curr.color, '(a) Inflazione π (%)')}
      {drawPanel(curr.Y, 99, 105, curr.color, '(b) Output Y')}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem', marginTop: '1rem' }}>
        {[
          { k: 'announce', label: 'Mantiene', color: '#16a34a' },
          { k: 'deviate', label: 'Devia', color: '#dc2626' },
          { k: 'rule', label: 'Regola', color: '#0284c7' },
        ].map(b => (
          <button
            key={b.k}
            onClick={() => setScenario(b.k)}
            style={{
              padding: '0.5rem 0.4rem',
              background: scenario === b.k ? b.color : 'rgba(255,255,255,0.7)',
              color: scenario === b.k ? 'white' : 'var(--text-primary)',
              border: `1px solid ${scenario === b.k ? b.color : 'var(--border-color)'}`,
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '0.85rem',
              cursor: 'pointer',
            }}
          >
            {b.label}
          </button>
        ))}
      </div>

      <div style={S.resultBox}>
        <strong>{curr.label}</strong>.{' '}
        {scenario === 'announce' && <>La BC rispetta il proprio impegno: inflazione stabile a 2%, output a Ȳ. È l'equilibrio ottimale ma richiede <em>credibilità perfetta</em>.</>}
        {scenario === 'deviate' && <>La BC, una volta che le aspettative si sono ancorate al 2%, cede alla tentazione di un'espansione monetaria a sorpresa: ottiene un boom temporaneo di Y ma paga con inflazione alta per diversi periodi. La prossima volta nessuno le crederà.</>}
        {scenario === 'rule' && <>La BC è vincolata da una regola che le impedisce di deviare. Uno shock temporaneo si dissipa gradualmente senza spirale inflazionistica. La credibilità è preservata.</>}
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// PAGINA PRINCIPALE
// ═══════════════════════════════════════════════════════════════════════════
export default function Cap17PoliticheStabilizzazione() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', paddingBottom: '5rem' }}>

      <div className="page-header">
        <div style={{ color: 'var(--accent-cyan)', fontWeight: 600, letterSpacing: '0.1em', fontSize: '0.875rem', marginBottom: '0.5rem' }}>CAPITOLO 17 · POLITICA MACROECONOMICA</div>
        <h1 className="page-title gradient-text" style={{ fontSize: '2.6rem', lineHeight: 1.1 }}>Posizioni Alternative sulle<br />Politiche di Stabilizzazione</h1>
        <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', fontSize: '1.05rem', maxWidth: '680px' }}>
          La politica economica deve essere attiva o passiva? Deve seguire regole predefinite o può essere discrezionale? Due grandi dibattiti che hanno attraversato la macroeconomia negli ultimi cent'anni, e che restano aperti oggi.
        </p>
      </div>

      <div className="content-section glass-panel" style={{ padding: '2rem 2.5rem', marginBottom: '2rem' }}>
        <blockquote style={{ borderLeft: '4px solid var(--accent-indigo)', padding: '0.6rem 1.2rem', margin: '0 0 1rem 0', color: 'var(--text-secondary)', fontStyle: 'italic', fontSize: '0.95rem' }}>
          «Il compito della Federal Reserve è di sospingere la musica proprio quando inizia la festa.»
          <div style={{ marginTop: '0.5rem', fontStyle: 'normal', fontSize: '0.85rem' }}>— William McChesney Martin, presidente della Federal Reserve 1951–1970</div>
        </blockquote>
        <blockquote style={{ borderLeft: '4px solid var(--accent-indigo)', padding: '0.6rem 1.2rem', margin: '0 0 1.5rem 0', color: 'var(--text-secondary)', fontStyle: 'italic', fontSize: '0.95rem' }}>
          «Coloro che abbiano oggi i mezzi per combattere le fluttuazioni congiunturali ne hanno creata la maggior parte.»
          <div style={{ marginTop: '0.5rem', fontStyle: 'normal', fontSize: '0.85rem' }}>— Milton Friedman</div>
        </blockquote>

        <p style={S.p}>
          Le due citazioni che aprono il capitolo riassumono la tensione di fondo della macroeconomia moderna. Da un lato la visione "attivista" di McChesney Martin: la banca centrale deve <em>intervenire preventivamente</em> per smorzare le fluttuazioni, togliendo gli eccessi dal ciclo economico proprio quando sembrano funzionare meglio ("spegnere la festa"). Dall'altro la visione "passiva" di Friedman: i tentativi di governare l'economia con interventi discrezionali hanno spesso peggiorato le cose invece di migliorarle, perché le autorità non sanno abbastanza e agiscono con ritardo.
        </p>
        <p style={S.p}>
          In questo capitolo affrontiamo i due grandi dibattiti della politica macroeconomica di stabilizzazione. Il primo riguarda la domanda: <strong>la politica economica dovrebbe essere attiva o passiva</strong>? Il secondo riguarda un altro piano della stessa questione: <strong>la politica economica dovrebbe seguire regole predeterminate o essere discrezionale</strong>? Sono due domande distinte: si può essere attivi ma vincolati da regole (come una banca centrale che segue la regola di Taylor), o passivi in senso stretto (come un'economia in gold standard). L'incrocio tra le due dimensioni dà origine a quattro posizioni possibili, ciascuna con i propri argomenti. Non c'è una risposta unanime, ma ci sono molti argomenti solidi da entrambe le parti.
        </p>
        <p style={S.p}>
          Le questioni affrontate in questo capitolo non sono solo teoriche. Determinano concretamente come si comportano la Federal Reserve, la Banca Centrale Europea, il Tesoro degli Stati Uniti, il Ministero dell'Economia italiano. Determinano se una recessione come quella del 2008 o quella del 2020 venga affrontata con stimoli aggressivi o con austerità. Determinano se un'esplosione inflazionistica come quella post-Covid venga combattuta con tassi al 5% o al 10%. Ogni decisione di policy riflette — talvolta implicitamente — una certa posizione su questi grandi dibattiti.
        </p>
      </div>

      {/* ── SEZ 17.1: Attiva o passiva? ─────────────────────────────── */}
      <div className="content-section glass-panel" style={{ padding: '2rem 2.5rem', marginBottom: '2rem' }}>
        <h2 style={S.h2}>17.1 La politica economica dovrebbe essere attiva o passiva?</h2>
        <p style={S.p}>
          I decisori politici considerano la stabilità economica come una delle loro responsabilità. Come abbiamo visto nei capitoli precedenti, la politica economica può essere utilizzata per stabilizzare l'economia: uno stimolo monetario o fiscale può smorzare una recessione, e una stretta può raffreddare un boom. Il fatto che la politica economica <em>possa</em> stabilizzare l'economia non implica però necessariamente che la politica economica <em>debba</em> agire per stabilizzarla. La domanda che affrontiamo in questa sezione è quindi normativa: è giusto che le autorità intervengano sistematicamente? O è meglio che lascino all'economia la possibilità di aggiustarsi da sola?
        </p>

        <h3 style={S.h3}>I ritardi di attuazione e gli effetti della politica economica</h3>
        <p style={S.p}>
          Gli economisti che ritengono che la politica economica dovrebbe essere <strong>attiva</strong> si basano sull'idea che l'economia è intrinsecamente instabile: gli shock di offerta, gli shock di domanda, le crisi finanziarie e i cicli degli investimenti producono fluttuazioni del reddito e dell'occupazione che sono socialmente costose. In assenza di intervento, queste fluttuazioni possono essere profonde e durature. Una politica economica ben progettata — monetaria o fiscale — può contrarle significativamente, a vantaggio dei lavoratori che evitano la disoccupazione e delle imprese che evitano il fallimento. Il ruolo del governo e della banca centrale è quindi quello di un "medico" dell'economia: diagnosticare la malattia e somministrare la cura.
        </p>
        <p style={S.p}>
          Gli economisti che sostengono la posizione <strong>passiva</strong> non negano che shock e fluttuazioni esistano, ma dubitano che l'intervento sistematico della politica economica possa davvero ridurli. Anzi, sostengono che gli interventi attivi, per come vengono concretamente messi in pratica, possono fare più male che bene. Gli argomenti principali sono due: i ritardi e le difficoltà di previsione.
        </p>
        <p style={S.p}>
          <strong>I ritardi della politica economica</strong>. Un intervento di politica economica — cambiare i tassi d'interesse, varare uno stimolo fiscale — non produce effetti immediati. C'è un ritardo tra il momento in cui uno shock colpisce l'economia e il momento in cui gli effetti dell'intervento si manifestano. Tipicamente si distingue tra:
        </p>
        <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: 1.9 }}>
          <li><strong>Ritardo di riconoscimento</strong> (<em>recognition lag</em>): il tempo che serve alle autorità per capire che uno shock è avvenuto e stimarne la gravità. I dati macroeconomici vengono pubblicati con ritardo (il PIL trimestrale esce 30–45 giorni dopo la fine del trimestre) e vengono frequentemente rivisti. Le autorità prendono decisioni nella nebbia delle statistiche preliminari.</li>
          <li><strong>Ritardo di decisione</strong> (<em>decision lag</em>): il tempo che serve ai decisori per concordare la risposta. Per la politica monetaria è relativamente breve (6–8 settimane tra una riunione del FOMC e la successiva). Per la politica fiscale può essere lunghissimo: negli USA, il passaggio di una legge di spesa richiede il consenso di Camera, Senato e Presidente, processo che può durare mesi o anni.</li>
          <li><strong>Ritardo di attuazione</strong> (<em>implementation lag</em>): il tempo che serve per tradurre la decisione in azione concreta. Un taglio di tassi è immediato; uno stimolo fiscale richiede di approvare contratti, firmare cantieri, avviare programmi — anche qui, mesi o anni.</li>
          <li><strong>Ritardo di risposta</strong> (<em>response lag</em>): il tempo che ci vuole perché l'azione di policy produca effetti reali sull'economia. Per la politica monetaria, studi empirici stimano che il pieno effetto di un cambiamento dei tassi si manifesti dopo 6–18 mesi. Per lo stimolo fiscale è più rapido, ma dipende dalla natura della spesa (trasferimenti hanno effetto rapido; investimenti pubblici hanno effetto lento).</li>
        </ul>
        <p style={S.p}>
          L'effetto combinato di questi ritardi può essere sorprendente. Una politica monetaria attuata oggi contro un rallentamento economico può avere i suoi effetti massimi fra un anno o due, quando il rallentamento forse è già finito e l'economia è tornata alla normalità o in fase espansiva. In questo caso l'intervento, pensato per smorzare il ciclo, finisce per <strong>rinforzarlo</strong>: agisce nella direzione sbagliata.
        </p>

        <PolicyLagsGraph />

        <div style={S.caseCard}>
          <div style={S.caseTitle}>ANALISI DI UN CASO — Errori di previsione durante la Grande Depressione e le crisi recenti</div>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            Leggere, prevedere, reagire a quanto accade nell'economia è operazione notoriamente difficile. Numerosi esempi storici illustrano le difficoltà che le autorità macroeconomiche affrontano nel prendere decisioni in tempo reale.
          </p>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            <strong>La Grande Depressione (1929–33)</strong>: nei mesi successivi al crollo della borsa dell'ottobre 1929, la maggior parte dei previsori macroeconomici — inclusi quelli dell'<em>Harvard Economic Society</em> — prevedeva un rapido ritorno alla normalità. Un report pubblicato nel novembre 1929 sosteneva che "la depressione grave come quella del 1920–21 è oltre ogni probabilità". Invece il PIL americano crollò del 30% nei quattro anni successivi. Gli errori di previsione impedirono alla Fed di intervenire prima con forza adeguata: quando si rese conto della gravità della crisi, era troppo tardi.
          </p>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            <strong>La Grande Recessione (2007–09)</strong>: ancora nel gennaio 2008, dopo che già Bear Stearns aveva mostrato segnali di stress, i membri del FOMC prevedevano una crescita positiva per il 2008. In realtà l'economia americana era già entrata in recessione nel dicembre 2007, come verificato retrospettivamente dal NBER. Anche nel settembre 2008, poche settimane prima del crollo di Lehman Brothers, gli economisti di consenso prevedevano una moderata contrazione seguita da rapida ripresa. La profondità effettiva della crisi fu sottostimata sistematicamente.
          </p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>La crisi pandemica (2020)</strong>: un caso opposto. A marzo-aprile 2020, quando si diffuse il lockdown mondiale, le previsioni erano catastrofiche: si parlava di una Grande Depressione nuova versione, con disoccupazione al 20% per anni. La ripresa è stata invece molto più rapida del previsto grazie ai massicci stimoli fiscali e monetari. Anche qui, le previsioni hanno fallito.
          </p>
        </div>

        <h3 style={S.h3}>Le difficoltà nel formulare previsioni economiche</h3>
        <p style={S.p}>
          Dato che la politica economica influenza l'economia con ritardo, la politica di stabilizzazione deve essere <em>previdente</em>: deve anticipare dove si troverà l'economia quando i suoi interventi avranno effetto, non fotografare dove si trova oggi. Ciò significa che ha bisogno di previsioni economiche affidabili.
        </p>
        <p style={S.p}>
          Purtroppo le previsioni macroeconomiche sono notoriamente imprecise. Gli studi del <em>Survey of Professional Forecasters</em> negli Stati Uniti mostrano che l'errore medio delle previsioni di crescita del PIL a un anno si aggira intorno a 1-1.5 punti percentuali, con errori molto maggiori nei punti di svolta del ciclo (quando più serve la precisione). Le previsioni di inflazione a lungo termine sono migliori, quelle di breve termine spesso no.
        </p>
        <p style={S.p}>
          Il problema non è solo "non abbiamo abbastanza dati": anche quando i dati ci sono, i modelli falliscono perché l'economia è un sistema complesso, adattativo, in cui i comportamenti degli agenti reagiscono ai modelli stessi usati dai decisori di policy. La <strong>critica di Lucas</strong> — che abbiamo già incontrato nei capitoli precedenti — dice esattamente questo: i parametri stimati nei modelli macroeconomici si basano su comportamenti passati degli agenti, e questi comportamenti cambiano quando cambia il regime di policy. Un modello stimato nell'era Bretton Woods non può prevedere correttamente l'era dei cambi flessibili, perché gli agenti hanno riottimizzato.
        </p>

        <h3 style={S.h3}>L'ignoranza, le aspettative e la critica di Lucas</h3>
        <p style={S.p}>
          Alcuni economisti, fra cui Robert Lucas e altri della scuola delle aspettative razionali, hanno usato queste difficoltà come argomento a favore di una politica passiva. La loro tesi: se gli economisti non sanno prevedere con sufficiente precisione, è meglio che non provino a intervenire. Gli agenti privati si aggiustano da soli: le imprese ricalibrano i prezzi, i lavoratori accettano nuove condizioni salariali, le famiglie riadattano il consumo. Il mercato, ben lasciato libero, trova il proprio equilibrio più rapidamente di quanto un intervento mal tarato possa sperare di ottenere.
        </p>
        <p style={S.p}>
          Gli economisti che sostengono invece la posizione attiva ribattono che non tutti gli shock sono auto-correttivi: alcune recessioni (come quella del 1929 o quella del 2008) sono state così profonde e lunghe che l'aggiustamento spontaneo non è mai arrivato. La disoccupazione negli USA è rimasta sopra il 10% per quattro anni consecutivi durante la Grande Depressione; in Spagna ha superato il 20% per dieci anni consecutivi dopo la crisi del 2008. Questi sono fallimenti del mercato che giustificano l'intervento di policy, anche se imperfetto.
        </p>

        <div style={S.caseCard}>
          <div style={S.caseTitle}>ANALISI DI UN CASO — In che modo l'incertezza influenza l'economia</div>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            Uno studio diffuso di Stock e Watson (<em>Handbook of Macroeconomics</em>, 2016) ha identificato l'<strong>incertezza economica</strong> come una variabile esplicativa dei cicli economici a pieno titolo. Nei periodi di elevata incertezza (misurata dalla volatilità dei mercati, dalla dispersione delle previsioni, dalla frequenza di parole come "incertezza" nella stampa), le famiglie tendono a ritardare consumi di beni durevoli e le imprese a posporre investimenti. L'incertezza è quindi un <em>freno endogeno</em> all'attività.
          </p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            Durante la crisi Covid l'indice di incertezza economica misurato da Baker, Bloom e Davis ha raggiunto livelli mai visti dal secondo dopoguerra. Quando le autorità riescono a ridurre l'incertezza — con comunicazioni credibili, con garanzie esplicite, con impegni chiari su politiche future — possono stabilizzare l'economia più efficacemente di quanto facciano attraverso i tradizionali strumenti di tassi e spesa. Questa è una ragione forte a favore di politiche <em>credibili e annunciate</em>, piuttosto che di politiche discrezionali e imprevedibili.
          </p>
        </div>
      </div>

      {/* ── SEZ 17.2: Regole o discrezionalità? ─────────────────────── */}
      <div className="content-section glass-panel" style={{ padding: '2rem 2.5rem', marginBottom: '2rem' }}>
        <h2 style={S.h2}>17.2 La politica economica dovrebbe seguire regole predeterminate o essere discrezionale?</h2>
        <p style={S.p}>
          Un secondo argomento di discussione tra gli economisti è se la politica economica debba seguire regole predeterminate o essere discrezionale. Una politica <strong>discrezionale</strong> è una politica in cui, di periodo in periodo, le autorità decidono liberamente cosa fare, analizzando la situazione caso per caso. Una politica <strong>basata su regole</strong> è una politica in cui le autorità si impegnano a comportarsi in un modo predefinito a seconda delle circostanze, senza margine di manovra soggettivo. Una regola classica è: "la banca centrale alzerà il tasso di interesse di 0,5 punti per ogni punto di inflazione sopra il target" — è la regola di Taylor del capitolo precedente. Un altro esempio di regola è: "l'offerta di moneta deve crescere del 3% ogni anno" — è la regola monetarista proposta da Friedman.
        </p>
        <p style={S.p}>
          Il dibattito tra regole e discrezionalità è uno dei più vivaci della politica economica contemporanea. In teoria, la discrezionalità sembra sempre migliore: <em>perché impegnarsi in una regola rigida quando si può decidere caso per caso, adattando la risposta alla situazione specifica?</em>. In pratica, invece, gli economisti hanno scoperto che le regole offrono vantaggi importanti che non sono immediati. Esploriamo le due principali argomentazioni a favore delle regole: la sfiducia nei politici e l'incoerenza temporale.
        </p>

        <h3 style={S.h3}>La sfiducia nei politici e nel processo politico</h3>
        <p style={S.p}>
          Alcuni economisti ritengono che la politica economica sia troppo importante per essere lasciata alla discrezionalità dei politici. La politica economica ha ampie ripercussioni sul benessere collettivo, e i politici sono soggetti a un'ampia gamma di tentazioni: il ciclo elettorale può spingere a stimolare l'economia prima del voto (per farsi rieleggere) anche se poi si dovrà stringere dopo, con un'inflazione complessiva più alta della media desiderabile. Gli interessi particolari di gruppi di pressione possono distorcere la spesa pubblica verso settori clientelari invece che verso gli usi produttivi. Le scelte di politica monetaria possono essere influenzate da pressioni del governo per ottenere tassi bassi convenienti per il Tesoro, anche a costo di inflazione.
        </p>
        <p style={S.p}>
          Una regola predefinita protegge dalla tentazione politica. Una banca centrale vincolata a una regola di Taylor, per esempio, non può deviare per favorire il governo in carica. Una regola fiscale come il limite del 3% al rapporto deficit/PIL (Maastricht) impedisce ai governi di accumulare deficit insostenibili per finanziare favori elettorali. Le regole, in questa visione, sono <em>strumenti di autodisciplina</em> che proteggono l'economia dalle scelte politiche di breve periodo.
        </p>

        <h3 style={S.h3}>L'incoerenza temporale degli interventi discrezionali</h3>
        <p style={S.p}>
          L'argomento più sofisticato a favore delle regole è quello della <strong>incoerenza temporale</strong> (<em>time inconsistency</em>), formalizzato da Finn Kydland e Edward Prescott in un celebre articolo del 1977 che valse loro il premio Nobel nel 2004.
        </p>
        <p style={S.p}>
          L'idea è la seguente. Immaginiamo una banca centrale che annuncia l'obiettivo π* = 2% di inflazione. Le famiglie e le imprese, credendo all'annuncio, formano aspettative d'inflazione pari al 2% e fissano contratti salariali e prezzi di conseguenza. Ora la banca centrale si trova di fronte a una tentazione: dato che le aspettative sono già state fissate al 2%, un'espansione monetaria a sorpresa (che porti l'inflazione al 4%) genererebbe un boom temporaneo dell'output. Nel breve periodo la BC potrebbe quindi trarre un vantaggio dal rinnegare la propria promessa. È questa la dinamica che chiamiamo "incoerenza temporale": ciò che è ottimale <em>ex ante</em> (annunciare π*=2%) è diverso da ciò che è ottimale <em>ex post</em> (deviare per sfruttare le aspettative già fissate).
        </p>
        <p style={S.p}>
          Se le famiglie e le imprese sono razionali, però, anticipano la tentazione della BC di deviare. Quindi non credono all'annuncio iniziale: formano aspettative d'inflazione più alte del 2% (per esempio il 4%, che è il tasso che la BC effettivamente produrrà dato che sa di voler ottenere il boom). Il risultato è il <strong>bias inflazionistico</strong> della politica discrezionale: anche quando la BC vorrebbe avere inflazione bassa, non può convincere nessuno della propria credibilità, e quindi l'inflazione si stabilizza a un livello più alto del desiderato — senza peraltro nessun vantaggio in termini di output.
        </p>
        <p style={S.p}>
          La soluzione al problema è rinunciare alla discrezionalità e vincolarsi a una regola. Se la BC non può deviare dalla regola, non ha più la tentazione di farlo; le aspettative private si ancorano correttamente al target; l'equilibrio ottimale (π=π*, Y=Ȳ) diventa sostenibile. Il sacrificio della discrezionalità è il prezzo della credibilità.
        </p>

        <TimeInconsistencyGraph />

        <div style={S.caseCard}>
          <div style={S.caseTitle}>ANALISI DI UN CASO — Alexander Hamilton contro l'incoerenza temporale</div>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            L'incoerenza temporale è stata a lungo un problema per i governi moderni, ma non è un fenomeno nuovo. Subito dopo la guerra d'indipendenza americana, il primo Segretario del Tesoro Alexander Hamilton (1789–1795) dovette affrontare la questione del debito federale accumulato durante la guerra. Parte del debito era detenuto da speculatori che lo avevano acquistato a prezzi scontatissimi da veterani in difficoltà.
          </p>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            La tentazione politica era forte: Hamilton avrebbe potuto decidere di <em>onorare solo parzialmente il debito</em>, escludendo gli speculatori, per mostrare al popolo che il governo non premia i furbi. Sembrava la scelta socialmente desiderabile. Ma Hamilton scelse invece il pagamento <em>pieno e puntuale</em> di tutto il debito a tutti i creditori, speculatori inclusi.
          </p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            La logica era esattamente quella dell'incoerenza temporale: se il governo avesse rinnegato gli impegni una volta, nessuno avrebbe più prestato agli USA. Costruire <em>credibilità</em> era più prezioso della giustizia distributiva nel caso specifico. Grazie alla scelta di Hamilton, gli USA svilupparono rapidamente uno dei mercati del debito pubblico più affidabili del mondo. Oggi i titoli di Stato americani sono considerati l'asset più sicuro del pianeta, e questa credibilità — costruita pezzo per pezzo da Hamilton in poi — vale per gli USA circa 200–300 miliardi di dollari all'anno in risparmi sul costo del debito.
          </p>
        </div>

        <h3 style={S.h3}>Le regole di politica monetaria</h3>
        <p style={S.p}>
          Se si accetta che la politica monetaria debba seguire una regola, resta la domanda: <em>quale regola</em>? Gli economisti hanno proposto diverse alternative, ciascuna con pro e contro.
        </p>

        <h4 style={S.h4}>Monetarismo: regola di crescita dell'offerta di moneta</h4>
        <p style={S.p}>
          La proposta classica, associata a Milton Friedman, è la <strong>regola del k%</strong>: l'offerta di moneta deve crescere a un tasso costante k ogni anno (tipicamente 3-5%), indipendentemente dalle condizioni congiunturali. L'idea è che nel lungo periodo l'inflazione è determinata dalla crescita dell'offerta di moneta in eccesso rispetto alla crescita dell'output reale (equazione quantitativa). Una crescita monetaria stabile produce inflazione stabile, indipendentemente dalle fluttuazioni.
        </p>
        <p style={S.p}>
          La regola monetarista è stata effettivamente adottata in alcune economie negli anni '70-'80 (es. Germania e Svizzera). Ha avuto però difficoltà crescenti man mano che l'innovazione finanziaria ha reso instabile il rapporto tra aggregati monetari e inflazione (la cosiddetta "velocità della moneta" è diventata erratica). Negli anni '90 quasi tutte le banche centrali hanno abbandonato il targeting monetario.
        </p>

        <h4 style={S.h4}>Regola di Taylor: regola di feedback sull'inflazione e sull'output</h4>
        <p style={S.p}>
          La regola di Taylor (Capitolo 16) è la regola moderna più diffusa. La BC imposta il tasso di interesse nominale in base a una formula che tiene conto dell'inflazione attuale, della deviazione dell'inflazione dal target, e del gap di produzione. È una regola di <em>feedback</em>: risponde automaticamente agli shock, ma senza discrezionalità soggettiva. La Fed di Greenspan (1987-2006) ha implicitamente seguito una regola di Taylor, e così la BCE nei primi vent'anni.
        </p>

        <h4 style={S.h4}>Inflation targeting: target esplicito d'inflazione</h4>
        <p style={S.p}>
          L'<strong>inflation targeting</strong> (IT) è un framework introdotto dalla Nuova Zelanda nel 1990 e poi adottato da Canada, Regno Unito, Svezia, Norvegia, Israele, Australia, ecc. Nell'IT la banca centrale annuncia pubblicamente un target numerico d'inflazione (tipicamente 2%) e si impegna a raggiungerlo nel medio periodo. Non è vincolata a una formula specifica come nella regola di Taylor: ha discrezionalità su <em>come</em> raggiungere il target. Ma è vincolata al target: se lo manca, deve spiegare pubblicamente perché e cosa farà per tornarci.
        </p>
        <p style={S.p}>
          L'inflation targeting è una via di mezzo tra regole rigide e discrezionalità pura: discrezionalità <em>vincolata</em>. Gli studi empirici mostrano che i paesi che hanno adottato l'IT hanno avuto inflazione mediamente più bassa e più stabile rispetto ai paesi che non l'hanno adottato, con scarso costo in termini di output.
        </p>

        <div style={S.caseCard}>
          <div style={S.caseTitle}>ANALISI DI UN CASO — Inflation targeting: regola o discrezionalità vincolata?</div>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            L'<em>inflation targeting</em>, come accennato, è la formula che ha attraversato la politica monetaria mondiale negli ultimi trent'anni. La Nuova Zelanda fu la prima ad adottarlo nel 1990, dopo decenni di alta inflazione. Le fu seguita dal Canada (1991), Regno Unito (1992), Svezia (1993), Brasile (1999). In Europa, la BCE ha adottato un framework simile ma non lo chiama formalmente IT (per ragioni statutarie: l'obiettivo di inflazione della BCE è "simmetrico 2%" ma non è chiamato target in senso stretto).
          </p>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            Perché l'IT funziona bene? Combina il meglio delle due posizioni. Da un lato fornisce un <strong>vincolo credibile</strong> (il target esplicito, la rendicontazione pubblica, l'indipendenza della BC). Dall'altro preserva la <strong>flessibilità operativa</strong> (la BC può scegliere come raggiungere il target, può guardare al medio termine ignorando oscillazioni di breve termine, può rispondere a shock imprevisti). È la risposta al dilemma regole-vs-discrezionalità che sembra funzionare meglio nella pratica.
          </p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            I critici osservano che l'IT si concentra sull'inflazione trascurando altri obiettivi (occupazione, stabilità finanziaria). Dopo il 2008 alcune banche centrali hanno allargato il framework: la Fed ha adottato il <em>Flexible Average Inflation Targeting</em> (2020), che permette all'inflazione di superare temporaneamente il 2% per compensare periodi passati di inflazione sotto il 2%. La BCE ha rivisto la propria strategia nel 2021, confermando il target simmetrico del 2% ma con più flessibilità operativa.
          </p>
        </div>

        <div style={S.caseCard}>
          <div style={S.caseTitle}>ANALISI DI UN CASO — L'indipendenza della banca centrale</div>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            Un altro strumento per affrontare il problema dell'incoerenza temporale è <strong>l'indipendenza della banca centrale</strong> dal governo. Una BC indipendente non può essere costretta dal governo a finanziare il deficit pubblico stampando moneta, né può essere spinta a tenere i tassi bassi prima di un'elezione. Le sue scelte di policy sono protette da pressioni politiche di breve periodo.
          </p>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            L'indipendenza della BC è un fenomeno relativamente recente. La Bundesbank tedesca, creata nel 1957, è stata uno dei primi esempi di banca centrale fortemente indipendente; non a caso, la Germania ha avuto negli anni '70-'80 l'inflazione più bassa dei paesi avanzati. La BCE, istituita con il Trattato di Maastricht nel 1993, ha un'indipendenza costituzionalmente garantita, anche più forte di quella della Fed. La Bank of England ha ottenuto indipendenza solo nel 1997 (con la riforma del Labour Party di Blair). La Banca del Giappone nel 1998. La Banca d'Italia, dal 1981 (separazione dal Tesoro, "divorzio") al 1998 (passaggio all'eurosistema).
          </p>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            Numerosi studi empirici — tra cui il celebre lavoro di Alesina e Summers (1993) — hanno mostrato una forte correlazione negativa tra indipendenza della banca centrale e inflazione media: i paesi con BC più indipendenti hanno inflazione mediamente più bassa, senza crescita più lenta dell'output. Un risultato notevole: ottieni un'inflazione più bassa senza pagare nulla in termini di crescita. Questa è una delle rare situazioni in cui la politica economica offre "pasti gratis".
          </p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            Tuttavia l'indipendenza della BC ha anche critici. Alcuni sostengono che un'autorità tecnica non eletta, che prende decisioni enormi per l'economia, è democraticamente problematica. Altri notano che l'indipendenza può portare a una focalizzazione eccessiva sull'inflazione trascurando disoccupazione e disuguaglianza. Dopo il 2008, con la Fed e la BCE impegnate in politiche di bilancio molto espansive (QE), il dibattito sull'appropriato grado di indipendenza è diventato di nuovo acceso.
          </p>
        </div>
      </div>

      {/* ── SEZ 17.3: Conclusioni ───────────────────────────────────── */}
      <div className="content-section glass-panel" style={{ padding: '2rem 2.5rem', marginBottom: '2rem' }}>
        <h2 style={S.h2}>17.3 Conclusioni: fare pace tra i dibattiti</h2>
        <p style={S.p}>
          Abbiamo esaminato due grandi dibattiti: attiva vs passiva e regole vs discrezionalità. Non c'è una posizione "vincente" universalmente riconosciuta, ma la macroeconomia moderna ha trovato un punto di equilibrio pragmatico che incorpora elementi delle due tradizioni.
        </p>
        <p style={S.p}>
          <strong>Sull'asse attiva/passiva</strong>: il consenso moderno è che la politica monetaria debba essere attiva nel breve periodo per stabilizzare l'economia, ma senza ambizioni di "fine tuning" eccessivo. Gli errori di previsione e i ritardi suggeriscono cautela: meglio reagire agli shock grandi e ben identificati che cercare di smorzare ogni piccola oscillazione del ciclo. La politica fiscale è considerata un'arma più lenta e meno flessibile, da usare soprattutto in situazioni straordinarie (recessioni profonde, crisi finanziarie, catastrofi naturali) quando la politica monetaria arriva al limite dello zero lower bound.
        </p>
        <p style={S.p}>
          <strong>Sull'asse regole/discrezionalità</strong>: il consenso è che la politica monetaria debba essere vincolata da un framework credibile (target d'inflazione, regola di Taylor implicita), ma con flessibilità per rispondere a shock imprevisti. È la <em>discrezionalità vincolata</em> dell'inflation targeting. La politica fiscale è molto più discrezionale, ma anche qui sono emersi framework (regole fiscali europee, bilanci strutturali, fiscal councils) che cercano di limitare la tentazione politica.
        </p>
        <p style={S.p}>
          <strong>Indipendenza e credibilità</strong>: l'indipendenza delle banche centrali, con tutti i suoi limiti democratici, è ampiamente considerata un fattore chiave di successo macroeconomico degli ultimi quarant'anni. La credibilità costruita pazientemente da Volcker, Greenspan, Duisenberg, Trichet, Draghi ha permesso di ancorare le aspettative d'inflazione a livelli bassi, rendendo così la politica monetaria più potente e meno costosa.
        </p>
        <p style={S.p}>
          Nessun framework è perfetto. Le crisi recenti — il 2008, il Covid, l'inflazione post-Covid — hanno messo sotto pressione anche i framework più consolidati. La discussione continua, e nuove idee emergono costantemente: la <em>Modern Monetary Theory</em> che ridefinisce i limiti della politica fiscale, le proposte di <em>nominal GDP targeting</em> che cambiano il mandato della BC, le discussioni sulle <em>central bank digital currencies</em> che toccano i fondamenti della politica monetaria. La macroeconomia è una disciplina viva, e i dibattiti di questo capitolo resteranno centrali per decenni.
        </p>
      </div>

      {/* ── IN SINTESI ──────────────────────────────────────────────── */}
      <div className="content-section glass-panel" style={{ padding: '2rem 2.5rem', marginBottom: '2rem', background: 'rgba(67,56,202,0.04)', border: '1px solid rgba(67,56,202,0.15)' }}>
        <h2 style={{ ...S.h2, marginTop: 0 }}>In Sintesi</h2>
        <ol style={{ color: 'var(--text-secondary)', lineHeight: 1.9, paddingLeft: '1.5rem' }}>
          <li>La politica economica di stabilizzazione affronta due grandi dibattiti: dovrebbe essere <strong>attiva o passiva</strong>? E dovrebbe seguire <strong>regole o essere discrezionale</strong>? Sono due domande distinte con quattro posizioni possibili.</li>
          <li>I sostenitori della <strong>politica attiva</strong> argomentano che l'economia è instabile e la politica economica può smorzare efficacemente le fluttuazioni; i sostenitori della <strong>politica passiva</strong> temono che i ritardi e le difficoltà di previsione rendano gli interventi controproducenti.</li>
          <li>I <strong>ritardi della politica economica</strong> si articolano in ritardi di riconoscimento, decisione, attuazione e risposta. Per la politica monetaria il pieno effetto si manifesta dopo 6-18 mesi.</li>
          <li>Le <strong>previsioni macroeconomiche</strong> sono notoriamente imprecise, specialmente nei punti di svolta del ciclo. Grande Depressione, Grande Recessione e crisi Covid sono esempi di previsioni sistematicamente errate.</li>
          <li>La <strong>critica di Lucas</strong> (aspettative razionali) sostiene che i parametri dei modelli macroeconomici non sono stabili sotto cambiamenti di regime di policy, rendendo ancora più difficile la stabilizzazione attiva.</li>
          <li>I sostenitori delle <strong>regole</strong> argomentano che una politica vincolata è protetta dalla pressione politica di breve periodo e risolve il problema dell'<strong>incoerenza temporale</strong> (Kydland-Prescott 1977): la tentazione discrezionale di deviare dagli impegni genera bias inflazionistico anche quando non è desiderato.</li>
          <li>Le <strong>regole di politica monetaria</strong> principali sono: la regola monetarista di Friedman (crescita costante di M), la regola di Taylor (feedback su inflazione e output), l'<strong>inflation targeting</strong> (target esplicito con flessibilità operativa).</li>
          <li>L'<strong>indipendenza della banca centrale</strong> è un meccanismo istituzionale per affrontare l'incoerenza temporale. Studi empirici mostrano che paesi con BC indipendenti hanno inflazione più bassa senza costi in termini di crescita.</li>
          <li>Il consenso moderno è quello della <strong>discrezionalità vincolata</strong>: politica monetaria attiva ma dentro un framework credibile (inflation targeting); politica fiscale più discrezionale ma con regole di controllo del deficit.</li>
          <li>Alexander Hamilton con il pagamento integrale del debito rivoluzionario è un esempio storico classico di come costruire credibilità istituzionale rinunciando a benefici di breve termine per ottenere benefici molto maggiori di lungo periodo.</li>
        </ol>
      </div>

    </div>
  );
}
