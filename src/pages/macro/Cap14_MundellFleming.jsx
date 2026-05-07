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

// ─── Grafico 1: Mundell-Fleming in cambi flessibili ─────────────────────────
const MundellFlemingFlexible = () => {
  const [policy, setPolicy] = useState('none'); // 'none', 'fiscal', 'monetary', 'trade'

  // IS*: Y dipende da tasso di cambio. r* = 5 (dato).
  // IS*: Y = 500 - 30·(e - 100) + fisc
  // LM*: Y = 400 + mon (verticale: Y non dipende da e)
  // Equil: Y = 400 (+ mon). e determinato da IS*.
  const fisc = policy === 'fiscal' ? 100 : 0;
  const mon = policy === 'monetary' ? 100 : 0;
  const trade = policy === 'trade' ? 80 : 0; // restrizione import sposta IS* a destra ma cambio si apprezza
  const Ystar = 400 + mon;

  // IS*: Y = 500 - 30·(e - 100) + fisc + trade → e = 100 + (500 + fisc + trade - Y)/30
  const eStar = 100 + (500 + fisc + trade - Ystar) / 30;
  const eStar0 = 100 + (500 - 400) / 30; // ~103.3

  const W = 520, H = 380;
  const PL = 70, PR = 20, PT = 25, PB = 55;
  const pW = W - PL - PR, pH = H - PT - PB;
  const Ymax = 700, emax = 140, emin = 80;
  const tx = (y) => PL + y * (pW / Ymax);
  const te = (e) => PT + pH - ((e - emin) / (emax - emin)) * pH;

  // IS*: da e=emin a e=emax
  // Y a e=emin: 500 - 30(emin-100) + fisc + trade = 500 + 600 + fisc + trade (troppo) → capped
  // Y a e=emax: 500 - 30(emax-100) + fisc + trade
  const isY_eMin = Math.min(680, 500 - 30 * (emin - 100) + fisc + trade);
  const isY_eMax = Math.max(20, 500 - 30 * (emax - 100) + fisc + trade);

  const isY_eMin0 = Math.min(680, 500 - 30 * (emin - 100));
  const isY_eMax0 = Math.max(20, 500 - 30 * (emax - 100));

  // LM*: verticale a Y = 400 + mon
  const lmX = Ystar;
  const lmX0 = 400;

  return (
    <div style={S.graphWrap}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={S.graphTitle}>Modello Mundell-Fleming — cambi flessibili</div>
          <div style={S.graphSub}>r* = 5% (dato dai mercati mondiali). Scegli il tipo di politica per vedere l'effetto.</div>
        </div>
        <div style={{ textAlign: 'right', fontSize: '0.85rem' }}>
          <div>Y = <strong style={{ color: 'var(--accent-indigo)' }}>{Ystar.toFixed(0)}</strong> {Ystar !== 400 && <span style={{ color: '#16a34a' }}>(+{(Ystar - 400).toFixed(0)})</span>}</div>
          <div>e = <strong style={{ color: '#dc2626' }}>{eStar.toFixed(1)}</strong> {eStar !== eStar0 && <span style={{ color: eStar > eStar0 ? '#16a34a' : '#dc2626' }}>({eStar > eStar0 ? '+' : ''}{(eStar - eStar0).toFixed(1)})</span>}</div>
        </div>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto', display: 'block' }}>
        {[80, 90, 100, 110, 120, 130, 140].map(e => (
          <line key={e} x1={PL} y1={te(e)} x2={PL + pW} y2={te(e)} stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
        ))}
        {[100, 200, 300, 400, 500, 600].map(y => (
          <line key={y} x1={tx(y)} y1={PT} x2={tx(y)} y2={PT + pH} stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
        ))}
        {[80, 90, 100, 110, 120, 130, 140].map(e => (
          <text key={e} x={PL - 5} y={te(e) + 4} textAnchor="end" fontSize="10" fill="#94a3b8">{e}</text>
        ))}
        {[100, 200, 300, 400, 500, 600].map(y => (
          <text key={y} x={tx(y)} y={PT + pH + 16} textAnchor="middle" fontSize="10" fill="#94a3b8">{y}</text>
        ))}

        <line x1={PL} y1={PT} x2={PL} y2={PT + pH} stroke="#64748b" strokeWidth="1.5" />
        <line x1={PL} y1={PT + pH} x2={PL + pW} y2={PT + pH} stroke="#64748b" strokeWidth="1.5" />

        {/* IS* base (se policy è attivo) */}
        {(fisc > 0 || trade > 0) && (
          <>
            <line x1={tx(isY_eMin0)} y1={te(emin)} x2={tx(isY_eMax0)} y2={te(emax)} stroke="#4338ca" strokeWidth="1.5" opacity="0.28" strokeDasharray="6,4" />
            <text x={tx(isY_eMin0) - 10} y={te(emin) - 4} fontSize="11" fill="#4338ca" opacity="0.6">IS*₁</text>
          </>
        )}

        {/* IS* corrente */}
        <line x1={tx(isY_eMin)} y1={te(emin)} x2={tx(isY_eMax)} y2={te(emax)} stroke="#4338ca" strokeWidth="2.5" />
        <text x={tx(isY_eMin) - 10} y={te(emin) - 4} fontSize="13" fill="#4338ca" fontWeight="700">IS*{(fisc > 0 || trade > 0) ? '₂' : ''}</text>

        {/* LM* base */}
        {mon > 0 && (
          <>
            <line x1={tx(lmX0)} y1={PT} x2={tx(lmX0)} y2={PT + pH} stroke="#0284c7" strokeWidth="1.5" opacity="0.28" strokeDasharray="6,4" />
            <text x={tx(lmX0) - 10} y={PT + 12} fontSize="11" fill="#0284c7" opacity="0.6">LM*₁</text>
          </>
        )}

        {/* LM* corrente */}
        <line x1={tx(lmX)} y1={PT} x2={tx(lmX)} y2={PT + pH} stroke="#0284c7" strokeWidth="2.5" />
        <text x={tx(lmX) + 4} y={PT + 12} fontSize="13" fill="#0284c7" fontWeight="700">LM*{mon > 0 ? '₂' : ''}</text>

        {/* Equilibrio base */}
        {(fisc > 0 || mon > 0 || trade > 0) && (
          <circle cx={tx(400)} cy={te(eStar0)} r="5" fill="gray" opacity="0.45" />
        )}

        {/* Droplines */}
        <line x1={tx(Ystar)} y1={te(eStar)} x2={tx(Ystar)} y2={PT + pH} stroke="#64748b" strokeWidth="1" strokeDasharray="4,3" />
        <line x1={PL} y1={te(eStar)} x2={tx(Ystar)} y2={te(eStar)} stroke="#64748b" strokeWidth="1" strokeDasharray="4,3" />

        {/* Punto equilibrio */}
        <circle cx={tx(Ystar)} cy={te(eStar)} r="8" fill="#1e293b" />
        <circle cx={tx(Ystar)} cy={te(eStar)} r="4" fill="white" />

        <text x={tx(Ystar)} y={te(emin) + 18} textAnchor="middle" fontSize="11" fill="#1e293b" fontWeight="700">Y = {Ystar}</text>
        <text x={PL - 5} y={te(eStar) - 4} textAnchor="end" fontSize="11" fill="#1e293b" fontWeight="700">e = {eStar.toFixed(1)}</text>

        <text x={PL + pW / 2} y={H - 6} textAnchor="middle" fontSize="12" fill="var(--text-secondary)">Reddito, produzione Y</text>
        <text x={13} y={PT + pH / 2} textAnchor="middle" fontSize="12" fill="var(--text-secondary)" transform={`rotate(-90,13,${PT + pH / 2})`}>Tasso di cambio e</text>
      </svg>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '0.5rem', marginTop: '1rem' }}>
        {[
          { k: 'none', label: 'Nessuna', color: '#94a3b8' },
          { k: 'fiscal', label: 'Fiscale ↑G', color: '#16a34a' },
          { k: 'monetary', label: 'Monetaria ↑M', color: '#0284c7' },
          { k: 'trade', label: 'Dazi ↑', color: '#ea580c' },
        ].map(b => (
          <button
            key={b.k}
            onClick={() => setPolicy(b.k)}
            style={{
              padding: '0.5rem 0.4rem',
              background: policy === b.k ? b.color : 'rgba(255,255,255,0.7)',
              color: policy === b.k ? 'white' : 'var(--text-primary)',
              border: `1px solid ${policy === b.k ? b.color : 'var(--border-color)'}`,
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '0.8rem',
              cursor: 'pointer',
            }}
          >
            {b.label}
          </button>
        ))}
      </div>

      {policy === 'fiscal' && (
        <div style={S.resultBox}>
          <strong>Politica fiscale espansiva</strong>: ↑G sposta IS* a destra, ma LM* è verticale → Y resta a 400, e si apprezza (eStar={eStar.toFixed(1)}). L'apprezzamento riduce NX, che compensa esattamente l'aumento di G. <strong>La politica fiscale è inefficace.</strong>
        </div>
      )}
      {policy === 'monetary' && (
        <div style={S.resultBox}>
          <strong>Politica monetaria espansiva</strong>: ↑M sposta LM* a destra (da 400 a 500). Il cambio si deprezza fino a eStar={eStar.toFixed(1)}, NX aumenta, Y cresce. <strong>La politica monetaria è molto efficace.</strong>
        </div>
      )}
      {policy === 'trade' && (
        <div style={S.resultBox}>
          <strong>Politica commerciale protezionistica</strong>: i dazi spostano IS* a destra, ma LM* verticale → Y resta a 400, il cambio si apprezza fino a eStar={eStar.toFixed(1)}, e l'NX privato cade esattamente quanto è salito l'NX pubblico. <strong>Il protezionismo non aumenta il reddito.</strong>
        </div>
      )}
    </div>
  );
};

