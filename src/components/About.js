import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <div id="about" className="about-div">
      <h2>About Me</h2>
      <div className="underline"></div>
      <div className="about-content">
        <img className="main-photo" src="https://i.imgur.com/zsjWzPX.jpg" alt="Amanda Treutler"></img>
        <p className="about-text">
          Hello! I'm Amanda Treutler. I'm a full-stack web developer with a background in marketing and
          Linguistics. I'm passionate about creating beautiful, functional, and accessible websites. I'm 
          a lifelong learner and I'm constantly looking for new ways to improve my skills and expand my 
          knowledge. Get in touch if you'd like to work together on a project!
          <br />
          <br />
          <p>I volunteer on the board of <a href="https://theperiodcollective.org/">The Period Collective</a>, 
          helping to provide menstrual products to people in need in Chicago.</p>
        </p>
      </div>
      <a
        class="btn btn-outline-danger"
        href="https://drive.google.com/uc?export=download&id=1fSVoqv3Cb7Il47EhrmLX4wWYpy-tTt07"
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
