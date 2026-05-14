import { useState, useMemo } from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend, ResponsiveContainer, Cell, ReferenceLine
} from 'recharts'

const fmt = (n) => Math.round(n).toLocaleString('it-IT')
const fmtEur = (n) => `€${fmt(n)}`

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

const ACTIVITIES = [
  { key: 'setup',    label: 'Setup Macchinari', color: '#3b82f6', driverLabel: 'N. setup' },
  { key: 'prod',     label: 'Produzione',        color: '#8b5cf6', driverLabel: 'Ore macchina' },
  { key: 'quality',  label: 'Controllo Qualità', color: '#f97316', driverLabel: 'N. controlli' },
  { key: 'orders',   label: 'Gestione Ordini',   color: '#16a34a', driverLabel: 'N. ordini' },
]

const DEFAULT = {
  costs:    { setup: 4300, prod: 9500, quality: 4000, orders: 2000 },
  driversA: { setup: 16,   prod: 70,   quality: 8,    orders: 10 },
  driversB: { setup: 4,    prod: 130,  quality: 2,    orders: 10 },
  unitsA: 200,
  unitsB: 400,
}

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="chart-tooltip">
      <div className="chart-tooltip-title">{label}</div>
      {payload.map(p => (
        <div key={p.name} className="chart-tooltip-row" style={{ color: p.color }}>
          <span>{p.name}:</span><strong>{fmtEur(p.value)}</strong>
        </div>
      ))}
    </div>
  )
}

