import { useState } from 'react';

// ─── Stili condivisi ────────────────────────────────────────────────────────
const S = {
  section: { marginBottom: '3rem' },
  h2: { fontSize: '1.6rem', color: 'var(--accent-indigo)', marginBottom: '1rem', marginTop: '2.5rem', fontFamily: 'Outfit, sans-serif', fontWeight: 700 },
  h3: { fontSize: '1.2rem', color: 'var(--text-primary)', marginTop: '1.8rem', marginBottom: '0.7rem', fontFamily: 'Outfit, sans-serif', fontWeight: 600, borderBottom: '1px solid var(--border-color)', paddingBottom: '0.4rem' },
  h4: { fontSize: '1.05rem', color: 'var(--text-primary)', marginTop: '1.3rem', marginBottom: '0.5rem', fontFamily: 'Outfit, sans-serif', fontWeight: 600 },
  p: { color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1rem', fontSize: '1.02rem' },
  formula: { background: 'rgba(67,56,202,0.06)', border: '1px solid rgba(67,56,202,0.15)', borderRadius: '10px', padding: '1rem 1.5rem', margin: '1.2rem 0', fontFamily: 'monospace', fontSize: '1rem', color: 'var(--text-primary)' },
  formulaNote: { fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.5rem', fontStyle: 'italic' },
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

// ─── Grafico 1: Politica Fiscale nel modello IS-LM ──────────────────────────
const FiscalPolicyGraph = () => {
  const [deltaG, setDeltaG] = useState(0);

  // IS base: r = 6 - 0.01·Y  → shift + deltaG*0.5 (in punti di r)
  // LM:      r = -4 + 0.015·Y
  // Equilibrio base: 6 - 0.01Y = -4 + 0.015Y → Y=400, r=2
  const isShift = deltaG * 0.8; // punti di r che IS si alza (shift orizz = 40·deltaG)
  // Nuovo equilibrio: (6+isShift) - 0.01Y = -4 + 0.015Y → Y = (10+isShift)/0.025
  const Ystar = (10 + isShift) / 0.025;
  const rstar = -4 + 0.015 * Ystar;
  const Ystar0 = 400, rstar0 = 2;

  const W = 520, H = 360;
  const PL = 70, PR = 20, PT = 25, PB = 55;
  const pW = W - PL - PR, pH = H - PT - PB;
  const Ymax = 700, rmax = 9;
  const tx = (y) => PL + y * (pW / Ymax);
  const tr = (r) => PT + pH - r * (pH / rmax);

  // IS corrente intercetta r=(6+isShift) a Y=0, interseca r=0 a Y=(6+isShift)/0.01
  const isR0 = 6 + isShift;
  const isYend = Math.min(680, isR0 / 0.01);
  const isRend = isR0 - 0.01 * isYend;

  // LM
  const lmYstart = 4 / 0.015; // ~267
  const lmYend = Math.min(700, (rmax + 4) / 0.015);
  const lmRend = -4 + 0.015 * lmYend;

  return (
    <div style={S.graphWrap}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={S.graphTitle}>Politica fiscale espansiva: aumento di G</div>
          <div style={S.graphSub}>Un aumento di G sposta la curva IS a destra</div>
        </div>
        <div style={{ textAlign: 'right', fontSize: '0.85rem' }}>
          <div>Y* = <strong style={{ color: 'var(--accent-indigo)' }}>{Ystar.toFixed(0)}</strong> {deltaG > 0 && <span style={{ color: '#16a34a' }}>(+{(Ystar - Ystar0).toFixed(0)})</span>}</div>
          <div>r* = <strong style={{ color: '#0284c7' }}>{rstar.toFixed(2)}%</strong> {deltaG > 0 && <span style={{ color: '#dc2626' }}>(+{(rstar - rstar0).toFixed(2)})</span>}</div>
        </div>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto', display: 'block' }}>
        {/* Griglia */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map(r => (
          <line key={r} x1={PL} y1={tr(r)} x2={PL + pW} y2={tr(r)} stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
        ))}
        {[100, 200, 300, 400, 500, 600].map(y => (
          <line key={y} x1={tx(y)} y1={PT} x2={tx(y)} y2={PT + pH} stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
        ))}

        {/* Tick labels */}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(r => (
          <text key={r} x={PL - 5} y={tr(r) + 4} textAnchor="end" fontSize="10" fill="#94a3b8">{r}%</text>
        ))}
        {[100, 200, 300, 400, 500, 600].map(y => (
          <text key={y} x={tx(y)} y={PT + pH + 16} textAnchor="middle" fontSize="10" fill="#94a3b8">{y}</text>
        ))}

        {/* Assi */}
        <line x1={PL} y1={PT} x2={PL} y2={PT + pH} stroke="#64748b" strokeWidth="1.5" />
        <line x1={PL} y1={PT + pH} x2={PL + pW} y2={PT + pH} stroke="#64748b" strokeWidth="1.5" />

        {/* LM */}
        <line x1={tx(lmYstart)} y1={tr(0)} x2={tx(lmYend)} y2={tr(Math.min(rmax, lmRend))} stroke="#0284c7" strokeWidth="2.5" />
        <text x={tx(lmYend) - 20} y={tr(Math.min(rmax - 0.3, lmRend)) - 8} fontSize="13" fill="#0284c7" fontWeight="700">LM</text>

        {/* IS base (traparente) */}
        {deltaG !== 0 && (
          <>
            <line x1={tx(0)} y1={tr(6)} x2={tx(600)} y2={tr(0)} stroke="#4338ca" strokeWidth="1.5" opacity="0.28" strokeDasharray="6,4" />
            <text x={tx(600) + 4} y={tr(0) - 4} fontSize="11" fill="#4338ca" opacity="0.6" fontWeight="600">IS₁</text>
          </>
        )}

        {/* IS corrente */}
        <line x1={tx(0)} y1={tr(isR0)} x2={tx(isYend)} y2={tr(Math.max(0, isRend))} stroke="#4338ca" strokeWidth="2.5" />
        <text x={tx(isYend) + 4} y={tr(Math.max(0.2, isRend)) + 4} fontSize="13" fill="#4338ca" fontWeight="700">IS{deltaG !== 0 ? '₂' : ''}</text>

        {/* Freccia shift */}
        {deltaG > 0 && (
          <g>
            <line x1={tx(300)} y1={tr(3)} x2={tx(340)} y2={tr(3 + isShift)} stroke="#16a34a" strokeWidth="2" markerEnd="url(#arrFisc)" />
          </g>
        )}
        <defs>
          <marker id="arrFisc" markerWidth="10" markerHeight="10" refX="8" refY="4" orient="auto">
            <path d="M0,0 L0,8 L9,4 z" fill="#16a34a" />
          </marker>
        </defs>

        {/* Equilibrio base */}
        {deltaG !== 0 && <circle cx={tx(Ystar0)} cy={tr(rstar0)} r="5" fill="gray" opacity="0.45" />}

        {/* Droplines */}
        <line x1={tx(Ystar)} y1={tr(rstar)} x2={tx(Ystar)} y2={tr(0)} stroke="#64748b" strokeWidth="1" strokeDasharray="4,3" />
        <line x1={tx(0)} y1={tr(rstar)} x2={tx(Ystar)} y2={tr(rstar)} stroke="#64748b" strokeWidth="1" strokeDasharray="4,3" />

        {/* Equilibrio corrente */}
        <circle cx={tx(Ystar)} cy={tr(rstar)} r="8" fill="#1e293b" />
        <circle cx={tx(Ystar)} cy={tr(rstar)} r="4" fill="white" />

        <text x={tx(Ystar)} y={tr(0) + 28} textAnchor="middle" fontSize="11" fill="#1e293b" fontWeight="700">Y* = {Ystar.toFixed(0)}</text>
        <text x={PL - 5} y={tr(rstar) - 4} textAnchor="end" fontSize="11" fill="#1e293b" fontWeight="700">{rstar.toFixed(1)}%</text>

        {/* Etichette assi */}
        <text x={PL + pW / 2} y={H - 6} textAnchor="middle" fontSize="12" fill="var(--text-secondary)">Reddito, produzione Y</text>
        <text x={13} y={PT + pH / 2} textAnchor="middle" fontSize="12" fill="var(--text-secondary)" transform={`rotate(-90,13,${PT + pH / 2})`}>Tasso d'interesse r</text>
      </svg>

      <div style={{ marginTop: '0.8rem' }}>
        <label style={S.sliderLabel}>Aumento spesa pubblica ΔG: <strong>+{deltaG.toFixed(1)}</strong></label>
        <input type="range" min={0} max={2} step={0.1} value={deltaG} onChange={e => setDeltaG(+e.target.value)} style={{ width: '100%', accentColor: '#16a34a' }} />
        <div style={S.sliderRow}><span>0</span><span>espansione crescente →</span></div>
      </div>

      {deltaG > 0 && (
        <div style={S.resultBox}>
          ↑G → IS si sposta a destra di {(deltaG * 80).toFixed(0)} → nuovo equilibrio Y*={Ystar.toFixed(0)}, r*={rstar.toFixed(1)}% → <strong>effetto spiazzamento parziale</strong>: r più alto riduce gli investimenti, quindi ΔY &lt; ΔY del moltiplicatore puro.
        </div>
      )}
    </div>
  );
};

// ─── Grafico 2: Politica Monetaria nel modello IS-LM ────────────────────────
const MonetaryPolicyGraph = () => {
  const [deltaM, setDeltaM] = useState(0);

  // IS: r = 6 - 0.01Y
  // LM base: r = -4 + 0.015Y  → shift: r = (-4 - deltaM·0.8) + 0.015Y
  // Nuovo equilibrio: 6 - 0.01Y = -4 - deltaM·0.8 + 0.015Y
  //   → 10 + 0.8·deltaM = 0.025Y → Y = 400 + 32·deltaM
  const Ystar = 400 + 32 * deltaM;
  const rstar = Math.max(0, 6 - 0.01 * Ystar);
  const Ystar0 = 400, rstar0 = 2;

  const W = 520, H = 360;
  const PL = 70, PR = 20, PT = 25, PB = 55;
  const pW = W - PL - PR, pH = H - PT - PB;
  const Ymax = 700, rmax = 9;
  const tx = (y) => PL + y * (pW / Ymax);
  const tr = (r) => PT + pH - r * (pH / rmax);

  // IS
  const isYend = 600;

  // LM corrente
  const lmR0 = -4 - 0.8 * deltaM;
  const lmYstart = -lmR0 / 0.015;
  const lmYend = Math.min(700, (rmax - lmR0) / 0.015);
  const lmRend = lmR0 + 0.015 * lmYend;

  // LM base
  const lmYstart0 = 4 / 0.015;
  const lmYend0 = Math.min(700, (rmax + 4) / 0.015);
  const lmRend0 = -4 + 0.015 * lmYend0;

  return (
    <div style={S.graphWrap}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={S.graphTitle}>Politica monetaria espansiva: aumento dell'offerta di moneta</div>
          <div style={S.graphSub}>Un aumento di M/P sposta la curva LM a destra</div>
        </div>
        <div style={{ textAlign: 'right', fontSize: '0.85rem' }}>
          <div>Y* = <strong style={{ color: 'var(--accent-indigo)' }}>{Ystar.toFixed(0)}</strong> {deltaM > 0 && <span style={{ color: '#16a34a' }}>(+{(Ystar - Ystar0).toFixed(0)})</span>}</div>
          <div>r* = <strong style={{ color: '#0284c7' }}>{rstar.toFixed(2)}%</strong> {deltaM > 0 && <span style={{ color: '#16a34a' }}>({(rstar - rstar0).toFixed(2)})</span>}</div>
        </div>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto', display: 'block' }}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map(r => (
          <line key={r} x1={PL} y1={tr(r)} x2={PL + pW} y2={tr(r)} stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
        ))}
        {[100, 200, 300, 400, 500, 600].map(y => (
          <line key={y} x1={tx(y)} y1={PT} x2={tx(y)} y2={PT + pH} stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
        ))}
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(r => (
          <text key={r} x={PL - 5} y={tr(r) + 4} textAnchor="end" fontSize="10" fill="#94a3b8">{r}%</text>
        ))}
        {[100, 200, 300, 400, 500, 600].map(y => (
          <text key={y} x={tx(y)} y={PT + pH + 16} textAnchor="middle" fontSize="10" fill="#94a3b8">{y}</text>
        ))}

        <line x1={PL} y1={PT} x2={PL} y2={PT + pH} stroke="#64748b" strokeWidth="1.5" />
        <line x1={PL} y1={PT + pH} x2={PL + pW} y2={PT + pH} stroke="#64748b" strokeWidth="1.5" />

        {/* IS */}
        <line x1={tx(0)} y1={tr(6)} x2={tx(isYend)} y2={tr(0)} stroke="#4338ca" strokeWidth="2.5" />
        <text x={tx(isYend) + 4} y={tr(0) - 4} fontSize="13" fill="#4338ca" fontWeight="700">IS</text>

        {/* LM base */}
        {deltaM > 0 && (
          <>
            <line x1={tx(lmYstart0)} y1={tr(0)} x2={tx(lmYend0)} y2={tr(Math.min(rmax, lmRend0))} stroke="#0284c7" strokeWidth="1.5" opacity="0.28" strokeDasharray="6,4" />
            <text x={tx(lmYend0) - 20} y={tr(Math.min(rmax - 0.3, lmRend0)) - 8} fontSize="11" fill="#0284c7" opacity="0.6" fontWeight="600">LM₁</text>
          </>
        )}

        {/* LM corrente */}
        <line x1={tx(lmYstart)} y1={tr(0)} x2={tx(lmYend)} y2={tr(Math.min(rmax, lmRend))} stroke="#0284c7" strokeWidth="2.5" />
        <text x={tx(lmYend) - 20} y={tr(Math.min(rmax - 0.3, lmRend)) - 8} fontSize="13" fill="#0284c7" fontWeight="700">LM{deltaM > 0 ? '₂' : ''}</text>

        {/* Freccia */}
        {deltaM > 0 && (
          <line x1={tx(400)} y1={tr(2)} x2={tx(430)} y2={tr(1.3)} stroke="#16a34a" strokeWidth="2" markerEnd="url(#arrMon)" />
        )}
        <defs>
          <marker id="arrMon" markerWidth="10" markerHeight="10" refX="8" refY="4" orient="auto">
            <path d="M0,0 L0,8 L9,4 z" fill="#16a34a" />
          </marker>
        </defs>

        {/* Equilibrio base */}
        {deltaM > 0 && <circle cx={tx(Ystar0)} cy={tr(rstar0)} r="5" fill="gray" opacity="0.45" />}

        <line x1={tx(Ystar)} y1={tr(rstar)} x2={tx(Ystar)} y2={tr(0)} stroke="#64748b" strokeWidth="1" strokeDasharray="4,3" />
        <line x1={tx(0)} y1={tr(rstar)} x2={tx(Ystar)} y2={tr(rstar)} stroke="#64748b" strokeWidth="1" strokeDasharray="4,3" />

        <circle cx={tx(Ystar)} cy={tr(rstar)} r="8" fill="#1e293b" />
        <circle cx={tx(Ystar)} cy={tr(rstar)} r="4" fill="white" />

        <text x={tx(Ystar)} y={tr(0) + 28} textAnchor="middle" fontSize="11" fill="#1e293b" fontWeight="700">Y* = {Ystar.toFixed(0)}</text>
        <text x={PL - 5} y={tr(rstar) - 4} textAnchor="end" fontSize="11" fill="#1e293b" fontWeight="700">{rstar.toFixed(1)}%</text>

        <text x={PL + pW / 2} y={H - 6} textAnchor="middle" fontSize="12" fill="var(--text-secondary)">Reddito, produzione Y</text>
        <text x={13} y={PT + pH / 2} textAnchor="middle" fontSize="12" fill="var(--text-secondary)" transform={`rotate(-90,13,${PT + pH / 2})`}>Tasso d'interesse r</text>
      </svg>

      <div style={{ marginTop: '0.8rem' }}>
        <label style={S.sliderLabel}>Aumento offerta di moneta reale ΔM/P: <strong>+{deltaM.toFixed(1)}</strong></label>
        <input type="range" min={0} max={3} step={0.1} value={deltaM} onChange={e => setDeltaM(+e.target.value)} style={{ width: '100%', accentColor: '#0284c7' }} />
        <div style={S.sliderRow}><span>0</span><span>espansione crescente →</span></div>
      </div>

      {deltaM > 0 && (
        <div style={S.resultBox}>
          ↑M/P → LM si sposta a destra → r scende di {(rstar0 - rstar).toFixed(2)} punti → investimenti aumentano → Y cresce di {(Ystar - Ystar0).toFixed(0)}. <strong>Meccanismo di trasmissione monetaria</strong>: ΔM/P → Δr → ΔI → ΔY (via moltiplicatore).
        </div>
      )}
    </div>
  );
};

