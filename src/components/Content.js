import React, { Component } from "react";
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
        <button class="btn draw">Learn More</button>
        {/* Background animation */}
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>
      </div>
    );
  }
}
