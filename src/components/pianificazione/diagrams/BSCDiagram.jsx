import { useState } from 'react'

const PERSPECTIVES = [
  {
    id: 'financial',
    label: 'Economico-Finanziaria',
    question: 'Come veniamo visti dai nostri azionisti?',
    color: '#2563eb', bg: '#eff6ff', border: '#bfdbfe', lightBg: '#dbeafe',
    position: 'top',
    objectives: ['Aumentare la redditività (ROI, ROE)', 'Creare valore economico (EVA)', 'Crescita sostenibile dei ricavi', 'Ottimizzare la struttura finanziaria'],
    measures: ['ROI, ROE, EVA', 'Free Cash Flow', 'Tasso di crescita ricavi %', 'EBIT Margin'],
    targets: ['ROI > 15%', 'EVA > 0', 'Crescita ricavi +8% a.a.'],
    initiatives: ['Piano di riduzione costi operativi', 'Espansione in nuovi mercati', 'Ottimizzazione capitale circolante']
  },
  {
    id: 'clients',
    label: 'Clienti',
    question: 'Come veniamo visti dai nostri clienti?',
    color: '#16a34a', bg: '#f0fdf4', border: '#bbf7d0', lightBg: '#dcfce7',
    position: 'left',
    objectives: ['Aumentare la soddisfazione del cliente', 'Crescere nella quota di mercato', 'Migliorare la fedeltà/retention', 'Ridurre difettosità e reclami'],
    measures: ['Customer satisfaction index', 'Quota di mercato %', 'Tasso di retention', 'Tasso di difettosità'],
    targets: ['Soddisfazione > 4,2/5', 'Quota di mercato +3%', 'Retention > 85%'],
    initiatives: ['Programma fidelizzazione clienti', 'Zero-defect quality program', 'Riduzione lead time consegne']
  },
  {
    id: 'processes',
    label: 'Processi Interni',
    question: 'In cosa dobbiamo eccellere?',
    color: '#7c3aed', bg: '#f5f3ff', border: '#ddd6fe', lightBg: '#ede9fe',
    position: 'right',
    objectives: ['Eccellenza nei processi produttivi', 'Accelerare il time-to-market', 'Migliorare la qualità operativa', 'Gestione efficiente degli ordini'],
    measures: ['% difetti (6-Sigma)', 'Time to market (mesi)', 'Lead time produzione', 'OEE impianti'],
    targets: ['Difettosità < 0,3%', 'Time to market < 12 mesi', 'OEE > 85%'],
    initiatives: ['Implementazione Lean/Six Sigma', 'Automazione processi critici', 'Programma R&D nuovi prodotti']
  },
  {
    id: 'learning',
    label: 'Apprendimento e Crescita',
    question: 'Possiamo continuare a migliorare e creare valore?',
    color: '#d97706', bg: '#fffbeb', border: '#fde68a', lightBg: '#fef3c7',
    position: 'bottom',
    objectives: ['Sviluppare le competenze del personale', 'Allineare obiettivi azienda-personale', 'Migliorare i sistemi informativi', 'Responsabilizzare la prima linea'],
    measures: ['Ore formazione per dipendente', 'Livello soddisfazione personale', '% turnover aziendale', '% processi con feedback real-time'],
    targets: ['Formazione > 40h/anno/dipendente', 'Soddisfazione personale > 3,8/5', 'Turnover < 8%'],
    initiatives: ['Piano di formazione annuale', 'Revisione sistema incentivi', 'Implementazione nuovo ERP']
  }
]

