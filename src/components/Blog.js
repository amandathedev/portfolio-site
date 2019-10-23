import React from "react";
import "../styles/blog.css";

const Blog = () => {
  return (
    <div className="blog-div">
      <h2>Blog</h2>
      <div className="underline"></div>
      <div class="card-group blog-card-group">
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
              program that I had no choice but to...
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
            <p class="card-text blog-card-text">
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
            <p class="card-text blog-card-text">
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
      <div class="card-group">
        <div class="card">
          <a href="https://medium.com/@amandathedev/react-lazy-a52f193c6a4d">
            <img
              src="https://images.unsplash.com/photo-1519834411415-51492bcd6027?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1624&q=80"
              class="card-img-top blog-card-img"
              alt="..."
            />
          </a>
          <div class="card-body">
            <h5 class="card-title blog-card-title">React.lazy</h5>
            <p class="card-text blog-card-text">
              When you build a React application, your component structure can
              quickly become rather large and extensive. Dividing various
              functionality into separate components and files is a good way to
              keep things organized...
            </p>
            <p class="card-text">
              <small class="text-muted">September 8, 2019</small>
            </p>
          </div>
        </div>
        <div class="card">
          <a href="https://medium.com/@amandathedev/css-color-systems-d07e12fe2288">
            <img
              src="https://images.unsplash.com/photo-1464692805480-a69dfaafdb0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              class="card-img-top blog-card-img"
              alt="..."
            />
          </a>
          <div class="card-body">
            <h5 class="card-title blog-card-title">CSS Color Systems</h5>
            <p class="card-text blog-card-text">
              There are 140 pre-defined names that can be used across platforms
              to display a color. These are obviously limited as they cannot be
              customized, but it’s useful to learn some color names for simple
              projects...
            </p>
            <p class="card-text">
              <small class="text-muted">August 22, 2019</small>
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
              effectiveness of the form_for tag for creating forms in your web
              app. As a more streamlined alternative to the capabilities offered
              by form_tag...
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
