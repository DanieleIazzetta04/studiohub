import { useState } from 'react';
import './macro.css';

// ══════════════════════════════════════════════════════════════
//  SVG ENGINE
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
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={e => onChange(+e.target.value)}
        style={{ accentColor: color }} />
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAFICO 1 — PIL Nominale vs PIL Reale e Deflatore
// ══════════════════════════════════════════════════════════════
function NominalRealGDPGraph() {
  const [gQ, setGQ] = useState(2.0);
  const [gP, setGP] = useState(3.0);

  const years = 20;
  const baseY = 100;

  const nomPath = [];
  const realPath = [];

  for (let t = 0; t <= years; t += 0.5) {
    const real = baseY * Math.pow(1 + gQ / 100, t);
    const priceIdx = Math.pow(1 + gP / 100, t);
    const nom = real * priceIdx;
    realPath.push([t, real]);
    nomPath.push([t, nom]);
  }

  const allY = [...nomPath.map(p => p[1]), ...realPath.map(p => p[1])];
  const yMin = 0;
  const yMax = Math.max(...allY) * 1.08;

  const toSvg = pts => `M${pts.map(([x, y]) => `${toX(x, 0, years).toFixed(1)},${toY(y, yMin, yMax).toFixed(1)}`).join('L')}`;

  const nomFinal = nomPath[nomPath.length - 1][1];
  const realFinal = realPath[realPath.length - 1][1];
  const defFinal = (nomFinal / realFinal) * 100;

  return (
    <div className="graph-block">
      <div className="graph-title">Grafico 1 — PIL nominale, PIL reale e deflatore nel tempo</div>
      <div className="graph-row">
        <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: '100%' }}>
          <Axes xMin={0} xMax={years} yMin={yMin} yMax={yMax}
            xLabel="anni" yLabel="PIL" nX={5} nY={5}
            xFmt={v => v.toFixed(0)} yFmt={v => v.toFixed(0)} />

          <path d={toSvg(realPath)} fill="none" stroke="#059669" strokeWidth={2.8} strokeLinecap="round" />
          <text x={toX(years * 0.75, 0, years)} y={toY(baseY * Math.pow(1 + gQ / 100, years * 0.75), yMin, yMax) - 8}
            fontSize={12} fill="#059669" fontWeight="bold" fontStyle="italic">PIL reale</text>

          <path d={toSvg(nomPath)} fill="none" stroke="#0284c7" strokeWidth={2.8} strokeLinecap="round" />
          <text x={toX(years * 0.55, 0, years)}
            y={toY(baseY * Math.pow(1 + gQ / 100, years * 0.55) * Math.pow(1 + gP / 100, years * 0.55), yMin, yMax) - 8}
            fontSize={12} fill="#0284c7" fontWeight="bold" fontStyle="italic">PIL nominale</text>
        </svg>

        <div className="graph-controls">
          <SliderControl label="Crescita quantità" symbol="g_Q"
            value={gQ} min={0} max={6} step={0.1}
            onChange={setGQ} color="#059669"
            fmt={v => `${v.toFixed(1)}%`} />
          <SliderControl label="Inflazione" symbol="π"
            value={gP} min={0} max={10} step={0.1}
            onChange={setGP} color="#0284c7"
            fmt={v => `${v.toFixed(1)}%`} />
          <div className="result-box">
            <div className="result-row"><span>PIL nom. (t=20)</span><span style={{ color: '#0284c7' }}>{nomFinal.toFixed(0)}</span></div>
            <div className="result-row"><span>PIL reale (t=20)</span><span style={{ color: '#059669' }}>{realFinal.toFixed(0)}</span></div>
            <div className="result-row"><span>Deflatore (t=20)</span><span style={{ color: '#4338ca' }}>{defFinal.toFixed(1)}</span></div>
          </div>
          <div className="insight-mini">
            Il <strong>PIL nominale</strong> cresce sia per aumento delle quantità sia per l'inflazione. Il <strong>PIL reale</strong> (a prezzi base) misura solo la crescita fisica. Il rapporto dà il <strong>deflatore</strong> = indice dei prezzi.
          </div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAFICO 2 — Componenti della Spesa: Y = C + I + G + NX
