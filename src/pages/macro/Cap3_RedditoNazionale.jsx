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
//  GRAFICO 1 — Funzione di Produzione Cobb-Douglas
// ══════════════════════════════════════════════════════════════
function CobbDouglasGraph() {
  const [alpha, setAlpha] = useState(0.3);   // quota capitale
  const [K, setK]         = useState(100);   // stock di capitale
  const [A, setA]         = useState(1.0);   // produttività totale

  const Lmax = 100;
  const Y = (L) => A * Math.pow(K, alpha) * Math.pow(L, 1 - alpha);

  const prodPath = [];
  for (let L = 0.1; L <= Lmax; L += 1) {
    prodPath.push([L, Y(L)]);
  }

  const yMin = 0, yMax = Y(Lmax) * 1.1;

  const toSvg = pts => `M${pts.map(([x, y]) => `${toX(x, 0, Lmax).toFixed(1)},${toY(y, yMin, yMax).toFixed(1)}`).join('L')}`;

  const Lref = 60;
  const YatLref = Y(Lref);
  const PMLatLref = A * (1 - alpha) * Math.pow(K / Lref, alpha);

  return (
    <div className="graph-block">
      <div className="graph-title">Grafico 1 — Funzione di produzione Cobb-Douglas: Y = A · K^α · L^(1−α)</div>
      <div className="graph-row">
        <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: '100%' }}>
          <Axes xMin={0} xMax={Lmax} yMin={yMin} yMax={yMax}
            xLabel="L (lavoro)" yLabel="Y" nX={5} nY={4}
            xFmt={v => v.toFixed(0)} yFmt={v => v.toFixed(0)} />

          <path d={toSvg(prodPath)} fill="none" stroke="#0284c7" strokeWidth={2.8} strokeLinecap="round" />

          {/* Tangente PML a L=60 */}
          <line
            x1={toX(Lref - 20, 0, Lmax)} y1={toY(YatLref - 20 * PMLatLref, yMin, yMax)}
            x2={toX(Lref + 20, 0, Lmax)} y2={toY(YatLref + 20 * PMLatLref, yMin, yMax)}
            stroke="#dc2626" strokeWidth={1.8} strokeDasharray="4,3" />
          <circle cx={toX(Lref, 0, Lmax)} cy={toY(YatLref, yMin, yMax)} r={5} fill="#dc2626" />
          <text x={toX(Lref, 0, Lmax) + 8} y={toY(YatLref, yMin, yMax) - 8}
            fontSize={11} fill="#dc2626" fontWeight="bold">PML = pendenza</text>

          <text x={toX(Lmax * 0.75, 0, Lmax)} y={toY(Y(Lmax * 0.75), yMin, yMax) - 10}
            fontSize={12} fill="#0284c7" fontWeight="bold" fontStyle="italic">F(K, L)</text>
        </svg>

        <div className="graph-controls">
          <SliderControl label="Quota capitale" symbol="α"
            value={alpha} min={0.1} max={0.7} step={0.05}
            onChange={setAlpha} color="#4338ca"
            fmt={v => v.toFixed(2)} />
          <SliderControl label="Stock di capitale" symbol="K"
            value={K} min={20} max={200} step={5}
            onChange={setK} color="#059669"
            fmt={v => v.toFixed(0)} />
          <SliderControl label="Produttività" symbol="A"
            value={A} min={0.5} max={2} step={0.05}
            onChange={setA} color="#d97706"
            fmt={v => v.toFixed(2)} />
          <div className="result-box">
            <div className="result-row"><span>Y (L=60)</span><span style={{ color: '#0284c7' }}>{YatLref.toFixed(1)}</span></div>
            <div className="result-row"><span>PML (L=60)</span><span style={{ color: '#dc2626' }}>{PMLatLref.toFixed(3)}</span></div>
            <div className="result-row"><span>Quota L</span><span style={{ color: '#4338ca' }}>{((1 - alpha) * 100).toFixed(0)}%</span></div>
          </div>
          <div className="insight-mini">
            La funzione è a <strong>rendimenti costanti di scala</strong> (F(zK, zL) = zY). Il <strong>PML</strong> è la pendenza: decresce all'aumentare di L (produttività marginale decrescente).
          </div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAFICO 2 — Mercato del Lavoro: PML = salario reale
