import { useState } from 'react';
import './macro.css';

// ══════════════════════════════════════════════════════════════
//  MATH HELPERS
// ══════════════════════════════════════════════════════════════
const f       = (k, a) => Math.pow(Math.max(k, 1e-9), a);
const steadyK = (s, d, a) => Math.pow(s / d, 1 / (1 - a));
const goldenK = (a, d) => Math.pow(a / d, 1 / (1 - a));

// ══════════════════════════════════════════════════════════════
//  SVG ENGINE
// ══════════════════════════════════════════════════════════════
const W = 520, H = 290;
const PL = 52, PR = 18, PT = 18, PB = 40;
const cW = W - PL - PR;
const cH = H - PT - PB;

const toX = (v, max) => PL + (v / max) * cW;
const toY = (v, yMin, yMax) => {
  const range = yMax - yMin;
  const clamped = Math.max(yMin, Math.min(v, yMax));
  return PT + (1 - (clamped - yMin) / range) * cH;
};

function buildPath(fn, kMax, yMin, yMax, n = 200) {
  const pts = [];
  for (let i = 1; i <= n; i++) {
    const k = (i / n) * kMax;
    const y = fn(k);
    if (!isFinite(y)) continue;
    pts.push(`${toX(k, kMax).toFixed(1)},${toY(y, yMin, yMax).toFixed(1)}`);
  }
  return pts.length ? `M${pts.join('L')}` : '';
}

function Axes({ kMax, yMin = 0, yMax, xLabel = 'k', yLabel = '', nX = 5, nY = 4 }) {
  const xTicks = Array.from({ length: nX + 1 }, (_, i) => (i / nX) * kMax);
  const yTicks = Array.from({ length: nY + 1 }, (_, i) => yMin + (i / nY) * (yMax - yMin));
  return (
    <g>
      {xTicks.map(k => (
        <g key={k}>
          <line x1={toX(k, kMax)} y1={PT} x2={toX(k, kMax)} y2={PT + cH} stroke="#e2e8f0" strokeWidth={0.8} />
          <text x={toX(k, kMax)} y={PT + cH + 15} textAnchor="middle" fontSize={10} fill="#94a3b8">
            {k >= 10 ? k.toFixed(0) : k.toFixed(1)}
          </text>
        </g>
      ))}
      {yTicks.map(y => (
        <g key={y}>
          <line x1={PL} y1={toY(y, yMin, yMax)} x2={PL + cW} y2={toY(y, yMin, yMax)} stroke="#e2e8f0" strokeWidth={0.8} />
          <text x={PL - 6} y={toY(y, yMin, yMax) + 4} textAnchor="end" fontSize={10} fill="#94a3b8">
            {Math.abs(y) < 0.005 ? '0' : y.toFixed(2)}
          </text>
        </g>
      ))}
      {/* Zero line if yMin < 0 */}
      {yMin < 0 && (
        <line x1={PL} y1={toY(0, yMin, yMax)} x2={PL + cW} y2={toY(0, yMin, yMax)}
          stroke="#94a3b8" strokeWidth={1.2} strokeDasharray="4,3" />
      )}
      <line x1={PL} y1={PT} x2={PL} y2={PT + cH} stroke="#475569" strokeWidth={1.5} />
      <line x1={PL} y1={PT + cH} x2={PL + cW} y2={PT + cH} stroke="#475569" strokeWidth={1.5} />
      <text x={PL + cW + 4} y={PT + cH + 3} fontSize={13} fill="#475569" fontStyle="italic">{xLabel}</text>
      {yLabel && (
        <text x={PL - 6} y={PT - 5} fontSize={12} fill="#64748b" fontStyle="italic">{yLabel}</text>
      )}
    </g>
  );
}