// ══════════════════════════════════════════════════════════════
function GDPComponentsGraph() {
  const [cShare, setCShare] = useState(60);
  const [iShare, setIShare] = useState(18);
  const [gShare, setGShare] = useState(20);
  const [nxShare, setNxShare] = useState(2);

  const total = cShare + iShare + gShare + nxShare;

  const components = [
    { label: 'C', name: 'Consumi', value: cShare, color: '#0284c7' },
    { label: 'I', name: 'Investimenti', value: iShare, color: '#059669' },
    { label: 'G', name: 'Spesa pubblica', value: gShare, color: '#d97706' },
    { label: 'NX', name: 'Esp. nette', value: nxShare, color: nxShare >= 0 ? '#4338ca' : '#dc2626' },
  ];

  const barW = 160;
  const barX = PL + cW / 2 - barW / 2;
  const barTop = PT + 20;
  const barBottom = PT + cH - 10;
  const barH = barBottom - barTop;

  let cumulative = 0;
  const bars = components.map(comp => {
    const h = (Math.abs(comp.value) / Math.max(Math.abs(total), 1)) * barH;
    const y = barTop + (cumulative / Math.max(Math.abs(total), 1)) * barH;
    cumulative += Math.abs(comp.value);
    return { ...comp, y, h };
  });

  return (
    <div className="graph-block">
      <div className="graph-title">Grafico 2 — Componenti della spesa aggregata: Y = C + I + G + NX</div>
      <div className="graph-row">
        <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: '100%' }}>
          <line x1={PL} y1={PT} x2={PL} y2={PT + cH} stroke="#475569" strokeWidth={1.5} />
          <line x1={PL} y1={PT + cH} x2={PL + cW} y2={PT + cH} stroke="#475569" strokeWidth={1.5} />

          <text x={PL - 8} y={barTop + 4} textAnchor="end" fontSize={10} fill="#94a3b8">100%</text>
          <text x={PL - 8} y={barBottom + 4} textAnchor="end" fontSize={10} fill="#94a3b8">0</text>
          <text x={PL + cW / 2} y={PT + cH + 22} textAnchor="middle" fontSize={12} fill="#475569" fontStyle="italic">PIL (Y)</text>

          {bars.map((b, i) => (
            <g key={i}>
              <rect x={barX} y={b.y} width={barW} height={b.h}
                fill={b.color} fillOpacity={0.85} stroke="white" strokeWidth={1.5} />
              {b.h > 14 && (
                <text x={barX + barW / 2} y={b.y + b.h / 2 + 4}
                  textAnchor="middle" fontSize={13} fill="white" fontWeight="bold">
                  {b.label} = {b.value.toFixed(0)}%
                </text>
              )}
            </g>
          ))}

          <text x={barX + barW + 12} y={barTop + 14} fontSize={13} fill="#4338ca" fontWeight="bold">Y = {total.toFixed(0)}%</text>
        </svg>

        <div className="graph-controls">
          <SliderControl label="Consumi" symbol="C"
            value={cShare} min={40} max={80} step={1}
            onChange={setCShare} color="#0284c7"
            fmt={v => `${v.toFixed(0)}%`} />
          <SliderControl label="Investimenti" symbol="I"
            value={iShare} min={8} max={30} step={1}
            onChange={setIShare} color="#059669"
            fmt={v => `${v.toFixed(0)}%`} />
          <SliderControl label="Spesa pubblica" symbol="G"
            value={gShare} min={10} max={30} step={1}
            onChange={setGShare} color="#d97706"
            fmt={v => `${v.toFixed(0)}%`} />
          <SliderControl label="Esportazioni nette" symbol="NX"
            value={nxShare} min={-10} max={10} step={0.5}
            onChange={setNxShare} color={nxShare >= 0 ? '#4338ca' : '#dc2626'}
            fmt={v => `${v >= 0 ? '+' : ''}${v.toFixed(1)}%`} />
          <div className="insight-mini">
            In Italia: <strong>C ≈ 60%</strong>, <strong>I ≈ 18%</strong>, <strong>G ≈ 20%</strong>, <strong>NX ≈ +2%</strong>. Negli USA NX è negativo (importazioni &gt; esportazioni).
          </div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAFICO 3 — IPC vs Deflatore del PIL
// ══════════════════════════════════════════════════════════════
function CPIvsDeflatorGraph() {
  const [shockImport, setShockImport] = useState(5);
  const [shockInvest, setShockInvest] = useState(0);

  const years = 10;

  const wConsImp = 0.15;
  const wConsDom = 0.65;
  const wInv     = 0.20;
  const baseInfl = 2.0;

  const ipcPath = [];
  const defPath = [];

  for (let t = 0; t <= years; t += 0.25) {
    const ipcInfl = baseInfl + wConsImp * shockImport / (wConsDom + wConsImp);
    const ipc = 100 * Math.pow(1 + ipcInfl / 100, t);
    ipcPath.push([t, ipc]);

    const defInfl = baseInfl * (wConsDom / (wConsDom + wInv)) + shockInvest * wInv / (wConsDom + wInv) + baseInfl * wInv / (wConsDom + wInv);
    const def = 100 * Math.pow(1 + defInfl / 100, t);
    defPath.push([t, def]);
  }

  const yMin = 100;
  const yMax = Math.max(ipcPath[ipcPath.length - 1][1], defPath[defPath.length - 1][1]) * 1.05;

  const toSvg = pts => `M${pts.map(([x, y]) => `${toX(x, 0, years).toFixed(1)},${toY(y, yMin, yMax).toFixed(1)}`).join('L')}`;

  const ipcFinal = ipcPath[ipcPath.length - 1][1];
  const defFinal = defPath[defPath.length - 1][1];
  const gap = ipcFinal - defFinal;

  return (
    <div className="graph-block">
      <div className="graph-title">Grafico 3 — IPC vs Deflatore: perché divergono</div>
      <div className="graph-row">
        <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: '100%' }}>
          <Axes xMin={0} xMax={years} yMin={yMin} yMax={yMax}
            xLabel="anni" yLabel="indice" nX={5} nY={4}
            xFmt={v => v.toFixed(0)} yFmt={v => v.toFixed(0)} />

          <path d={toSvg(ipcPath)} fill="none" stroke="#dc2626" strokeWidth={2.8} strokeLinecap="round" />
          <text x={toX(years * 0.8, 0, years)} y={toY(ipcPath[Math.floor(ipcPath.length * 0.8)][1], yMin, yMax) - 8}
            fontSize={12} fill="#dc2626" fontWeight="bold" fontStyle="italic">IPC</text>

          <path d={toSvg(defPath)} fill="none" stroke="#4338ca" strokeWidth={2.8} strokeLinecap="round" />
          <text x={toX(years * 0.6, 0, years)} y={toY(defPath[Math.floor(defPath.length * 0.6)][1], yMin, yMax) + 14}
            fontSize={12} fill="#4338ca" fontWeight="bold" fontStyle="italic">Deflatore</text>
        </svg>

        <div className="graph-controls">
          <SliderControl label="Shock prezzo import" symbol="π_M"
            value={shockImport} min={-5} max={15} step={0.5}
            onChange={setShockImport} color="#dc2626"
            fmt={v => `${v >= 0 ? '+' : ''}${v.toFixed(1)}%`} />
          <SliderControl label="Shock beni invest." symbol="π_I"
            value={shockInvest} min={-5} max={15} step={0.5}
            onChange={setShockInvest} color="#4338ca"
            fmt={v => `${v >= 0 ? '+' : ''}${v.toFixed(1)}%`} />
          <div className="result-box">
            <div className="result-row"><span>IPC a 10 anni</span><span style={{ color: '#dc2626' }}>{ipcFinal.toFixed(1)}</span></div>
            <div className="result-row"><span>Deflatore a 10 anni</span><span style={{ color: '#4338ca' }}>{defFinal.toFixed(1)}</span></div>
            <div className="result-row"><span>Divario</span><span style={{ color: gap >= 0 ? '#dc2626' : '#4338ca' }}>{gap >= 0 ? '+' : ''}{gap.toFixed(1)}</span></div>
          </div>
          <div className="insight-mini">
            L'<strong>IPC</strong> include i beni importati ma non i beni d'investimento. Il <strong>deflatore</strong> copre tutti i beni prodotti internamente. Gli shock sulle importazioni alzano l'IPC; gli shock sui beni d'investimento alzano il deflatore.
          </div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAFICO 4 — Tasso di Disoccupazione, Occupazione, Partecipazione
