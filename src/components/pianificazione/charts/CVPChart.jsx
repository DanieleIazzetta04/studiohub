import { useState, useMemo } from 'react'
import {
  ComposedChart, Line, Area, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ReferenceLine, ResponsiveContainer, Label
} from 'recharts'

const fmt = (n) => n.toLocaleString('it-IT')
const fmtEur = (n) => `€${fmt(Math.round(n))}`

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="chart-tooltip">
      <div className="chart-tooltip-title">Q = {fmt(label)} unità</div>
      {payload.map((p) => (
        <div key={p.dataKey} className="chart-tooltip-row" style={{ color: p.color }}>
          <span>{p.name}:</span>
          <strong>{fmtEur(p.value)}</strong>
        </div>
      ))}
      {payload.length >= 2 && (
        <div className="chart-tooltip-row chart-tooltip-profit"
          style={{ color: payload[1]?.value - payload[0]?.value >= 0 ? '#16a34a' : '#dc2626', borderTop: '1px solid #e5e7eb', marginTop: 4, paddingTop: 4 }}>
          <span>Risultato:</span>
          <strong>{fmtEur(payload[1]?.value - payload[0]?.value)}</strong>
        </div>
      )}
    </div>
  )
}

function Slider({ label, value, min, max, step, onChange, format }) {
  const display = format ? format(value) : value
  const pct = ((value - min) / (max - min)) * 100
  return (
    <div className="slider-group">
      <div className="slider-header">
        <span className="slider-label">{label}</span>
        <span className="slider-value">{display}</span>
      </div>
      <div className="slider-track-wrapper">
        <input
          type="range" min={min} max={max} step={step} value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="slider-input"
          style={{ '--pct': `${pct}%` }}
        />
        <div className="slider-bounds">
          <span>{format ? format(min) : min}</span>
          <span>{format ? format(max) : max}</span>
        </div>
      </div>
    </div>
  )
}

