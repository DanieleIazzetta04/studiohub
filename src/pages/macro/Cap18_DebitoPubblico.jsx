import { useState, useMemo } from 'react';

// ─── Stili condivisi (coerenti con Cap17) ───────────────────────────────────
const S = {
  section: { marginBottom: '3rem' },
  h2: { fontSize: '1.6rem', color: 'var(--accent-indigo)', marginBottom: '1rem', marginTop: '2.5rem', fontFamily: 'Outfit, sans-serif', fontWeight: 700 },
  h3: { fontSize: '1.2rem', color: 'var(--text-primary)', marginTop: '1.8rem', marginBottom: '0.7rem', fontFamily: 'Outfit, sans-serif', fontWeight: 600, borderBottom: '1px solid var(--border-color)', paddingBottom: '0.4rem' },
  h4: { fontSize: '1.05rem', color: 'var(--text-primary)', marginTop: '1.3rem', marginBottom: '0.5rem', fontFamily: 'Outfit, sans-serif', fontWeight: 600 },
  p: { color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1rem', fontSize: '1.02rem' },
  formula: { background: 'rgba(67,56,202,0.06)', border: '1px solid rgba(67,56,202,0.15)', borderRadius: '10px', padding: '1rem 1.5rem', margin: '1.2rem 0', fontFamily: 'monospace', fontSize: '1rem', color: 'var(--text-primary)', textAlign: 'center' },
  formulaLabel: { fontSize: '0.78rem', fontWeight: 600, color: 'var(--accent-indigo)', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.4rem', textAlign: 'center' },
  graphWrap: { background: 'rgba(2,132,199,0.04)', border: '1px solid rgba(2,132,199,0.12)', borderRadius: '12px', padding: '1.5rem', margin: '1.5rem 0' },
  graphTitle: { fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.3rem', fontSize: '1rem' },
  graphSub: { fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1rem' },
  sliderLabel: { fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'block', marginBottom: '0.4rem' },
  sliderRow: { display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '2px' },
  resultBox: { marginTop: '0.8rem', padding: '0.8rem 1rem', background: 'rgba(67,56,202,0.06)', borderRadius: '8px', fontSize: '0.9rem', color: 'var(--text-primary)' },
  caseCard: { background: 'rgba(255,255,255,0.7)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '1.25rem 1.5rem', margin: '1.2rem 0' },
  caseTitle: { fontWeight: 700, color: 'var(--accent-indigo)', marginBottom: '0.4rem', fontSize: '0.95rem' },
  keyBox: { background: 'rgba(67,56,202,0.05)', border: '1px solid rgba(67,56,202,0.15)', borderLeft: '4px solid var(--accent-indigo)', borderRadius: '0 10px 10px 0', padding: '0.9rem 1.2rem', margin: '1rem 0' },
  table: { width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem', marginBottom: '1rem' },
  th: { background: 'rgba(67,56,202,0.08)', padding: '0.5rem 0.7rem', textAlign: 'left', fontWeight: 700, color: 'var(--text-primary)', borderBottom: '2px solid rgba(67,56,202,0.2)' },
  td: { padding: '0.45rem 0.7rem', borderBottom: '1px solid var(--border-color)', color: 'var(--text-secondary)' },
};

// ───────────────────────────────────────────────────────────────────────────
// COMPONENTE 1: Grafico delle 4 situazioni di sostenibilità (statico)
// b_t = d + ((1+r)/(1+g)) · b_{t-1} → retta con intercetta d e pendenza (1+r)/(1+g)
// Bisettrice b_t = b_{t-1} con pendenza 1
// ───────────────────────────────────────────────────────────────────────────
const FourCasesGraph = ({ d, r, g, b0, title, description, variant }) => {
  const W = 380, H = 320;
  const PL = 50, PR = 20, PT = 25, PB = 45;
  const pW = W - PL - PR, pH = H - PT - PB;

  // Range del grafico
  const bMax = Math.max(3, b0 * 2.5, Math.abs(d) * 8);
  const bMin = variant === 'case3' || variant === 'case4' ? -bMax * 0.3 : 0;
  const xRange = bMax - bMin;

  const tx = (b) => PL + ((b - bMin) / xRange) * pW;
  const ty = (b) => PT + pH - ((b - bMin) / xRange) * pH;

  // Bisettrice b_t = b_{t-1} (intercetta 0, pendenza 1)
  const biPts = `${tx(bMin)},${ty(bMin)} ${tx(bMax)},${ty(bMax)}`;

  // Retta di sostenibilità b_t = d + ((1+r)/(1+g)) · b_{t-1}
  const slope = (1 + r) / (1 + g);
  const lineFn = (bp) => d + slope * bp;
  const linePts = `${tx(bMin)},${ty(lineFn(bMin))} ${tx(bMax)},${ty(lineFn(bMax))}`;

  // Equilibrio b* = d / (1 - slope) se slope != 1
  const bStar = Math.abs(slope - 1) > 0.001 ? d / (1 - slope) : null;

  // Traiettoria dinamica: a partire da b0, alterniamo passi verticali (sulla retta) e orizzontali (sulla bisettrice)
  const trajectory = [];
  let bp = b0;
  for (let i = 0; i < 8; i++) {
    const bn = lineFn(bp);
    // Verticale: da (bp, bp) o (bp, prev_bn) a (bp, bn)
    trajectory.push({ x1: tx(bp), y1: i === 0 ? ty(bp) : ty(bp), x2: tx(bp), y2: ty(bn), kind: 'v' });
    // Orizzontale: da (bp, bn) a (bn, bn) sulla bisettrice
    trajectory.push({ x1: tx(bp), y1: ty(bn), x2: tx(bn), y2: ty(bn), kind: 'h' });
    if (Math.abs(bn) > bMax * 1.5) break;
    if (bStar !== null && Math.abs(bn - bStar) < 0.02) break;
    bp = bn;
  }

  return (
    <div style={{ background: 'rgba(2,132,199,0.04)', border: '1px solid rgba(2,132,199,0.12)', borderRadius: '12px', padding: '1rem 1rem 0.6rem', textAlign: 'center' }}>
      <div style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.2rem', fontSize: '0.95rem' }}>{title}</div>
      <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>{description}</div>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto', maxWidth: '380px', display: 'block', margin: '0 auto' }}>
        {/* Griglia */}
        <line x1={PL} y1={ty(0)} x2={PL + pW} y2={ty(0)} stroke="#94a3b8" strokeWidth="0.8" />
        <line x1={tx(0)} y1={PT} x2={tx(0)} y2={PT + pH} stroke="#94a3b8" strokeWidth="0.8" />
        {/* Assi */}
        <line x1={PL} y1={PT + pH} x2={PL + pW} y2={PT + pH} stroke="#64748b" strokeWidth="1.2" />
        <line x1={PL} y1={PT} x2={PL} y2={PT + pH} stroke="#64748b" strokeWidth="1.2" />
        {/* Bisettrice */}
        <polyline points={biPts} fill="none" stroke="#2563eb" strokeWidth="1.6" />
        <text x={tx(bMax) - 5} y={ty(bMax) + 14} fontSize="10" fill="#2563eb" textAnchor="end" fontStyle="italic">b_t = b_t-1</text>
        {/* Retta sostenibilità */}
        <polyline points={linePts} fill="none" stroke="#dc2626" strokeWidth="2" />
        <text x={tx(bMax) - 5} y={ty(lineFn(bMax)) - 6} fontSize="10" fill="#dc2626" textAnchor="end" fontStyle="italic">b_t = d + (1+r)/(1+g)·b_t-1</text>
        {/* Punto b0 */}
        <circle cx={tx(b0)} cy={ty(b0)} r="3.5" fill="#0d9488" />
        <text x={tx(b0)} y={ty(0) + 16} fontSize="10" fill="#0d9488" textAnchor="middle" fontWeight="bold">b₀</text>
        {/* Punto b* se esiste e visibile */}
        {bStar !== null && bStar >= bMin && bStar <= bMax && (
          <>
            <circle cx={tx(bStar)} cy={ty(bStar)} r="3.5" fill="#9333ea" />
            <text x={tx(bStar)} y={ty(0) + 16} fontSize="10" fill="#9333ea" textAnchor="middle" fontWeight="bold">b*</text>
            <line x1={tx(bStar)} y1={PT + pH} x2={tx(bStar)} y2={ty(bStar)} stroke="#9333ea" strokeWidth="0.6" strokeDasharray="3,2" />
          </>
        )}
        {/* Traiettoria */}
        {trajectory.map((seg, i) => (
          <line key={i} x1={seg.x1} y1={seg.y1} x2={seg.x2} y2={seg.y2} stroke="#0d9488" strokeWidth="1.4" markerEnd="url(#arrow)" opacity="0.75" />
        ))}
        <defs>
          <marker id="arrow" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto">
            <polygon points="0,0 6,3 0,6" fill="#0d9488" />
          </marker>
        </defs>
        {/* Etichette assi */}
        <text x={PL + pW / 2} y={H - 8} fontSize="11" fill="#64748b" textAnchor="middle" fontStyle="italic">b_t-1 (debito/PIL periodo precedente)</text>
        <text transform={`translate(14, ${PT + pH / 2}) rotate(-90)`} fontSize="11" fill="#64748b" textAnchor="middle" fontStyle="italic">b_t (debito/PIL corrente)</text>
      </svg>
    </div>
  );
};

// ───────────────────────────────────────────────────────────────────────────
// COMPONENTE 2: Simulatore interattivo della traiettoria del debito
// ───────────────────────────────────────────────────────────────────────────
const DebtPathSimulator = () => {
  const [d, setD] = useState(0.02);   // disavanzo primario / PIL (2%)
  const [r, setR] = useState(0.04);   // tasso di interesse reale (4%)
  const [g, setG] = useState(0.02);   // tasso di crescita del PIL (2%)
  const [b0, setB0] = useState(1.0);  // debito/PIL iniziale (100%)

  const slope = (1 + r) / (1 + g);
  const bStar = useMemo(() => {
    if (Math.abs(slope - 1) < 0.001) return null;
    return d / (1 - slope);
  }, [d, r, g, slope]);

  // Genera traiettoria 30 periodi
  const path = useMemo(() => {
    const arr = [{ t: 0, b: b0 }];
    let bp = b0;
    for (let t = 1; t <= 30; t++) {
      bp = d + slope * bp;
      arr.push({ t, b: bp });
      if (!isFinite(bp) || Math.abs(bp) > 50) break;
    }
    return arr;
  }, [d, r, g, b0, slope]);

  // Classificazione del caso
  let scenario, color;
  if (d > 0 && r > g) { scenario = 'Caso 1 — Non sostenibilità'; color = '#dc2626'; }
  else if (d > 0 && r < g) { scenario = 'Caso 2 — Sostenibilità con b* stabile'; color = '#16a34a'; }
  else if (d <= 0 && r < g) { scenario = 'Caso 3 — Sostenibilità sicura (avanzo + g>r)'; color = '#16a34a'; }
  else if (d <= 0 && r > g) { scenario = 'Caso 4 — Equilibrio instabile (punti di fuga)'; color = '#ea580c'; }
  else { scenario = 'Caso limite (r = g)'; color = '#6b7280'; }

  // Grafico traiettoria nel tempo
  const W = 580, H = 320;
  const PL = 55, PR = 20, PT = 25, PB = 45;
  const pW = W - PL - PR, pH = H - PT - PB;
  const tMax = path.length - 1;
  const bMaxPath = Math.max(...path.map(p => p.b), b0 * 1.5);
  const bMinPath = Math.min(...path.map(p => p.b), 0);
  const bRange = bMaxPath - bMinPath;

  const tx = (t) => PL + (t / tMax) * pW;
  const ty = (b) => PT + pH - ((b - bMinPath) / bRange) * pH;

  const pts = path.map(p => `${tx(p.t).toFixed(1)},${ty(p.b).toFixed(1)}`).join(' ');

  return (
    <div style={S.graphWrap}>
      <div style={S.graphTitle}>Simulatore interattivo — Dinamica del rapporto debito/PIL</div>
      <div style={S.graphSub}>Imposta i parametri e osserva la traiettoria sui 30 periodi successivi</div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
        <div>
          <label style={S.sliderLabel}>Disavanzo primario d = <strong>{(d * 100).toFixed(1)}%</strong> del PIL</label>
          <input type="range" min="-0.05" max="0.08" step="0.005" value={d} onChange={e => setD(parseFloat(e.target.value))} style={{ width: '100%' }} />
          <div style={S.sliderRow}><span>-5% (avanzo)</span><span>+8% (disavanzo)</span></div>
        </div>
        <div>
          <label style={S.sliderLabel}>Tasso di interesse reale r = <strong>{(r * 100).toFixed(1)}%</strong></label>
          <input type="range" min="0" max="0.10" step="0.005" value={r} onChange={e => setR(parseFloat(e.target.value))} style={{ width: '100%' }} />
          <div style={S.sliderRow}><span>0%</span><span>10%</span></div>
        </div>
        <div>
          <label style={S.sliderLabel}>Tasso crescita PIL g = <strong>{(g * 100).toFixed(1)}%</strong></label>
          <input type="range" min="-0.02" max="0.08" step="0.005" value={g} onChange={e => setG(parseFloat(e.target.value))} style={{ width: '100%' }} />
          <div style={S.sliderRow}><span>-2%</span><span>+8%</span></div>
        </div>
        <div>
          <label style={S.sliderLabel}>Debito iniziale b₀ = <strong>{(b0 * 100).toFixed(0)}%</strong> del PIL</label>
          <input type="range" min="0.2" max="2.5" step="0.05" value={b0} onChange={e => setB0(parseFloat(e.target.value))} style={{ width: '100%' }} />
          <div style={S.sliderRow}><span>20%</span><span>250%</span></div>
        </div>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto', display: 'block' }}>
        {/* Griglia orizzontale */}
        {[0, 0.5, 1, 1.5, 2, 3, 5].filter(v => v >= bMinPath - 0.1 && v <= bMaxPath + 0.1).map(v => (
          <g key={v}>
            <line x1={PL} y1={ty(v)} x2={PL + pW} y2={ty(v)} stroke="rgba(0,0,0,0.06)" />
            <text x={PL - 5} y={ty(v) + 3} fontSize="10" fill="#94a3b8" textAnchor="end">{(v * 100).toFixed(0)}%</text>
          </g>
        ))}
        {/* Asse zero */}
        {bMinPath < 0 && (
          <line x1={PL} y1={ty(0)} x2={PL + pW} y2={ty(0)} stroke="#94a3b8" strokeWidth="1" strokeDasharray="3,3" />
        )}
        {/* Linea b* se esiste */}
        {bStar !== null && bStar >= bMinPath && bStar <= bMaxPath && (
          <>
            <line x1={PL} y1={ty(bStar)} x2={PL + pW} y2={ty(bStar)} stroke="#9333ea" strokeWidth="1.2" strokeDasharray="5,3" />
            <text x={PL + pW - 5} y={ty(bStar) - 4} fontSize="10" fill="#9333ea" textAnchor="end" fontWeight="bold">b* = {(bStar * 100).toFixed(1)}%</text>
          </>
        )}
        {/* Assi */}
        <line x1={PL} y1={PT} x2={PL} y2={PT + pH} stroke="#64748b" strokeWidth="1.2" />
        <line x1={PL} y1={PT + pH} x2={PL + pW} y2={PT + pH} stroke="#64748b" strokeWidth="1.2" />
        {/* Tick periodi */}
        {[0, 5, 10, 15, 20, 25, 30].map(t => (
          <g key={t}>
            <line x1={tx(t)} y1={PT + pH} x2={tx(t)} y2={PT + pH + 4} stroke="#94a3b8" />
            <text x={tx(t)} y={PT + pH + 16} fontSize="10" fill="#94a3b8" textAnchor="middle">t={t}</text>
          </g>
        ))}
        {/* Traiettoria */}
        <polyline points={pts} fill="none" stroke={color} strokeWidth="2.5" />
        {path.map((p, i) => i % 3 === 0 && (
          <circle key={i} cx={tx(p.t)} cy={ty(p.b)} r="2.5" fill={color} />
        ))}
        {/* Etichette */}
        <text x={PL + pW / 2} y={H - 8} fontSize="11" fill="#64748b" textAnchor="middle" fontStyle="italic">Periodi</text>
        <text transform={`translate(14, ${PT + pH / 2}) rotate(-90)`} fontSize="11" fill="#64748b" textAnchor="middle" fontStyle="italic">Debito / PIL (b_t)</text>
      </svg>

      <div style={{ ...S.resultBox, borderLeft: `4px solid ${color}` }}>
        <strong style={{ color }}>{scenario}</strong>
        <div style={{ marginTop: '0.4rem', fontSize: '0.88rem' }}>
          Pendenza retta: <strong>(1+r)/(1+g) = {slope.toFixed(3)}</strong>
          {' · '}
          Differenza r−g: <strong>{((r - g) * 100).toFixed(1)} pp</strong>
          {bStar !== null && (
            <>
              {' · '}
              Equilibrio teorico b*: <strong>{(bStar * 100).toFixed(1)}% del PIL</strong>
            </>
          )}
        </div>
        <div style={{ marginTop: '0.4rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          b₀ = {(b0 * 100).toFixed(0)}% → dopo 10 anni: {path[10] ? (path[10].b * 100).toFixed(1) + '%' : '—'}
          {' · '}
          dopo 30 anni: {path[path.length - 1] ? (path[path.length - 1].b * 100).toFixed(1) + '%' : '—'}
        </div>
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// PAGINA PRINCIPALE
// ═══════════════════════════════════════════════════════════════════════════
export default function Cap18DebitoPubblico() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', paddingBottom: '5rem' }}>

      <div className="page-header">
        <div style={{ color: 'var(--accent-cyan)', fontWeight: 600, letterSpacing: '0.1em', fontSize: '0.875rem', marginBottom: '0.5rem' }}>CAPITOLO 18 · POLITICA MACROECONOMICA</div>
        <h1 className="page-title gradient-text" style={{ fontSize: '2.6rem', lineHeight: 1.1 }}>La Dinamica di Sostenibilità<br />del Debito Pubblico</h1>
        <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', fontSize: '1.05rem', maxWidth: '680px' }}>
          Quando un debito pubblico è "sostenibile"? Come si comporta il rapporto debito/PIL nel tempo? Cosa decide tra una traiettoria esplosiva e una stabile? Il framework analitico classico in quattro casi.
        </p>
      </div>

      <div className="content-section glass-panel" style={{ padding: '2rem 2.5rem', marginBottom: '2rem' }}>
        <p style={S.p}>
          La sostenibilità del debito pubblico è una delle questioni più rilevanti della politica economica contemporanea. Paesi come l'Italia hanno rapporti debito/PIL superiori al 130%; gli Stati Uniti hanno superato il 120%; il Giappone è oltre il 260%. Sono livelli sostenibili? La domanda non ha risposta in termini assoluti: dipende dalla <strong>dinamica</strong> che il rapporto debito/PIL presenta nel tempo, e questa dinamica è determinata da pochi parametri chiave: il <em>saldo primario</em> del bilancio pubblico, il <em>tasso d'interesse reale</em>, il <em>tasso di crescita</em> dell'economia.
        </p>
        <p style={S.p}>
          In questo capitolo costruiamo passo per passo il modello formale della sostenibilità del debito, partendo dal vincolo di bilancio dello Stato fino all'equazione di sostenibilità del rapporto debito/PIL. Identificheremo quattro situazioni tipiche e mostreremo graficamente cosa accade in ciascuna. Il modello è una versione semplificata del framework standard usato dalle istituzioni internazionali (FMI, Commissione UE, Banca d'Italia) per valutare la sostenibilità fiscale.
        </p>
      </div>

      {/* ── SEZ 18.1: Il vincolo di bilancio dello Stato ─────────────────── */}
      <div className="content-section glass-panel" style={{ padding: '2rem 2.5rem', marginBottom: '2rem' }}>
        <h2 style={S.h2}>18.1 Il vincolo di bilancio dello Stato</h2>
        <p style={S.p}>
          Lo Stato finanzia i flussi in uscita del bilancio pubblico — costituiti dalla <strong>spesa pubblica per beni e servizi</strong> (G_t), dalla <strong>spesa per trasferimenti</strong> (TR_t, pensioni e spesa assistenziale) e dalla <strong>spesa per interessi sul debito</strong> (rB_{'{t−1}'}) — mediante i flussi in entrata generati dalle <strong>imposte</strong> (T_t).
        </p>
        <p style={S.p}>
          Se le uscite totali superano le entrate totali, il bilancio pubblico registra un <strong>saldo negativo</strong> e lo Stato deve fare fronte all'eccesso di spesa mediante <strong>indebitamento</strong>: prende a prestito risorse finanziarie attraverso l'emissione di titoli del debito pubblico da collocare sul mercato, generando un aumento nello stock di debito (ΔB). In alternativa, tali titoli di debito possono essere collocati presso la Banca Centrale che, in contropartita, inietta nel sistema base monetaria (ΔH).
        </p>
        <p style={S.p}>Il vincolo di bilancio dello Stato al tempo t può quindi essere rappresentato dalla seguente espressione:</p>

        <div style={S.formula}>
          <div style={S.formulaLabel}>Vincolo di bilancio pubblico — eq. (1)</div>
          G_t + TR_t + r·B_t−1 = T_t + ΔB + ΔH
        </div>

        <p style={S.p}>dove:</p>
        <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: 1.9 }}>
          <li><strong>G_t</strong> = spesa pubblica per beni e servizi</li>
          <li><strong>TR_t</strong> = trasferimenti della Pubblica Amministrazione (pensioni, spesa assistenziale)</li>
          <li><strong>r·B_t−1</strong> = spesa reale per interessi sullo stock di debito esistente all'inizio del periodo t</li>
          <li><strong>T_t</strong> = imposte totali</li>
          <li><strong>ΔB</strong> = variazione dello stock di debito pubblico derivante dall'indebitamento presso i privati</li>
          <li><strong>ΔH</strong> = creazione di base monetaria derivante dall'indebitamento presso la Banca Centrale</li>
        </ul>

        <h3 style={S.h3}>Il disavanzo primario</h3>
        <p style={S.p}>
          Distinguere il <strong>saldo primario</strong> dalla spesa per interessi è cruciale, perché la prima componente è sotto il controllo della politica fiscale corrente, mentre la seconda eredita lo stock di debito pregresso. Definiamo il <strong>disavanzo primario</strong> (D_t) come la differenza tra spesa pubblica al netto degli interessi ed entrate fiscali:
        </p>

        <div style={S.formula}>
          <div style={S.formulaLabel}>Disavanzo primario — eq. (2)</div>
          D_t = G_t + TR_t − T_t
        </div>

        <p style={S.p}>
          Quando D_t {'>'} 0 c'è <em>disavanzo primario</em> (le spese senza interessi superano le entrate); quando D_t {'<'} 0 c'è <em>avanzo primario</em> (le entrate eccedono le spese al netto degli interessi).
        </p>

        <p style={S.p}>
          È quindi possibile riscrivere il vincolo di bilancio pubblico sostituendo l'eq. (2) nell'eq. (1) e portando ΔB = B_t − B_t−1:
        </p>

        <div style={S.formula}>
          <div style={S.formulaLabel}>Vincolo riscritto — eq. (3)</div>
          D_t + r·B_t−1 = B_t − B_t−1 + ΔH
        </div>

        <div style={S.keyBox}>
          <strong>Lettura intuitiva:</strong> il disavanzo primario più gli interessi sul debito esistente devono essere finanziati con un aumento del debito (B_t − B_t−1) o con creazione di base monetaria (ΔH). Se né l'una né l'altra opzione fosse disponibile, il governo sarebbe obbligato a praticare un avanzo primario almeno pari alla spesa per interessi.
        </div>
      </div>

      {/* ── SEZ 18.2: Dal vincolo in livelli al rapporto debito/PIL ──────── */}
      <div className="content-section glass-panel" style={{ padding: '2rem 2.5rem', marginBottom: '2rem' }}>
        <h2 style={S.h2}>18.2 Il rapporto debito/PIL come metrica di sostenibilità</h2>
        <p style={S.p}>
          Per analizzare correttamente il problema della sostenibilità del debito pubblico, è opportuno considerare l'andamento nel tempo del debito accumulato dallo Stato <strong>in rapporto al PIL</strong>. Questo indicatore misura la capacità dell'economia di creare le risorse per ripagare il debito contratto: un Paese può avere mille miliardi di debito ed essere solvibile (se il suo PIL è di diecimila miliardi) oppure essere in seria crisi (se il PIL è di cinquecento miliardi).
        </p>
        <p style={S.p}>
          Assumiamo perciò che il PIL (Y_t) non sia costante, ma si evolva nel tempo secondo il tasso di crescita g:
        </p>

        <div style={S.formula}>
          <div style={S.formulaLabel}>Dinamica del PIL — eq. (4)</div>
          Y_t = (1 + g) · Y_t−1
        </div>

        <p style={S.p}>
          Dividendo entrambi i membri dell'eq. (3) per il PIL (Y_t) e sostituendo Y_t = (1+g)·Y_t−1, otteniamo:
        </p>

        <div style={S.formula}>
          <div style={S.formulaLabel}>Vincolo in rapporto al PIL — eq. (6)</div>
          D_t/Y_t + [r·B_t−1] / [(1+g)·Y_t−1] = B_t/Y_t − B_t−1 / [(1+g)·Y_t−1] + ΔH/Y_t
        </div>

        <p style={S.p}>
          Definendo le variabili minuscole come rapporti rispetto al PIL — d_t = D_t/Y_t (disavanzo primario su PIL), b_t = B_t/Y_t (debito su PIL), μ_t = ΔH/Y_t (monetizzazione su PIL) — possiamo riscrivere in forma compatta:
        </p>

        <div style={S.formula}>
          <div style={S.formulaLabel}>Vincolo compatto — eq. (7)</div>
          d_t + [r/(1+g)] · b_t−1 = b_t − [1/(1+g)] · b_t−1 + μ_t
        </div>

        <p style={S.p}>Risolvendo l'eq. (7) rispetto a b_t si ottiene:</p>

        <div style={S.formula}>
          <div style={S.formulaLabel}>Dinamica del rapporto debito/PIL — eq. (8)</div>
          b_t = d_t + [(1+r)/(1+g)] · b_t−1 − μ_t
        </div>
      </div>

      {/* ── SEZ 18.3: Equazione di sostenibilità ─────────────────────────── */}
      <div className="content-section glass-panel" style={{ padding: '2rem 2.5rem', marginBottom: '2rem' }}>
        <h2 style={S.h2}>18.3 L'equazione di sostenibilità del debito pubblico</h2>
        <p style={S.p}>
          Supponendo che sia nulla la quota di deficit pubblico finanziata tramite monetizzazione (μ_t = 0) — assunzione particolarmente ragionevole nell'Unione Europea, dove l'<em>art. 125 TFUE</em> (no bailout clause) vieta il finanziamento del debito pubblico con moneta da parte della BCE — si ottiene l'<strong>equazione di sostenibilità del debito pubblico</strong>:
        </p>

        <div style={S.formula}>
          <div style={S.formulaLabel}>Equazione di sostenibilità — eq. (9)</div>
          b_t = d_t + [(1+r)/(1+g)] · b_t−1
        </div>

        <div style={S.keyBox}>
          <strong>Interpretazione dei tre termini:</strong>
          <ul style={{ margin: '0.5rem 0 0 0', paddingLeft: '1.4rem', lineHeight: 1.8 }}>
            <li>Il <strong>primo termine</strong> (d_t) cattura l'effetto del saldo primario corrente: se d_t {'>'} 0 (disavanzo) il rapporto debito/PIL tende a salire, se d_t {'<'} 0 (avanzo) tende a scendere.</li>
            <li>Il <strong>secondo termine</strong> [(1+r)/(1+g)]·b_t−1 cattura il "rolling" del debito esistente capitalizzato al tasso r, ma diluito dalla crescita del PIL al tasso g. Se r {'>'} g il fattore {'>'} 1 e il debito si autopropaga; se r {'<'} g il fattore {'<'} 1 e il debito si diluisce nel PIL anche senza riduzioni nominali.</li>
            <li>L'<strong>assenza</strong> del terzo termine (μ_t) implica che il governo non può chiedere alla banca centrale di "stampare" moneta per ripagare il debito — vincolo istituzionale chiave dell'eurozona.</li>
          </ul>
        </div>

        <p style={S.p}>
          L'eq. (9) evidenzia che la stabilità nel tempo del rapporto debito/PIL (b_t = b_t−1), ossia la <strong>sostenibilità del debito pubblico</strong>, dipende dall'evoluzione del saldo primario (d_t) e dal rapporto tra il tasso d'interesse reale (r) e il tasso di crescita del PIL (g).
        </p>
        <p style={S.p}>
          Le implicazioni sono dirette. Nel caso di un aumento del disavanzo primario (d_t ↑), allora b_t ↑ e possono sussistere problemi di sostenibilità. Il secondo termine dell'eq. (9) evidenzia la rilevanza dello stock di debito esistente in ragione del volume di spesa per interessi: se r ↑, allora b_t ↑ e possono sussistere problemi di sostenibilità. Tuttavia, se l'economia cresce a un ritmo sufficiente, può essere in grado di generare risorse sufficienti a ripagare gli interessi: se g ↑, allora b_t ↓ e i problemi di sostenibilità possono essere contenuti.
        </p>

        <h3 style={S.h3}>Rappresentazione grafica</h3>
        <p style={S.p}>
          Le implicazioni dell'eq. (9) possono essere esaminate graficamente ponendo sull'asse delle ascisse b_t−1 e su quello delle ordinate b_t. In tale grafico, l'equazione di sostenibilità è rappresentata da una <strong>retta</strong> avente <em>intercetta pari a d_t</em> e <em>pendenza pari a (1+r)/(1+g)</em>, mentre la <strong>bisettrice</strong> del quadrante individua l'insieme dei punti in cui b_t = b_t−1, ossia i punti corrispondenti a una dinamica stabile del rapporto debito/PIL.
        </p>
        <p style={S.p}>
          A partire da uno stock iniziale di debito b₀, per tracciare la dinamica del debito si proietta b₀ verticalmente sulla retta di sostenibilità (ottenendo b₁), poi orizzontalmente sulla bisettrice (ottenendo b₁ sull'asse delle ascisse), e si ripete il procedimento. Ad ogni periodo b_t−1 corrisponde al b_t del periodo precedente.
        </p>
      </div>

      {/* ── SEZ 18.4: I quattro casi ─────────────────────────────────────── */}
      <div className="content-section glass-panel" style={{ padding: '2rem 2.5rem', marginBottom: '2rem' }}>
        <h2 style={S.h2}>18.4 I quattro casi di sostenibilità</h2>
        <p style={S.p}>
          A seconda del valore assunto dal disavanzo primario (d_t) e del rapporto tra r e g, possiamo individuare graficamente <strong>quattro situazioni distinte</strong>:
        </p>

        <table style={S.table}>
          <thead>
            <tr>
              <th style={S.th}>Caso</th>
              <th style={S.th}>Disavanzo primario</th>
              <th style={S.th}>r vs g</th>
              <th style={S.th}>Esito</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={S.td}><strong>1</strong></td>
              <td style={S.td}>d_t {'>'} 0 (disavanzo)</td>
              <td style={S.td}>r {'>'} g</td>
              <td style={{ ...S.td, color: '#dc2626', fontWeight: 600 }}>Non sostenibilità</td>
            </tr>
            <tr>
              <td style={S.td}><strong>2</strong></td>
              <td style={S.td}>d_t {'>'} 0 (disavanzo)</td>
              <td style={S.td}>r {'<'} g</td>
              <td style={{ ...S.td, color: '#16a34a', fontWeight: 600 }}>Sostenibilità (b* stabile)</td>
            </tr>
            <tr>
              <td style={S.td}><strong>3</strong></td>
              <td style={S.td}>d_t {'<'} 0 (avanzo)</td>
              <td style={S.td}>r {'<'} g</td>
              <td style={{ ...S.td, color: '#16a34a', fontWeight: 600 }}>Sostenibilità sicura</td>
            </tr>
            <tr>
              <td style={S.td}><strong>4</strong></td>
              <td style={S.td}>d_t {'<'} 0 (avanzo)</td>
              <td style={S.td}>r {'>'} g</td>
              <td style={{ ...S.td, color: '#ea580c', fontWeight: 600 }}>Può esserci non sostenibilità</td>
            </tr>
          </tbody>
        </table>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1rem', marginTop: '1.5rem' }}>
          <FourCasesGraph
            d={0.03} r={0.05} g={0.01} b0={0.6}
            title="Caso 1 — Non sostenibilità"
            description="d > 0 e r > g · pendenza > 1 · nessuna intersezione con la bisettrice"
            variant="case1"
          />
          <FourCasesGraph
            d={0.02} r={0.01} g={0.04} b0={0.4}
            title="Caso 2 — Sostenibilità con b* stabile"
            description="d > 0 e r < g · pendenza < 1 · convergenza verso b*"
            variant="case2"
          />
          <FourCasesGraph
            d={-0.01} r={0.01} g={0.04} b0={0.6}
            title="Caso 3 — Sostenibilità sicura"
            description="d < 0 e r < g · pendenza < 1 · debito che cala costantemente"
            variant="case3"
          />
          <FourCasesGraph
            d={-0.02} r={0.05} g={0.01} b0={0.4}
            title="Caso 4 — Equilibrio instabile"
            description="d < 0 e r > g · pendenza > 1 · b* esiste ma è punto di fuga"
            variant="case4"
          />
        </div>

        <h3 style={S.h3}>Caso 1: disavanzo primario + r {'>'} g → non sostenibilità</h3>
        <p style={S.p}>
          La contemporanea presenza di un <em>disavanzo primario</em> e di un <em>tasso d'interesse reale superiore al tasso di crescita del PIL reale</em> comporta che, anche partendo da un rapporto debito-PIL contenuto, <strong>non si raggiungerà mai una situazione stabile</strong>: la retta di sostenibilità non incrocia mai la bisettrice. Il debito cresce nel tempo in misura maggiore rispetto al PIL, e questo indica che l'economia non è in grado di creare le risorse necessarie per ripagare gli interessi sul debito che lo Stato ha contratto. Di conseguenza il debito non è sostenibile.
        </p>

        <h3 style={S.h3}>Caso 2: disavanzo primario + r {'<'} g → sostenibilità</h3>
        <p style={S.p}>
          In questo caso esiste un disavanzo primario, ma il tasso d'interesse reale è inferiore al tasso di crescita dell'economia. Ciò comporta l'esistenza di un <strong>livello di equilibrio stabile b*</strong> per il rapporto debito-PIL, identificato dal punto di intersezione tra la retta di sostenibilità e la bisettrice. Imponendo b_t = b_t−1 nell'equazione di sostenibilità si trova:
        </p>
        <div style={S.formula}>
          d_t = [(g − r) / (1 + g)] · b*
        </div>
        <p style={S.p}>
          Il sistema converge verso b*, sia che inizialmente parta da destra sia da sinistra rispetto a b*. Infatti, pur in presenza di un disavanzo primario, l'economia cresce abbastanza da generare le risorse necessarie a ripagare gli interessi: il debito risulta quindi sostenibile.
        </p>

        <h3 style={S.h3}>Caso 3: avanzo primario + r {'<'} g → sostenibilità sicura</h3>
        <p style={S.p}>
          Questa è la situazione <strong>più favorevole</strong>, a causa della contemporanea presenza di un avanzo primario e di un tasso di crescita del PIL superiore al tasso d'interesse reale. Ciò comporta una continua e costante diminuzione del rapporto debito-PIL nel corso del tempo (b_t {'<'} b_t−1, ∀t), anche qualora il livello iniziale sia elevato. Il sistema convergerà in ogni caso verso un equilibrio stabile b* {'<'} 0, dove lo Stato risulterà <em>creditore e non più debitore</em>. In questo contesto il debito risulta sostenibile.
        </p>

        <h3 style={S.h3}>Caso 4: avanzo primario + r {'>'} g → equilibrio instabile</h3>
        <p style={S.p}>
          Si tratta della situazione più <strong>complessa</strong>. La contemporanea presenza di un avanzo primario e di un tasso d'interesse reale superiore al tasso di crescita dell'economia fa sì che, formalmente, esista un livello di equilibrio per il rapporto debito-PIL (b*), identificato dal punto di intersezione tra la retta di sostenibilità e la bisettrice. Tale livello d'equilibrio, tuttavia, <strong>non è stabile</strong>: non verrà mai raggiunto dal sistema, che si allontanerà da esso sia che inizialmente si trovi a sinistra (b₀ {'<'} b*) sia a destra (b₀ {'>'} b*). Si parla in questo caso di <em>punti di fuga</em>.
        </p>
        <p style={S.p}>
          Queste due situazioni iniziali hanno peraltro implicazioni opposte:
        </p>
        <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: 1.9 }}>
          <li><strong>Se b₀ {'<'} b*:</strong> il rapporto debito-PIL diminuisce continuamente nel tempo (b_t {'<'} b_t−1, ∀t), quindi il debito risulta sostenibile anche in assenza di un equilibrio stabile.</li>
          <li><strong>Se b₀ {'>'} b*:</strong> il rapporto debito-PIL aumenta continuamente nel tempo (b_t {'>'} b_t−1, ∀t), quindi il debito risulta <em>non sostenibile</em>.</li>
        </ul>

        <div style={S.keyBox}>
          <strong>Implicazione di policy nel Caso 4 con b₀ {'>'} b*:</strong> lo Stato ha una possibile soluzione che consiste nell'attuare <em>rigorose politiche di revisione della spesa</em> (cosiddetta <strong>spending review</strong>) e/o politiche fiscali restrittive che generino più ampi avanzi primari, in grado di spostare il punto di equilibrio b* verso destra, in modo che l'esistente rapporto debito-PIL b₀ si trovi a sinistra — e non più a destra — rispetto a b*. In questo modo si inverte la dinamica esplosiva del debito pubblico.
        </div>
      </div>

      {/* ── SEZ 18.5: Simulatore ─────────────────────────────────────────── */}
      <div className="content-section glass-panel" style={{ padding: '2rem 2.5rem', marginBottom: '2rem' }}>
        <h2 style={S.h2}>18.5 Simulatore interattivo</h2>
        <p style={S.p}>
          Per vedere concretamente come l'interazione tra disavanzo primario, tasso d'interesse reale e crescita del PIL produca traiettorie radicalmente diverse del rapporto debito/PIL, prova a manipolare i parametri qui sotto. Configurazioni tipiche da provare:
        </p>
        <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: 1.9 }}>
          <li><strong>Italia 2024 (stilizzata):</strong> d ≈ 1.5%, r ≈ 2.5%, g ≈ 1%, b₀ ≈ 135% → Caso 1, dinamica preoccupante</li>
          <li><strong>Italia 2010-2020 (era dei tassi bassi):</strong> d ≈ 0.5%, r ≈ 0.5%, g ≈ 1%, b₀ ≈ 130% → Caso 2, b* alto ma stabile</li>
          <li><strong>Avanzo primario forte (post-spending review):</strong> d = −2%, r = 2%, g = 1.5% → Caso 4 con b₀ basso, sostenibile</li>
          <li><strong>Anni '60 (boom + tassi bassi):</strong> d ≈ 0%, r ≈ 1%, g ≈ 5% → Caso 3, debito calante</li>
        </ul>

        <DebtPathSimulator />
      </div>

      {/* ── SEZ 18.6: Connessioni con la politica economica ──────────────── */}
      <div className="content-section glass-panel" style={{ padding: '2rem 2.5rem', marginBottom: '2rem' }}>
        <h2 style={S.h2}>18.6 Implicazioni di politica economica</h2>

        <h3 style={S.h3}>La condizione r {'>'} g e il rischio strutturale</h3>
        <p style={S.p}>
          La distinzione tra il regime r {'<'} g (storicamente comune dal dopoguerra agli anni '70 e poi di nuovo dal 2008 al 2021) e il regime r {'>'} g (anni '80-'90, e nuovamente dal 2022 in seguito al rialzo dei tassi BCE) è la chiave per capire perché paesi con stessa struttura possano avere traiettorie debitorie completamente diverse a seconda del periodo storico.
        </p>
        <p style={S.p}>
          Nel decennio 2010-2021, l'Italia con r ≈ 0% e g ≈ 1% si trovava strutturalmente nel Caso 2, e il suo debito al 135% del PIL era sostenibile pur in presenza di un piccolo disavanzo primario. Dal 2022, con r reale tornato sopra il 2% e g sotto l'1%, lo stesso debito si trova in una zona di Caso 1: stessa Italia, stesso debito, ma transizione da sostenibile a problematico. È il <em>cambio di regime</em> che ha modificato la natura del problema, non il livello del debito in sé.
        </p>

        <h3 style={S.h3}>Strumenti per ripristinare la sostenibilità</h3>
        <p style={S.p}>
          Quando un Paese si trova in Caso 1 o nel ramo "instabile" del Caso 4, le opzioni di policy sono cinque:
        </p>
        <ol style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: 1.9 }}>
          <li><strong>Consolidamento fiscale</strong> (aumentare le entrate o ridurre la spesa) per portare d_t in territorio negativo. Politica adottata in Grecia, Portogallo, Spagna nel decennio 2010, con costi recessivi non trascurabili.</li>
          <li><strong>Spending review</strong>: revisione qualitativa della spesa eliminando inefficienze. Meno costosa politicamente del taglio lineare ma con tempi di realizzazione lunghi.</li>
          <li><strong>Politiche pro-crescita</strong>: riforme strutturali, investimenti produttivi (PNRR), digitalizzazione e capitale umano per innalzare g.</li>
          <li><strong>Repressione finanziaria</strong>: mantenere artificialmente r basso tramite acquisti della BC (QE) o requisiti normativi per banche e fondi pensione di detenere titoli di Stato.</li>
          <li><strong>Ristrutturazione del debito</strong>: allungamento delle scadenze, abbassamento delle cedole, o nei casi estremi haircut nominale (Grecia 2012, PSI). Strumento ultima istanza che danneggia gravemente la credibilità del Paese.</li>
        </ol>

        <div style={S.caseCard}>
          <div style={S.caseTitle}>ANALISI DI UN CASO — Italia: i 30 anni di equilibrio precario</div>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            Il debito pubblico italiano ha superato il 100% del PIL nel 1991 e da allora non è mai sceso sotto quella soglia. La traiettoria si spiega bene applicando il modello del Capitolo 18.
          </p>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            <strong>Anni '80:</strong> r reale ≈ 5-6%, g ≈ 2-3%, d ≈ 5% del PIL → Caso 1 puro, accumulazione esplosiva da 60% a 105% del PIL in dieci anni.
          </p>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            <strong>Anni '90 (convergenza Maastricht):</strong> avanzi primari del 3-5% del PIL ma r reale ancora alto (5%) → Caso 4. Il debito si stabilizza intorno al 120% grazie agli avanzi, ma resta vulnerabile.
          </p>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            <strong>2010-2021 (era dei tassi BCE bassi):</strong> r reale ≈ 0%, g ≈ 0.5%, d ≈ 1% → Caso 2 marginale. Il debito sale al 135% del PIL per Covid ma resta sostenibile grazie al fattore (1+r)/(1+g) ≈ 1.
          </p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>2022-oggi:</strong> r reale risalito al 2-3%, g intorno all'1%, d primario ancora positivo → ritorno verso il Caso 1. La sostenibilità dipenderà dalla capacità di generare avanzi primari significativi (PNRR + spending review) e dal mantenere g elevato attraverso le riforme strutturali.
          </p>
        </div>
      </div>

      {/* ── BOX RIEPILOGO ─────────────────────────────────────────────────── */}
      <div className="content-section glass-panel" style={{ padding: '2rem 2.5rem', marginBottom: '2rem' }}>
        <h2 style={S.h2}>📋 Sintesi del capitolo</h2>
        <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', lineHeight: 2 }}>
          <li>Il <strong>vincolo di bilancio dello Stato</strong> (eq. 1) afferma che G + TR + rB_t−1 = T + ΔB + ΔH.</li>
          <li>Il <strong>disavanzo primario</strong> D_t = G + TR − T è la componente sotto controllo della politica fiscale corrente.</li>
          <li>Riformulando in rapporto al PIL e imponendo μ = 0 (no monetizzazione) si ottiene l'<strong>equazione di sostenibilità</strong>: b_t = d_t + (1+r)/(1+g)·b_t−1.</li>
          <li>La <strong>pendenza</strong> della retta di sostenibilità è (1+r)/(1+g): se {'>'} 1 (r {'>'} g) il debito si auto-propaga, se {'<'} 1 (r {'<'} g) si diluisce.</li>
          <li>L'<strong>intercetta</strong> è d_t: se {'>'} 0 spinge il debito a salire, se {'<'} 0 lo spinge a scendere.</li>
          <li><strong>Quattro casi:</strong> (1) d {'>'} 0, r {'>'} g → esplosivo; (2) d {'>'} 0, r {'<'} g → stabile b*; (3) d {'<'} 0, r {'<'} g → sicuro; (4) d {'<'} 0, r {'>'} g → equilibrio instabile.</li>
          <li>Le <strong>politiche</strong> per ripristinare sostenibilità: consolidamento fiscale, spending review, crescita, repressione finanziaria, ristrutturazione.</li>
          <li>Nell'eurozona la <strong>no bailout clause</strong> (art. 125 TFUE) esclude la monetizzazione (μ = 0): la sola via è il consolidamento fiscale o la crescita.</li>
        </ul>
      </div>
    </div>
  );
}
