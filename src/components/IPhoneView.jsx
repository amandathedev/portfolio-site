import { useState, useCallback, useRef } from 'react';
import amanda from '../amanda-profile.png';

const TECHS = [
  'JavaScript', 'React', 'React Native', 'TypeScript', 'Tailwind', 'Sass',
  'Ruby on Rails', 'NodeJS', 'GraphQL', 'PostgreSQL', 'Docker', 'AWS', 'Anthropic',
];

const PROJECTS = [
  {
    name: 'The Period Collective',
    desc: 'Nonprofit providing menstrual products to people in need in Chicago.',
    icon: '🌸',
    links: [
      { label: 'Live Site', url: 'https://theperiodcollective.org/' },
      { label: 'GitHub', url: 'https://github.com/amandathedev/period-collective' },
    ],
  },
  {
    name: 'Sequin',
    desc: 'The debit card that fights the Pink Tax. (Now defunct)',
    icon: '💳',
    links: [
      { label: 'Screenshot', url: '/sequin-screenshot.png' },
    ],
  },
  {
    name: 'Sample Size',
    desc: 'Chrome extension for quick analytics sampling.',
    icon: '📊',
    links: [
      { label: 'Chrome Store', url: 'https://chromewebstore.google.com/detail/sample-size/liibkodidconnkfecofhjbhkbdpmaick' },
      { label: 'GitHub', url: 'https://github.com/amandathedev/sample-size' },
    ],
  },
  {
    name: 'UnitSwitch',
    desc: 'Chrome extension for instant unit conversions.',
    icon: '🔄',
    links: [
      { label: 'Chrome Store', url: 'https://chrome.google.com/webstore/detail/unitswitch/nbpfgdhlmmlpkdeaegalkhbkceicckpp' },
      { label: 'GitHub', url: 'https://github.com/amandathedev/unit-switch' },
    ],
  },
];

const BLOG_POSTS = [
  { title: 'Anagram Algorithm w/ Frequency Counter', url: 'https://levelup.gitconnected.com/how-to-solve-an-anagram-algorithm-using-a-frequency-counter-5bb1f0b817ef', img: 'https://miro.medium.com/v2/resize:fit:400/1*t-T2d675Vgk1yWKjmgi7mw.jpeg' },
  { title: 'CSS Specificity Made Simple', url: 'https://levelup.gitconnected.com/css-specificity-made-simple-772f1d31f094', img: 'https://miro.medium.com/v2/resize:fit:400/1*My76DdZgPsE4kwm-xz0_dQ.jpeg' },
  { title: 'Web Design Accessibility Basics', url: 'https://levelup.gitconnected.com/the-basics-of-web-design-accessibility-af8b642124c4', img: 'https://miro.medium.com/v2/resize:fit:400/1*3WCYpTHTTlfXaDB7yErlow.jpeg' },
  { title: 'Chrome Extension in React', url: 'https://levelup.gitconnected.com/building-a-chrome-extension-in-react-in-10-minutes-737023fa4918', img: 'https://miro.medium.com/v2/resize:fit:400/1*0H3ygbXmDR0X0R-7agiZNQ.jpeg' },
  { title: 'Before Starting a Coding Boot Camp', url: 'https://medium.com/swlh/what-i-wish-someone-had-told-me-before-starting-a-coding-boot-camp-ccbdfe9ddf60', img: 'https://miro.medium.com/v2/resize:fit:400/1*GuqIL2VEbSDIzqHJovZAPA.jpeg' },
  { title: 'The Demise of form_for', url: 'https://medium.com/@amandathedev/the-demise-of-form-for-11905643e97b', img: 'https://miro.medium.com/v2/resize:fit:400/1*6c4g-1NrEjVYPg0K_f_zzg.png' },
];

