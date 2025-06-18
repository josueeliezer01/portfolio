import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Skills.css";
import {
  AutoAwesomeMotion,
  BarChart,
  DesignServices,
  GridView,
} from "@mui/icons-material";

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="skills">
      <div
        className="skills__text"
        data-aos="fade-up">
        <h1 className="skills__text__h1">
          My <span>Superpower</span> IsCreating Interactive Website
        </h1>
        <p className="skills__text__p">
          I’m a versatile web designer passionate about crafting beautiful,
          user-friendly sites for any purpose—whether an eCommerce storefront,
          an event page, or a product landing page. I combine creativity with
          attention to detail to deliver designs that engage visitors and drive
          results.
        </p>
      </div>

      <div className="skills__cards">
        <div
          className="skills__names light"
          data-aos="fade-up"
          data-aos-delay="600">
          <BarChart />
          <h1>UX Research</h1>
          <p>
            To give your project a kickstart, I’ll provide you detailed UX
            research.
          </p>
        </div>
        <div
          className="skills__names dark"
          data-aos="fade-up"
          data-aos-delay="500">
          <GridView />
          <h1>UI Design</h1>
          <p>
            To visualize how your website will appear, I’ll design interactive
            UI.
          </p>
        </div>
        <div
          className="skills__names light"
          data-aos="fade-up"
          data-aos-delay="400">
          <DesignServices />
          <h1>Markup Design</h1>
          <p>
            To visualize how your website will appear, I’ll design interactive
            UI.
          </p>
        </div>
        <div
          className="skills__names dark"
          data-aos="fade-up"
          data-aos-delay="300">
          <AutoAwesomeMotion />
          <h1>Prototyping Design</h1>
          <p>
            Help your developer create pixel-perfect site, I provide designs
            prototype
          </p>
        </div>
      </div>

      <div
        className="skills__button"
        data-aos="fade-up"
        data-aos-delay="500">
        <button>View All</button>
      </div>
    </div>
  );
}

export default Skills;
