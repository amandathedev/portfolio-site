import { useState, useCallback, useMemo } from 'react';
import amanda from '../amanda-profile.png';

const MENU_ITEMS = [
  { id: 'about', label: 'About Me' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
  { id: 'resume', label: 'Resume' },
  { id: 'chat', label: 'Chat' },
];

const PORTFOLIO_ITEMS = [
  {
    label: 'The Period Collective',
    id: 'tpc',
    children: [
      { label: 'Live Site', url: 'https://theperiodcollective.org/' },
      { label: 'GitHub', url: 'https://github.com/amandathedev/period-collective' },
    ],
  },
  {
    label: 'Sample Size',
    id: 'samplesize',
    children: [
      { label: 'Chrome Store', url: 'https://chromewebstore.google.com/detail/sample-size/liibkodidconnkfecofhjbhkbdpmaick' },
      { label: 'GitHub', url: 'https://github.com/amandathedev/sample-size' },
    ],
  },
  {
    label: 'UnitSwitch',
    id: 'unitswitch',
    children: [
      { label: 'Chrome Store', url: 'https://chrome.google.com/webstore/detail/unitswitch/nbpfgdhlmmlpkdeaegalkhbkceicckpp' },
      { label: 'GitHub', url: 'https://github.com/amandathedev/unit-switch' },
    ],
  },
  {
    label: 'Cute Sudoku',
    id: 'cutesudoku',
    children: [
      { label: 'Live Site', url: 'https://cutesudoku.netlify.app/' },
      { label: 'GitHub', url: 'https://github.com/amandathedev/sudoku' },
    ],
  },
];

const BLOG_ITEMS = [
  { label: 'Anagram Algorithm w/ Frequency Counter', url: 'https://levelup.gitconnected.com/how-to-solve-an-anagram-algorithm-using-a-frequency-counter-5bb1f0b817ef' },
  { label: 'CSS Specificity Made Simple', url: 'https://levelup.gitconnected.com/css-specificity-made-simple-772f1d31f094' },
  { label: 'Web Design Accessibility Basics', url: 'https://levelup.gitconnected.com/the-basics-of-web-design-accessibility-af8b642124c4' },
  { label: 'Chrome Extension in React', url: 'https://levelup.gitconnected.com/building-a-chrome-extension-in-react-in-10-minutes-737023fa4918' },
  { label: 'Before Starting a Coding Boot Camp', url: 'https://medium.com/swlh/what-i-wish-someone-had-told-me-before-starting-a-coding-boot-camp-ccbdfe9ddf60' },
  { label: 'The Demise of form_for', url: 'https://medium.com/@amandathedev/the-demise-of-form-for-11905643e97b' },
];

const CONTACT_ITEMS = [
  { label: 'GitHub', url: 'https://github.com/amandathedev', icon: '⌨️' },
  { label: 'Medium', url: 'https://medium.com/@amandathedev', icon: '✍️' },
  { label: 'Email', url: 'mailto:amandathedev@gmail.com', icon: '✉️' },
  { label: 'Chrome Store', url: 'https://chrome.google.com/webstore/search/amanda%20treutler', icon: '🌐' },
];

const TECHS = [
  'JavaScript', 'React', 'React Native', 'TypeScript', 'Tailwind', 'Sass',
  'Ruby on Rails', 'NodeJS', 'GraphQL', 'PostgreSQL', 'Docker', 'AWS', 'OpenAI',
];

const IpodView = () => {
  const [screenStack, setScreenStack] = useState(['menu']);
  const [slideDir, setSlideDir] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const screen = screenStack[screenStack.length - 1];

  // Get the list items for the current screen
  const currentList = useMemo(() => {
    switch (screen) {
      case 'menu': return MENU_ITEMS;
      case 'portfolio': return PORTFOLIO_ITEMS;
      case 'blog': return BLOG_ITEMS;
      case 'contact': return CONTACT_ITEMS;
      default: {
        // Check if it's a portfolio sub-item
        const project = PORTFOLIO_ITEMS.find((p) => p.id === screen);
        if (project?.children) return project.children;
        return [];
      }
    }
  }, [screen]);

  const navigate = useCallback((to) => {
    if (to === 'resume') {
      window.open('/resume.pdf', '_blank');
      return;
    }
    if (to === 'chat') {
      window.open('https://chatbot-folio.netlify.app/', '_blank');
      return;
    }
    setSlideDir('slide-left');
    setTimeout(() => {
      setScreenStack((s) => [...s, to]);
      setSelectedIndex(0);
      setSlideDir('slide-in-right');
      setTimeout(() => setSlideDir(''), 300);
    }, 200);
  }, []);

  const goBack = useCallback(() => {
    if (screenStack.length <= 1) return;
    setSlideDir('slide-right');
    setTimeout(() => {
      setScreenStack((s) => s.slice(0, -1));
      setSelectedIndex(0);
      setSlideDir('slide-in-left');
      setTimeout(() => setSlideDir(''), 300);
    }, 200);
  }, [screenStack]);

  const scrollUp = useCallback(() => {
    setSelectedIndex((i) => Math.max(0, i - 1));
  }, []);

  const scrollDown = useCallback(() => {
    setSelectedIndex((i) => Math.min(currentList.length - 1, i + 1));
  }, [currentList]);

  const activateItem = useCallback((item) => {
    if (item.id && screen === 'menu') {
      navigate(item.id);
    } else if (item.children) {
      navigate(item.id);
    } else if (item.url) {
      window.open(item.url, '_blank', 'noopener');
    }
  }, [screen, navigate]);

  const selectItem = useCallback(() => {
    if (screen === 'about') return;
    const item = currentList[selectedIndex];
    if (!item) return;
    activateItem(item);
  }, [screen, currentList, selectedIndex, activateItem]);

  const handleItemClick = (item, index) => {
    setSelectedIndex(index);
    activateItem(item);
  };

  const renderList = (items) => (
    <div className="ipod-list">
      {items.map((item, i) => (
        <div
          key={item.label || item.id}
          className={`ipod-list-item${i === selectedIndex ? ' highlighted' : ''}`}
          role="button"
          tabIndex={0}
          onClick={() => handleItemClick(item, i)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleItemClick(item, i);
            }
          }}
        >
          <div>
            <span>{item.icon ? `${item.icon} ` : ''}{item.label}</span>
            {item.note && <div className="ipod-item-note">{item.note}</div>}
          </div>
          {(item.url || item.id || item.children) && <span className="ipod-chevron">›</span>}
        </div>
      ))}
    </div>
  );

  const renderScreen = () => {
    switch (screen) {
      case 'menu':
        return (
          <div className={`ipod-screen-content ${slideDir}`}>
            <div className="ipod-title-bar">
              <span>iPod</span>
              <span className="ipod-battery">🔋</span>
            </div>
            {renderList(MENU_ITEMS)}
            <div className="ipod-now-playing" aria-hidden="true">
              <div className="ipod-marquee">
                <span>♫ Now Playing: Amanda Treutler – Software Engineer&nbsp;&nbsp;&nbsp;&nbsp;♫ Now Playing: Amanda Treutler – Software Engineer&nbsp;&nbsp;&nbsp;&nbsp;</span>
              </div>
            </div>
          </div>
        );

      case 'about':
        return (
          <div className={`ipod-screen-content ${slideDir}`}>
            <div className="ipod-title-bar">
              <span className="ipod-back" role="button" tabIndex={0} onClick={goBack} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goBack(); } }}>◀ Menu</span>
              <span>About Me</span>
              <span className="ipod-battery">🔋</span>
            </div>
            <div className="ipod-detail-scroll">
              <img className="ipod-about-photo" src={amanda} alt="Amanda Treutler" />
              <p className="ipod-about-bio">
                I'm <strong>Amanda Treutler</strong>, a Software Engineer passionate about
                crafting high-performance, accessible, and AI-driven web experiences.
              </p>
              <p className="ipod-about-bio">
                I specialize in React and Ruby on Rails, building scalable interfaces
                with clean UI/UX.
              </p>
              <p className="ipod-about-bio">
                I volunteer with{' '}
                <a href="https://theperiodcollective.org/" target="_blank" rel="noopener noreferrer">
                  The Period Collective
                </a>
                , providing menstrual products to people in need in Chicago.
              </p>
              <div className="ipod-tech-title">Technologies</div>
              <div className="ipod-tech-grid">
                {TECHS.map((t) => (
                  <span key={t} className="ipod-tech-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        );

      case 'portfolio':
        return (
          <div className={`ipod-screen-content ${slideDir}`}>
            <div className="ipod-title-bar">
              <span className="ipod-back" role="button" tabIndex={0} onClick={goBack} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goBack(); } }}>◀ Back</span>
              <span>Portfolio</span>
              <span className="ipod-battery">🔋</span>
            </div>
            {renderList(PORTFOLIO_ITEMS)}
          </div>
        );

      case 'blog':
        return (
          <div className={`ipod-screen-content ${slideDir}`}>
            <div className="ipod-title-bar">
              <span className="ipod-back" role="button" tabIndex={0} onClick={goBack} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goBack(); } }}>◀ Menu</span>
              <span>Blog</span>
              <span className="ipod-battery">🔋</span>
            </div>
            {renderList(BLOG_ITEMS)}
          </div>
        );

      case 'contact':
        return (
          <div className={`ipod-screen-content ${slideDir}`}>
            <div className="ipod-title-bar">
              <span className="ipod-back" role="button" tabIndex={0} onClick={goBack} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goBack(); } }}>◀ Menu</span>
              <span>Contact</span>
              <span className="ipod-battery">🔋</span>
            </div>
            {renderList(CONTACT_ITEMS)}
          </div>
        );

      default: {
        // Portfolio project sub-screen
        const project = PORTFOLIO_ITEMS.find((p) => p.id === screen);
        if (project?.children) {
          const prevScreen = screenStack[screenStack.length - 2] || 'Menu';
          return (
            <div className={`ipod-screen-content ${slideDir}`}>
              <div className="ipod-title-bar">
                <span className="ipod-back" role="button" tabIndex={0} onClick={goBack} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goBack(); } }}>◀ Back</span>
                <span>{project.label}</span>
                <span className="ipod-battery">🔋</span>
              </div>
              {renderList(project.children)}
            </div>
          );
        }
        return null;
      }
    }
  };

  return (
    <div className="ipod-wrapper">
      <div className="ipod-body">
        <div className="ipod-screen">
          {renderScreen()}
        </div>

        <div className="ipod-wheel">
          <div className="ipod-wheel-label top" role="button" tabIndex={0} aria-label="Menu/Back" onClick={goBack} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goBack(); } }}>MENU</div>
          <div className="ipod-wheel-label right" role="button" tabIndex={0} aria-label="Scroll down" onClick={scrollDown} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); scrollDown(); } }}>▶▶</div>
          <div className="ipod-wheel-label left" role="button" tabIndex={0} aria-label="Scroll up" onClick={scrollUp} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); scrollUp(); } }}>◀◀</div>
          <div className="ipod-wheel-label bottom" role="button" tabIndex={0} aria-label="Play/Pause">▶❚❚</div>
          <div className="ipod-wheel-center" role="button" tabIndex={0} aria-label="Select" onClick={selectItem} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectItem(); } }} />
        </div>
      </div>
    </div>
  );
};

export default IpodView;
