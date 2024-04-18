import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <div id="contact" className="contact-div">
      <h3>I also like to go places.</h3>
      <img src="https://i.imgur.com/QCCOvDM.png" alt="map of places I've been" className="world-map"></img>
      <h2>Contact</h2>
      <div className="underline underline-contact"></div>
      <p className="contact-p">Get in touch if you'd like to know more!</p>
      <div class="row contact">
        <div class="col-4 col-md-4 col-lg-2 text-center">
          <a href="https://github.com/amandathedev">
            <i class="fab fa-github fa-4x"></i>
          </a>
          <h6 class="font-weight-bold">GitHub</h6>
        </div>
        {/* <div class="col-4 col-md-4 col-lg-2 text-center">
          <a href="https://www.linkedin.com/in/amandatreutler/">
            <i class="fab fa-linkedin fa-4x"></i>
          </a>
          <h6 class="font-weight-bold">LinkedIn</h6>
        </div> */}
        {/* <div class="col-4 col-md-4 col-lg-2 text-center">
          <a href="https://twitter.com/amandathedev">
            <i class="fab fa-twitter fa-4x"></i>
          </a>
          <h6 class="font-weight-bold">Twitter</h6>
        </div> */}
        <div class="col-4 col-md-4 col-lg-2 text-center">
          <a href="https://medium.com/@amandathedev">
            <i class="fab fa-medium-m fa-4x"></i>
          </a>
          <h6 class="font-weight-bold">Medium</h6>
        </div>
        <div class="col-4 col-md-4 col-lg-2 text-center">
          <a href="mailto:amandathedev@gmail.com">
            <i class="fas fa-envelope-square fa-4x"></i>
          </a>
          <h6 class="font-weight-bold">Email</h6>
        </div>
        <div class="col-4 col-md-4 col-lg-2 text-center">
          <a href="https://chrome.google.com/webstore/search/amanda%20treutler">
            <i class="fab fa-chrome fa-4x"></i>
          </a>
          <h6 class="font-weight-bold">Chrome</h6>
        </div>
      </div>
    </div>
  );
};

export default Contact;
