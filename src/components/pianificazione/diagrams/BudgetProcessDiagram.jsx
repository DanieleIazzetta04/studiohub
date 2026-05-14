import { useState } from 'react'

const STEPS = [
  {
    n: 1,
    title: 'Definizione delle linee guida e obiettivi generali',
    detail: 'Il top management definisce le direttive strategiche per il periodo: tassi di crescita attesi, margini obiettivo, vincoli di risorse, priorità di investimento. Questi parametri costituiscono il "tetto" entro cui i responsabili delle singole aree formuleranno le proprie proposte.',
    color: '#2563eb', bg: '#eff6ff', border: '#bfdbfe',
    icon: '🎯'
  },
  {
    n: 2,
    title: 'Formulazione del budget delle vendite',
    detail: 'È il punto di partenza dell\'intero processo: tutti gli altri budget dipendono dalle previsioni di vendita. Si stima la domanda attesa per prodotto, per area geografica e per periodo infrannuale, tenendo conto di stagionalità, dinamiche competitive e capacità produttiva disponibile.',
    color: '#16a34a', bg: '#f0fdf4', border: '#bbf7d0',
    icon: '📈'
  },
  {
    n: 3,
    title: 'Preparazione di massima degli altri budget',
    detail: 'Sulla base del budget delle vendite si elaborano le prime versioni di tutti i budget settoriali: produzione, acquisti materie prime, personale, spese generali, investimenti. In questa fase le stime sono preliminari e soggette a revisione in sede di negoziazione.',
    color: '#7c3aed', bg: '#f5f3ff', border: '#ddd6fe',
    icon: '📋'
  },
  {
    n: 4,
    title: 'Negoziazione tra i responsabili',
    detail: 'I responsabili dei diversi centri di responsabilità negoziano gli obiettivi con i livelli gerarchici superiori. È la fase più delicata del processo: si bilanciano le aspettative del top management (ambiziose) con la conoscenza operativa dei manager (realistica). Il rischio è il "budget slack": obiettivi deliberatamente sottostimati per facilitarne il raggiungimento.',
    color: '#d97706', bg: '#fffbeb', border: '#fde68a',
    icon: '🤝'
  },
  {
    n: 5,
    title: 'Coordinamento e revisione delle singole componenti',
    detail: 'Si verifica la coerenza reciproca dei diversi budget settoriali: il budget della produzione deve essere compatibile con quello delle vendite; il budget degli acquisti deve essere coerente con i volumi di produzione; il budget del personale deve essere allineato con la capacità produttiva richiesta. Si eseguono le verifiche di fattibilità tecnica, economica e finanziaria.',
    color: '#0891b2', bg: '#ecfeff', border: '#a5f3fc',
    icon: '🔄'
  },
  {
    n: 6,
    title: 'Approvazione finale',
    detail: 'Il documento consolidato viene sottoposto all\'organo di governo aziendale (CdA o direzione generale) per l\'approvazione definitiva. In questa sede si effettuano le ultime modifiche e si formalizzano gli impegni dei responsabili verso gli obiettivi stabiliti.',
    color: '#dc2626', bg: '#fef2f2', border: '#fecaca',
    icon: '✅'
  },
  {
    n: 7,
    title: 'Distribuzione del documento approvato',
    detail: 'Il budget approvato viene comunicato a tutti i livelli dell\'organizzazione. Ogni responsabile riceve il proprio budget di competenza, con i target da raggiungere e le risorse assegnate. Questa fase trasforma il budget da documento di pianificazione a strumento operativo di governo.',
    color: '#64748b', bg: '#f8fafc', border: '#e2e8f0',
    icon: '📤'
  }
]