export default function BSCDiagram() {
  const [selected, setSelected] = useState(null)
  const [activeTab, setActiveTab] = useState('objectives')
  const active = PERSPECTIVES.find(p => p.id === selected)

  const tabs = [
    { id: 'objectives', label: 'Obiettivi' },
    { id: 'measures', label: 'Misure (KPI)' },
    { id: 'targets', label: 'Target' },
    { id: 'initiatives', label: 'Iniziative' }
  ]

  return (
    <div className="chart-card">
      <div className="chart-card-header">
        <div className="chart-card-title">Balanced Scorecard — Le Quattro Prospettive</div>
        <div className="chart-card-sub">
          La Mission e la Strategia sono al centro. Clicca su ciascuna prospettiva per esplorare obiettivi, misure (KPI), target e iniziative.
        </div>
      </div>

      <div style={{ padding: '20px 22px', display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'flex-start' }}>
        {/* BSC Cross Layout */}
        <div style={{ flex: '0 0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          {/* Top: Finanziaria */}
          <PerspectiveBox p={PERSPECTIVES[0]} selected={selected} onSelect={id => { setSelected(id === selected ? null : id); setActiveTab('objectives') }} />

          {/* Middle row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <PerspectiveBox p={PERSPECTIVES[1]} selected={selected} onSelect={id => { setSelected(id === selected ? null : id); setActiveTab('objectives') }} />

            {/* Center Mission */}
            <div style={{
              width: 120, height: 120, borderRadius: 12,
              background: 'linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              color: 'white', flexShrink: 0,
              boxShadow: '0 4px 20px #3b82f640',
              textAlign: 'center', padding: '10px 8px'
            }}>
              <div style={{ fontSize: 16, marginBottom: 4 }}>🎯</div>
              <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', opacity: 0.7, marginBottom: 3 }}>
                MISSION
              </div>
              <div style={{ fontSize: 11, fontWeight: 700, lineHeight: 1.3 }}>Strategia Aziendale</div>
              <div style={{ fontSize: 8, opacity: 0.6, marginTop: 4, lineHeight: 1.4 }}>
                Perché esistiamo<br />A cosa aspiriamo
              </div>
            </div>

            <PerspectiveBox p={PERSPECTIVES[2]} selected={selected} onSelect={id => { setSelected(id === selected ? null : id); setActiveTab('objectives') }} />
          </div>

          {/* Bottom: Apprendimento */}
          <PerspectiveBox p={PERSPECTIVES[3]} selected={selected} onSelect={id => { setSelected(id === selected ? null : id); setActiveTab('objectives') }} />

          {selected && <div style={{ fontSize: 11, color: '#94a3b8', textAlign: 'center', marginTop: 4 }}>
            Clicca di nuovo per chiudere
          </div>}
        </div>

        {/* Detail panel */}
        {active && (
          <div style={{
            flex: 1, minWidth: 220,
            background: active.bg,
            border: `2px solid ${active.border}`,
            borderRadius: 12,
            overflow: 'hidden'
          }}>
            <div style={{ padding: '14px 16px', borderBottom: `1px solid ${active.border}` }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: active.color, marginBottom: 2 }}>
                {active.label}
              </div>
              <div style={{ fontSize: 12, color: '#475569', fontStyle: 'italic' }}>"{active.question}"</div>
            </div>

            {/* Tabs */}
            <div style={{ display: 'flex', borderBottom: `1px solid ${active.border}` }}>
              {tabs.map(t => (
                <button key={t.id} onClick={() => setActiveTab(t.id)} style={{
                  flex: 1, padding: '8px 4px', fontSize: 11, fontWeight: 600,
                  background: activeTab === t.id ? active.lightBg : 'transparent',
                  color: activeTab === t.id ? active.color : '#64748b',
                  border: 'none', borderBottom: activeTab === t.id ? `2px solid ${active.color}` : '2px solid transparent',
                  cursor: 'pointer', transition: 'all 0.15s'
                }}>
                  {t.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <div style={{ padding: '12px 16px' }}>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {active[activeTab].map(item => (
                  <li key={item} style={{
                    fontSize: 12.5, color: '#1e293b',
                    padding: '5px 0',
                    borderBottom: `1px solid ${active.border}`,
                    display: 'flex', alignItems: 'flex-start', gap: 8
                  }}>
                    <span style={{ color: active.color, fontWeight: 700, fontSize: 14, lineHeight: 1, flexShrink: 0, marginTop: 1 }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {!active && (
          <div style={{
            flex: 1, minWidth: 200,
            background: '#f8fafc', borderRadius: 12,
            padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            border: '2px dashed #e2e8f0', textAlign: 'center'
          }}>
            <div style={{ fontSize: 28, marginBottom: 10 }}>☜</div>
            <div style={{ fontSize: 13, color: '#64748b', fontWeight: 600, marginBottom: 6 }}>
              Seleziona una prospettiva
            </div>
            <div style={{ fontSize: 12, color: '#94a3b8', lineHeight: 1.6 }}>
              Clicca su una delle quattro prospettive per esplorare obiettivi, KPI, target e iniziative tipiche.
            </div>
          </div>
        )}
      </div>

      <div style={{ padding: '4px 22px 16px', fontSize: 12, color: '#64748b', fontStyle: 'italic' }}>
        <strong>Struttura:</strong> ogni prospettiva richiede di definire <em>obiettivi</em>, <em>misure</em> (KPI), <em>target</em> numerici e <em>iniziative</em> concrete — formando un sistema coerente che traduce la strategia in azione.
      </div>
    </div>
  )
}

function PerspectiveBox({ p, selected, onSelect }) {
  const isActive = selected === p.id
  return (
    <button onClick={() => onSelect(p.id)} style={{
      width: 148, minHeight: 72,
      background: isActive ? p.color : p.bg,
      border: `2px solid ${isActive ? p.color : p.border}`,
      borderRadius: 10,
      cursor: 'pointer',
      padding: '10px 10px',
      textAlign: 'center',
      transition: 'all 0.15s ease',
      transform: isActive ? 'scale(1.04)' : 'scale(1)',
      boxShadow: isActive ? `0 4px 16px ${p.color}40` : '0 1px 4px #0001',
    }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: isActive ? 'white' : p.color, lineHeight: 1.3 }}>
        {p.label}
      </div>
      <div style={{ fontSize: 10, color: isActive ? 'rgba(255,255,255,0.75)' : '#64748b', marginTop: 5, fontStyle: 'italic', lineHeight: 1.3 }}>
        "{p.question.length > 42 ? p.question.slice(0, 40) + '…' : p.question}"
      </div>
    </button>
  )
}