const ContactIcon = ({ type }) => {
  const icons = {
    github: (
      <svg viewBox="0 0 32 32" width="32" height="32">
        <circle cx="16" cy="16" r="16" fill="#333" />
        <path d="M16 6C10.477 6 6 10.477 6 16c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0116 9.505a9.56 9.56 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C23.138 24.163 26 20.418 26 16c0-5.523-4.477-10-10-10z" fill="#fff" />
      </svg>
    ),
    medium: (
      <svg viewBox="0 0 32 32" width="32" height="32">
        <circle cx="16" cy="16" r="16" fill="#000" />
        <text x="16" y="21" textAnchor="middle" fill="#fff" fontSize="16" fontWeight="bold" fontFamily="Georgia, serif">M</text>
      </svg>
    ),
    email: (
      <svg viewBox="0 0 32 32" width="32" height="32">
        <circle cx="16" cy="16" r="16" fill="#007aff" />
        <rect x="7" y="11" width="18" height="12" rx="2" fill="none" stroke="#fff" strokeWidth="1.5" />
        <polyline points="7,11 16,18 25,11" fill="none" stroke="#fff" strokeWidth="1.5" />
      </svg>
    ),
    chrome: (
      <svg viewBox="0 0 32 32" width="32" height="32">
        <circle cx="16" cy="16" r="16" fill="#4285f4" />
        <circle cx="16" cy="16" r="5" fill="#fff" />
        <path d="M16 11a5 5 0 014.33 2.5H26a10 10 0 00-8.66-5" fill="#ea4335" opacity="0.9" />
        <path d="M11.67 18.5L8.84 23.4a10 10 0 008.66-1.9" fill="#34a853" opacity="0.9" />
        <path d="M20.33 18.5a5 5 0 01-4.33 2.5l-2.83 4.9A10 10 0 0026 16h-5.67" fill="#fbbc05" opacity="0.9" />
      </svg>
    ),
  };
  return icons[type] || null;
};

const CONTACTS = [
  { iconType: 'github', label: 'GitHub', detail: 'amandathedev', url: 'https://github.com/amandathedev' },
  { iconType: 'medium', label: 'Medium', detail: '@amandathedev', url: 'https://medium.com/@amandathedev' },
  { iconType: 'email', label: 'Email', detail: 'amandathedev@gmail.com', url: 'mailto:amandathedev@gmail.com' },
  { iconType: 'chrome', label: 'Chrome Store', detail: 'Extensions', url: 'https://chrome.google.com/webstore/search/amanda%20treutler' },
];

const APP_PAGES = [
  [
    { id: 'about', label: 'About Me', img: '/icons/iphone-photos-sunflower.png' },
    { id: 'portfolio', label: 'Portfolio', img: '/icons/iphone-safari.png' },
    { id: 'blog', label: 'Blog', img: '/icons/iphone-ipod.png' },
  ],
  [
    { id: 'maps', label: 'Maps', img: '/icons/iphone-map.png' },
  ],
];

const DOCK_ICONS = [
  { id: 'contact', label: 'Mail', img: '/icons/iphone-mail.png' },
  { id: 'chat', label: 'Chat', img: '/icons/iphone-sms.png', badge: 3 },
  { id: 'resume', label: 'Resume', img: '/icons/iphone-notes.png' },
  { id: 'github', label: 'GitHub', img: '/icons/iphone-stocks.png' },
];

