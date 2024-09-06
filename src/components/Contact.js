import React from "react";
import "../styles/contact.css";

const Contact = () => {
  return (
    <div id="contact" className="contact-div">
      <h3>I also like to go places.</h3>
      <img src="https://i.imgur.com/QCCOvDM.png" alt="map of places I've been" className="world-map" />
      <h2>Contact</h2>
      <div className="underline underline-contact"></div>
      <p className="contact-p">Get in touch if you'd like to know more!</p>
      <div className="row contact">
        <div className="col-4 col-md-4 col-lg-2 text-center">
          <a href="https://github.com/amandathedev">
            <i className="fab fa-github fa-4x"></i>
          </a>
          <h6 className="font-weight-bold">GitHub</h6>
        </div>
        {/*
        <div className="col-4 col-md-4 col-lg-2 text-center">
          <a href="https://www.linkedin.com/in/amandatreutler/">
            <i className="fab fa-linkedin fa-4x"></i>
          </a>
          <h6 className="font-weight-bold">LinkedIn</h6>
        </div>
        */}
        {/*
        <div className="col-4 col-md-4 col-lg-2 text-center">
          <a href="https://twitter.com/amandathedev">
            <i className="fab fa-twitter fa-4x"></i>
          </a>
          <h6 className="font-weight-bold">Twitter</h6>
        </div>
        */}
        <div className="col-4 col-md-4 col-lg-2 text-center">
          <a href="https://medium.com/@amandathedev">
            <i className="fab fa-medium-m fa-4x"></i>
          </a>
          <h6 className="font-weight-bold">Medium</h6>
        </div>
        <div className="col-4 col-md-4 col-lg-2 text-center">
          <a href="mailto:amandathedev@gmail.com">
            <i className="fas fa-envelope-square fa-4x"></i>
          </a>
          <h6 className="font-weight-bold">Email</h6>
        </div>
        <div className="col-4 col-md-4 col-lg-2 text-center">
          <a href="https://chrome.google.com/webstore/search/amanda%20treutler">
            <i className="fab fa-chrome fa-4x"></i>
          </a>
          <h6 className="font-weight-bold">Chrome</h6>
        </div>
      </div>
    </div>
  );
};

export default Contact;
