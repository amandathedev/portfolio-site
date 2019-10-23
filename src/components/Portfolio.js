import React from "react";
import "../styles/portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio-div">
      <h2>Portfolio</h2>
      <div className="underline"></div>

      {/* Grid */}
      <div class="portfolio-grid">
        <div class="item1">
          {" "}
          <div class="computer-1">
            <div class="computer-screen">
              <div class="computer-screen-1"></div>
            </div>
          </div>
        </div>
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
      </div>
    </div>
  );
};

export default Portfolio;