// ─── Grafico 2: Mundell-Fleming in cambi fissi ──────────────────────────────
const MundellFlemingFixed = () => {
  const [policy, setPolicy] = useState('none');

  // Fisso e = 110.
  // IS*: Y = 500 - 30(e-100) + fisc + trade
  // LM*: Y = 400 + mon, ma la BC deve accomodare per mantenere e fisso.
  // Con fiscal ↑G: IS* si sposta a destra, e vuole apprezzarsi, la BC compra valuta estera (vende moneta interna) → LM* si sposta a destra → Y sale.
  // Con monetary ↑M: LM* a destra, e vuole deprezzarsi, BC vende valuta estera (compra moneta interna) → LM* torna indietro → Y resta fermo.

  const eFix = 110;
  const fisc = policy === 'fiscal' ? 100 : 0;
  const trade = policy === 'trade' ? 80 : 0;

  // Per mantenere e=110, Y deve essere tale che IS*(Y,110) = Y → Y = 500 - 30(110-100) + fisc + trade = 200 + fisc + trade
  const Ystar = 200 + fisc + trade;

  const W = 520, H = 380;
  const PL = 70, PR = 20, PT = 25, PB = 55;
  const pW = W - PL - PR, pH = H - PT - PB;
  const Ymax = 700, emax = 140, emin = 80;
  const tx = (y) => PL + y * (pW / Ymax);
  const te = (e) => PT + pH - ((e - emin) / (emax - emin)) * pH;

  const isY_eMin = Math.min(680, 500 - 30 * (emin - 100) + fisc + trade);
  const isY_eMax = Math.max(20, 500 - 30 * (emax - 100) + fisc + trade);
  const isY_eMin0 = Math.min(680, 500 - 30 * (emin - 100));
  const isY_eMax0 = Math.max(20, 500 - 30 * (emax - 100));

  return (
    <div style={S.graphWrap}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={S.graphTitle}>Modello Mundell-Fleming — cambi fissi</div>
          <div style={S.graphSub}>e fissato a {eFix}. La BC interviene per mantenere il cambio.</div>
        </div>
        <div style={{ textAlign: 'right', fontSize: '0.85rem' }}>
          <div>Y = <strong style={{ color: 'var(--accent-indigo)' }}>{Ystar}</strong> {Ystar !== 200 && <span style={{ color: '#16a34a' }}>(+{Ystar - 200})</span>}</div>
          <div>e = <strong style={{ color: '#dc2626' }}>{eFix}</strong> (fisso)</div>
        </div>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto', display: 'block' }}>
        {[80, 90, 100, 110, 120, 130, 140].map(e => (
          <line key={e} x1={PL} y1={te(e)} x2={PL + pW} y2={te(e)} stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
        ))}
        {[100, 200, 300, 400, 500, 600].map(y => (
          <line key={y} x1={tx(y)} y1={PT} x2={tx(y)} y2={PT + pH} stroke="rgba(0,0,0,0.04)" strokeWidth="1" />
        ))}
        {[80, 90, 100, 110, 120, 130, 140].map(e => (
          <text key={e} x={PL - 5} y={te(e) + 4} textAnchor="end" fontSize="10" fill="#94a3b8">{e}</text>
        ))}
        {[100, 200, 300, 400, 500, 600].map(y => (
          <text key={y} x={tx(y)} y={PT + pH + 16} textAnchor="middle" fontSize="10" fill="#94a3b8">{y}</text>
        ))}

        <line x1={PL} y1={PT} x2={PL} y2={PT + pH} stroke="#64748b" strokeWidth="1.5" />
        <line x1={PL} y1={PT + pH} x2={PL + pW} y2={PT + pH} stroke="#64748b" strokeWidth="1.5" />

        {/* Linea cambio fisso */}
        <line x1={PL} y1={te(eFix)} x2={PL + pW} y2={te(eFix)} stroke="#dc2626" strokeWidth="2" strokeDasharray="8,4" />
        <text x={PL + pW - 40} y={te(eFix) - 5} fontSize="11" fill="#dc2626" fontWeight="700">e fissato</text>

        {/* IS* base */}
        {(fisc > 0 || trade > 0) && (
          <>
            <line x1={tx(isY_eMin0)} y1={te(emin)} x2={tx(isY_eMax0)} y2={te(emax)} stroke="#4338ca" strokeWidth="1.5" opacity="0.28" strokeDasharray="6,4" />
            <text x={tx(isY_eMin0) - 10} y={te(emin) - 4} fontSize="11" fill="#4338ca" opacity="0.6">IS*₁</text>
          </>
        )}

        {/* IS* corrente */}
        <line x1={tx(isY_eMin)} y1={te(emin)} x2={tx(isY_eMax)} y2={te(emax)} stroke="#4338ca" strokeWidth="2.5" />
        <text x={tx(isY_eMin) - 10} y={te(emin) - 4} fontSize="13" fill="#4338ca" fontWeight="700">IS*{(fisc > 0 || trade > 0) ? '₂' : ''}</text>

        {/* LM* base */}
        {(fisc > 0 || trade > 0) && (
          <>
            <line x1={tx(200)} y1={PT} x2={tx(200)} y2={PT + pH} stroke="#0284c7" strokeWidth="1.5" opacity="0.28" strokeDasharray="6,4" />
            <text x={tx(200) - 10} y={PT + 12} fontSize="11" fill="#0284c7" opacity="0.6">LM*₁</text>
          </>
        )}
        {policy === 'monetary' && (
          <>
            <line x1={tx(300)} y1={PT} x2={tx(300)} y2={PT + pH} stroke="#0284c7" strokeWidth="1.5" opacity="0.28" strokeDasharray="6,4" />
            <text x={tx(300) + 4} y={PT + 24} fontSize="11" fill="#0284c7" opacity="0.6">LM*₂ (poi ritorna)</text>
          </>
        )}

        {/* LM* corrente */}
        <line x1={tx(Ystar)} y1={PT} x2={tx(Ystar)} y2={PT + pH} stroke="#0284c7" strokeWidth="2.5" />
        <text x={tx(Ystar) + 4} y={PT + 12} fontSize="13" fill="#0284c7" fontWeight="700">LM*</text>

        {/* Equilibrio base */}
        {(fisc > 0 || trade > 0) && (
          <circle cx={tx(200)} cy={te(eFix)} r="5" fill="gray" opacity="0.45" />
        )}

        {/* Droplines */}
        <line x1={tx(Ystar)} y1={te(eFix)} x2={tx(Ystar)} y2={PT + pH} stroke="#64748b" strokeWidth="1" strokeDasharray="4,3" />

        <circle cx={tx(Ystar)} cy={te(eFix)} r="8" fill="#1e293b" />
        <circle cx={tx(Ystar)} cy={te(eFix)} r="4" fill="white" />

        <text x={tx(Ystar)} y={te(emin) + 18} textAnchor="middle" fontSize="11" fill="#1e293b" fontWeight="700">Y = {Ystar}</text>

        <text x={PL + pW / 2} y={H - 6} textAnchor="middle" fontSize="12" fill="var(--text-secondary)">Reddito, produzione Y</text>
        <text x={13} y={PT + pH / 2} textAnchor="middle" fontSize="12" fill="var(--text-secondary)" transform={`rotate(-90,13,${PT + pH / 2})`}>Tasso di cambio e</text>
      </svg>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '0.5rem', marginTop: '1rem' }}>
        {[
          { k: 'none', label: 'Nessuna', color: '#94a3b8' },
          { k: 'fiscal', label: 'Fiscale ↑G', color: '#16a34a' },
          { k: 'monetary', label: 'Monetaria ↑M', color: '#0284c7' },
          { k: 'trade', label: 'Dazi ↑', color: '#ea580c' },
        ].map(b => (
          <button
            key={b.k}
            onClick={() => setPolicy(b.k)}
            style={{
              padding: '0.5rem 0.4rem',
              background: policy === b.k ? b.color : 'rgba(255,255,255,0.7)',
              color: policy === b.k ? 'white' : 'var(--text-primary)',
              border: `1px solid ${policy === b.k ? b.color : 'var(--border-color)'}`,
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '0.8rem',
              cursor: 'pointer',
            }}
          >
            {b.label}
          </button>
        ))}
      </div>

      {policy === 'fiscal' && (
        <div style={S.resultBox}>
          <strong>Politica fiscale in cambi fissi</strong>: ↑G sposta IS* a destra. Il cambio vuole apprezzarsi, ma la BC compra valuta estera per mantenere e=110, aumentando l'offerta di moneta. LM* si sposta a destra fino a Y={Ystar}. <strong>La politica fiscale è molto efficace.</strong>
        </div>
      )}
      {policy === 'monetary' && (
        <div style={S.resultBox}>
          <strong>Politica monetaria in cambi fissi</strong>: ↑M sposta LM* a destra. Il cambio vuole deprezzarsi, ma la BC deve comprare la moneta domestica (vendere riserve estere) per mantenere e=110 — questo contrae l'offerta di moneta esattamente di quanto era aumentata. LM* torna in posizione iniziale, Y resta a 200. <strong>La politica monetaria è del tutto inefficace.</strong>
        </div>
      )}
      {policy === 'trade' && (
        <div style={S.resultBox}>
          <strong>Dazi in cambi fissi</strong>: IS* si sposta a destra. Con cambio fisso, la BC accomoda l'apprezzamento stampando moneta → LM* si sposta a destra → Y sale. <strong>A differenza dei cambi flessibili, qui i dazi aumentano il reddito.</strong>
        </div>
      )}
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// PAGINA PRINCIPALE
// ═══════════════════════════════════════════════════════════════════════════
export default function Cap14MundellFleming() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', paddingBottom: '5rem' }}>

      <div className="page-header">
        <div style={{ color: 'var(--accent-cyan)', fontWeight: 600, letterSpacing: '0.1em', fontSize: '0.875rem', marginBottom: '0.5rem' }}>CAPITOLO 14 · TEORIA DEL CICLO ECONOMICO</div>
        <h1 className="page-title gradient-text" style={{ fontSize: '2.6rem', lineHeight: 1.1 }}>Una Rivisitazione dell'Economia Aperta:<br />Il Modello di Mundell-Fleming</h1>
        <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', fontSize: '1.05rem', maxWidth: '680px' }}>
          Come funziona l'economia aperta nel breve periodo? Come cambia il modello IS-LM quando teniamo conto degli scambi con l'estero, dei flussi di capitale e del regime dei tassi di cambio?
        </p>
      </div>

      <div className="content-section glass-panel" style={{ padding: '2rem 2.5rem', marginBottom: '2rem' }}>
        <blockquote style={{ borderLeft: '4px solid var(--accent-indigo)', padding: '0.6rem 1.2rem', margin: '0 0 1.5rem 0', color: 'var(--text-secondary)', fontStyle: 'italic', fontSize: '0.95rem' }}>
          «Il mondo è finanziariamente integrato in un unico mercato di capitali. Il regime monetario e i principi della corrispondenza tra gli strumenti di politica economica hanno implicazioni importanti.»
          <div style={{ marginTop: '0.5rem', fontStyle: 'normal', fontSize: '0.85rem' }}>— Robert Mundell, 1963</div>
        </blockquote>

        <p style={S.p}>
          Nel confronto fra politica monetaria e politica fiscale, abbiamo messo sempre in evidenza come la politica fiscale possa modificare il livello di equilibrio del reddito, in particolare Y. In questo capitolo torniamo alla questione della politica macroeconomica, ma lo facciamo con un modello di economia aperta, il <strong>modello di Mundell-Fleming</strong>. Esso estende il modello IS-LM di economia chiusa all'economia aperta integrando il tasso di cambio e gli scambi internazionali. La particolarità del modello è che fa distinzione tra tasso di cambio flessibile e tasso di cambio fisso, tra libertà di movimento dei capitali e restrizioni, e questo porta a conclusioni molto diverse dall'analisi di economia chiusa.
        </p>
        <p style={S.p}>
          Il modello di Mundell-Fleming, come il modello IS-LM, conferma l'ipotesi che la domanda aggregata determini nel breve periodo il reddito nazionale. Ciò che cambia, rispetto al Capitolo 13, è che abbiamo nuovi canali di trasmissione: le esportazioni nette NX, che dipendono dal tasso di cambio reale, e i flussi di capitale, che rispondono al differenziale dei tassi di interesse. Il risultato dell'analisi dipende criticamente dal <strong>regime dei tassi di cambio</strong> e dal grado di mobilità dei capitali internazionali. Questa è la "<em>trinità impossibile</em>" o trilemma di Mundell: un paese non può avere contemporaneamente piena libertà di movimento dei capitali, un cambio fisso e una politica monetaria autonoma. Deve rinunciare a una delle tre.
        </p>
      </div>

      {/* ── SEZ 14.1: Il modello ────────────────────────────────────── */}
      <div className="content-section glass-panel" style={{ padding: '2rem 2.5rem', marginBottom: '2rem' }}>
        <h2 style={S.h2}>14.1 Il Modello di Mundell-Fleming</h2>
        <p style={S.p}>
          In questa paragrafo costruiamo il modello di Mundell-Fleming sotto tre semplici ipotesi. L'obiettivo è fornire delle risposte puntuali in tema di politica economica: il modello IS-LM di economia chiusa tratta come esogeno il tasso di interesse e come endogeno Y; il modello di Mundell-Fleming tratta come esogeno il tasso di interesse <em>mondiale</em> r* e rende endogeni Y e il tasso di cambio e.
        </p>

        <h3 style={S.h3}>L'ipotesi di base: piccola economia aperta con perfetta mobilità dei capitali</h3>
        <p style={S.p}>
          Partiamo dall'ipotesi della piccola economia aperta con perfetta mobilità dei capitali. Come visto nel Capitolo 6, questa ipotesi significa che l'economia studiata è una piccola parte del mercato finanziario mondiale (i suoi scambi finanziari non influenzano il tasso mondiale), e che i capitali possono entrare e uscire liberamente senza restrizioni. Di conseguenza, qualsiasi attività finanziaria domestica rende lo stesso rendimento delle attività finanziarie estere analoghe, quindi il tasso di interesse domestico r è uguale al tasso di interesse mondiale r*:
        </p>
        <div style={S.formula}>
          <strong>r = r*</strong>
        </div>
        <p style={S.p}>
          Questa ipotesi elimina un'incognita: nel modello IS-LM di economia chiusa r era endogeno; qui r è esogeno, fissato dai mercati mondiali. Il paese è <em>price taker</em> sui mercati finanziari internazionali.
        </p>

        <h3 style={S.h3}>Il mercato dei beni e la curva IS*</h3>
        <p style={S.p}>
          Il modello di Mundell-Fleming dimostra che, in cambi flessibili, la politica fiscale non influenza il reddito aggregato: un'espansione fiscale fa apprezzare il cambio e riduce le esportazioni nette. Cominciamo con il mercato dei beni, descritto dall'equazione IS* (con asterisco per distinguerla da quella del modello di economia chiusa):
        </p>
        <div style={S.formula}>
          Y = C(Y − T) + I(r*) + G + NX(e)
        </div>
        <p style={S.p}>
          Con la differenza che gli investimenti I dipendono dal tasso di interesse mondiale r*, e che le esportazioni nette NX dipendono dal tasso di cambio nominale e (o reale, che in questo modello supponiamo si muovano insieme). Un apprezzamento del cambio (↑e) rende i beni domestici più costosi per gli esteri e i beni esteri più economici per i residenti, quindi NX diminuisce. La curva IS* ha quindi pendenza negativa nello spazio (Y, e): a e più bassi, NX è più alto, Y è più alto.
        </p>

        <h3 style={S.h3}>Il mercato della moneta e la curva LM*</h3>
        <p style={S.p}>
          Il modello di Mundell-Fleming dimostra che, in cambi flessibili, la politica monetaria influenza il reddito aggregato come al solito: un'espansione monetaria fa deprezzare il cambio, aumenta le esportazioni nette, e aumenta il reddito. La condizione di equilibrio del mercato della moneta è:
        </p>
        <div style={S.formula}>
          M/P = L(r*, Y)
        </div>
        <p style={S.p}>
          Poiché r è fissato dall'esterno a r*, questa equazione determina una sola soluzione per Y. Quindi la curva LM* è <strong>verticale</strong> nello spazio (Y, e): ad ogni livello di e, l'equilibrio del mercato della moneta richiede lo stesso Y. La verticalità di LM* è un risultato sorprendente che deriva direttamente dall'ipotesi di piccola economia con mobilità perfetta dei capitali: il tasso r è dato, quindi M/P = L(r*, Y) determina univocamente Y senza che il cambio giochi alcun ruolo in questo mercato.
        </p>

        <h3 style={S.h3}>L'equilibrio del modello di Mundell-Fleming</h3>
        <p style={S.p}>
          L'equilibrio completo del modello si ha nell'intersezione di IS* (decrescente in e) e LM* (verticale). In questo punto (Y*, e*), sia il mercato dei beni sia quello della moneta sono in equilibrio; il tasso di interesse è pari a quello mondiale r*. Ogni qualvolta uno shock sposta una delle due curve, il nuovo equilibrio è determinato dall'intersezione delle curve spostate.
        </p>
      </div>

      {/* ── SEZ 14.2: Cambi flessibili ──────────────────────────────── */}
      <div className="content-section glass-panel" style={{ padding: '2rem 2.5rem', marginBottom: '2rem' }}>
        <h2 style={S.h2}>14.2 Una piccola economia aperta in regime di cambi flessibili</h2>
        <p style={S.p}>
          In un regime di <strong>cambi flessibili</strong>, il tasso di cambio e si aggiusta liberamente per portare in equilibrio il mercato valutario. La banca centrale non interviene sul mercato dei cambi: l'offerta di moneta è sotto il suo completo controllo, e il tasso di cambio è libero di fluttuare secondo la domanda e l'offerta di valuta estera. Vediamo come questo framework risponde ai tre tipi classici di intervento economico: politica fiscale, politica monetaria e politica commerciale.
        </p>

        <h3 style={S.h3}>La politica fiscale</h3>
        <p style={S.p}>
          Supponiamo che il governo decida di stimolare la spesa pubblica — aumenta G, oppure riduce le imposte T. Nel modello di Mundell-Fleming l'aumento di G sposta la curva IS* verso destra: per ogni livello di e, la spesa programmata è più alta, quindi il mercato dei beni si equilibra su un Y maggiore. Ma LM* è verticale, e determina univocamente Y. Dunque l'intersezione IS*-LM* nuova sta sulla stessa verticale della precedente: <strong>Y non cambia</strong>, e il nuovo punto di intersezione è sopra quello vecchio: e deve aumentare.
        </p>
        <p style={S.p}>
          L'intuizione è la seguente: l'aumento di G produce inizialmente un eccesso di domanda di beni. Questo fa aumentare la domanda di moneta, che spinge il tasso r leggermente al di sopra di r*. I capitali stranieri affluiscono, attratti dal differenziale di interesse. L'affluenza di capitali causa un apprezzamento del cambio (↑e). L'apprezzamento rende le esportazioni nette meno competitive, NX diminuisce. Il meccanismo continua finché l'aumento di G è esattamente compensato dalla diminuzione di NX: ΔG = −ΔNX, e il reddito resta invariato. <strong>La politica fiscale non riesce a modificare il reddito perché viene completamente neutralizzata dall'apprezzamento del cambio.</strong>
        </p>

        <h3 style={S.h3}>La politica monetaria</h3>
        <p style={S.p}>
          Supponiamo ora che la banca centrale aumenti l'offerta di moneta. L'aumento di M/P sposta la curva LM* verso destra (l'equilibrio del mercato della moneta richiede ora un Y più alto). IS* non si muove. Il nuovo equilibrio ha Y più alto e <em>e più basso</em> (deprezzamento).
        </p>
        <p style={S.p}>
          L'intuizione: ↑M/P tende a far scendere r sotto r*. I capitali escono dal paese alla ricerca di rendimenti più alti all'estero. La fuoriuscita di capitali fa deprezzare la moneta (↓e). Il deprezzamento rende le esportazioni più competitive, NX aumenta, Y aumenta. A differenza dell'economia chiusa, <strong>il canale di trasmissione della politica monetaria non è il tasso di interesse ma il tasso di cambio</strong>. In cambi flessibili la politica monetaria è molto efficace nello stimolare il reddito.
        </p>

        <h3 style={S.h3}>Le politiche commerciali</h3>
        <p style={S.p}>
          Un dazio, una quota, o qualsiasi restrizione all'importazione riduce le importazioni a parità di altri fattori — aumenta dunque NX a parità di e. La curva IS* si sposta verso destra (esattamente come per un ↑G). Ma di nuovo LM* è verticale: Y non cambia, il cambio si apprezza, le esportazioni nette "private" si riducono di quanto le restrizioni avevano aumentato l'NX "politico". <strong>Il protezionismo non aumenta il reddito nazionale</strong> — riduce il volume complessivo del commercio estero ma lascia invariata la bilancia commerciale in termini di valore.
        </p>

        <MundellFlemingFlexible />
      </div>

      {/* ── SEZ 14.3: Cambi fissi ───────────────────────────────────── */}
      <div className="content-section glass-panel" style={{ padding: '2rem 2.5rem', marginBottom: '2rem' }}>
        <h2 style={S.h2}>14.3 Una piccola economia aperta in regime di cambi fissi</h2>
        <p style={S.p}>
          Passiamo ora al caso del <strong>regime di cambi fissi</strong>. In un sistema di cambi fissi, la banca centrale si impegna a comprare e vendere la propria valuta a un tasso di cambio predefinito contro una valuta di riferimento (o un paniere di valute, o l'oro). L'offerta di moneta diventa endogena: la BC deve accomodare ogni domanda/offerta di cambio per mantenere il tasso fissato.
        </p>

        <h3 style={S.h3}>Il funzionamento di un sistema di cambi fissi</h3>
        <p style={S.p}>
          In un sistema di cambi fissi, la banca centrale si impegna a mantenere il tasso di cambio a un livello prefissato. Quando la domanda di valuta nazionale aumenta, la BC deve vendere valuta nazionale (comprando valuta estera) per evitare un apprezzamento. Quando la domanda cala, la BC deve comprare valuta nazionale (vendendo riserve estere) per evitare un deprezzamento. Queste operazioni influenzano direttamente la base monetaria: vendere valuta nazionale in cambio di valuta estera <em>aumenta</em> M; comprare valuta nazionale in cambio di riserve <em>riduce</em> M.
        </p>
        <p style={S.p}>
          L'implicazione è che in cambi fissi <strong>la banca centrale perde il controllo sull'offerta di moneta</strong>: M è determinata endogenamente dalla condizione che e = e̅ (valore fissato). La LM* non è più una verticale a Y = M/(P·L(·)) — è piuttosto una curva che si aggiusta per far sì che il cambio sia sempre al livello fissato. Di fatto, in cambi fissi la LM* "segue" la IS*: qualsiasi cosa sposti IS*, anche LM* si sposta in modo che l'equilibrio mantenga e = e̅.
        </p>

        <h3 style={S.h3}>La politica fiscale in cambi fissi</h3>
        <p style={S.p}>
          Il governo aumenta G. IS* si sposta verso destra. A parità di cambio, il nuovo equilibrio avrebbe bisogno di un cambio più apprezzato, ma la BC non lo permette: deve intervenire comprando valuta estera in grandi quantità, cioè <em>vendendo</em> valuta nazionale. Questa operazione aumenta l'offerta di moneta interna. LM* si sposta a destra fino a intersecare la nuova IS* esattamente al livello di cambio fissato e̅. Il risultato: <strong>Y aumenta</strong> di un ammontare pari all'intero moltiplicatore fiscale, senza effetto spiazzamento.
        </p>
        <p style={S.p}>
          Il risultato è particolarmente importante: <em>in cambi fissi, la politica fiscale è molto più efficace che in cambi flessibili</em>. L'aumento di G sposta IS*, la BC accomoda con un'espansione monetaria indotta, il reddito sale per intero. Questo capovolge il risultato del Capitolo 13: lì la politica fiscale aveva un effetto spiazzamento via tassi d'interesse; qui in cambi fissi, dato che r è ancorato a r*, la banca centrale <em>deve</em> espandere l'offerta di moneta per mantenere il cambio, quindi l'espansione fiscale si trasforma automaticamente in un policy mix fisca+monetario.
        </p>

        <h3 style={S.h3}>La politica monetaria in cambi fissi</h3>
        <p style={S.p}>
          Supponiamo che la BC tenti di aumentare l'offerta di moneta vendendo titoli al settore privato (operazione di mercato aperto). LM* si sposta a destra. Per mantenere l'equilibrio del mercato valutario a e = e̅, il cambio dovrebbe deprezzarsi. Ma la BC è impegnata a mantenerlo: <em>deve</em> comprare valuta nazionale vendendo riserve estere. L'operazione contrae l'offerta di moneta esattamente di quanto l'aveva appena aumentata. LM* torna in posizione iniziale. Risultato: <strong>Y resta invariato</strong> — la politica monetaria è totalmente inefficace in cambi fissi.
        </p>
        <div style={S.keyBox}>
          <strong>Perdita di autonomia monetaria</strong>: in un regime di cambi fissi con perfetta mobilità dei capitali, la banca centrale <em>non può</em> avere una politica monetaria autonoma. L'offerta di moneta è endogena. Questa è la manifestazione più concreta del trilemma di Mundell: cambi fissi + mobilità capitali implicano rinunciare all'autonomia monetaria. È il motivo per cui i paesi che entrano in un sistema come l'euro devono accettare di cedere la politica monetaria alla BCE.
        </div>

        <h3 style={S.h3}>Le politiche commerciali in cambi fissi</h3>
        <p style={S.p}>
          Sorprendentemente, le politiche commerciali restrittive <em>funzionano</em> in cambi fissi. Un dazio sposta IS* a destra (riduce importazioni, aumenta NX). In cambi flessibili, il cambio si sarebbe apprezzato annullando l'effetto. In cambi fissi, la BC accomoda l'apprezzamento stampando moneta: LM* si sposta a destra, e Y aumenta. Di nuovo, il meccanismo è l'espansione monetaria indotta.
        </p>

        <MundellFlemingFixed />

        <div style={S.caseCard}>
          <div style={S.caseTitle}>ANALISI DI UN CASO — La svalutazione e l'uscita dalla Grande Depressione</div>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            La Grande Depressione degli anni 1930 fu un problema mondiale. Il crollo della produzione e dell'occupazione non fu limitato agli Stati Uniti, anche se con diversa intensità toccò tutti i paesi industrializzati dell'epoca. Al tempo operava il <strong>gold standard</strong> — un sistema in cui le monete erano convertibili in oro a un tasso fissato. Era un tipico regime di cambi fissi.
          </p>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            Il modello di Mundell-Fleming suggerisce che il gold standard abbia aggravato la depressione: con cambi fissi, i paesi che subivano uscite di oro dovevano contrarre l'offerta di moneta (la LM* si spostava a sinistra), aumentando r e affossando l'economia. La politica monetaria era inefficace come strumento anti-crisi, e la politica fiscale richiedeva deficit pubblici allora considerati eretici.
          </p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            Uscire dal gold standard fu la chiave per la ripresa. I paesi che abbandonarono la convertibilità prima (Regno Unito nel 1931, Stati Uniti nel 1933) ripresero a crescere prima di quelli che rimasero fedeli al vecchio sistema (Francia, Belgio, Olanda, che si aggrapparono al <em>gold bloc</em> fino al 1935–36). Lo studio classico di Eichengreen e Sachs (1985) mostra una correlazione netta fra data di uscita dal gold standard e rapidità della ripresa. Interpretazione in Mundell-Fleming: uscire da e̅ ha restituito autonomia alla politica monetaria; LM* poté tornare a spostarsi liberamente; l'espansione monetaria divenne possibile; le esportazioni ebbero un boost via deprezzamento.
          </p>
        </div>
      </div>

      {/* ── SEZ 14.4: Differenziali dei tassi ───────────────────────── */}
      <div className="content-section glass-panel" style={{ padding: '2rem 2.5rem', marginBottom: '2rem' }}>
        <h2 style={S.h2}>14.4 Differenziali dei tassi di interesse</h2>
        <p style={S.p}>
          Fino a questo momento abbiamo assunto r = r*. In pratica, i tassi di interesse dei vari paesi non sono quasi mai esattamente uguali. Il tasso di interesse domestico di una piccola economia aperta può essere diverso dal tasso mondiale r* per due motivi principali: il <strong>rischio paese</strong> e le <strong>aspettative di variazione del cambio</strong>.
        </p>

        <h3 style={S.h3}>Il rischio paese e le aspettative di variazione del cambio</h3>
        <p style={S.p}>
          Quando un paese è in crisi politica o economica, gli investitori esteri richiedono un premio per detenere attività denominate nella sua valuta. Questo premio si riflette in un tasso di interesse domestico più alto di r*:
        </p>
        <div style={S.formula}>
          r = r* + θ
        </div>
        <p style={S.p}>
          dove θ è il premio di rischio. θ può salire improvvisamente in una crisi di fiducia: il caso di Argentina, Messico, Sud-Est asiatico negli anni '90 sono esempi classici. Similarmente, se ci si aspetta un deprezzamento del cambio, gli investitori richiederanno un rendimento aggiuntivo pari all'entità del deprezzamento atteso. Questa è la condizione di <em>parità scoperta dei tassi di interesse</em>:
        </p>
        <div style={S.formula}>
          r − r* = (e<sup>e</sup> − e)/e
        </div>

        <h3 style={S.h3}>Shock al rischio paese e al premio di cambio</h3>
        <p style={S.p}>
          Uno shock negativo al rischio paese aumenta θ. Il tasso domestico r sale sopra r*. Gli effetti nel modello di Mundell-Fleming sono ambigui: da un lato, l'aumento di r deprime gli investimenti (IS si sposta a sinistra); dall'altro, il rialzo del rendimento attira capitali esteri (in principio), spingendo il cambio ad apprezzarsi. Nel caso in cui il premio di rischio rifletta aspettative di deprezzamento, gli investitori richiedono r alto <em>insieme</em> a un cambio deprezzato. Il paese si trova in una situazione pessima: tassi alti <em>e</em> cambio debole <em>e</em> produzione in calo.
        </p>

        <div style={S.caseCard}>
          <div style={S.caseTitle}>ANALISI DI UN CASO — Crisi finanziarie internazionali</div>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            <strong>Messico 1994–95</strong>: nel 1994 il Messico subì un massiccio deflusso di capitali. Il peso crollò (da 3,5 a 7 peso/dollaro in sei mesi). La crisi nacque da una combinazione di deficit commerciale, indebolimento politico (rivolta zapatista, assassinio del candidato presidenziale Colosio), e perdita di fiducia nella sostenibilità del cambio fisso al dollaro. Nel tentativo di difendere il cambio, il Messico esaurì le riserve valutarie. Alla fine, svalutò il peso e liberalizzò il cambio. L'effetto di breve periodo fu devastante: PIL −6% nel 1995. Ma la svalutazione rilanciò le esportazioni e permise la ripresa negli anni successivi.
          </p>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            <strong>Asia 1997–98</strong>: Thailandia, Indonesia, Corea del Sud, Malesia e Filippine avevano cambi fissi al dollaro. Afflussi massicci di capitali esteri a breve termine avevano gonfiato bolle immobiliari e creditizie. Quando nel 1997 gli investitori cominciarono a temere una svalutazione del baht thailandese, partì un'ondata di fuga di capitali che fu contagiosa. I paesi furono costretti ad abbandonare i cambi fissi uno dopo l'altro. Il baht, la rupiah, il won persero tra il 40% e l'80% del loro valore. Le banche locali, che si erano indebitate in dollari ma prestato in valuta locale, fallirono in massa. Il PIL di Indonesia e Thailandia calò di oltre il 10% nel 1998.
          </p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            <strong>Argentina 2001–02</strong>: l'Argentina aveva adottato un currency board con cambio fisso 1:1 con il dollaro dal 1991 per porre fine all'iperinflazione. Per quasi un decennio il sistema funzionò. Poi la crisi fiscale, il contagio brasiliano (1999) e l'apprezzamento del dollaro portarono a tensioni insostenibili. Alla fine del 2001 l'Argentina dichiarò default sul debito estero e abbandonò il currency board. Il peso crollò da 1 a 4 per dollaro, i depositi bancari furono congelati (<em>corralito</em>), la disoccupazione toccò il 25%. La ripresa fu paradossalmente rapida grazie al cambio deprezzato che rilanciò le esportazioni.
          </p>
        </div>
      </div>

      {/* ── SEZ 14.5: Cambi fissi vs flessibili ─────────────────────── */}
      <div className="content-section glass-panel" style={{ padding: '2rem 2.5rem', marginBottom: '2rem' }}>
        <h2 style={S.h2}>14.5 I tassi di cambio dovrebbero essere fissi o flessibili?</h2>
        <p style={S.p}>
          Avendo analizzato il funzionamento del modello di Mundell-Fleming in entrambi i regimi, ora possiamo domandarci: quale regime di cambio è migliore? Non c'è una risposta universale — dipende dalle caratteristiche del paese e dal contesto internazionale.
        </p>

        <h3 style={S.h3}>Vantaggi e svantaggi dei cambi flessibili</h3>
        <p style={S.p}>
          <strong>Vantaggi</strong>: (1) autonomia monetaria — la BC mantiene il controllo dell'offerta di moneta e può usarla per stabilizzare l'economia. (2) Aggiustamento automatico ai differenziali di inflazione: un paese con più alta inflazione vede il suo cambio deprezzarsi, mantenendo competitività. (3) Protezione dagli shock esteri: in caso di recessione mondiale, il cambio può deprezzarsi e sostenere le esportazioni.
        </p>
        <p style={S.p}>
          <strong>Svantaggi</strong>: (1) volatilità del cambio, che crea incertezza per imprese importatrici/esportatrici. (2) Rischio di volatilità speculativa non giustificata da fondamentali (bolle valutarie). (3) Possibile instabilità finanziaria se il sistema bancario ha forti posizioni in valuta estera.
        </p>

        <h3 style={S.h3}>Vantaggi e svantaggi dei cambi fissi</h3>
        <p style={S.p}>
          <strong>Vantaggi</strong>: (1) stabilità e prevedibilità del cambio, che riduce i costi di transazione per il commercio internazionale. (2) Disciplina per la politica monetaria domestica: l'ancoraggio a una valuta stabile obbliga a mantenere bassa l'inflazione. (3) Credibilità anti-inflazionistica, particolarmente importante per economie con storia di alta inflazione.
        </p>
        <p style={S.p}>
          <strong>Svantaggi</strong>: (1) perdita di autonomia monetaria (no risposta a shock asimmetrici). (2) Vulnerabilità a crisi speculative: se i mercati credono che il cambio non sia sostenibile, attaccano la valuta fino a forzare la svalutazione. (3) Aggiustamento lento: senza svalutazione, gli squilibri di competitività possono essere corretti solo via deflazione interna, un processo penoso e lungo.
        </p>

        <h3 style={S.h3}>Il trilemma di Mundell (la trinità impossibile)</h3>
        <p style={S.p}>
          Il <strong>trilemma della politica economica</strong> afferma che è impossibile avere contemporaneamente tutte e tre queste caratteristiche: mobilità perfetta dei capitali, cambi fissi, e politica monetaria autonoma. Un paese deve scegliere quali due tenere:
        </p>
        <ul style={{ color: 'var(--text-secondary)', paddingLeft: '1.5rem', marginBottom: '1rem', lineHeight: 1.9 }}>
          <li><strong>Mobilità + cambi fissi</strong> → no autonomia (es: Hong Kong, paesi euro prima di entrare).</li>
          <li><strong>Mobilità + autonomia</strong> → no cambi fissi (es: USA, Regno Unito, Giappone).</li>
          <li><strong>Cambi fissi + autonomia</strong> → no mobilità capitali (es: Cina per molti anni, Bretton Woods prima del 1971).</li>
        </ul>

        <div style={S.caseCard}>
          <div style={S.caseTitle}>ANALISI DI UN CASO — Il dibattito intorno all'euro</div>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            Se ci si domanda di rivalutazione gli Stati Uniti e il Regno Unito, si può constatare che la scelta è caduta sul regime di cambi flessibili. Se si rivolge lo sguardo all'Eurozona, si può constatare che la scelta è caduta sul regime di cambio fisso (o meglio, l'adozione di una moneta unica). L'euro è il più grande esperimento mondiale di cambio fisso irrevocabile: 19 paesi hanno rinunciato alle proprie valute nazionali adottando un'unica valuta gestita dalla BCE.
          </p>
          <p style={{ ...S.p, marginBottom: '0.5rem' }}>
            I vantaggi erano chiari: eliminazione del rischio di cambio all'interno dell'area, riduzione dei costi di transazione, integrazione dei mercati finanziari, credibilità anti-inflazionistica, ruolo dell'euro come valuta di riserva internazionale. Ma i critici avevano previsto il problema: l'area euro non è un'<em>area valutaria ottimale</em> nel senso di Mundell. I paesi membri sono troppo eterogenei, la mobilità del lavoro tra paesi è limitata, e non c'è un bilancio federale significativo che possa attivare trasferimenti verso le regioni in crisi.
          </p>
          <p style={{ ...S.p, marginBottom: 0 }}>
            La crisi del 2010–12 mostrò il problema: la Grecia, l'Irlanda, il Portogallo, la Spagna e l'Italia subirono shock asimmetrici (crisi immobiliare, perdita di competitività) e non poterono svalutare. L'unica valvola era l'austerità interna: tagli ai salari, disoccupazione massiva, deflazione. La Grecia perse circa il 25% del PIL. Solo l'intervento della BCE (<em>Whatever it takes</em> di Draghi, luglio 2012, seguito da OMT e QE) riportò stabilità. Oggi il dibattito continua: l'euro ha bisogno di un'unione fiscale per funzionare bene, ma l'integrazione politica è ancora lontana.
          </p>
        </div>
      </div>

      {/* ── SEZ 14.6: Modello con prezzi variabili ──────────────────── */}
      <div className="content-section glass-panel" style={{ padding: '2rem 2.5rem', marginBottom: '2rem' }}>
        <h2 style={S.h2}>14.6 Dal breve al lungo periodo: il modello di Mundell-Fleming con prezzi variabili</h2>
        <p style={S.p}>
          Fino qui abbiamo analizzato il modello di Mundell-Fleming per il breve periodo, in cui i prezzi sono rigidi. Ma possiamo estendere il modello al medio periodo lasciando che P si aggiusti lentamente verso il livello coerente con Y_n. Nel lungo periodo, Y = Y_n e il modello determina il livello dei prezzi e quello del cambio reale, non di Y.
        </p>
        <p style={S.p}>
          La logica è la stessa del Capitolo 13: uno shock di domanda sposta Y fuori da Y_n nel breve periodo, poi i prezzi si aggiustano fino a riportare Y a Y_n. Se Y &gt; Y_n, P sale, M/P scende, LM* si sposta a sinistra fino a riportare Y a Y_n. Nel frattempo, il cambio nominale e il cambio reale si aggiustano. Un'espansione monetaria, ad esempio, produce nel breve periodo un boom di Y e un deprezzamento nominale; nel lungo periodo i prezzi salgono, M/P torna al livello originale, Y torna a Y_n, ma il cambio nominale rimane più deprezzato e il cambio reale torna al livello iniziale (neutralità monetaria di lungo periodo).
        </p>
      </div>

      {/* ── SEZ 14.7: Conclusioni ───────────────────────────────────── */}
      <div className="content-section glass-panel" style={{ padding: '2rem 2.5rem', marginBottom: '2rem', background: 'rgba(67,56,202,0.04)', border: '1px solid rgba(67,56,202,0.15)' }}>
        <h2 style={{ ...S.h2, marginTop: 0 }}>In Sintesi</h2>
        <ol style={{ color: 'var(--text-secondary)', lineHeight: 1.9, paddingLeft: '1.5rem' }}>
          <li>Il modello di Mundell-Fleming è l'equivalente del modello IS-LM per una piccola economia aperta. Prende per dato il livello dei prezzi e mostra quali forze provocano le fluttuazioni del reddito e del tasso di cambio.</li>
          <li>Il modello di Mundell-Fleming dimostra che, in cambi flessibili, la politica fiscale non influenza il reddito aggregato: un'espansione fiscale fa apprezzare il cambio e riduce le esportazioni nette. La politica monetaria, invece, è molto efficace: un'espansione monetaria fa deprezzare il cambio, aumenta le esportazioni nette, e aumenta il reddito.</li>
          <li>Il modello di Mundell-Fleming dimostra che, in cambi fissi, la politica monetaria non influenza il reddito aggregato (la banca centrale perde autonomia). La politica fiscale, invece, è molto efficace perché la BC deve accomodare i flussi di capitale con un'espansione monetaria indotta.</li>
          <li>Gli investimenti esteri sono guidati sia da r sia da considerazioni di rischio paese e aspettative di cambio. Shock al premio di rischio possono causare brusche uscite di capitale, spingendo simultaneamente r verso l'alto e il cambio verso il basso, con effetti recessivi.</li>
          <li>Si sono vantaggi ed svantaggi ad adottare un regime di cambio fisso o un regime di cambio flessibile. Per questo motivo, gli economisti non hanno una risposta unica alla domanda se sia meglio avere tassi fissi o flessibili. Dipende dalle circostanze del paese.</li>
          <li>Nel decidere quale regime di cambio adottare, i responsabili della politica economica sono vincolati dal fatto che i paesi non possono avere contemporaneamente piena libertà di movimento dei capitali, cambi fissi e una politica monetaria autonoma (trilemma di Mundell).</li>
        </ol>
      </div>

    </div>
  );
}
