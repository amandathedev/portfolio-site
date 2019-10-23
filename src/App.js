import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <About />
      <Portfolio />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
