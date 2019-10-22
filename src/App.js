import React from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <About />
      <Portfolio />
    </div>
  );
}

export default App;