// ─── Grafico 3: Derivazione curva DA dal modello IS-LM ──────────────────────
const DerivationADGraph = () => {
  const [P, setP] = useState(100);

  // M fisso = 500. M/P = 500/P · 100 (scala)
  // LM: r = -4 + 0.015Y + fattore che dipende da M/P
  // Semplificazione: quando P aumenta, M/P diminuisce → LM si sposta a sinistra → Y scende
  // Relazione DA: Y = 500 - 1.5·(P - 100)  (pendenza negativa)
  const Yada = 500 - 1.5 * (P - 100);
  const Yada0 = 500;

  // IS-LM
  const W1 = 260, H1 = 250;
  const PL1 = 50, PR1 = 15, PT1 = 15, PB1 = 40;
  const pW1 = W1 - PL1 - PR1, pH1 = H1 - PT1 - PB1;
  const Ymax1 = 700, rmax1 = 8;
  const tx1 = (y) => PL1 + y * (pW1 / Ymax1);
  const tr1 = (r) => PT1 + pH1 - r * (pH1 / rmax1);

  // IS: r = 6 - 0.01Y
  // LM: varia con P. Intercetta = -4 + 0.04·(P-100)
  const lmInt = -4 + 0.04 * (P - 100);
  const lmYstart = -lmInt / 0.015;
  const lmYend = Math.min(700, (rmax1 - lmInt) / 0.015);

  // Equilibrio: Y = (10 - 0.04·(P-100))/0.025
  const Yeq = (10 - 0.04 * (P - 100)) / 0.025;
  const req = Math.max(0, 6 - 0.01 * Yeq);

  // DA graph
  const W2 = 260, H2 = 250;
  const PL2 = 50, PR2 = 15, PT2 = 15, PB2 = 40;
  const pW2 = W2 - PL2 - PR2, pH2 = H2 - PT2 - PB2;
  const Pmax = 160, Pmin = 60;
  const tx2 = (y) => PL2 + y * (pW2 / Ymax1);
  const tp = (p) => PT2 + pH2 - ((p - Pmin) / (Pmax - Pmin)) * pH2;

  return (
    <div style={S.graphWrap}>
      <div style={S.graphTitle}>Derivazione della curva di domanda aggregata</div>
      <div style={S.graphSub}>Al variare di P, il modello IS-LM si aggiusta e traccia la curva DA</div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
        {/* IS-LM */}
        <svg viewBox={`0 0 ${W1} ${H1}`} style={{ width: '100%', height: 'auto', background: 'white', borderRadius: '8px' }}>
          <text x={W1 / 2} y={12} textAnchor="middle" fontSize="10" fill="#64748b" fontWeight="600">(a) Modello IS-LM</text>

          <line x1={PL1} y1={PT1} x2={PL1} y2={PT1 + pH1} stroke="#64748b" strokeWidth="1.5" />
          <line x1={PL1} y1={PT1 + pH1} x2={PL1 + pW1} y2={PT1 + pH1} stroke="#64748b" strokeWidth="1.5" />

          {/* IS */}
          <line x1={tx1(0)} y1={tr1(6)} x2={tx1(600)} y2={tr1(0)} stroke="#4338ca" strokeWidth="2" />
          <text x={tx1(600)} y={tr1(0) - 4} fontSize="10" fill="#4338ca" fontWeight="700">IS</text>

          {/* LM base (P=100) */}
          {P !== 100 && (
            <line x1={tx1(4 / 0.015)} y1={tr1(0)} x2={tx1(Math.min(680, (rmax1 + 4) / 0.015))} y2={tr1(Math.min(rmax1, -4 + 0.015 * Math.min(680, (rmax1 + 4) / 0.015)))} stroke="#0284c7" strokeWidth="1.3" opacity="0.3" strokeDasharray="4,3" />
          )}

          {/* LM corrente */}
          <line x1={tx1(lmYstart)} y1={tr1(0)} x2={tx1(Math.min(680, lmYend))} y2={tr1(Math.min(rmax1, lmInt + 0.015 * Math.min(680, lmYend)))} stroke="#0284c7" strokeWidth="2" />
          <text x={tx1(Math.min(680, lmYend)) - 15} y={tr1(Math.min(rmax1 - 0.3, lmInt + 0.015 * Math.min(680, lmYend))) - 6} fontSize="10" fill="#0284c7" fontWeight="700">LM(P)</text>

          {/* Equilibrio */}
          <line x1={tx1(Yeq)} y1={tr1(req)} x2={tx1(Yeq)} y2={tr1(0)} stroke="#64748b" strokeWidth="1" strokeDasharray="3,2" />
          <line x1={tx1(0)} y1={tr1(req)} x2={tx1(Yeq)} y2={tr1(req)} stroke="#64748b" strokeWidth="1" strokeDasharray="3,2" />
          <circle cx={tx1(Yeq)} cy={tr1(req)} r="5" fill="#1e293b" />

          <text x={tx1(Yeq)} y={tr1(0) + 14} textAnchor="middle" fontSize="9" fill="#1e293b" fontWeight="700">Y={Yeq.toFixed(0)}</text>
          <text x={PL1 + pW1 / 2} y={H1 - 4} textAnchor="middle" fontSize="10" fill="#64748b">Reddito Y</text>
          <text x={10} y={PT1 + pH1 / 2} textAnchor="middle" fontSize="10" fill="#64748b" transform={`rotate(-90,10,${PT1 + pH1 / 2})`}>r</text>
        </svg>

        {/* Curva DA */}
        <svg viewBox={`0 0 ${W2} ${H2}`} style={{ width: '100%', height: 'auto', background: 'white', borderRadius: '8px' }}>
          <text x={W2 / 2} y={12} textAnchor="middle" fontSize="10" fill="#64748b" fontWeight="600">(b) Curva di domanda aggregata</text>

          <line x1={PL2} y1={PT2} x2={PL2} y2={PT2 + pH2} stroke="#64748b" strokeWidth="1.5" />
          <line x1={PL2} y1={PT2 + pH2} x2={PL2 + pW2} y2={PT2 + pH2} stroke="#64748b" strokeWidth="1.5" />

          {/* DA: Y = 500 - 1.5·(P-100) → P = 100 - (Y-500)/1.5 */}
          <line
            x1={tx2(500 - 1.5 * (Pmin - 100))}
            y1={tp(Pmin)}
            x2={tx2(500 - 1.5 * (Pmax - 100))}
            y2={tp(Pmax)}
            stroke="#dc2626"
            strokeWidth="2.5"
          />
          <text x={tx2(500 - 1.5 * (Pmin - 100)) - 8} y={tp(Pmin) - 4} fontSize="10" fill="#dc2626" fontWeight="700">DA</text>

          {/* Punto corrente */}
          <line x1={tx2(Yada)} y1={tp(P)} x2={tx2(Yada)} y2={tp(Pmin)} stroke="#64748b" strokeWidth="1" strokeDasharray="3,2" />
          <line x1={PL2} y1={tp(P)} x2={tx2(Yada)} y2={tp(P)} stroke="#64748b" strokeWidth="1" strokeDasharray="3,2" />
          <circle cx={tx2(Yada)} cy={tp(P)} r="5" fill="#dc2626" />

          <text x={tx2(Yada)} y={tp(Pmin) + 14} textAnchor="middle" fontSize="9" fill="#1e293b" fontWeight="700">Y={Yada.toFixed(0)}</text>
          <text x={PL2 - 5} y={tp(P) + 3} textAnchor="end" fontSize="9" fill="#1e293b" fontWeight="700">P={P}</text>

          <text x={PL2 + pW2 / 2} y={H2 - 4} textAnchor="middle" fontSize="10" fill="#64748b">Reddito Y</text>
          <text x={10} y={PT2 + pH2 / 2} textAnchor="middle" fontSize="10" fill="#64748b" transform={`rotate(-90,10,${PT2 + pH2 / 2})`}>Prezzi P</text>
        </svg>
      </div>

      <div style={{ marginTop: '1rem' }}>
        <label style={S.sliderLabel}>Livello dei prezzi P: <strong>{P}</strong> (base = 100)</label>
        <input type="range" min={70} max={150} step={2} value={P} onChange={e => setP(+e.target.value)} style={{ width: '100%', accentColor: '#dc2626' }} />
        <div style={S.sliderRow}><span>70</span><span>100</span><span>150</span></div>
      </div>

      <div style={S.resultBox}>
        ↑P → M/P ↓ → LM si sposta a sinistra → r ↑, Y ↓. Muovendo P lungo tutta l'ascissa dei prezzi, l'equilibrio IS-LM traccia la <strong>curva di domanda aggregata</strong> DA, che ha pendenza negativa.
      </div>
    </div>
  );
};