export default function ABCChart() {
  const [costs, setCosts] = useState(DEFAULT.costs)
  const [driversA, setDriversA] = useState(DEFAULT.driversA)
  const [driversB, setDriversB] = useState(DEFAULT.driversB)
  const [unitsA, setUnitsA] = useState(DEFAULT.unitsA)
  const [unitsB, setUnitsB] = useState(DEFAULT.unitsB)

  const { rates, costA, costB, totalA, totalB, unitA, unitB, activityData } = useMemo(() => {
    const rates = {}
    ACTIVITIES.forEach(({ key }) => {
      const total = driversA[key] + driversB[key]
      rates[key] = total > 0 ? costs[key] / total : 0
    })

    const costA = {}, costB = {}
    ACTIVITIES.forEach(({ key }) => {
      costA[key] = rates[key] * driversA[key]
      costB[key] = rates[key] * driversB[key]
    })

    const totalA = Object.values(costA).reduce((s, v) => s + v, 0)
    const totalB = Object.values(costB).reduce((s, v) => s + v, 0)
    const unitA = unitsA > 0 ? totalA / unitsA : 0
    const unitB = unitsB > 0 ? totalB / unitsB : 0

    // Dati per il bar chart: allocazione per attività
    const activityData = ACTIVITIES.map(({ key, label }) => ({
      name: label,
      'Prodotto A': Math.round(costA[key]),
      'Prodotto B': Math.round(costB[key]),
    }))

    return { rates, costA, costB, totalA, totalB, unitA, unitB, activityData }
  }, [costs, driversA, driversB, unitsA, unitsB])

  const setCostKey = (key, val) => setCosts(c => ({ ...c, [key]: val }))
  const setDrvA = (key, val) => setDriversA(d => ({ ...d, [key]: val }))
  const setDrvB = (key, val) => setDriversB(d => ({ ...d, [key]: val }))

  const totalCosts = Object.values(costs).reduce((s, v) => s + v, 0)

  return (
    <div className="chart-card">
      <div className="chart-card-header">
        <div className="chart-card-title">Grafico ABC interattivo — Allocazione per attività</div>
        <div className="chart-card-sub">Modifica i costi delle attività, i driver consumati da ciascun prodotto e le unità prodotte per vedere come cambia il costo unitario ABC</div>
      </div>

      {/* Sezione costi attività */}
      <div style={{ padding: '14px 22px 0', borderBottom: '1px solid #f1f5f9' }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 10 }}>
          Costo delle attività (Step 2)
        </div>
        <div className="chart-controls" style={{ borderBottom: 'none', padding: 0, marginBottom: 14 }}>
          {ACTIVITIES.map(({ key, label, color }) => (
            <Slider key={key}
              label={<span style={{ color }}>{label}</span>}
              value={costs[key]} min={500} max={20000} step={100}
              onChange={v => setCostKey(key, v)} format={fmtEur} />
          ))}
        </div>
      </div>

      {/* Driver consumati */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid #f1f5f9' }}>
        {/* Prodotto A */}
        <div style={{ padding: '14px 22px', borderRight: '1px solid #f1f5f9' }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 10 }}>
            Prodotto A — driver consumati (Step 5)
          </div>
          <div className="chart-controls" style={{ padding: 0, borderBottom: 'none', gridTemplateColumns: '1fr', marginBottom: 8 }}>
            {ACTIVITIES.map(({ key, label, driverLabel, color }) => (
              <Slider key={key}
                label={<><span style={{ color }}>{label}</span> <span style={{ color: '#94a3b8' }}>({driverLabel})</span></>}
                value={driversA[key]} min={0} max={50} step={1}
                onChange={v => setDrvA(key, v)} />
            ))}
            <Slider label="Unità prodotte (A)" value={unitsA} min={50} max={1000} step={50} onChange={setUnitsA} format={v => `${v} unità`} />
          </div>
        </div>
        {/* Prodotto B */}
        <div style={{ padding: '14px 22px' }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 10 }}>
            Prodotto B — driver consumati (Step 5)
          </div>
          <div className="chart-controls" style={{ padding: 0, borderBottom: 'none', gridTemplateColumns: '1fr', marginBottom: 8 }}>
            {ACTIVITIES.map(({ key, label, driverLabel, color }) => (
              <Slider key={key}
                label={<><span style={{ color }}>{label}</span> <span style={{ color: '#94a3b8' }}>({driverLabel})</span></>}
                value={driversB[key]} min={0} max={50} step={1}
                onChange={v => setDrvB(key, v)} />
            ))}
            <Slider label="Unità prodotte (B)" value={unitsB} min={50} max={1000} step={50} onChange={setUnitsB} format={v => `${v} unità`} />
          </div>
        </div>
      </div>

      {/* Rates display */}
      <div style={{ padding: '12px 22px', background: '#f8fafc', borderBottom: '1px solid #f1f5f9', display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 11, color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', alignSelf: 'center' }}>Cost driver rates (Step 4):</span>
        {ACTIVITIES.map(({ key, label, color }) => (
          <span key={key} style={{ fontSize: 12, color, fontWeight: 600, fontFamily: 'monospace' }}>
            {label}: {fmtEur(rates[key])} / unità driver
          </span>
        ))}
      </div>

      {/* Bar chart */}
      <div className="chart-area" style={{ paddingTop: 12 }}>
        <div style={{ fontSize: 12, color: '#475569', fontWeight: 600, padding: '0 22px 8px', textAlign: 'center' }}>
          Costi ABC allocati per attività — Prodotto A vs Prodotto B
        </div>
        <ResponsiveContainer width="100%" height={280}>
          <BarChart data={activityData} margin={{ top: 8, right: 24, left: 16, bottom: 8 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="name" tick={{ fontSize: 11 }} />
            <YAxis tickFormatter={v => `€${(v/1000).toFixed(1)}K`} tick={{ fontSize: 11 }} width={52} />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ fontSize: 13 }} />
            <Bar dataKey="Prodotto A" fill="#3b82f6" radius={[4,4,0,0]} />
            <Bar dataKey="Prodotto B" fill="#f97316" radius={[4,4,0,0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Metrics */}
      <div className="chart-metrics">
        <div className="metric-card">
          <div className="metric-label">Costi totali ABC — Prod. A</div>
          <div className="metric-value" style={{ color: '#2563eb' }}>{fmtEur(totalA)}</div>
        </div>
        <div className="metric-card">
          <div className="metric-label">Costo unitario ABC — Prod. A</div>
          <div className="metric-value" style={{ color: '#2563eb' }}>{fmtEur(unitA)} / unità</div>
        </div>
        <div className="metric-card">
          <div className="metric-label">Costi totali ABC — Prod. B</div>
          <div className="metric-value" style={{ color: '#ea580c' }}>{fmtEur(totalB)}</div>
        </div>
        <div className="metric-card">
          <div className="metric-label">Costo unitario ABC — Prod. B</div>
          <div className="metric-value" style={{ color: '#ea580c' }}>{fmtEur(unitB)} / unità</div>
        </div>
        <div className="metric-card" style={{ background: '#f0fdf4' }}>
          <div className="metric-label">Costi totali da allocare</div>
          <div className="metric-value" style={{ color: '#15803d' }}>{fmtEur(totalCosts)}</div>
        </div>
        <div className="metric-card" style={{ background: unitA > unitB * 1.5 ? '#fef2f2' : '#f8fafc' }}>
          <div className="metric-label">Rapporto costi A/B</div>
          <div className="metric-value" style={{ color: unitA > unitB * 1.5 ? '#dc2626' : '#0f172a' }}>
            {totalB > 0 ? (totalA / totalB).toFixed(2) : '—'}x
          </div>
        </div>
      </div>
    </div>
  )
}
