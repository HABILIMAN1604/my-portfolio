import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import BeyondTech from "./components/BeyondTech";
import Footer from "./components/Footer";
import './App.css'
import './responsive.css'

function App() {
    return (
    <>
      <Header />
      <Hero />
      <Skills />
      <Projects/>
      <Education/>
      <BeyondTech/>
      <Footer />
    </>
  );
}

export default App;
