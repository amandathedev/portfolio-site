import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <About />
      <Portfolio />
      <Blog />
    </div>
  );
}

export default App;
