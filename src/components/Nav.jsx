import "../styles/Nav.css";
import { HashLink } from "react-router-hash-link";
import github from "../../public/images/github.png";
import linkedin from "../../public/images/linkedin.png";
import contact from "../../public/images/contact.png";

function NavTabs() {
  return (
    <div className="nav-bar">
      <div className="nav-text">
      <ul>
        <li>
          <HashLink to="#about-me" smooth>About Me</HashLink>
        </li>
        <li>
          <HashLink to="#portfolio" smooth>Portfolio</HashLink>
        </li>
        <li>
          <HashLink to="#resume" smooth>Resume</HashLink>
        </li>
      </ul>
      </div>
      <div className='icons'>
      <ul>
      <li>
          <HashLink to="#contact" smooth><img src={contact}></img></HashLink>
        </li>
      <li>
          <a href="https://www.linkedin.com/in/allison-serrano-2792001b4/">
            <img src={linkedin}></img>
          </a>
        </li>
        <li>
          <a href="https://github.com/Allicris">
            <img src={github}></img>
          </a>
        </li>
      </ul>
      </div>
    </div>
  );
}

export default NavTabs;
