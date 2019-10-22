import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <div className="about-div">
      <h2>About Me</h2>
      <div className="underline"></div>
      <img className="main-photo" src="https://i.imgur.com/PJ3SD5X.jpg"></img>
      <p className="about-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Tortor aliquam nulla facilisi cras
        fermentum. Ac orci phasellus egestas tellus rutrum tellus pellentesque.
        In nulla posuere sollicitudin aliquam.
      </p>
      <a
        class="btn btn-outline-danger"
        href="https://drive.google.com/uc?export=download&id=1X9tLL8wJjKnk6bcm8_jxiEDPZ3ifUItu"
        download
      >
        <i class="fas fa-cloud-download-alt"></i> Download My Résumé
      </a>
      {/* <div>
        <h4 className="skills-title">Skills</h4>
      </div> */}
      <div class="row languages">
        <div class="col-4 col-md-4 col-lg-2 text-center">
          <i class="fab fa-js fa-4x"></i>
          <h6 class="font-weight-bold">Javascript</h6>
        </div>
        <div class="col-4 col-md-4 col-lg-2 text-center">
          <i class="fab fa-react fa-4x"></i>
          <h6 class="font-weight-bold">React</h6>
        </div>
        <div class="col-4 col-md-4 col-lg-2 text-center">
          <i class="far fa-gem fa-4x"></i>
          <h6 class="font-weight-bold">Ruby</h6>
        </div>
        <div class="col-4 col-md-4 col-lg-2 text-center">
          <i class="fab fa-html5 fa-4x"></i>
          <h6 class="font-weight-bold">HTML</h6>
        </div>
        <div class="col-4 col-md-4 col-lg-2 text-center">
          <i class="fab fa-css3-alt fa-4x"></i>
          <h6 class="font-weight-bold">CSS</h6>
        </div>
        <div class="col-4 col-md-4 col-lg-2 text-center">
          <i class="fas fa-database fa-4x"></i>
          <h6 class="font-weight-bold">SQL</h6>
        </div>
        <div class="col-4 col-md-4 col-lg-2 text-center">
          <i class="fab fa-vuejs fa-4x"></i>
          <h6 class="font-weight-bold">Vue</h6>
        </div>
        <div class="col-4 col-md-4 col-lg-2 text-center">
          <i class="fab fa-git-alt fa-4x"></i>
          <h6 class="font-weight-bold">Git</h6>
        </div>
        <div class="col-4 col-md-4 col-lg-2 text-center">
          <i class="fab fa-sass fa-4x"></i>
          <h6 class="font-weight-bold">Sass</h6>
        </div>
        <div class="col-4 col-md-4 col-lg-2 text-center">
          <i class="fab fa-bootstrap fa-4x"></i>
          <h6 class="font-weight-bold">Bootstrap</h6>
        </div>
        <div class="col-4 col-md-4 col-lg-2 text-center">
          <i class="fab fa-node-js fa-4x"></i>
          <h6 class="font-weight-bold">Node</h6>
        </div>
        <div class="col-4 col-md-4 col-lg-2 text-center">
          <i class="fab fa-python fa-4x"></i>
          <h6 class="font-weight-bold">Python</h6>
        </div>
      </div>
      <hr></hr>
    </div>
  );
};

export default About;