export default function CVPChart({ defaults = {} }) {
  const [cf, setCf] = useState(defaults.cf ?? 60000)
  const [cvu, setCvu] = useState(defaults.cvu ?? 10)
  const [pv, setPv] = useState(defaults.pv ?? 20)
  const [qmax, setQmax] = useState(defaults.qmax ?? 12000)
  const [targetProfit, setTargetProfit] = useState(defaults.targetProfit ?? 0)

  const mcu = pv - cvu
  const bep = mcu > 0 ? Math.ceil(cf / mcu) : null
  const qTarget = mcu > 0 && targetProfit >= 0 ? Math.ceil((cf + targetProfit) / mcu) : null
  const mcPct = pv > 0 ? ((mcu / pv) * 100).toFixed(1) : '—'

  const data = useMemo(() => {
    const steps = 40
    const step = qmax / steps
    return Array.from({ length: steps + 1 }, (_, i) => {
      const q = Math.round(i * step)
      const ct = cf + cvu * q
      const rt = pv * q
      return { q, ct, rt }
    })
  }, [cf, cvu, pv, qmax])

  const yMax = useMemo(() => Math.max(...data.map(d => Math.max(d.ct, d.rt))) * 1.05, [data])

  return (
    <div className="chart-card">
      <div className="chart-card-header">
        <div className="chart-card-title">Grafico Costi–Volumi–Risultati interattivo</div>
        <div className="chart-card-sub">Trascina i cursori per vedere come cambiano le curve e il punto di pareggio</div>
      </div>

      <div className="chart-controls">
        <Slider label="Costi Fissi totali (CF)" value={cf} min={5000} max={200000} step={5000}
          onChange={setCf} format={fmtEur} />
        <Slider label="Costo Variabile unitario (CVu)" value={cvu} min={1} max={Math.min(pv - 1, 80)} step={0.5}
          onChange={(v) => setCvu(Math.min(v, pv - 1))} format={(v) => `€${v}`} />
        <Slider label="Prezzo di Vendita unitario (PV)" value={pv} min={Math.max(cvu + 1, 2)} max={100} step={0.5}
          onChange={(v) => setPv(Math.max(v, cvu + 1))} format={(v) => `€${v}`} />
        <Slider label="Volume massimo analizzato (Q)" value={qmax} min={1000} max={50000} step={500}
          onChange={setQmax} format={(v) => `${fmt(v)} unità`} />
        <Slider label="Profitto obiettivo" value={targetProfit} min={0} max={200000} step={5000}
          onChange={setTargetProfit} format={fmtEur} />
      </div>

      <div className="chart-area">
        <ResponsiveContainer width="100%" height={360}>
          <ComposedChart data={data} margin={{ top: 16, right: 24, left: 16, bottom: 32 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />

            {/* Zona perdita */}
            {bep && (
              <Area
                dataKey="ct" fill="#fee2e2" stroke="none" fillOpacity={0.35}
                activeDot={false} legendType="none"
                data={data.filter(d => d.q <= (bep ?? qmax))}
              />
            )}

            <XAxis dataKey="q" tickFormatter={fmt} tick={{ fontSize: 11 }}>
              <Label value="Quantità (unità)" position="insideBottom" offset={-18} style={{ fontSize: 12, fill: '#64748b' }} />
            </XAxis>
            <YAxis tickFormatter={(v) => `€${(v / 1000).toFixed(0)}K`} tick={{ fontSize: 11 }} width={55} />

            <Tooltip content={<CustomTooltip />} />
            <Legend verticalAlign="top" height={32} wrapperStyle={{ fontSize: 13 }} />

            {/* BEP line */}
            {bep && bep <= qmax && (
              <ReferenceLine x={bep} stroke="#94a3b8" strokeDasharray="5 3" strokeWidth={1.5}
                label={{ value: `BEP: ${fmt(bep)}`, position: 'insideTopLeft', fontSize: 11, fill: '#64748b', dy: -4 }} />
            )}

            {/* Target profit line */}
            {targetProfit > 0 && qTarget && qTarget <= qmax && (
              <ReferenceLine x={qTarget} stroke="#a855f7" strokeDasharray="5 3" strokeWidth={1.5}
                label={{ value: `Q obiettivo: ${fmt(qTarget)}`, position: 'insideTopRight', fontSize: 11, fill: '#a855f7', dy: -4 }} />
            )}

            <Line type="monotone" dataKey="ct" name="Costi Totali (CT)"
              stroke="#3b82f6" strokeWidth={2.5} dot={false} activeDot={{ r: 4 }} />
            <Line type="monotone" dataKey="rt" name="Ricavi Totali (RT)"
              stroke="#16a34a" strokeWidth={2.5} dot={false} activeDot={{ r: 4 }} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-metrics">
        <div className="metric-card">
          <div className="metric-label">Margine di Contribuzione unitario</div>
          <div className="metric-value" style={{ color: mcu > 0 ? '#1d4ed8' : '#dc2626' }}>
            €{mcu.toFixed(2)} / unità
          </div>
        </div>
        <div className="metric-card">
          <div className="metric-label">Rapporto di contribuzione (MC%)</div>
          <div className="metric-value">{mcPct}%</div>
        </div>
        <div className="metric-card">
          <div className="metric-label">Break-Even Point (Q*)</div>
          <div className="metric-value" style={{ color: '#16a34a' }}>
            {bep ? `${fmt(bep)} unità` : 'N/A (PV ≤ CVu)'}
          </div>
        </div>
        <div className="metric-card">
          <div className="metric-label">BEP in valore (€)</div>
          <div className="metric-value">{bep ? fmtEur(bep * pv) : '—'}</div>
        </div>
        {targetProfit > 0 && (
          <div className="metric-card metric-card-purple">
            <div className="metric-label">Q per profitto obiettivo ({fmtEur(targetProfit)})</div>
            <div className="metric-value" style={{ color: '#7c3aed' }}>
              {qTarget ? `${fmt(qTarget)} unità` : '—'}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
