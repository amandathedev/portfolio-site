import { useNetscape } from '../NetscapeContext.jsx';
import { projects } from '../../projects.js';

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
