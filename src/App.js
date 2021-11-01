// import React, { Component } from "react";
import Contact from "./components/Contact";
import About from "./components/About";
import Work from "./components/Work"
import Skills from "./components/Skills"
import Education from "./components/Education"
import "./style.css";

const App = () => {
  return (
    <div className='style'>
    <div className="app">
      <div className= 'contact'>
      <Contact />
      </div>
      <div className="allItem">
      <About />
      <Work/>
      <Skills/>
      <Education/>
      </div>
    </div>
    </div>
  );
};

export default App;
