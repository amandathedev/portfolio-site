import React, { Component } from "react";
import About from "./About";
import "../styles/content.css";

export default class Content extends Component {
  render() {
    return (
      <div>
        <h1>
          {/* <i class="fas fa-chevron-right"></i> */}
          AMANDA TREUTLER
        </h1>
        <h4>Software Engineer</h4>
        <button className="btn draw">Learn More</button>
        {/* Background animation */}
        <div className="background-animation">
          <div className="bg"></div>
          <div className="bg bg2"></div>
          <div className="bg bg3"></div>
        </div>
        <About />
      </div>
    );
  }
}
