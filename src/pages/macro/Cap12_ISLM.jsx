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

// ─── Grafico 1: Croce Keynesiana ─────────────────────────────────────────────
const KeynesianCrossGraph = () => {
  const [deltaG, setDeltaG] = useState(0);

  const PMC = 0.6;
  const autoBase = 132; // C̄(50) - PMC(0.6)×T(80) + Ī(50) + G(80) = 50-48+50+80
  const Ystar0 = autoBase / (1 - PMC); // 330
  const autoNew = autoBase + deltaG;
  const YstarNew = autoNew / (1 - PMC);
  const mult = 1 / (1 - PMC);

  const W = 500, H = 380;
  const PL = 72, PR = 20, PT = 25, PB = 55;
  const pW = W - PL - PR, pH = H - PT - PB;
  const Ymax = 700, PEmax = 700;
  const tx = (y) => PL + y * (pW / Ymax);
  const ty = (pe) => PT + pH - pe * (pH / PEmax);

  const pe0End = Math.min(Ymax, (PEmax - autoBase) / PMC);
  const peNEnd = Math.min(Ymax, (PEmax - autoNew) / PMC);

  return (
    <div style={S.graphWrap}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={S.graphTitle}>La Croce Keynesiana</div>
          <div style={S.graphSub}>PMC = {PMC} → Moltiplicatore = 1/(1−{PMC}) = <strong>{mult.toFixed(1)}</strong></div>
        </div>
        <div style={{ textAlign: 'right', fontSize: '0.85rem' }}>
          <div style={{ color: 'var(--text-secondary)' }}>ΔG = <strong style={{ color: deltaG > 0 ? '#16a34a' : deltaG < 0 ? '#dc2626' : 'var(--text-primary)' }}>{deltaG >= 0 ? '+' : ''}{deltaG}</strong></div>
          <div style={{ color: 'var(--text-secondary)' }}>ΔY* = <strong style={{ color: 'var(--accent-indigo)' }}>{deltaG !== 0 ? (deltaG > 0 ? '+' : '') + (YstarNew - Ystar0).toFixed(0) : '0'}</strong></div>
        </div>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto', display: 'block' }}>
        {/* Griglia */}
        {[100, 200, 300, 400, 500, 600].map(v => (
          <g key={v}>
            <line x1={PL} y1={ty(v)} x2={PL + pW} y2={ty(v)} stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
            <line x1={tx(v)} y1={PT} x2={tx(v)} y2={PT + pH} stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
            <text x={PL - 5} y={ty(v) + 4} textAnchor="end" fontSize="10" fill="#94a3b8">{v}</text>
            <text x={tx(v)} y={PT + pH + 16} textAnchor="middle" fontSize="10" fill="#94a3b8">{v}</text>
          </g>
        ))}

        {/* Assi */}
        <line x1={PL} y1={PT} x2={PL} y2={PT + pH} stroke="#64748b" strokeWidth="1.5" />
        <line x1={PL} y1={PT + pH} x2={PL + pW} y2={PT + pH} stroke="#64748b" strokeWidth="1.5" />

        {/* Retta 45° */}
        <line x1={tx(0)} y1={ty(0)} x2={tx(Math.min(Ymax, PEmax))} y2={ty(Math.min(Ymax, PEmax))} stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="7,4" />
        <text x={tx(640)} y={ty(640) - 8} fontSize="11" fill="#94a3b8" fontStyle="italic">PE = Y (45°)</text>

        {/* Retta PE base (se spostata, in trasparenza) */}
        {deltaG !== 0 && (
          <line x1={tx(0)} y1={ty(autoBase)} x2={tx(pe0End)} y2={ty(autoBase + PMC * pe0End)} stroke="#0284c7" strokeWidth="1.5" opacity="0.28" strokeDasharray="5,3" />
        )}

        {/* Retta PE corrente */}
        <line x1={tx(0)} y1={ty(autoNew)} x2={tx(peNEnd)} y2={ty(autoNew + PMC * peNEnd)} stroke="#0284c7" strokeWidth="2.5" />
        <text x={tx(peNEnd) + 5} y={ty(autoNew + PMC * peNEnd) + 4} fontSize="12" fill="#0284c7" fontWeight="600">PE</text>

        {/* Punto equilibrio base */}
        {deltaG !== 0 && <circle cx={tx(Ystar0)} cy={ty(Ystar0)} r="5" fill="#0284c7" opacity="0.35" />}

        {/* Droplines equilibrio nuovo */}
        <line x1={tx(YstarNew)} y1={ty(YstarNew)} x2={tx(YstarNew)} y2={ty(0)} stroke="#4338ca" strokeWidth="1" strokeDasharray="4,3" />
        <line x1={tx(0)} y1={ty(YstarNew)} x2={tx(YstarNew)} y2={ty(YstarNew)} stroke="#4338ca" strokeWidth="1" strokeDasharray="4,3" />

        {/* Punto equilibrio nuovo */}
        <circle cx={tx(YstarNew)} cy={ty(YstarNew)} r="7" fill="#4338ca" />
        <text x={tx(YstarNew)} y={ty(0) + 28} textAnchor="middle" fontSize="11" fill="#4338ca" fontWeight="700">Y*={YstarNew.toFixed(0)}</text>

        {/* Etichette assi */}
        <text x={PL + pW / 2} y={H - 6} textAnchor="middle" fontSize="12" fill="var(--text-secondary)">Reddito (Y)</text>
        <text x={13} y={PT + pH / 2} textAnchor="middle" fontSize="12" fill="var(--text-secondary)" transform={`rotate(-90,13,${PT + pH / 2})`}>Spesa Programmata (PE)</text>

        {/* Freccia spostamento */}
        {deltaG !== 0 && (
          <text x={tx(60)} y={ty(autoBase) + (ty(autoNew) - ty(autoBase)) / 2} textAnchor="middle" fontSize="11" fill="#16a34a" fontWeight="600">{deltaG > 0 ? '↑' : '↓'} ΔG={deltaG > 0 ? '+' : ''}{deltaG}</text>
        )}
      </svg>

      <div style={{ marginTop: '0.8rem' }}>
        <label style={S.sliderLabel}>Variazione spesa pubblica ΔG: <strong>{deltaG >= 0 ? '+' : ''}{deltaG}</strong></label>
        <input type="range" min={-30} max={80} step={5} value={deltaG} onChange={e => setDeltaG(+e.target.value)} style={{ width: '100%' }} />
        <div style={S.sliderRow}><span>−30</span><span>0</span><span>+80</span></div>
      </div>

      {deltaG !== 0 && (
        <div style={S.resultBox}>
          ΔG = {deltaG > 0 ? '+' : ''}{deltaG} → ΔY = {(YstarNew - Ystar0).toFixed(0)} → <strong>moltiplicatore = {((YstarNew - Ystar0) / Math.abs(deltaG)).toFixed(2)}</strong> = 1/(1−{PMC}) = {mult.toFixed(2)} ✓
        </div>
      )}
    </div>
  );
};

