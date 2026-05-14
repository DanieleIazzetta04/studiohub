import { useState } from 'react'

const STEPS = [
  {
    id: 'pianificazione',
    label: 'Pianificazione strategica',
    sub: 'Definizione degli obiettivi di lungo periodo (3-5 anni) e delle strategie per raggiungerli',
    color: '#2563eb', bg: '#eff6ff', border: '#bfdbfe',
    icon: '🎯',
    angle: 270
  },
  {
    id: 'programmazione',
    label: 'Programmazione / Budget',
    sub: 'Traduzione della strategia in piani operativi di breve periodo con quantificazione delle risorse',
    color: '#16a34a', bg: '#f0fdf4', border: '#bbf7d0',
    icon: '📋',
    angle: 0
  },
  {
    id: 'esecuzione',
    label: 'Esecuzione',
    sub: 'Svolgimento delle attività operative secondo i programmi definiti nel budget',
    color: '#7c3aed', bg: '#f5f3ff', border: '#ddd6fe',
    icon: '⚙️',
    angle: 90
  },
  {
    id: 'controllo',
    label: 'Misurazione e Controllo',
    sub: 'Rilevazione dei risultati effettivi, analisi degli scostamenti rispetto al budget, azioni correttive',
    color: '#d97706', bg: '#fffbeb', border: '#fde68a',
    icon: '📊',
    angle: 180
  }
]

export default function BudgetCycleDiagram() {
  const [selected, setSelected] = useState(null)
  const active = STEPS.find(s => s.id === selected)

  return (
    <div className="chart-card">
      <div className="chart-card-header">
        <div className="chart-card-title">Il Modello di Gestione a Ciclo Chiuso</div>
        <div className="chart-card-sub">
          Il budget si inserisce in un processo ciclico continuo: ogni ciclo alimenta il successivo attraverso il feedback dei risultati. Clicca su una fase per il dettaglio.
        </div>
      </div>

      <div style={{ padding: '20px 22px', display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'flex-start' }}>

        {/* Cycle visual */}
        <div style={{ flex: '0 0 auto', position: 'relative', width: 260, height: 260 }}>
          {/* Central label */}
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 80, height: 80, borderRadius: '50%',
            background: 'linear-gradient(135deg, #1e3a8a, #3730a3)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            color: 'white', textAlign: 'center', padding: 8, zIndex: 2,
            boxShadow: '0 4px 16px #3b82f640'
          }}>
            <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: '0.8px', textTransform: 'uppercase', opacity: 0.7 }}>CICLO</div>
            <div style={{ fontSize: 10, fontWeight: 700, lineHeight: 1.2, marginTop: 2 }}>Pianificazione e Controllo</div>
          </div>

          {/* Curved arrows (SVG) */}
          <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} viewBox="0 0 260 260">
            <defs>
              {['#2563eb', '#16a34a', '#7c3aed', '#d97706'].map((c, i) => (
                <marker key={i} id={`arrow${i}`} markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L8,3 z" fill={c} />
                </marker>
              ))}
            </defs>
            {/* Top → Right */}
            <path d="M 155 45 A 90 90 0 0 1 215 155" fill="none" stroke="#16a34a" strokeWidth="2" strokeDasharray="6 3" markerEnd="url(#arrow1)" />
            {/* Right → Bottom */}
            <path d="M 215 155 A 90 90 0 0 1 105 215" fill="none" stroke="#7c3aed" strokeWidth="2" strokeDasharray="6 3" markerEnd="url(#arrow2)" />
            {/* Bottom → Left */}
            <path d="M 105 215 A 90 90 0 0 1 45 105" fill="none" stroke="#d97706" strokeWidth="2" strokeDasharray="6 3" markerEnd="url(#arrow3)" />
            {/* Left → Top */}
            <path d="M 45 105 A 90 90 0 0 1 155 45" fill="none" stroke="#2563eb" strokeWidth="2" strokeDasharray="6 3" markerEnd="url(#arrow0)" />
          </svg>

          {/* Step nodes */}
          {STEPS.map((step) => {
            const rad = (step.angle * Math.PI) / 180
            const r = 95
            const cx = 130 + r * Math.cos(rad)
            const cy = 130 + r * Math.sin(rad)
            const isActive = selected === step.id
            return (
              <button
                key={step.id}
                onClick={() => setSelected(selected === step.id ? null : step.id)}
                style={{
                  position: 'absolute',
                  left: cx - 30, top: cy - 30,
                  width: 60, height: 60,
                  borderRadius: '50%',
                  background: isActive ? step.color : step.bg,
                  border: `2px solid ${isActive ? step.color : step.border}`,
                  cursor: 'pointer',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.15s ease',
                  boxShadow: isActive ? `0 4px 14px ${step.color}50` : '0 2px 6px #0001',
                  zIndex: 3
                }}
              >
                <span style={{ fontSize: 18 }}>{step.icon}</span>
                <span style={{ fontSize: 7.5, fontWeight: 700, color: isActive ? 'white' : step.color, textAlign: 'center', lineHeight: 1.2, marginTop: 2, maxWidth: 52 }}>
                  {step.label.split(' ').slice(0, 2).join(' ')}
                </span>
              </button>
            )
          })}
        </div>

        {/* Detail or legend */}
        {active ? (
          <div style={{
            flex: 1, minWidth: 200,
            background: active.bg, border: `2px solid ${active.border}`,
            borderRadius: 12, padding: '16px 18px', alignSelf: 'flex-start'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
              <span style={{ fontSize: 26 }}>{active.icon}</span>
              <div style={{ fontSize: 14, fontWeight: 700, color: active.color }}>{active.label}</div>
            </div>
            <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.7, margin: 0 }}>{active.sub}</p>
          </div>
        ) : (
          <div style={{ flex: 1, minWidth: 180, alignSelf: 'flex-start' }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 12 }}>Le 4 fasi del ciclo</div>
            {STEPS.map(step => (
              <button key={step.id} onClick={() => setSelected(step.id)} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                width: '100%', padding: '8px 10px', marginBottom: 6,
                background: step.bg, border: `1.5px solid ${step.border}`,
                borderRadius: 8, cursor: 'pointer', textAlign: 'left',
                transition: 'all 0.13s'
              }}>
                <span style={{ fontSize: 16 }}>{step.icon}</span>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: step.color }}>{step.label}</div>
                  <div style={{ fontSize: 11, color: '#64748b', lineHeight: 1.3 }}>{step.sub.slice(0, 55)}…</div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      <div style={{ padding: '4px 22px 16px', fontSize: 12, color: '#64748b', fontStyle: 'italic', borderTop: '1px solid #f1f5f9', paddingTop: 12 }}>
        <strong>Logica "ciclo chiuso":</strong> i risultati dell'esecuzione alimentano il controllo, le cui analisi degli scostamenti informano la pianificazione del ciclo successivo. Il sistema "impara" e si auto-corregge nel tempo.
      </div>
    </div>
  )
}
