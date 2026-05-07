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
//  GRAFICO 1 — Il Ciclo Economico (PIL reale con recessioni)
// ══════════════════════════════════════════════════════════════
function BusinessCycleGraph() {
  const [trend, setTrend] = useState(2.0);     // crescita trend annuale %
  const [amp, setAmp]     = useState(3.0);     // ampiezza oscillazione %
  const [freq, setFreq]   = useState(0.6);     // frequenza cicli

  const years = 40;
  const xMin = 0, xMax = years;
  const baseY = 100;

  const path = [];
  const recessions = [];
  let prev = baseY;
  let prevT = 0;
  let inRec = false;
  let recStart = 0;

  for (let t = 0; t <= years; t += 0.25) {
    const yTrend = baseY * Math.pow(1 + trend / 100, t);
    const yCycle = yTrend * (1 + (amp / 100) * Math.sin(freq * t));
    path.push([t, yCycle]);

    if (t > 0) {
      const growth = (yCycle - prev) / prev;
      if (growth < 0 && !inRec) { inRec = true; recStart = t; }
      if (growth >= 0 && inRec) { inRec = false; recessions.push([recStart, t]); }
    }
    prev = yCycle;
    prevT = t;
  }
  if (inRec) recessions.push([recStart, prevT]);

  const yMin = Math.min(...path.map(p => p[1])) * 0.95;
  const yMax = Math.max(...path.map(p => p[1])) * 1.05;

  const svgPath = `M${path.map(([x, y]) => `${toX(x, xMin, xMax).toFixed(1)},${toY(y, yMin, yMax).toFixed(1)}`).join('L')}`;

  const trendPath = [];
  for (let t = 0; t <= years; t += 0.5) {
    trendPath.push([t, baseY * Math.pow(1 + trend / 100, t)]);
  }
  const trendSvg = `M${trendPath.map(([x, y]) => `${toX(x, xMin, xMax).toFixed(1)},${toY(y, yMin, yMax).toFixed(1)}`).join('L')}`;

  return (
    <div className="graph-block">
      <div className="graph-title">Grafico 1 — Il Ciclo Economico: trend e fluttuazioni del PIL reale</div>
      <div className="graph-row">
        <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: '100%' }}>
          <Axes xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax}
            xLabel="anni" yLabel="PIL" nX={8} nY={4}
            xFmt={v => v.toFixed(0)} yFmt={v => v.toFixed(0)} />

          {recessions.map(([a, b], i) => (
            <rect key={i}
              x={toX(a, xMin, xMax)} y={PT}
              width={toX(b, xMin, xMax) - toX(a, xMin, xMax)}
              height={cH}
              fill="#dc2626" fillOpacity={0.12} />
          ))}

          <path d={trendSvg} fill="none" stroke="#94a3b8" strokeWidth={1.5} strokeDasharray="5,3" />
          <text x={toX(years * 0.55, xMin, xMax)} y={toY(baseY * Math.pow(1 + trend/100, years*0.55), yMin, yMax) - 8}
            fontSize={11} fill="#94a3b8" fontStyle="italic">trend</text>

          <path d={svgPath} fill="none" stroke="#0284c7" strokeWidth={2.5} strokeLinecap="round" />
          <text x={toX(years * 0.8, xMin, xMax)} y={toY(baseY * Math.pow(1 + trend/100, years*0.8) * (1 + (amp/100)*Math.sin(freq*years*0.8)), yMin, yMax) - 10}
            fontSize={12} fill="#0284c7" fontWeight="bold" fontStyle="italic">PIL reale</text>
        </svg>

        <div className="graph-controls">
          <SliderControl label="Crescita di trend" symbol="g"
            value={trend} min={0.5} max={4} step={0.1}
            onChange={setTrend} color="#94a3b8"
            fmt={v => `${v.toFixed(1)}%`} />
          <SliderControl label="Ampiezza cicli" symbol="A"
            value={amp} min={0} max={6} step={0.2}
            onChange={setAmp} color="#0284c7"
            fmt={v => `${v.toFixed(1)}%`} />
          <SliderControl label="Frequenza cicli" symbol="ω"
            value={freq} min={0.2} max={1.2} step={0.05}
            onChange={setFreq} color="#4338ca" />
          <div className="result-box">
            <div className="result-row"><span>N. recessioni</span><span style={{ color: '#dc2626' }}>{recessions.length}</span></div>
            <div className="result-row"><span>PIL anno 40</span><span style={{ color: '#0284c7' }}>{path[path.length - 1][1].toFixed(0)}</span></div>
          </div>
          <div className="insight-mini">
            <strong>Le aree rosse</strong> rappresentano le recessioni, cioè periodi in cui il PIL reale diminuisce. Il trend di lungo periodo si mantiene positivo, ma attorno ad esso il PIL oscilla secondo il ciclo economico.
          </div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAFICO 2 — Modello Domanda-Offerta di Pizza
