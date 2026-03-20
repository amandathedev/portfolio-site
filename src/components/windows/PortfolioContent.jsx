import { useNetscape } from '../NetscapeContext.jsx';

const projects = [
  {
    name: 'The Period Collective',
    desc: 'Nonprofit providing menstrual products to people in need in Chicago.',
    icon: '🌸',
    links: [
      { label: 'Live Site', url: 'https://theperiodcollective.org/', embeddable: true },
      { label: 'GitHub', url: 'https://github.com/amandathedev/period-collective' },
    ],
  },
  {
    name: 'Sequin',
    desc: 'The debit card that fights the Pink Tax. (Now defunct)',
    icon: '💳',
    links: [
      { label: 'Screenshot', url: 'https://sequincard.com/', imageUrl: '/sequin-screenshot.png' },
    ],
  },
  {
    name: 'Sample Size',
    desc: 'Chrome extension for quick analytics sampling.',
    icon: '📊',
    links: [
      {
        label: 'Chrome Store',
        url: 'https://chromewebstore.google.com/detail/sample-size/liibkodidconnkfecofhjbhkbdpmaick',
      },
      { label: 'GitHub', url: 'https://github.com/amandathedev/sample-size' },
    ],
  },
  {
    name: 'UnitSwitch',
    desc: 'Chrome extension for instant unit conversions.',
    icon: '🔄',
    links: [
      {
        label: 'Chrome Store',
        url: 'https://chrome.google.com/webstore/detail/unitswitch/nbpfgdhlmmlpkdeaegalkhbkceicckpp',
      },
      { label: 'GitHub', url: 'https://github.com/amandathedev/unit-switch' },
    ],
  },
];

const PortfolioContent = () => {
  const openNetscape = useNetscape();

  const handleClick = (e, link) => {
    if ((link.embeddable || link.imageUrl) && openNetscape) {
      e.preventDefault();
      openNetscape(link.url, { imageUrl: link.imageUrl });
    }
    // non-embeddable links open normally via target="_blank"
  };

  return (
    <div className="portfolio-content">
      {projects.map((project) => (
        <div key={project.name} className="portfolio-item">
          <div className="portfolio-icon">{project.icon}</div>
          <div className="portfolio-info">
            <h3>{project.name}</h3>
            <p>{project.desc}</p>
            {project.links.length > 0 && (
              <div className="portfolio-links">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    className="portfolio-link"
                    href={link.url}
                    target={(link.embeddable || link.imageUrl) ? undefined : '_blank'}
                    rel={(link.embeddable || link.imageUrl) ? undefined : 'noopener noreferrer'}
                    onClick={(e) => handleClick(e, link)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioContent;