// ─── Grafico 2: Modello IS-LM completo ──────────────────────────────────────
const ISLMGraph = () => {
  const [fisc, setFisc] = useState(0);   // 0–2: spostamento IS (politica fiscale)
  const [mon, setMon] = useState(0);     // 0–2: spostamento LM (politica monetaria)

  // IS: r = (6 + fisc) − 0.01·Y
  // LM: r = (−4 − mon) + 0.015·Y
  // Equil: Y* = (10 + fisc + mon) / 0.025 = 400 + 40·(fisc+mon)
  //         r* = 2 + 0.6·fisc − 0.4·mon
  const Ystar = 400 + 40 * (fisc + mon);
  const rstar = Math.max(0, 2 + 0.6 * fisc - 0.4 * mon);
  const Ystar0 = 400, rstar0 = 2;

  const W = 500, H = 360;
  const PL = 70, PR = 20, PT = 25, PB = 55;
  const pW = W - PL - PR, pH = H - PT - PB;
  const Ymax = 700, rmax = 8;
  const tx = (y) => PL + y * (pW / Ymax);
  const tr = (r) => PT + pH - r * (pH / rmax);

  // IS da Y=0 a Y=600
  const isR0 = 6 + fisc, isSlope = -0.01;
  const isY_end = Math.min(700, (isR0) / 0.01); // r=0 when Y=isR0/0.01
  const isY_end_clipped = Math.min(isY_end, 680);
  const isR_end = isR0 + isSlope * isY_end_clipped;

  // IS base (per confronto)
  const isY_end0 = Math.min(680, 600);
  const isR_end0 = 6 + isSlope * isY_end0;

  // LM da r=0 verso l'alto
  // r = (-4-mon) + 0.015Y → r=0 at Y=(4+mon)/0.015
  const lmY_start = (4 + mon) / 0.015;
  const lmY_end = Math.min(700, (rmax + 4 + mon) / 0.015);
  const lmR_start = 0;
  const lmR_end = (-4 - mon) + 0.015 * lmY_end;

  // LM base
  const lmY_start0 = 4 / 0.015;
  const lmY_end0 = Math.min(700, (rmax + 4) / 0.015);
  const lmR_end0 = -4 + 0.015 * lmY_end0;

  const showBase = fisc !== 0 || mon !== 0;

  return (
    <div style={S.graphWrap}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={S.graphTitle}>Il Modello IS-LM</div>
          <div style={S.graphSub}>
            Usa i cursori per simulare politica fiscale (IS) e monetaria (LM)
          </div>
        </div>
        <div style={{ textAlign: 'right', fontSize: '0.85rem' }}>
          <div>Y* = <strong style={{ color: 'var(--accent-indigo)' }}>{Ystar.toFixed(0)}</strong></div>
          <div>r* = <strong style={{ color: '#0284c7' }}>{rstar.toFixed(2)}%</strong></div>
        </div>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto', display: 'block' }}>
        {/* Griglia */}
        {[1, 2, 3, 4, 5, 6, 7].map(r => (
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

        {/* IS base (trasparente se spostata) */}
        {showBase && (
          <line x1={tx(0)} y1={tr(6)} x2={tx(isY_end0)} y2={tr(isR_end0)} stroke="#4338ca" strokeWidth="1.5" opacity="0.25" strokeDasharray="6,4" />
        )}

        {/* IS corrente */}
        <line x1={tx(0)} y1={tr(isR0)} x2={tx(isY_end_clipped)} y2={tr(Math.max(0, isR_end))} stroke="#4338ca" strokeWidth="2.5" />
        <text x={tx(isY_end_clipped) + 5} y={tr(Math.max(0.2, isR_end)) + 4} fontSize="13" fill="#4338ca" fontWeight="700">IS</text>

        {/* LM base (trasparente se spostata) */}
        {showBase && (
          <line x1={tx(lmY_start0)} y1={tr(0)} x2={tx(lmY_end0)} y2={tr(lmR_end0)} stroke="#0284c7" strokeWidth="1.5" opacity="0.25" strokeDasharray="6,4" />
        )}

        {/* LM corrente */}
        <line x1={tx(lmY_start)} y1={tr(lmR_start)} x2={tx(lmY_end)} y2={tr(Math.min(rmax, lmR_end))} stroke="#0284c7" strokeWidth="2.5" />
        <text x={tx(lmY_end) - 20} y={tr(Math.min(rmax - 0.3, lmR_end)) - 8} fontSize="13" fill="#0284c7" fontWeight="700">LM</text>

        {/* Punto equilibrio base */}
        {showBase && <circle cx={tx(Ystar0)} cy={tr(rstar0)} r="5" fill="gray" opacity="0.4" />}

        {/* Droplines equilibrio */}
        <line x1={tx(Ystar)} y1={tr(rstar)} x2={tx(Ystar)} y2={tr(0)} stroke="#64748b" strokeWidth="1" strokeDasharray="4,3" />
        <line x1={tx(0)} y1={tr(rstar)} x2={tx(Ystar)} y2={tr(rstar)} stroke="#64748b" strokeWidth="1" strokeDasharray="4,3" />

        {/* Punto equilibrio corrente */}
        <circle cx={tx(Ystar)} cy={tr(rstar)} r="8" fill="#1e293b" />
        <circle cx={tx(Ystar)} cy={tr(rstar)} r="5" fill="white" />

        {/* Labels equilibrio */}
        <text x={tx(Ystar)} y={tr(0) + 28} textAnchor="middle" fontSize="11" fill="#1e293b" fontWeight="700">Y*={Ystar.toFixed(0)}</text>
        <text x={PL - 5} y={tr(rstar) + 4} textAnchor="end" fontSize="11" fill="#1e293b" fontWeight="700">{rstar.toFixed(1)}%</text>

        {/* Etichette assi */}
        <text x={PL + pW / 2} y={H - 6} textAnchor="middle" fontSize="12" fill="var(--text-secondary)">Reddito (Y)</text>
        <text x={13} y={PT + pH / 2} textAnchor="middle" fontSize="12" fill="var(--text-secondary)" transform={`rotate(-90,13,${PT + pH / 2})`}>Tasso d'interesse (r)</text>
      </svg>

      {/* Slider Politica Fiscale */}
      <div style={{ marginTop: '1rem' }}>
        <label style={S.sliderLabel}>
          <span style={{ color: '#4338ca', fontWeight: 600 }}>Politica Fiscale</span> — spostamento IS (es. aumento G): <strong>+{fisc.toFixed(1)}</strong>
        </label>
        <input type="range" min={0} max={2} step={0.1} value={fisc} onChange={e => setFisc(+e.target.value)} style={{ width: '100%', accentColor: '#4338ca' }} />
        <div style={S.sliderRow}><span>neutrale</span><span>↑ espansiva →</span></div>
      </div>

      {/* Slider Politica Monetaria */}
      <div style={{ marginTop: '0.8rem' }}>
        <label style={S.sliderLabel}>
          <span style={{ color: '#0284c7', fontWeight: 600 }}>Politica Monetaria</span> — spostamento LM (es. aumento M/P): <strong>+{mon.toFixed(1)}</strong>
        </label>
        <input type="range" min={0} max={2} step={0.1} value={mon} onChange={e => setMon(+e.target.value)} style={{ width: '100%', accentColor: '#0284c7' }} />
        <div style={S.sliderRow}><span>neutrale</span><span>↑ espansiva →</span></div>
      </div>

      {(fisc !== 0 || mon !== 0) && (
        <div style={{ ...S.resultBox, marginTop: '0.9rem' }}>
          {fisc > 0 && <div>↑G → IS si sposta a destra → Y↑ <strong>+{(40 * fisc).toFixed(0)}</strong>, r↑ (effetto spiazzamento parziale)</div>}
          {mon > 0 && <div>↑M/P → LM si sposta a destra → Y↑ <strong>+{(40 * mon).toFixed(0)}</strong>, r↓ (incentiva investimenti)</div>}
          {fisc > 0 && mon > 0 && <div style={{ color: 'var(--accent-indigo)', fontWeight: 600, marginTop: '0.3rem' }}>Mix di politiche: Y sale di {(40 * (fisc + mon)).toFixed(0)}, effetti opposti su r si compensano</div>}
        </div>
      )}
    </div>
  );
};

// ─── Grafico 3: La Trappola della Liquidità ──────────────────────────────────
const LiquidityTrapGraph = () => {
  const [monExp, setMonExp] = useState(0);

  const W = 460, H = 320;
  const PL = 65, PR = 20, PT = 25, PB = 50;
  const pW = W - PL - PR, pH = H - PT - PB;
  const Ymax = 600, rmax = 6;
  const tx = (y) => PL + y * (pW / Ymax);
  const tr = (r) => PT + pH - r * (pH / rmax);

  // LM a forma di L: tratto orizzontale (trappola) + tratto crescente
  // Trappola: r=0.3 per Y da 100 a 280
  // Normale: r = -0.45 + 0.015*Y per Y > 250
  const trapR = 0.3;
  const trapY_end = 280;
  const normSlope = 0.015;
  const normIntercept = trapR - normSlope * trapY_end; // -3.9

  // IS: r = 4.5 - 0.01*Y
  // Con espansione monetaria (shift a destra): tratto orizzontale si allunga
  const trapY_end_new = trapY_end + monExp * 50;

  // Equil senza trappola: IS ∩ LM_crescente
  // IS: r = 4.5 - 0.01Y; LM: r = normIntercept + normSlope*Y
  // 4.5 - 0.01Y = normIntercept + 0.015Y → Y = (4.5-normIntercept)/0.025
  const Ystar_normal = (4.5 - normIntercept) / 0.025; // ~340 (fuori trappola)
  const rstar_normal = 4.5 - 0.01 * Ystar_normal;

  // Equil nella trappola: IS ∩ LM_orizzontale (se IS interseca tratto piatto)
  const Ystar_trap = (4.5 - trapR) / 0.01; // IS=trapR → Y=(4.5-0.3)/0.01=420? No
  // IS: r=trapR when Y=(4.5-trapR)/0.01 = 4.2/0.01 = 420 → fuori tratto piatto (280)
  // Quindi l'equilibrio è nell'incrocio con LM normale
  const Ystar_eq = Ystar_normal;
  const rstar_eq = rstar_normal;

  // Con espansione monetaria nella trappola: tratto piatto si allunga ma
  // IS non si sposta → equilibrio rimane lo stesso!
  const Ystar_eq_new = monExp > 0 && Ystar_eq < trapY_end_new ? Ystar_eq : Ystar_eq;

  return (
    <div style={S.graphWrap}>
      <div style={S.graphTitle}>La Trappola della Liquidità</div>
      <div style={S.graphSub}>Quando r ≈ 0, la curva LM diventa orizzontale — la politica monetaria perde efficacia</div>

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto', display: 'block' }}>
        {/* Assi */}
        <line x1={PL} y1={PT} x2={PL} y2={PT + pH} stroke="#64748b" strokeWidth="1.5" />
        <line x1={PL} y1={PT + pH} x2={PL + pW} y2={PT + pH} stroke="#64748b" strokeWidth="1.5" />

        {/* Tick r */}
        {[1, 2, 3, 4, 5].map(r => (
          <text key={r} x={PL - 5} y={tr(r) + 4} textAnchor="end" fontSize="10" fill="#94a3b8">{r}%</text>
        ))}
        {[100, 200, 300, 400, 500].map(y => (
          <text key={y} x={tx(y)} y={PT + pH + 16} textAnchor="middle" fontSize="10" fill="#94a3b8">{y}</text>
        ))}

        {/* LM base (tratto piatto) */}
        <line x1={tx(60)} y1={tr(trapR)} x2={tx(trapY_end)} y2={tr(trapR)} stroke="#0284c7" strokeWidth="2.5" />
        {/* LM base (tratto crescente) */}
        <line x1={tx(trapY_end)} y1={tr(trapR)} x2={tx(Ymax - 20)} y2={tr(normIntercept + normSlope * (Ymax - 20))} stroke="#0284c7" strokeWidth="2.5" />
        <text x={tx(Ymax - 30)} y={tr(normIntercept + normSlope * (Ymax - 30)) - 8} fontSize="12" fill="#0284c7" fontWeight="700">LM</text>

        {/* LM con espansione monetaria (tratto piatto si allunga) */}
        {monExp > 0 && (
          <>
            <line x1={tx(60)} y1={tr(trapR)} x2={tx(trapY_end_new)} y2={tr(trapR)} stroke="#0284c7" strokeWidth="2.5" opacity="0.5" strokeDasharray="7,4" />
            <text x={tx(trapY_end + (trapY_end_new - trapY_end) / 2)} y={tr(trapR) - 10} textAnchor="middle" fontSize="10" fill="#0284c7">↑M/P</text>
          </>
        )}

        {/* IS */}
        <line x1={tx(0)} y1={tr(4.5)} x2={tx(450)} y2={tr(0)} stroke="#4338ca" strokeWidth="2.5" />
        <text x={tx(15)} y={tr(4.4) - 8} fontSize="12" fill="#4338ca" fontWeight="700">IS</text>

        {/* Equilibrio */}
        <line x1={tx(Ystar_eq)} y1={tr(rstar_eq)} x2={tx(Ystar_eq)} y2={tr(0)} stroke="#64748b" strokeWidth="1" strokeDasharray="4,3" />
        <line x1={tx(0)} y1={tr(rstar_eq)} x2={tx(Ystar_eq)} y2={tr(rstar_eq)} stroke="#64748b" strokeWidth="1" strokeDasharray="4,3" />
        <circle cx={tx(Ystar_eq)} cy={tr(rstar_eq)} r="7" fill="#1e293b" />
        <circle cx={tx(Ystar_eq)} cy={tr(rstar_eq)} r="4" fill="white" />

        {/* Zona trappola */}
        <rect x={tx(60)} y={tr(trapR) - 1} width={tx(trapY_end) - tx(60)} height="4" fill="#0284c7" opacity="0.3" rx="2" />
        <text x={tx((60 + trapY_end) / 2)} y={tr(trapR) + 18} textAnchor="middle" fontSize="10" fill="#0284c7" fontWeight="600">Trappola della liquidità</text>
        <text x={tx((60 + trapY_end) / 2)} y={tr(trapR) + 30} textAnchor="middle" fontSize="9" fill="#94a3b8">(LM orizzontale)</text>

        {/* Etichette assi */}
        <text x={PL + pW / 2} y={H - 5} textAnchor="middle" fontSize="12" fill="var(--text-secondary)">Reddito (Y)</text>
        <text x={13} y={PT + pH / 2} textAnchor="middle" fontSize="12" fill="var(--text-secondary)" transform={`rotate(-90,13,${PT + pH / 2})`}>Tasso d'interesse (r)</text>

        {/* Label Y* */}
        <text x={tx(Ystar_eq)} y={PT + pH + 28} textAnchor="middle" fontSize="11" fill="#1e293b" fontWeight="700">Y*</text>
      </svg>

      <div style={{ marginTop: '0.8rem' }}>
        <label style={S.sliderLabel}>Espansione monetaria (↑M/P): <strong>{monExp > 0 ? `+${monExp.toFixed(1)} (trappola attiva — nessun effetto)` : 'nessuna'}</strong></label>
        <input type="range" min={0} max={3} step={0.5} value={monExp} onChange={e => setMonExp(+e.target.value)} style={{ width: '100%', accentColor: '#0284c7' }} />
        <div style={S.sliderRow}><span>0</span><span>+3</span></div>
      </div>

      {monExp > 0 && (
        <div style={{ ...S.resultBox, background: 'rgba(220,38,38,0.05)', border: '1px solid rgba(220,38,38,0.15)' }}>
          La banca centrale aumenta M/P: il tratto orizzontale della LM si allunga verso destra, ma <strong>l'intersezione con IS non cambia</strong>. L'equilibrio (Y*, r*) rimane identico — la politica monetaria è inefficace nella trappola della liquidità.
        </div>
      )}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// PAGINA PRINCIPALE
// ═══════════════════════════════════════════════════════════════════════════
export default function Cap12ISLM() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', paddingBottom: '5rem' }}>

      {/* ── HEADER ────────────────────────────────────────────────── */}
      <div className="page-header">
        <div style={{ color: 'var(--accent-cyan)', fontWeight: 600, letterSpacing: '0.1em', fontSize: '0.875rem', marginBottom: '0.5rem' }}>CAPITOLO 12 · TEORIA DEL CICLO ECONOMICO</div>
        <h1 className="page-title gradient-text" style={{ fontSize: '2.8rem', lineHeight: 1.1 }}>La Domanda Aggregata I:<br />Il Modello IS-LM</h1>
        <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', fontSize: '1.05rem', maxWidth: '650px' }}>
          Come interagiscono il mercato dei beni e il mercato della moneta nel breve periodo? Come si trasmettono gli effetti delle politiche fiscale e monetaria sull'economia?
        </p>
      </div>

      {/* ── INTRO: Keynes e la Rivoluzione Keynesiana ─────────────── */}
      <div className="content-section glass-panel" style={{ padding: '2rem 2.5rem', marginBottom: '2rem' }}>
        <h2 style={S.h2}>La Rivoluzione Keynesiana e il Modello IS-LM</h2>
        <p style={S.p}>
          Nel 1936, in piena Grande Depressione, John Maynard Keynes pubblica la <em>Teoria generale dell'occupazione, dell'interesse e della moneta</em>. È una rottura radicale con l'economia classica: Keynes argomenta che i mercati non si aggiustano rapidamente come sostenevano i suoi predecessori, che la domanda aggregata può rimanere depressa a lungo, e che il governo ha sia la capacità che il dovere di intervenire per stabilizzare l'economia.
        </p>
        <p style={S.p}>
          Il problema è che la <em>Teoria Generale</em> è un testo ambizioso ma spesso oscuro. Erano necessari strumenti analitici più precisi per trasformare l'intuizione di Keynes in modelli operativi. John Hicks nel 1937 e Alvin Hansen negli anni successivi sviluppano il modello <strong>IS-LM</strong>, che diventa rapidamente il framework dominante della macroeconomia del dopoguerra e rimane ancora oggi lo strumento principale per analizzare le fluttuazioni di breve periodo.
        </p>
        <p style={S.p}>
          L'idea di fondo è che l'economia di breve periodo ha due mercati chiave che si devono equilibrare simultaneamente:
        </p>
        <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: 1.9 }}>
          <li><strong>Il mercato dei beni</strong>: dove si determina il reddito nazionale Y in funzione della domanda aggregata. Strumento di analisi: la <em>croce keynesiana</em> e la curva IS (Investment-Saving).</li>
          <li><strong>Il mercato della moneta</strong>: dove si determina il tasso di interesse r in funzione di domanda e offerta di moneta reale. Strumento: la teoria della preferenza per la liquidità e la curva LM (Liquidity-Money).</li>
        </ul>
        <p style={S.p}>
          L'intersezione delle due curve — l'equilibrio IS-LM — determina simultaneamente il reddito e il tasso di interesse di breve periodo dell'economia. È questo equilibrio che, nel modello del Capitolo 11, genera la curva di domanda aggregata DA: al variare del livello dei prezzi P, l'equilibrio IS-LM si sposta, tracciando la DA.
        </p>
      </div>

      {/* ── SEZ 12.1: LA CROCE KEYNESIANA ─────────────────────────── */}
      <div className="content-section glass-panel" style={{ padding: '2rem 2.5rem', marginBottom: '2rem' }}>
        <h2 style={S.h2}>12.1 La Croce Keynesiana</h2>
        <p style={S.p}>
          La croce keynesiana è il modello più semplice del mercato dei beni. Descrive come, nel breve periodo, il reddito nazionale si determini in base alla <em>spesa programmata</em> — cioè quanto famiglie, imprese e governo intendono spendere.
        </p>

        <h3 style={S.h3}>La Spesa Programmata</h3>
        <p style={S.p}>
          Distinguiamo due concetti: la <strong>spesa effettiva</strong> (Y), che è sempre uguale al prodotto nazionale per definizione contabile, e la <strong>spesa programmata</strong> (PE, <em>planned expenditure</em>), che è la quantità che gli agenti economici desiderano spendere. Nella contabilità nazionale, gli investimenti in scorte non pianificati fanno sì che spesa effettiva e spesa programmata divergano nel breve periodo.
        </p>
        <p style={S.p}>
          La spesa programmata si compone di tre voci: consumi delle famiglie (C), investimenti delle imprese (Ī — per ora li trattiamo come esogeni) e spesa pubblica (G):
        </p>
        <div style={S.formula}>
          PE = C + Ī + G
        </div>
        <p style={S.p}>
          I consumi seguono la <strong>funzione keynesiana del consumo</strong>: una quota C̄ è autonoma (non dipende dal reddito — dipende dalla ricchezza, dalle aspettative, dalla fiducia), il resto è proporzionale al reddito disponibile (Y − T), dove T sono le imposte nette:
        </p>
        <div style={S.formula}>
          C = C̄ + PMC × (Y − T)
        </div>
        <div style={{ ...S.formula, fontSize: '0.85rem', background: 'rgba(2,132,199,0.05)', border: '1px solid rgba(2,132,199,0.12)' }}>
          <strong>PMC</strong> = Propensione Marginale al Consumo = ΔC / ΔY<br />
          0 &lt; PMC &lt; 1 (tipicamente 0.6–0.8 nei paesi avanzati)
        </div>
        <p style={S.p}>
          Sostituendo nella definizione di PE, la spesa programmata diventa una funzione lineare e crescente del reddito:
        </p>
        <div style={S.formula}>
          PE = C̄ + PMC × (Y − T) + Ī + G<br />
          PE = <span style={{ color: 'var(--accent-indigo)' }}>[C̄ − PMC×T + Ī + G]</span> + PMC × Y<br />
          PE = <span style={{ color: 'var(--accent-indigo)' }}>Spesa Autonoma (A)</span> + PMC × Y
        </div>
        <p style={S.p}>
          La <em>spesa autonoma</em> è la parte di PE che non dipende dal reddito corrente: è l'intercetta della funzione di spesa programmata. Ha pendenza PMC &lt; 1, che la rende meno ripida della retta a 45° (dove PE = Y).
        </p>

        <h3 style={S.h3}>L'Equilibrio nella Croce Keynesiana</h3>
        <p style={S.p}>
          L'equilibrio si verifica quando la spesa programmata è uguale alla spesa effettiva (al prodotto nazionale):
        </p>
        <div style={S.formula}>
          Y = PE &nbsp;&nbsp;&nbsp;&nbsp; ↔ &nbsp;&nbsp;&nbsp;&nbsp; Y = A + PMC × Y
        </div>
        <p style={S.p}>
          Graficamente, l'equilibrio è il punto dove la retta PE interseca la retta a 45° (figura). <strong>Se Y &gt; PE</strong>: le imprese producono più di quanto viene venduto — le scorte si accumulano involontariamente. Le imprese reagiscono tagliando la produzione: Y scende verso l'equilibrio. <strong>Se Y &lt; PE</strong>: le imprese vendono più di quanto producono — le scorte si svuotano. Le imprese aumentano la produzione: Y sale verso l'equilibrio. Il punto E è l'unico punto stabile.
        </p>
        <p style={S.p}>
          Risolvendo per Y*:
        </p>
        <div style={S.formula}>
          Y − PMC × Y = A = C̄ − PMC×T + Ī + G<br />
          Y × (1 − PMC) = A<br />
          <strong>Y* = A / (1 − PMC) = [C̄ − PMC×T + Ī + G] / (1 − PMC)</strong>
        </div>

        <KeynesianCrossGraph />

        <h3 style={S.h3}>Il Moltiplicatore della Spesa Pubblica</h3>
        <p style={S.p}>
          Cosa succede se il governo aumenta la spesa G di un'unità? La spesa autonoma A sale di 1, e il reddito di equilibrio aumenta di <em>più</em> di 1:
        </p>
        <div style={S.formula}>
          ΔY* = ΔG / (1 − PMC) = ΔG × <strong>1/(1−PMC)</strong>
        </div>
        <p style={S.p}>
          Il termine <strong>1/(1−PMC)</strong> è il <em>moltiplicatore della spesa pubblica</em>. È maggiore di 1 perché ogni euro di spesa pubblica genera reddito, che viene in parte consumato (PMC × ΔY), che genera altro reddito, che viene in parte consumato, e così via. Il processo si stabilizza perché PMC &lt; 1 — ogni round d'espansione del consumo è più piccolo del precedente.
        </p>
        <p style={S.p}>
          La somma di questa serie geometrica converge a:
        </p>
        <div style={S.formula}>
          ΔY = ΔG + PMC×ΔG + PMC²×ΔG + PMC³×ΔG + ... = ΔG × Σ PMCⁿ = ΔG × <strong>1/(1−PMC)</strong>
        </div>
        <p style={S.p}>
          Con PMC = 0.6, il moltiplicatore vale 1/(1−0.6) = 2.5: ogni euro aggiuntivo di spesa pubblica espande il reddito di 2,50 euro. Con PMC = 0.75, il moltiplicatore sale a 4.
        </p>

        <h3 style={S.h3}>Il Moltiplicatore delle Imposte</h3>
        <p style={S.p}>
          Un aumento delle imposte T di un'unità riduce il reddito disponibile delle famiglie, che tagliano il consumo di PMC. La spesa autonoma A scende di PMC, e il reddito di equilibrio si riduce di:
        </p>
        <div style={S.formula}>
          ΔY* = −PMC × ΔT / (1 − PMC) = ΔT × <strong>[−PMC/(1−PMC)]</strong>
        </div>
        <p style={S.p}>
          Il moltiplicatore delle imposte è <strong>−PMC/(1−PMC)</strong>, che in valore assoluto è <em>minore</em> del moltiplicatore della spesa pubblica. La ragione è intuitiva: un aumento di G genera direttamente 1 euro di domanda, poi il moltiplicatore amplifica. Un taglio di T equivalente genera solo PMC euro di consumo aggiuntivo al primo round — la differenza è che le famiglie risparmiano la quota (1−PMC) del taglio.
        </p>
        <div style={S.keyBox}>
          <strong>Nota fondamentale:</strong> Il moltiplicatore delle imposte è minore (in valore assoluto) del moltiplicatore della spesa. Un aumento di G = 100 miliardi aumenta Y di 100/(1−PMC). Un taglio di T = 100 miliardi aumenta Y di solo 100×PMC/(1−PMC). Se PMC=0.75: ΔY(G) = 400, ΔY(T) = 300. La spesa diretta è più "potente" dei tagli fiscali.
        </div>

        <h3 style={S.h3}>Gli Stabilizzatori Automatici</h3>
        <p style={S.p}>
          Nella realtà, le imposte non sono fisse: crescono con il reddito (imposte progressive, contributi sociali proporzionali al reddito). Se le tasse valgono tY invece di T fisso, la funzione del consumo diventa C = C̄ + PMC×(1−t)×Y, e il moltiplicatore si riduce a:
        </p>
        <div style={S.formula}>
          Moltiplicatore con imposte sul reddito = 1 / [1 − PMC×(1−t)]
        </div>
        <p style={S.p}>
          Con t = 0.3 e PMC = 0.75: moltiplicatore = 1/(1−0.75×0.7) = 1/0.475 ≈ 2.1 invece di 4. Le imposte sul reddito riducono automaticamente il moltiplicatore, smorzando sia le espansioni che le recessioni senza bisogno di intervento discrezionale — da qui il nome <strong>stabilizzatori automatici</strong>. Quando il PIL cade in recessione, il gettito fiscale cala automaticamente (riducendo l'impatto del calo sul reddito disponibile) e le spese per sussidi di disoccupazione aumentano (sostenendo i consumi). Quando il PIL cresce troppo velocemente, l'aumento del gettito frena automaticamente la domanda.
        </p>

        {/* CASE STUDY: Kennedy */}
        <div style={S.caseCard}>
          <div style={S.caseTitle}>CASO STUDIO — Il Taglio delle Tasse Kennedy-Johnson (1964)</div>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            Quando John F. Kennedy diventa presidente degli Stati Uniti nel 1961, l'economia è in stagnazione. I consiglieri economici di Kennedy — tra cui il premio Nobel James Tobin e Walter Heller, presidenti del <em>Council of Economic Advisers</em> — propongono un taglio massiccio delle tasse sul reddito delle persone fisiche e delle imprese, finanziato a deficit. È la prima applicazione consapevole della teoria keynesiana alla politica economica americana.
          </p>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            Kennedy propone il taglio nel 1962, ma muore prima dell'approvazione. Sarà il successore Lyndon Johnson a firmarlo nel 1964: le aliquote marginali massime scendono dal 91% al 70%, quelle minime dal 20% al 14%. L'effetto è immediato e potente: il PIL cresce del 5,3% nel 1964 e del 6,0% nel 1965. La disoccupazione scende dal 5,7% del 1963 al 3,8% del 1966.
          </p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            Il successo dell'episodio Kennedy viene spesso citato come la conferma empirica più forte del modello keynesiano nella sua versione "pura": riduzione delle imposte → aumento del reddito disponibile → aumento dei consumi → aumento del PIL attraverso il meccanismo del moltiplicatore. Negli anni successivi, il modello IS-LM diventa il framework ufficiale del Tesoro americano.
          </p>
        </div>

        {/* CASE STUDY: Obama */}
        <div style={S.caseCard}>
          <div style={S.caseTitle}>CASO STUDIO — Il Piano di Stimolo Obama (2009) e il Dibattito sui Moltiplicatori</div>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            Nel gennaio 2009, Barack Obama prende possesso della Casa Bianca con l'economia in caduta libera: il PIL crolla al ritmo di oltre il 6% annualizzato, il sistema finanziario è sull'orlo del collasso dopo il fallimento di Lehman Brothers. Obama vara l'<em>American Recovery and Reinvestment Act</em> (ARRA) — un pacchetto da 787 miliardi di dollari tra tagli fiscali (circa 280 miliardi), trasferimenti agli stati (144 miliardi) e spesa diretta federale (363 miliardi).
          </p>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            Il dibattito economico che segue è acceso. L'amministrazione Obama, basandosi su stime del Council of Economic Advisers, prevede un moltiplicatore fiscale di circa 1.5: ogni dollaro di spesa avrebbe generato 1,5 dollari di PIL. I critici, guidati da Robert Barro, argomentano che in condizioni di crisi finanziaria il moltiplicatore potrebbe essere vicino a zero o addirittura negativo (per via dell'equivalenza ricardiana e dei timori sul debito pubblico).
          </p>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            La risposta empirica arriva dagli studi che sfruttano la variazione <em>disaggregata</em> del piano: poiché l'ARRA ha distribuito fondi in modo diverso tra i diversi stati americani (basandosi su formule pre-esistenti non correlate al ciclo economico), è possibile confrontare gli stati che hanno ricevuto più fondi con quelli che ne hanno ricevuti meno, controllando per le condizioni iniziali. Questi studi stimano moltiplicatori nell'intervallo 1.5–2.0 per la spesa diretta, più bassi per i trasferimenti fiscali.
          </p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            Una chiave del dibattito: il moltiplicatore dipende fortemente dalla politica monetaria. Se la banca centrale aumenta i tassi in risposta all'espansione fiscale, l'effetto di spiazzamento sugli investimenti riduce drasticamente il moltiplicatore. Nel 2009, la Fed era al limite inferiore dei tassi (zero lower bound), rendendo il moltiplicatore più alto — il caso più favorevole per la politica fiscale.
          </p>
        </div>

        {/* CASE STUDY: Reagan */}
        <div style={S.caseCard}>
          <div style={S.caseTitle}>CASO STUDIO — La Politica di Reagan (1981–83) e l'Effetto Spiazzamento</div>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            Nel 1981 Ronald Reagan vara l'<em>Economic Recovery Tax Act</em>: taglio del 25% delle aliquote fiscali sui redditi personali in tre anni, unito a riduzioni delle imposte sulle imprese. Contemporaneamente, la Fed di Paul Volcker porta i tassi di riferimento al 20% per spezzare l'inflazione ereditata dagli anni '70.
          </p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            Il risultato è una combinazione da manuale IS-LM: la politica fiscale espansiva (↑G e ↓T) sposta IS verso destra, ma la stretta monetaria sposta LM verso sinistra. L'effetto netto sull'output è limitato nel breve periodo (recessione del 1981-82), ma i tassi di interesse reali salgono a livelli record (oltre il 10% reale). Gli investimenti privati vengono in parte spiazzati (<em>crowding out</em>): il deficit federale, da circa il 2% del PIL nel 1981, sale a quasi il 6% nel 1983. La ripresa del 1983-84 arriva quando la Fed allenta la presa: LM torna a destra, il reddito sale, r scende.
          </p>
        </div>
      </div>

      {/* ── SEZ 12.2: LA CURVA IS ──────────────────────────────────── */}
      <div className="content-section glass-panel" style={{ padding: '2rem 2.5rem', marginBottom: '2rem' }}>
        <h2 style={S.h2}>12.2 Il Mercato dei Beni e la Curva IS</h2>
        <p style={S.p}>
          Nella croce keynesiana abbiamo trattato gli investimenti come esogeni (Ī). Ma nella realtà, gli investimenti dipendono fortemente dal <strong>tasso di interesse reale r</strong>: quando prendere a prestito costa di più, le imprese realizzano meno progetti di investimento. Formalizziamo questa relazione:
        </p>
        <div style={S.formula}>
          I = I(r) &nbsp;&nbsp; con &nbsp;&nbsp; dI/dr &lt; 0
        </div>
        <p style={S.p}>
          Più in concreto, possiamo scrivere <strong>I = Ī − b×r</strong> dove b &gt; 0 misura la sensibilità degli investimenti al tasso di interesse. Un aumento di r di un punto percentuale riduce gli investimenti di b.
        </p>

        <h3 style={S.h3}>La Derivazione della Curva IS</h3>
        <p style={S.p}>
          Sostituendo la funzione di investimento nella croce keynesiana, otteniamo la condizione di equilibrio del mercato dei beni:
        </p>
        <div style={S.formula}>
          Y = C(Y−T) + I(r) + G<br />
          Y = C̄ + PMC×(Y−T) + Ī − b×r + G<br /><br />
          Risolvendo per Y:<br />
          <strong>Y* = [C̄ − PMC×T + Ī − b×r + G] / (1 − PMC)</strong>
        </div>
        <p style={S.p}>
          Questa equazione mostra una relazione inversa tra r e Y*: al crescere di r, gli investimenti si riducono, la spesa programmata cala, e il moltiplicatore porta il reddito di equilibrio verso il basso. Possiamo riscrivere questa relazione come:
        </p>
        <div style={S.formula}>
          r = [C̄ − PMC×T + Ī + G] / b &nbsp;−&nbsp; [(1−PMC)/b] × Y &nbsp;&nbsp;&nbsp; (IS in forma r = f(Y))
        </div>
        <p style={S.p}>
          La <strong>curva IS</strong> è il luogo geometrico di tutte le coppie (Y, r) per le quali il mercato dei beni è in equilibrio. Ha pendenza negativa nello spazio (Y, r): all'aumentare di r, il reddito di equilibrio cade.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', margin: '1rem 0' }}>
          <div style={{ background: 'rgba(67,56,202,0.05)', borderRadius: '10px', padding: '1rem' }}>
            <div style={{ fontWeight: 700, color: 'var(--accent-indigo)', marginBottom: '0.5rem', fontSize: '0.9rem' }}>IS si sposta a DESTRA se:</div>
            <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.2rem', fontSize: '0.88rem', lineHeight: 1.8 }}>
              <li>↑ Spesa pubblica G</li>
              <li>↓ Imposte T</li>
              <li>↑ Fiducia dei consumatori (↑C̄)</li>
              <li>↑ Ottimismo delle imprese (↑Ī)</li>
            </ul>
          </div>
          <div style={{ background: 'rgba(220,38,38,0.04)', borderRadius: '10px', padding: '1rem' }}>
            <div style={{ fontWeight: 700, color: '#dc2626', marginBottom: '0.5rem', fontSize: '0.9rem' }}>IS si sposta a SINISTRA se:</div>
            <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.2rem', fontSize: '0.88rem', lineHeight: 1.8 }}>
              <li>↓ Spesa pubblica G (austerità)</li>
              <li>↑ Imposte T</li>
              <li>↓ Fiducia dei consumatori</li>
              <li>↓ Ottimismo delle imprese</li>
            </ul>
          </div>
        </div>

        <h3 style={S.h3}>La Pendenza della Curva IS</h3>
        <p style={S.p}>
          La pendenza della IS dipende da due parametri: la sensibilità degli investimenti al tasso di interesse (b) e il moltiplicatore (1/(1−PMC)).
        </p>
        <div style={S.formula}>
          Pendenza IS = − (1−PMC) / b
        </div>
        <p style={S.p}>
          La IS è più <em>piatta</em> (più orizzontale) quando: (a) il moltiplicatore è grande (PMC alta), e (b) gli investimenti reagiscono molto al tasso (b grande). In questi casi, una piccola variazione di r genera una grande variazione di Y — la politica monetaria è molto efficace nel spostare il reddito attraverso il canale del tasso di interesse. La IS è più <em>ripida</em> (più verticale) quando gli investimenti sono insensibili al tasso (b piccolo) — in questo caso la politica monetaria è poco efficace, mentre la politica fiscale ha un moltiplicatore pieno senza spiazzamento.
        </p>
      </div>

      {/* ── SEZ 12.3: CURVA LM ──────────────────────────────────────── */}
      <div className="content-section glass-panel" style={{ padding: '2rem 2.5rem', marginBottom: '2rem' }}>
        <h2 style={S.h2}>12.3 La Teoria della Preferenza per la Liquidità e la Curva LM</h2>
        <p style={S.p}>
          La curva LM proviene dall'analisi del mercato della moneta. Per Keynes, la moneta è lo strumento più liquido disponibile — si può usare direttamente per le transazioni senza dover essere convertita. Keynes identifica tre motivi per cui le famiglie e le imprese desiderano detenere moneta liquida:
        </p>
        <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: 1.9 }}>
          <li><strong>Movente transazionale</strong>: serve moneta per effettuare acquisti quotidiani. Quanto più alta è l'attività economica (Y), tanto più moneta serve per le transazioni. La domanda di moneta per transazioni cresce con Y.</li>
          <li><strong>Movente precauzionale</strong>: le famiglie tengono una riserva di liquidità per far fronte a spese impreviste. Anche questa cresce con il reddito.</li>
          <li><strong>Movente speculativo</strong>: la moneta è l'alternativa ai titoli obbligazionari. Quando il tasso di interesse r è alto, le obbligazioni rendono molto: conviene tenere poca moneta e comprare titoli. Quando r è basso, le obbligazioni rendono poco e il rischio di perdita in conto capitale è alto: conviene tenere più moneta. La domanda speculativa di moneta è una funzione decrescente di r.</li>
        </ul>

        <h3 style={S.h3}>La Domanda e l'Offerta di Moneta Reale</h3>
        <p style={S.p}>
          Quello che conta non è la quantità nominale di moneta M, ma la sua quantità in termini reali, cioè il potere d'acquisto M/P. La <strong>domanda di moneta reale</strong> L(r, Y) aumenta con Y e diminuisce con r:
        </p>
        <div style={S.formula}>
          L(r, Y) = k×Y − h×r &nbsp;&nbsp;&nbsp;&nbsp; (k &gt; 0, h &gt; 0)
        </div>
        <p style={S.p}>
          L'<strong>offerta di moneta reale</strong> M/P è sotto il controllo della banca centrale. Nel breve periodo, il livello dei prezzi P è fisso (vedi Cap. 11), quindi la banca centrale controlla M/P modificando M. L'offerta di moneta reale è una quantità fissa determinata esogenamente.
        </p>
        <p style={S.p}>
          L'<strong>equilibrio nel mercato monetario</strong> si verifica quando domanda e offerta di moneta reale si eguagliano:
        </p>
        <div style={S.formula}>
          M/P = L(r, Y) = k×Y − h×r<br /><br />
          Risolvendo per r: &nbsp;&nbsp; <strong>r = (k×Y − M/P) / h = (k/h)×Y − M/(P×h)</strong>
        </div>

        <h3 style={S.h3}>La Derivazione della Curva LM</h3>
        <p style={S.p}>
          La <strong>curva LM</strong> è il luogo geometrico di tutte le coppie (Y, r) per le quali il mercato della moneta è in equilibrio. Ha pendenza positiva nello spazio (Y, r): al crescere di Y, aumenta la domanda di moneta per transazioni; con offerta fissa M/P, il tasso di interesse deve salire per ridurre la domanda speculativa e ristabilire l'equilibrio.
        </p>
        <p style={S.p}>
          Il meccanismo di aggiustamento è il seguente: supponiamo che l'economia si trovi in un punto sopra la curva LM — il tasso di interesse è troppo alto rispetto al reddito. La domanda di moneta (L) è inferiore all'offerta (M/P): le famiglie sono "sovra-liquide" e comprano titoli, facendo salire i prezzi dei titoli e scendere il rendimento. Il tasso di interesse scende fino a raggiungere la curva LM.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', margin: '1rem 0' }}>
          <div style={{ background: 'rgba(2,132,199,0.06)', borderRadius: '10px', padding: '1rem' }}>
            <div style={{ fontWeight: 700, color: '#0284c7', marginBottom: '0.5rem', fontSize: '0.9rem' }}>LM si sposta a DESTRA se:</div>
            <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.2rem', fontSize: '0.88rem', lineHeight: 1.8 }}>
              <li>↑ M/P (banca centrale espande la moneta)</li>
              <li>↓ P (deflazione aumenta M/P reale)</li>
            </ul>
          </div>
          <div style={{ background: 'rgba(220,38,38,0.04)', borderRadius: '10px', padding: '1rem' }}>
            <div style={{ fontWeight: 700, color: '#dc2626', marginBottom: '0.5rem', fontSize: '0.9rem' }}>LM si sposta a SINISTRA se:</div>
            <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.2rem', fontSize: '0.88rem', lineHeight: 1.8 }}>
              <li>↓ M/P (banca centrale restringe la moneta)</li>
              <li>↑ P (inflazione riduce M/P reale)</li>
            </ul>
          </div>
        </div>

        <h3 style={S.h3}>La Pendenza della Curva LM</h3>
        <p style={S.p}>
          La pendenza della LM dipende dalla sensibilità della domanda di moneta al reddito (k) e al tasso di interesse (h):
        </p>
        <div style={S.formula}>
          Pendenza LM = k / h
        </div>
        <p style={S.p}>
          La LM è più <em>ripida</em> quando k è grande (la domanda di moneta per transazioni cresce molto con Y) e h è piccolo (la domanda speculativa reagisce poco al tasso). La LM è più <em>piatta</em> quando h è grande — in questo caso siamo vicino alla trappola della liquidità: le variazioni di r generano grandi variazioni nella domanda speculativa, quindi servono piccoli aggiustamenti di r per equilibrare il mercato al variare di Y.
        </p>
      </div>

      {/* ── SEZ 12.4: EQUILIBRIO IS-LM ──────────────────────────────── */}
      <div className="content-section glass-panel" style={{ padding: '2rem 2.5rem', marginBottom: '2rem' }}>
        <h2 style={S.h2}>12.4 L'Equilibrio IS-LM e le Politiche Economiche</h2>
        <p style={S.p}>
          L'equilibrio di breve periodo dell'economia è determinato dall'intersezione delle curve IS e LM: il punto (Y*, r*) dove simultaneamente il mercato dei beni e il mercato della moneta sono in equilibrio. Usa il grafico interattivo per esplorare gli effetti delle politiche economiche.
        </p>

        <ISLMGraph />

        <h3 style={S.h3}>La Politica Fiscale nel Modello IS-LM</h3>
        <p style={S.p}>
          Un aumento della spesa pubblica G sposta la curva IS verso destra (per ogni livello di r, il reddito di equilibrio del mercato dei beni è più alto). Il nuovo equilibrio IS-LM ha <strong>sia Y più alto che r più alto</strong>.
        </p>
        <p style={S.p}>
          L'aumento di r non è neutro: penalizza gli investimenti privati, che si riducono. Questo è l'<strong>effetto di spiazzamento</strong> (<em>crowding out</em>): parte della domanda aggiuntiva generata dall'espansione fiscale viene "spiazzata" dalla riduzione degli investimenti privati indotta dall'aumento del tasso. Il moltiplicatore IS-LM è quindi <em>inferiore</em> al moltiplicatore della pura croce keynesiana.
        </p>
        <div style={S.formula}>
          Croce keynesiana: ΔY = ΔG × 1/(1−PMC) &nbsp;&nbsp; (senza risposta dei tassi)<br />
          IS-LM: ΔY &lt; ΔG × 1/(1−PMC) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (effetto spiazzamento riduce Y)
        </div>
        <p style={S.p}>
          Lo spiazzamento è totale (<em>full crowding out</em>) solo nel caso estremo in cui la LM è verticale (domanda di moneta insensibile al tasso, h=0) — in quel caso l'aumento di G non cambia Y, solo r. Nella realtà, lo spiazzamento è parziale.
        </p>

        <h3 style={S.h3}>La Politica Monetaria nel Modello IS-LM</h3>
        <p style={S.p}>
          Un aumento dell'offerta di moneta M/P sposta la curva LM verso destra e verso il basso (per ogni livello di Y, il mercato monetario si equilibra a un tasso di interesse più basso). Il nuovo equilibrio IS-LM ha <strong>Y più alto e r più basso</strong>.
        </p>
        <p style={S.p}>
          Il meccanismo di trasmissione della politica monetaria nel modello IS-LM è preciso:
        </p>
        <ol style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', lineHeight: 1.9, marginBottom: '1rem' }}>
          <li>La banca centrale aumenta M/P.</li>
          <li>Con Y invariato nel brevissimo periodo, il tasso di interesse deve scendere per ristabilire l'equilibrio nel mercato monetario (la LM si sposta in basso).</li>
          <li>Il tasso di interesse più basso stimola gli investimenti privati: I aumenta.</li>
          <li>L'aumento degli investimenti aumenta la spesa programmata PE e, attraverso il moltiplicatore, aumenta Y.</li>
          <li>L'aumento di Y genera domanda di moneta aggiuntiva, spingendo r leggermente verso l'alto rispetto al punto 2, fino al nuovo equilibrio IS-LM.</li>
        </ol>
        <p style={S.p}>
          Questo canale — da M/P a r a I a Y — si chiama <strong>canale del tasso di interesse</strong> ed è il meccanismo di trasmissione principale nel modello IS-LM. Nella realtà esistono altri canali (credito, tasso di cambio, prezzi degli asset) che il modello base non cattura.
        </p>

        <h3 style={S.h3}>Il Mix di Politiche</h3>
        <p style={S.p}>
          Le curve IS e LM possono spostarsi contemporaneamente se vengono combinate politiche fiscale e monetaria. Questo permette al policy-maker di "disaccoppiare" gli effetti su Y e su r:
        </p>
        <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', lineHeight: 1.9, marginBottom: '1rem' }}>
          <li><strong>Espansione fiscale + restrizione monetaria</strong>: Y rimane invariato, r sale. Questo mix è stato usato dagli USA negli anni '80 (Reagan + Volcker): deficit fiscale alto con tassi reali altissimi.</li>
          <li><strong>Restrizione fiscale + espansione monetaria</strong>: Y rimane invariato, r scende. Questo favorisce gli investimenti privati a scapito della spesa pubblica — "spiazzamento inverso" o <em>crowding in</em>. È la ricetta standard del FMI: ridurre il deficit e compensare con la politica monetaria.</li>
          <li><strong>Espansione fiscale + espansione monetaria</strong>: Y sale molto, effetto su r ambiguo. Caso della politica Anti-Covid 2020-21 in molti paesi.</li>
        </ul>

        <h3 style={S.h3}>La Moltiplicazione dell'Impatto nel Modello IS-LM</h3>
        <p style={S.p}>
          Possiamo ricavare algebricamente il moltiplicatore IS-LM. Dati IS: Y = (A − b×r) / (1−PMC) e LM: r = k×Y/h − M/(P×h), sostituiamo r dalla LM nella IS:
        </p>
        <div style={S.formula}>
          Y = (A − b × [kY/h − M/(Ph)]) / (1−PMC)<br />
          Y × (1−PMC) = A − bk/h × Y + bM/(Ph)<br />
          Y × [(1−PMC) + bk/h] = A + bM/(Ph)<br /><br />
          <strong>Moltiplicatore IS-LM = ΔY/ΔG = 1 / [(1−PMC) + bk/h]</strong>
        </div>
        <p style={S.p}>
          Confronto: il moltiplicatore della croce keynesiana è 1/(1−PMC). Quello IS-LM aggiunge al denominatore il termine bk/h &gt; 0, che riflette l'effetto di spiazzamento: quanto più gli investimenti reagiscono ai tassi (b alto) e quanto meno il mercato monetario assorbe l'extra-domanda abbassando il tasso (h piccolo, k grande), tanto più forte è lo spiazzamento e tanto più piccolo è il moltiplicatore.
        </p>
      </div>

      {/* ── SEZ 12.5: TRAPPOLA DELLA LIQUIDITÀ ────────────────────── */}
      <div className="content-section glass-panel" style={{ padding: '2rem 2.5rem', marginBottom: '2rem' }}>
        <h2 style={S.h2}>12.5 La Trappola della Liquidità</h2>
        <p style={S.p}>
          Il modello IS-LM assume una curva LM crescente. Ma Keynes identifica un caso limite importantissimo: quando il tasso di interesse è già vicino a zero, moneta e titoli obbligazionari diventano quasi perfetti sostituti — i titoli non rendono quasi nulla, e c'è il rischio di perdite in conto capitale se i tassi risalgono. In queste condizioni, gli agenti economici sono disposti ad assorbire qualsiasi quantità di moneta senza che il tasso di interesse si muova: la curva LM diventa orizzontale nel suo tratto inferiore.
        </p>
        <p style={S.p}>
          Questa zona si chiama <strong>trappola della liquidità</strong> (<em>liquidity trap</em>) e ha un'implicazione devastante per la politica monetaria: se l'equilibrio IS-LM si trova nel tratto orizzontale della LM, un aumento di M/P sposta semplicemente il tratto piatto verso destra senza spostare l'intersezione con IS. Il tasso di interesse rimane invariato, gli investimenti rimangono invariati, e il PIL non cambia. La politica monetaria è completamente inefficace.
        </p>

        <LiquidityTrapGraph />

        <h3 style={S.h3}>Esempi Storici di Trappola della Liquidità</h3>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', margin: '1rem 0' }}>
          <div style={S.caseCard}>
            <div style={S.caseTitle}>Giappone — il "Decennio Perduto" (1990–2000)</div>
            <p style={{ ...S.p, fontSize: '0.88rem', marginBottom: 0 }}>
              Dopo il crollo del mercato azionario e immobiliare del 1989-90, il Giappone cade in una deflazione persistente. La Bank of Japan abbassa i tassi allo 0% e poi li azzera, ma l'economia non reagisce. Le banche, piene di crediti inesigibili, non prestano. Gli investimenti rimangono depressi. La trappola della liquidità è in azione per più di un decennio. La politica fiscale — enormi deficit pubblici — diventa l'unico strumento disponibile, ma genera un debito pubblico che supera il 100% del PIL.
            </p>
          </div>
          <div style={S.caseCard}>
            <div style={S.caseTitle}>USA ed Europa — Post-2008 e Zero Lower Bound</div>
            <p style={{ ...S.p, fontSize: '0.88rem', marginBottom: 0 }}>
              Dopo la crisi finanziaria del 2008, la Federal Reserve abbassa i tassi allo 0%-0.25% e li mantiene lì fino al 2015. La BCE li porta allo 0% nel 2016 e li porta addirittura negativi. In queste condizioni, lo strumento tradizionale della politica monetaria (il tasso di riferimento) perde efficacia. Le banche centrali ricorrono al <em>quantitative easing</em> — acquisto diretto di titoli di stato e obbligazioni corporate — per aggirare la trappola e stimolare direttamente le condizioni finanziarie.
            </p>
          </div>
        </div>

        <h3 style={S.h3}>La Politica Fiscale nella Trappola della Liquidità</h3>
        <p style={S.p}>
          Nella trappola della liquidità, la politica fiscale riacquista piena efficacia: un aumento di G sposta IS a destra, il reddito sale, ma il tasso di interesse non aumenta (siamo sul tratto orizzontale della LM). Non c'è nessun effetto di spiazzamento: il moltiplicatore IS-LM diventa uguale al moltiplicatore della pura croce keynesiana. Questo è esattamente il caso in cui Keynes stesso vedeva la politica fiscale come lo strumento principale di stabilizzazione — le sue argomentazioni erano state scritte pensando proprio a un'economia in trappola della liquidità durante la Grande Depressione.
        </p>
      </div>

      {/* ── SEZ 12.6: DALLA IS-LM ALLA DA ──────────────────────────── */}
      <div className="content-section glass-panel" style={{ padding: '2rem 2.5rem', marginBottom: '2rem' }}>
        <h2 style={S.h2}>12.6 Dal Modello IS-LM alla Curva di Domanda Aggregata</h2>
        <p style={S.p}>
          Il modello IS-LM completa la parte "domanda" del modello DA-OA del Capitolo 11. Vediamo come le due analisi si raccordano.
        </p>
        <p style={S.p}>
          La curva IS non dipende dal livello dei prezzi P (la spesa in termini reali dipende dal reddito reale, non dal livello dei prezzi). La curva LM, invece, <em>dipende</em> da P: per una data offerta nominale di moneta M, un aumento di P riduce l'offerta reale M/P, spostando la LM verso sinistra (in alto).
        </p>
        <p style={S.p}>
          Consideriamo cosa succede al variare di P, mantenendo M costante:
        </p>
        <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', lineHeight: 1.9, marginBottom: '1rem' }}>
          <li><strong>↑ P</strong> → ↓ M/P → LM si sposta a sinistra → r* sale, Y* cade</li>
          <li><strong>↓ P</strong> → ↑ M/P → LM si sposta a destra → r* scende, Y* sale</li>
        </ul>
        <p style={S.p}>
          Mettendo in relazione P e Y*, otteniamo la curva di <strong>domanda aggregata DA</strong>: una relazione inversa tra livello dei prezzi e reddito di equilibrio aggregato. La DA è la proiezione dell'equilibrio IS-LM nello spazio (Y, P).
        </p>
        <div style={S.formula}>
          IS-LM → DA<br />
          ↑P → ↓M/P → LM sinistra → ↓Y* &nbsp;&nbsp;&nbsp;&nbsp; (punto sulla DA con P alto, Y basso)<br />
          ↓P → ↑M/P → LM destra → ↑Y* &nbsp;&nbsp;&nbsp;&nbsp; (punto sulla DA con P basso, Y alto)
        </div>
        <p style={S.p}>
          Le politiche che spostano IS o LM spostano anche la DA: un aumento di G, o un aumento di M, spostano la DA verso destra — per ogni livello di P, l'economia produce di più.
        </p>
        <div style={S.keyBox}>
          <strong>Il raccordo IS-LM ↔ DA-OA:</strong> Il Capitolo 11 ha introdotto la DA come una curva che riassume la domanda di breve periodo. Il Capitolo 12 ne rivela i fondamenti microeconomici: la DA è il luogo dei punti di equilibrio IS-LM al variare di P. Le politiche fiscali spostano IS → spostano DA. Le politiche monetarie spostano LM → spostano DA.
        </div>
      </div>

      {/* ── SINTESI ────────────────────────────────────────────────── */}
      <div className="content-section glass-panel" style={{ padding: '2rem 2.5rem', marginBottom: '2rem' }}>
        <h2 style={S.h2}>Sintesi</h2>
        <ol style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', lineHeight: 2, marginBottom: '1rem' }}>
          <li>La <strong>croce keynesiana</strong> mostra come, nel mercato dei beni, il reddito di equilibrio si determina all'intersezione tra spesa programmata PE e retta a 45°. Il moltiplicatore 1/(1−PMC) amplifica l'effetto delle variazioni di G o T sul PIL.</li>
          <li>La <strong>curva IS</strong> deriva dalla croce keynesiana quando si include la dipendenza degli investimenti dal tasso di interesse. È inclinata negativamente: maggiore r → minori I → minore Y di equilibrio.</li>
          <li>La <strong>teoria della preferenza per la liquidità</strong> (Keynes) spiega la domanda di moneta: cresce con Y (movente transazionale) e decresce con r (movente speculativo). L'equilibrio nel mercato monetario genera la curva LM, inclinata positivamente.</li>
          <li>Il <strong>modello IS-LM</strong> determina simultaneamente Y* e r*. La politica fiscale sposta IS (↑G → IS destra → Y↑, r↑ con parziale crowding out). La politica monetaria sposta LM (↑M/P → LM destra → Y↑, r↓).</li>
          <li>La <strong>trappola della liquidità</strong> si verifica quando r ≈ 0 e la LM è orizzontale. In quel caso la politica monetaria è inefficace e il moltiplicatore della politica fiscale raggiunge il suo valore massimo 1/(1−PMC).</li>
          <li>Il modello IS-LM è il fondamento della <strong>curva DA</strong>: al variare di P, la LM si sposta (perché P modifica M/P), e l'equilibrio IS-LM genera coppie (Y, P) che descrivono la DA.</li>
        </ol>
      </div>

    </div>
  );
}
