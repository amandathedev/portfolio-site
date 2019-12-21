import React from "react";
import "../styles/portfolio.css";

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio-div">
      <h2>Portfolio</h2>
      <div className="underline"></div>
      <div className="big-screen">
        {/* computer carousel */}
        <div
          id="carouselExampleFade"
          class="carousel computer-carousel slide carousel-fade"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active computer-carousel-item">
              <img
                src="https://i.imgur.com/ifUChnn.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item computer-carousel-item">
              <img
                src="https://i.imgur.com/JAjrDdU.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item computer-carousel-item">
              <img
                src="https://i.imgur.com/Jrg8YVm.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item computer-carousel-item">
              <img
                src="https://i.imgur.com/F75dN6c.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <a
            class="carousel-control-prev carousel-icon"
            href="#carouselExampleFade"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next carousel-icon"
            href="#carouselExampleFade"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        {/* ipad carousel */}
        <div
          id="carouselFade"
          className="carousel big-carousel ipad-carousel slide carousel-fade"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div class="carousel-item active ipad-carousel-item">
              <img
                src="https://i.imgur.com/MuLdH45.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
            {/* <div class="carousel-item ipad-carousel-item">
              <img
                src="https://i.imgur.com/gXFwkz2.png"
                class="d-block w-100"
                alt="..."
              />
            </div> */}
            {/* <div class="carousel-item ipad-carousel-item">
              <img
                src="https://i.imgur.com/Jrg8YVm.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item ipad-carousel-item">
              <img
                src="https://i.imgur.com/F75dN6c.png"
                class="d-block w-100"
                alt="..."
              />
            </div> */}
          </div>
          {/* <a
            class="carousel-control-prev carousel-icon"
            href="#carouselExampleFade"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next carousel-icon"
            href="#carouselExampleFade"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a> */}
        </div>
        {/* iphone carousel */}
        <div
          id="carouselFade"
          className="carousel iphone-carousel slide carousel-fade"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active iphone-carousel-item">
              <img
                src="https://i.imgur.com/Wh1XsUT.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            {/* <div class="carousel-item iphone-carousel-item">
              <img
                src="https://i.imgur.com/gXFwkz2.png"
                class="d-block w-100"
                alt="..."
              />
            </div> */}
            {/* <div class="carousel-item iphone-carousel-item">
              <img
                src="https://i.imgur.com/Jrg8YVm.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item iphone-carousel-item">
              <img
                src="https://i.imgur.com/F75dN6c.png"
                class="d-block w-100"
                alt="..."
              />
            </div> */}
          </div>
          <a
            class="carousel-control-prev carousel-icon"
            href="#carouselExampleFade"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next carousel-icon"
            href="#carouselExampleFade"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>

      {/* Portfolio cards */}
      <div class="portfolio-gallery">
        <div class="portfolio-card card1">
          <div class="portfolio-card__overlay">
            <h2 class="portfolio-card__title">SpeakTo</h2>
            <a class="portfolio-card__link" href="http://www.speakto.io">
              Live Demo
            </a>
            <a
              class="portfolio-card__link"
              href="https://github.com/amandathedev/speakto-frontend"
            >
              GitHub
            </a>
          </div>
        </div>

        <div class="portfolio-card card2">
          <div class="portfolio-card__overlay">
            <h2 class="portfolio-card__title">UnitSwitch</h2>
            <a
              class="portfolio-card__link"
              href="https://chrome.google.com/webstore/detail/unitswitch/nbpfgdhlmmlpkdeaegalkhbkceicckpp"
            >
              Publication
            </a>
            <a
              class="portfolio-card__link"
              href="https://github.com/amandathedev/unit-switch"
            >
              GitHub
            </a>
          </div>
        </div>

        <div class="portfolio-card card3">
          <div class="portfolio-card__overlay">
            <h2 class="portfolio-card__title">GrubCrud</h2>
            <a
              class="portfolio-card__link"
              href="https://gentle-reef-09074.herokuapp.com/"
            >
              Live Demo
            </a>
            <a
              class="portfolio-card__link"
              href="https://github.com/amandathedev/grubcrud"
            >
              GitHub
            </a>
          </div>
        </div>

        <div class="portfolio-card card4">
          <div class="portfolio-card__overlay">
            <h2 class="portfolio-card__title">Drift Calendar</h2>
            <a
              class="portfolio-card__link"
              href="https://github.com/amandathedev/drift-calendar"
            >
              GitHub
            </a>
          </div>
        </div>
        <div class="portfolio-card card5">
          <div class="portfolio-card__overlay">
            <h2 class="portfolio-card__title">Kirsten Ihns Artist Portfolio</h2>
            <a class="portfolio-card__link" href="https://www.kirsten.website">
              Publication
            </a>
            <a
              class="portfolio-card__link"
              href="https://github.com/amandathedev/kirsten-ihns-artist-portfolio"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
      {/* End portfolio cards */}
    </div>
  );
};

export default Portfolio;
