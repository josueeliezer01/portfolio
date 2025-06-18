import { useState, useEffect } from "react";
import "./NavBar.css";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu_icon.png";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav ${sticky ? "dark-nav" : ""}`}>
      <div className="nav__logo">
        <img
          src={logo}
          alt="logo"
        />
        <p className="nav__p">Josué Eliezer</p>
      </div>
      <div className={`nav__bar ${isOpen ? "open" : ""}`}>
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#case-study">Case Study</a>
            </li>
            <li>
              <a href="#testimonial">Testimonial</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
          </ul>
        </nav>
      </div>
      <img
        src={menu_icon}
        alt="menu icon"
        className={`nav__toggle ${isOpen ? "open" : ""}`}
        onClick={handleToggle}
      />
    </div>
  );
}

export default NavBar;