// ─── Grafico 4: Breve vs lungo periodo (IS-LM + DA-OA) ──────────────────────
const ShortLongRunGraph = () => {
  const [t, setT] = useState(0); // 0 = breve, 1 = transizione, 2 = lungo

  // Partiamo da Y_n=400. Shock: IS si sposta a sinistra (crisi)
  // Breve: Y scende a 330 a P fisso.
  // Lungo: P scende, LM scorre a destra, Y torna a 400.

  const Y_n = 400;
  const Y_short = 330;
  const P_short = 100;
  const P_long = 82;

  const Y = t === 0 ? Y_short : (t === 1 ? 365 : Y_n);
  const P = t === 0 ? P_short : (t === 1 ? 91 : P_long);

  const W = 440, H = 320;
  const PL = 60, PR = 20, PT = 20, PB = 45;
  const pW = W - PL - PR, pH = H - PT - PB;
  const Ymax = 550, Pmax = 130, Pmin = 60;
  const tx = (y) => PL + y * (pW / Ymax);
  const tp = (p) => PT + pH - ((p - Pmin) / (Pmax - Pmin)) * pH;

  return (
    <div style={S.graphWrap}>
      <div style={S.graphTitle}>L'aggiustamento da breve a lungo periodo</div>
      <div style={S.graphSub}>Dopo uno shock negativo della domanda, l'economia torna a Y_n quando i prezzi scendono</div>

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto' }}>
        {[80, 100, 120].map(p => (
          <line key={p} x1={PL} y1={tp(p)} x2={PL + pW} y2={tp(p)} stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
        ))}
        {[100, 200, 300, 400, 500].map(y => (
          <line key={y} x1={tx(y)} y1={PT} x2={tx(y)} y2={PT + pH} stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
        ))}
        {[80, 100, 120].map(p => (
          <text key={p} x={PL - 5} y={tp(p) + 3} textAnchor="end" fontSize="10" fill="#94a3b8">{p}</text>
        ))}
        {[100, 200, 300, 400, 500].map(y => (
          <text key={y} x={tx(y)} y={PT + pH + 14} textAnchor="middle" fontSize="10" fill="#94a3b8">{y}</text>
        ))}

        <line x1={PL} y1={PT} x2={PL} y2={PT + pH} stroke="#64748b" strokeWidth="1.5" />
        <line x1={PL} y1={PT + pH} x2={PL + pW} y2={PT + pH} stroke="#64748b" strokeWidth="1.5" />

        {/* OALR verticale su Y_n */}
        <line x1={tx(Y_n)} y1={PT} x2={tx(Y_n)} y2={PT + pH} stroke="#16a34a" strokeWidth="2.5" strokeDasharray="6,3" />
        <text x={tx(Y_n)} y={PT + 10} textAnchor="middle" fontSize="11" fill="#16a34a" fontWeight="700">OA_LR</text>

        {/* OA breve periodo: orizzontale al livello di P corrente */}
        <line x1={PL} y1={tp(P)} x2={PL + pW} y2={tp(P)} stroke="#0284c7" strokeWidth="2" />
        <text x={PL + pW - 30} y={tp(P) - 5} fontSize="11" fill="#0284c7" fontWeight="700">OA_SR</text>

        {/* DA originaria (passante per Y_n a P=100) */}
        <line x1={tx(Y_n + 1.5 * (Pmin - 100))} y1={tp(Pmin)} x2={tx(Y_n + 1.5 * (Pmax - 100))} y2={tp(Pmax)} stroke="#dc2626" strokeWidth="1.5" opacity="0.28" strokeDasharray="5,3" />
        <text x={tx(Y_n + 1.5 * (Pmin - 100)) - 8} y={tp(Pmin) - 4} fontSize="10" fill="#dc2626" opacity="0.6">DA₁</text>

        {/* DA nuova (dopo shock: passante per Y_short a P=100) */}
        <line x1={tx(Y_short + 1.5 * (Pmin - 100))} y1={tp(Pmin)} x2={tx(Y_short + 1.5 * (Pmax - 100))} y2={tp(Pmax)} stroke="#dc2626" strokeWidth="2.5" />
        <text x={tx(Y_short + 1.5 * (Pmin - 100)) - 8} y={tp(Pmin) - 4} fontSize="11" fill="#dc2626" fontWeight="700">DA₂</text>

        {/* Punto A (equilibrio iniziale) */}
        <circle cx={tx(Y_n)} cy={tp(100)} r="5" fill="gray" opacity="0.5" />
        <text x={tx(Y_n) + 7} y={tp(100) - 5} fontSize="10" fill="#64748b">A</text>

        {/* Punto B (breve periodo) */}
        {t >= 0 && (
          <>
            <circle cx={tx(Y_short)} cy={tp(100)} r={t === 0 ? 7 : 5} fill="#0284c7" />
            <text x={tx(Y_short) - 10} y={tp(100) - 5} fontSize="10" fill="#0284c7" fontWeight={t === 0 ? 700 : 400}>B</text>
          </>
        )}

        {/* Punto C (lungo periodo) */}
        {t === 2 && (
          <>
            <circle cx={tx(Y_n)} cy={tp(P_long)} r="7" fill="#16a34a" />
            <text x={tx(Y_n) + 7} y={tp(P_long) - 5} fontSize="10" fill="#16a34a" fontWeight="700">C</text>
          </>
        )}

        {/* Punto corrente */}
        <circle cx={tx(Y)} cy={tp(P)} r="8" fill="#1e293b" opacity="0.9" />
        <circle cx={tx(Y)} cy={tp(P)} r="4" fill="white" />

        <text x={PL + pW / 2} y={H - 6} textAnchor="middle" fontSize="12" fill="var(--text-secondary)">Reddito, produzione Y</text>
        <text x={13} y={PT + pH / 2} textAnchor="middle" fontSize="12" fill="var(--text-secondary)" transform={`rotate(-90,13,${PT + pH / 2})`}>Livello prezzi P</text>
      </svg>

      <div style={{ marginTop: '0.8rem' }}>
        <label style={S.sliderLabel}>Fase dell'aggiustamento: <strong>{t === 0 ? 'Breve periodo (shock)' : t === 1 ? 'Transizione' : 'Lungo periodo (ritorno a Y_n)'}</strong></label>
        <input type="range" min={0} max={2} step={1} value={t} onChange={e => setT(+e.target.value)} style={{ width: '100%' }} />
        <div style={S.sliderRow}><span>Breve</span><span>Medio</span><span>Lungo</span></div>
      </div>

      <div style={S.resultBox}>
        {t === 0 && <>Uno shock negativo di DA sposta la curva a sinistra. Nel <strong>breve periodo</strong> i prezzi sono fissi (OA_SR orizzontale): l'economia passa da A a B con Y &lt; Y_n e disoccupazione elevata.</>}
        {t === 1 && <>Nel <strong>medio periodo</strong>, i prezzi iniziano a scendere perché Y &lt; Y_n. Le famiglie trovano M/P più alto → LM si sposta a destra → r scende → Y risale gradualmente verso Y_n.</>}
        {t === 2 && <>Nel <strong>lungo periodo</strong>, i prezzi si sono aggiustati al nuovo livello P₂ &lt; P₁. L'economia è tornata a Y_n nel punto C — la DA è più bassa, ma il prodotto è lo stesso.</>}
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// PAGINA PRINCIPALE
// ═══════════════════════════════════════════════════════════════════════════
export default function Cap13ApplicazioneISLM() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', paddingBottom: '5rem' }}>

      {/* HEADER */}
      <div className="page-header">
        <div style={{ color: 'var(--accent-cyan)', fontWeight: 600, letterSpacing: '0.1em', fontSize: '0.875rem', marginBottom: '0.5rem' }}>CAPITOLO 13 · TEORIA DEL CICLO ECONOMICO</div>
        <h1 className="page-title gradient-text" style={{ fontSize: '2.8rem', lineHeight: 1.1 }}>La Domanda Aggregata II:<br />L'Applicazione del Modello IS-LM</h1>
        <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', fontSize: '1.05rem', maxWidth: '650px' }}>
          Dal modello IS-LM alla teoria delle fluttuazioni: come le politiche fiscale e monetaria influenzano la produzione, come nasce la curva di domanda aggregata, e come si interpretano due delle crisi più gravi del XX e XXI secolo.
        </p>
      </div>

      {/* INTRO */}
      <div className="content-section glass-panel" style={{ padding: '2rem 2.5rem', marginBottom: '2rem' }}>
        <blockquote style={{ borderLeft: '4px solid var(--accent-indigo)', padding: '0.6rem 1.2rem', margin: '0 0 1.5rem 0', color: 'var(--text-secondary)', fontStyle: 'italic', fontSize: '0.95rem' }}>
          «La scienza è un paradiso: quanto maggiore l'ignoranza di nulla, tanto più progredisce la fisiologia e la patologia, e di nulla della Grande Depressione, e da questa terreno nascerà tutto ciò dalla gloria di aiutare il mondo macroeconomico.»
          <div style={{ marginTop: '0.5rem', fontStyle: 'normal', fontSize: '0.85rem' }}>— Paul Samuelson</div>
        </blockquote>

        <p style={S.p}>
          Nel Capitolo 12 abbiamo introdotto gli elementi costitutivi del modello IS-LM: alle due curve si è aggiunta l'ipotesi di Keynes secondo cui la domanda aggregata determina il reddito di breve periodo quando i prezzi sono rigidi. Abbiamo visto come le curve IS e LM incorporino l'equilibrio di mercato dei beni e di mercato della moneta, e come la loro intersezione identifichi in un unico punto (Y, r) il reddito e il tasso di interesse compatibili con l'equilibrio simultaneo dei due mercati.
        </p>
        <p style={S.p}>
          In questo capitolo <strong>applichiamo il modello</strong> per rispondere a tre grandi domande. Primo: come le politiche fiscale e monetaria influenzano il reddito nel breve periodo? Quando una delle due curve si sposta, cosa accade all'equilibrio? Secondo: come derivare dal modello IS-LM la curva di domanda aggregata DA che abbiamo usato nel Capitolo 11, introducendo prezzi flessibili nel lungo periodo? E terzo: il modello IS-LM funziona davvero come strumento di lettura degli episodi storici? Applichiamo la teoria alle due più grandi contrazioni della storia recente: la <strong>Grande Depressione</strong> (1929–33) e la <strong>Grande Recessione</strong> (2008–09).
        </p>
      </div>

      {/* ── SEZ 13.1: Spiegare le fluttuazioni ──────────────────────── */}
      <div className="content-section glass-panel" style={{ padding: '2rem 2.5rem', marginBottom: '2rem' }}>
        <h2 style={S.h2}>13.1 Spiegare le fluttuazioni cicliche col modello IS-LM</h2>
        <p style={S.p}>
          L'intersezione tra curva IS e curva LM determina simultaneamente il livello del reddito aggregato Y e del tasso di interesse r compatibili con l'equilibrio di breve periodo. Quando uno shock sposta una delle due curve, l'equilibrio cambia e si generano fluttuazioni cicliche. Le fonti del cambiamento possono essere di due tipi: <strong>shock di spesa</strong> (che spostano IS) e <strong>shock monetari</strong> (che spostano LM).
        </p>

        <h3 style={S.h3}>La politica fiscale e la curva IS: le conseguenze sull'equilibrio di breve periodo</h3>
        <p style={S.p}>
          Consideriamo un aumento della spesa pubblica G. Nella croce keynesiana del Capitolo 12, un simile aumento fa salire il reddito di equilibrio di un ammontare pari al moltiplicatore, <em>ΔY = ΔG / (1 − PMC)</em>, tenendo costante il tasso di interesse. Ma nel modello IS-LM l'aumento di G non solo sposta la curva IS a destra, ma provoca anche un aumento del tasso di interesse, che riduce gli investimenti privati e <em>attenua</em> l'espansione iniziale del reddito.
        </p>
        <p style={S.p}>
          Graficamente, l'aumento di G fa scorrere la curva IS verso destra: per ogni livello di r, il reddito di equilibrio nel mercato dei beni è più alto. Il nuovo punto di intersezione IS-LM ha Y più alto <em>e</em> r più alto. L'aumento di r riduce gli investimenti privati: questo è l'<strong>effetto di spiazzamento</strong> (<em>crowding out</em>) — una parte dell'espansione pubblica "spiazza" la spesa privata perché rende più costoso prendere a prestito.
        </p>
        <div style={S.formula}>
          ΔY (IS-LM) = ΔG · 1/(1−PMC) · (1 − effetto spiazzamento) &lt; ΔY (croce keynesiana)
        </div>

        <FiscalPolicyGraph />

        <h3 style={S.h3}>L'intervento tramite politica monetaria</h3>
        <p style={S.p}>
          Nel modello IS-LM, un aumento dell'offerta di moneta (o una riduzione del tasso a cui la banca centrale compra titoli) sposta la curva LM <em>a destra</em>: per ogni livello del reddito, l'equilibrio del mercato della moneta richiede un tasso di interesse più basso (poiché M/P è ora più grande, si detiene più moneta senza che serva un r alto per incentivare la domanda speculativa). La discesa di r stimola gli investimenti e, attraverso il moltiplicatore, aumenta il reddito.
        </p>
        <p style={S.p}>
          Il <strong>meccanismo di trasmissione monetaria</strong> opera dunque attraverso il canale del tasso di interesse: ΔM/P → Δr → ΔI → ΔY. Questa catena è sospesa quando: (a) gli investimenti non reagiscono al tasso (IS verticale) — la BC può tagliare i tassi quanto vuole, ma la domanda di investimenti non risponde; (b) i tassi sono già a zero e non possono scendere oltre (trappola della liquidità, LM orizzontale). In entrambi i casi la politica monetaria perde efficacia e solo la politica fiscale può spostare il reddito.
        </p>

        <MonetaryPolicyGraph />

        <h3 style={S.h3}>Interazione tra politica fiscale e monetaria</h3>
        <p style={S.p}>
          Nell'analizzare i cambiamenti conseguenti agli interventi di politica monetaria o di politica fiscale dobbiamo supporre che la politica alternativa sia mantenuta ferma. Così, nell'analizzare la politica fiscale supponiamo di tenere costante l'offerta di moneta, e viceversa. Nella pratica, la banca centrale può reagire a uno stimolo fiscale contenendo o compensando i suoi effetti, e il governo può reagire a una manovra monetaria accomodando o bloccando la sua efficacia. Di conseguenza l'impatto concreto di un dato intervento dipende sempre dalla risposta dell'altra autorità.
        </p>
        <p style={S.p}>
          Nella figura 13.4 possiamo osservare tre possibili risposte della banca centrale a un aumento della spesa pubblica: <em>(a)</em> mantenere costante l'offerta di moneta — LM resta ferma e si genera l'effetto di spiazzamento classico; <em>(b)</em> mantenere costante il tasso di interesse — LM scorre a destra fino a che r torna al valore iniziale, quindi l'effetto spiazzamento è nullo ma l'espansione è molto forte; <em>(c)</em> mantenere costante il livello del reddito — LM scorre a sinistra per compensare l'espansione fiscale, l'economia non cresce ma r aumenta molto.
        </p>

        <div style={S.caseCard}>
          <div style={S.caseTitle}>ANALISI DI UN CASO — La recessione del 2001</div>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            Nel 2001 gli Stati Uniti e i Paesi dell'area euro hanno registrato una decisa contrazione significativa della crescita del PIL. Negli Stati Uniti il tasso di disoccupazione è salito dal 3,9% nel settembre 2000 a 5,7% nel giugno 2003. Per molti aspetti la recessione del 2001 è stata atipica: non è stata causata né dall'aumento dei tassi di interesse né da shock petroliferi, ma da una serie coordinata di shock negativi alla spesa programmata.
          </p>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            Il primo shock è stata la fine della "new economy" e lo sgonfiamento della bolla dot-com: tra il picco del marzo 2000 e il minimo dell'ottobre 2002 l'indice NASDAQ ha perso circa il 78%. Il crollo azionario ha ridotto drasticamente la ricchezza delle famiglie (effetto ricchezza), che hanno tagliato il consumo — C̄ cala, IS si sposta a sinistra. Il secondo shock sono stati gli attacchi terroristici dell'11 settembre 2001: l'incertezza ha paralizzato gli investimenti delle imprese (caduta di Ī) e aumentato la domanda precauzionale di moneta — shock negativo a IS e positivo a domanda di moneta.
          </p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            La risposta della <em>Federal Reserve</em>, guidata allora da Alan Greenspan, è stata aggressiva: il tasso sui fondi federali è stato tagliato da 6,5% di inizio 2001 a 1% entro giugno 2003. Allo stesso tempo l'amministrazione Bush ha varato un importante taglio delle imposte nel 2001 e 2003: IS si è spostata a destra. La combinazione tra espansione monetaria e fiscale ha reso la recessione del 2001 relativamente breve e lieve, ma ha seminato i germi della bolla immobiliare e della crisi successiva.
          </p>
        </div>
      </div>

      {/* ── SEZ 13.2: Modello IS-LM come teoria DA ──────────────────── */}
      <div className="content-section glass-panel" style={{ padding: '2rem 2.5rem', marginBottom: '2rem' }}>
        <h2 style={S.h2}>13.2 Il modello IS-LM come una teoria della domanda aggregata</h2>
        <p style={S.p}>
          Abbiamo utilizzato il modello IS-LM per spiegare il livello del reddito nazionale nel breve periodo, quando il livello dei prezzi P è fisso. Ma per collegare il modello IS-LM con il modello DA-OA del Capitolo 11 dobbiamo rilassare l'ipotesi di P fisso. Vediamo anche come l'intersezione tra IS e LM permetta di derivare la curva di <strong>domanda aggregata</strong> DA. Ricordiamo che la curva DA rappresenta la relazione che sussiste tra il livello dei prezzi e il livello del reddito aggregato lungo la quale il mercato dei beni e il mercato della moneta sono entrambi in equilibrio.
        </p>

        <h3 style={S.h3}>Derivare la curva DA dal modello IS-LM</h3>
        <p style={S.p}>
          Usando il modello IS-LM per vedere la reazione della domanda aggregata ad una variazione di P, scopriamo che il reddito nazionale è una funzione decrescente di P. La figura 13.5 mostra questa derivazione. Per un dato livello di P, il modello IS-LM produce il livello di reddito Y corrispondente. Un aumento di P riduce M/P, riduce cioè le consistenze di moneta reale. Come abbiamo visto nel Capitolo 12, una diminuzione di M/P sposta la curva LM verso l'alto. La curva LM che si sposta in alto aumenta il tasso di interesse che riduce gli investimenti.
        </p>
        <p style={S.p}>
          Il meccanismo per il quale Y cala quando P aumenta è dunque una catena di eventi: (i) l'aumento di P riduce l'offerta di moneta reale M/P; (ii) la domanda di moneta, per essere soddisfatta con minor moneta reale, richiede tassi di interesse più alti, quindi r aumenta; (iii) r più alto scoraggia gli investimenti I; (iv) il calo di I, via moltiplicatore della spesa, riduce Y. Dalla catena otteniamo una coppia (P, Y) per ciascun valore di P. L'insieme di queste coppie è la <strong>curva di domanda aggregata</strong>.
        </p>

        <DerivationADGraph />

        <h3 style={S.h3}>Cosa fa muovere la DA</h3>
        <p style={S.p}>
          Le curve IS e LM possono spostarsi per motivi diversi da variazioni di P. Quando ciò accade, a ogni P dato corrisponde ora un diverso Y, dunque la curva DA si sposta. Vale il principio: <em>ciò che sposta IS o LM a P dato, sposta anche la DA</em>. In particolare:
        </p>
        <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: 1.9 }}>
          <li>↑G, ↓T, ↑C̄, ↑Ī → IS si sposta a destra → per ogni P, Y è più alto → DA si sposta a destra.</li>
          <li>↑M, ↓ domanda di moneta → LM si sposta a destra → DA si sposta a destra.</li>
          <li>↓G, ↑T, ↓fiducia → IS a sinistra → DA a sinistra.</li>
          <li>↓M → LM a sinistra → DA a sinistra.</li>
        </ul>

        <h3 style={S.h3}>Il modello IS-LM nel breve e nel lungo periodo</h3>
        <p style={S.p}>
          Abbiamo finora analizzato il modello IS-LM assumendo che il livello dei prezzi sia fisso (breve periodo). Ma nel lungo periodo i prezzi sono flessibili e si adeguano a Y_n (prodotto di piena occupazione). Quando l'economia parte da Y &lt; Y_n, la concorrenza tra i lavoratori disoccupati spinge i salari (e quindi i prezzi) verso il basso. Man mano che P cala, M/P aumenta, LM si sposta a destra, r scende, Y torna verso Y_n.
        </p>
        <p style={S.p}>
          Il meccanismo è automatico, ma la velocità con cui opera è il cuore del dibattito macroeconomico. I keynesiani sostengono che i prezzi sono "appiccicosi" (<em>sticky</em>) e l'aggiustamento può richiedere molti anni, durante i quali è opportuno intervenire con la politica economica. I monetaristi e i nuovi classici sostengono che i prezzi sono più flessibili e l'aggiustamento è rapido. Nel mezzo ci sono i nuovi keynesiani, che riconoscono rigidità salariali e di prezzo ma ritengono che l'intervento attivo della politica monetaria sia comunque utile a smorzare le fluttuazioni.
        </p>

        <ShortLongRunGraph />
      </div>

      {/* ── SEZ 13.3: Grande Depressione ────────────────────────────── */}
      <div className="content-section glass-panel" style={{ padding: '2rem 2.5rem', marginBottom: '2rem' }}>
        <h2 style={S.h2}>13.3 La Grande Depressione</h2>
        <p style={S.p}>
          Avendo sviluppato il modello della domanda aggregata, possiamo utilizzarlo per capire le cause della <strong>Grande Depressione</strong>, il più drammatico crollo economico della storia recente. Avendo sviluppato il modello IS-LM, siamo in grado di analizzare le diverse ipotesi su che cosa abbia causato un tale disastro: la contrazione tra il 1929 e il 1933 ha visto il PIL americano scendere di quasi il 30%, la disoccupazione salire dal 3% al 25%, e circa un terzo delle banche statunitensi fallire.
        </p>

        <h3 style={S.h3}>L'ipotesi di una riduzione della spesa: uno shock della curva IS</h3>
        <p style={S.p}>
          La Tabella 13.1 mostra che tra il 1929 e il 1933 l'offerta di moneta negli Stati Uniti è diminuita del 25% e il tasso di disoccupazione è salito al 25%. È naturale domandarsi perché sia accaduto. Gli economisti non hanno consenso unanime. La maggior parte degli economisti oggi ritiene che la spiegazione sia una combinazione di due gruppi di eventi: una riduzione massiccia della spesa programmata (shock IS) e una riduzione dell'offerta di moneta (shock LM). Quale dei due abbia avuto il ruolo principale è ancora materia di dibattito.
        </p>

        <h4 style={S.h4}>L'ipotesi della spesa: uno shock della curva IS</h4>
        <p style={S.p}>
          Secondo una prima interpretazione, la depressione è stata dovuta a uno <strong>shock negativo della curva IS</strong>. Molti economisti, fra cui Peter Temin, sostengono che la caduta della spesa sia stata il motore primario della contrazione. Vari elementi del modello suggeriscono che ci sia stato una serie di shock negativi autonomi agli elementi della spesa aggregata nei primi anni '30:
        </p>
        <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: 1.9 }}>
          <li><strong>Crollo degli investimenti (↓Ī)</strong>: gli investimenti crollarono di oltre l'80% tra il 1929 e il 1933. La sovraccapacità produttiva ereditata dalla "bolla ruggente" degli anni '20, il crollo dei prezzi e il pessimismo delle imprese hanno azzerato i progetti di investimento.</li>
          <li><strong>Effetto ricchezza negativo (↓C̄)</strong>: il crollo del mercato azionario del 1929 ha distrutto circa il 90% del valore degli indici entro il 1932. Le famiglie americane hanno perso enorme ricchezza: il consumo delle famiglie benestanti è calato bruscamente.</li>
          <li><strong>Crisi bancaria e razionamento del credito</strong>: un terzo delle banche è fallito. I mercati creditizi si sono congelati, e anche le imprese con progetti profittevoli non hanno più trovato credito.</li>
          <li><strong>Politiche fiscali pro-cicliche</strong>: all'epoca prevaleva l'ortodossia del bilancio in pareggio. Il presidente Hoover aumentò le tasse nel 1932 per coprire il deficit generato dalla recessione — manovra restrittiva in piena contrazione (↑T).</li>
          <li><strong>Smoot-Hawley Tariff Act (1930)</strong>: dazi massicci sulle importazioni hanno scatenato guerre commerciali, riducendo le esportazioni e aggravando la crisi.</li>
        </ul>

        <h4 style={S.h4}>L'ipotesi monetaria: uno shock della curva LM</h4>
        <p style={S.p}>
          Una seconda interpretazione, sostenuta da Milton Friedman e Anna Schwartz nella loro celebre <em>A Monetary History of the United States, 1867–1960</em> (1963), attribuisce la contrazione al crollo dell'offerta di moneta. Tra il 1929 e il 1933 la quantità di moneta in circolazione M è calata di circa il 25% per tre motivi: (1) numerosi fallimenti bancari hanno azzerato depositi; (2) i depositanti hanno preferito detenere contanti invece di fidarsi delle banche, aumentando il rapporto contanti/depositi; (3) le banche sopravvissute hanno aumentato il rapporto riserve/depositi per precauzione, detenendo liquidità in più.
        </p>
        <p style={S.p}>
          La Federal Reserve avrebbe potuto contrastare questa contrazione immettendo liquidità (open market operations aggressive), ma non lo fece. L'errore, secondo Friedman e Schwartz, è uno dei più gravi della storia della politica economica: senza reazione della Fed, l'offerta di moneta è crollata, la curva LM si è spostata drammaticamente a sinistra, r è aumentato (nonostante l'economia fosse in crisi), gli investimenti sono crollati, e il reddito si è schiantato.
        </p>

        <h4 style={S.h4}>L'ipotesi della deflazione e lo stock di moneta: deflazione attesa e tassi reali</h4>
        <p style={S.p}>
          Una terza versione, che integra le altre, enfatizza il ruolo della <strong>deflazione</strong>. Tra il 1929 e il 1933 il livello dei prezzi è diminuito di circa il 25% — una deflazione enorme. In un mondo con tassi di interesse nominali già bassi, la deflazione fa aumentare il tasso di interesse reale <em>r = i − πᵉ</em>. Se i nominali sono fermi al 2% ma ci aspettiamo una deflazione del 10% (πᵉ = −10%), il tasso reale è 12%: nessun imprenditore investe a costi reali così elevati. Questa <em>trappola deflazionistica</em> sposta IS a sinistra (via ↓I), amplificando la contrazione.
        </p>
        <p style={S.p}>
          C'è anche un effetto opposto, più controverso: la <strong>teoria di Pigou</strong> sostiene che la deflazione aumenta la ricchezza reale degli saldi monetari (M/P), incentivando il consumo (effetto di encaisses reali). In teoria ciò sposterebbe IS a destra. In pratica, gli studi empirici concludono che l'effetto Pigou sulla Grande Depressione è stato piccolo, sopraffatto dall'effetto recessivo della deflazione sui tassi reali e sulla ridistribuzione debitore-creditore.
        </p>

        <div style={S.caseCard}>
          <div style={S.caseTitle}>ANALISI DI UN CASO — La crisi finanziaria e la Grande Recessione del 2008–2009</div>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            Nel 2008 l'economia mondiale ha conosciuto la crisi più grave dalla Grande Depressione. L'epicentro è stato negli Stati Uniti: lo scoppio di una gigantesca bolla immobiliare, alimentata da anni di bassi tassi di interesse e da mutui subprime concessi a famiglie insolventi, ha innescato una spirale di fallimenti che è partita dalle grandi banche d'investimento (Bear Stearns, Lehman Brothers) e si è propagata al sistema bancario globale.
          </p>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            <strong>L'ipotesi della spesa applicata al 2008</strong>: lo scoppio della bolla immobiliare ha prodotto un effetto ricchezza negativo fortissimo (↓C̄). Il crollo dei prezzi delle case ha ridotto la ricchezza delle famiglie; il consumo è calato bruscamente. Le imprese hanno rivisto al ribasso le aspettative sulla domanda futura, cancellando progetti di investimento (↓Ī). La crisi bancaria ha paralizzato il credito, bloccando anche imprese solvibili. In sintesi: uno shock negativo massiccio alla IS.
          </p>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            <strong>La trappola della liquidità e la politica monetaria non convenzionale</strong>: la Federal Reserve, guidata da Ben Bernanke, ha risposto tagliando il tasso dei federal funds dal 5,25% di settembre 2007 praticamente a zero (0–0,25%) entro dicembre 2008. Ma con IS spostata di tanto a sinistra, anche r = 0% non era abbastanza basso per riportare l'economia a Y_n. Gli USA erano entrati in <strong>trappola della liquidità</strong>: la LM era orizzontale al limite dello zero, e ulteriori espansioni monetarie non riducevano r. La Fed ha dovuto ricorrere a strumenti non convenzionali — il <em>Quantitative Easing</em> (acquisto massivo di titoli pubblici a lungo termine per abbassare i tassi a lungo termine), la <em>forward guidance</em> (comunicare impegno a tenere i tassi bassi a lungo), e programmi di emergenza per il mercato creditizio.
          </p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>La risposta fiscale</strong>: nel gennaio 2009 il Congresso ha approvato l'<em>American Recovery and Reinvestment Act</em> da 787 miliardi di dollari (stimolo fiscale). L'Europa, invece, ha tentato una risposta fiscale coordinata nel 2009 ma si è rapidamente convertita all'<em>austerità</em> nel 2010–12: il risultato è stato una doppia recessione (<em>double dip</em>) per molti paesi europei, che hanno recuperato i livelli pre-crisi solo molti anni dopo gli USA.
          </p>
        </div>

        <h3 style={S.h3}>La trappola della liquidità e la politica monetaria non convenzionale</h3>
        <p style={S.p}>
          La <strong>trappola della liquidità</strong> è una situazione in cui i tassi di interesse nominali sono al loro limite inferiore (lo zero, o leggermente sotto zero), e la banca centrale non può stimolare l'economia abbassando ulteriormente i tassi. In questo caso la curva LM diventa orizzontale nella regione rilevante: aumentare M non cambia r, quindi non produce effetti sul reddito via canale del tasso di interesse.
        </p>
        <p style={S.p}>
          Keynes aveva identificato questa possibilità già nella <em>Teoria Generale</em>, ma fino agli anni 2000 sembrava una curiosità teorica. Il Giappone degli anni '90 è stato il primo caso reale: tassi fermi a zero per oltre un decennio con l'economia stagnante. La crisi del 2008 ha riportato la trappola al centro del dibattito, con gli USA e l'Europa in questa situazione per quasi un decennio.
        </p>
        <p style={S.p}>
          Quando si è in trappola della liquidità, la politica monetaria tradizionale perde efficacia. Rimangono tre strumenti alternativi:
        </p>
        <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: 1.9 }}>
          <li><strong>Quantitative Easing</strong>: la banca centrale compra titoli a lungo termine (mutui, obbligazioni statali a 10 anni) per abbassare i tassi a lungo termine quando quelli a breve sono già a zero. Riduce i premi di rischio e incoraggia il portafoglio degli investitori verso asset più rischiosi.</li>
          <li><strong>Forward Guidance</strong>: comunicazione credibile che la banca centrale terrà i tassi bassi per un periodo prolungato anche dopo la ripresa. Ciò abbassa le aspettative sui tassi futuri e stimola oggi la spesa.</li>
          <li><strong>Politica fiscale espansiva</strong>: in trappola della liquidità il moltiplicatore fiscale è massimizzato (non c'è effetto spiazzamento perché r non sale). La teoria IS-LM suggerisce che la politica fiscale sia l'unico strumento davvero potente in queste condizioni — è il motivo per cui Krugman, Summers e altri invocarono stimolo aggressivo.</li>
        </ul>
      </div>

      {/* ── SEZ 13.4: Conclusioni ───────────────────────────────────── */}
      <div className="content-section glass-panel" style={{ padding: '2rem 2.5rem', marginBottom: '2rem' }}>
        <h2 style={S.h2}>13.4 Conclusioni</h2>
        <p style={S.p}>
          Lo scopo di questo capitolo e del precedente era quello di approfondire la nostra comprensione delle fluttuazioni economiche aggregate. Abbiamo visto come il modello IS-LM, benché sviluppato negli anni Trenta, sia ancora uno strumento di grande utilità per analizzare le cause e gli effetti delle fluttuazioni di breve periodo e le conseguenze delle politiche economiche. La forza del modello è che offre una cornice unificata per trattare due mercati (beni e moneta) e le loro interazioni, rendendo esplicito il ruolo del tasso di interesse come ponte fra politica monetaria e decisioni di investimento. Il modello IS-LM ha costituito il fondamento della politica macroeconomica post-bellica per cinquant'anni, ed è ancora la base con cui gli studenti entrano nel mondo della macro moderna.
        </p>
        <p style={S.p}>
          Nelle dispute recenti — dalla Grande Recessione al dibattito austerità vs stimolo, dalla crisi dell'euro alle risposte alla pandemia Covid-19 — il linguaggio IS-LM ha continuato a essere centrale. Senza questo framework sarebbe impossibile capire perché il <em>Quantitative Easing</em> era necessario, perché gli stimoli fiscali dell'era Obama e Biden hanno funzionato, perché l'austerità ha aggravato la crisi europea. Il modello resta un punto di partenza, non di arrivo: studi più avanzati aggiungono rigidità salariali micro-fondate, aspettative razionali, shock di offerta, e un settore finanziario esplicito. Ma l'intuizione di base — che nel breve periodo è la domanda a determinare il reddito, e che politica fiscale e monetaria possono agire su di essa — resta il cuore dell'analisi macroeconomica applicata.
        </p>

        <div style={S.caseCard}>
          <div style={S.caseTitle}>ANALISI DI UN CASO — La risposta fiscale europea alla crisi del Covid-19</div>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            La crisi pandemica ha richiesto una risposta senza precedenti. A differenza della crisi del 2008, l'Europa ha reagito in modo coordinato: il meccanismo <em>NextGenerationEU</em> ha mobilitato 750 miliardi di euro (390 di sovvenzioni + 360 di prestiti) finanziati con bond europei emessi congiuntamente. Il <em>PNRR</em> italiano ne ha ricevuti circa 191,5 miliardi, il più grosso in valore assoluto.
          </p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            Nel linguaggio IS-LM: si è trattato di un massiccio spostamento coordinato di IS verso destra per tutti i paesi dell'Eurozona, mentre la BCE teneva la LM accomodante via tassi vicini a zero e acquisti di titoli (PEPP, il <em>Pandemic Emergency Purchase Programme</em> da €1.850 miliardi). Il policy mix è stato esemplare rispetto al 2008–2012: espansione fiscale + accomodamento monetario. Il risultato è stato che l'Europa, grazie al policy mix "IS destra + LM ferma a destra", ha limitato la caduta del reddito e recuperato i livelli pre-crisi a fine 2021, con un lag di circa due anni rispetto a una recessione tradizionale.
          </p>
        </div>
      </div>

      {/* ── IN SINTESI ──────────────────────────────────────────────── */}
      <div className="content-section glass-panel" style={{ padding: '2rem 2.5rem', marginBottom: '2rem', background: 'rgba(67,56,202,0.04)', border: '1px solid rgba(67,56,202,0.15)' }}>
        <h2 style={{ ...S.h2, marginTop: 0 }}>In Sintesi</h2>
        <ol style={{ color: 'var(--text-secondary)', lineHeight: 1.9, paddingLeft: '1.5rem' }}>
          <li>Il modello IS-LM è una teoria generale della domanda aggregata. Le variabili esogene del modello sono la politica fiscale, la politica monetaria e il livello dei prezzi. Il modello spiega due variabili endogene: il tasso di interesse e il livello del reddito.</li>
          <li>La curva IS rappresenta le coppie (Y, r) per cui il mercato dei beni è in equilibrio. Un aumento di G o una riduzione di T spostano IS a destra; variazioni di fiducia di consumatori e imprese spostano IS nella direzione della fiducia.</li>
          <li>La curva LM rappresenta le coppie (Y, r) per cui il mercato della moneta è in equilibrio. Un aumento di M/P sposta LM a destra; un aumento di P (a M fisso) sposta LM a sinistra.</li>
          <li>L'intersezione di IS e LM dà l'equilibrio simultaneo dei due mercati. A questo equilibrio corrispondono un livello di Y e un r compatibili con l'ipotesi che P sia fisso nel breve periodo.</li>
          <li>La curva di domanda aggregata DA si ottiene mostrando come l'equilibrio IS-LM reagisce a variazioni di P. Al crescere di P, M/P diminuisce, LM si sposta a sinistra, r sale, Y cala. La DA ha quindi pendenza negativa nello spazio (Y, P).</li>
          <li>Un aumento dell'offerta di moneta, un aumento della spesa pubblica o una riduzione delle imposte spostano la DA verso destra; gli effetti opposti spostano la DA verso sinistra.</li>
          <li>Il modello IS-LM permette di leggere gli episodi storici: la Grande Depressione è stata probabilmente causata da una combinazione di shock IS (crollo consumi e investimenti) e shock LM (contrazione dell'offerta di moneta); la Grande Recessione del 2008 ha visto lo scoppio di una bolla immobiliare (shock IS), la rapida caduta nella trappola della liquidità, e una risposta di policy mista che ha richiesto strumenti non convenzionali come il Quantitative Easing.</li>
        </ol>
      </div>

    </div>
  );
}
