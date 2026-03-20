import amanda from '../../amanda-profile.png';
import { useNetscape } from '../NetscapeContext.jsx';

const AboutContent = () => {
  const openNetscape = useNetscape();

  const handleTpcClick = (e) => {
    e.preventDefault();
    if (openNetscape) openNetscape('https://theperiodcollective.org/');
  };

  return (
    <div className="about-content">
      <img className="about-photo" src={amanda} alt="Amanda Treutler" />

      <div className="about-bio">
        <p>
          Hello! I'm <strong>Amanda Treutler</strong>, a Software Engineer passionate
          about crafting high-performance, accessible, and AI-driven web experiences.
          I specialize in React and Ruby on Rails, building scalable interfaces with
          clean UI/UX while optimizing backend performance and efficiency.
        </p>
        <br />
        <p>
          Beyond professional engineering, I volunteer with{' '}
          <a href="https://theperiodcollective.org/" onClick={handleTpcClick}>
            The Period Collective
          </a>
          , helping provide menstrual products to people in need in Chicago. If you're
          looking to collaborate on a project, or just want to chat about web development,
          AI, or accessibility, let's connect!
        </p>
      </div>

      <div className="about-divider" />

      <div className="about-skills-title">Technologies</div>
      <div className="about-skills">
        <div className="about-skill"><i className="fab fa-js" aria-hidden="true"></i>JavaScript</div>
        <div className="about-skill"><i className="fab fa-react" aria-hidden="true"></i>React</div>
        <div className="about-skill"><i className="fab fa-react" aria-hidden="true"></i>React Native</div>
        <div className="about-skill"><i className="fab fa-js" aria-hidden="true"></i>TypeScript</div>
        <div className="about-skill"><i className="fab fa-css3-alt" aria-hidden="true"></i>Tailwind</div>
        <div className="about-skill"><i className="fab fa-sass" aria-hidden="true"></i>Sass</div>
        <div className="about-skill"><i className="far fa-gem" aria-hidden="true"></i>Ruby on Rails</div>
        <div className="about-skill"><i className="fab fa-node-js" aria-hidden="true"></i>NodeJS</div>
        <div className="about-skill"><i className="fas fa-project-diagram" aria-hidden="true"></i>GraphQL</div>
        <div className="about-skill"><i className="fas fa-database" aria-hidden="true"></i>PostgreSQL</div>
        <div className="about-skill"><i className="fab fa-docker" aria-hidden="true"></i>Docker</div>
        <div className="about-skill"><i className="fab fa-aws" aria-hidden="true"></i>AWS</div>
        <div className="about-skill"><i className="fas fa-robot" aria-hidden="true"></i>OpenAI</div>
      </div>

      <div className="about-divider" />

      <div className="about-skills-title">I also like to go places</div>
      <img
        className="about-map"
        src="/travel-map.jpg"
        alt="World map showing countries I've visited, colored by region"
      />
    </div>
  );
};

export default AboutContent;
