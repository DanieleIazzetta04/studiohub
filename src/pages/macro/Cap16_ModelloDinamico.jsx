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

// ─── Grafico 1: Equilibrio di lungo periodo DAD-DAS ─────────────────────────
const DADDASEquilibriumGraph = () => {
  const [pieTarget, setPieTarget] = useState(2);
  const [Ybar] = useState(100);

  // DAS: π = π^e + φ(Y - Ȳ) + ν (con π^e = π_{t-1} in steady state = π*)
  // In steady state π^e = π*, quindi DAS è: π = π* + φ(Y - Ȳ)
  const phi = 0.25;
  // DAD: Y = Ȳ - [αθ_π/(1+αθ_Y)](π - π*) + shock
  // At steady state Y = Ȳ, π = π*
  const alpha = 1, thetaPi = 0.5, thetaY = 0.5;
  const dadSlope = -alpha * thetaPi / (1 + alpha * thetaY);

  const W = 500, H = 360;
  const PL = 60, PR = 20, PT = 25, PB = 50;
  const pW = W - PL - PR, pH = H - PT - PB;
  const Ymin = 80, Ymax = 120, piMin = -1, piMax = 7;
  const tx = (y) => PL + ((y - Ymin) / (Ymax - Ymin)) * pW;
  const tp = (p) => PT + pH - ((p - piMin) / (piMax - piMin)) * pH;

  return (
    <div style={S.graphWrap}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={S.graphTitle}>Equilibrio di lungo periodo: DAD ∩ DAS</div>
          <div style={S.graphSub}>In equilibrio Y = Ȳ e π = π*_t (obiettivo d'inflazione)</div>
        </div>
        <div style={{ textAlign: 'right', fontSize: '0.85rem' }}>
          <div>Y* = <strong style={{ color: 'var(--accent-indigo)' }}>{Ybar}</strong></div>
          <div>π* = <strong style={{ color: '#dc2626' }}>{pieTarget}%</strong></div>
        </div>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto', display: 'block' }}>
        {[0, 2, 4, 6].map(p => (
          <line key={p} x1={PL} y1={tp(p)} x2={PL + pW} y2={tp(p)} stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
        ))}
        {[85, 90, 95, 100, 105, 110, 115].map(y => (
          <line key={y} x1={tx(y)} y1={PT} x2={tx(y)} y2={PT + pH} stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
        ))}
        {[0, 2, 4, 6].map(p => (
          <text key={p} x={PL - 5} y={tp(p) + 4} textAnchor="end" fontSize="10" fill="#94a3b8">{p}%</text>
        ))}
        {[85, 90, 95, 100, 105, 110, 115].map(y => (
          <text key={y} x={tx(y)} y={PT + pH + 16} textAnchor="middle" fontSize="10" fill="#94a3b8">{y}</text>
        ))}

        <line x1={PL} y1={PT} x2={PL} y2={PT + pH} stroke="#64748b" strokeWidth="1.5" />
        <line x1={PL} y1={PT + pH} x2={PL + pW} y2={PT + pH} stroke="#64748b" strokeWidth="1.5" />

        {/* DAS: π = π* + φ(Y - Ȳ) */}
        <line
          x1={tx(Ymin)} y1={tp(pieTarget + phi * (Ymin - Ybar))}
          x2={tx(Ymax)} y2={tp(pieTarget + phi * (Ymax - Ybar))}
          stroke="#0284c7" strokeWidth="2.5"
        />
        <text x={tx(Ymax) - 35} y={tp(pieTarget + phi * (Ymax - Ybar)) - 6} fontSize="12" fill="#0284c7" fontWeight="700">DAS</text>

        {/* DAD: Y = Ȳ + (1/dadSlope)(π - π*) → pendenza negativa */}
        <line
          x1={tx(Ybar + (piMax - pieTarget) / dadSlope)}
          y1={tp(piMax)}
          x2={tx(Ybar + (piMin - pieTarget) / dadSlope)}
          y2={tp(piMin)}
          stroke="#dc2626" strokeWidth="2.5"
        />
        <text x={tx(Ybar + (piMin - pieTarget) / dadSlope) - 25} y={tp(piMin) - 4} fontSize="12" fill="#dc2626" fontWeight="700">DAD</text>

        {/* Punto equilibrio */}
        <line x1={tx(Ybar)} y1={tp(pieTarget)} x2={tx(Ybar)} y2={PT + pH} stroke="#64748b" strokeDasharray="4,3" strokeWidth="1" />
        <line x1={PL} y1={tp(pieTarget)} x2={tx(Ybar)} y2={tp(pieTarget)} stroke="#64748b" strokeDasharray="4,3" strokeWidth="1" />
        <circle cx={tx(Ybar)} cy={tp(pieTarget)} r="7" fill="#1e293b" />
        <circle cx={tx(Ybar)} cy={tp(pieTarget)} r="3" fill="white" />

        <text x={tx(Ybar)} y={PT + pH + 28} textAnchor="middle" fontSize="11" fill="#1e293b" fontWeight="700">Ȳ = {Ybar}</text>
        <text x={PL - 5} y={tp(pieTarget) - 4} textAnchor="end" fontSize="11" fill="#1e293b" fontWeight="700">π* = {pieTarget}%</text>

        <text x={PL + pW / 2} y={H - 6} textAnchor="middle" fontSize="12" fill="var(--text-secondary)">Reddito, produzione Y</text>
        <text x={13} y={PT + pH / 2} textAnchor="middle" fontSize="12" fill="var(--text-secondary)" transform={`rotate(-90,13,${PT + pH / 2})`}>Inflazione π</text>
      </svg>

      <div style={{ marginTop: '0.9rem' }}>
        <label style={S.sliderLabel}>Obiettivo d'inflazione della banca centrale π*: <strong>{pieTarget}%</strong></label>
        <input type="range" min={0} max={6} step={0.5} value={pieTarget} onChange={e => setPieTarget(+e.target.value)} style={{ width: '100%', accentColor: '#dc2626' }} />
        <div style={S.sliderRow}><span>0%</span><span>6%</span></div>
      </div>

      <div style={S.resultBox}>
        Nel lungo periodo l'intersezione DAD-DAS avviene sempre a Y = Ȳ (produzione naturale) con inflazione pari all'obiettivo π*. La banca centrale controlla il livello di inflazione di lungo periodo ma non può spostare Y dal suo livello naturale.
      </div>
    </div>
  );
};

// ─── Grafico 2: Simulazione dinamica di uno shock alla domanda ──────────────
const DemandShockSimulation = () => {
  const [shockSize, setShockSize] = useState(1);
  const [persistence, setPersistence] = useState(0.5);

  // Parametri del modello
  const alpha = 1, phi = 0.25, thetaPi = 0.5, thetaY = 0.5;
  const rho = 2, piStar = 2, Ybar = 100;

  // Simulazione discreta 30 periodi
  const periods = 30;
  const shockStart = 5, shockEnd = 9;

  const data = [];
  let Y_prev = Ybar, pi_prev = piStar, epsilon_prev = 0;
  for (let t = 0; t < periods; t++) {
    // Shock alla domanda
    const epsilon = (t >= shockStart && t <= shockEnd)
      ? shockSize * Math.pow(persistence, t - shockStart)
      : epsilon_prev * persistence;
    // π^e_t = π_{t-1}
    const pie = pi_prev;
    // Risolvo simultaneamente DAS e DAD:
    // DAS: π_t = pie + φ(Y_t - Ȳ)
    // DAD: Y_t = Ȳ - [αθ_π/(1+αθ_Y)](π_t - π*) + ε_t/(1+αθ_Y)
    const dadCoef = -alpha * thetaPi / (1 + alpha * thetaY);
    const dadIntercept = Ybar - dadCoef * piStar + epsilon / (1 + alpha * thetaY);
    // Y = dadIntercept + dadCoef*π; sub in DAS: π = pie + φ(Y - Ȳ) = pie + φ(dadIntercept + dadCoef*π - Ȳ)
    // π(1 - φ·dadCoef) = pie + φ(dadIntercept - Ȳ)
    const pi = (pie + phi * (dadIntercept - Ybar)) / (1 - phi * dadCoef);
    const Y = dadIntercept + dadCoef * pi;
    const r = rho + thetaPi * (pi - piStar) + thetaY * (Y - Ybar);
    const i = r + pie;
    data.push({ t, Y, pi, r, i, epsilon });
    Y_prev = Y;
    pi_prev = pi;
    epsilon_prev = epsilon;
  }

  const W = 520, H = 280;
  const PL = 45, PR = 15, PT = 20, PB = 35;
  const pW = W - PL - PR, pH = H - PT - PB;
  const tx = (t) => PL + (t / (periods - 1)) * pW;

  const drawSeries = (getValue, color, yMin, yMax, title) => {
    const ty = (v) => PT + pH - ((v - yMin) / (yMax - yMin)) * pH;
    const pts = data.map(d => `${tx(d.t).toFixed(1)},${ty(getValue(d)).toFixed(1)}`).join(' ');
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
        {/* Shock region */}
        <rect x={tx(shockStart)} y={PT} width={tx(shockEnd) - tx(shockStart)} height={pH} fill="#fef3c7" opacity="0.3" />
        <polyline points={pts} fill="none" stroke={color} strokeWidth="2" />
        {data.map((d, i) => (
          <circle key={i} cx={tx(d.t)} cy={ty(getValue(d))} r="2.5" fill={color} />
        ))}
        <text x={PL + pW / 2} y={H - 5} textAnchor="middle" fontSize="10" fill="#94a3b8">Tempo (periodi)</text>
      </svg>
    );
  };

  return (
    <div style={S.graphWrap}>
      <div style={S.graphTitle}>Risposta a uno shock alla domanda aggregata (ε)</div>
      <div style={S.graphSub}>Shock positivo applicato ai periodi 5–9, con persistenza specificata dallo slider</div>

      {drawSeries(d => d.Y, '#4338ca', 99, 102, '(a) Output Y')}
      {drawSeries(d => d.pi, '#dc2626', 1.5, 3.5, '(b) Inflazione π (%)')}
      {drawSeries(d => d.r, '#0284c7', 1.5, 4, '(c) Tasso di interesse reale r (%)')}
      {drawSeries(d => d.i, '#16a34a', 3.5, 7, '(d) Tasso di interesse nominale i (%)')}

      <div style={{ marginTop: '0.9rem' }}>
        <label style={S.sliderLabel}>Dimensione dello shock alla domanda: <strong>+{shockSize.toFixed(1)}</strong></label>
        <input type="range" min={0.2} max={3} step={0.2} value={shockSize} onChange={e => setShockSize(+e.target.value)} style={{ width: '100%', accentColor: '#4338ca' }} />
      </div>
      <div style={{ marginTop: '0.6rem' }}>
        <label style={S.sliderLabel}>Persistenza dello shock (ρ_ε): <strong>{persistence.toFixed(2)}</strong></label>
        <input type="range" min={0} max={0.95} step={0.05} value={persistence} onChange={e => setPersistence(+e.target.value)} style={{ width: '100%' }} />
      </div>

      <div style={S.resultBox}>
        Uno shock positivo alla domanda aggregata fa salire l'output Y sopra Ȳ, alza l'inflazione sopra π*=2%. La banca centrale reagisce (regola di Taylor) alzando il tasso di interesse reale sopra ρ=2%. Col tempo, sia Y sia π tornano gradualmente ai valori di lungo periodo.
      </div>
    </div>
  );
};

