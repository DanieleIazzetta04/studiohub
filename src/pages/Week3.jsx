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
//  GRAPH 1 — ISOMORFISMO: 3 forze e convergenza al campo
// ══════════════════════════════════════════════════════════════
function IsomorphismGraph() {
  const [coercitivo, setCoercitivo] = useState(5);
  const [normativo, setNormativo] = useState(5);
  const [mimetico, setMimetico] = useState(5);

  // Pesi delle 3 forze (somma = 1) per il calcolo della convergenza
  const wC = 0.4, wN = 0.3, wM = 0.3;
  const convergenza = wC * coercitivo + wN * normativo + wM * mimetico;
  const convergenzaPct = (convergenza / 10) * 100;

  const xMin = 0, xMax = 10;
  const barH = 38;
  const barGap = 18;
  const barStartY = PT + 14;

  const forze = [
    { label: 'Coercitivo', val: coercitivo, color: '#dc2626', y: barStartY },
    { label: 'Normativo', val: normativo, color: '#0ea5e9', y: barStartY + (barH + barGap) },
    { label: 'Mimetico', val: mimetico, color: '#a855f7', y: barStartY + 2 * (barH + barGap) }
  ];

  return (
    <div className="graph-block">
      <h4 className="graph-title">Le 3 forze dell'isomorfismo (DiMaggio &amp; Powell, 1983) e la convergenza al campo organizzativo</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          {/* griglia verticale */}
          {Array.from({ length: 11 }, (_, i) => (
            <line key={i} x1={toX(i, xMin, xMax)} y1={PT} x2={toX(i, xMin, xMax)} y2={PT + cH} stroke="#e2e8f0" strokeWidth={0.6} />
          ))}
          {/* etichette asse x */}
          {[0, 2, 4, 6, 8, 10].map(v => (
            <text key={v} x={toX(v, xMin, xMax)} y={PT + cH + 15} textAnchor="middle" fontSize={10} fill="#94a3b8">{v}</text>
          ))}
          <line x1={PL} y1={PT} x2={PL} y2={PT + cH} stroke="#475569" strokeWidth={1.5} />
          <line x1={PL} y1={PT + cH} x2={PL + cW} y2={PT + cH} stroke="#475569" strokeWidth={1.5} />
          <text x={PL + cW + 4} y={PT + cH + 3} fontSize={11} fill="#475569" fontStyle="italic">intensità</text>

          {/* barre orizzontali per ogni forza */}
          {forze.map((f, i) => (
            <g key={i}>
              <rect x={PL} y={f.y} width={cW} height={barH} fill="#f1f5f9" rx={3} />
              <rect x={PL} y={f.y} width={(f.val / xMax) * cW} height={barH} fill={f.color} rx={3} opacity={0.85} />
              <text x={PL + 8} y={f.y + barH / 2 + 4} fontSize={12} fill="#fff" fontWeight={600}>{f.label}</text>
              <text x={PL + (f.val / xMax) * cW + 6} y={f.y + barH / 2 + 4} fontSize={11} fill={f.color} fontWeight={700}>{f.val.toFixed(1)}</text>
            </g>
          ))}
        </svg>
        <div className="graph-controls">
          <SliderControl label="Pressione coercitiva (Stato, leggi)" symbol="C" value={coercitivo} min={0} max={10} step={0.5} onChange={setCoercitivo} color="#dc2626" fmt={v => v.toFixed(1)} />
          <SliderControl label="Pressione normativa (professioni, MBA)" symbol="N" value={normativo} min={0} max={10} step={0.5} onChange={setNormativo} color="#0ea5e9" fmt={v => v.toFixed(1)} />
          <SliderControl label="Pressione mimetica (incertezza)" symbol="M" value={mimetico} min={0} max={10} step={0.5} onChange={setMimetico} color="#a855f7" fmt={v => v.toFixed(1)} />
          <div className="result-box">
            <div className="result-row"><strong>Convergenza al campo</strong> <span style={{ color: convergenzaPct < 33 ? '#16a34a' : convergenzaPct < 66 ? '#f59e0b' : '#dc2626' }}>{convergenzaPct.toFixed(0)}%</span></div>
            <div className="result-row"><strong>Pesi: C=40%, N=30%, M=30%</strong> <span></span></div>
          </div>
          <div className="insight-mini">Più alte le tre pressioni, più l'organizzazione tende a somigliare alle altre del campo. Il coercitivo pesa di più perché ha forza di legge; normativo e mimetico operano per cultura e imitazione.</div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAPH 2 — LEGITTIMITÀ vs EFFICIENZA: i 4 quadranti
// ══════════════════════════════════════════════════════════════
function LegitimacyEfficiencyGraph() {
  const [efficienza, setEfficienza] = useState(60);
  const [legittimita, setLegittimita] = useState(70);

  const xMin = 0, xMax = 100;
  const yMin = 0, yMax = 100;

  // Determinazione del quadrante
  let quadrante = '';
  let qColor = '';
  let qDesc = '';
  if (efficienza >= 50 && legittimita >= 50) {
    quadrante = 'Ideale';
    qColor = '#16a34a';
    qDesc = 'Alta legittimità + alta efficienza: posizione strategicamente sostenibile.';
  } else if (efficienza < 50 && legittimita >= 50) {
    quadrante = 'Miti razionalizzati';
    qColor = '#0ea5e9';
    qDesc = 'Alta legittimità ma bassa efficienza: l\'impresa adotta pratiche cerimoniali per essere accettata.';
  } else if (efficienza >= 50 && legittimita < 50) {
    quadrante = 'Stigma';
    qColor = '#f59e0b';
    qDesc = 'Efficiente ma poco legittima: rischio reputazionale, attacchi sociali, perdita di accesso a risorse.';
  } else {
    quadrante = 'Uscita dal mercato';
    qColor = '#dc2626';
    qDesc = 'Bassa legittimità + bassa efficienza: nessuna ragione per esistere, espulsione dal campo.';
  }

  const xMid = toX(50, xMin, xMax);
  const yMid = toY(50, yMin, yMax);

  return (
    <div className="graph-block">
      <h4 className="graph-title">Legittimità sociale vs efficienza tecnica: i 4 quadranti dell'impresa nel campo organizzativo</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          <Axes xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax} xLabel="efficienza" yLabel="legittimità" nX={5} nY={5} xFmt={v => v.toFixed(0)} yFmt={v => v.toFixed(0)} />
          {/* sfondi quadranti */}
          <rect x={xMid} y={PT} width={PL + cW - xMid} height={yMid - PT} fill="#16a34a" opacity={0.08} />
          <rect x={PL} y={PT} width={xMid - PL} height={yMid - PT} fill="#0ea5e9" opacity={0.08} />
          <rect x={xMid} y={yMid} width={PL + cW - xMid} height={PT + cH - yMid} fill="#f59e0b" opacity={0.08} />
          <rect x={PL} y={yMid} width={xMid - PL} height={PT + cH - yMid} fill="#dc2626" opacity={0.08} />
          {/* linee mediane */}
          <line x1={xMid} y1={PT} x2={xMid} y2={PT + cH} stroke="#94a3b8" strokeWidth={1} strokeDasharray="3,3" />
          <line x1={PL} y1={yMid} x2={PL + cW} y2={yMid} stroke="#94a3b8" strokeWidth={1} strokeDasharray="3,3" />
          {/* etichette quadranti */}
          <text x={xMid + 8} y={PT + 14} fontSize={10} fill="#16a34a" fontWeight={700}>Ideale</text>
          <text x={PL + 6} y={PT + 14} fontSize={10} fill="#0ea5e9" fontWeight={700}>Miti razionalizzati</text>
          <text x={xMid + 8} y={PT + cH - 6} fontSize={10} fill="#f59e0b" fontWeight={700}>Stigma</text>
          <text x={PL + 6} y={PT + cH - 6} fontSize={10} fill="#dc2626" fontWeight={700}>Uscita dal mercato</text>
          {/* punto impresa */}
          <line x1={toX(efficienza, xMin, xMax)} y1={PT + cH} x2={toX(efficienza, xMin, xMax)} y2={toY(legittimita, yMin, yMax)} stroke={qColor} strokeDasharray="3,3" strokeWidth={1.2} />
          <line x1={PL} y1={toY(legittimita, yMin, yMax)} x2={toX(efficienza, xMin, xMax)} y2={toY(legittimita, yMin, yMax)} stroke={qColor} strokeDasharray="3,3" strokeWidth={1.2} />
          <circle cx={toX(efficienza, xMin, xMax)} cy={toY(legittimita, yMin, yMax)} r={7} fill={qColor} stroke="#fff" strokeWidth={2.5} />
        </svg>
        <div className="graph-controls">
          <SliderControl label="Efficienza tecnica" symbol="E" value={efficienza} min={0} max={100} step={1} onChange={setEfficienza} color="#0ea5e9" fmt={v => v.toFixed(0)} />
          <SliderControl label="Legittimità sociale" symbol="L" value={legittimita} min={0} max={100} step={1} onChange={setLegittimita} color="#a855f7" fmt={v => v.toFixed(0)} />
          <div className="result-box">
            <div className="result-row"><strong>Quadrante</strong> <span style={{ color: qColor }}>{quadrante}</span></div>
          </div>
          <div className="insight-mini">{qDesc}</div>
        </div>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
//  GRAPH 3 — STIGMA: caduta del valore di mercato nel tempo
// ══════════════════════════════════════════════════════════════
function StigmaImpactGraph() {
  const [intensita, setIntensita] = useState(6);
  const [tipo, setTipo] = useState('evento'); // 'evento' | 'core'

  const months = 36;
  const xMin = 0, xMax = months;
  const yMin = 0, yMax = 110;

  // Caduta iniziale proporzionale all'intensità
  const drop = intensita * 7; // 7..70 punti di caduta
  const initialValue = 100;
  const minValue = Math.max(initialValue - drop, 5);

  // Genera la traiettoria
  const pts = [];
  for (let t = 0; t <= months; t += 0.5) {
    let v;
    if (t < 1) {
      // caduta brusca al tempo 0-1
      v = initialValue - drop * t;
    } else {
      if (tipo === 'evento') {
        // recupero esponenziale: torna verso initialValue
        const tau = 8; // costante di tempo
        v = initialValue - drop * Math.exp(-(t - 1) / tau);
      } else {
        // stigma al core: recupero lineare lentissimo (o nessun recupero)
        const recovery = (t - 1) * 0.3; // 0.3 punti al mese
        v = minValue + recovery;
        if (v > initialValue * 0.6) v = initialValue * 0.6; // soffitto basso
      }
    }
    pts.push([toX(t, xMin, xMax), toY(v, yMin, yMax)]);
  }
  const path = 'M ' + pts.map(p => p.join(',')).join(' L ');

  // Valore finale
  const finalT = months;
  let finalV;
  if (tipo === 'evento') {
    const tau = 8;
    finalV = initialValue - drop * Math.exp(-(finalT - 1) / tau);
  } else {
    finalV = Math.min(minValue + (finalT - 1) * 0.3, initialValue * 0.6);
  }

  const lineColor = tipo === 'evento' ? '#0ea5e9' : '#dc2626';

  return (
    <div className="graph-block">
      <h4 className="graph-title">Stigma da evento vs stigma al core: caduta del valore di mercato e traiettoria di recupero</h4>
      <div className="graph-row">
        <svg viewBox={`0 0 ${W} ${H}`} className="macro-svg">
          <Axes xMin={xMin} xMax={xMax} yMin={yMin} yMax={yMax} xLabel="mesi" yLabel="valore (%)" nX={6} nY={5} xFmt={v => v.toFixed(0)} yFmt={v => v.toFixed(0)} />
          {/* livello pre-stigma */}
          <line x1={PL} y1={toY(100, yMin, yMax)} x2={PL + cW} y2={toY(100, yMin, yMax)} stroke="#16a34a" strokeWidth={1} strokeDasharray="4,3" opacity={0.6} />
          <text x={PL + cW - 70} y={toY(100, yMin, yMax) - 4} fontSize={9} fill="#16a34a">pre-stigma (100)</text>
          {/* curva */}
          <path d={path} fill="none" stroke={lineColor} strokeWidth={2.4} />
          {/* punto finale */}
          <circle cx={toX(finalT, xMin, xMax)} cy={toY(finalV, yMin, yMax)} r={5} fill={lineColor} stroke="#fff" strokeWidth={2} />
          {/* punto minimo */}
          <circle cx={toX(1, xMin, xMax)} cy={toY(minValue, yMin, yMax)} r={4} fill="#ef4444" stroke="#fff" strokeWidth={1.5} />
          <text x={toX(1, xMin, xMax) + 5} y={toY(minValue, yMin, yMax) + 14} fontSize={9} fill="#ef4444">crash: −{drop.toFixed(0)}%</text>
        </svg>
        <div className="graph-controls">
          <SliderControl label="Intensità dello stigma" symbol="I" value={intensita} min={1} max={10} step={0.5} onChange={setIntensita} color="#dc2626" fmt={v => v.toFixed(1)} />
          <div className="slider-row">
            <div className="slider-header">
              <span className="slider-label">Tipo di stigma</span>
              <span className="slider-value" style={{ color: lineColor }}>{tipo === 'evento' ? 'da evento' : 'al core'}</span>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.4rem' }}>
              <button
                onClick={() => setTipo('evento')}
                style={{
                  flex: 1,
                  padding: '0.5rem',
                  borderRadius: '6px',
                  border: tipo === 'evento' ? '2px solid #0ea5e9' : '1px solid #cbd5e1',
                  background: tipo === 'evento' ? '#e0f2fe' : '#fff',
                  color: tipo === 'evento' ? '#0ea5e9' : '#475569',
                  fontWeight: tipo === 'evento' ? 700 : 500,
                  cursor: 'pointer',
                  fontSize: '0.85rem'
                }}
              >Da evento</button>
              <button
                onClick={() => setTipo('core')}
                style={{
                  flex: 1,
                  padding: '0.5rem',
                  borderRadius: '6px',
                  border: tipo === 'core' ? '2px solid #dc2626' : '1px solid #cbd5e1',
                  background: tipo === 'core' ? '#fee2e2' : '#fff',
                  color: tipo === 'core' ? '#dc2626' : '#475569',
                  fontWeight: tipo === 'core' ? 700 : 500,
                  cursor: 'pointer',
                  fontSize: '0.85rem'
                }}
              >Al core</button>
            </div>
          </div>
          <div className="result-box">
            <div className="result-row"><strong>Caduta iniziale</strong> <span style={{ color: '#dc2626' }}>−{drop.toFixed(0)}%</span></div>
            <div className="result-row"><strong>Valore dopo {months} mesi</strong> <span style={{ color: lineColor }}>{finalV.toFixed(0)}%</span></div>
            <div className="result-row"><strong>Recupero</strong> <span>{tipo === 'evento' ? 'esponenziale' : 'lineare lento'}</span></div>
          </div>
          <div className="insight-mini">Lo stigma da evento (es. Dieselgate) è gestibile: la curva torna verso il livello pre-crisi. Lo stigma al core (es. tabacco, armi) blocca il recupero su un soffitto strutturale, perché non si tratta di correggere un errore ma di cambiare cosa fa l'impresa.</div>
        </div>
      </div>
    </div>
  );
}

const markdownContent = `
# Capitolo 3: L'Institutional-Based View. Regole, Isomorfismo e Legittimità

Nel secondo capitolo si è dibattuto assiduamente della dirompente teoria del Vantaggio Competitivo di Michael Porter e del modello delle 5 Forze. Tuttavia, al di là dell'immediata arena competitiva delineata dai concorrenti e dai clienti, le aziende fluttuano in un mare molto più denso e invisibile. Nasce così la spinta teorica della **Institutional-Based View**, la seconda colonna portante del *Tripode Strategico*. Questo capitolo esplora come le regole del gioco, i dettami sociali e la ricerca disperata di validazione esterna spesso superino per importanza la fredda efficienza economica, svelando il volto più "umano" e normato del management aziendale.

## 1. I Limiti della Visione Porteriana e la Teoria Neo-Istituzionale
L'impianto intellettuale offerto da Porter descriveva una competizione spietata basata prettamente sulle logiche dei margini redditizi e delle barriere all'entrata. Un difetto fondativo minava tuttavia questa concezione: *l'assenza e l'oblio delle sovrastrutture morali e legali*.
Come si comporterebbe il modello se il presunto "vantaggio di costo" fosse eticamente aberrante o palesemente illegale? Cosa succede ai modelli economici se un monopolista abbassa i propri listini impiegando manodopera schiavizzata nei paesi del terzo mondo per ottenere una letale *Leadership di Costo*?
Questa immensa lacuna è l'incipit esatto che traghetta la scienza economica dalla vecchia analisi di settore verso l'avvolgente branca del **Neo-Istituzionalismo**.
Il focus smette di essere relegato ai confini chiusi della "fabbrica" (l'Organizzazione) o focalizzato ciecamente su un "Settore" economico inteso materialisticamente; lo sguardo scientifico si allarga inglobando quello che DiMaggio e Powell chiameranno trionfalmente il **Campo Organizzativo**. 

### 1.1 Il Tripode Strategico: la Sintesi delle Tre Viste
La concezione contemporanea della strategia poggia su un'architettura tripartita ribattezzata icasticamente *Tripode Strategico*, in cui la performance d'impresa si regge sull'equilibrio dinamico di tre sguardi analitici complementari e non mutuamente escludentisi:

| Vista | Focus | Tipologia | Domanda fondante |
|---|---|---|---|
| **Industry-Based View** | Settore competitivo (Porter, 5 Forze) | Analisi esterna — fattori esogeni | *Quanto è attrattivo il settore?* |
| **Resource-Based View** | Risorse e competenze interne | Analisi interna — fattori endogeni | *Cosa sappiamo fare meglio degli altri?* |
| **Institution-Based View** | Condizioni istituzionali e regole del gioco | Analisi esterna — vincoli formali e informali | *Quali regole, norme e culture plasmano il nostro agire?* |

La performance aziendale non è perciò il prodotto dell'una sola di queste prospettive, bensì la risultante della loro intersezione: una strategia priva di consapevolezza istituzionale è cieca, esattamente come lo è una strategia che ignora il settore o le risorse interne.

### 1.2 Il concetto di "Campo Organizzativo"
Secondo l'archetipo sociologico ed economico tracciato, il Campo Organizzativo non annovera banalmente e unicamente rivali diretti: esso forma un vero *pantheon istituzionale* abitato da un crogiolo indefinito di attori interconnessi. La definizione canonica, mutuata dalla sociologia delle organizzazioni, descrive il campo come *l'insieme di diversi tipi di organizzazioni e soggetti che producono influenze reciproche e che costituiscono un settore riconosciuto della vita istituzionale: fornitori, acquirenti, produttori, soggetti che regolamentano l'attività e organizzazioni che producono prodotti o servizi simili.*
Qui fornitori, clienti, enti regolamentatori, sindacati, rivali, legislatori, agenzie di stampa e attivisti coabitano, plasmando indissolubilmente il destino aziendale e determinando il perimetro ineludibile di ciò che il management è autorizzato a concepire o meno. Il neo-istituzionalismo, in altre parole, sposta l'oggetto dell'analisi dal *livello dell'organizzazione* al *livello settoriale e della comunità di riferimento*.

### 1.3 La Teoria Istituzionalista come Bilanciamento
La teoria istituzionalista non nega tout court la razionalità economica del soggetto agente, ma la *bilancia* contro un secondo piatto della bilancia altrettanto pesante. Da una parte vi è l'azione di soggetti razionalmente orientati al perseguimento dei propri obiettivi (l'*homo oeconomicus* classico); dall'altra si ergono robustamente i processi sociali, i meccanismi di legittimazione, i vincoli all'azione e — in conseguenza diretta di tutto ciò — le minori alternative concretamente percorribili dai comportamenti individuali. Le organizzazioni, come ribadisce icasticamente la dottrina, *sono il risultato di un adattamento all'ambiente istituzionale, e non necessariamente risultano da un'attività di progettazione razionale.*

### 1.4 L'Essenza delle Istituzioni
Se la teoria è l'"Institution-based view", che cosa sono di fatto queste potentissime "Istituzioni"?
Gli accademici sono accorsi nei decenni a tracciarne i perimetri, sfornando definizioni che coprono l'intero spettro dell'ontologia aziendale:

| Autore (anno) | Definizione di "Istituzione" |
|---|---|
| **North (1990)** | *Vincoli concepiti dagli uomini per regolare l'interazione sociale.* |
| **Meyer e Rowan (1977)** | *Modelli di comportamento validi e persistenti nel tempo.* |
| **Camuffo e Cappellari (1997)** | *Elemento costitutivo della realtà che definisce il modo in cui la condotta acquisisce un significato.* |
| **Zucker (1983)** | *Il senso comune di quale comportamento è appropriato e, fondamentalmente, significativo.* |
| **Powell e DiMaggio (1983)** | *Complesso collettivo e regolatorio di agenzie politiche e sociali che regolano la vita dell'organizzazione.* |

In sintesi corale, l'istituzione non è (necessariamente) un edificio governativo o un ufficio statale con dei burocrati, ma è una mastodontica **Regola del Gioco** che plasma e dà significato all'agire stesso del manager.

### 1.5 L'Interazione Dinamica Istituzioni-Organizzazioni-Strategia (Peng, 2002)
Il modello canonico proposto da **Peng (2002, p. 253)** schematizza l'Institution-Based View come un triangolo di forze in *interazione dinamica*: le **Istituzioni** (con i loro vincoli formali e informali) e le **Organizzazioni** (con le loro condizioni settoriali e risorse firm-specific) co-determinano le **Scelte Strategiche** dell'impresa. Nessuno dei tre vertici è autosufficiente: la strategia emerge dalla tensione reciproca, e a sua volta retroagisce sulle istituzioni stesse, contribuendo nel tempo a modificarle.

## 2. Le Regole del Gioco: Tra Istituzioni Formali e Istituzioni Informali
La giurisdizione del controllo sull'azienda si scinde, nella prassi dell'impianto istituzionale, in due emisferi profondamenti incisivi: le Istituzioni Formali e le Istituzioni Informali, costrutti che mirano fondamentalmente ad ammortizzare l'enorme incertezza tipica dei mercati. 

### 2.1 Le istituzioni Formali e il Pilastro Regolatorio
Nate dal costrutto legislativo, le Istituzioni Formali includono insindacabilmente le Norme emanate dai governi, i Regolamenti delle autorità garanti, le Costituzioni repubblicane e le agguerrite Policy emanate. Il meccanismo di costrizione in questa sede è brutale ed esplicato: chi sgarra contro il Pilastro Regolatorio patisce salate multe irrogate dalla legge, sequestri aziendali, indagini della magistratura (Si pensi, a titolo di mera esemplificazione contingente accademica, al rispetto forzato delle norme anti-trust). 

### 2.2 Le Istituzioni Informali e le Strutture Compensatorie
Ben più fitte, insidiose e spaventosamente influenti al pari delle prime si ergono, indomitamente, le **Istituzioni Informali**. Esse albergano immancabilmente nel profondo tessuto valoriale: constano dell'astratta componente etica globale, dei precetti di civiltà e dei codici di comportamento moralmente condivisi che lecitamente operano sui mercati.
Esiste tra questi due emisferi una silente interazione accademica nota e documentata come il fenomeno delle **Strutture Compensatorie**. La teoria recita nitidamente come *nelle frange in cui lo stato normativo (istituzioni formali) esprime vacatio legis, emanando norme farraginose, confuse o inefficaci, saranno immediatamente le logiche non scritte delle istituzioni informali ad emergere trionfalmente per soffocare e minimizzare il grado incalcolabile d'incertezza.* 
L'informale poggia interamente su due pilastri ontologici: il *Pilastro Normativo* (ciò che è comunemente avvertito come onere morale irrinunciabile che i simili spingano per veder compiuto) ed il finissimo e profondo *Pilastro Cognitivo* (la strutturazione subconscia psicologica interiorizzata sin dalla tenera educazione che spinge l'attore commerciale ad avvertire spontaneamente determinati scenari di agire come universalmente leciti ovvero palesemente inconcepibili).

### 2.3 I Tre Pilastri dell'Ambiente Istituzionale e la Legittimità
Riepilogando in modo sistematico, l'intero edificio dell'ambiente istituzionale — luogo in cui l'impresa scova o smarrisce la propria **Legittimità** — si regge su tre pilastri canonici, magistralmente codificati nella letteratura organizzativa:

| Pilastro | Natura | Meccanismo | Cosa l'impresa deve fare per essere legittima |
|---|---|---|---|
| **Regolatorio** | Formale, esplicito, coercitivo | Leggi, norme, regolamenti, sanzioni | *Conformarsi* alle regole scritte sotto minaccia di sanzione |
| **Normativo** | Informale, sociale, valoriale | Aspettative morali, codici professionali, etica condivisa | *Aderire* ai valori e ai doveri socialmente attesi |
| **Cognitivo** | Informale, taken-for-granted | Schemi mentali, categorie, "ciò che è ovvio" | *Risultare comprensibile e familiare* dentro le categorie cognitive del campo |

I tre pilastri convergono unitariamente nella produzione della **Legittimità**, intesa come l'insieme delle "regole e requisiti" che l'organizzazione deve rispettare per essere percepita come un attore valido e meritevole di esistenza.

## 3. L'Isomorfismo Istituzionale e l'Ipnotizzante "Mimetismo" Aziendale

Arriviamo in tal modo al pilastro affascinante e cuore pulsante della dottrina del Neo-Istituzionalismo, la dirompente spiegazione al quesito supremo dell'organizzazione aziendale empirica: *Perché al crescere dei mercati, tutte le aziende finiscono irrimediabilmente per somigliarsi vertiginosamente le une con le altre?*
La risposta accademica diserta e rifugge dalla logica della pura inter-competizione atta all'efficienza meccanica: **Le organizzazioni si uniformano spudoratamente perché il fine primario dell'impresa nel "Campo Istituzionale" non è solo generare redditività, ma bensì lucrare, difendere ed ossessivamente accaparrarsi "Legittimità" dinanzi al pubblico ed al potere statale esterno socio-regolativo**.
Allontanarsi dallo status quo sociale aliena di fatto l'impresa, perciò gli amministratori aziendali segnalano artificiosamente ai tavoli pubblici e alla pletora di consumatori e sindacati la propria docilità e *conformità esterna* agli schemi morali consolidati (persino quando intimamente e tecnicamente tali adesioni cozzano contro le massime efficienze logiche teorizzate della ingegnerizzazione taylorista).

### 3.1 I Miti Razionalizzati e l'Inerzia Strutturale
Questa conformità è spesso superficiale: l'accademia etichetta questi fenomeni come adozione meramente "Cerimoniale" o di assecondante "Mito Razionalizzato". Tali miti sono prassi spacciate subdolamente come scientificamente eccelse od efficaci, eppure prive interamente di solidità probabilistica o empirica. La loro diffusione deriva esclusivamente dal rassicurante e confortevole appoggio fittizio ch'esse recano a chi le sposa: le imprese se ne adornano in ossequio per dimostrarsi degne, corrette ed aggiornate al sentire collettivo. L'adesione ostinata perpetua la cosiddetta *Inerzia Strutturale*, il fenomeno paralizzante a cui approdano infinite congreghe corporative assuefatte a processi sedimentati, mantenuti in ossequio come "etici o corretti" per difetto di contestazione benché vetusti.

### 3.2 Le Tre Forme di Isomorfismo Organizzativo (DiMaggio e Powell, 1983)
Questa possente "forza di gravità" assimilativa, che spinge con brutalità entità diametralmente eterogenee allo scopo di farle collassare appiattendole in fotocopie l'una delle altre, si frammenta specificamente nel concetto nodale di **Processi Isomorfici**. La definizione canonica recita: *i processi isomorfici sono quelli attraverso cui le organizzazioni dello stesso tipo tendono ad assomigliarsi sempre più adottando strutture, strategie e processi simili.* L'isomorfismo (dal greco *isos* = stesso, *morphè* = forma) è catalogato magistralmente nella letteratura macroeconomica attraverso tre dicotomiche categorizzazioni d'approccio:

| Tipo di isomorfismo | Meccanismo causale | Motivazione dell'organizzazione | Esempio paradigmatico |
|---|---|---|---|
| **Coercitivo** | Pressioni formali e informali da parte di altre organizzazioni del campo (Stato, regolatori, partner dominanti) | Evitare sanzioni, multe, perdita di licenze | Adeguamento al GDPR, alle norme anti-trust, agli standard ambientali imposti |
| **Normativo** | Professionalizzazione e formazione comune dei manager (MBA, ordini professionali, associazioni di categoria) | Rispettare le obbligazioni sociali e cognitive condivise dalla comunità professionale | Adozione di pratiche di reporting ESG perché "è ciò che fa un manager serio" |
| **Mimetico** | Imitazione delle organizzazioni percepite come di successo o più legittimate, sotto incertezza ambientale | Ridurre l'incertezza copiando ciò che sembra funzionare per gli altri | Tutte le banche che adottano la stessa app; le startup che copiano il modello del *unicorno* di turno |

1. **L'Isomorfismo Coercitivo:** Si manifesta sotto le spinte ricattatorie o imponenti o minacciose generate dai *policy-maker* statali. Le aziende subiscono omogeneizzazione coatta semplicemente aborrendo lo spetto sanzionatorio paventato: esse, in tal contesto, non scelgono ma *patiscono e per costrizione e conformazione evitano multe disastrose.*
2. **L'Isomorfismo Normativo:** Scaturisce per gemmazione interna ai tavoli apicali dovuta alle correnti scolastiche formative comuni da cui gli stessi amministratori elitari tutti si dissetano. Gli alti burocrati, fusi tutti nelle solite e prestigiose università (MBA, accademie statali elitiste) e imbevuti d'identica ratio e professionalizzazione ontologica, riversano immancabilmente nelle proprie trincee decisionali identici costrutti intellettivi portando, in virtù dei fondamenti cognitivi in comune, le multinazionali a rassomigliarsi l'una all'altra senza alcuna coercizione statale diretta a forzarne il ricalco.
3. **L'Isomorfismo Mimetico (o Imitativo):** Nell'oceanico ed asfissiante vuoto dell'infinito incerto, i leader di settore si affidano alla scialuppa salvifica del plagio spudorato strategico: copiano meticolosamente a compasso le mosse di presunto successo e popolarità delle società colte come più prestigiose (o percepite universalmente dal mercato come dotate di sterminato consenso legittimo). Questo accade ciclicamente quando la nebbia dell'incertezza regna incontrastabile ed intraprendere da solitari una mossa esotica od ardimentosa costerebbe lo spettro orripilante del biasimo dell'azionariato scettico.

## 4. Legittimità, Stigma e Rendite di Influenza

### 4.1 Perché esistono le istituzioni? I 5 Problemi di Mercato e i 3 Ordini

Se le istituzioni vincolano così tanto le imprese, perché le società le creano e le mantengono? La risposta è semplice: i mercati, lasciati soli, generano problemi strutturali che non riescono a risolvere da soli. La letteratura istituzionalista censisce **cinque problemi di mercato** che giustificano l'esistenza stessa delle istituzioni:

| # | Problema di mercato | Cos'è e perché è un problema |
|---|---|---|
| 1 | **Asimmetrie informative** | Venditore e acquirente (o principal e agent) non dispongono delle stesse informazioni. Chi vende sa di più di chi compra: ne nascono adverse selection, moral hazard, mercati che collassano per mancanza di fiducia (il classico *market for lemons* di Akerlof). |
| 2 | **Asimmetrie di potere** | Una parte ha leva contrattuale strutturalmente superiore all'altra (monopolisti vs consumatori, grandi catene vs piccoli fornitori): senza istituzioni che riequilibrino, il forte schiaccia il debole. |
| 3 | **Asimmetrie temporali ed efficacia dei contratti** | Le prestazioni avvengono in tempi diversi (oggi pago, domani ricevo): senza enforcement, chi adempie per primo è esposto al rischio dell'inadempienza altrui. I contratti valgono solo se qualcuno li fa rispettare. |
| 4 | **Necessità di incentivi** | Senza un sistema che premi i comportamenti virtuosi (tutela della proprietà intellettuale, brevetti, marchi), nessuno investe in innovazione o reputazione. |
| 5 | **Coordinamento dell'azione collettiva** | Quando una risorsa è condivisa o un esito richiede cooperazione, scattano i problemi di free-riding e di tragedia dei beni comuni: ognuno ha l'incentivo a sfruttare senza contribuire. |

A questi cinque guasti strutturali la società risponde costruendo **tre livelli crescenti di "ordine"**, che operano in parallelo e si surrogano vicendevolmente:

| Ordine | Descrizione | Esempio |
|---|---|---|
| **Privato** | Accordi diretti tra le parti, contratti bilaterali, reputazione personale | Una stretta di mano tra fornitore e cliente storici |
| **Sociale** | Norme condivise, opinione pubblica, sanzioni reputazionali di una comunità | Una recensione devastante che azzera la clientela di un ristorante |
| **Statale** | Leggi, tribunali, forza pubblica, autorità di regolazione | Un giudice che ordina il risarcimento per inadempienza contrattuale |

Le istituzioni non sono quindi un ostacolo esterno all'impresa, ma la struttura che rende possibile il commercio su larga scala.

### 4.2 Perché la sfera istituzionale è rilevante per il management?
La letteratura strategica codifica tre ragioni cardinali per cui la sfera istituzionale *deve essere attentamente monitorata* dalle aziende, pena la loro stessa sopravvivenza:

1. **Identificare minacce ed opportunità**: i cambiamenti normativi, i mutamenti di sentire collettivo, l'emergere di nuove categorie cognitive aprono o chiudono interi mercati (si pensi all'esplosione del fintech grazie alla PSD2, o al collasso della telefonia analogica).
2. **Evitare lo Stigma**: la perdita di legittimità è un disastro economicamente quantificabile e talora irreversibile.
3. **Guadagnare, preservare o sfidare le rendite di influenza**: la partita istituzionale è essa stessa un terreno strategico in cui si conquistano o si perdono extra-profitti.

### 4.3 Lo Stigma Aziendale (Grandy, 2008; Hudson, 2008)

Un'azienda che viola le regole del gioco — formali o informali — rischia di perdere la propria legittimità. Quando questo accade, si parla di **stigma**, definito in letteratura come una *valutazione sociale negativa che determina una visione "distorta, deviante o inferiore" di un determinato attore* (Grandy, 2008; Hudson, 2008). Lo stigma scatta sul piano cognitivo e morale, e i suoi effetti rifluiscono direttamente sulla *performance* o, nei casi peggiori, sulla stessa *sopravvivenza* dell'organizzazione.

#### 4.3.1 I quattro livelli di applicazione dello stigma
Lo stigma può colpire l'attore economico a quattro livelli distinti, gerarchicamente annidati:

| Livello | Descrizione | Esempio |
|---|---|---|
| **Individuo** | Una singola persona è stigmatizzata per un tratto, un comportamento, una condizione | Un manager coinvolto in scandalo personale |
| **Occupazione** | Un'intera professione subisce delegittimazione | Esattori, ricavatori, certi mestieri della finanza speculativa |
| **Organizzazione** | Una specifica impresa è additata socialmente | Volkswagen post Dieselgate, Lehman Brothers nel 2008 |
| **Settore** | L'intero comparto è considerato moralmente sospetto | Industria del tabacco, gioco d'azzardo, armi leggere |

#### 4.3.2 Stigma da Evento vs Stigma al Core
Lo stigma si presenta in due forme molto diverse, fondamentale distinzione concettuale:

**Stigma da evento**: nasce da uno *episodio specifico* che scatena la visione stigmatizzata, un comportamento scorretto portato alla luce. Il caso più citato è il **Dieselgate di Volkswagen** (2015): la casa automobilistica aveva manipolato i software delle proprie vetture per falsare i test sulle emissioni inquinanti. La reputazione di VW subì un colpo enorme — crollo in borsa, class action, multe miliardarie. Tuttavia, lo stigma da evento è **gestibile nel tempo**: con interventi concreti, cambi di management e comunicazione credibile, l'azienda può recuperare legittimità.

**Stigma al core**: qui il problema non è un comportamento sbagliato episodico, ma è *relativo al core dell'organizzazione, al settore in cui opera, alla sua attività stessa*. L'industria del tabacco è l'esempio paradigmatico, ma vi rientrano anche quella delle armi leggere e certi comparti del gambling: indipendentemente da come si comportano, queste imprese operano in settori che una parte significativa della società considera intrinsecamente dannosi. Questo tipo di stigma è **strutturale e quasi impossibile da rimuovere**, perché non si tratta di correggere un errore ma di cambiare cosa si fa — il che significa rinunciare al proprio business.

#### 4.3.3 Esempi e casi di scuola
- **Uber vs Taxi**: il caso da manuale di stigma reciproco — gli incumbent del taxi accusano Uber di concorrenza sleale e mancato rispetto delle regole, mentre Uber dipinge i tassisti come una corporazione protetta e inefficiente. La partita si gioca tutta sul terreno della *legittimità percepita*, non solo dell'efficienza tecnica.
- **Industria della birra artigianale (American craft beer)**: caso storico di *de-stigmatizzazione* riuscita — ciò che un tempo era percepito come prodotto di nicchia o "minore" rispetto ai grandi brand industriali è stato riposizionato nell'immaginario collettivo come simbolo di qualità, autenticità e localismo.

La differenza pratica: con lo stigma da evento, il management può reagire. Con lo stigma al core, l'azienda convive con una delegittimazione cronica che limita il reclutamento, l'accesso al credito, la capacità di entrare in certi mercati.

### 4.4 La Tassonomia dei Profitti: dove si collocano le Rendite di Influenza
Per cogliere appieno la rilevanza economica delle rendite di influenza occorre prima inquadrarle nella più ampia *tassonomia dei profitti* offerta dalla teoria economica. Le rendite, ossia i profitti che eccedono il rendimento normale del capitale, si presentano in cinque forme classiche:

| Tipologia di rendita | Fonte del profitto | Sostenibilità |
|---|---|---|
| **Rendite Monopolistiche** | Extra-profitti ottenuti perché l'impresa fronteggia una competizione limitata o inesistente | Alta finché regge il monopolio |
| **Rendite Ricardiane (o di Efficienza)** | Profitti ottenuti poiché l'impresa è strutturalmente più efficiente dei suoi competitor | Alta se le risorse sono inimitabili |
| **Quasi-rendite** | Rendite *temporanee* legate a una risorsa la cui offerta è in quantità fissa, non modificabile | Bassa, finché la risorsa scarsa lo resta |
| **Rendite Schumpeteriane (o di Innovazione)** | Extra-profitti ottenuti dalla creazione di nuovi prodotti o processi | Bassa: l'imitazione le erode |
| **Rendite di Influenza** | Extra-profitti ottenuti dagli attori poiché le "regole del gioco" sono disegnate per favorirli rispetto ai competitor | Alta finché l'impresa controlla le istituzioni rilevanti |

Le rendite di influenza si distinguono dalle altre per una caratteristica radicale: **non derivano dalla creazione di valore economico né dall'efficienza tecnica**, ma esclusivamente dal *disegno favorevole delle regole*. Sono, in altre parole, una rendita istituzionale pura.

### 4.5 Le Rendite di Influenza e le Lobby (Ahuja & Yayavaram, 2011; Garud et al., 2007)

Se le regole del gioco determinano chi vince e chi perde sul mercato, le imprese più potenti cercano di influenzare quelle regole a proprio vantaggio. Questo non è un'anomalia — è una strategia razionale, ampiamente studiata in letteratura (Ahuja & Yayavaram, 2011; Garud et al., 2007) con il nome di **rendita di influenza** (o *rent-seeking*).

Il meccanismo è questo: un'azienda investe risorse non per migliorare prodotti o processi, ma per ottenere norme, licenze, sussidi o barriere regolative che le garantiscano un vantaggio artificiale sui concorrenti. Il profitto che ne deriva non viene dalla creazione di valore, ma dall'avere le regole scritte a proprio favore.

#### 4.5.1 Le strategie generiche verso le istituzioni
Le strategie che le imprese usano nei confronti delle istituzioni si dividono in due grandi famiglie, l'una *adattiva*, l'altra *trasformativa*:

| Famiglia | Strategia | Logica |
|---|---|---|
| **Generic Strategies** (adattive) | **Avoidance** | Evitare o aggirare le regole esistenti, operando nei margini interpretativi o spostandosi in giurisdizioni più favorevoli (delocalizzazione fiscale, paradisi normativi) |
| **Generic Strategies** (adattive) | **Negotiation** | Trattare direttamente con i regolatori per ottenere esenzioni, deroghe, condizioni preferenziali, periodi di transizione più lunghi |
| **Trasformative** | **Institutional Entrepreneurship** | Forma più ambiziosa: l'impresa non si limita ad adattarsi alle regole esistenti, ma partecipa attivamente a *creare* nuove istituzioni che ridefiniscano le regole del gioco a proprio favore. Raro, ma quando funziona produce vantaggi competitivi quasi impossibili da replicare. |

Avoidance e Negotiation si sovrappongono spesso nella prassi (la stessa impresa usa entrambe a seconda del dossier); l'institutional entrepreneurship è invece un livello qualitativamente superiore, riservato a pochi attori dotati di risorse ed orizzonte temporale per ridisegnare il campo stesso.

#### 4.5.2 La Lobby come strumento operativo
Per esercitare strategie di Avoidance, Negotiation o Institutional Entrepreneurship serve un'organizzazione strutturata. Le slide notano espressamente che *"è spesso necessaria una organizzazione tra gruppi di attori"*: nasce così la **lobby**, definita formalmente come

> *"Gruppo di pressione, con un'organizzazione formale, identificabile e riconoscibile basata sulla divisione funzionale dei compiti, che si attiva al fine di esercitare un'influenza sulle decisioni dei policy makers."*

Le lobby operano legalmente in quasi tutti i sistemi democratici, spesso con registrazione pubblica e bilanci trasparenti (negli USA il *Lobbying Disclosure Act* impone la registrazione; l'UE ha il Registro per la Trasparenza). La differenza tra una lobby legittima e la corruzione sta esattamente nella *trasparenza dell'azione* e nel *rispetto delle regole procedurali*: una lobby dichiara chi rappresenta, quanto spende e su quali dossier interviene.

---

## 🎯 Domande d'esame — Settimana 3

**Domanda 1:** Spiega cosa si intende per "Campo Organizzativo" e "Istituzione" nel quadro della Institutional-Based View, citando almeno tre definizioni di autori diversi (es. North, 1990; Meyer e Rowan, 1977; Zucker, 1983; Powell e DiMaggio, 1983; Camuffo e Cappellari, 1997). Poi descrivi le tre forme di isomorfismo (coercitivo, normativo, mimetico) di DiMaggio e Powell (1983), spiegando per ciascuna quale meccanismo spinge le organizzazioni a somigliarsi, anche quando non vi è un vantaggio tecnico evidente nel farlo.

**Domanda 2:** Distingui tra stigma da evento e stigma al core (Grandy, 2008; Hudson, 2008), portando un esempio per ciascuno e spiegando perché il secondo è strutturalmente più difficile da gestire. Specifica inoltre i quattro livelli a cui può applicarsi lo stigma (individuo, occupazione, organizzazione, settore). Aggiungi poi una spiegazione del concetto di rendita di influenza: cos'è, come si genera, come si colloca rispetto alle altre tipologie di rendite (monopolistiche, ricardiane, quasi-rendite, schumpeteriane) e quale ruolo giocano le lobby in questo processo.

**Domanda 3:** Illustra il *Tripode Strategico* mettendo in relazione Industry-Based View, Resource-Based View e Institution-Based View. Discuti poi il modello di Peng (2002) sull'interazione dinamica tra Istituzioni, Organizzazioni e Scelte Strategiche, e descrivi i tre pilastri dell'ambiente istituzionale (regolatorio, normativo, cognitivo) che convergono nella produzione della Legittimità.

**Domanda 4:** Spiega perché esistono le istituzioni elencando i cinque problemi di mercato (asimmetrie informative, asimmetrie di potere, asimmetrie temporali ed efficacia dei contratti, necessità di incentivi, coordinamento dell'azione collettiva) e i tre ordini possibili (privato, sociale, statale). Discuti infine le tre strategie generiche dell'impresa verso le istituzioni — Avoidance, Negotiation e Institutional Entrepreneurship (Ahuja & Yayavaram, 2011; Garud et al., 2007) — esemplificandole.
`;

export default function Week3() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', paddingBottom: '4rem' }}>
      <div className="page-header">
        <div style={{ color: 'var(--accent-cyan)', fontWeight: 600, letterSpacing: '0.1em', fontSize: '0.875rem', marginBottom: '0.5rem' }}>SETTIMANA 03</div>
        <h1 className="page-title gradient-text" style={{ fontSize: '3rem' }}>Institutional-Based View</h1>
      </div>

      <div className="content-section glass-panel markdown-body">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownContent}</ReactMarkdown>
      </div>

      <div className="content-section glass-panel" style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>📊 Visualizzazioni Interattive</h2>
        <IsomorphismGraph />
        <LegitimacyEfficiencyGraph />
        <StigmaImpactGraph />
      </div>
    </div>
  );
}
