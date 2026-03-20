import { useState, useCallback, useEffect } from 'react';
import MenuBar from './components/MenuBar.jsx';
import DesktopIcon from './components/DesktopIcon.jsx';
import MacWindow from './components/MacWindow.jsx';
import MemphisWallpaper from './components/MemphisWallpaper.jsx';
import NetscapeWindow from './components/NetscapeWindow.jsx';
import NetscapeContext from './components/NetscapeContext.jsx';
import IpodView from './components/IpodView.jsx';
import AboutContent from './components/windows/AboutContent.jsx';
import PortfolioContent from './components/windows/PortfolioContent.jsx';
import BlogContent from './components/windows/BlogContent.jsx';
import ContactContent from './components/windows/ContactContent.jsx';
import ChatContent from './components/windows/ChatContent.jsx';
import TrashContent from './components/windows/TrashContent.jsx';
import SimpleTextContent from './components/windows/SimpleTextContent.jsx';
import CalculatorContent from './components/windows/CalculatorContent.jsx';
import StickyNote from './components/StickyNote.jsx';
import macLogo from './mac-logo.svg';
import finderWallpaper from './wallpaper-finder.webp';
import './App.css';
import './ipod.css';

const WINDOW_CONFIG = {
  about: { title: 'About Me', width: 540, height: 520, x: 60, y: 40 },
  portfolio: { title: 'Portfolio', width: 520, height: 440, x: 100, y: 70 },
  blog: { title: 'Blog', width: 480, height: 420, x: 140, y: 55 },
  contact: { title: 'Contact', width: 380, height: 260, x: 180, y: 90 },
  chat: { title: "Amanda's Chatbot", width: 380, height: 500, x: 200, y: 40 },
  trash: { title: 'Trash', width: 300, height: 260, x: 220, y: 120 },
  calculator: { title: 'Calculator', width: 175, height: 230, x: 160, y: 80 },
  simpletext: { title: 'Untitled — SimpleText', width: 420, height: 340, x: 80, y: 60 },
};

const DESKTOP_ICONS = [
  { id: 'about', label: 'About Me', type: 'folder' },
  { id: 'portfolio', label: 'Portfolio', type: 'folder' },
  { id: 'blog', label: 'Blog', type: 'document' },
  { id: 'contact', label: 'Contact', type: 'mail' },
  { id: 'resume', label: 'Resume', type: 'document' },
  { id: 'chat', label: 'Chat', type: 'chat' },
  { id: 'stickies', label: 'Stickies', type: 'stickies' },
];

const ICON_START_X = window.innerWidth - 90;
const ICON_START_Y = 36;

function getDefaultIconPositions() {
  const trashY = window.innerHeight - 90;
  const availableHeight = trashY - ICON_START_Y - 80;
  const spacing = Math.min(78, availableHeight / (DESKTOP_ICONS.length - 1));
  const positions = {};
  DESKTOP_ICONS.forEach((icon, i) => {
    positions[icon.id] = {
      x: ICON_START_X,
      y: ICON_START_Y + i * spacing,
    };
  });
  positions.trash = {
    x: window.innerWidth - 90,
    y: trashY,
  };
  return positions;
}

let netscapeCounter = 0;

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);
  return isMobile;
}

