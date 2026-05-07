import { useState } from 'react';
import './macro.css';

// ══════════════════════════════════════════════════════════════
//  COSTANTI MODELLO DA-OA
// ══════════════════════════════════════════════════════════════
const SLOPE = 30;   // pendenza DA: P = (D - Y) / SLOPE
const Y_NAT = 100;  // output naturale Ȳ

const daP  = (Y, D) => (D - Y) / SLOPE;
const ySR  = (D, Pb) => D - SLOPE * Pb;
const pLR  = (D)    => (D - Y_NAT) / SLOPE;

// ══════════════════════════════════════════════════════════════
//  SVG ENGINE (riuso da Cap8)
// ══════════════════════════════════════════════════════════════
const W = 520, H = 290;
const PL = 56, PR = 18, PT = 18, PB = 42;
const cW = W - PL - PR, cH = H - PT - PB;

// Generica: parametri di scala espliciti
const toX  = (v, vMin, vMax) => PL + (v - vMin) / (vMax - vMin) * cW;
const toYs = (v, vMin, vMax) => PT + (1 - (Math.min(Math.max(v, vMin), vMax) - vMin) / (vMax - vMin)) * cH;

function buildGenPath(fn, xMin, xMax, yMin, yMax, n = 200) {
  const pts = [];
  for (let i = 0; i <= n; i++) {
    const x = xMin + (i / n) * (xMax - xMin);
    const y = fn(x);
    if (!isFinite(y) || y < yMin - 0.5 || y > yMax + 0.5) continue;
    pts.push(`${toX(x, xMin, xMax).toFixed(1)},${toYs(y, yMin, yMax).toFixed(1)}`);
  }
  return pts.length ? `M${pts.join('L')}` : '';
}

function GenAxes({ xMin, xMax, yMin, yMax, xLabel = '', yLabel = '', nX = 5, nY = 4 }) {
  const xTicks = Array.from({ length: nX + 1 }, (_, i) => xMin + (i / nX) * (xMax - xMin));
  const yTicks = Array.from({ length: nY + 1 }, (_, i) => yMin + (i / nY) * (yMax - yMin));
  return (
    <g>
      {xTicks.map(v => (
        <g key={v}>
          <line x1={toX(v, xMin, xMax)} y1={PT} x2={toX(v, xMin, xMax)} y2={PT + cH} stroke="#e2e8f0" strokeWidth={0.8} />
          <text x={toX(v, xMin, xMax)} y={PT + cH + 15} textAnchor="middle" fontSize={10} fill="#94a3b8">
            {v % 1 === 0 ? v.toFixed(0) : v.toFixed(1)}
          </text>
        </g>
      ))}
      {yTicks.map(v => (
        <g key={v}>
          <line x1={PL} y1={toYs(v, yMin, yMax)} x2={PL + cW} y2={toYs(v, yMin, yMax)} stroke="#e2e8f0" strokeWidth={0.8} />
          <text x={PL - 6} y={toYs(v, yMin, yMax) + 4} textAnchor="end" fontSize={10} fill="#94a3b8">
            {v % 1 === 0 ? v.toFixed(0) : v.toFixed(1)}
          </text>
        </g>
      ))}
      {/* zero lines */}
      {yMin < 0 && (
        <line x1={PL} y1={toYs(0, yMin, yMax)} x2={PL + cW} y2={toYs(0, yMin, yMax)}
          stroke="#94a3b8" strokeWidth={1.2} strokeDasharray="4,3" />
      )}
      {xMin < 0 && (
        <line x1={toX(0, xMin, xMax)} y1={PT} x2={toX(0, xMin, xMax)} y2={PT + cH}
          stroke="#94a3b8" strokeWidth={1.2} strokeDasharray="4,3" />
      )}
      <line x1={PL} y1={PT} x2={PL} y2={PT + cH} stroke="#475569" strokeWidth={1.5} />
      <line x1={PL} y1={PT + cH} x2={PL + cW} y2={PT + cH} stroke="#475569" strokeWidth={1.5} />
      <text x={PL + cW + 4} y={PT + cH + 3} fontSize={13} fill="#475569" fontStyle="italic">{xLabel}</text>
      {yLabel && <text x={PL - 6} y={PT - 5} fontSize={12} fill="#64748b" fontStyle="italic">{yLabel}</text>}
    </g>
  );
}

