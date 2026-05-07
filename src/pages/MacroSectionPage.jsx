import { useState, useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
import SubjectCard from '../components/SubjectCard';
import '../styles/studiohub.css';

const COLOR = '#45ABD9';

const SECTION_DATA = {
  'introduzione': {
    title: 'Introduzione',
    chapters: [
      { num: 1, label: 'CAPITOLO 1', subtitle: 'La macroeconomia come scienza' },
      { num: 2, label: 'CAPITOLO 2', subtitle: 'I dati della macroeconomia' },
    ],
  },
  'teoria-classica': {
    title: 'Teoria Classica',
    chapters: [
      { num: 3, label: 'CAPITOLO 3', subtitle: 'Il Reddito Nazionale' },
      { num: 4, label: 'CAPITOLO 4', subtitle: 'Il Sistema Monetario' },
      { num: 5, label: 'CAPITOLO 5', subtitle: "L'Inflazione" },
      { num: 6, label: 'CAPITOLO 6', subtitle: "L'Economia Aperta" },
      { num: 7, label: 'CAPITOLO 7', subtitle: 'La Disoccupazione' },
    ],
  },
  'teoria-crescita': {
    title: 'Teoria della Crescita',
    chapters: [
      { num: 8, label: 'CAPITOLO 8', subtitle: 'Il Modello di Solow' },
      { num: 9, label: 'CAPITOLO 9', subtitle: 'Progresso Tecnologico' },
      { num: 10, label: 'CAPITOLO 10', subtitle: 'Evidenza e Politiche' },
    ],
  },
  'ciclo-economico': {
    title: 'Teoria del Ciclo Economico',
    chapters: [
      { num: 11, label: 'CAPITOLO 11', subtitle: 'Il Ciclo Economico' },
      { num: 12, label: 'CAPITOLO 12', subtitle: 'Modello IS-LM' },
      { num: 13, label: 'CAPITOLO 13', subtitle: 'Applicazione IS-LM' },
      { num: 14, label: 'CAPITOLO 14', subtitle: 'Mundell-Fleming' },
      { num: 15, label: 'CAPITOLO 15', subtitle: 'Offerta Aggregata e Phillips' },
    ],
  },
  'politica-macro': {
    title: 'Politica Macroeconomica',
    chapters: [
      { num: 16, label: 'CAPITOLO 16', subtitle: 'Modello Dinamico' },
      { num: 17, label: 'CAPITOLO 17', subtitle: 'Politiche di Stabilizzazione' },
    ],
  },
};

export default function MacroSectionPage() {
  const { section } = useParams();
  const [query, setQuery] = useState('');
  const data = SECTION_DATA[section];

  if (!data) return <Navigate to="/macro" replace />;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return data.chapters;
    return data.chapters.filter(c =>
      c.label.toLowerCase().includes(q) || c.subtitle.toLowerCase().includes(q)
    );
  }, [query, data.chapters]);

  return (
    <div className="studiohub-app">
      <TopBar
        title={data.title}
        color={COLOR}
        weight={600}
        showSearch={true}
        searchValue={query}
        onSearchChange={setQuery}
      />
      <main className="studiohub-page">
        <div className="cards-grid">
          {filtered.map((c) => (
            <SubjectCard
              key={c.num}
              label={c.label}
              color={COLOR}
              to={`/macro/${section}/cap/${c.num}`}
            />
          ))}
          {filtered.length === 0 && <div className="empty-state">Nessun capitolo trovato</div>}
        </div>
      </main>
    </div>
  );
}
