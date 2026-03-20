import { useState, useEffect, useRef } from 'react';

const MENUS = {
  apple: {
    label: null,
    items: [
      { label: 'About This Computer...', action: 'about-portfolio' },
      { type: 'separator' },
      { label: '📁  About Me', action: 'open-about' },
      { label: '📁  Portfolio', action: 'open-portfolio' },
      { label: '📄  Blog', action: 'open-blog' },
      { label: '✉️  Contact', action: 'open-contact' },
      { type: 'separator' },
      { label: '🧮  Calculator', action: 'open-calculator' },
      { label: '🧩  Jigsaw Puzzle', disabled: true },
      { label: '📝  Note Pad', action: 'open-simpletext' },
      { label: '📌  Stickies', action: 'new-sticky' },
      { type: 'separator' },
      { label: '📄  Download Resume', action: 'resume' },
    ],
  },
  File: {
    items: [
      { label: 'New Window', shortcut: '⌘N', action: 'new-window' },
      { label: 'New Sticky Note', action: 'new-sticky' },
      { label: 'Open About Me', shortcut: '⌘O', action: 'open-about' },
      { type: 'separator' },
      { label: 'Close Window', shortcut: '⌘W', action: 'close-window' },
      { type: 'separator' },
      { label: "You can't quit a website", disabled: true },
    ],
  },
  Edit: {
    items: [
      { label: 'Undo', shortcut: '⌘Z', disabled: true },
      { label: 'Redo', shortcut: '⌘⇧Z', disabled: true },
      { type: 'separator' },
      { label: 'Cut', shortcut: '⌘X', disabled: true },
      { label: 'Copy Portfolio URL', shortcut: '⌘C', action: 'copy-url' },
      { label: 'Paste', shortcut: '⌘V', disabled: true },
      { type: 'separator' },
      { label: 'Select All Icons', shortcut: '⌘A', disabled: true },
    ],
  },
  View: {
    items: [
      { label: 'as Icons', action: 'view-icons', viewMode: 'icons' },
      { label: 'as List', action: 'view-list', viewMode: 'list' },
      { type: 'separator' },
      { label: 'Clean Up Desktop', action: 'clean-up' },
      { type: 'separator' },
      { label: 'Party Mode 🎉', action: 'party' },
    ],
  },
  Special: {
    items: [
      { label: 'Shuffle Wallpaper', action: 'shuffle' },
      { type: 'separator' },
      { label: 'Restart', action: 'restart' },
    ],
  },
  Help: {
    items: [
      { label: 'Hint: Double-click the icons!' },
      { label: 'Hint: You can drag them too!' },
      { type: 'separator' },
      { label: 'Built with React + Vite' },
      { label: 'Designed by Amanda Treutler' },
    ],
  },
};

const MenuBar = ({ onMenuAction, viewMode = 'icons' }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const [time, setTime] = useState(new Date());
  const menuRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 30000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!openMenu) return;
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [openMenu]);

  const timeStr = time.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  const handleItemClick = (item) => {
    if (item.disabled) return;
    setOpenMenu(null);
    if (item.action && onMenuAction) {
      onMenuAction(item.action);
    }
  };

  const menuKeys = Object.keys(MENUS);

  return (
    <div className="menu-bar" ref={menuRef}>
      <div className="menu-bar-left">
        {menuKeys.map((key) => {
          const isApple = key === 'apple';
          return (
            <div key={key} className="menu-trigger-wrapper">
              <span
                className={`${isApple ? 'apple-menu' : 'menu-item'}${openMenu === key ? ' active' : ''}`}
                role="button"
                tabIndex={0}
                aria-haspopup="true"
                aria-expanded={openMenu === key}
                aria-label={isApple ? 'Apple menu' : undefined}
                onMouseDown={(e) => {
                  e.stopPropagation();
                  setOpenMenu(openMenu === key ? null : key);
                }}
                onMouseEnter={() => {
                  if (openMenu && openMenu !== key) setOpenMenu(key);
                }}
              >
                {isApple ? (
                  <i className="fab fa-apple" style={{ fontSize: '15px' }} aria-hidden="true"></i>
                ) : key}
              </span>
              {openMenu === key && (
                <div className="menu-dropdown" role="menu">
                  {MENUS[key].items.map((item, i) =>
                    item.type === 'separator' ? (
                      <div key={i} className="menu-separator" />
                    ) : (
                      <div
                        key={i}
                        className={`menu-dropdown-item${item.disabled ? ' disabled' : ''}`}
                        role="menuitem"
                        tabIndex={-1}
                        onClick={() => handleItemClick(item)}
                      >
                        <span className="menu-dropdown-check">
                          {item.viewMode === viewMode ? '✓' : ''}
                        </span>
                        <span className="menu-dropdown-label">{item.label}</span>
                        {item.shortcut && (
                          <span className="menu-dropdown-shortcut">{item.shortcut}</span>
                        )}
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div className="menu-bar-right">
        <span className="menu-clock">{timeStr}</span>
      </div>
    </div>
  );
};

export default MenuBar;
