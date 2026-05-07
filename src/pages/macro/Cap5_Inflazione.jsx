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
//  GRAPH 1 — TEORIA QUANTITATIVA: crescita moneta → inflazione
// ══════════════════════════════════════════════════════════════
function QuantityTheoryGraph() {
  const [mu, setMu] = useState(6);   // money growth %
  const [g, setG] = useState(2);     // real GDP growth %

  const pi = mu - g;  // inflation = money growth - real growth

  const xMin = 0, xMax = 20;
  const yMin = -2, yMax = 20;

  // 45° line for π = μ (if g=0), shifted down by g
  const pts45 = [];
  for (let m = xMin; m <= xMax; m += 0.5) {
    pts45.push([toX(m, xMin, xMax), toY(m - g, yMin, yMax)]);
  }
  const path45 = 'M ' + pts45.map(p => p.join(',')).join(' L ');

  return (
    <div className="graph-block">
      <h4 className="graph-title">Teoria quantitativa: π = μ − g (inflazione = crescita moneta − crescita reale)</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          <Axes xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax} xLabel="μ (% crescita M)" yLabel="π (%)" xFmt={v => v.toFixed(0) + '%'} yFmt={v => v.toFixed(0) + '%'} />
          {/* 45-degree line π = μ − g */}
          <path d={path45} fill="none" stroke="#0ea5e9" strokeWidth={2} strokeDasharray="5,3" />
          <text x={toX(18, xMin, xMax) + 3} y={toY(18 - g, yMin, yMax)} fontSize={10} fill="#0ea5e9">π = μ−g</text>
          {/* zero line */}
          <line x1={PL} y1={toY(0, yMin, yMax)} x2={PL + cW} y2={toY(0, yMin, yMax)} stroke="#94a3b8" strokeWidth={0.8} strokeDasharray="2,2" />
          {/* current point */}
          <circle cx={toX(mu, xMin, xMax)} cy={toY(pi, yMin, yMax)} r={6} fill="#ef4444" stroke="#fff" strokeWidth={2} />
          <line x1={toX(mu, xMin, xMax)} y1={PT + cH} x2={toX(mu, xMin, xMax)} y2={toY(pi, yMin, yMax)} stroke="#ef4444" strokeDasharray="3,3" strokeWidth={1.2} />
        </svg>
        <div className="graph-controls">
          <SliderControl label="Crescita offerta di moneta" symbol="μ" value={mu} min={0} max={20} step={0.5} onChange={setMu} color="#0ea5e9" fmt={v => v.toFixed(1) + '%'} />
          <SliderControl label="Crescita reale PIL" symbol="g" value={g} min={0} max={6} step={0.1} onChange={setG} color="#16a34a" fmt={v => v.toFixed(1) + '%'} />
          <div className="result-box">
            <div className="result-row"><strong>Inflazione π</strong> <span style={{ color: pi < 0 ? '#16a34a' : pi > 10 ? '#ef4444' : '#f59e0b' }}>{pi.toFixed(1)}%</span></div>
            <div className="result-row"><strong>Livello prezzi P cresce di</strong> <span>{pi.toFixed(1)}%/anno</span></div>
          </div>
          <div className="insight-mini">La teoria quantitativa implica una relazione uno-a-uno tra crescita monetaria e inflazione nel lungo periodo, a parità di velocità V e crescita reale g.</div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAPH 2 — EFFETTO FISHER: i = r + π
// ══════════════════════════════════════════════════════════════
function FisherGraph() {
  const [r, setR] = useState(2);
  const [pi, setPi] = useState(3);

  const i = r + pi;

  const xMin = 0, xMax = 15;
  const yMin = 0, yMax = 20;

  const pts = [];
  for (let p = xMin; p <= xMax; p += 0.3) {
    pts.push([toX(p, xMin, xMax), toY(r + p, yMin, yMax)]);
  }
  const path = 'M ' + pts.map(p => p.join(',')).join(' L ');

  return (
    <div className="graph-block">
      <h4 className="graph-title">Effetto Fisher: i = r + π (tasso nominale = reale + inflazione attesa)</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          <Axes xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax} xLabel="π (inflazione attesa)" yLabel="i (%)" xFmt={v => v.toFixed(0) + '%'} yFmt={v => v.toFixed(0) + '%'} />
          <path d={path} fill="none" stroke="#a855f7" strokeWidth={2.2} />
          {/* vertical dashed at current pi */}
          <line x1={toX(pi, xMin, xMax)} y1={PT + cH} x2={toX(pi, xMin, xMax)} y2={toY(i, yMin, yMax)} stroke="#a855f7" strokeDasharray="3,3" strokeWidth={1.2} />
          {/* horizontal dashed */}
          <line x1={PL} y1={toY(i, yMin, yMax)} x2={toX(pi, xMin, xMax)} y2={toY(i, yMin, yMax)} stroke="#a855f7" strokeDasharray="3,3" strokeWidth={1.2} />
          <circle cx={toX(pi, xMin, xMax)} cy={toY(i, yMin, yMax)} r={6} fill="#a855f7" stroke="#fff" strokeWidth={2} />
          {/* annotation r */}
          <circle cx={toX(0, xMin, xMax)} cy={toY(r, yMin, yMax)} r={4} fill="#0ea5e9" stroke="#fff" strokeWidth={1.5} />
          <text x={toX(0, xMin, xMax) + 6} y={toY(r, yMin, yMax) + 4} fontSize={10} fill="#0ea5e9">r={r.toFixed(1)}%</text>
        </svg>
        <div className="graph-controls">
          <SliderControl label="Tasso di interesse reale" symbol="r" value={r} min={0} max={8} step={0.1} onChange={setR} color="#0ea5e9" fmt={v => v.toFixed(1) + '%'} />
          <SliderControl label="Inflazione attesa" symbol="π" value={pi} min={0} max={15} step={0.1} onChange={setPi} color="#a855f7" fmt={v => v.toFixed(1) + '%'} />
          <div className="result-box">
            <div className="result-row"><strong>Tasso nominale i</strong> <span>{i.toFixed(1)}%</span></div>
            <div className="result-row"><strong>Premio inflazione</strong> <span>+{pi.toFixed(1)}%</span></div>
          </div>
          <div className="insight-mini">L'effetto Fisher dice che ogni punto percentuale in più di inflazione attesa si traduce in un punto percentuale in più di tasso nominale, lasciando il tasso reale invariato.</div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAPH 3 — COSTI DELLE SCARPE DI CUOIO
// ══════════════════════════════════════════════════════════════
function ShoeleatherGraph() {
  const [pi, setPi] = useState(5);

  const xMin = 0, xMax = 50;
  const yMin = 0, yMax = 100;

  // Cost ≈ k * π² (welfare cost quadratic in inflation)
  const k = 0.04;
  const cost = k * pi * pi;

  const pts = [];
  for (let p = xMin; p <= xMax; p += 1) {
    pts.push([toX(p, xMin, xMax), toY(k * p * p, yMin, yMax)]);
  }
  const path = 'M ' + pts.filter(pt => pt[1] >= PT).map(p => p.join(',')).join(' L ');

  return (
    <div className="graph-block">
      <h4 className="graph-title">Costi dell'inflazione attesa: costo delle scarpe di cuoio ≈ k · π²</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          <Axes xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax} xLabel="π (inflazione %)" yLabel="costo" xFmt={v => v.toFixed(0) + '%'} yFmt={v => v.toFixed(0)} />
          <path d={path} fill="none" stroke="#f59e0b" strokeWidth={2.2} />
          <line x1={toX(pi, xMin, xMax)} y1={PT + cH} x2={toX(pi, xMin, xMax)} y2={toY(cost, yMin, yMax)} stroke="#f59e0b" strokeDasharray="3,3" strokeWidth={1.2} />
          <circle cx={toX(pi, xMin, xMax)} cy={toY(cost, yMin, yMax)} r={6} fill="#f59e0b" stroke="#fff" strokeWidth={2} />
          {/* reference points */}
          <circle cx={toX(2, xMin, xMax)} cy={toY(k * 4, yMin, yMax)} r={4} fill="#16a34a" stroke="#fff" strokeWidth={1.5} />
          <text x={toX(2, xMin, xMax) + 5} y={toY(k * 4, yMin, yMax) + 4} fontSize={9} fill="#16a34a">stabile (2%)</text>
          <circle cx={toX(30, xMin, xMax)} cy={toY(k * 900, yMin, yMax)} r={4} fill="#dc2626" stroke="#fff" strokeWidth={1.5} />
          <text x={toX(30, xMin, xMax) - 45} y={toY(k * 900, yMin, yMax) - 6} fontSize={9} fill="#dc2626">alta (30%)</text>
        </svg>
        <div className="graph-controls">
          <SliderControl label="Tasso di inflazione" symbol="π" value={pi} min={0} max={50} step={0.5} onChange={setPi} color="#f59e0b" fmt={v => v.toFixed(1) + '%'} />
          <div className="result-box">
            <div className="result-row"><strong>Costo welfare</strong> <span>{cost.toFixed(1)}</span></div>
            <div className="result-row"><strong>vs inflazione stabile 2%</strong> <span>×{(cost / (k * 4)).toFixed(1)}</span></div>
          </div>
          <div className="insight-mini">Il costo delle scarpe di cuoio cresce in modo più che proporzionale con l'inflazione: raddoppiare π quadruplica il costo. Ad alti livelli i costi diventano molto ingenti.</div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAPH 4 — IPERINFLAZIONE: livello dei prezzi esplode
// ══════════════════════════════════════════════════════════════
function HyperinflationGraph() {
  const [mu, setMu] = useState(50);  // monthly money growth %

  const months = 24;
  const xMin = 0, xMax = months;
  const yMax = Math.pow(1 + mu / 100, months) * 1.1;
  const yMin = 0;

  const pts = [];
  for (let t = 0; t <= months; t += 0.25) {
    pts.push([toX(t, xMin, xMax), toY(Math.pow(1 + mu / 100, t), yMin, yMax)]);
  }
  const path = 'M ' + pts.filter(p => p[1] >= PT).map(p => p.join(',')).join(' L ');

  const priceAfter12 = Math.pow(1 + mu / 100, 12);
  const priceAfter24 = Math.pow(1 + mu / 100, 24);

  return (
    <div className="graph-block">
      <h4 className="graph-title">Iperinflazione: livello dei prezzi P(t) = (1 + μ)ᵗ in 24 mesi</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          <Axes xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax} xLabel="mesi" yLabel="P (base=1)" nX={6} xFmt={v => v.toFixed(0)} yFmt={v => v > 1000 ? (v / 1000).toFixed(0) + 'k' : v.toFixed(0)} />
          <path d={path} fill="none" stroke="#dc2626" strokeWidth={2.2} />
          {/* mark at 12 months */}
          {priceAfter12 < yMax && (
            <circle cx={toX(12, xMin, xMax)} cy={toY(priceAfter12, yMin, yMax)} r={4} fill="#dc2626" stroke="#fff" strokeWidth={1.5} />
          )}
        </svg>
        <div className="graph-controls">
          <SliderControl label="Crescita moneta mensile" symbol="μ" value={mu} min={5} max={100} step={1} onChange={setMu} color="#dc2626" fmt={v => v.toFixed(0) + '%/mese'} />
          <div className="result-box">
            <div className="result-row"><strong>Prezzi dopo 12 mesi</strong> <span>×{priceAfter12 > 1e6 ? (priceAfter12 / 1e6).toFixed(0) + 'M' : priceAfter12 > 1000 ? (priceAfter12 / 1000).toFixed(0) + 'k' : priceAfter12.toFixed(0)}</span></div>
            <div className="result-row"><strong>Prezzi dopo 24 mesi</strong> <span>×{priceAfter24 > 1e9 ? (priceAfter24 / 1e9).toFixed(0) + 'G' : priceAfter24 > 1e6 ? (priceAfter24 / 1e6).toFixed(0) + 'M' : priceAfter24 > 1000 ? (priceAfter24 / 1000).toFixed(0) + 'k' : priceAfter24.toFixed(0)}</span></div>
          </div>
          <div className="insight-mini">Con μ = 50%/mese (come la Germania 1922-23), in un anno i prezzi crescono di un fattore 130. Con μ = 100%/mese, in un anno crescono di un fattore 4096.</div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  PAGE
// ══════════════════════════════════════════════════════════════
export default function Cap5_Inflazione() {
  return (
    <div className="macro-page">
      <header className="macro-header">
        <div className="chapter-badge">CAPITOLO 5</div>
        <h1 className="macro-title gradient-text">L'inflazione: cause, effetti e costi sociali</h1>
        <p className="macro-subtitle">
          «Si dice che Lenin abbia dichiarato che il modo migliore per distruggere il sistema capitalista è svalutare la moneta. Lenin aveva certamente ragione. Non c'è modo più sottile e più sicuro di distruggere le fondamenta della società esistente che svalutare la moneta.» — John Maynard Keynes
        </p>
      </header>

      <section className="macro-section">
        <h2 className="section-title">Introduzione</h2>
        <div className="prose">
          <p>
            Negli Stati Uniti, il prezzo del <em>New York Times</em> costava 2 centesimi nel 1914. Si era trasformato in 15 centesimi nel 1980, in 75 centesimi nel 2000, per poi diventare 2,50 dollari nel 2015 e successivamente 3 dollari nel 2018 e oltre. Il continuo aumento del livello dei prezzi nel corso del tempo è chiamato <strong>inflazione</strong>. Il tasso di inflazione è la variazione percentuale del livello generale dei prezzi.
          </p>
          <p>
            Come abbiamo visto nel Capitolo 2, l'inflazione è una delle principali variabili macroeconomiche che gli economisti monitorano. In questo capitolo cercheremo di capire come e perché si genera l'inflazione. Tenteremo anche di valutare i costi sociali che l'inflazione impone alla società.
          </p>
          <p>
            La teoria che utilizzeremo per spiegare l'inflazione nel lungo periodo è la <strong>teoria quantitativa della moneta</strong>, secondo la quale l'inflazione è fondamentalmente un fenomeno monetario. Come afferma Milton Friedman: «L'inflazione è sempre e ovunque un fenomeno monetario». In questo capitolo analizzeremo anche il ruolo del <strong>signoraggio</strong> (la "tassa da inflazione"), la relazione tra inflazione e tassi di interesse (effetto Fisher), i costi sociali dell'inflazione e il fenomeno estremo dell'<strong>iperinflazione</strong>.
          </p>
          <p>
            In breve periodo, invece, l'inflazione e la disoccupazione sono strettamente correlate, come mostrerà la curva di Phillips del Capitolo 15. In questo capitolo ci concentriamo sul lungo periodo.
          </p>
        </div>
      </section>

      <section className="macro-section">
        <h2 className="section-title">5.1 La teoria quantitativa della moneta</h2>
        <div className="prose">
          <p>
            Nel Capitolo 4 abbiamo definito cos'è la moneta e analizzato in che modo il sistema bancario e la banca centrale influenzano l'offerta di moneta. Sappiamo anche che le decisioni di politica economica della banca centrale possono influenzare l'offerta di moneta. Possiamo quindi, a questo punto, capire in che modo l'offerta di moneta influenza il sistema economico nel lungo periodo. La risposta è contenuta in questa sezione: esaminando la domanda di moneta, l'offerta di moneta, e le forze che le mettono in equilibrio, possiamo capire il livello dei prezzi e il tasso di inflazione.
          </p>

          <h3>Le transazioni e la domanda di moneta</h3>
          <p>
            La quantità di moneta che le persone vogliono detenere dipende dalla dimensione delle transazioni che intendono effettuare. Se il reddito nominale (P × Y) è elevato, le persone effettuano più transazioni e hanno bisogno di più moneta per farlo. La domanda di moneta può essere scritta come:
          </p>
        </div>

        <div className="formula-box">
          <div>(M/P)ᵈ = kY</div>
          <div style={{ fontSize: '0.88rem', marginTop: '0.4rem', color: '#64748b' }}>
            k = 1/V è la quantità di moneta che le persone vogliono detenere per ogni euro di reddito; V è la <strong>velocità di circolazione della moneta</strong>.
          </div>
        </div>

        <div className="prose">
          <h3>L'equazione degli scambi</h3>
          <p>
            La velocità di circolazione della moneta si riferisce al numero medio di volte che una banconota cambia mano nel corso di un anno. Per esempio, se il PIL nominale è pari a 500€ e la quantità di moneta è pari a 100€, la velocità di circolazione è 5: ogni euro in circolazione è usato in media 5 volte all'anno per acquistare beni e servizi finali.
          </p>
          <p>
            Possiamo riscrivere la relazione precedente come <strong>equazione degli scambi</strong>:
          </p>
        </div>

        <div className="formula-box">
          <div>M × V = P × Y</div>
          <div style={{ fontSize: '0.88rem', marginTop: '0.4rem', color: '#64748b' }}>
            Quantità di moneta × Velocità = Livello dei prezzi × Produzione reale (PIL nominale)
          </div>
        </div>

        <div className="prose">
          <h3>Da equazione degli scambi a teoria quantitativa</h3>
          <p>
            L'equazione degli scambi è, per ora, soltanto una identità: definisce V come il rapporto tra PIL nominale e offerta di moneta. Diventa una teoria utile — la <strong>teoria quantitativa della moneta</strong> — quando aggiungiamo l'ipotesi che la velocità di circolazione V sia <em>costante</em> nel tempo. Questa ipotesi è plausibile nel lungo periodo perché la velocità di circolazione dipende da fattori lenti a cambiare, come le abitudini di pagamento e la struttura finanziaria dell'economia.
          </p>
          <p>
            Con V costante, la variazione percentuale di M × V è uguale alla variazione percentuale di M. E la variazione percentuale di P × Y è uguale alla variazione percentuale di P più la variazione percentuale di Y (in termini approssimati, per piccole variazioni). Quindi:
          </p>
        </div>

        <div className="formula-box secondary">
          <div>% ΔM + % ΔV = % ΔP + % ΔY</div>
          <div style={{ fontSize: '0.88rem', marginTop: '0.4rem', color: '#64748b' }}>
            Con % ΔV ≈ 0: π = % ΔP = % ΔM − % ΔY = μ − g
          </div>
        </div>

        <div className="prose">
          <p>
            Questa è la previsione chiave della teoria quantitativa: se la banca centrale aumenta l'offerta di moneta a un tasso elevato, il risultato sarà un tasso elevato di inflazione. Se la banca centrale mantiene la crescita della moneta costante, il livello dei prezzi crescerà a un tasso stabile, pari alla differenza tra la crescita della moneta e la crescita reale dell'economia.
          </p>
          <p>
            L'evidenza empirica internazionale e storica supporta fortemente questa previsione. Nei periodi in cui la moneta cresce rapidamente, l'inflazione è elevata. Nei paesi in cui la moneta cresce lentamente, l'inflazione è bassa.
          </p>
        </div>

        <QuantityTheoryGraph />

        <div className="callout callout-case">
          <h4>ANALISI DI UN CASO — Inflazione e crescita della moneta</h4>
          <p>
            Nei Paesi a inflazione molto elevata, come alcune nazioni latinoamericane, la crescita della moneta negli anni Settanta-Ottanta ha superato il 100% l'anno; l'inflazione era sovente superiore al 100% l'anno. Nei Paesi a inflazione bassa — Germania, Giappone, Svizzera — la crescita della moneta è rimasta sotto il 5-6% l'anno e l'inflazione si è mantenuta moderata. Il confronto internazionale — la Figura 5.1 nel libro — mostra una relazione quasi perfettamente lineare tra crescita della moneta e inflazione attraverso più di 80 paesi: ogni punto percentuale in più di crescita della moneta corrisponde a circa un punto percentuale in più di inflazione. Negli Stati Uniti, i prezzi sono passati da 25 NW nel 1950 a 200 NW nel 2019; nel medesimo periodo la quantità di moneta è passata da 25 miliardi a 1.400 miliardi di dollari, un aumento di circa 56 volte. I prezzi sono aumentati di circa 8 volte. La differenza è spiegata dalla crescita reale del PIL americano in quel periodo.
          </p>
          <p>
            La Figura 5.2 nel libro analizza la variazione del livello dei prezzi e la variazione del tasso di inflazione negli Stati Uniti dal 1994 al 2019. L'inflazione è rimasta nella fascia 1-3% annuo in quasi tutto il periodo, con picchi legati a variazioni del prezzo del petrolio e flessioni durante la Grande Recessione. Il modello di lungo periodo prevede comunque una stretta correlazione tra crescita della moneta e inflazione: una correlazione empirica di 0,74. L'evidenza empirica per gli Stati Uniti mostra anche come le politiche di bassa crescita monetaria degli anni 1985-2019 abbiano contribuito a tenere l'inflazione sistematicamente bassa rispetto agli anni Settanta.
          </p>
        </div>
      </section>

      <section className="macro-section">
        <h2 className="section-title">5.2 Il signoraggio: le entrate derivanti dall'emissione di moneta</h2>
        <div className="prose">
          <p>
            Finora abbiamo visto come l'aumento della quantità di moneta porti all'inflazione. Esaminiamo ora perché i governi a volte scelgono di aumentare la quantità di moneta e che cosa ottengono in cambio.
          </p>
          <p>
            Quasi tutti gli stati finanziano la loro spesa riscuotendo imposte, come le imposte sul reddito e le imposte sui consumi, e contraendo prestiti. Tuttavia, lo Stato può anche finanziare la spesa pubblica stampando moneta. Quando il governo finanzia la sua spesa pubblica con la stampa di moneta, viene detto che ricorre al <strong>signoraggio</strong>. Il termine trae origine dalla parola "signore": il signore del feudo medievale possedeva il monopolio sull'emissione della moneta nel suo territorio.
          </p>
          <p>
            Quando il governo stampa moneta per finanziare la spesa pubblica, fa aumentare l'offerta di moneta. L'aumento dell'offerta di moneta a sua volta causa inflazione. Stampare moneta per generare entrate è come imporre una <strong>tassa da inflazione</strong>. Chi sostiene questa tassa? Chi detiene moneta. Quando i prezzi salgono, il valore reale del denaro che le persone detengono diminuisce. Il processo funziona quindi come una tassa: il governo ottiene risorse reali, chi detiene moneta si ritrova con un potere d'acquisto ridotto.
          </p>
          <p>
            Nella maggior parte delle economie avanzate il signoraggio rappresenta una piccola quota delle entrate pubbliche, perché il sistema fiscale è generalmente abbastanza sviluppato da fornire risorse sufficienti. Tuttavia, nei Paesi con sistemi fiscali deboli o con governi che non riescono ad accedere ai mercati finanziari, il signoraggio può rappresentare una quota significativa delle entrate, con conseguente alta inflazione.
          </p>
        </div>

        <div className="formula-box">
          <div>Signoraggio reale = (ΔM / P) = (ΔM / M) × (M / P) = μ × (M / P)</div>
          <div style={{ fontSize: '0.88rem', marginTop: '0.4rem', color: '#64748b' }}>
            Il signoraggio reale è uguale al tasso di crescita della moneta μ moltiplicato per le scorte reali di moneta M/P. Più alta l'inflazione (e quindi μ), minori le scorte reali M/P detenute (la gente fugge dalla moneta), per cui esiste un tasso ottimale di inflazione che massimizza le entrate da signoraggio.
          </div>
        </div>

        <div className="callout callout-case">
          <h4>ANALISI DI UN CASO — Il finanziamento della guerra d'indipendenza americana</h4>
          <p>
            Quando le colonie americane decisero di combattere per la propria indipendenza dal governo britannico, necessitavano di finanziamenti per pagare l'esercito e il materiale bellico. Dal momento che la tassazione è un provvedimento impopolare, specialmente in un'epoca in cui la ribellione si fondava proprio sull'opposizione alla tassazione senza rappresentanza politica, il Congresso Continentale decise di finanziare la guerra principalmente stampando moneta.
          </p>
          <p>
            La moneta emessa si chiamava <em>continental</em>, da cui deriva il detto americano "not worth a continental" (non vale nemmeno un continental). Dal 1775 al 1779 il Congresso emise circa 226 milioni di dollari in moneta cartacea. Con questa emissione massiccia, il livello dei prezzi aumentò di un fattore superiore a 100 tra il 1777 e il 1781. L'inflazione era così elevata che i soldati dell'esercito di Washington si rifiutavano di essere pagati in continental, preferendo i beni reali o la moneta metallica.
          </p>
          <p>
            Alexander Hamilton, nel 1790, come primo Segretario del Tesoro degli Stati Uniti, riconobbe che questo episodio di signoraggio aveva danneggiato la credibilità della neonata nazione e si impegnò a ripagare i debiti in oro, stabilendo le basi per una politica monetaria più prudente. L'episodio rimase a lungo nella memoria collettiva americana come esempio emblematico dei rischi del finanziamento inflazionistico della spesa pubblica.
          </p>
        </div>
      </section>

      <section className="macro-section">
        <h2 className="section-title">5.3 L'inflazione e i tassi di interesse</h2>
        <div className="prose">
          <p>
            Come abbiamo visto nel Capitolo 3, l'economia è caratterizzata da una grande varietà di tassi di interesse. In questo paragrafo esamineremo la relazione tra inflazione e tassi di interesse.
          </p>

          <h3>Due tassi di interesse: reale e nominale</h3>
          <p>
            Supponiamo di depositare i tuoi risparmi in banca. Alla fine dell'anno, la banca ti restituirà il capitale più gli interessi. Se il tasso di interesse è del 5%, riceverai 1,05 euro per ogni euro depositato. Ma questo tasso di interesse di per sé non misura il potere d'acquisto: se durante l'anno i prezzi sono aumentati del 3%, il tuo potere d'acquisto è cresciuto solo del 2%.
          </p>
          <p>
            Il tasso di interesse che la banca ti paga è il <strong>tasso di interesse nominale (i)</strong>, mentre il tasso di interesse corretto per l'inflazione è il <strong>tasso di interesse reale (r)</strong>. La relazione tra i due è:
          </p>
        </div>

        <div className="formula-box">
          <div>r = i − π</div>
          <div style={{ fontSize: '0.88rem', marginTop: '0.4rem', color: '#64748b' }}>
            Il tasso reale è il tasso nominale meno il tasso di inflazione. L'equazione di Fisher la riscrive come: <strong>i = r + π</strong>
          </div>
        </div>

        <div className="prose">
          <h3>L'effetto Fisher</h3>
          <p>
            In che modo l'inflazione influenza il tasso di interesse nominale? La risposta è data dall'<strong>effetto Fisher</strong>: nel lungo periodo, il tasso di interesse nominale si aggiusta uno-a-uno all'inflazione.
          </p>
          <p>
            Scrivendo l'equazione di Fisher come <em>i = r + π</em>, possiamo notare che, nel lungo periodo, il tasso di interesse reale r è determinato da fattori reali (la produttività del capitale, le preferenze di risparmio), come abbiamo visto nel Capitolo 3. Pertanto, quando l'inflazione attesa π aumenta di un punto percentuale, anche il tasso nominale i aumenta di un punto percentuale.
          </p>
          <p>
            L'intuizione è la seguente: un creditore che si aspetta un'inflazione più alta chiederà un tasso nominale più alto per mantenere invariato il proprio rendimento reale; un debitore che prevede inflazione più alta è disposto a pagare tassi nominali più alti, perché restituirà euro con minor valore reale. Questo meccanismo implica che la politica monetaria, aumentando l'inflazione attesa, finisce per aumentare i tassi nominali senza ridurre permanentemente quelli reali nel lungo periodo.
          </p>
          <p>
            L'evidenza empirica supporta l'effetto Fisher. Il confronto internazionale mostra che i paesi con inflazione più alta tendono ad avere tassi di interesse nominali più alti. Anche l'analisi storica degli Stati Uniti — Figura 5.3 nel libro — mostra una stretta correlazione tra il tasso di inflazione e il tasso dei Buoni del Tesoro a breve termine: quando l'inflazione è salita negli anni Settanta, i tassi nominali hanno seguito. Quando la Federal Reserve ha abbassato l'inflazione negli anni Ottanta, i tassi nominali sono scesi.
          </p>
        </div>

        <FisherGraph />

        <div className="callout callout-case">
          <h4>ANALISI DI UN CASO — Inflazione e tasso di interesse nominale</h4>
          <p>
            Fino a poco prima l'effetto Fisher si è rivelato l'analisi delle condizioni della relazione tra i due tassi di interesse (nominale e reale) e il tasso di inflazione e ne analizzava i meccanismi di trasmissione. La Figura 5.3 del libro mostra l'andamento del tasso di inflazione negli Stati Uniti a partire dal 1954. In altre parole, il tasso di inflazione e quello di interesse nominale si sono mossi insieme per un lungo periodo. In base alla nostra teoria, quale delle due variabili ha guidato l'altra? La risposta nella maggior parte dei casi è che a prima viene la variazione dei prezzi, o più precisamente, la variazione delle aspettative di inflazione: le aspettative del mercato circa la futura inflazione influenzano i tassi nominali attraverso l'equazione di Fisher.
          </p>
          <p>
            La correlazione positiva tra inflazione e tassi nominali è confermata anche dal confronto internazionale riportato in Figura 5.4 del libro. Il Paese con il più alto tasso di inflazione nominale e tasso di interesse nominale fu il Brasile degli anni Ottanta; i Paesi con i tassi nominali più bassi (Svizzera, Giappone, Germania) avevano anche tassi di inflazione tra i più bassi del mondo. Come la teoria quantitativa, anche l'effetto Fisher è una delle relazioni empiriche più robuste della macroeconomia.
          </p>
        </div>
      </section>

      <section className="macro-section">
        <h2 className="section-title">5.4 Il tasso di interesse nominale e la domanda di moneta</h2>
        <div className="prose">
          <p>
            La teoria quantitativa della moneta si fonda sull'ipotesi che la domanda di moneta dipenda solo dal reddito nominale. Ma esiste un'altra variabile importante che influenza la domanda di moneta: il tasso di interesse nominale i. Detenere moneta ha un costo: si rinuncia al tasso di interesse che si potrebbe ottenere depositando la moneta in banca o acquistando titoli. Questo costo opportunità della moneta è misurato dal tasso di interesse nominale.
          </p>
          <p>
            Quando il tasso di interesse nominale è elevato, detenere moneta è costoso: le persone preferiscono ridurre le scorte di moneta e investire in attività finanziarie che rendono interessi. Pertanto, la domanda di moneta reale dipende negativamente da i. La funzione di domanda di moneta più generale è:
          </p>
        </div>

        <div className="formula-box">
          <div>(M/P)ᵈ = L(i, Y)</div>
          <div style={{ fontSize: '0.88rem', marginTop: '0.4rem', color: '#64748b' }}>
            La domanda di moneta reale L(·) è crescente in Y e decrescente in i. L è la funzione di liquidità.
          </div>
        </div>

        <div className="prose">
          <p>
            Uguagliando offerta e domanda reale di moneta: M/P = L(i, Y), otteniamo una relazione che determina il livello dei prezzi P:
          </p>
        </div>

        <div className="formula-box secondary">
          <div>P = M / L(i, Y)</div>
          <div style={{ fontSize: '0.88rem', marginTop: '0.4rem', color: '#64748b' }}>
            Il livello dei prezzi è proporzionale all'offerta di moneta M, a parità di domanda di moneta L(i,Y). Se i aumenta (perché aumenta l'inflazione attesa), L diminuisce, P aumenta ulteriormente: effetto di amplificazione.
          </div>
        </div>

        <div className="prose">
          <p>
            Questa formulazione incorpora l'effetto Fisher. Se la banca centrale annuncia un aumento permanente della crescita monetaria, le aspettative di inflazione aumentano, i tassi nominali aumentano (Fisher), la domanda di moneta reale diminuisce, il livello dei prezzi sale ancora di più: l'inflazione sarà più elevata non solo per la crescita della moneta, ma anche per la riduzione della domanda di moneta. Questo meccanismo di feedback è particolarmente rilevante negli episodi di iperinflazione, dove l'accelerazione della fuga dalla moneta amplifica l'inflazione oltre quanto previsto dalla semplice relazione μ − g.
          </p>
        </div>
      </section>

      <section className="macro-section">
        <h2 className="section-title">5.5 I costi sociali dell'inflazione</h2>
        <div className="prose">
          <p>
            Come abbiamo visto, l'inflazione è sempre e ovunque un fenomeno monetario. Perché, allora, i responsabili della politica economica cercano di tenere bassa l'inflazione? L'inflazione è un fenomeno dannoso? Non tutti concordano sull'entità di questa dannosità. In questa sezione discutiamo i costi che l'inflazione impone all'economia. È utile distinguere tra i costi dell'<strong>inflazione attesa</strong> e i costi dell'<strong>inflazione non attesa</strong>.
          </p>

          <h3>I costi dell'inflazione attesa</h3>
          <p>
            Quando l'inflazione è pienamente attesa dagli agenti economici, i costi principali sono:
          </p>

          <h4 style={{ marginTop: '1rem', fontWeight: '600', color: '#475569' }}>1. Il costo delle scarpe di cuoio</h4>
          <p>
            Quando l'inflazione è elevata, il tasso di interesse nominale è elevato e il costo di opportunità della detenzione di moneta è alto. Pertanto le persone cercano di ridurre le proprie scorte di moneta, effettuando frequenti prelievi bancari e riducendo il contante in tasca. Queste attività richiedono tempo e sforzo (metaforicamente "consumano le suole delle scarpe"), generando dei costi reali per la società.
          </p>

          <h4 style={{ marginTop: '1rem', fontWeight: '600', color: '#475569' }}>2. I costi da menù</h4>
          <p>
            Quando l'inflazione è elevata, i prezzi devono essere cambiati spesso. Questo genera costi: un ristorante deve ristampare i menù, un negozio deve etichettare di nuovo tutti i prodotti, un'azienda deve aggiornare i listini. Questi costi, detti <em>costi da menù</em>, sono generalmente piccoli in contesti di inflazione moderata, ma possono diventare significativi in situazioni di inflazione elevata.
          </p>

          <h4 style={{ marginTop: '1rem', fontWeight: '600', color: '#475569' }}>3. La variabilità dei prezzi relativi e la cattiva allocazione delle risorse</h4>
          <p>
            Poiché le imprese cambiano i prezzi raramente (a causa dei costi da menù), l'inflazione genera differenze tra i prezzi relativi di beni che avrebbero lo stesso valore reale. Quando i prezzi relativi divergono dai valori di equilibrio, le decisioni delle famiglie e delle imprese sono distorte, portando a una cattiva allocazione delle risorse.
          </p>

          <h4 style={{ marginTop: '1rem', fontWeight: '600', color: '#475569' }}>4. Le distorsioni fiscali</h4>
          <p>
            Le leggi fiscali spesso non tengono conto dell'inflazione. Molte imposte si basano su valori nominali (non reali). Per esempio, le plusvalenze sulle azioni o sugli immobili vengono tassate su guadagni nominali che possono in parte riflettere solo l'inflazione anziché un reale aumento della ricchezza. Queste distorsioni fiscali legate all'inflazione riducono l'efficienza del sistema economico.
          </p>

          <h4 style={{ marginTop: '1rem', fontWeight: '600', color: '#475569' }}>5. La confusione e l'inconveniente</h4>
          <p>
            La moneta serve come unità di misura delle transazioni economiche. Quando l'inflazione è presente, questa unità di misura cambia continuamente. Se un contratto è espresso in termini nominali, l'inflazione lo rende più difficile da interpretare nel tempo. Gli individui e le imprese devono tenere conto costantemente dell'inflazione nelle proprie decisioni, il che aumenta la complessità e riduce la trasparenza dei mercati.
          </p>

          <h3>I costi dell'inflazione non attesa</h3>
          <p>
            L'inflazione non attesa ha un ulteriore costo: redistribuisce la ricchezza tra debitore e creditore in modo arbitrario e non preventivato. Poiché molti debiti sono espressi in termini nominali, un'inflazione superiore al previsto riduce il valore reale del debito, a vantaggio dei debitori e a svantaggio dei creditori. Viceversa, un'inflazione inferiore al previsto danneggia i debitori e avvantaggia i creditori.
          </p>
          <p>
            Questa redistribuzione è considerata iniqua perché non dipende da alcun principio di merito o di bisogno, ma è puramente casuale. Inoltre, questa incertezza crea un disincentivo alla stipula di contratti finanziari a lungo termine, riducendo così gli investimenti e la crescita economica.
          </p>
          <p>
            Un paradosso ben noto è il seguente: <em>se l'inflazione non ha costi reali, perché allora i responsabili di politica economica si preoccupano così tanto di mantenerla bassa?</em> La risposta è che l'inflazione — anche se attesa — ha costi reali seppur piccoli, e l'inflazione inattesa redistribuisce in modo arbitrario. Quando l'inflazione è variabile e non prevedibile, si aggiunge il costo dell'incertezza, che è particolarmente dannoso per la pianificazione economica di famiglie e imprese.
          </p>
        </div>

        <ShoeleatherGraph />

        <div className="callout callout-case">
          <h4>ANALISI DI UN CASO — Il punto di vista dei non addetti ai lavori</h4>
          <p>
            Nel 1996 l'economista e professore Robert Shiller pubblicò un'inchiesta su come l'inflazione venisse percepita dalla gente comune negli Stati Uniti e in Germania. Shiller aveva chiesto alle persone perché trovassero l'inflazione indesiderabile. Probabilmente, se avesse chiesto ad economisti questa domanda, avrebbero risposto citando i costi delle scarpe di cuoio, i costi da menù e le distorsioni fiscali. La risposta della gente comune è stata invece molto diversa.
          </p>
          <p>
            Quando le persone venivano interrogate sull'inflazione del 2%, la maggior parte di esse diceva che non era un grosso problema. «Quando si chiede ai non addetti ai lavori» scrive Shiller «cosa li disturba dell'inflazione, la risposta più comune che si ottiene è che abbassa il tenore di vita» — il che non è un costo economico reale dell'inflazione ma una confusione tra variabili nominali e reali. «Il secondo disturbo più comune riguardava l'iniquità dell'inflazione, ad esempio, "fanno alzare i prezzi perché possono farlo"».
          </p>
          <p>
            Quando le persone venivano interrogate sull'inflazione del 10%, le preoccupazioni aumentavano notevolmente. I non addetti ai lavori erano più preoccupati perché l'inflazione alta si accompagna spesso a instabilità macroeconomica, incertezza e spesso a politiche mal gestite. In questo senso, l'inflazione può essere vista come un sintomo di cattiva gestione economica, più che un problema in sé.
          </p>
        </div>
      </section>

      <section className="macro-section">
        <h2 className="section-title">5.6 L'iperinflazione</h2>
        <div className="prose">
          <p>
            Si definisce <strong>iperinflazione</strong> un tasso di inflazione che supera il 50% al mese (definizione di Phillip Cagan). Tassi di inflazione del 50% al mese significano che i prezzi aumentano di oltre 100 volte (12.875 volte, per la precisione) nell'arco di un anno. Sebbene l'inflazione del 2-3% annuo possa sembrare un fastidio tollerabile, l'iperinflazione è chiaramente un fenomeno distruttivo.
          </p>
          <p>
            I costi dell'iperinflazione sono enormi. Il costo delle scarpe di cuoio diventa molto elevato: poiché la moneta perde valore così rapidamente, le persone cercano di tenerla per il minor tempo possibile, il che distorce le attività economiche quotidiane. I costi da menù diventano proibitivi: i commercianti devono cambiare i prezzi quotidianamente o anche più spesso. La variabilità dei prezzi relativi aumenta vertiginosamente, rendendo impossibile qualunque tipo di pianificazione economica razionale.
          </p>
          <p>
            Tutti gli episodi di iperinflazione hanno una caratteristica comune: una crescita esplosiva dell'offerta di moneta. Quando i governi affrontano spese ingenti (guerre, crisi profonde) e non riescono a finanziarle con tasse o prestiti, ricorrono alla stampa di moneta. La conseguente inflazione diventa iperinflazione quando il meccanismo di feedback — prezzi più alti → maggiore bisogno di signoraggio → più moneta stampata → prezzi ancora più alti — si avvita in una spirale.
          </p>
        </div>

        <HyperinflationGraph />

        <div className="callout callout-case">
          <h4>ANALISI DI UN CASO — L'iperinflazione in Germania</h4>
          <p>
            Al termine della Prima guerra mondiale, la Germania si trovò in una situazione di grave difficoltà finanziaria. Le riparazioni di guerra imposte dai trattati di pace, la distruzione dell'apparato produttivo e la perdita di territori ricchi di risorse rendevano impossibile far fronte alle obbligazioni pubbliche con le sole entrate fiscali. Il governo tedesco cominciò a stampare moneta per finanziare le proprie spese.
          </p>
          <p>
            Il risultato fu una delle più gravi iperinflazioni della storia. Tra il gennaio 1922 e il novembre 1923, il livello dei prezzi in Germania si moltiplicò per circa 5,73 miliardi. La Figura 5.5 del libro mostra in modo eloquente come, nella seconda parte del 1923, la massa monetaria e il livello dei prezzi siano saliti insieme a tassi vertiginosi. In quell'anno, le banche avevano bisogno di usare carriole per trasportare il denaro necessario per fare la spesa quotidiana.
          </p>
          <p>
            Come accade in tutti gli episodi di iperinflazione, la gente cercò di liberarsi della moneta il più in fretta possibile, spendendo lo stipendio non appena lo riceveva. I salari venivano pagati due volte al giorno. Le persone che avevano contratto debiti in marchi (la valuta tedesca) si trovavano a poterli saldare con pochissimo in termini reali. L'iperinflazione finì nel novembre 1923, quando il governo introdusse una nuova moneta — il Rentenmark — e si impegnò credibilmente a non stamparla in eccesso. Questa stabilizzazione avvenne quasi dall'oggi al domani, confermando che l'iperinflazione è essenzialmente un fenomeno di aspettative oltre che monetario.
          </p>
        </div>

        <div className="callout callout-case">
          <h4>ANALISI DI UN CASO — L'iperinflazione in Zimbabwe</h4>
          <p>
            Nel 1980 lo Zimbabwe ottenne l'indipendenza dalla Rhodesia (nome coloniale del Paese) e Robert Mugabe salì al potere. All'inizio, la politica economica fu relativamente moderata. Poi però il governo cominciò ad affrontare seri problemi economici e finanziari. Per risolverli, a partire dal tardo anni Novanta, il governo ricorse sempre più alla creazione di moneta.
          </p>
          <p>
            L'inflazione raggiunse livelli straordinari. Negli anni 2000, la Banca Centrale dello Zimbabwe stampava banconote con cifre sempre più astronomiche: 100 miliardi di dollari zimbabwesi, poi 100 trilioni. Nel 2008, secondo alcune stime, il tasso di inflazione mensile aveva raggiunto quasi il 80 miliardi percento. I prezzi raddoppiavano ogni pochi giorni. La moneta locale smise di funzionare come mezzo di scambio: le transazioni avvenivano in dollari americani o in rand sudafricani.
          </p>
          <p>
            La storia dello Zimbabwe offre un esempio drammatico di ciò che accade quando una banca centrale perde la propria indipendenza e si trasforma in un organo di finanziamento della spesa pubblica. La stabilizzazione arrivò nel 2009, quando il governo adottò il dollaro americano come moneta nazionale, eliminando così la possibilità di creare moneta propria.
          </p>
        </div>

        <div className="callout callout-case">
          <h4>ANALISI DI UN CASO — Il movimento Free Silver, le elezioni del 1896 e il mago di Oz</h4>
          <p>
            Negli ultimi decenni del XIX secolo gli Stati Uniti erano, come molte nazioni, fermi al <em>gold standard</em>: la quantità di moneta era ancorata alle riserve d'oro della nazione. La scoperta di nuove miniere d'oro era lenta, e l'offerta di moneta cresceva molto meno velocemente dell'economia reale. Il risultato fu una deflazione prolungata — i prezzi scendevano — per un periodo di circa vent'anni a partire dal 1880.
          </p>
          <p>
            La deflazione creò molte difficoltà ai contadini americani. I contadini avevano spesso contratto debiti (mutui fondiari) espressi in termini nominali per acquistare terreni e macchinari. Con la deflazione, il valore reale di questi debiti aumentava, rendendo sempre più difficile il rimborso. In più, i prezzi dei prodotti agricoli scendevano, riducendo i redditi. I contadini chiedevano a gran voce una politica di espansione monetaria che portasse a un po' di inflazione e riducesse il peso reale dei loro debiti.
          </p>
          <p>
            Il movimento politico che emerse da questa situazione era il "Free Silver" (libero conio dell'argento). L'idea era di affiancare all'oro anche l'argento come riserva monetaria, aumentando così l'offerta di moneta e generando inflazione. Il movimento culminò nella candidatura presidenziale di William Jennings Bryan nel 1896, con il celebre discorso "Cross of Gold": «Non crocifiggerete l'umanità su una croce d'oro».
          </p>
          <p>
            Molti studiosi ritengono che il romanzo di L. Frank Baum <em>Il Mago di Oz</em> (1900) sia un'allegoria politica di questo periodo. In questa lettura: la strada di mattoni gialli è il gold standard (gold = oro giallo); Dorothy (che rappresenta i contadini) indossa scarpe d'argento (non rosse, come nel film — nelle scarpette originali erano d'argento), simbolo del Free Silver; il Mago di Oz a Washington è il presidente impotente; i Munchkin sono i contadini oppressi; il mago non ha potere reale, come i banchieri. Dorothy alla fine usa le scarpe d'argento per tornare a casa — il silver standard avrebbe salvato i contadini — ma anche le scarpe d'argento non funzionano in modo definitivo.
          </p>
          <p>
            William Jennings Bryan perse le elezioni del 1896 contro William McKinley. Il gold standard rimase in vigore. Di lì a poco, però, le grandi scoperte aurifere in Alaska e in Sudafrica aumentarono l'offerta d'oro, l'offerta di moneta crebbe, e si verificò effettivamente l'inflazione che i contadini avevano sperato di ottenere con il Free Silver. I prezzi agricoli salirono, i redditi rurali migliorarono, e il movimento Free Silver si sgonfiò.
          </p>
        </div>
      </section>

      <section className="macro-section">
        <h2 className="section-title">5.7 Conclusione: la dicotomia classica</h2>
        <div className="prose">
          <p>
            In questo capitolo e nel precedente abbiamo illustrato il concetto di moneta e l'impatto della moneta sull'inflazione nel lungo periodo. Abbiamo costruito la teoria a partire da un modello semplice e abbiamo poi esaminato una serie di concetti correlati: il signoraggio, l'effetto Fisher, i costi sociali dell'inflazione e l'iperinflazione.
          </p>
          <p>
            La lezione più importante di questi capitoli è la seguente: la politica monetaria influenza le variabili nominali — il livello dei prezzi, il tasso di inflazione, il tasso di interesse nominale — ma nel lungo periodo non influenza le variabili reali — la produzione, l'occupazione, il salario reale, il tasso di interesse reale. Questa separazione tra variabili reali e nominali nell'analisi economica di lungo periodo è chiamata <strong>dicotomia classica</strong>.
          </p>
          <p>
            La <strong>neutralità della moneta</strong> è l'idea che le variazioni della quantità di moneta non influenzino le variabili reali. Questo è il motivo per cui, nel modello del Capitolo 3, abbiamo potuto determinare il tasso di interesse reale, il salario reale e il livello di produzione senza mai menzionare la moneta. La moneta determina la scala nominale dell'economia — il livello dei prezzi, i salari nominali, il tasso nominale — ma non la struttura reale dell'economia.
          </p>
          <p>
            La dicotomia classica e la neutralità della moneta sono concetti fondamentali dell'economia di lungo periodo. Tuttavia, molti economisti ritengono che la moneta non sia neutrale nel breve periodo. La transizione da breve a lungo periodo e il meccanismo attraverso cui la moneta influenza le variabili reali nel breve periodo saranno al centro dell'analisi a partire dal Capitolo 11. Saranno necessari diversi capitoli per riuscire a spiegare in modo compiuto il ruolo della politica monetaria.
          </p>
        </div>

        <div className="formula-box">
          <div>Variabili reali: Y, r, W/P → determinate dall'offerta (cap. 3)</div>
          <div>Variabili nominali: P, π, i, W → determinate dalla moneta (cap. 4–5)</div>
          <div style={{ fontSize: '0.88rem', marginTop: '0.4rem', color: '#64748b' }}>
            <strong>Dicotomia classica:</strong> nel lungo periodo le due sfere sono separate. La politica monetaria determina solo le variabili nominali.
          </div>
        </div>

        <div className="conclusion-grid">
          <div className="conclusion-item">
            <h4>Teoria quantitativa</h4>
            <p>MV = PY: con V e Y stabili, la crescita di M si traduce uno-a-uno in inflazione π = μ − g.</p>
          </div>
          <div className="conclusion-item">
            <h4>Signoraggio</h4>
            <p>Il governo può finanziarsi stampando moneta, imponendo di fatto una "tassa da inflazione" sui detentori di moneta.</p>
          </div>
          <div className="conclusion-item">
            <h4>Effetto Fisher</h4>
            <p>i = r + π: l'inflazione attesa si trasferisce uno-a-uno sul tasso nominale, lasciando invariato il tasso reale nel lungo periodo.</p>
          </div>
          <div className="conclusion-item">
            <h4>Costi e iperinflazione</h4>
            <p>L'inflazione attesa genera costi reali (scarpe di cuoio, menù, distorsioni fiscali). L'iperinflazione (&gt; 50%/mese) distrugge il sistema economico.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
