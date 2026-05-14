export default function PerformanceChain() {
  const stages = [
    {
      label: 'INPUTS',
      color: '#e0f2fe', border: '#0ea5e9', text: '#0c4a6e',
      items: ['Capitale finanziario', 'Risorse umane', 'Tecnologie', 'Materie prime', 'Conoscenze e brevetti']
    },
    {
      label: 'ATTIVITÀ',
      color: '#f3e8ff', border: '#8b5cf6', text: '#4c1d95',
      items: ['Processi produttivi', 'Attività logistiche', 'Processi commerciali', 'Attività di R&D', 'Amministrazione']
    },
    {
      label: 'OUTPUTS',
      color: '#dcfce7', border: '#16a34a', text: '#14532d',
      items: ['Prodotti e servizi', 'Risultati finanziari', 'Ricavi e quota mercato', 'Report e comunicazioni', 'Brevetti sviluppati']
    },
    {
      label: 'OUTCOMES',
      color: '#fff7ed', border: '#f97316', text: '#7c2d12',
      items: ['Soddisfazione clienti', 'Valore per azionisti', 'Impatto ambientale', 'Benessere della comunità', 'Crescita sostenibile']
    }
  ]

  return (
    <div className="chart-card">
      <div className="chart-card-header">
        <div className="chart-card-title">La Catena della Performance Aziendale</div>
        <div className="chart-card-sub">
          Il modello di business trasforma gli <strong>input</strong> in <strong>output</strong> attraverso le attività. Gli output producono <strong>outcomes</strong> — impatti positivi e negativi sugli interessi dei vari stakeholder.
        </div>
      </div>
      <div style={{ padding: '20px 22px 10px', display: 'flex', alignItems: 'stretch', gap: 0, overflowX: 'auto' }}>
        {stages.map((stage, i) => (
          <div key={stage.label} style={{ display: 'flex', alignItems: 'stretch', flex: 1, minWidth: 130 }}>
            <div style={{
              flex: 1,
              background: stage.color,
              border: `2px solid ${stage.border}`,
              borderRadius: 10,
              padding: '14px 12px',
            }}>
              <div style={{
                fontSize: 10, fontWeight: 800, color: stage.border,
                textTransform: 'uppercase', letterSpacing: '1px',
                marginBottom: 10, textAlign: 'center'
              }}>
                {stage.label}
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {stage.items.map(item => (
                  <li key={item} style={{
                    fontSize: 11.5, color: stage.text,
                    padding: '4px 0',
                    borderBottom: `1px solid ${stage.border}25`,
                    display: 'flex', alignItems: 'flex-start', gap: 5
                  }}>
                    <span style={{ color: stage.border, fontSize: 9, marginTop: 3, flexShrink: 0 }}>▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {i < stages.length - 1 && (
              <div style={{ display: 'flex', alignItems: 'center', padding: '0 5px', flexShrink: 0 }}>
                <span style={{ fontSize: 20, color: '#94a3b8', lineHeight: 1 }}>→</span>
              </div>
            )}
          </div>
        ))}
      </div>
      <div style={{
        margin: '8px 22px 18px',
        padding: '10px 14px',
        background: '#f8fafc',
        borderRadius: 8,
        fontSize: 12,
        color: '#475569',
        lineHeight: 1.6,
        borderLeft: '3px solid #0ea5e9'
      }}>
        <strong>Nota:</strong> la misurazione della performance può riguardare ognuno di questi livelli. La scelta di quale livello misurare dipende dalla strategia e dagli stakeholder a cui l'impresa intende rispondere. I sistemi tradizionali misurano quasi esclusivamente gli <em>output</em> finanziari; i sistemi integrati misurano anche attività e outcomes.
      </div>
    </div>
  )
}
