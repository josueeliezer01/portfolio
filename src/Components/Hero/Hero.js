import React from "react";
import "./Hero.css";
import me from "../../assets/me.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__text">
        <h1>
          Hire me to design your <span className="highlight">Website.</span>
        </h1>
        <button className="button">
          <span>Get In Touch</span>
        </button>
        <div className="network">
          <a
            href="https://www.instagram.com/j0sue_eliezer/"
            target="_blank"
            rel="noopener noreferrer">
            <InstagramIcon
              className="network__item"
              style={{ fontSize: 40, transition: "transform 0.3s" }}
            />
          </a>
          <a
            href="https://www.facebook.com/josue.eliezer.3"
            target="_blank"
            rel="noopener noreferrer">
            <FacebookIcon
              className="network__item"
              style={{ fontSize: 40, transition: "transform 0.3s" }}
            />
          </a>
          <a
            href="https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit"
            target="_blank"
            rel="noopener noreferrer">
            <LinkedInIcon
              className="network__item"
              style={{ fontSize: 40, transition: "transform 0.3s" }}
            />
          </a>
          <a
            href="https://github.com/josueeliezer01"
            target="_blank"
            rel="noopener noreferrer">
            <GitHubIcon
              className="network__item"
              style={{ fontSize: 40, transition: "transform 0.3s" }}
            />
          </a>
        </div>
      </div>
      <div className="hero__img">
        <img
          src={me}
          alt="me"
        />
        <div className="description">
          <p>- Web designer</p>
          <p>
            Hi there! I’m Josué Eliezer, a passionate web designer who loves to
            take challenges and create stunning website designs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