export default function BudgetProcessDiagram() {
  const [selected, setSelected] = useState(null)
  const active = STEPS.find(s => s.n === selected)

  return (
    <div className="chart-card">
      <div className="chart-card-header">
        <div className="chart-card-title">Il Processo di Redazione del Budget — 7 Fasi Sequenziali</div>
        <div className="chart-card-sub">
          La redazione del budget segue una sequenza obbligata: ogni fase produce gli input necessari alla successiva. Clicca su una fase per approfondirla.
        </div>
      </div>

      <div style={{ padding: '16px 22px', display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'flex-start' }}>
        {/* Steps column */}
        <div style={{ flex: '0 0 auto', display: 'flex', flexDirection: 'column', gap: 0 }}>
          {STEPS.map((step, i) => (
            <div key={step.n} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <button
                onClick={() => setSelected(selected === step.n ? null : step.n)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '10px 14px',
                  background: selected === step.n ? step.color : step.bg,
                  border: `2px solid ${selected === step.n ? step.color : step.border}`,
                  borderRadius: 10, cursor: 'pointer',
                  width: 340, textAlign: 'left',
                  transition: 'all 0.15s ease',
                  boxShadow: selected === step.n ? `0 4px 12px ${step.color}30` : '0 1px 3px #0001'
                }}
              >
                <div style={{
                  width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                  background: selected === step.n ? 'rgba(255,255,255,0.2)' : step.color + '18',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 16
                }}>
                  {step.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontSize: 10, fontWeight: 700, color: selected === step.n ? 'rgba(255,255,255,0.7)' : step.color,
                    textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: 2
                  }}>
                    Fase {step.n}
                  </div>
                  <div style={{
                    fontSize: 12.5, fontWeight: 600,
                    color: selected === step.n ? 'white' : '#1e293b',
                    lineHeight: 1.35
                  }}>
                    {step.title}
                  </div>
                </div>
                <div style={{ fontSize: 12, color: selected === step.n ? 'rgba(255,255,255,0.6)' : '#94a3b8', flexShrink: 0 }}>
                  {selected === step.n ? '▲' : '▼'}
                </div>
              </button>

              {/* Arrow between steps */}
              {i < STEPS.length - 1 && (
                <div style={{ width: 2, height: 8, background: '#cbd5e1', margin: '0 auto' }} />
              )}
            </div>
          ))}
        </div>

        {/* Detail panel */}
        {active ? (
          <div style={{
            flex: 1, minWidth: 200,
            background: active.bg,
            border: `2px solid ${active.border}`,
            borderRadius: 12, padding: '16px 18px',
            alignSelf: 'flex-start'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <span style={{ fontSize: 28 }}>{active.icon}</span>
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, color: active.color, textTransform: 'uppercase', letterSpacing: '0.8px' }}>
                  Fase {active.n} di 7
                </div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#1e293b', lineHeight: 1.3 }}>{active.title}</div>
              </div>
            </div>
            <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.7, margin: 0 }}>{active.detail}</p>
          </div>
        ) : (
          <div style={{
            flex: 1, minWidth: 180,
            background: '#f8fafc', borderRadius: 12,
            padding: 20, textAlign: 'center',
            border: '2px dashed #e2e8f0',
            alignSelf: 'flex-start'
          }}>
            <div style={{ fontSize: 28, marginBottom: 8 }}>☜</div>
            <div style={{ fontSize: 13, color: '#64748b', fontWeight: 600, marginBottom: 4 }}>Seleziona una fase</div>
            <div style={{ fontSize: 12, color: '#94a3b8', lineHeight: 1.6 }}>
              Clicca su una delle 7 fasi per vedere il dettaglio del processo.
            </div>
          </div>
        )}
      </div>

      <div style={{ padding: '4px 22px 16px', fontSize: 12, color: '#64748b', fontStyle: 'italic', borderTop: '1px solid #f1f5f9', paddingTop: 12 }}>
        <strong>Nota:</strong> la sequenzialità è un presupposto fondamentale del budget. Non è possibile definire il budget della produzione senza avere prima il budget delle vendite, né il budget degli acquisti senza il budget della produzione. Qualsiasi alterazione di questa sequenza compromette la coerenza del documento finale.
      </div>
    </div>
  )
}