// ══════════════════════════════════════════════════════════════
function UnemploymentGraph() {
  const [occupati, setOccupati] = useState(23);
  const [disoccupati, setDisoccupati] = useState(2);
  const [inattivi, setInattivi] = useState(13);

  const forzaLavoro = occupati + disoccupati;
  const popLavorativa = forzaLavoro + inattivi;

  const tassoDisocc = (disoccupati / forzaLavoro) * 100;
  const tassoOccup = (occupati / popLavorativa) * 100;
  const tassoPartec = (forzaLavoro / popLavorativa) * 100;

  const total = popLavorativa;
  const cx = PL + cW * 0.28;
  const cy = PT + cH * 0.5;
  const r = 80;

  const slices = [
    { label: 'Occupati', value: occupati, color: '#059669' },
    { label: 'Disoccupati', value: disoccupati, color: '#dc2626' },
    { label: 'Inattivi', value: inattivi, color: '#94a3b8' },
  ];

  let cumAngle = -Math.PI / 2;
  const arcs = slices.map(s => {
    const frac = s.value / total;
    const startAngle = cumAngle;
    const endAngle = cumAngle + frac * 2 * Math.PI;
    cumAngle = endAngle;
    const x1 = cx + r * Math.cos(startAngle);
    const y1 = cy + r * Math.sin(startAngle);
    const x2 = cx + r * Math.cos(endAngle);
    const y2 = cy + r * Math.sin(endAngle);
    const largeArc = frac > 0.5 ? 1 : 0;
    const d = `M${cx},${cy} L${x1.toFixed(1)},${y1.toFixed(1)} A${r},${r} 0 ${largeArc} 1 ${x2.toFixed(1)},${y2.toFixed(1)} Z`;
    const midAngle = (startAngle + endAngle) / 2;
    const lx = cx + (r * 0.6) * Math.cos(midAngle);
    const ly = cy + (r * 0.6) * Math.sin(midAngle);
    return { ...s, d, lx, ly, frac };
  });

  return (
    <div className="graph-block">
      <div className="graph-title">Grafico 4 — Popolazione in età lavorativa: occupati, disoccupati, inattivi</div>
      <div className="graph-row">
        <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: '100%' }}>
          {arcs.map((a, i) => (
            <g key={i}>
              <path d={a.d} fill={a.color} fillOpacity={0.85} stroke="white" strokeWidth={1.5} />
              {a.frac > 0.05 && (
                <text x={a.lx} y={a.ly + 4} textAnchor="middle" fontSize={12} fill="white" fontWeight="bold">
                  {(a.frac * 100).toFixed(0)}%
                </text>
              )}
            </g>
          ))}
          <text x={cx} y={PT + 14} textAnchor="middle" fontSize={12} fill="#475569" fontWeight="bold">Popolazione in età lavorativa</text>

          <g transform={`translate(${PL + cW * 0.62},${PT + 30})`}>
            {slices.map((s, i) => (
              <g key={i} transform={`translate(0,${i * 22})`}>
                <rect x={0} y={0} width={14} height={14} fill={s.color} />
                <text x={20} y={11} fontSize={11} fill="#475569">{s.label}</text>
                <text x={105} y={11} fontSize={11} fill="#475569" fontWeight="bold" textAnchor="end">{s.value.toFixed(1)} mln</text>
              </g>
            ))}
            <line x1={0} y1={78} x2={120} y2={78} stroke="#94a3b8" strokeWidth={0.8} />
            <text x={0} y={94} fontSize={11} fill="#475569">Forza lavoro</text>
            <text x={105} y={94} fontSize={11} fill="#4338ca" fontWeight="bold" textAnchor="end">{forzaLavoro.toFixed(1)} mln</text>
            <text x={0} y={110} fontSize={11} fill="#475569">Pop. lavorativa</text>
            <text x={105} y={110} fontSize={11} fill="#4338ca" fontWeight="bold" textAnchor="end">{popLavorativa.toFixed(1)} mln</text>
          </g>
        </svg>

        <div className="graph-controls">
          <SliderControl label="Occupati" symbol="E"
            value={occupati} min={15} max={28} step={0.5}
            onChange={setOccupati} color="#059669"
            fmt={v => `${v.toFixed(1)} mln`} />
          <SliderControl label="Disoccupati" symbol="U"
            value={disoccupati} min={0.5} max={6} step={0.1}
            onChange={setDisoccupati} color="#dc2626"
            fmt={v => `${v.toFixed(1)} mln`} />
          <SliderControl label="Inattivi" symbol="N"
            value={inattivi} min={5} max={20} step={0.5}
            onChange={setInattivi} color="#94a3b8"
            fmt={v => `${v.toFixed(1)} mln`} />
          <div className="result-box">
            <div className="result-row"><span>Tasso disoccupazione</span><span style={{ color: '#dc2626' }}>{tassoDisocc.toFixed(1)}%</span></div>
            <div className="result-row"><span>Tasso occupazione</span><span style={{ color: '#059669' }}>{tassoOccup.toFixed(1)}%</span></div>
            <div className="result-row"><span>Tasso partecipazione</span><span style={{ color: '#4338ca' }}>{tassoPartec.toFixed(1)}%</span></div>
          </div>
          <div className="insight-mini">
            I tre tassi catturano aspetti diversi. Se molti si scoraggiano e diventano <strong>inattivi</strong>, il tasso di disoccupazione può scendere anche senza un aumento degli occupati: il tasso di partecipazione rivela questo effetto.
          </div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  PAGINA PRINCIPALE — Capitolo 2
