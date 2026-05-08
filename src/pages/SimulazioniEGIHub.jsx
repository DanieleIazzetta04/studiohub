import { useState, useMemo } from 'react';
import TopBar from '../components/TopBar';
import SubjectCard from '../components/SubjectCard';
import { SIMULAZIONI_EGI } from '../data/simulazioniEGI';
import '../styles/studiohub.css';

const COLOR = '#E32B4A';

export default function SimulazioniEGIHub() {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return SIMULAZIONI_EGI;
    return SIMULAZIONI_EGI.filter(s =>
      s.title.toLowerCase().includes(q) || (s.subtitle && s.subtitle.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <div className="studiohub-app">
      <TopBar
        title="Simulazioni di EGI"
        color={COLOR}
        weight={600}
        showSearch={true}
        searchValue={query}
        onSearchChange={setQuery}
      />
      <main className="studiohub-page">
        <div className="cards-grid">
          {filtered.map((s) => (
            <SubjectCard
              key={s.id}
              label={s.title.toUpperCase()}
              color={COLOR}
              to={`/simulazioni-egi/${s.id}`}
            />
          ))}
          {filtered.length === 0 && <div className="empty-state">Nessuna simulazione trovata</div>}
        </div>
      </main>
    </div>
  );
}
