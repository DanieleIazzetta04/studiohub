import { useParams, Navigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Quiz from '../components/Quiz';
import { SIMULAZIONI_EGI } from '../data/simulazioniEGI';
import { SIMULAZIONI_EGI_MULTIPLA } from '../data/simulazioniEGIMultipla';
import { SIMULAZIONI_EGI_APERTE } from '../data/simulazioniEGIAperte';
import { SIMULAZIONI_EGI_ESERCIZI } from '../data/simulazioniEGIEsercizi';
import '../styles/studiohub.css';
import '../styles/quiz.css';

const COLOR = '#E32B4A';

const SOURCES = {
  c: { data: SIMULAZIONI_EGI, label: 'Simulazione completa' },
  m: { data: SIMULAZIONI_EGI_MULTIPLA, label: 'Solo domande multiple' },
  a: { data: SIMULAZIONI_EGI_APERTE, label: 'Solo domande aperte' },
  e: { data: SIMULAZIONI_EGI_ESERCIZI, label: 'Solo esercizi' },
};

export default function SimulazioneEGIDetail() {
  const { category, id } = useParams();
  const cat = category && SOURCES[category];
  const numId = parseInt(id, 10);

  if (!cat) return <Navigate to="/simulazioni-egi" replace />;

  const sim = cat.data.find(s => s.id === numId);
  if (!sim) return <Navigate to="/simulazioni-egi" replace />;

  const total = cat.data.length;

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
              <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: COLOR, marginBottom: 6 }}>
                {cat.label} · {sim.id}/{total}
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
