import { useEffect, useState } from 'react';
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
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    if (!lecture) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-15% 0px -70% 0px' }
    );

    lecture.data.sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [lecture]);

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  if (!lecture) return <Navigate to="/pianificazione-controllo" replace />;

  return (
    <div className="studiohub-app">
      <TopBar
        title={`LEZIONE ${lecture.id}`}
        color={COLOR}
        weight={600}
        showSearch={false}
      />
      <main className="studiohub-page">
        <div className="pec-layout">
          <aside className="pec-toc">
            <div className="pec-toc-inner">
              <div className="pec-toc-label">Indice</div>
              <nav>
                {lecture.data.sections.map((section) => (
                  <button
                    key={section.id}
                    className={`pec-toc-item ${activeSection === section.id ? 'pec-toc-item-active' : ''}`}
                    onClick={() => scrollToSection(section.id)}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          <article className="pec-content">
            <header className="pec-header">
              <div className="pec-number">Lezione {lecture.id}</div>
              <h1 className="pec-title">{lecture.data.title}</h1>
              {lecture.data.subtitle && (
                <p className="pec-subtitle">{lecture.data.subtitle}</p>
              )}
            </header>

            {lecture.data.sections.map((section) => (
              <section key={section.id} id={section.id} className="pec-section">
                <h2 className="pec-section-title">{section.title}</h2>
                <div
                  className="pec-section-body"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
                {section.charts?.map((chart, i) => (
                  <div key={i} className="pec-section-chart">
                    <ChartBlock chart={chart} />
                  </div>
                ))}
              </section>
            ))}
          </article>
        </div>
      </main>
    </div>
  );
}
