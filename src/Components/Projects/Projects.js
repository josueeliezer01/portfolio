import { useEffect, useRef, useState } from "react";
import "./Projects.css";

// Exemplo de dados de projetos; para adicionar novos projetos, basta incluir neste array
const projects = [
  {
    name: "Delícias Caseiras",
    type: "E-commerce",
    url: "https://delicias-caseiras-ba191.web.app",
    images: [
      require("../../assets/delicias-caseiras1.png"),
      require("../../assets/delicias-caseiras2.png"),
    ],
  },
  {
    name: "LinkedIn Clone",
    type: "Social Media",
    url: "https://linkedin-clone-yt-a6c97.web.app",
    images: [
      require("../../assets/linkedin1.png"),
      require("../../assets/linkedin2.png"),
    ],
  },
  {
    name: "Quinta da Magarenha",
    type: "Landing Page",
    url: "https://josueeliezer01.github.io/restaurant/",
    images: [
      require("../../assets/quinta-da-magarenha1.png"),
      require("../../assets/quinta-da-magarenha2.png"),
    ],
  },
  // Adicione novos projetos aqui
];

const Projects = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`projects-section ${visible ? "enter" : ""}`}>
      <h2 className="projects-title">Meus Projetos Recentes</h2>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <a
            key={idx}
            href={proj.url}
            className="project-link"
            target="_blank"
            rel="noopener noreferrer">
            <div className="project-card">
              <div className="card-image-wrapper">
                <img
                  src={proj.images[0]}
                  alt={`${proj.name} screenshot 1`}
                  className="card-image card-image-primary"
                />
                <img
                  src={proj.images[1]}
                  alt={`${proj.name} screenshot 2`}
                  className="card-image card-image-secondary"
                />
              </div>
              <div className="card-info">
                <h3 className="project-name">{proj.name}</h3>
                <p className="project-type">{proj.type}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
