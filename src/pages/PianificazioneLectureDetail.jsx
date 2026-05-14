import { useParams, Navigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
import ChartBlock from '../components/pianificazione/charts/ChartBlock';
import { lectures } from '../data/pianificazione/lectures';
import '../styles/studiohub.css';
import '../styles/pianificazione.css';

const COLOR = '#FDB828';

export default function PianificazioneLectureDetail() {
  const { id } = useParams();
  const numId = parseInt(id, 10);
  const lecture = lectures.find(l => l.id === numId);

  if (!lecture) return <Navigate to="/pianificazione-controllo" replace />;

  const total = lectures.length;
  const data = lecture.data;

  return (
    <div className="studiohub-app">
      <TopBar
        title={`LEZIONE ${lecture.id}`}
        color={COLOR}
        weight={600}
        showSearch={false}
      />
      <main className="studiohub-page">
        <div className="big-card">
          <div className="big-card-inner">
            <div style={{ maxWidth: '900px', margin: '0 auto', paddingBottom: '3rem' }}>

              {/* Page header — stile Macro */}
              <div className="page-header">
                <div style={{ color: COLOR, fontWeight: 700, letterSpacing: '0.1em', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                  LEZIONE {lecture.id} · PIANIFICAZIONE E CONTROLLO · {lecture.id}/{total}
                </div>
                <h1 className="page-title pec-page-title" style={{ fontSize: '2.6rem', lineHeight: 1.1 }}>
                  {data.title}
                </h1>
                {data.subtitle && (
                  <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', fontSize: '1.05rem', maxWidth: '680px', lineHeight: 1.55 }}>
                    {data.subtitle}
                  </p>
                )}
              </div>

              {/* Mini-indice (anchor links) */}
              {data.sections.length > 4 && (
                <div className="pec-mini-toc">
                  <div className="pec-mini-toc-label">Indice della lezione</div>
                  <ol className="pec-mini-toc-list">
                    {data.sections.map((s, i) => (
                      <li key={s.id}>
                        <a href={`#${s.id}`} className="pec-mini-toc-link">
                          <span className="pec-mini-toc-num">{String(i + 1).padStart(2, '0')}</span>
                          <span>{s.title}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Sezioni come content-section glass-panel (stile Macro) */}
              {data.sections.map((section) => (
                <div
                  key={section.id}
                  id={section.id}
                  className="content-section glass-panel pec-section-card"
                  style={{ padding: '2rem 2.5rem', marginBottom: '2rem', scrollMarginTop: '32px' }}
                >
                  <h2 style={{
                    fontSize: '1.6rem',
                    color: 'var(--accent-indigo)',
                    marginBottom: '1.2rem',
                    marginTop: 0,
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: 700,
                    lineHeight: 1.25,
                  }}>
                    {section.title}
                  </h2>

                  <div
                    className="pec-prose"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />

                  {section.charts?.map((chart, i) => (
                    <div key={i} className="pec-chart-wrap">
                      <ChartBlock chart={chart} />
                    </div>
                  ))}
                </div>
              ))}

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
