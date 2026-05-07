import { useNavigate } from 'react-router-dom';

function ArrowIcon({ color = '#D9D9D9' }) {
  return (
    <svg viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 2 L2 12 L12 22" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
      <line x1="11" y1="11" x2="14.5" y2="14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function TopBar({
  title,
  color = '#7DB85B',
  weight = 700,
  showSearch = false,
  searchValue = '',
  onSearchChange,
  showBack = true,
  searchPlaceholder = 'Cerca',
}) {
  const navigate = useNavigate();
  const canGoBack = showBack && window.history.length > 1;

  return (
    <header className="topbar">
      <div className="topbar-row">
        {showBack && (
          <button
            className="topbar-back"
            onClick={() => canGoBack ? navigate(-1) : null}
            disabled={!canGoBack}
            aria-label="Indietro"
          >
            <ArrowIcon color="#D9D9D9" />
          </button>
        )}
        <h1
          className={`topbar-title${weight === 600 ? ' weight-600' : ''}`}
          style={{ color, fontWeight: weight }}
        >
          {title}
        </h1>
      </div>
      {showSearch && (
        <div className="searchbar">
          <SearchIcon />
          <input
            type="text"
            placeholder={searchPlaceholder}
            value={searchValue}
            onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
          />
        </div>
      )}
    </header>
  );
}
