import { useState, useMemo } from 'react';
import TopBar from '../components/TopBar';
import SubjectCard from '../components/SubjectCard';
import '../styles/studiohub.css';

const COLOR = '#7251B5';

const WEEKS = Array.from({ length: 12 }, (_, i) => {
  const num = i + 1;
  return {
    label: `WEEK ${num}`,
    to: `/egi/week/${num}`,
    available: num !== 7, // Week 7 doesn't exist in the codebase
  };
});

export default function EGIHub() {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return WEEKS;
    return WEEKS.filter(w => w.label.toLowerCase().includes(q));
  }, [query]);

  return (
    <div className="studiohub-app">
      <TopBar
        title="Economia e Gestione delle Imprese"
        color={COLOR}
        weight={600}
        showSearch={true}
        searchValue={query}
        onSearchChange={setQuery}
      />
      <main className="studiohub-page">
        <div className="cards-grid">
          {filtered.map((w) => (
            <SubjectCard
              key={w.label}
              label={w.label}
              color={COLOR}
              to={w.available ? w.to : null}
              disabled={!w.available}
            />
          ))}
          {filtered.length === 0 && <div className="empty-state">Nessuna settimana trovata</div>}
        </div>
      </main>
    </div>
  );
}