// ─── Grafico 3: Simulazione shock di offerta ────────────────────────────────
const SupplyShockSimulation = () => {
  const [shockSize, setShockSize] = useState(1);

  const alpha = 1, phi = 0.25, thetaPi = 0.5, thetaY = 0.5;
  const rho = 2, piStar = 2, Ybar = 100;

  const periods = 30;
  const shockPeriod = 5;

  const data = [];
  let pi_prev = piStar;
  for (let t = 0; t < periods; t++) {
    const nu = (t === shockPeriod) ? shockSize : 0;
    const pie = pi_prev;
    const dadCoef = -alpha * thetaPi / (1 + alpha * thetaY);
    const dadIntercept = Ybar - dadCoef * piStar;
    // DAS con shock: π_t = pie + φ(Y_t - Ȳ) + ν
    // Y = dadIntercept + dadCoef·π
    // π = pie + φ(dadIntercept + dadCoef·π - Ȳ) + ν
    const pi = (pie + phi * (dadIntercept - Ybar) + nu) / (1 - phi * dadCoef);
    const Y = dadIntercept + dadCoef * pi;
    const r = rho + thetaPi * (pi - piStar) + thetaY * (Y - Ybar);
    const i = r + pie;
    data.push({ t, Y, pi, r, i, nu });
    pi_prev = pi;
  }

  const W = 520, H = 280;
  const PL = 45, PR = 15, PT = 20, PB = 35;
  const pW = W - PL - PR, pH = H - PT - PB;
  const tx = (t) => PL + (t / (periods - 1)) * pW;

  const drawSeries = (getValue, color, yMin, yMax, title) => {
    const ty = (v) => PT + pH - ((v - yMin) / (yMax - yMin)) * pH;
    const pts = data.map(d => `${tx(d.t).toFixed(1)},${ty(getValue(d)).toFixed(1)}`).join(' ');
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
        <line x1={tx(shockPeriod)} y1={PT} x2={tx(shockPeriod)} y2={PT + pH} stroke="#ea580c" strokeWidth="1" strokeDasharray="3,2" opacity="0.5" />
        <polyline points={pts} fill="none" stroke={color} strokeWidth="2" />
        {data.map((d, i) => (
          <circle key={i} cx={tx(d.t)} cy={ty(getValue(d))} r="2.5" fill={color} />
        ))}
        <text x={PL + pW / 2} y={H - 5} textAnchor="middle" fontSize="10" fill="#94a3b8">Tempo (periodi)</text>
      </svg>
    );
  };

  return (
    <div style={S.graphWrap}>
      <div style={S.graphTitle}>Risposta a uno shock di offerta (ν)</div>
      <div style={S.graphSub}>Shock positivo di offerta (es. aumento del prezzo del petrolio) al periodo 5</div>

      {drawSeries(d => d.Y, '#4338ca', 97, 101, '(a) Output Y')}
      {drawSeries(d => d.pi, '#dc2626', 1.5, 4, '(b) Inflazione π (%)')}
      {drawSeries(d => d.r, '#0284c7', 1.5, 4, '(c) Tasso di interesse reale r (%)')}
      {drawSeries(d => d.i, '#16a34a', 3.5, 8, '(d) Tasso di interesse nominale i (%)')}

      <div style={{ marginTop: '0.9rem' }}>
        <label style={S.sliderLabel}>Dimensione dello shock di offerta ν: <strong>+{shockSize.toFixed(1)}</strong></label>
        <input type="range" min={0.2} max={3} step={0.2} value={shockSize} onChange={e => setShockSize(+e.target.value)} style={{ width: '100%', accentColor: '#ea580c' }} />
      </div>

      <div style={S.resultBox}>
        <strong>Stagflazione</strong>: uno shock positivo di offerta (come un aumento del prezzo del petrolio) spinge l'inflazione sopra il target e contemporaneamente spinge l'output sotto Ȳ. La banca centrale deve accettare un trade-off: se aggressiva contro l'inflazione, peggiora la recessione; se accomodante, peggiora l'inflazione.
      </div>
    </div>
  );
};

