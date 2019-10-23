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
            class="carousel-control-prev"
            href="#carouselExampleFade"
            role="button"
            data-slide="prev"
          >
            <span
              class="carousel-control-prev-icon carousel-icon"
              aria-hidden="true"
            ></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleFade"
            role="button"
            data-slide="next"
          >
            <span
              class="carousel-control-next-icon carousel-icon"
              aria-hidden="true"
            ></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>

      {/* Grid */}
      {/* <div class="portfolio-grid">
        <div class="item1"></div>
        <div class="item2">
          <h5>SpeakTo</h5>
          <p>Here is a description of SpeakTo.</p>
          <p>
            <strong>Built with:</strong> React, Ruby on Rails (API), Bootstrap
          </p>
        </div>
        <div class="item3">
          <h5>GrubCrud</h5>
          <p>Here is a description of GrubCrud.</p>
          <p>
            <strong>Built with:</strong> Ruby on Rails, Bootstrap
          </p>
        </div>
        <div class="item4"></div>
        <div class="item5">photo3</div>
        <div class="item6">text3</div>
      </div> */}
    </div>
  );
};

export default Portfolio;
