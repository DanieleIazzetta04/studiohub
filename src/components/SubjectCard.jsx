import { useNavigate } from 'react-router-dom';

export default function SubjectCard({ label, color, to, disabled = false, onClick }) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (disabled) return;
    if (onClick) {
      onClick();
    } else if (to) {
      navigate(to);
    }
  };

  return (
    <div
      className={`subject-card${disabled ? ' is-disabled' : ''}`}
      style={{ '--card-color': color }}
      onClick={handleClick}
      role="button"
      tabIndex={disabled ? -1 : 0}
      onKeyDown={(e) => { if ((e.key === 'Enter' || e.key === ' ') && !disabled) handleClick(); }}
      aria-disabled={disabled}
    >
      <span className="subject-card-label">{label}</span>
    </div>
  );
}
