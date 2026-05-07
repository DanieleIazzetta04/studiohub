import TopBar from '../components/TopBar';
import '../styles/studiohub.css';

export default function PlaceholderPage({ title, color }) {
  return (
    <div className="studiohub-app">
      <TopBar
        title={title}
        color={color}
        weight={600}
        showSearch={false}
      />
      <main className="studiohub-page">
        <div className="placeholder-card" style={{ '--card-color': color }}>
          <span className="badge" style={{ background: color }}>In arrivo</span>
          <h2 style={{ color }}>{title}</h2>
          <p>Questa materia sarà presto disponibile.</p>
        </div>
      </main>
    </div>
  );
}
