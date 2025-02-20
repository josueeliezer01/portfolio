import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import Skills from "./Components/Skills/Skills";
import Section from "./Components/Section/Section";

function App() {
  const gradientBg = "linear-gradient(259deg, #bf9a54 0%, #73532c 100%)";
  const whiteBg = "whitesmoke";

  return (
    <div className="app">
      <Section background={gradientBg}>
        <div className="container">
          <NavBar />
          <Hero />
        </div>
      </Section>
      <Section background={whiteBg}>
        <div className="container">
          <Skills />
        </div>
      </Section>
    </div>
  );
}

export default App;
