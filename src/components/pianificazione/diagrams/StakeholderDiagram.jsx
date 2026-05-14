import { useState } from 'react'

const STAKEHOLDERS = [
  {
    id: 'azionisti',
    label: 'Azionisti / Imprenditori',
    short: 'Azionisti',
    color: '#2563eb', bg: '#eff6ff', border: '#bfdbfe',
    icon: '📈',
    kpis: ['ROI — Return on Investment', 'ROE — Return on Equity', 'EVA — Economic Value Added', 'Cash Flow operativo', 'Dividendi distribuiti'],
    desc: 'Misurano il valore attraverso la redditività e la remunerazione del capitale investito'
  },
  {
    id: 'clienti',
    label: 'Clienti',
    short: 'Clienti',
    color: '#16a34a', bg: '#f0fdf4', border: '#bbf7d0',
    icon: '🛒',
    kpis: ['Tasso di difettosità prodotti', 'Tempi di consegna rispettati', 'Soddisfazione post-vendita', 'Capacità di innovazione', 'Qualità percepita (6-Sigma)'],
    desc: 'Valutano la value proposition: qualità, puntualità, innovazione e servizio'
  },
  {
    id: 'fornitori',
    label: 'Fornitori',
    short: 'Fornitori',
    color: '#7c3aed', bg: '#f5f3ff', border: '#ddd6fe',
    icon: '🏭',
    kpis: ['Correttezza e puntualità pagamenti', 'Stabilità della relazione', 'Volumi di acquisto', 'Co-progettazione prodotti', 'Rispetto contrattuale'],
    desc: 'Cercano stabilità, correttezza e opportunità di sviluppo congiunto nel lungo termine'
  },
  {
    id: 'dipendenti',
    label: 'Dipendenti',
    short: 'Dipendenti',
    color: '#d97706', bg: '#fffbeb', border: '#fde68a',
    icon: '👥',
    kpis: ['Livello retributivo equo', 'Ore di formazione annue', 'Tasso di turnover', 'Soddisfazione del personale', 'Sicurezza sul lavoro'],
    desc: 'Capitale umano: fonte di conoscenza, creatività e innovazione — da sviluppare, non solo da gestire'
  },
  {
    id: 'territorio',
    label: 'Territorio / Ambiente',
    short: 'Territorio',
    color: '#0891b2', bg: '#ecfeff', border: '#a5f3fc',
    icon: '🌍',
    kpis: ['Impatto ambientale (CO₂, emissioni)', 'Investimenti in comunità locale', 'Occupazione generata', 'Rispetto normative ambientali', 'Biodiversità e risorse naturali'],
    desc: 'Portatori di interesse diffuso: comunità locale, ambiente naturale e generazioni future'
  }
]

export default function StakeholderDiagram() {
  const [selected, setSelected] = useState('azionisti')
  const active = STAKEHOLDERS.find(s => s.id === selected)

  return (
    <div className="chart-card">
      <div className="chart-card-header">
        <div className="chart-card-title">Creare Valore: Per Chi? — La Mappa degli Stakeholder</div>
        <div className="chart-card-sub">Seleziona uno stakeholder per vedere gli obiettivi e i KPI con cui l'impresa misura il valore creato per ciascuno</div>
      </div>

      <div style={{ padding: '20px 22px', display: 'flex', gap: 20, flexWrap: 'wrap' }}>
        {/* Hub layout */}
        <div style={{ flex: '0 0 auto' }}>
          {/* Top row */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 8 }}>
            {STAKEHOLDERS.slice(0, 1).map(s => (
              <StakeholderBtn key={s.id} s={s} selected={selected} onSelect={setSelected} />
            ))}
          </div>
          {/* Middle row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            {STAKEHOLDERS.slice(2, 3).map(s => (
              <StakeholderBtn key={s.id} s={s} selected={selected} onSelect={setSelected} />
            ))}
            {/* Center */}
            <div style={{
              width: 88, height: 88, borderRadius: '50%',
              background: 'linear-gradient(135deg, #1e3a8a, #3b82f6)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              color: 'white', flexShrink: 0, boxShadow: '0 4px 16px #3b82f640'
            }}>
              <div style={{ fontSize: 18 }}>🏢</div>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.5px', marginTop: 3 }}>IMPRESA</div>
            </div>
            {STAKEHOLDERS.slice(1, 2).map(s => (
              <StakeholderBtn key={s.id} s={s} selected={selected} onSelect={setSelected} />
            ))}
          </div>
          {/* Bottom row */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8 }}>
            {STAKEHOLDERS.slice(3, 5).map(s => (
              <StakeholderBtn key={s.id} s={s} selected={selected} onSelect={setSelected} />
            ))}
          </div>
        </div>

        {/* Detail panel */}
        {active && (
          <div style={{
            flex: 1, minWidth: 220,
            background: active.bg,
            border: `2px solid ${active.border}`,
            borderRadius: 12,
            padding: '16px 18px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
              <span style={{ fontSize: 24 }}>{active.icon}</span>
              <div>
                <div style={{ fontSize: 14, fontWeight: 700, color: active.color }}>{active.label}</div>
                <div style={{ fontSize: 11, color: '#64748b', marginTop: 2 }}>{active.desc}</div>
              </div>
            </div>
            <div style={{ fontSize: 11, fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 8 }}>
              KPI e Misure Chiave
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
              {active.kpis.map(kpi => (
                <li key={kpi} style={{
                  fontSize: 12.5, color: '#1e293b',
                  padding: '5px 0',
                  borderBottom: `1px solid ${active.border}`,
                  display: 'flex', alignItems: 'center', gap: 8
                }}>
                  <span style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: active.color, flexShrink: 0
                  }} />
                  {kpi}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div style={{ padding: '4px 22px 16px', fontSize: 12, color: '#64748b', fontStyle: 'italic' }}>
        <strong>Principio chiave:</strong> nessun sistema di misurazione monodimensionale è in grado di catturare tutta la complessità della creazione di valore. Ogni stakeholder misura la propria relazione con l'impresa attraverso indicatori diversi e spesso non comunicanti tra loro.
      </div>
    </div>
  )
}

function StakeholderBtn({ s, selected, onSelect }) {
  const isActive = selected === s.id
  return (
    <button
      onClick={() => onSelect(s.id)}
      style={{
        width: 88, minHeight: 64,
        background: isActive ? s.color : s.bg,
        border: `2px solid ${isActive ? s.color : s.border}`,
        borderRadius: 10,
        cursor: 'pointer',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        gap: 4,
        transition: 'all 0.15s ease',
        transform: isActive ? 'scale(1.05)' : 'scale(1)',
        boxShadow: isActive ? `0 4px 12px ${s.color}40` : 'none',
        padding: '8px 6px'
      }}
    >
      <span style={{ fontSize: 18 }}>{s.icon}</span>
      <span style={{
        fontSize: 10, fontWeight: 700,
        color: isActive ? 'white' : s.color,
        textAlign: 'center', lineHeight: 1.2
      }}>
        {s.short}
      </span>
    </button>
  )
}