// ══════════════════════════════════════════════════════════════
function PizzaMarketGraph() {
  const [reddito, setReddito]   = useState(50);   // shift demand
  const [costoGrano, setCostoGrano] = useState(30); // shift supply

  // Baseline: D: P = 100 + redditoFactor - 2Q ; S: P = 10 + costoFactor + 1.5Q
  // Simpler: Qd = a - bP  ; Qs = c + dP
  // Let baseline give equilibrium at P=20, Q=20
  const redditoShift = (reddito - 50) * 0.4;  // positive shift if income up
  const costoShift   = (costoGrano - 30) * 0.35;

  // Qd = 40 + redditoShift - P ; Qs = -10 - costoShift + 1.5P (costoShift reduces offer)
  const a = 40 + redditoShift;
  const b = 1.0;
  const c = -10 - costoShift;
  const d = 1.5;

  const pEq = (a - c) / (b + d);
  const qEq = a - b * pEq;

  const qMax = 50, pMin = 0, pMax = 50;

  // On graph: P on y-axis, Q on x-axis
  // Demand curve: P(Q) = (a - Q)/b
  // Supply curve: P(Q) = (Q - c)/d

  const dPath = [];
  const sPath = [];
  for (let q = 0; q <= qMax; q += 0.5) {
    dPath.push([q, (a - q) / b]);
    sPath.push([q, (q - c) / d]);
  }

  const toSvg = (pts) => `M${pts.filter(([q, p]) => p >= pMin && p <= pMax).map(([q, p]) => `${toX(q, 0, qMax).toFixed(1)},${toY(p, pMin, pMax).toFixed(1)}`).join('L')}`;

  return (
    <div className="graph-block">
      <div className="graph-title">Grafico 2 — Il mercato della pizza: equilibrio domanda-offerta</div>
      <div className="graph-row">
        <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: '100%' }}>
          <Axes xMin={0} xMax={qMax} yMin={pMin} yMax={pMax}
            xLabel="Q (pizze)" yLabel="P (€)" nX={5} nY={5}
            xFmt={v => v.toFixed(0)} yFmt={v => v.toFixed(0)} />

          <path d={toSvg(dPath)} fill="none" stroke="#0284c7" strokeWidth={2.8} strokeLinecap="round" />
          <text x={toX(qMax * 0.85, 0, qMax)} y={toY((a - qMax * 0.85) / b, pMin, pMax) - 8}
            fontSize={12} fill="#0284c7" fontWeight="bold" fontStyle="italic">D</text>

          <path d={toSvg(sPath)} fill="none" stroke="#059669" strokeWidth={2.8} strokeLinecap="round" />
          <text x={toX(qMax * 0.85, 0, qMax)} y={toY((qMax * 0.85 - c) / d, pMin, pMax) - 8}
            fontSize={12} fill="#059669" fontWeight="bold" fontStyle="italic">S</text>

          {pEq >= pMin && pEq <= pMax && qEq >= 0 && qEq <= qMax && (
            <g>
              <line x1={toX(qEq, 0, qMax)} y1={toY(pEq, pMin, pMax)} x2={toX(qEq, 0, qMax)} y2={PT + cH}
                stroke="#4338ca" strokeWidth={1.5} strokeDasharray="4,3" />
              <line x1={PL} y1={toY(pEq, pMin, pMax)} x2={toX(qEq, 0, qMax)} y2={toY(pEq, pMin, pMax)}
                stroke="#4338ca" strokeWidth={1.5} strokeDasharray="4,3" />
              <circle cx={toX(qEq, 0, qMax)} cy={toY(pEq, pMin, pMax)} r={7} fill="#4338ca" />
              <circle cx={toX(qEq, 0, qMax)} cy={toY(pEq, pMin, pMax)} r={4} fill="white" />
              <text x={toX(qEq, 0, qMax) + 10} y={toY(pEq, pMin, pMax) - 8}
                fontSize={11} fill="#4338ca" fontWeight="bold">E*</text>
            </g>
          )}
        </svg>

        <div className="graph-controls">
          <SliderControl label="Reddito consumatori" symbol="R"
            value={reddito} min={20} max={80} step={1}
            onChange={setReddito} color="#0284c7"
            fmt={v => v.toFixed(0)} />
          <SliderControl label="Costo del grano" symbol="W"
            value={costoGrano} min={10} max={60} step={1}
            onChange={setCostoGrano} color="#059669"
            fmt={v => v.toFixed(0)} />
          <div className="result-box">
            <div className="result-row"><span>Prezzo equilibrio P*</span><span style={{ color: '#4338ca' }}>€ {pEq.toFixed(2)}</span></div>
            <div className="result-row"><span>Quantità eq. Q*</span><span style={{ color: '#4338ca' }}>{qEq.toFixed(1)}</span></div>
          </div>
          <div className="insight-mini">
            <strong>Variabili esogene (input):</strong> reddito e costo grano.<br />
            <strong>Endogene (output):</strong> P* e Q*. Un aumento del reddito sposta la domanda a destra; un aumento del costo del grano sposta l'offerta a sinistra.
          </div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAFICO 3 — Prezzi Flessibili vs Rigidi
