import { useState, useMemo } from 'react';
import TopBar from '../components/TopBar';
import SubjectCard from '../components/SubjectCard';
import { SIMULAZIONI_PEC } from '../data/simulazioniPeC';
import '../styles/studiohub.css';

const COLOR = '#FDB828';

export default function SimulazioniPeCHub() {
  const [query, setQuery] = useState('');

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return SIMULAZIONI_PEC;
    return SIMULAZIONI_PEC.filter(s =>
      s.title.toLowerCase().includes(q) ||
      (s.subtitle && s.subtitle.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <div className="studiohub-app">
      <TopBar
        title="Simulazioni di PeC"
        color={COLOR}
        weight={600}
        showSearch={true}
        searchValue={query}
        onSearchChange={setQuery}
      />
      <main className="studiohub-page">
        <section className="sim-category-block">
          <div className="sim-category-header">
            <h2 className="sim-category-title" style={{ color: '#b97d0a' }}>Compiti d'esame</h2>
            <p className="sim-category-subtitle">
              5 compiti in formato esame LUISS: 3 esercizi numerici (budgeting, CVR/BEP, costi e ABC) + 10 domande teoriche a risposta multipla e vero/falso. Svolgi e poi mostra la soluzione.
            </p>
          </div>
          <div className="cards-grid">
            {items.map((s) => (
              <SubjectCard
                key={s.id}
                label={s.title.toUpperCase()}
                color={COLOR}
                to={`/simulazioni-pec/${s.id}`}
              />
            ))}
          </div>
        </section>
        {items.length === 0 && (
          <div className="empty-state">Nessun compito trovato</div>
        )}
      </main>
    </div>
  );
}
