import { useState, useMemo } from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, ReferenceLine, Cell, Legend
} from 'recharts'

const fmt = (n) => Math.round(n).toLocaleString('it-IT')
const fmtEur = (n) => `€${fmt(n)}`
const fmtPct = (n) => `${n.toFixed(1)}%`

function Slider({ label, value, min, max, step, onChange, format }) {
  const pct = ((value - min) / (max - min)) * 100
  return (
    <div className="slider-group">
      <div className="slider-header">
        <span className="slider-label">{label}</span>
        <span className="slider-value">{format ? format(value) : value}</span>
      </div>
      <div className="slider-track-wrapper">
        <input type="range" min={min} max={max} step={step} value={value}
          onChange={e => onChange(Number(e.target.value))}
          className="slider-input" style={{ '--pct': `${pct}%` }} />
        <div className="slider-bounds">
          <span>{format ? format(min) : min}</span>
          <span>{format ? format(max) : max}</span>
        </div>
      </div>
    </div>
  )
}

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="chart-tooltip">
      <div className="chart-tooltip-title">{label}</div>
      {payload.map(p => (
        <div key={p.name} className="chart-tooltip-row" style={{ color: p.fill || p.color }}>
          <span>{p.name}:</span><strong>{fmtEur(p.value)}</strong>
        </div>
      ))}
    </div>
  )
}

