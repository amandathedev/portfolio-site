import React from "react";
import "../styles/blog.css";

const Blog = () => {
  return (
    <div id="blog" className="blog-div">
      <h2>Blog</h2>
      <div className="underline"></div>
      <div class="card-group blog-card-group">
        <div class="card">
          <a href="https://levelup.gitconnected.com/how-to-solve-an-anagram-algorithm-using-a-frequency-counter-5bb1f0b817ef?source=friends_link&sk=ba35bb0ca601145b6f7e7dc5803eaed3">
            <img
              src="https://miro.medium.com/max/8576/1*t-T2d675Vgk1yWKjmgi7mw.jpeg"
              class="card-img-top blog-card-img"
              alt="..."
            />
          </a>
          <div class="card-body">
            <h5 class="card-title blog-card-title">
              How to Solve an Anagram Algorithm Using a Frequency Counter
            </h5>
            <p class="card-text">
              If you’re learning how to solve algorithms, maybe in preparation
              for a technical interview...
            </p>
            <p class="card-text">
              <small class="text-muted">December 20, 2019</small>
            </p>
          </div>
        </div>
        <div class="card">
          <a href="https://levelup.gitconnected.com/css-specificity-made-simple-772f1d31f094?source=friends_link&sk=bac87b411006b8c9f8782cac24bff1e3">
            <img
              src="https://miro.medium.com/max/3306/1*My76DdZgPsE4kwm-xz0_dQ.jpeg"
              class="card-img-top blog-card-img"
              alt="..."
            />
          </a>
          <div class="card-body">
            <h5 class="card-title blog-card-title">
              CSS Specificity Made Simple
            </h5>
            <p class="card-text blog-card-text">
              If you’ve ever tried to apply a new CSS style to an element only
              to find...
            </p>
            <p class="card-text">
              <small class="text-muted">December 14, 2019</small>
            </p>
          </div>
        </div>
        <div class="card">
          <a href="https://levelup.gitconnected.com/the-basics-of-web-design-accessibility-af8b642124c4?source=friends_link&sk=0d0cb4493dbcaf433912657a8597605f">
            <img
              src="https://miro.medium.com/max/8000/1*3WCYpTHTTlfXaDB7yErlow.jpeg"
              class="card-img-top blog-card-img"
              alt="..."
            />
          </a>
          <div class="card-body">
            <h5 class="card-title blog-card-title">
              The Basics of Web Design Accessibility
            </h5>
            <p class="card-text blog-card-text">
              When you’re building a website, you might be focused on some of
              the exciting...
            </p>
            <p class="card-text">
              <small class="text-muted">December 7, 2019</small>
            </p>
          </div>
        </div>
      </div>
      <div class="card-group">
        <div class="card">
          <a href="https://levelup.gitconnected.com/building-a-chrome-extension-in-react-in-10-minutes-737023fa4918?source=friends_link&sk=dabe44713a926fabd6f4181e028cb146">
            <img
              src="https://miro.medium.com/max/8576/1*0H3ygbXmDR0X0R-7agiZNQ.jpeg"
              class="card-img-top blog-card-img"
              alt="..."
            />
          </a>
          <div class="card-body">
            <h5 class="card-title blog-card-title">
              Building a Chrome Extension in React in 10 Minutes
            </h5>
            <p class="card-text blog-card-text">
              Creating a Google Chrome browser extension can be a fun and unique
              project...
            </p>
            <p class="card-text">
              <small class="text-muted">November 23, 2019</small>
            </p>
          </div>
        </div>
        <div class="card">
          <a href="https://medium.com/swlh/what-i-wish-someone-had-told-me-before-starting-a-coding-boot-camp-ccbdfe9ddf60?source=friends_link&sk=4f4d4c6a6128a799e39d7f42b8d15aa3">
            <img
              src="https://miro.medium.com/max/4180/1*4ktzHABKbH_iHtcurespRQ.jpeg"
              class="card-img-top blog-card-img"
              alt="..."
            />
          </a>
          <div class="card-body">
            <h5 class="card-title blog-card-title">
              What I wish someone had told me before starting a coding boot camp
            </h5>
            <p class="card-text blog-card-text">
              I know this seems obvious. I enrolled in an immersive boot camp,
              after all...
            </p>
            <p class="card-text">
              <small class="text-muted">October 21, 2019</small>
            </p>
          </div>
        </div>
        <div class="card">
          <a href="https://medium.com/@amandathedev/the-demise-of-form-for-11905643e97b">
            <img
              src="https://images.unsplash.com/photo-1518006821190-bb4ad1d1f23d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2040&q=80"
              class="card-img-top blog-card-img"
              alt="..."
            />
          </a>
          <div class="card-body">
            <h5 class="card-title blog-card-title">The Demise of form_for</h5>
            <p class="card-text blog-card-text">
              Any new Rails developer will come to appreciate the simplicity and
              effectiveness...
            </p>
            <p class="card-text">
              <small class="text-muted">August 1, 2019</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
