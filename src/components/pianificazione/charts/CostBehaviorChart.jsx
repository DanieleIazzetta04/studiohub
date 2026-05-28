import { useState, useMemo } from 'react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer, Label
} from 'recharts'

const fmt = (n) => Math.round(n).toLocaleString('it-IT')
const fmtEur = (n) => `€${fmt(n)}`

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
        <input type="range" min={min} max={max} step={step} value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="slider-input" style={{ '--pct': `${pct}%` }} />
        <div className="slider-bounds">
          <span>{format ? format(min) : min}</span>
          <span>{format ? format(max) : max}</span>
        </div>
      </div>
    </div>
  )
}

/* ── GRAFICO COSTI FISSI ─────────────────────────────── */
export function FixedCostChart() {
  const [cf, setCf] = useState(10000)
  const [qmax, setQmax] = useState(1000)

  const data = useMemo(() => {
    const steps = 10
    return Array.from({ length: steps + 1 }, (_, i) => {
      const q = Math.round((i / steps) * qmax)
      return {
        q,
        'CF totale': cf,
        'CF per unità': q > 0 ? +(cf / q).toFixed(2) : null,
      }
    }).filter(d => d.q > 0)
  }, [cf, qmax])

  return (
    <div className="chart-card">
      <div className="chart-card-header">
        <div className="chart-card-title">Comportamento dei Costi Fissi</div>
        <div className="chart-card-sub">In totale rimangono costanti; per unità diminuiscono all'aumentare del volume (economie di scala)</div>
      </div>

      <div className="chart-controls">
        <Slider label="Costi Fissi totali (CF)" value={cf} min={2000} max={50000} step={1000}
          onChange={setCf} format={fmtEur} />
        <Slider label="Volume massimo (Q)" value={qmax} min={200} max={5000} step={100}
          onChange={setQmax} format={(v) => `${fmt(v)} unità`} />
      </div>

      <div className="chart-dual">
        {/* CF Totale */}
        <div className="chart-half">
          <div className="chart-half-title">CF Totale — <em>costante</em></div>
          <ResponsiveContainer width="100%" height={220} debounce={50}>
            <LineChart data={data} margin={{ top: 8, right: 30, left: 8, bottom: 28 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="q" tickFormatter={fmt} tick={{ fontSize: 10 }} interval={0}>
                <Label value="Quantità (Q)" position="insideBottom" offset={-14} style={{ fontSize: 11, fill: '#64748b' }} />
              </XAxis>
              <YAxis tickFormatter={(v) => `€${(v / 1000).toFixed(0)}K`} tick={{ fontSize: 10 }} width={45} domain={[0, cf * 1.4]} />
              <Tooltip formatter={(v) => [fmtEur(v), 'CF totale']} labelFormatter={(v) => `Q = ${fmt(v)}`} />
              <Line type="monotone" dataKey="CF totale" stroke="#3b82f6" strokeWidth={2.5} dot={false} />
            </LineChart>
          </ResponsiveContainer>
          <div className="chart-formula">CF = {fmtEur(cf)} (costante) &nbsp;→&nbsp; Y = a</div>
        </div>

        {/* CF Per unità */}
        <div className="chart-half">
          <div className="chart-half-title">CF Per unità — <em>decresce (economie di scala)</em></div>
          <ResponsiveContainer width="100%" height={220} debounce={50}>
            <LineChart data={data} margin={{ top: 8, right: 30, left: 8, bottom: 28 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="q" tickFormatter={fmt} tick={{ fontSize: 10 }} interval={0}>
                <Label value="Quantità (Q)" position="insideBottom" offset={-14} style={{ fontSize: 11, fill: '#64748b' }} />
              </XAxis>
              <YAxis tickFormatter={(v) => `€${v.toFixed(0)}`} tick={{ fontSize: 10 }} width={45} />
              <Tooltip formatter={(v) => [`€${Number(v).toFixed(2)}`, 'CF per unità']} labelFormatter={(v) => `Q = ${fmt(v)}`} />
              <Line type="monotone" dataKey="CF per unità" stroke="#f97316" strokeWidth={2.5} dot={false} />
            </LineChart>
          </ResponsiveContainer>
          <div className="chart-formula">CF/Q = {fmtEur(cf)} / Q &nbsp;→&nbsp; curva decrescente</div>
        </div>
      </div>

      <div className="chart-metrics">
        <div className="metric-card">
          <div className="metric-label">CF per unità a Q = {fmt(Math.round(qmax / 2))}</div>
          <div className="metric-value">€{(cf / (qmax / 2)).toFixed(2)}</div>
        </div>
        <div className="metric-card">
          <div className="metric-label">CF per unità a Q = {fmt(qmax)}</div>
          <div className="metric-value">€{(cf / qmax).toFixed(2)}</div>
        </div>
        <div className="metric-card">
          <div className="metric-label">Riduzione per unità raddoppiando Q</div>
          <div className="metric-value" style={{ color: '#16a34a' }}>
            –€{(cf / (qmax / 2) - cf / qmax).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── GRAFICO COSTI VARIABILI ─────────────────────────── */
export function VariableCostChart() {
  const [cvu, setCvu] = useState(5)
  const [qmax, setQmax] = useState(1000)

  const data = useMemo(() => {
    const steps = 10
    return Array.from({ length: steps + 1 }, (_, i) => {
      const q = Math.round((i / steps) * qmax)
      return {
        q,
        'CV totale': cvu * q,
        'CV per unità': cvu,
      }
    })
  }, [cvu, qmax])

  return (
    <div className="chart-card">
      <div className="chart-card-header">
        <div className="chart-card-title">Comportamento dei Costi Variabili</div>
        <div className="chart-card-sub">In totale crescono proporzionalmente al volume; per unità rimangono costanti</div>
      </div>

      <div className="chart-controls">
        <Slider label="Costo Variabile unitario (CVu)" value={cvu} min={1} max={30} step={0.5}
          onChange={setCvu} format={(v) => `€${v} / unità`} />
        <Slider label="Volume massimo (Q)" value={qmax} min={200} max={5000} step={100}
          onChange={setQmax} format={(v) => `${fmt(v)} unità`} />
      </div>

      <div className="chart-dual">
        {/* CV Totale */}
        <div className="chart-half">
          <div className="chart-half-title">CV Totale — <em>cresce linearmente</em></div>
          <ResponsiveContainer width="100%" height={220} debounce={50}>
            <LineChart data={data} margin={{ top: 8, right: 30, left: 8, bottom: 28 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="q" tickFormatter={fmt} tick={{ fontSize: 10 }} interval={0}>
                <Label value="Quantità (Q)" position="insideBottom" offset={-14} style={{ fontSize: 11, fill: '#64748b' }} />
              </XAxis>
              <YAxis tickFormatter={(v) => `€${(v / 1000).toFixed(1)}K`} tick={{ fontSize: 10 }} width={48} />
              <Tooltip formatter={(v) => [fmtEur(v), 'CV totale']} labelFormatter={(v) => `Q = ${fmt(v)}`} />
              <Line type="monotone" dataKey="CV totale" stroke="#8b5cf6" strokeWidth={2.5} dot={false} />
            </LineChart>
          </ResponsiveContainer>
          <div className="chart-formula">CV = €{cvu} × Q &nbsp;→&nbsp; Y = b·Q &nbsp;(pendenza = {cvu})</div>
        </div>

        {/* CV Per unità */}
        <div className="chart-half">
          <div className="chart-half-title">CV Per unità — <em>costante</em></div>
          <ResponsiveContainer width="100%" height={220} debounce={50}>
            <LineChart data={data} margin={{ top: 8, right: 30, left: 8, bottom: 28 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="q" tickFormatter={fmt} tick={{ fontSize: 10 }} interval={0}>
                <Label value="Quantità (Q)" position="insideBottom" offset={-14} style={{ fontSize: 11, fill: '#64748b' }} />
              </XAxis>
              <YAxis tickFormatter={(v) => `€${v}`} tick={{ fontSize: 10 }} width={40}
                domain={[0, cvu * 2]} />
              <Tooltip formatter={(v) => [`€${v}`, 'CV per unità']} labelFormatter={(v) => `Q = ${fmt(v)}`} />
              <Line type="monotone" dataKey="CV per unità" stroke="#ec4899" strokeWidth={2.5} dot={false} />
            </LineChart>
          </ResponsiveContainer>
          <div className="chart-formula">CV/Q = €{cvu} (costante) &nbsp;→&nbsp; Y = b</div>
        </div>
      </div>

      <div className="chart-metrics">
        <div className="metric-card">
          <div className="metric-label">CV totale a Q = {fmt(Math.round(qmax / 2))}</div>
          <div className="metric-value">{fmtEur(cvu * (qmax / 2))}</div>
        </div>
        <div className="metric-card">
          <div className="metric-label">CV totale a Q = {fmt(qmax)}</div>
          <div className="metric-value">{fmtEur(cvu * qmax)}</div>
        </div>
        <div className="metric-card">
          <div className="metric-label">CV per unità (sempre)</div>
          <div className="metric-value">€{cvu.toFixed(2)}</div>
        </div>
      </div>
    </div>
  )
}