// ─── Grafico 4: Cambiamento dell'obiettivo d'inflazione ─────────────────────
const InflationTargetChangeGraph = () => {
  const [targetChange, setTargetChange] = useState(-2); // da 2% a 2% + change

  const alpha = 1, phi = 0.25, thetaPi = 0.5, thetaY = 0.5;
  const rho = 2, Ybar = 100;

  const periods = 30;
  const changePeriod = 5;
  const piStarInitial = 4, piStarFinal = piStarInitial + targetChange;

  const data = [];
  let pi_prev = piStarInitial;
  for (let t = 0; t < periods; t++) {
    const piStar = t >= changePeriod ? piStarFinal : piStarInitial;
    const pie = pi_prev;
    const dadCoef = -alpha * thetaPi / (1 + alpha * thetaY);
    const dadIntercept = Ybar - dadCoef * piStar;
    const pi = (pie + phi * (dadIntercept - Ybar)) / (1 - phi * dadCoef);
    const Y = dadIntercept + dadCoef * pi;
    const r = rho + thetaPi * (pi - piStar) + thetaY * (Y - Ybar);
    const i = r + pie;
    data.push({ t, Y, pi, r, i, piStar });
    pi_prev = pi;
  }

  const W = 520, H = 280;
  const PL = 45, PR = 15, PT = 20, PB = 35;
  const pW = W - PL - PR, pH = H - PT - PB;
  const tx = (t) => PL + (t / (periods - 1)) * pW;

  const drawSeries = (getValue, color, yMin, yMax, title, secondary) => {
    const ty = (v) => PT + pH - ((v - yMin) / (yMax - yMin)) * pH;
    const pts = data.map(d => `${tx(d.t).toFixed(1)},${ty(getValue(d)).toFixed(1)}`).join(' ');
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
        <line x1={tx(changePeriod)} y1={PT} x2={tx(changePeriod)} y2={PT + pH} stroke="#ea580c" strokeWidth="1" strokeDasharray="3,2" opacity="0.5" />
        {secondary && (
          <polyline
            points={data.map(d => `${tx(d.t).toFixed(1)},${ty(secondary(d)).toFixed(1)}`).join(' ')}
            fill="none" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="5,3"
          />
        )}
        <polyline points={pts} fill="none" stroke={color} strokeWidth="2" />
        {data.map((d, i) => (
          <circle key={i} cx={tx(d.t)} cy={ty(getValue(d))} r="2.5" fill={color} />
        ))}
        <text x={PL + pW / 2} y={H - 5} textAnchor="middle" fontSize="10" fill="#94a3b8">Tempo (periodi)</text>
      </svg>
    );
  };

  return (
    <div style={S.graphWrap}>
      <div style={S.graphTitle}>Cambiamento del target d'inflazione</div>
      <div style={S.graphSub}>La banca centrale passa da π*={piStarInitial}% a π*={piStarFinal}% al periodo 5. Linea tratteggiata grigia = target.</div>

      {drawSeries(d => d.pi, '#dc2626', Math.min(piStarInitial, piStarFinal) - 1, Math.max(piStarInitial, piStarFinal) + 1, '(a) Inflazione π (%)', d => d.piStar)}
      {drawSeries(d => d.Y, '#4338ca', 96, 103, '(b) Output Y')}
      {drawSeries(d => d.r, '#0284c7', 0, 5, '(c) Tasso di interesse reale r (%)')}
      {drawSeries(d => d.i, '#16a34a', 2, 9, '(d) Tasso di interesse nominale i (%)')}

      <div style={{ marginTop: '0.9rem' }}>
        <label style={S.sliderLabel}>Variazione del target d'inflazione: <strong>{targetChange >= 0 ? '+' : ''}{targetChange} punti</strong> (da {piStarInitial}% a {piStarFinal}%)</label>
        <input type="range" min={-3} max={3} step={0.5} value={targetChange} onChange={e => setTargetChange(+e.target.value)} style={{ width: '100%' }} />
        <div style={S.sliderRow}><span>disinflazione</span><span>inflazione</span></div>
      </div>

      <div style={S.resultBox}>
        {targetChange < 0 && <>Una <strong>disinflazione</strong> (target ridotto) richiede una recessione temporanea: la BC alza r per abbattere l'inflazione, Y scende sotto Ȳ, poi converge al nuovo equilibrio. È il <em>rapporto di sacrificio</em> del Capitolo 15.</>}
        {targetChange > 0 && <>Un aumento del target fa salire gradualmente l'inflazione con un boom temporaneo di Y, prima della convergenza.</>}
        {targetChange === 0 && <>Nessun cambiamento: l'economia resta in equilibrio di lungo periodo.</>}
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// PAGINA PRINCIPALE
// ═══════════════════════════════════════════════════════════════════════════
export default function Cap16ModelloDinamico() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', paddingBottom: '5rem' }}>

      <div className="page-header">
        <div style={{ color: 'var(--accent-cyan)', fontWeight: 600, letterSpacing: '0.1em', fontSize: '0.875rem', marginBottom: '0.5rem' }}>CAPITOLO 16 · POLITICA MACROECONOMICA</div>
        <h1 className="page-title gradient-text" style={{ fontSize: '2.6rem', lineHeight: 1.1 }}>Un Modello Dinamico<br />per le Fluttuazioni Economiche</h1>
        <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', fontSize: '1.05rem', maxWidth: '680px' }}>
          Un modello completo, dinamico ed esplicitamente temporale dell'economia di breve e medio periodo: domanda e offerta aggregate evolvono nel tempo, la banca centrale segue una regola di politica monetaria attiva, shock di domanda e di offerta propagano i loro effetti attraverso molti periodi.
        </p>
      </div>

      <div className="content-section glass-panel" style={{ padding: '2rem 2.5rem', marginBottom: '2rem' }}>
        <blockquote style={{ borderLeft: '4px solid var(--accent-indigo)', padding: '0.6rem 1.2rem', margin: '0 0 1.5rem 0', color: 'var(--text-secondary)', fontStyle: 'italic', fontSize: '0.95rem' }}>
          «La cosa importante nella scienza non consiste tanto nel trovare nuovi fatti quanto nello scoprire nuovi modi per interpretarli.»
          <div style={{ marginTop: '0.5rem', fontStyle: 'normal', fontSize: '0.85rem' }}>— William Bragg</div>
        </blockquote>

        <p style={S.p}>
          A cinquanta anni di distanza dal fisico William Bragg (1862–1942) — la scienza economica ha sviluppato una propria agenda per studiare le fluttuazioni macroeconomiche nel breve periodo. Nei capitoli precedenti abbiamo costruito i modelli concettuali fondamentali della macroeconomia moderna: il modello IS-LM per il breve periodo in economia chiusa (Capitolo 12–13), il modello di Mundell-Fleming per l'economia aperta (Capitolo 14), e il modello dell'offerta aggregata di breve periodo con la curva di Phillips (Capitolo 15). Questi modelli sono strumenti potenti ma intrinsecamente <em>statici</em>: descrivono l'equilibrio dell'economia a un istante dato, e gli effetti delle politiche sono analizzati per confronto tra due equilibri (prima e dopo lo shock), senza dire molto sul <em>sentiero</em> che l'economia percorre per passare dall'uno all'altro.
        </p>
        <p style={S.p}>
          Nella realtà, le fluttuazioni economiche sono fenomeni dinamici. Uno shock negativo alla domanda non fa cadere immediatamente il reddito al nuovo livello di equilibrio, ma innesca una sequenza di reazioni e aggiustamenti che si estendono su molti trimestri. La banca centrale non osserva lo shock in un istante e agisce una volta per tutte: reagisce gradualmente, osserva gli effetti della propria azione, e corregge la rotta. Le aspettative di inflazione non sono fisse ma evolvono nel tempo a seconda di ciò che gli agenti hanno osservato nel passato.
        </p>
        <p style={S.p}>
          In questo capitolo costruiamo un <strong>modello dinamico completo</strong>, composto da cinque equazioni, che permette di analizzare in modo esplicito il comportamento dell'economia nel tempo. Il modello è lo standard moderno della macroeconomia applicata: serve da base per le simulazioni che le banche centrali conducono per valutare gli effetti delle proprie decisioni, e per i modelli DSGE (<em>Dynamic Stochastic General Equilibrium</em>) usati nella ricerca accademica di frontiera.
        </p>
        <p style={S.p}>
          Considereremo cinque categorie di variabili: l'output Y_t, il tasso di inflazione π_t, il tasso di interesse reale r_t, il tasso di interesse nominale i_t, e le aspettative d'inflazione E_t π_{'{t+1}'}. E tre tipi di parametri "shock" esogeni: shock alla domanda ε_t, shock di offerta ν_t, e l'obiettivo d'inflazione π*_t (che può cambiare nel tempo se la BC decide di modificarlo).
        </p>
      </div>

      {/* ── SEZ 16.1: Gli elementi del modello ──────────────────────── */}
      <div className="content-section glass-panel" style={{ padding: '2rem 2.5rem', marginBottom: '2rem' }}>
        <h2 style={S.h2}>16.1 Gli elementi del modello</h2>
        <p style={S.p}>
          Prima di costruire le componenti del modello della DA-AD dinamico, dobbiamo introdurre alcuni elementi di notazione. Consideriamo le variabili relative a un dato periodo di tempo (di solito un trimestre o un anno), e l'indice <em>t</em> indica il periodo di riferimento. Un periodo è abbastanza breve (circa tre mesi) da rendere plausibile l'ipotesi che i prezzi siano rigidi nel senso discusso nel Capitolo 15. L'inizio dell'intervallo di tempo studiato è il periodo 0, il periodo successivo è 1, e così via. Alcune variabili (come Y o π) si riferiscono al <em>flusso</em> del periodo (il PIL prodotto tra t e t+1, o l'inflazione osservata dall'inizio alla fine del periodo); altre (come i o r) si riferiscono al <em>tasso</em> prevalente nel periodo.
        </p>

        <h3 style={S.h3}>Output: la domanda di beni e servizi</h3>
        <p style={S.p}>
          La domanda di beni e servizi è data dalla seguente equazione:
        </p>
        <div style={S.formula}>
          <strong>Y_t = Ȳ_t − α(r_t − ρ) + ε_t</strong>
        </div>
        <p style={S.p}>
          dove: <em>Y_t</em> è la produzione totale di beni e servizi; <em>Ȳ_t</em> è il livello <strong>naturale</strong> della produzione, ossia la produzione di piena occupazione (può crescere nel tempo per effetto dell'accumulazione di capitale, aumenti di produttività, crescita della forza lavoro); <em>r_t</em> è il tasso di interesse reale; <em>ρ</em> (letto "rho") è il tasso di interesse reale che prevarrebbe se l'economia fosse al livello naturale di produzione — lo chiamiamo <em>tasso di interesse reale naturale</em>; <em>α</em> è un parametro positivo che misura la sensibilità della domanda al differenziale tra il tasso di interesse reale corrente e quello naturale; <em>ε_t</em> (epsilon-t) è uno shock esogeno alla domanda aggregata.
        </p>
        <p style={S.p}>
          L'equazione ha un'interpretazione diretta. Se il tasso d'interesse reale r_t è esattamente pari al suo livello naturale ρ, e non ci sono shock alla domanda (ε_t = 0), l'output è pari al livello naturale Ȳ_t. Se invece la banca centrale ha impostato r_t sopra ρ (politica monetaria restrittiva), il costo del credito scoraggia investimenti e consumi, quindi Y_t cade sotto Ȳ_t. Se r_t è sotto ρ (politica espansiva), la domanda aggregata aumenta e Y_t supera Ȳ_t. Uno shock ε_t positivo (ottimismo dei consumatori, boom delle esportazioni, ecc.) aumenta Y_t per un qualunque livello di r_t; uno shock negativo lo riduce. Questa equazione non è altro che una versione dinamica della <strong>curva IS</strong> del Capitolo 12.
        </p>

        <h3 style={S.h3}>Il tasso d'interesse reale: l'equazione di Fisher</h3>
        <p style={S.p}>
          Il tasso di interesse reale <em>r_t</em> è legato al tasso di interesse nominale <em>i_t</em> attraverso l'<strong>equazione di Fisher</strong>. Poiché ciò che conta per le decisioni di investimento è il rendimento reale atteso, la versione rilevante è quella <em>ex ante</em>:
        </p>
        <div style={S.formula}>
          <strong>r_t = i_t − E_t π_{'{t+1}'}</strong>
        </div>
        <p style={S.p}>
          dove <em>E_t π_{'{t+1}'}</em> rappresenta le aspettative formate al tempo <em>t</em> sull'inflazione del periodo successivo. Il tasso di interesse reale è la differenza tra il tasso nominale osservato oggi e l'inflazione che gli agenti si aspettano di vedere nel prossimo periodo. È questo il tasso che influenza le decisioni economiche reali: se prendo a prestito al 5% nominale ma mi aspetto un'inflazione del 4%, il mio costo reale è solo l'1% — quindi il tasso rilevante per scegliere se investire è il tasso reale.
        </p>

        <h3 style={S.h3}>Inflazione attesa: aspettative adattive</h3>
        <p style={S.p}>
          Come abbiamo visto nel Capitolo 15, le aspettative di inflazione possono essere formate in modi molto diversi. L'approccio più semplice, e quello che adottiamo in questo modello, è quello delle <strong>aspettative adattive</strong>: gli agenti si aspettano per il futuro lo stesso tasso di inflazione che hanno osservato più di recente. Formalmente:
        </p>
        <div style={S.formula}>
          <strong>E_t π_{'{t+1}'} = π_t</strong>
        </div>
        <p style={S.p}>
          Quando gli agenti formano le aspettative d'inflazione sul periodo successivo, prendono come punto di riferimento l'inflazione effettivamente osservata nel periodo attuale. Questa ipotesi è una semplificazione, ma ha il vantaggio di rendere il modello trattabile e riproduce bene molte caratteristiche empiriche dell'inflazione. Alternative più sofisticate (aspettative razionali, aspettative basate sulla credibilità della banca centrale) sono utilizzate nei modelli di frontiera ma complicano l'analisi.
        </p>

        <h3 style={S.h3}>Inflazione e curva di Phillips</h3>
        <p style={S.p}>
          L'inflazione di questa economia è determinata da una versione moderna della curva di Phillips, che già abbiamo incontrato nel Capitolo 15. In forma dinamica:
        </p>
        <div style={S.formula}>
          <strong>π_t = E_{'{t-1}'} π_t + φ(Y_t − Ȳ_t) + ν_t</strong>
        </div>
        <p style={S.p}>
          In questa equazione: <em>π_t</em> è l'inflazione nel periodo t; <em>E_{'{t-1}'} π_t</em> sono le aspettative formate nel periodo precedente sull'inflazione del periodo t (per la nostra ipotesi adattiva, pari a π_{'{t-1}'}); <em>φ</em> è un parametro positivo che misura la sensibilità dell'inflazione al gap di produzione; <em>Y_t − Ȳ_t</em> è il <strong>gap di produzione</strong>, la differenza tra la produzione effettiva e quella naturale; <em>ν_t</em> (ni-t) è uno <strong>shock di offerta</strong> (per esempio un aumento del prezzo del petrolio o delle materie prime).
        </p>
        <p style={S.p}>
          Un'economia che si trova sopra il livello naturale (Y_t &gt; Ȳ_t) genera pressioni inflazionistiche: la domanda di lavoro spinge al rialzo i salari, le imprese hanno costi più alti, trasferiscono questi costi sui prezzi, e l'inflazione accelera al di sopra dell'aspettativa. L'opposto accade quando Y_t &lt; Ȳ_t: l'economia è in recessione, i salari frenano, l'inflazione scende sotto l'aspettativa. L'inflazione può anche deviare dall'aspettativa per cause esterne, cioè shock di offerta ν_t: uno shock positivo (ν_t &gt; 0) rappresenta per esempio un rincaro del petrolio, che fa salire tutti i costi e quindi i prezzi, indipendentemente dal gap di produzione.
        </p>

        <h3 style={S.h3}>La regola di politica monetaria (regola di Taylor)</h3>
        <p style={S.p}>
          L'ultima equazione del modello descrive come la banca centrale decide il tasso di interesse nominale i_t. A differenza dei modelli precedenti, in cui la politica monetaria era spesso rappresentata come un'offerta di moneta esogena, qui assumiamo che la banca centrale segua una <strong>regola di politica monetaria</strong> esplicita. La forma più diffusa, proposta da John Taylor (economista di Stanford) nel 1993, è:
        </p>
        <div style={S.formula}>
          <strong>i_t = π_t + ρ + θ_π(π_t − π*_t) + θ_Y(Y_t − Ȳ_t)</strong>
        </div>
        <p style={S.p}>
          dove: <em>π*_t</em> è l'<strong>obiettivo d'inflazione</strong> della banca centrale (per la BCE e la Fed, intorno al 2%); <em>θ_π</em> e <em>θ_Y</em> sono parametri positivi che misurano quanto la BC reagisce rispettivamente a uno scostamento dell'inflazione dal target e a uno scostamento dell'output dal suo livello naturale.
        </p>
        <p style={S.p}>
          L'interpretazione è la seguente. Se l'inflazione è al target (π_t = π*_t) e l'output è al livello naturale (Y_t = Ȳ_t), la BC imposta <em>i_t = π_t + ρ</em>, cioè un tasso nominale pari all'inflazione più il tasso naturale reale — coerente con l'equazione di Fisher e un tasso reale pari a ρ. Se l'inflazione sale sopra il target, la BC aggiunge un premio θ_π·(π_t − π*_t), alzando il tasso nominale di <em>più</em> dell'aumento dell'inflazione — quindi il tasso reale sale, frenando l'economia. Se l'output è sopra il livello naturale, la BC aggiunge un altro premio θ_Y·(Y_t − Ȳ_t), ancora restrittivo. Simmetricamente, quando inflazione o output cadono, la BC abbassa i_t in modo da scendere sotto ρ e stimolare l'economia.
        </p>
        <p style={S.p}>
          Taylor formulò la regola originalmente con θ_π = 0.5 e θ_Y = 0.5, e notò che sostanzialmente la Fed di Greenspan si era comportata come se seguisse questa regola nei primi anni '90, anche senza averla formalizzata esplicitamente. Da allora la regola di Taylor è diventata uno standard di riferimento per valutare le decisioni di politica monetaria.
        </p>

        <h3 style={S.h3}>Tabella 16.1 — Le variabili e i parametri del modello dinamico</h3>
        <p style={S.p}>
          Per comodità di riferimento, raccogliamo in una tabella tutti gli elementi del modello.
        </p>
        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Categoria</th>
              <th style={S.th}>Simbolo</th>
              <th style={S.th}>Significato</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={S.td} rowSpan="5"><strong>Variabili endogene</strong></td><td style={S.td}>Y_t</td><td style={S.td}>Produzione effettiva (output)</td></tr>
            <tr><td style={S.td}>π_t</td><td style={S.td}>Inflazione nel periodo t</td></tr>
            <tr><td style={S.td}>r_t</td><td style={S.td}>Tasso di interesse reale</td></tr>
            <tr><td style={S.td}>i_t</td><td style={S.td}>Tasso di interesse nominale</td></tr>
            <tr><td style={S.td}>E_t π_{'{t+1}'}</td><td style={S.td}>Aspettative d'inflazione formate al tempo t sul periodo t+1</td></tr>
            <tr><td style={S.td} rowSpan="4"><strong>Variabili esogene</strong></td><td style={S.td}>Ȳ_t</td><td style={S.td}>Livello naturale di produzione</td></tr>
            <tr><td style={S.td}>π*_t</td><td style={S.td}>Obiettivo d'inflazione della banca centrale</td></tr>
            <tr><td style={S.td}>ε_t</td><td style={S.td}>Shock alla domanda aggregata</td></tr>
            <tr><td style={S.td}>ν_t</td><td style={S.td}>Shock all'offerta aggregata (shock di offerta)</td></tr>
            <tr><td style={S.td}><strong>Variabile predeterminata</strong></td><td style={S.td}>E_{'{t-1}'} π_t</td><td style={S.td}>Aspettative formate al periodo precedente sull'inflazione corrente (= π_{'{t-1}'} con aspettative adattive)</td></tr>
            <tr><td style={S.td} rowSpan="5"><strong>Parametri</strong></td><td style={S.td}>α</td><td style={S.td}>Sensibilità della domanda al tasso di interesse reale</td></tr>
            <tr><td style={S.td}>ρ</td><td style={S.td}>Tasso di interesse reale naturale (di lungo periodo)</td></tr>
            <tr><td style={S.td}>φ</td><td style={S.td}>Pendenza della curva di Phillips/DAS (reattività dell'inflazione al gap di produzione)</td></tr>
            <tr><td style={S.td}>θ_π</td><td style={S.td}>Peso attribuito dalla regola di Taylor allo scostamento dell'inflazione dal target</td></tr>
            <tr><td style={S.td}>θ_Y</td><td style={S.td}>Peso attribuito dalla regola di Taylor allo scostamento dell'output dal livello naturale</td></tr>
          </tbody>
        </table>
        <p style={S.p}>
          Le cinque equazioni del modello (IS dinamica, Fisher, Phillips dinamica, aspettative adattive, regola di Taylor) determinano per ogni periodo t le cinque variabili endogene, data la conoscenza delle variabili esogene e predeterminate. Il modello è quindi chiuso: può essere simulato passo a passo per ottenere il comportamento dinamico di tutte le variabili in risposta a qualsiasi sequenza di shock.
        </p>

        <div style={S.caseCard}>
          <div style={S.caseTitle}>ANALISI DI UN CASO — La regola di Taylor</div>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            Se a dimensione stessa lascio di passaggio sensato questa relazione funzionasse come obiettivo preciso della politica monetaria, si osservano diversi richiami storici significativi. La <em>Federal Reserve</em>, ad esempio, non ha un mandato esplicito di seguire la regola di Taylor: il suo mandato è stabilito dal <em>Federal Reserve Act</em>, che identifica <em>stabilità dei prezzi</em> e <em>massima occupazione</em> come obiettivi primari (il "dual mandate"). La BCE, al contrario, ha un mandato focalizzato principalmente sulla stabilità dei prezzi (obiettivo di inflazione vicino al 2%).
          </p>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            Taylor formulò la regola dopo aver osservato che le scelte effettive della Fed negli anni 1987–1992, sotto la presidenza Greenspan, erano sorprendentemente in linea con <em>i_t = π_t + 2 + 0,5(π_t − 2) + 0,5(Y_t − Ȳ_t)</em>. Dopo pochi anni, numerose banche centrali cominciarono a usare implicitamente la regola come benchmark per la propria comunicazione e per la trasparenza delle proprie scelte.
          </p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            Usi dei coefficienti della regola di Taylor sono materia di continuo dibattito. Alcuni economisti propongono di assumere θ_π anche elevato (2, 3, perfino 4), argomentando che solo così la BC può combattere efficacemente l'inflazione; altri preferiscono θ_π inferiore ma più alto coefficiente di attenzione all'output θ_Y, soprattutto in periodi di recessione. La regola di Taylor non è una legge rigida ma un utile riferimento per capire la logica della politica monetaria moderna.
          </p>
        </div>
      </div>

      {/* ── SEZ 16.2: Soluzione del modello ─────────────────────────── */}
      <div className="content-section glass-panel" style={{ padding: '2rem 2.5rem', marginBottom: '2rem' }}>
        <h2 style={S.h2}>16.2 La soluzione del modello</h2>
        <p style={S.p}>
          Abbiamo finora enumerato le cinque equazioni del modello DA-AD dinamico. Le cinque variabili endogene (Y_t, π_t, r_t, i_t, E_t π_{'{t+1}'}) e le tre variabili esogene (Ȳ_t, π*_t, ε_t e ν_t sono esogeni; Ȳ_t e π*_t sono anche esogeni). Il modello ha cinque equazioni e cinque incognite: è risolvibile per ciascun periodo t, dato lo stato dell'economia nel periodo precedente.
        </p>

        <h3 style={S.h3}>L'equilibrio di lungo periodo</h3>
        <p style={S.p}>
          L'equilibrio di lungo periodo rappresenta la situazione in cui le variabili assumono un "punto fermo": se niente nell'economia cambia, l'equilibrio si perpetua identico nel tempo. Nel nostro modello, l'equilibrio di lungo periodo richiede che: non ci siano shock (ε_t = 0, ν_t = 0), le aspettative d'inflazione siano corrette (E_{'{t-1}'} π_t = π_t), e l'obiettivo d'inflazione sia stabile (π*_t = π*).
        </p>
        <p style={S.p}>
          Sotto queste condizioni, dalla curva di Phillips dinamica otteniamo π_t = π_t + φ(Y_t − Ȳ_t), che implica <strong>Y_t = Ȳ_t</strong>: nell'equilibrio di lungo periodo la produzione è al livello naturale. Dalla regola di Taylor, con Y_t = Ȳ_t e π_t = π*_t, abbiamo <em>i_t = π_t + ρ</em>. Dall'equazione di Fisher <em>r_t = i_t − π_t = ρ</em>. E dalla curva IS dinamica, con r_t = ρ e ε_t = 0, abbiamo di nuovo Y_t = Ȳ_t, coerente. L'equilibrio di lungo periodo è quindi:
        </p>
        <div style={S.formula}>
          Y = Ȳ &nbsp;·&nbsp; π = π* &nbsp;·&nbsp; r = ρ &nbsp;·&nbsp; i = ρ + π*
        </div>
        <p style={S.p}>
          Questo conferma un'importante proprietà del modello: nel lungo periodo la banca centrale controlla il livello di inflazione (attraverso il target π*), ma non può spostare Y dal suo livello naturale. La neutralità della politica monetaria nel lungo periodo è un risultato che attraversa tutta la macroeconomia moderna.
        </p>

        <DADDASEquilibriumGraph />

        <h3 style={S.h3}>La curva di offerta aggregata dinamica (DAS)</h3>
        <p style={S.p}>
          Per studiare il comportamento di questa economia nel breve periodo e nelle transizioni, abbiamo bisogno di ridurre il sistema di 5 equazioni a un sistema di 2 equazioni in 2 incognite (Y e π), da cui sia possibile derivare graficamente l'equilibrio. La prima relazione è la <strong>curva di offerta aggregata dinamica</strong> (DAS, <em>Dynamic Aggregate Supply</em>), che ricaviamo combinando la curva di Phillips e l'ipotesi di aspettative adattive.
        </p>
        <p style={S.p}>
          Sostituendo E_{'{t-1}'} π_t = π_{'{t-1}'} nella curva di Phillips dinamica:
        </p>
        <div style={S.formula}>
          <strong>π_t = π_{'{t-1}'} + φ(Y_t − Ȳ_t) + ν_t</strong> &nbsp;·&nbsp; (DAS)
        </div>
        <p style={S.p}>
          La curva DAS esprime una relazione positiva nello spazio (Y_t, π_t), per dati valori di π_{'{t-1}'}, Ȳ_t e ν_t. La sua pendenza è pari a φ. Le variabili che spostano DAS sono: l'inflazione del periodo precedente π_{'{t-1}'} (se π_{'{t-1}'} sale, DAS si sposta verso l'alto); il livello naturale di produzione Ȳ_t (se sale, DAS si sposta verso destra); gli shock di offerta ν_t (se positivi, DAS si sposta verso l'alto).
        </p>

        <h3 style={S.h3}>La curva di domanda aggregata dinamica (DAD)</h3>
        <p style={S.p}>
          La seconda relazione è la <strong>curva di domanda aggregata dinamica</strong> (DAD, <em>Dynamic Aggregate Demand</em>), che otteniamo combinando la curva IS dinamica, l'equazione di Fisher e la regola di Taylor. Sostituendo nella IS dinamica il tasso r_t = i_t − E_t π_{'{t+1}'} e il tasso i_t dalla regola di Taylor, e riorganizzando:
        </p>
        <div style={S.formula}>
          <strong>Y_t = Ȳ_t − [αθ_π / (1 + αθ_Y)](π_t − π*_t) + [1 / (1 + αθ_Y)]ε_t</strong> &nbsp;·&nbsp; (DAD)
        </div>
        <p style={S.p}>
          La DAD esprime una relazione <em>negativa</em> tra Y_t e π_t: quando l'inflazione sale sopra il target, la banca centrale alza il tasso reale, l'investimento cade, e l'output scende. La sua pendenza è −[αθ_π/(1+αθ_Y)]. Le variabili che spostano DAD sono: l'obiettivo d'inflazione π*_t (se sale, DAD si sposta verso destra); il livello naturale di produzione Ȳ_t (se sale, DAD si sposta verso destra); gli shock di domanda ε_t (se positivi, DAD si sposta verso destra).
        </p>
        <p style={S.p}>
          L'equilibrio di ciascun periodo t è dato dall'intersezione delle curve DAD e DAS pertinenti a quel periodo. Una volta determinati Y_t e π_t dall'intersezione, le altre variabili (r_t, i_t, E_t π_{'{t+1}'}) si ottengono dalle equazioni corrispondenti. E siccome le curve di DAS del periodo successivo dipendono da π_t (via E π), ogni scelta del periodo corrente influenza l'equilibrio del periodo successivo: ecco la <em>dinamica</em>.
        </p>
      </div>

      {/* ── SEZ 16.3: Il modello in azione ──────────────────────────── */}
      <div className="content-section glass-panel" style={{ padding: '2rem 2.5rem', marginBottom: '2rem' }}>
        <h2 style={S.h2}>16.3 Il modello in azione</h2>
        <p style={S.p}>
          Utilizziamo ora il modello DA-AD dinamico per analizzare come rispondono a diverse categorie di shock: la crescita di lungo periodo, uno shock di offerta, uno shock di domanda, un cambiamento della politica monetaria. Ogni scenario è utile per capire un particolare meccanismo di propagazione e per valutare come la BC debba comportarsi in ciascun caso.
        </p>

        <h3 style={S.h3}>Crescita di lungo termine</h3>
        <p style={S.p}>
          Il livello naturale di produzione Ȳ_t cresce nel tempo per effetto dell'accumulazione di capitale, del progresso tecnologico e della crescita della forza lavoro (si veda il Capitolo 8 sul modello di Solow). Supponiamo quindi che Ȳ_t cresca a un tasso costante <em>k</em> ogni anno. Nel lungo periodo DAS si sposta verso destra ogni periodo di un ammontare corrispondente. Anche DAD si sposta verso destra della stessa quantità, perché il termine Ȳ_t appare anche nella DAD. Il risultato è che Y_t cresce in ogni periodo esattamente di <em>k</em>, e π_t resta costantemente al target π*. La <strong>crescita bilanciata</strong>: DAD e DAS si spostano all'unisono, e l'economia cresce senza pressioni inflazionistiche.
        </p>
        <p style={S.p}>
          Questo risultato sottolinea un messaggio importante: la crescita della produttività non è inflazionistica. Il timore comune che "troppa crescita scalda l'economia e genera inflazione" è vero solo se la crescita supera la crescita della capacità produttiva Ȳ_t — cioè se il gap Y − Ȳ diventa positivo. Una crescita sostenuta dalla produttività, che fa salire sia Y sia Ȳ, non crea inflazione.
        </p>

        <h3 style={S.h3}>Uno shock all'offerta aggregata</h3>
        <p style={S.p}>
          Consideriamo ora uno shock di offerta positivo (ν_t &gt; 0), per esempio un aumento del prezzo del petrolio o altri shock di costo. Nel periodo dello shock, DAS si sposta verso l'alto: a parità di Y, l'inflazione è più alta. La DAD non si muove. Il nuovo equilibrio ha π_t più alto e Y_t più basso: è il fenomeno classico della <strong>stagflazione</strong> — recessione con inflazione, osservata negli anni '70 dopo gli shock petroliferi.
        </p>
        <p style={S.p}>
          Nel periodo successivo, la dinamica si attiva. L'inflazione del periodo precedente era alta, quindi le aspettative per il periodo corrente sono alte: DAS si sposta di nuovo verso l'alto. Ma la BC ha alzato i tassi reali in risposta allo shock, e questo tende a ridurre Y sotto Ȳ, esercitando pressioni deflazionistiche. Il risultato netto dipende dai parametri: nel modello calibrato in modo realistico, lo shock di offerta produce un <em>picco iniziale di inflazione</em> seguito da una <em>lenta convergenza</em> al target, insieme a una <em>recessione graduale</em> che si dissipa nel tempo. Entrambi gli effetti convergono a zero nel lungo periodo — le aspettative si aggiustano, il gap Y − Ȳ si chiude, l'inflazione ritorna al target.
        </p>

        <SupplyShockSimulation />

        <h3 style={S.h3}>Uno shock alla domanda aggregata</h3>
        <p style={S.p}>
          Consideriamo ora uno shock positivo alla domanda (ε_t &gt; 0), per esempio un boom degli investimenti privati, un aumento della fiducia dei consumatori, o uno stimolo fiscale. DAD si sposta verso destra. Nel periodo dello shock, sia Y_t sia π_t aumentano: è un <strong>boom inflazionistico</strong>. Nei periodi successivi, l'inflazione più alta del periodo precedente spinge DAS verso l'alto, e la BC alza ulteriormente i tassi reali in risposta. Y scende verso Ȳ, l'inflazione scende verso π*. La convergenza avviene, ma con un tempo di aggiustamento che dipende dalla persistenza dello shock e dai parametri del modello.
        </p>
        <p style={S.p}>
          Se lo shock è persistente (ε_t positivo per molti periodi), la BC deve mantenere a lungo una politica restrittiva, con un periodo prolungato di inflazione sopra il target prima della convergenza. Se lo shock è temporaneo (ε_t positivo per un solo periodo), l'economia torna rapidamente al suo equilibrio.
        </p>

        <DemandShockSimulation />

        <h3 style={S.h3}>Un cambiamento della politica monetaria</h3>
        <p style={S.p}>
          Supponiamo che la banca centrale decida di ridurre il suo obiettivo d'inflazione da π* = 4% a π* = 2%. Cosa succede? Da questo momento in poi, la BC reagisce a qualsiasi inflazione sopra il 2% alzando i tassi (non più sopra il 4%). Nel periodo del cambiamento, la DAD si sposta verso sinistra: per ogni livello di π, l'output è più basso, perché i tassi sono più alti di prima.
        </p>
        <p style={S.p}>
          Nel periodo del cambiamento, Y_t cade sotto Ȳ_t, e π_t scende di poco (perché DAS non si è ancora mossa). Nei periodi successivi, l'inflazione più bassa del periodo precedente sposta DAS verso il basso, e il processo prosegue fino a quando π raggiunge il nuovo target del 2%. La transizione richiede una <strong>recessione temporanea</strong> con Y sotto Ȳ: è il <em>rapporto di sacrificio</em> visto nel Capitolo 15. Il modello dinamico mostra esplicitamente la forma temporale di questo costo: qualche trimestre di recessione seguito da una lenta convergenza.
        </p>

        <InflationTargetChangeGraph />

        <div style={S.caseCard}>
          <div style={S.caseTitle}>PER SAPERNE DI PIÙ — La calibrazione numerica e la simulazione del modello</div>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            Il testo presenta alcune simulazioni numeriche del modello DA-AD dinamico, calibrato con parametri plausibili per l'economia americana. I parametri di riferimento sono: Ȳ = 100, π* = 2, ρ = 2, α = 1, φ = 0.25, θ_π = 0.5, θ_Y = 0.5. Con questi valori, il modello produce dinamiche realistiche per Y, π, r, i in risposta a shock di varia natura.
          </p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            Le simulazioni servono a due scopi: (1) validare il modello, mostrando che riproduce i fatti stilizzati dell'economia americana; (2) fornire un laboratorio dove si possono esperimentare diverse politiche — per esempio, come cambierebbe la dinamica se θ_π fosse più alto (politica più aggressiva contro l'inflazione)? Queste simulazioni sono la base delle scelte di policy delle banche centrali moderne.
          </p>
        </div>
      </div>

      {/* ── SEZ 16.4: Applicazioni ──────────────────────────────────── */}
      <div className="content-section glass-panel" style={{ padding: '2rem 2.5rem', marginBottom: '2rem' }}>
        <h2 style={S.h2}>16.4 Due applicazioni: lezioni per la politica monetaria</h2>
        <p style={S.p}>
          Il modello dinamico DA-AD ci permette di discutere due applicazioni classiche della politica monetaria: il trade-off tra viscosità dei prezzi e volatilità dell'inflazione, e il principio di Taylor.
        </p>

        <h3 style={S.h3}>Il trade-off tra viscosità del prezzo e volatilità dell'inflazione</h3>
        <p style={S.p}>
          Consideriamo la seguente domanda: la banca centrale deve preoccuparsi di più della volatilità dell'output o della volatilità dell'inflazione? La risposta dipende dalla <em>pendenza di DAS</em>, cioè dal parametro φ.
        </p>
        <p style={S.p}>
          Se DAS è molto piatta (φ piccolo) — prezzi molto rigidi — allora uno shock di domanda o di offerta produce principalmente un effetto su Y (l'economia si adatta ai prezzi aggiustando le quantità) e poco effetto su π (i prezzi sono lenti ad aggiustarsi). In questo caso, per stabilizzare l'economia la BC deve reagire aggressivamente agli shock: θ_Y alto.
        </p>
        <p style={S.p}>
          Se DAS è molto ripida (φ grande) — prezzi flessibili — allora uno shock produce principalmente effetti su π. La BC deve concentrarsi sulla stabilità dell'inflazione: θ_π alto.
        </p>
        <p style={S.p}>
          Il trade-off è chiaro: più DAS è piatta (più i prezzi sono rigidi), più la politica monetaria è efficace nel stabilizzare l'output ma meno efficace nel stabilizzare l'inflazione. I paesi con prezzi più flessibili (per esempio economie meno sviluppate con indicizzazione salariale forte) hanno invece il trade-off inverso.
        </p>

        <h4 style={S.h4}>Figura 16.12 — Due possibili risposte a uno shock dell'offerta</h4>
        <p style={S.p}>
          Quando la curva di offerta aggregata dinamica è relativamente piatta (economia con prezzi rigidi, φ piccolo), uno shock di offerta positivo sposta DAS solo leggermente verso l'alto: l'effetto principale dello shock si scarica sull'output (Y cade molto sotto Ȳ) mentre l'inflazione aumenta di poco. Viceversa, quando DAS è ripida (prezzi flessibili, φ grande), lo stesso shock di offerta provoca un ampio aumento dell'inflazione e una piccola caduta dell'output. La stessa politica monetaria che stabilizza efficacemente l'output in una economia "a DAS piatta" può invece permettere un'inflazione elevata; e la stessa politica che stabilizza l'inflazione in un'economia "a DAS ripida" può generare ampie oscillazioni dell'output. La scelta della regola di Taylor (i pesi θ_π e θ_Y) va quindi calibrata sulla pendenza effettiva della DAS del paese di riferimento.
        </p>

        <h3 style={S.h3}>Il principio di Taylor</h3>
        <p style={S.p}>
          Una questione cruciale per la stabilità del modello dinamico riguarda il coefficiente θ_π della regola di Taylor. Il <strong>principio di Taylor</strong> afferma che una politica monetaria ben disegnata deve avere θ_π &gt; 0, cioè <em>il tasso nominale deve rispondere all'inflazione in modo tale che il tasso reale aumenti quando l'inflazione aumenta</em>.
        </p>
        <p style={S.p}>
          Formalmente: se l'inflazione sale di 1 punto percentuale, la regola di Taylor impone un aumento del tasso nominale di <em>più</em> di 1 punto (concretamente, di 1 + θ_π punti). Questo fa sì che il tasso reale r = i − π salga di θ_π punti. Il tasso reale più alto frena la domanda, l'output scende sotto Ȳ, la curva di Phillips dinamica fa scendere l'inflazione al periodo successivo.
        </p>
        <p style={S.p}>
          Se invece θ_π &lt; 0 (violazione del principio di Taylor), un aumento dell'inflazione produrrebbe un calo del tasso reale, stimolando ulteriormente la domanda e alzando ancora di più l'inflazione. In questo caso il modello sarebbe <em>instabile</em>: ogni piccolo shock inflazionistico si amplificherebbe nel tempo invece di dissiparsi.
        </p>
        <p style={S.p}>
          Il principio di Taylor è uno dei criteri più importanti per valutare una politica monetaria. Le banche centrali che rispettano il principio ancorano efficacemente le aspettative d'inflazione. Quelle che lo violano creano instabilità macroeconomica. Vedremo nel prossimo riquadro come uno dei casi più studiati di violazione del principio sia stato il periodo degli anni '70 negli Stati Uniti.
        </p>

        <h4 style={S.h4}>Figura 16.13 — L'importanza del Principio di Taylor: stabilità vs instabilità</h4>
        <p style={S.p}>
          Consideriamo due possibili economie. Nella <strong>prima</strong> la banca centrale segue una regola di Taylor con θ_π = 0.5 (&gt; 0): il principio di Taylor è rispettato. Nella <strong>seconda</strong> la banca centrale ha θ_π = −0.5 (&lt; 0): quando l'inflazione sale, il tasso nominale sale <em>meno</em> dell'inflazione, e quindi il tasso reale <em>scende</em>. Supponiamo che in entrambe le economie accada un piccolo shock inflazionistico una tantum (per esempio una lieve pressione sui costi).
        </p>
        <p style={S.p}>
          Nella prima economia la BC alza aggressivamente i tassi reali: l'output scende leggermente sotto Ȳ, la curva di Phillips dinamica fa scendere π al periodo successivo, le aspettative tornano gradualmente al target. Dopo qualche periodo l'economia ritrova l'equilibrio a Y=Ȳ e π=π*. Lo shock è assorbito.
        </p>
        <p style={S.p}>
          Nella seconda economia, invece, lo shock iniziale fa salire π, ma la BC abbassa il tasso reale in risposta. Il tasso reale più basso stimola la domanda, Y supera Ȳ, la curva di Phillips fa salire ulteriormente π al periodo successivo. Le aspettative d'inflazione crescono, e il circolo vizioso si ripete: ad ogni periodo π è più alta del precedente, Y è più lontano da Ȳ, il tasso reale è ancora più basso. L'economia <strong>esplode</strong> su un sentiero di iperinflazione in cui sia Y sia π divergono indefinitamente. È un equilibrio dinamicamente instabile.
        </p>
        <p style={S.p}>
          Il confronto tra le due traiettorie è il motivo per cui il principio di Taylor è considerato una delle poche vere "leggi" empiriche della macroeconomia moderna: senza di esso, il sistema economico è vulnerabile a qualsiasi piccolo shock, che può innescare dinamiche esplosive. La disciplina imposta dal principio è ciò che rende credibile la politica anti-inflazionistica di una banca centrale.
        </p>
        <div style={S.keyBox}>
          <strong>Principio di Taylor (formalmente):</strong> perché il modello dinamico sia stabile è necessario che la BC risponda a un aumento dell'inflazione con un aumento del tasso nominale <em>superiore</em> all'aumento dell'inflazione stessa, cioè θ_π &gt; 0 nella regola di Taylor. Se θ_π ≤ 0, il tasso reale non sale con l'inflazione e il sistema è instabile.
        </div>

        <div style={S.caseCard}>
          <div style={S.caseTitle}>ANALISI DI UN CASO — Cosa causò la grande inflazione?</div>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            Negli anni Settanta del nostro secolo l'economia degli Stati Uniti è stata afflitta da un periodo di alta inflazione, passata alla storia come la <em>Grande Inflazione</em>. Con i picchi del 1974 e del 1979 (oltre 12% e poi 14% annuo), l'inflazione sembrava fuori controllo. Cosa la causò?
          </p>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            Diverse ipotesi sono state formulate. Uno di tali casi coincide con i due shock petroliferi del 1973 e 1979: shock di offerta ν &gt; 0 su larga scala, che avrebbero spinto l'inflazione verso l'alto. È un'ipotesi parzialmente corretta, ma non spiega tutto: l'inflazione era già in crescita dal 1970, prima del primo shock petrolifero.
          </p>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            La seconda ipotesi, più completa, è che la Fed di Burns (1970–78) <em>non abbia rispettato il principio di Taylor</em>. Stime econometriche delle regole di Taylor implicite della Fed negli anni '70 suggeriscono che il coefficiente θ_π fosse significativamente minore di quanto sarebbe stato necessario per stabilizzare l'inflazione. La Fed reagiva troppo poco agli aumenti di inflazione, permettendo alle aspettative di disancorarsi. Questo creò la spirale inflazionistica.
          </p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            La situazione cambiò drasticamente con Paul Volcker (1979–87): la Fed ruppe la spirale alzando drasticamente i tassi (fino al 20% nel 1981), a costo di una recessione profonda ma di breve durata. Dal 1983 in poi l'inflazione tornò sotto il 4% e le aspettative si riancorarono al nuovo regime di bassa inflazione. L'esperienza Volcker è uno dei più vividi esempi dell'importanza del principio di Taylor.
          </p>
        </div>

        <div style={S.caseCard}>
          <div style={S.caseTitle}>ANALISI DI UN CASO — Mandati diversi, realtà diverse: la Fed e la BCE</div>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            Secondo il modello DA-AD dinamico, una delle variabili esogene è π*, l'obiettivo d'inflazione scelto dalla banca centrale. Ma chi decide π*? Come viene scelto in concreto?
          </p>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            La <strong>Federal Reserve</strong> americana è stata istituita nel 1913 dal <em>Federal Reserve Act</em>. Il suo mandato oggi, definito dopo le riforme del 1977, è il celebre <em>"dual mandate"</em>: promuovere massima occupazione, prezzi stabili e moderati tassi di interesse a lungo termine. La Fed quindi non ha un target d'inflazione rigido — anche se dal 2012 ha esplicitamente dichiarato di mirare al 2% di inflazione misurata dal PCE (Personal Consumption Expenditures). Dal 2020 la Fed ha anche adottato un <em>Flexible Average Inflation Targeting</em>, che permette all'inflazione di superare temporaneamente il 2% dopo periodi in cui è stata sotto il 2%.
          </p>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            La <strong>Banca Centrale Europea</strong>, invece, è stata creata nel 1998 dal Trattato di Maastricht e ha un mandato quasi esclusivamente dedicato alla stabilità dei prezzi. L'obiettivo di inflazione della BCE è stato inizialmente definito come "vicino ma sotto il 2%", poi ridefinito nel 2021 come "<em>2% a medio termine, simmetrico</em>" — ossia la BCE è preoccupata sia dell'inflazione sopra il 2% sia di quella sotto, simmetricamente.
          </p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            Le conseguenze di questi mandati diversi si sono viste durante la crisi finanziaria 2008–12: la Fed reagì aggressivamente con QE e tassi a zero, tenendo conto sia dell'inflazione sia del mercato del lavoro; la BCE fu più cauta, interpretando il proprio mandato in senso stretto, e intervenne massicciamente solo dopo il "whatever it takes" di Draghi (2012). La differenza di reazione contribuisce a spiegare perché gli USA siano usciti dalla crisi prima dell'Eurozona.
          </p>
        </div>
      </div>

      {/* ── SEZ 16.5: Conclusioni ───────────────────────────────────── */}
      <div className="content-section glass-panel" style={{ padding: '2rem 2.5rem', marginBottom: '2rem' }}>
        <h2 style={S.h2}>16.5 Conclusioni: verso modelli DSGE</h2>
        <p style={S.p}>
          Se un futuro macroeconomista entrerà domani in una riunione di politica monetaria della Fed, della BCE o della Banca d'Inghilterra, troverà sul tavolo non le equazioni del modello IS-LM ma le equazioni di un <strong>modello DSGE</strong> — <em>Dynamic Stochastic General Equilibrium</em>. Questi modelli, sviluppati a partire dagli anni '80 e diventati standard operativo nei primi anni 2000, sono i discendenti diretti del modello dinamico DA-AD che abbiamo studiato in questo capitolo. La struttura concettuale è la stessa: equazioni per la domanda, per l'offerta, per la politica monetaria, con aspettative e shock che propagano i loro effetti nel tempo.
        </p>
        <p style={S.p}>
          I modelli DSGE aggiungono alcune caratteristiche che il nostro modello semplice non ha. Primo, le <strong>aspettative razionali</strong>: gli agenti non formano le aspettative in modo adattivo (guardando al passato), ma in modo <em>forward-looking</em>, usando tutta l'informazione disponibile e la conoscenza del modello economico stesso. Questo rende il modello più realistico ma anche più complesso matematicamente.
        </p>
        <p style={S.p}>
          Secondo, i modelli DSGE hanno <strong>microfondazioni esplicite</strong>: le equazioni aggregate (IS, Phillips, Taylor) sono derivate da comportamenti ottimizzanti di famiglie e imprese a livello microeconomico. Questo assicura la coerenza logica del modello e permette di superare la <em>critica di Lucas</em> (Capitolo 15): se cambia il regime di policy, le equazioni aggregate cambiano perché gli agenti riottimizzano.
        </p>
        <p style={S.p}>
          Terzo, i modelli DSGE incorporano <strong>shock stocastici multipli</strong>: non solo shock di domanda e di offerta, ma shock di produttività, shock di preferenze, shock al capitale, shock finanziari. Questo permette di replicare con maggiore fedeltà le dinamiche osservate nelle serie storiche macroeconomiche.
        </p>
        <p style={S.p}>
          Quarto, alcuni modelli DSGE di frontiera incorporano <strong>il settore finanziario esplicitamente</strong>: banche, frizioni creditizie, bolle speculative, crisi bancarie. Questo è stato uno degli sforzi principali post-2008, quando la crisi finanziaria ha mostrato che i modelli DSGE pre-crisi sottovalutavano drammaticamente il ruolo del settore finanziario.
        </p>
        <p style={S.p}>
          Nonostante la loro sofisticazione, i modelli DSGE non sono l'ultima parola. Presentano limiti importanti: la calibrazione dei parametri è tuttora materia di dibattito; l'ipotesi di aspettative razionali è discussa; i modelli faticano a replicare alcune caratteristiche empiriche come le bolle speculative o le recessioni profonde. La ricerca macroeconomica sta esplorando alternative basate su agenti eterogenei, comportamenti non razionali (behavioral macro), reti complesse e teoria delle complessità. Ma il nucleo concettuale — domanda e offerta aggregate che interagiscono dinamicamente sotto l'influenza della politica monetaria — rimane quello che abbiamo studiato in questo capitolo.
        </p>
        <p style={S.p}>
          Il modello DA-AD dinamico presentato in queste pagine è quindi molto più di un esercizio didattico: è la versione semplificata, ma concettualmente completa, del framework che oggi guida le decisioni delle banche centrali di tutto il mondo. Capirlo significa capire come pensa la macroeconomia moderna.
        </p>
      </div>

      {/* ── IN SINTESI ──────────────────────────────────────────────── */}
      <div className="content-section glass-panel" style={{ padding: '2rem 2.5rem', marginBottom: '2rem', background: 'rgba(67,56,202,0.04)', border: '1px solid rgba(67,56,202,0.15)' }}>
        <h2 style={{ ...S.h2, marginTop: 0 }}>In Sintesi</h2>
        <ol style={{ color: 'var(--text-secondary)', lineHeight: 1.9, paddingLeft: '1.5rem' }}>
          <li>Il <strong>modello DA-AD dinamico</strong> è composto da cinque equazioni: una curva IS dinamica per l'output, l'equazione di Fisher per il tasso reale, la curva di Phillips dinamica per l'inflazione, un'ipotesi sulle aspettative (qui adattive), e una regola di politica monetaria (regola di Taylor) per il tasso nominale.</li>
          <li>La riduzione del sistema a due equazioni in (Y, π) produce due curve nello spazio reddito-inflazione: la <strong>DAS</strong> (positiva, riflette la curva di Phillips) e la <strong>DAD</strong> (negativa, riflette la risposta della BC via regola di Taylor).</li>
          <li>Nell'<strong>equilibrio di lungo periodo</strong> DAD e DAS si intersecano a Y = Ȳ, π = π*, r = ρ, i = ρ + π*. La banca centrale controlla il livello di lungo periodo dell'inflazione ma non quello dell'output.</li>
          <li>Uno <strong>shock positivo di domanda</strong> (ε &gt; 0) sposta DAD a destra, alza sia Y sia π; la BC risponde alzando i tassi reali e l'economia converge lentamente verso l'equilibrio.</li>
          <li>Uno <strong>shock positivo di offerta</strong> (ν &gt; 0) sposta DAS in alto, crea <em>stagflazione</em> (π su e Y giù), e richiede alla BC di accettare un trade-off tra lotta all'inflazione e recessione.</li>
          <li>Un <strong>cambiamento dell'obiettivo d'inflazione</strong> (riduzione di π*) richiede una recessione temporanea per guidare l'inflazione al nuovo target — il <em>rapporto di sacrificio</em> nel modello dinamico.</li>
          <li>Il <strong>principio di Taylor</strong> (θ_π &gt; 0) è necessario per la stabilità del modello: senza di esso, qualsiasi piccolo shock inflazionistico si amplificherebbe invece di dissiparsi. La Fed degli anni '70 è l'esempio classico di violazione del principio.</li>
          <li>Il <strong>trade-off tra viscosità del prezzo e volatilità dell'inflazione</strong> implica che, in economie con prezzi rigidi (DAS piatta), la BC deve concentrarsi sulla stabilità dell'output; in economie con prezzi flessibili (DAS ripida), sulla stabilità dell'inflazione.</li>
          <li>Il modello DA-AD dinamico è il precursore semplificato dei modelli <strong>DSGE</strong> (Dynamic Stochastic General Equilibrium), che aggiungono aspettative razionali, microfondazioni esplicite, shock multipli, e talvolta un settore finanziario. I DSGE sono lo standard operativo delle banche centrali moderne.</li>
        </ol>
      </div>

    </div>
  );
}