// ══════════════════════════════════════════════════════════════
function LaborMarketGraph() {
  const [K, setK]     = useState(100);
  const [Lsup, setLsup] = useState(60);    // offerta di lavoro rigida
  const [alpha2] = useState(0.3);
  const A2 = 1.0;

  const Lmax = 100;

  // PML(L) = A · (1-α) · (K/L)^α
  const PML = (L) => A2 * (1 - alpha2) * Math.pow(K / L, alpha2);

  const pmlPath = [];
  for (let L = 1; L <= Lmax; L += 1) {
    pmlPath.push([L, PML(L)]);
  }

  const wEq = PML(Lsup);
  const yMin = 0, yMax = 1.2;

  const toSvg = pts => `M${pts.map(([x, y]) => `${toX(x, 0, Lmax).toFixed(1)},${toY(y, yMin, yMax).toFixed(1)}`).join('L')}`;

  return (
    <div className="graph-block">
      <div className="graph-title">Grafico 2 — Mercato del lavoro: salario reale = PML</div>
      <div className="graph-row">
        <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: '100%' }}>
          <Axes xMin={0} xMax={Lmax} yMin={yMin} yMax={yMax}
            xLabel="L" yLabel="W/P" nX={5} nY={4}
            xFmt={v => v.toFixed(0)} yFmt={v => v.toFixed(2)} />

          <path d={toSvg(pmlPath)} fill="none" stroke="#0284c7" strokeWidth={2.8} strokeLinecap="round" />
          <text x={toX(Lmax * 0.8, 0, Lmax)} y={toY(PML(Lmax * 0.8), yMin, yMax) - 10}
            fontSize={12} fill="#0284c7" fontWeight="bold" fontStyle="italic">PML (domanda)</text>

          {/* Offerta verticale */}
          <line x1={toX(Lsup, 0, Lmax)} y1={PT} x2={toX(Lsup, 0, Lmax)} y2={PT + cH}
            stroke="#059669" strokeWidth={2.8} />
          <text x={toX(Lsup, 0, Lmax) + 6} y={PT + 14}
            fontSize={12} fill="#059669" fontWeight="bold" fontStyle="italic">L̄ (offerta)</text>

          {/* Equilibrio */}
          <line x1={PL} y1={toY(wEq, yMin, yMax)} x2={toX(Lsup, 0, Lmax)} y2={toY(wEq, yMin, yMax)}
            stroke="#4338ca" strokeWidth={1.5} strokeDasharray="4,3" />
          <circle cx={toX(Lsup, 0, Lmax)} cy={toY(wEq, yMin, yMax)} r={7} fill="#4338ca" />
          <circle cx={toX(Lsup, 0, Lmax)} cy={toY(wEq, yMin, yMax)} r={4} fill="white" />
          <text x={toX(Lsup, 0, Lmax) + 10} y={toY(wEq, yMin, yMax) - 8}
            fontSize={11} fill="#4338ca" fontWeight="bold">(W/P)*</text>
        </svg>

        <div className="graph-controls">
          <SliderControl label="Stock capitale" symbol="K"
            value={K} min={40} max={200} step={5}
            onChange={setK} color="#059669"
            fmt={v => v.toFixed(0)} />
          <SliderControl label="Offerta lavoro" symbol="L̄"
            value={Lsup} min={20} max={90} step={1}
            onChange={setLsup} color="#4338ca"
            fmt={v => v.toFixed(0)} />
          <div className="result-box">
            <div className="result-row"><span>Salario reale W/P</span><span style={{ color: '#4338ca' }}>{wEq.toFixed(3)}</span></div>
            <div className="result-row"><span>Produzione Y</span><span style={{ color: '#0284c7' }}>{(A2 * Math.pow(K, alpha2) * Math.pow(Lsup, 1 - alpha2)).toFixed(1)}</span></div>
          </div>
          <div className="insight-mini">
            In concorrenza, l'impresa assume lavoratori fino a quando <strong>W/P = PML</strong>. Un aumento di K sposta la PML verso l'alto → salari reali più elevati.
          </div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAFICO 3 — Funzione di Investimento I(r)
// ══════════════════════════════════════════════════════════════
function InvestmentGraph() {
  const [sensI, setSensI] = useState(0.8);    // sensibilità al tasso
  const [shockI, setShockI] = useState(0);    // shift esogeno

  const rMin = 0, rMax = 10;

  // I(r) = I0 + shockI - sensI · r
  const I0 = 8;
  const I = (r) => I0 + shockI - sensI * r;

  const path = [];
  for (let r = rMin; r <= rMax; r += 0.1) {
    path.push([I(r), r]);
  }

  const invMin = 0, invMax = 15;

  const toSvg = pts => `M${pts.map(([x, y]) => `${toX(x, invMin, invMax).toFixed(1)},${toY(y, rMin, rMax).toFixed(1)}`).join('L')}`;

  return (
    <div className="graph-block">
      <div className="graph-title">Grafico 3 — Funzione di investimento I(r): dipendenza dal tasso di interesse</div>
      <div className="graph-row">
        <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: '100%' }}>
          <Axes xMin={invMin} xMax={invMax} yMin={rMin} yMax={rMax}
            xLabel="I (investimento)" yLabel="r (%)" nX={5} nY={5}
            xFmt={v => v.toFixed(0)} yFmt={v => v.toFixed(0)} />

          <path d={toSvg(path)} fill="none" stroke="#0284c7" strokeWidth={2.8} strokeLinecap="round" />
          <text x={toX(I(2), invMin, invMax) + 6} y={toY(2, rMin, rMax)}
            fontSize={12} fill="#0284c7" fontWeight="bold" fontStyle="italic">I(r)</text>
        </svg>

        <div className="graph-controls">
          <SliderControl label="Sensibilità a r" symbol="|I'(r)|"
            value={sensI} min={0.2} max={1.5} step={0.05}
            onChange={setSensI} color="#0284c7"
            fmt={v => v.toFixed(2)} />
          <SliderControl label="Shift esogeno" symbol="ΔI"
            value={shockI} min={-4} max={4} step={0.2}
            onChange={setShockI} color="#dc2626"
            fmt={v => v >= 0 ? `+${v.toFixed(1)}` : v.toFixed(1)} />
          <div className="result-box">
            <div className="result-row"><span>I (r=3%)</span><span style={{ color: '#0284c7' }}>{I(3).toFixed(2)}</span></div>
            <div className="result-row"><span>I (r=6%)</span><span style={{ color: '#0284c7' }}>{I(6).toFixed(2)}</span></div>
          </div>
          <div className="insight-mini">
            L'investimento è funzione <strong>decrescente</strong> del tasso d'interesse reale: tassi più alti scoraggiano progetti con rendimento basso. Un shift esogeno (ottimismo, tasse, aspettative) sposta l'intera curva.
          </div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAFICO 4 — Equilibrio Fondi Mutuabili (loanable funds)