function SliderControl({ label, symbol, value, min, max, step, onChange, color }) {
  return (
    <div className="slider-row">
      <div className="slider-header">
        <span className="slider-label">{label} <em>({symbol})</em></span>
        <span className="slider-value" style={{ color }}>{value.toFixed(2)}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={e => onChange(+e.target.value)}
        style={{ accentColor: color }} />
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAFICO 1 — Funzione di Produzione  y = k^α
// ══════════════════════════════════════════════════════════════
function ProductionGraph() {
  const [alpha, setAlpha] = useState(0.40);
  const kMax = 10, yMin = 0, yMax = 4;

  const fPath = buildPath(k => f(k, alpha), kMax, yMin, yMax);
  const checkPoints = [1, 3, 6, 9];

  return (
    <div className="graph-block">
      <div className="graph-title">Grafico 1 — Funzione di Produzione per Occupato: y = f(k) = k<sup>α</sup></div>
      <div className="graph-row">
        <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: '100%' }}>
          <Axes kMax={kMax} yMin={yMin} yMax={yMax} xLabel="k" yLabel="y" nX={5} nY={4} />

          {/* Production curve */}
          <path d={fPath} fill="none" stroke="#0284c7" strokeWidth={2.8} strokeLinecap="round" />

          {/* Curve label */}
          <text x={toX(7.5, kMax) + 6} y={toY(f(7.5, alpha), yMin, yMax) - 10}
            fontSize={13} fill="#0284c7" fontWeight="bold" fontStyle="italic">
            y = k<tspan dy="-5" fontSize={9}>α</tspan>
          </text>

          {/* Points showing diminishing MPK */}
          {checkPoints.map(k => {
            const y = f(k, alpha);
            const mpk = alpha * Math.pow(k, alpha - 1);
            return (
              <g key={k}>
                <circle cx={toX(k, kMax)} cy={toY(y, yMin, yMax)} r={5} fill="white" stroke="#0284c7" strokeWidth={2} />
                <text x={toX(k, kMax) + 7} y={toY(y, yMin, yMax) - 7}
                  fontSize={9} fill="#64748b">
                  PMK={mpk.toFixed(3)}
                </text>
              </g>
            );
          })}
        </svg>

        <div className="graph-controls">
          <SliderControl
            label="Elasticità del capitale" symbol="α"
            value={alpha} min={0.15} max={0.75} step={0.01}
            onChange={setAlpha} color="#0284c7"
          />
          <div className="insight-mini">
            <strong>Prodotto Marginale del Capitale:</strong><br />
            PMK(k=1) = <span style={{ color: '#0284c7' }}>{(alpha * Math.pow(1, alpha - 1)).toFixed(3)}</span><br />
            PMK(k=4) = <span style={{ color: '#0284c7' }}>{(alpha * Math.pow(4, alpha - 1)).toFixed(3)}</span><br />
            PMK(k=9) = <span style={{ color: '#0284c7' }}>{(alpha * Math.pow(9, alpha - 1)).toFixed(3)}</span><br />
            <br />
            <strong>→ PMK sempre positivo ma decrescente</strong><br />
            <em>Rendimenti marginali decrescenti</em>
          </div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAFICO 2 — Stato Stazionario  s·f(k) = δ·k
// ══════════════════════════════════════════════════════════════
function SteadyStateGraph() {
  const [s, setS]         = useState(0.25);
  const [delta, setDelta] = useState(0.10);
  const [alpha, setAlpha] = useState(0.40);

  const kStar = steadyK(s, delta, alpha);
  const kMax  = Math.min(Math.max(kStar * 2.8, 8), 22);
  const yMax  = Math.min(delta * kMax * 1.3, 5);
  const yMin  = 0;

  const yStar = f(kStar, alpha);
  const iStar = s * yStar;
  const cStar = yStar - iStar;

  const fPath   = buildPath(k => f(k, alpha), kMax, yMin, yMax);
  const sfPath  = buildPath(k => s * f(k, alpha), kMax, yMin, yMax);
  const dkPath  = buildPath(k => delta * k, kMax, yMin, yMax);

  const kxClamped = Math.min(kStar, kMax * 0.96);
  const kxVisible = kStar < kMax * 0.96;

  return (
    <div className="graph-block">
      <div className="graph-title">Grafico 2 — Stato Stazionario: accumulo di capitale nel tempo</div>
      <div className="graph-row">
        <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: '100%' }}>
          <Axes kMax={kMax} yMin={yMin} yMax={yMax} xLabel="k" nX={5} nY={4} />

          {/* f(k) tratteggiata */}
          <path d={fPath} fill="none" stroke="#94a3b8" strokeWidth={1.5} strokeDasharray="5,3" />
          <text x={toX(kMax * 0.82, kMax) + 4} y={toY(f(kMax * 0.82, alpha), yMin, yMax) - 9}
            fontSize={12} fill="#94a3b8" fontStyle="italic">f(k)</text>

          {/* s·f(k) — investimento */}
          <path d={sfPath} fill="none" stroke="#059669" strokeWidth={2.8} strokeLinecap="round" />
          <text x={toX(kMax * 0.75, kMax) + 4} y={toY(s * f(kMax * 0.75, alpha), yMin, yMax) - 9}
            fontSize={12} fill="#059669" fontWeight="bold" fontStyle="italic">s·f(k)</text>

          {/* δ·k — deprezzamento */}
          <path d={dkPath} fill="none" stroke="#dc2626" strokeWidth={2.8} strokeLinecap="round" />
          <text x={toX(kMax * 0.88, kMax)} y={toY(delta * kMax * 0.88, yMin, yMax) + 16}
            fontSize={12} fill="#dc2626" fontWeight="bold" fontStyle="italic">δk</text>

          {kxVisible && (
            <g>
              {/* Zona consumo c* */}
              <line
                x1={toX(kxClamped, kMax)} y1={toY(yStar, yMin, yMax)}
                x2={toX(kxClamped, kMax)} y2={toY(iStar, yMin, yMax)}
                stroke="#0284c7" strokeWidth={3} />
              <text x={toX(kxClamped, kMax) + 7} y={(toY(yStar, yMin, yMax) + toY(iStar, yMin, yMax)) / 2 + 4}
                fontSize={10} fill="#0284c7" fontWeight="600">c*</text>

              {/* Zona investimento i* */}
              <line
                x1={toX(kxClamped, kMax)} y1={toY(iStar, yMin, yMax)}
                x2={toX(kxClamped, kMax)} y2={toY(0, yMin, yMax)}
                stroke="#059669" strokeWidth={3} opacity={0.5} />
              <text x={toX(kxClamped, kMax) + 7} y={toY(iStar / 2, yMin, yMax) + 4}
                fontSize={10} fill="#059669">i*</text>

              {/* Verticale tratteggiata */}
              <line
                x1={toX(kxClamped, kMax)} y1={toY(iStar, yMin, yMax)}
                x2={toX(kxClamped, kMax)} y2={PT + cH}
                stroke="#4338ca" strokeWidth={1.5} strokeDasharray="4,3" />

              {/* Punto di intersezione */}
              <circle cx={toX(kxClamped, kMax)} cy={toY(iStar, yMin, yMax)} r={7} fill="#4338ca" />
              <circle cx={toX(kxClamped, kMax)} cy={toY(iStar, yMin, yMax)} r={4} fill="white" />

              {/* Label k* */}
              <text x={toX(kxClamped, kMax)} y={PT + cH + 15}
                textAnchor="middle" fontSize={12} fill="#4338ca" fontWeight="bold">k*</text>
            </g>
          )}
        </svg>

        <div className="graph-controls">
          <SliderControl label="Tasso di risparmio" symbol="s"
            value={s} min={0.05} max={0.45} step={0.01} onChange={setS} color="#059669" />
          <SliderControl label="Deprezzamento" symbol="δ"
            value={delta} min={0.05} max={0.28} step={0.01} onChange={setDelta} color="#dc2626" />
          <SliderControl label="Elasticità capitale" symbol="α"
            value={alpha} min={0.20} max={0.70} step={0.01} onChange={setAlpha} color="#0284c7" />
          <div className="result-box">
            <div className="result-row">
              <span>k* = (s/δ)^(1/(1−α))</span>
              <span style={{ color: '#4338ca' }}>{kStar.toFixed(2)}</span>
            </div>
            <div className="result-row">
              <span>y* = f(k*)</span>
              <span style={{ color: '#475569' }}>{yStar.toFixed(3)}</span>
            </div>
            <div className="result-row">
              <span>i* = s·y*</span>
              <span style={{ color: '#059669' }}>{iStar.toFixed(3)}</span>
            </div>
            <div className="result-row">
              <span>c* = y* − i*</span>
              <span style={{ color: '#0284c7', fontWeight: 800 }}>{cStar.toFixed(3)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAFICO 3 — Effetto Variazione Tasso di Risparmio
// ══════════════════════════════════════════════════════════════
function SavingShiftGraph() {
  const [s1, setS1] = useState(0.18);
  const [s2, setS2] = useState(0.34);
  const alpha = 0.40;
  const delta = 0.10;

  const k1 = steadyK(s1, delta, alpha);
  const k2 = steadyK(s2, delta, alpha);
  const kMax = Math.min(Math.max(k2 * 2.8, 8), 22);
  const yMax = Math.min(delta * kMax * 1.3, 4);
  const yMin = 0;

  const sf1Path = buildPath(k => s1 * f(k, alpha), kMax, yMin, yMax);
  const sf2Path = buildPath(k => s2 * f(k, alpha), kMax, yMin, yMax);
  const dkPath  = buildPath(k => delta * k, kMax, yMin, yMax);

  const k1v = k1 < kMax * 0.96;
  const k2v = k2 < kMax * 0.96;

  return (
    <div className="graph-block">
      <div className="graph-title">Grafico 3 — Effetto di un Aumento del Tasso di Risparmio su k*</div>
      <div className="graph-row">
        <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: '100%' }}>
          <defs>
            <marker id="arr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="0 0,8 3,0 6" fill="#4338ca" />
            </marker>
          </defs>
          <Axes kMax={kMax} yMin={yMin} yMax={yMax} xLabel="k" nX={5} nY={4} />

          {/* δk */}
          <path d={dkPath} fill="none" stroke="#dc2626" strokeWidth={2.5} strokeLinecap="round" />
          <text x={toX(kMax * 0.88, kMax)} y={toY(delta * kMax * 0.88, yMin, yMax) + 16}
            fontSize={12} fill="#dc2626" fontStyle="italic">δk</text>

          {/* s1·f(k) — vecchio */}
          <path d={sf1Path} fill="none" stroke="#059669" strokeWidth={1.8}
            strokeDasharray="6,3" opacity={0.6} />
          <text x={toX(kMax * 0.65, kMax)} y={toY(s1 * f(kMax * 0.65, alpha), yMin, yMax) - 9}
            fontSize={11} fill="#059669" opacity={0.7} fontStyle="italic">s₁·f(k)</text>

          {/* s2·f(k) — nuovo */}
          <path d={sf2Path} fill="none" stroke="#059669" strokeWidth={2.8} strokeLinecap="round" />
          <text x={toX(kMax * 0.65, kMax)} y={toY(s2 * f(kMax * 0.65, alpha), yMin, yMax) - 9}
            fontSize={11} fill="#059669" fontWeight="bold" fontStyle="italic">s₂·f(k)</text>

          {/* k1* */}
          {k1v && (
            <g>
              <line x1={toX(k1, kMax)} y1={toY(s1 * f(k1, alpha), yMin, yMax)}
                x2={toX(k1, kMax)} y2={PT + cH}
                stroke="#94a3b8" strokeWidth={1.5} strokeDasharray="4,3" />
              <circle cx={toX(k1, kMax)} cy={toY(s1 * f(k1, alpha), yMin, yMax)} r={6} fill="#94a3b8" />
              <text x={toX(k1, kMax)} y={PT + cH + 15} textAnchor="middle"
                fontSize={11} fill="#94a3b8" fontWeight="bold">k₁*</text>
            </g>
          )}

          {/* k2* */}
          {k2v && (
            <g>
              <line x1={toX(k2, kMax)} y1={toY(s2 * f(k2, alpha), yMin, yMax)}
                x2={toX(k2, kMax)} y2={PT + cH}
                stroke="#4338ca" strokeWidth={1.5} strokeDasharray="4,3" />
              <circle cx={toX(k2, kMax)} cy={toY(s2 * f(k2, alpha), yMin, yMax)} r={6} fill="#4338ca" />
              <text x={toX(k2, kMax)} y={PT + cH + 15} textAnchor="middle"
                fontSize={11} fill="#4338ca" fontWeight="bold">k₂*</text>
            </g>
          )}

          {/* Freccia di transizione */}
          {k1v && k2v && k2 > k1 + 0.3 && (
            <line
              x1={toX(k1, kMax) + 10} y1={PT + cH - 18}
              x2={toX(k2, kMax) - 10} y2={PT + cH - 18}
              stroke="#4338ca" strokeWidth={2} markerEnd="url(#arr)" />
          )}
        </svg>

        <div className="graph-controls">
          <SliderControl label="Risparmio iniziale" symbol="s₁"
            value={s1} min={0.05} max={Math.max(0.06, s2 - 0.05)} step={0.01}
            onChange={v => setS1(Math.min(v, s2 - 0.05))} color="#94a3b8" />
          <SliderControl label="Nuovo risparmio" symbol="s₂"
            value={s2} min={Math.min(s1 + 0.05, 0.44)} max={0.48} step={0.01}
            onChange={v => setS2(Math.max(v, s1 + 0.05))} color="#059669" />
          <div className="result-box">
            <div className="result-row">
              <span>k₁* =</span><span style={{ color: '#64748b' }}>{k1.toFixed(2)}</span>
            </div>
            <div className="result-row">
              <span>k₂* =</span><span style={{ color: '#4338ca' }}>{k2.toFixed(2)}</span>
            </div>
            <div className="result-row">
              <span>Δk* =</span>
              <span style={{ color: '#059669', fontWeight: 800 }}>+{(k2 - k1).toFixed(2)}</span>
            </div>
            <div className="result-row">
              <span>Δy* =</span>
              <span style={{ color: '#0284c7' }}>+{(f(k2, alpha) - f(k1, alpha)).toFixed(3)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAFICO 4 — Regola Aurea:  max c* = f(k) − δk
// ══════════════════════════════════════════════════════════════
function GoldenRuleGraph() {
  const [delta, setDelta] = useState(0.15);
  const alpha = 0.40;

  const kGold  = goldenK(alpha, delta);
  const cGold  = f(kGold, alpha) - delta * kGold;
  // k_cross: where f(k)=δk → k^(α-1) = δ → k=(1/δ)^(1/(1-α))
  const kCross = Math.pow(1 / delta, 1 / (1 - alpha));
  const kMax   = kCross * 1.1;
  const yMax   = Math.max(cGold * 1.35, 0.3);
  const yMin   = 0;

  const cPath = buildPath(k => {
    const c = f(k, alpha) - delta * k;
    return Math.max(c, 0);
  }, kMax, yMin, yMax);

  const kGoldV = kGold < kMax * 0.97;

  return (
    <div className="graph-block">
      <div className="graph-title">Grafico 4 — Regola Aurea: livello di capitale che massimizza il consumo</div>
      <div className="graph-row">
        <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: '100%' }}>
          <defs>
            <linearGradient id="goldFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.02" />
            </linearGradient>
          </defs>
          <Axes kMax={kMax} yMin={yMin} yMax={yMax} xLabel="k*" yLabel="c*" nX={5} nY={4} />

          {/* Filled area under c* curve */}
          {cPath && (
            <path
              d={`${cPath}L${toX(kMax, kMax)},${toY(0, yMin, yMax)}L${toX(0, kMax)},${toY(0, yMin, yMax)}Z`}
              fill="url(#goldFill)" />
          )}

          {/* c*(k) curve */}
          <path d={cPath} fill="none" stroke="#d97706" strokeWidth={2.8} strokeLinecap="round" />
          <text x={toX(kMax * 0.15, kMax)} y={toY(f(kMax * 0.15, alpha) - delta * kMax * 0.15, yMin, yMax) - 12}
            fontSize={12} fill="#d97706" fontWeight="bold" fontStyle="italic">c* = f(k)−δk</text>

          {/* k★ vertical */}
          {kGoldV && (
            <g>
              <line x1={toX(kGold, kMax)} y1={toY(cGold, yMin, yMax)}
                x2={toX(kGold, kMax)} y2={PT + cH}
                stroke="#d97706" strokeWidth={1.5} strokeDasharray="5,3" />

              {/* Punto massimo */}
              <circle cx={toX(kGold, kMax)} cy={toY(cGold, yMin, yMax)} r={8} fill="#d97706" opacity={0.2} />
              <circle cx={toX(kGold, kMax)} cy={toY(cGold, yMin, yMax)} r={5} fill="#d97706" />

              {/* Label k★ */}
              <text x={toX(kGold, kMax)} y={PT + cH + 15}
                textAnchor="middle" fontSize={12} fill="#d97706" fontWeight="bold">k★</text>

              {/* Etichetta PMK = δ */}
              <rect x={toX(kGold, kMax) + 9} y={toY(cGold, yMin, yMax) - 24}
                width={68} height={20} rx={4} fill="white" fillOpacity={0.9}
                stroke="rgba(217,119,6,0.3)" strokeWidth={1} />
              <text x={toX(kGold, kMax) + 12} y={toY(cGold, yMin, yMax) - 10}
                fontSize={10} fill="#d97706" fontWeight="700">PMK = δ ✓</text>

              {/* Linea orizzontale c★ */}
              <line x1={PL} y1={toY(cGold, yMin, yMax)}
                x2={toX(kGold, kMax)} y2={toY(cGold, yMin, yMax)}
                stroke="#d97706" strokeWidth={1} strokeDasharray="3,2" opacity={0.5} />
            </g>
          )}
        </svg>

        <div className="graph-controls">
          <SliderControl label="Deprezzamento" symbol="δ"
            value={delta} min={0.08} max={0.35} step={0.01}
            onChange={setDelta} color="#d97706" />
          <div className="result-box">
            <div className="result-row">
              <span>k★ = (α/δ)^(1/(1−α))</span>
              <span style={{ color: '#d97706' }}>{kGold.toFixed(2)}</span>
            </div>
            <div className="result-row">
              <span>c★ = f(k★) − δk★</span>
              <span style={{ color: '#d97706', fontWeight: 800 }}>{cGold.toFixed(3)}</span>
            </div>
            <div className="result-row">
              <span>PMK = α·k★^(α−1)</span>
              <span style={{ color: '#059669' }}>{(alpha * Math.pow(kGold, alpha - 1)).toFixed(4)}</span>
            </div>
            <div className="result-row">
              <span>Verifica PMK = δ</span>
              <span style={{ color: '#059669' }}>
                {Math.abs(alpha * Math.pow(kGold, alpha - 1) - delta) < 0.0005 ? '✓ Esatto' : '≈ ✓'}
              </span>
            </div>
          </div>
          <div className="insight-mini" style={{ marginTop: '0.75rem' }}>
            <strong>Intuizione:</strong> al punto aureo, ogni euro di capitale aggiuntivo produce esattamente il suo costo di deprezzamento. Aggiungerne altro ridurrebbe il consumo netto.
          </div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  PAGINA PRINCIPALE — Capitolo 8
// ══════════════════════════════════════════════════════════════
export default function Cap8Solow() {
  return (
    <div className="macro-page">

      {/* ── HEADER ─────────────────────────────────────────── */}
      <div className="macro-header">
        <div className="chapter-badge">Capitolo 8 · Teoria della Crescita (Parte 1)</div>
        <h1 className="macro-title">
          <span className="gradient-text">L'accumulazione di capitale</span>
          <br />come fonte di crescita
        </h1>
        <p className="macro-subtitle">
          Il modello di crescita di Solow: come il risparmio, la crescita demografica e il progresso tecnologico influenzano il livello della produzione aggregata e la sua crescita nel tempo.
        </p>
      </div>

      {/* ── SEZIONE 8.1 — Il Modello di Solow Base ─────────── */}
      <section className="macro-section">
        <h2 className="section-title">8.1 Il Modello di Solow Base</h2>
        <div className="prose">
          <p>
            Il tema della crescita economica affascina chiunque si occupi di economia: <em>perché alcuni Paesi sono molto più ricchi di altri? E perché alcune nazioni crescono più rapidamente?</em> Dati del 2019 evidenziano discrepanze clamorose: il reddito pro capite negli Stati Uniti (circa 65.281 $) è di decine di volte superiore a quello dell'Etiopia (2.312 $). Per spiegare questa disuguaglianza spaziale e temporale, l'analisi statica (fotografica) non basta; occorre un modello dinamico (cinematografico). Il <strong>modello di crescita di Solow</strong>, introdotto negli anni '50 e base della teoria della crescita contemporanea, svolge esattamente questa funzione.
          </p>
          <p>
            L'ipotesi fondante del modello è che l'offerta di beni sia determinata da una funzione di produzione con <strong>rendimenti di scala costanti</strong>. Assumendo che la forza lavoro e la tecnologia siano (per ora) esogene e fisse, moltiplicando capitale (K) e lavoro (L) per uno stesso parametro *z*, la produzione (Y) aumenta della stessa proporzione: *zY = F(zK, zL)*.
          </p>
          <p>
            Questa assunzione è cruciale perché permette di analizzare il sistema *in rapporto alla dimensione della forza lavoro*. Ponendo *z = 1/L*, si ottiene la funzione di produzione espressa in termini di quantità <strong>per lavoratore (o pro capite)</strong>:
          </p>
        </div>

        <div className="formula-box">
          <div className="formula-label">Funzione di Produzione pro capite</div>
          <div className="formula-main">y = f(k)</div>
          <div className="formula-note">
            Dove *y = Y/L* indica la produzione per occupato e *k = K/L* il capitale per occupato. Essendo i rendimenti di scala costanti, per capire la produzione media basta conoscere la dotazione di capitale per lavoratore.
          </div>
        </div>

        <div className="prose">
          <p>
            La caratteristica distintiva della funzione *f(k)* è il <strong>prodotto marginale del capitale decrescente (PMK)</strong>. Il PMK indica la quantità addizionale di prodotto che un lavoratore genera quando riceve un'unità in più di capitale: *PMK = f(k+1) - f(k)*. <br/>
            Quando *k* è basso, il lavoratore ha pochi strumenti: fornirgli un'unità in più di capitale aumenta notevolmente la sua produttività. Quando *k* è già elevato, il lavoratore ha macchinari in abbondanza: attrezzature aggiuntive conferiranno un incremento di prodotto modesto. La pendenza della curva rappresenta esattamente il PMK.
          </p>
        </div>

        <ProductionGraph />
      </section>

      {/* ── SEZIONE 8.2 — Domanda, Offerta e Stato Stazionario ──── */}
      <section className="macro-section">
        <h2 className="section-title">La Domanda di Beni, Consumo e Investimento</h2>
        <div className="prose">
          <p>
            Nel modello di Solow, la domanda non è influenzata dalle preferenze dei consumatori, ma segue un'ipotesi aggregata semplificata: la produzione si suddivide tra <strong>consumo</strong> e <strong>investimento</strong> pro capite.
          </p>
          <p>
            <em>y = c + i</em>
          </p>
          <p>
            Si assume inoltre che la società risparmi una frazione costante del proprio reddito, determinata esogenamente dal <strong>tasso di risparmio *s*</strong> (con *0 &lt; s &lt; 1*). Di conseguenza, il consumo è pari alla parte non risparmiata del reddito:
          </p>
          <p className="indent-formula">
            <em>c = (1 - s) y</em>
          </p>
          <p>
            Sostituendo il consumo nell'identità contabile nazionale, si ottiene: <em>y = (1 - s)y + i</em>, ovvero <strong>i = s·y = s·f(k)</strong>. Questo mostra un principio fondamentale del modello di Solow in un'economia chiusa: il livello degli investimenti pro capite *i* è strettamente proporzionale alla produzione f(k) ed eguaglia in modo esatto il risparmio.
          </p>
          <h3 style={{marginTop:'2rem'}}>La variazione dello stock di capitale: Investimento e Deprezzamento</h3>
          <p>
            Il livello del capitale pro capite *k* non è statico. Esso evolve nel tempo sottoposto a due forze opposte: l'<strong>investimento</strong> (che ne accresce la dotazione) e il <strong>deprezzamento</strong> (l'ammortamento o logorio fisico, che la riduce).
          </p>
          <p>
            Assumendo che ogni anno una predeterminata quota <em>δ</em> dello stock di capitale esistente si logori, la relazione fondamentale dell'accumulo di capitale è descritta dalla seguente equazione differenziale:
          </p>
        </div>

        <div className="formula-box">
          <div className="formula-label">Variazione dello Stock di Capitale (Δk)</div>
          <div className="formula-main">Δk = s·f(k) - δ·k</div>
          <div className="formula-note">
            La variazione del capitale (*Δk*) è pari all'investimento pro capite lordo [*s·f(k)*] meno il deprezzamento totale pro capite [*δ·k*].
          </div>
        </div>

        <div className="prose">
          <p>
            Il concetto chiave introdotto dal modello è lo <strong>Stato Stazionario (Steady State)</strong>. Esiste sempre un livello di capitale particolare, denotato con <em>k*</em>, in corrispondenza del quale l'investimento pareggia perfettamente il deprezzamento: <em>s·f(k*) = δ·k*</em>. In tale circostanza, Δk=0, ovvero il sistema economico si stabilizza: la quantità di dotazione per occupato non aumenta più né collassa.
          </p>
          <p>
            Lo stato stazionario funge da attrattore. Se l'economia si trova in un punto dove <em>k &lt; k*</em>, l'investimento supera l'ammortamento logorante: lo stock di capitale *k* aumenta incessantemente. Viceversa se  <em>k &gt; k*</em>.
          </p>
        </div>

        <SteadyStateGraph />
      </section>

      {/* ── SEZIONE 8.3 — Effetto del risparmio sulla crescita ──── */}
      <section className="macro-section">
        <h2 className="section-title">8.3 L'Effetto del Risparmio sulla Crescita</h2>
        <div className="prose">
          <p>
            Cosa accade all'economia se il tasso di risparmio aumenta? Nel modello di Solow, le decisioni dei governi di variare le politiche fiscali possono far crescere <em>s</em>. Se l'economia parte da uno stato stazionario, un aumento di <em>s₁</em> ad <em>s₂</em> sposta verticalmente la curva degli investimenti <em>s·f(k)</em> verso l'alto.
          </p>
          <p>
            Il vecchio equilibrio si esaurisce poiché ora <em>s₂·f(k) &gt; δk</em>. Si creeranno così investimenti netti positivi, inibendo la stazionarietà e costringendo il capitale pro capite a crescere dinamicamente fino a tangere un <em>nuovo e più elevato stato stazionario k₂*</em>. 
          </p>
          <p>
            <strong>Conclusione Macroeconomica Cruciale:</strong> Il modello dimostra come l'aumento del tasso di risparmio determini una più alta offerta aggregata (prodotto) ma <em>nessuna crescita duratura del tasso di espansione (trend di sviluppo)</em>. Questo poiché il sistema prima o poi si plafonerà nel nuovo *k₂**. La crescita di un'economia cessa una volta assorbito la transizione.
          </p>
          
          <div className="case-study-grid" style={{marginTop:'2rem'}}>
            <div className="case-card">
              <div className="case-icon">🌍</div>
              <h4>Analisi del Caso: Il miracolo giapponese e tedesco</h4>
              <p>Il modello di Solow fornisce il costrutto analitico per spiegare la mostruosa ascesa del PIL post WWII vissuta dalla Germania Occidentale e dal Giappone tra gli anni '50 e '60. Il collasso dei capitali (k) causato dalle devastazioni ridusse pesantemente lo shock ma non mutò i fondamenti propulsivi e demografici dei rispettivi Stati né la produttività base.</p>
            </div>
            <div className="case-card">
              <div className="case-icon">📈</div>
              <h4>La transizione dal danno</h4>
              <p>Venendosi a trovare violentemente con allocazioni di *k* di molto inferiori ai loro naturali stati stazionari strutturali *k**, il prodotto marginale si innalzò. Un capitale così esiguo favorì investimenti massivi. Una volta tornata in condizione prossimale stazionaria verso gli anni '70 e '80, la crescita, originariamente sfarzosa e a doppio digito (il cd. Miracolo), crollò drammaticamente conformale ai modelli occidentali maturi.</p>
            </div>
          </div>
        </div>

        <SavingShiftGraph />
      </section>

      {/* ── SEZIONE 8.4 — Regola Aurea del Capitale ────────────── */}
      <section className="macro-section">
        <h2 className="section-title">8.4 Il Livello di Capitale di Regola Aurea</h2>
        <div className="prose">
          <p>
            La tesi secondo cui il governo dovesse mirare ad ottenere un *k* smisurato per far schizzare l'indice PIL è un artefatto errato se ci concentriamo sul consumo. Un decisore politico saggio non è devoto al capital storage fine a se stesso; l'obiettivo prioritario del policy-maker è <strong>massimizzare il benessere materiale degli individui, dunque il livello di consumo pro capite (c)</strong>.
          </p>
          <p>
            Se l'economia ha accumulato troppa ricchezza (un <em>k*</em> colossale innescato da risparmio vicino ad uno), la gran porzione di torta verrà dirottata esclusivamente nel rimpiazzo delle macchine deteriorate a fine ciclo *δk*. Ne avanzeranno briciole di quota per il beneficio della collettività sotto forma di reddito spendibile c*.
          </p>
          <p>
            Si definisce capitale di <strong>Regola Aurea (*k*<sub>gold</sub>)</strong> l'entità che massimizza le scorte del paniere consumistico in stato di stabilità. Sapendo che il consumo fisso risponde all'equazione contabile <em>c* = f(k*) - δk*</em>, graficamente la sua ampiezza è l'ordinata detratta tra lo zenit produttivo <em>f(k*)</em> (incassi di fabbrica pro capite) ed i costi linearmente gravati dell'esbosso da obsolescenza <em>δk*</em>.
          </p>
        </div>

        <div className="formula-box">
          <div className="formula-label">Condizione Analitica della Regola Aurea</div>
          <div className="formula-main">f'(k*<sub>gold</sub>) = δ  →  PMK = δ</div>
          <div className="formula-note">
            Per individuare matematicamente il massimo consumo possibile (delta differenze tangenti), la derivata prima della produzione deve corrispondere alla pendenza del decadimento. Il prodotto marginale netto [*PMK - δ*] deve essere zero. Se *PMK* fosse superiore a *δ*, si necessiterebbe un maggiore *k* per trarne arricchiment; se fosse esiguo (*PMK &lt; δ*), ci si starebbe spingendo colpevolmente in sfarzi supererogatori limitando le finanze utili ai cittadini.
          </div>
        </div>

        <div className="prose">
          <h3 style={{marginTop:'1.5rem'}}>Transizione Olistica verso l'Eldorado Aureo</h3>
          <p>
            L'analisi economica si scinde in due paradigmi netti in base alle scorte originarie relative all'ottimo aureo, provocando ramificazioni sociali in contrasto generazionale transitorio.
          </p>
          <ul>
            <li><strong>Riduzione forzata del Capitale (k* attuale &gt; k*<sub>gold</sub>):</strong> Economia sovracapitalizzata. Diminuendo il tasso di risparmio, avverrà repentinamente un'esplosione vertiginosa del consumo nell'immediato. Nessuna contrazione temporanea colpirà la cittadinanza ed il beneficio finale rimarrà persistentemente sopra alle vecchie stime. Trattandosi di un paradigma <em>win-win</em> su quasi assioma Pareto-ottimale, un governo propendebbe con prontezza ad abbassare imposizioni di prelievi.</li>
            <li><strong>Risalita faticante dei Capitali (k* attuale &lt; k*<sub>gold</sub>):</strong> Economia esigua. Una deviazione di s al rialzo costringerebbe uno shock brusco delle possibilità di spesa del presente (<em>tightening the belt</em>). Soltanto a fronte temporale inoltrato, il rimpinguamento progressivo dei depositi <em>k</em> garantirà le fruttificazioni da <em>PMK</em> ad inibire lo scompiglio originario portando i volumi <em>c*</em> ben superiori all'ante-riforma. In queste circostanze, i sacrifici della prima generazione fungono da viatico e sovvenzionatori per le prosperità della discendenza a venire, un trade-off amaro per il manager pubblico ma fecondo a lunghissimo asse politico.</li>
          </ul>
        </div>

        <GoldenRuleGraph />
      </section>

      {/* ── CONCLUSIONE ──────────────────────────────────── */}
      <section className="macro-section conclusion">
        <h2 className="section-title">Quadro Sintetico dell'Analisi Solowiana (Capitolo 8)</h2>
        <div className="conclusion-grid">
          <div className="conclusion-item">
            <span className="conclusion-icon">⚙️</span>
            <strong>Funzione di Produzione</strong>
            <p>Ipotizzando limitato l'ammontare e la reattività ai ritorni netti, la funzione evidenzia che *PMK* assume valenze decrescenti (y=k^α).</p>
          </div>
          <div className="conclusion-item">
            <span className="conclusion-icon">📊</span>
            <strong>Forze contrapposte</strong>
            <p>Il capitale *k* per lavoratore progredisce o retrocede a seconda che gli investimenti (iniezioni positive s·y) offuschino l'ammortamento (estinzioni passive δ·k).</p>
          </div>
          <div className="conclusion-item">
            <span className="conclusion-icon">🏆</span>
            <strong>Scopo Aureo Politico</strong>
            <p>Un eccessivo stockaggio *K* penalizza la popolazione rubando introiti. Il vertice governativo imposta le agende per posizionare *k* sull'indice di Regola Aurea per cui *PMK = δ* al fine di sublimare i ratei sociali.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
