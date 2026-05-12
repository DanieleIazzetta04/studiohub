import { useState, useMemo } from 'react';
import TopBar from '../components/TopBar';
import SubjectCard from '../components/SubjectCard';
import { SIMULAZIONI_MACRO } from '../data/simulazioniMacro';
import '../styles/studiohub.css';

const COLOR = '#F48233';

export default function SimulazioniMacroHub() {
  const [query, setQuery] = useState('');

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return SIMULAZIONI_MACRO;
    return SIMULAZIONI_MACRO.filter(s =>
      s.title.toLowerCase().includes(q) ||
      (s.subtitle && s.subtitle.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <div className="studiohub-app">
      <TopBar
        title="Simulazioni di Macro"
        color={COLOR}
        weight={600}
        showSearch={true}
        searchValue={query}
        onSearchChange={setQuery}
      />
      <main className="studiohub-page">
        <section className="sim-category-block">
          <div className="sim-category-header">
            <h2 className="sim-category-title" style={{ color: COLOR }}>Esami passati</h2>
            <p className="sim-category-subtitle">
              Testi originali degli esami di Macroeconomia e Politica Economica con soluzioni di riferimento (6 quesiti, 90 minuti, 30 punti)
            </p>
          </div>
          <div className="cards-grid">
            {items.map((s) => (
              <SubjectCard
                key={s.id}
                label={s.title.toUpperCase()}
                color={COLOR}
                to={`/simulazioni-macro/${s.id}`}
              />
            ))}
          </div>
        </section>
        {items.length === 0 && (
          <div className="empty-state">Nessuna simulazione trovata</div>
        )}
      </main>
    </div>
  );
}
