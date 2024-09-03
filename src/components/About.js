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
          Hello! I'm Amanda Treutler. Get in touch if you'd like to work together on a project or if you have a social justice cause that needs a website.
          <br />
          <br />
          <p>I volunteer with <a href="https://theperiodcollective.org/">The Period Collective</a> 
          {' '}helping to provide menstrual products to people in need in Chicago.</p>
        </p>
      </div>
      {/*<p className="about-text">Download my resume below for the full story!</p>*/}
      {/*<a*/}
      {/*  class="btn btn-outline-danger"*/}
      {/*  href="https://drive.google.com/uc?export=download&id=14le7Z-00BUBbF0lI8_015DzGZ87Pbb-v"*/}
      {/*  download*/}
      {/*>*/}
      {/*  <i class="fas fa-cloud-download-alt"></i> Download*/}
      {/*</a>*/}
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
          <i class="fab fa-node-js fa-4x node"></i>
          <h6 class="font-weight-bold">Node</h6>
        </div>
        <div class="col-4 col-md-4 col-lg-2 text-center">
          <i class="fab fa-sass fa-4x sass"></i>
          <h6 class="font-weight-bold">Sass</h6>
        </div>
      </div>
    </div>
  );
};

export default About;
