import { useState, useMemo } from 'react';
import TopBar from '../components/TopBar';
import SubjectCard from '../components/SubjectCard';
import '../styles/studiohub.css';

const COLOR = '#45ABD9';

const SECTIONS = [
  { label: 'INTRODUZIONE', slug: 'introduzione' },
  { label: 'TEORIA CLASSICA', slug: 'teoria-classica' },
  { label: 'TEORIA CRESCITA', slug: 'teoria-crescita' },
  { label: 'CICLO ECONOMICO', slug: 'ciclo-economico' },
  { label: 'POLITICA MACRO', slug: 'politica-macro' },
];

export default function MacroHub() {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return SECTIONS;
    return SECTIONS.filter(s => s.label.toLowerCase().includes(q));
  }, [query]);

  return (
    <div className="studiohub-app">
      <TopBar
        title="Macroeconomia"
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
              key={s.slug}
              label={s.label}
              color={COLOR}
              to={`/macro/${s.slug}`}
            />
          ))}
          {filtered.length === 0 && <div className="empty-state">Nessuna sezione trovata</div>}
        </div>
      </main>
    </div>
  );
}
