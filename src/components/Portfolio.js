import React from "react";
import "../styles/portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio-div">
      <h2>Portfolio</h2>
      <div className="underline"></div>

      <div className="big-screen">
        <div
          id="carouselExampleFade"
          class="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://i.imgur.com/ifUChnn.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://i.imgur.com/JAjrDdU.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://i.imgur.com/Jrg8YVm.png"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
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
      </div>
      <div class="project-descriptions">
        <div class="item1">
          <div class="card project-card">
            <div class="card-body project-card-body">
              <h5 class="card-title project-card-title">SpeakTo</h5>
              <h6 class="card-subtitle project-card-subtitle mb-2 text-muted">
                Built with: React, Ruby on Rails, Bootstrap
              </h6>
              <p class="card-text project-card-text">
                A scheduling platform for students to browse teachers and their
                availabilities and to leave ratings. Allows teachers and
                students to coordinate and arrange online lessons.
              </p>
              <a
                href="http://www.speakto.io"
                class="card-link project-card-link"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/amandathedev/speakto-frontend"
                class="card-link project-card-link"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div class="item2">
          {" "}
          <div class="card project-card">
            <div class="card-body project-card-body">
              <h5 class="card-title project-card-title">GrubCRUD</h5>
              <h6 class="card-subtitle project-card-subtitle mb-2 text-muted">
                Built with: Ruby on Rails, SCSS, erb
              </h6>
              <p class="card-text project-card-text">
                App for users to easily browse local restaurants or types of
                cuisines. Users can view restaurant menus, place food orders via
                a shopping cart function, and view their order history.
              </p>
              <a
                href="https://grubcrud.herokuapp.com/"
                class="card-link project-card-link"
              >
                Live demo
              </a>
              <a
                href="https://github.com/amandathedev/grubcrud"
                class="card-link project-card-link"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div class="item3">
          {" "}
          <div class="card project-card">
            <div class="card-body project-card-body">
              <h5 class="card-title project-card-title">Drift Calendar</h5>
              <h6 class="card-subtitle project-card-subtitle mb-2 text-muted">
                Built with: JavaScript, jQuery
              </h6>
              <p class="card-text project-card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="card-link project-card-link">
                Card link
              </a>
              <a href="#" class="card-link project-card-link">
                Another link
              </a>
            </div>
          </div>
        </div>
        <div class="item4">
          {" "}
          <div class="card project-card">
            <div class="card-body project-card-body">
              <h5 class="card-title project-card-title">
                Calligraphy Portfolio
              </h5>
              <h6 class="card-subtitle project-card-subtitle mb-2 text-muted">
                Built with: HTML, CSS
              </h6>
              <p class="card-text project-card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="card-link project-card-link">
                Card link
              </a>
              <a href="#" class="card-link project-card-link">
                Another link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
