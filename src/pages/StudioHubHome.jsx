import { useState, useMemo } from 'react';
import TopBar from '../components/TopBar';
import SubjectCard from '../components/SubjectCard';
import '../styles/studiohub.css';

const SUBJECTS = [
  { label: 'Economia e Gestione delle Imprese', color: '#7251B5', to: '/egi' },
  { label: 'Macroeconomia', color: '#45ABD9', to: '/macro' },
  { label: 'Matematica Finanziaria', color: '#7DB85B', to: '/matematica-finanziaria' },
  { label: 'Pianificazione e Controllo', color: '#FDB828', to: '/pianificazione-controllo' },
  { label: 'Simulazioni di EGI', color: '#E32B4A', to: '/simulazioni-egi' },
  { label: 'Simulazioni di Macro', color: '#F48233', to: '/simulazioni-macro' },
];

export default function StudioHubHome() {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return SUBJECTS;
    return SUBJECTS.filter(s => s.label.toLowerCase().includes(q));
  }, [query]);

  return (
    <div className="studiohub-app">
      <TopBar
        title="StudioHub"
        color="#7DB85B"
        weight={700}
        showSearch={true}
        searchValue={query}
        onSearchChange={setQuery}
        showBack={false}
      />
      <main className="studiohub-page">
        <div className="cards-grid">
          {filtered.map((s) => (
            <SubjectCard key={s.label} label={s.label} color={s.color} to={s.to} />
          ))}
          {filtered.length === 0 && <div className="empty-state">Nessuna materia trovata</div>}
        </div>
      </main>
    </div>
  );
}
