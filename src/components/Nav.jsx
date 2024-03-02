import "../styles/Nav.css";
import "../styles/App.css";
import { useRef } from "react";
import { HashLink } from "react-router-hash-link";
import { FaBars, FaTimes } from "react-icons/fa";
import github from "../../public/images/github.png";
import linkedin from "../../public/images/linkedin.png";
import contact from "../../public/images/contact.png";

function Nav() {
  const navRef = useRef();

  const showNav = () => {
    navRef.current.classList.toggle("responsive_nav");
    console.log(navRef);
  };

  return (
    <header>
      <nav ref={navRef}>
        <HashLink to="#about-me" smooth className="nav-text">
          About Me
        </HashLink>
        <HashLink to="#portfolio" smooth className="nav-text">
          Portfolio
        </HashLink>
        <HashLink to="#resume" smooth className="nav-text">
          Resume
        </HashLink>
        <HashLink to="#contact" smooth className="icons">
          <img src={contact}></img>
        </HashLink>
        <a
          className="icons"
          href="https://www.linkedin.com/in/allison-serrano-2792001b4/"
        >
          <img src={linkedin}></img>
        </a>
        <a className="icons" href="https://github.com/Allicris">
          <img src={github}></img>
        </a>
        <button onClick={showNav} className="nav-btn nav-close-btn">
          <FaTimes />
        </button>
      </nav>
      <button onClick={showNav} className="nav-btn">
        <FaBars />
      </button>
    </header>
  );
}

export default Nav;
