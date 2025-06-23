// Hero.jsx
import "./Hero.css";
import me from "../../assets/me.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useState } from "react";

function Hero() {
  const [showDesc, setShowDesc] = useState(false);

  const handleWhatsApp = () => {
    const phone = "351915907925";
    const text = encodeURIComponent("Olá Josué!");
    const url = `https://wa.me/${phone}?text=${text}`;
    window.open(url, "_blank");
  };

  return (
    <div className="hero">
      <div className="hero__text">
        <h1>
          Hire me to design your <span className="highlight">Website.</span>
        </h1>
        <button
          className="button"
          onClick={handleWhatsApp}
          aria-label="Contact via WhatsApp"
          title="Contact via WhatsApp"
        >
          <span>Get In Touch</span>
        </button>
        <div className="network">
          <a
            href="https://www.instagram.com/j0sue_eliezer/"
            target="_blank"
            rel="noopener noreferrer">
            <InstagramIcon
              className="network__item"
              style={{ fontSize: "35px" }}
            />
          </a>
          <a
            href="https://www.facebook.com/josue.eliezer.3"
            target="_blank"
            rel="noopener noreferrer">
            <FacebookIcon
              className="network__item"
              style={{ fontSize: "35px" }}
            />
          </a>
          <a
            href="https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit"
            target="_blank"
            rel="noopener noreferrer">
            <LinkedInIcon
              className="network__item"
              style={{ fontSize: "35px" }}
            />
          </a>
          <a
            href="https://github.com/josueeliezer01"
            target="_blank"
            rel="noopener noreferrer">
            <GitHubIcon
              className="network__item"
              style={{ fontSize: "35px" }}
            />
          </a>
        </div>
      </div>

      <div className="hero__img-container">
        <img
          src={me}
          alt="me"
          className="hero__img"
        />

        {/* Botão de informação para mobile */}
        <button
          className="info-toggle"
          onClick={() => setShowDesc((v) => !v)}
          aria-label="Mais informações">
          <InfoOutlinedIcon fontSize="large" />
        </button>

        {/* Descrição deslizante */}
        <div className={`description ${showDesc ? "visible" : ""}`}>
          <p className="description__title">Web Designer | Josué Eliezer</p>
          <p>
            Hello! I’m Josué Eliezer—a passionate web designer who loves turning
            ideas into memorable online experiences. From elegant eCommerce
            stores and captivating event pages to sleek product landing sites, I
            embrace every challenge to craft pixel‑perfect designs that:
            <br />
            🎨 Combine striking visuals com intuitive usability
            <br />
            📈 Engage audiences e boost conversions
            <br />
            🌐 Adapt flawlessly across all devices
            <br />
            Ready to elevate your web presence?
            <br />
            Let’s make it happen!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
