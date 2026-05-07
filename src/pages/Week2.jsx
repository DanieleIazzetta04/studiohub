import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import '../index.css';
import './macro/macro.css';

// ══════════════════════════════════════════════════════════════
//  SVG ENGINE (identico al pattern di Cap5_Inflazione)
// ══════════════════════════════════════════════════════════════
const W = 520, H = 290;
const PL = 52, PR = 18, PT = 18, PB = 40;
const cW = W - PL - PR;
const cH = H - PT - PB;

const toX = (v, vMin, vMax) => PL + ((v - vMin) / (vMax - vMin)) * cW;
const toY = (v, yMin, yMax) => {
  const range = yMax - yMin;
  const clamped = Math.max(yMin, Math.min(v, yMax));
  return PT + (1 - (clamped - yMin) / range) * cH;
};

function Axes({ xMin = 0, xMax, yMin = 0, yMax, xLabel = '', yLabel = '', nX = 5, nY = 4, xFmt = v => v.toFixed(1), yFmt = v => v.toFixed(1) }) {
  const xTicks = Array.from({ length: nX + 1 }, (_, i) => xMin + (i / nX) * (xMax - xMin));
  const yTicks = Array.from({ length: nY + 1 }, (_, i) => yMin + (i / nY) * (yMax - yMin));
  return (
    <g>
      {xTicks.map((x, i) => (
        <g key={i}>
          <line x1={toX(x, xMin, xMax)} y1={PT} x2={toX(x, xMin, xMax)} y2={PT + cH} stroke="#e2e8f0" strokeWidth={0.8} />
          <text x={toX(x, xMin, xMax)} y={PT + cH + 15} textAnchor="middle" fontSize={10} fill="#94a3b8">{xFmt(x)}</text>
        </g>
      ))}
      {yTicks.map((y, i) => (
        <g key={i}>
          <line x1={PL} y1={toY(y, yMin, yMax)} x2={PL + cW} y2={toY(y, yMin, yMax)} stroke="#e2e8f0" strokeWidth={0.8} />
          <text x={PL - 6} y={toY(y, yMin, yMax) + 4} textAnchor="end" fontSize={10} fill="#94a3b8">{yFmt(y)}</text>
        </g>
      ))}
      <line x1={PL} y1={PT} x2={PL} y2={PT + cH} stroke="#475569" strokeWidth={1.5} />
      <line x1={PL} y1={PT + cH} x2={PL + cW} y2={PT + cH} stroke="#475569" strokeWidth={1.5} />
      <text x={PL + cW + 4} y={PT + cH + 3} fontSize={13} fill="#475569" fontStyle="italic">{xLabel}</text>
      {yLabel && <text x={PL - 38} y={PT - 5} fontSize={12} fill="#64748b" fontStyle="italic">{yLabel}</text>}
    </g>
  );
}

