import React from "react";
import "../styles/portfolio.css";

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio-div">
      <h2>Portfolio</h2>
      <div className="underline"></div>

      <div className="portfolio-gallery">

        <div className="portfolio-card sequin">
          <div className="portfolio-card__overlay">
            <h2 className="portfolio-card__title">Sequin</h2>
            <a
              className="portfolio-card__link"
              href="https://www.sequincard.com/"
            >
              Live Site
            </a>
          </div>
        </div>

        <div className="portfolio-card tpc">
          <div className="portfolio-card__overlay">
            <h2 className="portfolio-card__title">The Period Collective</h2>
            <a
              className="portfolio-card__link"
              href="https://i.imgur.com/GN4sDAK.png"
            >
              Live Site
            </a>
            <a
              className="portfolio-card__link"
              href="https://github.com/amandathedev/period-collective"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="portfolio-card unit-switch">
          <div className="portfolio-card__overlay">
            <h2 className="portfolio-card__title">UnitSwitch</h2>
            <a
              className="portfolio-card__link"
              href="https://chrome.google.com/webstore/detail/unitswitch/nbpfgdhlmmlpkdeaegalkhbkceicckpp"
            >
              Publication
            </a>
            <a
              className="portfolio-card__link"
              href="https://github.com/amandathedev/unit-switch"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* <div className="portfolio-card card1">
          <div className="portfolio-card__overlay">
            <h2 className="portfolio-card__title">SpeakTo</h2>
            <a className="portfolio-card__link" href="http://www.speakto.io">
              Live Demo
            </a>
            <a
              className="portfolio-card__link"
              href="https://github.com/amandathedev/speakto-frontend"
            >
              GitHub
            </a>
          </div>
        </div> */}

        {/* <div className="portfolio-card card3">
          <div className="portfolio-card__overlay">
            <h2 className="portfolio-card__title">GrubCrud</h2>
            <a
              className="portfolio-card__link"
              href="https://gentle-reef-09074.herokuapp.com/"
            >
              Live Demo
            </a>
            <a
              className="portfolio-card__link"
              href="https://github.com/amandathedev/grubcrud"
            >
              GitHub
            </a>
          </div>
        </div> */}

        {/* <div className="portfolio-card card4">
          <div className="portfolio-card__overlay">
            <h2 className="portfolio-card__title">Drift Calendar</h2>
            <a
              className="portfolio-card__link"
              href="https://github.com/amandathedev/drift-calendar"
            >
              GitHub
            </a>
          </div>
        </div> */}

        {/* <div className="portfolio-card card5">
          <div className="portfolio-card__overlay">
            <h2 className="portfolio-card__title">Kirsten Ihns Portfolio</h2>
            <a className="portfolio-card__link" href="https://www.kirsten.website">
              Publication
            </a>
            <a
              className="portfolio-card__link"
              href="https://github.com/amandathedev/kirsten-ihns-artist-portfolio"
            >
              GitHub
            </a>
          </div>
        </div> */}

        {/* <div className="portfolio-card card6">
          <div className="portfolio-card__overlay">
            <h2 className="portfolio-card__title">Calligraphy Portfolio</h2>
            <a
              className="portfolio-card__link"
              href="https://github.com/amandathedev/calligraphy-portfolio"
            >
              GitHub
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Portfolio;