// ══════════════════════════════════════════════════════════════
function PriceFlexRigidGraph() {
  const [shockD, setShockD] = useState(0);  // -10 … +10 shift demand
  const [rigidity, setRigidity] = useState(0.5); // 0 flex … 1 rigid

  // Baseline eq: P=20, Q=20. Demand shift changes P and Q depending on rigidity.
  // Flessibile: tutto P si aggiusta. Rigido: tutta Q si aggiusta.
  const shiftAmount = shockD;
  const pBase = 20, qBase = 20;

  const pNew = pBase + shiftAmount * (1 - rigidity) * 0.5;
  const qNew = qBase + shiftAmount * rigidity * 1.0;

  const qMax = 50, pMin = 0, pMax = 50;

  // Curve domanda shiftata: Qd = 40 + shift - P  → P = 40 + shift - Q
  // Curve offerta fissa: P = 20 + (Q - 20) * 0.5 ... semplice linea
  const dPath0 = [];
  const dPath1 = [];
  const sPath = [];
  for (let q = 0; q <= qMax; q += 0.5) {
    dPath0.push([q, 40 - q]);
    dPath1.push([q, 40 + shiftAmount - q]);
    sPath.push([q, 10 + q * 0.5]);
  }

  const toSvg = (pts) => `M${pts.filter(([q, p]) => p >= pMin && p <= pMax).map(([q, p]) => `${toX(q, 0, qMax).toFixed(1)},${toY(p, pMin, pMax).toFixed(1)}`).join('L')}`;

  return (
    <div className="graph-block">
      <div className="graph-title">Grafico 3 — Prezzi flessibili vs rigidi: risposta a uno shock di domanda</div>
      <div className="graph-row">
        <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: '100%' }}>
          <Axes xMin={0} xMax={qMax} yMin={pMin} yMax={pMax}
            xLabel="Q" yLabel="P" nX={5} nY={5}
            xFmt={v => v.toFixed(0)} yFmt={v => v.toFixed(0)} />

          <path d={toSvg(dPath0)} fill="none" stroke="#94a3b8" strokeWidth={1.8} strokeDasharray="5,3" />
          <text x={toX(qMax * 0.8, 0, qMax)} y={toY(40 - qMax * 0.8, pMin, pMax) - 6} fontSize={10} fill="#94a3b8" fontStyle="italic">D₀</text>

          <path d={toSvg(dPath1)} fill="none" stroke="#0284c7" strokeWidth={2.8} strokeLinecap="round" />
          <text x={toX(qMax * 0.85, 0, qMax)} y={toY(40 + shiftAmount - qMax * 0.85, pMin, pMax) - 8} fontSize={12} fill="#0284c7" fontWeight="bold" fontStyle="italic">D₁</text>

          <path d={toSvg(sPath)} fill="none" stroke="#059669" strokeWidth={2.8} strokeLinecap="round" />
          <text x={toX(qMax * 0.85, 0, qMax)} y={toY(10 + qMax * 0.85 * 0.5, pMin, pMax) - 8} fontSize={12} fill="#059669" fontWeight="bold" fontStyle="italic">S</text>

          {/* vecchio equilibrio */}
          <circle cx={toX(qBase, 0, qMax)} cy={toY(pBase, pMin, pMax)} r={5} fill="#94a3b8" />
          <text x={toX(qBase, 0, qMax) - 8} y={toY(pBase, pMin, pMax) - 8} fontSize={10} fill="#94a3b8" fontWeight="bold">E₀</text>

          {/* nuovo equilibrio */}
          <circle cx={toX(qNew, 0, qMax)} cy={toY(pNew, pMin, pMax)} r={7} fill="#4338ca" />
          <circle cx={toX(qNew, 0, qMax)} cy={toY(pNew, pMin, pMax)} r={4} fill="white" />
          <text x={toX(qNew, 0, qMax) + 8} y={toY(pNew, pMin, pMax) - 8} fontSize={11} fill="#4338ca" fontWeight="bold">E₁</text>
        </svg>

        <div className="graph-controls">
          <SliderControl label="Shock di domanda" symbol="ΔD"
            value={shockD} min={-10} max={10} step={0.5}
            onChange={setShockD} color="#0284c7"
            fmt={v => v >= 0 ? `+${v.toFixed(1)}` : v.toFixed(1)} />
          <SliderControl label="Rigidità prezzi" symbol="r"
            value={rigidity} min={0} max={1} step={0.05}
            onChange={setRigidity} color="#dc2626"
            fmt={v => v < 0.33 ? 'flessibili' : v < 0.66 ? 'intermedi' : 'rigidi'} />
          <div className="result-box">
            <div className="result-row"><span>ΔP</span><span style={{ color: '#0284c7' }}>{(pNew - pBase).toFixed(2)}</span></div>
            <div className="result-row"><span>ΔQ</span><span style={{ color: '#059669' }}>{(qNew - qBase).toFixed(2)}</span></div>
          </div>
          <div className="insight-mini">
            Con <strong>prezzi flessibili</strong> (lungo periodo), lo shock si scarica sul prezzo.<br />
            Con <strong>prezzi rigidi</strong> (breve periodo), si scarica sulla quantità e genera fluttuazioni dell'occupazione.
          </div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  PAGINA PRINCIPALE — Capitolo 1