// ══════════════════════════════════════════════════════════════
function LoanableFundsGraph() {
  const [G, setG]     = useState(20);   // spesa pubblica
  const [T, setT]     = useState(20);   // tasse
  const [YPot, setYPot] = useState(100);  // produzione piena occupazione
  const [C0, setC0]   = useState(40);   // consumo autonomo

  const rMin = 0, rMax = 10;

  // Consumo: C = C0 + 0.4 (Y - T)
  const C = C0 + 0.4 * (YPot - T);
  // Risparmio nazionale S = Y - C - G
  const S = YPot - C - G;

  // Investimento: I = 20 - sensI r
  const sensI = 2.5;
  const I = (r) => 25 - sensI * r;

  // Equilibrio S = I → r* = (25 - S)/sensI
  const rEq = Math.max(rMin, Math.min(rMax, (25 - S) / sensI));

  const iPath = [];
  for (let r = rMin; r <= rMax; r += 0.1) {
    iPath.push([I(r), r]);
  }

  const invMin = 0, invMax = 30;

  const toSvg = pts => `M${pts.map(([x, y]) => `${toX(x, invMin, invMax).toFixed(1)},${toY(y, rMin, rMax).toFixed(1)}`).join('L')}`;

  return (
    <div className="graph-block">
      <div className="graph-title">Grafico 4 — Mercato dei fondi mutuabili: S = I determina il tasso d'interesse</div>
      <div className="graph-row">
        <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: '100%' }}>
          <Axes xMin={invMin} xMax={invMax} yMin={rMin} yMax={rMax}
            xLabel="S, I" yLabel="r (%)" nX={6} nY={5}
            xFmt={v => v.toFixed(0)} yFmt={v => v.toFixed(0)} />

          {/* Risparmio S: verticale */}
          <line x1={toX(S, invMin, invMax)} y1={PT} x2={toX(S, invMin, invMax)} y2={PT + cH}
            stroke="#059669" strokeWidth={2.8} />
          <text x={toX(S, invMin, invMax) + 6} y={PT + 14}
            fontSize={12} fill="#059669" fontWeight="bold" fontStyle="italic">S̄</text>

          {/* Investimento I(r) */}
          <path d={toSvg(iPath)} fill="none" stroke="#0284c7" strokeWidth={2.8} strokeLinecap="round" />
          <text x={toX(I(2), invMin, invMax) + 6} y={toY(2, rMin, rMax)}
            fontSize={12} fill="#0284c7" fontWeight="bold" fontStyle="italic">I(r)</text>

          {/* Equilibrio */}
          {S > 0 && S < invMax && (
            <g>
              <line x1={PL} y1={toY(rEq, rMin, rMax)} x2={toX(S, invMin, invMax)} y2={toY(rEq, rMin, rMax)}
                stroke="#4338ca" strokeWidth={1.5} strokeDasharray="4,3" />
              <circle cx={toX(S, invMin, invMax)} cy={toY(rEq, rMin, rMax)} r={7} fill="#4338ca" />
              <circle cx={toX(S, invMin, invMax)} cy={toY(rEq, rMin, rMax)} r={4} fill="white" />
              <text x={toX(S, invMin, invMax) + 10} y={toY(rEq, rMin, rMax) - 8}
                fontSize={11} fill="#4338ca" fontWeight="bold">r*</text>
            </g>
          )}
        </svg>

        <div className="graph-controls">
          <SliderControl label="Spesa pubblica" symbol="G"
            value={G} min={5} max={40} step={1}
            onChange={setG} color="#dc2626"
            fmt={v => v.toFixed(0)} />
          <SliderControl label="Tasse" symbol="T"
            value={T} min={5} max={40} step={1}
            onChange={setT} color="#d97706"
            fmt={v => v.toFixed(0)} />
          <SliderControl label="Consumo autonomo" symbol="C₀"
            value={C0} min={20} max={60} step={1}
            onChange={setC0} color="#059669"
            fmt={v => v.toFixed(0)} />
          <div className="result-box">
            <div className="result-row"><span>Risparmio S</span><span style={{ color: '#059669' }}>{S.toFixed(1)}</span></div>
            <div className="result-row"><span>Tasso eq. r*</span><span style={{ color: '#4338ca' }}>{rEq.toFixed(2)}%</span></div>
            <div className="result-row"><span>Saldo pubblico T−G</span><span style={{ color: G > T ? '#dc2626' : '#059669' }}>{(T - G).toFixed(0)}</span></div>
          </div>
          <div className="insight-mini">
            Un aumento di <strong>G</strong> con T costante riduce S e <strong>spiazza</strong> l'investimento: r sale, I scende. È l'effetto <em>crowding-out</em>.
          </div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  PAGINA PRINCIPALE — Capitolo 3
