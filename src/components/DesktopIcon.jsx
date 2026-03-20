import { useState, useEffect, useRef, useCallback } from 'react';

const ICON_SVGS = {
  folder: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      {/* Tab */}
      <rect x="6" y="12" width="14" height="5" rx="1" fill="#AEB4C8" stroke="#8084A0" strokeWidth="1"/>
      {/* Back panel */}
      <rect x="5" y="16" width="38" height="26" rx="1" fill="#AEB4C8" stroke="#8084A0" strokeWidth="1.2"/>
      {/* Front panel - slightly offset for depth */}
      <rect x="5" y="20" width="38" height="22" rx="1" fill="#BCC2D6" stroke="#8084A0" strokeWidth="1.2"/>
      {/* Highlight line */}
      <line x1="7" y1="22" x2="41" y2="22" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
    </svg>
  ),
  document: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M10 4H30L38 12V44H10V4Z" fill="#FAFAFA" stroke="#888" strokeWidth="1.5"/>
      <path d="M30 4L30 12L38 12" fill="#E0E0E0" stroke="#888" strokeWidth="1.5" strokeLinejoin="round"/>
      <line x1="16" y1="20" x2="32" y2="20" stroke="#CCC" strokeWidth="1.5"/>
      <line x1="16" y1="26" x2="32" y2="26" stroke="#CCC" strokeWidth="1.5"/>
      <line x1="16" y1="32" x2="26" y2="32" stroke="#CCC" strokeWidth="1.5"/>
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <rect x="4" y="10" width="40" height="28" rx="2" fill="#FAFAFA" stroke="#888" strokeWidth="1.5"/>
      <polyline points="4,11 24,28 44,11" fill="none" stroke="#888" strokeWidth="1.5" strokeLinejoin="round"/>
      <line x1="4" y1="37" x2="18" y2="24" stroke="#CCC" strokeWidth="1"/>
      <line x1="44" y1="37" x2="30" y2="24" stroke="#CCC" strokeWidth="1"/>
    </svg>
  ),
  trash: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      {/* Can body - short wide cylinder with vertical ridges */}
      <path d="M10 18L12 42C12 44 17 46 24 46C31 46 36 44 36 42L38 18Z" fill="#CCCCCC" stroke="#777" strokeWidth="1.2"/>
      {/* Vertical ridges */}
      <line x1="15" y1="18" x2="14" y2="44" stroke="#b0b0b0" strokeWidth="0.8"/>
      <line x1="19" y1="18" x2="18.5" y2="45" stroke="#b0b0b0" strokeWidth="0.8"/>
      <line x1="23" y1="18" x2="23" y2="45.5" stroke="#b0b0b0" strokeWidth="0.8"/>
      <line x1="27" y1="18" x2="27.5" y2="45" stroke="#b0b0b0" strokeWidth="0.8"/>
      <line x1="31" y1="18" x2="31.5" y2="45" stroke="#b0b0b0" strokeWidth="0.8"/>
      <line x1="35" y1="18" x2="35.5" y2="44" stroke="#b0b0b0" strokeWidth="0.8"/>
      {/* Right side shading */}
      <path d="M30 18L32 42C32 43 34 44 36 42L38 18Z" fill="rgba(0,0,0,0.08)"/>
      {/* Rim */}
      <ellipse cx="24" cy="18" rx="14" ry="4" fill="#D8D8D8" stroke="#777" strokeWidth="1.2"/>
      {/* Domed lid */}
      <ellipse cx="24" cy="14" rx="12" ry="3.5" fill="#DEDEDE" stroke="#777" strokeWidth="1.2"/>
      <path d="M12 14C12 14 14 8 24 8C34 8 36 14 36 14" fill="#E8E8E8" stroke="#777" strokeWidth="1.2"/>
      {/* Lid handle */}
      <rect x="20" y="5" width="8" height="3" rx="1.5" fill="#CCCCCC" stroke="#777" strokeWidth="1"/>
    </svg>
  ),
  chat: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M8 8H40V32H22L14 40V32H8V8Z" fill="#FAFAFA" stroke="#888" strokeWidth="1.5" strokeLinejoin="round"/>
      <circle cx="18" cy="20" r="2.5" fill="#999"/>
      <circle cx="24" cy="20" r="2.5" fill="#999"/>
      <circle cx="30" cy="20" r="2.5" fill="#999"/>
    </svg>
  ),
  stickies: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <rect x="6" y="6" width="28" height="28" rx="1" fill="#FFFC79" stroke="#D4C84E" strokeWidth="1.5"/>
      <rect x="10" y="2" width="28" height="28" rx="1" fill="#FF9CBF" stroke="#D4738A" strokeWidth="1.5"/>
      <rect x="14" y="8" width="28" height="28" rx="1" fill="#92ED8D" stroke="#6ABF66" strokeWidth="1.5"/>
      <line x1="18" y1="16" x2="36" y2="16" stroke="#5A9A56" strokeWidth="1"/>
      <line x1="18" y1="20" x2="34" y2="20" stroke="#5A9A56" strokeWidth="1"/>
      <line x1="18" y1="24" x2="30" y2="24" stroke="#5A9A56" strokeWidth="1"/>
    </svg>
  ),
  simpletext: (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M8 4H34L40 10V44H8V4Z" fill="#FAFAFA" stroke="#888" strokeWidth="1.5"/>
      <path d="M34 4L34 10L40 10" fill="#E0E0E0" stroke="#888" strokeWidth="1.5" strokeLinejoin="round"/>
      <text x="24" y="30" textAnchor="middle" fontSize="16" fontFamily="Geneva,Verdana,sans-serif" fontWeight="bold" fill="#555">A</text>
    </svg>
  ),
};

