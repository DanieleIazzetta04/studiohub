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
//  GRAPH 1 — MONEY MULTIPLIER
// ══════════════════════════════════════════════════════════════
function MoneyMultiplierGraph() {
  const [rr, setRr] = useState(0.10);
  const [cr, setCr] = useState(0.40);
  const [B, setB] = useState(1000);

  const multiplier = (1 + cr) / (rr + cr);
  const M = multiplier * B;

  const xMin = 0.02, xMax = 0.50;
  const yMin = 0, yMax = 10;
  const points = [];
  for (let r = xMin; r <= xMax; r += 0.005) {
    const m = (1 + cr) / (r + cr);
    points.push([toX(r, xMin, xMax), toY(m, yMin, yMax)]);
  }
  const path = 'M ' + points.map(p => p.join(',')).join(' L ');

  return (
    <div className="graph-block">
      <h4 className="graph-title">Moltiplicatore monetario: m = (1 + cr) / (rr + cr)</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          <Axes xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax} xLabel="rr (riserve/depositi)" yLabel="m" xFmt={v => v.toFixed(2)} yFmt={v => v.toFixed(1)} />
          <path d={path} fill="none" stroke="#0ea5e9" strokeWidth={2.2} />
          <circle cx={toX(rr, xMin, xMax)} cy={toY(multiplier, yMin, yMax)} r={5} fill="#0ea5e9" stroke="#fff" strokeWidth={2} />
          <line x1={toX(rr, xMin, xMax)} y1={PT + cH} x2={toX(rr, xMin, xMax)} y2={toY(multiplier, yMin, yMax)} stroke="#0ea5e9" strokeDasharray="3,3" strokeWidth={1.2} />
        </svg>
        <div className="graph-controls">
          <SliderControl label="Rapporto riserve/depositi" symbol="rr" value={rr} min={0.02} max={0.50} step={0.01} onChange={setRr} color="#0ea5e9" fmt={v => v.toFixed(2)} />
          <SliderControl label="Rapporto circolante/depositi" symbol="cr" value={cr} min={0.05} max={1.00} step={0.01} onChange={setCr} color="#a855f7" fmt={v => v.toFixed(2)} />
          <SliderControl label="Base monetaria" symbol="B" value={B} min={500} max={2000} step={50} onChange={setB} color="#16a34a" fmt={v => v.toFixed(0)} />
          <div className="result-box">
            <div className="result-row"><strong>m</strong> <span>{multiplier.toFixed(2)}</span></div>
            <div className="result-row"><strong>M = m · B</strong> <span>{M.toFixed(0)}</span></div>
          </div>
          <div className="insight-mini">Al diminuire della riserva rr, ogni euro di base monetaria crea più moneta. La curva è iperbolica: piccole variazioni di rr vicino allo zero hanno effetti enormi.</div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAPH 2 — FRACTIONAL RESERVE CREATION
// ══════════════════════════════════════════════════════════════
function FractionalReserveGraph() {
  const [rr, setRr] = useState(0.10);
  const [D0, setD0] = useState(1000);
  const stages = 10;

  const bars = [];
  let cum = 0;
  let curr = D0;
  for (let i = 0; i < stages; i++) {
    bars.push({ stage: i, deposit: curr, cum: cum + curr });
    cum += curr;
    curr = curr * (1 - rr);
  }
  const total = cum;
  const theoreticalTotal = D0 / rr;

  const xMin = -0.5, xMax = stages - 0.5;
  const yMin = 0, yMax = D0 * 1.05;
  const barW = (cW / stages) * 0.65;

  return (
    <div className="graph-block">
      <h4 className="graph-title">Creazione di moneta con riserva frazionaria</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          <Axes xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax} xLabel="stadio" yLabel="nuovo deposito" nX={stages} xFmt={v => Math.round(v).toString()} yFmt={v => v.toFixed(0)} />
          {bars.map((b, i) => {
            const xC = toX(i, xMin, xMax);
            const yTop = toY(b.deposit, yMin, yMax);
            const yBase = toY(0, yMin, yMax);
            return (
              <g key={i}>
                <rect x={xC - barW / 2} y={yTop} width={barW} height={yBase - yTop} fill="#6366f1" opacity={0.75} />
              </g>
            );
          })}
        </svg>
        <div className="graph-controls">
          <SliderControl label="Rapporto riserve/depositi" symbol="rr" value={rr} min={0.05} max={0.50} step={0.01} onChange={setRr} color="#6366f1" fmt={v => v.toFixed(2)} />
          <SliderControl label="Deposito iniziale" symbol="D₀" value={D0} min={500} max={2000} step={100} onChange={setD0} color="#f59e0b" fmt={v => v.toFixed(0)} />
          <div className="result-box">
            <div className="result-row"><strong>Totale dopo {stages} stadi</strong> <span>{total.toFixed(0)}</span></div>
            <div className="result-row"><strong>Limite teorico D/rr</strong> <span>{theoreticalTotal.toFixed(0)}</span></div>
          </div>
          <div className="insight-mini">Ogni deposito genera un prestito, che diventa nuovo deposito: la sequenza di barre è geometrica con ragione (1−rr). La serie converge a D/rr.</div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAPH 3 — MONEY SUPPLY MODEL
// ══════════════════════════════════════════════════════════════
function MoneySupplyGraph() {
  const [B, setB] = useState(1000);
  const [rr, setRr] = useState(0.10);
  const [cr, setCr] = useState(0.40);

  const multiplier = (1 + cr) / (rr + cr);
  const C = cr / (1 + cr) * multiplier * B;
  const D = 1 / (1 + cr) * multiplier * B;
  const M = C + D;

  const xMin = 0, xMax = 2000;
  const yMin = 0, yMax = 12000;
  const pts = [];
  for (let b = xMin; b <= xMax; b += 40) {
    pts.push([toX(b, xMin, xMax), toY(multiplier * b, yMin, yMax)]);
  }
  const line = 'M ' + pts.map(p => p.join(',')).join(' L ');

  return (
    <div className="graph-block">
      <h4 className="graph-title">Offerta di moneta: M = m · B</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          <Axes xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax} xLabel="Base monetaria B" yLabel="M" xFmt={v => v.toFixed(0)} yFmt={v => v.toFixed(0)} />
          <path d={line} fill="none" stroke="#ef4444" strokeWidth={2.2} />
          <circle cx={toX(B, xMin, xMax)} cy={toY(M, yMin, yMax)} r={5} fill="#ef4444" stroke="#fff" strokeWidth={2} />
          <line x1={toX(B, xMin, xMax)} y1={PT + cH} x2={toX(B, xMin, xMax)} y2={toY(M, yMin, yMax)} stroke="#ef4444" strokeDasharray="3,3" strokeWidth={1} />
          <line x1={PL} y1={toY(M, yMin, yMax)} x2={toX(B, xMin, xMax)} y2={toY(M, yMin, yMax)} stroke="#ef4444" strokeDasharray="3,3" strokeWidth={1} />
        </svg>
        <div className="graph-controls">
          <SliderControl label="Base monetaria" symbol="B" value={B} min={200} max={2000} step={50} onChange={setB} color="#ef4444" fmt={v => v.toFixed(0)} />
          <SliderControl label="Riserve/depositi" symbol="rr" value={rr} min={0.02} max={0.50} step={0.01} onChange={setRr} color="#0ea5e9" fmt={v => v.toFixed(2)} />
          <SliderControl label="Circolante/depositi" symbol="cr" value={cr} min={0.05} max={1.00} step={0.01} onChange={setCr} color="#a855f7" fmt={v => v.toFixed(2)} />
          <div className="result-box">
            <div className="result-row"><strong>Moltiplicatore m</strong> <span>{multiplier.toFixed(2)}</span></div>
            <div className="result-row"><strong>Circolante C</strong> <span>{C.toFixed(0)}</span></div>
            <div className="result-row"><strong>Depositi D</strong> <span>{D.toFixed(0)}</span></div>
            <div className="result-row"><strong>Offerta M</strong> <span>{M.toFixed(0)}</span></div>
          </div>
          <div className="insight-mini">La pendenza della retta è il moltiplicatore m. La banca centrale controlla B; le banche e il pubblico determinano m.</div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAPH 4 — QE USA 2007-2014
// ══════════════════════════════════════════════════════════════
function QEGraph() {
  const [shock, setShock] = useState(3.4);
  const [slope, setSlope] = useState(0.8);

  const xMin = 2005, xMax = 2015;
  const yMin = 0, yMax = 4500;

  const points = [];
  for (let t = xMin; t <= xMax; t += 0.25) {
    let y;
    if (t < 2008.7) {
      y = 800 + 30 * (t - xMin);
    } else {
      const dt = t - 2008.7;
      y = 870 + shock * 1000 * (1 - Math.exp(-slope * dt));
    }
    points.push([toX(t, xMin, xMax), toY(y, yMin, yMax)]);
  }
  const path = 'M ' + points.map(p => p.join(',')).join(' L ');

  return (
    <div className="graph-block">
      <h4 className="graph-title">Base monetaria USA (2005–2015, mld $)</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          <Axes xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax} xLabel="anno" yLabel="B (mld $)" nX={10} xFmt={v => v.toFixed(0)} yFmt={v => v.toFixed(0)} />
          <line x1={toX(2008.7, xMin, xMax)} y1={PT} x2={toX(2008.7, xMin, xMax)} y2={PT + cH} stroke="#dc2626" strokeDasharray="4,4" strokeWidth={1.3} />
          <text x={toX(2008.7, xMin, xMax) + 4} y={PT + 12} fontSize={10} fill="#dc2626">Lehman</text>
          <path d={path} fill="none" stroke="#16a34a" strokeWidth={2.4} />
        </svg>
        <div className="graph-controls">
          <SliderControl label="Intensità QE" symbol="Δ" value={shock} min={0.5} max={4.5} step={0.1} onChange={setShock} color="#16a34a" fmt={v => v.toFixed(1)} />
          <SliderControl label="Velocità di espansione" symbol="λ" value={slope} min={0.1} max={1.5} step={0.05} onChange={setSlope} color="#0ea5e9" fmt={v => v.toFixed(2)} />
          <div className="insight-mini">Dal 2008 al 2014 la Fed ha quintuplicato la base monetaria attraverso acquisti massicci di titoli (quantitative easing). L'inflazione è rimasta bassa perché le banche hanno accumulato riserve in eccesso invece di espandere il credito.</div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  PAGE
// ══════════════════════════════════════════════════════════════
export default function Cap4_SistemaMonetario() {
  return (
    <div className="macro-page">
      <header className="macro-header">
        <div className="chapter-badge">CAPITOLO 4</div>
        <h1 className="macro-title gradient-text">Il sistema monetario: che cos'è e come funziona</h1>
        <p className="macro-subtitle">
          «Tre sono le invenzioni più grandi di tutti i tempi: il fuoco, la ruota e le banche centrali.» — Will Rogers
        </p>
      </header>

      <section className="macro-section">
        <h2 className="section-title">Introduzione</h2>
        <div className="prose">
          <p>
            I due principali strumenti di politica macroeconomica sono la politica fiscale e la politica monetaria. La politica fiscale è stata vista nel capitolo precedente. La politica fiscale si riferisce alle decisioni del governo centrale in tema di spese e tassazione. La politica monetaria si riferisce, invece, alle decisioni relative al sistema monetario, valutario e bancario della nazione. La politica fiscale è, difatti, appannaggio di organi rappresentativi eletti, come il Congresso degli Stati Uniti, il governo e il Parlamento italiano, o la Dieta giapponese. La politica monetaria è appannaggio della banca centrale: un'istituzione che possiede una forte autonomia rispetto alla nomenklatura e ai direttivi vario, in genere, nominati dagli organi elettivi del Paese. Fra le principali banche centrali abbiamo la Federal Reserve (Fed) degli Stati Uniti, la Banca Centrale Europea (BCE) per l'eurozona, la Bank of England per il Regno Unito e la Banca del Giappone.
          </p>
          <p>
            Ovviamente Will Rogers esagerava nell'affermare che la banca centrale fosse una delle tre più importanti invenzioni di tutti i tempi, ma aveva ragione nel sottolineare la rilevanza nella misura in cui le banche centrali, determinando la politica monetaria, influenzano notevolmente la vita e il benessere dei cittadini di tutte le nazioni del mondo.
          </p>
          <p>
            Gran parte di questo libro è dedicata alla comprensione degli effetti della politica monetaria e della politica fiscale, e del ruolo che svolgono. Con questo capitolo inizia la nostra analisi della politica monetaria. Rispondiamo in particolare a tre domande fra loro collegate. Che cos'è la moneta? Qual è il ruolo svolto dal sistema bancario nel determinare la quantità di moneta nel sistema economico? In che modo la banca centrale influenza il sistema bancario e l'offerta di moneta?
          </p>
          <p>
            L'analisi di questo capitolo è propedeutica a comprendere la politica monetaria. Nel prossimo capitolo, seguendo l'approccio adottato in questa prima parte del libro, esamineremo gli effetti di lungo periodo della politica monetaria. Gli effetti di breve periodo sono più complessi e saranno analizzati invece a partire dal Capitolo 11. Saranno infatti necessari diversi capitoli per riuscire a spiegare in modo compiuto il ruolo della politica monetaria e soprattutto gli effetti che può avere nel breve periodo.
          </p>
        </div>
      </section>

      <section className="macro-section">
        <h2 className="section-title">4.1 Che cos'è la moneta?</h2>
        <div className="prose">
          <p>
            Quando diciamo che una persona possiede molto denaro, di solito intendiamo dire è ricca. Gli economisti attribuiscono non invece alla parola <em>moneta</em> un significato più specifico: la moneta è lo stock di attività che possono essere facilmente utilizzate per le transazioni. La moneta è lo stock di attività nel sistema economico che si utilizza di routine per l'acquisto di beni e servizi.
          </p>

          <h3>Le funzioni della moneta</h3>
          <p>
            La moneta ha tre funzioni essenziali in ciascun sistema economico: è una <strong>riserva di valore</strong>, una <strong>unità di conto</strong> e un <strong>mezzo di scambio</strong>.
          </p>
          <p>
            In quanto <strong>riserva di valore</strong>, la moneta rappresenta un mezzo per trasferire potere d'acquisto nel tempo. Se lavoro oggi e guadagno 100€, posso trattenere la moneta e spenderla domani, fra un mese o fra un anno. La moneta non è ovviamente una perfetta riserva di valore: se i prezzi salgono, il potere d'acquisto della moneta si riduce. Ciò nondimeno si trattiene moneta perché la si può scambiare con beni e servizi in qualche momento futuro.
          </p>
          <p>
            In quanto <strong>unità di conto</strong>, la moneta fornisce il termine con cui si misurano e si registrano le transazioni economiche. In altre parole, la moneta è la riga con cui si misurano i valori economici. Un negozio registra i prezzi dei suoi beni in euro, un libro indica il suo costo in euro, un contratto di lavoro fissa lo stipendio in euro. La moneta è il mezzo che ci consente di misurare il valore economico di grandezze diverse.
          </p>
          <p>
            In quanto <strong>mezzo di scambio</strong>, la moneta è ciò che usiamo per acquistare beni e servizi. "Questa banconota è legale per tutti i debiti, pubblici e privati", c'è scritto sul dollaro americano. Quando entriamo in un negozio, siamo fiduciosi nel fatto che il commerciante accetterà i nostri soldi in cambio di beni che ha in vendita. La facilità con cui un'attività può essere convertita in mezzo di scambio e usata per acquistare altri beni e servizi viene talora chiamata <em>liquidità</em> dell'attività. Poiché la moneta è il mezzo di scambio, è anche l'attività più liquida del sistema economico.
          </p>
          <p>
            Per comprendere meglio le funzioni della moneta, proviamo a immaginare un'economia in cui non esistesse. In un'economia di questo tipo, sarebbe difficile effettuare transazioni. La gente dovrebbe fare affidamento sul <em>baratto</em> — lo scambio diretto di beni e servizi con altri beni e servizi — per soddisfare le proprie necessità. Per realizzare uno scambio baratto, le due parti devono avere beni che l'altra desidera. Questa circostanza viene detta <em>doppia coincidenza dei bisogni</em>. L'esistenza della moneta permette invece lo scambio in modo più semplice.
          </p>

          <h3>I tipi di moneta</h3>
          <p>
            La moneta assume forme diverse. Nelle economie carcerarie delle sigarette hanno a volte svolto il ruolo di moneta: i prigionieri lo preferivano al baratto nelle loro forme di scambio. Nelle colonie britanniche del Nord America, prima della rivoluzione americana, la valuta ufficiale era la sterlina britannica, ma la valuta che la gente più spesso utilizzava nel pagamento era un particolare tipo di tabacco di cui era facile la reperibilità. Gli studenti americani nei college spesso fanno uso di speciali monete per fare le fotocopie o comprare il caffè dagli apparecchi self service.
          </p>
          <p>
            In tutti questi esempi, il mezzo di scambio ha un valore intrinseco. La moneta che ha un valore intrinseco è detta <strong>moneta merce</strong>. Esempi includono le sigarette nelle economie carcerarie e l'oro nelle economie durante il periodo del <em>gold standard</em>. Durante il periodo dell'estensione del gold standard, l'oro veniva utilizzato, infatti, come moneta perché è un metallo relativamente scarso, ma facile da coniare, che si riconosce facilmente. Quando il sistema economico utilizza l'oro come moneta (o utilizza carta moneta convertibile in oro su richiesta), si dice che funziona secondo il <em>gold standard</em>.
          </p>
          <p>
            Tuttavia, un'economia non ha necessità di organizzarsi intorno alla moneta merce. Un'economia può operare con una valuta che non ha valore intrinseco. La moneta che non ha valore intrinseco è detta <strong>moneta fiduciaria</strong> perché il suo valore è stabilito per decreto. Per esempio, in un'economia che utilizza il biglietto da 10 euro per le transazioni, la carta stessa ha poco valore: l'unica cosa che lo rende moneta è un atto legislativo che obbliga l'accettarlo come mezzo di pagamento.
          </p>
          <p>
            Tutte le economie avanzate attuali utilizzano moneta fiduciaria. Eppure la moneta fiduciaria non è universale. Le economie utilizzano principalmente la moneta merce, e non c'è un chiaro "momento storico" di passaggio dalla moneta merce alla moneta fiduciaria, ma piuttosto si tratta di un processo evolutivo graduale. Storicamente la moneta fiduciaria è emersa in genere durante situazioni di emergenza: per esempio, quando il governo deve finanziare una guerra.
          </p>
        </div>

        <div className="callout callout-case">
          <h4>ANALISI DI UN CASO — Le sigarette come moneta</h4>
          <p>
            Durante la Seconda guerra mondiale, nei campi di prigionia tedeschi, erano presenti molti militari della Croce Rossa. Ciascun prigioniero riceveva periodicamente pacchi di cura contenenti cibo, abiti, sigarette e altri beni. Nonostante ciò, fra i prigionieri esistevano sempre differenze individuali per quel che riguardava il desiderio o la necessità di consumare certi beni, così che i prigionieri si scambiavano quanto ricevuto nei pacchi.
          </p>
          <p>
            In un primo momento il baratto era molto praticato per effettuare gli scambi fra i detenuti. Ben presto però le sigarette emersero come moneta — indipendentemente dal fatto che un detenuto fumasse o no — per i beni più vari. Il prezzo di un piatto di minestra cotto, per esempio, era pari a due sigarette; una camicia costava 80 sigarette; i servizi di lavanderia erano valutati in due sigarette per camicia. Anche se molti dei prigionieri non fumavano, erano disponibili ad accettare le sigarette in cambio dei beni perché sapevano che avrebbero potuto utilizzare le sigarette per comprare altri beni a loro volta.
          </p>
          <p>
            Dentro il campo le sigarette diventarono anche un'unità di conto, in cui venivano espressi i prezzi degli altri beni, e una riserva di valore. Le sigarette dunque si erano trasformate in una forma di moneta merce: il valore della moneta derivava da ciò che i prigionieri ottenevano scambiando le sigarette.
          </p>
        </div>

        <div className="prose">
          <h3>La transizione dalla moneta merce alla moneta a corso legale</h3>
          <p>
            Non trasportare oro, in qualsiasi forma, porta con sé pratiche scomode: un mezzo di pagamento così disponibile e così scarso come le banconote della Fed. Si mette all'opera la Zecca del Tesoro degli Stati Uniti e si occupa di stampare le banconote in carta con incise le scritte che sappiamo. Se il governo si impegna a scambiare ciascuna banconota con oro a un tasso di cambio fisso, essa è una promessa di pagamento che pari valga in oro. Se, invece, il governo rompe il legame fra oro e banconote, le banconote non hanno più un valore in oro: allora diventano moneta fiduciaria a tutti gli effetti.
          </p>
          <p>
            Si è passati spesso da un gold standard a uno standard fiduciario. Siccome le principali banche centrali — Stati Uniti, Regno Unito, ... — si sono in ultima analisi impegnate nella gestione di un sistema di moneta fiduciaria basato sulla convertibilità reciproca delle valute nazionali, i moderni sistemi monetari internazionali sono standard monetari nei quali gli scambi valutari avvengono fra monete fiduciarie.
          </p>
        </div>

        <div className="callout callout-case">
          <h4>ANALISI DI UN CASO — Moneta e convenzioni sociali nelle isole Yap</h4>
          <p>
            L'economia di Yap, un piccolo gruppo di isole nell'Oceano Pacifico, ci fornisce un curioso esempio di come le convenzioni sociali possano aiutare a determinare ciò che viene considerato moneta in una società. La vita economica di Yap è relativamente primitiva: non vi è attività di fabbricazione, ma solo pesca, la raccolta di cocchi e l'allevamento di maiali. Per molti secoli, il commercio operò sulla base del baratto, senza l'utilizzo di alcuna forma di moneta. Più tardi divenne tradizione l'utilizzo come moneta di larghe pietre rotonde con un buco nel centro chiamate <em>fei</em>.
          </p>
          <p>
            Queste pietre venivano utilizzate per gli scambi di grandi entità come depositi di nuove abitazioni. Dal valore della pietra dipendeva il tipo di transazioni per il quale essa veniva utilizzata, e le pietre più grandi erano utilizzate come rappresentazione di valore — mentre un uso più quotidiano veniva, invece, portato avanti tramite baratto. Inoltre le pietre spesso non erano utilizzate perché grandi e difficili da portare con sé, ma piuttosto se si pensava di possederle. Gli isolani utilizzavano come moneta un bene dal valore intrinseco relativo, pur non operando alcun trasferimento di questo bene.
          </p>
          <p>
            L'introduzione delle pietre <em>fei</em> come moneta evitò la necessità di portare avanti tutti gli scambi mediante il baratto, un sistema intricato che rende difficile coordinare beni e servizi. Anche se questa non è moneta fiduciaria, neppure si tratta di moneta merce in senso stretto: è piuttosto un accordo sociale di dove e come gli abitanti di Yap registrassero le transazioni commerciali. Se la società decide che un oggetto non è più moneta — come accadde quando i governatori degli Stati Uniti arrivarono al potere a Yap — quell'oggetto cessa di essere moneta, anche se possiede valore intrinseco.
          </p>
        </div>

        <div className="prose">
          <h3>Come si misura la quantità di moneta</h3>
          <p>
            Una delle nostre mete è tenere conto della quantità di moneta presente nel sistema economico. Innanzitutto, abbiamo bisogno di definire ciò che si intende per quantità di moneta. Dato che la moneta è lo stock di attività utilizzate per le transazioni, la quantità di moneta è la quantità di tali attività. Nelle economie semplici questo calcolo è semplice: in un campo di prigionieri che utilizza le sigarette come moneta, la quantità di moneta è il numero di sigarette presenti nel campo. Però in un'economia come la nostra, attività con caratteristiche diverse per cui è meno facile definire la quantità di moneta.
          </p>
          <p>
            L'attività più ovvia da includere nella quantità di moneta è il <strong>circolante</strong> (o contante), cioè la moneta cartacea e le monete divisionali. Ciascuno che abbia la massa di moneta, il circolante fa parte dello stock di moneta. In più vanno aggiunti i depositi in conto corrente (<strong>depositi a vista</strong>) che si trovano nelle banche e sui quali le famiglie e le imprese possono emettere assegni o pagare con le carte di debito. Se si ha un accordo con la banca per addebitare spese direttamente dal conto corrente per saldare fatture e altri pagamenti, allora i conti sui depositi sono, da tutti i punti di vista, equivalenti al circolante, almeno dal punto di vista delle transazioni.
          </p>
          <p>
            Quando si vanno a considerare gli strumenti finanziari che vengono detenuti, la linea di demarcazione fra quanto è moneta e quanto non lo è diventa meno precisa. Per esempio, i depositi in conto corrente sono facilmente convertibili in contante e anche strumenti più complicati come i <em>fondi comuni monetari</em> si possono considerare moneta. La tabella riassume le principali misure dell'offerta di moneta per l'economia statunitense. Partendo dal più al meno liquido, questi aggregati sono chiamati M1 e M2. L'aggregato più ampio è M2, l'aggregato più stretto è M1.
          </p>
        </div>

        <div className="formula-box">
          <div>M1 = Circolante + Depositi a vista + Assegni viaggio + Altri depositi trasferibili</div>
          <div>M2 = M1 + Depositi di risparmio + Depositi a piccola scadenza + Fondi comuni monetari</div>
        </div>

        <div className="callout callout-case">
          <h4>PER SAPERNE DI PIÙ — Criptovalute: lo strano caso del Bitcoin</h4>
          <p>
            Nel 2009, un misterioso informatico con lo pseudonimo Satoshi Nakamoto ha creato il Bitcoin, la prima criptovaluta. A differenza delle monete tradizionali, il Bitcoin non è emesso da una banca centrale: è invece gestito da una rete di computer distribuita che verifica le transazioni attraverso un registro digitale pubblico chiamato <em>blockchain</em>.
          </p>
          <p>
            Molti sostenitori del Bitcoin credono che costituirà il futuro della moneta: una valuta libera dal controllo governativo, utilizzabile a livello globale con basse commissioni, basata su solide garanzie crittografiche. Altri, invece, ritengono che si tratti di una bolla speculativa: il prezzo del Bitcoin è estremamente volatile e la sua accettazione come mezzo di pagamento è tuttora limitata. In più, il Bitcoin ha attirato l'attenzione anche per usi illeciti, per via dell'anonimato delle transazioni.
          </p>
          <p>
            Le funzioni della moneta servono a distinguere se il Bitcoin sia davvero una moneta. Ha le tre caratteristiche? È mezzo di scambio in modo limitato — molti venditori lo accettano, ma non è uso quotidiano. È unità di conto in modo assai imperfetto — i prezzi in Bitcoin cambiano di ora in ora a seguito della volatilità. È riserva di valore in modo problematico — la sua quotazione ha avuto oscillazioni tanto ampie che tenere Bitcoin comporta rischi enormi. Attualmente il Bitcoin svolge il ruolo di attività speculativa e di strumento di trasferimento di valore più che di moneta in senso pieno.
          </p>
        </div>
      </section>

      <section className="macro-section">
        <h2 className="section-title">4.2 Il ruolo delle banche nel sistema monetario</h2>
        <div className="prose">
          <p>
            Nei paragrafi precedenti abbiamo introdotto il concetto di "offerta di moneta" in maniera semplicistica, definendola come il circolante in mano al pubblico più i depositi a vista nelle banche. Ma in questo modo si è forse passata sotto silenzio l'importanza delle banche nel sistema. La quantità di moneta nel sistema economico dipende non solo da quanto circolante è in mano al pubblico e quanti depositi ci sono nelle banche, ma anche dal comportamento delle banche, in quanto sono le banche che creano e distruggono i depositi bancari. In questo paragrafo vedremo come le banche influenzino la quantità di moneta in un'economia, come le banche creano e distruggono depositi, e come la politica della banca centrale influenzi il sistema attraverso diversi strumenti.
          </p>

          <h3>Un sistema bancario a riserva totale</h3>
          <p>
            Cominciamo con il considerare un sistema economico senza banche. In un mondo di questo tipo, il circolante sarebbe l'unica forma di moneta, e la quantità di moneta sarebbe uguale alla quantità di circolante. Per concretezza, supponiamo che ci siano 1000 euro di circolante.
          </p>
          <p>
            Adesso introduciamo le banche. Inizialmente, supponiamo che le banche accettino depositi ma non concedono prestiti: il solo scopo delle banche sarebbe quindi quello di fornire depositi sicuri. Si può immaginare una banca come il Primobanca: un'istituzione che riceve il denaro dei risparmiatori e lo mantiene in cassaforte. Ogni deposito da parte di un risparmiatore si accompagna a un identico deposito nelle riserve del Primobanca. Dato che quando un risparmiatore deposita denaro del contante il Primobanca mantiene interamente a riserva il denaro ricevuto, tale sistema viene detto <strong>sistema bancario a riserva totale</strong>.
          </p>
          <p>
            Supponiamo che le famiglie depositino i 1000 euro per intero: il Primobanca avrebbe allora riserve pari a 1000 euro. Lo stato patrimoniale della banca apparirebbe come segue:
          </p>
        </div>

        <div className="formula-box secondary">
          <div><strong>Stato patrimoniale del Primobanca (riserva totale)</strong></div>
          <div>Attività — Riserve: 1000 €</div>
          <div>Passività — Depositi: 1000 €</div>
        </div>

        <div className="prose">
          <p>
            Al lato sinistro del conto ci sono le attività della banca (le 1000 euro di riserve); al lato destro ci sono le passività (le 1000 euro dovute ai depositanti). Non esistono (ancora) prestiti né altri elementi, e i due lati del conto si bilanciano tra loro.
          </p>
          <p>
            Si consideri ora l'offerta di moneta di questa economia. Prima dell'istituzione della banca, l'offerta di moneta era pari a 1000 euro di circolante. Dopo l'istituzione della banca, l'offerta di moneta è pari a 1000 euro, ma non ve ne sono più in circolante: sono tutti depositi presso la banca. Ogni deposito ha ridotto il circolante di un pari ammontare e ha fatto aumentare i depositi della stessa somma. Così, se le banche detengono tutti i depositi a riserva, non influiscono sull'offerta di moneta: una banca a riserva totale è un deposito di denaro, e non più di questo.
          </p>

          <h3>Un sistema bancario a riserva frazionaria</h3>
          <p>
            Immaginiamo ora che le banche comincino a utilizzare alcuni dei loro depositi per prestare a famiglie e imprese con necessità temporanea di fondi. Naturalmente le banche devono però mantenere ancora qualche riserva in modo da poter onorare le richieste di prelievo dei depositanti. Supponiamo che una banca mantenga una frazione dei depositi come riserva e presti il resto. La frazione di depositi che la banca mantiene come riserva viene chiamata <strong>rapporto riserve/depositi</strong> (rr). L'altra frazione, (1 − rr), viene concessa in prestiti. Tale sistema è detto <strong>sistema bancario a riserva frazionaria</strong>.
          </p>
          <p>
            Consideriamo ora come le banche a riserva frazionaria influiscono sull'offerta di moneta. Supponiamo che il rapporto riserve/depositi sia del 10% e che il Primobanca abbia depositi pari a 1000 euro. Allora il Primobanca mantiene 100 euro di riserve e presta gli altri 900 euro. Lo stato patrimoniale del Primobanca sarebbe:
          </p>
        </div>

        <div className="formula-box secondary">
          <div><strong>Stato patrimoniale del Primobanca (rr = 10%)</strong></div>
          <div>Attività — Riserve: 100 € · Prestiti: 900 €</div>
          <div>Passività — Depositi: 1000 €</div>
        </div>

        <div className="prose">
          <p>
            La banca ottiene un passivo ancora pari a 1000 euro (depositi del pubblico) e attività pari a 1000 euro (sommando riserve e prestiti). Quando il Primobanca crea un prestito di 900 euro, accresce anche l'offerta di moneta di 900 euro. Prima del prestito, l'offerta di moneta era pari a 1000 euro (i depositi del Primobanca). Dopo il prestito, l'offerta di moneta è pari a 1900 euro (i 1000 euro di depositi più 900 euro di circolante in mano a chi ha ricevuto il prestito). Pertanto, quando le banche detengono solo una frazione dei depositi in riserva, esse creano moneta.
          </p>
          <p>
            La creazione di moneta non si ferma con il Primobanca. Chi riceve un prestito di 900 euro lo utilizzerà poi per comprare qualcosa, e chi riceve i 900 euro li depositerà presso un'altra banca, chiamiamola Secondobanca. Se il Secondobanca ha anch'esso un rapporto riserve/depositi del 10%, manterrà 90 euro come riserva e presterà 810 euro. Il bilancio di Secondobanca sarà allora:
          </p>
        </div>

        <div className="formula-box secondary">
          <div><strong>Stato patrimoniale del Secondobanca</strong></div>
          <div>Attività — Riserve: 90 € · Prestiti: 810 €</div>
          <div>Passività — Depositi: 900 €</div>
        </div>

        <div className="prose">
          <p>
            Quando presta i 810 euro, il Secondobanca crea a sua volta 810 euro di moneta. Se alla fine i 810 euro vengono depositati in una terza banca, il Terzobanca, e questo pure ha un rapporto riserve/depositi del 10%, manterrà 81 euro come riserve e presterà 729 euro, e così via. Ogni deposito e prestito successivo genera altra moneta.
          </p>
          <p>
            Sebbene questo processo di creazione di moneta possa procedere all'infinito, la moneta creata alla fine non è infinita. Sommando i depositi successivi del Primobanca, Secondobanca, Terzobanca e così via, si trova che l'offerta di moneta originaria si è moltiplicata. La somma della serie geometrica converge al valore D / rr. In questo caso D = 1000 euro e rr = 0,10, quindi la quantità di moneta creata totale dal deposito iniziale è pari a 10 000 euro.
          </p>
          <p>
            Ovviamente il sistema bancario a riserva frazionaria crea moneta, ma non genera ricchezza. Quando una banca concede un prestito con i depositi, dà alla persona che riceve il prestito la possibilità di effettuare transazioni, aumentando così l'offerta di moneta. Chi riceve il prestito, però, assume anche un debito verso la banca, per cui il prestito non gli dà ricchezza. In altre parole, la creazione di moneta da parte del sistema bancario accresce la liquidità dell'economia ma non le sue risorse.
          </p>
        </div>

        <MoneyMultiplierGraph />
        <FractionalReserveGraph />

        <div className="callout callout-case">
          <h4>PER SAPERNE DI PIÙ — Il ruolo delle carte di credito e di debito nel sistema monetario</h4>
          <p>
            Molto spesso le persone si confondono quando considerano le differenze tra le carte di credito e le carte di debito. Le carte di credito e le carte di debito svolgono funzioni simili, ma con differenze rilevanti in merito al significato economico. Una carta di debito trae denaro direttamente dal conto corrente del proprietario ogni volta che viene utilizzata per un pagamento: si tratta quindi di un mezzo di pagamento. Una carta di credito, invece, permette al proprietario di acquistare beni e servizi in un determinato momento, pagando in un momento successivo. Quando si utilizza una carta di credito, non si sta utilizzando moneta: si sta contraendo un debito con l'emittente della carta.
          </p>
          <p>
            Anche se le carte di credito non sono moneta, possono influenzare l'uso e la quantità di moneta che le persone desiderano detenere. Chi utilizza frequentemente la carta di credito può mantenere saldo più basso nel conto corrente, perché le spese vengono accorpate su base mensile invece che giornaliera.
          </p>
        </div>

        <div className="prose">
          <h3>Capitale bancario, leva finanziaria e requisiti patrimoniali</h3>
          <p>
            Il modello dei sistemi bancari appena descritto è semplificato. Un'importante caratteristica delle banche che non abbiamo considerato è l'esistenza di capitale bancario, detto anche <em>mezzi propri della banca</em> o <em>patrimonio netto</em>. Il capitale bancario è il patrimonio che i soci della banca stessa hanno messo a disposizione per iniziare l'attività. Le banche ottengono fondi da più fonti — dai soci (azionisti) in forma di capitale proprio, dai correntisti in forma di depositi, dai creditori in forma di prestiti (<em>obbligazioni</em>). Utilizzano poi questi fondi per attività diverse — principalmente concedere prestiti, ma anche tenere riserve e acquistare titoli.
          </p>
          <p>
            Per illustrare questo aspetto, consideriamo un esempio realistico. Supponiamo che una banca inizi con un capitale proprio di 50 euro. I soci della banca utilizzano questi 50 euro per comprare infrastrutture bancarie. La banca accetta poi 750 euro di depositi e prende anche a prestito 200 euro (per esempio emettendo obbligazioni). Ora la banca ha 1000 euro disponibili. Tiene il 10% in riserva (100 euro) e presta il resto (900 euro). Il bilancio è:
          </p>
        </div>

        <div className="formula-box secondary">
          <div><strong>Stato patrimoniale con capitale bancario</strong></div>
          <div>Attività — Riserve: 100 € · Prestiti: 900 €</div>
          <div>Passività — Depositi: 750 € · Debito: 200 € · Capitale: 50 €</div>
        </div>

        <div className="prose">
          <p>
            Notare che il capitale bancario è una passività — nel senso che rappresenta un vincolo verso gli azionisti. Le attività ammontano a 1000 euro. Le passività totali (inclusivo del capitale) sono anch'esse pari a 1000 euro. Il patrimonio netto è così uguale alla differenza tra attività e passività detenute dalla banca verso terzi — 50 euro, cioè il capitale iniziale.
          </p>
          <p>
            Il rapporto tra le attività della banca e il capitale bancario è detto <strong>leva finanziaria</strong>. In questo esempio la leva è pari a 1000/50 = 20. Questo significa che per ogni euro di capitale, la banca detiene 20 euro di attività. Una leva elevata rende la banca redditizia nei periodi di espansione, ma rischia di renderla insolvente quando le attività si deprezzano. Infatti, se le attività della banca (i prestiti e i titoli) perdessero anche solo il 5% del loro valore, la banca perderebbe 50 euro di attività, cioè tutto il suo capitale. In questo caso avrebbe ancora passività totali di 950 euro ma solo 950 euro di attività: sarebbe insolvente.
          </p>
          <p>
            Per queste ragioni, le autorità di vigilanza bancaria stabiliscono <strong>requisiti patrimoniali</strong>, cioè richiedono che le banche detengano un ammontare minimo di capitale in rapporto alle loro attività. L'obiettivo è assicurarsi che le banche siano in grado di onorare i propri obblighi nei confronti dei depositanti e di altri creditori anche quando subiscono perdite. L'ammontare di capitale richiesto può dipendere dal tipo di attività: i prestiti più rischiosi richiedono maggiore capitale rispetto a quelli più sicuri come i titoli di Stato.
          </p>
        </div>
      </section>

      <section className="macro-section">
        <h2 className="section-title">4.3 L'influenza della banca centrale sull'offerta di moneta</h2>
        <div className="prose">
          <p>
            Dopo aver definito la moneta ed esaminato il ruolo delle banche nel processo di creazione della moneta, siamo in grado di analizzare come la banca centrale controlla l'offerta di moneta. La banca centrale è l'istituzione responsabile della vigilanza sul sistema bancario e della regolamentazione della quantità di moneta nel sistema economico; essa, in altre parole, esercita la politica monetaria. Le banche centrali nel mondo assumono nomi diversi: nel Regno Unito è la Bank of England, in Giappone è la Banca del Giappone, negli Stati Uniti è la Federal Reserve. Le due principali banche centrali nel mondo sono la Federal Reserve degli Stati Uniti e la Banca Centrale Europea.
          </p>

          <h3>Un modello dell'offerta di moneta</h3>
          <p>
            Per sviluppare un modello dell'offerta di moneta, occorre distinguere tra le due forme di moneta che abbiamo già incontrato: il circolante (detenuto dal pubblico) e i depositi (detenuti presso le banche). Indichiamo con M la quantità di moneta nel sistema economico, C il circolante e D i depositi. La quantità di moneta è:
          </p>
        </div>

        <div className="formula-box">
          <div>M = C + D</div>
        </div>

        <div className="prose">
          <p>
            Per comprendere la quantità di moneta, occorre comprendere i comportamenti sia della banca centrale sia del sistema bancario nel suo insieme e delle famiglie. Introduciamo tre variabili esogene:
          </p>
          <ul>
            <li>La <strong>base monetaria (B)</strong> è la quantità totale di euro detenuta dal pubblico come circolante <em>C</em> e dalle banche come riserve <em>R</em>. È controllata direttamente dalla banca centrale. B = C + R.</li>
            <li>Il <strong>rapporto riserve/depositi (rr)</strong> è la frazione dei depositi che le banche detengono come riserva. È determinato sia dalle politiche della banca centrale (che impone una riserva minima), sia dalle scelte delle banche. rr = R/D.</li>
            <li>Il <strong>rapporto circolante/depositi (cr)</strong> è l'ammontare di circolante C che la gente detiene come frazione dei depositi a vista D. Riflette le preferenze delle famiglie sulla forma di moneta che preferiscono tenere. cr = C/D.</li>
          </ul>
          <p>
            Il modello dell'offerta di moneta mostra come l'offerta di moneta dipenda da queste tre variabili. Con un po' di algebra si ottiene:
          </p>
        </div>

        <div className="formula-box">
          <div>M = [(cr + 1) / (cr + rr)] · B</div>
          <div>M = m · B</div>
        </div>

        <div className="prose">
          <p>
            L'equazione mostra che l'offerta di moneta dipende dalle tre variabili esogene: B, rr, cr. Possiamo allora vedere come l'offerta di moneta dipende da ciascuna di queste:
          </p>
          <ol>
            <li>L'offerta di moneta è proporzionale alla base monetaria. Un aumento della base monetaria di un certo ammontare genera un aumento dell'offerta di moneta di un ammontare proporzionalmente maggiore.</li>
            <li>Più basso è il rapporto riserve/depositi, più prestiti concedono le banche e più moneta viene creata a partire da ciascun euro di base monetaria. Pertanto una riduzione di rr fa aumentare l'offerta di moneta.</li>
            <li>Più basso è il rapporto circolante/depositi, più euro sono trattenuti dalle banche come depositi e maggiore è l'ammontare di moneta creata attraverso il moltiplicatore. Pertanto una riduzione di cr fa aumentare l'offerta di moneta.</li>
          </ol>
          <p>
            La quantità (cr + 1)/(cr + rr) è detta <strong>moltiplicatore monetario</strong>, e indica la quantità di moneta generata da ogni euro di base monetaria. La base monetaria è talvolta chiamata anche <em>moneta ad alta potenza</em>: ogni euro di base monetaria genera più di un euro di offerta di moneta.
          </p>

          <MoneySupplyGraph />

          <h3>Gli strumenti della politica monetaria</h3>
          <p>
            Sebbene dichiarando che l'offerta di moneta sia sotto il controllo della banca centrale abbiamo semplificato (di fatto, come abbiamo visto, essa dipende anche dal comportamento delle banche e delle famiglie), la banca centrale può esercitare un controllo non solo attraverso il controllo diretto di B, ma anche attraverso un'influenza sui rapporti rr e cr. Le principali istituzioni di politica monetaria attraverso cui la banca centrale manipola la quantità di moneta sono:
          </p>
          <ul>
            <li>Le <strong>operazioni di mercato aperto</strong>, cioè l'acquisto e la vendita di titoli di Stato da parte della banca centrale sul mercato.</li>
            <li>Gli <strong>obblighi di riserva</strong>, le regole che stabiliscono quale sia il rapporto minimo riserve/depositi che le banche commerciali devono rispettare.</li>
            <li>Il <strong>tasso di sconto</strong>, il tasso d'interesse che la banca centrale applica quando presta denaro alle banche commerciali.</li>
            <li>Il <strong>tasso di remunerazione delle riserve</strong>, il tasso che la banca centrale paga sulle riserve detenute dalle banche.</li>
          </ul>

          <h3>Come la banca centrale fa a cambiare la base monetaria</h3>
          <p>
            Il principale strumento attraverso cui la banca centrale controlla l'offerta di moneta è dato dalle <strong>operazioni di mercato aperto</strong> — cioè la vendita e l'acquisto di titoli di Stato. Per aumentare la base monetaria, la banca centrale utilizza dollari (oppure euro, in Europa) per comprare titoli di Stato dal pubblico. L'acquisto aumenta la quantità di moneta in circolazione perché la banca centrale paga i titoli emettendo nuovo circolante. Viceversa, per diminuire la base monetaria, la banca centrale vende alcuni dei titoli di Stato che ha nel proprio portafoglio, prendendo il ricavato (moneta) e sottraendolo alla circolazione.
          </p>
          <p>
            Le operazioni di mercato aperto sono facili da eseguire: la banca centrale può aumentare o ridurre la base monetaria in qualsiasi momento, in qualsiasi quantità. Per queste ragioni le operazioni di mercato aperto sono lo strumento di politica monetaria più frequentemente utilizzato. La banca centrale può anche influenzare la base monetaria concedendo prestiti alle banche commerciali. Più alto è il tasso di sconto, meno le banche sono interessate a prendere a prestito dalla banca centrale, e minore è la base monetaria.
          </p>

          <h3>Come la banca centrale influisce sul rapporto riserve/depositi</h3>
          <p>
            Come si è detto nel paragrafo 4.2, un rapporto riserve/depositi più basso equivale a un moltiplicatore monetario più elevato e quindi a un'offerta di moneta più ampia. La banca centrale può obbligare le banche a detenere un ammontare minimo di riserve in rapporto ai loro depositi, mediante la fissazione degli <strong>obblighi di riserva</strong>. Di fatto le banche centrali obbligano le banche a detenere una riserva minima, denominata anche riserva obbligatoria; in Europa, gli obblighi di riserva sono fissati al 1% dei depositi.
          </p>
          <p>
            La banca centrale influisce sul rapporto riserve/depositi anche attraverso il <strong>tasso di remunerazione delle riserve</strong>. Di solito, il tasso di remunerazione pagato sulle riserve è più basso del tasso che le banche potrebbero ottenere prestando denaro a famiglie e imprese: perciò le banche hanno un incentivo a tenere solo le riserve minime obbligatorie. Aumentando il tasso di remunerazione delle riserve, la banca centrale spinge le banche a detenere più riserve, e quindi a contrarre il credito concesso all'economia reale.
          </p>

          <h3>Come la banca centrale influisce sul rapporto circolante/depositi</h3>
          <p>
            Il rapporto circolante/depositi riflette le preferenze delle famiglie e delle imprese circa la forma di moneta preferita. A parità di condizioni, maggiore è la fiducia che il pubblico ripone nel sistema bancario e minore è il cr. Le famiglie che hanno paura che la loro banca fallisca preferiscono detenere più circolante, per cui cr aumenta. L'intervento della banca centrale come <em>prestatore di ultima istanza</em> (ossia, la sua capacità di fornire liquidità alle banche commerciali in difficoltà) contribuisce a mantenere alta la fiducia nel sistema bancario, riducendo cr e aumentando il moltiplicatore monetario.
          </p>

          <h3>I problemi nel controllo dell'offerta di moneta</h3>
          <p>
            Attraverso gli strumenti di politica monetaria, la banca centrale possiede infiltrazioni l'offerta di moneta. Purtroppo tale controllo non è mai completo o perfetto: vi sono continue variazioni nei rapporti rr e cr che dipendono dai comportamenti delle banche e delle famiglie. In più, il meccanismo di trasmissione della politica monetaria verso l'economia reale passa attraverso canali complessi che la banca centrale non controlla pienamente.
          </p>
        </div>
      </section>

      <section className="macro-section">
        <h2 className="section-title">4.4 Conclusioni</h2>
        <div className="prose">
          <p>
            A questo punto del nostro viaggio, abbiamo capito cosa è la moneta e cosa fa la moneta. Abbiamo anche capito come il sistema bancario, attraverso le sue operazioni, crei parte della moneta. Abbiamo infine visto come la banca centrale dispone di molti strumenti per controllare, anche se in modo imperfetto, l'offerta di moneta. Nei prossimi capitoli vedremo come la politica monetaria — e quindi l'offerta di moneta — esercita influenza su altre variabili macroeconomiche come la produzione, l'occupazione e l'inflazione. Questi effetti dipendono sia dalla velocità con cui i prezzi si aggiustano, sia dalle aspettative degli individui: tre fattori di cui si tratta nei prossimi capitoli.
          </p>
        </div>
      </section>

      <section className="macro-section">
        <div className="callout callout-case">
          <h4>ANALISI DI UN CASO — Il quantitative easing e l'esplosione della base monetaria negli Stati Uniti</h4>
          <p>
            La Figura 4.1 mostra l'andamento della base monetaria negli Stati Uniti dal 1960 al 2020. Si può immediatamente osservare che dopo il 2007 c'è stata una crescita fortissima. Al principio del 2007, la base monetaria era pari a 850 miliardi di dollari. Era poi arrivata a 1700 miliardi di dollari alla fine del 2008, e 4000 miliardi a quattro anni dopo, per aumentare ancora negli anni successivi. In altre parole, in sei anni circa la base monetaria è quintuplicata.
          </p>
          <p>
            Questo aumento spettacolare della base monetaria è stato determinato dalla politica della banca centrale americana, la Federal Reserve. Il 2008 e 2009 sono stati caratterizzati da una crisi economica ed è stata accompagnata da un crollo dei mercati finanziari. In breve: erano partite con le insolvenze delle persone che avevano acquistato case con prestiti nei mutui che non potevano permettersi di restituire; poi si era innescato un panico in borsa e il fallimento di alcune importanti banche d'investimento, come Lehman Brothers; quindi l'economia reale era stata travolta con un crollo della domanda di beni e servizi e una ricaduta recessiva che somiglia a quella della Grande Depressione degli anni Trenta.
          </p>
          <p>
            La Fed ha reagito con misure straordinarie, di cui la più spettacolare è stata un gigantesco programma di acquisti di titoli pubblici e di altre obbligazioni sul mercato. Tra la fine del 2008 e il 2014 la Fed ha acquistato migliaia di miliardi di dollari di titoli, espandendo la sua base monetaria in modo corrispondente. Questo programma è passato sotto il nome di <strong>quantitative easing</strong> (alleggerimento quantitativo), o QE in breve. La Fed ha messo in atto tre ondate di QE (QE1, QE2, QE3), ciascuna consistente in acquisti di centinaia di miliardi di dollari.
          </p>
          <p>
            La ragione principale di questo enorme intervento era di stimolare l'economia aumentando la liquidità del sistema bancario. Nonostante la base monetaria sia cresciuta di cinque volte circa, l'offerta di moneta M2 è cresciuta molto meno, approssimativamente solo del 50%. Per quale ragione? Perché le banche non hanno usato le riserve create per concedere nuovi prestiti, ma le hanno invece tenute come riserve in eccesso presso la Fed, traendo il tasso di remunerazione pagato dalla Fed. Siccome molte banche, in quegli anni, avevano poca voglia o poca capacità di espandere il credito, il moltiplicatore monetario m è diminuito, e la maggior parte della base monetaria creata non si è tradotta in offerta di moneta supplementare.
          </p>
          <p>
            Ciò è stato uno dei motivi principali per cui l'inflazione è rimasta bassa (intorno al 1,5% all'anno) nei tempi del QE, contrariamente alle preoccupazioni di alcuni economisti che temevano un'esplosione inflazionistica. L'esperienza degli anni del QE e della Grande Recessione ha mostrato la complessità della trasmissione della politica monetaria all'economia reale e ha costretto le banche centrali a ripensare alcuni degli strumenti tradizionali della politica monetaria.
          </p>
        </div>

        <QEGraph />

        <div className="conclusion-grid">
          <div className="conclusion-item">
            <h4>La moneta</h4>
            <p>È lo stock di attività usate per transazioni: svolge le funzioni di riserva di valore, unità di conto e mezzo di scambio.</p>
          </div>
          <div className="conclusion-item">
            <h4>Il ruolo delle banche</h4>
            <p>Le banche a riserva frazionaria creano moneta attraverso il processo di deposito e prestito, moltiplicando la base monetaria.</p>
          </div>
          <div className="conclusion-item">
            <h4>La banca centrale</h4>
            <p>Controlla l'offerta di moneta attraverso operazioni di mercato aperto, obblighi di riserva e tasso di sconto.</p>
          </div>
          <div className="conclusion-item">
            <h4>Limiti del controllo</h4>
            <p>Il moltiplicatore monetario dipende dai comportamenti di banche e famiglie, per cui il controllo non è mai perfetto (come insegna il QE).</p>
          </div>
        </div>
      </section>
    </div>
  );
}
