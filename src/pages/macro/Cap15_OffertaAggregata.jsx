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

// ─── Grafico 1: Curva di Offerta Aggregata (breve + lungo) ──────────────────
const SRASvsLRASGraph = () => {
  const [slope, setSlope] = useState(0.3); // 0 = orizzontale, 1 = verticale

  // OA_LR verticale a Y_n=400
  // OA_SR: pendenza modulabile. P = 100 + 0.5·slope·(Y - Y_n) * 10
  // Quando slope=0, OA_SR è orizzontale; slope=1 è quasi verticale (segue OA_LR)
  const Y_n = 400;

  const W = 500, H = 360;
  const PL = 65, PR = 20, PT = 25, PB = 50;
  const pW = W - PL - PR, pH = H - PT - PB;
  const Ymax = 600, Pmax = 160, Pmin = 50;
  const tx = (y) => PL + y * (pW / Ymax);
  const tp = (p) => PT + pH - ((p - Pmin) / (Pmax - Pmin)) * pH;

  // OA_SR: attraversa (Y_n, 100). pendenza: dP/dY = 0.5*slope  (con slope∈[0,1])
  // Da Y=Y_n/2 a Y=Y_n*1.5
  const srSlope = slope;
  const sr_Y1 = Y_n * 0.2;
  const sr_Y2 = Y_n * 1.5;
  const sr_P1 = Math.max(Pmin + 2, 100 + srSlope * (sr_Y1 - Y_n));
  const sr_P2 = Math.min(Pmax - 2, 100 + srSlope * (sr_Y2 - Y_n));

  return (
    <div style={S.graphWrap}>
      <div style={S.graphTitle}>Curva di offerta aggregata: breve vs lungo periodo</div>
      <div style={S.graphSub}>Muovendo lo slider si passa dall'ipotesi classica (OA verticale) a quella keynesiana (OA orizzontale)</div>

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto', display: 'block' }}>
        {[60, 80, 100, 120, 140].map(p => (
          <line key={p} x1={PL} y1={tp(p)} x2={PL + pW} y2={tp(p)} stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
        ))}
        {[100, 200, 300, 400, 500].map(y => (
          <line key={y} x1={tx(y)} y1={PT} x2={tx(y)} y2={PT + pH} stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
        ))}
        {[60, 80, 100, 120, 140].map(p => (
          <text key={p} x={PL - 5} y={tp(p) + 3} textAnchor="end" fontSize="10" fill="#94a3b8">{p}</text>
        ))}
        {[100, 200, 300, 400, 500].map(y => (
          <text key={y} x={tx(y)} y={PT + pH + 16} textAnchor="middle" fontSize="10" fill="#94a3b8">{y}</text>
        ))}

        <line x1={PL} y1={PT} x2={PL} y2={PT + pH} stroke="#64748b" strokeWidth="1.5" />
        <line x1={PL} y1={PT + pH} x2={PL + pW} y2={PT + pH} stroke="#64748b" strokeWidth="1.5" />

        {/* OA_LR verticale */}
        <line x1={tx(Y_n)} y1={PT} x2={tx(Y_n)} y2={PT + pH} stroke="#16a34a" strokeWidth="2.5" strokeDasharray="8,4" />
        <text x={tx(Y_n) + 4} y={PT + 12} fontSize="12" fill="#16a34a" fontWeight="700">OA_LR</text>

        {/* OA_SR */}
        <line x1={tx(sr_Y1)} y1={tp(sr_P1)} x2={tx(sr_Y2)} y2={tp(sr_P2)} stroke="#0284c7" strokeWidth="2.5" />
        <text x={tx(sr_Y2) - 10} y={tp(sr_P2) - 6} fontSize="12" fill="#0284c7" fontWeight="700">OA_SR</text>

        {/* Punto Y_n */}
        <circle cx={tx(Y_n)} cy={tp(100)} r="6" fill="#1e293b" />
        <text x={tx(Y_n)} y={PT + pH + 30} textAnchor="middle" fontSize="10" fill="#1e293b" fontWeight="700">Y_n</text>

        <text x={PL + pW / 2} y={H - 6} textAnchor="middle" fontSize="12" fill="var(--text-secondary)">Reddito, produzione Y</text>
        <text x={13} y={PT + pH / 2} textAnchor="middle" fontSize="12" fill="var(--text-secondary)" transform={`rotate(-90,13,${PT + pH / 2})`}>Livello prezzi P</text>
      </svg>

      <div style={{ marginTop: '0.9rem' }}>
        <label style={S.sliderLabel}>Rigidità dei prezzi: <strong>{slope < 0.1 ? 'Estrema (keynesiano puro)' : slope < 0.4 ? 'Alta (breve periodo)' : slope < 0.8 ? 'Moderata' : 'Bassa (quasi classico)'}</strong></label>
        <input type="range" min={0.02} max={1.2} step={0.04} value={slope} onChange={e => setSlope(+e.target.value)} style={{ width: '100%' }} />
        <div style={S.sliderRow}><span>prezzi rigidi (OA piatta)</span><span>prezzi flessibili (OA verticale)</span></div>
      </div>

      <div style={S.resultBox}>
        La curva <strong>OA_SR</strong> (breve periodo, blu) è tanto più piatta quanto più i prezzi sono rigidi. La <strong>OA_LR</strong> (lungo periodo, verde) è sempre verticale al livello di pieno impiego Y_n: nel lungo periodo la produzione è determinata dai fattori reali (capitale, lavoro, tecnologia), non dalla domanda.
      </div>
    </div>
  );
};