function StatusBar({ inApp }) {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const timeStr = `${hours}:${minutes}`;

  return (
    <div className={`iphone-status-bar ${inApp ? 'in-app' : 'on-home'}`}>
      <div className="iphone-status-left">
        <svg className="iphone-signal" width="16" height="10" viewBox="0 0 16 10">
          <rect x="0" y="7" width="2.5" height="3" rx="0.3" fill="white" />
          <rect x="3.5" y="5" width="2.5" height="5" rx="0.3" fill="white" />
          <rect x="7" y="2.5" width="2.5" height="7.5" rx="0.3" fill="white" />
          <rect x="10.5" y="0" width="2.5" height="10" rx="0.3" fill="white" opacity="0.35" />
        </svg>
        <span className="iphone-carrier">Amanda</span>
      </div>
      <div className="iphone-status-time">{timeStr}</div>
      <div className="iphone-status-right">
        <svg className="iphone-battery" width="25" height="12" viewBox="0 0 25 12">
          <rect x="0" y="0" width="22" height="12" rx="2" fill="none" stroke="white" strokeWidth="1" />
          <rect x="1.5" y="1.5" width="18" height="9" rx="1" fill="white" />
          <rect x="22" y="3.5" width="2.5" height="5" rx="1" fill="white" />
        </svg>
      </div>
    </div>
  );
}

function PhotosIcon() {
  return (
    <svg viewBox="0 0 60 60" width="60" height="60" style={{ display: 'block', borderRadius: 14 }}>
      <defs>
        <linearGradient id="photosBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6ec6f5" />
          <stop offset="60%" stopColor="#4aa8e0" />
          <stop offset="100%" stopColor="#88d0f8" />
        </linearGradient>
        <linearGradient id="photosShine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.45)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.08)" />
          <stop offset="51%" stopColor="rgba(255,255,255,0)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>
      <rect width="60" height="60" rx="14" fill="url(#photosBg)" />
      {/* Clouds */}
      <ellipse cx="12" cy="46" rx="14" ry="6" fill="rgba(255,255,255,0.25)" />
      <ellipse cx="48" cy="48" rx="12" ry="5" fill="rgba(255,255,255,0.2)" />
      {/* Stem */}
      <path d="M30 36 Q30 50 28 54" stroke="#3a7a20" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Leaf */}
      <path d="M29 44 Q22 40 20 44 Q24 46 29 44" fill="#4a9a2a" />
      {/* Sunflower petals */}
      <ellipse cx="30" cy="22" rx="3.5" ry="7" fill="#f5c400" transform="rotate(0 30 28)" />
      <ellipse cx="30" cy="22" rx="3.5" ry="7" fill="#f5c400" transform="rotate(30 30 28)" />
      <ellipse cx="30" cy="22" rx="3.5" ry="7" fill="#f5c400" transform="rotate(60 30 28)" />
      <ellipse cx="30" cy="22" rx="3.5" ry="7" fill="#f5c400" transform="rotate(90 30 28)" />
      <ellipse cx="30" cy="22" rx="3.5" ry="7" fill="#f5c400" transform="rotate(120 30 28)" />
      <ellipse cx="30" cy="22" rx="3.5" ry="7" fill="#f5c400" transform="rotate(150 30 28)" />
      {/* Darker back petals */}
      <ellipse cx="30" cy="22" rx="3" ry="7" fill="#e0a800" transform="rotate(15 30 28)" />
      <ellipse cx="30" cy="22" rx="3" ry="7" fill="#e0a800" transform="rotate(45 30 28)" />
      <ellipse cx="30" cy="22" rx="3" ry="7" fill="#e0a800" transform="rotate(75 30 28)" />
      <ellipse cx="30" cy="22" rx="3" ry="7" fill="#e0a800" transform="rotate(105 30 28)" />
      <ellipse cx="30" cy="22" rx="3" ry="7" fill="#e0a800" transform="rotate(135 30 28)" />
      <ellipse cx="30" cy="22" rx="3" ry="7" fill="#e0a800" transform="rotate(165 30 28)" />
      {/* Center */}
      <circle cx="30" cy="28" r="6" fill="#5a3a1a" />
      <circle cx="30" cy="28" r="4.5" fill="#7a5a2a" />
      <circle cx="29" cy="27" r="1.5" fill="rgba(255,255,255,0.15)" />
      {/* Glossy overlay */}
      <rect width="60" height="60" rx="14" fill="url(#photosShine)" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 60 60" width="60" height="60" style={{ display: 'block', borderRadius: 14 }}>
      <defs>
        <linearGradient id="ytBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a2a2a" />
          <stop offset="100%" stopColor="#111" />
        </linearGradient>
        <linearGradient id="ytFrame" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c4a265" />
          <stop offset="50%" stopColor="#8a6e3a" />
          <stop offset="100%" stopColor="#c4a265" />
        </linearGradient>
        <linearGradient id="ytScreen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d4dcc8" />
          <stop offset="100%" stopColor="#a8b89c" />
        </linearGradient>
        <linearGradient id="ytShine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.35)" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.05)" />
          <stop offset="51%" stopColor="rgba(255,255,255,0)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>
      <rect width="60" height="60" rx="14" fill="url(#ytBg)" />
      {/* TV frame */}
      <rect x="10" y="10" width="40" height="34" rx="5" fill="url(#ytFrame)" stroke="#6a5020" strokeWidth="0.5" />
      {/* Screen */}
      <rect x="14" y="14" width="32" height="24" rx="3" fill="url(#ytScreen)" />
      {/* Screen glare */}
      <rect x="14" y="14" width="32" height="12" rx="3" fill="rgba(255,255,255,0.15)" />
      {/* Antenna left */}
      <line x1="24" y1="10" x2="18" y2="4" stroke="#8a6e3a" strokeWidth="1.5" strokeLinecap="round" />
      {/* Antenna right */}
      <line x1="36" y1="10" x2="42" y2="4" stroke="#8a6e3a" strokeWidth="1.5" strokeLinecap="round" />
      {/* Antenna tips */}
      <circle cx="18" cy="4" r="1.5" fill="#c4a265" />
      <circle cx="42" cy="4" r="1.5" fill="#c4a265" />
      {/* Stand */}
      <rect x="22" y="44" width="16" height="3" rx="1.5" fill="#8a6e3a" />
      <rect x="26" y="47" width="8" height="2" rx="1" fill="#6a5020" />
      {/* Glossy overlay */}
      <rect width="60" height="60" rx="14" fill="url(#ytShine)" />
    </svg>
  );
}