function DesktopApp() {
  const [windows, setWindows] = useState({});
  const [zCounter, setZCounter] = useState(10);
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [iconPositions, setIconPositions] = useState(getDefaultIconPositions);
  const [wallpaperIndex, setWallpaperIndex] = useState(0);
  const [partyMode, setPartyMode] = useState(false);
  const [viewMode, setViewMode] = useState('icons');
  const [shutDown, setShutDown] = useState(false);
  const [booting, setBooting] = useState(false);
  const STICKY_COLORS = [
    { name: 'yellow', bg: '#FFFC79', border: '#D4C84E', header: '#EDE86A' },
    { name: 'pink', bg: '#FF9CBF', border: '#D4738A', header: '#F08DAD' },
    { name: 'blue', bg: '#7EC8FC', border: '#5A9AD4', header: '#6EB8EC' },
    { name: 'green', bg: '#92ED8D', border: '#6ABF66', header: '#80D97C' },
    { name: 'purple', bg: '#C9A4F7', border: '#9D79C9', header: '#B994E7' },
  ];

  const INITIAL_STICKY = {
    id: 'sticky-0',
    text: "Hi! Welcome to my portfolio 👋\n\nDouble-click the icons on the right to explore.\n\nTry the menu bar too!",
    color: { name: 'yellow', bg: '#FFFC79', border: '#D4C84E', header: '#EDE86A' },
    position: { x: 40, y: 80 },
    size: { width: 230, height: 200 },
    zIndex: 6,
  };

  const [stickies, setStickies] = useState([INITIAL_STICKY]);
  const [stickyCounter, setStickyCounter] = useState(1);

  const addSticky = useCallback((text = '') => {
    setStickyCounter((c) => {
      const colorIdx = c % STICKY_COLORS.length;
      const offset = (c % 5) * 25;
      setZCounter((z) => {
        setStickies((prev) => [
          ...prev,
          {
            id: `sticky-${c}`,
            text,
            color: STICKY_COLORS[colorIdx],
            position: { x: 60 + offset, y: 80 + offset },
            size: { width: 220, height: 180 },
            zIndex: z,
          },
        ]);
        return z + 1;
      });
      return c + 1;
    });
  }, []);

  const moveSticky = useCallback((id, position) => {
    setStickies((prev) => prev.map((s) => s.id === id ? { ...s, position } : s));
  }, []);

  const resizeSticky = useCallback((id, size) => {
    setStickies((prev) => prev.map((s) => s.id === id ? { ...s, size } : s));
  }, []);

  const closeSticky = useCallback((id) => {
    setStickies((prev) => prev.filter((s) => s.id !== id));
  }, []);

  const focusSticky = useCallback((id) => {
    setZCounter((c) => {
      setStickies((prev) => prev.map((s) => s.id === id ? { ...s, zIndex: c } : s));
      return c + 1;
    });
  }, []);

  const updateStickyText = useCallback((id, text) => {
    setStickies((prev) => prev.map((s) => s.id === id ? { ...s, text } : s));
  }, []);

  const moveIcon = useCallback((id, position) => {
    setIconPositions((prev) => ({ ...prev, [id]: position }));
  }, []);

  const openNetscape = useCallback((url, options = {}) => {
    const id = `netscape-${netscapeCounter++}`;
    const offset = (netscapeCounter % 5) * 30;
    setZCounter((c) => {
      setWindows((prev) => ({
        ...prev,
        [id]: {
          title: `Netscape: ${url.replace(/^https?:\/\//, '').split('/')[0]}`,
          width: Math.min(900, window.innerWidth - 120),
          height: Math.min(560, window.innerHeight - 60),
          position: { x: 30 + offset, y: 26 + offset },
          zIndex: c,
          netscapeUrl: url,
          netscapeImageUrl: options.imageUrl || null,
        },
      }));
      return c + 1;
    });
  }, []);

  const openWindow = useCallback((id) => {
    if (id === 'stickies') {
      addSticky("Welcome to my portfolio!\nDouble-click the icons to explore!");
      return;
    }
    if (id === 'resume') {
      window.open(
        '/resume.pdf',
        '_blank'
      );
      return;
    }
    const config = WINDOW_CONFIG[id];
    if (!config) return;

    setZCounter((c) => {
      setWindows((prev) => ({
        ...prev,
        [id]: {
          ...config,
          position: prev[id]?.position || { x: config.x, y: config.y },
          zIndex: c,
        },
      }));
      return c + 1;
    });
  }, []);

  const closeWindow = useCallback((id) => {
    setWindows((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  }, []);

  const focusWindow = useCallback((id) => {
    setZCounter((c) => {
      setWindows((prev) => ({
        ...prev,
        [id]: { ...prev[id], zIndex: c },
      }));
      return c + 1;
    });
  }, []);

  const moveWindow = useCallback((id, position) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], position },
    }));
  }, []);

  const resizeWindow = useCallback((id, size) => {
    setWindows((prev) => ({
      ...prev,
      [id]: { ...prev[id], width: size.width, height: size.height },
    }));
  }, []);

  const WINDOW_CONTENT = {
    about: <AboutContent />,
    portfolio: <PortfolioContent />,
    blog: <BlogContent />,
    contact: <ContactContent />,
    chat: <ChatContent />,
    trash: <TrashContent />,
    calculator: <CalculatorContent />,
    simpletext: <SimpleTextContent />,
  };

  const handleMenuAction = useCallback((action) => {
    switch (action) {
      case 'about-portfolio':
        openWindow('about');
        break;
      case 'github':
        openNetscape('https://github.com/amandathedev');
        break;
      case 'medium':
        openNetscape('https://medium.com/@amandathedev');
        break;
      case 'resume':
        window.open(
          '/resume.pdf',
          '_blank'
        );
        break;
      case 'open-about':
        openWindow('about');
        break;
      case 'open-portfolio':
        openWindow('portfolio');
        break;
      case 'open-blog':
        openWindow('blog');
        break;
      case 'open-contact':
        openWindow('contact');
        break;
      case 'open-simpletext':
        openWindow('simpletext');
        break;
      case 'open-calculator':
        openWindow('calculator');
        break;
      case 'new-window':
        openWindow('portfolio');
        break;
      case 'new-sticky':
        addSticky('');
        break;
      case 'close-window': {
        const openIds = Object.keys(windows);
        if (openIds.length > 0) {
          let topId = openIds[0];
          let topZ = windows[topId].zIndex;
          openIds.forEach((id) => {
            if (windows[id].zIndex > topZ) {
              topId = id;
              topZ = windows[id].zIndex;
            }
          });
          closeWindow(topId);
        }
        break;
      }
      case 'copy-url':
        navigator.clipboard?.writeText(window.location.href);
        break;
      case 'view-icons':
        setViewMode('icons');
        break;
      case 'view-list':
        setViewMode('list');
        break;
      case 'clean-up':
        setIconPositions(getDefaultIconPositions());
        break;
      case 'party':
        setPartyMode((p) => !p);
        break;
      case 'shuffle':
        setWallpaperIndex((i) => (i + 1) % 2);
        break;
      case 'restart':
        setBooting(true);
        setTimeout(() => {
          setWindows({});
          setStickies([]);
          setStickyCounter(0);
          setIconPositions(getDefaultIconPositions());
          setPartyMode(false);
          setShutDown(false);
          setViewMode('icons');
          setWallpaperIndex(0);
          setBooting(false);
          netscapeCounter = 0;
        }, 4000);
        break;
      case 'shutdown':
        setShutDown(true);
        setTimeout(() => setShutDown(false), 3000);
        break;
      default:
        break;
    }
  }, [windows, openWindow, closeWindow, openNetscape, addSticky]);

  if (booting) {
    return (
      <div className="boot-screen">
        <div className="boot-dialog">
          <img className="boot-logo" src={macLogo} alt="Mac OS" />
          <div className="boot-status">Starting Up...</div>
          <div className="boot-progress-track">
            <div className="boot-progress-bar" />
          </div>
        </div>
      </div>
    );
  }

  if (shutDown) {
    return (
      <div className="shutdown-screen">
        <div className="shutdown-message">
          It is now safe to close this tab.
        </div>
      </div>
    );
  }

  return (
    <NetscapeContext.Provider value={openNetscape}>
      <div className={`desktop${partyMode ? ' party-mode' : ''}`} onClick={() => setSelectedIcon(null)}>
        {wallpaperIndex === 0 && <MemphisWallpaper seed={42} />}
        {wallpaperIndex === 1 && (
          <img className="static-wallpaper" src={finderWallpaper} alt="" />
        )}
        <MenuBar onMenuAction={handleMenuAction} viewMode={viewMode} />

        {DESKTOP_ICONS.map((icon) => (
          <DesktopIcon
            key={icon.id}
            {...icon}
            viewMode={viewMode}
            position={iconPositions[icon.id]}
            selected={selectedIcon === icon.id}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIcon(icon.id);
            }}
            onDoubleClick={() => openWindow(icon.id)}
            onMove={moveIcon}
          />
        ))}

        <DesktopIcon
          id="trash"
          label="Trash"
          type="trash"
          viewMode={viewMode}
          position={iconPositions.trash}
          selected={selectedIcon === 'trash'}
          onClick={(e) => {
            e.stopPropagation();
            setSelectedIcon('trash');
          }}
          onDoubleClick={() => openWindow('trash')}
          onMove={moveIcon}
        />

        {Object.entries(windows).map(([id, win]) => (
          <MacWindow
            key={id}
            title={win.title}
            position={win.position}
            zIndex={win.zIndex}
            width={win.width}
            height={win.height}
            onClose={() => closeWindow(id)}
            onFocus={() => focusWindow(id)}
            onMove={(pos) => moveWindow(id, pos)}
            onResize={(size) => resizeWindow(id, size)}
            noPadding={id === 'chat' || id === 'simpletext' || id === 'calculator' || !!win.netscapeUrl}
          >
            {win.netscapeUrl ? (
              <NetscapeWindow
                url={win.netscapeUrl}
                imageUrl={win.netscapeImageUrl}
                onNavigate={(newUrl) => {
                  setWindows((prev) => ({
                    ...prev,
                    [id]: {
                      ...prev[id],
                      netscapeUrl: newUrl,
                      title: `Netscape: ${newUrl.replace(/^https?:\/\//, '').split('/')[0]}`,
                    },
                  }));
                }}
              />
            ) : (
              WINDOW_CONTENT[id]
            )}
          </MacWindow>
        ))}

        {stickies.map((sticky) => (
          <StickyNote
            key={sticky.id}
            id={sticky.id}
            color={sticky.color}
            text={sticky.text}
            position={sticky.position}
            size={sticky.size}
            zIndex={sticky.zIndex}
            onMove={moveSticky}
            onResize={resizeSticky}
            onClose={closeSticky}
            onFocus={() => focusSticky(sticky.id)}
            onTextChange={updateStickyText}
          />
        ))}
      </div>
    </NetscapeContext.Provider>
  );
}

function App() {
  const isMobile = useIsMobile();
  return isMobile ? <IpodView /> : <DesktopApp />;
}

export default App;
