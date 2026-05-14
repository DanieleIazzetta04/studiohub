import { useState } from 'react'

const NODES = [
  {
    id: 'mercato',
    label: 'Analisi di Mercato',
    sub: 'Clienti, concorrenti, domanda attesa',
    color: '#64748b', bg: '#f8fafc', border: '#e2e8f0',
    icon: '🌐', col: 0, row: 0
  },
  {
    id: 'commerciale',
    label: 'Budget Commerciale',
    sub: 'Quantità vendute + Ricavi + Costi commerciali',
    color: '#2563eb', bg: '#eff6ff', border: '#bfdbfe',
    icon: '📈', col: 1, row: 0
  },
  {
    id: 'scorte',
    label: 'Politica delle Scorte',
    sub: 'Vol. prod. = Vol. vendite + Rim. finali − Rim. iniziali',
    color: '#0891b2', bg: '#ecfeff', border: '#a5f3fc',
    icon: '📦', col: 1, row: 1
  },
  {
    id: 'produzione',
    label: 'Budget della Produzione',
    sub: 'Quantità da produrre + Costi + Investimenti',
    color: '#7c3aed', bg: '#f5f3ff', border: '#ddd6fe',
    icon: '🏭', col: 1, row: 2
  },
  {
    id: 'mp',
    label: 'Budget Materie Prime',
    sub: 'Acquisti = Consumi + Rim. finali − Rim. iniziali',
    color: '#16a34a', bg: '#f0fdf4', border: '#bbf7d0',
    icon: '🧱', col: 0, row: 2
  },
  {
    id: 'personale',
    label: 'Budget del Personale',
    sub: 'Organico necessario + costi per posizione',
    color: '#d97706', bg: '#fffbeb', border: '#fde68a',
    icon: '👥', col: 2, row: 2
  },
  {
    id: 'sg',
    label: 'Budget Spese Generali',
    sub: 'MOI, ammortamenti, manutenzione, indiretti',
    color: '#9333ea', bg: '#faf5ff', border: '#e9d5ff',
    icon: '⚙️', col: 2, row: 1
  },
  {
    id: 'investimenti',
    label: 'Budget Investimenti',
    sub: 'Strategici, espansione, razionalizzazione, sostituzione',
    color: '#dc2626', bg: '#fef2f2', border: '#fecaca',
    icon: '💰', col: 0, row: 1
  },
  {
    id: 'globale',
    label: 'Budget Globale',
    sub: 'CE preventivo + SP preventivo + Budget di cassa',
    color: '#1e3a8a', bg: '#eff6ff', border: '#93c5fd',
    icon: '📊', col: 1, row: 3
  },
]

const CONNECTIONS = [
  { from: 'mercato', to: 'commerciale' },
  { from: 'commerciale', to: 'scorte' },
  { from: 'scorte', to: 'produzione' },
  { from: 'produzione', to: 'mp' },
  { from: 'produzione', to: 'personale' },
  { from: 'produzione', to: 'sg' },
  { from: 'investimenti', to: 'produzione' },
  { from: 'mp', to: 'globale' },
  { from: 'personale', to: 'globale' },
  { from: 'sg', to: 'globale' },
  { from: 'commerciale', to: 'globale' },
  { from: 'investimenti', to: 'globale' },
]

