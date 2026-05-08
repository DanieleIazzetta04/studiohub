import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function MultipleChoiceQuestion({ question, options, correctIndices, explanation, weeks, index, color }) {
  const [selected, setSelected] = useState([]);
  const [verified, setVerified] = useState(false);

  const toggle = (i) => {
    if (verified) return;
    setSelected(s => s.includes(i) ? s.filter(x => x !== i) : [...s, i]);
  };

  const isCorrect = () => {
    const sortedSel = [...selected].sort();
    const sortedCorrect = [...correctIndices].sort();
    return sortedSel.length === sortedCorrect.length && sortedSel.every((v, i) => v === sortedCorrect[i]);
  };

  const optionStatus = (i) => {
    if (!verified) return selected.includes(i) ? 'selected' : '';
    const isUserSelected = selected.includes(i);
    const isCorrectOption = correctIndices.includes(i);
    if (isCorrectOption && isUserSelected) return 'correct-selected';
    if (isCorrectOption && !isUserSelected) return 'correct-missed';
    if (!isCorrectOption && isUserSelected) return 'wrong';
    return '';
  };

  return (
    <div className="quiz-question">
      <div className="quiz-question-header">
        <span className="quiz-q-num" style={{ background: color }}>Q{index + 1}</span>
        <span className="quiz-q-text">{question}</span>
        <span className="quiz-q-meta">
          {weeks && weeks.length > 0 && <span className="quiz-week-tag">W{weeks.join('/')}</span>}
        </span>
      </div>
      <div className="quiz-options">
        {options.map((opt, i) => (
          <button
            key={i}
            className={`quiz-option ${optionStatus(i)}`}
            onClick={() => toggle(i)}
            disabled={verified}
            type="button"
          >
            <span className="quiz-option-marker">
              {verified
                ? (correctIndices.includes(i) ? '✓' : (selected.includes(i) ? '✗' : ''))
                : (selected.includes(i) ? '●' : '○')
              }
            </span>
            <span className="quiz-option-text">{opt}</span>
          </button>
        ))}
      </div>
      {!verified && selected.length > 0 && (
        <button className="quiz-verify-btn" style={{ background: color }} onClick={() => setVerified(true)}>
          Verifica
        </button>
      )}
      {verified && (
        <div className={`quiz-feedback ${isCorrect() ? 'is-correct' : 'is-wrong'}`}>
          <div className="quiz-feedback-header">
            {isCorrect() ? '✅ Corretto!' : '❌ Risposta errata'}
          </div>
          <div className="quiz-feedback-body">{explanation}</div>
        </div>
      )}
    </div>
  );
}

function OpenQuestion({ question, soluzione, points, weeks, color, index, type = 'applicata' }) {
  const [answer, setAnswer] = useState('');
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="quiz-question quiz-question-open">
      <div className="quiz-question-header">
        <span className="quiz-q-num" style={{ background: color }}>{type === 'applicata' ? 'A' : 'E'}{index + 1}</span>
        <span className="quiz-q-text">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{question}</ReactMarkdown>
        </span>
        <span className="quiz-q-meta">
          <span className="quiz-points">{points} pt</span>
          {weeks && weeks.length > 0 && <span className="quiz-week-tag">W{weeks.join('/')}</span>}
        </span>
      </div>
      <textarea
        className="quiz-answer-area"
        placeholder="Scrivi qui la tua risposta..."
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        rows={6}
      />
      <button
        className="quiz-show-sol-btn"
        style={{ background: showSolution ? '#9ca3af' : color }}
        onClick={() => setShowSolution(s => !s)}
      >
        {showSolution ? 'Nascondi soluzione' : 'Mostra soluzione'}
      </button>
      {showSolution && (
        <div className="quiz-solution">
          <div className="quiz-solution-header" style={{ color }}>💡 Soluzione esempio</div>
          <div className="quiz-solution-body">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{soluzione}</ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Quiz({ simulazione, color = '#E32B4A' }) {
  const totalMcPoints = simulazione.multipleChoice.length * 1.5;
  const totalApplicataPoints = simulazione.teoriaApplicata.reduce((s, q) => s + (q.points || 3), 0);
  const totalEserciziPoints = simulazione.esercizi.reduce((s, q) => s + (q.points || 4), 0);
  const totalPoints = totalMcPoints + totalApplicataPoints + totalEserciziPoints;

  return (
    <div className="quiz-container">
      <div className="quiz-meta-bar" style={{ borderColor: color }}>
        <div className="quiz-meta-item"><strong>{simulazione.duration} min</strong><span>durata</span></div>
        <div className="quiz-meta-item"><strong>{totalPoints.toFixed(0)} pt</strong><span>punteggio massimo</span></div>
        <div className="quiz-meta-item"><strong>{simulazione.multipleChoice.length}</strong><span>domande multiple</span></div>
        <div className="quiz-meta-item"><strong>{simulazione.teoriaApplicata.length}</strong><span>teoria applicata</span></div>
        <div className="quiz-meta-item"><strong>{simulazione.esercizi.length}</strong><span>esercizi</span></div>
      </div>

      {/* Sezione 1: Multiple choice */}
      <section className="quiz-section">
        <h2 className="quiz-section-title" style={{ color }}>
          A · Domande a risposta multipla <span className="quiz-section-pts">({simulazione.multipleChoice.length} × 1,5 pt = {totalMcPoints.toFixed(1)} pt)</span>
        </h2>
        <p className="quiz-section-hint">
          Seleziona tutte le risposte che ritieni corrette (possono essere più di una). Premi "Verifica" per vedere la soluzione.
        </p>
        {simulazione.multipleChoice.map((q, i) => (
          <MultipleChoiceQuestion key={i} {...q} index={i} color={color} />
        ))}
      </section>

      {/* Sezione 2: Teoria applicata */}
      <section className="quiz-section">
        <h2 className="quiz-section-title" style={{ color }}>
          B · Domande di teoria applicata <span className="quiz-section-pts">({totalApplicataPoints} pt totali)</span>
        </h2>
        <p className="quiz-section-hint">
          Risposta aperta (max ~10 righe). Scrivi nella casella di testo, poi confronta con la soluzione.
        </p>
        {simulazione.teoriaApplicata.map((q, i) => (
          <OpenQuestion key={i} {...q} points={q.points || 3} index={i} color={color} type="applicata" />
        ))}
      </section>

      {/* Sezione 3: Esercizi */}
      <section className="quiz-section">
        <h2 className="quiz-section-title" style={{ color }}>
          C · Esercizi / Teoria applicata <span className="quiz-section-pts">({totalEserciziPoints} pt totali)</span>
        </h2>
        <p className="quiz-section-hint">
          Esercizi calcolatori e di applicazione strategica. Mostra la soluzione dopo aver tentato.
        </p>
        {simulazione.esercizi.map((q, i) => (
          <OpenQuestion key={i} {...q} points={q.points || 4} index={i} color={color} type="esercizio" />
        ))}
      </section>
    </div>
  );
}