function SliderControl({ label, symbol, value, min, max, step, onChange, color, fmt = v => v.toFixed(2) }) {
  return (
    <div className="slider-row">
      <div className="slider-header">
        <span className="slider-label">{label} <em>({symbol})</em></span>
        <span className="slider-value" style={{ color }}>{fmt(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        style={{ '--slider-color': color }}
      />
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAPH 1 — RADAR DELLE 5 FORZE DI PORTER
// ══════════════════════════════════════════════════════════════
function FiveForcesRadar() {
  const [rivalita, setRivalita] = useState(7);
  const [entranti, setEntranti] = useState(4);
  const [sostituti, setSostituti] = useState(5);
  const [fornitori, setFornitori] = useState(6);
  const [clienti, setClienti] = useState(8);

  const forces = [
    { label: 'Rivalità', value: rivalita, color: '#dc2626' },
    { label: 'Nuovi Entranti', value: entranti, color: '#f59e0b' },
    { label: 'Sostituti', value: sostituti, color: '#16a34a' },
    { label: 'Pot. Fornitori', value: fornitori, color: '#0ea5e9' },
    { label: 'Pot. Clienti', value: clienti, color: '#a855f7' },
  ];

  const cx = W / 2;
  const cy = H / 2 + 5;
  const radius = 100;
  const N = 5;
  const angle = (i) => -Math.PI / 2 + (i * 2 * Math.PI) / N;

  // Concentric polygon levels (2,4,6,8,10)
  const levels = [2, 4, 6, 8, 10];
  const levelPolys = levels.map(level => {
    const r = (level / 10) * radius;
    return Array.from({ length: N }, (_, i) => {
      const a = angle(i);
      return [cx + r * Math.cos(a), cy + r * Math.sin(a)].join(',');
    }).join(' ');
  });

  // Axes
  const axisLines = Array.from({ length: N }, (_, i) => {
    const a = angle(i);
    return { x2: cx + radius * Math.cos(a), y2: cy + radius * Math.sin(a) };
  });

  // Data polygon
  const dataPoly = forces.map((f, i) => {
    const r = (f.value / 10) * radius;
    const a = angle(i);
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)].join(',');
  }).join(' ');

  // Labels
  const labelPos = forces.map((f, i) => {
    const a = angle(i);
    const lr = radius + 22;
    return { x: cx + lr * Math.cos(a), y: cy + lr * Math.sin(a) };
  });

  const totale = forces.reduce((s, f) => s + f.value, 0);
  const mediaForze = totale / N;
  const attrattivita = mediaForze < 4 ? 'Alta' : mediaForze < 7 ? 'Media' : 'Bassa';
  const attrColor = mediaForze < 4 ? '#16a34a' : mediaForze < 7 ? '#f59e0b' : '#dc2626';

  return (
    <div className="graph-block">
      <h4 className="graph-title">Radar delle 5 Forze di Porter — Intensità complessiva e attrattività del settore</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          {/* Concentric grids */}
          {levelPolys.map((pts, i) => (
            <polygon key={i} points={pts} fill="none" stroke="#e2e8f0" strokeWidth={0.8} />
          ))}
          {/* Axes */}
          {axisLines.map((ax, i) => (
            <line key={i} x1={cx} y1={cy} x2={ax.x2} y2={ax.y2} stroke="#cbd5e1" strokeWidth={0.8} />
          ))}
          {/* Data polygon */}
          <polygon points={dataPoly} fill="rgba(168,85,247,0.18)" stroke="#a855f7" strokeWidth={2} />
          {/* Data points */}
          {forces.map((f, i) => {
            const r = (f.value / 10) * radius;
            const a = angle(i);
            return <circle key={i} cx={cx + r * Math.cos(a)} cy={cy + r * Math.sin(a)} r={4} fill={f.color} stroke="#fff" strokeWidth={1.5} />;
          })}
          {/* Labels */}
          {forces.map((f, i) => (
            <text key={i} x={labelPos[i].x} y={labelPos[i].y} textAnchor="middle" fontSize={10} fill="#475569" fontWeight={600}>{f.label}</text>
          ))}
          {/* Center label */}
          <text x={cx} y={cy - 4} textAnchor="middle" fontSize={11} fill="#94a3b8">scala</text>
          <text x={cx} y={cy + 8} textAnchor="middle" fontSize={11} fill="#94a3b8">0–10</text>
        </svg>
        <div className="graph-controls">
          <SliderControl label="Rivalità incumbent" symbol="R" value={rivalita} min={0} max={10} step={0.5} onChange={setRivalita} color="#dc2626" fmt={v => v.toFixed(1)} />
          <SliderControl label="Nuovi entranti" symbol="E" value={entranti} min={0} max={10} step={0.5} onChange={setEntranti} color="#f59e0b" fmt={v => v.toFixed(1)} />
          <SliderControl label="Sostituti" symbol="S" value={sostituti} min={0} max={10} step={0.5} onChange={setSostituti} color="#16a34a" fmt={v => v.toFixed(1)} />
          <SliderControl label="Potere fornitori" symbol="F" value={fornitori} min={0} max={10} step={0.5} onChange={setFornitori} color="#0ea5e9" fmt={v => v.toFixed(1)} />
          <SliderControl label="Potere clienti" symbol="C" value={clienti} min={0} max={10} step={0.5} onChange={setClienti} color="#a855f7" fmt={v => v.toFixed(1)} />
          <div className="result-box">
            <div className="result-row"><strong>Intensità totale</strong> <span>{totale.toFixed(1)}/50</span></div>
            <div className="result-row"><strong>Media forze</strong> <span>{mediaForze.toFixed(2)}</span></div>
            <div className="result-row"><strong>Attrattività</strong> <span style={{ color: attrColor }}>{attrattivita}</span></div>
          </div>
          <div className="insight-mini">Più l'area del pentagono è grande, più il settore è "difficile". L'attrattività è alta quando le forze sono deboli (area piccola).</div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAPH 2 — BREAK EVEN POINT: ricavi vs costi totali
// ══════════════════════════════════════════════════════════════
function BreakEvenGraph() {
  const [p, setP] = useState(25);     // prezzo unitario
  const [CF, setCF] = useState(4000); // costi fissi
  const [cv, setCv] = useState(12);   // costo variabile unitario

  const xMin = 0, xMax = 600;
  const yMin = 0, yMax = 16000;

  const Qstar = p > cv ? CF / (p - cv) : null;

  // Revenue line: R = p*Q
  const ptsR = [];
  for (let q = xMin; q <= xMax; q += 10) {
    ptsR.push([toX(q, xMin, xMax), toY(p * q, yMin, yMax)]);
  }
  const pathR = 'M ' + ptsR.filter(pt => pt[1] >= PT).map(pt => pt.join(',')).join(' L ');

  // Total cost line: CT = CF + cv*Q
  const ptsCT = [];
  for (let q = xMin; q <= xMax; q += 10) {
    ptsCT.push([toX(q, xMin, xMax), toY(CF + cv * q, yMin, yMax)]);
  }
  const pathCT = 'M ' + ptsCT.filter(pt => pt[1] >= PT).map(pt => pt.join(',')).join(' L ');

  // Fixed cost horizontal line
  const fixedY = toY(CF, yMin, yMax);

  return (
    <div className="graph-block">
      <h4 className="graph-title">Break Even Point — R = p·Q vs CT = CF + cv·Q ; Q* = CF / (p − cv)</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          <Axes xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax} xLabel="Q (unità)" yLabel="€" xFmt={v => v.toFixed(0)} yFmt={v => v >= 1000 ? (v / 1000).toFixed(0) + 'k' : v.toFixed(0)} />
          {/* Fixed cost reference */}
          <line x1={PL} y1={fixedY} x2={PL + cW} y2={fixedY} stroke="#94a3b8" strokeDasharray="2,3" strokeWidth={1} />
          <text x={PL + 6} y={fixedY - 4} fontSize={10} fill="#64748b">CF</text>
          {/* Total cost line */}
          <path d={pathCT} fill="none" stroke="#dc2626" strokeWidth={2.2} />
          <text x={PL + cW - 60} y={toY(CF + cv * (xMax - 60), yMin, yMax) - 6} fontSize={10} fill="#dc2626">CT</text>
          {/* Revenue line */}
          <path d={pathR} fill="none" stroke="#0ea5e9" strokeWidth={2.2} />
          <text x={PL + cW - 60} y={toY(p * (xMax - 60), yMin, yMax) + 14} fontSize={10} fill="#0ea5e9">R</text>
          {/* Break-even point */}
          {Qstar !== null && Qstar >= xMin && Qstar <= xMax && p * Qstar <= yMax && (
            <g>
              <line x1={toX(Qstar, xMin, xMax)} y1={PT + cH} x2={toX(Qstar, xMin, xMax)} y2={toY(p * Qstar, yMin, yMax)} stroke="#16a34a" strokeDasharray="3,3" strokeWidth={1.2} />
              <line x1={PL} y1={toY(p * Qstar, yMin, yMax)} x2={toX(Qstar, xMin, xMax)} y2={toY(p * Qstar, yMin, yMax)} stroke="#16a34a" strokeDasharray="3,3" strokeWidth={1.2} />
              <circle cx={toX(Qstar, xMin, xMax)} cy={toY(p * Qstar, yMin, yMax)} r={6} fill="#16a34a" stroke="#fff" strokeWidth={2} />
              <text x={toX(Qstar, xMin, xMax) + 8} y={toY(p * Qstar, yMin, yMax) - 8} fontSize={10} fill="#16a34a" fontWeight={600}>Q*</text>
            </g>
          )}
        </svg>
        <div className="graph-controls">
          <SliderControl label="Prezzo unitario" symbol="p" value={p} min={10} max={50} step={1} onChange={setP} color="#0ea5e9" fmt={v => '€' + v.toFixed(0)} />
          <SliderControl label="Costi fissi" symbol="CF" value={CF} min={1000} max={10000} step={100} onChange={setCF} color="#94a3b8" fmt={v => '€' + (v / 1000).toFixed(1) + 'k'} />
          <SliderControl label="Costo variabile" symbol="cv" value={cv} min={5} max={30} step={0.5} onChange={setCv} color="#dc2626" fmt={v => '€' + v.toFixed(1)} />
          <div className="result-box">
            <div className="result-row"><strong>Margine unitario</strong> <span>€{(p - cv).toFixed(1)}</span></div>
            <div className="result-row"><strong>Q* (pareggio)</strong> <span style={{ color: '#16a34a' }}>{Qstar !== null ? Qstar.toFixed(0) + ' u.' : 'p ≤ cv'}</span></div>
            <div className="result-row"><strong>Ricavi al BEP</strong> <span>{Qstar !== null ? '€' + (p * Qstar).toFixed(0) : '—'}</span></div>
          </div>
          <div className="insight-mini">Settori a forte incidenza di costi fissi hanno Q* alto, alimentando rivalità sui prezzi per saturare la capacità (Forza 1 di Porter).</div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAPH 3 — CURVA DI ESPERIENZA: C(Q) = C0 · Q^(-b)
// ══════════════════════════════════════════════════════════════
function ExperienceCurveGraph() {
  const [b, setB] = useState(0.32);
  const [C0, setC0] = useState(120);

  const xMin = 1, xMax = 1000;
  const yMin = 0, yMax = 250;

  // C(Q) = C0 * Q^(-b)
  const cost = (q) => C0 * Math.pow(q, -b);

  const pts = [];
  for (let q = xMin; q <= xMax; q += 5) {
    pts.push([toX(q, xMin, xMax), toY(cost(q), yMin, yMax)]);
  }
  const path = 'M ' + pts.filter(pt => pt[1] >= PT && pt[1] <= PT + cH).map(pt => pt.join(',')).join(' L ');

  // Tasso di apprendimento: ad ogni raddoppio del volume, costi scendono di (1 - 2^(-b))
  const tassoApprendimento = (1 - Math.pow(2, -b)) * 100;
  const c100 = cost(100);
  const c500 = cost(500);
  const riduzione = ((c100 - c500) / c100) * 100;

  return (
    <div className="graph-block">
      <h4 className="graph-title">Curva di Esperienza — C(Q) = C₀ · Q^(−b) ; ad ogni raddoppio dei volumi i costi scendono</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          <Axes xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax} xLabel="Q cumulato" yLabel="€/unità" nX={5} xFmt={v => v.toFixed(0)} yFmt={v => '€' + v.toFixed(0)} />
          <path d={path} fill="none" stroke="#16a34a" strokeWidth={2.4} />
          {/* Reference points: Q=100 and Q=500 */}
          {cost(100) <= yMax && (
            <g>
              <circle cx={toX(100, xMin, xMax)} cy={toY(c100, yMin, yMax)} r={4} fill="#0ea5e9" stroke="#fff" strokeWidth={1.5} />
              <text x={toX(100, xMin, xMax) + 6} y={toY(c100, yMin, yMax) - 6} fontSize={10} fill="#0ea5e9">Q=100</text>
            </g>
          )}
          {cost(500) <= yMax && (
            <g>
              <circle cx={toX(500, xMin, xMax)} cy={toY(c500, yMin, yMax)} r={4} fill="#a855f7" stroke="#fff" strokeWidth={1.5} />
              <text x={toX(500, xMin, xMax) + 6} y={toY(c500, yMin, yMax) - 6} fontSize={10} fill="#a855f7">Q=500</text>
            </g>
          )}
          {/* C0 reference */}
          <circle cx={toX(1, xMin, xMax)} cy={toY(C0, yMin, yMax)} r={4} fill="#f59e0b" stroke="#fff" strokeWidth={1.5} />
          <text x={toX(1, xMin, xMax) + 6} y={toY(C0, yMin, yMax) + 14} fontSize={10} fill="#f59e0b">C₀</text>
        </svg>
        <div className="graph-controls">
          <SliderControl label="Coeff. apprendimento" symbol="b" value={b} min={0.1} max={0.5} step={0.01} onChange={setB} color="#16a34a" fmt={v => v.toFixed(2)} />
          <SliderControl label="Costo iniziale" symbol="C₀" value={C0} min={50} max={200} step={5} onChange={setC0} color="#f59e0b" fmt={v => '€' + v.toFixed(0)} />
          <div className="result-box">
            <div className="result-row"><strong>Costo a Q=100</strong> <span>€{c100.toFixed(1)}</span></div>
            <div className="result-row"><strong>Costo a Q=500</strong> <span>€{c500.toFixed(1)}</span></div>
            <div className="result-row"><strong>Riduzione 100→500</strong> <span style={{ color: '#16a34a' }}>{riduzione.toFixed(1)}%</span></div>
            <div className="result-row"><strong>Tasso ad ogni 2x</strong> <span>{tassoApprendimento.toFixed(1)}%</span></div>
          </div>
          <div className="insight-mini">Il classico "82% learning rate" del settore aerospaziale corrisponde a b ≈ 0,29: ad ogni raddoppio del cumulato, i costi scendono del 18%.</div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAPH 4 — RAGGRUPPAMENTI STRATEGICI AUTOMOTIVE (scatter)
// ══════════════════════════════════════════════════════════════
function StrategicGroupsGraph() {
  // 5 cluster: Global Broad-Line, Regional Broad-Line, Global Narrow,
  // Luxury, Performance. Asse X = ampiezza gamma (1-10), Asse Y = prezzo medio (10-200)
  const groups = [
    {
      id: 'global',
      label: 'Global Broad-Line',
      color: '#0ea5e9',
      brands: [
        { name: 'Toyota', x: 9.5, y: 32 },
        { name: 'VW', x: 9.0, y: 38 },
        { name: 'GM', x: 9.2, y: 35 },
        { name: 'Ford', x: 8.8, y: 33 },
        { name: 'Honda', x: 8.5, y: 34 },
      ],
    },
    {
      id: 'regional',
      label: 'Regional Broad-Line',
      color: '#16a34a',
      brands: [
        { name: 'Fiat', x: 7.5, y: 24 },
        { name: 'Renault', x: 7.8, y: 26 },
        { name: 'PSA', x: 7.6, y: 27 },
        { name: 'Kia', x: 7.0, y: 25 },
      ],
    },
    {
      id: 'narrow',
      label: 'Global Narrow',
      color: '#f59e0b',
      brands: [
        { name: 'Subaru', x: 4.5, y: 35 },
        { name: 'Suzuki', x: 4.0, y: 22 },
        { name: 'Hyundai', x: 5.5, y: 28 },
      ],
    },
    {
      id: 'luxury',
      label: 'Luxury',
      color: '#a855f7',
      brands: [
        { name: 'BMW', x: 5.5, y: 90 },
        { name: 'Mercedes', x: 5.8, y: 95 },
        { name: 'Aston M.', x: 2.5, y: 170 },
        { name: 'Rolls-R.', x: 2.0, y: 190 },
      ],
    },
    {
      id: 'performance',
      label: 'Performance',
      color: '#dc2626',
      brands: [
        { name: 'Ferrari', x: 2.5, y: 175 },
        { name: 'Porsche', x: 4.0, y: 110 },
        { name: 'Lotus', x: 2.0, y: 95 },
        { name: 'Maserati', x: 3.0, y: 130 },
      ],
    },
  ];

  const [selectedId, setSelectedId] = useState('luxury');
  // slider che mappa indice cluster (0-4)
  const [groupIdx, setGroupIdx] = useState(3);

  // Sync group index → selected id
  useEffect(() => {
    setSelectedId(groups[Math.round(groupIdx)].id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupIdx]);

  const xMin = 0, xMax = 10;
  const yMin = 0, yMax = 200;

  // Compute centroid + bounding for selected group (for highlight ellipse)
  const sel = groups.find(g => g.id === selectedId);
  const cxSel = sel.brands.reduce((s, b) => s + b.x, 0) / sel.brands.length;
  const cySel = sel.brands.reduce((s, b) => s + b.y, 0) / sel.brands.length;
  const rxBrand = Math.max(...sel.brands.map(b => Math.abs(b.x - cxSel))) + 1.2;
  const ryBrand = Math.max(...sel.brands.map(b => Math.abs(b.y - cySel))) + 18;

  return (
    <div className="graph-block">
      <h4 className="graph-title">Raggruppamenti Strategici Automotive — Ampiezza gamma vs Prezzo medio (k€)</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          <Axes xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax} xLabel="ampiezza gamma" yLabel="prezzo (k€)" xFmt={v => v.toFixed(0)} yFmt={v => v.toFixed(0)} />
          {/* Highlight ellipse around selected group */}
          <ellipse
            cx={toX(cxSel, xMin, xMax)}
            cy={toY(cySel, yMin, yMax)}
            rx={(rxBrand / (xMax - xMin)) * cW}
            ry={(ryBrand / (yMax - yMin)) * cH}
            fill={sel.color}
            fillOpacity={0.12}
            stroke={sel.color}
            strokeWidth={1.6}
            strokeDasharray="5,3"
          />
          {/* All brands */}
          {groups.map(g => g.brands.map((b, i) => {
            const isSel = g.id === selectedId;
            return (
              <g key={`${g.id}-${i}`}>
                <circle
                  cx={toX(b.x, xMin, xMax)}
                  cy={toY(b.y, yMin, yMax)}
                  r={isSel ? 6 : 4}
                  fill={g.color}
                  fillOpacity={isSel ? 1 : 0.55}
                  stroke="#fff"
                  strokeWidth={1.4}
                />
                {isSel && (
                  <text
                    x={toX(b.x, xMin, xMax) + 7}
                    y={toY(b.y, yMin, yMax) + 3}
                    fontSize={9}
                    fill={g.color}
                    fontWeight={600}
                  >{b.name}</text>
                )}
              </g>
            );
          }))}
          {/* Group label */}
          <text
            x={toX(cxSel, xMin, xMax)}
            y={toY(cySel, yMin, yMax) - ryBrand * cH / (yMax - yMin) - 6}
            textAnchor="middle"
            fontSize={11}
            fontWeight={700}
            fill={sel.color}
          >{sel.label}</text>
        </svg>
        <div className="graph-controls">
          <SliderControl
            label="Raggruppamento evidenziato"
            symbol="G"
            value={groupIdx}
            min={0}
            max={4}
            step={1}
            onChange={setGroupIdx}
            color={sel.color}
            fmt={v => groups[Math.round(v)].label}
          />
          <div className="result-box">
            <div className="result-row"><strong>Marchi nel gruppo</strong> <span>{sel.brands.length}</span></div>
            <div className="result-row"><strong>Prezzo medio</strong> <span>€{cySel.toFixed(0)}k</span></div>
            <div className="result-row"><strong>Gamma media</strong> <span>{cxSel.toFixed(1)}/10</span></div>
          </div>
          <div className="insight-mini">Le barriere alla mobilità impediscono a un produttore low-cost (Dacia) di entrare nel raggruppamento Luxury o Performance: heritage, R&D, percezione del brand sono asset accumulati nel tempo.</div>
          <div style={{ marginTop: '0.6rem', display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {groups.map((g, i) => (
              <span key={g.id} style={{ fontSize: '0.72rem', padding: '0.2rem 0.5rem', borderRadius: '999px', background: g.color + '22', color: g.color, fontWeight: 600, opacity: g.id === selectedId ? 1 : 0.6 }}>{g.label}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const markdownContent = `
# Capitolo 2: L'Ambiente Competitivo e l'Analisi Strutturale dei Settori

Nel precedente modulo abbiamo introdotto le forze macro-ambientali e le logiche che sorreggono il *Tripode Strategico* (Industry-Based View, Institutional Conditions, Resource-Based View). In questa seconda settimana, l'analisi diviene strettamente focale e penetrativa: l'oggetto d'indagine si sposta dall'infinito orizzonte esterno ai più concreti areali competitivi in cui l'impresa sperimenta il quotidiano logorio della concorrenza. Studieremo le matrici classiche dell'Organizzazione Industriale fino all'evoluzione più matura prodotta dai teorici moderni come Michael Porter.

## 0. Inquadramento Preliminare: l'Ambiente d'Impresa e il Tripode Strategico

### 0.1 Lo Strategic Planning Process

Prima di addentrarsi nel modello SCP e nelle 5 Forze, occorre ricordare la collocazione logica dell'analisi settoriale all'interno del **processo di pianificazione strategica** dell'impresa. Tale processo, secondo la concettualizzazione manageriale tradizionale, si articola in una sequenza di stadi consequenziali che si avvitano ciclicamente l'uno sull'altro:

1. **Idea** — la scintilla imprenditoriale primigenia.
2. **Mission, Vision, Value Proposition** — la formalizzazione del proposito, dell'orizzonte e della promessa di valore al cliente.
3. **External Analysis** — l'analisi dell'ambiente esogeno (è qui che si collocano il modello SCP, le 5 Forze, i Raggruppamenti Strategici).
4. **Internal Analysis** — l'analisi delle risorse, competenze e capabilities interne.
5. **SWOT Analysis** — sintesi tra i risultati dell'analisi esterna (Opportunities, Threats) e di quella interna (Strengths, Weaknesses).
6. **Strategic Choices** — selezione delle alternative strategiche praticabili.
7. **Where & How** — definizione della *Corporate Strategy* (dove competere) e della *Business Strategy* (come competere).
8. **Value Creation** — generazione e misurazione del valore prodotto.

L'analisi settoriale di questa settimana copre dunque lo stadio (3), External Analysis, e ne costituisce il cuore metodologico.

### 0.2 La definizione di ambiente

L'ambiente entro cui si muove l'impresa va concepito come la combinazione sinergica di due elementi:
- **Attori** (consumatori, concorrenti, fornitori, regolatori, stakeholders, ecc.).
- **Condizioni** (variabili economiche, tecnologiche, normative, sociali, culturali, ecologiche).

> **Definizione formale:** *L'ambiente di un'impresa è composto da tutte quelle variabili esterne ed interne che possono influenzare le decisioni aziendali ed il raggiungimento degli obiettivi prefissati.*

### 0.3 Il Tripode Strategico

La **performance** d'impresa, nella visione contemporanea, scaturisce da una **strategy** che a sua volta nasce dall'intersezione di tre prospettive analitiche complementari, formalmente denominate *Tripode Strategico*:

| Prospettiva | Tipologia analisi | Tipo di fattori | Focus |
|---|---|---|---|
| **Industry-Based View** | Analisi esterna | Fattori esogeni | Struttura del settore (SCP, 5 Forze, Raggruppamenti) |
| **Institutional Conditions** | Analisi esterna/contestuale | Fattori esogeni | Cornice istituzionale, normativa, politiche pubbliche |
| **Resources (and Competences) Based View** | Analisi interna | Fattori endogeni | Risorse, competenze, capabilities distintive dell'impresa |

Le tre prospettive convergono nella **Strategy** che si traduce poi in **Performance**. La Settimana 2 esplora in profondità la prima gamba del tripode: l'**Industry-Based View**.

---

## 1. Dalle Radici dell'Economia alla Industrial Organization

### 1.1 La genesi dello studio dei mercati
Per comprendere le strategie d'impresa contemporanee occorre compiere una doverosa digressione alle radici del pensiero economico del Novecento. È impossibile concepire una qualsiasi analisi settoriale senza tributare il giusto merito ai pionieri dell'**Industrial Organization** (spesso abbreviata in I.O. o Organizzazione Industriale). Come definito formalmente dall'economista statunitense J.S. Bain nel 1959, l'Organizzazione Industriale è quel *"ramo dell'economia che si preoccupa di studiare in maniera profonda ed intellettualmente rigorosa il comportamento delle singole firms (aziende), analizzando visceralmente l'architettura intrinseca e le strutture dei mercati nei quali queste ultime operano, nonché l'interazione costante e dialettica tra attori e struttura"*.
L'I.O. sgorga storicamente nell'ecosistema del purissimo capitalismo nordamericano della prima metà del Ventesimo Secolo: un'economia dominata dalle grandissime corporazioni private dove l'asse di rotazione dell'economia era saldamente vincolato al dualismo tra impresa (offerta) e consumatore (domanda).

### 1.2 Oltre la Concorrenza Perfetta
Fino alla predetta elaborazione accademica, i teorici dell'economia classica e neoclassica ritenevano la *Concorrenza Perfetta* (e la sua opposta, diametrale e sinistra aberrazione, il *Monopolio Assoluto*) come gli unici schemi davvero degni di formulazione pre-analitica. L'I.O. distrugge queste convinzioni asettiche introducendo massicce dosi di realismo. Abbandona le idilliache e inesistenti nozioni della trasparenza totale di mercato, inglobando dogmi comportamentali più terreni come:
- La *Razionalità Limitata* degli attori, teorizzata in concomitanza da Herbert Simon.
- Il peso gravoso dei *Costi di Transazione*, che frenano gli scambi liberi (secondo Coase e Williamson).
- Le letali *Asimmetrie Informative* (secondo George Akerlof), che causano il fallimento fisiologico del mercato stravolgendone le logiche.
- I pesantissimi *Effetti Istituzionali* che governi e legislatori perpetrano sui meccanismi di accumulazione di valore delle imprese assoggettate.

#### Le quattro forme di mercato della tradizione economica

L'economics offre già un primo quadro di lettura delle strutture di mercato lungo un continuum che va dalla massima frammentazione al massimo accentramento di potere:

| Forma di mercato | N° venditori | Differenziazione | Barriere | Esempio |
|---|---|---|---|---|
| **Concorrenza Perfetta** | Moltissimi | Nulla (prodotto omogeneo) | Assenti | Mercati agricoli idealizzati |
| **Concorrenza Monopolistica** | Molti | Forte (per brand/qualità) | Basse | Ristorazione, abbigliamento |
| **Oligopolio** | Pochi | Variabile | Elevate | Telecomunicazioni, automotive |
| **Monopolio** | Uno solo | Irrilevante | Insormontabili | Utilities pubbliche storiche |

L'I.O., e poi Porter, partendo dal riconoscere che la realtà industriale si addensa quasi sempre nelle forme intermedie (concorrenza monopolistica e soprattutto oligopolio), si concentrerà sull'analisi di tali contesti più realistici.

## 2. Il Paradigma Struttura-Condotta-Performance (SCP)

Il monumento teorico generato da tale scuola di pensiero americana prese un acronimo famosissimo al mondo: **Il Paradigma S.C.P.** (Struttura - Condotta - Performance). 
La fondamentale domanda da cui questo pilastro partiva era spiazzante: *Che cosa determina realmente la performance economica di un'impresa? E perché imprese dello stesso sistema accusano tassi vitali ed estrattivi di reddito tanto differenti?*
Il modello S.C.P. stabiliva formalmente e rigorosamente un rapporto sistematico e consequenziale tra gli scaglioni costituenti di un determinato ambito geografico di business. 

### 2.1 I Blocchi del Modello Classico (Versione Forte)
La prima versione (oggi detta "forte" o "unidirezionale") postulava una determinazione top-down senza scampo, riassumibile in base:
1. **Le Condizioni di Base:** Le determinanti fisse primordiali di quel tale mercato: la domanda (quanto cresce, quanto è elastica o quanto è stagionale) e la produzione tecnica (le materie prime richieste a monte, lo stadio di sviluppo tecnologico, e le economie di apprendimento necessarie in dotazione).
2. **La Struttura del Settore (Structure):** Plasmatasi in obbedienza alle citate "condizioni", emergono conformazioni strutturali rigidissime come il *Grado di Concentrazione* del settore (calcolabile tramite metodologie matematiche severe come l'Indice HHI di Herfindahl-Hirschman, che evidenzia i monopoli latenti elevando al quadrato le quote aziendali regnanti), o il livello di insormontabilità delle *Barriere all'Entrata*.
3. **La Condotta dell'Impresa (Conduct):** Secondo tale logica impari, il management, imprigionato nella ferrea culla della *Struttura*, altro non poteva architettare se non comportamenti coercizzati di adattamento per sopportare i vincoli esterni subiti, quali l'applicazione passiva dei listini dei Prezzi limitati, la politica timorata delle promozioni aziendali subalterne o il tacito patteggiamento per la collusione oligarchica con gli stessi arcinemici di mercato.
4. **Le Performance Aziendali Finali (Performance):** Costrette a manifestarsi unicamente nel riverbero delle sopraelencate asimmetriche costrizioni.

#### Tassonomia approfondita degli elementi SCP

Per cogliere la sottigliezza analitica del modello, è utile esplicitare il dettaglio dei contenuti di ciascuno scaglione, così come canonicamente formalizzati nella tradizione di Bain, Mason e Scherer.

**Condizioni di Base — Dettaglio**

| Lato Domanda | Lato Produzione |
|---|---|
| Elasticità | Tecnologia |
| Sostituibilità | Materie prime |
| Stagionalità | Grado di sindacalizzazione |
| Tasso di crescita | Bene durevole/non durevole |
| Localizzazione | Localizzazione |
| Entità degli ordini | Economie di scala |
| Modalità d'acquisto | Economie di scopo |

**Struttura del Settore — Caratteristiche organizzative**

La struttura di mercato è l'insieme delle *caratteristiche organizzative del mercato che impattano sulla natura della competizione e le politiche di prezzo*. Tipicamente comprende:
- Numero di compratori e venditori
- **Concentrazione**: numero e dimensione dei competitor
- **Differenziazione di prodotto**
- **Altezza delle barriere all'ingresso**
- Integrazione verticale
- Diversificazione

**Condotta dell'Impresa — Schemi di comportamento**

La condotta indica gli *schemi di comportamento seguiti dalle imprese per adattarsi al mercato*. Le sue caratteristiche tipiche sono:
- Sistemi di calcolo del prezzo e dell'output
- Politiche di prodotto
- Politiche promozionali (pubblicità)
- Coordinamento ed interazione con i competitor
- Ricerca e sviluppo
- Tattiche legali
- Investimenti in unità produttive
- Scelta dei prodotti
- Collusione, fusioni e accordi

**Performance — I risultati finali**

Con Performance si intendono i *risultati finali ottenuti dall'impresa sulla base della sua condotta*. Le caratteristiche tipiche sono:
- **Livello dei prezzi e della produzione**
- **Efficienza della produzione** (produttiva e allocativa)
- **Livello dei costi**
- **Caratteristiche finali dei prodotti** (qualità)
- Equità
- Progresso tecnologico
- Profitti

**Limiti del Modello SCP: L'Evoluzione nella Versione Debole (Bidirezionale).**
Agli studiosi del management maturo tale visione ferrea andava eccessivamente stretta. Nessun vero manager d'industria avrebbe infatti tollerato d'esser etichettato a rango di burattino guidato dalla struttura. Sopraggiunge così ai vertici accademici la nozione rivisitata della "versione debole": l'elaborazione introduce le *relazioni bidirezionali* e l'ingresso in campo di *politiche pubbliche* (Public Policy) modificatrici. In questa complessa versione il ciclo si inverte e non di rado una "Condotta" particolarmente rapace o innovativa e dirompente dell'azienda arriva a generare una "Performance" talmente mostruosa da frantumare essa stessa la "Struttura" di partenza del settore intero, tramutando per sempre le Condizioni di Base (basti immaginare, in logica contemporanea, i colossi delle multinazionali che sovvertono il trasporto).

#### Le Politiche Pubbliche nella Versione Debole

L'ingresso in campo della **Public Policy** è la novità qualificante della versione debole. Le politiche pubbliche agiscono come *attore esogeno modificatore* su tutti gli scaglioni del modello, intervenendo tipicamente su:
- Regolamentazione di settore
- Normativa antitrust
- Imposizione/rimozione di barriere all'entrata
- Imposte e sussidi
- Incentivi all'investimento
- Incentivi all'occupazione
- Politiche macroeconomiche

In tale schema, la freccia non scende più solo dall'alto verso il basso, ma circola: le Condizioni di Base influenzano la Struttura, la Struttura il Comportamento, il Comportamento la Performance, ma simultaneamente la Performance retroagisce sulla Struttura, e la Public Policy interviene su tutti i livelli.

#### Considerazioni di metodo: i limiti riconosciuti dell'IO

Anche nella sua versione più matura, l'approccio dell'IO porta con sé alcune assunzioni discutibili che la letteratura strategica successiva (in particolare la Resource-Based View) ha messo in discussione:

- **L'unità di analisi è il settore**, non l'impresa: ciò induce a sottovalutare l'**eterogeneità intrasettoriale** (tutte le imprese in un mercato avranno lo stesso margine?).
- **L'impresa è vista come una black box**: l'IO classica si disinteressa dei meccanismi interni di generazione del valore.
- **L'impresa sceglie il settore** sulla base di caratteristiche strutturali, ma non viene riconosciuta la possibilità che lo plasmi attivamente.

Sono proprio questi limiti a spalancare la porta all'evoluzione introdotta da Porter e, più tardi, alla RBV.

## 3. Il Modello delle 5 Forze di Porter

### 3.1 Evoluzione dal Paradigma SCP: Porter vs. IO Classica

Nella prima metà degli anni '80, il professore di Harvard **Michael E. Porter** sviluppa un modello che, pur inserendosi nella tradizione dell'IO e del Paradigma SCP, ne costituisce un'importante evoluzione. Le differenze chiave rispetto all'IO classica sono tre:

1. **La strategia può modificare la struttura del settore.** Mentre nell'SCP la struttura vincola l'impresa, per Porter le aziende possono agire attivamente per modificare le forze competitive del settore in cui operano.
2. **Le imprese possono sfruttare le discontinuità competitive.** I cambiamenti strutturali nel settore sono opportunità, non solo minacce.
3. **La performance dipende anche dalle scelte strategiche dell'impresa.** Non è determinata solo dalla struttura del settore, ma anche dalla strategia adottata (le cosiddette *strategie competitive generiche*).

> **Concetto chiave:** L'analisi delle cinque forze di Porter permette di esprimere un giudizio sull'**attrattività del settore**, ovvero sul suo potenziale di generare profitti nel lungo periodo.

Porter afferma che la competizione in un settore va ben oltre la rivalità diretta tra i concorrenti presenti. La redditività di un intero settore dipende dall'intensità complessiva di **cinque forze strutturali**. Più queste forze sono forti e aggressive, più il settore è "difficile" e meno profittevole in media.

#### Considerazioni preliminari sul modello di Porter

Prima di analizzare singolarmente le cinque forze, è opportuno fissare alcuni capisaldi epistemologici del modello porteriano:

- **Competizione estesa:** la competizione in un settore va ben oltre la competizione tra player diretti. Comprende anche pressioni provenienti da fornitori, clienti, sostituti e potenziali entranti.
- **Il settore evolve nel tempo:** l'analisi delle cinque forze va condotta dinamicamente, non come fotografia statica.
- **Ripetitività e conflittualità delle relazioni:** le interazioni tra attori del settore sono ripetute nel tempo e tendenzialmente conflittuali (giochi non cooperativi).
- **La congiunzione di queste forze determina il profitto potenziale del settore.**
- **Settori diversi hanno diversi potenziali** di redditività strutturale.
- **Le strategie competitive generiche** (cost leadership, differenziazione, focalizzazione) consentono alle imprese di gestire le forze e perseguire posizioni di vulnerabilità inferiore all'interno del settore.

Strumenti dell'analisi strategica porteriana sono dunque due:
1. **Analisi del settore** (le 5 Forze)
2. **Raggruppamenti strategici** (mappa interna al settore)

---

### 3.2 Forza 1 — Intensità della Rivalità tra Concorrenti

La prima forza riguarda il livello di competizione diretta tra le imprese già presenti nel settore (gli *incumbent*). Più la rivalità è intensa, più le imprese si fanno la guerra sui prezzi, riducendo i margini di tutti.

**Le principali determinanti strutturali della rivalità sono:**

**1. Concentrazione del mercato**
La concentrazione si riferisce al numero e alla dimensione delle imprese che competono in un settore. Si misurano due estremi:
- **Mercato concentrato:** poche imprese con quote di mercato rilevanti. La rivalità tende ad essere più controllata.
- **Mercato frammentato:** molte imprese con quote simili. La rivalità sui prezzi è molto intensa.

Per misurare la concentrazione si usa l'**Indice HHI (Herfindahl-Hirschman Index)**: si calcola sommando il quadrato delle quote di mercato di ogni impresa. Un HHI alto indica alta concentrazione (quasi monopolio), un HHI basso indica alta frammentazione.

**2. Differenziazione del prodotto**
La possibilità di differenziare i propri prodotti (es. tramite brand, qualità, design, servizi aggiuntivi) riduce la competizione basata solo sul prezzo. Quando i prodotti sono percepiti come simili dai clienti, l'unica leva competitiva rimane il prezzo, innescando guerre commerciali distruttive. La differenziazione aiuta anche a costruire un'identità di marca (*Brand Image*).

> Attenzione: l'opportunità di differenziare *non sempre* porta a maggiore profittabilità. Dipende dai costi che la differenziazione comporta.

**3. Capacità in eccesso e Barriere all'Uscita**
Le **barriere all'uscita** sono quegli ostacoli che impediscono a un'impresa di abbandonare un settore anche quando non è più conveniente restare. Se un'impresa non riesce ad uscire, continua a produrre in perdita, gonfiando l'offerta e abbassando i prezzi per tutti.

Le principali barriere all'uscita dipendono da:
- **Sinergie** tra le attività dell'impresa (uscire da un business implica perdere vantaggi in altri)
- **Risorse specializzate** difficili da riconvertire ad altri usi
- **Attori istituzionali** (es. regolatori o enti pubblici che impediscono la chiusura)
- **Attori interni** (es. sindacati, dipendenti con contratti a lungo termine)

> Le imprese in mercati in crescita hanno profitti potenziali molto maggiori rispetto a quelle in mercati maturi o in declino, dove le barriere all'uscita diventano un peso enorme.

**4. Struttura dei costi e Break Even Point**

La rivalità è amplificata anche dalla struttura dei costi: settori a forte incidenza di costi fissi tendono a sviluppare guerre di prezzo per saturare la capacità produttiva. Il **punto di pareggio (Break Even Point)** è quel livello di output in corrispondenza del quale i ricavi totali eguagliano i costi totali (somma di costi fissi e variabili). Graficamente, l'incrocio tra la retta dei *Revenue* (crescente con le unità vendute) e quella dei *Total Cost* identifica il volume minimo di vendita per non incorrere in perdite. Più alto è il punto di pareggio, più aggressiva sarà la condotta dell'impresa per saturare i volumi.

**5. Le Economie di Produzione**

Le economie produttive di cui beneficiano gli incumbent — che riducono i costi unitari e quindi alimentano la rivalità sui prezzi — si declinano in tre tipologie distinte:

| Tipologia | Logica sottostante | Esempio |
|---|---|---|
| **Economie di Scala** | I costi unitari diminuiscono all'aumentare del volume di produzione di un singolo bene | Stabilimenti automotive ad alta cadenza |
| **Economie di Scopo** | I costi unitari diminuiscono producendo congiuntamente più prodotti che condividono risorse | Multinazionali del food con stabilimenti polivalenti |
| **Economie di Esperienza (apprendimento)** | I costi unitari diminuiscono con il cumularsi della produzione totale storica (curva di apprendimento) | Settore aerospaziale, semiconduttori |

---

### 3.3 Forza 2 — Minaccia di Nuovi Entranti

La seconda forza riguarda la pressione esercitata da concorrenti *potenziali* che potrebbero decidere di entrare nel settore, attratti dai profitti esistenti. Più è facile entrare, più gli incumbent devono "guardarsi le spalle" e più i profitti tendono a scendere.

La minaccia di nuovi entranti dipende dalle **barriere all'ingresso**, che possono:
- Influire sulla **convenienza economica e strategica** di entrare nel settore
- **Impedire fisicamente** l'ingresso di nuovi concorrenti
- **Indebolire la posizione** di chi è appena entrato

Esistono **tre tipi di barriere all'ingresso:**

#### Barriere Istituzionali (Esogene)
Dipendono da fattori *esterni* all'ambiente competitivo, come leggi, regolamenti o licenze governative. Impediscono in maniera **assoluta** l'ingresso o vincolano a determinate condizioni. Esempi paradigmatici nelle slide:
- **Settore aereo / aeroportuale:** slot di decollo, certificazioni di volo, concessioni aeroportuali.
- **Settore farmaceutico:** il percorso di nascita di un nuovo farmaco è emblematico — screening di 10.000 molecole, test su 100 molecole, autorizzazione finale al commercio per ~10 molecole; le fasi richiedono Ricerca di base (5 anni), Test preclinici, Ricerca clinica (~10 anni), Valutazione delle Autorità Sanitarie (2-3 anni), Farmacovigilanza commerciale (7-8 anni), per un orizzonte di 20-25 anni complessivi e un investimento ripartito tra fasi (deposito brevetto al 27%, uso commerciale al 54%, ecc.). Tale percorso costituisce una barriera istituzionale praticamente invalicabile.
- **Settore energetico/utilities:** concessioni per la trasmissione dell'energia elettrica, autorizzazioni alla rete.

#### Barriere Strutturali (Endogene)
Dipendono dalla struttura stessa del settore e dall'equilibrio tra i player esistenti:
- **Economie di scala, di scopo o di esperienza:** i grandi player producono a costi unitari più bassi, rendendo difficile la sopravvivenza di un entrante piccolo.
- **Elevato fabbisogno finanziario:** alcune industrie richiedono enormi investimenti iniziali in impianti, R&D o infrastrutture.
- **Vantaggi di costo assoluti:** legati all'efficienza o all'accesso privilegiato a fornitori sviluppato dagli incumbent nel tempo.
- **Accesso ai canali di distribuzione:** se i canali distributivi sono già occupati dagli incumbents, un nuovo entrante fatica a raggiungere i clienti.

#### Barriere Strategiche (Endogene Intenzionali)
Derivano da comportamenti che gli incumbent mettono in atto con l'**obiettivo esplicito di scoraggiare l'ingresso di concorrenti**. Le barriere strategiche, per essere efficaci, devono soddisfare due requisiti fondamentali:

1. **Percezione** — il potenziale entrante deve effettivamente accorgersi della barriera; se la barriera passa inosservata, non ha alcun effetto deterrente.
2. **Credibilità** — il potenziale entrante deve credere che l'incumbent sia disposto e capace di mettere in atto la minaccia.

A loro volta, la credibilità di una barriera strategica si articola in due dimensioni:

| Dimensione | Sotto-dimensione | Significato |
|---|---|---|
| **Convenienza** | Economica | Calcolabile tramite la formula della Convenienza Economica (CE), che confronta i flussi di ricavi e costi attesi sul tempo, scontati per un'aliquota di rischio |
|  | Strategica | La mossa deve risultare coerente con la posizione strategica complessiva dell'incumbent |
| **Sostenibilità** | Disponibilità delle fonti necessarie | L'incumbent deve possedere le risorse (finanziarie, produttive, organizzative) per sostenere a lungo la minaccia |
|  | Capacità finanziaria rispetto al potenziale entrante | Deve esserci asimmetria di profondità finanziaria a favore dell'incumbent |

> **Formula della Convenienza Economica (CE):**
> **CE = (R · Tx) − (C · Tx) + (R · Tx−k)**
> dove R sono i ricavi attesi, C i costi attesi, Tx il fattore di attualizzazione e Tx−k l'orizzonte temporale residuo. La logica è: l'entrante valuterà se i profitti attesi attualizzati superano l'investimento iniziale e il rischio competitivo.

**Esempi tipici di barriere strategiche:**
- **Prezzi predatori:** abbassare i prezzi al di sotto del costo per scoraggiare o danneggiare i nuovi entranti.
- **Intensa differenziazione:** moltiplicare le varianti di prodotto per coprire tutti i segmenti e non lasciare spazio (esempio classico: settore dei *cereali per la prima colazione*, dove gli incumbent saturano lo scaffale con decine di varianti).
- **Aumento degli investimenti necessari:** ad esempio, aumentando in modo intenzionale la spesa pubblicitaria (si pensi al panorama luminoso di Times Square), si alza l'asticella di investimento minimo per chiunque voglia competere.

---

### 3.4 Forza 3 — Minaccia di Prodotti Sostituti

I **prodotti sostituti** sono beni o servizi che, pur provenendo da un settore diverso, soddisfano lo stesso bisogno del cliente. Non sono competizione diretta, ma esercitano una pressione indiretta che limita il prezzo massimo che le imprese del settore possono applicare.

La minaccia dei sostituti dipende da due fattori:
1. **La propensità dell'acquirente a sostituire:** quanto è disposto e abituato il cliente a cambiare prodotto?
2. **Il rapporto prezzo-performance del sostituto:** se il sostituto offre prestazioni simili a un prezzo più basso, la minaccia è alta.

*Esempio:* Il treno è un sostituto dell'aereo per tratte brevi. L'app di video chiamata è un sostituto dei viaggi d'affari aerei. Quando la performance del sostituto migliora o il suo prezzo scende, la pressione sul settore originale aumenta.

---

### 3.5 Forze 4 e 5 — Il Potere Contrattuale di Fornitori e Clienti

Sia i **fornitori** (a monte) che i **clienti** (a valle) possono esercitare pressione sulle imprese di un settore, riducendone i margini. Il principio di fondo è lo stesso per entrambi:

> **Il potere contrattuale relativo** è la capacità di una parte di *rinunciare alla transazione* con l'altra, rispetto all'analoga capacità della controparte. *Quanto più una parte è in grado di rinunciare alla transazione, tanto più può imporre le proprie condizioni.*

Questo potere può dipendere da condizioni oggettive, ma anche da **comportamenti strategici** che devono però essere **percepiti come credibili** agli occhi della controparte. Il meccanismo della **percezione** è dunque centrale: il potere negoziale, prima ancora che esistere oggettivamente, deve essere creduto sussistere dalla controparte.

#### Leva Negoziale — I fattori che aumentano il potere del cliente o del fornitore:
- **Concentrazione:** più i clienti/fornitori sono pochi e grandi, più il costo di perderne uno è alto per l'impresa.
- **Informazioni disponibili:** più il cliente/fornitore è informato sui prezzi di mercato, più può negoziare.
- **Possibilità di integrazione verticale:** se un cliente può produrre da solo ciò che acquista, ha un'enorme leva negoziale. Lo stesso vale per il fornitore.
- **Presenza di sostituti:** se il cliente può rivolgersi ad alternative, ha più potere.

#### Sensibilità al Prezzo — Quando il cliente è particolarmente attento al costo:
- **L'importanza dell'item sui costi totali:** più un componente pesa sui costi dell'acquirente, più questi farà pressione sul prezzo.
- **Impatto su qualità e prestazioni:** se cambiare fornitore rischia di peggiorare la qualità del prodotto finale, la sensibilità al prezzo diminuisce.
- **Grado di differenziazione e costi di switching:** se cambiare fornitore è costoso o rischioso, il cliente ha meno potere.
- **Identità di marca:** un brand forte riduce il potere negoziale del cliente.
- **Competizione tra acquirenti/fornitori:** se ci sono molti clienti che vogliono lo stesso prodotto scarso, il fornitore ha più potere.

> **Schema logico da applicare all'esame:** Per identificare chi è cliente e chi è fornitore, ragiona sempre in termini di **input/output**: chi fornisce gli input all'impresa è il fornitore, chi acquista gli output è il cliente.

> **Avvertimento metodologico (NO!):** L'errore più frequente è considerare "fornitore" e "cliente" come ruoli assoluti lungo l'intera filiera. In realtà ciascun anello della catena del valore (Inbound Logistics → Operations → Outbound Logistics → Marketing & Sales → Service) gioca contemporaneamente entrambi i ruoli a seconda della direzione di scambio. Quindi: per ogni transazione, ridefinire chi è fornitore e chi cliente in base al verso input/output di quella specifica relazione.

#### Quadro sintetico delle determinanti strutturali della competizione

Per fissare il modello in un'unica vista, si propone qui di seguito il riepilogo delle **determinanti strutturali** che governano l'intensità di ciascuna delle cinque forze:

| Forza | Principali determinanti |
|---|---|
| **Intensità della competizione** (rivalità incumbent) | Concentrazione, Differenziazione, Capacità in eccesso, Barriere all'uscita, Costi |
| **Minaccia di nuovi entranti** | Barriere strutturali, Barriere istituzionali, Barriere strategiche |
| **Competizione da parte dei sostituti** | Propensità al cambiamento, Prezzo e performance dei prodotti sostituti |
| **Potere dei fornitori** | Sensibilità al prezzo, Potere contrattuale relativo |
| **Potere dei clienti** | Sensibilità al prezzo (importanza del bene per la creazione dell'output, differenziazione del prodotto), Potere contrattuale relativo (dimensione e numero dei clienti, disponibilità delle informazioni, possibilità di integrazione verticale) |

---

### 3.6 La Sesta Forza — I Prodotti Complementari

Alcuni studiosi hanno proposto di aggiungere al modello originale di Porter una **sesta forza**: i **prodotti complementari**.

I beni complementari sono caratterizzati dal fatto che l'utilizzo di un bene dipende dall'utilizzo di un altro. A differenza dei sostituti (correlazione negativa: se usi uno, non usi l'altro), i complementi hanno una **correlazione positiva**: quando aumenta il consumo di uno, aumenta anche quello dell'altro.

- **Esempio di complementari:** Caffè e Zucchero — se consumi più caffè, consumerai anche più zucchero.
- **Esempio di sostituti:** Caffè e Tè — se bevi più caffè, probabilmente bevi meno tè.

**Perché i complementi sono rilevanti?** I fornitori di prodotti complementari creano valore per il settore, ma allo stesso tempo detengono un potere contrattuale. Se il complemento è molto richiesto e controllato da pochi attori, questi possono condizionare la profittabilità dell'intero settore. Al contrario, se il complemento è abbondante e facilmente sostituibile, l'effetto è positivo per tutti.

---

## 4. I Raggruppamenti Strategici

### 4.1 Cos'è un Raggruppamento Strategico?

Il modello delle cinque forze analizza l'intero settore come unità. Ma all'interno di uno stesso settore, non tutte le imprese sono uguali: alcune puntano sul lusso, altre sul prezzo basso, altre ancora si specializzano su una nicchia geografica. I **raggruppamenti strategici** offrono un livello di analisi intermedio tra il settore e la singola impresa.

**Definizione:** Un raggruppamento strategico è un gruppo di imprese che, all'interno dello stesso settore, adottano strategie simili lungo le principali dimensioni strategiche.

Le imprese dello stesso raggruppamento:
- Hanno quote di mercato simili
- Sono influenzate allo stesso modo dagli eventi esterni (cambiamenti di domanda, tecnologia, regolamentazione)
- Reagiscono in modo simile alle mosse dei concorrenti

> **Implicazione chiave:** Le cinque forze competitive non impattano allo stesso modo su tutti i raggruppamenti. Per questo motivo, il **profitto potenziale** può differire significativamente tra raggruppamenti diversi all'interno dello stesso settore.

### 4.2 Come si identifica un Raggruppamento Strategico?

Per costruire una mappa dei raggruppamenti strategici occorre scegliere due o più **variabili strategiche** rilevanti per il settore e posizionare le imprese in un grafico bidimensionale. Le variabili più usate sono:

- Posizionamento di prezzo (alto vs. basso)
- Specializzazione del servizio (ampia vs. stretta)
- Varietà dei consumatori target
- Livello di sviluppo del Brand
- Livello di innovazione
- Ampiezza della gamma di prodotti
- Ampiezza geografica (locale vs. globale)
- Livello di integrazione verticale

Il settore automobilistico è uno degli esempi più citati in letteratura per spiegare i raggruppamenti strategici (la mappa canonica è quella ripresa da **Robert M. Grant** nei suoi manuali di Strategic Management). Se si usano come variabili l'**ampiezza geografica** (da nazionale a globale) sull'asse orizzontale e l'**ampiezza della gamma di prodotto** (da stretta ad ampia) sull'asse verticale, emergono almeno sette raggruppamenti ben distinti.

| Raggruppamento | Geographical Scope | Product Range | Esempi (da Grant) |
|---|---|---|---|
| Global, Broad-Line Producers | Globale | Ampia | GM, Ford, Toyota, Nissan, Honda, VW, DaimlerChrysler |
| Regionally-Focused, Broad-Line Producers | Regionale | Ampia | Fiat, PSA, Renault, Kia |
| Global Suppliers of Narrow Model Range | Globale | Stretta | Subaru, Isuzu, Suzuki, Saab, Hyundai, Daihatsu |
| Nationally Focused, Intermediate-Line Producers | Nazionale | Intermedia | Tofas, Proton, Maruti, First Auto Works (China) |
| Luxury Car Manufacturers | Globale (selettivo) | Stretta-Premium | Aston Martin, BMW, Rolls-Royce (owned by VW) |
| Performance Car Producers | Globale (di nicchia) | Stretta-Sportiva | Porsche, Ferrari (owned by Fiat), Maserati, Lotus |
| Nationally-Focused, Small Specialist Producers | Nazionale | Stretta-Artigianale | Bristol (UK), Classic Roadsters (US), Morgan (UK) |


Al vertice troviamo i **produttori globali a gamma ampia** — GM, Ford, Toyota, Volkswagen, Honda — che coprono praticamente tutti i segmenti di mercato e sono presenti in ogni continente. Subito sotto, ma con una presenza più circoscritta, si trovano i **produttori regionali a gamma ampia** come Fiat, PSA, Renault e Kia, che competono su una varietà simile di modelli ma con una copertura geografica più limitata.

Un terzo gruppo è composto dai **produttori globali a gamma stretta** — Subaru, Suzuki, Saab, Hyundai — che pur essendo presenti a livello mondiale si concentrano su una gamma ristretta di modelli. Parallelamente, esistono i **produttori nazionali a gamma intermedia** come Tofas (Turchia), Proton (Malaysia) e Maruti (India), che operano principalmente nei propri mercati domestici con una gamma limitata.

Poi ci sono i raggruppamenti di vertice assoluto: i **produttori di auto di lusso** — BMW, Rolls-Royce, Aston Martin — con una gamma esclusiva, prezzi altissimi e distribuzione globale selezionata; i **produttori di auto sportive e da performance** come Porsche, Ferrari e Lotus, orientati a una nicchia tecnica di altissimo livello; e infine i **piccoli produttori artigianali nazionali** come Morgan e Bristol nel Regno Unito, che realizzano pochi modelli a mano per una clientela estremamente di nicchia.

Questa mappa mostra chiaramente come imprese nello stesso settore possano avere performance, sfide e strutture di costo profondamente diverse proprio perché appartengono a raggruppamenti strategici differenti.


### 4.4 Le Barriere alla Mobilità

Così come esistono barriere all'entrata che proteggono il settore dai nuovi arrivati esterni, esistono anche **barriere alla mobilità** che rendono difficile per un'impresa spostarsi da un raggruppamento strategico a un altro all'interno dello stesso settore.

**Esempio:** Un produttore low-cost come Dacia non può entrare facilmente nel segmento delle auto di lusso come Ferrari. Non mancano solo i soldi: mancano decenni di reputazione, heritage, know-how tecnico e percezione del brand che i clienti associano al lusso. Queste sono barriere alla mobilità che proteggono il raggruppamento dei produttori premium.

Le barriere alla mobilità, in sintesi, proteggono le imprese sia dai **nuovi entranti esterni** che dai **concorrenti interni al settore** che vorrebbero risalire o scendere di posizionamento.

---

## 🎯 Domande d'Esame — Settimana 2

**Domanda 1:** Spiega il Paradigma SCP (Struttura, Condotta, Performance) nelle sue versioni "forte" e "debole". In che modo il modello di Porter rappresenta un'evoluzione rispetto all'IO classica?

**Risposta-guida:** Nella versione forte, la struttura determina in modo unidirezionale la condotta e quindi la performance. Nella versione debole, le relazioni sono bidirezionali e le politiche pubbliche entrano nel modello. Porter introduce la possibilità che le scelte strategiche delle imprese modifichino a loro volta la struttura del settore, e che la performance dipenda anche da strategie di base differenti tra imprese dello stesso settore.

---

**Domanda 2:** Descrivi le cinque forze di Porter e spiega come si applica il concetto di "barriere all'entrata" e di "barriere alla mobilità" nell'analisi dei raggruppamenti strategici.

**Risposta-guida:** [1] Rivalità tra incumbent: dipende da concentrazione, differenziazione, barriere all'uscita. [2] Nuovi entranti: dipende da barriere istituzionali, strutturali e strategiche. [3] Sostituti: pressione indiretta in base al rapporto prezzo-performance. [4] Potere dei fornitori: dipende da concentrazione, informazioni, integrazione verticale. [5] Potere dei clienti: simmetrico ai fornitori. Le barriere alla mobilità funzionano come barriere all'entrata, ma all'interno del settore: proteggono i raggruppamenti strategici "premium" da concorrenti che vorrebbero spostarsi verso di loro dall'interno del settore stesso.
`;

export default function Week2() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', paddingBottom: '4rem' }}>
      <div className="page-header">
        <div style={{ color: 'var(--accent-cyan)', fontWeight: 600, letterSpacing: '0.1em', fontSize: '0.875rem', marginBottom: '0.5rem' }}>SETTIMANA 02</div>
        <h1 className="page-title gradient-text" style={{ fontSize: '3rem' }}>Ambiente Competitivo e SCP</h1>
      </div>

      <div className="content-section glass-panel markdown-body">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownContent}</ReactMarkdown>
      </div>

      <div className="content-section glass-panel" style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>📊 Visualizzazioni Interattive</h2>
        <FiveForcesRadar />
        <BreakEvenGraph />
        <ExperienceCurveGraph />
        <StrategicGroupsGraph />
      </div>
    </div>
  );
}
