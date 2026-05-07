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
//  GRAPH 1 — TASSO NATURALE DI DISOCCUPAZIONE
//  U/L = s / (s + f)
// ══════════════════════════════════════════════════════════════
function NaturalRateGraph() {
  const [s, setS] = useState(0.013);   // tasso di separazione mensile
  const [f, setF] = useState(0.27);    // tasso di collocamento mensile

  const u = s / (s + f);

  const xMin = 0, xMax = 0.5;
  const yMin = 0, yMax = 0.25;

  // curva: per f variabile, U/L = s/(s+f) tenendo s fisso
  const pts = [];
  for (let fx = 0.01; fx <= xMax; fx += 0.005) {
    pts.push([toX(fx, xMin, xMax), toY(s / (s + fx), yMin, yMax)]);
  }
  const path = 'M ' + pts.filter(p => p[1] >= PT).map(p => p.join(',')).join(' L ');

  return (
    <div className="graph-block">
      <h4 className="graph-title">Tasso naturale di disoccupazione: U/L = s / (s + f)</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          <Axes xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax} xLabel="f (tasso collocamento mensile)" yLabel="U/L" xFmt={v => (v * 100).toFixed(0) + '%'} yFmt={v => (v * 100).toFixed(0) + '%'} />
          <path d={path} fill="none" stroke="#0ea5e9" strokeWidth={2.2} />
          {/* punto corrente */}
          <line x1={toX(f, xMin, xMax)} y1={PT + cH} x2={toX(f, xMin, xMax)} y2={toY(u, yMin, yMax)} stroke="#ef4444" strokeDasharray="3,3" strokeWidth={1.2} />
          <line x1={PL} y1={toY(u, yMin, yMax)} x2={toX(f, xMin, xMax)} y2={toY(u, yMin, yMax)} stroke="#ef4444" strokeDasharray="3,3" strokeWidth={1.2} />
          <circle cx={toX(f, xMin, xMax)} cy={toY(u, yMin, yMax)} r={6} fill="#ef4444" stroke="#fff" strokeWidth={2} />
          {/* benchmark USA: s=0.013, f=0.27 -> u≈4.6% */}
          <circle cx={toX(0.27, xMin, xMax)} cy={toY(0.013 / (0.013 + 0.27), yMin, yMax)} r={4} fill="#16a34a" stroke="#fff" strokeWidth={1.5} />
          <text x={toX(0.27, xMin, xMax) + 6} y={toY(0.013 / (0.013 + 0.27), yMin, yMax) - 6} fontSize={9} fill="#16a34a">USA ≈ 4,6%</text>
        </svg>
        <div className="graph-controls">
          <SliderControl label="Tasso di separazione mensile" symbol="s" value={s} min={0.005} max={0.05} step={0.001} onChange={setS} color="#dc2626" fmt={v => (v * 100).toFixed(2) + '%'} />
          <SliderControl label="Tasso di collocamento mensile" symbol="f" value={f} min={0.05} max={0.5} step={0.005} onChange={setF} color="#0ea5e9" fmt={v => (v * 100).toFixed(1) + '%'} />
          <div className="result-box">
            <div className="result-row"><strong>Tasso naturale U/L</strong> <span style={{ color: u > 0.1 ? '#ef4444' : u > 0.06 ? '#f59e0b' : '#16a34a' }}>{(u * 100).toFixed(2)}%</span></div>
            <div className="result-row"><strong>Durata media disocc.</strong> <span>{(1 / f).toFixed(1)} mesi</span></div>
          </div>
          <div className="insight-mini">Nel lungo periodo, ogni economia ha un tasso naturale di disoccupazione determinato dal rapporto tra il tasso di separazione s e quello di collocamento f. Negli USA s ≈ 1,3%/mese e f ≈ 27%/mese, da cui un tasso naturale del 4,6%.</div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAPH 2 — INDENNITÀ DI DISOCCUPAZIONE E TASSO NATURALE
// ══════════════════════════════════════════════════════════════
function UnemploymentInsuranceGraph() {
  const [b, setB] = useState(0.5);   // tasso sostituzione (replacement rate)
  const sBase = 0.013;
  const fBase = 0.30;

  // ipotesi: indennità più generosa allunga ricerca → riduce f e aumenta s
  const f = fBase * (1 - 0.5 * b);
  const s = sBase * (1 + 0.4 * b);
  const u = s / (s + f);

  const xMin = 0, xMax = 1;
  const yMin = 0, yMax = 0.15;

  const pts = [];
  for (let bx = 0; bx <= xMax; bx += 0.01) {
    const fx = fBase * (1 - 0.5 * bx);
    const sx = sBase * (1 + 0.4 * bx);
    pts.push([toX(bx, xMin, xMax), toY(sx / (sx + fx), yMin, yMax)]);
  }
  const path = 'M ' + pts.filter(p => p[1] >= PT).map(p => p.join(',')).join(' L ');

  return (
    <div className="graph-block">
      <h4 className="graph-title">Indennità di disoccupazione e tasso naturale</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          <Axes xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax} xLabel="b (tasso di sostituzione)" yLabel="U/L" xFmt={v => (v * 100).toFixed(0) + '%'} yFmt={v => (v * 100).toFixed(0) + '%'} />
          <path d={path} fill="none" stroke="#a855f7" strokeWidth={2.2} />
          <line x1={toX(b, xMin, xMax)} y1={PT + cH} x2={toX(b, xMin, xMax)} y2={toY(u, yMin, yMax)} stroke="#a855f7" strokeDasharray="3,3" strokeWidth={1.2} />
          <line x1={PL} y1={toY(u, yMin, yMax)} x2={toX(b, xMin, xMax)} y2={toY(u, yMin, yMax)} stroke="#a855f7" strokeDasharray="3,3" strokeWidth={1.2} />
          <circle cx={toX(b, xMin, xMax)} cy={toY(u, yMin, yMax)} r={6} fill="#a855f7" stroke="#fff" strokeWidth={2} />
          {/* indicazione USA vs Europa */}
          <circle cx={toX(0.4, xMin, xMax)} cy={toY(sBase * (1 + 0.4 * 0.4) / (sBase * (1 + 0.4 * 0.4) + fBase * (1 - 0.5 * 0.4)), yMin, yMax)} r={4} fill="#16a34a" stroke="#fff" strokeWidth={1.5} />
          <text x={toX(0.4, xMin, xMax) + 5} y={toY(sBase * (1 + 0.4 * 0.4) / (sBase * (1 + 0.4 * 0.4) + fBase * (1 - 0.5 * 0.4)), yMin, yMax) - 6} fontSize={9} fill="#16a34a">USA</text>
          <circle cx={toX(0.7, xMin, xMax)} cy={toY(sBase * (1 + 0.4 * 0.7) / (sBase * (1 + 0.4 * 0.7) + fBase * (1 - 0.5 * 0.7)), yMin, yMax)} r={4} fill="#dc2626" stroke="#fff" strokeWidth={1.5} />
          <text x={toX(0.7, xMin, xMax) + 5} y={toY(sBase * (1 + 0.4 * 0.7) / (sBase * (1 + 0.4 * 0.7) + fBase * (1 - 0.5 * 0.7)), yMin, yMax) - 6} fontSize={9} fill="#dc2626">Europa</text>
        </svg>
        <div className="graph-controls">
          <SliderControl label="Tasso di sostituzione indennità" symbol="b" value={b} min={0} max={1} step={0.02} onChange={setB} color="#a855f7" fmt={v => (v * 100).toFixed(0) + '%'} />
          <div className="result-box">
            <div className="result-row"><strong>Tasso naturale U/L</strong> <span style={{ color: u > 0.1 ? '#ef4444' : u > 0.06 ? '#f59e0b' : '#16a34a' }}>{(u * 100).toFixed(2)}%</span></div>
            <div className="result-row"><strong>Tasso collocamento f</strong> <span>{(f * 100).toFixed(1)}%</span></div>
            <div className="result-row"><strong>Tasso separazione s</strong> <span>{(s * 100).toFixed(2)}%</span></div>
          </div>
          <div className="insight-mini">Indennità più generose riducono l'intensità della ricerca di lavoro (più frizionale) e ne allungano la durata. Studi sugli USA stimano che un punto di tasso di sostituzione in più allunga di circa 0,5 settimane la durata media della disoccupazione.</div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAPH 3 — RIGIDITÀ DEL SALARIO REALE E DISOCCUPAZIONE STRUTTURALE
//  Salario fissato sopra l'equilibrio → eccesso di offerta di lavoro
// ══════════════════════════════════════════════════════════════
function WageRigidityGraph() {
  const [w, setW] = useState(1.4);   // salario reale fissato

  const xMin = 0, xMax = 10;
  const yMin = 0, yMax = 3;

  // domanda: W = 3 - 0.25 L  (decrescente)
  // offerta: W = 0.5 + 0.2 L  (crescente)
  // equilibrio: 3 - 0.25L = 0.5 + 0.2L  → L* = 2.5/0.45 ≈ 5.56, W* ≈ 1.61
  const ldOf = (lw) => Math.max(0, (3 - lw) / 0.25);
  const lsOf = (lw) => Math.max(0, (lw - 0.5) / 0.2);

  const dPts = [];
  for (let l = 0; l <= 12; l += 0.2) {
    const wv = 3 - 0.25 * l;
    if (wv >= 0 && wv <= yMax) dPts.push([toX(l, xMin, xMax), toY(wv, yMin, yMax)]);
  }
  const sPts = [];
  for (let l = 0; l <= 12; l += 0.2) {
    const wv = 0.5 + 0.2 * l;
    if (wv >= 0 && wv <= yMax) sPts.push([toX(l, xMin, xMax), toY(wv, yMin, yMax)]);
  }
  const pathD = 'M ' + dPts.map(p => p.join(',')).join(' L ');
  const pathS = 'M ' + sPts.map(p => p.join(',')).join(' L ');

  const ld = ldOf(w);
  const ls = lsOf(w);
  const gap = Math.max(0, ls - ld);

  return (
    <div className="graph-block">
      <h4 className="graph-title">Rigidità dei salari reali e disoccupazione strutturale</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          <Axes xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax} xLabel="L (lavoratori)" yLabel="W/P (salario reale)" xFmt={v => v.toFixed(0)} yFmt={v => v.toFixed(1)} />
          <path d={pathD} fill="none" stroke="#0ea5e9" strokeWidth={2.2} />
          <text x={toX(9, xMin, xMax)} y={toY(3 - 0.25 * 9, yMin, yMax) - 4} fontSize={10} fill="#0ea5e9">domanda</text>
          <path d={pathS} fill="none" stroke="#16a34a" strokeWidth={2.2} />
          <text x={toX(9, xMin, xMax)} y={toY(0.5 + 0.2 * 9, yMin, yMax) - 4} fontSize={10} fill="#16a34a">offerta</text>
          {/* salario rigido orizzontale */}
          <line x1={PL} y1={toY(w, yMin, yMax)} x2={PL + cW} y2={toY(w, yMin, yMax)} stroke="#dc2626" strokeWidth={2} strokeDasharray="6,3" />
          <text x={PL + cW - 60} y={toY(w, yMin, yMax) - 4} fontSize={10} fill="#dc2626">salario rigido</text>
          {/* punti */}
          <circle cx={toX(ld, xMin, xMax)} cy={toY(w, yMin, yMax)} r={5} fill="#0ea5e9" stroke="#fff" strokeWidth={1.5} />
          <circle cx={toX(ls, xMin, xMax)} cy={toY(w, yMin, yMax)} r={5} fill="#16a34a" stroke="#fff" strokeWidth={1.5} />
          {/* gap = disoccupazione */}
          {gap > 0 && (
            <line x1={toX(ld, xMin, xMax)} y1={toY(w, yMin, yMax) + 14} x2={toX(ls, xMin, xMax)} y2={toY(w, yMin, yMax) + 14} stroke="#ef4444" strokeWidth={2} markerEnd="url(#arr)" markerStart="url(#arr)" />
          )}
          <defs>
            <marker id="arr" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#ef4444" />
            </marker>
          </defs>
          <text x={(toX(ld, xMin, xMax) + toX(ls, xMin, xMax)) / 2} y={toY(w, yMin, yMax) + 28} textAnchor="middle" fontSize={10} fill="#ef4444">disocc. = {gap.toFixed(1)}</text>
        </svg>
        <div className="graph-controls">
          <SliderControl label="Salario reale fissato" symbol="W/P" value={w} min={0.6} max={2.5} step={0.05} onChange={setW} color="#dc2626" fmt={v => v.toFixed(2)} />
          <div className="result-box">
            <div className="result-row"><strong>Domanda di lavoro Lᴰ</strong> <span>{ld.toFixed(2)}</span></div>
            <div className="result-row"><strong>Offerta di lavoro Lˢ</strong> <span>{ls.toFixed(2)}</span></div>
            <div className="result-row"><strong>Disoccupazione strutturale</strong> <span style={{ color: gap > 0 ? '#ef4444' : '#16a34a' }}>{gap.toFixed(2)}</span></div>
          </div>
          <div className="insight-mini">Quando il salario reale è fissato sopra il livello di equilibrio (per legge di salario minimo, sindacati, salari di efficienza), l'offerta di lavoro supera la domanda: la differenza è disoccupazione strutturale.</div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAPH 4 — DURATA E PROBABILITÀ DI ESSERE DISOCCUPATI
//  Distribuzione tra "tanti episodi brevi" vs "pochi lunghi"
// ══════════════════════════════════════════════════════════════
function DurationGraph() {
  const [share, setShare] = useState(0.5); // quota di tempo passato in disocc. lunga (oltre 6 mesi)

  const xMin = 0, xMax = 24;
  const yMin = 0, yMax = 1;

  // distribuzione esponenziale tronca con peso medio dipendente da share
  // CDF: F(t) = 1 - exp(-λ t); λ controllato da share
  // share alto → λ basso → distribuzione spostata sui lunghi
  const lambda = -Math.log(1 - share) / 12;

  const pts = [];
  for (let t = 0; t <= xMax; t += 0.5) {
    const cdf = 1 - Math.exp(-lambda * t);
    pts.push([toX(t, xMin, xMax), toY(cdf, yMin, yMax)]);
  }
  const path = 'M ' + pts.map(p => p.join(',')).join(' L ');

  // share esp 6+ mesi
  const shortShare = 1 - Math.exp(-lambda * 6);
  const longShare = Math.exp(-lambda * 6);

  return (
    <div className="graph-block">
      <h4 className="graph-title">Distribuzione della durata della disoccupazione (CDF)</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          <Axes xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax} xLabel="durata (mesi)" yLabel="P(durata ≤ t)" xFmt={v => v.toFixed(0)} yFmt={v => v.toFixed(1)} />
          <path d={path} fill="none" stroke="#f59e0b" strokeWidth={2.2} />
          {/* soglia 6 mesi */}
          <line x1={toX(6, xMin, xMax)} y1={PT} x2={toX(6, xMin, xMax)} y2={PT + cH} stroke="#dc2626" strokeWidth={1} strokeDasharray="3,3" />
          <text x={toX(6, xMin, xMax) + 4} y={PT + 14} fontSize={10} fill="#dc2626">6 mesi</text>
          <circle cx={toX(6, xMin, xMax)} cy={toY(shortShare, yMin, yMax)} r={5} fill="#f59e0b" stroke="#fff" strokeWidth={1.5} />
          <text x={toX(6, xMin, xMax) + 6} y={toY(shortShare, yMin, yMax) + 4} fontSize={10} fill="#f59e0b">{(shortShare * 100).toFixed(0)}%</text>
        </svg>
        <div className="graph-controls">
          <SliderControl label="Quota tempo in disocc. di lunga durata" symbol="share" value={share} min={0.1} max={0.9} step={0.02} onChange={setShare} color="#f59e0b" fmt={v => (v * 100).toFixed(0) + '%'} />
          <div className="result-box">
            <div className="result-row"><strong>Durata ≤ 6 mesi</strong> <span>{(shortShare * 100).toFixed(1)}%</span></div>
            <div className="result-row"><strong>Durata &gt; 6 mesi</strong> <span style={{ color: longShare > 0.4 ? '#ef4444' : '#f59e0b' }}>{(longShare * 100).toFixed(1)}%</span></div>
          </div>
          <div className="insight-mini">La maggior parte degli episodi di disoccupazione sono brevi, ma la maggior parte del tempo totale di disoccupazione è dovuto a pochi episodi lunghi. Questo è il "paradosso della durata" della disoccupazione.</div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  PAGE
// ══════════════════════════════════════════════════════════════
export default function Cap7_Disoccupazione() {
  return (
    <div className="macro-page">
      <header className="macro-header">
        <div className="chapter-badge">CAPITOLO 7</div>
        <h1 className="macro-title gradient-text">La disoccupazione</h1>
        <p className="macro-subtitle">
          «Un uomo che ha perduto il lavoro ma non riesce a trovare lavoro è forse le spettacolo più triste che la disoccupazione della società moderna possa riservarci.» — Thomas Carlyle, <em>Chartism</em>
        </p>
      </header>

      <section className="macro-section">
        <h2 className="section-title">Introduzione</h2>
        <div className="prose">
          <p>
            La disoccupazione è, probabilmente, il problema macroeconomico che colpisce di più direttamente i singoli individui in modo immediato. La perdita del lavoro comporta, oltre a un onere psicologico, una drastica riduzione del tenore di vita. In molti casi, la disoccupazione causa anche una sensazione di perdita di valore personale, nella vita degli individui senza lavoro. Non sorprende quindi che la disoccupazione sia spesso un argomento centrale della politica e che i politici spesso rivendichino di avere programmi di intervento atti ad incrementare l'occupazione, ovvero a ridurre il numero dei disoccupati.
          </p>
          <p>
            Gli economisti studiano la disoccupazione per individuarne le cause e definire le misure di politica economica che la possono ridurre. Tale analisi, presentata in questo capitolo, è collegata anche ad altre questioni importanti dei capitoli precedenti, quali la determinazione del PIL e la teoria della crescita economica. La disoccupazione delle risorse di una società genera infatti un livello del PIL che è inferiore a quello potenzialmente raggiungibile.
          </p>
          <p>
            Gli economisti studiano la disoccupazione anche per individuarne le cause e definire le misure di politica economica capaci di ridurla. Per spiegare la presenza della disoccupazione, in questo capitolo distinguiamo fra il <strong>tasso naturale di disoccupazione</strong>, che è la percentuale della forza lavoro che si trova in stato di disoccupazione nelle condizioni di equilibrio della relazione tra domanda e offerta di lavoro, e le fluttuazioni della disoccupazione attorno al tasso naturale. Il tasso naturale di disoccupazione è il valore al quale un sistema economico tende nel lungo periodo, date tutte le imperfezioni del mercato del lavoro che impediscono ad alcuni lavoratori di trovare immediatamente un posto di lavoro.
          </p>
          <p>
            Per quanto riguarda l'analisi della disoccupazione, in questo capitolo vediamo come si genera il tasso naturale di disoccupazione: spieghiamo perché alcune economie hanno sempre dei lavoratori senza lavoro e perché il tasso naturale varia tra paese e paese e nel tempo. Cominceremo con introdurre il <strong>tasso naturale di disoccupazione</strong>. Nella Sezione 7.2, esamineremo la <strong>disoccupazione frizionale</strong>, che è il tempo necessario perché i lavoratori si spostino da un'occupazione ad un'altra. Nella Sezione 7.3 considereremo la <strong>disoccupazione strutturale</strong>, che è dovuta alla rigidità dei salari reali. Nelle Sezioni 7.4 e 7.5 esamineremo le esperienze degli Stati Uniti e dell'Europa. Concludiamo, infine, il capitolo guardando a come si è evoluta la disoccupazione, in tempi di crisi economica e nei tempi più recenti.
          </p>
        </div>
      </section>

      <section className="macro-section">
        <h2 className="section-title">7.1 Perdere il lavoro, trovare il lavoro e il tasso naturale di disoccupazione</h2>
        <div className="prose">
          <p>
            Ogni giorno alcune persone che lavorano vengono licenziate o lasciano volontariamente il loro posto di lavoro; al tempo stesso alcune persone disoccupate trovano un nuovo posto di lavoro. Questo continuo flusso in entrata e in uscita dalle condizioni di occupazione determina la percentuale della forza lavoro che si trova in stato di disoccupazione. La nostra prima preoccupazione è quella di sviluppare un modello della dinamica della forza lavoro per spiegare cosa determina il tasso naturale di disoccupazione.
          </p>
          <p>
            Cominciamo con introdurre alcuni nuovi notazioni. Sia <em>L</em> la forza lavoro, <em>E</em> il numero di occupati e <em>U</em> il numero di disoccupati. Poiché ogni individuo è o occupato o disoccupato, la forza lavoro è la somma di occupati e disoccupati:
          </p>
        </div>

        <div className="formula-box">
          <div>L = E + U</div>
          <div style={{ fontSize: '0.88rem', marginTop: '0.4rem', color: '#64748b' }}>
            Forza lavoro = Occupati + Disoccupati. Il tasso di disoccupazione è la quota U/L, espressa in percentuale.
          </div>
        </div>

        <div className="prose">
          <p>
            Per individuare le determinanti del tasso di disoccupazione, supponiamo che la forza lavoro <em>L</em> sia data e si concentri sulle transizioni dei lavoratori tra le due condizioni di occupazione e disoccupazione. La <strong>Figura 7.1</strong> mostra l'andamento di queste transizioni: alcuni occupati perdono il proprio lavoro e diventano disoccupati, mentre alcuni disoccupati trovano lavoro e diventano occupati.
          </p>
          <p>
            Sia <em>s</em> il <strong>tasso di separazione</strong>, ovvero la frazione degli occupati che perde il lavoro ogni mese (passa da E a U). Sia <em>f</em> il <strong>tasso di collocamento</strong>, ovvero la frazione dei disoccupati che trova un nuovo lavoro ogni mese (passa da U a E). Insieme, i due tassi <em>s</em> e <em>f</em> determinano il tasso di disoccupazione di equilibrio.
          </p>
          <p>
            Supponiamo che il mercato del lavoro sia in uno stato stazionario (<em>steady state</em>): il tasso di disoccupazione non cresce né diminuisce nel tempo. Questa è la situazione in cui il numero di persone che entrano in disoccupazione (sf), eguaglia il numero di persone che escono dalla disoccupazione (fU). In stato stazionario:
          </p>
        </div>

        <div className="formula-box">
          <div>s · E = f · U</div>
          <div style={{ fontSize: '0.88rem', marginTop: '0.4rem', color: '#64748b' }}>
            Flusso in entrata della disoccupazione = Flusso in uscita. Sostituendo E = L − U e dividendo per L si ottiene:
          </div>
        </div>

        <div className="formula-box secondary">
          <div>U/L = s / (s + f)</div>
          <div style={{ fontSize: '0.88rem', marginTop: '0.4rem', color: '#64748b' }}>
            Il tasso naturale di disoccupazione dipende positivamente dal tasso di separazione s e negativamente dal tasso di collocamento f. Qualunque politica economica che riesca a ridurre s o ad aumentare f riduce il tasso naturale di disoccupazione.
          </div>
        </div>

        <div className="prose">
          <p>
            Questa equazione mostra che il tasso naturale di disoccupazione dipende dai tassi di separazione e di collocamento. Più alto il tasso di separazione, più alto il tasso naturale; più alto il tasso di collocamento, più basso il tasso naturale. Per esempio, se ogni mese l'1% degli occupati perde il proprio lavoro (s = 0,013) e il 27% dei disoccupati trova lavoro (f = 0,27), il tasso naturale di disoccupazione è:
          </p>
        </div>

        <div className="formula-box secondary">
          <div>U/L = 0,013 / (0,013 + 0,27) ≈ 0,046 = 4,6%</div>
        </div>

        <div className="prose">
          <p>
            Possiamo utilizzare questa equazione per analizzare le politiche di intervento sulla disoccupazione. Una politica per ridurre il tasso naturale di disoccupazione deve agire sul tasso di separazione s o sul tasso di collocamento f. Possiamo quindi chiederci che cosa rende così bassi questi tassi, in modo da considerare i programmi di intervento atti a determinarne ulteriori riduzioni. Possiamo distinguere due tipi di disoccupazione: la <strong>frizionale</strong> e la <strong>strutturale</strong>.
          </p>
        </div>

        <NaturalRateGraph />
      </section>

      <section className="macro-section">
        <h2 className="section-title">7.2 La ricerca di lavoro e la disoccupazione frizionale</h2>
        <div className="prose">
          <p>
            Una delle ragioni per cui esiste la disoccupazione è che ci vuole tempo perché i lavoratori e i posti di lavoro vacanti possano incontrarsi. Il modello di equilibrio del mercato del lavoro che abbiamo studiato nel Capitolo 3 ipotizza che tutti i lavoratori e tutti i posti di lavoro siano identici e quindi tutti i lavoratori sono ugualmente adatti a tutti i posti. Se ciò fosse vero, e il mercato del lavoro fosse in equilibrio, perdere il proprio posto di lavoro non implicherebbe alcuna conseguenza per il singolo lavoratore. Un lavoratore non occupato potrebbe trovare immediatamente un nuovo posto identico a quello perduto e con le stesse caratteristiche.
          </p>
          <p>
            Tuttavia, nella realtà, lavoratori e lavori differiscono per molti aspetti. Le caratteristiche dei posti di lavoro disponibili sono diverse: alcuni implicano salari elevati, altri salari ridotti, alcuni sono solo a tempo parziale, altri a tempo pieno, alcuni richiedono certi requisiti di formazione e altri meno. Anche le caratteristiche dei lavoratori sono molto diverse: differiscono per attitudini, capacità, esperienza, livello di formazione, preferenze di gusto. Inoltre, non sempre lavoratori e datori di lavoro hanno tutte le informazioni necessarie sui rispettivi posti di lavoro e candidati. Il flusso di informazioni nel mercato del lavoro è imperfetto e i lavoratori si spostano sul territorio nazionale in misura limitata.
          </p>
          <p>
            La disoccupazione causata dal tempo che i lavoratori impiegano per cercare un nuovo posto di lavoro è chiamata <strong>disoccupazione frizionale</strong>. Alcuni lavoratori disoccupati per via frizionale stanno cercando un posto di lavoro adatto alle loro capacità e ai loro gusti, alcuni sono semplicemente in transito da un lavoro a un altro. Per ridurre il tempo necessario per la ricerca di un nuovo lavoro, alcuni paesi forniscono servizi pubblici di collocamento e di formazione professionale.
          </p>

          <h3>Le cause della disoccupazione frizionale</h3>
          <p>
            In un sistema economico in continua evoluzione esiste sempre una certa percentuale di disoccupazione frizionale. Cambiamenti nella composizione della domanda tra industrie e regioni causano sempre qualche disoccupazione frizionale. Si pensi a un cambiamento nella domanda dei consumatori che riduce la domanda per i prodotti dei produttori di X e aumenta la domanda per i prodotti dei produttori di Y. I lavoratori del settore X perdono il loro lavoro ed escono dalla forza lavoro o cercano un lavoro nel settore Y, mentre nuovi lavoratori vengono assunti nel settore Y. Questa transizione comporta inevitabilmente un periodo transitorio di disoccupazione frizionale.
          </p>
          <p>
            Inoltre, poiché diversi settori delle economie si espandono in tempi differenti, il termine <strong>cambiamenti settoriali</strong> denota i cambiamenti nella composizione delle domande tra industrie e regioni. Poiché i cambiamenti settoriali avvengono di continuo, e poiché i lavoratori richiedono tempo per cambiare settore, esiste sempre un certo livello di disoccupazione frizionale.
          </p>
          <p>
            Altri eventi nelle politiche, oltre i cambiamenti settoriali, conducono alla disoccupazione frizionale. In aggiunta, i lavoratori possono perdere il lavoro quando le loro imprese falliscono, quando le loro performance lavorative non vengono giudicate adeguate, o quando le abilità di cui dispongono non sono più necessarie. I lavoratori abbandonano spontaneamente il loro lavoro per trovarsi un'altra occupazione che meglio si adatti alle loro caratteristiche. Tutti questi eventi richiedono che il lavoratore in mobilità si trovi una nuova occupazione coerente con le sue caratteristiche. Le imprese stesse, in modo sostanzialmente simile, devono identificare nuovi candidati per occupare le loro posizioni vacanti. Indipendentemente dalla ragione dello spostamento, ci vuole tempo prima che si possano stipulare nuovi contratti di lavoro.
          </p>

          <h3>La politica economica e la disoccupazione frizionale</h3>
          <p>
            Molti interventi di politica economica sono volti a ridurre il tasso naturale di disoccupazione tramite una riduzione della disoccupazione frizionale. Gli uffici di collocamento permettono di mettere in contatto in modo più efficiente i posti di lavoro disponibili con la forza lavoro disponibile. I programmi di formazione tendono ad accrescere la capacità di trovare un posto di lavoro o ad agevolare la transizione di lavoratori da settori in declino a settori in espansione. Se questi programmi riescono nei loro obiettivi, dovrebbero abbassare il tasso naturale di disoccupazione.
          </p>
          <p>
            Altri interventi di politica economica, sebbene di solito perseguano fini diversi, contribuiscono inavvertitamente ad accrescere la disoccupazione frizionale. Tra questi vi è l'<strong>indennità di disoccupazione</strong>. In linea di principio, l'indennità di disoccupazione consente ai lavoratori che perdono il loro lavoro di mantenere parte del loro reddito per un periodo di tempo, indipendentemente dalla causa dello spostamento. Pur con tale beneficio, alcuni studi indicano che l'indennità di disoccupazione tende ad aumentare il tasso naturale di disoccupazione, perché riduce la spinta dei lavoratori disoccupati ad accettare offerte di lavoro relativamente meno attraenti rispetto al loro lavoro precedente.
          </p>
        </div>

        <div className="callout callout-case">
          <h4>ANALISI DI UN CASO — L'indennità di disoccupazione e il tasso di collocamento al lavoro</h4>
          <p>
            Gli effetti dell'assicurazione contro la disoccupazione sulla ricerca di lavoro da parte degli individui rimasti disoccupati sono stati oggetto di numerosi studi. Gli studi più convincenti sfruttano dati che, anziché caratterizzare semplicemente le persone che ricevono i benefici, registrano i diversi atteggiamenti dei lavoratori, e in particolare il tempo necessario per ottenere un nuovo lavoro. Questo tempo è correlato al tipo di indennità di disoccupazione percepita: chi riceve un'indennità più generosa, in genere, impiega più tempo per trovare un nuovo lavoro.
          </p>
          <p>
            Una serie di lavori ha dimostrato in modo convincente che l'indennità di disoccupazione fa aumentare la durata della disoccupazione. La gran parte degli studi suggerisce che, se le indennità di disoccupazione fossero meno generose, la durata della disoccupazione si ridurrebbe e dunque si ridurrebbe anche il tasso di disoccupazione. È poi possibile che il lavoratore venga assunto al nuovo lavoro più velocemente. In definitiva, la prospettiva di un'indennità di disoccupazione meno generosa farebbe diminuire il tasso di disoccupazione frizionale e quindi anche il tasso naturale di disoccupazione.
          </p>
          <p>
            La prospettiva di percepire il sussidio fa diminuire l'intensità della ricerca di un'occupazione. Per esempio, uno studio classico illustra come gran parte dei disoccupati statunitensi trova un lavoro la settimana successiva alla scadenza della loro indennità di disoccupazione. Negli Stati Uniti l'intensità della ricerca di lavoro è abbastanza bassa fino al momento in cui termina l'indennità: questo episodio mostra che l'attesa del nuovo lavoro è influenzata dal sussidio. La disoccupazione esisterebbe anche senza questa indennità, ma l'indennità di disoccupazione tende a ridurre il tasso di occupazione.»
          </p>
        </div>

        <div className="callout callout-case">
          <h4>ANALISI DI UN CASO — L'indennità di disoccupazione durante il grande lockdown del 2020</h4>
          <p>
            Nel 2020, l'economia degli Stati Uniti fu colpita dalla pandemia di Covid-19. Per fronteggiare la difficoltà di chi non poteva lavorare a causa delle misure di contenimento e molte aziende erano temporaneamente chiuse, lasciando senza lavoro milioni di lavoratori. Nel Cares Act approvato a marzo 2020, una parte importante del piano economico era la disoccupazione: a chi perdeva il lavoro venivano riconosciute le prestazioni di disoccupazione esistenti, ma a queste si univa una somma extra: 600 dollari a settimana, in aggiunta alle prestazioni ordinarie. Mentre il tasso di sostituzione duraturo statunitense è circa il 50% (b ≈ 0,5), nei mesi del grande lockdown del 2020 il tasso di sostituzione effettivo era ben superiore al 100%, ovvero gran parte delle persone disoccupate ricevevano dallo stato di più di quanto guadagnavano lavorando. Era una scelta consapevole: si voleva dissuadere lavoratori dal lavorare in luoghi pericolosi sul piano della salute, e si voleva consentire il sostegno alla domanda durante un periodo recessivo.
          </p>
          <p>
            La politica adottava i suoi limiti vista che, se non controbilanciate, indennità così generose avrebbero potuto disincentivare il rientro al lavoro. Studi successivi pubblicati su riviste accademiche come <em>Journal of Public Economics</em> hanno trovato che, in pratica, durante il 2020 l'effetto disincentivo è stato modesto: con l'economia in recessione, i posti di lavoro erano comunque scarsi e gli effetti complessivi sull'occupazione sono stati trascurabili. Diversamente da quanto accade in condizioni normali, durante la pandemia l'effetto incentivo della politica monetaria era contenuto. Questo episodio mostra come l'effetto delle indennità sulla durata della disoccupazione dipenda dal contesto macroeconomico in cui viene applicata.
          </p>
        </div>

        <UnemploymentInsuranceGraph />
      </section>

      <section className="macro-section">
        <h2 className="section-title">7.3 La rigidità dei salari reali e la disoccupazione strutturale</h2>
        <div className="prose">
          <p>
            Una seconda causa della disoccupazione è la rigidità dei salari reali. Per capire questa causa, ci sarà utile considerare per quale motivo il mercato del lavoro non abbia una piena occupazione. In un mercato concorrenziale e in equilibrio, il salario reale si aggiusta in modo da equilibrare la domanda e l'offerta di lavoro, e tutti coloro che vogliono lavorare al salario corrente trovano un'occupazione.
          </p>
          <p>
            La disoccupazione derivante dalla rigidità dei salari reali e dal razionamento dei posti di lavoro è chiamata <strong>disoccupazione strutturale</strong>. I lavoratori sono disoccupati non perché stiano cercando con poca intensità un lavoro adatto alle loro caratteristiche, ma perché al salario corrente l'offerta di lavoro è superiore alla domanda. Le ragioni per le quali il salario può rimanere ad un livello superiore a quello che eguaglia domanda e offerta sono tre: le leggi sui salari minimi, il potere di mercato dei sindacati e i salari di efficienza.
          </p>

          <h3>Le leggi sul salario minimo</h3>
          <p>
            L'azione del governo provoca rigidità del salario reale in due aspetti, in particolare le leggi sul livello del salario minimo. Le leggi sul salario minimo stabiliscono il livello sotto il quale i salari non possono scendere. Negli Stati Uniti, il governo federale degli Stati Uniti ha stabilito dal 1938, il governo federale degli Stati Uniti definisce il salario minimo, che è poi periodicamente rivisto. Tutti gli Stati hanno proprie leggi sul salario minimo, che possono essere superiori al minimo federale.
          </p>
          <p>
            Dall'approvazione del <em>Fair Labor Standards Act</em> del 1938, il governo federale degli Stati Uniti ha fissato un livello minimo del salario nominale al di sotto del quale i datori di lavoro non possono retribuire i propri lavoratori. Mentre il salario minimo statunitense è abbastanza basso (rispetto a quello in vigore nel resto dei paesi sviluppati), il livello del salario minimo è di solito più alto in altri paesi: nel 2020 in Francia il salario minimo era pari a 10,15 dollari l'ora, contro i 7,25 dollari l'ora degli Stati Uniti. Per gli adulti che lavorano in giornaliera per il loro mantenimento e per quello della loro famiglia, il salario minimo può essere troppo basso per offrire un livello di vita decente. Tuttavia, dal punto di vista del nostro modello macroeconomico, l'effetto principale è che, quando il salario minimo è imposto al di sopra del livello di equilibrio, esso riduce la domanda di lavoro al di sotto del livello che si genererebbe con il salario di equilibrio. Le imprese rispondono a questa fissazione assumendo meno lavoratori, riducendo cioè le ore lavorate.
          </p>
          <p>
            La <strong>Figura 7.3</strong> mostra l'effetto della rigidità dei salari reali. Quando il salario reale è fissato artificialmente al di sopra del punto di equilibrio, la quantità domandata di lavoro è inferiore alla quantità offerta, generandosi disoccupazione strutturale.
          </p>

          <h3>I sindacati e la contrattazione collettiva</h3>
          <p>
            Una seconda causa della rigidità salariale è il potere di mercato esercitato dai sindacati. La <strong>Tabella 7.1</strong> mostra la percentuale dei lavoratori coperti da contratti collettivi in vari paesi. Negli Stati Uniti, la percentuale dei lavoratori coperti dalla contrattazione collettiva è ridotta. In Francia e Italia, all'opposto, oltre l'80% dei lavoratori è coperta da accordi tra rappresentanti dei lavoratori e datori di lavoro, anche se la percentuale degli iscritti al sindacato è bassa.
          </p>
          <p>
            I salari dei lavoratori sindacalizzati sono determinati non dall'equilibrio domanda-offerta ma dalla contrattazione collettiva tra i rappresentanti dei lavoratori (sindacati) e l'impresa. Il salario di accordo collettivo è generalmente fissato sopra il salario di equilibrio, consentendo all'impresa di scegliere il livello di occupazione. Ne consegue che il sindacalismo aumenta il salario dei propri iscritti ma riduce il livello di occupazione, aumentando la disoccupazione e abbassando i salari di chi non è coperto da contratti collettivi.
          </p>
          <p>
            In genere, i salari dei lavoratori sindacalizzati sono dal 10% al 20% maggiori rispetto a quelli dei lavoratori non sindacalizzati. Nel risolvere il conflitto tra lavoratori già occupati e lavoratori non occupati i sindacati influiscono sulla loro contrattazione, fissando i salari sopra al salario di equilibrio. Ciò aumenta la disoccupazione: l'effetto netto è ambiguo per i lavoratori. Dal punto di vista della società complessiva, le politiche sindacali aumentano l'inefficienza e la disuguaglianza.
          </p>

          <h3>I salari di efficienza</h3>
          <p>
            Una terza causa della rigidità dei salari reali è la teoria dei <strong>salari di efficienza</strong>. Le teorie dei salari di efficienza sostengono che salari elevati determinano una più elevata produttività dei lavoratori. L'influenza dei salari sulla produttività dei lavoratori spiega l'incapacità delle imprese di tagliare i salari in seguito a un aumento della disoccupazione. Pur potendo, in seguito ad un aumento dell'offerta di lavoro, ridurre i salari, le imprese trovano poco redditizio agire in questo modo. La produttività dei lavoratori, e dunque i profitti delle imprese, possono ridursi più di quanto si risparmierebbe in salari minori.
          </p>
          <p>
            Esistono varie teorie dei salari di efficienza. La prima sostiene che la produttività dei lavoratori dipende dai loro livelli di nutrizione. Con salari migliori i lavoratori si nutrono meglio e quindi sono più produttivi. Questa relazione tra salari, nutrizione e produttività potrebbe spiegare perché il fenomeno della disoccupazione è così rilevante nei paesi in via di sviluppo (poveri).
          </p>
          <p>
            Una seconda teoria, sviluppata da Steven Salop e Joseph Stiglitz, sottolinea il <strong>turnover</strong>. Più alti sono i salari, minore è la propensione del lavoratore a cambiare lavoro per uno migliore. Pagare un salario elevato rende il proprio lavoro più desiderabile, riduce la disponibilità del lavoratore ad accettare altre offerte, e quindi riduce il <em>quit rate</em>, ovvero la frazione di lavoratori che lasciano spontaneamente il loro posto di lavoro. Visto che le imprese sopportano dei costi nel formare i nuovi lavoratori, ridurre il turnover può essere conveniente, anche al prezzo di salari di un livello più elevato.
          </p>
          <p>
            Una terza teoria, sviluppata da George Akerlof e Janet Yellen, sottolinea l'effetto della reciprocità: quando un'impresa paga un salario superiore al concorrenziale, i lavoratori reciprocano lavorando con maggiore impegno e attaccamento. Questo modello sociologico spiega perché molte imprese pagano salari sopra il livello di mercato.
          </p>
          <p>
            Una quarta teoria, sviluppata da Carl Shapiro e Joseph Stiglitz, sottolinea il problema dello <strong>shirking</strong> (pigrizia). Le imprese, ovviamente, vorrebbero che i lavoratori lavorino sodo, ma la prestazione del lavoratore è difficile da osservare. I lavoratori possono "fare i furbi" e non lavorare con impegno. Per scoraggiare lo shirking, le imprese pagano un salario superiore a quello di equilibrio: in questo modo, il costo della perdita del lavoro per il lavoratore è alto, e si comporta meglio. Questo si traduce in salari elevati e in disoccupazione che funziona da disciplina.
          </p>
          <p>
            Le diverse teorie dei salari di efficienza condividono un risultato comune: le imprese pagano salari superiori a quello di equilibrio per ragioni di produttività. Ne consegue una disoccupazione strutturale che si aggiunge a quella derivante da salari minimi e contrattazione sindacale.
          </p>
        </div>

        <WageRigidityGraph />

        <div className="callout callout-case">
          <h4>ANALISI DI UN CASO — Henry Ford e i 5 dollari al giorno</h4>
          <p>
            Nel 1914 la Ford Motor Company iniziò a pagare ai propri lavoratori un salario di 5 dollari al giorno, oltre il doppio del salario medio dell'epoca. Era l'era del salario di efficienza per eccellenza: corrispondeva all'incirca a 130 dollari al giorno odierni. Perché Ford pagava così tanto? Quali erano le ragioni economiche per una decisione apparentemente così imprudente?
          </p>
          <p>
            All'epoca i lavori delle catene di montaggio della Ford erano molto monotoni e pesanti, e il turnover era estremamente alto. I lavoratori passavano alla concorrenza alla minima opportunità: Ford aveva un tasso di turnover annuo di circa il 370%. Costi di formazione e di selezione erano enormi. Inoltre dalla qualità del lavoro umano dipendeva la qualità delle automobili prodotte e quindi le vendite. Ford raddoppiò il salario in modo da ottenere lavoratori più produttivi, motivati e leali, riducendo drasticamente il turnover. La scommessa funzionò: i lavoratori della Ford diventarono più produttivi, il tasso di assenteismo crollò, il turnover si ridusse a livelli normali, e Ford riuscì ad aumentare i propri ricavi e profitti.
          </p>
          <p>
            La storia mostra empiricamente che i salari di efficienza possono funzionare. Tuttavia, l'episodio mostra anche un altro aspetto: pagare un salario elevato non era una bontà filantropica; era una mossa strategica per aumentare la produttività e i profitti. Generalizzando, la teoria dei salari di efficienza mostra perché un'impresa razionale potrebbe trovarsi a non voler tagliare i salari anche quando esiste eccesso di offerta di lavoro.
          </p>
        </div>
      </section>

      <section className="macro-section">
        <h2 className="section-title">7.4 Dinamica del mercato del lavoro: gli Stati Uniti</h2>
        <div className="prose">
          <p>
            Finora ci siamo focalizzati su lavoratori sulla scrivania e sul tasso naturale di disoccupazione. Ora passiamo a guardare con qualche dettaglio i dati sulla dinamica della disoccupazione nei paesi sviluppati. Cominceremo con gli Stati Uniti, che hanno l'esperienza più dettagliata e ben studiata.
          </p>

          <h3>La durata della disoccupazione</h3>
          <p>
            Se si parla di costi della disoccupazione, è importante distinguere tra disoccupazione di breve e di lunga durata. È importante perché molti dei costi della disoccupazione (perdita di reddito, perdita di abilità, deterioramento del capitale umano) crescono con la durata della disoccupazione. Una disoccupazione frizionale di pochi mesi è di solito poco grave; una disoccupazione di lunga durata ha conseguenze devastanti per i lavoratori.
          </p>
          <p>
            Quando si guarda alla distribuzione della durata della disoccupazione si osserva un <em>paradosso della durata</em>: la maggior parte dei disoccupati è disoccupata per un periodo breve, ma la maggior parte del tempo totale di disoccupazione è dovuto a pochi disoccupati di lunga durata. Per esempio, immaginiamo una popolazione di 100 disoccupati: 90 di essi rimangono disoccupati per 1 mese ciascuno, e 10 per 12 mesi ciascuno. Le settimane totali di disoccupazione sono 90 + 120 = 210, di cui 120 (il 57%) attribuibili ai 10 disoccupati di lunga durata. Sebbene questi siano una minoranza dei disoccupati, contribuiscono in modo sproporzionato al tempo totale di disoccupazione.
          </p>
          <p>
            Le politiche economiche dovrebbero quindi distinguere tra le due tipologie. Per la disoccupazione frizionale di breve durata, sono utili gli uffici di collocamento e le indennità di disoccupazione modeste. Per la disoccupazione di lunga durata, sono necessari programmi di formazione e di reinserimento più strutturati, perché il problema spesso non è solo trovare un nuovo lavoro ma anche colmare lacune di competenze.
          </p>
        </div>

        <DurationGraph />

        <div className="callout callout-case">
          <h4>ANALISI DI UN CASO — L'aumento della disoccupazione di lungo periodo negli Stati Uniti e il dibattito sull'assicurazione contro la disoccupazione</h4>
          <p>
            Nel 2008 e nel 2009, mentre l'economia statunitense attraversava la crisi finanziaria, il tasso di disoccupazione lievitò del 10% nel 2009. Quando l'occupazione lentamente cominciò a riprendersi, alcuni problemi specifici erano legati alla disoccupazione di lunga durata. La <strong>Figura 7.4</strong> mostra la durata media della disoccupazione: dopo il 2007 la durata aumentò considerevolmente, raggiungendo quasi 40 settimane nel 2011, e rimanendo elevata per molti anni. Questo era un fenomeno nuovo per gli Stati Uniti: la disoccupazione di lunga durata era un fenomeno tradizionalmente europeo.
          </p>
          <p>
            Come reagì la politica economica? Sotto l'amministrazione Obama, il Congresso decise di prolungare la durata massima dell'indennità di disoccupazione, fino a 99 settimane in alcuni stati. La motivazione era umanitaria: bisognava sostenere economicamente le famiglie dei disoccupati di lunga durata, durante una crisi che aveva ridotto drasticamente le opportunità di lavoro. Tuttavia, alcuni economisti criticarono la misura, sostenendo che indennità così generose e durature avrebbero rallentato il ritorno al lavoro: una sorta di estensione del paradosso del cap. 7.2.
          </p>
          <p>
            Altri economisti, tra cui Paul Krugman, sostennero invece che, in tempi di domanda aggregata depressa, l'effetto incentivo era contenuto. La maggior parte degli studi successivi conferma questo punto di vista: durante la Grande Recessione un'indennità più generosa non riduceva significativamente il tasso di collocamento, perché i posti di lavoro mancavano del tutto.
          </p>
        </div>
      </section>

      <section className="macro-section">
        <h2 className="section-title">7.5 Dinamica del mercato del lavoro: l'Europa</h2>
        <div className="prose">
          <p>
            La nostra analisi del mercato del lavoro si è concentrata fino ad ora sull'esperienza degli Stati Uniti. Mostreremo come la maggior parte dei paesi sviluppati abbiano avuto sostanzialmente la stessa storia: un periodo di tassi di disoccupazione bassi negli anni Cinquanta e Sessanta, seguito da un'epoca di tassi più elevati a partire dagli anni Settanta. Negli Stati Uniti questo aumento è stato modesto e parzialmente riassorbito; in molti paesi europei, l'aumento è stato più drammatico e persistente.
          </p>
          <p>
            La <strong>Figura 7.5</strong> mostra l'andamento del tasso di disoccupazione in alcuni dei principali paesi europei: Francia, Germania, Italia, Regno Unito e Spagna. Le serie storiche mostrano variazioni notevoli tra paesi: dalla relativa stabilità tedesca alla drammatica volatilità spagnola. La media europea è aumentata dal 2-3% degli anni Sessanta al 9-10% di alcuni periodi degli anni Ottanta e Novanta, per ridursi a un livello di circa il 7-8% degli anni Duemila. La crisi finanziaria del 2008 e la successiva crisi del debito sovrano hanno comportato una nuova ondata di disoccupazione, particolarmente grave in alcuni Paesi.
          </p>
          <p>
            La disoccupazione europea ha caratteristiche peculiari rispetto a quella statunitense. In Europa, la disoccupazione è meno volatile ma più persistente: chi rimane senza lavoro tende a rimanervi per molto tempo. La quota di disoccupati di lunga durata (più di 12 mesi) è in molti paesi europei superiore al 40-50%, contro il 10-15% degli Stati Uniti. Questo fenomeno è chiamato <strong>histeresi</strong>: le esperienze di disoccupazione lasciano cicatrici durevoli, e il tasso naturale di disoccupazione si adegua al tasso di disoccupazione effettivo nel tempo.
          </p>

          <h3>L'aumento del tempo libero in Europa</h3>
          <p>
            L'aumento della disoccupazione europea ha contribuito alla riduzione del tempo dedicato al lavoro. La <strong>Figura 7.6</strong> mostra le ore lavorate per persona negli Stati Uniti, in Francia, in Germania e nel Regno Unito. Negli anni Cinquanta gli europei lavoravano più ore degli americani; oggi è vero il contrario. Le ore lavorate per persona sono diminuite in tutti i paesi, ma molto di più in Europa che negli Stati Uniti.
          </p>
          <p>
            Le ragioni di questa divergenza sono diverse. Una prima ragione è la disoccupazione più elevata in Europa, che riduce la quota di popolazione attivamente occupata. Una seconda ragione sono le politiche del lavoro più rigide: ferie più lunghe, settimana lavorativa più corta (35 ore in Francia), pensionamenti anticipati. Una terza ragione potrebbe essere una preferenza più forte per il tempo libero: gli europei avrebbero scelto consapevolmente di lavorare meno per godere di più di tempo libero. Una quarta ragione, sostenuta da Edward Prescott, sono le tasse più elevate: in Europa il <em>cuneo fiscale</em> sul lavoro è molto più alto che negli Stati Uniti, e questo riduce l'incentivo a lavorare più ore.
          </p>
          <p>
            Determinare quale di queste spiegazioni sia la più importante è oggetto di un acceso dibattito. È probabile che ognuna delle ragioni elencate contribuisca: in parte i lavoratori europei lavorano meno perché sono disoccupati, in parte perché sono coperti da regolamentazioni del lavoro più rigide, in parte per scelta culturale e in parte per disincentivi fiscali. L'interpretazione di questi fatti rimane uno dei principali temi controversi nella macroeconomia comparata.
          </p>
        </div>

        <div className="callout callout-case">
          <h4>ANALISI DI UN CASO — Variabilità nel tasso di disoccupazione tra i diversi gruppi demografici</h4>
          <p>
            Il tasso di disoccupazione complessivo nasconde una varietà sostanziale di esperienze tra diversi gruppi demografici. La <strong>Tabella 7.2</strong> mostra il tasso di disoccupazione negli Stati Uniti per gruppo demografico, 2018. Il tasso di disoccupazione è particolarmente elevato per i giovani (16-19 anni): nel 2018 era pari a circa il 12,8%, contro il 3,9% complessivo. Le giovani donne afroamericane avevano un tasso di disoccupazione di circa il 23%.
          </p>
          <p>
            Questi dati mostrano due fenomeni importanti. In primo luogo, la disoccupazione è particolarmente elevata per i giovani, perché stanno facendo i primi passi nel mercato del lavoro: cercano il lavoro che si adatti alle loro caratteristiche e capacità, e spesso passano da un lavoro all'altro. Una larga parte della disoccupazione giovanile è frizionale e di breve durata. In secondo luogo, esistono persistenti differenze etniche e di genere nei tassi di disoccupazione: gli afroamericani hanno tassi di disoccupazione costantemente superiori a quelli dei bianchi, e le donne hanno spesso tassi diversi dagli uomini in modi che variano nel tempo.
          </p>
          <p>
            Le politiche di intervento sul mercato del lavoro devono considerare queste differenze. Programmi specifici per i giovani, programmi di reinserimento per i disoccupati di lunga durata, politiche antidiscriminatorie e formazione mirata possono ridurre le disparità tra gruppi demografici. Tuttavia, i dati statunitensi mostrano che queste differenze sono persistenti e difficili da eliminare.
          </p>
        </div>

        <div className="callout callout-case">
          <h4>ANALISI DI UN CASO — Transizioni in entrata e in uscita dalla forza lavoro</h4>
          <p>
            Finora abbiamo ipotizzato un aspetto importante: che la forza lavoro <em>L</em> sia data e fissa. Tuttavia in realtà la forza lavoro varia in continuazione, perché le persone entrano ed escono dalla forza lavoro. Le persone che entrano sono studenti che escono dalla scuola, casalinghe che decidono di entrare nel mondo del lavoro, pensionati che decidono di tornare al lavoro. Le persone che escono sono lavoratori che si ritirano, casalinghe che lasciano il lavoro per occuparsi della famiglia, studenti che ritornano agli studi.
          </p>
          <p>
            L'effetto di queste transizioni sul tasso di disoccupazione è ambiguo. Quando le condizioni del mercato del lavoro peggiorano, alcuni lavoratori scoraggiati abbandonano la forza lavoro e quindi non sono più contati come disoccupati. Questo riduce artificiosamente il tasso di disoccupazione misurato. Per questa ragione, alcuni economisti preferiscono guardare al <strong>tasso di occupazione</strong> (occupati su popolazione in età lavorativa), che non è influenzato dalle decisioni di entrata e uscita dalla forza lavoro.
          </p>
          <p>
            Inoltre, la quota della popolazione che fa parte della forza lavoro — il <strong>tasso di partecipazione</strong> — varia nel tempo e tra gruppi demografici. La partecipazione femminile è cresciuta drasticamente nel corso del XX secolo, mentre la partecipazione maschile è leggermente diminuita. La partecipazione dei giovani è caduta, in parte perché più giovani frequentano l'università. La partecipazione degli anziani è aumentata leggermente negli ultimi decenni, perché le persone vivono più a lungo e in salute migliore.
          </p>
        </div>
      </section>

      <section className="macro-section">
        <h2 className="section-title">7.6 Conclusioni</h2>
        <div className="prose">
          <p>
            La disoccupazione rappresenta uno spreco di risorse: i disoccupati potrebbero produrre beni e servizi, ma non lo fanno. La disoccupazione comporta inoltre un costo psicologico e sociale per chi ne è colpito. Non sorprende quindi che la disoccupazione sia un argomento centrale nel dibattito politico e che gli interventi di politica economica per combatterla siano oggetto di un'attenzione costante.
          </p>
          <p>
            Tuttavia, come abbiamo visto in questo capitolo, anche un'economia in piena salute presenta un certo livello di disoccupazione. Un certo livello di disoccupazione frizionale è inevitabile in un'economia dinamica, in cui i lavoratori cambiano lavoro e le imprese aprono e chiudono. Un certo livello di disoccupazione strutturale può derivare da rigidità salariali derivanti da salari minimi, sindacati e salari di efficienza. Il <strong>tasso naturale di disoccupazione</strong> è quel livello di disoccupazione che persiste nel lungo periodo, anche quando l'economia è in equilibrio.
          </p>
          <p>
            Lo Stato può comunque agire per ridurre il tasso naturale di disoccupazione. Programmi di formazione e di collocamento riducono la disoccupazione frizionale. Indennità di disoccupazione meno generose accelerano il rientro al lavoro, ma riducono la copertura assicurativa contro la perdita del lavoro. Politiche per attenuare la rigidità salariale (riduzione del peso dei sindacati, riforme del salario minimo) riducono la disoccupazione strutturale, ma a costo di salari più bassi per chi è già occupato. La politica economica deve quindi bilanciare diversi obiettivi: efficienza, equità, copertura assicurativa.
          </p>
          <p>
            Capire il tasso naturale di disoccupazione è importante anche per gli sviluppi futuri della nostra analisi. A partire dal Capitolo 11, esamineremo le fluttuazioni di breve periodo della disoccupazione attorno al suo livello naturale. La distinzione tra disoccupazione di lungo periodo (naturale) e fluttuazioni di breve periodo è centrale per comprendere il ruolo della politica monetaria e fiscale nel ciclo economico.
          </p>
        </div>

        <div className="formula-box">
          <div>U/L = s / (s + f)</div>
          <div style={{ fontSize: '0.88rem', marginTop: '0.4rem', color: '#64748b' }}>
            <strong>Sintesi:</strong> il tasso naturale di disoccupazione è determinato dal tasso di separazione s e dal tasso di collocamento f. Politiche che riducono s o aumentano f riducono il tasso naturale.
          </div>
        </div>

        <div className="conclusion-grid">
          <div className="conclusion-item">
            <h4>Tasso naturale</h4>
            <p>U/L = s/(s+f): il tasso naturale di disoccupazione dipende dal tasso di separazione e dal tasso di collocamento di equilibrio.</p>
          </div>
          <div className="conclusion-item">
            <h4>Disoccupazione frizionale</h4>
            <p>Tempo necessario perché lavoratori e posti di lavoro disponibili si incontrino. Inevitabile in un'economia dinamica e con cambiamenti settoriali continui.</p>
          </div>
          <div className="conclusion-item">
            <h4>Disoccupazione strutturale</h4>
            <p>Causata dalla rigidità dei salari reali (salari minimi, sindacati, salari di efficienza): l'offerta di lavoro supera la domanda al salario corrente.</p>
          </div>
          <div className="conclusion-item">
            <h4>USA vs Europa</h4>
            <p>Negli USA disoccupazione bassa ma volatile e di breve durata; in Europa più alta, persistente, con quote elevate (&gt; 40%) di disoccupazione di lunga durata.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
