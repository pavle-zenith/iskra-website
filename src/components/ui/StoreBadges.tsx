interface StoreBadgesProps {
  /** show the small "Uskoro" pill above each badge */
  showSoon?: boolean;
  className?: string;
  small?: boolean;
}

export default function StoreBadges({ showSoon = false, className, small = false }: StoreBadgesProps) {
  return (
    <div className={className ?? 'stores'}>
      <span className="store" style={small ? { height: 44 } : undefined}>
        {showSoon && <span className="soon">Uskoro</span>}
        <svg width={small ? 18 : 22} height={small ? 18 : 22} viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
          <path d="M16.5 1.6c.1 1-.3 2-1 2.8-.7.8-1.8 1.4-2.8 1.3-.1-1 .4-2 1-2.7.8-.8 1.9-1.4 2.8-1.4zM19.9 17c-.5 1.2-.8 1.7-1.5 2.8-1 1.5-2.3 3.3-4 3.3-1.5 0-1.9-1-3.9-1-2 0-2.4 1-3.9 1-1.7 0-3-1.7-3.9-3.1C-.1 16.7-.6 11 1.7 8c1.1-1.5 2.7-2.4 4.3-2.4 1.6 0 2.7 1 4 1 1.3 0 2-1 4-1 1.4 0 2.9.8 3.9 2.1-3.4 1.9-2.9 6.8 1.9 9.3z" />
        </svg>
        <span>
          <small>Preuzmi na</small>
          <b>App Store</b>
        </span>
      </span>
      <span className="store" style={small ? { height: 44 } : undefined}>
        {showSoon && <span className="soon">Uskoro</span>}
        <svg width={small ? 16 : 20} height={small ? 16 : 20} viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
          <path d="M3 2.3 13.8 12 3 21.7c-.3-.2-.5-.6-.5-1.1V3.4c0-.5.2-.9.5-1.1zM15.2 13.4l2.6 2.4-3.3 1.9-2.2-2.4 2.9-1.9zM18.9 7.9l2.6 1.5c.7.4.7 1.4 0 1.8l-2.6 1.5-2.5-2.4 2.5-2.4zM14.5 6.3l3.3 1.9-2.6 2.4-2.9-1.9 2.2-2.4z" />
        </svg>
        <span>
          <small>Uskoro na</small>
          <b>Google Play</b>
        </span>
      </span>
    </div>
  );
}
