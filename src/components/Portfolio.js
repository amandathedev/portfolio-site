import React from "react";
import "../styles/portfolio.css";

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio-div">
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
      {/* <h1 className="example">Example</h1> */}
      <div class="card-group portfolio-card-group">
        <div class="card portfolio-card">
          <a href="">
            <img
              src="https://i.imgur.com/ifUChnn.png"
              class="card-img-top portfolio-card-img"
              alt="..."
            />
          </a>
          <div class="card-body">
            <h5 class="card-title">SpeakTo</h5>
            <h6>Built with: React, Ruby on Rails, Bootstrap</h6>
            <p class="card-text">
              A scheduling platform for students to browse teachers and their
              availabilities and to leave ratings. Allows teachers and students
              to coordinate and arrange online lessons.
            </p>
            <p class="card-text">
              <a href="www.speakto.io">Live Demo</a>
              <span> | </span>
              <a href="https://github.com/amandathedev/speakto-frontend">
                {" "}
                GitHub
              </a>
            </p>
          </div>
        </div>
        <div class="card portfolio-card">
          <a href="">
            <img
              src="https://i.imgur.com/JAjrDdU.png"
              class="card-img-top portfolio-card-img"
              alt="..."
            />
          </a>
          <div class="card-body">
            <h5 class="card-title">GrubCRUD</h5>
            <h6>Built with: Ruby on Rails, SCSS, erb</h6>
            <p class="card-text">
              App for users to easily browse local restaurants or types of
              cuisines. Users can view restaurant menus, place food orders via a
              shopping cart function, and view their order history.
            </p>
            <p class="card-text">
              <a href="https://grubcrud.herokuapp.com/">Live Demo</a>
              <span> | </span>
              <a href="https://github.com/amandathedev/grubcrud"> GitHub</a>
            </p>
          </div>
        </div>
        <div class="card-group portfolio-card-group">
          <div class="card portfolio-card">
            <a href="">
              <img
                src="https://i.imgur.com/F75dN6c.png"
                class="card-img-top portfolio-card-img"
                alt="..."
              />
            </a>
            <div class="card-body">
              <h5 class="card-title">Drift Calendar</h5>
              <h6>Built with: Javascript, jQuery</h6>
              <p class="card-text">DO THIS DO THIS DO THIS</p>
              <p class="card-text">
                <a>Demo</a>
                <span> | </span>
                <a href="https://github.com/amandathedev/drift-calendar">
                  {" "}
                  GitHub
                </a>
              </p>
            </div>
          </div>
          <div class="card portfolio-card">
            <a href="">
              <img
                src="https://i.imgur.com/Jrg8YVm.png"
                class="card-img-top portfolio-card-img"
                alt="..."
              />
            </a>
            <div class="card-body">
              <h5 class="card-title">Calligraphy Portfolio</h5>
              <h6>Built with: HTML, pure CSS</h6>
              <p class="card-text">DO THIS DO THIS DO THIS</p>
              <p class="card-text">
                <a>Demo</a>
                <span> | </span>
                <a href="https://github.com/amandathedev/calligraphy-portfolio">
                  {" "}
                  GitHub
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
