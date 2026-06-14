// Decorative SVG motifs that give Rajwada its hand-crafted palace signature.

export function OrnamentalDivider({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <span className="h-px w-12 md:w-24 bg-gradient-to-r from-transparent to-gold/60" />
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-gold flex-shrink-0">
        <path
          d="M14 1 L17 9 L25 9 L18.5 14 L21 22 L14 17 L7 22 L9.5 14 L3 9 L11 9 Z"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          opacity="0.8"
        />
        <circle cx="14" cy="14" r="2" fill="currentColor" opacity="0.9" />
      </svg>
      <span className="h-px w-12 md:w-24 bg-gradient-to-l from-transparent to-gold/60" />
    </div>
  )
}

export function JaliBand({ className = '' }) {
  return (
    <div className={`w-full overflow-hidden ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 800 40"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-10 text-gold/30"
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <g key={i} transform={`translate(${i * 40}, 0)`}>
            <path
              d="M20 2 L34 20 L20 38 L6 20 Z"
              stroke="currentColor"
              strokeWidth="0.75"
              fill="none"
            />
            <circle cx="20" cy="20" r="3" stroke="currentColor" strokeWidth="0.75" fill="none" />
          </g>
        ))}
      </svg>
    </div>
  )
}

// The Rajwada emblem — a stylised palace arch with a central sun, used as the
// brand's repeating "seal" across the hero, footer, and section markers.
export function RajwadaEmblem({ className = '', strokeWidth = 1 }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="58" stroke="currentColor" strokeWidth={strokeWidth} opacity="0.55" />
      <circle cx="60" cy="60" r="50" stroke="currentColor" strokeWidth={strokeWidth} opacity="0.35" />
      {/* Palace arch */}
      <path
        d="M35 85 V55 C35 40 45 30 60 30 C75 30 85 40 85 55 V85"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        fill="none"
        opacity="0.9"
      />
      <path
        d="M42 85 V58 C42 46 50 38 60 38 C70 38 78 46 78 58 V85"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        fill="none"
        opacity="0.6"
      />
      {/* Central sun / rays */}
      <circle cx="60" cy="58" r="6" stroke="currentColor" strokeWidth={strokeWidth} fill="none" />
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * Math.PI * 2) / 8
        const x1 = 60 + Math.cos(angle) * 10
        const y1 = 58 + Math.sin(angle) * 10
        const x2 = 60 + Math.cos(angle) * 14
        const y2 = 58 + Math.sin(angle) * 14
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            opacity="0.7"
          />
        )
      })}
      {/* base line */}
      <line x1="28" y1="85" x2="92" y2="85" stroke="currentColor" strokeWidth={strokeWidth} opacity="0.7" />
      <line x1="22" y1="92" x2="98" y2="92" stroke="currentColor" strokeWidth={strokeWidth} opacity="0.4" />
    </svg>
  )
}
