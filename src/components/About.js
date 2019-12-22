import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <div id="about" className="about-div">
      <h2>About Me</h2>
      <div className="underline"></div>
      <img className="main-photo" src="https://i.imgur.com/PJ3SD5X.jpg"></img>
      <p className="about-text">
        Hello! I'm Amanda Treutler. I'm a recent graduate of the immersive
        software engineering program at Flatiron School. I developed an interest
        in computer programming when I was working on my Master's thesis, which
        focused on computational Linguistics. After grad school I was traveling
        the world but always trying to learn to code in my free time. I decided
        to follow my passion and make programming a full-time career.
      </p>
      <a
        class="btn btn-outline-danger"
        href="https://drive.google.com/uc?export=download&id=1X9tLL8wJjKnk6bcm8_jxiEDPZ3ifUItu"
        download
      >
        <i class="fas fa-cloud-download-alt"></i> Download My Résumé
      </a>
      <div class="row languages">
        <div class="col-4 col-md-4 col-lg-2 text-center">
          <i class="fab fa-js fa-4x javascript"></i>
          <h6 class="font-weight-bold">Javascript</h6>
        </div>
        <div class="col-4 col-md-4 col-lg-2 text-center">
          <i class="fab fa-react fa-4x react"></i>
          <h6 class="font-weight-bold">React</h6>
        </div>
        <div class="col-4 col-md-4 col-lg-2 text-center">
          <i class="far fa-gem fa-4x ruby"></i>
          <h6 class="font-weight-bold">Ruby</h6>
        </div>
        <div class="col-4 col-md-4 col-lg-2 text-center">
          <i class="fab fa-html5 fa-4x html"></i>
          <h6 class="font-weight-bold">HTML</h6>
        </div>
        <div class="col-4 col-md-4 col-lg-2 text-center">
          <i class="fab fa-css3-alt fa-4x css"></i>
          <h6 class="font-weight-bold">CSS</h6>
        </div>
        <div class="col-4 col-md-4 col-lg-2 text-center">
          <i class="fas fa-database fa-4x sql"></i>
          <h6 class="font-weight-bold">SQL</h6>
        </div>
        <div class="col-4 col-md-4 col-lg-2 text-center">
          <i class="fab fa-vuejs fa-4x vue"></i>
          <h6 class="font-weight-bold">Vue</h6>
        </div>
        <div class="col-4 col-md-4 col-lg-2 text-center">
          <i class="fab fa-git-alt fa-4x git"></i>
          <h6 class="font-weight-bold">Git</h6>
        </div>
        <div class="col-4 col-md-4 col-lg-2 text-center">
          <i class="fab fa-sass fa-4x sass"></i>
          <h6 class="font-weight-bold">Sass</h6>
        </div>
        <div class="col-4 col-md-4 col-lg-2 text-center">
          <i class="fab fa-bootstrap fa-4x bootstrap"></i>
          <h6 class="font-weight-bold">Bootstrap</h6>
        </div>
        <div class="col-4 col-md-4 col-lg-2 text-center">
          <i class="fab fa-node-js fa-4x node"></i>
          <h6 class="font-weight-bold">Node</h6>
        </div>
        <div class="col-4 col-md-4 col-lg-2 text-center">
          <i class="fab fa-python fa-4x python"></i>
          <h6 class="font-weight-bold">Python</h6>
        </div>
      </div>
    </div>
  );
};

export default About;