// ══════════════════════════════════════════════════════════════
export default function Cap3_RedditoNazionale() {
  return (
    <div className="macro-page">

      <div className="macro-header">
        <div className="chapter-badge">Capitolo 3 · Teoria Classica</div>
        <h1 className="macro-title">
          <span className="gradient-text">Il reddito nazionale</span><br />da dove viene e dove va
        </h1>
        <p className="macro-subtitle">
          <em>"Un reddito elevato è la migliore ricetta per la felicità che io conosca."</em> — Jane Austen
        </p>
      </div>

      {/* ── Introduzione ─────────────────────────────────── */}
      <section className="macro-section">
        <h2 className="section-title">Introduzione</h2>
        <div className="prose">
          <p>
            Le variabili macroeconomiche più importanti includono il prodotto interno lordo (PIL). Come abbiamo già visto, il PIL misura sia la spesa aggregata di beni e servizi di un'economia sia il suo reddito totale. Per apprezzare la dimensione di queste grandezze si considerino alcuni dati: il PIL nominale degli Stati Uniti nel 2018 è stato di circa 20,5 miliardi di miliardi di dollari, il che lo rende di gran lunga la maggiore economia del mondo. Se tale importo viene diviso tra i 329 milioni di cittadini statunitensi, si ottiene un reddito medio pro capite di oltre 62.000 dollari, un dato che aiuta a comprendere perché il PIL rappresenta il termometro più utilizzato del benessere economico aggregato.
          </p>
          <p>
            Gli individui (e quindi le famiglie) percepiscono un reddito e lo utilizzano per pagare le tasse allo Stato, consumare beni e servizi e risparmiare quanta rimane al termine di queste operazioni. Questo capitolo è dedicato a rispondere ad alcune delle domande centrali della teoria della macroeconomia. In particolare, che cosa determina la quantità totale di beni e servizi prodotti in un'economia? Chi riceve il reddito derivante dalla produzione? Quanta parte viene destinata a consumi e quanta all'acquisto di beni d'investimento? Che cosa rende uguali domanda e offerta di beni nel mercato, così come domanda e offerta di capitali nel mercato finanziario?
          </p>
          <p>
            Le risposte a tali domande sono importanti perché la comprensione del funzionamento dell'economia è un'esigenza individuale e collettiva. Gli individui vengono costantemente chiamati a operare scelte economiche che dipendono dal reddito e dalla domanda nel mercato del lavoro, dalle tasse che dovranno pagare e dal tasso di interesse che dovranno sostenere sui prestiti. Per lavorare, le imprese prendono decisioni su domanda e offerta di capitale e di lavoro e su investimenti da realizzare in base alle informazioni che ricevono dai mercati. Le autorità di politica economica intervengono nei mercati seguendo regole e analisi che richiedono una comprensione del PIL di come si forma il reddito e della sua dinamica.
          </p>
          <p>
            In questo capitolo svilupperemo un classico modello di domanda e offerta aggregate che ha le sue radici nella tradizione dei grandi economisti classici, come Adam Smith e David Ricardo, ed è stato successivamente perfezionato e formalizzato a partire dalla fine dell'Ottocento. Il modello che presentiamo si fonda su alcune ipotesi di fondo della macroeconomia classica: i prezzi sono flessibili, i mercati si aggiustano rapidamente, e la produzione è determinata esclusivamente dal lato dell'offerta. Questo significa che tutto ciò che è prodotto trova necessariamente un compratore (legge di Say), e che eventuali squilibri vengono corretti dalle variazioni dei prezzi relativi senza bisogno di interventi esterni.
          </p>
        </div>
      </section>

      {/* ── 3.1 ─────────────────────────────────────────── */}
      <section className="macro-section">
        <h2 className="section-title">3.1 Che cosa determina la produzione aggregata di beni e servizi?</h2>
        <div className="prose">
          <p>
            La produzione di beni e servizi da parte di un'economia dipende da due elementi fondamentali: dalla quantità dei fattori di produzione (input) e dalla tecnologia con cui i fattori vengono trasformati in prodotti (output). Di seguito introduciamo prima i fattori di produzione, quindi analizziamo la tecnologia che ne consente la trasformazione in beni e servizi.
          </p>

          <h3 style={{ marginTop: '1.5rem' }}>I fattori produttivi</h3>
          <p>
            I <strong>fattori produttivi</strong> (o input) sono gli strumenti utilizzati per produrre beni e servizi. I due principali fattori produttivi di un'economia sono il capitale e il lavoro. Il <strong>capitale</strong> K è costituito dall'insieme dei macchinari, degli impianti e delle strutture produttive (la gran parte è costituita, in pratica, da fabbriche, uffici, computer) utilizzati dai lavoratori per produrre. Il <strong>lavoro</strong> L si riferisce all'insieme delle ore lavorate dai lavoratori e dipende quindi dal numero delle persone in attività e dal tempo dedicato al lavoro di ciascuno di essi. In questo capitolo il volume di capitale K e di lavoro L disponibili in un'economia sono considerati dati: in particolare, supponiamo che la quantità di capitale sia fissa ad un dato livello:
          </p>
        </div>

        <div className="formula-box">
          <div className="formula-label">Fattori di produzione dati</div>
          <div className="formula-main">K = K̄ &nbsp;·&nbsp; L = L̄</div>
          <div className="formula-note">
            Il simbolo sovrapposto a una variabile indica che la quantità di quel fattore è fissata al livello.
          </div>
        </div>

        <div className="prose">
          <h3 style={{ marginTop: '1.5rem' }}>La funzione di produzione</h3>
          <p>
            La tecnologia produttiva disponibile determina la quantità di output prodotta dato un certo uso dei fattori produttivi. Nel Capitolo 8 esamineremo con cura l'evoluzione della tecnologia che rende possibile una maggiore produttività dei fattori produttivi. In questo capitolo, invece, assumiamo che la tecnologia sia data e descriviamo le possibilità di trasformazione dei fattori in prodotti attraverso una <strong>funzione di produzione</strong>:
          </p>
        </div>

        <div className="formula-box secondary">
          <div className="formula-label">Funzione di produzione aggregata</div>
          <div className="formula-main">Y = F(K, L)</div>
          <div className="formula-note">
            Y è il volume di produzione (l'output), in funzione della quantità di capitale K e lavoro L (gli input).
          </div>
        </div>

        <div className="prose">
          <p>
            Questa equazione indica che la produzione aggregata dipende dalla quantità di capitale e di lavoro. Per le analisi che seguono, supporremo che la tecnologia sia caratterizzata da <strong>rendimenti di scala costanti</strong>: una proprietà secondo cui, se si incrementano tutti i fattori di produzione della stessa percentuale, anche il prodotto crescerà della medesima percentuale. Formalmente, se si incrementa il capitale e il lavoro di una quota z, la produzione aumenterà della stessa quota:
          </p>
        </div>

        <div className="formula-box">
          <div className="formula-label">Rendimenti di scala costanti</div>
          <div className="formula-main">z · Y = F(z · K, z · L)</div>
          <div className="formula-note">
            Se raddoppiamo K e L (z=2), la produzione raddoppia. Questa è l'ipotesi cruciale che garantisce che la distribuzione del reddito tra i fattori sia ben definita.
          </div>
        </div>

        <div className="prose">
          <h3 style={{ marginTop: '1.5rem' }}>L'offerta di beni e servizi</h3>
          <p>
            I fattori produttivi e la funzione di produzione, determinano congiuntamente la quantità di beni e servizi che un'economia offre. Dato un certo livello di capitale K e di lavoro L, possiamo esprimere l'offerta di beni e servizi come il prodotto massimo ottenibile dalla tecnologia disponibile:
          </p>
        </div>

        <div className="formula-box secondary">
          <div className="formula-main">Y = F(K̄, L̄) = Ȳ</div>
          <div className="formula-note">
            Con fattori e tecnologia dati, il livello di produzione è pienamente determinato dal lato dell'offerta.
          </div>
        </div>

        <CobbDouglasGraph />
      </section>

      {/* ── 3.2 ─────────────────────────────────────────── */}
      <section className="macro-section">
        <h2 className="section-title">3.2 Come si distribuisce il reddito nazionale tra i fattori produttivi?</h2>
        <div className="prose">
          <p>
            Come abbiamo visto nel Capitolo 2, la produzione totale di un'economia genera un reddito di pari ammontare. Ma come questo reddito viene distribuito tra capitale e lavoro? Per rispondere a questa domanda supporremo che la distribuzione del reddito nazionale avvenga in mercati concorrenziali tra produttori e possessori dei fattori di produzione. Analizziamo un mercato concorrenziale in cui l'impresa produttrice acquista lavoro alla media del salario W che viene pagato per ogni lavoratore L (unità di lavoro) assunto, e acquista il capitale al prezzo R per ciascuna unità di capitale impiegato. Assumiamo che vi sia un grande numero di imprese operanti nello stesso settore, ciascuna delle quali è price-taker sui mercati dei fattori.
          </p>

          <h3 style={{ marginTop: '1.5rem' }}>La domanda di fattori produttivi dell'impresa</h3>
          <p>
            Abbiamo visto che l'impresa produce beni e servizi combinando i fattori produttivi. Ciò significa che ciascuna impresa acquista fattori per produrre. Per prendere una decisione razionale sulla quantità di fattori produttivi da impiegare nella produzione, l'impresa confronta ricavi e costi, assumendo dati i prezzi dei propri prodotti, i salari e i prezzi del capitale. Il profitto dell'impresa è quindi:
          </p>
        </div>

        <div className="formula-box">
          <div className="formula-label">Profitto dell'impresa</div>
          <div className="formula-main">Profitto = P · F(K, L) − W · L − R · K</div>
          <div className="formula-note">
            Ricavi (P·Y) meno costi del lavoro (W·L) e del capitale (R·K). L'impresa sceglie K e L per massimizzare il profitto.
          </div>
        </div>

        <div className="prose">
          <p>
            Il <strong>prodotto marginale del lavoro (PML)</strong> rappresenta l'incremento di produzione che un'impresa riesce a ottenere dall'impiego di una unità aggiuntiva di lavoro, mantenendo costante il capitale. Il PML è tipicamente decrescente, perché a parità di capitale, ogni lavoratore aggiuntivo ha a disposizione meno capitale e quindi produce un incremento sempre più piccolo. La <strong>produttività marginale del capitale (PMK)</strong> è definita in modo analogo ed è a sua volta decrescente al crescere di K.
          </p>
          <p>
            Per massimizzare il profitto, l'impresa assume lavoratori finché il valore prodotto dall'ultimo lavoratore eguaglia il costo di assumerlo: in concorrenza questo si traduce nella condizione che il <strong>salario reale</strong> W/P sia uguale al prodotto marginale del lavoro, e analogamente che il <strong>prezzo reale del capitale</strong> R/P sia uguale alla produttività marginale del capitale:
          </p>
        </div>

        <div className="formula-box secondary">
          <div className="formula-label">Condizioni di massimo profitto</div>
          <div className="formula-main">PML = W/P &nbsp;·&nbsp; PMK = R/P</div>
          <div className="formula-note">
            L'impresa domanda lavoro fino a quando il prodotto marginale uguaglia il salario reale, e capitale fino a quando la produttività marginale uguaglia il costo reale del capitale.
          </div>
        </div>

        <LaborMarketGraph />

        <div className="prose">
          <h3 style={{ marginTop: '1.5rem' }}>La distribuzione del reddito nazionale</h3>
          <p>
            Dopo aver analizzato la decisione dell'impresa sulla quantità di fattori produttivi da impiegare, possiamo ora passare al modo in cui il reddito nazionale si distribuisce tra i fattori produttivi in un'economia concorrenziale. Supponiamo che il reddito dei lavoratori sia uguale al PML moltiplicato per la quantità di lavoro L, e il reddito dei possessori del capitale sia uguale alla PMK moltiplicata per la quantità di capitale. I profitti economici guadagnati dalle imprese sono quindi definiti come la differenza tra i ricavi di vendita e i costi dei fattori:
          </p>
        </div>

        <div className="formula-box">
          <div className="formula-label">Profitto economico</div>
          <div className="formula-main">Profitto economico = Y − (PML · L) − (PMK · K)</div>
          <div className="formula-note">
            Se la funzione di produzione è a rendimenti costanti di scala, secondo il teorema di Eulero, il profitto economico è pari a zero.
          </div>
        </div>

        <div className="prose">
          <p>
            Dati i nostri presupposti, rendimenti di scala costanti, concorrenza perfetta e firms che massimizzano il profitto, il teorema di Eulero stabilisce che il profitto economico aggregato coincide con zero: l'intero reddito viene distribuito integralmente ai fattori produttivi. Formalmente, la funzione di produzione può essere scritta come:
          </p>
        </div>

        <div className="formula-box secondary">
          <div className="formula-main">F(K, L) = (PMK · K) + (PML · L)</div>
          <div className="formula-note">
            Ogni fattore riceve una quota del prodotto proporzionale alla sua produttività marginale, e la somma delle quote esaurisce il prodotto totale.
          </div>
        </div>

        <div className="prose">
          <h3 style={{ marginTop: '1.5rem' }}>La funzione di produzione Cobb-Douglas</h3>
          <p>
            Quali funzioni di produzione descrivono meglio le economie che osserviamo nel mondo reale? In questo paragrafo prendiamo in esame una particolare funzione di produzione, la Cobb-Douglas, che si è rivelata piuttosto soddisfacente per descrivere molti aspetti delle economie reali e che rappresenta il modello di funzione di produzione più utilizzato negli studi empirici. I due scienziati statunitensi che elaborarono la Cobb-Douglas ebbero sorpresa nel riscontrare che la ripartizione tra le quote del lavoro e del capitale appariva sostanzialmente stabile nel tempo. Il senatore, la forma storica più semplice, era rappresentata dalla domanda se avessero misurato male la verità, ovvero:
          </p>
        </div>

        <div className="formula-box">
          <div className="formula-label">Funzione di produzione Cobb-Douglas</div>
          <div className="formula-main">Y = A · K^α · L^(1−α)</div>
          <div className="formula-note">
            A misura la produttività totale dei fattori (TFP); α è la quota del reddito destinata al capitale (in genere ≈ 0.3), 1−α la quota destinata al lavoro.
          </div>
        </div>

        <div className="prose">
          <p>
            Applicando le condizioni di massimo profitto alla Cobb-Douglas, si ottengono quote di reddito costanti: i lavoratori ricevono sempre una frazione (1−α) del reddito totale, e i possessori del capitale ricevono sempre una frazione α. Il fatto che nei dati empirici la quota del lavoro sul PIL negli Stati Uniti e in molti altri paesi sia stata sostanzialmente costante intorno al 70% nel lungo periodo (coerente con α≈0,3) è stata una delle grandi conferme empiriche della specificazione Cobb-Douglas della funzione di produzione aggregata.
          </p>

          <h3 style={{ marginTop: '1.5rem' }}>Analisi di un caso: La paga nera</h3>
          <p>
            La storia della "paga nera" illustra concretamente come le produttività marginali determinino i salari reali. Il 16 novembre 1347 la peste nera, la più grande epidemia della storia, raggiunse l'Europa e nel corso dei successivi cinque anni uccise tra un terzo e la metà della popolazione del continente. In Inghilterra il risultato fu che il salario reale dei lavoratori sopravvissuti più che raddoppiò tra il 1340 e il 1380. Perché? Con meno lavoratori disponibili, e con lo stock di capitale (terre, utensili) largamente invariato, il rapporto K/L salì improvvisamente: il prodotto marginale del lavoro aumentò drasticamente e i salari reali lo seguirono. Questo episodio storico fornisce una dimostrazione naturale della teoria marginalista del salario.
          </p>

          <h3 style={{ marginTop: '1.5rem' }}>Analisi di un caso: La produttività del lavoro come la principale determinante dei salari reali</h3>
          <p>
            Sulla base della nostra teoria dobbiamo aspettarci che i salari reali aumentino approssimativamente con lo stesso ritmo della produttività del lavoro. La crescita della produttività del lavoro, a sua volta, dipende dall'aumento del capitale a disposizione per lavoratore e dal progresso tecnologico. L'evidenza empirica per gli Stati Uniti mostra che la dinamica dei salari reali segue effettivamente la dinamica della produttività del lavoro nel lungo periodo. A partire dal secondo dopoguerra e fino al 1973, la crescita della produttività e dei salari reali furono entrambe intorno al 2,2% annuo. Dopo il 1973 la crescita è rallentata in entrambi i casi, con una produttività che cresce all'1% e salari reali allo 0,7%. Il periodo 1995-2010 ha visto un'accelerazione della produttività al 2,6% annuo, con salari reali che hanno ripreso a crescere all'1,8%. Dopo il 2010 si è tornati a una crescita rallentata su entrambi i fronti.
          </p>
        </div>
      </section>

      {/* ── 3.3 ─────────────────────────────────────────── */}
      <section className="macro-section">
        <h2 className="section-title">3.3 Che cosa determina la domanda di beni e servizi?</h2>
        <div className="prose">
          <p>
            Abbiamo ora capito da che cosa è determinata l'offerta aggregata nella nostra economia di lungo periodo. Ora ci dobbiamo concentrare sulla domanda aggregata e capire come viene determinata. Come abbiamo visto nel Capitolo 2, possiamo suddividere la domanda aggregata di un'economia in quattro tipologie di domande di beni e servizi: il consumo C, l'investimento I, la spesa pubblica G, le esportazioni nette NX. Di seguito analizzeremo i primi tre capitolo mentre rinvieremo l'analisi delle esportazioni nette al Capitolo 14.
          </p>

          <h3 style={{ marginTop: '1.5rem' }}>Il consumo</h3>
          <p>
            Quando mangiamo cibo, indossiamo i vestiti e andiamo al cinema, stiamo consumando e contribuiamo alla componente C del PIL. Le famiglie destinano al consumo una parte del loro reddito disponibile, ovvero del reddito che rimane dopo che le famiglie hanno pagato le imposte allo Stato. Il <strong>reddito disponibile</strong> è definito come il reddito totale Y meno le imposte T (al netto dei trasferimenti) incassati dal governo:
          </p>
        </div>

        <div className="formula-box">
          <div className="formula-label">Reddito disponibile e funzione del consumo</div>
          <div className="formula-main">C = C(Y − T)</div>
          <div className="formula-note">
            Il consumo è funzione crescente del reddito disponibile. La quantità di reddito aggiuntivo spesa in consumo è detta <strong>propensione marginale al consumo (PMC)</strong>, compresa tra 0 e 1.
          </div>
        </div>

        <div className="prose">
          <h3 style={{ marginTop: '1.5rem' }}>L'investimento</h3>
          <p>
            Sia le famiglie sia le imprese acquistano beni di investimento. Le imprese acquistano beni di investimento per aumentare il capitale produttivo. Ogni tipo di investimento (residenziale, fisso non residenziale, scorte) ha una caratteristica comune: esiste un <strong>costo d'opportunità</strong>, rappresentato dal tasso d'interesse r, che si paga per finanziare l'investimento, anziché lasciare i fondi depositati sul mercato finanziario a rendere un tasso d'interesse. La quantità domandata di beni di investimento dipende negativamente dal tasso di interesse reale:
          </p>
        </div>

        <div className="formula-box secondary">
          <div className="formula-label">Funzione di investimento</div>
          <div className="formula-main">I = I(r)</div>
          <div className="formula-note">
            L'investimento è una funzione decrescente del tasso di interesse reale: più alto il costo del credito, minore la convenienza dei progetti marginali.
          </div>
        </div>

        <InvestmentGraph />

        <div className="prose">
          <h3 style={{ marginTop: '1.5rem' }}>La spesa pubblica</h3>
          <p>
            La spesa pubblica G è la terza componente della domanda aggregata di beni e servizi. Lo Stato, a livello centrale e locale, acquista beni e servizi per fornire attività pubbliche: la difesa, i servizi dei dipendenti della pubblica amministrazione, le strade, la sanità, l'istruzione. I <strong>trasferimenti</strong> (pensioni, sussidi) non sono inclusi in G perché non rappresentano acquisti di beni e servizi da parte dello Stato, ma una ridistribuzione del reddito dalle famiglie tassate a quelle che ricevono il trasferimento. Vale la distinzione tra <strong>imposte nette</strong> T (imposte incassate al netto dei trasferimenti pagati) e G, e il saldo di bilancio pubblico:
          </p>
        </div>

        <div className="formula-box">
          <div className="formula-label">Saldo di bilancio pubblico</div>
          <div className="formula-main">T − G</div>
          <div className="formula-note">
            Se T &gt; G il bilancio è in <em>avanzo</em>, se T &lt; G è in <em>disavanzo</em> (deficit). In questo capitolo consideriamo G e T come variabili esogene di politica fiscale.
          </div>
        </div>
      </section>

      {/* ── 3.4 ─────────────────────────────────────────── */}
      <section className="macro-section">
        <h2 className="section-title">3.4 Cosa garantisce l'equilibrio tra offerta e domanda di beni e servizi?</h2>
        <div className="prose">
          <p>
            Abbiamo a questo punto completato l'analisi della domanda aggregata di beni e servizi. Possiamo quindi identificare i quattro componenti del PIL: il consumo C, l'investimento I, la spesa pubblica G, e le esportazioni nette (in questo capitolo omesse). La domanda aggregata di beni e servizi è:
          </p>
        </div>

        <div className="formula-box">
          <div className="formula-label">Identità fondamentale</div>
          <div className="formula-main">Y = C + I + G</div>
          <div className="formula-note">
            Offerta = Domanda. La produzione Y coincide con la somma di consumi, investimenti e spesa pubblica. Le esportazioni nette sono qui omesse per semplicità.
          </div>
        </div>

        <div className="prose">
          <p>
            Come possiamo riscrivere questa equazione? Se sottraiamo C e G da entrambi i lati, otteniamo:
          </p>
        </div>

        <div className="formula-box secondary">
          <div className="formula-main">Y − C − G = I</div>
          <div className="formula-note">
            Il lato sinistro è il <strong>risparmio nazionale</strong> S: ciò che resta del prodotto dopo consumo e spesa pubblica.
          </div>
        </div>

        <div className="prose">
          <p>
            Definiamo il risparmio nazionale S come il reddito totale meno i consumi e la spesa pubblica: S = Y − C − G. Sottraendo e aggiungendo le imposte T, possiamo decomporre il risparmio nazionale in risparmio privato e risparmio pubblico:
          </p>
        </div>

        <div className="formula-box">
          <div className="formula-label">Risparmio nazionale = privato + pubblico</div>
          <div className="formula-main">S = (Y − T − C) + (T − G)</div>
          <div className="formula-note">
            Risparmio privato (famiglie) + saldo di bilancio pubblico. In equilibrio S = I: il risparmio totale finanzia l'investimento.
          </div>
        </div>

        <div className="prose">
          <h3 style={{ marginTop: '1.5rem' }}>L'equilibrio nei mercati finanziari: la domanda e l'offerta di fondi mutuabili</h3>
          <p>
            Per il meccanismo appena illustrato la condizione Y = C(Y − T) + I(r) + G può essere riarrangiata in termini di fondi mutuabili. Le famiglie offrono fondi mutuabili risparmiando parte del loro reddito disponibile; le imprese domandano fondi mutuabili per finanziare i loro progetti di investimento. Il <strong>tasso di interesse reale r</strong> è il prezzo di equilibrio di questo mercato: se il tasso è troppo alto, l'offerta di fondi supera la domanda e il tasso scende; se è troppo basso, succede il contrario. All'equilibrio, il risparmio nazionale uguaglia l'investimento.
          </p>
        </div>

        <LoanableFundsGraph />

        <div className="prose">
          <h3 style={{ marginTop: '1.5rem' }}>Le variazioni del risparmio: gli effetti della politica fiscale</h3>
          <p>
            Prendiamo l'esempio di un aumento della spesa pubblica. Se il governo finanzia questo aumento con un disavanzo di bilancio, non cambiando le tasse T, il risparmio pubblico (T − G) scende e quindi anche il risparmio nazionale S scende. A parità di domanda di investimenti, questo provoca un aumento del tasso di interesse reale r e una riduzione dell'investimento privato I. L'effetto si chiama <strong>spiazzamento</strong> o <em>crowding out</em>: la spesa pubblica aggiuntiva "spiazza" l'investimento privato, perché entrambi competono per lo stesso pool limitato di risparmio nazionale. Una politica di disavanzo strutturale finisce così per comprimere gli investimenti privati e, attraverso questi, la crescita economica di lungo periodo.
          </p>
          <p>
            Un aumento delle imposte T (con G costante) ha invece l'effetto opposto: aumenta il risparmio pubblico, aumenta il risparmio nazionale totale, la curva S si sposta a destra, il tasso di interesse scende e l'investimento aumenta. La simmetria vale anche per la <em>domanda</em> di investimenti: se un'impresa diventa più ottimista e la sua domanda I(r) si sposta a destra, il tasso di interesse di equilibrio sale per contenere questa maggiore domanda con l'offerta di risparmio dato.
          </p>
        </div>
      </section>

      {/* ── 3.5 Conclusione ─────────────────────────────── */}
      <section className="macro-section">
        <h2 className="section-title">3.5 Conclusioni</h2>
        <div className="prose">
          <p>
            In questo capitolo abbiamo sviluppato un modello classico di equilibrio che descrive la produzione aggregata, la sua distribuzione tra i fattori produttivi e la sua allocazione tra i diversi usi della domanda. Il modello si basa su alcune ipotesi fondamentali: la produzione è determinata dall'offerta (fattori e tecnologia), i mercati dei fattori sono in concorrenza perfetta, il salario reale e il costo reale del capitale si aggiustano per rendere uguali domanda e offerta di ogni fattore, e il mercato dei fondi mutuabili determina il tasso di interesse reale di equilibrio.
          </p>
          <p>
            Il modello classico fornisce un benchmark concettuale importante per comprendere il funzionamento dell'economia nel lungo periodo, quando i prezzi hanno tempo di aggiustarsi. Nei prossimi capitoli esamineremo il sistema monetario e il ruolo della moneta, quindi estenderemo l'analisi al breve periodo, dove le ipotesi di prezzi flessibili verranno abbandonate per lasciare spazio a una descrizione più realistica delle fluttuazioni economiche.
          </p>
        </div>
      </section>

    </div>
  );
}
