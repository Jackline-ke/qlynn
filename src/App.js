import React from "react";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Features/>
      <Skills />
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
