import React from "react";
import "../styles/blog.css";

const Blog = () => {
  return (
    <div className="blog-div">
      <div class="card-group">
        <div class="card">
          <a href="https://medium.com/swlh/what-i-wish-someone-had-told-me-before-starting-a-coding-boot-camp-ccbdfe9ddf60">
            <img
              src="https://miro.medium.com/max/3762/1*4ktzHABKbH_iHtcurespRQ.jpeg"
              class="card-img-top blog-card-img"
              alt="..."
            />
          </a>
          <div class="card-body">
            <h5 class="card-title blog-card-title">
              What I wish someone had told me before starting a coding boot camp
            </h5>
            <p class="card-text">
              I graduated from the full-time software engineering boot camp at
              Flatiron School two weeks ago. It was an immersive, in-person
              program that I had no choice but to devote my entire life to for
              15 weeks...
            </p>
            <p class="card-text">
              <small class="text-muted">October 21, 2019</small>
            </p>
          </div>
        </div>
        <div class="card">
          <a href="https://medium.com/@amandathedev/connecting-your-heroku-project-to-your-custom-google-domain-5fe5d1e6ab89">
            <img
              src="https://images.unsplash.com/photo-1511649475669-e288648b2339?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              class="card-img-top blog-card-img"
              alt="..."
            />
          </a>
          <div class="card-body">
            <h5 class="card-title blog-card-title">
              Connecting your Heroku project to your custom Google domain
            </h5>
            <p class="card-text">
              If you don’t want your website to be found at a Heroku URL, it’s
              pretty easy to choose your own domain and connect it to the Heroku
              project. Follow this simple guide...
            </p>
            <p class="card-text">
              <small class="text-muted">October 19, 2019</small>
            </p>
          </div>
        </div>
        <div class="card">
          <a href="https://medium.com/swlh/a-simple-guide-to-deploying-on-heroku-rails-api-react-js-a73ccd9cbf26">
            <img
              src="https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
              class="card-img-top blog-card-img"
              alt="..."
            />
          </a>
          <div class="card-body">
            <h5 class="card-title blog-card-title">
              A Simple Guide to Deploying on Heroku (Rails API/React JS)
            </h5>
            <p class="card-text">
              When I first tried to deploy my own web app on Heroku, I struggled
              with conflicting tutorials and a process that didn’t feel
              intuitive for a first-time user...
            </p>
            <p class="card-text">
              <small class="text-muted">October 11, 2019</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
