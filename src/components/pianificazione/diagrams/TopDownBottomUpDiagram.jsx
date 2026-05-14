import { useState } from 'react'

const APPROACHES = [
  {
    id: 'top-down',
    label: 'Top-Down',
    subtitle: 'Stile Impositivo',
    color: '#dc2626',
    bg: '#fef2f2',
    border: '#fecaca',
    icon: '⬇️',
    steps: [
      { label: 'Alta Direzione', desc: 'Definisce gli obiettivi e le linee guida del budget', level: 0 },
      { label: 'Middle Management', desc: 'Riceve gli obiettivi — può solo conseguirli', level: 1 },
      { label: 'Centri di Responsabilità', desc: 'Eseguono secondo i target imposti dall\'alto', level: 2 },
    ],
    pros: [],
    cons: [
      'Scarsa conoscenza dei problemi locali',
      'Difficile accettazione e demotivazione',
      'Eccessiva enfasi sugli scostamenti negativi',
    ],
  },
  {
    id: 'bottom-up',
    label: 'Bottom-Up',
    subtitle: 'Stile Partecipativo',
    color: '#16a34a',
    bg: '#f0fdf4',
    border: '#bbf7d0',
    icon: '⬆️',
    steps: [
      { label: 'Centri di Responsabilità', desc: 'Formulano le proprie proposte di budget', level: 0 },
      { label: 'Middle Management', desc: 'Coordina e consolida le proposte delle unità', level: 1 },
      { label: 'Alta Direzione', desc: 'Concorda gli obiettivi finali e approva il budget', level: 2 },
    ],
    pros: [
      'Maggior spazio alle individualità e agli obiettivi di area',
      'Enfasi sulle cause degli scostamenti',
      'Maggiore motivazione e senso di responsabilità',
    ],
    cons: [
      'Rischio di scarso coordinamento',
      'Budget slacks (sottostima deliberata degli obiettivi)',
    ],
  },
]

export default function TopDownBottomUpDiagram() {
  const [selected, setSelected] = useState(null)
  const active = APPROACHES.find(a => a.id === selected)

  return (
    <div className="chart-card">
      <div className="chart-card-header">
        <div className="chart-card-title">Top-Down vs Bottom-Up: Due Approcci alla Definizione del Budget</div>
        <div className="chart-card-sub">
          La scelta dell'approccio incide sul grado di partecipazione dei manager, sulla qualità delle informazioni incorporate e sul livello di motivazione organizzativa. Clicca su un approccio per il dettaglio.
        </div>
      </div>

      <div style={{ padding: '16px 22px', display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        {APPROACHES.map(ap => {
          const isActive = selected === ap.id
          return (
            <div
              key={ap.id}
              onClick={() => setSelected(isActive ? null : ap.id)}
              style={{
                flex: '1 1 220px',
                background: isActive ? ap.color : ap.bg,
                border: `2px solid ${isActive ? ap.color : ap.border}`,
                borderRadius: 12,
                padding: '16px 18px',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                boxShadow: isActive ? `0 4px 14px ${ap.color}40` : '0 1px 4px #0001',
              }}
            >
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <span style={{ fontSize: 24 }}>{ap.icon}</span>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: isActive ? 'white' : ap.color }}>{ap.label}</div>
                  <div style={{ fontSize: 11, color: isActive ? 'rgba(255,255,255,0.75)' : '#64748b', fontStyle: 'italic' }}>{ap.subtitle}</div>
                </div>
              </div>

              {/* Flow steps */}
              <div style={{ marginBottom: 14 }}>
                {ap.steps.map((step, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: i < ap.steps.length - 1 ? 6 : 0 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                      <div style={{
                        width: 22, height: 22, borderRadius: '50%',
                        background: isActive ? 'rgba(255,255,255,0.25)' : ap.color,
                        color: isActive ? 'white' : 'white',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 10, fontWeight: 800
                      }}>
                        {ap.id === 'top-down' ? i + 1 : ap.steps.length - i}
                      </div>
                      {i < ap.steps.length - 1 && (
                        <div style={{ width: 2, height: 12, background: isActive ? 'rgba(255,255,255,0.3)' : ap.border, marginTop: 2 }} />
                      )}
                    </div>
                    <div style={{ paddingTop: 2 }}>
                      <div style={{ fontSize: 11.5, fontWeight: 700, color: isActive ? 'white' : ap.color, lineHeight: 1.3 }}>{step.label}</div>
                      <div style={{ fontSize: 10.5, color: isActive ? 'rgba(255,255,255,0.8)' : '#475569', lineHeight: 1.4, marginTop: 1 }}>{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pros/Cons */}
              {ap.pros.length > 0 && (
                <div style={{ marginBottom: 8 }}>
                  <div style={{ fontSize: 9.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.6px', color: isActive ? 'rgba(255,255,255,0.6)' : '#94a3b8', marginBottom: 4 }}>Punti di forza</div>
                  {ap.pros.map((p, i) => (
                    <div key={i} style={{ fontSize: 11, color: isActive ? 'rgba(255,255,255,0.9)' : '#166534', marginBottom: 2, display: 'flex', gap: 5 }}>
                      <span>✓</span><span>{p}</span>
                    </div>
                  ))}
                </div>
              )}
              <div>
                <div style={{ fontSize: 9.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.6px', color: isActive ? 'rgba(255,255,255,0.6)' : '#94a3b8', marginBottom: 4 }}>Rischi e criticità</div>
                {ap.cons.map((c, i) => (
                  <div key={i} style={{ fontSize: 11, color: isActive ? 'rgba(255,255,255,0.9)' : '#991b1b', marginBottom: 2, display: 'flex', gap: 5 }}>
                    <span>⚠</span><span>{c}</span>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Hybrid note */}
      <div style={{ margin: '0 22px 16px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 10, padding: '12px 16px' }}>
        <div style={{ fontSize: 11.5, fontWeight: 700, color: '#334155', marginBottom: 4 }}>Approccio ibrido nella prassi</div>
        <div style={{ fontSize: 11.5, color: '#475569', lineHeight: 1.65 }}>
          Nella realtà aziendale i due approcci si combinano: la direzione fissa i macro-obiettivi strategici (componente top-down) mentre i responsabili di area contribuiscono con proposte operative dettagliate (componente bottom-up). Il processo di negoziazione che ne deriva è definito <em>budget negoziato</em> o <em>interactive budgeting</em>.
        </div>
      </div>

      <div style={{ padding: '4px 22px 14px', fontSize: 12, color: '#64748b', fontStyle: 'italic', borderTop: '1px solid #f1f5f9', paddingTop: 10 }}>
        <strong>Implicazione organizzativa:</strong> l'approccio bottom-up favorisce la motivazione e incorpora informazioni locali preziose, ma richiede meccanismi di coordinamento robusti per evitare la dispersione degli obiettivi e i fenomeni di slack budgetario.
      </div>
    </div>
  )
}