// ══════════════════════════════════════════════════════════════
export default function Cap2_DatiMacro() {
  return (
    <div className="macro-page">

      <div className="macro-header">
        <div className="chapter-badge">Capitolo 2 · Introduzione alla Macroeconomia</div>
        <h1 className="macro-title">
          <span className="gradient-text">I dati</span><br />della macroeconomia
        </h1>
        <p className="macro-subtitle">
          <em>"Formulare teorie prima di disporre dei dati è un errore imperdonabile: inconsapevolmente, si comincia a manipolare i fatti per confermare la teoria, invece di adattare la teoria ai fatti."</em> — Sherlock Holmes
        </p>
      </div>

      {/* ── Introduzione ─────────────────────────────────── */}
      <section className="macro-section">
        <h2 className="section-title">Introduzione</h2>
        <div className="prose">
          <p>
            Scienziati, economisti e investigatori, seppure operino in ambiti diversi e utilizzino strumenti diversi, hanno un elemento in comune: vogliono capire che cosa accade nel mondo che li circonda. Per farlo, osservano la realtà e formulano teorie. In particolare, elaborano teorie per cercare di dare un senso a ciò che osservano, quindi formulano le teorie e osservano di nuovo e in modo sistematico la realtà per stabilire se le teorie siano valide. Solo quando le teorie e l'evidenza empirica sono tra loro coerenti, possono ritenersi di aver compreso un fenomeno e alcune regolarità riscontrabili. Allo stesso modo si comportano gli economisti. L'epistemologia di osservazioni continuamente utilizzate dagli economisti per formulare le loro teorie macroeconomiche e sottoporle a verifica empirica è dunque cruciale.
          </p>
          <p>
            Una fonte di informazioni su ciò che sta accadendo in un'economia è la semplice osservazione casuale di ciò che ci circonda nella vita quotidiana. Quando, per esempio, facciamo la spesa, notiamo se i prezzi stanno aumentando, si stanno riducendo o sono costanti. Quando, invece, siamo in cerca di un'occupazione, scopriamo se le imprese stanno cercando nuovi dipendenti e intendono aumentare il loro organico. Poiché tutti noi facciamo parte del sistema economico, nel nostro agire quotidiano, più o meno consapevolmente, ci formiamo un'idea sull'andamento dell'economia. Tuttavia, un secolo fa gli economisti si resero conto che questa base di osservazioni disponibile solo in via aneddotica era una fonte di dati inconsapevole e strutturalmente inadeguata per spiegare fenomeni macroeconomici complessi. La soluzione fu la costruzione sistematica di un insieme coerente e omogeneo di indicatori statistici, che potesse offrire una rappresentazione oggettiva e misurabile dei fenomeni aggregati.
          </p>
        </div>
      </section>

      {/* ── 2.1 ─────────────────────────────────────────── */}
      <section className="macro-section">
        <h2 className="section-title">2.1 La misura del valore dell'attività economica: il prodotto interno lordo</h2>
        <div className="prose">
          <p>
            Il prodotto interno lordo, o PIL, è la variabile aggregata più importante in macroeconomia. Nasce con lo scopo di sintetizzare in un unico numero il volume complessivo dell'attività produttiva di un'economia in un certo periodo di tempo. Le prime stime organiche del PIL furono elaborate negli Stati Uniti negli anni Trenta da Simon Kuznets, in risposta all'esigenza dell'amministrazione Roosevelt di disporre di dati quantitativi per valutare gli effetti della Grande Depressione e l'impatto del New Deal. Da allora il PIL è diventato lo standard internazionale per misurare la produzione aggregata e costituisce il riferimento privilegiato per confronti tra paesi e tra periodi storici diversi.
          </p>

          <h3 style={{ marginTop: '1.5rem' }}>Reddito, spesa e flusso circolare</h3>
          <p>
            Il PIL può essere misurato seguendo tre ottiche equivalenti. Dal lato della produzione, il PIL è il valore di mercato di tutti i beni e servizi finali prodotti in un'economia in un dato periodo. Dal lato della spesa, è la somma di tutte le spese finali effettuate per acquistare questi beni e servizi, ossia consumi, investimenti, spesa pubblica ed esportazioni nette. Dal lato del reddito, è la somma di tutti i redditi distribuiti ai fattori produttivi impiegati nella produzione: salari ai lavoratori, profitti alle imprese, interessi ai finanziatori, rendite ai proprietari. Le tre ottiche conducono necessariamente allo stesso risultato, perché ogni euro speso per acquistare un bene diventa reddito per chi quel bene ha prodotto.
          </p>
          <p>
            Questa identità fondamentale si rappresenta efficacemente con lo schema del flusso circolare del reddito, in cui famiglie e imprese scambiano flussi reali di beni, servizi e fattori produttivi, e flussi monetari di salari e spese. Le famiglie offrono lavoro e capitale alle imprese ricevendone in cambio redditi; con quei redditi acquistano beni e servizi prodotti dalle imprese. Il valore totale di questi flussi costituisce il PIL, ed è proprio la circolarità a garantire che produzione, spesa e reddito coincidano numericamente.
          </p>

          <h3>Regole per il calcolo del PIL</h3>
          <p>
            Il calcolo concreto del PIL richiede di seguire alcune regole precise. Anzitutto, si considerano solo i beni e servizi finali, non quelli intermedi, per evitare duplicazioni contabili: se si sommassero il valore del grano, della farina, del pane e della pizza, si conteggerebbe più volte lo stesso valore economico. Per questo nella contabilità nazionale si adotta il metodo del valore aggiunto, che consiste nel sommare il valore aggiunto, ossia la differenza tra ricavi e costi dei beni intermedi, generato in ciascuna fase della filiera produttiva. Il valore aggiunto totale coincide per costruzione con il valore dei beni finali prodotti, e rappresenta quindi una misura corretta del PIL.
          </p>
          <p>
            Per quanto riguarda i beni usati, questi non rientrano nel PIL perché il loro valore è già stato contabilizzato nell'anno della loro produzione originaria. Un'auto di seconda mano scambiata tra privati, per esempio, non genera PIL aggiuntivo perché la sua produzione ha già contribuito al PIL dell'anno in cui è stata fabbricata; l'eventuale commissione dell'intermediario, invece, costituisce un servizio nuovo e viene conteggiata. Le scorte di beni che restano invendute a fine periodo pongono un problema particolare: poiché sono state prodotte in quel periodo, entrano nel PIL come variazione delle scorte, che convenzionalmente si considera una forma di investimento.
          </p>
          <p>
            Quando beni intermedi non vengono direttamente venduti, ma rimangono all'interno dell'impresa per la trasformazione successiva, il calcolo del valore aggiunto li gestisce in modo automatico grazie alla sottrazione dei costi intermedi dai ricavi. Regole speciali si applicano ai prodotti che non passano per il mercato, come i servizi abitativi degli immobili occupati dai proprietari, che vengono stimati imputando un affitto figurativo, e i servizi della pubblica amministrazione, che non hanno un prezzo di mercato e vengono valutati al costo di produzione.
          </p>

          <h3>PIL reale e PIL nominale</h3>
          <p>
            Un aspetto cruciale riguarda la distinzione tra PIL nominale e PIL reale. Il PIL nominale misura il valore della produzione ai prezzi correnti dell'anno considerato, e quindi risente sia delle variazioni delle quantità prodotte sia delle variazioni dei prezzi. Se in un anno il PIL nominale cresce del 5%, non possiamo sapere quanto di questa crescita sia dovuto a un aumento effettivo della produzione e quanto invece a un semplice aumento dei prezzi. Per isolare la crescita reale si ricorre al PIL reale, che misura il valore della produzione ai prezzi di un anno base fisso, depurando così l'effetto dell'inflazione.
          </p>
          <p>
            Formalmente, se indichiamo con Q<sub>t</sub> le quantità prodotte al tempo t e con P<sub>t</sub> i relativi prezzi, e scegliamo un anno base di riferimento con prezzi P<sub>0</sub>, il PIL nominale è Σ P<sub>t</sub> Q<sub>t</sub> mentre il PIL reale è Σ P<sub>0</sub> Q<sub>t</sub>. La crescita del PIL reale fornisce quindi la misura pulita della variazione della produzione fisica, mentre il rapporto tra PIL nominale e PIL reale dà un indice dei prezzi aggregato. Questo indice prende il nome di deflatore del PIL, ed è calcolato come:
          </p>
        </div>

        <div className="formula-box">
          <div className="formula-label">Deflatore del PIL</div>
          <div className="formula-main">Deflatore = (PIL nominale / PIL reale) × 100</div>
          <div className="formula-note">
            Il deflatore del PIL è un indicatore dell'inflazione, perché misura la variazione media dei prezzi di tutti i beni inclusi nel PIL.
          </div>
        </div>

        <div className="prose">
          <p>
            Il deflatore del PIL è un indicatore dell'inflazione, perché misura la variazione media dei prezzi di tutti i beni inclusi nel PIL. A differenza dell'indice dei prezzi al consumo, di cui diremo più avanti, il deflatore tiene conto di tutti i beni prodotti nell'economia, non solo di quelli acquistati dai consumatori, e riflette la composizione effettiva della produzione del periodo corrente.
          </p>
        </div>

        <NominalRealGDPGraph />

        <div className="prose">
          <h3 style={{ marginTop: '1.5rem' }}>PIL a catena</h3>
          <p>
            Il metodo del PIL reale a prezzi costanti presenta un problema di obsolescenza: più ci si allontana dall'anno base, meno i prezzi di quell'anno riflettono la struttura economica attuale, e le quantità prodotte oggi possono essere valutate con prezzi relativi non più rappresentativi. Per ovviare a questa distorsione, le statistiche contemporanee adottano il metodo del PIL a catena, in cui i prezzi di riferimento vengono aggiornati anno per anno secondo una media geometrica dei prezzi dei due periodi adiacenti. Il PIL a catena fornisce misure più accurate della crescita reale in economie in rapida trasformazione, anche se al prezzo di una minore trasparenza intuitiva.
          </p>

          <h3>Le componenti della spesa</h3>
          <p>
            Dal lato della spesa, il PIL di un'economia aperta si scompone in quattro grandi voci secondo la famosa identità:
          </p>
        </div>

        <div className="formula-box secondary">
          <div className="formula-label">Identità della domanda aggregata</div>
          <div className="formula-main">Y = C + I + G + NX</div>
          <div className="formula-note">
            Y è il PIL, C i consumi delle famiglie, I gli investimenti, G la spesa pubblica, NX le esportazioni nette (esportazioni − importazioni).
          </div>
        </div>

        <div className="prose">
          <p>
            I consumi comprendono le spese delle famiglie per beni durevoli come automobili ed elettrodomestici, beni non durevoli come alimentari e abbigliamento, e servizi come istruzione, sanità e trasporti. Gli investimenti includono gli investimenti fissi non residenziali delle imprese in macchinari, impianti e software; gli investimenti residenziali in nuove abitazioni; e la variazione delle scorte di magazzino. La spesa pubblica considera gli acquisti di beni e servizi da parte di amministrazioni centrali e locali, escludendo però i trasferimenti come pensioni e sussidi, che non corrispondono a una produzione corrente. Le esportazioni nette infine catturano lo scambio con il resto del mondo, contribuendo positivamente al PIL se le esportazioni superano le importazioni e negativamente nel caso opposto.
          </p>
        </div>

        <GDPComponentsGraph />

        <div className="prose">
          <h3 style={{ marginTop: '1.5rem' }}>Altre misure del reddito</h3>
          <p>
            La contabilità nazionale prevede anche altre misure del reddito che si affiancano al PIL. Il prodotto nazionale lordo, o PNL, misura il valore dei beni e servizi prodotti dai fattori di proprietà dei residenti di un paese, ovunque questi si trovino nel mondo; differisce dal PIL per l'inclusione dei redditi netti dall'estero. Il prodotto interno netto, o PIN, si ottiene sottraendo al PIL gli ammortamenti, ossia il deprezzamento del capitale fisico, e fornisce una misura più pulita della produzione al netto dell'usura dello stock di capitale. Dal PIN, sottraendo le imposte indirette e aggiungendo i trasferimenti alle famiglie, si ottiene il reddito nazionale. Scendendo ancora, considerando i trasferimenti ricevuti e sottraendo i profitti trattenuti dalle imprese, si arriva al reddito personale e, infine, al reddito personale disponibile, ossia al reddito effettivamente utilizzabile dalle famiglie per consumi e risparmio dopo il pagamento delle imposte dirette. Queste distinzioni sono utili per specifiche analisi economiche: il reddito disponibile, per esempio, è la variabile più rilevante per studiare il comportamento di consumo delle famiglie.
          </p>

          <h3>La destagionalizzazione</h3>
          <p>
            Un aspetto tecnico rilevante riguarda il trattamento della stagionalità. Molte variabili macroeconomiche presentano oscillazioni regolari legate al calendario: le vendite al dettaglio aumentano sistematicamente a dicembre per le festività, l'occupazione nel turismo cresce d'estate, la produzione industriale rallenta ad agosto per le ferie. Per rendere confrontabili tra loro i dati di trimestri diversi, le statistiche applicano procedure di destagionalizzazione che rimuovono queste fluttuazioni ricorrenti, lasciando emergere le variazioni genuinamente legate al ciclo economico e alle tendenze di fondo. Il PIL che si legge nelle notizie è quasi sempre destagionalizzato, per permettere di distinguere correttamente espansioni e recessioni dalle oscillazioni stagionali.
          </p>
        </div>
      </section>

      {/* ── 2.2 ─────────────────────────────────────────── */}
      <section className="macro-section">
        <h2 className="section-title">2.2 Misurare il costo della vita: l'indice dei prezzi al consumo</h2>
        <div className="prose">
          <p>
            Il prezzo di acquisto di uno o più beni sul mercato è una grandezza elementare, ma la misura dell'andamento dei prezzi nel complesso richiede la costruzione di un indice aggregato. L'indice più noto e più utilizzato è l'indice dei prezzi al consumo, o IPC, che misura il costo di un paniere rappresentativo di beni e servizi acquistati da una famiglia tipica in un dato periodo. L'Istituto Nazionale di Statistica italiano, ISTAT, rileva mensilmente i prezzi di migliaia di prodotti nei punti vendita di tutta Italia, e li aggrega in un indice seguendo una formula che attribuisce a ciascun bene un peso pari alla quota di spesa che le famiglie vi destinano secondo le indagini sui bilanci familiari.
          </p>

          <h3 style={{ marginTop: '1.5rem' }}>Il prezzo di un paniere di beni</h3>
          <p>
            L'IPC è un indice di Laspeyres, nel senso che confronta il costo corrente del paniere di beni con il costo dello stesso paniere nell'anno base. Formalmente:
          </p>
        </div>

        <div className="formula-box">
          <div className="formula-label">Indice di Laspeyres (IPC)</div>
          <div className="formula-main">IPC<sub>t</sub> = (Σ P<sub>t</sub><sup>i</sup> · Q<sub>0</sub><sup>i</sup>) / (Σ P<sub>0</sub><sup>i</sup> · Q<sub>0</sub><sup>i</sup>) × 100</div>
          <div className="formula-note">
            P<sub>t</sub><sup>i</sup> e P<sub>0</sub><sup>i</sup> sono i prezzi del bene i nel periodo corrente e nell'anno base; Q<sub>0</sub><sup>i</sup> è la quantità del bene nel paniere di riferimento.
          </div>
        </div>

        <div className="prose">
          <p>
            L'IPC cresce se i prezzi correnti dei beni inclusi nel paniere aumentano rispetto all'anno base, e decresce in caso contrario. La variazione percentuale dell'IPC tra due periodi successivi rappresenta il tasso d'inflazione, ossia la misura più utilizzata del costo della vita e della sua evoluzione nel tempo.
          </p>

          <h3>IPC e il deflatore del PIL</h3>
          <p>
            IPC e deflatore del PIL sono entrambi indici dei prezzi, ma differiscono per alcuni aspetti importanti che vale la pena richiamare. L'IPC considera soltanto i beni acquistati dai consumatori, mentre il deflatore del PIL copre tutti i beni prodotti nell'economia, inclusi i beni d'investimento e i beni pubblici. L'IPC include i beni importati consumati dalle famiglie, mentre il deflatore del PIL considera soltanto i beni prodotti internamente. L'IPC utilizza pesi fissi basati sul paniere dell'anno base, mentre il deflatore del PIL utilizza pesi variabili corrispondenti alla composizione corrente della produzione. Per queste ragioni i due indici possono divergere anche sensibilmente in periodi specifici, e un'analisi completa dell'inflazione utilizza entrambi in modo complementare.
          </p>
        </div>

        <CPIvsDeflatorGraph />

        <div className="prose">
          <h3 style={{ marginTop: '1.5rem' }}>L'IPC sovrastima l'inflazione</h3>
          <p>
            L'IPC, pur essendo uno strumento di uso quotidiano, presenta limiti noti che tendono a farlo sovrastimare sistematicamente il vero tasso d'inflazione. Anzitutto, il paniere è fisso e non tiene conto della sostituzione tra beni: quando il prezzo di un bene aumenta, i consumatori tendono a sostituirlo con alternative più economiche, ma l'IPC continua a calcolare il costo del paniere originale e ignora questo adattamento. In secondo luogo, l'IPC fatica a cogliere l'introduzione di nuovi beni, perché la loro inclusione nel paniere richiede tempo e fino a quel momento il beneficio per i consumatori derivante dalla maggiore varietà non viene catturato. Infine, l'IPC non coglie adeguatamente i miglioramenti qualitativi: uno smartphone di oggi svolge funzioni impensabili vent'anni fa, ma la componente di "prezzo per qualità" è difficilissima da isolare e gli aggiustamenti edonistici applicati dalle statistiche sono necessariamente imperfetti. Una commissione di economisti convocata dal Senato statunitense negli anni Novanta, guidata da Michael Boskin, stimò che questi bias complessivi portano l'IPC a sovrastimare l'inflazione effettiva di circa un punto percentuale all'anno, un errore che, accumulato nel tempo, produce distorsioni significative nella valutazione del costo della vita.
          </p>
        </div>
      </section>

      {/* ── 2.3 ─────────────────────────────────────────── */}
      <section className="macro-section">
        <h2 className="section-title">2.3 Misurare l'occupazione: il tasso di disoccupazione</h2>
        <div className="prose">
          <p>
            Uno degli aspetti fondamentali per valutare la salute dell'economia è il livello di occupazione e disoccupazione. Il reddito aggregato dipende infatti dal fatto che le persone lavorino, e la disoccupazione non è soltanto un problema economico di produzione mancata ma anche un problema sociale, perché il lavoro è una dimensione centrale dell'identità personale e della partecipazione alla vita collettiva. Per questo motivo il tasso di disoccupazione viene seguito con grande attenzione da policy maker, media e opinione pubblica, e rappresenta uno degli indicatori più politicamente sensibili in qualsiasi paese.
          </p>

          <h3 style={{ marginTop: '1.5rem' }}>L'indagine sulle forze lavoro</h3>
          <p>
            I dati sulla disoccupazione provengono in Italia dall'indagine sulle forze di lavoro condotta dall'ISTAT seguendo gli standard dell'International Labour Organization. L'indagine intervista ogni trimestre un campione rappresentativo di famiglie e di individui e classifica le persone in tre categorie mutuamente esclusive. Gli occupati sono coloro che nella settimana di riferimento hanno svolto almeno un'ora di lavoro retribuito, o erano temporaneamente assenti dal lavoro per ferie o malattia. I disoccupati sono le persone senza lavoro che hanno cercato attivamente un'occupazione nelle quattro settimane precedenti e sono disponibili a iniziare a lavorare entro le due settimane successive. Gli inattivi, infine, sono tutte le persone in età lavorativa che non lavorano e non cercano lavoro, come studenti, casalinghe, pensionati e scoraggiati.
          </p>
          <p>
            La somma di occupati e disoccupati costituisce la forza lavoro, o popolazione attiva, mentre la popolazione in età lavorativa include anche gli inattivi. A partire da queste categorie si costruiscono tre indicatori fondamentali:
          </p>
        </div>

        <div className="formula-box">
          <div className="formula-label">I tre tassi del mercato del lavoro</div>
          <div className="formula-main" style={{ fontSize: '1rem' }}>
            u = U / L × 100 &nbsp;·&nbsp; e = E / Pop × 100 &nbsp;·&nbsp; p = L / Pop × 100
          </div>
          <div className="formula-note">
            u: tasso di disoccupazione (disoccupati / forza lavoro). e: tasso di occupazione (occupati / popolazione in età lavorativa). p: tasso di partecipazione (forza lavoro / popolazione in età lavorativa).
          </div>
        </div>

        <div className="prose">
          <p>
            Il tasso di disoccupazione misura la quota di persone in cerca di lavoro sul totale della forza lavoro, il tasso di occupazione misura la quota di occupati sull'intera popolazione in età lavorativa, il tasso di partecipazione misura la propensione della popolazione a entrare nel mercato del lavoro attivamente. Questi tre indicatori vanno letti congiuntamente perché raccontano aspetti diversi della stessa realtà: un basso tasso di disoccupazione può convivere con un basso tasso di occupazione se tante persone escono dalla forza lavoro scoraggiandosi, come è tipicamente il caso delle economie dove molti lavoratori marginali si ritirano quando le prospettive peggiorano.
          </p>
        </div>

        <UnemploymentGraph />

        <div className="prose">
          <h3 style={{ marginTop: '1.5rem' }}>Analisi di un caso: partecipazione alla forza lavoro negli Stati Uniti</h3>
          <p>
            Un esempio istruttivo è l'evoluzione della partecipazione femminile alla forza lavoro negli Stati Uniti nel corso del Novecento. Nel 1950 solo poco più del 30% delle donne americane in età lavorativa partecipava al mercato del lavoro, contro oltre l'80% degli uomini. Nel corso dei decenni successivi questa quota è cresciuta costantemente fino a superare il 60% alla fine degli anni Novanta, avvicinando il tasso femminile a quello maschile, anche se un divario significativo è rimasto. Le ragioni di questa trasformazione sono molteplici e si intrecciano tra cultura, tecnologia e istituzioni: la diffusione di elettrodomestici ha ridotto il tempo necessario per le attività domestiche, i cambiamenti sociali hanno legittimato il lavoro femminile fuori casa, la disponibilità di servizi per l'infanzia ha facilitato la conciliazione, e il miglioramento delle opportunità educative ha aumentato il rendimento del lavoro retribuito. A partire dal 2000 la partecipazione femminile ha smesso di crescere e ha iniziato a oscillare, mentre la partecipazione maschile ha continuato a ridursi gradualmente, per ragioni legate all'aumento delle disabilità, all'uscita di lavoratori marginali e a cambiamenti strutturali nei settori produttivi tradizionalmente maschili.
          </p>

          <h3>Uno sguardo all'Italia: il mercato del lavoro italiano</h3>
          <p>
            Guardando al mercato del lavoro italiano degli ultimi decenni, emerge un quadro caratterizzato da livelli di partecipazione significativamente più bassi rispetto alla media europea, soprattutto per le donne e per il Sud. Il tasso di partecipazione femminile italiano è tradizionalmente tra i più bassi dell'Unione Europea, con ampie disparità territoriali: nel Mezzogiorno si colloca frequentemente sotto il 40%, mentre nel Centro-Nord sfiora il 70%. Il tasso di disoccupazione giovanile, in particolare nella fascia 15-24 anni, ha raggiunto livelli allarmanti durante la Grande Recessione e la crisi del debito, superando in alcuni momenti il 40%, e resta oggi strutturalmente più elevato che nella maggior parte dei paesi avanzati. La pandemia del 2020 ha colpito duramente il mercato del lavoro, provocando una caduta dell'occupazione femminile particolarmente severa, mentre la successiva ripresa ha riportato l'occupazione sui livelli pre-pandemici e anzi oltre, pur lasciando aperte molte delle fragilità strutturali di lungo periodo.
          </p>
        </div>
      </section>

      {/* ── 2.4 Conclusione ─────────────────────────────── */}
      <section className="macro-section">
        <h2 className="section-title">2.4 Conclusione: dagli indicatori statistici ai modelli economici</h2>
        <div className="prose">
          <p>
            Le misure statistiche analizzate in questo capitolo — PIL, inflazione e disoccupazione — costituiscono la base fattuale su cui si costruiscono le teorie macroeconomiche. Ogni modello economico aspira a rendere conto delle regolarità empiriche osservate in queste serie storiche, a spiegare i loro co-movimenti e a prevedere come reagiranno a shock e a politiche. Senza buoni dati non ci sarebbero buoni modelli, perché l'analisi teorica resterebbe sospesa nel vuoto, ma senza modelli nemmeno i migliori dati riuscirebbero a fornire una comprensione coerente dei fenomeni.
          </p>
          <p>
            Nei prossimi capitoli esamineremo alcune di queste teorie, scoprendo modelli che spiegano come vengono determinate queste variabili e come interagiscono. Avendo imparato a misurare i fenomeni macroeconomici, siamo ora pronti per imparare a spiegarli.
          </p>
        </div>
      </section>

    </div>
  );
}
