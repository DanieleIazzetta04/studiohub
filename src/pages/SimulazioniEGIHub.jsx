import { useState, useMemo } from 'react';
import TopBar from '../components/TopBar';
import SubjectCard from '../components/SubjectCard';
import { SIMULAZIONI_EGI } from '../data/simulazioniEGI';
import { SIMULAZIONI_EGI_MULTIPLA } from '../data/simulazioniEGIMultipla';
import { SIMULAZIONI_EGI_APERTE } from '../data/simulazioniEGIAperte';
import { SIMULAZIONI_EGI_ESERCIZI } from '../data/simulazioniEGIEsercizi';
import '../styles/studiohub.css';

const COLOR = '#E32B4A';

const CATEGORIES = [
  { key: 'c', title: 'Simulazioni complete', subtitle: 'Multiple + Aperte + Esercizi (struttura compito d\'esame)', data: SIMULAZIONI_EGI },
  { key: 'm', title: 'Solo domande multiple', subtitle: '20 domande a risposta multipla per simulazione', data: SIMULAZIONI_EGI_MULTIPLA },
  { key: 'a', title: 'Solo domande aperte', subtitle: '10 domande di teoria applicata per simulazione', data: SIMULAZIONI_EGI_APERTE },
  { key: 'e', title: 'Solo esercizi', subtitle: 'Tutti i possibili esercizi calcolatori e applicativi', data: SIMULAZIONI_EGI_ESERCIZI },
];

export default function SimulazioniEGIHub() {
  const [query, setQuery] = useState('');

  const filteredCategories = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return CATEGORIES.map(c => ({ ...c, items: c.data }));
    return CATEGORIES.map(c => ({
      ...c,
      items: c.data.filter(s =>
        s.title.toLowerCase().includes(q) ||
        (s.subtitle && s.subtitle.toLowerCase().includes(q)) ||
        c.title.toLowerCase().includes(q)
      )
    }));
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
        {filteredCategories.map(cat => (
          cat.items.length > 0 && (
            <section key={cat.key} className="sim-category-block">
              <div className="sim-category-header">
                <h2 className="sim-category-title" style={{ color: COLOR }}>{cat.title}</h2>
                <p className="sim-category-subtitle">{cat.subtitle}</p>
              </div>
              <div className="cards-grid">
                {cat.items.map((s) => (
                  <SubjectCard
                    key={`${cat.key}-${s.id}`}
                    label={s.title.toUpperCase()}
                    color={COLOR}
                    to={`/simulazioni-egi/${cat.key}/${s.id}`}
                  />
                ))}
              </div>
            </section>
          )
        ))}
        {filteredCategories.every(c => c.items.length === 0) && (
          <div className="empty-state">Nessuna simulazione trovata</div>
        )}
      </main>
    </div>
  );
}