// ─── Grafico 2: Curva di Phillips ───────────────────────────────────────────
const PhillipsCurveGraph = () => {
  const [pie_exp, setPie_exp] = useState(2);   // inflazione attesa
  const [shock, setShock] = useState(0);        // shock di offerta
  const [unemp, setUnemp] = useState(5);        // disoccupazione corrente

  const u_n = 5; // NAIRU
  const beta = 0.5;

  // π = π^e − β·(u − u_n) + ν
  const pi = pie_exp - beta * (unemp - u_n) + shock;

  const W = 500, H = 340;
  const PL = 65, PR = 20, PT = 25, PB = 50;
  const pW = W - PL - PR, pH = H - PT - PB;
  const umax = 12, umin = 0, piMax = 12, piMin = -3;
  const tx = (u) => PL + ((u - umin) / (umax - umin)) * pW;
  const tp = (p) => PT + pH - ((p - piMin) / (piMax - piMin)) * pH;

  // Curva di Phillips: π(u) per u da umin a umax
  const pts = [];
  for (let u = umin; u <= umax; u += 0.2) {
    const p = pie_exp - beta * (u - u_n) + shock;
    pts.push(`${tx(u).toFixed(1)},${tp(Math.max(piMin + 0.1, Math.min(piMax - 0.1, p))).toFixed(1)}`);
  }

  return (
    <div style={S.graphWrap}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={S.graphTitle}>La curva di Phillips con aspettative e shock di offerta</div>
          <div style={S.graphSub}>π = πᵉ − β·(u − u_n) + ν · con β = 0.5, u_n = 5%</div>
        </div>
        <div style={{ textAlign: 'right', fontSize: '0.85rem' }}>
          <div>u = <strong>{unemp.toFixed(1)}%</strong></div>
          <div>π = <strong style={{ color: '#dc2626' }}>{pi.toFixed(2)}%</strong></div>
        </div>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto', display: 'block' }}>
        {[-2, 0, 2, 4, 6, 8, 10].map(p => (
          <line key={p} x1={PL} y1={tp(p)} x2={PL + pW} y2={tp(p)} stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
        ))}
        {[0, 2, 4, 6, 8, 10, 12].map(u => (
          <line key={u} x1={tx(u)} y1={PT} x2={tx(u)} y2={PT + pH} stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
        ))}
        {[-2, 0, 2, 4, 6, 8, 10].map(p => (
          <text key={p} x={PL - 5} y={tp(p) + 3} textAnchor="end" fontSize="10" fill="#94a3b8">{p}%</text>
        ))}
        {[0, 2, 4, 6, 8, 10, 12].map(u => (
          <text key={u} x={tx(u)} y={PT + pH + 16} textAnchor="middle" fontSize="10" fill="#94a3b8">{u}%</text>
        ))}

        {/* Asse zero (π=0) */}
        <line x1={PL} y1={tp(0)} x2={PL + pW} y2={tp(0)} stroke="#94a3b8" strokeWidth="1" />

        <line x1={PL} y1={PT} x2={PL} y2={PT + pH} stroke="#64748b" strokeWidth="1.5" />
        <line x1={PL} y1={PT + pH} x2={PL + pW} y2={PT + pH} stroke="#64748b" strokeWidth="1.5" />

        {/* NAIRU verticale */}
        <line x1={tx(u_n)} y1={PT} x2={tx(u_n)} y2={PT + pH} stroke="#16a34a" strokeWidth="1.5" strokeDasharray="5,3" />
        <text x={tx(u_n)} y={PT + 10} textAnchor="middle" fontSize="10" fill="#16a34a" fontWeight="700">u_n</text>

        {/* Curva di Phillips */}
        <polyline points={pts.join(' ')} fill="none" stroke="#dc2626" strokeWidth="2.5" />

        {/* Punto corrente */}
        <line x1={tx(unemp)} y1={tp(pi)} x2={tx(unemp)} y2={PT + pH} stroke="#64748b" strokeWidth="1" strokeDasharray="4,3" />
        <line x1={PL} y1={tp(pi)} x2={tx(unemp)} y2={tp(pi)} stroke="#64748b" strokeWidth="1" strokeDasharray="4,3" />
        <circle cx={tx(unemp)} cy={tp(Math.max(piMin + 0.1, Math.min(piMax - 0.1, pi)))} r="7" fill="#1e293b" />
        <circle cx={tx(unemp)} cy={tp(Math.max(piMin + 0.1, Math.min(piMax - 0.1, pi)))} r="3" fill="white" />

        <text x={PL + pW / 2} y={H - 6} textAnchor="middle" fontSize="12" fill="var(--text-secondary)">Tasso di disoccupazione u</text>
        <text x={13} y={PT + pH / 2} textAnchor="middle" fontSize="12" fill="var(--text-secondary)" transform={`rotate(-90,13,${PT + pH / 2})`}>Inflazione π</text>

        {/* Label curva */}
        <text x={tx(umin + 1)} y={tp(pie_exp - beta * (umin + 1 - u_n) + shock) - 6} fontSize="11" fill="#dc2626" fontWeight="700">CP</text>
      </svg>

      <div style={{ marginTop: '0.9rem' }}>
        <label style={S.sliderLabel}>Disoccupazione corrente u: <strong>{unemp.toFixed(1)}%</strong></label>
        <input type="range" min={1} max={11} step={0.1} value={unemp} onChange={e => setUnemp(+e.target.value)} style={{ width: '100%' }} />
      </div>
      <div style={{ marginTop: '0.6rem' }}>
        <label style={S.sliderLabel}>Inflazione attesa πᵉ: <strong>{pie_exp.toFixed(1)}%</strong> (sposta la curva verticalmente)</label>
        <input type="range" min={0} max={8} step={0.5} value={pie_exp} onChange={e => setPie_exp(+e.target.value)} style={{ width: '100%', accentColor: '#dc2626' }} />
      </div>
      <div style={{ marginTop: '0.6rem' }}>
        <label style={S.sliderLabel}>Shock di offerta ν: <strong>{shock >= 0 ? '+' : ''}{shock.toFixed(1)}%</strong> (positivo: shock negativo come petrolio)</label>
        <input type="range" min={-2} max={4} step={0.2} value={shock} onChange={e => setShock(+e.target.value)} style={{ width: '100%', accentColor: '#ea580c' }} />
      </div>

      <div style={S.resultBox}>
        {unemp < u_n && <>u &lt; u_n: l'economia è in <strong>surriscaldamento</strong> → pressioni salariali → π &gt; πᵉ.</>}
        {unemp > u_n && <>u &gt; u_n: l'economia è in <strong>recessione</strong> → pressioni salariali deboli → π &lt; πᵉ.</>}
        {unemp === u_n && <>u = u_n: l'economia è al <strong>tasso naturale</strong> → π = πᵉ + ν.</>}
        {shock > 0 && <> Shock di offerta positivo (es. petrolio ↑): l'intera curva di Phillips si sposta verso l'alto — stagflazione.</>}
      </div>
    </div>
  );
};

// ─── Grafico 3: Rapporto di sacrificio (disinflazione) ──────────────────────
const SacrificeRatioGraph = () => {
  const [speed, setSpeed] = useState(2); // 1=graduale, 2=medio, 3=shock

  // Disinflazione da 10% a 2%.
  // Rapporto di sacrificio = PIL cumulato perso per ogni punto di inflazione ridotto
  // Tipicamente ~5. Quindi 8 punti di disinflazione = 40 punti PIL persi.
  // Graduale: distribuito su più anni, stesso totale; shock: concentrato.

  const totalPoints = 8;
  const sacrificeRatio = 5;
  const totalGDPLoss = totalPoints * sacrificeRatio; // 40

  const years = speed === 1 ? 6 : speed === 2 ? 4 : 2;
  const perYear = totalGDPLoss / years;

  const W = 500, H = 280;
  const PL = 60, PR = 20, PT = 25, PB = 50;
  const pW = W - PL - PR, pH = H - PT - PB;
  const tMax = 8, yMax = 15;
  const tx = (t) => PL + (t / tMax) * pW;
  const ty = (v) => PT + pH - (v / yMax) * pH;

  // Genera serie: anno 0 π=10, linearmente a 2, poi 2.
  // PIL gap (negativo) per anni di disinflazione.
  const piSeries = [];
  const gapSeries = [];
  for (let t = 0; t <= tMax; t++) {
    const pi = t < years ? 10 - (8 * t / years) : 2;
    piSeries.push({ t, v: pi });
    const gap = t < years ? -perYear : 0;
    gapSeries.push({ t, v: gap });
  }

  return (
    <div style={S.graphWrap}>
      <div style={S.graphTitle}>Il rapporto di sacrificio nella disinflazione</div>
      <div style={S.graphSub}>Disinflazione da 10% a 2% con diverso ritmo — rapporto di sacrificio = 5</div>

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto', display: 'block' }}>
        {[0, 5, 10, 15].map(v => (
          <line key={v} x1={PL} y1={ty(v)} x2={PL + pW} y2={ty(v)} stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
        ))}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(t => (
          <line key={t} x1={tx(t)} y1={PT} x2={tx(t)} y2={PT + pH} stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
        ))}
        {[0, 5, 10, 15].map(v => (
          <text key={v} x={PL - 5} y={ty(v) + 3} textAnchor="end" fontSize="10" fill="#94a3b8">{v}%</text>
        ))}
        {[0, 2, 4, 6, 8].map(t => (
          <text key={t} x={tx(t)} y={PT + pH + 16} textAnchor="middle" fontSize="10" fill="#94a3b8">{t}a</text>
        ))}

        <line x1={PL} y1={PT} x2={PL} y2={PT + pH} stroke="#64748b" strokeWidth="1.5" />
        <line x1={PL} y1={PT + pH} x2={PL + pW} y2={PT + pH} stroke="#64748b" strokeWidth="1.5" />

        {/* Linea obiettivo 2% */}
        <line x1={PL} y1={ty(2)} x2={PL + pW} y2={ty(2)} stroke="#16a34a" strokeWidth="1" strokeDasharray="5,3" />
        <text x={PL + pW - 30} y={ty(2) - 4} fontSize="10" fill="#16a34a">obiettivo 2%</text>

        {/* Serie π */}
        <polyline
          points={piSeries.map(p => `${tx(p.t)},${ty(p.v)}`).join(' ')}
          fill="none"
          stroke="#dc2626"
          strokeWidth="2.5"
        />
        {piSeries.map((p, i) => (
          <circle key={i} cx={tx(p.t)} cy={ty(p.v)} r="4" fill="#dc2626" />
        ))}
        <text x={tx(0) + 8} y={ty(10) - 6} fontSize="11" fill="#dc2626" fontWeight="700">π (%)</text>

        {/* Aree di perdita PIL */}
        {gapSeries.filter(g => g.v < 0).map((g, i) => (
          <rect
            key={i}
            x={tx(g.t) - 12}
            y={PT + pH - 2}
            width="24"
            height={Math.min(60, Math.abs(g.v) * 3)}
            fill="#ea580c"
            opacity="0.25"
            rx="2"
          />
        ))}
      </svg>

      <div style={{ marginTop: '0.9rem' }}>
        <label style={S.sliderLabel}>Ritmo della disinflazione:
          <strong> {speed === 1 ? 'Graduale (6 anni)' : speed === 2 ? 'Medio (4 anni)' : 'Shock (2 anni)'}</strong>
        </label>
        <input type="range" min={1} max={3} step={1} value={speed} onChange={e => setSpeed(+e.target.value)} style={{ width: '100%' }} />
        <div style={S.sliderRow}><span>graduale</span><span>shock</span></div>
      </div>

      <div style={S.resultBox}>
        Rapporto di sacrificio = 5: ogni punto percentuale di inflazione ridotta costa 5 punti di PIL perso. Disinflazione da 10% a 2% (8 punti) → PIL cumulato perso ≈ <strong>40 punti</strong>, distribuito su <strong>{years} anni</strong> ({perYear.toFixed(1)} punti/anno). La differenza tra i percorsi è <em>come</em> si distribuisce il dolore, non quanto.
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// PAGINA PRINCIPALE
// ═══════════════════════════════════════════════════════════════════════════
export default function Cap15OffertaAggregata() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', paddingBottom: '5rem' }}>

      <div className="page-header">
        <div style={{ color: 'var(--accent-cyan)', fontWeight: 600, letterSpacing: '0.1em', fontSize: '0.875rem', marginBottom: '0.5rem' }}>CAPITOLO 15 · TEORIA DEL CICLO ECONOMICO</div>
        <h1 className="page-title gradient-text" style={{ fontSize: '2.6rem', lineHeight: 1.1 }}>L'Offerta Aggregata<br />e il Trade-off tra Inflazione e Disoccupazione</h1>
        <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', fontSize: '1.05rem', maxWidth: '680px' }}>
          La curva di Phillips è probabilmente la più importante relazione macroeconomica. Perché esiste un trade-off di breve periodo tra inflazione e disoccupazione? Perché scompare nel lungo periodo? E quanto costa ridurre l'inflazione?
        </p>
      </div>

      <div className="content-section glass-panel" style={{ padding: '2rem 2.5rem', marginBottom: '2rem' }}>
        <blockquote style={{ borderLeft: '4px solid var(--accent-indigo)', padding: '0.6rem 1.2rem', margin: '0 0 1.5rem 0', color: 'var(--text-secondary)', fontStyle: 'italic', fontSize: '0.95rem' }}>
          «La curva di Phillips è probabilmente la più importante relazione macroeconomica.»
          <div style={{ marginTop: '0.5rem', fontStyle: 'normal', fontSize: '0.85rem' }}>— George Akerlof</div>
        </blockquote>
        <blockquote style={{ borderLeft: '4px solid var(--accent-indigo)', padding: '0.6rem 1.2rem', margin: '0 0 1.5rem 0', color: 'var(--text-secondary)', fontStyle: 'italic', fontSize: '0.95rem' }}>
          «C'è sempre un trade-off temporaneo tra inflazione e disoccupazione; non c'è un trade-off permanente. Il trade-off temporaneo non deriva dall'inflazione in sé, ma dall'inflazione inattesa che, in generale, porta a un tasso di inflazione crescente.»
          <div style={{ marginTop: '0.5rem', fontStyle: 'normal', fontSize: '0.85rem' }}>— Milton Friedman</div>
        </blockquote>

        <p style={S.p}>
          La maggior parte degli economisti analizza le fluttuazioni di breve periodo del reddito aggregato e del livello dei prezzi ricorrendo al modello della domanda aggregata e dell'offerta aggregata. Nei capitoli precedenti abbiamo esaminato nel dettaglio la domanda aggregata. Il modello IS-LM (Capitolo 12) e il suo equivalente in economia aperta, il modello di Mundell-Fleming (Capitolo 14), ci mostrano come le variazioni della politica monetaria e della politica fiscale e gli shock ai mercati dei beni e della moneta possano provocare fluttuazioni del reddito nazionale. In questo capitolo spostiamo la nostra attenzione sull'<strong>offerta aggregata</strong> e ci concentriamo sulla curva che lega inflazione e disoccupazione nel breve periodo.
        </p>
        <p style={S.p}>
          Nel Capitolo 11 abbiamo visto come il comportamento della curva di offerta aggregata sia diverso nel breve e nel lungo periodo. Nel lungo periodo i prezzi sono flessibili e la curva di offerta aggregata è verticale. Gli spostamenti della curva di domanda aggregata influenzano quindi il livello dei prezzi, ma la produzione, che rimane sul suo livello naturale, non è influenzata. Al contrario, nel breve periodo i prezzi sono rigidi e la curva di offerta aggregata è orizzontale. Di conseguenza, gli spostamenti della domanda aggregata generano fluttuazioni della produzione. Nel Capitolo 11 abbiamo dato per scontato il comportamento dell'offerta aggregata. In questo capitolo esaminiamo la microteoria dell'offerta aggregata di breve periodo, e <em>raffiniamo</em> la descrizione della curva di offerta aggregata di breve periodo che avviene nel mondo reale, dove alcuni prezzi sono fissi mentre altri no.
        </p>
      </div>

      {/* ── SEZ 15.1: Teoria dell'offerta aggregata ─────────────────── */}
      <div className="content-section glass-panel" style={{ padding: '2rem 2.5rem', marginBottom: '2rem' }}>
        <h2 style={S.h2}>15.1 La teoria di base dell'offerta aggregata</h2>
        <p style={S.p}>
          Quando una curva di offerta aggregata è piatta, come nel corso di un breve periodo, la domanda aggregata determina l'ammontare dei beni e servizi prodotti. Quando una curva di offerta aggregata è verticale, come nel lungo periodo, è la produzione che determina l'ammontare dei beni, i prezzi si adeguano per equilibrare la domanda aggregata e i livelli di produzione. Spesso queste versioni polari vengono descritte come casi particolari dello stesso modello: cambiano le ipotesi sulle rigidità salariali e nominali, ma la struttura di base è comune.
        </p>

        <SRASvsLRASGraph />

        <h3 style={S.h3}>Il modello della rigidità dei salari</h3>
        <p style={S.p}>
          Questa teoria attribuisce la pendenza positiva della curva di offerta aggregata di breve periodo alla rigidità dei salari nominali. In molti settori, i salari sono fissati per periodi non brevi da contratti collettivi o da norme sociali; i lavoratori e le imprese si accordano su un salario W basato su un livello atteso dei prezzi Pᵉ. Se il livello effettivo dei prezzi P è diverso da Pᵉ, i lavoratori si trovano a lavorare ad un salario reale W/P diverso da quello atteso W/Pᵉ. Le imprese, vedendo che il salario reale è cambiato, reagiscono modificando l'occupazione e quindi la produzione.
        </p>
        <p style={S.p}>
          Più precisamente: se P sale sopra Pᵉ (inflazione sorpresa), W/P scende, le imprese trovano più conveniente assumere, l'occupazione sale, la produzione sale sopra Y_n. Se P cade sotto Pᵉ, W/P sale, le imprese tagliano occupazione, produzione scende sotto Y_n. Otteniamo dunque una relazione positiva tra P e Y:
        </p>
        <div style={S.formula}>
          Y = Y_n + α·(P − Pᵉ)
        </div>

        <h3 style={S.h3}>Il modello della percezione errata dei lavoratori</h3>
        <p style={S.p}>
          Una variante della stessa idea: i lavoratori possono non essere pienamente informati sul livello dei prezzi effettivo. Quando l'imprenditore propone un aumento del salario nominale, il lavoratore lo interpreta come aumento del salario reale. Se invece l'aumento corrisponde esattamente all'inflazione, il salario reale è invariato ma il lavoratore — non sapendolo — offre più lavoro. L'offerta di lavoro aumenta con inflazione inattesa, e con essa la produzione.
        </p>

        <h3 style={S.h3}>Il modello dell'informazione imperfetta</h3>
        <p style={S.p}>
          Formulato da Robert Lucas (1972), questo modello assume prezzi flessibili ma informazione decentralizzata. Ogni impresa vede solo il prezzo del suo prodotto e non conosce il livello generale dei prezzi. Quando l'impresa vede che il suo prezzo sale, deve distinguere fra un aumento <em>relativo</em> (il mio prodotto è più desiderato — devo aumentare la produzione) e un aumento <em>nominale</em> (c'è inflazione, ma il mio prezzo relativo è invariato — non cambio la produzione). Non potendo distinguere perfettamente, l'impresa attribuisce ogni aumento in parte all'effetto reale e in parte a quello nominale. Uno shock di domanda che alza il livello generale dei prezzi induce quindi una risposta positiva della produzione, anche se sarebbe ottimale non fare nulla.
        </p>

        <h3 style={S.h3}>Il modello dei prezzi rigidi (nuovo keynesiano)</h3>
        <p style={S.p}>
          Questa quarta teoria, sostenuta dai nuovi keynesiani, attribuisce la rigidità di breve periodo non ai salari ma ai prezzi dei beni. I prezzi sono rigidi perché cambiarli ha dei costi (<em>menu costs</em>): stampare nuovi listini, rinegoziare contratti, gestire le reazioni dei clienti. Le imprese aggiornano i prezzi solo periodicamente (ad esempio ogni trimestre). Uno shock di domanda che avviene tra un aggiornamento e l'altro si scarica inizialmente sulla produzione, non sui prezzi. Solo gradualmente, man mano che le imprese aggiornano i listini, i prezzi convergono al nuovo livello di equilibrio e la produzione torna a Y_n.
        </p>
        <p style={S.p}>
          Tutti questi modelli — pur con meccanismi diversi — danno una funzione di offerta aggregata di breve periodo della forma:
        </p>
        <div style={S.formula}>
          Y = Y_n + α·(P − Pᵉ)<br/>
          oppure, riorganizzata: P = Pᵉ + (1/α)·(Y − Y_n)
        </div>
      </div>

      {/* ── SEZ 15.2: Curva di Phillips ─────────────────────────────── */}
      <div className="content-section glass-panel" style={{ padding: '2rem 2.5rem', marginBottom: '2rem' }}>
        <h2 style={S.h2}>15.2 L'inflazione, la disoccupazione e la curva di Phillips</h2>
        <p style={S.p}>
          Due obiettivi dei responsabili della politica economica sono quelli di approdare a un'inflazione e una disoccupazione bassi. Sfortunatamente, questi due obiettivi sono spesso in conflitto con l'altro. Supponiamo, per esempio, che i responsabili della politica economica usino la politica monetaria o fiscale per stimolare l'economia, facendo scendere la disoccupazione. Questo, tuttavia, tende a far salire l'inflazione. Viceversa, una politica restrittiva riduce l'inflazione ma aumenta la disoccupazione. A questo trade-off di breve periodo ci si riferisce con il nome di <strong>curva di Phillips</strong>.
        </p>

        <h3 style={S.h3}>Derivare la curva di Phillips dalla curva di offerta aggregata</h3>
        <p style={S.p}>
          La curva di Phillips si lega alla curva di offerta aggregata di breve periodo. L'equazione dell'offerta aggregata era P = Pᵉ + (1/α)·(Y − Y_n). Supponendo <em>Y − Y_n</em> proporzionale a <em>−(u − u_n)</em> via la legge di Okun, otteniamo una relazione tra variazione dei prezzi (π) e disoccupazione:
        </p>
        <div style={S.formula}>
          <strong>π = πᵉ − β·(u − u_n) + ν</strong>
        </div>
        <p style={S.p}>
          dove: π è l'inflazione; πᵉ è l'inflazione attesa; u_n è il tasso naturale di disoccupazione (NAIRU, Non-Accelerating Inflation Rate of Unemployment); ν è uno shock di offerta (positivo → shock negativo come petrolio). Questa è l'<strong>equazione della curva di Phillips aumentata dalle aspettative</strong>, sviluppata da Friedman (1968) e Phelps (1967).
        </p>

        <PhillipsCurveGraph />

        <h3 style={S.h3}>Aspettative adattive e l'inerzia dell'inflazione</h3>
        <p style={S.p}>
          Affinché la curva di Phillips sia uno strumento operativo, occorre specificare come si formano le aspettative di inflazione πᵉ. L'ipotesi più semplice è quella di <strong>aspettative adattive</strong>: gli agenti si aspettano per domani quello che hanno visto ieri. In particolare, πᵉ(t) = π(t−1). Sotto questa ipotesi, l'equazione di Phillips diventa:
        </p>
        <div style={S.formula}>
          π(t) = π(t−1) − β·(u − u_n) + ν
        </div>
        <p style={S.p}>
          Ciò implica che l'inflazione ha <em>inerzia</em>: tende a persistere nel tempo. Portarla da un livello alto a un livello basso richiede un periodo di disoccupazione sopra u_n (e quindi produzione sotto Y_n). È la base teorica del concetto di <em>rapporto di sacrificio</em>.
        </p>

        <h3 style={S.h3}>Due cause per la riduzione dell'inflazione</h3>
        <p style={S.p}>
          Il secondo e il terzo termine della curva di Phillips aumentata ci indicano le due cause per cui l'inflazione si modifica. Il secondo termine, <em>−β·(u − u_n)</em>, mostra che una disoccupazione sotto il NAIRU spinge l'inflazione verso l'alto (domanda che surriscalda l'economia) — questa è la parte di inflazione da <strong>domanda</strong>, o <em>demand-pull</em>. Il terzo termine, <em>ν</em>, rappresenta gli shock di offerta (petrolio, materie prime, salari esogeni): l'inflazione da <strong>costi</strong>, o <em>cost-push</em>. Possono coesistere: gli anni '70 furono un periodo di forte inflazione da costi (crisi petrolifere del 1973 e del 1979) in cui la curva di Phillips sembrava "perdersi".
        </p>

        <div style={S.caseCard}>
          <div style={S.caseTitle}>ANALISI DI UN CASO — Inflazione e disoccupazione negli Stati Uniti</div>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            L'inflazione e disoccupazione sono state studiate con particolare attenzione negli Stati Uniti. Serie storiche di inflazione e disoccupazione americane mostrano un evidente trade-off negativo negli anni '60, coerente con la curva di Phillips originale: quando u scendeva, π saliva, e viceversa. Bassa disoccupazione (~4%) si accompagnava a inflazione moderata (~3%), e alta disoccupazione (~7%) a inflazione bassa (~1%).
          </p>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            Negli anni '70, il trade-off sembrò rompersi. L'economia americana entrò in una fase di <strong>stagflazione</strong>: alta disoccupazione e alta inflazione contemporaneamente. Due shock petroliferi (1973 e 1979) spostarono l'intera curva di Phillips verso l'alto. La ricetta keynesiana tradizionale — stimolare la domanda per ridurre u — non funzionava più perché alimentava ulteriormente l'inflazione. Fu l'ora del trionfo intellettuale di Friedman e della <em>nuova sintesi</em>.
          </p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            Nell'ottobre 1979, Paul Volcker diventa presidente della Fed. Decide che l'obiettivo primario è spezzare la spina dorsale dell'inflazione. Alza il tasso sui federal funds fino al 20% nel 1981. La recessione che ne segue è la più profonda dal 1945: disoccupazione al 10,8%, produzione industriale in calo del 12%. Ma l'inflazione crolla dal 14% del 1980 al 3,2% del 1983. Gli anni '80 vedono il ritorno a una curva di Phillips "stabile" ma spostata, con un NAIRU stimato intorno al 5–6%. Negli anni '90 Alan Greenspan aggiorna la dottrina: l'aumento della produttività (legato alla rivoluzione informatica) permette di tenere u molto basso (3,9% nel 2000) senza far decollare l'inflazione — un "miracolo" di cui si discuterà per anni.
          </p>
        </div>
      </div>

      {/* ── SEZ 15.3: Aspettative razionali e costi della disinflazione ── */}
      <div className="content-section glass-panel" style={{ padding: '2rem 2.5rem', marginBottom: '2rem' }}>
        <h2 style={S.h2}>15.3 Aspettative razionali, credibilità e costi della disinflazione</h2>
        <p style={S.p}>
          Finora abbiamo assunto che le aspettative si formino in modo adattivo: πᵉ(t) = π(t−1). Ma questa assunzione ha un problema logico: se gli agenti si aspettano sempre quello che è successo ieri, ignorano sistematicamente qualsiasi informazione che avrebbero potuto usare per fare previsioni migliori. Questa critica è stata formulata in modo incisivo da Robert Lucas (1976) con la sua famosa <em>critica di Lucas</em>: le regolarità empiriche (come la curva di Phillips stimata) non sono stabili sotto cambiamenti di regime di policy, perché gli agenti adattano le aspettative al nuovo regime.
        </p>

        <h3 style={S.h3}>L'ipotesi delle aspettative razionali</h3>
        <p style={S.p}>
          L'alternativa proposta da Lucas, Sargent, Wallace e altri è l'<strong>ipotesi delle aspettative razionali</strong>: gli agenti formano le aspettative usando tutta l'informazione disponibile, inclusa la conoscenza del modello economico e della politica della banca centrale. Se la BC annuncia credibilmente che ridurrà l'inflazione da 10% a 2%, e gli agenti credono all'annuncio, πᵉ scende immediatamente a 2%. La curva di Phillips si sposta in basso, e la disinflazione può avvenire <em>senza</em> bisogno di recessione.
        </p>
        <p style={S.p}>
          Questa è la promessa della <strong>disinflazione indolore</strong> via credibilità. Se la banca centrale è abbastanza credibile, il rapporto di sacrificio può scendere vicino a zero. Ma la credibilità è difficile da acquisire: richiede una storia di comportamento coerente, indipendenza dal governo, mandato anti-inflazione chiaro. L'esperienza Volcker mostra che anche con un governatore determinato, i costi di breve periodo della disinflazione sono elevati perché i contratti (salari, prezzi, prestiti) sono già stati scritti sulla base di aspettative inflazionistiche elevate.
        </p>

        <h3 style={S.h3}>Il rapporto di sacrificio</h3>
        <p style={S.p}>
          Il <strong>rapporto di sacrificio</strong> misura il costo, in termini di PIL perso, di ogni punto percentuale di riduzione dell'inflazione. Stime empiriche collocano il rapporto tra 2 e 5 per le economie avanzate. Se il rapporto è 5, per ridurre l'inflazione dal 10% al 2% bisogna sostenere una perdita cumulata di PIL pari al 40% (8 punti × 5). Ciò corrisponde a 4 anni a −10% di PIL rispetto al trend, o 8 anni a −5%, o altre combinazioni.
        </p>
        <p style={S.p}>
          Il rapporto di sacrificio è uno dei concetti più importanti della macroeconomia applicata: spiega perché le banche centrali temono di lasciar scappare l'inflazione (riportarla indietro è costoso), e perché in condizioni di aspettative non ancorate, controllare l'inflazione richiede un impegno prolungato e credibile.
        </p>

        <SacrificeRatioGraph />

        <div style={S.caseCard}>
          <div style={S.caseTitle}>ANALISI DI UN CASO — Il tasso di sacrificio nella realtà: la disinflazione Volcker</div>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            La curva di Phillips con aspettative adattive implica che per ridurre l'inflazione l'economia debba attraversare un lungo periodo di disoccupazione sopra il tasso naturale. Supponiamo che la BC voglia abbassare π dal 10% al 2% in 5 anni: ciò richiede un tasso medio di disoccupazione sopra il NAIRU per diversi anni. Il costo totale si può stimare con il rapporto di sacrificio.
          </p>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            La disinflazione Volcker del 1980–83 è un test storico cruciale. Volcker spinge i fed funds al 20%, l'economia entra in una recessione profonda nel 1981–82, la disoccupazione sale al 10,8%. L'inflazione scende dal 14% del 1980 al 3% del 1983. Il rapporto di sacrificio stimato ex post è intorno a 4 — circa in linea con le stime pre-esistenti. Né il caso della <em>disinflazione indolore</em> à la Sargent (credibility-driven), né il caso del rapporto di sacrificio nullo. La realtà si colloca tra le due posizioni estreme: la credibilità ha avuto un ruolo (le aspettative si sono effettivamente spostate verso il basso durante il mandato di Volcker), ma non abbastanza da azzerare il costo della recessione.
          </p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            Più recentemente, l'inflazione globale post-Covid (2021–23) ha offerto un altro test naturale. L'inflazione è salita in USA a 9% nel 2022, riportandoci al dibattito degli anni '70. La Fed ha alzato i tassi da 0 a 5,25% in 18 mesi. Contro ogni aspettativa, l'inflazione è scesa a ~3% entro fine 2023 <em>senza</em> una recessione (la cosiddetta <em>soft landing</em>). Il rapporto di sacrificio in questo episodio sembra essere stato molto più basso del normale — forse perché lo shock inflazionistico iniziale era percepito come transitorio, le aspettative di lungo periodo non si erano mai effettivamente spostate, e la Fed ha mantenuto credibilità. È un episodio che richiederà anni di analisi per essere compreso appieno.
          </p>
        </div>
      </div>

      {/* ── SEZ 15.4: Conclusioni ───────────────────────────────────── */}
      <div className="content-section glass-panel" style={{ padding: '2rem 2.5rem', marginBottom: '2rem', background: 'rgba(67,56,202,0.04)', border: '1px solid rgba(67,56,202,0.15)' }}>
        <h2 style={{ ...S.h2, marginTop: 0 }}>In Sintesi</h2>
        <ol style={{ color: 'var(--text-secondary)', lineHeight: 1.9, paddingLeft: '1.5rem' }}>
          <li>I quattro modelli dell'offerta aggregata di breve periodo (rigidità salariale, percezioni errate, informazione imperfetta, prezzi rigidi) arrivano a una conclusione comune: la produzione devia dal suo livello naturale quando il livello dei prezzi devia dal livello atteso.</li>
          <li>L'equazione dell'offerta aggregata di breve periodo può essere riscritta come <em>curva di Phillips</em>: l'inflazione dipende dall'inflazione attesa, dallo scostamento del tasso di disoccupazione dal suo livello naturale e da shock di offerta.</li>
          <li>Nel breve periodo l'inflazione e la disoccupazione sono negativamente correlate: un'espansione della domanda riduce u e alza π. Nel lungo periodo, quando le aspettative si adeguano, la curva di Phillips diventa verticale al tasso naturale di disoccupazione u_n. Non esiste un trade-off permanente.</li>
          <li>Gli shock di offerta (come i rincari del petrolio negli anni '70) spostano l'intera curva di Phillips verso l'alto, creando <em>stagflazione</em>: alta inflazione e alta disoccupazione contemporaneamente.</li>
          <li>Il rapporto di sacrificio misura il costo in termini di PIL perso per ogni punto percentuale di riduzione dell'inflazione. Stime empiriche collocano il rapporto tra 2 e 5 per le economie avanzate.</li>
          <li>Se gli agenti formano le aspettative razionalmente e la banca centrale è credibile, le aspettative di inflazione possono scendere rapidamente in risposta a un annuncio di politica anti-inflazionistica, riducendo il costo della disinflazione. La credibilità è preziosa e difficile da ottenere, ma una volta acquisita permette alla banca centrale di gestire l'inflazione con minor costo reale.</li>
          <li>Il dibattito su come si formano le aspettative — adattive o razionali — resta aperto nella letteratura empirica. La risposta probabilmente dipende dal contesto: in paesi con alta inflazione cronica, le aspettative sono più adattive; in paesi con banche centrali credibili e inflazione bassa, sono più razionali e ancorate al target.</li>
        </ol>
      </div>

    </div>
  );
}
