import React from "react";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-content">
      <nav class="navbar navbar-expand-lg">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#">
              HOME <span class="sr-only">(current)</span>
            </a>
            <a class="nav-item nav-link" href="#about">
              ABOUT
            </a>
            <a class="nav-item nav-link" href="#portfolio">
              PORTFOLIO
            </a>
            <a class="nav-item nav-link" href="#blog">
              BLOG
            </a>
            <a class="nav-item nav-link" href="#contact">
              CONTACT
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