const DesktopIcon = ({ id, label, type, selected, onClick, onDoubleClick, position, onMove, viewMode = 'icons' }) => {
  const [dragging, setDragging] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const onMoveRef = useRef(onMove);
  const hasDragged = useRef(false);
  onMoveRef.current = onMove;

  const handleMouseDown = useCallback((e) => {
    if (e.button !== 0) return;
    e.preventDefault();
    hasDragged.current = false;
    dragOffset.current = {
      x: e.clientX - (position?.x || 0),
      y: e.clientY - (position?.y || 0),
    };
    setDragging(true);
  }, [position]);

  useEffect(() => {
    if (!dragging) return;

    const handleMouseMove = (e) => {
      hasDragged.current = true;
      if (onMoveRef.current) {
        onMoveRef.current(id, {
          x: e.clientX - dragOffset.current.x,
          y: e.clientY - dragOffset.current.y,
        });
      }
    };

    const handleMouseUp = () => setDragging(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging, id]);

  const isTouchDevice = 'ontouchstart' in window;
  const lastTap = useRef(0);

  const handleClick = (e) => {
    if (hasDragged.current) return;
    if (onClick) onClick(e);
  };

  const handleDoubleClick = (e) => {
    if (hasDragged.current) return;
    if (onDoubleClick) onDoubleClick(e);
  };

  const handleTouchEnd = (e) => {
    if (hasDragged.current) return;
    const now = Date.now();
    // Single tap on touch opens directly (no double-tap needed)
    if (now - lastTap.current < 300) {
      // Second tap — already opened on first
      return;
    }
    lastTap.current = now;
    if (onClick) onClick(e);
    if (onDoubleClick) onDoubleClick(e);
  };

  const style = position
    ? { position: 'absolute', left: position.x, top: position.y }
    : {};

  return (
    <div
      className={`desktop-icon${selected ? ' selected' : ''}${dragging ? ' dragging' : ''}${viewMode === 'list' ? ' list-mode' : ''}`}
      style={style}
      role="button"
      tabIndex={0}
      aria-label={label}
      onMouseDown={!isTouchDevice ? handleMouseDown : undefined}
      onClick={!isTouchDevice ? handleClick : undefined}
      onDoubleClick={!isTouchDevice ? handleDoubleClick : undefined}
      onTouchEnd={isTouchDevice ? handleTouchEnd : undefined}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (onDoubleClick) onDoubleClick(e);
        }
      }}
    >
      <div className="desktop-icon-graphic">
        {ICON_SVGS[type]}
      </div>
      <span className="desktop-icon-label">{label}</span>
    </div>
  );
};

export default DesktopIcon;
