import React from "react";
import Features from "./components/Features";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Features/>
      <Skills />
    </div>
  );
}

export default App;
