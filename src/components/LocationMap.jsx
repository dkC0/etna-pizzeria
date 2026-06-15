export default function LocationMap({ dark = false }) {
  return (
    <div
      className={`relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-sm ${
        dark ? 'border border-dusk-line bg-dusk-2' : 'edit-frame'
      }`}
    >
      <svg
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
        role="img"
        aria-label="Mapa okolicy Rynku w Tarnowie — pinezka oznacza lokalizację Etny"
      >
        <rect width="800" height="600" fill={dark ? '#201B16' : '#F3E9D8'} />
        {/* streets */}
        <rect x="0" y="280" width="800" height="40" fill={dark ? '#16130F' : '#E3D4BC'} />
        <rect x="380" y="0" width="40" height="600" fill={dark ? '#16130F' : '#E3D4BC'} />
        {/* blocks */}
        <g fill={dark ? '#2A241D' : '#EFE3CE'}>
          <rect x="40" y="60" width="280" height="180" rx="4" />
          <rect x="460" y="60" width="300" height="180" rx="4" />
          <rect x="40" y="360" width="280" height="190" rx="4" />
          <rect x="460" y="360" width="300" height="190" rx="4" />
        </g>
        {/* trees */}
        <g fill={dark ? '#5E6F4C' : '#9DA876'} opacity={dark ? '0.6' : '0.7'}>
          <circle cx="120" cy="295" r="14" />
          <circle cx="220" cy="295" r="14" />
          <circle cx="560" cy="295" r="14" />
          <circle cx="660" cy="295" r="14" />
        </g>
      </svg>
      <div className="absolute" style={{ left: '50%', top: '47%', transform: 'translate(-50%, -100%)' }}>
        <span
          className={`block w-4 h-4 rounded-full ring-4 ${dark ? 'bg-gold ring-gold/25' : 'bg-fig ring-fig/25'}`}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
