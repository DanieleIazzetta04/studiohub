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
//  GRAPH 1 — IDENTITÀ DELL'ECONOMIA APERTA: NX = S − I
// ══════════════════════════════════════════════════════════════
function NXIdentityGraph() {
  const [s, setS] = useState(20);   // saving as % of Y
  const [i, setI] = useState(18);   // investment as % of Y

  const nx = s - i;  // current account = saving - investment

  const xMin = 0, xMax = 35;
  const yMin = -15, yMax = 15;

  // 45° line for NX = S - I (S on x, NX on y, fixed I)
  const pts = [];
  for (let sv = xMin; sv <= xMax; sv += 0.5) {
    pts.push([toX(sv, xMin, xMax), toY(sv - i, yMin, yMax)]);
  }
  const path = 'M ' + pts.map(p => p.join(',')).join(' L ');

  return (
    <div className="graph-block">
      <h4 className="graph-title">Identità dell'economia aperta: NX = S − I (esportazioni nette = saldo S−I)</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          <Axes xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax} xLabel="S (% PIL)" yLabel="NX (% PIL)" xFmt={v => v.toFixed(0) + '%'} yFmt={v => v.toFixed(0) + '%'} />
          <path d={path} fill="none" stroke="#0ea5e9" strokeWidth={2} strokeDasharray="5,3" />
          <text x={toX(30, xMin, xMax) + 3} y={toY(30 - i, yMin, yMax)} fontSize={10} fill="#0ea5e9">NX = S−I</text>
          {/* zero line */}
          <line x1={PL} y1={toY(0, yMin, yMax)} x2={PL + cW} y2={toY(0, yMin, yMax)} stroke="#94a3b8" strokeWidth={0.8} strokeDasharray="2,2" />
          {/* current point */}
          <circle cx={toX(s, xMin, xMax)} cy={toY(nx, yMin, yMax)} r={6} fill="#ef4444" stroke="#fff" strokeWidth={2} />
          <line x1={toX(s, xMin, xMax)} y1={PT + cH} x2={toX(s, xMin, xMax)} y2={toY(nx, yMin, yMax)} stroke="#ef4444" strokeDasharray="3,3" strokeWidth={1.2} />
        </svg>
        <div className="graph-controls">
          <SliderControl label="Risparmio nazionale" symbol="S" value={s} min={5} max={35} step={0.5} onChange={setS} color="#16a34a" fmt={v => v.toFixed(1) + '%'} />
          <SliderControl label="Investimento" symbol="I" value={i} min={5} max={35} step={0.5} onChange={setI} color="#a855f7" fmt={v => v.toFixed(1) + '%'} />
          <div className="result-box">
            <div className="result-row"><strong>Esportazioni nette NX</strong> <span style={{ color: nx > 0 ? '#16a34a' : nx < 0 ? '#ef4444' : '#f59e0b' }}>{nx.toFixed(1)}%</span></div>
            <div className="result-row"><strong>Saldo conto capitale</strong> <span>{nx > 0 ? 'Deflusso (S>I)' : nx < 0 ? 'Afflusso (I>S)' : 'Pareggio'}</span></div>
          </div>
          <div className="insight-mini">L'identità NX = S − I lega il saldo commerciale alla differenza tra risparmio e investimento. Se S &gt; I, il Paese presta all'estero (NX positivo); se I &gt; S, riceve fondi dall'estero (NX negativo).</div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAPH 2 — PICCOLA ECONOMIA APERTA: r = r* determina I, NX
// ══════════════════════════════════════════════════════════════
function SmallOpenEconomyGraph() {
  const [rWorld, setRWorld] = useState(4);   // world interest rate
  const [s, setS] = useState(20);            // national saving (vertical)

  const xMin = 0, xMax = 35;
  const yMin = 0, yMax = 12;

  // Investment function: I(r) = a - b*r, decreasing in r
  const a = 28, b = 2.2;
  const investment = a - b * rWorld;
  const nx = s - investment;

  // I(r) curve points: x = I, y = r
  const pts = [];
  for (let r = yMin; r <= yMax; r += 0.1) {
    const I = a - b * r;
    if (I >= xMin && I <= xMax) {
      pts.push([toX(I, xMin, xMax), toY(r, yMin, yMax)]);
    }
  }
  const pathI = 'M ' + pts.map(p => p.join(',')).join(' L ');

  return (
    <div className="graph-block">
      <h4 className="graph-title">Piccola economia aperta: r = r* fissa l'investimento e determina NX</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          <Axes xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax} xLabel="S, I" yLabel="r (%)" xFmt={v => v.toFixed(0)} yFmt={v => v.toFixed(0) + '%'} />
          {/* vertical S line */}
          <line x1={toX(s, xMin, xMax)} y1={PT} x2={toX(s, xMin, xMax)} y2={PT + cH} stroke="#16a34a" strokeWidth={2.2} />
          <text x={toX(s, xMin, xMax) + 4} y={PT + 12} fontSize={10} fill="#16a34a">S</text>
          {/* I(r) curve */}
          <path d={pathI} fill="none" stroke="#a855f7" strokeWidth={2.2} />
          <text x={toX(a - b * 1, xMin, xMax) - 18} y={toY(1, yMin, yMax) - 4} fontSize={10} fill="#a855f7">I(r)</text>
          {/* world rate horizontal */}
          <line x1={PL} y1={toY(rWorld, yMin, yMax)} x2={PL + cW} y2={toY(rWorld, yMin, yMax)} stroke="#dc2626" strokeWidth={1.6} strokeDasharray="4,3" />
          <text x={PL + cW - 30} y={toY(rWorld, yMin, yMax) - 4} fontSize={10} fill="#dc2626">r*</text>
          {/* investment marker */}
          <circle cx={toX(investment, xMin, xMax)} cy={toY(rWorld, yMin, yMax)} r={5} fill="#a855f7" stroke="#fff" strokeWidth={2} />
          {/* saving marker */}
          <circle cx={toX(s, xMin, xMax)} cy={toY(rWorld, yMin, yMax)} r={5} fill="#16a34a" stroke="#fff" strokeWidth={2} />
          {/* NX bracket */}
          {Math.abs(nx) > 0.5 && (
            <line x1={toX(Math.min(s, investment), xMin, xMax)} y1={toY(rWorld, yMin, yMax) + 14} x2={toX(Math.max(s, investment), xMin, xMax)} y2={toY(rWorld, yMin, yMax) + 14} stroke={nx > 0 ? '#16a34a' : '#ef4444'} strokeWidth={2} />
          )}
          <text x={toX((s + investment) / 2, xMin, xMax)} y={toY(rWorld, yMin, yMax) + 26} fontSize={10} fill={nx > 0 ? '#16a34a' : '#ef4444'} textAnchor="middle">NX = {nx.toFixed(1)}</text>
        </svg>
        <div className="graph-controls">
          <SliderControl label="Tasso d'interesse mondiale" symbol="r*" value={rWorld} min={1} max={11} step={0.1} onChange={setRWorld} color="#dc2626" fmt={v => v.toFixed(1) + '%'} />
          <SliderControl label="Risparmio nazionale" symbol="S" value={s} min={8} max={32} step={0.5} onChange={setS} color="#16a34a" fmt={v => v.toFixed(1)} />
          <div className="result-box">
            <div className="result-row"><strong>Investimento I(r*)</strong> <span style={{ color: '#a855f7' }}>{investment.toFixed(2)}</span></div>
            <div className="result-row"><strong>Esportazioni nette NX</strong> <span style={{ color: nx > 0 ? '#16a34a' : '#ef4444' }}>{nx.toFixed(2)}</span></div>
          </div>
          <div className="insight-mini">In una piccola economia aperta, r è fissato dal tasso mondiale r*. L'investimento I(r*) è dato; NX = S − I(r*) è la variabile di aggiustamento. Politiche fiscali che riducono S generano deficit commerciali.</div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAPH 3 — TASSO DI CAMBIO REALE E NX
// ══════════════════════════════════════════════════════════════
function RealExchangeRateGraph() {
  const [eps, setEps] = useState(1.0);   // real exchange rate
  const [shift, setShift] = useState(0); // S - I shift (vertical line shift)

  const xMin = 0, xMax = 30;
  const yMin = 0, yMax = 2.2;

  // NX(eps) curve: NX decreasing in eps
  // NX = 25 - 12 * eps
  const a = 25, b = 12;

  // Vertical line at NX = S - I (constant)
  const nxConstant = 5 + shift;  // baseline 5 + adjustment

  const pts = [];
  for (let e = yMin; e <= yMax; e += 0.05) {
    const NX = a - b * e;
    if (NX >= xMin && NX <= xMax) {
      pts.push([toX(NX, xMin, xMax), toY(e, yMin, yMax)]);
    }
  }
  const pathNX = 'M ' + pts.map(p => p.join(',')).join(' L ');

  // Equilibrium: NX(eps_eq) = nxConstant -> eps_eq = (a - nxConstant)/b
  const epsEq = (a - nxConstant) / b;

  // Current NX given user's eps
  const nxCurrent = a - b * eps;

  return (
    <div className="graph-block">
      <h4 className="graph-title">Tasso di cambio reale ε e saldo NX: equilibrio del mercato dei cambi</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          <Axes xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax} xLabel="NX" yLabel="ε (cambio reale)" xFmt={v => v.toFixed(0)} yFmt={v => v.toFixed(1)} />
          {/* NX(eps) downward sloping curve */}
          <path d={pathNX} fill="none" stroke="#0ea5e9" strokeWidth={2.2} />
          <text x={toX(a - b * 0.4, xMin, xMax) - 30} y={toY(0.4, yMin, yMax) - 6} fontSize={10} fill="#0ea5e9">NX(ε)</text>
          {/* vertical S - I line */}
          <line x1={toX(nxConstant, xMin, xMax)} y1={PT} x2={toX(nxConstant, xMin, xMax)} y2={PT + cH} stroke="#16a34a" strokeWidth={2.2} />
          <text x={toX(nxConstant, xMin, xMax) + 4} y={PT + 14} fontSize={10} fill="#16a34a">S−I</text>
          {/* equilibrium marker */}
          <circle cx={toX(nxConstant, xMin, xMax)} cy={toY(epsEq, yMin, yMax)} r={6} fill="#dc2626" stroke="#fff" strokeWidth={2} />
          <text x={toX(nxConstant, xMin, xMax) + 8} y={toY(epsEq, yMin, yMax) - 6} fontSize={10} fill="#dc2626">ε equilibrio = {epsEq.toFixed(2)}</text>
          {/* current eps */}
          <line x1={PL} y1={toY(eps, yMin, yMax)} x2={PL + cW} y2={toY(eps, yMin, yMax)} stroke="#a855f7" strokeWidth={1.2} strokeDasharray="3,3" />
          <circle cx={toX(nxCurrent, xMin, xMax)} cy={toY(eps, yMin, yMax)} r={5} fill="#a855f7" stroke="#fff" strokeWidth={1.5} />
          <text x={PL + 6} y={toY(eps, yMin, yMax) - 4} fontSize={9} fill="#a855f7">ε = {eps.toFixed(2)}</text>
        </svg>
        <div className="graph-controls">
          <SliderControl label="Cambio reale corrente" symbol="ε" value={eps} min={0.3} max={2.0} step={0.05} onChange={setEps} color="#a855f7" fmt={v => v.toFixed(2)} />
          <SliderControl label="Shock (S − I)" symbol="ΔS-I" value={shift} min={-8} max={8} step={0.5} onChange={setShift} color="#16a34a" fmt={v => v.toFixed(1)} />
          <div className="result-box">
            <div className="result-row"><strong>NX a ε corrente</strong> <span>{nxCurrent.toFixed(2)}</span></div>
            <div className="result-row"><strong>ε di equilibrio</strong> <span style={{ color: '#dc2626' }}>{epsEq.toFixed(2)}</span></div>
          </div>
          <div className="insight-mini">L'equilibrio del cambio reale ε si trova dove NX(ε) = S − I. Politica fiscale espansiva: S scende, S−I scende, ε si apprezza, NX scende (deficit commerciale). Politiche commerciali protezionistiche spostano NX(ε) ma non modificano NX di equilibrio.</div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAPH 4 — PARITÀ DEL POTERE D'ACQUISTO (PPP) e BIG MAC
// ══════════════════════════════════════════════════════════════
function PPPGraph() {
  const [pPriceForeign, setPPriceForeign] = useState(5.50);  // local price abroad
  const [pPriceUS, setPPriceUS] = useState(5.67);            // US price baseline
  const [marketRate, setMarketRate] = useState(1.0);         // actual exchange rate

  // Implied PPP rate = local price / US price
  const pppRate = pPriceForeign / pPriceUS;
  // Over/undervaluation %
  const overUnder = ((marketRate - pppRate) / pppRate) * 100;

  const xMin = 0, xMax = 12;
  const yMin = 0, yMax = 12;

  // PPP line: rate = price_foreign / price_us → 45° if same numeraire
  // We plot: x = local price, y = market exchange rate, vs y = ppp rate
  const pts45 = [];
  for (let pf = xMin; pf <= xMax; pf += 0.2) {
    pts45.push([toX(pf, xMin, xMax), toY(pf / pPriceUS, yMin, yMax)]);
  }
  const path45 = 'M ' + pts45.map(p => p.join(',')).join(' L ');

  return (
    <div className="graph-block">
      <h4 className="graph-title">Parità del potere d'acquisto: indice Big Mac e tassi di cambio</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          <Axes xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax} xLabel="prezzo Big Mac estero (val. locale)" yLabel="tasso di cambio" xFmt={v => v.toFixed(0)} yFmt={v => v.toFixed(1)} />
          {/* PPP line */}
          <path d={path45} fill="none" stroke="#0ea5e9" strokeWidth={2} strokeDasharray="5,3" />
          <text x={toX(10, xMin, xMax) - 25} y={toY(10 / pPriceUS, yMin, yMax) - 6} fontSize={10} fill="#0ea5e9">PPP</text>
          {/* implied PPP marker */}
          <circle cx={toX(pPriceForeign, xMin, xMax)} cy={toY(pppRate, yMin, yMax)} r={5} fill="#0ea5e9" stroke="#fff" strokeWidth={1.5} />
          {/* market rate marker */}
          <circle cx={toX(pPriceForeign, xMin, xMax)} cy={toY(marketRate, yMin, yMax)} r={6} fill={overUnder > 0 ? '#dc2626' : '#16a34a'} stroke="#fff" strokeWidth={2} />
          {/* connection line */}
          <line x1={toX(pPriceForeign, xMin, xMax)} y1={toY(pppRate, yMin, yMax)} x2={toX(pPriceForeign, xMin, xMax)} y2={toY(marketRate, yMin, yMax)} stroke={overUnder > 0 ? '#dc2626' : '#16a34a'} strokeWidth={1.4} strokeDasharray="3,3" />
          <text x={toX(pPriceForeign, xMin, xMax) + 6} y={toY(marketRate, yMin, yMax) + 4} fontSize={10} fill={overUnder > 0 ? '#dc2626' : '#16a34a'}>{overUnder > 0 ? '+' : ''}{overUnder.toFixed(0)}%</text>
        </svg>
        <div className="graph-controls">
          <SliderControl label="Prezzo Big Mac (locale)" symbol="P*" value={pPriceForeign} min={1} max={11} step={0.1} onChange={setPPriceForeign} color="#a855f7" fmt={v => v.toFixed(2)} />
          <SliderControl label="Prezzo Big Mac (US $)" symbol="P" value={pPriceUS} min={3} max={8} step={0.05} onChange={setPPriceUS} color="#0ea5e9" fmt={v => '$' + v.toFixed(2)} />
          <SliderControl label="Tasso di cambio di mercato" symbol="e" value={marketRate} min={0.2} max={3.0} step={0.05} onChange={setMarketRate} color="#dc2626" fmt={v => v.toFixed(2)} />
          <div className="result-box">
            <div className="result-row"><strong>Tasso PPP implicito</strong> <span>{pppRate.toFixed(2)}</span></div>
            <div className="result-row"><strong>Sopra/sottovalutazione</strong> <span style={{ color: overUnder > 0 ? '#dc2626' : '#16a34a' }}>{overUnder > 0 ? '+' : ''}{overUnder.toFixed(1)}%</span></div>
          </div>
          <div className="insight-mini">Secondo la PPP, il tasso di cambio dovrebbe eguagliare il rapporto fra i prezzi nelle due monete. Differenze segnalano valute sopra- o sotto-valutate. Nella pratica la PPP non è mai esatta a causa di costi di trasporto, beni non commerciabili e differenziali di qualità.</div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  PAGE
// ══════════════════════════════════════════════════════════════
export default function Cap6_EconomiaAperta() {
  return (
    <div className="macro-page">
      <header className="macro-header">
        <div className="chapter-badge">CAPITOLO 6</div>
        <h1 className="macro-title gradient-text">L'economia aperta</h1>
        <p className="macro-subtitle">
          «Nessuna nazione è mai andata in rovina per il commercio internazionale.» — Benjamin Franklin
        </p>
      </header>

      <section className="macro-section">
        <h2 className="section-title">Introduzione</h2>
        <div className="prose">
          <p>
            Anche quando vivete in un importante della vostra città natale, siete tutti degli attori dell'economia globale. Quando andate a fare la spesa nel negozio sotto casa potete trovare un assortimento di prodotti provenienti da diverse nazioni del mondo. In Trentino o in Lombardia c'è il PIL, il deposito di nostro conto corrente potrebbero essere utilizzati dalla nostra banca per finanziare l'acquisto di un nuovo appartamento o per costruire un nuovo impianto produttivo nella nostra industria di Tokyo. Il fatto che la nostra economia sia il monte di un mondo macroeconomico non rende confezionate l'analisi macroeconomica nel suo complesso. L'economia è il centro del nostro impegno di analisi tecnica, come parte determinante dell'analisi macroeconomica.
          </p>
          <p>
            Nei capitoli precedenti, abbiamo semplificato la nostra analisi assumendo un'economia chiusa. In realtà, però, la maggior parte delle economie moderne sono aperte: sono parte integrante dell'economia mondiale. Nella nostra realtà di oggi, le persone possono partecipare al mercato globale acquistando e vendendo merci all'estero, prendendo a prestito o prestando denaro all'estero, investendo all'estero o ricevendo investimenti dall'estero. In questo capitolo inizieremo lo studio della macroeconomia delle economie aperte. Apriamo le porte alla nostra analisi e affrontiamo le numerose nuove questioni che si presentano in questo contesto.
          </p>
          <p>
            Cominciamo discutendo le grandezze chiave che misurano l'apertura dell'economia: le esportazioni nette, i flussi internazionali di capitale, il tasso di cambio. Poi, sulla base di questi concetti, sviluppiamo un modello che è in grado di analizzare le determinanti delle esportazioni nette e del tasso di cambio. Questo modello sottolinea il ruolo della politica economica.
          </p>
        </div>
      </section>

      <section className="macro-section">
        <h2 className="section-title">6.1 I flussi internazionali di capitali e di beni</h2>
        <div className="prose">
          <p>
            La caratteristica chiave di una economia aperta è la differenza fondamentale tra ciò che un'economia produce e ciò che vende. Una nazione, in un'economia aperta, può vendere ai cittadini stranieri (esportazioni) e i suoi cittadini possono acquistare prodotti di importazione internazionali dei propri produttori e degli stranieri.
          </p>
          <p>
            L'identità contabile del reddito nazionale ricorda quanto un'economia aperta produce e che cosa con esso si vende. La contabilità nazionale parte dall'idea che il prodotto di un Paese (il PIL, Y) corrisponde al consumo C, agli investimenti I, alla spesa pubblica G e al saldo netto delle esportazioni nette NX (esportazioni meno importazioni). Per un'economia aperta, l'identità contabile può essere riscritta come:
          </p>
        </div>

        <div className="formula-box">
          <div>Y = C + I + G + NX</div>
          <div style={{ fontSize: '0.88rem', marginTop: '0.4rem', color: '#64748b' }}>
            dove NX sono le esportazioni nette (esportazioni meno importazioni). Nel caso di una economia chiusa NX = 0 e Y = C + I + G.
          </div>
        </div>

        <div className="prose">
          <p>
            Sottraendo C + G da entrambi i lati e ricordando che il reddito non destinato al consumo o alla spesa pubblica è il <strong>risparmio nazionale (S)</strong>, si ha:
          </p>
        </div>

        <div className="formula-box">
          <div>S = I + NX → NX = S − I</div>
          <div style={{ fontSize: '0.88rem', marginTop: '0.4rem', color: '#64748b' }}>
            <strong>Identità chiave dell'economia aperta:</strong> il saldo del conto corrente NX coincide con la differenza tra risparmio nazionale e investimento.
          </div>
        </div>

        <div className="prose">
          <p>
            Sappiamo che il risparmio nazionale (S) può essere usato in due modi: per finanziare l'investimento interno (I) oppure per acquistare attività finanziarie estere (uscita netta di capitale = S − I). Questa identità contabile mostra che, in un'economia aperta, l'eccesso del risparmio rispetto all'investimento si traduce in un saldo positivo della bilancia commerciale, e simmetricamente che un'economia in cui l'investimento è superiore al risparmio importa fondi dall'estero per finanziare i propri investimenti.
          </p>
          <p>
            Con questo punto di vista è utile distinguere il <strong>flusso netto di capitale</strong> (S − I) dal <strong>saldo commerciale</strong> (NX). I due sono uguali per identità contabile in un'economia aperta: ogni euro che esce dal Paese sotto forma di saldo commerciale positivo entra come acquisto netto di attività finanziarie estere; ogni euro che entra come deficit commerciale è finanziato vendendo attività agli stranieri.
          </p>
        </div>

        <NXIdentityGraph />

        <div className="callout callout-case">
          <h4>ANALISI DI UN CASO — Il disavanzo commerciale degli Stati Uniti</h4>
          <p>
            A partire dagli anni Ottanta, gli Stati Uniti hanno registrato per molti anni disavanzi commerciali persistenti. La <strong>Figura 6.6</strong> nel libro mostra la rappresentazione tra le esportazioni nette in percentuale del PIL e il 1960 e il 2019. A partire dagli anni Ottanta, gli Stati Uniti sono divenuti progressivamente importatori netti, le esportazioni si sono ridotte, e si è creato un deficit commerciale strutturale. Negli anni 2000 il deficit è rimasto considerevole, in alcuni anni intorno al 4-5% del PIL. Come spiega questa identità contabile?
          </p>
          <p>
            Il disavanzo commerciale americano riflette la sua posizione di basso risparmio. Gli Stati Uniti, sia il governo federale (con i suoi disavanzi di bilancio costantemente alti) sia le famiglie americane (con un tasso di risparmio relativamente basso), hanno generato per anni un risparmio nazionale insufficiente a finanziare il loro investimento domestico. Per coprire la differenza, gli Stati Uniti hanno assorbito ingenti capitali dall'estero, vendendo titoli di Stato, azioni, obbligazioni e altre attività finanziarie. Questa entrata netta di capitali si è tradotta in un'eccedenza delle importazioni di beni e servizi sulle esportazioni: NX = S − I &lt; 0.
          </p>
          <p>
            Il disavanzo commerciale statunitense non è di per sé un fenomeno necessariamente negativo, soprattutto se i capitali esteri finanziano un investimento produttivo capace di rendimenti superiori al tasso di interesse pagato sui debiti contratti. Tuttavia, quando i capitali esteri finanziano principalmente consumi pubblici e privati, il deficit commerciale può segnalare uno squilibrio non sostenibile, che richiederà aggiustamenti futuri.
          </p>
        </div>

        <div className="callout callout-case">
          <h4>ANALISI DI UN CASO — Perché i capitali non affluiscono verso i Paesi poveri?</h4>
          <p>
            Il disavanzo commerciale degli Stati Uniti deriva dalla precedente analisi di un caso suggerisce un flusso di capitali dai Paesi ricchi (alto risparmio) verso quelli poveri (alta domanda di investimento). I Paesi poveri hanno bassi capitali per lavoratore, quindi alta produttività marginale del capitale e alti rendimenti potenziali; ci si aspetterebbe quindi un flusso di capitali enorme verso questi Paesi. La realtà, tuttavia, è opposta. Come dimostrano Lucas e altri economisti, i flussi di capitali si dirigono prevalentemente da Paesi ricchi (alto risparmio) verso altri Paesi ricchi (alto investimento).
          </p>
          <p>
            Una delle ragioni è la presenza di rischio politico: investire in Paesi a istituzioni deboli espone al rischio di esproprio, capitali nazionalizzazione, instabilità monetaria, default sovrano. Anche se la produttività marginale del capitale potrebbe essere alta in Paesi poveri, il rendimento atteso corretto per il rischio è inferiore. Inoltre, i Paesi poveri spesso hanno ricerca, istruzione e infrastrutture insufficienti, riducendo la produttività effettiva.
          </p>
        </div>
      </section>

      <section className="macro-section">
        <h2 className="section-title">6.2 Risparmio e investimento in una piccola economia aperta</h2>
        <div className="prose">
          <p>
            Per ottenere maggiore approfondimento sui modelli macroeconomici dei flussi di capitali e di beni, costruiamo un modello formale di una <strong>piccola economia aperta con perfetta mobilità dei capitali</strong>. Tre ipotesi principali stanno alla base di questo modello.
          </p>

          <h3>La mobilità dei capitali e il tasso di interesse mondiale</h3>
          <p>
            In questo paragrafo presupponiamo un modello per la <strong>piccola economia aperta con perfetta mobilità dei capitali</strong>. La nostra ipotesi quanto a "piccola" significa che il Paese è una piccola parte degli scambi mondiali, per cui le sue scelte non influenzano i tassi di interesse mondiali. La nostra ipotesi quanto a "perfetta mobilità dei capitali" significa che i residenti hanno pieno accesso ai mercati finanziari mondiali, e i Paesi non possono imporre vincoli ai movimenti internazionali di capitali. A causa di queste due ipotesi, il tasso di interesse interno r dovrà coincidere con il tasso di interesse mondiale r*: il tasso di interesse pagato sulle attività mondiali offerte e domandate sui mercati finanziari mondiali.
          </p>
        </div>

        <div className="formula-box">
          <div>r = r*</div>
          <div style={{ fontSize: '0.88rem', marginTop: '0.4rem', color: '#64748b' }}>
            In una piccola economia aperta con perfetta mobilità dei capitali, il tasso d'interesse reale interno è esogenamente fissato dal tasso di interesse mondiale.
          </div>
        </div>

        <div className="prose">
          <h3>Il modello</h3>
          <p>
            Per costruire il modello di una piccola economia aperta riprendiamo i tre quattro principali del Capitolo 3.
          </p>
          <ul>
            <li>La produzione aggregata Y dell'economia, Y, è funzione di determinati ammontari di lavoro e capitale fisici e dello stato della tecnologia: <em>Y = F(K, L)</em>.</li>
            <li>Il consumo C dipende positivamente dal reddito disponibile Y − T: <em>C = C(Y − T)</em>.</li>
            <li>L'investimento I dipende negativamente dal tasso di interesse reale r: <em>I = I(r)</em>.</li>
          </ul>
          <p>
            Queste tre relazioni sono già note. Aggiungiamo a queste l'identità contabile dell'economia aperta. In una economia aperta:
          </p>
        </div>

        <div className="formula-box">
          <div>NX = (Y − C − G) − I = S − I</div>
          <div style={{ fontSize: '0.88rem', marginTop: '0.4rem', color: '#64748b' }}>
            Dato che il risparmio S è determinato dalle scelte di reddito-consumo e dalla politica fiscale, e l'investimento I dipende dal tasso di interesse mondiale r*, NX è la variabile di aggiustamento.
          </div>
        </div>

        <div className="prose">
          <p>
            Sostituendo l'ipotesi r = r* nella funzione di investimento si ottiene I = I(r*): l'investimento è esogenamente determinato dal tasso di interesse mondiale. Ne segue che il livello di NX è determinato come differenza tra risparmio nazionale e investimento al tasso mondiale.
          </p>
          <p>
            Le esportazioni nette di una piccola economia aperta sono quindi determinate da due grandezze: il risparmio interno (che dipende dalla politica fiscale e dalle decisioni di consumo dei privati) e l'investimento interno (che dipende dal tasso di interesse mondiale e dalla produttività del capitale). Risparmio &gt; Investimento → eccedenza commerciale, capitali esportati. Investimento &gt; Risparmio → deficit commerciale, capitali importati.
          </p>
        </div>

        <SmallOpenEconomyGraph />

        <div className="prose">
          <h3>L'influenza delle politiche economiche sul saldo commerciale</h3>
          <p>
            Supponiamo che l'economia, debba un saldo commerciale nullo, NX = 0 e quindi S = I. Quale è l'effetto di una politica economica in grado di modificare le esportazioni nette? Possiamo usare il modello per analizzare politiche di tre tipi:
          </p>

          <h4 style={{ marginTop: '1rem', fontWeight: '600', color: '#475569' }}>1. Gli effetti della politica fiscale nazionale</h4>
          <p>
            Cosa succede se il governo aumenta la spesa pubblica G o riduce le imposte T? Ricordando dal Capitolo 3 che il risparmio nazionale è S = Y − C(Y − T) − G, vediamo che un aumento di G o una riduzione di T riduce S. Di conseguenza, NX = S − I diminuisce: l'economia passa da un saldo commerciale equilibrato a un disavanzo. La <strong>Figura 6.1</strong> nel libro mostra questo aggiustamento: la curva verticale del risparmio nazionale si sposta verso sinistra; al tasso di interesse mondiale invariato, NX diventa negativo. Una politica fiscale espansiva genera un disavanzo commerciale.
          </p>

          <h4 style={{ marginTop: '1rem', fontWeight: '600', color: '#475569' }}>2. Gli effetti della politica fiscale estera</h4>
          <p>
            Supponiamo ora invece che sia il governo estero a intraprendere una politica fiscale espansiva: aumenta la spesa pubblica all'estero. Se il Paese è "grande" rispetto al resto del mondo, questa politica farà aumentare il tasso di interesse mondiale r*. La <strong>Figura 6.2</strong> nel libro mostra questo effetto: l'aumento di r* riduce l'investimento interno I, e siccome il risparmio nazionale S è invariato, NX = S − I aumenta. Il saldo commerciale del Paese migliora. Quindi, una politica fiscale espansiva all'estero aumenta NX nel Paese domestico.
          </p>

          <h4 style={{ marginTop: '1rem', fontWeight: '600', color: '#475569' }}>3. Gli spostamenti della curva di domanda di investimento</h4>
          <p>
            Se per qualche ragione si verifica uno spostamento dell'investimento interno (per esempio, una nuova innovazione tecnologica eleva la produttività marginale del capitale e aumenta la domanda di investimento), I cresce a parità di r*. Di conseguenza S − I diminuisce, NX diminuisce: il Paese diventa importatore netto. La <strong>Figura 6.3</strong> nel libro mostra questo aggiustamento. Un aumento dell'investimento interno (favorito da innovazione, deregolamentazione o agevolazioni fiscali) riduce le esportazioni nette o aumenta il deficit commerciale.
          </p>
        </div>

        <div className="callout callout-case">
          <h4>ANALISI DI UN CASO — Il disavanzo commerciale degli Stati Uniti negli ultimi decenni</h4>
          <p>
            La <strong>Figura 6.5</strong> del libro illustra il disavanzo commerciale statunitense negli anni 1960–2019. Si possono individuare tre fasi distinte. Fino al 1980, gli Stati Uniti avevano un saldo commerciale grosso modo in pareggio. A partire dagli anni Ottanta è apparso un deficit commerciale persistente, con tre picchi negli anni 1985-1987, intorno al 2000 e dal 2002 al 2018. La nostra teoria offre una spiegazione coerente di questi cambiamenti.
          </p>
          <p>
            Negli anni Ottanta e all'inizio degli anni Novanta, la politica fiscale espansiva di Reagan (riduzione di imposte e aumento della spesa militare) generò ampi disavanzi pubblici e abbassò il risparmio nazionale. NX scese di conseguenza. Negli anni Novanta, il boom della new economy negli Stati Uniti generò una forte domanda di investimento; combinata con il risparmio nazionale relativamente basso, riportò i deficit commerciali. Negli anni 2000, le riduzioni fiscali di George W. Bush e poi le risposte fiscali alla Grande Recessione abbassarono ulteriormente il risparmio nazionale, generando deficit commerciali persistenti dell'ordine del 4-6% del PIL. Il quadro segnala un'economia in cui il consumo, la spesa pubblica e l'investimento richiedono più risorse di quante l'economia stessa generi attraverso il risparmio.
          </p>
        </div>
      </section>

      <section className="macro-section">
        <h2 className="section-title">6.3 I tassi di cambio</h2>
        <div className="prose">
          <p>
            Avendo esaminato il flusso internazionale dei capitali e di beni passiamo a discutere il prezzo a cui un'economia interagisce con l'estero: il <strong>tasso di cambio</strong>. Il tasso di cambio nominale e il tasso di cambio reale aiutano a misurare la propensione di scambio tra Paesi diversi. In questo paragrafo discutiamo i due tassi di cambio in dettaglio.
          </p>

          <h3>Il tasso di cambio nominale</h3>
          <p>
            Il <strong>tasso di cambio nominale</strong> è il prezzo relativo della valuta di due Paesi. Per esempio, se il tasso di cambio tra il dollaro statunitense e l'euro è 1,1 dollari per euro, allora un cittadino europeo può ottenere 1,1 dollari in cambio di 1 euro o, in modo equivalente, 1 dollaro in cambio di 0,909 euro. Il tasso di cambio nominale viene riportato dai giornali e citato sui mercati dei cambi.
          </p>
        </div>

        <div className="formula-box">
          <div>e = tasso di cambio nominale = unità di valuta estera per unità di valuta nazionale</div>
          <div style={{ fontSize: '0.88rem', marginTop: '0.4rem', color: '#64748b' }}>
            Un aumento di e si chiama <strong>apprezzamento</strong> della valuta nazionale (un euro vale più valuta estera). Una diminuzione si chiama <strong>deprezzamento</strong>.
          </div>
        </div>

        <div className="prose">
          <h3>Il tasso di cambio reale</h3>
          <p>
            Il <strong>tasso di cambio reale</strong> ε è il prezzo relativo dei beni di due Paesi. Cioè, ci dice il rapporto in cui i beni di un Paese vengono scambiati contro i beni di un altro. Per esempio, supponiamo che una coppia d'auto americana costi 100€ in Italia, ma la stessa auto costi 90$ negli Stati Uniti. Per confrontare i prezzi delle due auto in una stessa moneta, dobbiamo usare il tasso di cambio nominale. Se il tasso è 1 € = 1,1 $, allora l'auto italiana costa 100 € × 1,1 = 110 $. Il rapporto fra i prezzi è 110/90 = 1,22: l'auto italiana costa il 22% in più. La formula è:
          </p>
        </div>

        <div className="formula-box">
          <div>ε = (e × P) / P*</div>
          <div style={{ fontSize: '0.88rem', marginTop: '0.4rem', color: '#64748b' }}>
            Tasso di cambio reale = (Tasso di cambio nominale × Prezzo nazionale) / Prezzo estero. Misura quanti beni esteri si possono ottenere per ogni bene nazionale.
          </div>
        </div>

        <div className="prose">
          <p>
            Il tasso di cambio reale ε è la grandezza chiave per le decisioni di import-export. Quando ε è alto, i beni nazionali sono cari rispetto a quelli esteri: gli abitanti del Paese importano molto e i Paesi esteri importano poco da noi → NX scende. Quando ε è basso, i beni nazionali sono a buon mercato: NX sale. Quindi NX dipende negativamente da ε.
          </p>
        </div>

        <RealExchangeRateGraph />

        <div className="prose">
          <h3>Il tasso di cambio reale e il saldo commerciale</h3>
          <p>
            Quale influenza esercita il tasso di cambio reale sul saldo commerciale? Per rispondere a questa domanda, dobbiamo combinare l'identità NX = S − I con la <strong>Figura 6.6</strong> mostra la relazione fra cambio reale e NX. La curva è inclinata negativamente: a un cambio reale più alto, NX è inferiore. Il livello di equilibrio del cambio reale ε si ottiene dove NX(ε) eguaglia S − I, dato che S − I è esogeno (non dipende da ε).
          </p>

          <h3>Le determinanti del tasso di cambio reale</h3>
          <p>
            Ora disponiamo di tutti gli strumenti necessari ad esaminare l'effetto di politiche economiche sul tasso di cambio reale. Possiamo analizzare gli effetti di:
          </p>
          <ul>
            <li>una <strong>politica fiscale interna espansiva</strong>: riduce il risparmio nazionale, S − I scende e quindi NX di equilibrio scende. Per ridurre NX, ε deve apprezzarsi: il cambio reale si apprezza, i beni nazionali diventano relativamente più cari. La <strong>Figura 6.7</strong> illustra questo aggiustamento.</li>
            <li>una <strong>politica fiscale estera espansiva</strong>: aumenta r*, riduce I interno, S − I sale, NX sale. Per aumentare NX, ε deve deprezzarsi.</li>
            <li>uno <strong>spostamento della curva di domanda di investimento</strong>: aumenta I, S − I scende, NX scende, ε si apprezza. La <strong>Figura 6.8</strong> illustra questo caso.</li>
          </ul>

          <h3>L'effetto delle politiche economiche sul tasso di cambio reale</h3>
          <p>
            Possiamo enfatizzare il modello appena costruito per discutere casi storici e politiche specifiche. Negli anni Ottanta, la politica fiscale espansiva di Reagan generò un disavanzo crescente del risparmio nazionale. Il modello prevede un apprezzamento del dollaro: e infatti tra il 1980 e il 1985 il dollaro si apprezzò di più del 50% in termini reali contro le principali valute mondiali. La <strong>Figura 6.9</strong> mostra l'andamento del tasso di cambio reale del dollaro dagli anni Settanta agli anni Duemila: alti picchi corrispondono ai periodi di politica fiscale espansiva interna.
          </p>
        </div>

        <div className="prose">
          <h3>Gli effetti delle politiche commerciali</h3>
          <p>
            Avendo sviluppato un modello in grado di spiegare le determinanti del cambio reale possiamo ora utilizzarlo per analizzare l'impatto di altri provvedimenti di politica economica e in particolare di <strong>politica commerciale</strong> protezionista. Una politica commerciale è un provvedimento che mira ad influenzare direttamente la quantità di beni e servizi importati o esportati. Esempi tipici sono i dazi e le quote di importazione.
          </p>
          <p>
            La <strong>Figura 6.10</strong> nel libro mostra l'effetto di una politica commerciale protezionistica al tasso di cambio reale. Per esempio, supponiamo che gli Stati Uniti impongono una tariffa sulle importazioni cinesi. A parità di altre condizioni, questo riduce le importazioni e aumenta NX a parità di ε. La curva NX(ε) si sposta verso destra. Tuttavia, il livello di equilibrio di NX è ancora pari a S − I, che non è cambiato. Quindi, in equilibrio, NX rimane invariato: la politica commerciale non riesce a ridurre il deficit commerciale. Ciò che cambia è il tasso di cambio reale di equilibrio, che si apprezza. L'apprezzamento riduce le esportazioni e aumenta le importazioni, esattamente compensando l'effetto iniziale della tariffa.
          </p>
          <p>
            Questa è una conclusione sorprendente: <em>le politiche commerciali protezionistiche non riducono il disavanzo commerciale. Esse cambiano la composizione del commercio (riducono sia esportazioni sia importazioni) e fanno apprezzare il cambio reale, ma non modificano il saldo commerciale aggregato</em>. Per ridurre il deficit commerciale, occorre agire sul risparmio nazionale (politica fiscale) o sull'investimento.
          </p>
        </div>

        <div className="callout callout-case">
          <h4>ANALISI DI UN CASO — Le conseguenze economiche della presidenza Trump</h4>
          <p>
            Quando Donald Trump si è candidato alla presidenza nel 2016, uno delle sue maggiori preoccupazioni era la politica commerciale. Nel corso della sua campagna elettorale ha più volte criticato il trattato commerciale NAFTA con Messico e Canada, ha promesso di aumentare le tariffe sulle importazioni dalla Cina, e ha proposto di tassare le importazioni di acciaio e alluminio. La logica di Trump era che le politiche commerciali aggressive avrebbero ridotto il disavanzo commerciale americano. Per attuare quanto proposto in campagna elettorale, Trump da presidente nel 2018 introdusse tariffe del 25% sull'acciaio e del 10% sull'alluminio importati. L'amministrazione Trump impose anche tariffe specifiche sui prodotti cinesi.
          </p>
          <p>
            La nostra teoria predice che politiche commerciali di questo tipo non riducono il deficit commerciale. La nostra analisi mostra perché: il disavanzo commerciale è determinato da S − I, e finché la politica fiscale americana non aumenta il risparmio (o non si riduce l'investimento), il deficit non si ridurrà. La realtà ha confermato la previsione: nonostante le tariffe imposte dall'amministrazione Trump, il deficit commerciale americano è effettivamente <em>aumentato</em>, dal 2,8% del PIL nel 2017 a circa il 3,1% nel 2018-2019, a causa principalmente della politica fiscale espansiva (riduzione delle imposte del 2017) che ha ridotto S.
          </p>
          <p>
            La variazione percentuale di e (la variazione del tasso di cambio nominale) è in tre componenti: la variazione percentuale di ε (la variazione del tasso di cambio reale) più la variazione percentuale di P* (l'inflazione estera) meno la variazione percentuale di P (l'inflazione interna). La variazione percentuale del tasso di cambio nominale tra due valute è uguale alla differenza fra l'inflazione nei due Paesi, più la variazione percentuale del tasso di cambio reale.
          </p>
        </div>

        <div className="formula-box">
          <div>% Δe = % Δε + π* − π</div>
          <div style={{ fontSize: '0.88rem', marginTop: '0.4rem', color: '#64748b' }}>
            Variazione del tasso di cambio nominale = Variazione del cambio reale + Differenza di inflazione (estera meno nazionale).
          </div>
        </div>

        <div className="prose">
          <p>
            Questa relazione ci dice che le variazioni del cambio nominale e di quello reale possono essere significativamente diverse. Se l'inflazione nazionale è molto superiore a quella estera, anche un cambio reale stabile implicherà un forte deprezzamento nominale. È quanto è accaduto in molti Paesi a forte inflazione: Argentina, Brasile, Turchia hanno sperimentato deprezzamenti nominali persistenti delle proprie valute, ma il deprezzamento reale è stato molto più contenuto.
          </p>
        </div>
      </section>

      <section className="macro-section">
        <h2 className="section-title">La parità del potere d'acquisto</h2>
        <div className="prose">
          <p>
            Concludo il capitolo discutendo una teoria classica del tasso di cambio: la <strong>parità del potere d'acquisto (PPP)</strong>. La PPP è una teoria che afferma che il tasso di cambio nominale tra due valute deve eguagliare il rapporto dei livelli dei prezzi nei due Paesi. La PPP si fonda su un'idea semplice: la <strong>legge del prezzo unico</strong>. La legge del prezzo unico afferma che, se il commercio internazionale è privo di frizioni (assenza di costi di trasporto, barriere doganali, ecc.), un bene identico deve costare la stessa cifra (in una stessa moneta) ovunque venga venduto.
          </p>
          <p>
            Se la legge del prezzo unico vale per tutti i beni, allora il livello dei prezzi nei diversi Paesi deve essere lo stesso quando convertito nella stessa valuta. Da questo segue:
          </p>
        </div>

        <div className="formula-box">
          <div>e = P* / P  →  ε = (e × P) / P* = 1</div>
          <div style={{ fontSize: '0.88rem', marginTop: '0.4rem', color: '#64748b' }}>
            La PPP implica un tasso di cambio reale costante e pari a 1. Equivalentemente, il tasso di cambio nominale è dato dal rapporto fra i livelli dei prezzi.
          </div>
        </div>

        <div className="prose">
          <p>
            La PPP ha implicazioni forti: un Paese con inflazione più alta deve subire un deprezzamento nominale corrispondente, in modo da mantenere ε = 1. Empiricamente, la PPP è una teoria utile come benchmark di lungo periodo, ma non descrive accuratamente i tassi di cambio nel breve periodo. Le ragioni della deviazione dalla PPP sono i costi di trasporto, le barriere commerciali, l'esistenza di beni non commerciabili (case, parrucchieri, ristoranti) e le differenze di qualità e gusto.
          </p>
        </div>

        <div className="callout callout-case">
          <h4>ANALISI DI UN CASO — Il Big Mac nel mondo</h4>
          <p>
            In base alla nostra della parità del potere d'acquisto, una determinata quantità di moneta di una nazione dovrebbe avere lo stesso potere d'acquisto in un'altra nazione. Per testare questa nozione, l'<em>Economist</em> compila e pubblica regolarmente l'indice <strong>Big Mac</strong>, che riporta il prezzo di un Big Mac di McDonald's in tutto il mondo. Il Big Mac è scelto per due motivi: è venduto in tutto il mondo con specifiche essenzialmente identiche, e i suoi ingredienti includono beni alimentari, lavoro e affitti, riassumendo molte componenti dei costi di vita.
          </p>
          <p>
            La <strong>Tabella 6.2</strong> nel libro elenca i prezzi del Big Mac in vari Paesi nel 2020 e calcola il tasso di cambio implicito secondo la PPP. Confrontandolo con il tasso di cambio di mercato, si può capire se una valuta è sopra- o sottovalutata. Per esempio, se il prezzo di un Big Mac negli Stati Uniti è 5,67$, quello a Buenos Aires costa 5,40 dollari (dopo conversione), ne segue che il peso argentino è leggermente sottovalutato. Negli Stati Uniti il Big Mac costava 5,67 dollari (sulla base dei prezzi di San Francisco, Chicago e Atlanta). Se costi più all'estero significa che il dollaro è sopravvalutato.
          </p>
          <p>
            La realtà della parità del potere d'acquisto, per i Big Mac, può essere considerata come un'approssimazione di lungo periodo. Come mostrano le ultime colonne della Tabella 6.2, i tassi di cambio di mercato spesso si allontanano dai tassi PPP impliciti dell'indice Big Mac. La PPP descrive le tendenze di lungo periodo dei tassi di cambio, ma su orizzonti brevi (mesi o anni) i cambi possono divergere significativamente dalla PPP a causa di costi di trasporto, barriere e beni non commerciabili.
          </p>
        </div>

        <PPPGraph />
      </section>

      <section className="macro-section">
        <h2 className="section-title">6.4 Conclusioni</h2>
        <div className="prose">
          <p>
            In questo capitolo abbiamo analizzato il funzionamento di una piccola economia aperta. Abbiamo esaminato le determinanti del flusso internazionale di fondi per l'accumulazione del capitale e dei flussi internazionali di beni e servizi. Abbiamo anche studiato le determinanti del tasso di cambio reale e nominale. La nostra analisi ha evidenziato come le decisioni di politica economica (monetaria, fiscale e commerciale) influenzino l'andamento di queste variabili.
          </p>
          <p>
            L'ipotesi fondamentale del modello elaborato in questo capitolo è la piccola, nel senso che abbiamo dimostrato sistemiamo come, almeno in linea di approssimazione, gran parte delle variabili economiche dipendano dai movimenti internazionali di fondi e dei movimenti commerciali. Questa ipotesi vale strettamente solo per le piccole economie aperte. La logica generale, tuttavia, suggerisce un modello applicabile a casi intermedi tra l'economia chiusa e la piccola economia perfettamente integrata.
          </p>
          <p>
            Quale di questi modelli applicare al caso reale? Per gli Stati Uniti il modello a piccola economia aperta (con r dato dal tasso mondiale) potrebbe non essere ideale. Gli Stati Uniti sono il più grande mercato finanziario del mondo, e sicuramente la loro politica economica influenza i tassi di interesse mondiali. La storia degli Stati Uniti è quindi più simile a un'economia chiusa che a una piccola economia aperta. Per le altre economie, il modello a piccola economia aperta è una buona approssimazione: questa politica economica si adatta meglio.
          </p>
          <p>
            In tutti i casi, ciò che il modello a piccola economia aperta ci insegna è particolarmente attuale: il saldo del conto corrente NX = S − I è determinato dalle decisioni di risparmio e investimento del Paese, non dalla politica commerciale. Le politiche commerciali (tariffe, dazi, quote) cambiano il tasso di cambio reale ma non NX di equilibrio. Per ridurre un deficit commerciale persistente, occorre aumentare il risparmio nazionale o ridurre l'investimento. Questo è il messaggio chiave dell'economia aperta nel lungo periodo.
          </p>
        </div>

        <div className="formula-box">
          <div>NX = S − I (saldo commerciale = risparmio − investimento)</div>
          <div>ε equilibrio determinato da S − I e dalla curva NX(ε)</div>
          <div>Politica fiscale interna → S↓ → NX↓ + ε↑ (apprezzamento)</div>
          <div>Politica commerciale → ε↑ ma NX invariato</div>
          <div style={{ fontSize: '0.88rem', marginTop: '0.4rem', color: '#64748b' }}>
            <strong>Sintesi del modello dell'economia aperta:</strong> il conto corrente è determinato da fattori macroeconomici (S, I), non dalla politica commerciale.
          </div>
        </div>

        <div className="conclusion-grid">
          <div className="conclusion-item">
            <h4>Identità chiave: NX = S − I</h4>
            <p>Il saldo commerciale è uguale alla differenza tra risparmio nazionale e investimento. Risparmio &gt; investimento implica saldo commerciale positivo (e flusso netto di capitali in uscita).</p>
          </div>
          <div className="conclusion-item">
            <h4>Piccola economia aperta</h4>
            <p>Il tasso di interesse interno r coincide con r* mondiale. L'investimento è esogeno, NX è la variabile di aggiustamento determinata da S − I(r*).</p>
          </div>
          <div className="conclusion-item">
            <h4>Tasso di cambio reale</h4>
            <p>ε = (e × P) / P* è il prezzo relativo dei beni nazionali rispetto a quelli esteri. Il livello di equilibrio si determina dove NX(ε) = S − I.</p>
          </div>
          <div className="conclusion-item">
            <h4>Politiche commerciali e PPP</h4>
            <p>Tariffe e dazi non riducono NX di equilibrio: causano solo apprezzamento di ε. La PPP è un benchmark di lungo periodo: l'indice Big Mac mostra deviazioni anche persistenti.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