function AppIcon({ icon, onClick }) {
  return (
    <button className="iphone-app-icon" onClick={onClick}>
      <div className="iphone-app-icon-outer">
        {icon.svg ? (
          <div className="iphone-app-icon-svg">
            {icon.svg === 'photos' && <PhotosIcon />}
            {icon.svg === 'youtube' && <YouTubeIcon />}
          </div>
        ) : icon.img ? (
          <div className="iphone-app-icon-img">
            <img src={icon.img} alt={icon.label} />
            <div className="iphone-app-icon-shine" />
          </div>
        ) : (
          <div className="iphone-app-icon-image" style={{ background: icon.gradient }}>
            <span className="iphone-app-emoji">{icon.emoji}</span>
            <div className="iphone-app-icon-shine" />
          </div>
        )}
        {icon.badge && (
          <span className="iphone-badge">{icon.badge}</span>
        )}
      </div>
      <span className="iphone-app-label">{icon.label}</span>
    </button>
  );
}

function PageHeader({ title, onBack }) {
  return (
    <div className="iphone-page-header">
      <button className="iphone-back-btn" onClick={onBack}>
        <span className="iphone-back-chevron" /> Home
      </button>
      <span className="iphone-page-title">{title}</span>
      <span className="iphone-page-spacer" />
    </div>
  );
}

