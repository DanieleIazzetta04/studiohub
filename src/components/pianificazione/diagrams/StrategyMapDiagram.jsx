import { useState } from 'react'

const LEVELS = [
  {
    id: 'financial',
    label: 'Prospettiva Economico-Finanziaria',
    color: '#2563eb', bg: '#eff6ff', border: '#bfdbfe',
    tag: 'LAGGING — Risultati di lungo termine',
    tagColor: '#2563eb',
    objectives: [
      { id: 'f1', text: 'Crescita sostenibile dei ricavi', note: 'Nuovi mercati + fidelizzazione' },
      { id: 'f2', text: 'Aumento della redditività (EVA > 0)', note: 'ROI supera il WACC' },
      { id: 'f3', text: 'Miglioramento struttura finanziaria', note: 'Riduzione leverage' }
    ]
  },
  {
    id: 'clients',
    label: 'Prospettiva Clienti',
    color: '#16a34a', bg: '#f0fdf4', border: '#bbf7d0',
    tag: 'DRIVER → Finanziaria',
    tagColor: '#16a34a',
    objectives: [
      { id: 'c1', text: 'Aumentare la soddisfazione del cliente', note: 'Fidelizzazione e quota mercato' },
      { id: 'c2', text: 'Ridurre tempi di consegna', note: 'Time-to-delivery < benchmark' },
      { id: 'c3', text: 'Migliorare qualità percepita', note: 'Difetti → zero, NPS → max' }
    ]
  },
  {
    id: 'processes',
    label: 'Prospettiva Processi Interni',
    color: '#7c3aed', bg: '#f5f3ff', border: '#ddd6fe',
    tag: 'DRIVER → Clienti',
    tagColor: '#7c3aed',
    objectives: [
      { id: 'p1', text: 'Eccellenza qualitativa (Six Sigma)', note: 'Tasso difetti < 0,3%' },
      { id: 'p2', text: 'Accelerare l\'innovazione', note: 'Time to market ridotto' },
      { id: 'p3', text: 'Ottimizzare la gestione ordini', note: 'Lead time operativo' }
    ]
  },
  {
    id: 'learning',
    label: 'Prospettiva Apprendimento e Crescita',
    color: '#d97706', bg: '#fffbeb', border: '#fde68a',
    tag: 'LEADING — Fondamenta strategiche',
    tagColor: '#d97706',
    objectives: [
      { id: 'l1', text: 'Sviluppare le competenze del personale', note: 'Formazione + certificazioni' },
      { id: 'l2', text: 'Allineare obiettivi individuale/azienda', note: 'MBO e sistema incentivi' },
      { id: 'l3', text: 'Potenziare i sistemi informativi', note: 'Feedback in tempo reale' }
    ]
  }
]

const CAUSAL_CHAIN = [
  { from: 'l1', to: 'p1', label: 'Personale formato → processi migliori' },
  { from: 'p1', to: 'c3', label: 'Qualità operativa → qualità percepita' },
  { from: 'c3', to: 'f1', label: 'Cliente soddisfatto → fedeltà → ricavi' },
  { from: 'l3', to: 'p2', label: 'Sistemi informativi → innovazione più rapida' },
  { from: 'p2', to: 'c1', label: 'Nuovi prodotti → soddisfazione clienti' },
  { from: 'c1', to: 'f2', label: 'Fedeltà clienti → EVA positivo' },
]

