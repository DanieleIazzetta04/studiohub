import { useParams, Navigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Quiz from '../components/Quiz';
import { SIMULAZIONI_PEC } from '../data/simulazioniPeC';
import '../styles/studiohub.css';
import '../styles/quiz.css';

const COLOR = '#FDB828';

export default function SimulazionePeCDetail() {
  const { id } = useParams();
  const numId = parseInt(id, 10);
  const sim = SIMULAZIONI_PEC.find(s => s.id === numId);

  if (!sim) return <Navigate to="/simulazioni-pec" replace />;

  const total = SIMULAZIONI_PEC.length;

  return (
    <div className="studiohub-app" style={{ '--card-color': COLOR }}>
      <TopBar
        title={sim.title.toUpperCase()}
        color={COLOR}
        weight={600}
        showSearch={false}
      />
      <main className="studiohub-page">
        <div className="big-card">
          <div className="big-card-inner">
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#b97d0a', marginBottom: 6 }}>
                Compito d'esame · {sim.id}/{total}
              </div>
              <h1 style={{ fontSize: '1.6rem', margin: '0 0 4px 0', fontWeight: 700, color: '#111827', fontFamily: 'Inter, sans-serif' }}>
                {sim.title}
              </h1>
              {sim.subtitle && (
                <p style={{ fontSize: 15, color: '#6b7280', margin: 0, fontFamily: 'Inter, sans-serif' }}>
                  {sim.subtitle}
                </p>
              )}
            </div>
            <Quiz simulazione={sim} color={COLOR} />
          </div>
        </div>
      </main>
    </div>
  );
}