export default function EVAChart() {
  const [revenues, setRevenues] = useState(5000000)
  const [opCosts, setOpCosts] = useState(3200000)
  const [taxRate, setTaxRate] = useState(27)
  const [capitalInvested, setCapitalInvested] = useState(8000000)
  const [wacc, setWacc] = useState(8)

  const { ebit, nopat, costOfCapital, eva, roi, spread, barData } = useMemo(() => {
    const ebit = revenues - opCosts
    const nopat = ebit * (1 - taxRate / 100)
    const costOfCapital = capitalInvested * (wacc / 100)
    const eva = nopat - costOfCapital
    const roi = capitalInvested > 0 ? (nopat / capitalInvested) * 100 : 0
    const spread = roi - wacc

    const barData = [
      { name: 'NOPAT', value: Math.round(nopat), fill: '#3b82f6' },
      { name: 'Costo del Capitale (WACC × CI)', value: Math.round(costOfCapital), fill: '#f97316' },
    ]
    return { ebit, nopat, costOfCapital, eva, roi, spread, barData }
  }, [revenues, opCosts, taxRate, capitalInvested, wacc])

  const evaPositive = eva >= 0

  const waterfallData = [
    { name: 'NOPAT', nopat: Math.round(nopat), fill: '#3b82f6' },
    { name: 'Costo Capitale', costo: Math.round(costOfCapital), fill: '#f97316' },
    { name: 'EVA', eva: Math.round(Math.abs(eva)), fill: evaPositive ? '#16a34a' : '#dc2626' },
  ]

  return (
    <div className="chart-card">
      <div className="chart-card-header">
        <div className="chart-card-title">EVA — Economic Value Added (Calcolatore Interattivo)</div>
        <div className="chart-card-sub">
          Modifica ricavi, costi operativi, aliquota fiscale, capitale investito e WACC per vedere se l'impresa crea o distrugge valore economico.
          <br /><strong>Formula: EVA = NOPAT − (WACC × Capitale Investito)</strong>
        </div>
      </div>

      {/* Controls */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid #f1f5f9' }}>
        <div style={{ padding: '14px 22px', borderRight: '1px solid #f1f5f9' }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 10 }}>
            Conto Economico
          </div>
          <div className="chart-controls" style={{ padding: 0, borderBottom: 'none', gridTemplateColumns: '1fr' }}>
            <Slider label="Ricavi operativi" value={revenues} min={500000} max={20000000} step={100000}
              onChange={setRevenues} format={fmtEur} />
            <Slider label="Costi operativi (escl. tasse)" value={opCosts} min={200000} max={18000000} step={100000}
              onChange={setOpCosts} format={fmtEur} />
            <Slider label="Aliquota fiscale" value={taxRate} min={10} max={50} step={1}
              onChange={setTaxRate} format={v => `${v}%`} />
          </div>
        </div>
        <div style={{ padding: '14px 22px' }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 10 }}>
            Stato Patrimoniale e Costo del Capitale
          </div>
          <div className="chart-controls" style={{ padding: 0, borderBottom: 'none', gridTemplateColumns: '1fr' }}>
            <Slider label="Capitale Investito (CI)" value={capitalInvested} min={500000} max={30000000} step={500000}
              onChange={setCapitalInvested} format={fmtEur} />
            <Slider label="WACC (costo medio pond. del capitale)" value={wacc} min={2} max={20} step={0.5}
              onChange={setWacc} format={v => `${v}%`} />
          </div>
          {/* Intermediate results */}
          <div style={{ marginTop: 12, padding: '10px 12px', background: '#f8fafc', borderRadius: 8, fontSize: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
              <span style={{ color: '#64748b' }}>EBIT (Reddito Operativo):</span>
              <strong style={{ color: ebit >= 0 ? '#0f172a' : '#dc2626' }}>{fmtEur(ebit)}</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: '#64748b' }}>NOPAT (EBIT × (1 − tax)):</span>
              <strong style={{ color: '#3b82f6' }}>{fmtEur(nopat)}</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Bar chart NOPAT vs Cost of Capital */}
      <div className="chart-area" style={{ paddingTop: 12 }}>
        <div style={{ fontSize: 12, color: '#475569', fontWeight: 600, padding: '0 22px 8px', textAlign: 'center' }}>
          NOPAT vs Costo del Capitale — {evaPositive ? '✓ Valore creato' : '✗ Valore distrutto'}
        </div>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={barData} margin={{ top: 8, right: 24, left: 16, bottom: 8 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="name" tick={{ fontSize: 11 }} />
            <YAxis tickFormatter={v => `€${(v / 1000000).toFixed(1)}M`} tick={{ fontSize: 11 }} width={58} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="value" radius={[6, 6, 0, 0]}>
              {barData.map((entry, i) => (
                <Cell key={i} fill={entry.fill} />
              ))}
            </Bar>
            <ReferenceLine y={0} stroke="#0f172a" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* EVA Metrics */}
      <div className="chart-metrics">
        <div className="metric-card" style={{ background: evaPositive ? '#f0fdf4' : '#fef2f2' }}>
          <div className="metric-label">EVA (Economic Value Added)</div>
          <div className="metric-value" style={{ color: evaPositive ? '#15803d' : '#dc2626' }}>
            {evaPositive ? '+' : ''}{fmtEur(eva)}
          </div>
        </div>
        <div className="metric-card">
          <div className="metric-label">ROI (NOPAT / CI)</div>
          <div className="metric-value" style={{ color: roi >= wacc ? '#2563eb' : '#ea580c' }}>
            {fmtPct(roi)}
          </div>
        </div>
        <div className="metric-card">
          <div className="metric-label">WACC (costo del capitale)</div>
          <div className="metric-value" style={{ color: '#64748b' }}>{fmtPct(wacc)}</div>
        </div>
        <div className="metric-card" style={{ background: spread >= 0 ? '#f0fdf4' : '#fef2f2' }}>
          <div className="metric-label">Spread (ROI − WACC)</div>
          <div className="metric-value" style={{ color: spread >= 0 ? '#15803d' : '#dc2626' }}>
            {spread >= 0 ? '+' : ''}{fmtPct(spread)}
          </div>
        </div>
        <div className="metric-card">
          <div className="metric-label">NOPAT</div>
          <div className="metric-value" style={{ color: '#3b82f6' }}>{fmtEur(nopat)}</div>
        </div>
        <div className="metric-card">
          <div className="metric-label">Costo del Capitale (WACC × CI)</div>
          <div className="metric-value" style={{ color: '#f97316' }}>{fmtEur(costOfCapital)}</div>
        </div>
      </div>

      {/* Interpretation */}
      <div style={{ padding: '12px 22px 16px', background: evaPositive ? '#f0fdf4' : '#fef2f2', borderTop: '1px solid #f1f5f9' }}>
        <div style={{ fontSize: 12, color: evaPositive ? '#15803d' : '#dc2626', fontWeight: 600, marginBottom: 4 }}>
          {evaPositive ? '▲ L\'impresa sta creando valore economico' : '▼ L\'impresa sta distruggendo valore economico'}
        </div>
        <div style={{ fontSize: 12, color: '#475569', lineHeight: 1.6 }}>
          Con un ROI del <strong>{fmtPct(roi)}</strong> e un WACC del <strong>{fmtPct(wacc)}</strong>, lo spread è{' '}
          <strong style={{ color: spread >= 0 ? '#15803d' : '#dc2626' }}>{spread >= 0 ? '+' : ''}{fmtPct(spread)}</strong>.{' '}
          {evaPositive
            ? 'Il rendimento del capitale investito supera il costo del capitale: ogni euro investito genera più valore di quanto costi procurarselo.'
            : 'Il rendimento del capitale investito non copre il costo del capitale: l\'impresa remunera i finanziatori meno di quanto essi richiedano.'}
        </div>
      </div>
    </div>
  )
}