function AboutPage({ onBack }) {
  return (
    <div className="iphone-page">
      <PageHeader title="About Me" onBack={onBack} />
      <div className="iphone-page-body iphone-ios-page">
        <div className="ios-profile-header">
          <img className="ios-profile-photo" src={amanda} alt="Amanda Treutler" />
          <div className="ios-profile-name">Amanda Treutler</div>
          <div className="ios-profile-role">Software Engineer</div>
        </div>

        <div className="ios-section-label">About</div>
        <div className="ios-group">
          <div className="ios-cell">
            <span className="ios-cell-text">Passionate about crafting high-performance, accessible, and AI-driven web experiences. I specialize in React and Ruby on Rails.</span>
          </div>
        </div>

        <div className="ios-section-label">Volunteering</div>
        <div className="ios-group">
          <a className="ios-cell ios-cell-link" href="https://theperiodcollective.org/" target="_blank" rel="noopener noreferrer">
            <span className="ios-cell-text">The Period Collective</span>
            <span className="ios-cell-detail">Providing menstrual products to people in need in Chicago</span>
            <span className="ios-cell-chevron">›</span>
          </a>
        </div>

        <div className="ios-section-label">Technologies</div>
        <div className="ios-group">
          {TECHS.map((t, i) => (
            <div key={t} className={`ios-cell${i < TECHS.length - 1 ? ' ios-cell-border' : ''}`}>
              <span className="ios-cell-text">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PortfolioPage({ onBack }) {
  return (
    <div className="iphone-page">
      <PageHeader title="Portfolio" onBack={onBack} />
      <div className="iphone-page-body iphone-ios-page">
        {PROJECTS.map((project) => (
          <div key={project.name}>
            <div className="ios-section-label">{project.icon} {project.name}</div>
            <div className="ios-group">
              <div className="ios-cell ios-cell-border">
                <span className="ios-cell-text" style={{ color: '#666', fontSize: 14 }}>{project.desc}</span>
              </div>
              {project.links.map((link, i) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`ios-cell ios-cell-link${i < project.links.length - 1 ? ' ios-cell-border' : ''}`}
                >
                  <span className="ios-cell-text" style={{ color: '#007aff' }}>{link.label}</span>
                  <span className="ios-cell-chevron">›</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BlogPage({ onBack }) {
  return (
    <div className="iphone-page">
      <PageHeader title="Blog" onBack={onBack} />
      <div className="iphone-page-body iphone-ios-page">
        <div className="ios-section-label">Posts</div>
        <div className="ios-group">
          {BLOG_POSTS.map((post, i) => (
            <a
              key={post.title}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`ios-cell ios-cell-link ios-blog-cell${i < BLOG_POSTS.length - 1 ? ' ios-cell-border' : ''}`}
            >
              <img className="ios-blog-thumb" src={post.img} alt="" />
              <span className="ios-cell-text">{post.title}</span>
              <span className="ios-cell-chevron">›</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function MapsPage({ onBack }) {
  return (
    <div className="iphone-page">
      <PageHeader title="Maps" onBack={onBack} />
      <div className="iphone-maps-fullscreen">
        <img className="iphone-maps-img" src="/travel-map.jpg" alt="World map showing countries visited" />
        <div className="iphone-maps-banner">
          <div className="iphone-maps-banner-title">Places I've Been</div>
          <div className="iphone-maps-banner-sub">Tap to explore my travel map</div>
        </div>
      </div>
    </div>
  );
}

function ChatPage({ onBack }) {
  return (
    <div className="iphone-page">
      <div className="imessage-header">
        <button className="iphone-back-btn" onClick={onBack}>
          <span className="iphone-back-chevron" /> Messages
        </button>
        <div className="imessage-contact">
          <div className="imessage-avatar">A</div>
          <span className="imessage-name">Amanda's Bot</span>
        </div>
        <span className="iphone-page-spacer" />
      </div>
      <div className="imessage-body">
        <iframe
          title="Chat with Amanda's Bot"
          src="https://chatbot-folio.netlify.app/"
          className="imessage-iframe"
        />
      </div>
    </div>
  );
}

function ContactPage({ onBack }) {
  return (
    <div className="iphone-page">
      <PageHeader title="Contact" onBack={onBack} />
      <div className="iphone-page-body iphone-ios-page">
        <div className="ios-section-label">Get in touch</div>
        <div className="ios-group">
          {CONTACTS.map((c, i) => (
            <a
              key={c.label}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`ios-cell ios-cell-link${i < CONTACTS.length - 1 ? ' ios-cell-border' : ''}`}
            >
              <span style={{ marginRight: 12, flexShrink: 0 }}><ContactIcon type={c.iconType} /></span>
              <span className="ios-cell-text"><strong>{c.label}</strong><br /><span style={{ fontSize: 13, color: '#888' }}>{c.detail}</span></span>
              <span className="ios-cell-chevron">›</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function ResumePage({ onBack }) {
  return (
    <div className="iphone-page">
      <div className="iphone-page-header resume-header">
        <button className="iphone-back-btn" onClick={onBack}>
          <span className="iphone-back-chevron" /> Home
        </button>
        <span className="iphone-page-title">Resume</span>
        <a className="resume-download-btn" href="/resume.pdf" download>Download</a>
      </div>
      <div className="resume-iframe-wrap">
        <iframe
          title="Resume"
          src="/resume.pdf"
          className="resume-iframe"
        />
      </div>
    </div>
  );
}

const IPhoneView = () => {
  const [activeApp, setActiveApp] = useState(null);
  const [slideDir, setSlideDir] = useState('');
  const [homePage, setHomePage] = useState(0);
  const touchStartX = useRef(null);

  const openApp = useCallback((id) => {
    if (id === 'github') {
      window.open('https://github.com/amandathedev', '_blank');
      return;
    }
    setSlideDir('iphone-slide-in');
    setActiveApp(id);
  }, []);

  const goHome = useCallback(() => {
    setSlideDir('iphone-slide-out');
    setTimeout(() => {
      setActiveApp(null);
      setSlideDir('');
    }, 300);
  }, []);

  const renderPage = () => {
    switch (activeApp) {
      case 'about': return <AboutPage onBack={goHome} />;
      case 'portfolio': return <PortfolioPage onBack={goHome} />;
      case 'blog': return <BlogPage onBack={goHome} />;
      case 'contact': return <ContactPage onBack={goHome} />;
      case 'chat': return <ChatPage onBack={goHome} />;
      case 'resume': return <ResumePage onBack={goHome} />;
      case 'maps': return <MapsPage onBack={goHome} />;
      default: return null;
    }
  };

  return (
    <div className="iphone-wrapper">
      <StatusBar inApp={!!activeApp} />

      <div
        className="iphone-home"
        style={{ display: activeApp && slideDir !== 'iphone-slide-out' ? 'none' : undefined }}
        onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return;
          const diff = touchStartX.current - e.changedTouches[0].clientX;
          if (diff > 60 && homePage < APP_PAGES.length - 1) setHomePage(homePage + 1);
          if (diff < -60 && homePage > 0) setHomePage(homePage - 1);
          touchStartX.current = null;
        }}
      >
        <div className="iphone-pages-track" style={{ transform: `translateX(-${homePage * 100}%)` }}>
          {APP_PAGES.map((page, pageIdx) => (
            <div key={pageIdx} className="iphone-app-grid">
              {page.map((icon) => (
                <AppIcon key={icon.id} icon={icon} onClick={() => openApp(icon.id)} />
              ))}
            </div>
          ))}
        </div>

        <div className="iphone-home-dots">
          {APP_PAGES.map((_, i) => (
            <span key={i} className={`iphone-dot${i === homePage ? ' active' : ''}`} />
          ))}
        </div>

        <div className="iphone-dock">
          {DOCK_ICONS.map((icon) => (
            <AppIcon key={icon.id} icon={icon} onClick={() => openApp(icon.id)} />
          ))}
        </div>
      </div>

      {activeApp && (
        <div className={`iphone-app-view ${slideDir}`}>
          {renderPage()}
        </div>
      )}
    </div>
  );
};

export default IPhoneView;