// ══════════════════════════════════════════════════════════════
export default function Cap1_Macroeconomia() {
  return (
    <div className="macro-page">

      <div className="macro-header">
        <div className="chapter-badge">Capitolo 1 · La macroeconomia come scienza</div>
        <h1 className="macro-title">
          <span className="gradient-text">La macroeconomia</span><br />come scienza
        </h1>
        <p className="macro-subtitle">
          <em>"Io non cerco mai di sapere nel presente, ciò che non posso sapere."</em> — Albert Einstein
        </p>
      </div>

      {/* ── Introduzione ─────────────────────────────────── */}
      <section className="macro-section">
        <h2 className="section-title">Introduzione</h2>
        <div className="prose">
          <p>
            La macroeconomia è la branca della scienza economica che studia il comportamento dell'economia nel suo insieme, vale a dire l'insieme di tutti quegli eventi economici che riguardano la collettività e che incidono sulla vita quotidiana di ciascuno di noi. Quando parliamo di disoccupazione che cresce, di inflazione che eroda il potere d'acquisto dei salari, di tassi d'interesse che si alzano rendendo più costosi i mutui e i prestiti, di recessioni che mandano intere imprese in crisi, stiamo parlando di fenomeni macroeconomici. A differenza della microeconomia, che analizza le scelte di singoli agenti come consumatori e imprese, la macroeconomia adotta una prospettiva aggregata e cerca di spiegare come le grandezze totali dell'economia si muovono insieme e interagiscono tra loro.
          </p>
          <p>
            Questa disciplina tenta di dare risposta a domande di grandissima portata pratica: perché alcuni paesi sperimentano forti crescite del reddito e altri ristagnano per decenni? Perché il costo della vita aumenta rapidamente in certi periodi e resta stabile in altri? Perché, anche nelle economie più ricche, tanta gente non riesce a trovare un lavoro? Perché le recessioni arrivano ciclicamente e cosa può fare lo Stato per mitigarne gli effetti? Comprendere i meccanismi che guidano queste dinamiche è un esercizio intellettuale affascinante, ma è soprattutto una conoscenza civica indispensabile, perché le scelte di politica economica decise dai governi e dalle banche centrali plasmano direttamente la ricchezza, l'occupazione e il benessere di milioni di persone.
          </p>
        </div>
      </section>

      {/* ── 1.1 ─────────────────────────────────────────── */}
      <section className="macro-section">
        <h2 className="section-title">1.1 Che cosa studia la macroeconomia</h2>
        <div className="prose">
          <p>
            Lo studio della macroeconomia ha una lunga tradizione ed è particolarmente importante perché le persone vogliono sapere che cosa sta accadendo all'economia e perché succede. Perché durante alcuni periodi i prezzi aumentano rapidamente mentre in altri tendono a stabilizzarsi, e perché il prodotto interno cresce in certi anni mentre in altri cade? Perché la disoccupazione raggiunge livelli così alti e perché non tutti i paesi godono della stessa ricchezza? Il macroeconomista cerca di rispondere a queste domande offrendo spiegazioni sistematiche dei fenomeni aggregati, e lo fa usando un insieme di strumenti concettuali e statistici affinato nel corso di oltre un secolo.
          </p>
          <p>
            Il macroeconomista si occupa così della determinazione del reddito di un'economia e della sua distribuzione tra consumo, risparmio e investimento; del livello dei prezzi e della sua evoluzione nel tempo, che prende il nome di inflazione; dei tassi d'interesse che rappresentano il prezzo del denaro; della bilancia commerciale che misura il saldo tra esportazioni e importazioni; dei tassi di cambio tra monete; del livello di deficit e di debito pubblico che riflette lo stato delle finanze statali; e naturalmente della disoccupazione, che costituisce uno dei temi più sensibili perché incide direttamente sulle vite delle persone. Le variabili macroeconomiche rappresentano quindi lo specchio sintetico dell'intera attività produttiva e finanziaria di un paese, e il loro studio permette di capire se l'economia sta andando bene o male e di intervenire per correggere eventuali squilibri.
          </p>
          <p>
            Ogni giorno i media raccontano notizie che riguardano queste variabili: un rapporto sull'occupazione che mostra la creazione di nuovi posti di lavoro, una comunicazione della banca centrale sull'andamento dell'inflazione, un aggiornamento sulla crescita del prodotto interno lordo, una previsione sul debito pubblico. Questi dati non sono numeri astratti, ma indicatori che condizionano il benessere di tutti noi, perché un'economia che cresce genera occupazione e reddito, mentre una che ristagna o entra in recessione trascina con sé licenziamenti, fallimenti e disagio sociale. La storia economica è costellata di episodi in cui scelte macroeconomiche errate hanno avuto conseguenze drammatiche, come la Grande Depressione degli anni Trenta, oppure in cui scelte lungimiranti hanno permesso a intere nazioni di prosperare, come nel caso del boom del secondo dopoguerra.
          </p>
        </div>

        <div className="formula-box">
          <div className="formula-label">Variabili macroeconomiche fondamentali</div>
          <div className="formula-main">Y · P · u · i · NX · e</div>
          <div className="formula-note">
            Prodotto interno lordo (Y), livello dei prezzi e inflazione (P), tasso di disoccupazione (u), tasso d'interesse (i), bilancia commerciale (NX), tasso di cambio (e).
          </div>
        </div>

        <div className="prose">
          <h3 style={{ marginTop: '1.5rem' }}>Analisi di un caso: l'andamento dell'economia statunitense</h3>
          <p>
            Per mostrare concretamente di che cosa parla il macroeconomista, conviene guardare all'economia di un grande paese e seguirne l'evoluzione nel tempo. L'esempio tipico è quello degli Stati Uniti, la principale economia mondiale, della quale disponiamo di serie storiche lunghe e di qualità elevata. Osservando l'andamento del prodotto interno lordo reale statunitense dagli anni Cinquanta a oggi si nota una tendenza complessivamente crescente, interrotta da periodi di rallentamento o di contrazione chiamati recessioni: le fasi recessive compaiono nel grafico come aree grigie più scure, e corrispondono a momenti in cui il PIL reale si è ridotto rispetto al periodo precedente. Si riconoscono le recessioni degli anni Settanta legate agli shock petroliferi, quella dei primi anni Ottanta causata dalla stretta monetaria di Paul Volcker per abbattere l'inflazione, quella dei primi anni Novanta, quella del 2001 seguita allo scoppio della bolla delle dot-com, e soprattutto la Grande Recessione del 2008-2009 e la violenta recessione da Covid del 2020.
          </p>
        </div>

        <BusinessCycleGraph />

        <div className="prose">
          <p>
            L'inflazione, misurata dalla variazione percentuale dei prezzi al consumo, ha a sua volta conosciuto diverse stagioni. Dopo una fase di stabilità negli anni Sessanta, gli Stati Uniti sperimentarono un'inflazione a due cifre negli anni Settanta, legata agli shock petroliferi ma anche a politiche monetarie accomodanti. Negli anni Ottanta il presidente della Federal Reserve Paul Volcker decise una stretta monetaria durissima che abbatté l'inflazione al costo di una recessione severa. Dagli anni Novanta l'inflazione rimase bassa e stabile per circa un trentennio, salvo poi risalire bruscamente nel 2021 e 2022 sotto la spinta della pandemia, dei colli di bottiglia nelle catene di fornitura e del successivo conflitto in Ucraina. La stessa disoccupazione segue un andamento tipicamente ciclico: sale nelle fasi di recessione e scende nelle espansioni, ma intorno a un livello di lungo periodo, chiamato tasso naturale di disoccupazione, che dipende dalle caratteristiche strutturali del mercato del lavoro.
          </p>
          <p>
            Incrociando queste serie storiche diventa chiaro un messaggio fondamentale: le principali variabili macroeconomiche si muovono insieme, sono correlate e si influenzano reciprocamente. Una recessione tende a ridurre l'inflazione e a far salire la disoccupazione; una ripresa produce l'andamento opposto. Capire il perché di questi co-movimenti, quando siano inevitabili e quando invece la politica economica possa modificarli, è proprio il compito principale della macroeconomia.
          </p>
        </div>
      </section>

      {/* ── 1.2 ─────────────────────────────────────────── */}
      <section className="macro-section">
        <h2 className="section-title">1.2 Come si ragiona in economia</h2>
        <div className="prose">
          <p>
            Per delineare ipotesi utili allo studio dei grandi fenomeni economici, gli economisti costruiscono strumenti semplificati della realtà chiamati modelli. Un modello è una rappresentazione stilizzata di un fenomeno, che mantiene gli elementi essenziali trascurando ciò che non è rilevante per la domanda a cui si vuole rispondere. Un modello non è la realtà nella sua pienezza, ma una mappa utile a capirla, esattamente come una cartina geografica non è il territorio ma lo rappresenta in modo semplificato. Come scrisse lo statistico George Box, <em>"tutti i modelli sono sbagliati, ma alcuni sono utili"</em>: l'arte del buon economista consiste proprio nel costruire modelli sufficientemente semplici da essere trattabili, ma sufficientemente ricchi da catturare ciò che conta.
          </p>

          <h3 style={{ marginTop: '1.5rem' }}>La costruzione di modelli tramite la teoria</h3>
          <p>
            Nell'enfatizzare ciò che il modello mantiene e ciò che esclude, gli economisti esprimono con linguaggio rigoroso le ipotesi sulla relazione tra diverse grandezze. Un modello è composto da variabili endogene, che sono determinate all'interno del modello stesso, e da variabili esogene, che sono invece assunte come date e provengono dall'esterno. Nella terminologia di uso comune, le variabili esogene sono gli input del modello, mentre le variabili endogene sono gli output. Il compito del modello è descrivere con chiarezza come le variabili esogene agiscono sulle endogene, chiarendo i canali attraverso cui una variazione in un input determina una variazione in un output.
          </p>
          <p>
            Un esempio di uso quotidiano è il mercato della pizza. La variabile che vogliamo spiegare è il prezzo della pizza, che è una variabile endogena, e ricorriamo per questo a una classica costruzione domanda-offerta. Dal lato della domanda ipotizziamo che la quantità domandata di pizza dipenda negativamente dal suo prezzo e positivamente dal reddito aggregato dei consumatori; dal lato dell'offerta ipotizziamo che la quantità offerta aumenti al crescere del prezzo e si riduca al crescere del prezzo dei fattori produttivi come il grano. Tutte le variabili diverse dal prezzo della pizza vengono assunte come date, cioè esogene al modello: reddito e costo del grano sono quindi gli input, mentre prezzo e quantità di equilibrio sono gli output. L'equilibrio è determinato dal punto d'incontro tra domanda e offerta, ossia dal prezzo che uguaglia le quantità scambiate da venditori e acquirenti.
          </p>
        </div>

        <div className="formula-box secondary">
          <div className="formula-label">Struttura di un modello economico</div>
          <div className="formula-main">Y = f(X<sub>1</sub>, X<sub>2</sub>, ..., X<sub>n</sub>)</div>
          <div className="formula-note">
            Y: variabile endogena (es. prezzo di equilibrio, quantità prodotta).<br />
            X<sub>i</sub>: variabili esogene (es. reddito, costo dei fattori, aspettative).
          </div>
        </div>

        <PizzaMarketGraph />

        <div className="prose">
          <h3 style={{ marginTop: '1.5rem' }}>Mercati ed equilibrio di mercato</h3>
          <p>
            Nell'esempio della pizza, domanda e offerta definiscono insieme un mercato, cioè un gruppo di compratori e venditori interessati a scambiare un particolare bene. Il mercato è caratterizzato da un prezzo, e l'equilibrio di mercato è la situazione in cui il prezzo fa incontrare esattamente la quantità domandata e quella offerta, così che tutti coloro che vogliono comprare al prezzo di mercato possano farlo e tutti coloro che vogliono vendere possano farlo a loro volta. Se il prezzo è troppo alto avremo eccesso di offerta perché i venditori offriranno più di quanto i compratori desiderino, mentre se è troppo basso avremo eccesso di domanda con code e scaffali vuoti; i meccanismi di aggiustamento del prezzo riportano entrambe le situazioni verso l'equilibrio.
          </p>
          <p>
            I mercati possono essere caratterizzati da condizioni molto diverse. I mercati perfettamente competitivi presuppongono molti acquirenti e molti venditori, prodotti omogenei e libertà di entrata e uscita, cosicché nessun singolo operatore può influenzare il prezzo. Gli equilibri di concorrenza perfetta sono efficienti dal punto di vista paretiano, perché allocano le risorse in modo tale che nessuno può stare meglio senza che qualcun altro stia peggio. Dai mercati concorrenziali ci si può allontanare in varie direzioni: mercati monopolistici dominati da un solo venditore, oligopoli dove pochi operatori detengono il potere di mercato, mercati con esternalità dove l'attività di un soggetto impatta sul benessere di altri, mercati con informazione asimmetrica in cui alcuni operatori sanno più di altri. In tutti questi casi il meccanismo di prezzo non porta necessariamente a un risultato efficiente, ed è qui che si apre lo spazio per gli interventi di politica economica.
          </p>

          <h3 style={{ marginTop: '1.5rem' }}>Prezzi flessibili e rigidi</h3>
          <p>
            I modelli macroeconomici differiscono tra loro su una dimensione importante: l'ipotesi sui prezzi. I modelli neoclassici, che trattano tipicamente il lungo periodo, assumono che i prezzi siano perfettamente flessibili e si aggiustino istantaneamente per portare tutti i mercati in equilibrio. In questa prospettiva, uno shock che sposta la domanda o l'offerta genera un immediato aggiustamento dei prezzi e dei salari, senza che si verifichino disoccupazione involontaria o squilibri persistenti. I modelli keynesiani, che si applicano soprattutto al breve periodo, abbandonano questa ipotesi e ipotizzano che prezzi e salari siano rigidi, cioè si muovano lentamente: in presenza di rigidità, gli shock producono variazioni della quantità prodotta e dell'occupazione prima ancora che dei prezzi, e si generano così disoccupazione involontaria e fluttuazioni del PIL reale attorno al suo livello potenziale.
          </p>
        </div>

        <PriceFlexRigidGraph />

        <div className="prose">
          <p>
            La distinzione tra prezzi flessibili e rigidi non è soltanto teorica: riflette una differenza sostanziale tra il comportamento dell'economia nel lungo e nel breve periodo. Nel lungo periodo i prezzi hanno tempo di aggiustarsi e l'economia gravita verso il suo equilibrio di pieno impiego; nel breve periodo, invece, salari nominali fissati da contratti pluriennali, prezzi dei menù difficili da cambiare, contratti di locazione, mutui a tasso fisso e molte altre fonti di rigidità impediscono un aggiustamento immediato e lasciano spazio alle recessioni. Comprendere quando vale un'ipotesi e quando l'altra è uno dei problemi centrali della macroeconomia moderna.
          </p>

          <h3 style={{ marginTop: '1.5rem' }}>La microeconomia e i modelli macroeconomici</h3>
          <p>
            La macroeconomia non è scollegata dalla microeconomia, anzi i modelli macroeconomici moderni si costruiscono tipicamente a partire da fondamenta microeconomiche, ossia dalle scelte ottimizzanti di consumatori razionali e imprese che massimizzano i profitti. Questo approccio, detto dei microfondamenti, è emerso con forza a partire dagli anni Settanta grazie al contributo di economisti come Robert Lucas, e ha portato a una maggiore coerenza interna dei modelli, perché le relazioni tra variabili aggregate derivano direttamente dai comportamenti degli agenti individuali. L'aggregazione di molti consumatori in una funzione di consumo aggregata, o di molte imprese in una funzione di produzione aggregata, non è tuttavia banale: il passaggio dal micro al macro introduce complicazioni legate all'eterogeneità degli agenti e alla loro interazione, ed è una delle aree di ricerca più attive della disciplina contemporanea.
          </p>
        </div>
      </section>

      {/* ── 1.3 ─────────────────────────────────────────── */}
      <section className="macro-section">
        <h2 className="section-title">1.3 Perché si sono iscritti a economia alcuni premi Nobel della storia</h2>
        <div className="prose">
          <p>
            I grandi economisti della storia offrono spesso, nelle loro autobiografie e nei loro discorsi di accettazione del Nobel, testimonianze interessanti su come siano arrivati a studiare l'economia. <strong>Milton Friedman</strong>, premio Nobel 1976, spiegava di essere approdato a questa disciplina perché attratto dalla possibilità di capire come funzionassero le società e di trovare strumenti per migliorarle. <strong>Paul Samuelson</strong>, premio Nobel 1970, cominciò a interessarsi di economia quando era studente a Chicago, affascinato dal rigore analitico e dalla possibilità di applicare la matematica a problemi sociali. <strong>Robert Solow</strong>, premio Nobel 1987, raccontava come le grandi domande sulla crescita e sulla stagnazione dei paesi lo avessero spinto fin da giovane a cercare risposte quantitative.
          </p>
          <p>
            <strong>James Tobin</strong>, premio Nobel 1981, fu attratto dalla macroeconomia keynesiana degli anni Trenta, convinto che fosse possibile costruire un corpo di teoria capace di guidare le politiche pubbliche e di ridurre la disoccupazione. <strong>Robert Lucas</strong>, premio Nobel 1995, arrivò all'economia dopo aver studiato filosofia e storia, attratto dall'idea di poter applicare il metodo scientifico ai fenomeni sociali e rivoluzionò la disciplina imponendo l'approccio delle aspettative razionali. <strong>George Akerlof</strong>, premio Nobel 2001, si avvicinò all'economia attraverso l'analisi dell'informazione asimmetrica e dei mercati dei bidoni, scoprendo che piccole imperfezioni informative potevano avere conseguenze macroeconomiche drammatiche. <strong>Christopher Sims</strong>, premio Nobel 2011, trovò nell'econometria e nello studio dei cicli economici la sua vocazione, contribuendo a sviluppare metodologie statistiche oggi fondamentali. <strong>Edward Prescott</strong>, premio Nobel 2004, insieme a Finn Kydland, elaborò la teoria dei cicli economici reali, una prospettiva radicalmente diversa dal keynesismo tradizionale. <strong>Robert Shiller</strong>, premio Nobel 2013, contribuì allo studio dei prezzi degli asset e anticipò le bolle speculative, mostrando come il comportamento irrazionale dei mercati finanziari possa produrre crisi.
          </p>
          <p>
            Queste storie personali hanno in comune un elemento importante: la convinzione che l'economia non sia soltanto una disciplina tecnica ma anche una scienza civile, capace di illuminare problemi concreti e di contribuire al benessere collettivo. Le domande che queste menti si sono poste nel corso della loro carriera sono le stesse che guidano lo studio della macroeconomia oggi, e ripercorrerne le traiettorie aiuta a comprendere la vivacità e l'importanza di questa disciplina.
          </p>
        </div>
      </section>

      {/* ── 1.4 ─────────────────────────────────────────── */}
      <section className="macro-section">
        <h2 className="section-title">1.4 Il piano dell'opera</h2>
        <div className="prose">
          <p>
            Lo studio della macroeconomia si articola tradizionalmente in tre grandi blocchi tematici, corrispondenti a tre livelli di analisi che si integrano tra loro. Il primo blocco riguarda la crescita economica di lungo periodo: perché alcuni paesi diventano ricchi mentre altri restano poveri, quali sono i fattori che determinano l'accumulazione di capitale e il progresso tecnologico, come si può misurare e promuovere lo sviluppo economico nel tempo. Il modello di Solow, elaborato negli anni Cinquanta, è il punto di partenza classico di questa analisi e continua a rappresentare il riferimento concettuale per ogni discussione sulla crescita. Le estensioni successive hanno introdotto il progresso tecnologico endogeno, il capitale umano e il ruolo delle istituzioni come fattori decisivi per spiegare le enormi differenze di reddito pro capite che osserviamo tra paesi.
          </p>
          <p>
            Il secondo blocco affronta le fluttuazioni di breve periodo, ossia il ciclo economico. Le economie non crescono in modo regolare ma attraversano alternanze di espansioni e recessioni, e questi movimenti ciclici sono al centro dell'attenzione della politica economica perché determinano l'andamento dell'occupazione, del reddito e del benessere nel corso della vita delle persone. I modelli macroeconomici di breve periodo, dal modello IS-LM sviluppato da John Hicks a partire dal pensiero di Keynes, al modello Mundell-Fleming che estende l'analisi all'economia aperta, al modello di domanda e offerta aggregata, cercano di spiegare perché l'attività economica oscilla e quali fattori possano amplificare o mitigare le fluttuazioni. La curva di Phillips, che lega disoccupazione e inflazione, è uno degli strumenti analitici fondamentali per comprendere i trade-off che si pongono ai policy maker.
          </p>
          <p>
            Il terzo blocco tratta la politica macroeconomica, cioè gli interventi che lo Stato e la banca centrale possono mettere in campo per stabilizzare l'economia e favorire la crescita. La politica fiscale, attraverso spesa pubblica e tassazione, e la politica monetaria, attraverso il controllo dei tassi d'interesse e della quantità di moneta, sono gli strumenti principali a disposizione delle autorità. Il dibattito su quanto debbano essere attive queste politiche, su quali siano i loro limiti e i loro effetti collaterali, è una delle grandi controversie della macroeconomia contemporanea: le diverse scuole di pensiero, dal keynesismo tradizionale al monetarismo friedmaniano fino alla macroeconomia neoclassica e neokeynesiana moderna, offrono risposte diverse a queste domande e contribuiscono a un panorama intellettuale in continua evoluzione.
          </p>
        </div>
      </section>

      {/* ── Uno sguardo all'Italia ─────────────────────── */}
      <section className="macro-section">
        <h2 className="section-title">Uno sguardo all'Italia: l'economia italiana negli ultimi decenni</h2>
        <div className="prose">
          <p>
            L'esempio americano è istruttivo ma lontano, ed è utile calare l'analisi nel contesto italiano. Guardando al PIL reale dell'Italia dal 1995 a oggi si osserva una traiettoria di crescita meno vigorosa di quella statunitense, segnata da battute d'arresto particolarmente profonde. La Grande Recessione del 2008-2009 colpì duramente la nostra economia, e la successiva crisi del debito sovrano dell'Eurozona nel 2011-2012 provocò una seconda recessione che lasciò il PIL italiano sotto il livello pre-crisi per oltre un decennio. La pandemia del 2020 determinò una caduta del PIL senza precedenti in tempo di pace, seguita da una forte ripresa nel 2021 e 2022. Nel complesso, l'Italia ha conosciuto negli ultimi venticinque anni una crescita media molto inferiore a quella della Germania, della Francia e della media dell'area euro, un fatto che ha alimentato il dibattito sul declino italiano e sui suoi fattori strutturali.
          </p>
          <p>
            Guardando al PIL pro capite a prezzi costanti, il quadro appare ancora più severo: il reddito medio per abitante è rimasto sostanzialmente fermo per quasi vent'anni, un dato senza eguali tra le grandi economie avanzate. L'inflazione italiana, misurata dal tasso di variazione dell'IPC, ha seguito una traiettoria coerente con quella dell'Eurozona, stabilizzandosi su valori bassi per gran parte del periodo e poi risalendo bruscamente nel 2022 per effetto della crisi energetica scatenata dalla guerra in Ucraina. Il tasso di disoccupazione italiano è invece rimasto sistematicamente superiore a quello della media europea, con picchi sopra il 12% durante le recessioni e un divario particolarmente marcato tra Nord e Sud e tra uomini e donne, soprattutto tra i giovani.
          </p>
          <p>
            Questi numeri raccontano una storia di difficoltà strutturali dell'economia italiana, legate a bassa produttività, demografia in contrazione, mercato del lavoro segmentato, debito pubblico elevato e un sistema produttivo che fatica a adattarsi ai cambiamenti tecnologici globali. La macroeconomia offre gli strumenti concettuali per leggere queste dinamiche e per valutare le politiche necessarie a invertirle, ricordando che dietro ogni statistica aggregata ci sono le vite concrete di milioni di cittadini.
          </p>
        </div>
      </section>

    </div>
  );
}