function SliderControl({ label, symbol, value, min, max, step, onChange, color }) {
  return (
    <div className="slider-row">
      <div className="slider-header">
        <span className="slider-label">{label} <em>({symbol})</em></span>
        <span className="slider-value" style={{ color }}>{value % 1 === 0 ? value.toFixed(0) : value.toFixed(2)}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={e => onChange(+e.target.value)} style={{ accentColor: color }} />
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAFICO 1 — Legge di Okun
// ══════════════════════════════════════════════════════════════
function OkunGraph() {
  const [growthRate, setGrowthRate] = useState(3);
  const xMin = -4, xMax = 9, yMin = -3, yMax = 4.5;

  // Legge di Okun: ΔU% = -0.5 × (ΔY% − 3%)  →  ΔU = 1.5 − 0.5×ΔY
  const okun = (dy) => 1.5 - 0.5 * dy;
  const linePath = buildGenPath(okun, xMin, xMax, yMin, yMax);

  const curU = okun(growthRate);
  const cx = toX(growthRate, xMin, xMax);
  const cy = toYs(curU, yMin, yMax);

  // Shaded recession zone (ΔY < 3%)
  const recXStart = toX(xMin, xMin, xMax);
  const recXEnd   = toX(3, xMin, xMax);

  return (
    <div className="graph-block">
      <div className="graph-title">Grafico 1 — Legge di Okun: relazione PIL ↔ Disoccupazione</div>
      <div className="graph-row">
        <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: '100%' }}>
          <defs>
            <pattern id="recHatch" patternUnits="userSpaceOnUse" width={6} height={6} patternTransform="rotate(45)">
              <line x1={0} y1={0} x2={0} y2={6} stroke="rgba(220,38,38,0.15)" strokeWidth={3} />
            </pattern>
          </defs>
          <GenAxes xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax}
            xLabel="ΔY%" yLabel="ΔU%" nX={6} nY={5} />

          {/* Zona recessione (ΔY < 3%) */}
          <rect x={recXStart} y={PT} width={recXEnd - recXStart} height={cH}
            fill="url(#recHatch)" />
          <text x={(recXStart + recXEnd) / 2} y={PT + 14} textAnchor="middle"
            fontSize={10} fill="#dc2626" opacity={0.7}>Recessione</text>

          {/* Linea di Okun */}
          <path d={linePath} fill="none" stroke="#4338ca" strokeWidth={2.8} strokeLinecap="round" />
          <text x={toX(7.5, xMin, xMax)} y={toYs(okun(7.5), yMin, yMax) - 10}
            fontSize={12} fill="#4338ca" fontWeight="bold">
            ΔU% = −½ × (ΔY% − 3%)
          </text>

          {/* Punto neutro (ΔY = 3%, ΔU = 0) */}
          <circle cx={toX(3, xMin, xMax)} cy={toYs(0, yMin, yMax)} r={5}
            fill="white" stroke="#059669" strokeWidth={2} />
          <text x={toX(3, xMin, xMax) + 8} y={toYs(0, yMin, yMax) + 4}
            fontSize={10} fill="#059669">ΔY=3% → ΔU=0</text>

          {/* Punto corrente (slider) */}
          <circle cx={cx} cy={cy} r={8} fill="#0284c7" opacity={0.25} />
          <circle cx={cx} cy={cy} r={5} fill="#0284c7" />
          <line x1={cx} y1={toYs(yMin, yMin, yMax)} x2={cx} y2={cy}
            stroke="#0284c7" strokeWidth={1.5} strokeDasharray="4,3" />
          <line x1={PL} y1={cy} x2={cx} y2={cy}
            stroke="#0284c7" strokeWidth={1.5} strokeDasharray="4,3" />
        </svg>

        <div className="graph-controls">
          <SliderControl label="Crescita PIL" symbol="ΔY%"
            value={growthRate} min={-4} max={9} step={0.1}
            onChange={setGrowthRate} color="#0284c7" />
          <div className="result-box">
            <div className="result-row">
              <span>ΔY% =</span>
              <span style={{ color: '#0284c7' }}>{growthRate.toFixed(1)}%</span>
            </div>
            <div className="result-row">
              <span>ΔU% =</span>
              <span style={{ color: curU > 0 ? '#dc2626' : '#059669', fontWeight: 800 }}>
                {curU > 0 ? '+' : ''}{curU.toFixed(2)}%
              </span>
            </div>
            <div className="result-row">
              <span>Situazione:</span>
              <span style={{ color: growthRate >= 3 ? '#059669' : '#dc2626' }}>
                {growthRate >= 3 ? 'Espansione' : growthRate >= 0 ? 'Rallentamento' : 'Recessione'}
              </span>
            </div>
          </div>
          <div className="insight-mini">
            <strong>Formula:</strong> ΔU% = −½ × (ΔY% − 3%)<br />
            Il PIL deve crescere almeno al 3% per mantenere stabile la disoccupazione (perché la produttività e la forza lavoro crescono anch'esse).<br /><br />
            <strong>Negli USA:</strong> Legge stimata da Okun nel 1962 su dati americani. Verificata empiricamente in molti paesi.
          </div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  SHARED DA-OA COORDINATE SYSTEM
// ══════════════════════════════════════════════════════════════
const Y_MIN = 40, Y_MAX = 160;
const P_MIN = 0,  P_MAX = 4.5;
const dX = (Y) => toX(Y, Y_MIN, Y_MAX);
const dP = (P) => toYs(P, P_MIN, P_MAX);

function DaPath({ D, color = '#0284c7', width = 2.5, dash = '' }) {
  const pts = [];
  for (let Y = Y_MIN + 1; Y <= Math.min(Y_MAX, D - 1); Y += 1) {
    const P = daP(Y, D);
    if (P < P_MIN || P > P_MAX) continue;
    pts.push(`${dX(Y).toFixed(1)},${dP(P).toFixed(1)}`);
  }
  const d = pts.length ? `M${pts.join('L')}` : '';
  return <path d={d} fill="none" stroke={color} strokeWidth={width}
    strokeDasharray={dash} strokeLinecap="round" />;
}

function DaOaAxes() {
  const yTicks = [0, 1, 2, 3, 4];
  const xTicks = [50, 75, 100, 125, 150];
  return (
    <g>
      {xTicks.map(v => (
        <g key={v}>
          <line x1={dX(v)} y1={PT} x2={dX(v)} y2={PT + cH} stroke="#e2e8f0" strokeWidth={0.8} />
          <text x={dX(v)} y={PT + cH + 15} textAnchor="middle" fontSize={10} fill="#94a3b8">{v}</text>
        </g>
      ))}
      {yTicks.map(v => (
        <g key={v}>
          <line x1={PL} y1={dP(v)} x2={PL + cW} y2={dP(v)} stroke="#e2e8f0" strokeWidth={0.8} />
          <text x={PL - 6} y={dP(v) + 4} textAnchor="end" fontSize={10} fill="#94a3b8">{v}</text>
        </g>
      ))}
      <line x1={PL} y1={PT} x2={PL} y2={PT + cH} stroke="#475569" strokeWidth={1.5} />
      <line x1={PL} y1={PT + cH} x2={PL + cW} y2={PT + cH} stroke="#475569" strokeWidth={1.5} />
      <text x={PL + cW + 4} y={PT + cH + 3} fontSize={13} fill="#475569" fontStyle="italic">Y</text>
      <text x={PL - 6} y={PT - 5} fontSize={13} fill="#475569" fontStyle="italic">P</text>
    </g>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAFICO 2 — Modello DA-OA Completo
// ══════════════════════════════════════════════════════════════
function DaOaModel() {
  const [D,    setD]    = useState(160);
  const [Pbar, setPbar] = useState(2.0);

  const Ysr = Math.max(Y_MIN + 5, Math.min(Y_MAX - 5, ySR(D, Pbar)));
  const Plr = Math.max(P_MIN + 0.1, Math.min(P_MAX - 0.1, pLR(D)));
  const atLR = Math.abs(Ysr - Y_NAT) < 2;

  return (
    <div className="graph-block">
      <div className="graph-title">Grafico 2 — Il Modello DA-OA: breve e lungo periodo</div>
      <div className="graph-row">
        <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: '100%' }}>
          <defs>
            <marker id="arr2" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="0 0,8 3,0 6" fill="#475569" />
            </marker>
          </defs>
          <DaOaAxes />

          {/* OA Lungo periodo — verticale a Ȳ */}
          <line x1={dX(Y_NAT)} y1={PT} x2={dX(Y_NAT)} y2={PT + cH}
            stroke="#dc2626" strokeWidth={2.5} />
          <text x={dX(Y_NAT) + 6} y={PT + 14}
            fontSize={12} fill="#dc2626" fontWeight="bold">OA<tspan fontSize={9} dy="3">LP</tspan></text>
          <text x={dX(Y_NAT)} y={PT + cH + 15}
            textAnchor="middle" fontSize={11} fill="#dc2626" fontWeight="bold">Ȳ={Y_NAT}</text>

          {/* OA Breve periodo — orizzontale a P_bar */}
          <line x1={dX(Y_MIN)} y1={dP(Pbar)} x2={dX(Y_MAX)} y2={dP(Pbar)}
            stroke="#059669" strokeWidth={2.5} />
          <text x={dX(Y_MAX) - 4} y={dP(Pbar) - 8}
            textAnchor="end" fontSize={12} fill="#059669" fontWeight="bold">
            OA<tspan fontSize={9} dy="3">BP</tspan>
          </text>

          {/* DA */}
          <DaPath D={D} color="#0284c7" />
          <text x={dX(D - SLOPE * P_MAX + 4)} y={dP(P_MAX) + 14}
            fontSize={12} fill="#0284c7" fontWeight="bold">DA</text>

          {/* Equilibrio breve periodo */}
          {Ysr > Y_MIN + 3 && Ysr < Y_MAX - 3 && (
            <g>
              <circle cx={dX(Ysr)} cy={dP(Pbar)} r={6} fill="#059669" />
              <line x1={dX(Ysr)} y1={dP(Pbar)} x2={dX(Ysr)} y2={PT + cH}
                stroke="#059669" strokeWidth={1} strokeDasharray="4,3" />
              <text x={dX(Ysr)} y={PT + cH + 28}
                textAnchor="middle" fontSize={10} fill="#059669" fontWeight="bold">Y<tspan fontSize={8} dy="2">BP</tspan></text>
            </g>
          )}

          {/* Equilibrio lungo periodo */}
          {!atLR && (
            <g>
              <circle cx={dX(Y_NAT)} cy={dP(Plr)} r={6} fill="#dc2626" />
              <line x1={PL} y1={dP(Plr)} x2={dX(Y_NAT)} y2={dP(Plr)}
                stroke="#dc2626" strokeWidth={1} strokeDasharray="4,3" />
              <text x={PL - 4} y={dP(Plr) + 4}
                textAnchor="end" fontSize={10} fill="#dc2626" fontWeight="bold">P<tspan fontSize={8} dy="2">LR</tspan></text>
            </g>
          )}

          {/* Equilibrio unico se coincidono */}
          {atLR && (
            <g>
              <circle cx={dX(Y_NAT)} cy={dP(Pbar)} r={8} fill="white" stroke="#4338ca" strokeWidth={2} />
              <circle cx={dX(Y_NAT)} cy={dP(Pbar)} r={4} fill="#4338ca" />
              <text x={dX(Y_NAT) + 10} y={dP(Pbar) - 8}
                fontSize={11} fill="#4338ca" fontWeight="bold">Equil. LR</text>
            </g>
          )}
        </svg>

        <div className="graph-controls">
          <SliderControl label="Livello domanda aggregata" symbol="D"
            value={D} min={110} max={210} step={1} onChange={setD} color="#0284c7" />
          <SliderControl label="OA breve periodo (livello prezzi)" symbol="P̄"
            value={Pbar} min={0.5} max={3.8} step={0.05} onChange={setPbar} color="#059669" />
          <div className="result-box">
            <div className="result-row">
              <span>Y breve periodo</span>
              <span style={{ color: Ysr > Y_NAT ? '#059669' : Ysr < Y_NAT ? '#dc2626' : '#4338ca', fontWeight: 800 }}>
                {Ysr.toFixed(0)}
              </span>
            </div>
            <div className="result-row">
              <span>Ȳ naturale</span>
              <span style={{ color: '#dc2626' }}>{Y_NAT}</span>
            </div>
            <div className="result-row">
              <span>P lungo periodo</span>
              <span style={{ color: '#dc2626' }}>{Plr.toFixed(2)}</span>
            </div>
            <div className="result-row">
              <span>Gap output (Y−Ȳ)</span>
              <span style={{ color: Ysr - Y_NAT > 0 ? '#059669' : '#dc2626', fontWeight: 700 }}>
                {(Ysr - Y_NAT) > 0 ? '+' : ''}{(Ysr - Y_NAT).toFixed(0)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAFICO 3 — Shock di Domanda
// ══════════════════════════════════════════════════════════════
function DemandShockGraph() {
  const [shock, setShock] = useState(0);
  const D0   = 160;
  const Pbar = 2.0;
  const D1   = D0 + shock;

  const Ysr0 = ySR(D0, Pbar); // = 100 (equilibrio iniziale)
  const Ysr1 = Math.max(Y_MIN + 3, Math.min(Y_MAX - 3, ySR(D1, Pbar)));
  const Plr1 = Math.max(P_MIN + 0.1, Math.min(P_MAX - 0.1, pLR(D1)));

  const hasShock = Math.abs(shock) > 1;

  return (
    <div className="graph-block">
      <div className="graph-title">Grafico 3 — Shock di Domanda: breve e lungo periodo</div>
      <div className="graph-row">
        <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: '100%' }}>
          <defs>
            <marker id="arrBlue" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
              <polygon points="0 0,8 3,0 6" fill="#4338ca" />
            </marker>
          </defs>
          <DaOaAxes />

          {/* OA_LP */}
          <line x1={dX(Y_NAT)} y1={PT} x2={dX(Y_NAT)} y2={PT + cH}
            stroke="#dc2626" strokeWidth={2} />
          <text x={dX(Y_NAT) + 5} y={PT + 14} fontSize={11} fill="#dc2626" fontWeight="bold">
            OA<tspan fontSize={8} dy="3">LP</tspan>
          </text>

          {/* OA_BP */}
          <line x1={dX(Y_MIN)} y1={dP(Pbar)} x2={dX(Y_MAX)} y2={dP(Pbar)}
            stroke="#059669" strokeWidth={2} />
          <text x={dX(Y_MAX) - 4} y={dP(Pbar) - 8}
            textAnchor="end" fontSize={11} fill="#059669" fontWeight="bold">
            OA<tspan fontSize={8} dy="3">BP</tspan>
          </text>

          {/* DA0 — originale */}
          <DaPath D={D0} color="#0284c7" width={hasShock ? 1.5 : 2.5} dash={hasShock ? '5,3' : ''} />
          <text x={dX(60)} y={dP(daP(60, D0)) - 10}
            fontSize={11} fill="#0284c7" opacity={hasShock ? 0.6 : 1} fontStyle="italic">
            DA₀
          </text>

          {/* DA1 — dopo shock */}
          {hasShock && (
            <>
              <DaPath D={D1} color={shock > 0 ? '#059669' : '#dc2626'} width={2.5} />
              <text x={dX(65)} y={dP(daP(65, D1)) - 10}
                fontSize={11} fill={shock > 0 ? '#059669' : '#dc2626'} fontWeight="bold" fontStyle="italic">
                DA₁
              </text>
            </>
          )}

          {/* Punto A — equilibrio originale */}
          <circle cx={dX(Ysr0)} cy={dP(Pbar)} r={6} fill="#0284c7" />
          <text x={dX(Ysr0) - 12} y={dP(Pbar) - 10}
            fontSize={11} fill="#0284c7" fontWeight="bold">A</text>

          {/* Punto B — equilibrio BP dopo shock */}
          {hasShock && (
            <g>
              <circle cx={dX(Ysr1)} cy={dP(Pbar)} r={6} fill={shock > 0 ? '#059669' : '#dc2626'} />
              <line x1={dX(Ysr1)} y1={dP(Pbar)} x2={dX(Ysr1)} y2={PT + cH}
                stroke={shock > 0 ? '#059669' : '#dc2626'} strokeWidth={1} strokeDasharray="4,3" />
              <text x={dX(Ysr1)} y={PT + cH + 28} textAnchor="middle"
                fontSize={10} fill={shock > 0 ? '#059669' : '#dc2626'} fontWeight="bold">Y<tspan fontSize={8} dy="2">BP</tspan></text>
              <text x={dX(Ysr1) + 8} y={dP(Pbar) - 10}
                fontSize={11} fill={shock > 0 ? '#059669' : '#dc2626'} fontWeight="bold">B</text>
            </g>
          )}

          {/* Punto C — equilibrio LP dopo shock */}
          {hasShock && (
            <g>
              <circle cx={dX(Y_NAT)} cy={dP(Plr1)} r={6} fill="#4338ca" />
              <line x1={PL} y1={dP(Plr1)} x2={dX(Y_NAT)} y2={dP(Plr1)}
                stroke="#4338ca" strokeWidth={1} strokeDasharray="4,3" />
              <text x={PL - 4} y={dP(Plr1) + 4} textAnchor="end"
                fontSize={10} fill="#4338ca" fontWeight="bold">P<tspan fontSize={8} dy="2">LR</tspan></text>
              <text x={dX(Y_NAT) + 10} y={dP(Plr1) - 8}
                fontSize={11} fill="#4338ca" fontWeight="bold">C</text>

              {/* Freccia B → C */}
              <path d={`M${dX(Ysr1)},${dP(Pbar) + (shock > 0 ? 8 : -8)} Q${(dX(Ysr1)+dX(Y_NAT))/2},${dP((Pbar+Plr1)/2)} ${dX(Y_NAT) - 6},${dP(Plr1) + (shock > 0 ? 6 : -6)}`}
                fill="none" stroke="#4338ca" strokeWidth={1.5} strokeDasharray="5,3"
                markerEnd="url(#arrBlue)" />
            </g>
          )}
        </svg>

        <div className="graph-controls">
          <SliderControl label="Shock di domanda" symbol="ΔD"
            value={shock} min={-50} max={50} step={1}
            onChange={setShock}
            color={shock > 0 ? '#059669' : shock < 0 ? '#dc2626' : '#94a3b8'} />
          <div className="result-box">
            <div className="result-row">
              <span>Tipo shock</span>
              <span style={{ color: shock > 0 ? '#059669' : shock < 0 ? '#dc2626' : '#64748b' }}>
                {shock > 5 ? 'Positivo (boom)' : shock < -5 ? 'Negativo (recessione)' : 'Nessuno'}
              </span>
            </div>
            <div className="result-row">
              <span>Y breve periodo (B)</span>
              <span style={{ color: Ysr1 > Y_NAT ? '#059669' : Ysr1 < Y_NAT ? '#dc2626' : '#0284c7' }}>
                {hasShock ? Ysr1.toFixed(0) : '100'}
              </span>
            </div>
            <div className="result-row">
              <span>P lungo periodo (C)</span>
              <span style={{ color: '#4338ca', fontWeight: 700 }}>{hasShock ? Plr1.toFixed(2) : '2.00'}</span>
            </div>
            <div className="result-row">
              <span>ΔP nel LR</span>
              <span style={{ color: Plr1 - Pbar > 0 ? '#dc2626' : '#059669', fontWeight: 700 }}>
                {hasShock ? ((Plr1 - Pbar) > 0 ? '+' : '') + (Plr1 - Pbar).toFixed(2) : '0'}
              </span>
            </div>
          </div>
          <div className="insight-mini">
            <strong>Percorso:</strong> A → B (breve periodo): Y cambia, P fisso. B → C (lungo periodo): P si aggiusta, Y torna a Ȳ.
          </div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAFICO 4 — Shock di Offerta (Stagflazione)
// ══════════════════════════════════════════════════════════════
function SupplyShockGraph() {
  const [supShock, setSupShock] = useState(0);
  const D    = 160;
  const Pb0  = 2.0;
  const Pb1  = Math.max(0.3, Math.min(4.2, Pb0 + supShock));

  const Ysr0 = ySR(D, Pb0); // = 100
  const Ysr1 = Math.max(Y_MIN + 3, Math.min(Y_MAX - 3, ySR(D, Pb1)));
  const hasShock = Math.abs(supShock) > 0.1;
  const isNeg = supShock > 0;

  return (
    <div className="graph-block">
      <div className="graph-title">Grafico 4 — Shock di Offerta: stagflazione e shock positivi</div>
      <div className="graph-row">
        <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: '100%' }}>
          <DaOaAxes />

          {/* OA_LP */}
          <line x1={dX(Y_NAT)} y1={PT} x2={dX(Y_NAT)} y2={PT + cH}
            stroke="#dc2626" strokeWidth={2} />
          <text x={dX(Y_NAT) + 5} y={PT + 14} fontSize={11} fill="#dc2626" fontWeight="bold">
            OA<tspan fontSize={8} dy="3">LP</tspan>
          </text>

          {/* DA */}
          <DaPath D={D} color="#0284c7" width={2.5} />
          <text x={dX(65)} y={dP(daP(65, D)) - 10}
            fontSize={12} fill="#0284c7" fontWeight="bold" fontStyle="italic">DA</text>

          {/* OA_BP originale */}
          <line x1={dX(Y_MIN)} y1={dP(Pb0)} x2={dX(Y_MAX)} y2={dP(Pb0)}
            stroke="#059669" strokeWidth={hasShock ? 1.5 : 2.5} strokeDasharray={hasShock ? '5,3' : ''} />
          <text x={dX(Y_MAX) - 4} y={dP(Pb0) - 8}
            textAnchor="end" fontSize={11} fill="#059669" opacity={hasShock ? 0.6 : 1} fontStyle="italic">
            OA₀<tspan fontSize={8} dy="3">BP</tspan>
          </text>

          {/* OA_BP dopo shock */}
          {hasShock && (
            <>
              <line x1={dX(Y_MIN)} y1={dP(Pb1)} x2={dX(Y_MAX)} y2={dP(Pb1)}
                stroke={isNeg ? '#d97706' : '#059669'} strokeWidth={2.5} />
              <text x={dX(Y_MAX) - 4} y={dP(Pb1) - 8}
                textAnchor="end" fontSize={11} fill={isNeg ? '#d97706' : '#059669'} fontWeight="bold" fontStyle="italic">
                OA₁<tspan fontSize={8} dy="3">BP</tspan>
              </text>
            </>
          )}

          {/* Punto A — originale */}
          <circle cx={dX(Ysr0)} cy={dP(Pb0)} r={6} fill="#0284c7" />
          <text x={dX(Ysr0) + 8} y={dP(Pb0) - 10}
            fontSize={11} fill="#0284c7" fontWeight="bold">A</text>

          {/* Punto B — dopo shock */}
          {hasShock && (
            <g>
              <circle cx={dX(Ysr1)} cy={dP(Pb1)} r={6} fill={isNeg ? '#d97706' : '#059669'} />
              <line x1={dX(Ysr1)} y1={dP(Pb1)} x2={dX(Ysr1)} y2={PT + cH}
                stroke={isNeg ? '#d97706' : '#059669'} strokeWidth={1} strokeDasharray="4,3" />
              <text x={dX(Ysr1)} y={PT + cH + 28} textAnchor="middle"
                fontSize={10} fill={isNeg ? '#d97706' : '#059669'} fontWeight="bold">Y<tspan fontSize={8} dy="2">BP</tspan></text>
              <text x={dX(Ysr1) + 8} y={dP(Pb1) - 10}
                fontSize={11} fill={isNeg ? '#d97706' : '#059669'} fontWeight="bold">B</text>
            </g>
          )}
        </svg>

        <div className="graph-controls">
          <SliderControl label="Shock di offerta" symbol="ΔP̄"
            value={supShock} min={-1.2} max={1.5} step={0.05}
            onChange={setSupShock}
            color={supShock > 0 ? '#d97706' : supShock < 0 ? '#059669' : '#94a3b8'} />
          <div className="result-box">
            <div className="result-row">
              <span>Tipo shock</span>
              <span style={{ color: supShock > 0.1 ? '#d97706' : supShock < -0.1 ? '#059669' : '#64748b' }}>
                {supShock > 0.1 ? 'Negativo (stagflazione)' : supShock < -0.1 ? 'Positivo (boon)' : 'Nessuno'}
              </span>
            </div>
            <div className="result-row">
              <span>Y breve periodo</span>
              <span style={{ color: Ysr1 < Y_NAT ? '#dc2626' : '#059669', fontWeight: 700 }}>
                {hasShock ? Ysr1.toFixed(0) : '100'}
              </span>
            </div>
            <div className="result-row">
              <span>P breve periodo</span>
              <span style={{ color: Pb1 > Pb0 ? '#dc2626' : '#059669', fontWeight: 700 }}>
                {Pb1.toFixed(2)}
              </span>
            </div>
            <div className="result-row">
              <span>Effetto</span>
              <span style={{ color: supShock > 0.1 ? '#dc2626' : '#059669' }}>
                {supShock > 0.1 ? 'P↑ e Y↓ insieme' : supShock < -0.1 ? 'P↓ e Y↑ insieme' : '—'}
              </span>
            </div>
          </div>
          <div className="insight-mini">
            {supShock > 0.1
              ? <><strong>Stagflazione:</strong> un aumento di costi (es. petrolio) sposta OA_BP in alto — i prezzi aumentano <em>e</em> la produzione cala simultaneamente. Il governo non può risolvere entrambi i problemi con la politica della domanda.</>
              : supShock < -0.1
              ? <><strong>Shock positivo:</strong> calo dei costi produttivi (es. crollo prezzo petrolio) → P cala e Y aumenta insieme. Boom economico senza inflazione.</>
              : <><strong>Sposta lo slider</strong> verso destra per simulare uno shock petrolifero (stagflazione) o verso sinistra per uno shock favorevole.</>
            }
          </div>
        </div>
      </div>
    </div>
  );
}


// ══════════════════════════════════════════════════════════════
//  PAGINA PRINCIPALE — Capitolo 11
// ══════════════════════════════════════════════════════════════
export default function Cap11CicloEconomico() {
  return (
    <div className="macro-page">

      {/* ── HEADER */}
      <div className="macro-header">
        <div className="chapter-badge">Capitolo 11 · Teoria del Ciclo Economico</div>
        <h1 className="macro-title">
          <span className="gradient-text">Le Fluttuazioni Economiche</span>
        </h1>
        <p className="macro-subtitle">
          Perché le economie avanzate oscillano attorno al loro livello naturale? Come funzionano domanda e offerta aggregata? Come rispondono le politiche economiche agli shock?
        </p>
      </div>

      {/* ── 11.1 — Il Ciclo Economico */}
      <section className="macro-section">
        <h2 className="section-title">11.1 Il Ciclo Economico e le sue Componenti</h2>
        <div className="prose">
          <p>
            Il PIL reale degli Stati Uniti cresce in media al 3,2% all'anno nel lungo periodo. Ma questa media nasconde una realtà molto più mossa: attorno a quel trend, l'economia oscilla continuamente. Ci sono anni in cui la crescita supera il 5%, seguiti da anni in cui il PIL si contrae. Questo andamento ondulatorio ricorrente — espansione, picco, contrazione, minimo — è il <strong>ciclo economico</strong>.
          </p>
          <p>
            La struttura formale del ciclo si compone di quattro fasi. L'<strong>espansione</strong> è il periodo di crescita sostenuta: PIL, occupazione, redditi e fiducia aumentano insieme. Il <strong>picco</strong> è il massimo del ciclo — l'economia è "surriscaldata", l'inflazione comincia a salire, il mercato del lavoro è teso. La <strong>contrazione</strong> (o recessione) è la fase discendente: la produzione cala, le imprese frenano gli investimenti, i licenziamenti aumentano. Il <strong>minimo</strong> è il punto più basso, da cui riprende la fase espansiva.
          </p>
          <p>
            Come si definisce ufficialmente una <strong>recessione</strong>? La definizione tecnica più usata parla di due trimestri consecutivi di crescita negativa del PIL reale. Negli USA, però, l'autorità ufficiale è il <strong>National Bureau of Economic Research (NBER)</strong>, che usa una definizione più articolata: un calo significativo dell'attività economica diffuso all'intera economia e che dura più di qualche mese, visibile nel PIL reale, nel reddito reale, nell'occupazione, nella produzione industriale e nelle vendite al dettaglio. L'NBER valuta la profondità, la durata e la diffusione della contrazione — non solo il segno del PIL.
          </p>
          <p>
            I cicli americani del dopoguerra hanno una durata media di espansione di circa 5 anni e di recessione di circa 11 mesi, ma la variabilità è estrema. La Grande Recessione del 2007–2009 durò 18 mesi e il PIL crollò del 4,3%. La recessione Covid del 2020 durò solo due mesi ma il PIL cadde del 31,4% su base annualizzata nel secondo trimestre — la contrazione più rapida mai registrata. La recessione del 1990–91 fu lieve (8 mesi); quella del 2001 fu breve ma con effetti occupazionali prolungati oltre la ripresa formale del PIL.
          </p>
          <p>
            Tre componenti del PIL si muovono sistematicamente con il ciclo, ma ognuna con caratteristiche proprie.
          </p>
          <p>
            I <strong>consumi privati</strong> variano in modo prociclico ma smorzato. Le famiglie tendono a "livellare" i consumi nel tempo: in recessione intaccano i risparmi piuttosto che tagliare brutalmente le spese, in espansione non spendono tutto il reddito aggiuntivo. Il risultato è che i consumi oscillano circa la metà del PIL.
          </p>
          <p>
            Gli <strong>investimenti</strong> sono la componente di gran lunga più volatile — oscillano 2–3 volte più del PIL. La ragione è semplice: investire significa acquistare beni che serviranno in futuro. Quando le prospettive si deteriorano o i tassi d'interesse salgono, un'impresa può semplicemente rimandare l'acquisto di un macchinario o la costruzione di un capannone, senza costi fissi immediati. Questa opcionalità rende gli investimenti il principale amplificatore del ciclo.
          </p>
          <p>
            L'<strong>occupazione e la disoccupazione</strong> si muovono con un ritardo tipico di 1–2 trimestri rispetto al PIL. Le imprese attendono a licenziare finché la contrazione non è conclamata, e attendono a riassumere finché la ripresa non è stabile. Questo spiega le cosiddette "jobless recoveries": fasi in cui il PIL cresce ma il mercato del lavoro rimane depresso per mesi.
          </p>
        </div>
      </section>

      {/* ── 11.2 — Legge di Okun */}
      <section className="macro-section">
        <h2 className="section-title">11.2 La Legge di Okun</h2>
        <div className="prose">
          <p>
            La relazione tra crescita del PIL e variazione della disoccupazione è una delle leggi empiriche più robuste della macroeconomia. Arthur Okun la stimò nel 1962 su dati americani del dopoguerra e trovò una relazione stabile e replicabile:
          </p>
        </div>

        <div className="formula-box">
          <div className="formula-label">La Legge di Okun</div>
          <div className="formula-main">ΔU% = −½ × (ΔY% − 3%)</div>
          <div className="formula-note">
            Se il PIL cresce al 3% la disoccupazione rimane costante. Per ogni punto percentuale di crescita oltre il 3%, la disoccupazione scende di 0,5 punti. Per ogni punto sotto il 3%, sale di 0,5 punti.
          </div>
        </div>

        <div className="prose">
          <p>
            La formula contiene due numeri che richiedono una spiegazione economica precisa: il coefficiente ½ e la soglia del 3%.
          </p>
          <p>
            <strong>Perché il coefficiente è ½ e non 1?</strong> In apparenza sembrerebbe che un aumento del 2% della produzione debba tradursi in un 2% di nuova occupazione, abbassando di altrettanto la disoccupazione. In realtà il legame è attenuato da tre meccanismi. Primo: quando la produzione aumenta, le imprese aumentano innanzitutto le ore lavorate per dipendente — straordinari, turni extra — prima di aprire nuove posizioni. Secondo: in espansione rientrano nel mercato del lavoro persone che prima ne erano uscite (casalinghe, studenti, pensionati anticipati), aumentando la forza lavoro e frenando il calo del tasso di disoccupazione. Terzo: la produttività tende a crescere durante le espansioni, quindi ogni lavoratore produce di più e servono meno nuove assunzioni per unità di output aggiuntiva. Questi tre effetti sommati circa dimezzano l'impatto sull'occupazione.
          </p>
          <p>
            <strong>Perché la soglia è il 3% e non lo 0%?</strong> Perché anche a PIL costante la disoccupazione aumenterebbe. Ogni anno la forza lavoro cresce di circa 1% (nuovi ingressi: giovani, immigrati) e la produttività cresce di circa 1,5–2% (ogni lavoratore produce di più grazie a tecnologia e formazione). Se la produzione non cresce, queste due pressioni fanno sì che la domanda di lavoro non tenga il passo con l'offerta. In paesi con crescita demografica lenta come il Giappone o l'Italia, questa soglia è più bassa: intorno all'1–1,5%.
          </p>
          <p>
            <strong>Verifica empirica:</strong> la figura 11.4 del testo mostra il diagramma a dispersione con i dati americani anno per anno dal 1961 al 2021. Ogni punto rappresenta un anno: sull'asse orizzontale la crescita del PIL, su quello verticale la variazione della disoccupazione. I punti si distribuiscono quasi perfettamente lungo la retta di Okun. Le deviazioni più marcate corrispondono a periodi di grandi cambiamenti strutturali nel mercato del lavoro o, come nel 2020, a shock di natura non economica.
          </p>
          <p>
            <strong>Esempio concreto:</strong> nel 2009 il PIL americano scese del 3,5%. La legge di Okun prevede ΔU = −½×(−3,5 − 3) = +3,25 punti. La disoccupazione effettiva salì dal 5,0% al 9,3% (+4,3 punti). La formula sottostima leggermente perché il panico indusse licenziamenti superiori alla contrazione effettiva della produzione.
          </p>
        </div>

        <OkunGraph />

        <div className="callout">
          <strong>Verifica storica Covid:</strong> nel 2020 il PIL americano scese del 3,5% in media annua. La legge di Okun prevede: ΔU = −½×(−3,5 − 3) = +3,25%. La disoccupazione raggiunse il 14,7% nel picco di aprile 2020, poi recuperò rapidamente grazie ai sussidi federali del CARES Act. Il Covid fu anomalo: la chiusura era per settore, non economica in senso classico.
        </div>
      </section>

      {/* ── 11.3 — Perché i prezzi sono rigidi? */}
      <section className="macro-section">
        <h2 className="section-title">11.3 Perché i Prezzi sono Rigidi?</h2>
        <div className="prose">
          <p>
            Il modello di breve periodo si fonda su un presupposto fondamentale: prezzi e salari non si aggiustano istantaneamente alle variazioni della domanda. Se lo facessero, qualsiasi riduzione della domanda verrebbe immediatamente compensata da prezzi più bassi che la stimolano di nuovo, e l'economia non si allontanerebbe mai dal suo livello naturale. Ma nella realtà i prezzi sono vischiosi — si muovono lentamente.
          </p>
          <p>
            La risposta empirica più diretta viene da uno studio condotto dall'economista Alan Blinder a Princeton negli anni '90. Blinder intervistò circa 200 dirigenti di imprese americane di vari settori, chiedendo con quale frequenza cambiassero i prezzi e perché non lo facessero più spesso. I risultati furono sorprendenti: il <strong>71% delle imprese cambia i propri prezzi una volta all'anno o meno</strong>. Solo il 10% li modifica più volte al mese. E ancora più significativo: l'<strong>85% delle imprese dichiara di non cambiare i prezzi in risposta a una diminuzione della domanda</strong>. Aspettano.
          </p>
          <p>
            Blinder identificò quattro spiegazioni microeconomiche principali:
          </p>
          <p>
            <strong>Costi di menu.</strong> Cambiare un prezzo ha un costo reale: ristampare cataloghi, aggiornare sistemi informatici, comunicare ai clienti, riaddestrare i venditori. Per variazioni di domanda percepite come temporanee, il costo del cambiamento supera il beneficio. Nell'era digitale questi costi si sono ridotti per molti settori, ma restano elevati per contratti industriali e normative di settore.
          </p>
          <p>
            <strong>Contratti espliciti e impliciti.</strong> Molti prezzi sono fissati in contratti di medio-lungo termine che per definizione non variano fino alla scadenza. Ma anche dove non ci sono contratti formali, esiste un contratto implicito: il cliente si aspetta stabilità di prezzo e considera un aumento improvviso come una violazione della fiducia. Il motivo più citato nell'indagine di Blinder è proprio questo.
          </p>
          <p>
            <strong>Rigidità salariale verso il basso.</strong> I salari nominali tendono a non scendere anche in presenza di eccesso di offerta di lavoro. Le ragioni: la teoria dei salari di efficienza (pagare sopra il mercato aumenta produttività e riduce turnover); le norme sociali (un taglio salariale è percepito come un torto anche se il potere d'acquisto reale è invariato); le clausole sindacali. Se i salari non scendono, i costi di produzione non scendono, e quindi nemmeno i prezzi.
          </p>
          <p>
            <strong>Coordinamento.</strong> Anche se ogni singola impresa vorrebbe abbassare i prezzi in recessione, nessuna lo fa per prima perché teme che i concorrenti non la seguano. Il risultato è un equilibrio in cui tutti mantengono i prezzi alti aspettando che gli altri muovano: un classico problema di azione collettiva.
          </p>
          <p>
            La conseguenza macroeconomica è che nel breve periodo, di fronte a uno shock di domanda, ciò che si aggiusta non sono i prezzi ma la quantità prodotta — e quindi l'occupazione. Questa è la base microeconomica della curva OA orizzontale nel breve periodo.
          </p>
        </div>

        <div className="formula-box secondary">
          <div className="formula-label">Survey di Blinder — Frequenza di variazione dei prezzi per categoria (mesi tra un cambio e l'altro)</div>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0.5rem 2rem', marginTop:'0.75rem', fontSize:'0.9rem'}}>
            {[['Merci di prima necessità','10,2'],['Media generale','11,5'],['Beni intermedi','14,6'],['Servizi alle imprese','15,5'],['Beni strumentali','16,1'],['Servizi finali','15,0']].map(([k,v])=>(
              <div key={k} style={{display:'flex', justifyContent:'space-between', borderBottom:'1px solid var(--border-color)', paddingBottom:'0.25rem'}}>
                <span style={{color:'var(--text-secondary)'}}>{k}</span>
                <strong>{v} mesi</strong>
              </div>
            ))}
          </div>
          <div className="formula-note" style={{marginTop:'0.75rem'}}>Fonte: Blinder et al., "Asking About Prices: A New Approach to Understanding Price Stickiness" (1998).</div>
        </div>
      </section>

      {/* ── 11.4 — Indicatori Economici */}
      <section className="macro-section">
        <h2 className="section-title">11.4 Gli Indicatori Economici: Anticipatori, Coincidenti e Ritardati</h2>
        <div className="prose">
          <p>
            Esistono variabili statistiche che tendono a muoversi prima, insieme o dopo il PIL, fornendo segnali utili sulla direzione del ciclo. La classificazione in tre categorie riflette la loro relazione temporale con l'attività economica.
          </p>
          <p>
            Gli <strong>indicatori anticipatori (leading indicators)</strong> cambiano prima del PIL, tipicamente con un anticipo di 3–12 mesi. I principali: i prezzi delle azioni in borsa (il mercato incorpora le aspettative sugli utili futuri); i permessi di costruzione di nuove abitazioni (le costruzioni richiedono mesi — un calo dei permessi oggi precede una riduzione del PIL tra 6 mesi); gli ordini di beni strumentali (si ordinano macchinari prima di aumentare la produzione); l'indice di fiducia dei consumatori; il differenziale tra tassi a lungo e breve termine — una <em>yield curve invertita</em> (tassi a breve superiori a quelli a lungo) ha preceduto quasi tutte le recessioni americane del dopoguerra. Questi indicatori vengono aggregati in un <strong>Composite Leading Indicator (CLI)</strong> calcolato dal Conference Board negli USA e dall'OCSE per i paesi avanzati.
          </p>
          <p>
            Gli <strong>indicatori coincidenti</strong> si muovono contemporaneamente al PIL. Sono la base della definizione di recessione: il PIL stesso, l'occupazione non agricola (in USA il dato mensile dei "non-farm payrolls" è il più atteso del calendario statistico), il reddito personale reale, le vendite al dettaglio, la produzione industriale. L'NBER usa proprio questi indicatori per datare ufficialmente le recessioni.
          </p>
          <p>
            Gli <strong>indicatori ritardati</strong> cambiano dopo il PIL, confermando a posteriori che una svolta è avvenuta. I principali: la durata media della disoccupazione (le persone vengono licenziate con ritardo e trovano lavoro con ulteriore ritardo); il tasso di interesse sui prestiti bancari; l'indice dei prezzi al consumo dei servizi (affitti e tariffe professionali si aggiustano molto più lentamente dei beni); il rapporto scorte/vendite.
          </p>
          <p>
            La sequenza tipica attorno a una recessione è: prima si muovono gli anticipatori → poi i coincidenti confermano → poi i ritardati consolidano l'evidenza. Il problema pratico è che ogni indicatore emette segnali rumorosi. Il mercato azionario, ad esempio, ha "previsto 9 delle ultime 5 recessioni" secondo la famosa battuta di Paul Samuelson: spesso scende senza che segua una recessione reale. Solo la convergenza di più segnali è affidabile.
          </p>
        </div>

        <div className="formula-box secondary">
          <div className="formula-label">Classificazione degli Indicatori Economici Principali</div>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'1rem', marginTop:'0.75rem'}}>
            {[
              {title:'ANTICIPATORI', color:'var(--accent-cyan)', items:['Indice S&P 500','Permessi edilizi','Ordini manifatturieri','Fiducia consumatori','Ore lavorate / settimana','Spread tassi (yield curve)']},
              {title:'COINCIDENTI', color:'var(--accent-indigo)', items:['PIL reale','Occupazione (payrolls)','Reddito personale reale','Vendite al dettaglio','Produzione industriale']},
              {title:'RITARDATI', color:'#d97706', items:['Durata disoccupazione','Tassi prestiti bancari','CPI servizi','Credito imprese','Scorte / Vendite']},
            ].map(({title,color,items})=>(
              <div key={title}>
                <div style={{fontWeight:700, color, marginBottom:'0.5rem', fontSize:'0.85rem', textTransform:'uppercase', letterSpacing:'0.05em'}}>{title}</div>
                <ul style={{listStyle:'disc', paddingLeft:'1.2rem', fontSize:'0.88rem', color:'var(--text-secondary)', lineHeight:1.7}}>
                  {items.map(i=><li key={i}>{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 11.5 — Orizzonti temporali e OA */}
      <section className="macro-section">
        <h2 className="section-title">11.5 Gli Orizzonti Temporali e l'Offerta Aggregata</h2>
        <div className="prose">
          <p>
            La distinzione tra breve e lungo periodo in macroeconomia non è una questione di quanti mesi o anni siano trascorsi — è una distinzione sul comportamento dei prezzi e dei salari nominali. Questa distinzione produce due curve di offerta aggregata completamente diverse.
          </p>
          <p>
            L'<strong>offerta aggregata di lungo periodo (OA<sub>LP</sub>)</strong> è una retta verticale a Ȳ nel piano (P, Y). Nel lungo periodo, quando tutti i prezzi e i salari hanno avuto il tempo di aggiustarsi, la quantità prodotta dipende esclusivamente dai fattori reali: capitale K, lavoro L e tecnologia A. Questi tre fattori determinano il <strong>prodotto naturale Ȳ</strong> — esattamente quello che il modello di Solow del Capitolo 8 ha descritto. Il livello dei prezzi non ha alcun effetto su Ȳ: questa è la "neutralità della moneta" nel lungo periodo.
          </p>
          <p>
            L'<strong>offerta aggregata di breve periodo (OA<sub>BP</sub>)</strong> è, nel modello semplificato, una retta orizzontale al livello dei prezzi corrente P̄. Le imprese hanno già fissato i loro listini e producono qualsiasi quantità la domanda richieda a quei prezzi — la produzione si adatta alla domanda, non i prezzi. Questa curva orizzontale traduce in termini grafici esattamente la rigidità dei prezzi documentata dalla survey di Blinder.
          </p>
          <p>
            Il <strong>meccanismo di aggiustamento</strong> funziona attraverso la revisione dei prezzi e dei salari. Se Y<sub>BP</sub> &gt; Ȳ (boom): il mercato del lavoro è teso, i salari vengono rinegoziati al rialzo → i costi delle imprese aumentano → i prezzi salgono → OA<sub>BP</sub> si sposta verso l'alto → la domanda reale si riduce → Y scende verso Ȳ. Il processo inverso vale per le recessioni, ma è storicamente più lento e asimmetrico: i salari scendono molto più difficilmente di quanto non salgano. Il tempo medio di aggiustamento completo oscilla tra 2 e 5 anni a seconda del paese e del tipo di shock.
          </p>
        </div>
      </section>

      {/* ── 11.6 — Domanda Aggregata */}
      <section className="macro-section">
        <h2 className="section-title">11.6 La Domanda Aggregata</h2>
        <div className="prose">
          <p>
            La <strong>curva di domanda aggregata (DA)</strong> mostra la relazione tra il livello generale dei prezzi P e la quantità totale di beni e servizi che l'economia desidera acquistare (C + I + G + NX). La curva è decrescente in P. Ma il motivo non è quello microeconomico banale per cui prezzi più alti riducono la domanda di quel singolo bene — qui stiamo parlando di tutti i beni e servizi insieme. Tre canali distinti spiegano la pendenza negativa.
          </p>
          <p>
            <strong>Effetto ricchezza reale (Pigou).</strong> Una parte della ricchezza delle famiglie è detenuta in forma nominale — conti correnti, obbligazioni, contante. Se il livello generale dei prezzi aumenta, il potere d'acquisto reale di questa ricchezza nominale si riduce. Le famiglie si sentono più povere in termini reali e riducono i consumi. Questo è empiricamente il canale più debole dei tre, perché solo una frazione della ricchezza totale è in forma nominale.
          </p>
          <p>
            <strong>Effetto tasso di interesse (Keynes).</strong> Questo è il canale principale. Quando il livello dei prezzi aumenta, le famiglie e le imprese hanno bisogno di più moneta nominale per finanziare le stesse transazioni reali. Se l'offerta di moneta è fissa, la maggiore domanda di liquidità fa salire il tasso di interesse di equilibrio. Tassi più alti rendono non redditizi i progetti di investimento marginali e scoraggiano i consumi di beni durevoli acquistati a credito. Il risultato è una riduzione della domanda aggregata. Questo meccanismo è il nucleo del modello IS-LM.
          </p>
          <p>
            <strong>Effetto competitività estera (Mundell-Fleming).</strong> Se il livello dei prezzi interni aumenta mentre quelli esteri rimangono invariati, i beni nazionali diventano relativamente più cari. Le esportazioni si riducono e le importazioni aumentano. La domanda netta di produzione interna (X − M) diminuisce.
          </p>
          <p>
            La <strong>posizione</strong> della curva DA — la sua traslazione verso destra o sinistra — dipende da quattro variabili principali.
          </p>
          <p>
            La <strong>politica monetaria</strong> è lo strumento più potente e rapido. Quando la banca centrale abbassa il tasso di riferimento, il costo del credito diminuisce → le imprese investono di più e le famiglie si indebitano di più → DA si sposta a destra. Il limite: quando i tassi sono già prossimi a zero (come dopo il 2008), la politica monetaria convenzionale perde efficacia. Le banche centrali ricorrono allora a strumenti non convenzionali: acquisti diretti di titoli (QE), forward guidance, tassi negativi.
          </p>
          <p>
            La <strong>politica fiscale</strong> agisce su G (spesa pubblica) e T (tasse). L'effetto è amplificato dal <strong>moltiplicatore keynesiano</strong>: ogni euro di spesa pubblica genera più di un euro di PIL, perché chi riceve quell'euro lo rispende in parte, creando un secondo giro di spesa. In pratica il moltiplicatore è minore di quello teorico per effetti di crowding out (la spesa in deficit può far salire i tassi, riducendo gli investimenti privati), importazioni (parte della spesa va all'estero) e comportamento forward-looking (le famiglie che si aspettano future tasse risparmiano di più oggi).
          </p>
          <p>
            La <strong>fiducia</strong> di consumatori e imprese ha un ruolo enorme e difficilmente controllabile. Se le famiglie si aspettano una recessione, tagliano preventivamente i consumi — creando esattamente la recessione che temevano. Questo meccanismo auto-realizzante rende i cicli economici amplificati rispetto agli shock fondamentali originari.
          </p>
          <p>
            La <strong>domanda estera</strong> dipende dalla crescita dei partner commerciali e dal tasso di cambio. Se la zona euro entra in recessione, le esportazioni italiane calano e la DA italiana si sposta a sinistra.
          </p>
        </div>

        <div className="formula-box">
          <div className="formula-label">La curva di domanda aggregata — forma lineare semplificata</div>
          <div className="formula-main">Y = D − h·P &nbsp;⟺&nbsp; P = (D − Y) / h</div>
          <div className="formula-note">
            D = parametro di domanda (spostato da politica monetaria, fiscale, fiducia, domanda estera) · h = sensibilità della domanda al livello dei prezzi · Un aumento di D sposta la curva a destra senza cambiarne la pendenza
          </div>
        </div>
      </section>

      {/* ── 11.7 — Equilibrio DA-OA */}
      <section className="macro-section">
        <h2 className="section-title">11.7 L'Equilibrio DA-OA: Breve e Lungo Periodo</h2>
        <div className="prose">
          <p>
            Mettendo insieme DA, OA<sub>BP</sub> e OA<sub>LP</sub> nel piano (Y, P) si ottiene lo strumento analitico centrale della macroeconomia delle fluttuazioni.
          </p>
          <p>
            L'<strong>equilibrio di breve periodo</strong> si trova all'intersezione di DA con OA<sub>BP</sub>. Poiché OA<sub>BP</sub> è orizzontale a P̄, la produzione è Y<sub>BP</sub> = D − h·P̄: interamente determinata dalla domanda al prezzo corrente. Se Y<sub>BP</sub> &gt; Ȳ, l'economia è in <em>boom</em> con gap positivo: mercato del lavoro teso, inflazione in accelerazione. Se Y<sub>BP</sub> &lt; Ȳ, siamo in <em>recessione</em> con gap negativo: lavoratori disoccupati, capacità produttiva inutilizzata, costo umano immediato.
          </p>
          <p>
            L'<strong>equilibrio di lungo periodo</strong> si trova all'intersezione di DA con OA<sub>LP</sub>: Y = Ȳ e P = P<sub>LR</sub> = (D − Ȳ)/h. Produzione al massimo sostenibile, solo disoccupazione frizionale e strutturale, prezzi completamente aggiustati.
          </p>
          <p>
            Un'implicazione fondamentale: <strong>nel lungo periodo la politica monetaria è neutrale</strong>. Un aumento permanente dell'offerta di moneta sposta DA a destra e nel breve periodo Y sale. Ma nel lungo periodo l'unico effetto è un aumento proporzionale del livello dei prezzi P. La produzione reale torna a Ȳ. Questo risultato — la neutralità della moneta nel lungo periodo — è pienamente coerente con l'evidenza storica: i paesi con alta crescita monetaria hanno alta inflazione, non alta crescita reale.
          </p>
        </div>

        <DaOaModel />

        <div className="callout">
          <strong>Prova interattiva:</strong> aumenta D (politica espansiva) → Y<sub>BP</sub> supera Ȳ → nel lungo periodo P<sub>LR</sub> sale e Y torna a Ȳ. La politica è solo inflazionistica nel lungo periodo. Abbassa P̄ (shock positivo di offerta) → Y<sub>BP</sub> aumenta e P scende: crescita senza inflazione. L'equilibrio di lungo periodo (Y = Ȳ) è indipendente da P̄.
        </div>
      </section>

      {/* ── 11.8 — Politiche di Stabilizzazione */}
      <section className="macro-section">
        <h2 className="section-title">11.8 Le Politiche di Stabilizzazione</h2>
        <div className="prose">
          <p>
            Se il meccanismo di aggiustamento automatico porta sempre l'economia verso Ȳ nel lungo periodo, perché i governi e le banche centrali intervengono attivamente in ogni recessione? Keynes rispose con la frase più citata in economia: <em>"Nel lungo periodo siamo tutti morti."</em> Il messaggio è pratico: l'aggiustamento funziona, ma può richiedere anni. Nel frattempo, milioni di persone perdono il lavoro, il capitale umano si erode, le imprese falliscono e non si ricostituiscono facilmente. Il costo sociale non è solo temporaneo — lascia cicatrici permanenti.
          </p>
          <p>
            Le politiche di stabilizzazione si dividono in automatiche e discrezionali.
          </p>
          <p>
            Gli <strong>stabilizzatori automatici</strong> sono meccanismi incorporati nel sistema fiscale che operano senza alcuna decisione deliberata. Il principale è il sistema di sussidi di disoccupazione: in recessione la spesa in sussidi aumenta automaticamente, mantenendo un reddito minimo per chi perde il lavoro e smorzando la caduta della domanda. Parallelamente, in recessione le entrate fiscali calano (meno redditi imponibili → meno imposte) → il bilancio pubblico diventa automaticamente più espansivo. Con l'imposta progressiva questo effetto è amplificato: chi perde reddito scende in scaglioni fiscali più bassi, riducendo proporzionalmente il prelievo.
          </p>
          <p>
            Le <strong>politiche discrezionali</strong> sono decisioni deliberate per spostare DA. La <strong>politica monetaria espansiva</strong> è lo strumento più rapido: la decisione richiede settimane, ma gli effetti sull'economia impiegano 6–18 mesi (i "lunghi e variabili ritardi" di Milton Friedman). Il limite critico: quando i tassi sono già vicini a zero, la politica convenzionale è esaurita — si entra nella trappola della liquidità.
          </p>
          <p>
            La <strong>politica fiscale espansiva</strong> agisce attraverso il moltiplicatore keynesiano. Il moltiplicatore teorico è 1/(1 − PMC), dove PMC è la propensione marginale al consumo. Con PMC = 0,8, ogni euro di spesa pubblica genererebbe teoricamente 5 euro di PIL. In pratica le stime empiriche danno valori tra 0,5 e 1,5, per crowding out, importazioni e comportamento forward-looking delle famiglie. Svantaggio strutturale: la politica fiscale richiede approvazione parlamentare — quando viene implementata, il ciclo può già essere cambiato.
          </p>
        </div>

        <div className="case-study-grid">
          <div className="case-card">
            <div className="case-icon">🇫🇷</div>
            <h4>Caso Studio: La Francia e la politica monetaria degli anni Ottanta</h4>
            <p>
              Nel maggio 1981 François Mitterrand fu eletto presidente con un programma espansivo: aumento della spesa pubblica, nazionalizzazioni, riduzione dell'orario di lavoro a 39 ore con quinta settimana di ferie. La DA francese si spostò a destra.
            </p>
            <p>
              Il contesto era però sfavorevole: il resto d'Europa — la Bundesbank in Germania, il governo Thatcher in UK — praticava austerità. Con la DA francese in espansione e quella degli altri in contrazione, i prezzi francesi salirono più di quelli dei partner. Le importazioni aumentarono, le esportazioni si ridussero, il franco subì pressioni speculative nel Sistema Monetario Europeo (SME) e dovette essere svalutato tre volte tra il 1981 e il 1983.
            </p>
            <p>
              Nel marzo 1983 Mitterrand fu costretto alla <em>"tournant de la rigueur"</em>: taglio della spesa pubblica, aumento delle tasse, stretta del credito. La disoccupazione salì all'8% e vi rimase per anni. Il tentativo di espansione fiscale in un'economia aperta con cambio fisso aveva fallito: gran parte dello stimolo era "fuoriuscito" verso l'estero invece di aumentare il PIL interno — il fenomeno del leakage in economia aperta.
            </p>
            <div className="case-stat">
              <span>Disoccupazione Francia post-tournant</span>
              <strong>~8% (1983–88)</strong>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11.9 — Shock di Domanda */}
      <section className="macro-section">
        <h2 className="section-title">11.9 Gli Shock di Domanda</h2>
        <div className="prose">
          <p>
            Uno <strong>shock di domanda</strong> è uno spostamento improvviso e inatteso della curva DA — un cambiamento nella domanda aggregata che non dipende dal livello dei prezzi. Può essere positivo (DA destra: boom) o negativo (DA sinistra: recessione). Le fonti sono molteplici: crollo della fiducia, crisi finanziaria, variazione della politica monetaria o fiscale, shock sulla domanda estera.
          </p>
          <p>
            Il percorso di aggiustamento a uno shock di domanda negativo è rappresentato dai tre punti A → B → C.
          </p>
          <p>
            Il <strong>punto A</strong> è l'equilibrio iniziale: Y = Ȳ, P = P̄. L'economia è sia sulla OA<sub>BP</sub> che sulla OA<sub>LP</sub> — nessun gap di output. Uno shock negativo sposta DA a sinistra verso DA'.
          </p>
          <p>
            <strong>Nel breve periodo (A → B):</strong> i prezzi rimangono fissi a P̄ per le ragioni di rigidità già discusse. La produzione cade al punto B: Y<sub>BP</sub> &lt; Ȳ. Si apre un gap recessivo. Le politiche di stabilizzazione possono intervenire qui: una politica espansiva sposta DA di nuovo verso destra, riducendo il gap.
          </p>
          <p>
            <strong>Nel lungo periodo (B → C), senza intervento:</strong> con Y &lt; Ȳ, il mercato del lavoro è in eccesso di offerta. Gradualmente i lavoratori accettano salari più bassi → i costi di produzione calano → le imprese abbassano i prezzi → OA<sub>BP</sub> si sposta verso il basso → Y risale verso Ȳ. Al punto C l'economia è di nuovo a Ȳ con un livello dei prezzi più basso. Il problema è il tempo: questo processo può richiedere 3–5 anni.
          </p>
          <p>
            La <strong>Grande Recessione del 2007–09</strong> è il caso di studio più ricco. Il crollo del mercato immobiliare americano innescò una crisi finanziaria sistemica che distrusse la fiducia e paralizzò il credito bancario. Il PIL americano cadde del 4,3%; la disoccupazione raddoppiò dal 5% al 10%; l'effetto si propagò globalmente. La Fed tagliò i tassi a zero. Il governo Obama approvò l'ARRA da 787 miliardi. Nonostante questi interventi, il ritorno alla piena occupazione richiese 7 anni — fino al 2016.
          </p>
        </div>

        <DemandShockGraph />

        <div className="callout">
          <strong>Caso Covid-19 (2020):</strong> shock di domanda e di offerta simultanei. Il PIL USA crollò del 31,4% annualizzato nel Q2 2020. Il CARES Act da 2.200 miliardi (circa il 10% del PIL USA) fu approvato in meno di due settimane. La recessione durò 2 trimestri — ma il rimbalzo della domanda nel 2021–22, con catene di fornitura ancora bloccate, generò inflazione all'8–9%: troppo stimolo rispetto all'offerta disponibile.
        </div>
      </section>

      {/* ── 11.10 — Shock di Offerta */}
      <section className="macro-section">
        <h2 className="section-title">11.10 Gli Shock di Offerta e la Stagflazione</h2>
        <div className="prose">
          <p>
            Gli shock di offerta sono il peggior scenario per un policy maker perché rompono la logica normale degli strumenti di politica economica. Uno <strong>shock di offerta negativo</strong> — un aumento improvviso dei costi di produzione, tipicamente del prezzo dell'energia — sposta OA<sub>BP</sub> verso l'alto: per qualsiasi livello di produzione, le imprese devono applicare prezzi più alti. Il risultato è la <strong>stagflazione</strong>: inflazione e recessione <em>simultanee</em>.
          </p>
          <p>
            Lo shock porta l'economia dal punto di equilibrio A al punto B: i prezzi salgono (inflazione) mentre la produzione scende sotto Ȳ (recessione). Il policy maker si trova davanti a una scelta senza soluzioni indolori:
          </p>
          <p>
            <em>Accomodare lo shock con politica espansiva</em>: spostare DA a destra per riportare Y verso Ȳ. La produzione si riprende ma l'inflazione si consolida su livelli più alti.
          </p>
          <p>
            <em>Non intervenire e attendere l'aggiustamento automatico</em>: con Y &lt; Ȳ, i salari scendono gradualmente, OA<sub>BP</sub> si riabbassa, l'economia torna a Ȳ. Il costo: anni di alta disoccupazione.
          </p>
          <p>
            <em>Stretta anti-inflazionistica</em>: contrarre DA per riportare P verso il livello originale. I prezzi scendono ma Y cade ancora di più, aggravando la recessione già in corso.
          </p>
          <p>
            Nessuna opzione è priva di costi. Questo è il dilemma fondamentale della stagflazione, e spiega perché gli shock petroliferi degli anni '70 crearono tanta confusione nelle banche centrali — che fino ad allora operavano in un contesto in cui inflazione e disoccupazione si muovevano sempre in direzioni opposte (la curva di Phillips standard).
          </p>
          <p>
            Uno <strong>shock di offerta positivo</strong> è l'opposto simmetrico: OA<sub>BP</sub> si sposta verso il basso → Y aumenta e P scende simultaneamente. Crescita senza inflazione. Gli anni '90 negli USA beneficiarono parzialmente di questo scenario grazie alla rivoluzione informatica.
          </p>
        </div>

        <SupplyShockGraph />

        <div className="formula-box secondary" style={{marginTop:'2rem'}}>
          <div className="formula-label">Tabella 11.2 — Variazione del prezzo del petrolio, inflazione e disoccupazione USA (1972–1983)</div>
          <div style={{overflowX:'auto'}}>
            <table style={{width:'100%', borderCollapse:'collapse', fontSize:'0.9rem', marginTop:'0.75rem'}}>
              <thead>
                <tr style={{borderBottom:'2px solid var(--border-color)'}}>
                  <th style={{padding:'0.5rem', textAlign:'left', color:'var(--text-secondary)'}}>Anno</th>
                  <th style={{padding:'0.5rem', textAlign:'right', color:'var(--text-secondary)'}}>Variaz. prezzo petrolio (%)</th>
                  <th style={{padding:'0.5rem', textAlign:'right', color:'var(--text-secondary)'}}>Tasso di inflazione (%)</th>
                  <th style={{padding:'0.5rem', textAlign:'right', color:'var(--text-secondary)'}}>Tasso di disoccupazione (%)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['1972','+3,5','3,2','5,6'],
                  ['1973','+11,8','6,2','4,9'],
                  ['1974','+34,5','11,0','5,6'],
                  ['1975','−1,7','9,1','8,5'],
                  ['1976','−3,8','5,8','7,7'],
                  ['1977','+8,2','6,5','7,1'],
                  ['1978','+7,9','7,6','6,1'],
                  ['1979','+48,8','11,3','5,8'],
                  ['1980','+14,5','13,5','7,1'],
                  ['1981','−4,0','10,3','7,6'],
                  ['1982','−13,2','6,2','9,7'],
                  ['1983','−4,3','3,2','9,6'],
                ].map(([yr,oil,inf,dis]) => {
                  const oilVal = parseFloat(oil.replace(',','.').replace('−','-').replace('+',''));
                  const infVal = parseFloat(inf.replace(',','.'));
                  const disVal = parseFloat(dis.replace(',','.'));
                  const isShock = yr==='1974'||yr==='1979'||yr==='1980';
                  const isRecov = yr==='1982'||yr==='1983';
                  return (
                    <tr key={yr} style={{borderBottom:'1px solid var(--border-color)', background: isShock ? 'rgba(220,38,38,0.05)' : isRecov ? 'rgba(67,56,202,0.04)' : 'transparent'}}>
                      <td style={{padding:'0.4rem 0.5rem', fontWeight: isShock ? 700 : 400}}>{yr}</td>
                      <td style={{padding:'0.4rem 0.5rem', textAlign:'right', color: oilVal>20?'#dc2626': oilVal<-5?'#059669':'var(--text-primary)', fontWeight: Math.abs(oilVal)>20?700:400}}>{oil}</td>
                      <td style={{padding:'0.4rem 0.5rem', textAlign:'right', color: infVal>10?'#dc2626':'var(--text-primary)', fontWeight: infVal>10?700:400}}>{inf}</td>
                      <td style={{padding:'0.4rem 0.5rem', textAlign:'right', color: disVal>8?'#dc2626':'var(--text-primary)', fontWeight: disVal>8?700:400}}>{dis}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="formula-note">Fonte: U.S. Bureau of Labor Statistics; Federal Reserve. In rosso: inflazione &gt;10%, disoccupazione &gt;8%, variazione petrolio &gt;20%. In verde: calo del prezzo petrolio. Sfondo rosa: anni di shock OPEC. Sfondo viola: recessione da stretta Volcker.</div>
        </div>

        <div className="case-study-grid" style={{marginTop:'2rem'}}>
          <div className="case-card">
            <div className="case-icon">🛢️</div>
            <h4>Primo shock OPEC (1973–74)</h4>
            <p>La Guerra del Kippur portò all'embargo petrolifero arabo verso USA e paesi europei. Il prezzo del greggio balzò da 3 a 12 dollari al barile (+300%). Per le economie occidentali totalmente dipendenti dal petrolio mediorientale, fu uno shock di offerta devastante. Negli USA: inflazione al 12,3% nel 1974; disoccupazione al 9% nel 1975. Stagflazione pura. I governi che cercarono di stimolare la domanda per combattere la recessione ottennero solo più inflazione.</p>
            <div className="case-stat">
              <span>Prezzo petrolio 1973–74</span>
              <strong>da $3 a $12 (+300%)</strong>
            </div>
          </div>
          <div className="case-card">
            <div className="case-icon">⚡</div>
            <h4>Secondo shock OPEC (1979–81) e la risposta Volcker</h4>
            <p>La rivoluzione iraniana e la guerra Iran-Iraq portarono il greggio da 13 a 34 dollari. L'inflazione americana raggiunse il 13,5% nel 1980. Il presidente della Fed Paul Volcker rispose con la stretta monetaria più brutale del dopoguerra: tassi al 20%. L'obiettivo era "rompere" le aspettative inflazionistiche. Ci riuscì — ma al costo di una recessione profonda nel 1981–82 con disoccupazione al 10,8%.</p>
            <div className="case-stat">
              <span>Tasso Fed picco 1981</span>
              <strong>20%</strong>
            </div>
          </div>
        </div>
      </section>

      {/* ── PIL italiano */}
      <section className="macro-section">
        <h2 className="section-title">Un Confronto: La Composizione del PIL Italiano (2023)</h2>
        <div className="prose">
          <p>
            Il modello DA-OA è astratto, ma le sue variabili corrispondono a grandezze reali misurabili. La tabella seguente mostra la composizione del PIL italiano nel 2023 secondo i conti nazionali ISTAT. I consumi privati rappresentano oltre il 56% del PIL — la componente dominante, e quella che assorbe la maggior parte degli shock di domanda interni. Gli investimenti (21%) sono la componente più ciclica: scendono di più in recessione e salgono di più in espansione. La spesa pubblica (19%) include i beni e servizi delle amministrazioni pubbliche, ma non i trasferimenti (pensioni, sussidi di disoccupazione) che influenzano la domanda attraverso il reddito disponibile delle famiglie. Le esportazioni nette (3%) riflettono il surplus commerciale strutturale dell'economia italiana, trainato dalla manifattura e dall'industria meccanica del Nord.
          </p>
        </div>
        <div className="formula-box secondary">
          <div className="formula-label">Composizione del PIL italiano — 2023 (milioni di euro correnti)</div>
          <div style={{overflowX:'auto'}}>
            <table style={{width:'100%', borderCollapse:'collapse', fontSize:'0.9rem', marginTop:'0.75rem'}}>
              <thead>
                <tr style={{borderBottom:'2px solid var(--border-color)'}}>
                  <th style={{padding:'0.5rem', textAlign:'left', color:'var(--text-secondary)'}}>Componente (Y = C + I + G + NX)</th>
                  <th style={{padding:'0.5rem', textAlign:'right', color:'var(--text-secondary)'}}>Valore (mln €)</th>
                  <th style={{padding:'0.5rem', textAlign:'right', color:'var(--text-secondary)'}}>% del PIL</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['PIL totale (Y)','1.787.960','100,0%'],
                  ['Consumi privati (C)','1.009.855','56,5%'],
                  ['Spesa pubblica (G)','345.841','19,3%'],
                  ['Investimenti (I)','378.464','21,2%'],
                  ['Esportazioni nette (NX)','63.041','3,0%'],
                ].map(([comp,val,pct]) => (
                  <tr key={comp} style={{borderBottom:'1px solid var(--border-color)', background: comp.startsWith('PIL')?'rgba(2,132,199,0.05)':'transparent'}}>
                    <td style={{padding:'0.4rem 0.5rem', fontWeight: comp.startsWith('PIL')?700:400}}>{comp}</td>
                    <td style={{padding:'0.4rem 0.5rem', textAlign:'right'}}>{val}</td>
                    <td style={{padding:'0.4rem 0.5rem', textAlign:'right', fontWeight:700, color:'var(--accent-indigo)'}}>{pct}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="formula-note">Fonte: ISTAT, Conti Nazionali 2023. Valori a prezzi correnti.</div>
        </div>
      </section>

    </div>
  );
}
