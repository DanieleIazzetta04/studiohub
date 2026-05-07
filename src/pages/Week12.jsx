import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import '../index.css';
import './macro/macro.css';

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
//  GRAPH 1 — ELASTICITA' AL PREZZO: Q = a − b·P, ricavo R = P·Q
// ══════════════════════════════════════════════════════════════
function PriceElasticityGraph() {
  const [b, setB] = useState(1.5);   // elasticità (pendenza)
  const [P, setP] = useState(40);    // prezzo corrente
  const a = 200;                      // intercetta domanda

  const xMin = 0, xMax = 100;
  const yMin = 0, yMax = 250;

  // Curva di domanda Q = a - b*P
  const ptsDomanda = [];
  for (let p = xMin; p <= xMax; p += 1) {
    const q = a - b * p;
    if (q >= 0) ptsDomanda.push([toX(p, xMin, xMax), toY(q, yMin, yMax)]);
  }
  const pathDomanda = 'M ' + ptsDomanda.map(pt => pt.join(',')).join(' L ');

  // Q corrente
  const Q = Math.max(0, a - b * P);
  const R = P * Q;

  // Prezzo che massimizza il ricavo: P* = a / (2b)
  const Pstar = a / (2 * b);
  const Qstar = a - b * Pstar;
  const Rmax = Pstar * Qstar;

  return (
    <div className="graph-block">
      <h4 className="graph-title">Elasticità al prezzo: Q = a − b·P, con ricavo R = P·Q</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          <Axes xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax} xLabel="P (prezzo)" yLabel="Q (quantità)" xFmt={v => v.toFixed(0)} yFmt={v => v.toFixed(0)} />
          {/* Rettangolo del ricavo */}
          <rect x={toX(0, xMin, xMax)} y={toY(Q, yMin, yMax)} width={toX(P, xMin, xMax) - toX(0, xMin, xMax)} height={toY(0, yMin, yMax) - toY(Q, yMin, yMax)} fill="#0ea5e9" fillOpacity={0.15} stroke="#0ea5e9" strokeDasharray="3,3" strokeWidth={1} />
          {/* Curva di domanda */}
          <path d={pathDomanda} fill="none" stroke="#a855f7" strokeWidth={2.2} />
          {/* Punto di massimo ricavo */}
          {Pstar <= xMax && Qstar >= 0 && (
            <>
              <circle cx={toX(Pstar, xMin, xMax)} cy={toY(Qstar, yMin, yMax)} r={5} fill="#16a34a" stroke="#fff" strokeWidth={2} />
              <text x={toX(Pstar, xMin, xMax) + 6} y={toY(Qstar, yMin, yMax) - 4} fontSize={9} fill="#16a34a">R*max</text>
            </>
          )}
          {/* Punto corrente */}
          <circle cx={toX(P, xMin, xMax)} cy={toY(Q, yMin, yMax)} r={6} fill="#ef4444" stroke="#fff" strokeWidth={2} />
          <line x1={toX(P, xMin, xMax)} y1={PT + cH} x2={toX(P, xMin, xMax)} y2={toY(Q, yMin, yMax)} stroke="#ef4444" strokeDasharray="3,3" strokeWidth={1.2} />
          <line x1={PL} y1={toY(Q, yMin, yMax)} x2={toX(P, xMin, xMax)} y2={toY(Q, yMin, yMax)} stroke="#ef4444" strokeDasharray="3,3" strokeWidth={1.2} />
        </svg>
        <div className="graph-controls">
          <SliderControl label="Elasticità (pendenza)" symbol="b" value={b} min={0.5} max={3.0} step={0.1} onChange={setB} color="#a855f7" fmt={v => v.toFixed(2)} />
          <SliderControl label="Prezzo" symbol="P" value={P} min={10} max={100} step={1} onChange={setP} color="#ef4444" fmt={v => v.toFixed(0) + '€'} />
          <div className="result-box">
            <div className="result-row"><strong>Quantità Q</strong> <span>{Q.toFixed(0)}</span></div>
            <div className="result-row"><strong>Ricavo R = P·Q</strong> <span style={{ color: '#0ea5e9' }}>{R.toFixed(0)}€</span></div>
            <div className="result-row"><strong>P* (max ricavo)</strong> <span style={{ color: '#16a34a' }}>{Pstar.toFixed(1)}€</span></div>
            <div className="result-row"><strong>R*max</strong> <span style={{ color: '#16a34a' }}>{Rmax.toFixed(0)}€</span></div>
          </div>
          <div className="insight-mini">Se b è alto, la domanda è elastica (clienti reattivi al prezzo). Il ricavo R = P·Q è massimo per P* = a/(2b): aumentare il prezzo oltre P* riduce il ricavo perché la quantità cala più che proporzionalmente.</div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAPH 2 — MARKETING MIX RADAR: 4P (Product, Price, Place, Promotion)
// ══════════════════════════════════════════════════════════════
function MarketingMixRadarGraph() {
  const [product, setProduct] = useState(7);
  const [price, setPrice] = useState(6);
  const [place, setPlace] = useState(5);
  const [promotion, setPromotion] = useState(8);

  const dims = [
    { name: 'Product', value: product, color: '#0ea5e9' },
    { name: 'Price', value: price, color: '#a855f7' },
    { name: 'Place', value: place, color: '#16a34a' },
    { name: 'Promotion', value: promotion, color: '#f59e0b' },
  ];
  const N = dims.length;
  const cx = W / 2;
  const cy = H / 2;
  const Rmax = Math.min(W, H) / 2 - 30;
  const maxScale = 10;

  // Punteggio totale (media)
  const totalScore = (product + price + place + promotion) / N;

  // Punti del poligono per ogni livello
  const angle = (i) => -Math.PI / 2 + (2 * Math.PI * i) / N;
  const ptFor = (i, v) => {
    const r = (v / maxScale) * Rmax;
    return [cx + r * Math.cos(angle(i)), cy + r * Math.sin(angle(i))];
  };

  const polyPts = dims.map((d, i) => ptFor(i, d.value)).map(p => p.join(',')).join(' ');

  // Griglia (livelli concentrici)
  const levels = [2, 4, 6, 8, 10];

  return (
    <div className="graph-block">
      <h4 className="graph-title">Marketing Mix: radar delle 4P (Product, Price, Place, Promotion)</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          {/* Cerchi concentrici */}
          {levels.map((lvl, idx) => (
            <circle key={idx} cx={cx} cy={cy} r={(lvl / maxScale) * Rmax} fill="none" stroke="#e2e8f0" strokeWidth={0.8} />
          ))}
          {/* Assi */}
          {dims.map((d, i) => {
            const [x, y] = ptFor(i, maxScale);
            return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="#cbd5e1" strokeWidth={1} />;
          })}
          {/* Etichette */}
          {dims.map((d, i) => {
            const [x, y] = ptFor(i, maxScale + 1.2);
            return <text key={i} x={x} y={y} fontSize={11} textAnchor="middle" fill="#475569" fontWeight={600}>{d.name}</text>;
          })}
          {/* Etichette livelli */}
          {levels.map((lvl, idx) => (
            <text key={idx} x={cx + 3} y={cy - (lvl / maxScale) * Rmax + 3} fontSize={8} fill="#94a3b8">{lvl}</text>
          ))}
          {/* Poligono valori */}
          <polygon points={polyPts} fill="#0ea5e9" fillOpacity={0.25} stroke="#0ea5e9" strokeWidth={2} />
          {/* Punti vertici */}
          {dims.map((d, i) => {
            const [x, y] = ptFor(i, d.value);
            return <circle key={i} cx={x} cy={y} r={4.5} fill={d.color} stroke="#fff" strokeWidth={1.5} />;
          })}
        </svg>
        <div className="graph-controls">
          <SliderControl label="Product" symbol="P1" value={product} min={0} max={10} step={0.1} onChange={setProduct} color="#0ea5e9" fmt={v => v.toFixed(1)} />
          <SliderControl label="Price" symbol="P2" value={price} min={0} max={10} step={0.1} onChange={setPrice} color="#a855f7" fmt={v => v.toFixed(1)} />
          <SliderControl label="Place" symbol="P3" value={place} min={0} max={10} step={0.1} onChange={setPlace} color="#16a34a" fmt={v => v.toFixed(1)} />
          <SliderControl label="Promotion" symbol="P4" value={promotion} min={0} max={10} step={0.1} onChange={setPromotion} color="#f59e0b" fmt={v => v.toFixed(1)} />
          <div className="result-box">
            <div className="result-row"><strong>Punteggio mix</strong> <span style={{ color: totalScore >= 7 ? '#16a34a' : totalScore >= 5 ? '#f59e0b' : '#ef4444' }}>{totalScore.toFixed(2)}/10</span></div>
            <div className="result-row"><strong>Coerenza (min)</strong> <span>{Math.min(product, price, place, promotion).toFixed(1)}</span></div>
          </div>
          <div className="insight-mini">Le 4P devono essere coerenti tra loro: un mix sbilanciato (es. prodotto premium con promozione scarsa) fallisce. Il punteggio minimo evidenzia l'anello debole della strategia.</div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAPH 3 — CUSTOMER JOURNEY: modello 5A di Kotler (funnel)
// ══════════════════════════════════════════════════════════════
function CustomerJourneyGraph() {
  const [c1, setC1] = useState(60);  // Aware → Appeal
  const [c2, setC2] = useState(50);  // Appeal → Ask
  const [c3, setC3] = useState(40);  // Ask → Act
  const [c4, setC4] = useState(30);  // Act → Advocate

  const initial = 10000; // potenziali clienti consapevoli
  const aware = initial;
  const appeal = aware * (c1 / 100);
  const ask = appeal * (c2 / 100);
  const act = ask * (c3 / 100);
  const advocate = act * (c4 / 100);

  const stages = [
    { name: 'Aware', value: aware, color: '#0ea5e9' },
    { name: 'Appeal', value: appeal, color: '#06b6d4' },
    { name: 'Ask', value: ask, color: '#a855f7' },
    { name: 'Act', value: act, color: '#f59e0b' },
    { name: 'Advocate', value: advocate, color: '#16a34a' },
  ];

  const xMin = 0, xMax = stages.length;
  const yMin = 0, yMax = aware * 1.05;

  const barW = (cW / stages.length) * 0.6;

  return (
    <div className="graph-block">
      <h4 className="graph-title">Customer Journey: modello 5A di Kotler (funnel di conversione)</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          <Axes xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax} xLabel="" yLabel="clienti" nX={stages.length} xFmt={v => ''} yFmt={v => v >= 1000 ? (v / 1000).toFixed(1) + 'k' : v.toFixed(0)} />
          {stages.map((s, i) => {
            const xCenter = toX(i + 0.5, xMin, xMax);
            const yTop = toY(s.value, yMin, yMax);
            const yBottom = toY(0, yMin, yMax);
            return (
              <g key={i}>
                <rect x={xCenter - barW / 2} y={yTop} width={barW} height={yBottom - yTop} fill={s.color} fillOpacity={0.7} stroke={s.color} strokeWidth={1.5} />
                <text x={xCenter} y={yBottom + 14} fontSize={10} textAnchor="middle" fill="#475569" fontWeight={600}>{s.name}</text>
                <text x={xCenter} y={yTop - 4} fontSize={9} textAnchor="middle" fill={s.color} fontWeight={600}>{s.value >= 1000 ? (s.value / 1000).toFixed(1) + 'k' : s.value.toFixed(0)}</text>
              </g>
            );
          })}
        </svg>
        <div className="graph-controls">
          <SliderControl label="Aware → Appeal" symbol="c₁" value={c1} min={10} max={90} step={1} onChange={setC1} color="#06b6d4" fmt={v => v.toFixed(0) + '%'} />
          <SliderControl label="Appeal → Ask" symbol="c₂" value={c2} min={10} max={90} step={1} onChange={setC2} color="#a855f7" fmt={v => v.toFixed(0) + '%'} />
          <SliderControl label="Ask → Act" symbol="c₃" value={c3} min={10} max={90} step={1} onChange={setC3} color="#f59e0b" fmt={v => v.toFixed(0) + '%'} />
          <SliderControl label="Act → Advocate" symbol="c₄" value={c4} min={10} max={90} step={1} onChange={setC4} color="#16a34a" fmt={v => v.toFixed(0) + '%'} />
          <div className="result-box">
            <div className="result-row"><strong>Advocate finali</strong> <span style={{ color: '#16a34a' }}>{advocate.toFixed(0)}</span></div>
            <div className="result-row"><strong>Tasso conversione totale</strong> <span>{(advocate / initial * 100).toFixed(2)}%</span></div>
          </div>
          <div className="insight-mini">Nel modello 5A di Kotler, ogni stadio è un filtro. Anche tassi di conversione singoli alti generano un "advocate rate" finale piccolo: 50% × 50% × 50% × 50% = 6,25%. L'obiettivo è massimizzare la conversione ad ogni transizione critica.</div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAPH 4 — CUSTOMER LIFETIME VALUE: CLV nel tempo
// ══════════════════════════════════════════════════════════════
function CLVGraph() {
  const [M, setM] = useState(150);    // margine annuo netto
  const [ret, setRet] = useState(80); // retention rate %
  const [r, setR] = useState(8);      // tasso di sconto %
  const [years, setYears] = useState(10);

  const xMin = 0, xMax = 15;
  const C = 0; // costi annui (incluso in M netto)

  // CLV cumulato anno per anno: Σ M·(retention)^(t-1) / (1+r)^t
  const ptsCLV = [];
  let cum = 0;
  const series = [];
  for (let t = 1; t <= xMax; t += 1) {
    const retFactor = Math.pow(ret / 100, t - 1);
    const discount = Math.pow(1 + r / 100, t);
    cum += (M - C) * retFactor / discount;
    series.push({ t, value: cum });
    ptsCLV.push([toX(t, xMin, xMax), 0]); // placeholder, riassegnamo dopo
  }

  // Calcolo yMax dinamico
  const yMaxRaw = series[series.length - 1].value * 1.15;
  const yMax = yMaxRaw < 100 ? 100 : Math.ceil(yMaxRaw / 100) * 100;
  const yMin = 0;

  // Path
  const pts = series.map(s => [toX(s.t, xMin, xMax), toY(s.value, yMin, yMax)]);
  const path = 'M ' + [toX(0, xMin, xMax), toY(0, yMin, yMax)].join(',') + ' L ' + pts.map(p => p.join(',')).join(' L ');

  // CLV totale al periodo selezionato
  const CLVtot = series[Math.min(years, series.length) - 1].value;

  return (
    <div className="graph-block">
      <h4 className="graph-title">Customer Lifetime Value: CLV(t) = Σ M·(ret)^(t−1) / (1+r)^t</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          <Axes xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax} xLabel="anni" yLabel="CLV (€)" nX={5} xFmt={v => v.toFixed(0)} yFmt={v => v >= 1000 ? (v / 1000).toFixed(1) + 'k' : v.toFixed(0)} />
          <path d={path} fill="none" stroke="#0ea5e9" strokeWidth={2.4} />
          {/* Area sotto la curva */}
          <path d={path + ` L ${toX(xMax, xMin, xMax)},${toY(0, yMin, yMax)} L ${toX(0, xMin, xMax)},${toY(0, yMin, yMax)} Z`} fill="#0ea5e9" fillOpacity={0.12} />
          {/* Punti */}
          {pts.map((p, i) => (
            <circle key={i} cx={p[0]} cy={p[1]} r={2.5} fill="#0ea5e9" />
          ))}
          {/* Punto corrente */}
          {years <= xMax && (
            <>
              <circle cx={toX(years, xMin, xMax)} cy={toY(CLVtot, yMin, yMax)} r={6} fill="#16a34a" stroke="#fff" strokeWidth={2} />
              <line x1={toX(years, xMin, xMax)} y1={PT + cH} x2={toX(years, xMin, xMax)} y2={toY(CLVtot, yMin, yMax)} stroke="#16a34a" strokeDasharray="3,3" strokeWidth={1.2} />
              <line x1={PL} y1={toY(CLVtot, yMin, yMax)} x2={toX(years, xMin, xMax)} y2={toY(CLVtot, yMin, yMax)} stroke="#16a34a" strokeDasharray="3,3" strokeWidth={1.2} />
            </>
          )}
        </svg>
        <div className="graph-controls">
          <SliderControl label="Margine annuo netto" symbol="M" value={M} min={10} max={500} step={5} onChange={setM} color="#0ea5e9" fmt={v => v.toFixed(0) + '€'} />
          <SliderControl label="Retention rate" symbol="ρ" value={ret} min={50} max={95} step={1} onChange={setRet} color="#a855f7" fmt={v => v.toFixed(0) + '%'} />
          <SliderControl label="Tasso di sconto" symbol="r" value={r} min={1} max={15} step={0.5} onChange={setR} color="#f59e0b" fmt={v => v.toFixed(1) + '%'} />
          <SliderControl label="Durata" symbol="t" value={years} min={1} max={15} step={1} onChange={setYears} color="#16a34a" fmt={v => v.toFixed(0) + ' anni'} />
          <div className="result-box">
            <div className="result-row"><strong>CLV totale a {years} anni</strong> <span style={{ color: '#16a34a' }}>{CLVtot.toFixed(0)}€</span></div>
            <div className="result-row"><strong>vs CAC sano (1/3 CLV)</strong> <span>{(CLVtot / 3).toFixed(0)}€ max</span></div>
          </div>
          <div className="insight-mini">Il CLV cresce nel tempo ma a tassi decrescenti: retention bassa o tasso di sconto alto erodono i flussi futuri. Un benchmark di marketing sano richiede CLV/CAC ≥ 3:1, dunque il CAC massimo accettabile è circa CLV/3.</div>
        </div>
      </div>
    </div>
  );
}

const markdownContent = `
# Capitolo 12 — La Gestione Strategica del Mercato (Marketing Management)

## Introduzione: cosa significa fare marketing

Se dovessimo dire in una frase cosa sia il marketing, potremmo adottare la definizione ufficiale dell'American Marketing Association: *"Marketing is the activity, set of institutions, and processes for creating, communicating, delivering, and exchanging offerings that have value for customers, clients, partners, and society at large"*. Tradotta in italiano, questa definizione afferma che il marketing è l'insieme di attività, istituzioni e processi volti a creare, comunicare, consegnare e scambiare offerte che hanno valore per i clienti, i partner e la società nel suo complesso. Tre elementi meritano di essere sottolineati. In primo luogo il marketing non è solo pubblicità, né solo vendita, ma un insieme ampio di processi che attraversa l'intera impresa. In secondo luogo al centro c'è il concetto di valore, perché il marketing esiste proprio in quanto crea qualcosa di utile per qualcuno. In terzo luogo i destinatari del valore non sono soltanto i clienti paganti, ma anche i partner, i fornitori e la società intera.

In pratica il marketing è tutto ciò che riguarda la gestione del rapporto con il mercato, e comprende attività tra loro molto diverse come le vendite vere e proprie, la comunicazione pubblicitaria, la gestione della relazione con i clienti attraverso sistemi di CRM, il funzionamento della rete commerciale, il supporto esterno ai distributori, i rapporti con la distribuzione, le politiche di prezzo e di comunicazione, la misurazione della soddisfazione dei clienti, la gestione dei flussi informativi bidirezionali tra cliente e impresa e la gestione dei social media. Tutte queste funzioni, apparentemente eterogenee, convergono verso un unico obiettivo di fondo: far arrivare valore al cliente nel modo più efficace ed efficiente possibile, e in cambio catturare valore per l'impresa.

---

## 1. Gli Obiettivi Generali del Marketing

Il marketing persegue tre obiettivi generali che non sono alternativi ma complementari, e che devono essere perseguiti simultaneamente. Il primo è attrarre nuovi clienti promettendo loro di offrire valore: è l'obiettivo più visibile, quello a cui si pensa istintivamente quando si parla di marketing. Il marketing si rivolge a potenziali clienti che ancora non conoscono il prodotto o che lo conoscono ma non lo comprano, e li convince che vale la pena acquistarlo. La promessa di valore ne costituisce la base, perché senza una promessa credibile nessuno comprerà. Il secondo obiettivo, spesso sottovalutato, è conservare e far crescere i clienti esistenti rendendoli soddisfatti e fedeli: la maggior parte delle imprese ricava gran parte del proprio fatturato da clienti esistenti, non da nuovi acquisiti, e far sì che un cliente torni, compri di più o compri prodotti diversi della stessa impresa è molto più economico che acquisirne di nuovi. Studi classici mostrano che acquisire un nuovo cliente costa da cinque a dieci volte più che conservarne uno esistente. Il terzo obiettivo, ancora più evoluto, è considerare i clienti come soggetti portatori di interesse, ossia non trattarli come semplice fonte di fatturato ma come stakeholder con interessi che vanno oltre la singola transazione. Un cliente soddisfatto diventa ambasciatore del brand, mentre un cliente insoddisfatto si trasforma in detrattore, e un'impresa che tratta i propri clienti come partner di lungo periodo costruisce una relazione che produce valore durevole nel tempo.

---

## 2. Gli Approcci Possibili al Marketing

Non tutte le imprese fanno marketing nello stesso modo, ed esistono diversi orientamenti che riflettono concezioni diverse del rapporto impresa-mercato e che si sono succeduti storicamente nell'evoluzione dell'economia industriale. L'orientamento alla produzione è il più antico, e si applica nei contesti in cui la domanda è molto maggiore dell'offerta: la gente vuole il prodotto, ma non c'è abbastanza produzione per soddisfare tutti. È la situazione dell'industria automobilistica degli anni Venti di Henry Ford, che sintetizzò questo approccio con la celebre frase "you can have any color as long as it's black". L'imperativo era la disponibilità immediata del prodotto e il contenimento dei costi unitari, la differenziazione era scarsa se non assente, e il marketing aveva un ruolo marginale perché bastava produrre e i clienti avrebbero comprato qualsiasi cosa uscisse dalla fabbrica.

Quando la concorrenza comincia a emergere l'impresa passa all'orientamento al prodotto, concentrandosi sulla qualità intrinseca di ciò che produce: "facciamo il miglior prodotto sul mercato, e i clienti verranno". La differenziazione attiva la domanda, perché i clienti sono attratti dalla qualità superiore, e ci si impegna in un miglioramento tecnico continuo con un'attenzione quasi maniacale alle specifiche. Il marketing ha ancora un ruolo limitato, se non quello di comunicare la qualità, ed è l'approccio tipico delle imprese ingegneristiche, innamorate della propria tecnologia. Il rischio è quello che viene chiamato la "trappola del prodotto migliore": costruire qualcosa di tecnicamente eccellente ma che il mercato non vuole.

Con la maturazione dei mercati arriva poi il momento in cui l'offerta supera la domanda: ci sono più produttori che clienti disposti a comprare. L'impresa deve allora conquistare il mercato, trovare e mantenere il proprio spazio, e passa all'orientamento alle vendite, in cui il marketing assume un ruolo soprattutto operativo: si spingono le vendite con pubblicità aggressiva, sconti, promozioni, una forza vendita numerosa e motivata. Il focus è "vendere quello che abbiamo" più che "produrre quello che i clienti vogliono". È l'approccio tipico delle imprese che confondono marketing e vendite, e che può funzionare nel breve periodo ma non costruisce relazioni durature con i clienti. L'orientamento più moderno ed evoluto è infine quello al mercato, o marketing strategico: l'impresa parte dai bisogni dei clienti, non dal proprio prodotto, e prima di progettare l'offerta cerca di comprendere i bisogni di un segmento specifico di clienti, solo in seguito disegnando un'offerta che li soddisfi. In questo approccio il marketing assume un ruolo strategico a tutti gli effetti, non più come funzione di supporto ma come guida delle scelte aziendali fondamentali, perché è il marketing strategico che orienta le decisioni su cosa produrre, per chi, a che prezzo e attraverso quali canali.

---

## 3. Dallo Scambio alla Relazione: l'Evoluzione del Marketing

Un'ulteriore evoluzione moderna è il passaggio da una logica di mero scambio a una logica di relazione. Nella logica dello scambio l'impresa comprende il valore da offrire al mercato e lo incorpora in un'offerta, rendendo poi il prodotto disponibile al mercato: il marketing interviene a monte nella progettazione e a valle nella vendita del processo produttivo, e l'offerta serve la domanda in una logica transazionale. Nella logica della relazione invece l'impresa genera valore nello sviluppo di un rapporto intenso e continuato nel tempo con il cliente: il valore non è più soltanto incorporato nel prodotto fisico, ma anche nella relazione stessa, e il cliente riconosce un premio al rapporto instaurato con l'impresa, perché la fidelizzazione vale più del prezzo. In questa prospettiva domanda e offerta interagiscono, e il cliente non è un ricevitore passivo ma un co-creatore di valore.

Questa prospettiva relazionale si è ulteriormente evoluta con l'avvento delle tecnologie digitali, che permettono un'interazione continua tra impresa e cliente attraverso social media, app e servizi post-vendita digitali, una personalizzazione di massa in cui ogni cliente riceve un'offerta calibrata sulle sue preferenze, una misurazione dettagliata della soddisfazione e del comportamento di acquisto e una vera co-creazione in cui il cliente partecipa attivamente alla definizione del prodotto attraverso recensioni, crowd-design e comunità di utilizzatori. Il marketing contemporaneo ha così abbandonato definitivamente il modello della comunicazione a senso unico per abbracciare un modello conversazionale, in cui la voce del cliente entra nella progettazione stessa dell'offerta.

---

## 4. Il Processo di Marketing: Strategico e Operativo

Il marketing si articola in due grandi fasi che corrispondono a orizzonti temporali e logiche decisionali differenti. Il marketing strategico si occupa delle scelte di lungo periodo che definiscono dove e come l'impresa vuole competere, e comprende l'analisi dell'ambiente e dei clienti attraverso ricerche di mercato e gestione dei dati, il disegno della strategia di marketing articolato nelle fasi di segmentazione, targeting, differenziazione e posizionamento, la definizione di mission, vision e value proposition, l'analisi dell'ambiente competitivo e del mercato e la costruzione del business model che sostiene l'intera proposta. Il marketing operativo, invece, traduce le scelte strategiche in azioni concrete di breve periodo attraverso quello che è universalmente noto come marketing mix, ossia le famose quattro P: product, price, placement e promotion.

Queste quattro leve vengono integrate in un programma di marketing coerente, in cui tutte devono lavorare simultaneamente verso lo stesso obiettivo. Il processo si chiude con la costruzione di relazioni profittevoli sia con i clienti attraverso il CRM, ossia il Customer Relationship Management, sia con i partner attraverso il PRM, ossia il Partner Relationship Management. Infine si arriva alla cattura del valore dal cliente, che si traduce nella creazione di clienti soddisfatti e fedeli, nella massimizzazione del Customer Lifetime Value, cioè del valore che un cliente genera nell'arco dell'intera relazione con l'impresa, e nell'aumento della quota di mercato e della quota di cliente, ossia la percentuale della spesa del cliente in una categoria che si indirizza verso la nostra impresa.

---

## 5. Il Marketing Strategico: la Segmentazione

Il cuore del marketing strategico è il processo che va sotto l'acronimo STP, ossia Segmentazione, Targeting, Posizionamento, tre fasi logicamente consequenziali che definiscono l'impianto strategico dell'azione di marketing.

### 5.1 La Segmentazione del Mercato

La segmentazione consiste nel dividere il mercato in gruppi con bisogni, caratteristiche o comportamenti distinti, che richiedono strategie e programmi di marketing diversi. Il mercato totale è quasi sempre eterogeneo, perché al suo interno convivono clienti molto diversi tra loro, e la segmentazione cerca di disaggregare questo mercato eterogeneo per identificare sotto-gruppi omogenei al loro interno. La segmentazione è particolarmente rilevante nei mercati maturi, dove la crescita si ottiene specializzandosi; nei contesti di concorrenza intensa, dove bisogna trovare una nicchia difendibile; nei mercati con domanda complessa e differenziata, dove un prodotto unico non soddisfa tutti; e per le imprese con limitata capacità produttiva, che non possono aggredire tutto il mercato simultaneamente.

### 5.2 Le Variabili di Segmentazione

Per segmentare si usano variabili chiave che permettono di identificare differenze di comportamento tra gruppi di consumatori. Le variabili geografiche includono regione, Paese, territorio, città e quartiere, e risultano utili quando i comportamenti variano geograficamente, come nel caso delle preferenze alimentari o delle condizioni climatiche. Le variabili demografiche comprendono età, sesso, composizione familiare, reddito, occupazione, nazionalità, religione e livello di istruzione, e sono le più facili da misurare oltre che le più usate storicamente. Le variabili psicografiche, riferite a classe sociale, stile di vita e personalità, sono molto più sofisticate perché due persone con la stessa demografia possono avere stili di vita radicalmente diversi. Le variabili comportamentali, relative ad attitudini, usi, preferenze, benefici ricercati, status e frequenza d'uso, fedeltà alla marca, sono forse le più potenti perché catturano direttamente il comportamento di acquisto.

Una distinzione fondamentale è poi quella tra B2B e B2C, cioè tra marketing verso altre imprese (business-to-business) e marketing verso consumatori finali (business-to-consumer): i processi di acquisto nel B2B sono più complessi, coinvolgono più persone nella decisione e hanno cicli di vendita più lunghi. Alcune delle variabili selezionate possono variare nel tempo, perché una persona può cambiare stile di vita, classe sociale o fedeltà a un brand, e per questo ci si concentra spesso sul rapporto che il consumatore stabilisce con il prodotto prima, durante e dopo il consumo.

### 5.3 La Scelta del Mercato

La segmentazione non è un esercizio astratto: serve a definire l'ampiezza del business dell'impresa lungo tre dimensioni fondamentali. La prima è quella dei gruppi di clienti, cioè quali segmenti servire. La seconda è quella della funzione d'uso, perché lo stesso prodotto può soddisfare bisogni diversi. La terza è quella della tecnologia, cioè con quale mezzo tecnico soddisfare il bisogno individuato. A queste tre dimensioni si aggiunge il fattore geografico, che impone di scegliere se competere in ambito locale, nazionale o internazionale, e ciascuna di queste scelte implica scale, capacità e risorse profondamente diverse.

---

## 6. Il Targeting

### 6.1 I Criteri per un Buon Segmento

Una volta identificati i segmenti, occorre scegliere quelli attrattivi, e un segmento di mercato per essere interessante deve rispondere a diversi requisiti simultaneamente. Deve essere omogeneo al suo interno rispetto al parametro scelto ed eterogeneo rispetto ad altri segmenti nello stesso mercato, perché se non è omogeneo non è un vero segmento. Deve essere misurabile, nel senso che bisogna poter quantificare la dimensione del segmento, la domanda che genera e i concorrenti che lo servono, dal momento che segmenti impossibili da misurare sono praticamente inservibili per la pianificazione. Deve essere rilevante e significativo, cioè abbastanza grande da giustificare un investimento di marketing e produttivo per soddisfare la domanda: un segmento troppo piccolo non ripaga gli sforzi, anche se la soglia di rilevanza dipende dalle dimensioni e dagli obiettivi dell'impresa, perché ciò che è grande per una piccola impresa può essere trascurabile per una multinazionale. Deve essere accessibile, nel senso che l'impresa deve poter entrare nel segmento con un'offerta competitiva tale da conquistare quote di mercato; se il segmento è inattaccabile perché troppo presidiato dai concorrenti non serve averlo individuato. Deve infine essere profittevole, perché la relazione tra costi di servizio e domanda deve garantire un margine positivo sostenibile nel tempo.

### 6.2 Il Targeting: Valutazione dell'Attrattività

Il targeting è la scelta operativa dei segmenti da presidiare, e per selezionarli si valutano tre aspetti principali. Si esamina anzitutto la dimensione e la crescita del segmento analizzando vendite correnti, tassi di crescita e profittabilità attesa: un segmento piccolo ma in forte crescita può essere più interessante di uno grande ma stagnante. Si valuta poi l'attrattività strutturale del segmento applicando qui il modello delle cinque forze di Porter, che considera la competizione interna, la minaccia di prodotti sostituti, il potere contrattuale di fornitori e clienti e le barriere all'ingresso. Si considerano infine gli obiettivi e le risorse dell'impresa, valutando quali risorse e competenze sono necessarie per servire con successo un dato segmento e se l'impresa può effettivamente offrire un valore superiore a quello dei concorrenti ottenendo così un vantaggio competitivo.

### 6.3 Le Scelte di Targeting

Valutati i segmenti, ci sono quattro strategie possibili di targeting. Il marketing indifferenziato consiste nell'ignorare le opportunità di segmentazione e offrire un prodotto unico a tutto il mercato, in un approccio massificato tipico dei prodotti di largo consumo non differenziati come il sale da cucina o lo zucchero. Il marketing differenziato, o segmentato, consiste nel presidiare diversi segmenti sviluppando offerte differenti per ciascuno: richiede maggiori investimenti in prodotti, comunicazione e canali ma massimizza la copertura del mercato, come fa un'azienda automobilistica che propone modelli per famiglie, giovani, segmento lusso e appassionati di sportive. Il marketing concentrato, o di nicchia, consiste nel presidiare uno o pochi segmenti specifici cercando di essere il migliore in quella nicchia, ed è la strategia tipica delle piccole e medie imprese che non possono aggredire mercati ampi, come accade con le marche di orologi di lusso focalizzate sui collezionisti. Il micromarketing, infine, può essere locale o individuale e consiste nell'adattare il marketing a singole località o addirittura a singoli individui, cosa che con il digitale è diventata possibile attraverso offerte, prezzi e messaggi personalizzati per ogni singolo cliente, come negli algoritmi di raccomandazione di Amazon.

### 6.4 Le Possibili Scelte Strategiche

Tre macro-strategie sono connesse alle strategie competitive di Porter. La strategia di concentrazione limita il numero di segmenti prodotto-mercato da presidiare, trasformando l'impresa in uno specialista, ed è coerente con la strategia di focalizzazione di Porter. La strategia di specializzazione selettiva è incentrata sul cliente o sul prodotto, fa leva su clienti specifici o su funzione d'uso e consiste nel presidiare alcuni segmenti selezionati in base a criteri precisi. La strategia di copertura completa, infine, massimizza il numero di segmenti prodotto-mercato coperti trasformando l'impresa in un generalista, ed è coerente con le strategie di leadership di costo o di differenziazione ampia. Le logiche sottostanti a concentrazione e copertura ampia sono diverse: la concentrazione permette di avere accesso a scala e apprendimento specifico, una miglior conoscenza del sistema in cui si opera e una maggiore visibilità nel segmento; la copertura ampia genera sinergie tra segmenti, economie di scopo e un rischio ripartito tra sistemi diversi.

---

## 7. Il Posizionamento

### 7.1 Definizione

Il posizionamento è la terza fase del processo STP e consiste nel definire l'offerta e l'immagine di un'impresa in modo tale da consentirle di occupare una posizione distinta e apprezzata nella mente del mercato obiettivo. Il posizionamento attiene alla percezione che il cliente ha del prodotto o servizio di un'impresa rispetto ai prodotti o servizi della concorrenza e rispetto al concetto di prodotto ideale: non è ciò che il prodotto è oggettivamente, ma come viene percepito dal consumatore. La citazione classica di Al Ries e Jack Trout, pubblicata nel 1981, cattura perfettamente il concetto: *"Il posizionamento non è l'intervento su un prodotto. Il posizionamento è l'intervento sulla mente del potenziale destinatario della comunicazione"*. Il vero campo di battaglia del posizionamento è dunque la mente del consumatore, non il prodotto in quanto tale, e un prodotto eccellente posizionato male è un fallimento, mentre un prodotto mediocre posizionato bene può essere un successo.

### 7.2 Differenziazione e Posizionamento

Scegliere un posizionamento significa anzitutto identificare un set di possibili differenze di valore e vantaggi competitivi su cui costruire una posizione distintiva, poi scegliere il "giusto" vantaggio competitivo, ossia quello più difendibile e rilevante per i clienti, e infine scegliere una strategia di posizionamento che prende il nome di value proposition. Incrociando il livello di benefici offerti, che può essere più, uguale o meno rispetto ai concorrenti, con il livello di prezzo, che può essere più alto, uguale o più basso, si ottengono cinque possibili value proposition. La prima è more for more, ossia più benefici a un prezzo più alto: è il posizionamento premium tipico di marchi come Apple, BMW e Rolex, in cui il cliente paga di più perché riceve di più in termini di qualità, status o servizio. La seconda è more for same, ossia più benefici allo stesso prezzo, una strategia aggressiva per strappare clienti ai concorrenti offrendo di più a parità di spesa, come fa un ristorante che propone porzioni maggiori al prezzo medio di mercato. La terza è more for less, ossia più benefici a un prezzo più basso: è il posizionamento più attraente per il cliente ma difficile da sostenere nel lungo periodo, perché erode i margini, e può durare solo se si hanno costi strutturalmente più bassi, come nel caso di IKEA nel proprio settore. La quarta è same for less, ossia gli stessi benefici a un prezzo più basso, una strategia di prezzo contenuto per benefici standard come quella di Ryanair, che offre la stessa tratta aerea a un prezzo molto più basso eliminando i servizi non essenziali. La quinta è less for much less, ossia meno benefici a un prezzo molto più basso, una strategia di semplificazione radicale in cui il cliente accetta meno servizi in cambio di una forte riduzione del prezzo, come negli hotel low-cost Formule 1 o Motel 6.

### 7.3 Gli Errori di Posizionamento

Esistono tre errori classici di posizionamento in cui le imprese cadono frequentemente. Il posizionamento insufficiente si verifica quando il mercato finale ha un'idea non precisa della marca: non si riesce a dire cosa il brand rappresenti o a cosa sia associato, ed è lo scenario peggiore perché il brand diventa di fatto invisibile. Il posizionamento troppo ristretto si verifica quando solo una piccola parte del mercato percepisce il posizionamento ricercato: può essere intenzionale, come nelle strategie di nicchia, ma spesso è involontario, e si finisce per essere percepiti solo da un sotto-segmento senza raggiungere la platea desiderata. Il posizionamento confuso o poco credibile nasce invece dall'assenza di coerenza negli strumenti usati per raggiungere il posizionamento: l'impresa dice una cosa ma ne fa un'altra, come un brand che comunica un posizionamento di lusso ma vende nei discount, e il cliente resta confuso e non crede più al messaggio.

### 7.4 Gli Strumenti per il Posizionamento

Per costruire e gestire il posizionamento si usano diversi strumenti, a cominciare dalla modellizzazione, che consiste nello scomporre il prodotto generico in un insieme di attributi. Per ciascun attributo si collegano i benefici che soddisfa, e poi si individuano quali attributi-benefici siano i più importanti per i clienti. Gli attributi sono caratteristiche oggettive che differenziano le varie marche presenti sul mercato e che spiegano la competizione, costituendo i fattori critici di successo. Per ogni attributo si misurano l'importanza relativa rispetto all'insieme totale, la deviazione standard della distribuzione dei punteggi di valutazione che misura la differenziazione percepita, e un indice di differenziazione moltiplicato per l'importanza, riportato su base cento, che misura quanto ogni attributo è effettivamente discriminante. Alla modellizzazione segue la valutazione, che consiste nel verificare come i vari prodotti specifici siano percepiti rispetto a questi attributi.

Lo strumento forse più noto sono le mappe di posizionamento, o target map, che rappresentano visivamente il posizionamento dell'impresa rispetto a due variabili poste sugli assi della mappa. Nei quadranti si collocano marchi, prodotti e competitor, e questo permette una lettura immediata del posizionamento competitivo. La costruzione delle mappe si realizza tramite tecniche statistiche di analisi multivariata come la factor analysis, che riassumono il paniere di attributi individuati in poche caratteristiche rilevanti. Le variabili tipiche usate sugli assi possono essere i fattori che caratterizzano il prodotto o servizio, il prezzo, il livello qualitativo, i benefici offerti o le occasioni d'uso. La mappa individua come un prodotto è percepito dal consumatore rispetto ai concorrenti e al prodotto ideale: per esempio in una mappa con asse X rappresentante il prezzo e asse Y rappresentante la qualità percepita, un prodotto posizionato in alto a destra è premium, mentre uno in basso a sinistra è economico, e la posizione ideale è quella vicina al "prodotto ideale", cioè al punto della mappa che rappresenta le preferenze massime del consumatore.

### 7.5 Le Strategie di Posizionamento in Pratica

Tutti gli elementi del marketing mix, cioè product, price, place e promotion, contribuiscono al posizionamento, che va quindi costantemente monitorato e, se necessario, rifocalizzato. Gli elementi di marketing operativo traducono in politiche di breve periodo e in azioni concrete le scelte di marketing strategico, e un disallineamento tra queste leve compromette inevitabilmente l'efficacia del posizionamento stesso.

---

## 8. Il Brand: la Percezione Desiderata

Il brand è lo strumento principale attraverso cui si costruisce il posizionamento. Formalmente il brand è un insieme di contenuti e forme che richiamano nella mente del consumatore delle componenti intangibili, formandone la percezione. Il brand si basa sulla formazione di un'identità ben precisa nel tempo: non nasce istantaneamente, ma è il risultato di anni di comunicazione coerente, di esperienze dei clienti e di reputazione accumulata.

### 8.1 Le Tre Componenti del Brand

Il brand si articola in tre componenti distinte. La componente identificativa è costituita dai segni di riconoscimento del brand, come il logo, il nome, i colori, il font e l'immagine coordinata, ed è la base della consapevolezza del brand, o brand awareness: quando un consumatore vede quei segni riconosce il brand, come accade con il baffo di Nike, le tre strisce di Adidas o la mela morsa di Apple. La componente percettiva è costituita dagli attributi di marca, dalle percezioni, dai benefici e dai valori che il consumatore associa al brand: non è solo cosa il brand è, ma cosa rappresenta nella mente del consumatore, per cui Volvo significa sicurezza, BMW significa piacere di guidare e Coca-Cola significa felicità e cultura americana. La componente fiduciaria è collegata all'esperienza vissuta dal consumatore: se il prodotto mantiene le promesse la fiducia cresce, se le tradisce crolla, e la fiducia è faticosa da costruire ma facilissima da distruggere.

### 8.2 Gli Elementi del Brand

Dal punto di vista tecnico un brand è un nome, un disegno, un simbolo o una combinazione di questi elementi che identificano i beni o i servizi di un venditore, o di un gruppo di venditori, e li differenziano da quelli dei competitori. Si distingue poi il brand name, che è la parte del brand che può essere pronunciata, come Nike, Apple o Coca-Cola, dal brand mark, che è la parte del brand che può essere riconosciuta ma non pronunciata, cioè il simbolo, il disegno, la colorazione o il tipo di scrittura specifico. Si parla infine di trademark quando al brand, o a una sua parte, è stata attribuita protezione legale attraverso la registrazione ufficiale.

### 8.3 Le Famiglie di Brand

Un'impresa che ha più prodotti deve decidere come strutturare il proprio portafoglio di brand, e ha quattro opzioni principali. Può adottare un brand diverso per ogni prodotto, dando a ciascuno un nome e un'identità completamente separati, come fa Procter & Gamble con marchi quali Pantene, Ariel, Dash, Pampers, Tide, Gillette e Oral-B: il vantaggio è che ogni brand può posizionarsi in modo mirato su un segmento e i problemi di uno non contaminano gli altri, ma lo svantaggio è il costo elevato di comunicazione per ciascun brand. Può optare per l'umbrella branding, usando un unico brand per tutti i prodotti, come fa Samsung che con lo stesso nome commercializza smartphone, televisori e lavatrici: il vantaggio sono le economie nella costruzione del brand e la facilità nel lanciare nuovi prodotti grazie alla credibilità esistente, lo svantaggio è che un problema su un prodotto danneggia tutti gli altri. Una soluzione intermedia è il brand differenziato per famiglie di prodotto, con un brand principale e sottobrand per categorie specifiche, come Toyota per le automobili normali e Lexus per il segmento lusso. Infine l'impresa può combinare un brand aziendale e uno di prodotto, comunicando sia il proprio nome sia quello del prodotto, come nel caso dei prodotti Nestlé venduti con il nome specifico affiancato a quello della corporate.

### 8.4 La Brand Extension

Una strategia di brand extension è qualsiasi sforzo di utilizzare un brand di successo per lanciare un prodotto totalmente nuovo o semplicemente modificato, e permette sia di risparmiare parte dei costi necessari alla creazione di un nuovo brand sia di sfruttare fin dall'inizio la conoscenza diffusa del brand esistente tra i consumatori. Il rischio è però quello della dilution del brand: se il nuovo prodotto è molto diverso o di qualità inferiore, può danneggiare la percezione del brand originale compromettendo capitali reputazionali costruiti in decenni.

### 8.5 Le Politiche di Branding Internazionale

Un'impresa che opera in più paesi deve scegliere tra due estremi e le relative soluzioni intermedie. Un approccio home country oriented mantiene lo stesso brand e la stessa comunicazione in tutti i paesi, in una logica di standardizzazione massima. Un approccio world oriented adatta invece il brand ai diversi mercati locali, personalizzando ogni elemento della comunicazione in funzione della cultura del paese. Le soluzioni intermedie, oggi largamente prevalenti, standardizzano alcuni elementi fondamentali del brand come il logo o la brand promise globale e localizzano invece aspetti più superficiali come il tono della comunicazione, gli endorser o gli adattamenti di prodotto.

---

## 9. Il Marketing Operativo: le 4P del Marketing Mix

Il marketing operativo si articola nelle quattro leve classiche del marketing mix, il product che rappresenta il prodotto, il price che rappresenta il prezzo, il placement o place che rappresenta la distribuzione, e il promotion che rappresenta la comunicazione e promozione. Queste quattro leve devono essere coordinate tra loro perché il posizionamento desiderato si realizzi effettivamente nella percezione del mercato.

---

## 10. Product: il Prodotto

### 10.1 Il Concetto di Prodotto-Servizio

Per prodotto-servizio si intende tutto ciò che può essere offerto a un consumatore per soddisfare un suo bisogno o desiderio. Il prodotto non è solo l'oggetto fisico o il servizio puro, ma un "paniere di attributi", cioè di vantaggi ricercati dal cliente. Una celebre citazione di Charles Revson, fondatore di Revlon, rende l'idea in modo illuminante: *"Nelle nostre fabbriche produciamo cosmetici, nei negozi vendiamo speranza"*. Un rossetto, tecnicamente parlando, è cera colorata, ma quello che la cliente compra è bellezza, attrattiva, fiducia in sé stessa. Il prodotto come bene fisico è soltanto il veicolo di qualcosa di più astratto. Il prodotto ha infatti tre dimensioni fondamentali: assolve funzioni d'uso, che è la dimensione funzionale e pratica; assume significati simbolici, che è la dimensione identitaria e riguarda quello che comunichiamo agli altri acquistando quel prodotto; e stimola e rende possibili esperienze, che è la dimensione esperienziale e riguarda ciò che una volta acquistato il prodotto ci permette di fare o di vivere.

### 10.2 Gli Elementi del Prodotto

Il prodotto si compone di elementi materiali e immateriali articolati su tre livelli. Gli elementi soglia sono ciò che l'acquirente riceve in termini di soluzione di un bisogno o di un problema: sono gli elementi base, il minimo sindacale che il cliente si aspetta di trovare in quella categoria di prodotto. Gli elementi di posizionamento sono le caratteristiche che collocano il prodotto in una certa posizione nel mercato, come la qualità, lo stile o il livello di prezzo. Gli elementi di unicità, infine, sono ciò che rende il prodotto differenziato e unico rispetto ai concorrenti, cioè la sua identità distintiva. Alcuni prodotti hanno caratteristiche particolari che richiedono attenzioni specifiche: i prodotti non standardizzati, in cui ogni unità è diversa, come le opere d'arte o le abitazioni; i prodotti a elevato valore unitario come le automobili o i gioielli; i prodotti voluminosi, difficili da trasportare e stoccare, come i mobili; e i prodotti deperibili, che richiedono rapidità nella catena, come gli alimentari freschi o i fiori recisi.

### 10.3 Linea e Gamma di Prodotto

Una linea di prodotti è un insieme di prodotti correlati tra loro perché svolgono funzioni simili, sono rivolti allo stesso mercato o rientrano nella stessa categoria merceologica, e di solito condividono caratteristiche tecniche o stilistiche. La linea di shampoo di un'azienda, per esempio, può includere shampoo per capelli secchi, per capelli grassi, antiforfora e per bambini: tutti fanno parte della stessa linea perché sono shampoo, anche se variano per tipo di utilizzo o target. La gamma di prodotti, o assortimento, è invece l'insieme complessivo di tutte le linee di prodotto offerte da un'azienda, ed è quindi più ampia della singola linea perché comprende l'intera offerta disponibile. La gamma di prodotti di un'azienda di cosmetici potrebbe per esempio includere una linea di shampoo, una di balsami, una di creme per il viso, una di trucchi e una di profumi. La gamma è caratterizzata dallo scope, ossia dal numero di linee di prodotto: più è ampia la gamma, maggiori sono le linee di prodotto e maggiore è il grado di diversificazione. Ci deve essere coerenza tra le gamme di prodotto, espressa da somiglianza e unitarietà, e ogni linea è un sottoinsieme della gamma che rappresenta tutta l'offerta dell'impresa.

Un esempio emblematico è quello di Procter & Gamble con il brand Oral-B. Oral-B costituisce una linea specifica dedicata all'igiene orale, e al suo interno si trovano diverse sotto-categorie come gli spazzolini manuali, gli spazzolini elettrici con varie versioni tecnologiche, i dentifrici, i colluttori, il filo interdentale e i prodotti professionali destinati ai dentisti. Ciascuna sotto-categoria presenta a sua volta più modelli e varianti, e l'insieme costituisce l'intera linea Oral-B. P&G ha poi molte altre linee, dedicate a detergenti, cura personale e alimentari, e la totalità di queste linee costituisce la gamma complessiva del gruppo, una delle più ampie e diversificate al mondo nei beni di largo consumo.

### 10.4 Il Packaging

Il packaging è l'insieme delle attività di ideazione e produzione del contenitore o dell'incarto per un prodotto, e assolve molte funzioni allo stesso tempo. Serve a contenere e proteggere il prodotto, che è la sua funzione logistica primaria; attira l'attenzione e pone in evidenza il prodotto contenuto, svolgendo una funzione di marketing; identifica chiaramente la marca, svolgendo una funzione di branding; rispecchia il posizionamento del prodotto, perché un prodotto di lusso richiede un packaging di lusso; favorisce l'utilizzazione da parte del consumatore, in una funzione ergonomica; e tiene in considerazione i problemi dell'esercente, come la facilità di trasporto, stoccaggio ed esposizione.

Il packaging si articola su tre livelli. Il packaging primario è il contenitore a diretto contatto con il prodotto, come la bottiglietta di un profumo, e svolge le funzioni di contenimento, sicurezza e attrazione. Il packaging secondario è il contenitore di rivestimento, come la scatoletta di cartone che contiene la bottiglietta, e svolge funzioni di ulteriore sicurezza, possibilità di promozione attraverso la comunicazione grafica e labelling, cioè l'apposizione delle etichette informative. L'imballaggio, infine, è il livello più esterno, come il cartone che contiene più scatolette, e svolge funzioni di trasporto, magazzinaggio e identificazione logistica lungo la catena distributiva.

---

## 11. Placement: la Distribuzione e la Gestione Commerciale

### 11.1 La Gestione Commerciale e i Canali Distributivi

La gestione commerciale si articola su due macro-aree: l'organizzazione dei canali distributivi, che determina chi porta il prodotto al cliente, e lo sviluppo dei servizi commerciali nell'ambito dei canali distributivi, che comprende l'assistenza pre e post-vendita, la formazione e il supporto. Un canale di distribuzione è costituito da un insieme di istituzioni indipendenti che svolgono il complesso di attività necessarie per trasferire un prodotto e il relativo titolo di proprietà dal produttore al consumatore. Il canale è fondamentale per il successo commerciale, perché un prodotto eccellente non arriva al cliente senza un canale adeguato capace di sostenerlo. La distribuzione svolge numerose funzioni interconnesse, che comprendono il conferimento dell'ordine, cioè la comunicazione dell'intenzione del cliente finale di acquistare; il finanziamento, cioè l'acquisizione e l'impiego delle risorse finanziarie per coprire i costi delle attività commerciali e il mantenimento delle scorte; la gestione del rischio, cioè l'assunzione e la copertura delle varie categorie di rischi connessi alle attività svolte lungo il canale, come il rischio di invenduto, di credito o logistico; la distribuzione fisica, che comprende trasporto e stoccaggio; il pagamento, con la gestione dei flussi finanziari tra cliente e produttore; e il trasferimento del titolo di proprietà, che formalizza il passaggio del possesso del bene.

### 11.2 La Struttura del Canale: la Lunghezza

Ciascun intermediario che svolge la funzione di avvicinare il prodotto all'acquirente finale costituisce uno stadio del canale, e gli stadi intermedi definiscono la lunghezza del canale stesso. La distinzione fondamentale è tra canale diretto e canale indiretto. Nel canale diretto il produttore vende direttamente al consumatore finale, attraverso punti vendita del produttore come gli Apple Store o i negozi monomarca, oppure attraverso la vendita diretta online nell'e-commerce gestito dal produttore stesso. I vantaggi sono rilevanti: non vi sono intermediari che assumono la proprietà del bene, si ha un maggiore controllo sulle funzioni distributive, e si può garantire un elevato livello di servizio alla vendita e di assistenza all'utilizzatore. Lo svantaggio principale è l'investimento significativo richiesto per creare e gestire una rete di negozi o una piattaforma e-commerce performante.

Nel canale indiretto, al contrario, è presente una serie di intermediari tra produttore e cliente finale, come grossisti, distributori e retailer. Il vantaggio principale è il minore impegno finanziario per l'impresa, che può sfruttare la struttura esistente degli intermediari e accedere rapidamente a grandi reti di distribuzione. La gestione del canale indiretto impone però di decidere il tipo di coordinamento. Nei canali tradizionali gli operatori sono indipendenti, la cooperazione e il coordinamento sono molto scarsi, e i rischi sono comportamenti opportunistici, prezzi e servizi sfavorevoli ed elevati costi transazionali dovuti a negoziazioni continue e controlli della qualità. Nei canali integrati si ha invece il massimo coordinamento tra i soggetti del canale, con il produttore che esercita un controllo forte sulla distribuzione, come nel caso del franchising o della vendita esclusiva; il rischio in questo caso è una possibile mancata efficacia per la difficoltà di adattamento alle specificità locali.

### 11.3 E-Commerce

L'e-commerce è una forma particolarmente importante di canale diretto, o talvolta ibrido, e richiede un'infrastruttura ICT adeguata, che comprende piattaforma e-commerce, sistemi di pagamento e logistica efficiente. Ha introdotto il possibile ruolo degli infomediari, cioè di intermediari informativi come i comparatori di prezzo o i marketplace del tipo Amazon, e abilita i servizi virtuali, comprendendo software, streaming e cloud computing. L'e-commerce ha rivoluzionato la distribuzione permettendo di eliminare gli intermediari fisici in un processo di disintermediazione, raggiungere globalmente i clienti superando i confini geografici, personalizzare l'offerta utilizzando i dati di navigazione e acquisto, e ridurre drasticamente i costi di gestione per alcune categorie di prodotti, specialmente quelli digitali o dematerializzabili.

---

## 12. Promotion: Comunicazione e Promozione

### 12.1 Definizione e Leve

La comunicazione è l'insieme dei segnali emessi dall'impresa verso i diversi pubblici a cui si rivolge, come clienti, distributori, fornitori, azionisti, istituzioni pubbliche e personale interno: non è solo pubblicità, ma ogni forma di contatto intenzionale con gli stakeholder. La comunicazione commerciale, rivolta ai clienti, utilizza quattro leve principali. La pubblicità è comunicazione a pagamento attraverso i media, come televisione, stampa, radio, affissioni e digital advertising, e può essere di massa o rivolta a target specifici. La promozione delle vendite comprende azioni di breve periodo volte a stimolare l'acquisto immediato, come sconti, concorsi, campionature e coupon. Le pubbliche relazioni riguardano la gestione dei rapporti con opinion leader, stampa e istituzioni, e costruiscono reputazione nel lungo periodo con costi spesso inferiori a quelli della pubblicità a pagamento. Il marketing diretto è infine una comunicazione personalizzata verso il singolo cliente, attuata attraverso email marketing, telemarketing, SMS e messaggi sui social media, e si caratterizza per essere altamente targettizzato e misurabile.

### 12.2 Le Aree di Comunicazione

La comunicazione dell'impresa si articola in quattro aree distinte. La comunicazione commerciale gestisce le relazioni con il mercato dei clienti finali e intermedi, cioè i distributori, ed è l'area più visibile su cui si concentra il marketing operativo. La comunicazione istituzionale gestisce le relazioni con il pubblico generico, cioè la società, i cittadini e i non-clienti, e serve a costruire l'immagine dell'azienda nel suo complesso. La comunicazione interna gestisce le relazioni con i soggetti coinvolti nella gestione dell'impresa, cioè dipendenti e collaboratori, e un'impresa con ottima comunicazione esterna ma pessima comunicazione interna presenta problemi seri di coerenza. La comunicazione economico-finanziaria, infine, gestisce le relazioni con i portatori di risorse e dei risultati patrimoniali, ossia azionisti, investitori e analisti finanziari, attraverso bilanci, comunicati finanziari e incontri con la comunità finanziaria.

### 12.3 Le Promozioni Vendite

Le promozioni vendite rispondono ad alcune regole fondamentali. Un eccessivo ricorso alle promozioni tende a ridurre la fedeltà alla marca, perché il cliente si abitua a comprare solo in offerta e non più al prezzo pieno. Le promozioni devono essere sinergiche rispetto alla pubblicità e agli altri elementi del marketing mix, e devono essere qualitativamente in linea con il prodotto e la sua immagine, perché una promozione cheap danneggia un brand premium. Il piano promozionale deve essere unico e diverso da quelli dei concorrenti per mantenere una sua riconoscibilità. I destinatari delle promozioni sono principalmente due: il consumatore finale e il trade, cioè distributori e retailer.

Le promozioni al consumatore dispongono di un ampio ventaglio di strumenti. Il bonus pack offre più prodotto allo stesso prezzo, mentre il premium pack contiene un omaggio aggiuntivo nel pack. Concorsi e lotterie stimolano la partecipazione attiva del consumatore. La campionatura distribuisce gratuitamente prove del prodotto per favorire la prima esperienza. Il buono sconto è un coupon utilizzabile per un acquisto successivo, mentre la riduzione di prezzo è immediata e agisce al momento dell'acquisto. Il free mail-in permette di ricevere un regalo spedendo una prova d'acquisto. Le promozioni al trade utilizzano invece strumenti specificamente rivolti ai distributori, come gli sconti d'acquisto nelle forme di sconto quantità o sconto cassa, i contributi in pubblicità con cui l'industria finanzia parte della pubblicità del distributore, i contributi in materiale promozionale quali espositori, cartelli e display, e i convegni e mostre, che includono incontri di categoria e fiere professionali.

### 12.4 Il Messaggio e la Copy Strategy

Un messaggio pubblicitario efficace si struttura su tre piani distinti. Sul piano di cosa comunicare vanno definiti il beneficio principale che il prodotto offre, la prova delle affermazioni per sostenere la credibilità, e il tono, il linguaggio, lo stile e l'atmosfera coerenti con il target di riferimento. Sul piano di come comunicare, per il mezzo stampa vanno definiti titolo, illustrazione e testo, mentre per il mezzo video vanno definite scene e sequenza narrativa. Sul piano della rilevanza va verificata la coerenza del messaggio con gli obiettivi di marketing e con l'immagine del brand.

Gli elementi della copy strategy sono tre. La promessa principale, o main promise, è il vantaggio o beneficio che si promette a chi acquisterà il prodotto, e costituisce il cuore del messaggio. La reason why è la spiegazione, più o meno tecnica, degli attributi del prodotto e di come essi porteranno al raggiungimento del vantaggio promesso, dando credibilità alla promessa. Il pay-off, o claim finale, è la parte verbale o testuale che chiude l'annuncio pubblicitario sintetizzando il messaggio e rendendolo memorabile, come il celebre "Just do it" di Nike, il "Think different" di Apple o l'"I'm lovin' it" di McDonald's.

### 12.5 Le Tecniche di Comunicazione Non Convenzionale

Accanto alla comunicazione tradizionale si sono sviluppate tecniche innovative particolarmente adatte all'era digitale. Il guerrilla marketing ha l'obiettivo di colpire il consumatore con messaggi comunicazionali in contesti inattesi e non tradizionali, utilizzando luoghi pubblici come piazze, stazioni e centri commerciali in modo sorprendente, con un basso budget e un alto impatto virale. Il viral marketing ha l'obiettivo di spostare il compito della diffusione del messaggio in seno ai consumatori stessi, progettando contenuti pensati per essere condivisi spontaneamente dalla rete di relazioni dei consumatori attraverso passaparola e condivisioni sui social media, e richiede contenuti straordinari per diventare davvero virali. Il tribal marketing ha l'obiettivo di riunire i consumatori in tribù accomunate da gusti e preferenze comuni, creando una community attorno al brand dove i consumatori condividono valori, linguaggi e rituali, come avviene nella community Apple, tra i motociclisti Harley-Davidson o tra i tifosi di sport specifici.

---

## 13. Price: il Prezzo

### 13.1 Le Caratteristiche Peculiari del Prezzo

Il prezzo ha quattro caratteristiche uniche rispetto alle altre variabili del marketing mix. È l'unica variabile del marketing mix che produce ricavi, perché le altre tre, product, placement e promotion, generano costi: solo il prezzo genera ricavi, e questa asimmetria rende il prezzo critico per il conto economico. È la variabile sulla quale l'azienda può esercitare il maggior controllo diretto, perché si può modificare istantaneamente, a differenza del prodotto o della distribuzione, che richiedono tempi lunghi di modifica. Ha un ruolo centrale nella pianificazione strategica, perché riflette il posizionamento complessivo dell'impresa. È una delle decisioni più complesse dell'azienda, perché deve tenere conto di numerose componenti interne ed esterne come costi di produzione, strategia di posizionamento, comportamento dei concorrenti, sensibilità dei clienti e condizioni di mercato. Gestire il prezzo significa quindi gestire una variabile simultaneamente critica, perché ogni decisione di prezzo influenza immediatamente il risultato economico dell'impresa e cambiare del cinque percento il prezzo ha di solito un impatto molto maggiore sul profitto che cambiare del cinque percento il volume, e strategica, perché riflette gli obiettivi strategici e di posizionamento dell'impresa. Elementi chiave da considerare sono l'esistenza di un sistema di prezzi, e non di un singolo prezzo, che si articola per diversi segmenti e canali, e l'elevata variabilità possibile nel tempo e tra situazioni.

### 13.2 La Doppia Prospettiva del Prezzo

Il prezzo assume significati diversi a seconda di chi lo guarda. Dalla prospettiva del cliente il prezzo è un costo o sacrificio che l'acquirente sopporta per l'acquisto di un prodotto o servizio, è soggettivo perché ogni cliente percepisce il valore in modo diverso, e muta nel tempo perché lo stesso prezzo può essere percepito come alto o basso a seconda del contesto. Dalla prospettiva del cliente, definire il prezzo equivale a determinare il valore del prodotto per la clientela. Dalla prospettiva dell'azienda il prezzo è invece quanto l'azienda si aspetta di ottenere a remunerazione degli sforzi di produzione e commercializzazione, e deve coprire i costi, remunerare il capitale investito e generare profitto. Fissare il prezzo significa quindi trovare un equilibrio tra queste due prospettive apparentemente divergenti.

### 13.3 L'Elasticità della Domanda al Prezzo

L'elasticità della domanda al prezzo misura la sensibilità della quantità domandata al variare del prezzo, e si calcola come rapporto tra la variazione percentuale della quantità domandata e la variazione percentuale del prezzo. Si ha elevata elasticità, con valore assoluto maggiore di uno, quando piccole variazioni di prezzo producono grandi variazioni della quantità domandata: in questo caso all'impresa conviene fissare il prezzo relativamente basso per favorire consistenti incrementi della quantità venduta, ed è il caso tipico di prodotti facilmente sostituibili, di largo consumo, senza differenziazione. Si ha invece bassa elasticità, con valore assoluto minore di uno, quando l'aumento del prezzo determina una riduzione contenuta della domanda, determinando un incremento del fatturato complessivo: in questo caso conviene alzare i prezzi, e la situazione è tipica di prodotti di lusso, beni essenziali senza sostituti, farmaci unici e prodotti con forte fedeltà alla marca.

### 13.4 I Criteri di Fissazione del Prezzo

Esistono quattro criteri fondamentali che guidano la fissazione del prezzo. L'orientamento alla domanda fissa il prezzo con l'obiettivo della massimizzazione dei profitti in base alla disponibilità a pagare dei clienti: si studia la curva di domanda e si cerca il punto ottimo. L'orientamento alla concorrenza orienta il prezzo in base a quello praticato dai concorrenti, e si può scegliere di essere sopra, sotto o in linea con i prezzi dei concorrenti. L'orientamento alla struttura dei costi di prodotto mira a conseguire un soddisfacente livello di redditività partendo dai costi, secondo la logica per cui il prezzo è pari ai costi più il margine desiderato. L'orientamento al cliente cerca invece di mettere insieme i tre aspetti precedenti partendo dal valore percepito dal cliente, in una sintesi che è la prospettiva più evoluta e più difficile da realizzare.

Partendo dall'orientamento ai costi si possono distinguere tre livelli di prezzo. Il prezzo base eguaglia il costo variabile unitario e comporta una perdita, perché non si coprono i costi fissi, ma l'impresa può operare fino a che non deve sostenere nuovi investimenti: è tipico di situazioni di crisi o di ingresso aggressivo in un mercato. Il prezzo tecnico somma al costo variabile unitario i costi fissi medi, consentendo il recupero dei costi totali: è il prezzo di break-even, in cui non c'è profitto ma neanche perdita. Il prezzo target aggiunge ai costi totali un margine standard di profitto, realizzando un certo livello di redditività desiderato: è il prezzo "normale" in condizioni di mercato stabile.

### 13.5 Politica del Prezzo di Lancio: Penetrazione

Quando si lancia un nuovo prodotto si sceglie tra due strategie opposte di prezzo: la penetrazione e la scrematura. La strategia di penetrazione consiste nel lanciare il prodotto con un prezzo contenuto rispetto ai concorrenti, con l'obiettivo di far crescere al massimo i volumi di vendita anche a scapito di margini ridotti. Concretamente, l'impresa mantiene prezzi più bassi della media di mercato, e i margini tendono a crescere nel tempo grazie alle economie di scala che abbassano il costo unitario all'aumentare dei volumi. Questa politica è adatta a prodotti non differenziati, è diretta a clienti sensibili al prezzo, si usa tipicamente nei lanci in contesti di forte concorrenza, e richiede tipologie di produzione che consentono economie di scala rilevanti. Gli obiettivi tipici sono la crescita rapida della quota di mercato e il raggiungimento della massa critica di volumi prodotti per usufruire delle economie di scala. Le condizioni necessarie perché la strategia funzioni sono un'elevata elasticità della domanda al prezzo, un contenuto poco innovativo del prodotto, la capacità dei consumatori di valutare la qualità del prodotto, un basso livello di barriere all'entrata tale che il prezzo possa disincentivare l'imitazione, una facilità di imitazione da parte dei concorrenti e un alto livello di economie di scala nel settore.

### 13.6 Politica del Prezzo di Lancio: Scrematura

La strategia di scrematura, o skimming, consiste invece nel lanciare il prodotto con un prezzo più alto rispetto ai concorrenti. Concretamente l'impresa entra sul mercato con prezzo più alto della media, e nel tempo abbassa il prezzo quando i segmenti di mercato più attrattivi, quelli disposti a pagare il premium, hanno esaurito il loro potenziale di consumo; si allarga progressivamente l'offerta a nuovi segmenti di mercato. Questa politica è adatta al lancio di prodotti innovativi, perché i clienti sono più concentrati sul prodotto che sul prezzo e non hanno termini di confronto. Gli obiettivi tipici sono il contenimento della domanda nella fase di introduzione, quando le capacità produttive sono ancora limitate, e la riduzione degli effetti di errate valutazioni del prezzo di ingresso, perché se sbagliamo ad alzare possiamo sempre scendere, mentre se sbagliamo ad abbassare è molto difficile risalire. Le condizioni necessarie sono una bassa sensibilità al prezzo, l'esistenza di un segmento ampio di persone disposte a pagare un premium price, una domanda eterogenea in termini di elasticità al prezzo che coesistono segmenti con disponibilità diverse, un prodotto innovativo, una limitata capacità dei consumatori di valutare la qualità intrinseca del prodotto che favorisce l'uso del prezzo come segnale di qualità, difficoltà per i concorrenti a imitare rapidamente, e una limitata portata delle economie di scala, ossia costi unitari che non scendono molto con i volumi.

Penetrazione e scrematura non sono giuste o sbagliate in assoluto, ma dipendono dal prodotto, dal mercato, dai concorrenti e dalle capacità produttive dell'impresa. La penetrazione è adatta quando il prezzo è basso rispetto ai concorrenti, l'obiettivo è la quota di mercato, i clienti sono sensibili al prezzo, il prodotto è standardizzato, le economie di scala sono alte e le barriere all'imitazione sono basse, come accade per gli smartphone entry-level cinesi. La scrematura è adatta quando il prezzo è alto rispetto ai concorrenti, l'obiettivo sono profitti elevati su pochi clienti, i clienti sono innovatori e disposti a pagare, il prodotto è innovativo e differenziato, le economie di scala sono basse e le barriere all'imitazione sono alte, come è stato nel caso dell'iPhone al lancio. La scelta tra le due politiche è una delle decisioni strategiche più delicate del marketing operativo e condiziona il successo dell'intero lancio di prodotto.

---

## 14. Approfondimento: la Definizione Kotleriana e l'Ottica di Marketing

Accanto alla definizione dell'American Marketing Association, la dottrina manageriale fa costante riferimento alla definizione proposta da Philip Kotler, considerato il padre del marketing moderno: il marketing è *"il processo sociale e manageriale mediante il quale individui e gruppi ottengono ciò di cui hanno bisogno e che desiderano attraverso la creazione e lo scambio di prodotti e valore con altri"*. L'elemento più rilevante della formulazione kotleriana risiede nella distinzione netta fra ottica di prodotto, ottica di vendita e ottica di marketing, distinzione che rappresenta uno dei fondamenti concettuali della disciplina. Nell'ottica di prodotto l'impresa parte dalle proprie capacità tecnologiche e produttive e cerca a posteriori il mercato a cui rivolgersi: si produce ciò che si sa fare bene e si confida che il cliente lo apprezzi. Nell'ottica di vendita, tipica dei contesti in cui l'offerta supera la domanda, l'impresa produce una gamma di beni e poi mette in campo una pressione commerciale aggressiva per smaltire le scorte, in una logica di breve periodo che privilegia il volume sulla relazione. Nell'ottica di marketing, infine, il punto di partenza non è il prodotto né la fabbrica, bensì il bisogno del cliente: si parte dall'analisi del mercato, si identifica un bisogno latente o esplicito, si progetta un'offerta capace di soddisfarlo e solo a quel punto si attivano i processi produttivi e commerciali. La differenza è radicale: nell'ottica di prodotto si vende ciò che si produce, nell'ottica di marketing si produce ciò che si è in grado di vendere.

| Ottica | Punto di partenza | Focus | Mezzo | Fine |
|---|---|---|---|---|
| **Produzione** | Fabbrica | Prodotti esistenti | Vendita e promozione | Profitto da volumi |
| **Vendita** | Fabbrica | Prodotti esistenti | Pressione commerciale | Profitto da volumi |
| **Marketing** | Mercato | Bisogni del cliente | Marketing integrato | Profitto da soddisfazione |
| **Marketing societale** | Mercato + Società | Bisogni + benessere collettivo | Marketing sostenibile | Profitto + valore sociale |

---

## 15. L'Evoluzione del Marketing: da 1.0 a 5.0

La riflessione contemporanea sul marketing, sviluppata in modo sistematico da Kotler e dai suoi coautori, individua cinque grandi stagioni evolutive della disciplina, ognuna corrispondente a una diversa concezione del rapporto fra impresa, cliente e contesto sociale. Il **Marketing 1.0**, definito *product-centric*, è il marketing classico dell'era industriale, in cui il prodotto rappresenta il fulcro dell'azione e l'obiettivo è vendere il maggior numero di unità a una massa indifferenziata di consumatori: la celebre Ford T è l'archetipo di questa stagione. Il **Marketing 2.0**, definito *customer-centric*, sposta il baricentro sul cliente, riconosciuto come soggetto razionale ed emotivo con bisogni specifici da soddisfare: nascono in questa fase la segmentazione, il targeting, il posizionamento e la logica della relazione duratura. Il **Marketing 3.0**, definito *human-centric* o *values-driven*, integra alla logica del cliente la dimensione dei valori condivisi: il consumatore non viene più trattato solo come acquirente ma come persona con anima, mente e cuore, e i brand di successo diventano portatori di una missione che trascende la mera transazione, come avviene per Patagonia con il proprio impegno ambientale o per Dove con la campagna Real Beauty. Il **Marketing 4.0** integra le logiche tradizionali con la rivoluzione digitale, abbracciando una connettività pervasiva, l'omnicanalità, l'analisi dei big data e la personalizzazione algoritmica, riconoscendo che il customer journey nell'era digitale segue traiettorie non lineari che si snodano fra touchpoint fisici e digitali. Il **Marketing 5.0**, infine, rappresenta la frontiera attuale e si fonda sull'integrazione fra tecnologie human-mimicking come intelligenza artificiale, machine learning, realtà aumentata, IoT e blockchain e una rinnovata centralità dell'umano: la tecnologia non sostituisce le relazioni, ma le potenzia per generare esperienze più ricche e personalizzate.

| Stagione | Periodo | Focus | Logica dominante | Strumento chiave |
|---|---|---|---|---|
| **Marketing 1.0** | 1900-1960 | Prodotto | Vendere alla massa | Pubblicità classica |
| **Marketing 2.0** | 1960-2000 | Cliente | Soddisfare e fidelizzare | STP e CRM |
| **Marketing 3.0** | 2000-2010 | Valori e umanità | Mission e responsabilità | Brand purpose |
| **Marketing 4.0** | 2010-2020 | Digitale e connettività | Omnicanalità e dati | Big data, social, mobile |
| **Marketing 5.0** | 2020-oggi | Tech for humanity | AI augmented marketing | AI, AR/VR, IoT, blockchain |

---

## 16. Analisi del Mercato e Ricerche di Marketing

L'azione di marketing strategico si fonda su una conoscenza approfondita del mercato, che si costruisce attraverso le ricerche di marketing, ossia il processo sistematico di raccolta, analisi e interpretazione di informazioni sui consumatori, sui concorrenti e sull'ambiente competitivo. Le ricerche di marketing si distinguono anzitutto per finalità: le ricerche **esplorative** servono a chiarire la natura di un problema poco compreso, le ricerche **descrittive** ne misurano dimensioni e caratteristiche, le ricerche **causali** verificano relazioni di causa-effetto fra variabili. In termini metodologici, si distinguono ricerche qualitative e ricerche quantitative. Le **ricerche qualitative** lavorano su campioni ridotti e mirano a comprendere in profondità motivazioni, atteggiamenti, percezioni e significati; gli strumenti tipici sono il focus group, ovvero discussioni guidate con piccoli gruppi di consumatori, l'intervista in profondità, l'osservazione etnografica del comportamento di consumo nei contesti reali e le proiezioni psicologiche. Le **ricerche quantitative** lavorano su campioni numerosi e statisticamente rappresentativi, e producono risultati misurabili e generalizzabili attraverso questionari strutturati, sondaggi online e telefonici, panel di consumatori che monitorano gli acquisti nel tempo ed esperimenti controllati. Una distinzione ulteriore è fra ricerche **primarie**, in cui i dati vengono raccolti ex novo dall'impresa o da un istituto specializzato, e ricerche **secondarie** o desk research, in cui si utilizzano dati già esistenti come banche dati, report di settore, dati ISTAT o pubblicazioni accademiche. Nell'era contemporanea le ricerche di marketing sono state profondamente rivoluzionate dai big data, che permettono di analizzare in tempo reale milioni di interazioni digitali, e dalla social media analytics, che offre accesso istantaneo alla voce non sollecitata del consumatore.

---

## 17. STP: Sintesi Sinottica e Tabella Riassuntiva

Il processo di Segmentazione-Targeting-Posizionamento può essere riassunto in una visione integrata che mette in luce le scelte e gli strumenti di ciascuna fase.

| Fase | Domanda | Output | Strumenti |
|---|---|---|---|
| **Segmentazione** | Come si compone il mercato? | Identificazione di gruppi omogenei | Variabili geo/demo/psico/comportamentali |
| **Targeting** | Quali segmenti servire? | Scelta dei segmenti obiettivo | Cinque forze di Porter, matrice attrattività/competitività |
| **Posizionamento** | Come voglio essere percepito? | Value proposition e identità di marca | Mappe di posizionamento, USP, copy strategy |

### 17.1 Esempi di Variabili di Segmentazione e Casi Reali

| Tipologia | Variabili | Esempio applicativo |
|---|---|---|
| **Geografica** | Nazione, regione, città, clima, densità abitativa | McDonald's adatta il menu a India (no manzo), Italia (caffè, McItaly) |
| **Demografica** | Età, genere, reddito, ciclo di vita familiare, istruzione | Pampers segmenta per età del bambino (Newborn, 1-2-3-4-5) |
| **Psicografica** | Stile di vita, valori, personalità, classe sociale | Patagonia targetizza i consumatori eco-conscious e attivi |
| **Comportamentale** | Frequenza d'uso, fedeltà, benefici ricercati, occasioni d'uso | Nike differenzia per sport (running, basket, training) |

### 17.2 Strategie di Targeting: Quadro Comparativo

| Strategia | Numero segmenti | Investimento | Esempio classico |
|---|---|---|---|
| **Marketing indifferenziato (mass)** | Tutti | Basso per mix unico | Sale, zucchero, commodity |
| **Marketing differenziato** | Molti, con offerte distinte | Alto | Volkswagen Group (VW, Audi, Porsche, Skoda) |
| **Marketing concentrato (nicchia)** | Uno o pochi | Medio focalizzato | Ferrari, Rolex, Patek Philippe |
| **Micromarketing (one-to-one)** | Singolo cliente | Variabile, data-driven | Amazon, Netflix, Spotify |

### 17.3 Posizionamento: USP e Value Proposition

L'**USP** (Unique Selling Proposition), concetto coniato da Rosser Reeves negli anni Cinquanta, identifica la singola, specifica e distintiva ragione per cui un cliente dovrebbe scegliere quella marca rispetto a tutte le alternative: deve essere unica, rilevante per il consumatore e dimostrabile. L'evoluzione moderna dell'USP è la **value proposition**, formula più articolata che descrive sinteticamente come l'offerta crea valore per uno specifico segmento, attraverso quali benefici funzionali, emotivi e simbolici, e perché tale offerta è preferibile alle alternative. Esempi celebri di value proposition: Volvo *"the safest cars in the world"*, BMW *"the ultimate driving machine"*, FedEx *"when it absolutely positively has to be there overnight"*, Apple *"think different"*, Airbnb *"belong anywhere"*.

---

## 18. Il Marketing Mix Esteso: dalle 4P alle 7P

Il modello classico delle 4P, formulato da Jerome McCarthy nel 1960 e poi consolidato da Kotler, è stato concepito originariamente per i beni fisici tangibili e si rivela parzialmente inadeguato quando applicato ai servizi, caratterizzati da intangibilità, inseparabilità fra produzione e consumo, eterogeneità e deperibilità. Booms e Bitner hanno proposto nel 1981 un'estensione del marketing mix per i servizi, che aggiunge tre ulteriori leve alle quattro originarie, dando vita alle cosiddette 7P. La quinta P è **People**, ossia le persone che entrano in contatto con il cliente nell'erogazione del servizio: nei servizi il personale è parte integrante del prodotto, e la sua selezione, formazione, motivazione e comportamento influiscono direttamente sulla percezione di qualità, come accade in modo paradigmatico negli hotel di lusso, nelle compagnie aeree premium o nella consulenza professionale. La sesta P è **Process**, ovvero l'insieme delle procedure, dei flussi di attività e dei meccanismi attraverso cui il servizio viene prodotto ed erogato: un cliente Starbucks vive un processo standardizzato e riconoscibile in qualsiasi punto vendita del mondo, e questo processo è esso stesso parte dell'esperienza. La settima P è **Physical Evidence**, ossia l'ambiente fisico in cui il servizio viene erogato e tutti gli elementi tangibili che ne danno prova, dalla pulizia di un ristorante all'eleganza di una boutique di lusso, fino al design della carta di credito o della divisa del personale.

| P | Significato | Tipico di | Esempio |
|---|---|---|---|
| **Product** | Prodotto, gamma, qualità, design, brand, packaging, servizi accessori | Beni e servizi | iPhone (design, ecosistema, brand) |
| **Price** | Listino, sconti, condizioni di pagamento, finanziamenti | Beni e servizi | Skimming Apple vs penetration Xiaomi |
| **Place** | Canali, copertura, assortimento, ubicazione, logistica | Beni e servizi | Apple Store + retail + online |
| **Promotion** | Pubblicità, PR, promozioni, vendita personale, digital | Beni e servizi | Campagne globali Apple |
| **People** | Personale di front-line, formazione, cultura del servizio | Servizi | Genius Bar, baristi Starbucks |
| **Process** | Procedure di erogazione, customer flow, sistemi | Servizi | Ordine Starbucks via app |
| **Physical Evidence** | Ambiente, atmosfera, segnali tangibili | Servizi | Design Apple Store, packaging premium |

### 18.1 Place: Intensità Distributiva e Canali Moderni

Sul fronte del placement, oltre alla distinzione classica fra canale diretto e indiretto, la teoria distingue tre livelli di **intensità distributiva**. La **distribuzione intensiva** mira a massimizzare la presenza del prodotto in tutti i punti vendita possibili, ed è tipica dei beni di largo consumo a basso coinvolgimento come Coca-Cola, Mars o Mulino Bianco, che devono essere reperibili ovunque. La **distribuzione selettiva** limita la presenza a un numero ristretto di rivenditori scelti in base a criteri di immagine e competenza, ed è tipica di marche premium come Lancôme nel settore cosmetico o di elettronica di fascia alta come Bose. La **distribuzione esclusiva** concede a un singolo distributore l'esclusiva su un'area geografica definita, in una logica di massimo presidio e immagine, ed è tipica del lusso assoluto come Ferrari, Rolls-Royce o degli orologi haute horlogerie. Sul fronte dei canali moderni si è imposta la distinzione fra **multicanalità**, in cui l'impresa usa più canali in parallelo ma in modo separato, e **omnicanalità**, in cui i canali sono integrati in un'unica esperienza coerente per il cliente, come avviene quando un consumatore può iniziare l'acquisto online, ritirare in negozio (click-and-collect), restituire per posta e ricevere assistenza via chat, vivendo un percorso fluido senza soluzione di continuità.

### 18.2 Price: Strategie di Pricing Avanzate

Oltre alle politiche di lancio (penetrazione e scrematura), il pricing contemporaneo dispone di un articolato repertorio di strategie. Il **cost-plus pricing** somma un margine standard al costo unitario ed è la metodologia più semplice e diffusa, soprattutto nel B2B e nella distribuzione. Il **value-based pricing** parte invece dal valore percepito dal cliente, indipendentemente dai costi, ed è la metodologia più evoluta e profittevole quando applicabile, come fa Apple fissando i prezzi in funzione della willingness to pay del proprio segmento premium. Il **competition-based pricing** allinea i prezzi a quelli dei concorrenti, ed è tipico delle commodity e dei mercati fortemente concorrenziali. Il **dynamic pricing** modifica i prezzi in tempo reale in funzione di domanda, scorte, profilo del cliente e altri parametri: è la regola nel settore aereo, nell'hotellerie con Booking.com, nei marketplace come Amazon e nei servizi di mobility come Uber con il surge pricing. Il **freemium pricing** offre gratuitamente una versione base del servizio per acquisire utenti e monetizza una versione premium, come fanno Spotify, LinkedIn o Dropbox. Il **bundle pricing** combina più prodotti in un pacchetto a prezzo aggregato inferiore alla somma dei singoli prezzi, come nei pacchetti di Microsoft Office o nelle offerte triple play telco. Il **psychological pricing** sfrutta meccanismi cognitivi come il prezzo terminante in 9 (9,99 euro percepito come molto inferiore a 10 euro) o il decoy effect, in cui un'opzione apparentemente svantaggiosa rende più appetibile l'opzione che si vuole effettivamente vendere.

| Strategia | Logica | Quando si usa | Esempio |
|---|---|---|---|
| **Cost-plus** | Costo + margine | Mercati prevedibili, B2B | Edilizia, retail tradizionale |
| **Value-based** | Valore percepito dal cliente | Brand premium, prodotti differenziati | Apple, Tesla, Hermès |
| **Competition-based** | Allineamento ai competitor | Commodity, mercati maturi | Carburanti, materie prime |
| **Penetration** | Prezzo basso per quote di mercato | Lancio in mercati elastici | Xiaomi, Netflix iniziale |
| **Skimming** | Prezzo alto poi decrescente | Lancio prodotti innovativi | iPhone, console di gioco |
| **Dynamic pricing** | Variazione real-time | Capacità deperibile, e-commerce | Ryanair, Uber, Booking |
| **Freemium** | Base gratis + premium pagamento | Servizi digitali scalabili | Spotify, LinkedIn, Dropbox |
| **Bundle** | Pacchetti aggregati | Prodotti complementari | Microsoft 365, fast food meal |

### 18.3 Promotion: il Communication Mix nell'Era Digitale

Il communication mix tradizionale, articolato in **pubblicità (advertising)**, **promozione delle vendite (sales promotion)**, **pubbliche relazioni (PR)**, **vendita personale (personal selling)** e **direct marketing**, si è arricchito nell'era digitale di un sesto pilastro autonomo: il **digital marketing**, che comprende a sua volta numerose sottocategorie. La **SEO (Search Engine Optimization)** mira a posizionare organicamente i contenuti dell'impresa nelle prime posizioni dei risultati dei motori di ricerca attraverso ottimizzazioni tecniche e di contenuto. La **SEM (Search Engine Marketing)** acquista invece visibilità a pagamento attraverso annunci sponsorizzati come Google Ads, pagati per click (PPC). Il **content marketing** crea contenuti di valore (articoli, video, podcast, white paper) che attirano e fidelizzano un pubblico target, rendendo l'impresa autorevole nel proprio settore: Red Bull con Red Bull Media House è il caso paradigmatico, avendo trasformato un'azienda di bevande energetiche in un editore globale di contenuti su sport estremi e lifestyle. Il **social media marketing** utilizza piattaforme come Instagram, TikTok, LinkedIn, Facebook e YouTube per costruire community, comunicare con i clienti e generare engagement. L'**influencer marketing** collabora con creator che hanno seguiti rilevanti e credibilità in nicchie specifiche, distinguendo fra mega-influencer (oltre il milione di follower), macro-influencer (centinaia di migliaia), micro-influencer (decine di migliaia, spesso più efficaci per tasso di conversione) e nano-influencer (qualche migliaio, altamente verticalizzati). L'**email marketing** mantiene la relazione con i clienti acquisiti attraverso newsletter, automazioni e flussi personalizzati. Il **marketing automation** orchestra in modo automatizzato sequenze di comunicazioni multicanale in base al comportamento dell'utente.

---

## 19. Brand Equity: il Modello di Aaker

Il concetto di **brand equity**, formalizzato da David Aaker in *Managing Brand Equity* (1991), definisce il valore aggiunto che un brand conferisce a un prodotto o servizio rispetto allo stesso prodotto privo del brand, valore che si traduce sia in vantaggi per il consumatore sia in benefici economici per l'impresa. Aaker articola la brand equity in cinque componenti fondamentali, integrate nel celebre **Brand Equity Ten model**.

| Componente | Definizione | Indicatori |
|---|---|---|
| **Brand Awareness** | Capacità del consumatore di riconoscere o ricordare il brand | Recognition, recall spontaneo, top-of-mind |
| **Brand Associations** | Insieme di significati associati al brand nella mente del cliente | Attributi, benefici, attitudini, immagine |
| **Perceived Quality** | Qualità complessiva percepita rispetto alle alternative | Affidabilità, performance, prestigio |
| **Brand Loyalty** | Attaccamento e fedeltà del cliente al brand | Tasso di riacquisto, premium price tollerato |
| **Other Proprietary Assets** | Asset di proprietà come brevetti, trademark, relazioni di canale | Protezione legale, accesso ai canali |

La **brand awareness** si articola su quattro livelli crescenti: l'**unawareness** (il brand è sconosciuto), il **brand recognition** (riconosciuto se mostrato), il **brand recall** (richiamato spontaneamente nella categoria) e il **top-of-mind** (primo brand citato spontaneamente, posizione di vertice mentale). La **brand image** è la percezione complessiva del brand nella mente del consumatore, costruita attraverso anni di comunicazione coerente ed esperienze ripetute. La **brand identity**, distinta dall'immagine, è invece ciò che l'impresa vuole il brand sia, ed è composta da elementi visivi (logo, colori, font, packaging), verbali (nome, payoff, tone of voice) e valoriali (mission, vision, valori). La **brand loyalty** rappresenta probabilmente l'asset più prezioso della brand equity, perché clienti fedeli sono meno sensibili al prezzo, più resistenti alle proposte concorrenti, più propensi al passaparola positivo e generano un Customer Lifetime Value molto superiore.

### 19.1 Tipologie di Brand: Architettura del Portafoglio

L'architettura del brand portfolio è una scelta strategica che incide profondamente sul posizionamento, sulla diversificazione del rischio e sulla economia dei costi di comunicazione.

| Tipologia | Descrizione | Vantaggi | Svantaggi | Esempio |
|---|---|---|---|---|
| **Corporate brand** | Unico nome d'impresa per tutti i prodotti | Economie di comunicazione, coerenza | Effetto contagio negativo | Samsung, Sony, Virgin |
| **Family brand** | Brand condivisi da famiglie di prodotti | Trasferimento di reputazione, focus | Limitato a categorie omogenee | Nestlé KitKat, Galaxy di Samsung |
| **Individual brand** | Brand distinto per ogni prodotto | Posizionamento mirato, isolamento | Costi di comunicazione moltiplicati | P&G (Tide, Pampers, Gillette, Pantene) |
| **Co-branding** | Alleanza fra due brand su un prodotto | Sinergie e accesso a nuovi target | Conflitti di posizionamento | Nike + Apple (Nike+), Intel Inside |
| **Endorsed brand** | Brand prodotto avallato dal corporate | Equilibrio fra autonomia e supporto | Complessità di gestione | Nestlé KitKat, Marriott Courtyard |
| **Private label** | Brand di proprietà del distributore | Margini elevati, fedeltà al retailer | Investimenti in qualità | Coop, Esselunga, Amazon Basics |

### 19.2 Brand Storytelling

Il **brand storytelling** è la pratica di costruire la comunicazione del brand attorno a una narrazione coerente, emotivamente coinvolgente e capace di trasferire significati profondi al consumatore. Nell'epoca della saturazione mediatica, il consumatore è bombardato da migliaia di messaggi al giorno, e solo le storie autentiche e significative riescono a penetrare il rumore di fondo. I grandi brand contemporanei costruiscono universi narrativi coerenti: Apple racconta la storia degli outsider che cambiano il mondo (*Think Different*), Nike celebra il superamento dei limiti personali (*Just Do It*), Coca-Cola evoca la felicità condivisa (*Open Happiness*, *Taste the Feeling*), Red Bull narra l'avventura e la trasgressione dei limiti umani con il celebre *Stratos Jump* di Felix Baumgartner del 2012, Dove sfida gli stereotipi di bellezza con la *Real Beauty Campaign*. Il brand storytelling si fonda su archetipi narrativi universali (l'eroe, il ribelle, il saggio, il mago, il fuorilegge), su un conflitto centrale che dà tensione alla narrazione e su una promessa di trasformazione per chi si associa al brand.

---

## 20. Customer Journey, Touchpoint e Customer Experience

Il **customer journey** descrive l'intero percorso che il cliente compie dall'emergere del bisogno fino all'acquisto e oltre, comprendendo tutte le interazioni con il brand. Il modello classico AIDA (Attention, Interest, Desire, Action) è stato superato da modelli più articolati come il **funnel** moderno e il modello **5A di Kotler** introdotto in *Marketing 4.0*. Le 5A sono **Aware** (il cliente diventa consapevole del brand), **Appeal** (è attratto e lo include nelle considerazioni), **Ask** (cerca informazioni e confronti), **Act** (compra ed esperisce il prodotto) e **Advocate** (lo raccomanda ad altri, diventando ambasciatore). A differenza del funnel lineare tradizionale, il modello 5A riconosce che il percorso nell'era digitale non è una corsia obbligata ma una rete non lineare, in cui il cliente può saltare fasi, tornare indietro e influenzare altri lungo tutto il tragitto.

I **touchpoint** sono i punti di contatto fisici e digitali fra cliente e brand: includono lo spot televisivo, il post social, il negozio fisico, il sito web, l'app, il call center, la chat di supporto, il packaging, l'esperienza di unboxing, l'after-sales. Mappare i touchpoint significa rappresentare visivamente l'intero customer journey identificando in ogni punto le emozioni del cliente (pain point e moment of truth), le sue aspettative e le opportunità di miglioramento. La **customer experience (CX)** è la somma complessiva di tutte queste interazioni: aziende come Disney, Apple, Amazon e Starbucks hanno costruito vantaggi competitivi durevoli proprio sull'orchestrazione minuziosa di ogni touchpoint, trasformando la CX in un asset strategico.

---

## 21. Customer Lifetime Value (CLV) e Metriche di Marketing

Il **Customer Lifetime Value (CLV)** è il valore economico totale che un cliente genera per l'impresa lungo l'intera durata della relazione, opportunamente attualizzato. Nella formula semplificata, CLV = (margine medio per transazione × frequenza d'acquisto annuale × durata della relazione) − costo di acquisizione del cliente. Una formulazione più rigorosa considera il valore attualizzato dei flussi futuri:

**CLV = Σ (Margine_t × Tasso_di_retention_t) / (1 + r)^t − CAC**

dove *r* è il tasso di sconto e *CAC* il **Customer Acquisition Cost**. Il CLV ribalta la logica della singola transazione e induce a investire nella relazione: se un cliente vale 5.000 euro nell'arco di dieci anni, ha senso spendere anche 500 euro per acquisirlo, perché il ROI complessivo resta ampiamente positivo. Il rapporto **CLV/CAC** è una metrica chiave: rapporti inferiori a 1:1 indicano una relazione in perdita, un benchmark sano si colloca intorno a 3:1, mentre rapporti superiori a 5:1 segnalano spesso sotto-investimento in acquisizione.

Altre metriche fondamentali del marketing contemporaneo includono il **Net Promoter Score (NPS)**, che misura la propensione dei clienti a raccomandare il brand su una scala 0-10 e classifica i clienti in promotori (9-10), passivi (7-8) e detrattori (0-6); il **Customer Satisfaction (CSAT)**, che rileva la soddisfazione su singole interazioni; il **Customer Effort Score (CES)**, che misura la facilità percepita nell'interazione con il brand; il **churn rate** o tasso di abbandono, particolarmente critico nei modelli a sottoscrizione; e il **share of wallet**, ossia la quota della spesa del cliente in una categoria che si indirizza al brand specifico.

---

## 22. Casi Esemplari di Marketing Strategico

### 22.1 Coca-Cola: il Marketing dell'Emozione e della Coerenza Globale

Coca-Cola rappresenta forse il caso più iconico di costruzione di brand globale. Fondata nel 1886, ha investito sin dall'inizio in una comunicazione emozionale legata a felicità, condivisione e momenti di pausa, costruendo un universo simbolico che trascende il prodotto fisico. La formula del marketing Coca-Cola si fonda su **distribuzione intensiva** assoluta (è reperibile in oltre 200 paesi e oltre 24 milioni di punti vendita), **brand experience** ricca di rituali (la bottiglia contour del 1915 è un'icona di design protetta come trademark tridimensionale), **storytelling emozionale** ininterrotto da oltre un secolo (*Open Happiness*, *Taste the Feeling*) e **sponsorizzazioni globali** come Olimpiadi e Mondiali di calcio. Esemplare la *Share a Coke Campaign* del 2011, che sostituì il logo con nomi propri dei consumatori, generando un'esplosione di vendite e un tasso di engagement social senza precedenti.

### 22.2 Apple: Premium Pricing, Ecosistema e Cult Branding

Apple costituisce il caso paradigmatico di brand premium nell'era digitale. Il marketing mix Apple integra in modo magistrale tutte le leve: il prodotto è progettato con ossessione maniacale per design, semplicità e integrazione hardware-software-servizi; il prezzo segue una logica skimming costantemente sostenuta dal valore percepito, con margini lordi superiori al 40 percento; la distribuzione combina Apple Store proprietari (templi del brand con design uniforme nel mondo), retail selettivo e canale online; la comunicazione utilizza il payoff *Think Different* per posizionarsi come brand degli outsider creativi. Il vero capolavoro di Apple è però l'**ecosistema chiuso** che lega l'utente al brand attraverso iCloud, Apple ID, AirDrop, Handoff e l'integrazione fra Mac, iPhone, iPad, Watch e AirPods, generando elevatissimi switching cost e una loyalty quasi religiosa.

### 22.3 Nike: Brand Purpose e Inspirational Marketing

Nike ha costruito il proprio successo attorno a un brand purpose chiaro e potente: *"To bring inspiration and innovation to every athlete in the world"*. La comunicazione Nike celebra costantemente il superamento dei limiti personali, con il celebre payoff *Just Do It* lanciato nel 1988 e mai abbandonato. La strategia Nike integra **endorsement di campioni** (Michael Jordan, LeBron James, Cristiano Ronaldo, Serena Williams, Tiger Woods), **innovazione tecnologica** (Air, Flyknit, Vaporfly), **digitalizzazione** (Nike Running Club app, Nike Training Club, abbonamento Nike+) e **prese di posizione politiche** coraggiose come la celebre campagna con Colin Kaepernick del 2018 (*Believe in something. Even if it means sacrificing everything*), che generò polemiche ma rafforzò drammaticamente l'identificazione del target con il brand.

### 22.4 Red Bull: Content Marketing Estremo

Red Bull ha rivoluzionato il content marketing trasformando un'azienda di bevande energetiche in un editore globale di contenuti. Red Bull Media House produce video, magazine, eventi sportivi (Red Bull Air Race, Red Bull Cliff Diving), squadre sportive (F1, RB Salzburg, RB Lipsia) e contenuti su sport estremi che generano centinaia di milioni di visualizzazioni. Il punto di svolta è stato il *Red Bull Stratos* del 2012, in cui Felix Baumgartner si lanciò da una capsula a 39 chilometri di altitudine, evento seguito in diretta da 8 milioni di persone su YouTube e migliaia di emittenti globali, con un valore mediatico stimato in oltre mezzo miliardo di dollari. La strategia Red Bull dimostra come il prodotto possa diventare quasi accessorio rispetto all'universo simbolico costruito attorno al brand: i consumatori non comprano una bevanda, comprano l'appartenenza a una cultura di adrenalina, ribellione e superamento dei limiti.

---

## Conclusione: il Marketing come Visione Integrata

Abbiamo percorso un viaggio lungo e articolato, che ci ha portato dall'orientamento strategico dell'impresa verso il mercato fino alle quattro leve operative del marketing mix. Alcuni punti di sintesi meritano di essere ribaditi. Il marketing è prima di tutto una mentalità, non una serie di tecniche: è la mentalità di chi parte dal cliente e non dal prodotto, dalla domanda e non dall'offerta, dal valore percepito e non da quello oggettivo. Il marketing strategico viene prima del marketing operativo, perché scegliere bene il segmento, il target e il posizionamento è più importante di ogni raffinatezza tecnica sulle quattro P, e una pubblicità brillante su un prodotto mal posizionato è uno spreco di risorse. Le quattro P devono essere coerenti tra loro, perché un prodotto premium richiede un prezzo alto, canali selettivi e comunicazione raffinata, mentre incoerenze tra le P danneggiano il posizionamento complessivo. La relazione conta più della transazione, perché i clienti fedeli valgono molto più di quelli occasionali, e il Customer Lifetime Value è la metrica che sta soppiantando la singola vendita come indicatore di successo. Il digitale sta rivoluzionando tutto, ma non i fondamentali: segmentazione, targeting, posizionamento e quattro P restano validi, e cambiano solo gli strumenti per metterli in pratica. Il marketing moderno, in sintesi, è l'arte di creare valore per i clienti in modo redditizio per l'impresa, costruendo relazioni durature, offerte coerenti e un posizionamento chiaro e distintivo nella mente del mercato.
`;

export default function Week12() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', paddingBottom: '4rem' }}>
      <div className="page-header">
        <div style={{ color: 'var(--accent-cyan)', fontWeight: 600, letterSpacing: '0.1em', fontSize: '0.875rem', marginBottom: '0.5rem' }}>SETTIMANA 12</div>
        <h1 className="page-title gradient-text" style={{ fontSize: '3rem' }}>La Gestione Strategica del Mercato</h1>
      </div>

      <div className="content-section glass-panel markdown-body">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownContent}</ReactMarkdown>
      </div>

      <div className="content-section glass-panel" style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>📊 Visualizzazioni Interattive</h2>
        <PriceElasticityGraph />
        <MarketingMixRadarGraph />
        <CustomerJourneyGraph />
        <CLVGraph />
      </div>
    </div>
  );
}