export default function StrategyMapDiagram() {
  const [highlighted, setHighlighted] = useState(null)
  const [showChain, setShowChain] = useState(false)

  const activeChain = highlighted
    ? CAUSAL_CHAIN.filter(c => c.from === highlighted || c.to === highlighted)
    : []
  const chainNodes = new Set(activeChain.flatMap(c => [c.from, c.to]))

  return (
    <div className="chart-card">
      <div className="chart-card-header">
        <div className="chart-card-title">Strategy Map — La Catena Causa-Effetto della BSC</div>
        <div className="chart-card-sub">
          Clicca su un obiettivo per vedere le relazioni causali. La logica va <strong>dal basso verso l'alto</strong>: l'apprendimento guida i processi, i processi creano valore per i clienti, i clienti generano i risultati finanziari.
        </div>
      </div>

      {/* Levels — bottom to top visually rendered top to bottom */}
      <div style={{ padding: '16px 22px', display: 'flex', flexDirection: 'column', gap: 0 }}>
        {LEVELS.map((level, li) => (
          <div key={level.id}>
            <div style={{
              background: level.bg,
              border: `2px solid ${level.border}`,
              borderRadius: li === 0 ? '10px 10px 0 0' : li === LEVELS.length - 1 ? '0 0 10px 10px' : '0',
              borderTop: li > 0 ? 'none' : `2px solid ${level.border}`,
              padding: '12px 16px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: level.color }}>{level.label}</div>
                <div style={{
                  fontSize: 9, fontWeight: 700, color: level.tagColor,
                  background: level.bg, border: `1px solid ${level.border}`,
                  padding: '2px 8px', borderRadius: 20, textTransform: 'uppercase', letterSpacing: '0.5px'
                }}>
                  {level.tag}
                </div>
              </div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {level.objectives.map(obj => {
                  const isActive = highlighted === obj.id
                  const isLinked = chainNodes.has(obj.id) && highlighted !== obj.id
                  const isDimmed = highlighted && !isActive && !isLinked
                  return (
                    <button key={obj.id} onClick={() => setHighlighted(highlighted === obj.id ? null : obj.id)} style={{
                      flex: '1 1 160px',
                      background: isActive ? level.color : isLinked ? level.bg : 'white',
                      border: `1.5px solid ${isActive ? level.color : isLinked ? level.color : level.border}`,
                      borderRadius: 8, padding: '8px 10px', textAlign: 'left',
                      cursor: 'pointer',
                      opacity: isDimmed ? 0.35 : 1,
                      transition: 'all 0.15s ease',
                      boxShadow: isActive ? `0 2px 10px ${level.color}40` : '0 1px 3px #0001'
                    }}>
                      <div style={{ fontSize: 11.5, fontWeight: 600, color: isActive ? 'white' : '#1e293b', lineHeight: 1.3 }}>
                        {obj.text}
                      </div>
                      <div style={{ fontSize: 10.5, color: isActive ? 'rgba(255,255,255,0.75)' : '#94a3b8', marginTop: 3 }}>
                        {obj.note}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Arrow between levels */}
            {li < LEVELS.length - 1 && (
              <div style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                height: 28, background: 'transparent', position: 'relative', zIndex: 1
              }}>
                <div style={{
                  width: 2, height: 20, background: '#cbd5e1',
                  position: 'absolute', top: 4
                }} />
                <div style={{
                  position: 'absolute', bottom: 2,
                  width: 0, height: 0,
                  borderLeft: '6px solid transparent',
                  borderRight: '6px solid transparent',
                  borderBottom: '8px solid #cbd5e1'
                }} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Active chain display */}
      {highlighted && activeChain.length > 0 && (
        <div style={{ margin: '0 22px 16px', padding: '12px 14px', background: '#f8fafc', borderRadius: 10, border: '1px solid #e2e8f0' }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 8 }}>
            Relazioni Causali
          </div>
          {activeChain.map((c, i) => (
            <div key={i} style={{ fontSize: 12, color: '#374151', padding: '4px 0', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ color: '#3b82f6', fontSize: 14 }}>→</span>
              {c.label}
            </div>
          ))}
        </div>
      )}

      <div style={{ padding: '0 22px 16px', display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        <div style={{ flex: 1, fontSize: 12, color: '#64748b', lineHeight: 1.7 }}>
          <strong>Lagging indicators</strong> (in alto): misurano i risultati già ottenuti — utile per valutare la performance passata, ma non azionabili in tempo reale.<br />
          <strong>Leading indicators</strong> (in basso): misurano i driver che determineranno i risultati futuri — essenziali per un governo prospettico della strategia.
        </div>
      </div>
    </div>
  )
}