export default function BudgetSettorialiDiagram() {
  const [selected, setSelected] = useState(null)
  const active = NODES.find(n => n.id === selected)

  const isConnected = (id) => {
    if (!selected) return false
    return CONNECTIONS.some(c =>
      (c.from === selected && c.to === id) ||
      (c.to === selected && c.from === id)
    )
  }

  return (
    <div className="chart-card">
      <div className="chart-card-header">
        <div className="chart-card-title">I Budget Settoriali e le loro Connessioni</div>
        <div className="chart-card-sub">
          La redazione parte dal budget commerciale e segue una sequenza logica verso il budget globale. Clicca su un nodo per vedere il suo ruolo e le connessioni.
        </div>
      </div>

      <div style={{ padding: '16px 22px', display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'flex-start' }}>

        {/* Grid layout */}
        <div style={{ flex: '0 0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 140px)', gridTemplateRows: 'repeat(4, auto)', gap: '10px 8px' }}>
          {/* Row 0 */}
          <NodeBox node={NODES[0]} selected={selected} connected={isConnected(NODES[0].id)} onSelect={setSelected} />
          <NodeBox node={NODES[1]} selected={selected} connected={isConnected(NODES[1].id)} onSelect={setSelected} />
          <div />
          {/* Row 1 */}
          <NodeBox node={NODES[7]} selected={selected} connected={isConnected(NODES[7].id)} onSelect={setSelected} />
          <NodeBox node={NODES[2]} selected={selected} connected={isConnected(NODES[2].id)} onSelect={setSelected} />
          <NodeBox node={NODES[6]} selected={selected} connected={isConnected(NODES[6].id)} onSelect={setSelected} />
          {/* Row 2 */}
          <NodeBox node={NODES[4]} selected={selected} connected={isConnected(NODES[4].id)} onSelect={setSelected} />
          <NodeBox node={NODES[3]} selected={selected} connected={isConnected(NODES[3].id)} onSelect={setSelected} />
          <NodeBox node={NODES[5]} selected={selected} connected={isConnected(NODES[5].id)} onSelect={setSelected} />
          {/* Row 3 — spanning center */}
          <div />
          <NodeBox node={NODES[8]} selected={selected} connected={isConnected(NODES[8].id)} onSelect={setSelected} />
          <div />
        </div>

        {/* Detail panel */}
        {active ? (
          <div style={{
            flex: 1, minWidth: 180,
            background: active.bg, border: `2px solid ${active.border}`,
            borderRadius: 12, padding: '14px 16px', alignSelf: 'flex-start'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <span style={{ fontSize: 22 }}>{active.icon}</span>
              <div style={{ fontSize: 13, fontWeight: 700, color: active.color }}>{active.label}</div>
            </div>
            <p style={{ fontSize: 12.5, color: '#374151', lineHeight: 1.65, margin: '0 0 10px' }}>{active.sub}</p>
            {CONNECTIONS.filter(c => c.from === active.id || c.to === active.id).length > 0 && (
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: 6 }}>Connessioni</div>
                {CONNECTIONS.filter(c => c.from === active.id).map(c => {
                  const target = NODES.find(n => n.id === c.to)
                  return <div key={c.to} style={{ fontSize: 11.5, color: '#374151', marginBottom: 3 }}>→ {target.label}</div>
                })}
                {CONNECTIONS.filter(c => c.to === active.id).map(c => {
                  const src = NODES.find(n => n.id === c.from)
                  return <div key={c.from} style={{ fontSize: 11.5, color: '#64748b', marginBottom: 3 }}>← {src.label}</div>
                })}
              </div>
            )}
          </div>
        ) : (
          <div style={{ flex: 1, minWidth: 160, background: '#f8fafc', borderRadius: 12, padding: 16, border: '2px dashed #e2e8f0', textAlign: 'center', alignSelf: 'flex-start' }}>
            <div style={{ fontSize: 24, marginBottom: 8 }}>☜</div>
            <div style={{ fontSize: 12, color: '#64748b', fontWeight: 600 }}>Seleziona un budget</div>
            <div style={{ fontSize: 11.5, color: '#94a3b8', marginTop: 4, lineHeight: 1.5 }}>Clicca su un nodo per vedere il contenuto e le connessioni con gli altri budget.</div>
          </div>
        )}
      </div>

      <div style={{ padding: '4px 22px 14px', fontSize: 12, color: '#64748b', fontStyle: 'italic', borderTop: '1px solid #f1f5f9', paddingTop: 10 }}>
        <strong>Sequenza logica:</strong> il budget commerciale determina i volumi → le scorte mediano tra vendite e produzione → la produzione determina i fabbisogni di MP, personale e spese generali → tutti convergono nel budget globale.
      </div>
    </div>
  )
}

function NodeBox({ node, selected, connected, onSelect }) {
  const isActive = selected === node.id
  const isDimmed = selected && !isActive && !connected
  return (
    <button onClick={() => onSelect(isActive ? null : node.id)} style={{
      background: isActive ? node.color : node.bg,
      border: `2px solid ${isActive ? node.color : connected ? node.color : node.border}`,
      borderRadius: 10, padding: '9px 8px', cursor: 'pointer', textAlign: 'center',
      opacity: isDimmed ? 0.3 : 1,
      transition: 'all 0.15s ease',
      boxShadow: isActive ? `0 3px 10px ${node.color}40` : connected ? `0 0 0 2px ${node.color}30` : '0 1px 3px #0001',
    }}>
      <div style={{ fontSize: 18, marginBottom: 4 }}>{node.icon}</div>
      <div style={{ fontSize: 10.5, fontWeight: 700, color: isActive ? 'white' : node.color, lineHeight: 1.3 }}>{node.label}</div>
    </button>
  )
}
