import { useState, useMemo } from 'react';
import TopBar from '../components/TopBar';
import SubjectCard from '../components/SubjectCard';
import { lectures } from '../data/pianificazione/lectures';
import '../styles/studiohub.css';

const COLOR = '#FDB828';

export default function PianificazioneHub() {
  const [query, setQuery] = useState('');

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return lectures;
    return lectures.filter(l =>
      l.title.toLowerCase().includes(q) ||
      (`lezione ${l.id}`).includes(q)
    );
  }, [query]);

  return (
    <div className="studiohub-app">
      <TopBar
        title="Pianificazione e Controllo"
        color={COLOR}
        weight={600}
        showSearch={true}
        searchValue={query}
        onSearchChange={setQuery}
      />
      <main className="studiohub-page">
        <section className="sim-category-block">
          <div className="sim-category-header">
            <h2 className="sim-category-title" style={{ color: COLOR }}>Le 6 lezioni del corso</h2>
            <p className="sim-category-subtitle">
              Dispensa completa di Pianificazione e Controllo: dal Management System al Budgeting avanzato
            </p>
          </div>
          <div className="cards-grid">
            {items.map((l) => (
              <SubjectCard
                key={l.id}
                label={`LEZIONE ${l.id}`}
                color={COLOR}
                to={`/pianificazione-controllo/${l.id}`}
              />
            ))}
          </div>
        </section>
        {items.length === 0 && (
          <div className="empty-state">Nessuna lezione trovata</div>
        )}
      </main>
    </div>
  );
}
