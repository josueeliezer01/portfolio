import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import Section from "./Components/Section/Section";
import Projects from "./Components/Projects/Projects";

function App() {
  const gradientBg =
    "linear-gradient(45deg, hsl(none 0% 40%), hsl(none 0% 94.9%))";
  const whiteBg = "whitesmoke";

  return (
    <div className="app">
      <Section
        background={gradientBg}
        id="presentation">
        <div className="container">
          <NavBar />
          <Hero />
        </div>
      </Section>
      <Section
        background={whiteBg}
        id="projects">
        <div className="container">
          <Projects />
        </div>
      </Section>
      <Section
        background={gradientBg}
        id="">
        <div className="container"></div>
      </Section>
    </div>
  );
}

export default App;
