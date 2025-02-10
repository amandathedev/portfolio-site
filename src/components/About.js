import React from "react";
import "../styles/about.css";
// import openaiLogo from "../openai.png";
import amanda from "../amanda.webp";
import { BsChatSquareHeart } from "react-icons/bs";

const About = () => {
  return (
    <div id="about" className="about-div">
      {/*<h2>About Me</h2>*/}
      {/*<div className="underline"></div>*/}
      <div className="about-content">
        <img className="main-photo" src={amanda} alt="Amanda Treutler"/>

        <p className="about-text">
          Hello! I'm {" "}
          <span className="name-highlight">Amanda Treutler</span>, a Software Engineer passionate about crafting
          high-performance, accessible, and
          AI-driven web experiences. I specialize in React and Ruby on Rails, building scalable interfaces with clean
          UI/UX while optimizing backend performance and efficiency.

          <br/>
          <br/>
          Beyond professional engineering, I volunteer with <a href="https://theperiodcollective.org/">The Period
          Collective</a>,
          helping provide menstrual products to people in need in Chicago. If you're looking to collaborate on a
          project, or just want to chat about web development, AI, or accessibility, let’s connect!
          <br/>
          <br/>
          <div className="flex items-center gap-2">
            <BsChatSquareHeart className="text-2xl text-midnight-90 pr-1"/>
            Want to know more? You can ask the chatbot I built at the bottom right of your screen anything about me!
          </div>
        </p>
      </div>


      <div className="resume-section">
        <p className="resume-text">Download my resume for the full story!</p>
        <a
          className="btn resume-download-btn"
          href="https://docs.google.com/document/d/1slKxyIeMtO-0w9L6jrzH1Mld7IVqDw6Y9c4wjvDgmSQ/export?format=pdf"
          download
        >
          <i className="fas fa-cloud-download-alt"></i>
          Download Resume
        </a>
      </div>

      <div className="row languages">
        <div className="col-4 col-md-4 col-lg-2 text-center">
          <i className="fab fa-js fa-4x javascript"></i>
          <h6 className="font-weight-bold">Javascript</h6>
        </div>
        <div className="col-4 col-md-4 col-lg-2 text-center">
          <i className="fab fa-react fa-4x react"></i>
          <h6 className="font-weight-bold">React</h6>
        </div>
        <div className="col-4 col-md-4 col-lg-2 text-center">
          <i className="far fa-gem fa-4x ruby"></i>
          <h6 className="font-weight-bold">Ruby</h6>
        </div>
        <div className="col-4 col-md-4 col-lg-2 text-center">
          <i className="fab fa-node-js fa-4x node"></i>
          <h6 className="font-weight-bold">Node</h6>
        </div>
        <div className="col-4 col-md-4 col-lg-2 text-center">
          <i className="fab fa-sass fa-4x sass"></i>
          <h6 className="font-weight-bold">Sass</h6>
        </div>
        {/*<div className="col-4 col-md-4 col-lg-2 text-center">*/}
        {/*  <img src={openaiLogo} alt="OpenAI" className="openai-logo" />*/}
        {/*  <h6 className="font-weight-bold">OpenAI</h6>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default About;
