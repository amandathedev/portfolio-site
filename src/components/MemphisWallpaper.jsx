import { useMemo } from 'react';

function seededRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

const COLORS = {
  pink: '#ff9ab2',
  green: '#4ade80',
  yellow: '#fff176',
  hotPink: '#ff69b4',
  mint: '#00e5a0',
  peach: '#ffb385',
};

const MemphisWallpaper = ({ seed = 42 }) => {
  const shapes = useMemo(() => {
    const rand = seededRandom(seed);
    const items = [];
    const W = 1920;
    const H = 1080;

    // Confetti sprinkles
    for (let i = 0; i < 120; i++) {
      const x = rand() * W;
      const y = rand() * H;
      const angle = rand() * 360;
      const len = 10 + rand() * 8;
      items.push(
        <rect
          key={`s${i}`}
          x={x}
          y={y}
          width="3.5"
          height={len}
          rx="1.75"
          fill="rgba(255,255,255,0.5)"
          transform={`rotate(${angle} ${x + 1.75} ${y + len / 2})`}
        />
      );
    }

    // Small dots
    for (let i = 0; i < 60; i++) {
      items.push(
        <circle
          key={`d${i}`}
          cx={rand() * W}
          cy={rand() * H}
          r={1.5 + rand() * 1.5}
          fill="rgba(255,255,255,0.35)"
        />
      );
    }

    const colorKeys = Object.keys(COLORS);

    // Outlined circles
    for (let i = 0; i < 8; i++) {
      const color = COLORS[colorKeys[Math.floor(rand() * colorKeys.length)]];
      items.push(
        <circle
          key={`c${i}`}
          cx={rand() * W}
          cy={rand() * H}
          r={10 + rand() * 8}
          fill="none"
          stroke={color}
          strokeWidth="2.5"
        />
      );
    }

    // Spiral circles (double ring)
    for (let i = 0; i < 5; i++) {
      const cx = rand() * W;
      const cy = rand() * H;
      const color = COLORS[colorKeys[Math.floor(rand() * colorKeys.length)]];
      items.push(
        <g key={`sp${i}`}>
          <circle cx={cx} cy={cy} r={14} fill="none" stroke={color} strokeWidth="2.5" />
          <circle cx={cx} cy={cy} r={8} fill="none" stroke={color} strokeWidth="2" />
          <circle cx={cx} cy={cy} r={3} fill={color} />
        </g>
      );
    }

    // Triangles
    for (let i = 0; i < 8; i++) {
      const cx = rand() * W;
      const cy = rand() * H;
      const size = 12 + rand() * 10;
      const color = COLORS[colorKeys[Math.floor(rand() * colorKeys.length)]];
      const angle = rand() * 360;
      const points = `${cx},${cy - size} ${cx + size * 0.87},${cy + size * 0.5} ${cx - size * 0.87},${cy + size * 0.5}`;
      items.push(
        <polygon
          key={`t${i}`}
          points={points}
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeLinejoin="round"
          transform={`rotate(${angle} ${cx} ${cy})`}
        />
      );
    }

    // Zigzag lines
    for (let i = 0; i < 6; i++) {
      const sx = rand() * W;
      const sy = rand() * H;
      const color = COLORS[colorKeys[Math.floor(rand() * colorKeys.length)]];
      const segs = 3 + Math.floor(rand() * 3);
      let pts = `${sx},${sy}`;
      for (let j = 1; j <= segs; j++) {
        const direction = j % 2 === 0 ? 1 : -1;
        pts += ` ${sx + j * 12},${sy + direction * 12}`;
      }
      const angle = rand() * 360;
      items.push(
        <polyline
          key={`z${i}`}
          points={pts}
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform={`rotate(${angle} ${sx} ${sy})`}
        />
      );
    }

    // 3D Cubes
    for (let i = 0; i < 6; i++) {
      const x = rand() * W;
      const y = rand() * H;
      const s = 12 + rand() * 6;
      const colorIdx = Math.floor(rand() * colorKeys.length);
      const base = COLORS[colorKeys[colorIdx]];
      items.push(
        <g key={`cube${i}`} transform={`translate(${x},${y})`}>
          <rect x="0" y={s * 0.3} width={s} height={s} fill={base} stroke="#333" strokeWidth="1.2" />
          <polygon
            points={`0,${s * 0.3} ${s * 0.35},0 ${s * 1.35},0 ${s},${s * 0.3}`}
            fill={base}
            stroke="#333"
            strokeWidth="1.2"
            opacity="0.75"
          />
          <polygon
            points={`${s},${s * 0.3} ${s * 1.35},0 ${s * 1.35},${s} ${s},${s * 1.3}`}
            fill={base}
            stroke="#333"
            strokeWidth="1.2"
            opacity="0.55"
          />
        </g>
      );
    }

    // Filled circles (small accents)
    for (let i = 0; i < 10; i++) {
      const color = COLORS[colorKeys[Math.floor(rand() * colorKeys.length)]];
      items.push(
        <circle
          key={`fc${i}`}
          cx={rand() * W}
          cy={rand() * H}
          r={5 + rand() * 4}
          fill={color}
          opacity="0.8"
        />
      );
    }

    return items;
  }, [seed]);

  return (
    <svg
      className="memphis-wallpaper"
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect fill="#5ec6c6" width="1920" height="1080" />
      {shapes}
    </svg>
  );
};

export default MemphisWallpaper;
